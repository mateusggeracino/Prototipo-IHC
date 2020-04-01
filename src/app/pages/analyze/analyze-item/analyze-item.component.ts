import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../../devolution/form-devolution/form-devolution.component';
import { Product } from '../../myProduct/list-my-produts/list-my-produts.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze-item',
  templateUrl: './analyze-item.component.html',
  styleUrls: ['./analyze-item.component.scss']
})
export class AnalyzeItemComponent implements OnInit {
  @Input() formReadOnly: Form = new Form();

  date: Date;
  enviando = true;
  constructor() { }

  ngOnInit(): void {
    if (!this.formReadOnly) {
      this.formReadOnly = new Form();
    }

    if (!this.formReadOnly.product) {
      this.formReadOnly.product = new Product();
    }

    setTimeout(() => {
      this.date = new Date();
      this.enviando = false;
    }, 40000);
  }

  reset() {
    window.location.reload();
  }
}
