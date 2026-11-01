# Rhino Audiovisuales — Prioridades del dueño y campaña revisada

Documento 5. Fecha de los datos: 31 de octubre de 2026. Mercado: Lima, Perú.
**Prioridades indicadas por el dueño:** (1) cobertura de eventos, (2) streaming y podcast, (3) catering. Objetivo: que lleguen clientes cuanto antes.
Este documento ajusta los documentos 03 y 04 (reparto de presupuesto y prioridades).

---

## 1. Primer bloqueo: la campaña no está entregando anuncios desde marzo

Hallazgos de la cuenta de Google Ads (`midnightstudios`, 31 oct 2026):

| Dato | Valor |
|---|---|
| Campaña "Rhino Audiovisuales" | Estado: **habilitada** · Entrega: **servida** |
| Estado principal | **"No apta" (motivo desconocido)** |
| Última actividad | febrero de 2026 (61 clics ese mes). **Cero impresiones de marzo a octubre** |
| Presupuesto diario | S/ 7,77 · Presupuesto: habilitado |

Habilitada pero no apta significa que Google no la muestra. Causas más comunes:
1. **Problema de facturación**: método de pago rechazado o cuenta suspendida.
2. **Anuncios o palabras clave rechazados** por políticas.
3. Anuncios o grupos de anuncios pausados o sin palabras clave activas.

**No puedo ver el motivo desde aquí.** Lo ves tú en Google Ads: *Campañas → Rhino Audiovisuales → icono de estado* y *Facturación → Resumen*. Es lo primero que hay que resolver, antes de decidir cualquier cosa de publicidad.

**Limitación del conector:** Adzviser tiene el acceso de escritura desactivado en esta cuenta y, aunque se activara, solo permite cambiar el presupuesto diario. **No puede crear grupos de anuncios, palabras clave, negativas ni anuncios.** Esa configuración la haces tú en Google Ads con las especificaciones de este documento.

---

## 2. Qué muestran los datos de tus tres prioridades

### 2.1 Cobertura de eventos: **alcanzable**
- **SERP de "cobertura audiovisual de eventos":** páginas de servicio dedicadas de empresas pequeñas (Tierra Films, Cuarto Enfoque, Flama, Strobin, Ratto Films, AQP Business). Ningún gigante.
- Dos detalles útiles de la competencia: **Flama muestra el precio en el resultado** ("foto y video, 2 horas, desde US$400") y varias incluyen **streaming y video resumen** en la misma página.
- Demanda: "cobertura de eventos" 30/mes, "filmación de eventos" 40/mes, "filmaciones" 390/mes (ambigua). Es poca, pero tu cuenta de Ads ya convirtió mejor aquí: "servicio de fotografía y video para eventos" dio 31 clics y 4 conversiones (vistas de página).
- **Recomendación:** página dedicada con cobertura + streaming + video resumen + fotografía, con precio "desde" si quieres mostrarlo.

### 2.2 Streaming y podcast: **demanda baja y competencia local establecida**
| Búsqueda | Al mes | Lectura |
|---|---|---|
| estudio de podcast | 110 | Quien busca **alquilar un estudio** |
| video podcast | 210 | Mezcla de curiosos y productores |
| estudio de grabación lima | 70 | Alquiler de estudio |
| live streaming | 590 | Mezcla de consumidores |
| transmisión en vivo | 1.600 | Consumidores en su mayoría |
| webinar | 2.900 | Informativa y de herramientas |
| producción de podcast / servicio de podcast / grabación de podcast | 10 c/u | Casi nada |
| streaming para eventos / streaming multicámara | 10 c/u | Casi nada |

- **SERP "estudio de podcast lima":** estudios con ubicación física y reseñas (NV Estudio Miraflores, Tu Podcast San Isidro, Audiocast, Studio V, Nutrimedia San Borja). **Si no tienes estudio propio, no compites aquí.** Tu ventaja posible es producir **en el lugar del cliente** (video podcast corporativo, transmisión multicámara), una búsqueda casi inexistente pero con compradores B2B.
- Tu streaming vende mejor **dentro de otras páginas** (cobertura y organización de eventos) y por contacto directo (LinkedIn, clientes actuales) que por búsquedas.
- **Pregunta clave:** ¿tienes estudio o set para grabar podcasts, o lo haces en las instalaciones del cliente?

