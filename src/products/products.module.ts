import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductSevice } from "./products.service";

@Module({
    providers: [ProductSevice],
    controllers: [ProductsController]
})

export class ProductsModule {

}