# Rhino Audiovisuales — Traspaso del proyecto SEO/SEM (léeme primero)

**Para:** el siguiente consultor que retome el proyecto.
**Fecha:** 1 de noviembre de 2026. **Estado:** consultoría SEO cerrada; tres direcciones visuales hechas; falta que el dueño elija una y pasar al mockup y a la construcción.
**Repositorio:** `rozen1993/Productora-audiovisual`. Rama de trabajo: `claude/productora-website-t4ghcv`. Rama `v1`: copia congelada del 31 oct (incluye hasta el doc 08 y la revisión de la proyección SEM; **no** incluye los docs 09, 10, 00 ni los datos de prueba).
**Este documento es la fuente de verdad.** Si algo de los documentos 01–10 lo contradice, vale lo que dice aquí.

---

## 1. En 30 segundos

Rhino Audiovisuales es una productora audiovisual y de eventos de Lima (Perú). Su web actual (`www.rhinoaudiovisuales.com`, HTML en hosting de GoDaddy) tiene 7 páginas, muestra los servicios de hace 5 años y recibe **~30 visitas orgánicas al mes**. El dueño quiere **sustituirla por una web nueva en Astro + Tailwind**, alojada en Vercel (o Cloudflare Pages) con el dominio en GoDaddy, **sin perder lo que ya posiciona** y ampliando el SEO.

Se investigó el mercado con datos reales y se diseñó todo esto:
- La arquitectura: 18 páginas de servicio y 2 de temporada.
- El contenido: provisional, con datos de prueba marcados.
- Las redirecciones 301.
- Un plan de Google Ads de S/ 100 al mes.
- Tres direcciones visuales.

**Los hallazgos que más pesan:**
1. Google no mostró la web ni una vez entre dic 2025 y jun 2026, quizá por un bloqueo anti-bots del hosting. Sin verificar.
2. Rhino **no tiene ficha de Google Maps** y no aparece en las recomendaciones de IA.
3. El mercado de búsqueda es pequeño. Un éxito realista son **~270–500 visitas al mes a 12 meses** (todos los canales), no las 5.000 que pidió el dueño.

---

## 2. Lo que se tenía (punto de partida, oct 2026)

| Área | Situación | Fuente |
|---|---|---|
| Web | 7 URLs indexadas: `/`, `/video.html`, `/fotografia.html`, `/marketing.html`, `/web.html`, `/show.html`, `/Brochure.pdf`. Duplicada con y sin `www` (Google indexa `www`). 19 CSS bloqueantes, descripción de 192 caracteres, 5 enlaces internos, sitemap de 2023 | Rastreo DataForSEO, `site:` |
| Tráfico orgánico | 122 clics y ~8.500 impresiones (nov 2025 – oct 2026). Ago–oct 2026: 34 / 21 / 35 clics al mes. 92 % Perú. **77 % de los clics desde escritorio.** **Cero impresiones entre dic 2025 y jun 2026** | Search Console (Adzviser) |
| Lo que posiciona | "productora audiovisual": posición media 6,1 (6–8 en vivo), 29 clics. Marca: posición 1,96. `/show.html`: 3.º en "show infantil navideño" | GSC + SERP en vivo |
| Enlaces | 47 dominios, casi todos spam o generados automáticamente. Nada que proteger | DataForSEO |
| Google Maps | **Sin ficha** (0 resultados con el nombre en 60 km) | DataForSEO Business Listings |
| IA | 0 menciones. ChatGPT recomienda a 9 competidores y no a Rhino | DataForSEO LLM / ChatGPT |
| Google Ads | Campaña "Rhino Audiovisuales": S/ 132 gastados (dic 2025 – feb 2026), 150 clics, CPC S/ 0,88. Conversión configurada: **"Vista de una página"** (no mide contactos). **"No apta" desde marzo 2026** (motivo no visible). Está en la cuenta `midnightstudios`: ignorar esa otra marca | Google Ads (Adzviser) |
| Competencia | Líderes audiovisuales: MAIA ~450, Flama ~400 visitas al mes (estimación ×2,3 calibrada con Rhino). Directorio InEventos ~4.150. Casi todos débiles en SEO (dificultad 0–11) | DataForSEO |

