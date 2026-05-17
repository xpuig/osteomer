-- Ejecutar en Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql/new)

create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  message text default '',
  date text not null,
  time text not null,
  created_at timestamptz default now()
);

alter table bookings enable row level security;

-- Permitir a cualquiera insertar una reserva
create policy "Anyone can insert bookings"
  on bookings for insert
  to anon
  with check (true);

-- Permitir a cualquiera leer reservas (para el backoffice)
create policy "Anyone can view bookings"
  on bookings for select
  to anon
  using (true);

-- Permitir a cualquiera eliminar reservas (para el backoffice)
create policy "Anyone can delete bookings"
  on bookings for delete
  to anon
  using (true);
