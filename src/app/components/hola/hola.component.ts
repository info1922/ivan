import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styles: []
})
export class HolaComponent implements OnInit {

  constructor( public infoservice: InfoService) { }

  ngOnInit() {
  }


}
