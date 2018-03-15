import { PaginationLinks } from '../mollie.interface';

export interface CustomerInput {
    name?: string;
    email?: string;
    locale?: string;
    metadata?: {[k: string]: string};
    testmode?: boolean;
}

export interface CustomerResponse {
    resource: string;
    id: string;
    mode?: string;
    name: string | null;
    email: string | null;
    locale: string | null;
    metadata?: {[k: string]: string} | null;
    /**
     * Payment methods that the customer recently used for payments.
     */
    recentlyUsedMethods: Array<string>;
    /**
     * The customer record's date and time of creation, in ISO 8601 format.
     */
    createdDatetime: string;
}

export interface CustomerList {
    totalCount: number;
    offset: number;
    count: number;
    data: Array<CustomerResponse>;
    links?: PaginationLinks;
}
