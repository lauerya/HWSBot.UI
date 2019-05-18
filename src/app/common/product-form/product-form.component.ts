import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      criteriaList: this.formBuilder.array([])
    });
  }

  addCriteria(): void {
    const criteriaList = this.form.get('criteriaList') as FormArray;
    criteriaList.push(this.createCriteria())
    console.log(criteriaList);
  }

  createCriteria(): FormGroup {
    const newCriteria = this.formBuilder.group({
      value: [
        '',
        [Validators.required]
      ],
      rank: [
        0
      ]
    }); 
       return newCriteria;
  }

    getCriteriaList(): any[] {
      if (this.form.get('criteriaList')) {
        const criteriaList = this.form.get('criteriaList') as FormArray;
        return criteriaList.controls;
      }
      else {
        return [this.createCriteria()];
      }
    }

    saveProduct(): void {
      if (this.form) {
        this.productService.saveProduct(this.form);
      }
    }
}
