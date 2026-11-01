# Rhino Audiovisuales — Tercera auditoría (gobierno del proyecto, validación de datos y oportunidades)

Documento 10. Fecha: 1 de noviembre de 2026.
Enfoque: un tercer consultor recibe el proyecto en frío, revisa la coherencia de todo lo entregado (documentos 01–09, `CLAUDE.md`, `vercel.json`, `content/datos-de-prueba.json`, diseños) y **valida con datos nuevos las afirmaciones de las revisiones anteriores** antes de construir sobre ellas.

**Datos nuevos (DataForSEO, Perú, 1 nov 2026):** intención de búsqueda (clasificador de DataForSEO) y dificultad de 36 palabras clave; competidores por SERP (índice de DataForSEO) para 10 palabras clave; SERP en vivo de "maestro de ceremonias" y "fotos corporativas"; variantes de cola larga de "fotos corporativas", "coffee break" y "pantalla led"; dominios que enlazan a la vez a Maracuyá, MAIA y Bolívar Studio; tráfico estimado de 12 dominios; palabras clave de E2peru.

---

## 1. Veredicto

La estrategia de fondo es correcta: proteger lo que ya posiciona, una página por intención, ficha de Google y reseñas, y medir contactos. Pero el proyecto tiene **tres problemas de gobierno** y **tres sobreestimaciones** que conviene corregir antes del diseño:

| # | Problema | Severidad |
|---|---|---|
| G1 | **Varias "verdades" conviven:** tres repartos del presupuesto de Ads, tres proyecciones SEM y un documento 01 que aún recomienda lanzar "a partir del 10 de enero" | Alta |
| G2 | **Inconsistencias residuales:** la tabla del doc 03 seguía con `/servicios/streaming/`; `CLAUDE.md` daba por pendientes cosas ya confirmadas | Media |
| G3 | **La salvaguarda de datos de prueba no existe aún:** está especificada, pero no hay proyecto Astro que la implemente | Alta (cuando empiece la construcción) |
| D1 | "Fotos corporativas" no es una SERP sin páginas de servicio, y su intención es mixta | Media |
| D2 | "Eventos de fin de año" (1.000 en diciembre) es sobre todo informativa y la más difícil del conjunto | Media |
| D3 | "Maestro de ceremonias" (880) es en un 81 % gente que quiere aprender a serlo | Media |

**Corregido en esta auditoría:** G1 y G2 (avisos de "sustituido" y fuente única de verdad en `docs/seo/00-traspaso.md`), D1–D3 (doc 03 y doc 09 anotados). G3 queda como requisito de la fase de construcción.

---

## 2. Validación con datos de las afirmaciones anteriores

### 2.1 Intención de búsqueda (clasificador de DataForSEO)

| Comercial (compran) | Informativa (aprenden o buscan ideas) | Navegacional (buscan algo concreto) |
|---|---|---|
| productora audiovisual (0,96) · productora audiovisual lima (0,99) · cobertura audiovisual de eventos (0,88) · cobertura de eventos (0,78) · streaming de eventos (0,93) · catering corporativo (0,95) · catering para eventos (0,89) · eventos corporativos lima (0,94) · pantalla led para eventos (0,86) · alquiler de pantallas led (0,94) · alquiler de sonido para eventos (0,98) · servicio de drone (0,86) · fiesta de fin de año empresa (0,56) | filmación de eventos (1,00) · motion graphics (1,00) · show navideño (0,98) · video podcast (0,98) · fotografía inmobiliaria (0,95) · eventos de fin de año (0,87) · desayunos empresariales (0,85) · show infantil navideño (0,85) · maestro de ceremonias (0,81) · estudio de podcast (0,75) · fotografía publicitaria (0,64) · fotos corporativas (0,55, con 0,41 comercial) · activaciones btl (0,44) | video institucional (0,79) · fotografía corporativa (0,66) · video corporativo (0,54) |

**Consecuencias:**
- Las páginas cuya palabra principal es comercial están bien elegidas: home, cobertura, streaming, catering, pantallas LED y sonido.
- **"Video institucional" y "video corporativo" son en gran parte navegacionales:** gente que busca un video concreto o ejemplos. La página de video corporativo traerá menos compradores de los supuestos. Las palabras de dinero son "productora audiovisual", "cobertura audiovisual de eventos" y "streaming de eventos".
- Las páginas con palabra principal informativa (maestro de ceremonias, fotografía inmobiliaria, BTL) deben **responder primero la pregunta y después vender**.

