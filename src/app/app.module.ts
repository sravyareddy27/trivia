import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatButtonModule} from '@angular/material';
import { Service } from './service';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule, MatIconModule, MatCardModule, MatToolbarModule} from '@angular/material';

// import { FormGroup } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // tslint:disable-next-line: max-line-length
    BrowserAnimationsModule, MatSelectModule, MatFormFieldModule, MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MatRadioModule, MatIconModule, MatCardModule,MatToolbarModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
