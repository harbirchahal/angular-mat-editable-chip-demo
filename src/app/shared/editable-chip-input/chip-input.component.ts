import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipInputComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() value: string = '';
  @Output() valueChanged = new EventEmitter<string>();
  @Output() cancelEdit = new EventEmitter<void>();

  @ViewChild(MatInput, { static: false }) inputField: MatInput;

  readonly inputCtrl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.inputCtrl.setValue(this.value || '');
  }

  ngAfterViewInit() {
    this.inputField.focus();
  }

  notifyChange() {
    const newValue = this.inputCtrl.value.trim();
    if (newValue && newValue !== this.value) {
      this.valueChanged.emit(newValue);
    } else {
      this.cancelEdit.emit();
    }
  }

  notifyCancel() {
    this.cancelEdit.emit();
  }
}
