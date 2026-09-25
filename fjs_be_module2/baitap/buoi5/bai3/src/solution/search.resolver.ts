import { Args, Query, Resolver } from '@nestjs/graphql';
import { SearchPost, SearchResultUnion, SearchUser } from './search.types';

@Resolver()
export class SearchResolver {
  @Query(() => [SearchResultUnion])
  search(@Args('keyword') _keyword: string): Array<SearchPost | SearchUser> {
    return [{ id: 'p1', title: 'NestJS GraphQL' }, { id: 'u1', name: 'An', email: 'an@example.com' }];
  }
}
