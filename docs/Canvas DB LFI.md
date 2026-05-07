# Canvas DB LFI

Propietario: Armando Fiestas Anton

# 🏗️ DB Canvas: [logforinvestor.com](http://logforinvestor.com) (MVP)

## 1) Esquema Entidad–Relación (tablas y columnas)

### A. `public.profiles`

*Propósito:* extender los datos de autenticación de Supabase con información de negocio.

| Columna | Tipo | Restricción | Descripción |
| --- | --- | --- | --- |
| `id` | `uuid` | PK, FK (`auth.users`) | ID único del usuario de Google Auth. |
| `email` | `text` | Unique, Not Null | Correo electrónico para soporte y marketing. |
| `full_name` | `text` | - | Nombre obtenido del perfil de Google. |
| `avatar_url` | `text` | - | Imagen de perfil para la zona de miembros. |
| `stripe_customer_id` | `text` | Unique | ID de cliente en Stripe (para el “One-Click Upgrade”). |
| `created_at` | `timestamp` | default: now() | Fecha de registro inicial. |

### B. `public.courses`

*Propósito:* catálogo de productos disponibles.

| Columna | Tipo | Restricción | Descripción |
| --- | --- | --- | --- |
| `id` | `uuid` | PK | ID único del producto educativo. |
| `slug` | `text` | Unique | URL amigable (ej: `basic-investor`). |
| `title` | `text` | Not Null | Nombre del curso. |
| `price` | `numeric` | Not Null | Precio ($30 o $70). |
| `stripe_price_id` | `text` | Unique | ID de precio de Stripe para el checkout. |
| `level` | `int2` | default: 1 | 1 = Básico, 2 = Intermedio. |
| `content_map` | `jsonb` | - | Lista de IDs de videos ([Bunny.net](http://Bunny.net)) y títulos de lecciones. |

### C. `public.enrollments`

*Propósito:* controlar quién tiene acceso a qué contenido (tabla de unión).

| Columna | Tipo | Restricción | Descripción |
| --- | --- | --- | --- |
| `id` | `uuid` | PK | ID único de la matrícula. |
| `user_id` | `uuid` | FK (`profiles.id`) | Usuario que compró. |
| `course_id` | `uuid` | FK (`courses.id`) | Curso comprado. |
| `pinescript_unlocked` | `boolean` | default: false | Acceso al código de TradingView. |
| `status` | `text` | default: `active` | Estado de la suscripción (`active`, `refunded`). |
| `enrolled_at` | `timestamp` | default: now() | Fecha de la compra exitosa. |

### D. `public.market_assets`

*Propósito:* caché de las ~500 empresas para el filtro gratuito.

| Columna | Tipo | Restricción | Descripción |
| --- | --- | --- | --- |
| `symbol` | `text` | PK | Ticker (ej: `TSLA`). |
| `name` | `text` | Not Null | Nombre de la compañía. |
| `market_cap` | `numeric` | - | Capitalización de mercado. |
| `volume_24h` | `numeric` | - | Volumen en USD negociado hoy. |
| `current_price` | `numeric` | - | Precio actual. |
| `weinstein_stage` | `int2` | - | Etapa calculada (1–4) según SMA 30. |
| `last_sync` | `timestamp` | - | Último refresco (cada 15 min). |

---

## 2) Reglas de seguridad (RLS)

- **Profiles**
    - `SELECT`: solo el usuario autenticado puede leer su propio perfil.
    - `UPDATE`: solo el usuario puede actualizar su nombre o avatar.
- **Courses**
    - `SELECT`: acceso público (incluye visitantes) para ver catálogo y precios.
- **Enrollments**
    - `SELECT`: el usuario solo puede ver registros con su propio `user_id` (protege los videos).
- **Market Assets**
    - `SELECT`: acceso público para que el filtro funcione sin login (captación).

---

## 3) Automatización y triggers (SQL)

- **New User Trigger**
    - Cuando alguien se loguea por primera vez con Google en `auth.users`, se crea automáticamente una fila en `public.profiles` copiando email y nombre.
    - Objetivo: mantener la base sincronizada sin procesos manuales.

---

## 4) Flujo de datos del MVP

1. **Entrada:** usuario llega desde YouTube a `logforinvestor.com`.
2. **Filtro:** Next.js consulta `market_assets` y muestra ~500 empresas (gratis).
3. **Compra:** el usuario elige un curso → Stripe → pago.
4. **Confirmación:** webhook (Edge Function) recibe el éxito de Stripe y crea `enrollments`.
5. **Acceso:** al volver a la web, el sistema detecta el enrollment y habilita el reproductor de [Bunny.net](http://Bunny.net).