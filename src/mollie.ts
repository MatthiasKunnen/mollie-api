import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { Customers } from './customers/customers.class';
import { Mandates } from './mandates/madates.class';
import { MollieConfig } from './mollie.interface';
import { Payments } from './payments/payments.class';
import { Subscriptions } from './subscriptions/subscriptions.class';

export class Mollie {

    customers: Customers;
    mandates: Mandates;
    payments: Payments;
    subscriptions: Subscriptions;

    private http: AxiosInstance;

    constructor(
        config: MollieConfig,
        axiosConfig: Partial<AxiosRequestConfig> = {},
    ) {
        this.http = axios.create({
            // The url to post requests to.
            baseURL: [
                config.endpoint || 'https://api.mollie.com',
                config.version || 'v1',
            ].join('/'),

            headers: {
                Authorization: `Bearer ${config.apiKey}`,
                'Content-Type': 'application/json; charset=utf-8',
            },

            // 60 seconds timeout
            timeout: 60000,

            // Follow up to 10 HTTP 3xx redirects
            maxRedirects: 10,

            // Maximum content length 50MBs
            maxContentLength: 50 * 1000 * 1000,

            ...axiosConfig,
        });

        this.customers = new Customers(this.http);
        this.mandates = new Mandates(this.http);
        this.payments = new Payments(this.http);
        this.subscriptions = new Subscriptions(this.http);
    }
}
