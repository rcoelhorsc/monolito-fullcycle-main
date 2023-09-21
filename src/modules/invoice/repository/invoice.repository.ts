import Address from "../value-object/address";
import Id from "../../@shared/domain/value-object/id.value-object";
import Invoice from "../domain/invoice";
import InvoiceItems from "../domain/invoiceItems";
import InvoiceGateway from "../gateway/invoice.gateway";
import InvoiceModel from "./invoice.model";

export default class InvoiceRepository implements InvoiceGateway {
  async generate(input: Invoice): Promise<Invoice> {

    const invoice = await InvoiceModel.create({
        id: input.id.id,
        name: input.name,
        document: input.document,
        street: input.street,
        number: input.number,
        complement: input.complement,
        city: input.city,
        state: input.state,
        zipcode: input.zipcode,        
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        items: input.items.map((item) =>
            new InvoiceItems({
                id: item.id,
                name: item.name,
                price: item.price,
            })
        )
    });

    return new Invoice({
        id: new Id(invoice.id), 
        name: invoice.name,
        document: invoice.document,
        street: invoice.street,
        number: invoice.number,
        complement: invoice.complement,
        city: invoice.city,
        state: invoice.state,
        zipcode: invoice.zipcode,  
        createdAt: invoice.createdAt,
        updatedAt: invoice.updatedAt,
        items: input.items.map((item) => {
            return new InvoiceItems({
                id: item.id,
                name: item.name,
                price: item.price,
            })
        })
    })
  }

  async find(id: string): Promise<Invoice> {
    const invoice = await InvoiceModel.findOne({ where: { id } });

    if (!invoice) {
      throw new Error(`Invoice with id ${id} not found`);
    }

    return new Invoice({
      id: new Id(invoice.id),
      name: invoice.name,
      document: invoice.document,
      street: invoice.street,
      number: invoice.number,
      complement: invoice.complement,
      city: invoice.city,
      state: invoice.state,
      zipcode: invoice.zipcode,  
      items: invoice.items.map((item) => {
        return new InvoiceItems({
            id: new Id(item.id),
            name: item.name,
            price: item.price,
        })
      }),
      createdAt: invoice.createdAt,
      updatedAt: invoice.createdAt
    });
  }
}
