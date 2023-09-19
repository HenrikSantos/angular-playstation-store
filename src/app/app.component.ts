import { Component } from '@angular/core';
import fakeData, { fakeDataType } from './data/fakeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'current-directory';
  fakeData: fakeDataType[] = fakeData;
}
