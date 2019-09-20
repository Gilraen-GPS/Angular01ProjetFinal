import { Component, OnInit } from '@angular/core';
import { AAcheter } from 'src/app/modeles/aacheter';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { AAcheterService } from 'src/app/services/a-acheter.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

class ImageSnippet {
  constructor(public src : string, public file : File){}
}

@Component({
  selector: 'app-add-aacheter',
  templateUrl: './add-aacheter.component.html',
  styleUrls: ['./add-aacheter.component.css']
})
export class AddAAcheterComponent implements OnInit {

  aAcheter:AAcheter = new AAcheter();
  selectedFile: ImageSnippet;
  
  constructor(private router : Router, private aAcheterService : AAcheterService, private httpClient : HttpClient) { }

  ngOnInit() {
  }

  ajouter(){
    this.aAcheterService.addAAcheter(this.aAcheter).subscribe(response=>{
      if(response.status===200){
        this.router.navigate(['/aAcheter/getAll']);
      }
    });
  }

  processFile(imageInput : any){
    const file : File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event:any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }
}
