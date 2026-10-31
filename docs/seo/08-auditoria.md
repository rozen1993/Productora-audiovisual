# Rhino Audiovisuales — Auditoría independiente del proyecto

Documento 8. Fecha: 31 de octubre de 2026.
Enfoque: revisar los documentos 01–07, `CLAUDE.md`, `vercel.json` y las tres direcciones visuales como si los hubiera hecho otra persona, verificar con datos nuevos lo dudoso y señalar errores, omisiones y riesgos.

**Datos nuevos usados en esta auditoría:** Search Console (semanas de dic 2025 – jun 2026; dispositivos ago–oct 2026), SERP en vivo de Google Perú ("rhino audiovisuales", "organización de eventos", `site:rhinoaudiovisuales.com`), comprobación automática de longitudes de títulos y descripciones, y cálculo de contraste WCAG de las paletas.

---

## 1. Resumen

El trabajo es sólido en estructura, redirecciones y honestidad sobre las cifras, pero tiene **un error de diagnóstico potencialmente grave**, **una priorización inflada** y varias inconsistencias.

| # | Hallazgo | Severidad |
|---|---|---|
| 1 | Google no mostró la web **ni una vez entre diciembre de 2025 y junio de 2026**. Se dio por cerrado demasiado pronto el aviso "One moment, please...", que puede ser la causa | **Crítica** |
| 2 | La campaña "No apta" desde marzo puede tener la misma causa | **Alta** |
| 3 | La demanda de eventos y catering se presentó como mayor que la audiovisual; la mayor parte es de estudiantes o de público social | **Alta** |
| 4 | La búsqueda de la marca "rhino audiovisuales" hoy devuelve tutoriales del software Rhino 3D; no hay panel de empresa | **Alta** |
| 5 | El brief de diseño dice "el diseño parte del móvil", pero el 77 % de los clics viene de escritorio | Media |
| 6 | La proyección base (150–400) es optimista en su techo; una verificación de abajo arriba da ~190 al mes | Media |
| 7 | El tráfico de competidores estaba subestimado (~2,3 veces) | Media |
| 8 | Se interpretó mal la "antigüedad" del dominio de Flama | Baja |
| 9 | Faltan obligaciones legales locales probables: Libro de Reclamaciones virtual y datos de la empresa (RUC) | Alta (cumplimiento) |
| 10 | La dirección B no cumple el contraste mínimo en su naranja; la home móvil es demasiado larga | Media |
| 11 | Afirmaciones del copy ("un solo equipo", "todo en un solo servicio") sin validar | Media |
| 12 | Inconsistencias entre documentos | Baja |

**Lo que se sostiene** (verificado): todas las URLs que Google tiene indexadas tienen destino en `vercel.json`; Google indexa la versión `www`, como se decidió; los 16 títulos y descripciones del documento 06 cumplen los límites (≤60 y ≤155); el análisis de competencia y de la cuenta de Ads es correcto.

---

## 2. Hallazgos en detalle

### 2.1 [Crítica] Siete meses sin aparecer en Google

**Dato:** Search Console no tiene ni una impresión entre diciembre de 2025 y junio de 2026 (comprobado por semanas). Hay datos en noviembre de 2025 (20 clics) y desde julio de 2026.

**Por qué importa:**
- La afirmación "hay un SEO consolidado que proteger" es parcialmente falsa: **las posiciones actuales tienen unos 4 meses**. DataForSEO ya marcaba el ranking de "productora audiovisual" como "nuevo".
- Si la causa sigue activa de forma intermitente, puede volver a pasar, antes o después de la migración.

**Hipótesis principal (no confirmada):** el título "One moment, please..." que leyó Adzviser en **todas** las páginas corresponde al desafío anti-bots que usan algunos hostings compartidos con Apache (por ejemplo, Imunify360). Las personas lo superan porque el navegador ejecuta JavaScript; los rastreadores pueden quedar bloqueados.
- Los anuncios recibieron clics en dic–feb: la web funcionaba para personas.
- Google no la mostraba: compatible con Googlebot bloqueado.
- En el documento 01 este aviso se descartó como "artefacto de la herramienta". **Esa corrección fue prematura.** DataForSEO, que sí ejecuta JavaScript, vio la página real, lo que no descarta el bloqueo para otros rastreadores.

**Otras causas posibles:** web caída, `noindex` temporal, penalización manual, cambio de propiedad o de verificación en Search Console.

