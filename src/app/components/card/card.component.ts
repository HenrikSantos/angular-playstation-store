import { Component, Input } from '@angular/core';
import { fakeDataType } from 'src/app/data/fakeData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent {
  @Input()
  game: fakeDataType;

  constructor() {
    this.game = {
      image: "",
      tag: "",
      price: "",
      media: ""
    }
  }
}
