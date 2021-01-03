import { Component } from '@angular/core';

const DATA = ['Apples', 'Bananas', 'Cherries', 'Mango', 'Oranges', 'Papaya', 'Watermelon'];
function getData() {
  return [...DATA];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chips = getData();

  resetChips() {
    this.chips = getData();
  }
}