### 2.2 Dificultad (escala 0–100 de DataForSEO)
- Casi todas las palabras comerciales del plan tienen **dificultad 0–11**: productora audiovisual 0, pantalla led para eventos 0, alquiler de pantallas led 0, fotos corporativas 0, catering para eventos 0, productora audiovisual lima 8, video corporativo 11.
- Las únicas difíciles: video institucional 52, eventos de fin de año 52, tour virtual 360 53, filmación de eventos 43.
- **Confirma la tesis del doc 09:** el mercado está poco disputado en SEO. La ventana existe.

### 2.3 D1 — "Fotos corporativas": sigue siendo buena, pero menos de lo dicho
- **Volumen:** 390–480/mes (390 en septiembre; −34 % interanual). Variantes: "fotos corporativas mujer/mujeres" 110, "hombres" 70, "poses para fotos corporativas" 20–40, la mayoría informativas. "Sesión de fotos corporativas" 20 (comercial).
- **SERP en vivo del término principal:** imágenes, AI Overview, un blog mexicano, **Mírame Estudio (estudio de Lima, puesto 2)**, un banco de imágenes, un blog, Pinterest y un generador de fotos con IA.
- **En el índice de DataForSEO:** Instagram 1, marcapersonal.pe 2, lineadigital.pe 3.
- **Corrección al doc 09:** sí hay páginas de servicio peruanas en el top 3. La SERP de "fotos corporativas lima" sí era débil, pero tiene poco volumen.
- **Nueva amenaza:** los generadores de fotos corporativas con IA ya aparecen en la SERP. La página debe argumentar "fotos reales, coherentes, en tu oficina".
- **Estimación revisada:** ~15–30 visitas al mes a 12 meses (antes ~48). La página sigue siendo prioritaria, con una sección de "qué ponerse y cómo posar" para captar la parte informativa.

### 2.4 D2 — Fiesta de fin de año: la palabra correcta es otra
- "Eventos de fin de año" (1.000 en diciembre) es informativa en un 87 % y tiene dificultad 52. La gente busca eventos públicos y fiestas para asistir.
- El subconjunto corporativo real en diciembre: "fiesta de fin de año empresa" 140, "catering navideño" 210 (también noviembre) y "saludo navideño empresa" 170. **En total, ~300–500 búsquedas en noviembre y diciembre, no 1.000.**
- **Corrección:** la palabra principal de `/fiesta-de-fin-de-ano-para-empresas/` pasa a ser "fiesta de fin de año para empresas". La página se mantiene.

### 2.5 D3 — Maestro de ceremonias: informativo
- SERP en vivo: wikiHow, Wikipedia, cursos en YouTube, consejos (presento.es), protocolo.org, un blog peruano de eventos corporativos y perfiles de Facebook e Instagram de presentadores.
- Pregunta frecuente con intención de compra: **"¿Cuánto cobra un maestro de ceremonia en Perú?"**
- **Estimación:** la porción comercial es de ~100–150 al mes, no 880. Se mantiene en la tanda B, con la respuesta de precio como sección principal.

### 2.6 Pantallas LED: se confirma y sube de prioridad
- **Intención comercial o transaccional confirmada.** Las variantes de alquiler suman ~450–550 al mes: alquiler de pantalla led 170 · alquiler de pantalla led para eventos 110 · pantalla led alquiler 50 · alquiler pantalla led 50 · pantalla led para eventos precio 50 · pantalla led para escenario 40. A eso se suma "pantalla led para eventos" (390, mezcla de compra y alquiler).
- **SERP de "alquiler de pantallas led":** Facebook 1, totemsled.com 2, feelingproduccion.com 3, un clasificado (evisos) 4, TikTok 7, Instagram 10. **Débil:** una página con medidas, precios y fotos de montajes puede llegar al top 3.
- **En anuncios, excluir** "pantalla led" (2.900, gente que quiere comprar) y "publicidad en pantalla led" (320, publicidad exterior). La competencia en anuncios es alta.
- **Estimación:** ~20–40 visitas al mes a 12 meses. Junto con la home, es **la oportunidad orgánica comercial más sólida.**

