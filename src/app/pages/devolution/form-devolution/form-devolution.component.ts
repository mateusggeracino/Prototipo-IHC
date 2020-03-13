import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, StatusProduct } from '../../myProduct/list-my-produts/list-my-produts.component';
import { SendMessageProviderComponent } from '../../modals/send-message-provider/send-message-provider/send-message-provider.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-devolution',
  templateUrl: './form-devolution.component.html',
  styleUrls: ['./form-devolution.component.scss']
})
export class FormDevolutionComponent implements OnInit {
  @Input() formEdit: Form;
  @Output() formEmitter: EventEmitter<Form> = new EventEmitter<Form>();

  formaReembolso: string;
  modoDevolucao: string;
  arquivosEnviados = true;
  quantidadeArquivos = 0;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.formEdit) {
      this.formEdit = new Form();
    }
    if (!this.formEdit.product) {
      this.formEdit.product = new Product();
    }
  }

  changeCheckBoxDevolucao(value: number) {
    this.formEdit.modoDevolucao = value;
  }

  changeCheckBoxReembolso(value: number) {
    this.formEdit.formaReembolso = value;
  }

  contagemArquivos(event: any) {
    this.quantidadeArquivos += event.files.length;
    this.formEdit.attachItems = this.quantidadeArquivos;
  }

  sendformEdit() {
    this.formEmitter.emit(this.formEdit);
  }


  openChat() {
    this.dialog.open(SendMessageProviderComponent, {
      width: '408px',
      height: '400px',
      panelClass: 'semPadding'
    });
  }

}


export class Form {
  constructor() {
    this.product = new Product();
  }
  product: Product;
  modoDevolucao: number;
  formaReembolso: number;
  description: string;
  attachItems: number;
}
