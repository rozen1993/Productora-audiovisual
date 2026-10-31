# Rhino Audiovisuales — Estrategia SEO y arquitectura web

Documento 1 de 3. Fecha de los datos: 31 de octubre de 2026.
Siguiente: (2) copy de cada página y (3) tres direcciones visuales + mockup.

**Fuentes:** Google Search Console (nov 2025 – oct 2026), Google Ads (solo campaña "Rhino Audiovisuales"), volúmenes de Google Ads para Perú, SERP en vivo de Google Perú, rastreo de la web actual y perfil de enlaces (DataForSEO).

---

## 1. Resumen ejecutivo

1. **Hay un activo real que proteger.** "productora audiovisual" (29 clics, posición media 6,1) y "productoras audiovisuales" (6 clics, posición 7,7) aportan un tercio del tráfico orgánico. La marca (posición 1,96) y `show.html` (campaña navideña) completan lo que funciona.
2. **El SEO es pobre por estructura, no por falta de autoridad.** Hoy hay 7 URLs. Cientos de búsquedas aparecen en páginas 1–2 sin clics porque ninguna página responde a esa intención (video corporativo, comerciales, eventos, streaming, videoclips, precios).
3. **El mercado de búsqueda en Perú es pequeño.** Esto condiciona las expectativas (ver sección 4). La expansión viene de combinar tres palancas: páginas por servicio e intención, SEO local (ficha de Google) y contenido que atrape a quien aún está decidiendo.
4. **Calendario crítico: no migrar `show.html` ahora.** "show navideño" pasa de 320 búsquedas/mes en octubre a 1.600 en noviembre y 2.400 en diciembre. La temporada empieza esta semana. **Recomiendo lanzar la web nueva a partir del 10 de enero de 2027** y preparar todo mientras tanto.
5. **Corrección a un diagnóstico anterior.** Dije que Search Console leía el título de todas las páginas como "One moment, please...". Eso era un artefacto de la herramienta de Adzviser, no de tu web. Un rastreo directo muestra que la home sí tiene título, H1 y descripción (ver sección 5).

---

## 2. Qué se protege (no se toca ni se rompe)

| Activo | Dato | Regla |
|---|---|---|
| Home, término "productora audiovisual" | 29 clics, pos. 6,1, 735 impresiones | Conservar `Productora Audiovisual` en title y H1; añadir "en Lima" |
| "productoras audiovisuales" | 6 clics, pos. 7,7 | Mantener variante plural en el texto de la home |
| Marca "rhino audiovisuales" | 6 clics, pos. 1,96, CTR 25 % | Nombre idéntico en toda la web, ficha y schema |
| `/show.html` | ~570 impresiones, pos. ~9, "show navideño" | No cambiar URL ni contenido hasta pasada la temporada |
| `/Brochure.pdf` | pos. 2–3, ~53 impresiones | Conservar en la misma URL (200, sin redirección) |
| Páginas de servicio `video`, `fotografia`, `marketing`, `web` | pos. 2–8, pocas impresiones | 301 a sus equivalentes nuevas |
| Conversiones de Google Ads | 12 conversiones, ~S/ 11 cada una | Reinstalar etiquetas y eventos de conversión el día del lanzamiento |
| Enlaces entrantes | 71 enlaces, 47 dominios; casi todos de baja calidad (ver `02-investigacion-de-mercado.md`) | No hay autoridad de enlaces que proteger; la tarea es conseguir enlaces reales |

---

## 3. Lo que muestra Google hoy (GSC, 12 meses)

