import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { UsersService } from '../services/users';
import { GlobalButton } from '../global-button/global-button';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,GlobalButton],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
constructor(private us:UsersService, private router:Router){}
getCurrent()
{
  return this.us.currentUser;
}
getIsAdmin()
{
  return this.us.isAdmin;
}
navigateTo(path: string) {
    this.router.navigate([path]); 
  }
  logOut()
  {
    this.us.currentUser="Not connected"
    this.us.isAdmin=false
    this.router.navigate(['/about']);
  }
}
