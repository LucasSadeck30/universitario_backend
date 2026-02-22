CREATE TABLE "Curso" (
  "id" integer PRIMARY KEY,
  "nome" varchar,
  "duracao" integer,
  "created_at" timestamp
);

CREATE TABLE "Aluno" (
  "id" integer PRIMARY KEY,
  "nome" varchar,
  "cursoId" integer,
  "created_at" timestamp
);

ALTER TABLE "Aluno" ADD FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id");
