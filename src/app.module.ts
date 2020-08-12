import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {TypegooseModule} from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  TypegooseModule.forRoot(process.env.MONGO_URI),
  ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
