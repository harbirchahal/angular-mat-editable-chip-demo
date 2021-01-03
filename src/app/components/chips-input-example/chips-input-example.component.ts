import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chips-input-example',
  templateUrl: './chips-input-example.component.html',
  styleUrls: ['./chips-input-example.component.css']
})
export class ChipsInputExampleComponent implements OnInit {
  @Input() chips: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  update(index: number, value: string) {
    this.chips[index] = value;
  }

  remove(index: number) {
    this.chips.splice(index, 1);
  }
}
