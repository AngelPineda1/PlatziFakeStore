import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatziFakeStoreService } from '../services/platzi-fake-store.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  categories: any[] = [];
  productId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storeService: PlatziFakeStoreService
  ) {
    this.productForm = this.fb.group({
      title: '',
      price: 0,
      description: '',
      categoryId: '',
     
      id:''
    });
  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.storeService.getProduct(this.productId).subscribe(product => {
      this.productForm.patchValue(product);
      
    });

    this.storeService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.storeService.update(this.productForm.value).subscribe(response => {

        console.log('Product updated successfully', response);
        this.router.navigate(['/']);
      }, error => {
        console.error('Error updating product', error);
      });
    }
  }
}
