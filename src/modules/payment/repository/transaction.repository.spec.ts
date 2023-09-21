import { Sequelize } from "sequelize-typescript";
import TransactionModel from "./transaction.model";
import Transaction from "../domain/transaction";
import Id from "../../@shared/domain/value-object/id.value-object";
import TransactionRepostiory from "./transaction.repository";

describe("ProductRepository test", () => {
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
  
    it("should save a transaction", async () => {
        const transaction = new Transaction({
            id: new Id("1"),
            amount: 100,
            orderId: "1"
        });
        transaction.approve();

        const repository = new TransactionRepostiory();
        const result = await repository.save(transaction);

        expect(result.id).toBeDefined();
        expect(result.id).toBe(transaction.id)
        expect(result.status).toBe("approved")
        expect(result.orderId).toBe(transaction.orderId)
        expect(result.amount).toBe(transaction.amount)
    });
});