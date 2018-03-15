import { PaginationLinks, Status } from '../mollie.interface';

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
