# Rhino Audiovisuales — Arquitectura con el catálogo completo de servicios

Documento 3. Fecha de los datos: 31 de octubre de 2026. Mercado: Perú (Lima), español.
**Sustituye las secciones 6, 7 y 8 del documento 1** (arquitectura, mapa de palabras clave y fichas), que se hicieron con los servicios de la web antigua. El resto del documento 1 y todo el documento 2 siguen vigentes.

---

## 1. Catálogo confirmado por el dueño (31 oct 2026)

1. Producción audiovisual: videos corporativos e institucionales, spots, promocionales y comerciales, videos para redes, animados y motion graphics, grabación y edición.
2. Organización de eventos: planificación integral, eventos corporativos e institucionales, ceremonias y conferencias, montaje y coordinación técnica, cobertura audiovisual.
3. Catering profesional: catering corporativo, coffee breaks, desayunos, almuerzos y refrigerios, atención gastronómica para eventos.
4. Fotografía profesional: corporativa, publicitaria, de productos, de eventos, sesiones.
5. Producción y cobertura de eventos: registro foto y video, grabación de conferencias y ceremonias, streaming, contenido posterior.
6. Servicios de drone: grabación y fotografía aérea, tomas cinematográficas, eventos, inmobiliario y corporativo, inspecciones. Equipo: DJI Mavic 4 Pro.
7. Streaming y transmisiones en vivo: eventos, conferencias y seminarios, multicámara.
8. Marketing digital y redes sociales: gestión, contenido, piezas gráficas, planificación, comunicación.
9. Desarrollo web y aplicaciones: páginas, sitios corporativos, landing pages, aplicaciones web.

**Pendiente de confirmar:** el show infantil navideño no está en esta lista, pero `show.html` es una página que ya posiciona y que quieres impulsar en diciembre. Lo mantengo como página propia hasta que me digas lo contrario.

---

## 2. Demanda real de los servicios nuevos (búsquedas/mes en Perú, Google Ads)

Los términos de la misma familia se agrupan porque Google los trata como casi iguales (no se suman todos los números).

| Familia | Términos principales (al mes) | Demanda aproximada de servicio |
|---|---|---|
| **Catering** | servicio de catering 1.000 · catering lima 480 · catering para eventos 320 · almuerzos corporativos 110 · catering corporativo 90 · desayunos empresariales 90 · box lunch 880* · coffee break 4.400* | ~2.100 sin los marcados |
| **Eventos** | organización de eventos 720 (= organizador de eventos 720) · eventos corporativos 480 · eventos corporativos lima 90 · producción de eventos 70 · empresa de organización de eventos 40 | ~1.400 |
| **Producción audiovisual** | productora audiovisual 390 · video publicitario 140 · video promocional 110 · video institucional 90 · video corporativo 50 | ~800 |
| **Animación y motion graphics** | motion graphics 1.300* · videos animados 720* · animación 2D 480* | hasta ~2.500, pero con mucho público que aprende |
| **Fotografía** | fotografía publicitaria 260 · sesión fotográfica 210 · fotografía corporativa 50 · de productos 40 · de eventos 30 | ~560 |
| **Drone** | tomas aéreas 70 · servicio de drone 40 · fotografía aérea 30 · filmación con drone 10 | ~150 |
| **Streaming** | transmisión en vivo 1.600* · servicio de transmisión en vivo 10 · streaming para eventos 10 | casi nada con intención de servicio |
| **Marketing digital** | agencia de marketing digital 720 · gestión de redes sociales 210 · manejo de redes 110 · agencia de redes 20 | ~1.000 |
| **Desarrollo web** | diseño de páginas web 1.900 · desarrollo de páginas web 260 · diseño web lima 170 · aplicaciones web 90 · landing page 5.400* | ~2.300 |

\* **Intención por verificar:** son términos que atraen también a quien busca aprender, a consumidores o a productos. Antes de escribir cada página reviso la SERP de Google para confirmar si compran o aprenden.

