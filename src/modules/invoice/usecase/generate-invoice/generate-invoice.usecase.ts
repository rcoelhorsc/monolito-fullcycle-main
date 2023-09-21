import Id from "../../../@shared/domain/value-object/id.value-object";
import Invoice from "../../domain/invoice";
import InvoiceItems from "../../domain/invoiceItems";
import InvoiceGateway from "../../gateway/invoice.gateway";
import Address from "../../value-object/address";
import { GenerateInvoiceUseCaseInputDto, GenerateInvoiceUseCaseOutputDto } from "./generate-invoice.dto";

export default class GenerateInvoiceUseCase {

  constructor(private _invoiceRepository: InvoiceGateway) {}

  async execute(input: GenerateInvoiceUseCaseInputDto): Promise<GenerateInvoiceUseCaseOutputDto> {

    const items = input.items.map((item) => {
        return new InvoiceItems({
            id: new Id(item.id),
            name: item.name,
            price: item.price
        })
    })

    const invoice = new Invoice({
        name: input.name,
        document: input.document,
        street: input.street,
        number: input.number,
        complement: input.complement,
        city: input.city,
        state: input.state,
        zipcode: input.zipcode,
        items: items,
    });

    this._invoiceRepository.generate(invoice);

    return {
        id: invoice.id.id,
        name: invoice.name,
        document: invoice.document,
        street: invoice.street,
        number: invoice.number,
        complement: invoice.complement,
        city: invoice.city,
        state: invoice.state,
        zipcode: invoice.zipcode,
        items: invoice.items.map((item) => ({
            id: item.id.id,
            name: item.name,
            price: item.price
        })),
        total: invoice.total,
    };
  }
}
