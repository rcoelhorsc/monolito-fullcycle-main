import ValueObject from "../../@shared/domain/value-object/value-object.interface";

type AddressProps = {
    street: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    zipcode: string;
}

export default class Address implements ValueObject {

    private _street: string;
    private _number: number;
    private _complement: string;
    private _city: string;
    private _state: string;
    private _zipcode: string;

    constructor(addressProps: AddressProps) {
        this._street = addressProps.street;
        this._number = addressProps.number;
        this._complement = addressProps.complement;
        this._city = addressProps.city;
        this._state = addressProps.state;
        this._zipcode = addressProps.zipcode;
    }

    get street(): string {
        return this._street;
    }

    get number(): number {
        return this._number;
    }

    get complement(): string {
        return this._complement;
    }

    get city(): string {
        return this._city;
    }

    get state(): string {
        return this._state
    }

    get zipcode(): string {
        return this._zipcode
    }

    

}