---

## 3. Lo que se buscaba

**Objetivos del dueño (en sus palabras, resumidos):**
1. Reemplazar la web antigua por una mejor, **sin romper lo que ya posiciona**.
2. Ampliar el SEO, que "es muy reducido". Pidió 5.000 visitas al mes: se le explicó con datos que no es alcanzable en su mercado.
3. Que **lleguen clientes cuanto antes**.
4. Publicidad con **S/ 100 al mes como máximo**.
5. **Prioridades comerciales:** (1) cobertura de eventos, (2) streaming y podcast, (3) catering.
6. Quiere ir rápido y **acepta riesgos** (decisión sobre `/show.html`).

**Misión acordada del consultor** (en `CLAUDE.md`): proteger lo ganado, expandir el SEO, diseñar la estructura antes que lo visual y decir la verdad con datos, sin inventar datos de la empresa para publicar.

---

## 4. Lo que se hizo (31 oct – 1 nov 2026)

| Paso | Resultado | Archivo |
|---|---|---|
| Diagnóstico inicial y plan | Activos, problemas técnicos, primera arquitectura (luego sustituida) | `01-estrategia-y-arquitectura.md` (histórico) |
| Investigación de mercado | Demanda por servicio, tráfico de competidores, SERP, enlaces | `02-investigacion-de-mercado.md` |
| Arquitectura con el catálogo completo | URLs, palabras clave por URL, títulos, H1, redirecciones, tandas | `03-arquitectura-catalogo-completo.md` **(vigente)** |
| Proyecciones y SEM | Escenarios de tráfico; plan de campaña; revisión por inventario (§8) | `04-proyecciones-y-plan-sem.md` (§7–8 vigentes) |
| Prioridades del dueño y campaña | Datos de cobertura, streaming y catering; grupos de anuncios | `05-prioridades-del-dueno-y-campana.md` (§5 y §8 vigentes) |
| Contenido de 24 bloques de página | Título, descripción, H1, secciones y preguntas frecuentes; `[COMPLETAR]`/`[VALIDAR]` | `06-contenido-de-paginas.md` |
| Especificación técnica y brief de diseño | Astro, redirecciones, formulario, medición, lista de lanzamiento, brief | `07-especificacion-tecnica-y-brief-de-diseno.md` |
| Redirecciones | 6 redirecciones 301 listas | `vercel.json` |
| Tres direcciones visuales | A Cine (oscura), B Editorial (clara, recomendada), C Bold (atrevida). HTML y PNG | `design/direcciones/` |
| Primera auditoría | Gap de 7 meses en GSC, demanda corporativa real, móvil frente a escritorio, contraste, aspectos legales | `08-auditoria.md` |
| Revisión crítica | Sin ficha de Maps, invisibilidad en IA, InEventos, nuevas oportunidades | `09-revision-critica-y-oportunidades.md` |
| Catálogo ampliado | Pantallas LED, sonido y proyectores, BTL, maestro de ceremonias, tours 360, fotos corporativas, fin de año | doc 03 §10, doc 06 §18–24 |
| Datos de prueba | Valores verosímiles solo para mockup y staging | `content/datos-de-prueba.json` |
| Tercera auditoría | Coherencia, validación de intención y dificultad, oportunidades nuevas | `10-tercera-auditoria.md` |
| Auditoría SEM y plan corregido | Dos campañas, presupuestos diarios por periodo, palabras según intención, negativas, medición, fecha límite del show | `11-auditoria-y-plan-sem.md` **(vigente para Ads)** |
| Contenido ajustado a la auditoría | Fotos corporativas, maestro de ceremonias, catering, pantallas LED, fin de año | doc 06 §5, §18–20 y §23 |

---

## 5. Hallazgos clave (los que cambian decisiones)

