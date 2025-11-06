import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(tel) {
    if (tel) {
      const value = tel.toString().replace(/\D/g, '');

      let foneFormatado = '';

      if (value.length > 10) {
        foneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } 
      return foneFormatado;
    }
  }

}
