// lib/callApi.ts

// Response shape
interface APIResponse<T> {
    statusCode: number;
    response: T | null;
    error: string | null;
}

// Config
const BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.API_BASE_URL ??
    "";

const DEFAULT_HEADERS: HeadersInit = {
    "Content-Type": "application/json",
};

const MAX_API_RETRY_COUNT = 2;

// Retry-eligible status codes — server errors and rate limits only
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);

// Core
export default async function callAPI<T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    headers: HeadersInit = {},
    body: unknown = null,
    retryCount: number = 0
): Promise<APIResponse<T>> {
    const fullUrl = `${BASE_URL}${url}`;

    const mergedHeaders: HeadersInit = {
        ...DEFAULT_HEADERS,
        ...headers,
    };

    const fetchOptions: RequestInit = {
        method,
        headers: mergedHeaders,
        ...(body !== null ? { body: JSON.stringify(body) } : {}),
    };

    try {
        const response = await fetch(fullUrl, fetchOptions);

        // Parse body — gracefully handle empty responses (e.g. 204 No Content)
        const text = await response.text();
        let parsed: T | null = null;

        if (text) {
            try {
                parsed = JSON.parse(text) as T;
            } catch {
                parsed = text as unknown as T;
            }
        }

        // Retry on transient server-side errors
        if (RETRYABLE_STATUS_CODES.has(response.status) && retryCount < MAX_API_RETRY_COUNT) {
            return callAPI<T>(url, method, headers, body, retryCount + 1);
        }

        // Failure
        if (!response.ok) {
            const errorMessage =
                (parsed as Record<string, string>)?.message ??
                (parsed as Record<string, string>)?.error ??
                `Request failed with status ${response.status}`;

            return {
                statusCode: response.status,
                response: null,
                error: errorMessage,
            };
        }

        // Success
        return {
            statusCode: response.status,
            response: parsed,
            error: null,
        };
    } catch (err) {
        // Network-level failure — retry if budget allows
        if (retryCount < MAX_API_RETRY_COUNT) {
            return callAPI<T>(url, method, headers, body, retryCount + 1);
        }

        const message = err instanceof Error ? err.message : "An unexpected error occurred";

        return {
            statusCode: 0,
            response: null,
            error: message,
        };
    }
}