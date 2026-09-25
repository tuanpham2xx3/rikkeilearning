import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { EmailScalar } from './email.scalar';
@ObjectType() class EmailResult { @Field(() => EmailScalar) value!: string; }
@Resolver(() => EmailResult) export class EmailResolver { @Query(() => EmailResult) emailDemo() { return { value: 'demo@example.com' }; } }
