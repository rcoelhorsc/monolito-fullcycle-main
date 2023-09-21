import { Sequelize } from "sequelize-typescript";
import TransactionModel from "../repository/transaction.model";
import TransactionRepostiory from "../repository/transaction.repository";
import ProcessPaymentUseCase from "../usecase/process-payment/process-payment.usecase";
import PaymentFacade from "./payment.facade";
import PaymentFacadeFactory from "../factory/payment.factory";

describe("PaymenteFacade unit test", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
          dialect: "sqlite",
          storage: ":memory:",
          logging: false,
          sync: { force: true },
        });
    
        await sequelize.addModels([TransactionModel]);
        await sequelize.sync();
      });
    
      afterEach(async () => {
        await sequelize.close();
      });    

    it("should create a transaction", async () => {

      const transactionRepository = new TransactionRepostiory();
      const proccesUsecase = new ProcessPaymentUseCase(transactionRepository);
      const paymentFacade = new PaymentFacade(proccesUsecase);

      const input = {
          orderId: "1",
          amount: 100,
        };

      const output = await paymentFacade.procces(input);

      expect(output.transactionId).toBeDefined();
      expect(output.orderId).toBe(input.orderId);
      expect(output.amount).toBe(input.amount);
      expect(output.status).toBe("approved");
    });

    it("should create a transaction - Facade Factory", async () => {

      const paymentFacade = PaymentFacadeFactory.create();

      const input = {
          orderId: "1",
          amount: 100,
        };

      const output = await paymentFacade.procces(input);

      expect(output.transactionId).toBeDefined();
      expect(output.orderId).toBe(input.orderId);
      expect(output.amount).toBe(input.amount);
      expect(output.status).toBe("approved");
    });    
});
