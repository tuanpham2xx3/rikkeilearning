import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateOrderItemInput {
  @Field(() => Int) productId!: number;
  @Field(() => Int) quantity!: number;
}

@InputType()
export class CreateOrderInput {
  @Field(() => [CreateOrderItemInput]) items!: CreateOrderItemInput[];
}

@ObjectType()
export class Order {
  @Field() id!: string;
  @Field(() => Int) itemCount!: number;
}
