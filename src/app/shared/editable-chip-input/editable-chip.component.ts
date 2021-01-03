import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'editable-chip',
  templateUrl: './editable-chip.component.html',
  styleUrls: ['./editable-chip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableChipComponent implements OnInit {
  @Input() value: string = '';
  @Output() removed = new EventEmitter<void>();
  @Output() editChip = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  notifyRemoved() {
    this.removed.emit();
  }

  notifyEdit() {
    this.editChip.emit();
  }
}
