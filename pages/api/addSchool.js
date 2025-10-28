import { connectToDatabase } from "@/lib/db";
import multer from "multer";
import path from "path";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "./public/schoolImages";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("image")(req, {}, async (err) => {
      if (err) return res.status(500).json({ error: err.message });

      try {
        const { name, address, city, state, contact, email_id } = req.body;
        const image = req.file ? `/schoolImages/${req.file.filename}` : "";

        const db = await connectToDatabase();
        await db.execute(
          "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [name, address, city, state, contact, image, email_id]
        );

        res.status(200).json({ message: "School added successfully!" });
      } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: error.message });
      }
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  }
}
