import { PaginationLinks } from '../mollie.interface';

export interface MandateResponse {
    resource: 'mandate';
    id: string;
    status: string;
    method: string;
    customerId: string;
    details: {[k: string]: any} | null;
    /**
     * The mandate's custom reference, if this was provided when creating the mandate.
     */
    mandateReference?: string;
    /**
     * The signature date of the mandate in YYYY-MM-DD format.
     */
    signatureDate?: string;
    /**
     * The mandate record's date and time of creation, in ISO 8601 format.
     */
    createdDatetime: string;
}

export interface MandateList {
    totalCount: number;
    offset: number;
    count: number;
    data: Array<MandateResponse>;
    links?: PaginationLinks;
}
