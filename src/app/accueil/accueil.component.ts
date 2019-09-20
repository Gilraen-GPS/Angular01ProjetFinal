import { Component, OnInit } from '@angular/core';
import { AAcheterService } from '../services/a-acheter.service';
import { Router } from '@angular/router';
import { AAcheter } from '../modeles/aacheter';
import { ALouerService } from '../services/a-louer.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
indice: boolean=false;
indice2 : boolean = false;
aAcheters : any;
page=1;
pageSize=4;

  constructor(private achatService : AAcheterService, private router: Router, private louerService : ALouerService) { }

  ngOnInit() {
    this.indice2 = false;
  }

  rechercherBretagne(){
    this.achatService.getByRegionAAcheter("Bretagne").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherRhoneAlpes(){
    this.achatService.getByRegionAAcheter("RhoneAlpes").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherBourgogne(){
    this.achatService.getByRegionAAcheter("Bourgogne").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherValDeLoire(){
    this.achatService.getByRegionAAcheter("ValDeLoire").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherCorse(){
    this.achatService.getByRegionAAcheter("Corse").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherGrandEst(){
    this.achatService.getByRegionAAcheter("GrandEst").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherHautDeFrance(){
    this.achatService.getByRegionAAcheter("HautDeFrance").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherIleDeFrance(){
    this.achatService.getByRegionAAcheter("IleDeFrance").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherNormandie(){
    this.achatService.getByRegionAAcheter("Normandie").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherAquitaine(){
    this.achatService.getByRegionAAcheter("Aquitaine").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherOccitanie(){
    this.achatService.getByRegionAAcheter("Occitanie").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherLoire(){
    this.achatService.getByRegionAAcheter("Loire").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

  rechercherAlpesCotedAzur(){
    this.achatService.getByRegionAAcheter("AlpesCotedAzur").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
    this.louerService.getByRegionALouer("AlpesCotedAzur").subscribe(reponse => {
      if(reponse !=null){
        this.router.navigate(["/welcome"]);
        this.indice = true;
        this.indice2=false;
        this.aAcheters = reponse;
      }else{
        this.indice=false;
        this.indice2=true;
      }
    })
  }

}
