export interface MollieConfig {

    /**
     * Your live or test API key.
     */
    apiKey: string;

    /**
     * @default https://api.mollie.com/
     */
    endpoint?: string;

    /**
     * @default v1
     */
    version?: string;
}

export interface PaginationInput {

    /**
     * The number of objects to skip.
     */
    offset?: number;

    /**
     * The number of objects to return, maximum 250.
     */
    count?: number;
}

export interface PaginationLinks {
    previous: string | null;
    next: string | null;
    first: string | null;
    last: string | null;
}

export type Status =
    'pending' | 'active' | 'cancelled' | 'suspended' | 'completed';
