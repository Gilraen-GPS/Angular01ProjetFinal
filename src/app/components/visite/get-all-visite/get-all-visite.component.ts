import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { VisiteService } from 'src/app/services/visite.service';

@Component({
  selector: 'app-get-all-visite',
  templateUrl: './get-all-visite.component.html',
  styleUrls: ['./get-all-visite.component.css']
})
export class GetAllVisiteComponent implements OnInit {



  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[]=[];

  constructor(private visiteService:VisiteService) { }


  ngOnInit() {
    this.visiteService.getAllVisite().subscribe(data => { let listevisites = data; 
              for(let i in listevisites){
                this.calendarEvents.push(
                                            { title: 'visite '+listevisites[i].idVisite, start: new Date(listevisites[i].dateVisite )}
                                  );

             }
            
  
        });
        console.log(this.calendarEvents);
  }


 





}