- 122 clics, ~8.500 impresiones, CTR ~1,4 %, posición media ~21. El 92 % de los clics viene de Perú.
- Tendencia al alza desde julio: 1.331 → 2.636 → 1.842 → 1.986 impresiones/mes. No hay filas entre dic 2025 y jun 2026; falta confirmar si es un vacío de datos o inactividad.
- Todas las páginas aparecen duplicadas en `www` y sin `www`.
- Búsquedas con impresiones y sin página propia (posición → impresiones/año):
  - productora audiovisual lima (10,8 → 181), empresa productora audiovisual (11,1 → 117), productora audio visual (8,0 → 129), empresas de audiovisuales (9,1 → 136)
  - productora audiovisual publicidad (11,5 → 105), servicios de productora audiovisual (13,0 → 99), productora audiovisual perú (16,0 → 160), productora audiovisual servicios (20,7 → 147)
  - Larga cola de comerciales, videoclips, streaming, videos corporativos y precios: posiciones 35–90.

---

## 4. Mercado: demanda real y competencia

**Volumen mensual en Perú (Google Ads):**

| Búsqueda | Búsquedas/mes | Nota |
|---|---|---|
| productora audiovisual | 390 | Igual para el plural. Cae un 33 % interanual |
| video institucional | 90 | |
| video corporativo | 50 | |
| filmación de eventos | 40 | |
| producción de videoclips | 40 | |
| videoclips | 880 | Intención mayormente informativa/musical |
| spot publicitario | 2.900 | Dominada por "cómo hacer un spot" (informativa) |
| show navideño | 2.400 en dic, 1.600 en nov | Estacional |
| show infantil navideño | 590 en dic | Estacional |
| productora audiovisual lima | 10 | La herramienta subestima; GSC ya da 181 impresiones |

**Lectura honesta:** el volumen para servicios con nombre propio es bajo (decenas al mes). Los términos grandes son informativos o estacionales. Por eso la estrategia no puede apoyarse solo en palabras clave: necesita ficha de Google, contenido de decisión (precios, cómo elegir) y páginas por servicio. No voy a prometer cifras de tráfico; sí un orden de prioridad.

**SERP de "productora audiovisual" (hoy, Google Perú):**
- Rhino aparece en el puesto 8 orgánico hoy (6,1 de media anual en GSC).
- Delante: MAIA Films, Tierra Films, Flama Creators (página dedicada `/produccion-audiovisual-lima` con título "Productora Audiovisual en Lima | 5.0★ y +40 Marcas"), Maracuyá Contenidos.
- **Paquete local (mapa):** Cuadro24, Ánima y Jaguar Media. Rhino no aparece. Es la mayor brecha de visibilidad.
- Hay AI Overview, "También preguntan" y listados que posicionan (geotv.pe, bcontent.media, Sortlist): conviene aparecer en ellos.
- Preguntas frecuentes de la SERP: qué hace una productora audiovisual, cuánto gana un productor, tipos de audiovisual.

**SERP de "productora audiovisual lima":** la encabeza Sortlist y siguen Arena, Chita Films, Maracuyá, La Respuesta Audiovisual y otros. Rhino no está en el top 10.

---

## 5. Hallazgos técnicos de la web actual

| Hallazgo | Impacto | Solución |
|---|---|---|
| Canonical apunta a `www`, pero hay 93 clics a la versión sin `www` | Autoridad repartida | 301 de sin-`www` a `www` en el servidor |
| Meta description de 192 caracteres | Se corta en resultados | ≤155 caracteres |
| `meta keywords` con ~18 términos repetidos | Google lo ignora; parece relleno | Eliminar |
| `og:image` relativa (`./r4.jpg`), `og:type` inválido | Vista previa social rota | URL absoluta, `og:type=website` |
| Solo 5 enlaces internos en la home | Poco rastreo hacia servicios | Menú y bloques con `<a href>` reales |
| Portafolio duplicado ×3 (carrusel) | H2 repetidos | Renderizar una sola vez |
| `video.html` repite secciones enteras dos veces | Contenido duplicado dentro de la página | Una sola versión responsive |
| 19 hojas CSS bloqueantes, 15 scripts | Velocidad móvil | Consolidar, diferir, optimizar imágenes |
| Sitemap enviado en 2023, 7 URLs, 1 advertencia | Rastreo limitado | Sitemap nuevo con todas las URLs |
| Sin dirección visible, solo teléfono y correo | Débil para SEO local | Mostrar NAP completo (nombre, dirección, teléfono) |
| Backlinks: spam score 51; dominios .info, .fyi, .shop, .party, pages.dev | Ruido sin valor; la competencia tiene puntuaciones similares (27–50) | No desautorizar sin evidencia de daño; construir enlaces reales (ver documento 2) |

