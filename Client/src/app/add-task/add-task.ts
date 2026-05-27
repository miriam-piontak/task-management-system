import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskTypesService } from '../services/task-types';
import { UsersService } from '../services/users';
import { TaskService } from '../services/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask implements OnInit {
  
  // משתני השדות המחוברים ל-HTML ב-ngModel
  description: string = "";
  date: string = "2026-05-25"; // נשאר string בשביל ה-input של הדפדפן
  taskTypeId: number = 0;
  color: string = '#000000';   // צבע ברירת מחדל התחלתי ללוח השנה
  userEmail: string = "";
  
  // מערך ריק שיתמלא בצורה דינמית מהשרת
  taskTypes: any[] = [];

  // הזרקת כל הסרביסים והראוטר בצורה תקינה ומלאה
  constructor(
    private taskTypesService: TaskTypesService,
    private us: UsersService,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // שליפת סוגי המשימות מהקולקשן במונגו מיד עם עליית הדף
    this.taskTypesService.getAllTypeTasks().subscribe({
      next: (data) => {
        this.taskTypes = data;
        console.log("סוגי המשימות הגיעו בהצלחה מהשרת:", this.taskTypes);
      },
      error: (err) => {
        console.error("אופס, הייתה שגיאה בהבאת סוגי המשימות:", err);
      }
    });
  }

  saveTask() {
    // בניית אובייקט המשימה החדש
    const newTask = {
  description: this.description,
  date: new Date(this.date),
  taskTypeId: Number(this.taskTypeId),
  color: this.color,
  userEmail: this.us.currentEmail
};

    console.log("אובייקט המשימה המוכן לשליחה:", newTask);

    // פנייה לסרביס לשמירה בבסיס הנתונים
    this.taskService.addNewTask(newTask).subscribe({
      next: (response) => {
        alert('המשימה נוספה בהצלחה! 🎉');
        
        // ניווט אוטומטי חזרה ליומן הנקי כדי לראות את המשימה משובצת
        this.router.navigate(['/diary']);
      },
      error: (err) => {
        console.error("אופס, השמירה נכשלה בשרת:", err);
        alert('הייתה שגיאה בשמירת המשימה, נסי שוב.');
      }
    });
  }
}