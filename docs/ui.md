# Sistema de Diseño: Skiz-Inspired (Bicode Control)

Este documento define la identidad visual "Modern & Trendy" inspirada en el modelo Skiz. La estética se basa en verdes profundos, formas extremadamente redondeadas y un look limpio y minimalista.

## 1. Paleta de Colores

### Modo Oscuro (Original)
- **Background**: `#0b241c` (Bosque Oscuro Profundo).
- **Foreground**: `#a8b5b0` (Gris verdoso suave).
- **Card**: `#143028` (Para cards y secciones).
- **Input**: `#081a14` (Más oscuro que el fondo principal para dar profundidad).
- **Border**: `#1d4034` (Sutiles y de bajo contraste).

### Modo Claro (Nuevo)
- **Background**: `#f4fbf8` (Verde clarito/blanco).
- **Foreground**: `#0b241c` (Texto oscuro legible).
- **Card**: `#ffffff` (Tarjetas blancas).
- **Input**: `#eaf5f0` (Inputs con ligero fondo verde).
- **Border**: `#d1e6dd` (Bordes visibles pero suaves).

### Acentos y Acciones (Ambos modos)
- **Primario (Mint)**: `#57cc99` en Dark, `#2d9368` en Light (para accesibilidad).
- **Secundario (Sage)**: `#80ed99`.

## 2. Formas y Bordes (Shapes)
- **Botones**: `rounded-full` (Pill-shaped).
- **Inputs**: `rounded-2xl` o `rounded-full`.
- **Cards/Contenedores**: `rounded-[40px]` (Esquinas muy redondeadas y suaves).
- **Bordes**: `border-[#1d4034]` (Sutiles y de bajo contraste).

## 3. Tipografía
- **Títulos**: `text-white`, `font-bold`, `tracking-tight`.
- **Cuerpo**: `text-[#a8b5b0]` (Gris verdoso suave) para evitar fatiga visual.
- **Micro-labels**: `text-[#57cc99]`, `font-semibold`, `text-xs`.

## 4. Efectos
- **Gradients**: Radial gradients suaves de `#57cc99/10` en esquinas o bajo títulos.
- **Shadows**: Sombras muy suaves y difusas para elevar elementos del fondo. No usar sombras negras duras.
- **Glassmorphism**: Uso moderado de `backdrop-blur-md` en overlays.

## 5. Componentes Patrón

### Botón Principal
`bg-[#57cc99] text-[#0b241c] rounded-full px-8 py-4 font-bold hover:bg-[#80ed99] transition-all`

### Tarjeta de Producto
`bg-[#143028] border border-[#1d4034] rounded-[40px] p-6 hover:shadow-2xl transition-all`

### Input de Formulario
`bg-[#081a14] border border-[#1d4034] rounded-2xl px-6 py-4 text-white placeholder-emerald-100/10`