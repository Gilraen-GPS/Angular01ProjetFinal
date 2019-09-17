import { Component, OnInit } from '@angular/core';
import { AAcheter } from 'src/app/modeles/aacheter';

@Component({
  selector: 'app-add-aacheter',
  templateUrl: './add-aacheter.component.html',
  styleUrls: ['./add-aacheter.component.css']
})
export class AddAAcheterComponent implements OnInit {

  aAcheter : AAcheter = new AAcheter();

  constructor() { }

  ngOnInit() {
  }

}