No pude confirmar datos estructurados ni medir Core Web Vitals (el análisis de PageSpeed expiró). Los verifico en la siguiente fase.

---

## 6. Arquitectura propuesta

**Principios:** una intención principal por URL, sin canibalización; jerarquía de máximo 3 niveles; URLs limpias en español, en minúsculas y con barra final; todo enlazado desde el menú y la home; breadcrumbs en todas las páginas internas.

```
/                                              Home — Productora audiovisual en Lima
├── /servicios/                                Hub de servicios
│   ├── /servicios/produccion-audiovisual/     Hub de producción (reemplaza video.html)
│   │   ├── /servicios/video-corporativo/
│   │   ├── /servicios/spots-y-comerciales/
│   │   ├── /servicios/cobertura-de-eventos/
│   │   ├── /servicios/videoclips/
│   │   └── /servicios/streaming/
│   ├── /servicios/fotografia/                 (reemplaza fotografia.html)
│   ├── /servicios/marketing-digital/          (reemplaza marketing.html)
│   └── /servicios/desarrollo-web/             (reemplaza web.html)
├── /show-infantil-navideno/                   (reemplaza show.html — tras la temporada)
├── /portafolio/
│   ├── /portafolio/redinter-25-anos/
│   ├── /portafolio/premium-tasting-lima/
│   ├── /portafolio/bloom-of-colors/
│   └── /portafolio/heroe-adidas/
├── /precios/                                  Guía de precios (fase 2)
├── /blog/                                     Guías y respuestas (fase 2)
├── /nosotros/
├── /contacto/                                 Formulario, mapa, WhatsApp, NAP
├── /Brochure.pdf                              (misma URL, sin cambios)
└── /politica-de-privacidad/
```

**Opcional según tu decisión:** `/servicios/video-de-bodas-y-quinceaneros/`. Hoy `video.html` lo menciona, pero no hay demanda medible en tus datos. Lo pondría como sección dentro de eventos, salvo que quieras impulsarlo.

**Lo que no haré a propósito:**
- Páginas por distrito (Miraflores, San Isidro…) sin dirección real: serían contenido fino.
- Una página "productora audiovisual lima" separada de la home: competiría con ella. La home es la página de ese término.

### Redirecciones (301, una a una)

| Origen | Destino | Cuándo |
|---|---|---|
| `http://` y `rhinoaudiovisuales.com` (sin www) | `https://www.rhinoaudiovisuales.com` | Puede hacerse ya |
| `/video.html` | `/servicios/produccion-audiovisual/` | Lanzamiento |
| `/fotografia.html` | `/servicios/fotografia/` | Lanzamiento |
| `/marketing.html` | `/servicios/marketing-digital/` | Lanzamiento |
| `/web.html` | `/servicios/desarrollo-web/` | Lanzamiento |
| `/show.html` | `/show-infantil-navideno/` | Lanzamiento (tras temporada) |
| `/Brochure.pdf` | — (sigue en 200) | — |

---

## 7. Mapa de palabras clave por URL

