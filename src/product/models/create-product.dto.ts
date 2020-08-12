import {prop} from '@typegoose/typegoose';
import { Validate, IsOptional, IsNotEmpty, IsUrl, Matches, IsCurrency} from "class-validator";
import {CustomIso4217} from './customIso4217';

export class createProductDto{
    @prop()
    @IsNotEmpty()
    title: string;

    @prop()
    @IsOptional()
    description: string;

    @prop()
    @IsUrl()
    @IsOptional()
    link: string;

    @prop()
    @IsOptional()
    @Matches(/^([0-9]\d{0,7})?([.][0-9]\d{1,1})?$/, {
        message: 'invalid price value by decimal(10, 2)',
    })
    price: string;

    @prop()
    @IsOptional()
    quantity: number;

    @prop()
    @IsOptional()
    @Validate(CustomIso4217)
    currency: string;

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
  