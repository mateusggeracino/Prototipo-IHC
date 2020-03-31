import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewProductComponent } from '../../modals/view-product/view-product/view-product.component';


export enum StatusEnum {
  Pago = 'Pago',
  Enviado = 'Enviado',
  AguardandoPagamento = 'Aguardando Pagamento'
}


export class Product {
  name: string;
  description: string;
  price: number;
  picture: string;
  status: StatusEnum;
}

export const PRODUCTS_DATA = [
  {
    name: 'Óculos de Sol',
    description: 'Óculos de sol na cor preta. Formato arredondado. Armação na cor preta. Ponte em U. Plaquetas embutidas.',
    price: 94.99,
    picture: 'https://img-br.prvstatic.com/front/get/photo/162819_-' +
      '_images_-_products_-_PLD7023-S_807_-_templ1.jpg',
    status: StatusEnum.Pago
  },
  {
    name: 'EVGA GeForce RTX 2070',
    description: 'As placas gráficas Geforce RTX são alimentadas pela arquitetura Turing GPU e pela nova plataforma RTX',
    price: 2.999,
    picture: 'https://s2.glbimg.com/WqXh_LjuUuAliaTBh1Bqb3fuoBg=/0x0:695x463/984x0/' +
      'smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/' +
      'internal_photos/bs/2019/G/l/zf0egYQ4S5BNfaLQSMRA/2019-07-02-product-12.jpg',
    status: StatusEnum.AguardandoPagamento
  },
  {
    name: 'Pente Long Wicks',
    description: 'Penteado em mechas quiff - preto. é um utensílio formado por numerosos dentes mais ou menos finos',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusEnum.Enviado
  }, {
    name: 'Óculos de Sol',
    description: 'Óculos de sol na cor preta. Formato arredondado. Armação na cor preta. Ponte em U. Plaquetas embutidas.',
    price: 94.99,
    picture: 'https://img-br.prvstatic.com/front/get/photo/162819_-' +
      '_images_-_products_-_PLD7023-S_807_-_templ1.jpg',
    status: StatusEnum.AguardandoPagamento
  },
  {
    name: 'EVGA GeForce RTX 2070',
    description: 'As placas gráficas Geforce RTX são alimentadas pela arquitetura Turing GPU e pela nova plataforma RTX',
    price: 2.999,
    picture: 'https://s2.glbimg.com/WqXh_LjuUuAliaTBh1Bqb3fuoBg=/0x0:695x463/984x0/' +
      'smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/' +
      'internal_photos/bs/2019/G/l/zf0egYQ4S5BNfaLQSMRA/2019-07-02-product-12.jpg',
    status: StatusEnum.AguardandoPagamento
  },
  {
    name: 'Pente Long Wicks',
    description: 'Penteado em mechas quiff - preto. é um utensílio formado por numerosos dentes mais ou menos finos',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusEnum.Pago
  }, {
    name: 'Óculos de Sol',
    description: 'Óculos de sol na cor preta. Formato arredondado. Armação na cor preta. Ponte em U. Plaquetas embutidas.',
    price: 94.99,
    picture: 'https://img-br.prvstatic.com/front/get/photo/162819_-' +
      '_images_-_products_-_PLD7023-S_807_-_templ1.jpg',
    status: StatusEnum.Enviado
  },
  {
    name: 'EVGA GeForce RTX 2070',
    description: 'As placas gráficas Geforce RTX são alimentadas pela arquitetura Turing GPU e pela nova plataforma RTX',
    price: 2.999,
    picture: 'https://s2.glbimg.com/WqXh_LjuUuAliaTBh1Bqb3fuoBg=/0x0:695x463/984x0/' +
      'smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/' +
      'internal_photos/bs/2019/G/l/zf0egYQ4S5BNfaLQSMRA/2019-07-02-product-12.jpg',
    status: StatusEnum.AguardandoPagamento
  },
  {
    name: 'Pente Long Wicks',
    description: 'Penteado em mechas quiff - preto. é um utensílio formado por numerosos dentes mais ou menos finos',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusEnum.Pago
  },
];

@Component({
  selector: 'app-list-my-produts',
  templateUrl: './list-my-produts.component.html',
  styleUrls: ['./list-my-produts.component.scss']
})
export class ListMyProdutsComponent implements OnInit {
  @Output() productEmitter: EventEmitter<Product> = new EventEmitter();

  inputSearch = '';
  statusSelected: Status;

  status: Status[];
  products: Product[];
  actualPage = 1;
  itensPorPagina = 4;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.products = PRODUCTS_DATA as Product[];
    this.status = status();
  }

  clearInputs() {
    this.inputSearch = '';
    this.statusSelected = null;

    this.findProduct();
  }

  findProduct() {
    let products = PRODUCTS_DATA as Product[];

    if (this.inputSearch.length > 0) {
      products = PRODUCTS_DATA.filter(product => product.name.toLowerCase().includes(this.inputSearch.toLowerCase()));
    }

    if (this.statusSelected) {
      products = products.filter(product => product.status === this.statusSelected.name);
    }

    if (this.inputSearch.length === 0 && !this.statusSelected) {
      products = PRODUCTS_DATA as Product[];
    }

    this.products = products;
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


function status() {
  return [
    { name: StatusEnum.Pago, color: 'green' },
    { name: StatusEnum.Enviado, color: 'blue' },
    { name: StatusEnum.AguardandoPagamento, color: 'gray' }
  ];
}

class Status {
  name: StatusEnum;
  color: string;
}
