# Mollie API
[![npm version](https://img.shields.io/npm/v/mollie-api.svg?style=for-the-badge)](https://www.npmjs.com/package/mollie-api)

This is a wrapper around Mollie's API.
The library is written in TypeScript and has typings available.

# Difference with the official library
This library is promise based and does not try to do some overly cumbersome
parsing on the data returned from the Mollie API.

# Create mollie instance
```TypeScript
import { Mollie } from 'mollie-api';
const mollie = new Mollie({
    apiKey: 'your live or test API key here',
});
```

The first parameter is a library specific config. The options can be found in
the MollieConfig interface.

```TypeScript
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
```

# Currently implemented

## Payments

### Create
```TypeScript
mollie.payments.create({
    amount: 100,
    description: 'As a token of appreciation for the development of this library',
    redirectUrl: 'https://example.com/payment',
    webhookUrl: 'https://api.example.com/mollie/payment',
})
    .then(d => console.log(d.data))
    .catch(e => console.error(e.response.data));
```

### Get
```TypeScript
mollie.payments.get('tr_id')
    .then(d => console.log(d.data))
    .catch(e => console.error(e.response.data));
```


## Customers

### Create
```TypeScript
mollie.customers.create({
    name: 'John Doe',
    email: 'email@example.com',
}).then(d => console.log(d.data)).catch(console.error);
```

### Delete
```TypeScript
mollie.customers.delete('theID')
    .then(d => console.log('success'))
    .catch(console.error);
```

### Get
```TypeScript
mollie.customers.get('theID')
    .then(d => console.log(d.data))
    .catch(console.error);
```

### List
```TypeScript
mollie.customers.list()
    .then(d => console.log(d.data))
    .catch(console.error);
```

### Update
```TypeScript
mollie.customers.update('theID', {
    name: 'John Doe',
    email: 'email@example.com',
}).then(d => console.log(d.data)).catch(console.error);
```

## Mandates

### Get
```TypeScript
mollie.mandates.get('customerId', 'subscriptionId')
    .then(c => console.log(c.data))
    .catch(err => console.log(err.response.data));
```

### List
```TypeScript
mollie.mandates.list('customerId')
    .then(c => console.log(c.data))
    .catch(err => console.log(err.response.data));
```

## Subscriptions

### Create
```TypeScript
mollie.subscriptions.create('customerId', {
    amount: 200,
    description: 'A test payment',
    interval: '1 month',
    times: 3,
}).then(c => console.log(c.data))
    .catch(err => console.log(err.response.data));
```

### Get
```TypeScript
mollie.subscriptions.get('customerId', 'subscriptionId')
    .then(c => console.log(c.data))
    .catch(err => console.log(err.response.data));
```

### List
```TypeScript
mollie.subscriptions.list('customerId')
    .then(c => console.log(c.data))
    .catch(err => console.log(err.response.data));
```

### Cancel
```TypeScript
mollie.subscriptions.cancel('customerId', 'subscriptionId')
    .then(c => console.log(c.data))
    .catch(err => console.log(err.response.data));
```