| # | Hallazgo | Confianza |
|---|---|---|
| 1 | **Cero impresiones dic 2025 – jun 2026.** Posible desafío anti-bots del hosting ("One moment, please...") que bloquea a Googlebot y AdsBot. Explicaría también el "No apta" de Ads | Dato confirmado; causa **hipótesis** |
| 2 | **Sin ficha de Google Maps.** La IA recomienda a quien tiene reseñas: Bolívar Studio, sin tráfico SEO, sale 2.º en ChatGPT con 34 reseñas | Confirmado |
| 3 | **Mercado pequeño.** Búsquedas de compra audiovisual ~800 al mes en Perú; "productora audiovisual" 390 (−33 % interanual) | Confirmado (Google Ads, redondeado) |
| 4 | **Demanda corporativa real de eventos y catering:** ~150–300 y ~300 al mes. Buena parte de "organización de eventos", "servicio de catering" y "eventos de fin de año" es informativa o social | Confirmado (SERP + clasificador) |
| 5 | **Oportunidades comerciales con SERP débil:** alquiler de pantallas LED (~450–550 en variantes de alquiler), fotos corporativas (390–480, intención mixta), coffee break en Lima (140 + 70) | Confirmado |
| 6 | **Escritorio domina** (77 % de los clics) | Confirmado (3 meses) |
| 7 | **Competencia débil en SEO:** dificultad 0–11 en casi todas las palabras de dinero; no hay enlaces de calidad compartidos entre competidores | Confirmado |
| 8 | **InEventos** es el directorio dominante (~4.150 visitas al mes) y fuente de ChatGPT | Confirmado (estimación) |
| 9 | La conversión de Ads ("vista de página") no mide contactos; los "S/ 11 por conversión" no significan nada | Confirmado |

---

## 6. Decisiones tomadas

| Decisión | Quién | Fecha |
|---|---|---|
| Web nueva en **Astro + Tailwind**; hosting en Vercel o Cloudflare Pages; dominio sigue en GoDaddy (cambiar **solo** registros A/CNAME; no tocar MX) | Dueño | 31 oct |
| Lanzar **cuando pase la lista de comprobación** (doc 07 A.7), sin esperar al 10 de enero | Dueño | 31 oct |
| `/show.html` → 301 a `/show-infantil-navideno/` **desde el lanzamiento**, aunque sea en temporada (riesgo aceptado) | Dueño | 31 oct |
| Dominio canónico `https://www.rhinoaudiovisuales.com`, barra final, URLs en minúsculas sin tildes | Consultor | 31 oct |
| La home conserva "Productora audiovisual en Lima" (title y H1) | Consultor | 31 oct |
| Catálogo de 13 líneas (ver `CLAUDE.md`), con 18 páginas de servicio y 2 de temporada **en dos tandas** | Dueño + consultor | 31 oct |
| Contenido provisional con **datos de prueba**, nunca publicables (la compilación de producción debe fallar) | Dueño + consultor | 31 oct |
| Presupuesto de Ads **S/ 100 al mes**; no aplicar cambios en la cuenta sin vista previa y aprobación | Dueño | 31 oct |
| No usar servicios de indexación artificial (p. ej. Omega Indexer) | Consultor | 31 oct |

---

## 7. Lo que se espera conseguir

### 7.1 Proyección vigente (hipótesis, no promesas)
| Canal, a 12 meses del lanzamiento | Escenario central |
|---|---|
| Orgánico | **200–330 visitas al mes** (alto ~450; bajo 60–120 si el bloqueo no se resuelve) |
| Google Ads (S/ 100) | ~40–85 clics al mes (central ~60); limita el inventario de búsquedas, no el dinero |
| Ficha de Google, directos, redes | 30–100 (sin datos propios) |
| **Total** | **~270–500 visitas al mes → 6–18 consultas al mes** (confianza baja) |

**Evolución orgánica central:** meses 1–2 entre 25 y 50 (oscilación por las redirecciones) · mes 3 entre 60 y 100 · mes 6 entre 100 y 170 · mes 12 entre 200 y 330. Más un pico de diciembre de +100 a +300 si el show llega al top 2.

### 7.2 Indicadores y metas
| Indicador | Meta |
|---|---|
| Bloqueo de rastreadores resuelto (*Probar URL publicada* muestra la página real) | Semana 1 |
| Ficha de Google verificada | Semanas 1–2 |
| Reseñas reales en la ficha | 10 al mes 3; **25 al mes 6** |
| Altas en InEventos, Sortlist, geotv.pe y bcontent | Mes 1 |
| Contactos medidos por canal (formulario, WhatsApp, teléfono) | Desde el lanzamiento |
| Top 5 en "productora audiovisual", "alquiler de pantallas led", "fotos corporativas", "cobertura audiovisual de eventos", "catering corporativo", "show infantil navideño" | Meses 6–9 |
| Aparecer en la respuesta de ChatGPT a "mejores productoras audiovisuales en Lima" | Mes 6–12 |
| Coste por contacto en Ads | Conocido a los 60 días |

