import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum ProductStatus { IN_STOCK = 'IN_STOCK', OUT_OF_STOCK = 'OUT_OF_STOCK', DISCONTINUED = 'DISCONTINUED' }
registerEnumType(ProductStatus, { name: 'ProductStatus' });

@ObjectType()
export class Product {
  @Field(() => ID) id!: string;
  @Field() name!: string;
  @Field(() => ProductStatus) status!: ProductStatus;
}
