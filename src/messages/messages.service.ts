//Libraries
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

//DTOs
import { NewMessageInput } from './dto/new-message.input';

//Models
import { Message } from './models/message.model';

@Injectable()
export class MessagesService {
  async create(data: NewMessageInput): Promise<Message> {
    const newMessage = new Message();
    newMessage.id = randomUUID();
    newMessage.message = data.message;
    return newMessage;
  }

  async findOneById(id: string): Promise<Message> {
    return {} as any;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
