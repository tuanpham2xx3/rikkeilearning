import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { pubSub } from '../app.module';
import { Product, ProductStatus } from './product.types';

@Resolver(() => Product)
export class ProductResolver {
  private readonly productStore: Product[] = [{ id: '1', name: 'Keyboard', status: ProductStatus.IN_STOCK }];

  @Query(() => [Product])
  products() { return this.productStore; }

  @Mutation(() => Product)
  async createProduct(@Args('name') name: string, @Args('status', { type: () => ProductStatus, defaultValue: ProductStatus.IN_STOCK }) status: ProductStatus) {
    const product = { id: String(this.productStore.length + 1), name, status };
    this.productStore.push(product);
    await pubSub.publish('productCreated', { productCreated: product });
    return product;
  }

  @Subscription(() => Product, { name: 'productCreated' })
  productCreated() { return pubSub.asyncIterableIterator('productCreated'); }
}