---

## 8. Estado actual y próximos pasos

**Bloqueos (dueño, esta semana):**
1. Search Console → *Inspección de URL → Probar URL publicada* en la home: ¿se ve la página o "One moment, please..."? Revisar también *Estadísticas de rastreo* y la protección anti-bots del hosting.
2. Google Ads: motivo exacto de "No apta".
3. Crear y verificar la ficha de Google Business.

**Siguiente paso del proyecto (consultor):**
4. El dueño elige la dirección visual A, B o C (recomendada: **B**, con contraste ya corregido) → mockup completo con las correcciones de la auditoría: home más corta, escritorio y móvil por igual.
5. Construcción en Astro (doc 07). En el **primer commit**: salvaguarda de datos de prueba y comprobación de títulos, descripciones y H1.
6. Staging con `noindex` → pruebas de redirecciones y medición → lanzamiento con la lista de comprobación.
7. Tras el lanzamiento: sitemap, *Solicitar indexación* en 8–10 páginas, Bing Webmaster Tools + IndexNow, vigilancia 4–8 semanas.

**Publicidad, vigente (doc 11):**
- **Dos campañas:** C1 Temporada (show y fin de año, hasta el 22 dic, todos los días 7:00–21:00) y C2 Servicios (eventos, producción, catering y pantallas LED; lunes a sábado 7:00–20:00, horario validado con datos).
- **Presupuesto diario:** noviembre S/ 2,40 + 2,40; diciembre S/ 2,70 (C1, hasta el 22) + 1,30 (C2); desde enero S/ 3,30 (solo C2).
- **Corte el 15 de noviembre:** si la cuenta sigue "No apta" o no se miden contactos, no se anuncia el show esta temporada.
- Antes de nada: resolver "No apta" y medir WhatsApp, teléfono y formulario como conversiones principales.

---

## 9. Pendiente del dueño (datos reales)
- Logo, colores, fotos y videos propios.
- Precios "desde" reales, plazos y medidas de las pantallas LED.
- Quién es el maestro de ceremonias; casos reales de BTL.
- Si hay estudio de podcast o equipos sueltos en alquiler.
- Dirección, RUC y razón social. Permisos sanitarios (catering) y registro de operador de drone.
- Libro de Reclamaciones virtual y política de privacidad, con asesor legal.
- Instalar la medición de contactos en la web actual (si se anuncia antes del lanzamiento).
- Verificar los términos del plan de hosting (el gratuito de Vercel es para uso no comercial).
- Autorización para nombrar a los clientes del portafolio (Redinter, Premium Tasting Lima, Bloom of Colors, Adidas).

---

## 10. Riesgos
| Riesgo | Mitigación |
|---|---|
| El bloqueo de rastreadores existe y se repite | Verificarlo ya; la migración a Vercel lo elimina |
| Caída temporal tras la migración, sobre todo del show en temporada | Redirecciones 1 a 1 probadas, contenido equivalente, indexación solicitada, Ads de respaldo |
| Publicar datos de prueba por error | Salvaguarda en la compilación; datos reales en `content/datos-reales.json` |
| Romper el correo al cambiar el DNS | Cambiar solo A y CNAME en GoDaddy |
| Contenido pobre en 18 páginas | Publicar en dos tandas; tanda B solo con contenido real |
| Expectativas de tráfico infladas | Usar las proyecciones de §7 y medir contactos, no visitas |

---

