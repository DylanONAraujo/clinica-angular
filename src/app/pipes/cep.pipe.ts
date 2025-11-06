import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string | number): string {
    const cep = value.toString().replace(/\D/g, '');

    if (cep.length !== 8) return value.toString(); 

    return `${cep.substring(0, 5)}-${cep.substring(5)}`;
  }

}
