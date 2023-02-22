//Libraries
import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class NewMessageInput {
  @Field()
  @Length(2, 30)
  message: string;
}
