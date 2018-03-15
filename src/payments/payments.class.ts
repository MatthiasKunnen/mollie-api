import { AxiosInstance, AxiosPromise } from 'axios';

import { PaymentInput, PaymentResponse } from './payments.interface';

/**
 * This class takes care of all payments methods.
 */
export class Payments {

    constructor(private http: AxiosInstance) {
    }

    create(data: PaymentInput): AxiosPromise<PaymentResponse> {
        return this.http.post('/payments', data);
    }

    get(paymentId: string): AxiosPromise<PaymentResponse> {
        return this.http.get('/payments/' + paymentId);
    }
}