**Lo que muestran los números:**
1. **[Corregido en la auditoría, doc 08]** Catering y eventos suman más búsquedas totales, pero la mayoría son de estudiantes o de público social. Con intención corporativa: catering ~300/mes y eventos ~150–300/mes, frente a ~800/mes de producción audiovisual.
2. El audiovisual es el negocio más pequeño en volumen, pero es tu marca y tu mejor activo posicionado.
3. Drone y streaming casi no se buscan con intención de servicio. Se venden mejor **dentro de otras páginas** (eventos, inmobiliario), con anuncios y con contacto directo.
4. Desarrollo web y marketing digital tienen demanda, pero compites con agencias especializadas con mucha más autoridad. **No es el lugar para perseguir las búsquedas grandes.**

---

## 3. Qué estrategia recomiendo

Una web con **nueve servicios** corre un riesgo: que Google (y el cliente) no entienda en qué eres mejor. La respuesta no es quitar servicios, sino ordenarlos.

**Principios:**
- **Una página por servicio**, con su intención propia (así hoy ningún servicio nuevo tiene dónde posicionar).
- **La home sigue siendo "Productora audiovisual en Lima"**: es lo que ya posiciona. Presenta el resto como ecosistema, con enlaces a cada servicio.
- **Tu diferencial: producción integral de eventos.** Pocos pueden ofrecer organización, audiovisual, streaming, fotografía, drone y catering en un solo contrato. Esa es la propuesta que más cuesta copiar. La página de organización de eventos la presenta, y las demás la refuerzan con enlaces.
- **Prioridad por margen, no solo por volumen.** El SEO debe empujar lo que más te conviene vender. Eso lo defines tú (ver preguntas).

**Niveles de inversión provisionales** (a confirmar con tu rentabilidad real):

| Nivel | Servicios | Cómo tratarlos |
|---|---|---|
| **A: invertir ya** | Video corporativo e institucional · Organización de eventos · Cobertura de eventos · Catering corporativo · Home · Show (temporada) | Página completa, casos, reseñas, anuncios |
| **B: página sólida** | Spots y promocionales · Fotografía · Animación y motion graphics · Drone · Streaming | Página propia, sin perseguir términos genéricos |
| **C: atender sin perseguir el término grande** | Marketing digital · Desarrollo web | Página para quien ya te conoce y para vender a clientes actuales; no competir por "diseño de páginas web" |

**Marca:** si el catering o los eventos crecen mucho, vale la pena evaluar una marca o sitio propio (por ejemplo "Rhino Eventos"). Hoy no lo recomiendo: sin reseñas ni enlaces propios, partir de cero cuesta más que construir sobre el dominio actual. Lo reviso cuando haya datos.

---

## 4. Arquitectura propuesta (URLs)

```
/                                              Home — Productora audiovisual en Lima
├── /servicios/                                Hub: los nueve servicios, agrupados por familia
│   ├── /servicios/produccion-audiovisual/     Pilar de producción (reemplaza video.html)
│   ├── /servicios/video-corporativo/
│   ├── /servicios/spots-publicitarios/        Spots, promocionales, comerciales, videos para redes
│   ├── /servicios/animacion-y-motion-graphics/
│   ├── /servicios/drones/
│   ├── /servicios/fotografia/                 Fotografía publicitaria y de productos (reemplaza fotografia.html)
│   ├── /servicios/fotos-corporativas/         Retratos de equipo y LinkedIn (nuevo)
│   ├── /servicios/video-y-fotografia-inmobiliaria/  Con drone y tours 360 (nuevo)
│   ├── /servicios/organizacion-de-eventos/    Pilar de eventos: propuesta integral
│   ├── /servicios/cobertura-de-eventos/
│   ├── /servicios/streaming-y-podcast/
│   ├── /servicios/catering-corporativo/
│   ├── /servicios/alquiler-de-pantallas-led/  (nuevo)
│   ├── /servicios/alquiler-de-sonido-y-proyectores/  (nuevo)
│   ├── /servicios/activaciones-btl/           (nuevo)
│   ├── /servicios/maestro-de-ceremonias/      (nuevo)
│   ├── /servicios/marketing-digital/          (reemplaza marketing.html)
│   └── /servicios/desarrollo-web/             (reemplaza web.html)
├── /show-infantil-navideno/                   (reemplaza show.html)
├── /fiesta-de-fin-de-ano-para-empresas/       Página estacional (nuevo)
├── /portafolio/                               Filtrable por servicio
│   └── /portafolio/<caso>/                    Una página por caso (Redinter, Premium Tasting, Bloom of Colors, Héroe Adidas…)
├── /nosotros/                                 Equipo, equipos (DJI Mavic 4 Pro, cámaras), trayectoria
├── /contacto/
├── /precios/                                  Fase 2
├── /blog/                                     Fase 2
├── /Brochure.pdf                              (misma URL, sin cambios)
└── /politica-de-privacidad/
```

