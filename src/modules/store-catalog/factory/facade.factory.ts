import StoreCatalogFacade from "../facade/store-catalog.facade";
import ProductRepository from "../repository/product.repository";
import FindAllProductsUsecase from "../usecase/find-all-products/find-all-products.usecase";
import FindProductUsecase from "../usecase/find-product/find-product.usecase";

export default class StoreCatalogFacadeFactory{
    static create() {
        const productRepository = new ProductRepository();
        const findAllProductsUsecase = new FindAllProductsUsecase(productRepository);
        const findProductUsecase = new FindProductUsecase(productRepository);
        const productFacade = new StoreCatalogFacade({
            findUseCase: findProductUsecase,
            findAllUseCase: findAllProductsUsecase,
        });   

        return productFacade;
    }
}