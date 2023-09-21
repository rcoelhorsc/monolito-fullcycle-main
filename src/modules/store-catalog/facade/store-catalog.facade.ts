import FindAllProductsUsecase from "../usecase/find-all-products/find-all-products.usecase";
import FindProductUsecase from "../usecase/find-product/find-product.usecase";
import { FindAllStoreCatalogFacadeOutputDto, FindStoreCatalogFacadeInputDto, FindStoreCatalogFacadeOutputDto } from "./store-catalog.facade.dto";
import StoreCatalogFacadeInterface from "./store-catalog.facade.interface";

export interface UseCasesProps{
    findUseCase: FindProductUsecase;
    findAllUseCase: FindAllProductsUsecase;
}

export default class StoreCatalogFacade implements StoreCatalogFacadeInterface {

    private _findUseCase: FindProductUsecase;
    private _findAllUseCase: FindAllProductsUsecase;

    constructor(usecasesPropos: UseCasesProps) {
        this._findUseCase = usecasesPropos.findUseCase;
        this._findAllUseCase = usecasesPropos.findAllUseCase;
    }

    async find(id: FindStoreCatalogFacadeInputDto): Promise<FindStoreCatalogFacadeOutputDto> {
        return await this._findUseCase.execute(id);
    }

    async findAll(): Promise<FindAllStoreCatalogFacadeOutputDto> {
        return await this._findAllUseCase.execute();
    }
}