### 2.7 Catering: ajuste fino
- "Catering corporativo" es comercial (0,95) y queda como palabra principal, bien elegida.
- **Variantes comerciales que faltaban:** "coffee break lima" 140, "servicio(s) de coffee break" 70, "coffee break para 20 personas" 20 (transaccional).
- **Informativas aprovechables:** "coffee break que incluye" 40, "ideas de coffee break" 20–40. Una sección "qué incluye cada opción" responde esas preguntas y alimenta las respuestas de IA.

---

## 3. Oportunidades nuevas

1. **La IA recomienda por reseñas, no por SEO (dato duro).** Bolívar Studio no tiene tráfico orgánico medible, y aun así ChatGPT lo pone segundo gracias a 34 reseñas de 5,0 en Google Maps. **La ficha con reseñas es el atajo más rápido a las recomendaciones de IA.** Las reseñas pasan a ser el indicador número 1.
2. **InEventos es el directorio dominante del sector:** ~4.150 visitas orgánicas estimadas al mes en Perú, en 561 búsquedas, y es fuente de ChatGPT. Darse de alta ahí es probablemente la acción de visibilidad con mejor retorno.
3. **No hay enlaces que copiar.** Solo 4 dominios enlazan a la vez a Maracuyá, MAIA y Bolívar Studio, y los 4 son spam (casinos, acortadores). Ningún competidor tiene una ventaja de enlaces defendible: los primeros enlaces reales (InEventos, clientes, prensa, gremios) diferencian de inmediato.
4. **Las redes sociales ocupan la SERP de las palabras de dinero:** Instagram es primero en "fotos corporativas", Facebook primero en "alquiler de pantallas led" y TikTok séptimo. Publicaciones de Rhino con textos de servicio ("Alquiler de pantallas LED para eventos en Lima") pueden ocupar esos huecos a coste cero mientras la web madura.
5. **El modelo E2peru (catálogo de alquiler):** E2peru posiciona en 276 búsquedas (~700 visitas al mes) con una ficha por equipo y una página `/estudio-podcast/` que es **primera en "estudios de grabacion" (880/mes)**.
   - Si Rhino alquila equipos sueltos (cámaras, micrófonos, luces), un catálogo con ficha por equipo es un motor de cola larga.
   - Si algún día tiene estudio, "estudios de grabación" es la palabra grande del podcast.
   - Ambas cosas son opcionales y dependen del inventario real.
6. **Competidores nuevos a vigilar:**
   - Fotos corporativas: Mírame Estudio, marcapersonal.pe y lineadigital.pe.
   - Pantallas LED: sonoluz.com.pe, alcaledperu.com.pe, totemsled.com y feelingproduccion.com.
   - Alquiler técnico: E2peru.
   - Maestro de ceremonias: staffeliteperu.com.
   - Productora audiovisual: sixlab.pe y webtilia.com.

---

## 4. Proyección revisada

- **Oportunidades del doc 09 corregidas:** fotos corporativas 15–30 · pantallas LED 20–40 · fin de año 3–5 de media anual (pico en diciembre) · BTL 5–10 · maestro de ceremonias 5–10 · inmobiliaria 3–5 ≈ **+50–100 visitas al mes** a 12 meses (antes +50–120).
- **Orgánico total a 12 meses, escenario central:** ~**200–330 visitas al mes** (base 150–250 más las oportunidades). Alto: ~450. Bajo: 60–120 si el bloqueo de rastreadores no se resuelve.
- **SEM (sin cambios, doc 04 §8):** ~40–85 clics al mes, central ~60; 1–5 contactos.
- **Total a 12 meses:** ~**270–500 visitas al mes** y **6–18 consultas** (confianza baja).

---

## 5. Recomendaciones de proceso

1. **Una sola fuente de verdad:** `docs/seo/00-traspaso.md` resume el estado vigente; cada documento sustituido lleva un aviso arriba.
2. **Verificar la intención antes de escribir cada página de la tanda B** (hecho hoy para maestro de ceremonias, BTL y pantallas LED).
3. **Implementar en el primer commit del proyecto Astro** la salvaguarda de datos de prueba y la comprobación de longitudes y H1.
4. **Panel mensual de indicadores** (definido en el traspaso): reseñas, directorios, contactos por canal, posiciones de 6 palabras de dinero y estado de rastreo.
