import { Sequelize } from "sequelize-typescript";

import { ClientModel } from "../repository/client.model";
import { ClientAdmFacadeFactory } from "../factory/client-adm.facade.factory";

describe("ClientAdmFacade test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ClientModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a client", async () => {
    const facade = ClientAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Client 1",
      email: "clien1@email.com",
      document: "1111111",
      street: "street 1",
      number: 1,
      complement: "complement 1",
      city: "city 1",
      state: "state 1",
      zipcode: "02937-100"
    };

    await facade.add(input);

    const clientDb = await ClientModel.findOne({ where: { id: "1" } });

    expect(clientDb).toBeDefined();
    expect(clientDb.id).toEqual(input.id);
    expect(clientDb.name).toEqual(input.name);
    expect(clientDb.email).toEqual(input.email);
    expect(clientDb.street).toEqual(input.street);
    expect(clientDb.document).toEqual(input.document);
  });

  it("should find a client", async () => {
    const facade = ClientAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Client 1",
      email: "clien1@email.com",
      document: "1111111",
      street: "street 1",
      number: 1,
      complement: "complement 1",
      city: "city 1",
      state: "state 1",
      zipcode: "02937-100"
    };

    await facade.add(input);

    const client = await facade.find({ id: "1" });

    expect(client).toBeDefined();
    expect(client.id).toEqual(input.id);
    expect(client.name).toEqual(input.name);
    expect(client.email).toEqual(input.email);
    expect(client.street).toEqual(input.street);
    expect(client.document).toEqual(input.document);
  });
});
