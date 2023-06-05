import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPagination'
})
export class CustomPaginationPipe implements PipeTransform {

  transform(value: any[], nbSplit: number): any[] {
    return value.splice(0, nbSplit);
  }

}
