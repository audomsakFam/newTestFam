import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService) {}

  async indexProduct(product: any) {
    return this.esService.index({
      index: 'products',
      body: {
        id: product._id.toString(),
        name: product.name,
        description: product.description,
        code: product.code,
        price: product.price,
      },
    });
  }

  async search(text: string) {
    const res = await this.esService.search({
      index: 'products',
      query: {
        multi_match: {
          query: text,
          fields: ['name', 'description', 'code'],
          fuzziness: 'AUTO',
        },
      },
    });

    return res.hits.hits.map((item) => item._source);
  }
}
