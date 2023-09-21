import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import { AddProductOutputDto } from "../usecase/add-product/add-product.dto";
import CheckStockUseCase from "../usecase/check-stock/check-stock.usecase";
import { AddProductFacadeInputDto, CheckStockFacadeInputDto, CheckStockFacadeOutputDto } from "./product-adm.dto";
import ProductAdmFacadeInterface from "./product-adm.facade.interface";

export interface UseCasesProps{
    addUseCase: UseCaseInterface;
    stockUseCase: CheckStockUseCase;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface{

    private _addUsecase: UseCaseInterface;
    private _checkStockUsecase: CheckStockUseCase;

    constructor(usecasesPropos: UseCasesProps) {
        this._addUsecase = usecasesPropos.addUseCase;
        this._checkStockUsecase = usecasesPropos.stockUseCase;
    }

    addProduct(input: AddProductFacadeInputDto): Promise<void> {
        // caso o DTO do usecase for diferente do DTO da facade, converter o DTP da facade par o DTO do usecase
        return this._addUsecase.execute(input);
    }

    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUsecase.execute(input);
    }
}