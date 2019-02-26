import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premiumCalculation'
})
export class PremiumCalculationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
