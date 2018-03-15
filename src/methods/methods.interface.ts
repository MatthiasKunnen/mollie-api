export interface MethodInterface {
    resource: 'method';
    id: string;
    description: string;
    amount: {
        /**
         * The minimum payment amount in EUROs required to use this payment method.
         */
        minimum: number;
        /**
         * The minimum payment amount in EUROs required to use this payment method.
         */
        maximum: number;
    };
    /**
     * URLs of images representing the payment method.
     */
    image: {
        /**
         * The URL for a payment method icon of 55x37 pixels.
         */
        normal: string;

        /**
         * The URL for a payment method icon of 110x74 pixels.
         */
        bigger: string;
    };
}