| URL | Término principal | Secundarios (con datos de GSC) | Intención |
|---|---|---|---|
| `/` | productora audiovisual | productoras audiovisuales, productora audiovisual lima / perú, empresa productora audiovisual, productora audio visual | Comercial |
| `/servicios/produccion-audiovisual/` | servicios de producción audiovisual | productora audiovisual servicios, servicios de productora audiovisual, productora audiovisual publicidad | Comercial |
| `/servicios/video-corporativo/` | video corporativo | video institucional, productora de videos corporativos, producción de videos para empresas | Comercial |
| `/servicios/spots-y-comerciales/` | productora de comerciales | spot publicitario, productora para comerciales, productora de publicidad | Comercial |
| `/servicios/cobertura-de-eventos/` | filmación de eventos | servicio de grabación de eventos, cobertura audiovisual de eventos, activaciones de marca | Comercial |
| `/servicios/videoclips/` | producción de videoclips | productora de videoclips, videoclips lima | Comercial |
| `/servicios/streaming/` | producción de streaming | productora de streaming, transmisión en vivo de eventos | Comercial |
| `/servicios/fotografia/` | fotografía corporativa y de eventos en Lima | estudio fotográfico (confirmar si hay estudio) | Comercial |
| `/servicios/marketing-digital/` | agencia de marketing digital en Lima | branding, community manager | Comercial |
| `/servicios/desarrollo-web/` | diseño y desarrollo web en Lima | desarrollo de aplicaciones web | Comercial |
| `/show-infantil-navideno/` | show infantil navideño | show navideño, show navideño para empresas, show de navidad para niños | Comercial estacional |
| `/precios/` | precios de producción audiovisual | productora audiovisual precios, cuánto cuesta un video corporativo | Decisión |
| `/blog/…` | ver sección 8 | | Informativa |

---

## 8. Fichas de página (títulos ≤60 caracteres; descripciones ≤155)

Los textos finales los redactaré en el documento 2. Aquí va la ficha base de cada página.

### Home `/`
- **Title:** Productora Audiovisual en Lima | Rhino Audiovisuales
- **Meta:** Productora audiovisual en Lima: video corporativo, spots, eventos, fotografía y streaming para empresas. Ve el portafolio y cotiza sin compromiso.
- **H1:** Productora audiovisual en Lima
- **H2:** Qué hacemos · Portafolio destacado · Por qué trabajar con Rhino · Clientes · Cómo trabajamos (proceso en 4 pasos) · Preguntas frecuentes · Cotiza tu proyecto
- **Notas:** el audiovisual lidera; marketing digital y desarrollo web quedan como servicios complementarios, para no diluir el tema. Portafolio con 4 proyectos reales una sola vez. Prueba social con datos verificables.
- **Schema:** Organization + ProfessionalService (LocalBusiness), WebSite, VideoObject por proyecto.

### `/servicios/produccion-audiovisual/`
- **Title:** Servicios de Producción Audiovisual en Lima | Rhino
- **H1:** Servicios de producción audiovisual para empresas
- **H2:** Preproducción · Rodaje · Postproducción · Tipos de proyecto (enlaces a las 5 subpáginas) · Proceso y tiempos
- **Schema:** Service, BreadcrumbList.

### `/servicios/video-corporativo/`
- **Title:** Video Corporativo e Institucional en Lima | Rhino
- **H1:** Videos corporativos e institucionales en Lima
- **H2:** Tipos (institucional, testimonial, capacitación, inducción, reseñas) · Cómo es el proceso · Proyectos relacionados · Cuánto tarda · Preguntas frecuentes
- **Enlaces internos:** Redinter, Bloom of Colors, `/precios/`, contacto.

### `/servicios/spots-y-comerciales/`
- **Title:** Spots y Comerciales Publicitarios | Rhino Audiovisuales
- **H1:** Productora de spots y comerciales publicitarios
- **H2:** Spots para TV y digital · Reels publicitarios · Campañas · Proyecto destacado (Héroe Adidas) · Preguntas frecuentes
- **Nota:** "spot publicitario" (2.900/mes) es mayormente informativo. Se atiende con una guía de blog que enlaza aquí.

