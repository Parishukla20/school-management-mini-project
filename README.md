# school-management-mini-project
This is a mini project based on management of school data 

# My School Project

Simple Next.js app to add and show schools (MySQL).

## Features
- Add school with image (uploads to public/schoolImages or Cloudinary)
- Show schools in responsive card grid
- Uses react-hook-form for validation
- MySQL backend (serverless API routes)

## SQL
Run:
```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  contact VARCHAR(30),
  image TEXT,
  email_id VARCHAR(255)
);
