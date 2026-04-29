-- creates a schema or initial table
CREATE TABLE IF NOT EXISTS sample (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
