import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class CustomIso4217 implements ValidatorConstraintInterface {
  validate(currency: string, args: ValidationArguments) {
    let currency_codes = ["EUR", "USD", "TRY"] //...
    let currencyValid = currency_codes.filter(res => res == currency);
    if(currencyValid.length >= 1){
        return true; // for async validations you must return a Promise<boolean> here
    }else {
        return false;
    }
    
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'currency is not equal in ISO 4217 currency codes';
  }
}