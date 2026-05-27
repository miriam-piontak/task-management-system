import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService } from '../services/users';
import { User } from '../models/usersModel';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
name:string=""
pass:string=""
constructor(private active:Router, private us:UsersService){}
go(){
  if(this.name== "מנהל" && this.pass=="1234")
  {
      this.active.navigate(['/addTask']);
      this.us.currentUser="מנהל"
      this.us.currentEmail="admin@system.com"
      this.us.isAdmin=true;
      alert(`ברוך הבא, ${this.us.currentUser} המערכת!`);

      return;
  }

const userToLogin = {
    firstName: this.name,
    password: this.pass
  }as Partial<User>;

  this.us.logInUser(userToLogin).subscribe(
  (responseUser)=>{
    if(responseUser){
      this.us.currentUser=responseUser.firstName
      this.us.isAdmin=false
      this.us.currentEmail = responseUser.email;
      alert(`ברוך הבא, ${responseUser.firstName}!`);
      this.active.navigate(['/tasksList']);}
    },
    (error) => {
      console.log("שגיאת התחברות: ", error);
      alert("שם משתמש או סיסמה שגויים, או שאינך רשום במערכת.");
      this.active.navigate(['/signUp']);

    }
  );
}
}


  