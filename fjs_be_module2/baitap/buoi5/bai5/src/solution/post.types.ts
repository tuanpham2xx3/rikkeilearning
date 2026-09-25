import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author { @Field(() => ID) id!: number; @Field() name!: string; }
@ObjectType()
export class Post { @Field(() => ID) id!: number; @Field() title!: string; @Field() authorId!: number; @Field(() => Author, { nullable: true }) author?: Author | null; }
