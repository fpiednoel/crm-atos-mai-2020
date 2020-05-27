import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value){
      if(args.length > 0){
        return value.totalTtc();
      } else {
        return value.totalHt();
      }
    }
    return null;
  }
}