**Decisiones de estructura:**
- Una sola jerarquía de dos niveles (`/servicios/<servicio>/`) para que la autoridad se concentre y los enlaces internos sean sencillos.
- "Videos para redes sociales" (20 búsquedas/mes) se integra en spots y marketing digital, sin página propia.
- Grabación y edición, y contenido posterior al evento, se cubren como secciones dentro de producción y cobertura.
- En fase 2, si la SERP confirma intención de compra, se separan: coffee break, desayunos empresariales, fotografía publicitaria y animación 2D.
- Catering y eventos enlazan entre sí y con cobertura y streaming: es la propuesta integral.

### Redirecciones 301

| Origen | Destino | Cuándo |
|---|---|---|
| `http://` y sin `www` | `https://www.rhinoaudiovisuales.com` | Puede hacerse ya |
| `/video.html` | `/servicios/produccion-audiovisual/` | Lanzamiento |
| `/fotografia.html` | `/servicios/fotografia/` | Lanzamiento |
| `/marketing.html` | `/servicios/marketing-digital/` | Lanzamiento |
| `/web.html` | `/servicios/desarrollo-web/` | Lanzamiento |
| `/show.html` | `/show-infantil-navideno/` | Lanzamiento (decisión del dueño: sin esperar a la temporada) |
| `/Brochure.pdf` | — (sigue en 200) | — |

---

## 5. Mapa de palabras clave y fichas de página

Títulos ≤60 caracteres. Las descripciones (≤155) y el texto completo vienen en el documento de copy.

