import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskType } from '../models/taskTypesModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskTypesService {
  private apiUrl  = 'http://localhost:3000/typeTasks';
    //קבלת כל סוגי משימות
    constructor(private http: HttpClient) {}
    getAllTypeTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(`${this.apiUrl}/getAllTypeTasks`);
    }

    //קבלת סוג משימה לפי קוד מזהה
    getTypeTaskById(id:string):Observable<TaskType>{
      return this.http.get<TaskType>(`${this.apiUrl}/getTypeTaskById/${id}`);
    }
    
    //מחיקת סוג משימה
    deleteTypeTask(id:string):Observable<any>{
      return this.http.delete<any>(`${this.apiUrl}/deleteTypeTask/${id}`)
    }

    //הוספת סוג משימה חדש
    addNewTask(newTypeTask:TaskType):Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/addTypeTask`,newTypeTask)
    }
    
}

