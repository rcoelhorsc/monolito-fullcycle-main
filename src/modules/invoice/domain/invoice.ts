import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object";
import Address from "../value-object/address";
import InvoiceItems from "./invoiceItems";

type InvoiceProps = {
    id?: Id // criado automaticamente
    name: string
    document: string
    street: string
    number: number
    complement: string
    city: string
    state: string
    zipcode: string
    items: InvoiceItems[]
    createdAt?: Date
    updatedAt?: Date
};

export default class Invoice extends BaseEntity{

    private _name: string
    private _document: string
    private _street: string
    private _number: number
    private _complement: string
    private _city: string
    private _state: string
    private _zipcode: string
    private _items: InvoiceItems[]

    constructor(props: InvoiceProps){
        super(props.id, props.createdAt, props.updatedAt)
        this._name = props.name
        this._document = props.document
        this._street = props.street
        this._street = props.street
        this._number = props.number
        this._complement = props.complement
        this._city = props.city
        this._state = props.state
        this._zipcode = props.zipcode
        this._items = props.items
    }    

    get name(): string{
        return this._name;
    }
    
    get document(): string{
        return this._document;
    }    

    get street(): string{
        return this._street;
    }   

    get number(): number{
        return this._number;
    }   
    
    get complement(): string{
        return this._complement;
    }   
    
    get city(): string{
        return this._city;
    }       

    get state(): string{
        return this._state;
    }    

    get zipcode(): string{
        return this._zipcode;
    }        

    get items(): InvoiceItems[]{
        return this._items;
    }       

    get total() {
        let total = 0;
        this._items.forEach((item) => {
          total = total + item.price;
        });
    
        return total;
      }    

}