import { Component } from '@angular/core';
import { AbsentListService } from 'src/app/services/absent-list/absent-list.service';
import { STUDENT, Student } from 'src/app/mock/students.mock';
// import { Student } from 'src/app/mock/students.mock';
// import { AbsentListService } from './services/absent-list/absent-list.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedUser: any;
  genderMessage: any;
  student:Student[]=STUDENT;

  constructor(public AbsentListService: AbsentListService) { }



  selectRandomUser() {

    // this.AbsentListService.saveStudent()
    // this.selectRandomUser.saveStudent(this.student: Student);
    

    this.selectedUser = this.student[Math.floor(Math.random() * this.student.length)];
    if (this.selectedUser.isWoman) {
      this.genderMessage = ("Tu es la grande gagnante !");
    }

    if (this.selectedUser.isWoman === false) {
      this.genderMessage = ("Tu es le grand gagnant !");
    }
    else ("Aucun utilisateur n'a été trouvé");
  }
  
}

