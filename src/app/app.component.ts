import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './pages/myProduct/list-my-produts/list-my-produts.component';
import { Form } from './pages/devolution/form-devolution/form-devolution.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: Form;
  isLinear = false;
  myProductsFormGroup: FormGroup;
  devolutionFormGroup: FormGroup;
  confirmationFormGroup: FormGroup;
  analyzeFormGroup: FormGroup;

  modoDevolucao: string;
  formaReembolso: string;

  product: Product;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myProductsFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.devolutionFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.confirmationFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.analyzeFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  outputProduct(product: Product) {
    this.product = product;
    this.form = new Form();
    this.form.product = this.product;
  }

  outputForm(form: Form) {
    this.form = form;
  }
}


