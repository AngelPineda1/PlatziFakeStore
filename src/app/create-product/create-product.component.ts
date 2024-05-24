import { Component, OnInit } from '@angular/core';
import { PlatziFakeStoreService } from '../services/platzi-fake-store.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routes } from '../app-routing.module';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
productForm:FormGroup;
categories:any[]=[];


constructor(private fb:FormBuilder,private storeService: PlatziFakeStoreService,private router:Router, private route: ActivatedRoute){
  this.productForm=this.fb.group({
    title: '',
    price: 0 ,
    description: '',
    categoryId: '',
    images: []
  })
}
ngOnInit(): void {
  this.storeService.getCategories().subscribe(categories => {
    this.categories = categories;
  });
}

onSubmit(): void {
  if (this.productForm.valid) {
    const imageUrl = this.productForm.value.images;
    const imagesArray = [imageUrl, imageUrl, imageUrl]; // Duplicate the URL three times
   this.productForm.value.images=imagesArray
    
      this.storeService.Post(this.productForm.value).subscribe(response => {
        console.log('Product added successfully', response);
        this.router.navigate(['/']);
        
      }, error => {
     
      console.error('Error adding product', error);
    });
  }
}}
