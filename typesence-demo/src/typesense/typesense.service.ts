// typesense.service.ts
import { Injectable } from '@nestjs/common';
import { Client } from 'typesense';

@Injectable()
export class TypesenseService {
  private readonly typesenseClient: Client;

  constructor() {
    const typesenseHost = 'http://localhost:8108/api';
    const typesenseApiKey = 'abc';

    this.typesenseClient = new Client({
      nodes: [
        {
          host: typesenseHost,
          port: 8108,
          protocol: 'http',
        },
      ],
      apiKey: typesenseApiKey,
    });
  }

  async searchTypesense(query: string): Promise<any> {
    const searchParameters: any = {
      q: query,
      queryBy: 'name,description',
      typoTolerance: true,
    };

    const searchResults = await this.typesenseClient
      .collections('products')
      .documents()
      .search(searchParameters);

    return searchResults.hits;
  }

  // async typeSensePing(apiKey: string): Promise<any> {
  //   try {
  //     const response: AxiosResponse = await axios.get(
  //       process.env.TYPE_SENSE_HOST,
  //       {
  //         headers: {
  //           'X-TYPESENSE-API-KEY': apiKey,
  //         },
  //       },
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error(`Error in typeSensePing: ${error}`);
  //     throw error;
  //   }
  // }
}
