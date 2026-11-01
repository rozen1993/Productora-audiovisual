# Rhino Audiovisuales — Auditoría del plan SEM y plan corregido (S/ 100 al mes)

Documento 11. Fecha: 1 de noviembre de 2026.
**Sustituye** la estructura, las palabras clave y los presupuestos de los documentos 04 (§3) y 05 (§5 y §8). Las proyecciones de tráfico siguen en el documento 04 §8.

**Datos usados:**
- Google Ads, campaña "Rhino Audiovisuales", dic 2025 – feb 2026: rendimiento por dispositivo, por hora, por palabra clave y por término de búsqueda (Adzviser; los términos se revisaron el 1 nov filtrando solo la campaña de Rhino).
- Intención de búsqueda, dificultad y variantes del documento 10 (DataForSEO).
- La cuenta `midnightstudios` contiene también otra marca, que se ignora por indicación del dueño.

> Recordatorio: la "conversión" de la cuenta es **"Vista de una página"**, no un contacto. Las tasas de conversión de abajo indican interés, no ventas.

---

## 1. Datos nuevos de la cuenta

**Por dispositivo (dic 2025 – feb 2026):**
| Dispositivo | Clics | Impresiones | CTR | CPC | Gasto | Conv.* |
|---|---|---|---|---|---|---|
| Móvil | **110 (73 %)** | 866 | 12,7 % | **S/ 0,71** | S/ 77,71 | 8 |
| Escritorio | 39 (26 %) | 473 | 8,2 % | S/ 1,35 | S/ 52,75 | 4 |
| Tableta | 1 | 8 | — | S/ 1,80 | S/ 1,80 | 0 |

**Por franja horaria:**
| Franja | Clics | Gasto | Conv.* | Conv./clic | Coste por conv.* |
|---|---|---|---|---|---|
| 0:00–6:59 | 27 | S/ 18,06 | 1 | 3,7 % | S/ 18,1 |
| **7:00–19:59** | **97** | **S/ 96,12** | **10** | **10,3 %** | **S/ 9,6** |
| 20:00–23:59 | 26 | S/ 18,08 | 1 | 3,8 % | S/ 18,1 |

\*Conversión = vista de página.

**Lectura:**
- **En anuncios, el móvil domina** (73 % de los clics, a mitad de precio), justo al revés que en el orgánico (77 % escritorio).
- **El horario laboral rinde casi 3 veces más:** el 27 % del gasto (S/ 36) se fue de noche y de madrugada con 2 de las 12 conversiones.

---

## 2. Hallazgos de la auditoría

| # | Hallazgo | Severidad | Estado |
|---|---|---|---|
| S1 | **El reparto por grupo de anuncios no se puede aplicar.** En Google Ads el presupuesto es por campaña, no por grupo. Con una sola campaña, "show 50 · eventos 35 · producción 15" no se cumple: el dinero va a los grupos que más subastas ganen | Alta | Corregido: dos campañas (§3) |
| S2 | **Las cuentas no cuadraban.** Con S/ 3,30 diarios desde el 10 de noviembre se gastan unos S/ 70, no S/ 100. Para usar S/ 100 en 21 días hacen falta ~S/ 4,80 diarios en total | Media | Corregido: presupuestos diarios por periodo (§3.2) |
| S3 | **Palabras clave contra la intención real:** [video institucional] y [video corporativo] son navegacionales; "desayunos empresariales" es informativa; "filmación de eventos" es informativa; [productoras audiovisuales] gastó S/ 17 en 27 clics sin conversión | Alta | Corregido: listas nuevas (§3.3) |
| S4 | **Faltaban palabras rentables:** "coffee break lima" (140), "servicio de coffee break" (70), "coffee break para 20 personas" (transaccional), variantes de alquiler de pantallas LED (~450–550) | Media | Corregido |
| S5 | **Faltaban exclusiones:** términos en inglés (se pagaron 21 clics de "live video streaming production"), búsquedas de eventos públicos en el show (centros comerciales, municipalidades, gratis) y de compra en pantallas LED | Media | Corregido (§3.4) |
| S6 | **La medición seguía sin receta concreta** para la web actual | Alta | Corregido: receta mínima (§3.6) |
| S7 | **El doc 09 recomendaba subir la puja en escritorio** con datos orgánicos. En anuncios, el móvil trae el 73 % de los clics a la mitad de precio | Media | Corregido: sin ajustes por dispositivo hasta medir contactos |
| S8 | **El doc 09 daba por hecho el formulario de contacto de Google Ads.** Google lo habilita solo a cuentas que cumplen requisitos (historial y gasto); con S/ 132 de gasto histórico, probablemente no esté disponible | Media | Corregido: "verificar si la cuenta es elegible" |
| S9 | **Sin fecha límite para el show:** la temporada ya empezó y la campaña sigue "No apta" | Media | Corregido: corte el 15 de noviembre (§3.7) |
| S10 | **El horario 7:00–20:00 de lunes a sábado era una suposición** | — | **Validado con datos** (§1) |
| S11 | **Faltaban exclusiones que muestran los términos de búsqueda** (revisión del 1 nov): ~60 impresiones y 4 clics (S/ 3,88) en marcas de otras productoras; 5 clics (S/ 9,33) de "estudio fotográfico" y "sesión de fotos" sin conversión; ~35 impresiones de bodas, quinceañeros y cumpleaños; "cuanto cobrar por edicion de video" (quien vende, no quien compra). Y faltaba un término rentable: "servicio de videos corporativos" (2 clics a S/ 0,29) | Media | Corregido (§3.3 y §3.4). El dueño cubre bodas y tiene estudio (1 nov): esas búsquedas no se excluyen y se define S6 |

