-- =============================================
-- 1. Crear tabla (si no existe)
-- =============================================
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

-- =============================================
-- 2. Habilitar Row Level Security
-- =============================================
alter table bookings enable row level security;

-- =============================================
-- 3. Políticas RLS
-- =============================================

-- Cualquier usuario (anon) puede insertar una reserva
drop policy if exists "Anyone can insert bookings" on bookings;
create policy "Anyone can insert bookings"
  on bookings for insert
  to anon
  with check (true);

-- Cualquier usuario (anon) puede leer citas (necesario para
-- comprobar disponibilidad en el calendario sin iniciar sesión)
drop policy if exists "Anyone can view bookings" on bookings;
create policy "Anyone can view bookings"
  on bookings for select
  to anon
  using (true);

-- Solo usuarios autenticados pueden leer datos completos (backoffice)
drop policy if exists "Authenticated users can view bookings" on bookings;
create policy "Authenticated users can view bookings"
  on bookings for select
  to authenticated
  using (true);

-- Solo usuarios autenticados pueden eliminar citas (backoffice)
drop policy if exists "Authenticated users can delete bookings" on bookings;
create policy "Authenticated users can delete bookings"
  on bookings for delete
  to authenticated
  using (true);
