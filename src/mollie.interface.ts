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
