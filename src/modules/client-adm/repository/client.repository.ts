import Id from "../../@shared/domain/value-object/id.value-object";
import { Client } from "../domain/client.entity";
import { ClientGateway } from "../gateway/client.gateway";

import { ClientModel } from "./client.model";

function clientModelToEntity(clientModel: ClientModel) {
  return new Client({
    id: new Id(clientModel.id),
    name: clientModel.name,
    email: clientModel.email,
    document: clientModel.document,
    street: clientModel.street,
    number: clientModel.number,
    complement: clientModel.complement,
    city: clientModel.city,
    state: clientModel.state,
    zipcode: clientModel.zipcode,
    createdAt: clientModel.createdAt,
    updatedAt: clientModel.updatedAt,
  });
}

export class ClientRepository implements ClientGateway {
  async add(client: Client): Promise<void> {
    await ClientModel.create({
      id: client.id.id,
      name: client.name,
      email: client.email,
      document: client.document,
      street: client.street,
      number: client.number,
      complement: client.complement,
      city: client.city,
      state: client.state,
      zipcode: client.zipcode,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  }

  async find(id: string): Promise<Client> {
    const client = await ClientModel.findOne({ where: { id } });

    if (!client) {
      throw new Error("Client not found.");
    }

    return clientModelToEntity(client);
  }
}
