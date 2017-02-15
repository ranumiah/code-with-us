export class Customer {
    id: number;
    name: string;
    address: Address
}

export class Address {
    street: string;
    city: string;
    county: string;
    region: string;
}