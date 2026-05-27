import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/tasksModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl  = 'http://localhost:3000/tasks';
    //קבלת כל המשימות
    constructor(private http: HttpClient) {}
    getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/getAllTasks`);
    }

    //קבלת משימה לפי קוד מזהה
    getTaskById(id:string):Observable<Task>{
      return this.http.get<Task>(`${this.apiUrl}/getTaskById/${id}`);
    }
    
    //מחיקת משימה
    deleteTask(id:string):Observable<any>{
      return this.http.delete<any>(`${this.apiUrl}/deleteTask/${id}`)
    }

    //הוספת משימה חדשה
    addNewTask(newTask:Task):Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/addTask`,newTask)
    }
    //שליפת משימה לפי תז משתמש
    getTaskByUserId(userId:string):Observable<Task[]>{
      return this.http.get<Task[]>(`${this.apiUrl}/getTaskByUserId/${userId}`)
    }
}
