export interface createVendorInputs {
    name: string;
    fuelTypes: [string];
    address: string;
    phone: string;
    email: string;
    password: string;
    pincode: string;
}

export interface vendorLoginInputs{
    email: string;
    password: string;
}