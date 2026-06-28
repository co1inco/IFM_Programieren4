
CREATE TABLE IF NOT EXISTS public.project (
  id int GENERATED ALWAYS AS IDENTITY NOT NULL,
  title varchar(255) NOT NULL,
  shortDescription varchar(255) NOT NULL,
  longDescription varchar(255) NOT NULL,
  logo varchar(255) NOT NULL,
  primaryResponsible varchar(255) NOT NULL,
  startDate date NOT NULL,
  endDate date NOT NULL
);

CREATE TABLE IF NOT EXISTS public.taskArea(
  id int GENERATED ALWAYS AS IDENTITY NOT NULL,
  shortDescription varchar(255) NOT NULL,
  longDescription varchar(255) NOT NULL,
  projectId INT NOT NULL,
  CONSTRAINT fk_project FOREIGN KEY (projectId) REFERENCES public.project(id)
);

CREATE TABLE IF NOT EXISTS public.artifact(
  id int GENERATED ALWAYS AS IDENTITY NOT NULL,
  title varchar(255) NOT NULL,
  shortDescription varchar(255) NOT NULL,
  taskAreaId INT NOT NULL,
  CONSTRAINT fk_taskArea FOREIGN KEY (taskAreaId) REFERENCES public.taskArea(id)
)


-- creates a schema or initial table
CREATE TABLE IF NOT EXISTS sample (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