**Cómo verificarlo (dueño, 15 minutos):**
1. Search Console → *Configuración → Estadísticas de rastreo*: ¿cayeron las peticiones o subieron los errores en dic–jun?
2. Search Console → *Páginas* (historial de indexación) y *Acciones manuales*.
3. *Inspección de URL → Probar URL publicada* en la home: ¿Google ve la página real o "One moment, please..."?
4. Panel del hosting (GoDaddy/cPanel): buscar protección anti-bots (Imunify360, "Bot protection", desafío JavaScript) y si permite a Googlebot y AdsBot.

**Consecuencia para el plan:** refuerza la migración a Vercel, que elimina ese riesgo. Mientras tanto, si el desafío existe, **desactivarlo o permitir a Google es la acción SEO más importante de todo el proyecto**.

### 2.2 [Alta] "No apta" en Google Ads: probable relación

Google revisa la página de destino con su propio rastreador (AdsBot). Si un desafío anti-bots lo bloquea, el anuncio puede ser rechazado por "destino no funciona" y la campaña quedar "No apta". Coincide en fechas (sin entrega desde marzo). **Hipótesis por confirmar** en *Anuncios → estado* y en *Políticas*.

### 2.3 [Alta] La demanda de eventos y catering estaba inflada

El documento 03 decía: "Catering y eventos suman más demanda que el audiovisual". **No se sostiene para el cliente que buscas (empresas):**
- **"Organización de eventos" (720/mes):** la SERP en vivo muestra cursos, carreras, PDF, Coursera, YouTube y organizadores de eventos sociales. No es demanda corporativa.
- **"Servicio de catering" (1.000) y "catering lima" (480):** mayoritariamente fiestas y eventos sociales (lo confirma la SERP de catering corporativo, con caterings parrilleros y de cumpleaños).
- **Demanda corporativa real aproximada:** catering corporativo 90 + desayunos empresariales 90 + almuerzos corporativos 110 ≈ **300/mes**; eventos corporativos lima 90 + empresa de organización de eventos 40 + organización de eventos corporativos 20 + parte de "eventos corporativos" (480, mixta) ≈ **150–300/mes**.
- **Producción audiovisual con intención de contratar: ~800/mes.** Sigue siendo el mercado de búsqueda más grande para tu cliente.

**Consecuencia:** tus prioridades (cobertura, streaming, catering) siguen siendo válidas como negocio, pero el SEO no las sostiene solo: necesitan venta directa, Ads y reseñas. La home y el video corporativo siguen siendo los que más tráfico de compra pueden traer.

### 2.4 [Alta] La marca no se encuentra

- SERP en vivo de "rhino audiovisuales" (Perú): **10 resultados de Rhino 3D (software) y otras empresas "Rhino"**. Ni la web ni una ficha de empresa aparecen en esta consulta.
- Search Console da posición 1,96 para esa búsqueda, pero solo 24 impresiones en un año: la señal es débil.
- Sin panel de conocimiento, es probable que **no exista ficha de Google Business verificada**.

**Qué hacer:** confirmar si existe la ficha y verificarla; schema `Organization` con `sameAs` a todas las redes; nombre idéntico en todos los perfiles; conseguir menciones con el nombre completo "Rhino Audiovisuales".

### 2.5 [Media] Escritorio, no móvil, es la mayoría

Search Console, ago–oct 2026:

| Dispositivo | Clics | Impresiones | Posición |
|---|---|---|---|
| Escritorio | 70 (77 %) | 5.801 | 23,8 |
| Móvil | 21 (23 %) | 710 | 8,6 |

El brief de diseño (documento 07, B.2) suponía móvil mayoritario sin datos. **Corrección:** diseñar con el mismo cuidado escritorio y móvil, y probar el escritorio como vista principal del cliente corporativo.

### 2.6 [Media] La proyección base tiene el techo alto

Comprobación de abajo arriba (volumen × CTR estimado para la posición objetivo, a 12 meses):
- productora audiovisual ~39 · video corporativo e institucional ~10 · cobertura de eventos ~7 · catering corporativo ~6 · eventos corporativos ~3 · fotografía ~6 · drone ~7 · show (media anual) ~50 · marca ~30 · búsquedas pequeñas ~30.
- **Total ≈ 190 visitas orgánicas al mes.**