### `/servicios/cobertura-de-eventos/`
- **Title:** Filmación y Cobertura de Eventos en Lima | Rhino
- **H1:** Filmación y cobertura audiovisual de eventos
- **H2:** Eventos corporativos y activaciones de marca · Lanzamientos y eventos de PR · Eventos sociales (bodas, 15 años) · Cómo entregamos (resumen, highlights) · Proyectos
- **Enlaces internos:** Premium Tasting Lima, Bloom of Colors.

### `/servicios/videoclips/`
- **Title:** Producción de Videoclips Musicales en Lima | Rhino
- **H1:** Producción de videoclips musicales
- **H2:** Qué incluye · Conciertos y backstage · Proceso · Proyectos

### `/servicios/streaming/`
- **Title:** Streaming y Transmisión en Vivo de Eventos | Rhino
- **H1:** Producción de streaming y transmisión en vivo
- **H2:** Qué equipo usamos · Plataformas · Eventos típicos · Proyectos
- **Nota:** en Google Ads, "live video streaming production" dio 21 clics y 1 conversión. Hay demanda, aunque en inglés. Confirmar si ofreces el servicio.

### `/servicios/fotografia/`, `/servicios/marketing-digital/`, `/servicios/desarrollo-web/`
- **Titles:** Fotografía Corporativa y de Eventos en Lima | Rhino · Marketing Digital y Branding en Lima | Rhino · Diseño y Desarrollo Web en Lima | Rhino
- Contenido actual reordenado, ampliado a ≥600 palabras, con proyectos relacionados.

### `/show-infantil-navideno/`
- **Title:** Show Infantil Navideño para Empresas y Fiestas | Rhino
- **H1:** Show infantil navideño en Lima
- **Nota:** conservar el contenido que ya posiciona; mejorar solo estructura (H2 claros, fotos, preguntas frecuentes, contacto). Las tres entradas "Por Juan Vargas / Mario Zegarra / Marco Silva" de 2023 se mantienen solo si son testimonios reales (en ese caso, marcarlos con schema Review).

### `/portafolio/` y casos
- Cada caso: cliente, reto, solución, resultado, video, servicios usados, enlace al servicio. URL por caso, `VideoObject`.
- Corregir "Premiun" → "Premium".

### `/precios/` (fase 2)
- **Title:** Precios de Producción Audiovisual en Lima | Guía 2027
- Rangos reales por tipo de proyecto, qué influye en el costo, ejemplos. Responde "productora audiovisual precios" y "cuánto cuesta un video corporativo".

### `/nosotros/` y `/contacto/`
- Equipo con nombres y cargos, años de trayectoria, equipos, enfoque. Formulario, WhatsApp, teléfono (+51) 965 683 542, correo, horario 8:00–18:00, dirección y mapa si aplica.

### Contenido de blog (fase 2, en orden de prioridad)
1. Qué hace una productora audiovisual y cómo elegir una en Lima
2. Cuánto cuesta un video corporativo en Perú
3. Cómo hacer un spot publicitario: guía paso a paso
4. Tipos de video corporativo y cuál conviene a tu empresa
5. Cómo preparar un evento para que se grabe bien
6. Show navideño para empresas: guía (se publica en septiembre, antes de la temporada)

Cada pieza: respuesta clara en las primeras líneas, listas y tablas, autor con nombre y enlace al servicio relacionado. Esto sirve también para los resúmenes de IA de Google.

---

## 9. SEO local y autoridad

**Ficha de Google Business (prioridad más alta).** Hoy la competencia ocupa el mapa y Rhino no aparece.
- Verificar o crear la ficha; categoría principal "Productora de video"; servicios cargados; fotos del equipo y rodajes; horario; WhatsApp.
- NAP idéntico en web, ficha y directorios.
- Pedir reseñas reales a los clientes (Redinter, Premium Tasting Lima, Bloom of Colors, etc.) con enlace directo a la ficha.

