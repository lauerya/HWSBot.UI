import {Injectable} from "@angular/core";
import { FormGroup } from '@angular/forms';

@Injectable()
 export class ProductService {
  constructor() {}

  saveProduct(form: FormGroup): void {
      let request: Product;
      request = Object.assign({},
        form.value,
        {
            name: form.controls['name'].value,
            rankThreshold: form.controls['rank'].value,
            priceThreshold: form.controls['price'].value,
            storeList: {},
            criteriaList: form.controls['criteriaList'].value,
        })
  }
}
