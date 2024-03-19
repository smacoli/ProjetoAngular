import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  // Tranforma um valor e retorna um tipo
  // string: categoria do pet, gato ou cachorro
  transform(value: string): string {
    switch(value){
      case 'cachorro': return 'pets';
      case 'gato' : return 'android';
    }
    return 'pets';
  }

}
