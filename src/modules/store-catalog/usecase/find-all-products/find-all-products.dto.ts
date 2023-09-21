export interface FindAllProductsInputDto {
    products: {
        id: string;
        name: string;
        description: string;
        salesPrice: number;
    }[];
  }
  
