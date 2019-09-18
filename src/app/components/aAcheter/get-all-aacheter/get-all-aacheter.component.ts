import { Component, OnInit } from '@angular/core';
import { AAcheterService } from 'src/app/services/a-acheter.service';

@Component({
  selector: 'app-get-all-aacheter',
  templateUrl: './get-all-aacheter.component.html',
  styleUrls: ['./get-all-aacheter.component.css']
})
export class GetAllAAcheterComponent implements OnInit {

  aAcheters : any;
  page = 1;
  pageSize = 4;

  constructor(private aAcheterService : AAcheterService) { }

  ngOnInit() {
    this.aAcheterService.getAllAAcheter().subscribe(data=>{
      this.aAcheters=data;
    })
  }

}