El rango base del documento 04 (150–400) contiene ese número, pero **400 es optimista**. Para planificar, usar **150–250 al mes a 12 meses** como escenario central; el alto requiere más búsquedas en "lima" de las que mide Google Ads.

### 2.7 [Media] El tráfico de la competencia estaba subestimado

La estimación de DataForSEO para Rhino era ~13 visitas al mes; Search Console dice ~30. Factor ≈ 2,3. Aplicándolo, MAIA podría rondar **~450** visitas al mes y Flama ~400, no 200 y 170. **La conclusión no cambia** (5.000 al mes es inalcanzable), pero la distancia es de unas 10 veces, no de 10 a 25.

### 2.8 [Baja] Flama no es "un dominio nuevo"

El documento 02 tomó la fecha en que DataForSEO vio el primer enlace a Flama (enero de 2026) como antigüedad del dominio. **No es lo mismo.** La lección (una buena página puede subir sin muchos enlaces) sigue siendo razonable, pero con menos fuerza.

### 2.9 [Alta, cumplimiento] Obligaciones legales locales no contempladas

Para verificar con un asesor legal en Perú:
- **Libro de Reclamaciones virtual**, exigible a proveedores que atienden a consumidores. Rhino atiende fiestas y eventos sociales.
- **Razón social y RUC** visibles en la web.
- **Política de privacidad** conforme a la Ley de Protección de Datos Personales (ya prevista) y consentimiento en el formulario.

### 2.10 [Media] Diseño: contraste y longitud

**Contraste (WCAG AA, texto normal ≥ 4,5:1):**
- B: blanco sobre naranja `#e8590c` = 3,58 · naranja sobre papel = 3,32 · naranja sobre chip = 3,07 → **no cumple** en botones y enlaces.
- A: nota gris `#6f6f78` = 3,95 → no cumple en texto pequeño.
- C: cumple en todo lo medido.

**Corregido en esta auditoría:** naranja de B a `#c2410c` y gris de nota de A a `#8f8f99`.

**Longitud:** la home móvil mide ~8.600 px (unas 10 pantallas). Recomendación para el mockup: fusionar "Por qué Rhino" con la franja de confianza, dejar 3 preguntas frecuentes y compactar el portafolio en móvil.

### 2.11 [Media] Afirmaciones sin validar en el copy y los diseños

"Un solo equipo para todo el evento" y "Todo en un solo servicio" aparecen como hechos. Si el catering o el streaming se subcontratan, es engañoso. Mantener solo si es cierto; si no, usar "un solo contrato" o "un solo responsable".

### 2.12 [Baja] Inconsistencias entre documentos (corregidas en esta auditoría)
- El árbol del documento 03 decía `/servicios/streaming/`; la URL vigente es `/servicios/streaming-y-podcast/`.
- `CLAUDE.md` remitía al mapa de palabras clave del documento 01 (vigente: 03) y listaba Ahrefs como fuente utilizable (plan insuficiente).
- La redirección `/index.html` estaba en `vercel.json` pero no en el documento 07.
- El documento 01 y `CLAUDE.md` daban por cerrado el caso "One moment, please...".

---

## 3. Cambios en la proyección y la prioridad

| Tema | Antes | Después de la auditoría |
|---|---|---|
| Orgánico a 12 meses (central) | 150–400 | **150–250** (alto: hasta ~400) |
| Mercado de búsqueda más grande para empresas | Catering y eventos | **Producción audiovisual** |
| Primer riesgo del proyecto | Redirecciones | **Posible bloqueo de rastreadores en el hosting** |
| Prioridad SEO local | Alta | **Máxima** (marca invisible) |
| Diseño | Móvil primero | **Escritorio y móvil por igual** |

## 4. Acciones, en orden

**Esta semana (dueño):**
1. Verificar el bloqueo de rastreadores (sección 2.1) y desactivarlo si existe.
2. Ver el motivo de "No apta" en Google Ads (probablemente relacionado).
3. Confirmar si existe ficha de Google Business; crearla o verificarla.
4. Consultar con un asesor el Libro de Reclamaciones y los datos legales del pie.

**Antes del mockup (consultoría):**
5. Aplicar al diseño el contraste corregido, la home más corta y el cuidado de escritorio.
6. Mantener las afirmaciones del copy solo si se validan.

**Antes del lanzamiento:**
7. Lista de comprobación del documento 07, más: prueba de *Inspección de URL* sin desafío anti-bots en la web nueva.
