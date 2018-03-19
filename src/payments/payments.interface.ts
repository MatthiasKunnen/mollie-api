import { Metadata, PaginationLinks, Status } from '../mollie.interface';

export interface PaymentInput {
    amount: number;

    /**
     * A description unique per customer. This will be included in the payment
     * description along with the charge date in yyyy-mm-dd format.
     */
    description: string;

    /**
     * The URL the consumer will be redirected to after the payment process. It
     * could make sense for the redirectURL to contain a unique identifier –
     * like your order ID – so you can show the right page referencing the order
     * when the consumer returns.
     */
    redirectUrl: string;

    /**
     * Use this parameter to set a webhook URL for all subscription payments.
     */
    webhookUrl: string;

    locale?: string;

    /**
     * The payment method used for this subscription, leave empty to allow all
     * types of payment.
     */
    method?: string;

    metadata?: Metadata;

    recurringType?: 'first' | 'recurring';

    customerId?: string;

    /**
     * When creating recurring payments, a specific mandate ID may be supplied
     * to indicate which of the consumer's accounts should be credited.
     */
    mandateId?: string;
}

export interface PaymentResponse {
    resource: 'payment';
    id: string;
    mode?: string;
    /**
     * The date and time of creation, in ISO 8601 format.
     */
    createdDatetime: string;
    status: Status;
    /**
     * Whether or not the payment can be cancelled.
     */
    canBeCancelled?: boolean;
    /**
     * The date and time the payment became paid, in ISO 8601 format.
     */
    paidDatetime?: string;
    /**
     * The date and time the payment was expired, in ISO 8601 format.
     */
    cancelledDatetime?: string;
    /**
     * The date and time the payment was expired, in ISO 8601 format.
     */
    expiredDatetime?: string;
    /**
     * The time until the payment will expire in ISO 8601 duration format.
     */
    expiryPeriod?: string;
    /**
     * The date and time the payment failed, in ISO 8601 format.
     */
    failedDatetime?: string;
    amount: number;
    amountRefunded?: number;
    amountRemaining?: number;
    /**
     * A short description of the payment. The description will be shown on the
     * customer's bank or card statement when possible
     */
    description: string;
    method: string | null;
    metadata: Metadata | null;
    locale?: string;
    /**
     * The customer's ISO 3166-1 alpha-2 country code, detected during checkout.
     */
    countryCode?: string;
    profileId?: string;
    settlementId?: string;
    /**
     * If a customer ID was specified upon payment creation, the ID will be
     * available here as well.
     */
    customerId?: string;
    recurringType?: string;
    /**
     * Only available for recurring payments – If the payment is a recurring
     * payment, this field will hold the ID of the mandate used to authorize the
     * recurring payment.
     */
    mandateId?: string;
    /**
     * Only available for recurring payments – When implementing the
     * Subscriptions API, any recurring charges resulting from the subscription
     * will hold the ID of the subscription that triggered the payment.
     */
    subscriptionId?: string;
    /**
     * Only available for payment methods that use an issuer, e.g. iDEAL,
     * KBC/CBC payment button and gift cards – The ID of the issuer that was
     * used during the payment.
     */
    issuer?: string;
    /**
     * Only available for failed Bancontact and credit card payments. Contains a
     * textual description of the failure reason.
     */
    failureReason?: string;
    links: {
        paymentUrl: string | null;
        webhookUrl?: string;
        redirectUrl: string | null;
        settlement?: string;
        refunds?: string;
        chargebacks?: string;
    };
    /**
     * Payment method specific details.
     */
    details?: {[k: string]: any};
}

export interface PaymentList {
    totalCount: number;
    offset: number;
    count: number;
    data: Array<PaymentResponse>;
    links?: PaginationLinks;
}
