import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import DataLoader from 'dataloader';
import { PostResolver } from './solution/post.resolver';
const authors = new Map([[1, { id: 1, name: 'An' }], [2, { id: 2, name: 'Bình' }]]);
@Module({ imports: [GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: true, context: () => ({ authorLoader: new DataLoader<number, { id: number; name: string } | null>(async ids => ids.map(id => authors.get(id) ?? null)) }) })], providers: [PostResolver] })
export class AppModule {}
