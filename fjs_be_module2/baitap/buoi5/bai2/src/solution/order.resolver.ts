import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOrderInput, Order } from './order.types';

@Resolver(() => Order)
export class OrderResolver {
  @Mutation(() => Order)
  createOrder(@Args('input') input: CreateOrderInput) { return { id: 'order-1', itemCount: input.items.length }; }
}
