//Libraries
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

//Controlllers
import { AppController } from './app.controller';

//Services
import { AppService } from './app.service';

//Modules
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    MessagesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
