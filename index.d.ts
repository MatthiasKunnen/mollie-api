declare module 'mollie-api' {
    import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

    export class Mollie {
        customers: Customers;
        subscriptions: Subscriptions;
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
        list(paginate?: PaginationInput): AxiosPromise<CustomerList>;
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

    export class Subscriptions {
        constructor(http: AxiosInstance);
        cancel(customerId: string, subscriptionId: string): AxiosPromise;
        create(customerId: string, data: SubscriptionInput): AxiosPromise<SubscriptionResponse>;
        get(customerId: string, subscriptionId: string): AxiosPromise<SubscriptionResponse>;
        list(customerId: string, paginate?: PaginationInput): AxiosPromise<SubscriptionList>;
    }

    export interface SubscriptionInput {
        amount: number;
        /**
         * Total number of charges for the subscription to complete. Leave empty for
         * an ongoing subscription.
         */
        times?: number;
        /**
         * Interval to wait between charges. E.g. 1 month(s), 14 days
         */
        interval: string;
        /**
         * An optional start date for the subscription in yyyy-mm-dd format.
         */
        startDate?: string;
        /**
         * A description unique per customer. This will be included in the payment
         * description along with the charge date in yyyy-mm-dd format.
         */
        description: string;
        /**
         * The payment method used for this subscription, leave empty to allow all
         * types of payment.
         */
        method?: string;
        /**
         * Use this parameter to set a webhook URL for all subscription payments.
         */
        webhookUrl?: string;
    }
    export interface SubscriptionResponse {
        resource: 'subscription';
        id: string;
        customerId: string;
        mode?: string;
        /**
         * The date and time of creation, in ISO 8601 format.
         */
        createdDatetime: string;
        status: Status;
        amount: number;
        times: number | null;
        interval: string;
        /**
         * The start date of the subscription in yyyy-mm-dd format.
         */
        startDate: string;
        /**
         * A description unique per customer. This will be included in the payment
         * description along with the charge date in yyyy-mm-dd format.
         */
        description: string;
        method: string | null;
        /**
         * The date and time of cancellation, in ISO 8601 format.
         */
        cancelledDatetime: string;
        links: {
            webhookUrl: string | null;
        };
    }
    export interface SubscriptionList {
        totalCount: number;
        offset: number;
        count: number;
        data: Array<SubscriptionResponse>;
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
    export type Status =
        'pending' | 'active' | 'cancelled' | 'suspended' | 'completed';
}