---

## 3. Plan SEM corregido

### 3.1 Estructura: dos campañas
| Campaña | Para qué | Cuándo | Horario |
|---|---|---|---|
| **C1 · Rhino – Temporada** | Show infantil navideño y fiesta de fin de año para empresas | Desde que la cuenta sea apta hasta el 22 dic | Todos los días, 7:00–21:00 (familias y empresas; se revisa con datos) |
| **C2 · Rhino – Servicios** | Cobertura de eventos, producción, catering, pantallas LED | Todo el año | Lunes a sábado, 7:00–20:00 (validado) |

Configuración común:
- Solo red de Búsqueda (sin socios ni Display).
- Lima Metropolitana y Callao, por "presencia". Idioma español.
- CPC manual.
- Coincidencia de frase y exacta.
- **Sin ajustes por dispositivo** hasta tener 30 contactos reales.

### 3.2 Presupuesto diario por periodo (total ≈ S/ 100 al mes)
| Periodo | C1 Temporada | C2 Servicios | Total aproximado |
|---|---|---|---|
| Noviembre (desde la activación; con 10 nov, 21 días) | S/ 2,40 al día | S/ 2,40 al día | ~S/ 100 |
| Diciembre | S/ 2,70 al día (1–22 dic) | S/ 1,30 al día (todo el mes) | ~S/ 100 |
| Desde enero | — (pausada) | S/ 3,30 al día | ~S/ 100 |

- **Si se activa otro día** (antes o después del 10 nov): presupuesto diario = lo que queda del mes para esa campaña ÷ los días que quedan. Activar antes con S/ 2,40 + 2,40 superaría los S/ 100.
- **Dentro de C2, el reparto desde enero** (eventos 35 · catering 25 · pantallas LED 25 · producción 15) es un **objetivo**, no un límite. Se dirige con la puja máxima de cada grupo y pausando grupos, y se revisa el gasto por grupo cada lunes.

### 3.3 Grupos de anuncios y palabras clave

**C1 · T1 Show infantil navideño**
- Destino: `/show.html` (después del lanzamiento, `/show-infantil-navideno/`). CPC máximo S/ 0,90.
- Frase: "show infantil navideño", "show navideño para empresas", "show de navidad para empresas", "show navideño lima", "show infantil navideño precio", "show navideño a domicilio".
- Exacta: [show navideño para niños], [show infantil navideño lima].

**C1 · T2 Fiesta de fin de año para empresas** (solo si `/fiesta-de-fin-de-ano-para-empresas/` está publicada)
- CPC máximo S/ 1,20.
- Frase: "fiesta de fin de año para empresas", "fiesta de fin de año empresa", "catering navideño", "video de saludo navideño para empresas".
- **No usar** "eventos de fin de año" (informativa) ni "saludo navideño empresa" (busca textos y plantillas).

