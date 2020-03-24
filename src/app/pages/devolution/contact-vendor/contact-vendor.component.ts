import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-vendor',
  templateUrl: './contact-vendor.component.html',
  styleUrls: ['./contact-vendor.component.scss']
})
export class ContactVendorComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}
