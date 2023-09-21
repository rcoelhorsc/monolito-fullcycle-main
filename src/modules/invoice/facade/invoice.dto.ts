export interface GenerateInvoiceFacadeInputDto {
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
  }
  
  export interface GenerateInvoiceFacadeOutputDto {
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
  }

export interface FindInvoiceFacadeInputDTO {
    id: string;
  }
  
  export interface FindInvoiceFacadeOutputDTO {
    id: string;
    name: string;
    document: string;
    street: string;
    number: string;
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

  