import { Field, ID, ObjectType, createUnionType } from '@nestjs/graphql';
import { EmailScalar } from './email.scalar';

@ObjectType()
export class SearchPost { @Field(() => ID) id!: string; @Field() title!: string; }
@ObjectType()
export class SearchUser { @Field(() => ID) id!: string; @Field() name!: string; @Field(() => EmailScalar) email!: string; }

export const SearchResultUnion = createUnionType({
  name: 'SearchResult',
  types: () => [SearchPost, SearchUser] as const,
  resolveType(value: SearchPost | SearchUser) { return 'title' in value ? SearchPost : SearchUser; },
});
