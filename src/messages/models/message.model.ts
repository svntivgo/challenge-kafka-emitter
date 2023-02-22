//Libraries
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'message ' })
export class Message {
  @Field((type) => ID)
  id: string;

  @Field()
  message: string;
}
