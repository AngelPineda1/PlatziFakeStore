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
      this.products=data;
    })

  }
  showDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