| URL | Palabra principal | Secundarias | Título | H1 |
|---|---|---|---|---|
| `/` | productora audiovisual | productoras audiovisuales, empresa productora audiovisual, productora audio visual | Productora Audiovisual en Lima \| Rhino Audiovisuales | Productora audiovisual en Lima |
| `/servicios/` | servicios audiovisuales | servicios de productora audiovisual | Servicios Audiovisuales, Eventos y Marketing \| Rhino | Nuestros servicios |
| `/servicios/produccion-audiovisual/` | servicios de producción audiovisual | producción de contenido audiovisual, grabación y edición de video | Servicios de Producción Audiovisual en Lima \| Rhino | Servicios de producción audiovisual para empresas |
| `/servicios/video-corporativo/` | video corporativo | video institucional, videos corporativos, producción de videos para empresas | Video Corporativo e Institucional en Lima \| Rhino | Videos corporativos e institucionales en Lima |
| `/servicios/spots-publicitarios/` | video publicitario | video promocional, spots publicitarios, comerciales, videos para redes | Spots y Videos Publicitarios en Lima \| Rhino | Spots y videos publicitarios para tu marca |
| `/servicios/animacion-y-motion-graphics/` | motion graphics | videos animados, animación 2D | Animación y Motion Graphics para Empresas \| Rhino | Videos animados y motion graphics |
| `/servicios/drones/` | servicio de drone | tomas aéreas, fotografía aérea, video con drone, drone inmobiliario | Servicio de Drone en Lima: Video y Foto Aérea \| Rhino | Servicio de drone: video y foto aérea |
| `/servicios/fotografia/` | fotografía publicitaria | fotografía de productos, de eventos, sesión fotográfica | Fotografía Publicitaria y de Productos en Lima \| Rhino | Fotografía profesional para marcas |
| `/servicios/fotos-corporativas/` | fotos corporativas (480) | fotografía corporativa, fotos para LinkedIn, fotos de equipo | Fotos Corporativas en Lima para Equipos y LinkedIn \| Rhino | Fotos corporativas para tu equipo en Lima |
| `/servicios/video-y-fotografia-inmobiliaria/` | fotografía inmobiliaria | video inmobiliario, tour virtual 360, video para inmobiliarias | Video y Fotografía Inmobiliaria con Drone en Lima \| Rhino | Video y fotografía inmobiliaria |
| `/servicios/alquiler-de-pantallas-led/` | pantalla led para eventos (390) | alquiler de pantallas led (170) | Alquiler de Pantallas LED para Eventos en Lima \| Rhino | Alquiler de pantallas LED para eventos |
| `/servicios/alquiler-de-sonido-y-proyectores/` | alquiler de proyector (170) | alquiler de sonido para eventos (70), sonido para eventos | Alquiler de Sonido y Proyectores para Eventos \| Rhino | Alquiler de sonido y proyectores para eventos |
| `/servicios/activaciones-btl/` | activaciones btl (480) | publicidad btl, marketing btl, activaciones de marca | Activaciones BTL y de Marca en Lima \| Rhino Audiovisuales | Activaciones BTL y de marca |
| `/servicios/maestro-de-ceremonias/` | maestro de ceremonias (880) | maestro de ceremonias para eventos | Maestro de Ceremonias para Eventos en Lima \| Rhino | Maestro de ceremonias para tu evento |
| `/fiesta-de-fin-de-ano-para-empresas/` | eventos de fin de año (1.000 en dic) | fiesta de fin de año empresa, catering navideño, saludo navideño empresa | Fiesta de Fin de Año para Empresas en Lima \| Rhino | Fiesta de fin de año para empresas en Lima |
| `/servicios/organizacion-de-eventos/` | organización de eventos corporativos | eventos corporativos lima, empresa de organización de eventos, producción de eventos | Organización de Eventos Corporativos en Lima \| Rhino | Organización de eventos corporativos e institucionales |
| `/servicios/cobertura-de-eventos/` | cobertura audiovisual de eventos | filmación de eventos, fotografía de eventos, grabación de conferencias | Cobertura Audiovisual de Eventos en Lima \| Rhino | Cobertura audiovisual de eventos |
| `/servicios/streaming/` | streaming de eventos | transmisión en vivo de conferencias, producción multicámara | Streaming y Transmisión en Vivo de Eventos \| Rhino | Streaming y transmisión en vivo para eventos |
| `/servicios/catering-corporativo/` | catering corporativo | coffee break, desayunos empresariales, almuerzos corporativos, catering para eventos | Catering Corporativo y Coffee Break en Lima \| Rhino | Catering corporativo para empresas y eventos |
| `/servicios/marketing-digital/` | gestión de redes sociales | agencia de marketing digital, contenido para redes, piezas gráficas | Marketing Digital y Redes Sociales en Lima \| Rhino | Marketing digital y gestión de redes sociales |
| `/servicios/desarrollo-web/` | diseño y desarrollo de páginas web | landing pages, aplicaciones web, sitios corporativos | Diseño y Desarrollo de Páginas Web en Lima \| Rhino | Diseño y desarrollo web para empresas |
| `/show-infantil-navideno/` | show infantil navideño | show navideño, show navideño lima, show infantil precio | Show Infantil Navideño en Lima 2026 \| Empresas y Fiestas | Show infantil navideño en Lima |

**Nota sobre ortografía:** la búsqueda real usa "drone" (con "e"). Lo uso en título y texto para coincidir con lo que la gente escribe, aunque la RAE prefiera "dron".

### Contenido que cada página de servicio debe tener
- Qué incluye, para quién es y cómo es el proceso, con pasos y tiempos reales.
- Casos con video y cliente nombrado (solo si los autoriza).
- Preguntas frecuentes reales de clientes.
- Rango de precios o "desde", si quieres mostrarlo.
- Enlace a servicios relacionados (eventos ↔ cobertura ↔ streaming ↔ catering ↔ drones ↔ fotografía).
- Llamada a la acción visible: WhatsApp, teléfono, formulario.
- Mínimo de ~600 palabras útiles por página (no relleno).

### Datos de confianza que sumarían (solo si son reales)
- Drone: permiso o registro de operador (autoridad aeronáutica peruana) y seguro, si los tienes.
- Catering: permisos sanitarios y municipales, certificaciones de manipulación de alimentos.
- Reseñas y clientes nombrados en cada familia.

---

## 6. Datos estructurados
- `Organization` + `ProfessionalService` (sitio), `WebSite`, `BreadcrumbList`.
- `Service` en cada página de servicio, con `areaServed` = Lima.
- `VideoObject` en casos y videos incrustados; `ImageObject` en galerías.
- `Review` solo con reseñas verificables.
- Catering: `Service`, y `FoodEstablishment` solo si hay establecimiento.

