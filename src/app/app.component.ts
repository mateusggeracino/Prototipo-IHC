import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLinear = false;
  myProductsFormGroup: FormGroup;
  devolutionFormGroup: FormGroup;
  confirmationFormGroup: FormGroup;
  analyzeFormGroup: FormGroup;

  modoDevolucao: string;
  formaReembolso: string;

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

}


