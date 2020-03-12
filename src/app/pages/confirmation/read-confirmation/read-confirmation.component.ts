import { Component, OnInit, Input } from '@angular/core';
import { StatusProduct, Product } from '../../myProduct/list-my-produts/list-my-produts.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '../../devolution/form-devolution/form-devolution.component';

@Component({
  selector: 'app-read-confirmation',
  templateUrl: './read-confirmation.component.html',
  styleUrls: ['./read-confirmation.component.scss']
})
export class ReadConfirmationComponent implements OnInit {
  @Input() formReadOnly: Form = new Form();

  product: Product;
  formaReembolso: string;
  modoDevolucao: number;
  arquivosEnviados = true;
  quantidadeArquivos = 0;
  constructor() {
    this.modoDevolucao = 1;
  }

  ngOnInit(): void {
    if (!this.formReadOnly) {
      this.formReadOnly = new Form();
    }

    if (!this.formReadOnly.product) {
      this.formReadOnly.product = new Product();
    }
  }

  contagemArquivos(event: any) {
    this.quantidadeArquivos += event.files.length;
  }
}
