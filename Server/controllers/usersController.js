import User from "../models/usersModel.js";

const usersController = {
    // 1. קבלת כל המשתמשים
    get: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: "Error fetching users", error: error.message });
        }
    },

    // 2. קבלת משתמש לפי מזהה
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findById(id); 
            if (user) {
                res.json(user);
            } else {   
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error fetching user", error: error.message });
        }
    },

    // 3. מחיקת משתמש
    dell: async (req, res) => {
        try {
            const id = req.params.id;
            // מחיקה לפי ה-ID של מונגו
            const result = await User.findByIdAndDelete(id);
            
            if (result) {
                res.json({ message: "User deleted successfully" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting user", error: error.message });
        }
    },

//הוספת משתמש חדש
add: async (req, res) => {
    try {
        // req.body צריך להכיל: firstName, lastName, password, email, id
        const newUser = await User.create(req.body);
        if (newUser) {
            res.status(201).json({ success: true, user: newUser }); 
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
},

// התחברות משתמש (לפי שם פרטי וסיסמה)
logIn: async (req, res) => {
    try {
        const firstName = req.body.firstName;
        const password = req.body.password;
        
        // התיקון: מחפשים במונגו לפי השדה firstName שמוגדר במודל שלך
        const user = await User.findOne({ firstName: firstName, password: password });
        
        if (user) {
            res.json(user); 
        } else {
            // עדכון הודעת השגיאה בהתאם
            res.status(401).json({ message: "null" }); 
        }
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
}
};

export default usersController;