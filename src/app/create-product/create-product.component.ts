import { Component, OnInit } from '@angular/core';
import { PlatziFakeStoreService } from '../services/platzi-fake-store.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
productForm:FormGroup;
categories:any[]=[];


constructor(private fb:FormBuilder,private storeService: PlatziFakeStoreService){
  this.productForm=this.fb.group({
    title: '',
    price: 0 ,
    description: '',
    categoryId: '',
    images: ['']
  })
}
  ngOnInit(): void {
    if (this.productForm.valid) {
      this.storeService.Post(this.productForm.value).subscribe(response => {
        console.log('Product added successfully', response);
      }, error => {
        console.error('Error adding product', error);
      });
    }

  }
}
