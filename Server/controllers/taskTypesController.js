//דבר ראשון נייבא את המודל 
//נזכור תמיד להוסיף js בסוף!!!
//נוכל לשנות את השם כמו שיצאנו במודל
import TaskType from "../models/taskTypesModel.js";

//ניצור את הקונטרולר
const typeTasksController={
//בתוכו נכתוב את כל הפונקציות למסד הנתונים
    //קבלת כל הנתונים
get: async (req, res) => {
    try {
        const taskType = await TaskType.find();
        res.json(taskType); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching taskType", error: error.message });
    }
},

    //קבלת סוג משימה לפי קוד שהתקבל מהמשתמש
    getById: async (req, res) => {
        try {
            //נכניס למשתנה את הקוד שהמשתמש הכניס
            const id = req.params.id;
            //נמצא את המשימה לפי הקוד
            const typeTask = await TaskType.findById(id); 
            //אם המשימה נמצאה
            if (typeTask) {
                //תחזיר את המשימה
                res.json(typeTask);
                //לא מצא את המשימה לפי הקוד שהתקבל
            } else {   
                //מחזיר תשובה שלא מצא את המשתמש
                res.status(404).json({ message: "TypeTask not found" });
            }
            //הקוד נפל
        } catch (error) {
            //מחזיר הודעה מתאימה
            res.status(500).json({ message: "Error fetching typeTask", error: error.message });
        }
    },
    // 3. מחיקת סוג משימה
    dell: async (req, res) => {
        try {
            //שמירה במשתנה את הקוד סוג משימה שנרצה למחוק
            const id = req.params.id;
            //מחיקה לפי הקוד של מונגו
            //ונשמור במשתנה אם הצליח למחוק
            const result = await TaskType.findByIdAndDelete(id);
            //אם הצליח למחוק
            if (result) {
                //מדפיס הודעה מתאימה
                res.json({ message: "TaskType deleted successfully" });
                //אם לא
            } else {
                //לא מצא ולכן לא מחק
                res.status(404).json({ message: "TaskType not found" });
            }
            //נפל מאיזשהי סיבה
        } catch (error) {
            res.status(500).json({ message: "Error deleting taskType", error: error.message });
        }
    },
    //הוספת סוג משימה חדשה
    add: async (req, res) => {
        try {
            //מקבלת מהבודי את כל הפרטים
            //ומכניסה למשתנה חדש
            const newTaskType = await TaskType.create(req.body);
            //אם הצליח לקבל את הפרטים מהמשתמש ללא תקלה
            if (newTaskType) {
                //מחזיר אמת
                res.status(201).json({ success: true}); 
            } else {
                res.json({ success: false });
            }
        } catch (error) {
            res.status(500).json({ message: "Error creating new taskType", error: error.message });
        }
    },

}
//וניצא אותו בסוף כדי שהראוטס יכיר אותו
export default typeTasksController