import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewProductComponent } from '../../modals/view-product/view-product/view-product.component';
import { ContactVendorComponent } from '../../devolution/contact-vendor/contact-vendor.component';
import { FormGroup } from '@angular/forms';
import { CancelProductComponent } from '../../modals/cancel-product/cancel-product.component';


export enum StatusEnum {
  Pago = 'Pago',
  Enviado = 'Enviado',
  AguardandoPagamento = 'Aguardando Pagto',
  Entregue = 'Produto Entregue'
}

export class Product {
  id: number;
  order: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  status: StatusEnum;
}

function getRandomNumber() {
  return '#' + (Math.floor(Math.random() * (999999 - 100000)) + 100000);
}

export const PRODUCTS_DATA = [
  {
    id: 1,
    order: getRandomNumber(),
    name: 'Camiseta - Dobby',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 51.99,
    picture: 'https://cdn.awsli.com.br/600x700/987/987705/produto/37030876/3b279b97d3.jpg',
    status: StatusEnum.Entregue
  },
  {
    id: 5,
    order: getRandomNumber(),
    name: 'Chaveiro - Relíquia',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 0.50,
    picture: 'https://montecarlo.vteximg.com.br/arquivos/ids/210061-800-800/Harry_Potter_charm_prata_01.jpg',
    status: StatusEnum.Entregue
  },
  {
    id: 6,
    order: getRandomNumber(),
    name: 'Relógio - Gryffindor',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 299.99,
    picture: 'https://static3.tcdn.com.br/img/img_prod/460977/relogio_de_harry_potter_gryffindor_17089_1_20180925191133.jpg',
    status: StatusEnum.Pago
  }, {
    id: 7,
    order: getRandomNumber(),
    name: 'Box - Torre Negra',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 120.99,
    picture: 'https://opiniaobomvaleapena.com.br/imagens/caixa-livro-colecao-torre-negra.png',
    status: StatusEnum.Entregue
  },
  {
    id: 8,
    order: getRandomNumber(),
    name: 'Tênis - Gryffindor',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 89.50,
    picture: 'https://cd.shoppub.com.br/usevolt/media/cache/b9/e3/b9e35e7afb04329b5cf9457fec21997c.jpg',
    status: StatusEnum.AguardandoPagamento
  },
  {
    id: 9,
    order: getRandomNumber(),
    name: 'Cobertor - Hogwarts',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 29.90,
    picture: 'https://pijamaonline.vteximg.com.br/arquivos/ids/166516-551-683/00007262' +
      '_1still_cobertor-com-mangas-harry-potter-zona-criativa.jpg',
    status: StatusEnum.Pago
  },
  {
    id: 2,
    order: getRandomNumber(),
    name: 'RTX 2070',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 2.999,
    picture: 'https://s2.glbimg.com/WqXh_LjuUuAliaTBh1Bqb3fuoBg=/0x0:695x463/984x0/' +
      'smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/' +
      'internal_photos/bs/2019/G/l/zf0egYQ4S5BNfaLQSMRA/2019-07-02-product-12.jpg',
    status: StatusEnum.AguardandoPagamento
  },
  {
    id: 3,
    order: getRandomNumber(),
    name: 'Pente Long Wicks',
    description: 'Cras sit amet sem purus. Fusce vulputate fringilla neque, quis tempus magna posuere id.',
    price: 9.99,
    picture: 'https://www.superbonitacosmeticos.com.br' +
      '/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/escova-penteado-quiffl-preto.jpg',
    status: StatusEnum.Enviado
  }
];

@Component({
  selector: 'app-list-my-produts',
  templateUrl: './list-my-produts.component.html',
  styleUrls: ['./list-my-produts.component.scss']
})
export class ListMyProdutsComponent implements OnInit {
  @Output() productEmitter: EventEmitter<Product> = new EventEmitter();

  statusEntregue = StatusEnum.Entregue;
  statusPago = StatusEnum.Pago;
  statusAguardandoPagamento = StatusEnum.AguardandoPagamento;

  inputSearch = '';
  statusSelected: Status;

  status: Status[];
  products: Product[];
  actualPage = 1;
  itensPorPagina = 4;

  comments: ProductComment[] = [];

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
    this.actualPage = 1;
  }

  cancel(product: Product) {
    const dialogRef = this.dialog.open(CancelProductComponent, {
      width: '350px',
      data: { product }
    });
  }

  getStatus(statusProduto: StatusEnum) {
    return this.status.find(x => x.name === statusProduto);
  }

  openDialog(id: number) {
    const productComment = this.getCommentProduct(id);
    const dialogRef = this.dialog.open(ContactVendorComponent, {
      width: '500px',
      data: {
        comment: productComment.comment,
        product: this.products.find(x => x.id === id)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        productComment.comment = result;
        productComment.produtoId = id;
        this.comments.push(productComment);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  getCommentProduct(id: number): ProductComment {
    const index = this.comments.findIndex(x => x.produtoId === id);

    if (index !== -1) {
      return this.comments[index];
    }

    return new ProductComment();
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
    { name: StatusEnum.Pago, color: '#4682b4' },
    { name: StatusEnum.Enviado, color: '#FF5733' },
    { name: StatusEnum.AguardandoPagamento, color: '#FFED33' },
    { name: StatusEnum.Entregue, color: '#89FF33' }
  ];
}

class Status {
  name: StatusEnum;
  color: string;
}


class ProductComment {
  produtoId: number;
  comment: string;
}
