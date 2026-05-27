import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task';
import { Task } from '../models/tasksModel';           // <-- תוקן עם .. כדי לצאת מהתיקייה
import { User } from '../models/usersModel';
import { UsersService } from '../services/users';

@Component({
  selector: 'app-task-list',
templateUrl: './tasks-list.html',
  styleUrls: ['./tasks-list.css']
})
export class TaskList implements OnInit {
    myTasks: Task[] = [];
  connectedUserEmail: string = '';
  
  constructor(private taskService: TaskService, private us:UsersService ,private cdr: ChangeDetectorRef ) {}

  getUserEmail() {
    return this.us.currentEmail;
  }

  ngOnInit(): void {
    console.log("המייל שהגיע לקומפוננטה ברגע העלייה:", this.us.currentEmail);
    this.connectedUserEmail = this.us.currentEmail;

    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        console.log("יששש! הנתונים הגיעו מהשרת:", data);
        
        // סינון המשימות לפי המייל מהסרביס (או הצגת הכל אם המשתמש מנהל)
        if (this.us.isAdmin) {
          this.myTasks = data;
        } else {
          // שים לב ל-userEmail באות קטנה בדיוק כמו שראינו במונגו!
          this.myTasks = data.filter(task => (task as any).userEmail === this.us.currentEmail);
        }

        console.log("המשימות של המשתמש הנוכחי המוצגות ברשימה:", this.myTasks);
        
        // מכריח את אנגולר לרענן ולצייר את הרשימה מיד במכה הראשונה
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("אוף, יש שגיאה בחיבור לשרת:", err);
      }
    });
  }
}