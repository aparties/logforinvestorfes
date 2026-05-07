# Canvas MVP LFI

Propietario: Armando Fiestas Anton

## Business Model Canvas: MVP logforinvestor.com

### 1. Propuesta de Valor (MVP)

- **Filtro de "Smart Money":** Acceso gratuito a la lista de las 500 mejores empresas por volumen (datos de TradingView) para atraer tráfico.
- **Cursos de Inversión:** 
    - **Básico:** Inversión pasiva por **$67**.
    - **Intermedio:** Inversión activa basada en Stan Weinstein por **$147**.
    - **Bundle:** Ambos cursos por **$167**.
- **Validación de Estrategia:** Calculadora interactiva simple que muestra el poder del largo plazo frente al ahorro tradicional.

### 2. Segmentos de Clientes (Prioridad)

- **Suscriptores más activos de "Football Exchange & Systems":** Aquellos que ya comentan y buscan llevar su análisis de datos al mercado financiero.
- **Hablantes de inglés/europeos:** Que buscan una herramienta técnica sencilla pero con respaldo humano.
- **Idioma de la plataforma:** El idioma por defecto será **Inglés (English)**, con la opción de cambiar a **Español**.

### 3. Canales (Foco total)

- **YouTube:** Un video dedicado explicando la nueva herramienta gratuita en la web.
- **Landing Page única:** Una sola página en `logforinvestor.com` que contenga el filtro (gratis) y la oferta de los cursos debajo.

### 4. Relación con el Cliente

- **Transparencia Radical:** Explicar claramente que es un sistema basado en datos, no en promesas mágicas.
- **Automatización:** Todo el proceso desde el login con Google hasta el acceso al curso debe ser automático para que tú no pierdas tiempo operativo.

### 5. Fuentes de Ingresos (MVP)

- **Venta directa via Stripe:**
    - Curso Básico ($67).
    - Curso Intermedio ($147).
    - Bundle Básico + Intermedio ($167).
- **Sin suscripciones:** Solo pagos únicos para reducir la fricción inicial.

### 6. Actividades Clave (Lo mínimo necesario)

- **Grabación de 5-10 lecciones esenciales:** No necesitas 50 videos, solo los necesarios para que el usuario aprenda a operar el sistema de Weinstein.
- **Conexión API -> Supabase:** Asegurar que los datos de la bolsa se refresquen correctamente cada 15 min.
- **Configuración de Webhooks:** Para que cuando Stripe reciba el dinero, Supabase "abra" el curso al alumno.

### 7. Recursos Clave (Mínimos)

- **Stack:** Next.js + Supabase + Stripe.
- **Contenido:** Tu conocimiento sobre las 4 etapas de Weinstein y el script de Pine Script.

### 8. Asociaciones Clave

- **Stripe:** Como único procesador de pagos.
- **YouTube:** Como único motor de tráfico.

### 9. Estructura de Costos (Bajo Riesgo)

- **Costo $0 o cercano a cero:** Usando los tiers gratuitos de Vercel y Supabase.
- **Bunny.net:** Solo pagarás unos pocos centavos por cada vez que alguien vea tus videos.