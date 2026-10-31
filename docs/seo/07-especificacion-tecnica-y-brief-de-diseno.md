# Rhino Audiovisuales — Especificación técnica (Astro) y brief para el diseño visual

Documento 7. Fecha: 31 de octubre de 2026. Cierra la consultoría SEO y entrega el brief al diseño.

---

## Parte A. Especificación técnica de la web

### A.1 Decisiones
| Tema | Decisión |
|---|---|
| Framework | Astro (sitio estático) + Tailwind CSS |
| Hosting | Vercel (o Cloudflare Pages). **Verifica los términos del plan gratuito**: hasta donde sé, el de Vercel es solo para uso no comercial |
| Dominio | Sigue en GoDaddy. Solo se editan los registros A y CNAME. **No tocar servidores de nombres, MX ni TXT** (el correo `info@rhinoaudiovisuales.com` depende de ellos) |
| Dominio canónico | `https://www.rhinoaudiovisuales.com`; sin `www` redirige con 301 |
| Idioma | `lang="es-PE"` |
| URLs | minúsculas, guiones, sin tildes ni ñ, **barra final** en todas |
| Contenido | Colecciones de Astro (servicios, casos, preguntas frecuentes), para que cambiar un precio o un plazo sea editar un archivo |

### A.2 Estructura del proyecto (orientativa)
```
src/
  content/
    servicios/*.md        # 12 servicios (frontmatter: title, description, h1, faqs, relacionados)
    casos/*.md            # 4 proyectos
  layouts/Base.astro      # head SEO, schema, header, footer
  components/             # Hero, ServiceCard, Steps, Faq, CaseCard, CtaBand, Breadcrumbs, WhatsAppButton
  pages/
    index.astro
    servicios/index.astro
    servicios/[slug].astro
    portafolio/index.astro
    portafolio/[slug].astro
    nosotros.astro, contacto.astro, gracias.astro, 404.astro
    robots.txt.ts
public/
  Brochure.pdf            # nombre exacto, con mayúscula inicial
  show.html               # fase A: se conserva (ver A.5)
```
`astro.config.mjs`: `site: 'https://www.rhinoaudiovisuales.com'`, `trailingSlash: 'always'`, `build.format: 'directory'`, integraciones de Tailwind y sitemap.

### A.3 Reglas de SEO que el sitio impone solo
- **Prueba al construir:** el build falla si un título pasa de 60 caracteres, una descripción de 155, una página no tiene exactamente un H1, o hay `[COMPLETAR]` / `[VALIDAR]` en el texto que se va a publicar.
- Cada página: `<title>`, descripción, `canonical` absoluta, Open Graph con imagen absoluta (`og:type=website`), `lang`, breadcrumbs.
- `sitemap.xml` automático (solo URLs indexables) y `robots.txt` que lo declara.
- Datos estructurados (JSON-LD): `Organization` + `ProfessionalService` (nombre "Rhino Audiovisuales", teléfono, correo, horario, área "Lima", redes en `sameAs`), `WebSite`, `BreadcrumbList` en todas las internas, `Service` + `FAQPage` en servicios, `VideoObject` en casos y videos, `Review` solo con reseñas verificables.
- Enlaces internos: menú con todas las páginas de servicio, bloques de "servicios relacionados" y pie con todas las URLs. Cada página importante a un máximo de 2 clics de la home.
- Imágenes: formatos modernos (WebP/AVIF), dimensiones fijas, `alt` descriptivo, carga diferida salvo la primera.
- Videos: incrustar con carga diferida (imagen de portada hasta el clic). Ningún video pesado con reproducción automática.

### A.4 Rendimiento (Core Web Vitals, móvil)
Objetivos: LCP < 2,5 s · INP < 200 ms · CLS < 0,1 · peso de la home < 1 MB sin videos.
Tipografías propias (máximo 2 familias), CSS crítico en línea, sin librerías de JavaScript innecesarias; JavaScript solo en formulario y menú.

### A.5 Redirecciones (en `vercel.json`, todas 301)
```json
{
  "trailingSlash": true,
  "redirects": [
    { "source": "/video.html",      "destination": "/servicios/produccion-audiovisual/", "permanent": true },
    { "source": "/fotografia.html", "destination": "/servicios/fotografia/",             "permanent": true },
    { "source": "/marketing.html",  "destination": "/servicios/marketing-digital/",      "permanent": true },
    { "source": "/web.html",        "destination": "/servicios/desarrollo-web/",         "permanent": true }
  ]
}
```
- `www` principal; el dominio sin `www` se redirige con 301 desde la configuración de dominios de Vercel.
- **`/show.html`:**
  - **Opción recomendada (riesgo mínimo):** se publica igual en la misma URL (archivo en `public/` o ruta equivalente; **verifico al construir cuál funciona con la configuración de directorios**) y se redirige a `/show-infantil-navideno/` en enero.
  - **Opción asumiendo riesgo (decisión del dueño):** redirigir desde el primer día añadiendo una línea más. Las posiciones del show pueden moverse durante semanas, en plena temporada.
- **`/Brochure.pdf`:** sin redirección; el archivo se publica con ese nombre exacto (Vercel distingue mayúsculas).
- Después del cambio se prueba cada redirección con una petición real (código 301 y destino correcto).

### A.6 Formulario y medición
- **Formulario:** servicio externo (Formspree, Web3Forms) o función en Vercel con envío de correo. Con campo trampa anti-spam. Al enviar, redirige a `/gracias/` (`noindex`).
- **Medición:** Google Tag Manager + GA4. Eventos: `form_submit` (carga de `/gracias/`), `whatsapp_click`, `phone_click`, `brochure_download`. Estos eventos se importan a Google Ads **como conversiones, sustituyendo "Vista de una página"**.
- **Botón de WhatsApp** visible en todas las páginas, también fijo en móvil.
- Política de privacidad enlazada en el formulario.

