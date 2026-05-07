# DB LFI

Propietario: Armando Fiestas Anton

### 1. Tabla: `profiles`

Supabase maneja la autenticación de forma interna, pero necesitamos esta tabla para asociar los datos del usuario con su progreso y sus compras.

- **`id`** (uuid, primary key): Referencia al `auth.users` de Supabase.
- **`full_name`** (text): Nombre del usuario (obtenido de Google).
- **`email`** (text): Para comunicaciones y soporte.
- **`stripe_customer_id`** (text): Para identificar al cliente en Stripe y permitir el "One-Click Upgrade".
- **`created_at`** (timestamp): Fecha de registro.

### 2. Tabla: `courses`

Aquí definimos los dos niveles. Al tenerlos en una tabla, el frontend puede renderizarlos dinámicamente.

- **`id`** (uuid, primary key).
- **`title`** (text): "Basic Investor" o "Intermediate System".
- **`description`** (text): Resumen de lo que aprenderán.
- **`price`** (numeric): 30 o 70.
- **`stripe_price_id`** (text): El ID del producto creado en el dashboard de Stripe.
- **`level`** (integer): 1 para básico, 2 para intermedio.

### 3. Tabla: `enrollments` (La tabla "Llave")

Esta es la tabla más importante. Si un registro existe aquí, el usuario tiene acceso al curso.

- **`id`** (uuid, primary key).
- **`user_id`** (uuid, foreign key): Referencia a `profiles.id`.
- **`course_id`** (uuid, foreign key): Referencia a `courses.id`.
- **`status`** (text): "completed" (pago verificado).
- **`pinescript_access`** (boolean): Por defecto `false`, `true` solo para el curso intermedio.
- **`enrolled_at`** (timestamp).

### 4. Tabla: `market_cache`

Para gestionar tu filtro de las 500 mejores empresas sin saturar la API externa y cumplir con los 15 minutos de refresco.

- **`symbol`** (text, primary key): Ejemplo "AAPL", "MSFT".
- **`company_name`** (text).
- **`market_cap`** (numeric).
- **`volume_usd`** (numeric).
- **`price`** (numeric).
- **`sma_30_weeks`** (numeric): Para aplicar la lógica de Weinstein directamente en la tabla.
- **`last_updated`** (timestamp).