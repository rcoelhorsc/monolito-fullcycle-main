import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";

export default class FindAllProductsUsecase implements UseCaseInterface{
    constructor(private _productRepository: ProductGateway){    }

    async execute(): Promise<any>{
        const products = await this._productRepository.findAll();
        return {
            products: products.map((product) => ({
                id: product.id.id,
                name: product.name,
                description: product.description,
                salesPrice: product.salesPrice,
            })),
        };
    }
}