**Directorios y listados** que ya posicionan: Sortlist, geotv.pe, bcontent.media. Pedir alta o mención.

**Enlaces entrantes:** la investigación del documento 2 muestra que los 47 dominios que enlazan hoy son en su mayoría spam o directorios genéricos, sin ningún enlace peruano relevante. No hay que desautorizarlos sin evidencia de daño (la competencia tiene perfiles parecidos). Lo importante es construir enlaces reales: clientes, cámaras de comercio, medios locales, proveedores y los directorios del rubro (Sortlist, geotv.pe, bcontent).

**Nombre de marca.** Hay búsquedas como "rino producciones", "rhino peru", "empresa rhino". Usar siempre "Rhino Audiovisuales" y enlazar redes sociales en el schema (`sameAs`).

---

## 10. Estándares técnicos de la web nueva

- Core Web Vitals: LCP <2,5 s, INP <200 ms, CLS <0,1 en móvil. Imágenes en WebP/AVIF, videos diferidos o incrustados con lazy loading, tipografías locales.
- HTML semántico, un H1 por página, `lang="es-PE"`, HTTPS, una sola URL canónica por página.
- Datos estructurados: Organization, ProfessionalService, WebSite, BreadcrumbList, Service, VideoObject, Article y Review (solo reseñas reales). El schema FAQPage ya no muestra resultados enriquecidos para la mayoría de sitios; las preguntas frecuentes se mantienen por su valor para el lector y para las respuestas de IA.
- `sitemap.xml` y `robots.txt` nuevos; Search Console con la propiedad de dominio.
- Texto alternativo en imágenes y transcripción o resumen junto a cada video.
- Medición: GA4 con eventos de envío de formulario, clic en WhatsApp, clic en teléfono y descarga del brochure; las conversiones de Google Ads se reinstalan el mismo día del lanzamiento.

---

## 11. Plan y calendario

| Fase | Fechas | Qué se hace |
|---|---|---|
| 0. Mejoras sin riesgo en la web actual | Ahora | 301 sin-`www` → `www`; ficha de Google Business; auditoría de enlaces. **No tocar `show.html`** |
| 1. Contenido | Nov | Copy de todas las páginas (documento 2) |
| 2. Dirección visual y mockup | Nov – dic | Tres direcciones, elección y mockup (documento 3) |
| 3. Construcción en staging (noindex) | Dic | Web completa, redirecciones probadas, medición |
| 4. Lanzamiento | **desde el 10 ene 2027** | Redirecciones, sitemap nuevo, Ads reapuntado |
| 5. Vigilancia | 4–8 semanas | Cobertura, posiciones del término principal, errores 404 |
| 6. Expansión | Feb – abr | Precios, blog, más casos, reseñas |

**Indicadores a seguir:** clics y posición de "productora audiovisual", cantidad de consultas en top 10, impresiones y clics de páginas de servicio, llamadas/mensajes desde la ficha, envíos de formulario. Línea base: 122 clics y ~8.500 impresiones en 12 meses.

**Riesgos:** cambio de URLs (mitigado con 301 uno a uno y lanzamiento fuera de temporada); pérdida de etiquetas de conversión; contenido nuevo que no responda a la intención de búsqueda.

---

## 12. Lo que necesito de ti (no lo voy a inventar)

1. Dirección, o confirmación de que trabajas sin local, y si ya tienes ficha de Google Business.
2. Nombres del equipo, cargos y años de trayectoria.
3. Clientes que puedo nombrar y casos que autorizan mostrar. Cifras reales (videos hechos, años, marcas).
4. Servicios que quieres impulsar y los que no: streaming, bodas y 15 años, videoclips, estudio fotográfico, show navideño.
5. Rangos de precios que quieres mostrar, si alguno.
6. Acceso a la versión actual de la web (código o carpeta) para conservar textos y recursos.
7. ¿Quieres mantener marketing digital y desarrollo web como servicios, o reducirlos a un segundo plano?
