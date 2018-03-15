import { AxiosInstance, AxiosPromise } from 'axios';

import { PaginationInput } from '../mollie.interface';
import {
    SubscriptionInput,
    SubscriptionList,
    SubscriptionResponse,
} from './subscriptions.interface';

/**
 * This class takes care of all subscription methods.
 */
export class Subscriptions {

    constructor(private http: AxiosInstance) {
    }

    cancel(customerId: string, subscriptionId: string): AxiosPromise {
        return this.http.delete(this.url(customerId, subscriptionId));
    }

    create(
        customerId: string,
        data: SubscriptionInput,
    ): AxiosPromise<SubscriptionResponse> {
        return this.http.post(this.url(customerId), data);
    }

    get(
        customerId: string,
        subscriptionId: string,
    ): AxiosPromise<SubscriptionResponse> {
        return this.http.get(this.url(customerId, subscriptionId));
    }

    list(
        customerId: string,
        paginate?: PaginationInput,
    ): AxiosPromise<SubscriptionList> {
        return this.http.get(this.url(customerId), {params: paginate});
    }

    /**
     * Creates a URL to hit based on customer ID and optional subscription ID.
     */
    private url(customerId: string, subscriptionId?: string): string {
        const url: Array<string> = ['/customers', customerId, 'subscriptions'];

        if (subscriptionId !== undefined) {
            url.push(subscriptionId);
        }

        return url.join('/');
    }
}
