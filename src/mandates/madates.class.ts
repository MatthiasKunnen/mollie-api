import { AxiosInstance, AxiosPromise } from 'axios';

import { PaginationInput } from '../mollie.interface';
import {
    MandateList,
    MandateResponse,
} from './mandates.interface';

/**
 * This class takes care of all mandate methods.
 */
export class Mandates {

    constructor(private http: AxiosInstance) {
    }

    get(
        customerId: string,
        mandateId: string,
    ): AxiosPromise<MandateResponse> {
        return this.http.get(this.url(customerId, mandateId));
    }

    list(
        customerId: string,
        paginate?: PaginationInput,
    ): AxiosPromise<MandateList> {
        return this.http.get(this.url(customerId), {params: paginate});
    }

    /**
     * Creates a URL to hit based on customer ID and optional mandate ID.
     */
    private url(customerId: string, mandateId?: string): string {
        const url: Array<string> = ['/customers', customerId, 'mandates'];

        if (mandateId !== undefined) {
            url.push(mandateId);
        }

        return url.join('/');
    }
}
