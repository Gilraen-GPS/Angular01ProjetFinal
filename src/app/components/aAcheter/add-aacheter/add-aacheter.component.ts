import { Component, OnInit } from '@angular/core';
import { AAcheter } from 'src/app/modeles/aacheter';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { AAcheterService } from 'src/app/services/a-acheter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-aacheter',
  templateUrl: './add-aacheter.component.html',
  styleUrls: ['./add-aacheter.component.css']
})
export class AddAAcheterComponent implements OnInit {

  aAcheter : AAcheter = new AAcheter();
  model: NgbDateStruct;
  control = new FormControl(null, Validators.required);

  constructor(private router : Router, private aAcheterService : AAcheterService) { }

  ngOnInit() {
  }

  ajouter(){
    this.aAcheterService.addAAcheter(this.aAcheter).subscribe(aAcheterOut=>{
      if(aAcheterOut.idBienImmobilier!=0){
        this.router.navigate(['/aAcheter/getAll']);
      }
    });
  }

}
