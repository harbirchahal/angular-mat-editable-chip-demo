import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChipInputComponent } from './chip-input.component';
import { EditableChipComponent } from './editable-chip.component';
import { EditableChipInputComponent } from './editable-chip-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    ChipInputComponent,
    EditableChipComponent,
    EditableChipInputComponent,
  ],
  exports: [
    EditableChipInputComponent,
  ],
})
export class EditableChipInputModule { }
