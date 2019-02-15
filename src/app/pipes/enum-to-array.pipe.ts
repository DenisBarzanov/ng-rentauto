import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'keys'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    // const keys = Object.keys(data);
    // return keys.slice(keys.length / 2);
    return Object.keys(data);
    /**
     * As when an enum is transpiled to js,
     * it is just an object, which has
     * half of its properties as the enum keys with their value as the enum value
     * and the other half has its keys matched up with the enum's values and its values
     * with the enum's keys.
     * That's why we take up to the first part.
     */
  }
}