### 2.3 Catering: **mercado grande, competencia local fuerte**
- Demanda: servicio de catering 1.000 · catering lima 480 · catering para eventos 320 · almuerzos corporativos 110 · catering corporativo 90 · desayunos empresariales 90.
- **SERP "catering corporativo lima":** paquete del mapa con negocios de **15 años y 45 reseñas de 4,9** (El Catering de Andrea), más páginas de Facebook y blogs de caterings especializados (Mayito Gourmet, Hecho en Casa). Búsquedas relacionadas: "catering en lima precios", "coffee break corporativo", "catering para 50 personas precios".
- **Lectura:** posicionar catering en el mapa de Google exige reseñas y años de actividad que hoy no tienes en ese servicio. Es más realista:
  1. **Vender catering junto con el evento** (producción integral), que es lo que no ofrecen los caterings puros.
  2. Posicionar búsquedas **corporativas específicas**: coffee break corporativo, desayunos empresariales, almuerzos corporativos.
  3. Publicar una **guía de precios** (la SERP lo pide), con rangos reales.
- Un catering nuevo sin reseñas compite mal en el mapa. Pedir reseñas a clientes de eventos es la palanca.

---

## 3. Ajustes a la arquitectura (documento 03)

| Cambio | Detalle |
|---|---|
| Renombrar | `/servicios/streaming/` → **`/servicios/streaming-y-podcast/`** |
| Título de la página | Streaming, Transmisión en Vivo y Video Podcast \| Rhino (54 caracteres) |
| H1 | Streaming, transmisión en vivo y video podcast |
| Contenido | Transmisión de eventos y conferencias, multicámara, video podcast corporativo, equipos y plataformas. **Si hay estudio, mostrarlo; si no, no insinuarlo** |
| Prioridad A (nuevo orden) | Cobertura de eventos · Streaming y podcast · Catering · Organización de eventos · Video corporativo · Home · Show |
| Catering: secciones | Coffee break corporativo · Desayunos empresariales · Almuerzos corporativos · Catering para N personas |
| Precios | La guía de precios de catering y de cobertura pasa de fase 2 a **fase 1** si hay rangos reales |

Redirecciones: sin cambios (ver documento 03), con el destino de streaming actualizado.

---

## 4. Plan de adelanto: publicar las páginas prioritarias antes del lanzamiento

**Problema:** hoy la web antigua no tiene página de catering ni de streaming, y la cobertura de eventos es una sección de `video.html`. Lanzar anuncios sin buena página de destino desperdicia dinero. La web nueva sale el 10 de enero.

**Propuesta:** publicar en la web actual, en noviembre, **tres páginas nuevas en su URL final**:
- `/servicios/cobertura-de-eventos/`
- `/servicios/streaming-y-podcast/`
- `/servicios/catering-corporativo/`

Ventajas:
1. Google empieza a indexarlas dos meses antes.
2. Los anuncios tienen destino propio.
3. La web nueva conserva esas URLs, así que no hay redirecciones ni pérdida.
4. No se toca ninguna página que hoy posiciona.

Qué necesito: que la web actual permita crear carpetas con archivos `index.html` (o que alguien las publique), y los datos reales de cada servicio (sección 7).

---

## 5. Campaña de Google Ads revisada (especificación para configurar en tu cuenta)

**Orden de pasos:**
1. Resolver por qué está "No apta" (sección 1).
2. Cambiar la conversión "Vista de una página" por contactos reales (ver documento 04, sección 3.1).
3. Configurar la campaña como indica el documento 04, sección 3.2 (solo red de búsqueda, Lima y Callao, 7:00–20:00 de lunes a sábado, CPC manual, coincidencia de frase y exacta, presupuesto diario de S/ 3,30).
4. Crear los grupos de anuncios de abajo.

### Grupos de anuncios

**A. Cobertura de eventos** (el que mejor funcionó)
- Frase: "servicio de fotografía y video para eventos", "foto y video para eventos", "servicio de video para eventos", "cobertura audiovisual de eventos", "filmación de eventos", "grabación de eventos", "cobertura de eventos corporativos".
- CPC máximo: S/ 1,80 · Destino: `/servicios/cobertura-de-eventos/` (mientras no exista: la sección de eventos de `video.html`).

**B. Streaming de eventos** (solo en prueba, desde enero)
- Frase: "transmisión en vivo de eventos", "streaming de eventos corporativos", "transmisión de conferencias", "video podcast para empresas". No pujar por "estudio de podcast" ni por "live streaming" genérico.
- CPC máximo: S/ 1,20 · Destino: `/servicios/streaming-y-podcast/`.

