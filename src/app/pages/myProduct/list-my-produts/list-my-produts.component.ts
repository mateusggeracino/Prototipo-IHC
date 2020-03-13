import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewProductComponent } from '../../modals/view-product/view-product/view-product.component';

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


export const PRODUCTS_DATA = [
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
    description: 'Penteado em mechas quiff - preto. é um utensílio formado por numerosos dentes mais ou menos finos',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusProduct.finished
  }, {
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
    description: 'Penteado em mechas quiff - preto. é um utensílio formado por numerosos dentes mais ou menos finos',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusProduct.finished
  }, {
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
    description: 'Penteado em mechas quiff - preto. é um utensílio formado por numerosos dentes mais ou menos finos',
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
  @Output() productEmitter: EventEmitter<Product> = new EventEmitter();

  products: Product[];
  actualPage = 1;
  itensPorPagina = 4;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.products = PRODUCTS_DATA as Product[];
  }

  findProduct(query: string) {
    if (query.length > 0) {
      this.products = PRODUCTS_DATA.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    } else {
      this.products = PRODUCTS_DATA as Product[];
    }
  }

  produtoSelecionado(product: Product) {
    this.productEmitter.emit(product);
  }

  viewProduct(product: Product) {
    this.dialog.open(ViewProductComponent, {
      width: '408px',
      data: { product },
      panelClass: 'semPadding'
    });
  }
}
