import { Component, OnInit } from '@angular/core';
import { VisiteService } from 'src/app/services/visite.service';

@Component({
  selector: 'app-get-all-visite',
  templateUrl: './get-all-visite.component.html',
  styleUrls: ['./get-all-visite.component.css']
})
export class GetAllVisiteComponent implements OnInit {

  visites:any;
  idVisite:number;
  page = 1;
  pageSize = 4;

  constructor(private visiteService:VisiteService) { }


  ngOnInit() {
    this.visiteService.getAllVisite().subscribe(data => { this.visites = data; });
  }

}
