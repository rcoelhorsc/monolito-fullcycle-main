export interface FindInvoiceUseCaseInputDTO {
    id: string;
  }
  
  export interface FindInvoiceUseCaseOutputDTO {
    id: string;
    name: string;
    document: string;
    street: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    zipcode: string;
    items: {
      id: string;
      name: string;
      price: number;
    }[];
    total: number;
    createdAt: Date;
  }