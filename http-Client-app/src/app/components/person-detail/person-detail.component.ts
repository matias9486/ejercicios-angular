import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [NgFor],
  providers: [PersonService],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css'
})
export class PersonDetailComponent{  
  personList: any[] = [];
  person: any;

  constructor(private personService : PersonService){}
  
  getOther(){
    this.personService.getPerson().subscribe(
      (data:any) => {
        this.personList.push(data); 
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
