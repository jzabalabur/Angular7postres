import { Component } from '@angular/core';
import listadePostres from 'src/assets/json/postres.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postres: any= listadePostres;
  title = 'ejercicio7postres';
}
