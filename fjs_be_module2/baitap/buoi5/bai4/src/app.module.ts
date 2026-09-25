import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EmailScalar } from './solution/email.scalar';
import { EmailResolver } from './solution/email.resolver';
@Module({ imports: [GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: true })], providers: [EmailScalar, EmailResolver] })
export class AppModule {}
