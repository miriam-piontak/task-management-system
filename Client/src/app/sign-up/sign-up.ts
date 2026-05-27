import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/usersModel';
import { UsersService } from '../services/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
name:string=""
pass:string=""
email:string=""
constructor(private us: UsersService, private active: Router) {}
goToSignUp()
{
const userToSignUp = {
    firstName: this.name,
    password: this.pass,
    email:this.email
  }as Partial<User>;

 this.us.addUser(userToSignUp).subscribe(
    (responseUser: any) => { 
      if (responseUser && responseUser.success) {
        this.us.currentUser = responseUser.user.firstName; 
        this.us.isAdmin = false;
        this.us.currentEmail = responseUser.user.email;
        alert(`ברוך הבא, ${responseUser.user.firstName}!`);
        this.active.navigate(['/addTask']);
      }
    },
    (error: any) => {
      console.log("שגיאת הרשמה: ", error);
      alert("הרשמה נכשלה. ייתכן והאימייל כבר קיים במערכת.");
    }
  ); 
}
}

  
