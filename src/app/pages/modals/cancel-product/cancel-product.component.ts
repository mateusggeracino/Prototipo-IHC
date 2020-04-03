import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-product',
  templateUrl: './cancel-product.component.html',
  styleUrls: ['./cancel-product.component.scss']
})
export class CancelProductComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CancelProductComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
