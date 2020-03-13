import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/pages/myProduct/list-my-produts/list-my-produts.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  product: Product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { if (data) { this.product = data.product; } }

  ngOnInit(): void {
  }

}
