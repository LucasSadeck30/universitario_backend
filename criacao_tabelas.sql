CREATE TABLE public.users (
    id serial4 NOT NULL,          -- ID auto incremento
    "name" varchar(255) NULL,     -- Nome do usuário
    email varchar(255) NULL,      -- Email
    "password" varchar(255) NULL, -- Senha
    created_at date NULL,         -- Data de criação
    updated_at date NULL,         -- Data de atualização
    CONSTRAINT users_pkey PRIMARY KEY (id)  -- Chave primária
);
CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);

CREATE TABLE public.notes (
    id serial4 NOT NULL,          -- ID auto incremento
    user_id int4 NOT NULL,        -- ID do usuário dono da nota
    title varchar(255) NULL,      -- Título da nota
    body varchar(255) NULL,       -- Corpo da nota
    created_at date NULL,
    updated_at date NULL,
    CONSTRAINT notes_pkey PRIMARY KEY (id),
    CONSTRAINT notes_user_id_fkey FOREIGN KEY (user_id) 
        REFERENCES public.users(id)  -- ☝ Relação com a tabela users
);
```