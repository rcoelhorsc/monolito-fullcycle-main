import { PaymentFacadeInputDto, PaymentFacadeOutputDto } from "./payment.facade.dto"

export default interface PaymentFacadeInterface {
    procces(input: PaymentFacadeInputDto): Promise<PaymentFacadeOutputDto>
}