**C2 · S1 Cobertura de eventos (prioridad 1)**
- Destino: `/video.html` (después, `/servicios/cobertura-de-eventos/`). CPC máximo S/ 1,80.
- Frase: "servicio de fotografía y video para eventos" (la mejor histórica: 31 clics, 4 conv.), "foto y video para eventos", "servicio de video para eventos", "cobertura audiovisual de eventos", "cobertura de eventos corporativos", "grabación de eventos".
- "filmación de eventos" con CPC máximo S/ 1,00 (intención informativa; solo se mantiene si los términos reales lo justifican).

**C2 · S2 Producción de video**
- Destino: home (después, `/servicios/produccion-audiovisual/`). CPC máximo S/ 1,20.
- Exacta: [productora audiovisual], [productora audiovisual en lima], [productora audiovisual lima], [producción de videos] (3 conv. en 16 clics a S/ 0,53).
- Frase: "productora de videos corporativos", "producción de videos corporativos", "servicio de videos corporativos" (2 clics a S/ 0,29 en el histórico), "videos institucionales para empresas".
- **Se quitan** [video institucional] y [video corporativo] (navegacionales). **Se pausa** [productoras audiovisuales] (S/ 17 sin conversión).

**C2 · S3 Catering corporativo** (cuando exista su página)
- CPC máximo S/ 1,00.
- Frase o exacta: "catering corporativo", "catering para empresas", "catering para eventos corporativos", "coffee break lima", "servicio de coffee break", "coffee break para empresas", "coffee break para" (cubre "para 20/50/100 personas").
- **No usar** "coffee break" suelto (4.400, informativa) ni "desayunos empresariales" (informativa).

**C2 · S4 Alquiler de pantallas LED** (cuando exista su página; prioridad desde enero)
- CPC máximo S/ 1,50 (competencia alta en anuncios).
- Frase: "alquiler de pantallas led", "alquiler de pantalla led para eventos", "pantalla led alquiler", "alquiler pantalla led", "pantalla led para eventos".

**C2 · S5 Streaming:** definido pero **pausado** (casi sin búsquedas). Se vende por contacto directo y por SEO. Si se activa, quitar "live" de la lista general: bloquearía "live streaming".

**C2 · S6 Estudio fotográfico** (nuevo, 1 nov): **pausado** hasta tener la ficha de Google con la dirección del estudio y precios reales; candidato desde enero si el dueño lo prioriza.
- CPC máximo S/ 1,00 (competencia baja en anuncios).
- Frase: "estudio fotográfico lima", "sesión de fotos lima", "sesión de fotos en estudio".
- En el histórico, estas búsquedas costaron S/ 2,25–2,53 por clic porque entraban por concordancia amplia desde otros grupos; con grupo propio deberían costar menos (hipótesis).

### 3.4 Palabras negativas
**Lista compartida "Rhino – generales" (ambas campañas):** empleo, empleos, trabajo, trabajos, vacante, bolsa de trabajo, sueldo, salario, curso, cursos, clases, carrera, universidad, instituto, diplomado, tutorial, "como hacer", "cómo hacer", "que es", "qué es", significado, definición, ejemplo, ejemplos, plantilla, pdf, gratis, descargar, app, software, programa, wikipedia, production, live, stock, agency, videography, "cuanto cobrar", "cuánto cobrar", españa, madrid.

**Lista compartida "Rhino – otras productoras" (ambas campañas; concordancia de frase):** "producciones isa", palomino, "arte y video", "arte video", "gama films", "gama producciones", "titan producciones", yaolme, "solano producciones", "saes producciones", "lapa producciones", horus, "contraluz films", "maia films", "criss producciones", "apu producciones", "rea producciones", "vas producciones", "creative producciones", "filmaciones el rey", "mil enfoques", "producciones avi", "clip producciones", "ms filmaciones", "oss productions", makefilm, "foto latino". Todas aparecieron en los términos de búsqueda de la campaña de Rhino. Se amplía cada lunes.

**C1 Temporada:** entradas, mall, "centro comercial", mallplaza, "real plaza", jockey, municipalidad, parque, cartelera, hoy, disfraz, disfraces, canción, canciones, letra, dibujo, dibujos, ideas, guion, texto, frases, mensaje, mensajes, cumpleaños (la página es del show navideño).

