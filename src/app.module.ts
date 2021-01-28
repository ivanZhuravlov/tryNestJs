import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TestoController } from './testo/testo.controller';

@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot(`mongodb+srv://addd:n12345678@cluster0.edkkt.mongodb.net/products?retryWrites=true&w=majority`)
  ],
  controllers: [AppController, TestoController ],
  providers: [AppService],
})
export class AppModule {}
