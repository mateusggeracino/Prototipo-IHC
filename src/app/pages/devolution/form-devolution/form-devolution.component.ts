import { Component, OnInit } from '@angular/core';
import { Product, StatusProduct } from '../../myProduct/list-my-produts/list-my-produts.component';

@Component({
  selector: 'app-form-devolution',
  templateUrl: './form-devolution.component.html',
  styleUrls: ['./form-devolution.component.scss']
})
export class FormDevolutionComponent implements OnInit {
  product: Product;
  formaReembolso: string;
  modoDevolucao: string;

  constructor() { }

  ngOnInit(): void {
    this.product = new Product();

    this.product.name = 'Óculos de Sol';
    this.product.description = 'Óculos de sol na cor preta. Formato arredondado.' +
      'Armação na cor preta. Ponte em U. Plaquetas embutidas.';
    this.product.price = 94.99;
    this.product.picture = 'https://img-br.prvstatic.com/front/get/photo/162819_-' +
      '_images_-_products_-_PLD7023-S_807_-_templ1.jpg';
    this.product.status = StatusProduct.finished;
  }

}
