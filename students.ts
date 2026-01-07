import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
      isAttentive:boolean=true;
    rollno:number=10;
    name:string="Ameya";

    numberofTimesClicked:number=0;

    WhenClicked()
    {
this.numberofTimesClicked=this.numberofTimesClicked+1;

    }


}
