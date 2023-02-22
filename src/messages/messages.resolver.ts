//Libraries
import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

//DTOs
import { NewMessageInput } from './dto/new-message.input';

//Models
import { Message } from './models/message.model';

//Services
import { MessagesService } from './messages.service';

@Resolver((of) => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Query((returns) => Message)
  async message(@Args('id') id: string): Promise<Message> {
    const message = await this.messagesService.findOneById(id);
    if (!message) {
      throw new NotFoundException(id);
    }
    return message;
  }

  @Mutation((returns) => Message)
  async addMessage(
    @Args('newMessageData') newMessageData: NewMessageInput,
  ): Promise<Message> {
    const message = await this.messagesService.create(newMessageData);
    return message;
  }

  @Mutation((returns) => Boolean)
  async removeMessage(@Args('id') id: string) {
    return this.messagesService.remove(id);
  }
}