**C. Catering corporativo** (desde enero o cuando exista la página)
- Frase y exacta: "catering corporativo", "coffee break corporativo", "coffee break para empresas", "desayunos empresariales", "almuerzos corporativos", "catering para empresas", "catering para eventos corporativos".
- **No** pujar por "coffee break" solo (4.400/mes: mezcla informativa) ni por "catering lima" genérico.
- CPC máximo: S/ 1,00 · Destino: `/servicios/catering-corporativo/`.
- Negativas adicionales: receta, recetas, qué es, aerolínea, avión, parrillero, cumpleaños, matrimonio y boda (si no los atiendes).

**D. Show navideño** (del 10 de noviembre al 22 de diciembre)
- Frase: "show infantil navideño", "show navideño lima", "show navideño para empresas", "show infantil precio".
- CPC máximo: S/ 0,90 · Destino: `show.html` (misma URL).

**E. Producción de video** (mantenimiento)
- Exacta: [producción de videos], [productora audiovisual en lima], [productora audiovisual], [video corporativo], [video institucional].
- CPC máximo: S/ 1,20 · Destino: home.

Las negativas generales y los borradores de anuncios de los grupos A, D y E están en el documento 04.

### Reparto de S/ 100 al mes

> Desde enero vale el reparto de la sección 8 (pantallas LED en lugar de streaming).

| Mes | Show (D) | Eventos (A) | Producción (E) | Catering (C) | Streaming (B) |
|---|---|---|---|---|---|
| Nov (desde el 10) | 50 | 35 | 15 | — | — |
| Dic (1–22) | 60 | 25 | 15 | — | — |
| Ene (web nueva) | — | 40 | 15 | 35 | 10 |
| Feb – abr | — | según datos | según datos | según datos | según datos |

Con tan poco dinero, **no se pueden probar cinco cosas a la vez**: S/ 10 en streaming son unos 8–10 clics. Es solo una señal de si existe demanda, no una conclusión.

### Expectativas
Ver el documento 04 §8 (vigente): **~40–85 clics al mes (central ~60) y 1–5 contactos reales**, con la incertidumbre de que hoy no se miden contactos. Y con la campaña parada desde marzo, **antes de resolver el bloqueo el resultado es cero**.

---

## 6. Qué se hace en cada canal para que lleguen clientes

| Canal | Acción | Plazo |
|---|---|---|
| Google Ads | Resolver "No apta" y arreglar la medición | Esta semana |
| Web actual | Publicar las tres páginas prioritarias en su URL final | Noviembre |
| Show | Mejoras aditivas en `show.html` + videos en YouTube | Noviembre |
| Ficha de Google Business | Completar categorías, servicios, fotos, enlace de WhatsApp | Esta semana |
| Reseñas | Pedirlas a clientes de eventos y de catering | Continuo |
| LinkedIn y contacto directo | Eventos corporativos y streaming (aquí casi no hay búsqueda) | Continuo |
| Directorios | Sortlist, geotv.pe, bcontent | Noviembre |

---

## 7. Datos reales que necesito para escribir las tres páginas

**Cobertura de eventos:** tipos de evento que cubres, qué entregas (fotos, video completo, resumen, clips en vivo), plazos de entrega, equipo, precio "desde" si quieres mostrarlo, 2–3 casos que puedas nombrar.

**Streaming y podcast:** plataformas, cámaras y conexión que usas, cuántas cámaras, ¿tienes estudio?, eventos transmitidos, precio "desde".

**Catering:** si es propio o subcontratado, tipo de cocina y menús, capacidad (personas), permisos sanitarios y municipales, zonas de reparto, precio por persona "desde", si atiendes por separado o solo dentro de eventos.

**General:** dirección y horario, WhatsApp, fotos reales (no de bancos de imágenes) y quién publica archivos en la web actual.

---

## 8. Ajuste con el catálogo ampliado (31 oct 2026)

- **Noviembre y diciembre:** al grupo del show se añaden, solo si la página `/fiesta-de-fin-de-ano-para-empresas/` ya está publicada, las frases "fiesta de fin de año empresa", "eventos de fin de año para empresas" y "show navideño para empresas". Si no está publicada, no se anuncian: la web actual no tiene destino adecuado.
- **Desde enero:** el grupo de prueba pasa de streaming (casi sin búsquedas) a **alquiler de pantallas LED** ("pantalla led para eventos", 390/mes). Ojo: la competencia en anuncios es alta (índice 98/100), así que el CPC máximo inicial es de S/ 1,50 y se revisa a los 15 días.
- **Reparto propuesto desde enero (S/ 100):** eventos 35 · catering 25 · pantallas LED 25 · producción 15. Streaming queda en orgánico y venta directa hasta que haya más presupuesto.
