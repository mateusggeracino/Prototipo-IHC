import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { ListMyProdutsComponent } from './pages/myProduct/list-my-produts/list-my-produts.component';
import { FormDevolutionComponent } from './pages/devolution/form-devolution/form-devolution.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReadConfirmationComponent } from './pages/confirmation/read-confirmation/read-confirmation.component';
import { AnalyzeItemComponent } from './pages/analyze/analyze-item/analyze-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewProductComponent } from './pages/modals/view-product/view-product/view-product.component';
import { SendMessageProviderComponent } from './pages/modals/send-message-provider/send-message-provider/send-message-provider.component';
import { ContactVendorComponent } from './pages/devolution/contact-vendor/contact-vendor.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ListMyProdutsComponent,
    FormDevolutionComponent,
    ReadConfirmationComponent,
    AnalyzeItemComponent,
    ViewProductComponent,
    SendMessageProviderComponent,
    ContactVendorComponent
  ],
  imports: [
    MatRadioModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    NgbModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
