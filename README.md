# Mollie API
[![npm version](https://img.shields.io/npm/v/mollie-api.svg?style=for-the-badge)](https://www.npmjs.com/package/mollie-api)

This is a wrapper around Mollie's API.
The library is written in TypeScript and has typings available.

# Difference with the official library
This library is promise based and does not try to do some overly cumbersome
parsing on the data returned from the Mollie API.

# Currently implemented

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
mollie.customers.delete('theID').then(d => console.log('success')).catch(console.error);
```

### Get
```TypeScript
mollie.customers.get('theID').then(d => console.log(d.data)).catch(console.error);
```

### List
```TypeScript
mollie.customers.list().then(d => console.log(d.data)).catch(console.error);
```

### Update
```TypeScript
mollie.customers.update('theID', {
    name: 'John Doe',
    email: 'email@example.com',
}).then(d => console.log(d.data)).catch(console.error);
```
