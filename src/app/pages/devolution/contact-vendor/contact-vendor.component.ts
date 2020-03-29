import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-vendor',
  templateUrl: './contact-vendor.component.html',
  styleUrls: ['./contact-vendor.component.scss']
})
export class ContactVendorComponent implements OnInit {
  comment = '';
  constructor(
    public dialogRef: MatDialogRef<ContactVendorComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.comment && data.comment.length > 0) {
      this.comment = this.data.comment;
    }
  }

  ngOnInit(): void {
  }

  send() {
    this.snackBar.open('Sua mensagem será enviada para o fornecedor.', 'Fechar', {
      duration: 5000,
    });

    this.dialogRef.close(this.comment);
  }
}
