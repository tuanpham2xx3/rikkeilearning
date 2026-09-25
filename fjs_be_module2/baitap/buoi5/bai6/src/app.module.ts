import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PubSub } from 'graphql-subscriptions';
import { ProductResolver } from './solution/product.resolver';
export const pubSub = new PubSub();
@Module({ imports: [GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: true, subscriptions: { 'graphql-ws': true } })], providers: [ProductResolver] })
export class AppModule {}