### A.7 Staging, lanzamiento y vigilancia
**Staging (previo):** despliegue de prueba en Vercel con `noindex` (cabecera `X-Robots-Tag` y `robots` que bloquea). **Quitarlo en el lanzamiento es el paso que más se olvida.**

**Lista de comprobación del día del lanzamiento:**
1. Contenido sin `[COMPLETAR]`/`[VALIDAR]`.
2. Todas las URLs responden 200; las antiguas redirigen con 301.
3. `noindex` retirado; `robots.txt` y `sitemap.xml` correctos.
4. Formulario, WhatsApp, teléfono y descarga del brochure probados; eventos visibles en GA4.
5. Etiquetas de conversión de Ads instaladas.
6. En GoDaddy, bajar el TTL 24 horas antes y cambiar **solo** los registros A y CNAME indicados en el panel de Vercel; verificar que el correo sigue funcionando.
7. Hosting antiguo conservado ~30 días como respaldo.

**Después (30 días):**
- Enviar el sitemap nuevo en Search Console y, durante unas semanas, un sitemap temporal con las direcciones antiguas.
- *Inspección de URL → Solicitar indexación* en las 8–10 páginas clave.
- Revisar cada semana: páginas no indexadas, errores 404, posición de "productora audiovisual" y de las consultas del show.
- Actualizar las URL finales en Google Ads y el enlace de la ficha de Google Business.
- No tocar títulos ni URLs durante las primeras 4 semanas, salvo errores.

**No usar servicios de indexación masiva** (por ejemplo Omega Indexer): riesgo sin beneficio claro.

### A.8 Tareas de SEO local que acompañan al lanzamiento
- Ficha de Google Business: categoría principal "Productora de video" y secundarias según los servicios; servicios cargados; fotos propias; WhatsApp; enlace a la web nueva.
- Nombre, dirección y teléfono idénticos en web, ficha y directorios.
- Pedir reseñas reales a clientes (Redinter, Premium Tasting Lima, Bloom of Colors…).
- Altas en Sortlist, geotv.pe y bcontent.
- Perfiles de redes enlazados desde el pie y el schema.

---

## Parte B. Brief para el diseño visual

### B.1 Objetivo del sitio
Que una empresa de Lima que necesita un video, un evento o una transmisión **entienda en 5 segundos qué hace Rhino, vea trabajo real y contacte por WhatsApp o formulario.** Todo lo demás es secundario.

### B.2 Público
- **Principal:** responsables de marketing, comunicación, eventos y administración de empresas e instituciones en Lima. Deciden rápido, comparan 3–5 proveedores y miran el portafolio antes de escribir.
- **Secundario:** organizadores de shows infantiles navideños (temporada).
- Consultan **desde el móvil** una buena parte del tiempo: el diseño parte del móvil.

### B.3 Posicionamiento y tono
"Productora audiovisual que resuelve el evento completo." Profesional, cercano, directo, sin exagerar. Evitar tono publicitario vacío ("somos los mejores").

### B.4 Activos que necesito de ti para el diseño
Logo (vectorial si existe) · colores de marca · fotos reales del equipo y de rodajes · material de los 4 casos · showreel o 2–3 videos · referencias visuales que te gusten y que no te gusten. Lo que ya conozco de tu web actual: favicon `r2.png` e imagen de redes `r4.jpg`.

### B.5 Plantillas que hay que diseñar
1. **Home**
2. **Hub de servicios**
3. **Página de servicio** (12 páginas, una plantilla)
4. **Caso de portafolio** (4 páginas) y **listado de portafolio**
5. **Show infantil navideño** (variante con tono festivo)
6. **Nosotros**
7. **Contacto** (formulario) y **gracias**
8. **404** y **política de privacidad** (plantilla de texto)

### B.6 Componentes necesarios
Cabecera con menú de servicios y botón "Cotizar" · héroe con título, frase de valor, dos botones y un video o imagen · tarjetas de servicio · franja de confianza (solo con datos reales) · pasos del proceso · rejilla de portafolio con reproducción de video · acordeón de preguntas frecuentes · franja de llamada a la acción · formulario corto · pie con teléfono, correo, horario y enlaces · botón de WhatsApp fijo · migas de pan.

### B.7 Restricciones SEO para el diseño
1. **El H1 y la frase de valor son texto real**, visibles sin desplazarse, no imágenes.
2. **El botón de contacto está visible sin desplazarse** en móvil.
3. **Texto en HTML**, nunca dentro de imágenes. Contraste legible y tamaño mínimo cómodo en móvil.
4. **Las plantillas admiten 400–700 palabras** por página sin verse sobrecargadas.
5. **Nada que pese**: sin carruseles pesados, sin reproducción automática de video grande, sin animaciones que muevan el diseño al cargar.
6. **Zonas táctiles de al menos 44 px.**
7. **Cada servicio con su propia página**, no una sola página con pestañas.
8. **Espacio para reseñas, certificaciones y permisos**, pero **vacío hasta que sean reales** (que desaparezca sin romper el diseño).

### B.8 Qué entrego a continuación
**Tres direcciones visuales** (concepto, paleta, tipografía, ejemplo de home en móvil y escritorio), luego el mockup de la elegida y después la construcción en Astro. Para las tres direcciones no necesito más datos, pero el logo, los colores y las fotos reales mejorarán mucho el resultado.
