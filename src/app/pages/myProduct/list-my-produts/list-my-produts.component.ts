import { Component, OnInit } from '@angular/core';

export enum StatusProduct {
  finished,
  awaitingPayment,
}

export class Product {
  name: string;
  description: string;
  price: number;
  picture: string;
  status: StatusProduct;
}


const PRODUCTS_DATA = [
  {
    name: 'Óculos de Sol',
    description: 'Óculos de sol na cor preta. Formato arredondado. Armação na cor preta. Ponte em U. Plaquetas embutidas.',
    price: 94.99,
    picture: 'https://img-br.prvstatic.com/front/get/photo/162819_-' +
      '_images_-_products_-_PLD7023-S_807_-_templ1.jpg',
    status: StatusProduct.finished
  },
  {
    name: 'EVGA GeForce RTX 2070',
    description: 'As placas gráficas Geforce RTX são alimentadas pela arquitetura Turing GPU e pela nova plataforma RTX',
    price: 2.999,
    picture: 'https://s2.glbimg.com/WqXh_LjuUuAliaTBh1Bqb3fuoBg=/0x0:695x463/984x0/' +
      'smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/' +
      'internal_photos/bs/2019/G/l/zf0egYQ4S5BNfaLQSMRA/2019-07-02-product-12.jpg',
    status: StatusProduct.awaitingPayment
  },
  {
    name: 'Pente Long Wicks',
    description: 'Penteado em mechas quiff - preto',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusProduct.finished
  },
];

@Component({
  selector: 'app-list-my-produts',
  templateUrl: './list-my-produts.component.html',
  styleUrls: ['./list-my-produts.component.scss']
})
export class ListMyProdutsComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit(): void {
    this.products = PRODUCTS_DATA as Product[];
  }

}
