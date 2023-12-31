
import Id from "../../../@shared/domain/value-object/id.value-object";
import { Client } from "../../domain/client.entity";

import { FindClientUseCase } from "./find-client.usecase";

const client = new Client({
  id: new Id("1"),
  name: "Client 1",
  email: "clien1@email.com",
  document: "1111111",
  street: "street 1",
  number: 1,
  complement: "complement 1",
  city: "city 1",
  state: "state 1",
  zipcode: "02937-100"
});

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(client)),
  };
};

describe("FindClientUseCase unit test", () => {
  it("should find a client", async () => {
    const repository = MockRepository();
    const findClientUseCase = new FindClientUseCase(repository);

    const input = {
      id: "1",
    };

    const result = await findClientUseCase.execute(input);

    expect(repository.find).toHaveBeenCalled();
    expect(result.id).toEqual(input.id);
    expect(result.name).toEqual(client.name);
    expect(result.email).toEqual(client.email);
    expect(result.street).toEqual(client.street);
    expect(result.document).toEqual(client.document);
    expect(result.createdAt).toEqual(client.createdAt);
    expect(result.updatedAt).toEqual(client.updatedAt);
  });
});
