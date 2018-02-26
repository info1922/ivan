import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent implements OnInit {

  constructor(public infoservice: InfoService) { }

  ngOnInit() {
  }

}
