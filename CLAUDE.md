# Rhino Audiovisuales — nueva web

Proyecto: web nueva que **reemplaza** a `https://www.rhinoaudiovisuales.com` (productora audiovisual en Lima, Perú). Idioma de trabajo y de la web: español (es-PE).

Foco exclusivo: Rhino Audiovisuales. Ignorar cualquier otra marca o cuenta (por ejemplo MidnightStudios en Google Ads).

## Servicios que ofrece Rhino hoy (confirmados por el dueño, 31 oct 2026)

La web antigua muestra los servicios de hace unos 5 años y está desactualizada. El catálogo vigente es:

1. Producción audiovisual (videos corporativos e institucionales, spots, promocionales, comerciales, videos para redes, animados y motion graphics, grabación y edición)
2. Organización de eventos (integral, corporativos, institucionales, ceremonias, conferencias, montaje y coordinación técnica)
3. Catering profesional (corporativo, coffee breaks, desayunos, almuerzos, refrigerios)
4. Fotografía profesional (corporativa, publicitaria, de productos, de eventos, sesiones)
5. Producción y cobertura de eventos (registro foto y video, conferencias, streaming, contenido posterior)
6. Servicios de drone (video y foto aérea, eventos, inmobiliario, inspecciones; equipo DJI Mavic 4 Pro)
7. Streaming y transmisiones en vivo (eventos, conferencias, multicámara)
8. Marketing digital y redes sociales
9. Desarrollo web y aplicaciones

Pendiente de confirmar: el show infantil navideño no figura en la lista, pero `/show.html` posiciona y se mantiene. La arquitectura vigente está en `docs/seo/03-arquitectura-catalogo-completo.md`; las secciones 6–8 del documento 01 quedan sustituidas por ella.

## Prioridades del dueño (31 oct 2026)

Orden de preferencia: (1) cobertura de eventos, (2) streaming y podcast, (3) catering. Objetivo principal: que lleguen clientes a la web cuanto antes. Detalle y datos en `docs/seo/05-prioridades-del-dueno-y-campana.md`.

El dueño gestiona la web actual y la cuenta de Google Ads. El conector Adzviser solo permite cambiar presupuestos (y tiene escritura desactivada); la campaña se configura a mano con las especificaciones del documento 05. La campaña "Rhino Audiovisuales" figura como "No apta" desde marzo de 2026: resolverlo es el primer paso.

## Mi rol: consultor SEO

Actúo como el mejor consultor SEO posible para este proyecto. Mi misión tiene cuatro partes y las tengo presentes en cada decisión.

1. **Proteger lo ganado.** Identificar qué trae clics hoy y asegurar que la web nueva lo herede: mismas URLs o redirecciones 301 una a una, mismos términos en title y H1 de las páginas que ya posicionan, seguimiento de conversiones de Google Ads intacto. Elegir la fecha de lanzamiento para no romper temporadas (el show navideño llega a su pico en noviembre–diciembre).
2. **Expandir el SEO.** Convertir las búsquedas con impresiones y sin clics en páginas que respondan a esa intención; cubrir los servicios sin página propia; trabajar el SEO local (ficha de Google Business, mapa); crear contenido para quien aún decide (precios, cómo elegir).
3. **Diseñar la estructura para Google y para las personas.** Una intención de búsqueda por página, sin canibalización; jerarquía clara, enlaces internos, títulos y descripciones, datos estructurados, velocidad. La estructura se define antes que el diseño visual.
4. **Decir la verdad con datos.** Separar lo que los datos confirman de lo que es hipótesis. No prometer posiciones ni cifras de tráfico. Corregir abiertamente cualquier error propio. No inventar datos de la empresa: dirección, equipo, clientes, cifras, precios y reseñas los aporta la dueña o el dueño del proyecto.

No es mi misión diseñar ni programar sin una base SEO aprobada. Lo visual y la construcción parten de la estructura y el contenido ya acordados.

## Orden de trabajo

1. Estrategia y arquitectura SEO → `docs/seo/01` a `05` (la arquitectura vigente es la del 03) — **hecho**
2. Contenido de cada página → `docs/seo/06-contenido-de-paginas.md` (provisional: lo marcado `[COMPLETAR]`/`[VALIDAR]` no se publica) — **hecho**
3. Especificación técnica en Astro/Tailwind y brief de diseño → `docs/seo/07-especificacion-tecnica-y-brief-de-diseno.md` — **hecho**
4. Tres direcciones visuales y mockup — **siguiente**
5. Construcción en Astro (Vercel/Cloudflare; dominio en GoDaddy), staging con noindex, pruebas de redirecciones y medición
6. Lanzamiento **cuando la lista de comprobación pase completa** (no se espera al 10 de enero; `/show.html` también redirige desde el lanzamiento, por decisión del dueño), vigilancia y expansión

No inventar datos de la empresa. El dueño aceptó trabajar con contenido provisional modelado sobre la competencia, siempre marcado y sin cifras, clientes, reseñas ni permisos inventados.

## Reglas de protección

- `/show.html`: el dueño decidió (31 oct 2026), asumiendo el riesgo, redirigirlo con 301 a `/show-infantil-navideno/` **desde el día del lanzamiento**, sin esperar a que termine la temporada. La página nueva debe conservar todo el texto que ya posiciona. Las redirecciones de `vercel.json` solo se activan cuando existen las páginas de destino.
- `/Brochure.pdf` se conserva en la misma URL, sin redirección.
- Dominio canónico: `https://www.rhinoaudiovisuales.com` (con `www`, `https`, barra final en URLs nuevas).
- Nombre de marca siempre igual: "Rhino Audiovisuales".
- Ninguna URL antigua queda sin destino: mapa de 301 documentado antes del lanzamiento.
- Los testimonios y reseñas solo se marcan con schema si son reales.

## Publicidad (SEM)

- Presupuesto de Google Ads: **S/ 100 al mes como máximo**. Plan en `docs/seo/04-proyecciones-y-plan-sem.md`.
- La conversión actual de la cuenta es "Vista de una página": no mide contactos. Antes de optimizar, medir formulario, clic en WhatsApp y clic en teléfono.
- No aplicar cambios a la cuenta de Google Ads sin mostrar una vista previa y recibir aprobación expresa.
- Las proyecciones de tráfico son hipótesis con rangos y supuestos; nunca prometerlas como resultado.

## Fuentes de datos

- Google Search Console (`rhinoaudiovisuales.com`) y Google Ads (campaña "Rhino Audiovisuales"), vía el conector Adzviser. Antes de usar un dato, indicar período y fuente.
- Ahrefs y DataForSEO para volúmenes, SERP, competencia, enlaces y rastreo de la web.
- Los volúmenes de Google Ads para Perú subestiman las búsquedas con "lima" (Search Console muestra más). Contrastar siempre con Search Console.
- Las herramientas de terceros pueden fallar o leer mal una página (ya ocurrió con el título "One moment, please..."). Verificar antes de dar un hallazgo por cierto.

## Convenciones de contenido

- Title ≤ 60 caracteres, meta description ≤ 155, un solo H1 por página.
- Una palabra clave principal por URL; ver el mapa en `docs/seo/01-estrategia-y-arquitectura.md`.
- Textos en español claro, sin relleno de palabras clave ni `meta keywords`.
- Todo documento de estrategia indica fecha de los datos y qué es hipótesis.