## 7. SEO local
- **Ficha de Google Business** con categoría principal "Productora de video" y categorías secundarias de los servicios que sí tienen búsqueda (organizador de eventos, servicio de catering, fotógrafo). Si el catering tiene dirección o cocina propia aparte, evaluar una segunda ficha.
- NAP idéntico en web, ficha y directorios.
- Reseñas reales por familia de servicio, con enlace directo.
- Altas en Sortlist, geotv.pe y bcontent (aparecen en tus SERP).

## 8. Calendario (sin cambios mayores)
| Fase | Fechas | Qué se hace |
|---|---|---|
| 0 | Ahora | Ficha de Google Business, reseñas, 301 sin-www → www, mejoras aditivas a `show.html`, auditoría y limpieza de Ads |
| 1 | Nov | Verificar intención en SERP de catering, eventos, animación, streaming y fotografía; copy de todas las páginas |
| 2 | Nov – dic | Tres direcciones visuales, elección y mockup |
| 3 | Dic | Construcción en staging (noindex) |
| 4 | Desde el 10 ene 2027 | Lanzamiento, redirecciones, sitemap, Ads reapuntado |
| 5 | 4–8 semanas | Vigilancia y ajustes |
| 6 | Feb – abr | Precios, blog, páginas separadas de fase 2, más casos |

## 9. Preguntas que condicionan todo lo anterior
1. **¿Qué líneas dejan más margen o más ventas hoy?** El SEO debe empujar lo que más te conviene.
2. **¿El show infantil navideño sigue siendo un servicio?** No aparece en tu lista.
3. **Catering:** ¿es propio o lo subcontratas? ¿Tienes permisos sanitarios? ¿Atiendes solo eventos tuyos o también contratos independientes?
4. **Drone:** ¿tienes registro u autorización de operador? ¿Qué clientes de inmobiliarias o de inspección tienes?
5. **Streaming:** ¿qué equipo y qué plataformas usas, y qué eventos has transmitido?
6. **Animación y motion graphics:** ¿lo haces tú o con terceros? ¿Tienes muestras?
7. **Marketing y web:** ¿los vendes a clientes nuevos o sobre todo a los que ya tienes por audiovisual?
8. **Datos para SEO local:** dirección, equipo, clientes autorizados, reseñas.


---

## 10. Ampliación del catálogo (dueño, 31 oct 2026)

El dueño confirma que también ofrece: **alquiler de pantallas LED, de sonido y de proyectores; activaciones BTL; maestro de ceremonias; tours virtuales 360.** Con las oportunidades del documento 09, la arquitectura suma 7 páginas (ver árbol y tabla). Total: 18 páginas de servicio + 2 estacionales.

**Familias del hub `/servicios/` y del menú (megamenú por familia):**
- **Producción audiovisual:** producción audiovisual, video corporativo, spots, animación.
- **Eventos:** organización, cobertura, streaming y podcast, catering, pantallas LED, sonido y proyectores, activaciones BTL, maestro de ceremonias.
- **Fotografía y drone:** fotografía publicitaria, fotos corporativas, drone, inmobiliaria.
- **Digital:** marketing digital, desarrollo web.
- **Temporada:** fiesta de fin de año para empresas, show infantil navideño.

**Para evitar canibalización:** "fotografía corporativa" pasa de `/servicios/fotografia/` a `/servicios/fotos-corporativas/`; la página de fotografía se centra en publicidad y productos.

**Tandas de publicación (calidad antes que cantidad):**
- **Tanda A (lanzamiento):** home, hub, contacto, nosotros, portafolio y casos; destinos obligatorios de las redirecciones (producción audiovisual, fotografía, marketing digital, desarrollo web, show); prioridades y oportunidades (cobertura de eventos, streaming y podcast, catering corporativo, organización de eventos, video corporativo, fotos corporativas, alquiler de pantallas LED, fiesta de fin de año).
- **Tanda B (cuando su contenido esté completo y sea real):** spots, animación, drone, inmobiliaria, sonido y proyectores, activaciones BTL, maestro de ceremonias.

**Posicionamiento:** la home conserva "Productora audiovisual en Lima" (lo que ya posiciona). El subtítulo pasa a presentar a Rhino como **productora audiovisual y de eventos**.

**Ficha de Google:** categoría principal "Productora de video"; secundarias solo de servicios reales: organizador de eventos, servicio de alquiler de equipos audiovisuales, servicio de catering, fotógrafo comercial.
