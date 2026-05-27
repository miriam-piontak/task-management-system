import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // ייבוא של ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TaskService } from '../services/task';
import { UsersService } from '../services/users';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, FullCalendarModule], 
  templateUrl: './diary.html',
  styleUrls: ['./diary.css']
})
export class Diary implements OnInit {
  
  isLoaded: boolean = false;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth', 
    initialDate: new Date().toISOString().split('T')[0],
    locale: 'he', 
    events: [] 
  };

  // מזריקים את cdr (ChangeDetectorRef) בקונסטרקטור
  constructor(
    private taskService: TaskService, 
    private us: UsersService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    // הדפסה לבדיקה - נראה שהמייל קיים בסרביס
    console.log("המייל מהסרביס בתוך היומן:", this.us.currentEmail);

    this.taskService.getAllTasks().subscribe({
      next: (allTasks) => {
        let myTasks: any[] = [];

        // סינון רגיל ונקי לפי הסרביס (userEmail באות קטנה)
        if (this.us.isAdmin) {
          myTasks = allTasks;
        } else {
          myTasks = allTasks.filter(task => task.userEmail === this.us.currentEmail);
        }

        this.calendarOptions = {
          ...this.calendarOptions,
          events: myTasks.map(task => ({
            title: task.description,
            date: task.date, 
            backgroundColor: task.color || '#3788d8'
          })) as any
        };

        this.isLoaded = true; 
        
        // 🔥 השורה שמצילה אותנו: מכריחה את אנגולר לרענן את המסך מיד בריצה הראשונה!
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("שגיאה בטעינת המשימות:", err);
        this.isLoaded = true; 
        this.cdr.detectChanges();
      }
    });
  }
}