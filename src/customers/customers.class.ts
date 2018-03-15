import { AxiosInstance, AxiosPromise } from 'axios';

import { PaginationInput } from '../mollie.interface';
import {
    CustomerInput,
    CustomerList,
    CustomerResponse,
} from './customers.interface';

/**
 * This class takes care of all /customer methods.
 */
export class Customers {

    constructor(private http: AxiosInstance) {
    }

    create(data: CustomerInput): AxiosPromise<CustomerResponse> {
        return this.http.post('/customers', data);
    }

    delete(customerId: string): AxiosPromise {
        return this.http.delete('/customers/' + customerId);
    }

    get(customerId: string): AxiosPromise<CustomerResponse> {
        return this.http.get('/customers/' + customerId);
    }

    list(paginate?: PaginationInput): AxiosPromise<CustomerList> {
        return this.http.get('/customers', {params: paginate});
    }

    update(customerId: string, data: CustomerInput): AxiosPromise<CustomerResponse> {
        return this.http.post('/customers/' + customerId, data);
    }
}
