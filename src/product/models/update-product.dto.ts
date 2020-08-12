import {prop} from '@typegoose/typegoose';
import { Validate, IsOptional, IsNotEmpty, IsUrl, Matches} from "class-validator";
import {CustomIso4217} from './customIso4217';

export class updateProductDto{
    @prop()
    @IsNotEmpty()
    @IsOptional()
    title: string; // required for create

    @prop()
    @IsOptional()
    description: string;

    @prop()
    @IsUrl()
    @IsOptional()
    link: string; // ex: https://3bbb.me

    @prop()
    @IsOptional()
    @Matches(/^([0-9]\d{0,7})?([.][0-9]\d{1,1})?$/, {
        message: 'invalid price value by decimal(10, 2)',
    })
    price: string; // Ex: 1234, 1234.12, 1234, 12341234, 12341234.12

    @prop()
    @IsOptional()
    quantity: number;

    @prop()
    @IsOptional()
    @Validate(CustomIso4217) // IsCurrency kullanınca hata aldığım için custom bir ıso4217 standartı yapmaya çalıştım
    currency: string;        // Şuan TRY, EUR, USD değerleri soğru cevap döndürüyor.

    @prop()
    @IsOptional()
    brand: string;

    @prop()
    @IsOptional()
    color: string;

    @prop()
    @IsOptional()
    gender: string;

    @prop()
    @IsOptional()
    gtin?: string;

    @prop()
    @IsOptional()
    mpn?: string;
}
  