import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule, EditableChipInputModule } from './shared';
import { ChipsInputExampleComponent } from './components/';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EditableChipInputModule,
  ],
  declarations: [
    AppComponent,
    ChipsInputExampleComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
