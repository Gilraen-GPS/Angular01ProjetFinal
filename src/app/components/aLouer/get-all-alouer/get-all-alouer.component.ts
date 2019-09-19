import { Component, OnInit } from '@angular/core';
import { ALouerService } from 'src/app/services/a-louer.service';

@Component({
  selector: 'app-get-all-alouer',
  templateUrl: './get-all-alouer.component.html',
  styleUrls: ['./get-all-alouer.component.css']
})
export class GetAllALouerComponent implements OnInit {

  aLouers : any;
  page = 1;
  pageSize = 4;

  constructor(private aLouerService : ALouerService) { }

  ngOnInit() {
    this.aLouerService.getAllALouer().subscribe(data=>{
      this.aLouers=data;
    })
  }

}
