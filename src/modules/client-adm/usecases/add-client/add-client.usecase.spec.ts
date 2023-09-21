import { AddClientUseCase } from "./add-client.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};

describe("AddClientUseCase unit test", () => {
  it("should add a client", async () => {
    const repository = MockRepository();
    const addClientUseCase = new AddClientUseCase(repository);

    const input = {
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

    const result = await addClientUseCase.execute(input);

    expect(repository.add).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toEqual(input.name);
    expect(result.email).toEqual(input.email);
    expect(result.street).toEqual(input.street);
  });
});
