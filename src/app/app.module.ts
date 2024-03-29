import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the DatePickerModule for the DatePicker component
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DatePickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
