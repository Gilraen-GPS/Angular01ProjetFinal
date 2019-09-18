import { Component, OnInit } from '@angular/core';
import { AAcheterService } from 'src/app/services/a-acheter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-aacheter',
  templateUrl: './delete-aacheter.component.html',
  styleUrls: ['./delete-aacheter.component.css']
})
export class DeleteAAcheterComponent implements OnInit {

  constructor(private aAcheterService : AAcheterService, private router : Router) { }
  idBienImmobilier : number;

  ngOnInit() {
  }

  supprimer(){
    this.aAcheterService.deleteCAAcheter(this.idBienImmobilier).subscribe(response=>{
      if(response.status===200){
        this.router.navigate(['/aAcheter/getAll']);
      }
    });

  }

}
