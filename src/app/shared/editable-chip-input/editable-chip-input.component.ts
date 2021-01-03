import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'editable-chip-input',
  templateUrl: './editable-chip-input.component.html',
  styleUrls: ['./editable-chip-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableChipInputComponent implements OnInit {
  @Input() chip: string = ''
  @Output() updated = new EventEmitter<string>();
  @Output() removed = new EventEmitter<void>();

  showInput: boolean = false;  

  constructor() { }

  ngOnInit() {
  }

  showInputField() {
    this.showInput = true;
  }

  hideInputField() {
    this.showInput = false;
  }

  notifyUpdated(value: string) {
    this.hideInputField();
    this.updated.emit(value);
  }

  notifyRemoved() {
    this.removed.emit();
  }
}
