// typesense.service.ts
import { Injectable } from '@nestjs/common';
import * as Typesense from 'typesense';

@Injectable()
export class TypesenseService {
  private readonly client: Typesense.Client;

  constructor() {
    this.client = new Typesense({
      nodes: [
        {
          host: 'localhost',
          port: '8108',
          protocol: 'http',
        },
      ],
      apiKey: 'your-typesense-api-key', // Replace with the actual API key
    });
  }

  // ... rest of the service code
}
