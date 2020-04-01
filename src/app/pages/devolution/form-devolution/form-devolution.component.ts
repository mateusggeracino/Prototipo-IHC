import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../myProduct/list-my-produts/list-my-produts.component';
import { SendMessageProviderComponent } from '../../modals/send-message-provider/send-message-provider/send-message-provider.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactVendorComponent } from '../contact-vendor/contact-vendor.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  devolutionForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.formEdit) {
      this.formEdit = new Form();
    }
    if (!this.formEdit.product) {
      this.formEdit.product = new Product();
    }

    this.devolutionForm = this.fb.group({
      modoDevolucao: ['', Validators.required],
      formaReembolso: ['', Validators.required],
      description: ['', Validators.required],
      attachItems: [''],
      comment: [''],
    });
  }

  contagemArquivos(event: any) {
    this.quantidadeArquivos += event.files.length;
    this.devolutionForm.patchValue({ attachItems: this.quantidadeArquivos });
  }

  sendformEdit() {
    this.formEdit = Object.assign({}, this.formEdit, this.devolutionForm.value);
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
  comment: string;
}
