import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-contrat',
  templateUrl: './get-all-contrat.component.html',
  styleUrls: ['./get-all-contrat.component.css']
})
export class GetAllContratComponent implements OnInit {

  contrats : any;
  page = 1;
  pageSize = 4;

  constructor(private contratService : ContratService, private router : Router) { }

  ngOnInit() {
    this.contratService.getAllContrat().subscribe(data=>{
      this.contrats=data
    });
  }

  get contrats1(): Country[] {
       return this.contrats
        .map((contrat, i) => ({ id: i + 1, ...contrat }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
     }

}
