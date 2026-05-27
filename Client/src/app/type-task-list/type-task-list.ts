import { Component,OnInit } from '@angular/core';
import { TaskTypesService } from '../services/task-types'; // ודאי שהנתיב לקובץ הסרוויס החדש שלך מדויק
import { TaskType } from '../models/taskTypesModel';

@Component({
  selector: 'app-type-task-list',
  imports: [],
  templateUrl: './type-task-list.html',
  styleUrl: './type-task-list.css',
})
export class TypeTaskList implements OnInit{
  // 1. מערך מקומי שיכיל את סוגי המשימות שיגיעו מהשרת
  allTypes: TaskType[] = [];

  // 2. הזרקת הסרוויס החדש של סוגי המשימות
  constructor(private taskTypesService: TaskTypesService) {}

  ngOnInit(): void {
    // 3. קריאה לפונקציה מהסרוויס ופתיחת הצינור
    this.taskTypesService.getAllTypeTasks().subscribe({
      next: (data) => {
        console.log("חגיגה! סוגי המשימות הגיעו מהשרת:", data);
        this.allTypes = data; // שומרים את הנתונים במערך המקומי
      },
      error: (err) => {
        console.error("אופס, יש שגיאה בקבלת סוגי המשימות:", err);
      }
    });
  }
}