## 11. Errores cometidos y lecciones (para no repetirlos)
1. **Se descartó demasiado pronto el aviso "One moment, please..."** como fallo de una herramienta. Lección: verificar también antes de descartar.
2. **Se dijo que la conversión de Ads costaba S/ 11**, pero eran vistas de página.
3. **Se sobreestimó la demanda** de catering y eventos (doc 03) y de algunas oportunidades del doc 09 (fotos corporativas, fin de año, maestro de ceremonias). Lección: **comprobar SERP e intención antes de asignar volumen.**
4. **La primera proyección SEM suponía gastar todo el presupuesto**; la cuenta nunca lo agotó.
5. **El brief de diseño asumía móvil mayoritario sin datos**: es escritorio.
6. **Se tomó la fecha del primer enlace de Flama como antigüedad del dominio.**
7. **Proliferaron versiones de la misma decisión** en varios documentos. Lección: actualizar este traspaso y marcar lo sustituido.
8. **El plan SEM repartía el presupuesto por grupos de anuncios** dentro de una sola campaña, algo que Google Ads no permite (el presupuesto es por campaña). Corregido en el doc 11.
9. **Se recomendó subir la puja en escritorio con datos orgánicos**; en anuncios, el 73 % de los clics es móvil y cuesta la mitad. Lección: no trasladar datos de un canal a otro.

---

## 12. Mapa de archivos y vigencia
| Archivo | Vigencia |
|---|---|
| `docs/seo/00-traspaso.md` | **Fuente de verdad** |
| `CLAUDE.md` | Reglas permanentes del proyecto (se carga en cada sesión) |
| `docs/seo/03-arquitectura-catalogo-completo.md` | Vigente (URLs, palabras clave, títulos, tandas) |
| `docs/seo/06-contenido-de-paginas.md` | Vigente (contenido provisional) |
| `docs/seo/07-especificacion-tecnica-y-brief-de-diseno.md` | Vigente (construcción, lanzamiento, brief) |
| `docs/seo/11-auditoria-y-plan-sem.md` | **Vigente para Google Ads** (estructura, presupuestos, palabras, medición) |
| `docs/seo/04-…` §8 | Vigente para la proyección SEM; el resto del 04 y el 05, contexto |
| `docs/seo/08-…`, `09-…`, `10-…` | Auditorías y revisiones (hallazgos ya incorporados aquí) |
| `docs/seo/01-…`, `02-…` | Histórico y contexto |
| `vercel.json` | Vigente (redirecciones) |
| `content/datos-de-prueba.json` | Solo para mockup y staging |
| `design/direcciones/` | Tres direcciones (HTML, PNG, `render.js` para regenerar) |

---

## 13. Herramientas y accesos
| Herramienta | Estado |
|---|---|
| Adzviser (workspace `one`) | Lectura de Search Console y Google Ads. Escritura en Ads desactivada; además solo permite cambiar presupuestos |
| DataForSEO | Funciona: volúmenes (10 por llamada), SERP, Labs, Business Listings, LLM, enlaces |
| Ahrefs | Conectado, pero responde "plan insuficiente" |
| GitHub | Push solo a la rama de trabajo; los tags no suben desde este entorno (por eso `v1` es una rama) |
| Acceso directo a la web | Bloqueado desde el entorno (proxy 403); se usó el rastreo de DataForSEO |

---

## 14. Primera hora del siguiente consultor
1. Leer este documento y `CLAUDE.md`.
2. Preguntar al dueño por los tres bloqueos de §8 y por la dirección visual.
3. Revisar Search Console de los últimos 28 días (¿siguen las impresiones? ¿cambió la posición de "productora audiovisual"?).
4. Si se va a construir: abrir el doc 07 y empezar por la salvaguarda de datos de prueba y las comprobaciones de longitud y H1.
5. Al terminar cualquier trabajo, **actualizar este traspaso** (fecha, estado, decisiones, riesgos) y añadir una línea al registro de cambios.

---

## 15. Registro de cambios
| Fecha | Cambio |
|---|---|
| 31 oct 2026 | Docs 01–09, `vercel.json`, tres direcciones visuales, datos de prueba. Rama `v1` congelada (hasta el doc 08 y la revisión de la proyección SEM) |
| 1 nov 2026 | Tercera auditoría (doc 10) y este traspaso; correcciones de coherencia en docs 01, 03, 04, 05, 09 y `CLAUDE.md` |
| 1 nov 2026 | Auditoría SEM y plan corregido (doc 11); contenido del doc 06 ajustado a la auditoría; corrección del doc 09 sobre dispositivos y formulario de Ads |
