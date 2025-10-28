import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const db = await connectToDatabase();
  const [rows] = await db.query("SELECT * FROM schools");
  res.status(200).json(rows);
}
