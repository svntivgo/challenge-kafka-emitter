//Libraries
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { KafkaClient, Producer } from 'kafka-node';

//DTOs
import { NewMessageInput } from './dto/new-message.input';

//Models
import { Message } from './models/message.model';

@Injectable()
export class MessagesService {
  private readonly client = new KafkaClient({ kafkaHost: '127.0.0.1:9091' });
  private readonly producer = new Producer(this.client);

  async create(data: NewMessageInput): Promise<Message> {
    const newMessage = new Message();
    newMessage.id = randomUUID();
    newMessage.message = data.message;

    newMessage.message &&
      this.producer.send(
        [{ topic: 'messages.basic', messages: newMessage.message }],
        (err) => err && console.error(err),
      );

    return newMessage;
  }

  async findOneById(id: string): Promise<Message> {
    return {} as any;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
