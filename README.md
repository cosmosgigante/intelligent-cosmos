# CONVAL — Corporate Web Platform

Plataforma web corporativa modular y lista para producción, construida con **Next.js 14 (App Router)** + TypeScript + CSS Modules.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router, SSG/SSR) |
| Lenguaje | TypeScript |
| Estilos | CSS Modules + CSS custom properties |
| Email | Resend API |
| Icons | Lucide React |
| Deploy | Vercel / Netlify / VPS |

---

## Estructura del proyecto

```
conval-web/
├── app/                    # Páginas y rutas (App Router)
│   ├── api/                # API endpoints
│   │   ├── contacto/       # POST — formulario de contacto (Resend)
│   │   ├── portfolio/      # GET — lista de proyectos
│   │   └── productos/      # GET — lista de productos
│   ├── contacto/           # Página: /contacto
│   ├── nosotros/           # Página: /nosotros
│   ├── portfolio/          # Página: /portfolio
│   ├── productos/          # Página: /productos
│   │   └── [slug]/         # Página: /productos/:slug (SSG)
│   ├── servicios/          # Página: /servicios
│   ├── layout.tsx          # Root layout (SEO, Nav, Footer)
│   └── page.tsx            # Home
├── components/
│   ├── contacto/           # ContactForm
│   ├── home/               # Hero, ServicesPreview, ProductsPreview
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Badge, SectionHeader, IframeEmbed
├── data/                   # Contenido (TypeScript — editable sin tocar el core)
│   ├── portfolio.ts
│   ├── products.ts
│   ├── services.ts
│   └── site.ts             # ← Cambiar nombre de empresa, email, redes aquí
├── lib/
│   ├── resend.ts           # Email client
│   └── utils.ts
├── types/
│   └── index.ts            # Interfaces TypeScript
├── .env.local.example      # Variables de entorno (plantilla)
└── next.config.ts
```

---

## Inicio rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.local.example .env.local
```

Editar `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_xxxxxxxx          # de https://resend.com (gratis)
CONTACT_TO_EMAIL=tu@email.com
```

> **Sin Resend:** el formulario de contacto funciona igual en modo desarrollo — los mensajes se loguean en la consola del servidor.

### 3. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Deploy en Vercel (recomendado)

```bash
npx vercel
```

O conectar el repositorio en [vercel.com](https://vercel.com) y agregar las variables de entorno en el dashboard.

### Variables de entorno en producción

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (ej: `https://conval.dev`) |
| `RESEND_API_KEY` | API key de Resend para envío de emails |
| `CONTACT_TO_EMAIL` | Email de destino para el formulario de contacto |

---

## Deploy en Netlify

```bash
npm run build
```

Configurar en `netlify.toml`:

```toml
[build]
  command   = "npm run build"
  publish   = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## Personalización

### Cambiar nombre de empresa, tagline y redes

Editar **`data/site.ts`** — un solo archivo controla todo el branding.

### Agregar un nuevo producto

Abrir **`data/products.ts`** y agregar un objeto al array:

```ts
{
  id: 'prod-004',
  slug: 'mi-producto',
  name: 'Mi Producto',
  tagline: 'Tagline del producto',
  description: 'Descripción corta.',
  longDescription: 'Descripción larga para la página de detalle.',
  status: 'active',          // 'active' | 'beta' | 'development'
  category: 'SaaS',
  tech: ['Next.js', 'Node.js'],
  features: ['Feature 1', 'Feature 2'],
  iframeUrl: 'https://mi-app.com',   // opcional — embed en la página
  externalUrl: 'https://mi-app.com', // opcional — botón externo
}
```

La página `/productos/mi-producto` se genera automáticamente en build (SSG).

### Agregar un proyecto al portfolio

Editar **`data/portfolio.ts`** y agregar un objeto al array.

### Agregar un servicio

Editar **`data/services.ts`**.

---

## API Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/productos` | Lista de productos. Soporta `?category=` y `?status=` |
| `GET` | `/api/portfolio` | Lista de proyectos. Soporta `?category=` y `?featured=true` |
| `POST` | `/api/contacto` | Envía email vía Resend. Requiere `name`, `email`, `message` |

---

## Escalabilidad

El proyecto está preparado para:

- **Login / Auth** — Agregar NextAuth.js en `app/api/auth/`
- **Dashboard de administración** — Nueva ruta `app/admin/`
- **Pagos / Subscripciones** — Integrar Stripe en API routes
- **CMS externo** — Reemplazar `data/*.ts` con llamadas a Contentful, Sanity o similar
- **Multi-tenant SaaS** — El sistema de slugs y data layer ya está diseñado para eso

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción local
npm run lint     # Linter (ESLint)
```

---

## Licencia

Código propietario — CONVAL. Todos los derechos reservados.
