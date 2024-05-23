import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatziFakeStoreService } from '../services/platzi-fake-store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any; // Variable para almacenar los detalles del producto

  constructor(private route: ActivatedRoute, private sericeStore:PlatziFakeStoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Obtiene el ID del producto de los parámetros de la URL
      this.sericeStore.getProduct(productId).subscribe(product=>{
        this.product = product;
      })
     
    });
  }
}
