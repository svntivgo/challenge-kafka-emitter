//Libraries
import { Module } from '@nestjs/common';

//Resolvers
import { MessagesResolver } from './messages.resolver';

//Services
import { MessagesService } from './messages.service';

@Module({
  providers: [MessagesResolver, MessagesService],
})
export class MessagesModule {}
