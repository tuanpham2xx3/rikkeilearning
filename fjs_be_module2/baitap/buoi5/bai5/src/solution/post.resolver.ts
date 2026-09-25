import { Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { Author, Post } from './post.types';

@Resolver(() => Post)
export class PostResolver {
  @Query(() => [Post])
  posts() { return [{ id: 1, title: 'Post 1', authorId: 1 }, { id: 2, title: 'Post 2', authorId: 2 }]; }

  @ResolveField(() => Author, { nullable: true })
  author(@Parent() post: Post, @Context() context: { authorLoader: DataLoader<number, Author | null> }) { return context.authorLoader.load(post.authorId); }
}
