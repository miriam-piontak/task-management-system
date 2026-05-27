import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/usersModel';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users';

  currentUser:string="Not connected"
  isAdmin:boolean=false;
  currentEmail: string = ""
  connectedUserEmail: any;

  constructor(private http: HttpClient) {}

  logIn(password:string,name:string):boolean
  {
    if(password=="1234"&&name=="מנהל")
    {
      this.currentUser="מנהל"
      this.isAdmin=true;
      return true;

    }
    return false;
  }

      //קבלת כל המשתמשים
      getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}/getAllusers`);
      }
  
      //קבלת משתמש לפי קוד מזהה
      getUserById(id:string):Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/getUserById/${id}`);
      }
      
      //מחיקת משתמש
      deleteUser(id:string):Observable<any>{
        return this.http.delete<any>(`${this.apiUrl}/deleteUser/${id}`)
      }
  
      //הוספת משתמש חדש
      addUser(newUser: Partial<User>):Observable<any>{
        return this.http.post<any>(`${this.apiUrl}/addUser`,newUser)
      }
      // התחברות משתמש
      logInUser(newUser: Partial<User>): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/logInUser`, newUser);
}

}

