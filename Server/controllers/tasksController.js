//דבר ראשון נייבא את המודל 
//נזכור תמיד להוסיף js בסוף!!!
//נוכל לשנות את השם כמו שיצאנו במודל
import Task from "../models/tasksModel.js";

//ניצור את הקונטרולר
const tasksController={
//בתוכו נכתוב את כל הפונקציות למסד הנתונים
    //קבלת כל הנתונים
get: async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks); // הדבר היחיד שהיה חסר!
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
},

    //קבלת משימה לפי קוד שהתקבל מהמשתמש
    getById: async (req, res) => {
        try {
            //נכניס למשתנה את הקוד שהמשתמש הכניס
            const id = req.params.id;
            //נמצא את המשימה לפי הקוד
            const task = await Task.findById(id); 
            //אם המשימה נמצאה
            if (task) {
                //תחזיר את המשימה
                res.json(task);
                //לא מצא את המשימה לפי הקוד שהתקבל
            } else {   
                //מחזיר תשובה שלא מצא את המשתמש
                res.status(404).json({ message: "Task not found" });
            }
            //הקוד נפל
        } catch (error) {
            //מחזיר הודעה מתאימה
            res.status(500).json({ message: "Error fetching task", error: error.message });
        }
    },
    // 3. מחיקת משימה
    dell: async (req, res) => {
        try {
            //שמירה במשתנה את הקוד שנרצה למחוק
            const id = req.params.id;
            //מחיקה לפי הקוד של מונגו
            //ו/ומר במשתנה אם הצליח למחוק
            const result = await Task.findByIdAndDelete(id);
            //אם הצליח למחוק
            if (result) {
                //מדפיס הודעה מתאימה
                res.json({ message: "Task deleted successfully" });
                //אם לא
            } else {
                //לא מצא ולכן לא מחק
                res.status(404).json({ message: "Task not found" });
            }
            //נפל מאיזשהי סיבה
        } catch (error) {
            res.status(500).json({ message: "Error deleting task", error: error.message });
        }
    },
    //הוספת משימה חדש
    add: async (req, res) => {
        try {
            //מקבלת מהבודי את כל הפרטים
            //ומכניסה למשתנה חדש
            const newTask = await Task.create(req.body);
            //אם הצליח לקבל את הפרטים מהמשתמש ללא תקלה
            if (newTask) {
                //מחזיר אמת
                res.status(201).json({ success: true}); 
            } else {
                res.json({ success: false });
            }
        } catch (error) {
            res.status(500).json({ message: "Error creating user", error: error.message });
        }
    },
    //שליפת משימה לפי ת.ז. משתמש
getByTz: async (req, res) => {
    try {
        // מקבל את התז שהתקבל מהראוטר
        const userId = req.params.userId;
        
        // מוצא את כל המשימות ששייכות ל-userId הזה
        const tasks = await Task.find({ userId: userId });
        
        // התיקון: בודקים האם נמצאו משימות במערך
        if (tasks && tasks.length > 0) {
            res.json(tasks);
        } else {
            res.status(404).json({ message: "No tasks found for this user" });
        } // הסוגריים כאן סוגרים את ה-else בצורה נכונה
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
}
}
//וניצא אותו בסוף כדי שהראוטס יכיר אותו
export default tasksController