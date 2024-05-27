import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlatziFakeStoreService } from '../../services/platzi-fake-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
products: any[]=[];

constructor (private storeService:PlatziFakeStoreService, private router:Router){
  
}
  ngOnInit(): void {
    this.storeService.getProducts().subscribe((data:any)=>{
      console.log(data);
      this.products=data;
    })

  }
  showDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
  navigateToAddProduct(): void {
    this.router.navigate(['/add-product']);
  }

  async Delete(id:number){
    
    await this.storeService.Delete(id).subscribe(()=>{
      window.location.reload();
    });
    
  }


  navigateToEditProduct(productId: number): void {
    this.router.navigate(['/edit-product', productId]);
  }
}
