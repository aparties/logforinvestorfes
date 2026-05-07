# Diagrama E-R LFI

Propietario: Armando Fiestas Anton

# 📊 Diagrama E‑R — [logforinvestor.com](http://logforinvestor.com) (MVP)

<aside>
ℹ️

**Objetivo:** visualizar entidades y relaciones mínimas para Auth + Cursos + Accesos + Filtro público.

</aside>

---

## 1) Diagrama (Mermaid)

```mermaid
erDiagram
    USERS ||--|| PROFILES : "tiene un"
    PROFILES ||--o{ ENROLLMENTS : "adquiere"
    COURSES ||--o{ ENROLLMENTS : "es comprado por"
    
    PROFILES {
        uuid id PK "FK de auth.users"
        string email "Unique"
        string full_name
        string stripe_customer_id "Para One-Click Pay"
        timestamp created_at
    }

    COURSES {
        uuid id PK
        string title "Basic / Intermediate"
        string slug "Unique URL"
        numeric price
        string stripe_price_id "Link con Stripe"
        int level "1 o 2"
        jsonb content_map "Lista videos Bunny.net"
    }

    ENROLLMENTS {
        uuid id PK
        uuid user_id FK "Relación con PROFILES"
        uuid course_id FK "Relación con COURSES"
        boolean pinescript_unlocked "Solo para Intermedio"
        string status "active / refunded"
        timestamp enrolled_at
    }

    MARKET_ASSETS {
        string symbol PK "Ticker (AAPL, TSLA)"
        string name
        numeric current_price
        numeric volume_24h
        int weinstein_stage "Etapa 1-4"
        timestamp last_sync "Cada 15 min"
    }
```

---

## 2) Relaciones (lectura rápida)

- **USERS ↔ PROFILES (1:1)**
    
    `auth.users` es la identidad; `public.profiles` extiende el perfil con datos de negocio.
    
- **PROFILES ↔ ENROLLMENTS (1:N)**
    
    Un usuario puede comprar varios cursos; cada matrícula pertenece a un único perfil.
    
- **COURSES ↔ ENROLLMENTS (1:N)**
    
    Un curso puede ser comprado por muchos usuarios; esto habilita el control de acceso por compra.
    
- **MARKET_ASSETS (independiente / pública)**
    
    No se relaciona con usuarios: es el “motor” del filtro gratuito y se refresca periódicamente.
    

---

## 3) Lógica del MVP (por qué así)

- **Simplicidad:** 4 tablas base para reducir superficie de bugs y acelerar shipping.
- **Integridad:** `enrollments` es el “libro de registro” de pagos/accesos.
- **Escalabilidad:** puedes añadir nuevos cursos (o más niveles) agregando filas en `courses` sin rediseñar la BD.