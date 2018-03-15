declare module 'mollie-api' {
    import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

    export class Mollie {
        customers: Customers;
        private http;
        constructor(config: MollieConfig, axiosConfig?: Partial<AxiosRequestConfig>);
    }

    /**
     * This class takes care of all customer methods.
     */
    export class Customers {
        private http;
        constructor(http: AxiosInstance);
        create(data: CustomerInput): AxiosPromise<CustomerResponse>;
        delete(customerId: string): AxiosPromise;
        get(customerId: string): AxiosPromise<CustomerResponse>;
        list(paginate: PaginationInput): AxiosPromise<CustomerList>;
        update(customerId: string, data: CustomerInput): AxiosPromise<CustomerResponse>;
    }

    export interface CustomerInput {
        name?: string;
        email?: string;
        locale?: string;
        metadata?: {
            [k: string]: string;
        };
        testmode?: boolean;
    }
    export interface CustomerResponse {
        resource: string;
        id: string;
        mode?: string;
        name: string | null;
        email: string | null;
        locale: string | null;
        metadata?: {
            [k: string]: string;
        } | null;
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
}