**C2 · S4 Pantallas LED:** comprar, venta, vendo, segunda, usada, usado, arduino, tv, televisor, reparar, reparación, mochila, fondo, fondos, publicidad, publicitaria, flexible, manchas.

**Bodas, eventos sociales y estudio fotográfico: no se excluyen** (el dueño los cubre, 1 nov 2026).

### 3.5 Anuncios y recursos
- Los borradores del documento 04 §3.4 sirven. **Prohibido usar precios de prueba en anuncios:** el recurso de precio solo con precios reales.
- **Recursos:**
  - Llamada (+51 965 683 542).
  - Textos destacados: "Atención por WhatsApp", "Lima y Callao".
  - Fragmento estructurado "Servicios": cobertura de eventos, video corporativo, streaming, catering, pantallas LED.
  - Enlaces a las páginas nuevas cuando existan.
  - Ubicación, solo cuando exista la ficha de Google.
  - Formulario de contacto, **solo si la cuenta resulta elegible**.

### 3.6 Medición (requisito antes de gastar)
1. En Google Ads, poner "Vista de una página" como **conversión secundaria** (que no cuente como objetivo).
2. En la web actual (el dueño es webmaster), instalar **Google Tag Manager** en todas las páginas con tres activadores:
   - Clic en enlaces que contengan `wa.me` o `api.whatsapp.com` → conversión **"Contacto WhatsApp"**.
   - Clic en enlaces `tel:` → **"Clic en teléfono"**.
   - Envío del formulario (página de gracias o evento de envío) → **"Formulario enviado"**.
3. Importar o crear esas tres como **conversiones principales**.
4. Si Google ofrece informes de llamadas para Perú en la cuenta, activarlos en el recurso de llamada.
5. En la web nueva, la medición está especificada en el documento 07 A.6.

### 3.7 Fechas límite y reglas de decisión
- **15 de noviembre:** si la cuenta sigue "No apta" o no hay medición de contactos, **no se anuncia el show esta temporada**. Ese dinero va a C2 en diciembre y enero.
- **Cada lunes (15 minutos):** revisar términos de búsqueda, añadir negativas, pausar palabras con 10 clics o más y ningún contacto, y revisar el gasto por grupo dentro de C2.
- **A los 30 días:** ajustar el CPC máximo por grupo según la posición y el coste por contacto.
- **A los 60 días, o con 30 contactos:** decidir ajustes por dispositivo y por horario, y si conviene pujar por conversiones.
- **Mientras tanto:** URL finales con la versión sin `www`; hoy `www` redirige (traspaso §3.4).
- **Al lanzar la web nueva:** cambiar todas las URL finales y activar S3 y S4.

### 3.8 Proyección
- Sin cambios respecto al documento 04 §8 cuando las campañas funcionan el mes completo: **~40–85 clics al mes (central ~60), 1–5 contactos reales**.
- **Noviembre será parcial:** con activación entre el 10 y el 15, unos 25–60 clics.

---

## 4. Cambios respecto al plan anterior
| Antes | Ahora |
|---|---|
| Una campaña con "reparto por grupo" | Dos campañas con presupuesto propio; reparto interno por puja y pausas |
| S/ 3,30 diarios fijos | Presupuesto diario por periodo (S/ 2,40 + 2,40 en nov; 2,70 + 1,30 en dic; 3,30 desde ene) |
| [video institucional], [video corporativo], "desayunos empresariales", [productoras audiovisuales] | Quitadas o pausadas por intención o por historial |
| — | Añadidas: coffee break lima, servicio de coffee break, variantes de alquiler LED, fin de año corporativo |
| Negativas generales | Más inglés, búsquedas de eventos públicos (C1) y de compra (pantallas LED) |
| "Ajuste por escritorio" (doc 09) | Sin ajustes por dispositivo hasta medir contactos |
| Formulario de contacto de Ads como seguro | Solo si la cuenta es elegible |
| Sin lista de marcas ajenas ni de quien vende | Lista "Rhino – otras productoras", "cuánto cobrar", más inglés; bodas y estudio según el dueño |
| S2 sin "servicio de videos corporativos" | Añadida (rentable en el histórico) |
| Bodas y estudio sin decidir | El dueño los cubre: no se excluyen; S6 Estudio definido y pausado |
| Horario supuesto | Horario validado con datos |
| Sin fecha límite para el show | Corte el 15 de noviembre |
