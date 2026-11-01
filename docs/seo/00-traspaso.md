# Rhino Audiovisuales — Traspaso del proyecto SEO/SEM (léeme primero)

**Para:** el siguiente consultor que retome el proyecto.
**Fecha:** 1 de noviembre de 2026.
**Estado:** consultoría SEO y SEM cerrada y auditada tres veces; tres direcciones visuales hechas. Falta que el dueño resuelva tres bloqueos (§13), elija una dirección visual y se pase al mockup y a la construcción.
**Repositorio:** `rozen1993/Productora-audiovisual`. Rama de trabajo: `claude/productora-website-t4ghcv`. Rama `v1`: copia congelada del 31 oct (sin los docs 09–11, sin este traspaso y sin los datos de prueba).
**Este documento es la fuente de verdad.** Si un documento 01–11 lo contradice, vale lo que dice aquí. Contiene en resumen **todos los datos** de Search Console, Google Ads y mercado necesarios para decidir; los documentos numerados son el detalle.

---

## Índice
1. En 30 segundos · 2. Punto de partida · 3. **Datos de Search Console** · 4. **Datos de Google Ads** · 5. Datos de mercado · 6. Lo que se buscaba · 7. Lo que se hizo · 8. Hallazgos clave · 9. Decisiones (tomadas y pendientes) · 10. Plan SEO vigente · 11. **Plan SEM vigente** · 12. Lo que se espera conseguir · 13. Estado y próximos pasos · 14. Pendiente del dueño · 15. Riesgos · 16. Errores y lecciones · 17. Mapa de archivos · 18. Herramientas y cómo actualizar los datos · 19. Primera hora · 20. Registro de cambios

---

## 1. En 30 segundos

Rhino Audiovisuales es una productora audiovisual y de eventos de Lima (Perú). Su web actual (`rhinoaudiovisuales.com`, HTML estático en hosting de GoDaddy) tiene 7 URLs, muestra servicios de hace 5 años y recibe **~30 clics orgánicos al mes**. El dueño quiere **sustituirla por una web nueva en Astro + Tailwind** (Vercel o Cloudflare Pages; dominio en GoDaddy), **sin perder lo que ya posiciona**, ampliar el SEO y conseguir clientes con **S/ 100 al mes** de Google Ads.

**Lo esencial para decidir:**
1. **Google no mostró la web del 20 nov 2025 al 14 jul 2026** (cero impresiones; corte y vuelta bruscos). Causa sin confirmar: la más probable es un desafío anti-bots del hosting. Desde la vuelta, los clics están cerca del nivel anterior (ago–oct: 92 en 2026 frente a 103 en 2025).
2. **Rhino no tiene ficha de Google Maps** y no aparece en las respuestas de IA, que recomiendan a quien tiene reseñas.
3. **El mercado de búsqueda es pequeño:** "productora audiovisual" tiene 390 búsquedas al mes y casi todo lo demás son decenas. Un buen resultado son **~270–500 visitas al mes a 12 meses** (todos los canales), con 6–18 consultas.
4. **La campaña de Ads está "No apta" desde marzo** y su conversión mide vistas de página, no contactos.
5. **Las mejores oportunidades comerciales con competencia débil:** alquiler de pantallas LED, "productora audiovisual", cobertura audiovisual de eventos, fotos corporativas y coffee break/catering corporativo.
6. **Google cambió la versión preferida del dominio:** hasta nov 2025 usaba `www`; desde jul 2026 usa la versión **sin `www`**, porque hoy `www` redirige a la versión sin `www` aunque la etiqueta canónica diga `www`. La web nueva debe usar la versión que Google tenga elegida (§9.2).

---

## 2. Punto de partida (oct 2026)

| Área | Situación |
|---|---|
| Web | 7 URLs indexadas: `/`, `/video.html`, `/fotografia.html`, `/marketing.html`, `/web.html`, `/show.html`, `/Brochure.pdf`. Hoy `www` redirige a la versión sin `www`, pero la etiqueta canónica declara `www` (señales contradictorias). Archivos modificados el 12 jun 2026 (`show.html`) y el 16 jul 2026 (home). 19 CSS bloqueantes, 15 scripts, descripción de 192 caracteres, `meta keywords`, `og:image` relativa, 5 enlaces internos en la home, secciones duplicadas en `video.html`. Servidor Apache. |
| Contenido | La web antigua presenta a Rhino como "productora audiovisual y agencia de publicidad digital": fotografía, video, desarrollo web, marketing. No refleja el catálogo actual (13 líneas, ver `CLAUDE.md`). |
| Google Maps | **Sin ficha** (0 resultados con el nombre "Rhino Audiovisuales" en 60 km de Lima, verificadas o no). |
| IA | 0 menciones de `rhinoaudiovisuales.com` en respuestas de IA de Google. ChatGPT no lo recomienda. |
| Enlaces | 71 enlaces de 47 dominios, casi todos spam o generados automáticamente (26 aparecieron entre ago y oct 2026). Nada que proteger. |
| Ads | Campaña "Rhino Audiovisuales" con S/ 132 gastados (dic 2025 – feb 2026). "No apta" desde marzo. Detalle en §4. |
| Legal | Faltan probablemente el Libro de Reclamaciones virtual, el RUC y la razón social visibles, y la política de privacidad (a confirmar con asesor). |

---

## 3. Datos de Google Search Console

**Propiedad:** `rhinoaudiovisuales.com` (vía Adzviser, workspace `one`). Datos hasta el 29 oct 2026.

### 3.1 Evolución mensual
| Mes | Clics | Impresiones | CTR | Posición media |
|---|---|---|---|---|
| jul 2025 | 41 | 1.913 | 2,1 % | 30,7 |
| ago 2025 | 25 | 1.752 | 1,4 % | 37,5 |
| sep 2025 | 34 | 1.423 | 2,4 % | 30,2 |
| oct 2025 | 44 | 1.010 | 4,4 % | 13,0 |
| nov 2025 (1–19) | 20 | 739 | 2,7 % | 12,0 |
| **20 nov 2025 – 14 jul 2026** | **0** | **0** | — | — |
| jul 2026 (15–31) | 12 | 1.331 | 0,9 % | 25,0 |
| ago 2026 | 34 | 2.636 | 1,3 % | 22,5 |
| sep 2026 | 21 | 1.842 | 1,1 % | 19,5 |
| oct 2026 (1–29) | 37 | 2.057 | 1,8 % | 23,9 |
| **Últimos 12 meses (nov 2025 – oct 2026)** | **124** | **8.605** | 1,4 % | ~21,7 |

- **Comparación interanual (ago–oct):** 2025, 103 clics y 4.185 impresiones; 2026, 92 clics (−11 %) y 6.535 impresiones (+56 %). Los clics casi recuperaron el nivel anterior al vacío; el aumento de impresiones viene sobre todo de posiciones bajas (§3.7).
- **Corte y vuelta bruscos:** el último día con datos (19 nov 2025) tuvo 46 impresiones, un día normal, y el primero de la vuelta (15 jul 2026), 77. No hubo caída ni recuperación gradual (§3.7).
- Extracción del 1 nov 2026. GSC completa los últimos días con retraso: una extracción anterior daba 35 clics en octubre. GSC solo guarda 16 meses.

### 3.2 Consultas con clics (últimos 3 meses: 1 ago – 29 oct 2026)
| Consulta | Clics | Impr. | CTR | Posición |
|---|---|---|---|---|
| productora audiovisual | 22 | 520 | 4,2 % | 6,2 |
| rhino audiovisuales (marca) | 6 | 24 | 25 % | 2,0 |
| agencia audiovisual | 5 | 128 | 3,9 % | 13,9 |
| productoras audiovisuales | 5 | 80 | 6,3 % | 8,8 |
| show navideño | 5 | 111 | 4,5 % | 9,7 |
| empresa audiovisual | 3 | 141 | 2,1 % | 35,8 |
| productoras audiovisuales en lima | 3 | 105 | 2,9 % | 14,2 |
| productora audiovisual lima | 1 | 152 | 0,7 % | 11,1 |
| agencia de audiovisual | 1 | 102 | 1,0 % | 10,3 |
| show navideño para niños | 1 | 85 | 1,2 % | 10,1 |
| show infantil navideño | 1 | 13 | 7,7 % | 8,2 |
| productora audivisual | 1 | 3 | — | 4,7 |

Las consultas con clics suman 54 de 92 clics; el resto son consultas anónimas de Google. **12 meses:** "productora audiovisual" 29 clics, 735 impresiones, posición 6,1; "productoras audiovisuales" 6 clics, posición 7,7; marca 6 clics, posición 2,0.

### 3.3 Consultas con impresiones y sin clics (ago–oct 2026): oportunidades
**Primera página o cerca (posición ≤ 15):**
| Consulta | Impr. | Posición |
|---|---|---|
| empresas de audiovisuales | 106 | 7,8 |
| productora audio visual | 103 | 8,0 |
| empresa productora audiovisual | 92 | 11,2 |
| productora audiovisual publicidad | 86 | 10,6 |
| servicios de productora audiovisual | 82 | 12,2 |
| productora audiovisual en lima | 104 | 12,8 |
| productoras en peru | 48 | 12,2 |
| productoras independientes | 76 | 14,7 |
| productora de audiovisuales | 77 | 15,0 |
| servicios audiovisuales | 30 | 14,4 |
| empresas audiovisuales | 16 | 7,6 |
| productoras en lima | 14 | 10,1 |
| marca: "rino producciones", "rhino peru", "rhino empresa", "rhino audio visual" | 18 / 4 / 4 / 2 | 5,5–6,5 |

**Segunda página (posición 16–30):** productora audiovisual servicios (119 impr., 17,2) · productora audiovisual perú (109, 16,2) · productoras de contenido audiovisual (99, 24,1) · agencia de producción audiovisual (95, 19,4) · agencias audiovisuales (92, 15,6) · agencia de contenidos audiovisuales (85, 18,3) · productora para comerciales (80, 17,5) · producción audiovisual empresas (80, 19,0) · productoras multimedia (80, 23,7) · agencia producción audiovisual (80, 20,2) · empresa producción audiovisual (76, 17,4) · servicios de una productora audiovisual (71, 18,2) · empresa de producción audiovisual (71, 20,9) · productoras audiovisuales peruanas (64, 19,8) · productora comerciales (76, 27,9) · productora de publicidad (75, 27,2) · servicios de producción audiovisual (71, 28,3).

**Lejos (posición > 30), temas sin página propia:** productora de video(s) (82–85, 34–42) · productora de videos corporativos (66, 73,6) · productora videos corporativos (64, 79,7) · agencia videos corporativos (63, 74,4) · productora streaming / de streaming (68–71, 53–58) · productora audiovisual streaming (66, 36,0) · productora videoclips / de videoclips (71–72, 49–53) · productora audiovisual precios (68, 33,8) · productora de contenidos (68, 54,7) · empresas de postproducción (58, 64,3).

### 3.4 Páginas
| URL | Clics 12 m | Impr. 12 m | Pos. 12 m | Clics ago–oct | Impr. ago–oct | Pos. ago–oct |
|---|---|---|---|---|---|---|
| `https://rhinoaudiovisuales.com/` | 94 | 7.416 | 23,3 | **82** | 6.093 | 23,0 |
| `https://www.rhinoaudiovisuales.com/` | 21 | 619 | 12,4 | 1 | 28 | 1,3 |
| `https://rhinoaudiovisuales.com/show.html` | 9 | 445 | 9,3 | **9** | 431 | 9,4 |
| `https://www.rhinoaudiovisuales.com/show.html` | 0 | 148 | 8,4 | — | — | — |
| `/video.html` (sin/con www) | 0 | 67 / 12 | 2,5 | 0 | 49 / 1 | 2,8 |
| `/fotografia.html` (sin/con www) | 0 | 32 / 37 | 8,4 / 2,5 | 0 | 32 / 9 | 8,4 / 1,0 |
| `/marketing.html` (sin/con www) | 0 | 52 / 5 | 6,1 / 4,2 | 0 | 34 / — | 7,8 |
| `/web.html` (sin/con www) | 0 | 36 / 13 | 8,4 / 2,7 | 0 | 29 / — | 9,6 |
| `/Brochure.pdf` (sin/con www) | 0 | 31 / 22 | 3,1 / 2,8 | 0 | 30 / 2 | 3,0 / 1,0 |

**Lectura: Google cambió la URL canónica durante el vacío (confirmado).**
- **Nov 2025:** todos los datos van a `www` (home: 20 clics y 591 impresiones; `show.html`: 148 impresiones).
- **Desde jul 2026:** van a la versión **sin `www`** (julio: home, 12 clics y 1.323 impresiones; ago–oct: 91 de 92 clics).
- **Causa probable (rastreo del 1 nov 2026, también con navegador):** hoy `www.rhinoaudiovisuales.com/` y `www…/show.html` redirigen a la versión sin `www`, mientras la etiqueta canónica de ambas páginas sigue apuntando a `www`. Ante esas señales contradictorias, lo más probable es que Google se haya quedado con la URL que responde (sin `www`). No se pudo ver si la redirección es 301 o 302.
- Search Console asigna los datos a la URL que Google elige como canónica; una consulta `site:` no basta para saberlo.
- Decisión pendiente en §9.2.

### 3.5 Dispositivos (ago–oct 2026) y países (12 meses)
| Dispositivo | Clics | Impr. | Posición |
|---|---|---|---|
| Escritorio | 70 (77 %) | 5.801 | 23,8 |
| Móvil | 21 (23 %) | 710 | 8,6 |
| Tableta | 1 | 24 | 9,1 |

**Países:** Perú 112 clics y 7.645 impresiones (posición 21,1); EE. UU. 1 / 413 (34,2); México 1 / 116; España 0 / 67; Colombia 2 / 37; Chile, Panamá, Brasil, Costa Rica, Honduras e Italia con 1 clic cada uno.

### 3.6 Sitemap e indexación
- **Sitemap:** `https://www.rhinoaudiovisuales.com/sitemap.xml`, enviado el 3 jul 2023, descargado por Google el 23 oct 2026. 7 URLs enviadas, "0 indexadas" según el informe, 1 advertencia, 0 errores.
- **`site:rhinoaudiovisuales.com` (1 nov 2026):** home, `video.html` (título "Edicion de Video y Audio"), `show.html`, `web.html` ("Diseño de Paginas Web en Lima"), `marketing.html` ("Estrategias de Marketing Digital"), `fotografia.html` ("Sesiones de Fotos en Lima", sesiones particulares y familiares) y `Brochure.pdf`.
- **Títulos reales (rastreo del 1 nov 2026):** home, title "Productora Audiovisual | Rhino Audiovisuales" y H1 "Productora Audiovisual en Lima"; `show.html`, title "Show Infantil Navideño | Rhino Audiovisuales" y **cuatro H1** (la página nueva tendrá uno solo y conservará el texto).
- **Respuesta del servidor (1 nov 2026, DataForSEO):** código 200, Apache, página real, también con el agente de Googlebot. No apareció el aviso "One moment, please...". La prueba sale de IPs que no son de Google: no descarta un bloqueo a Googlebot real.

### 3.7 Cautelas al leer estos datos
1. **Vacío del 20 nov 2025 al 14 jul 2026.**
   - Corte y vuelta bruscos, con niveles normales a ambos lados. En una web de 7 URLs, que Google rastrea entera en un día, eso encaja con un bloqueo que empieza y termina de golpe. Hipótesis: el desafío anti-bots "One moment, please..." del hosting (Adzviser vio ese título en todas las páginas) habría hecho que Google viera el aviso en lugar de la página.
   - El 1 nov 2026, DataForSEO recibió la página real, también con el agente de Googlebot. Eso no descarta un bloqueo a Googlebot real, que llega desde IPs de Google.
   - **Pregunta para el dueño:** ¿qué cambió en el hosting hacia el 19–20 nov 2025 y hacia el 14–15 jul 2026 (plan, renovación, módulo de seguridad, SSL, redirección de `www`)? Los archivos se modificaron el 12 jun 2026 (`show.html`) y el 16 jul 2026 (home).
   - Las *Estadísticas de rastreo* de GSC solo guardan 90 días: ya no muestran el vacío. El estado actual se verifica con *Inspección de URL → Probar URL publicada*.
   - Consecuencia: las posiciones actuales tienen 3,5 meses y el bloqueo podría repetirse en plena temporada mientras la web siga en ese hosting. Vigilar las impresiones diarias.
2. **Muchas impresiones en posiciones 30–90** (decenas de variantes de "productora…" con 60–120 impresiones) y **413 impresiones desde EE. UU. en posición 34** encajan con herramientas automáticas de seguimiento de posiciones. Los clics, que son humanos, son la métrica fiable.
3. **El volumen de Google Ads subestima las búsquedas con "lima":** "productora audiovisual lima" mide 10 al mes en Google Ads, pero Search Console da 152 impresiones en 3 meses.

---

## 4. Datos de Google Ads

### 4.1 Cuenta y campaña
- **Cuenta:** `midnightstudios` (ID 1766740378). Contiene la campaña "Rhino Audiovisuales" y otra de una marca ajena ("MidnightStudios", pausada), que **se ignora** por indicación del dueño.
- **Campaña "Rhino Audiovisuales":**
  - Búsqueda, CPC manual. Presupuesto de S/ 7,77 diarios, **nunca agotado**. Inicio el 12 dic 2025, sin fecha de fin.
  - Estado "Habilitada", pero estado principal **"No apta"** (motivo no visible por API). **Cero impresiones de marzo a octubre 2026.**
- **Conversión configurada:** "Vista de una página" (12 en total). **No mide contactos.** Se desconoce qué página la dispara.
- **Acceso:** Adzviser tiene la escritura desactivada en esta cuenta y solo permitiría cambiar presupuestos. Todo cambio lo hace el dueño a mano.

### 4.2 Resultados por mes
| Mes | Clics | Impr. | Gasto | CPC | Conv.* |
|---|---|---|---|---|---|
| dic 2025 (desde el 12) | 38 | 389 | S/ 24,67 | S/ 0,65 | 1 |
| ene 2026 | 51 | 515 | S/ 65,69 | S/ 1,29 | 5 |
| feb 2026 | 61 | 443 | S/ 41,89 | S/ 0,69 | 6 |
| **Total** | **150** | **~1.350** | **S/ 132,26** | **S/ 0,88** | **12** |

CTR 11,1 %. \*Conversión = vista de página.

### 4.3 Palabras clave (dic 2025 – feb 2026)
| Palabra (concordancia) | Clics | Conv.* | Gasto | CPC | Cuota de impresiones |
|---|---|---|---|---|---|
| servicio de fotografía y video para eventos (frase) | 31 | 4 | S/ 50,13 | 1,62 | 44,9 % |
| productoras audiovisuales (exacta) | 27 | **0** | S/ 17,05 | 0,63 | 30,5 % |
| producción de videos (frase) | 26 | 1 | S/ 7,18 | 0,28 | 13,4 % |
| producción de videos (exacta) | 16 | 3 | S/ 8,46 | 0,53 | 28,2 % |
| productora audiovisual publicidad (exacta) | 11 | 1 | S/ 4,14 | 0,38 | 14,3 % |
| productora audiovisual en lima (exacta) | 7 | 1 | S/ 10,73 | 1,53 | 46,7 % |
| servicio de video para eventos (exacta / frase) | 4 / 3 | 0 / 1 | S/ 4,39 / 2,29 | 1,10 / 0,76 | 71 % / 58 % |
| productora videos corporativos (exacta) | 3 | 0 | S/ 1,53 | 0,51 | 25,9 % |
| producción audiovisual (exacta) | 3 | 0 | S/ 0,42 | 0,14 | 12,8 % |
| audio y video para eventos (exacta) | 2 | 0 | S/ 3,64 | 1,82 | 50 % |
| servicio de fotografía y video para eventos (exacta) | 2 | 0 | S/ 3,61 | 1,80 | 55,6 % |
| estudios fotográficos (exacta) | 2 | 0 | S/ 3,62 | 1,81 | 12,5 % |
| sesión de fotos lima (frase) | 2 | 0 | S/ 2,00 | 1,00 | 24,1 % |
| produccion audiovisual (exacta) | 2 | 0 | S/ 1,42 | 0,71 | <10 % |
| foto y video para eventos (exacta) | 1 | 1 | S/ 0,64 | 0,64 | 14,3 % |
| otras 8 palabras con 1 clic (estudio fotográfico, grabación de eventos, organización de eventos en lima, productoras en lima, etc.) | 8 | 0 | ~S/ 11 | 0,95–2,46 | — |

**Lectura:** la cuota de impresiones era baja (10–47 %) **con presupuesto sin agotar**. Se perdían subastas por ranking (puja y calidad), no por dinero.

### 4.4 Términos de búsqueda reales (los más relevantes)
| Término | Clics | Conv.* | Gasto | Comentario |
|---|---|---|---|---|
| live video streaming production | 21 | 1 | S/ 4,27 | Inglés: negativo |
| produccion de video | 11 | 3 | S/ 1,54 | El más rentable |
| productora audiovisual | 7 | 0 | S/ 4,84 | 111 impresiones, CTR 6,3 % |
| filmaciones de eventos / filmación de eventos | 4 / 2 | 0 | S/ 6,88 / 3,00 | Intención informativa según el clasificador |
| servicio de grabación de eventos | 2 | 0 | S/ 3,08 | |
| agencia de video, agencias audiovisuales, empresas audiovisuales | 2 c/u | 0 | ~S/ 2 c/u | |
| producciones isa foto y video, filmaciones y producciones palomino, arte y video producciones | 2 / 1 / 1 | 0 | ~S/ 3,9 | **Marcas de competidores**: negativas |
| filmaciones | 1 | 1 | S/ 0,73 | |
| producción audiovisual (52 impr.), music video production (28), productoras audiovisuales (21) | 0 | 0 | — | Sin clics |

**Otros grupos de términos** (revisión del 1 nov 2026, solo la campaña de Rhino):
- **Marcas de otras productoras:** ~60 impresiones y 4 clics (S/ 3,88), sin conversión. Aparecieron: isa, palomino, arte y video, titan, creative producciones, ms filmaciones, gama, apu, saes, vas, contraluz, clip, horus, lapa, solano, rea, criss, maia films, yaolme, oss, makefilm, el rey, mil enfoques, avi y foto latino. Venían de la concordancia amplia con "producciones" y "filmaciones".
- **Bodas, quinceañeros y cumpleaños:** ~35 impresiones y 1 clic (S/ 1,65, "fotografos para bodas"). Pendiente: ¿Rhino cubre eventos sociales? (§9.2).
- **Estudio fotográfico y sesiones de fotos:** 5 clics, S/ 9,33, sin conversión ("estudio fotografico", "estudio fotografico lima", "foto studio", "estudio para sesión de fotos", "sesion fotografica lima"), más varias búsquedas "cerca de mí". Buscan un estudio físico.
- **Quien vende, no quien compra:** "cuanto cobrar por edicion de video".
- **Buen término sin palabra propia:** "servicio de videos corporativos", 2 clics a S/ 0,29. Se añade a S2 (§11).
- **Más inglés:** "music video production" (28 impresiones), "video production" (8), "audiovisual agency" (4), "event videography" (1).

### 4.5 Dispositivo y horario (dic 2025 – feb 2026)
| Dispositivo | Clics | CTR | CPC | Gasto | Conv.* |
|---|---|---|---|---|---|
| Móvil | 110 (73 %) | 12,7 % | S/ 0,71 | S/ 77,71 | 8 |
| Escritorio | 39 (26 %) | 8,2 % | S/ 1,35 | S/ 52,75 | 4 |

| Franja | Clics | Gasto | Conv.* | Conv./clic |
|---|---|---|---|---|
| 0:00–6:59 | 27 | S/ 18,06 | 1 | 3,7 % |
| 7:00–19:59 | 97 | S/ 96,12 | 10 | **10,3 %** |
| 20:00–23:59 | 26 | S/ 18,08 | 1 | 3,8 % |

### 4.6 Conclusiones para decidir
1. Lo que mejor funcionó: **foto y video para eventos** y **producción de videos**.
2. Hay que **medir contactos reales** antes de optimizar; las "conversiones" actuales no sirven para decidir.
3. **Móvil** para anuncios (al revés que el orgánico) y **horario laboral**.
4. El límite real es el **inventario de búsquedas**: con S/ 7,77 diarios disponibles solo se gastaron S/ 25–66 al mes.

---

## 5. Datos de mercado (DataForSEO, Perú, oct–nov 2026)

### 5.1 Palabras clave que deciden el plan
Volumen = media mensual de Google Ads (redondeado; subestima "lima"). Intención según el clasificador de DataForSEO. Dificultad de 0 a 100.

| Palabra | Volumen | Intención | Dif. | Quién gana / nota |
|---|---|---|---|---|
| productora audiovisual (= plural) | 390 (−33 % interanual) | Comercial 0,96 | 0 | MAIA 1.º; Rhino 6.º–8.º; mapa: Cuadro24, Ánima, Jaguar Media |
| productora audiovisual lima | 10 (GSC: ~150 impr./3 m) | Comercial 0,99 | 8 | Sortlist, Arena, Chita, Maracuyá |
| producción audiovisual | 880 | Educativa | — | Universidades y cursos: no perseguir |
| cobertura audiovisual de eventos | s/d | Comercial 0,88 | — | Tierra Films, Cuarto Enfoque, Flama ("desde US$400") |
| cobertura de eventos / filmación de eventos | 30 / 40 | Comercial 0,78 / informativa | — / 43 | |
| streaming de eventos | 10 | Comercial 0,93 | — | Demanda mínima |
| estudio de podcast / estudios de grabación | 110 / 880 | Informativa | — | Estudios físicos; E2peru 1.º en "estudios de grabación" |
| catering corporativo | 90 | Comercial 0,95 | — | Caterings con 15 años y 45 reseñas en el mapa |
| servicio de catering / catering lima / catering para eventos | 1.000 / 480 / 320 | Mixta, mayormente social | 0 | |
| coffee break lima / servicio de coffee break | 140 / 70 | Comercial-navegacional | — | "coffee break" solo: 4.400, informativa |
| eventos corporativos / eventos corporativos lima | 480 / 90 | — / comercial 0,94 | — | |
| organización de eventos | 720 | Educativa y social | — | Cursos y carreras |
| fotos corporativas | 390–480 (−34 %) | Mixta (0,55 inf. / 0,41 com.) | 0 | Mírame Estudio 2.º en vivo; marcapersonal.pe, lineadigital.pe |
| fotografía publicitaria | 260 | Informativa 0,64 | 0 | |
| pantalla led para eventos | 390 | Comercial 0,86 | 0 | Tiendas y sitios pequeños |
| alquiler de pantalla(s) led + variantes de alquiler | ~450–550 | Comercial 0,94 | 0 | Facebook 1.º, totemsled, feelingproduccion, clasificados |
| alquiler de proyector / alquiler de sonido para eventos | 170 / 70 | Transaccional / comercial 0,98 | 0 / — | |
| activaciones btl | 480 | Informativa 0,44 | 0 | Million Perú 1.º |
| maestro de ceremonias | 880 | Informativa 0,81 | 0 | wikiHow, Wikipedia, cursos; pregunta frecuente "¿cuánto cobra…?" |
| show navideño / show navidad | 390 (oct 320 · nov 1.600 · dic 2.400) | Informativa 0,98 | 0 | Chiquitines 1.º |
| show infantil navideño | 110 (dic 590) | Informativa 0,85 | 0 | **Rhino 3.º** |
| eventos de fin de año | 110 (dic 1.000) | Informativa 0,87 | 52 | No perseguir |
| fiesta de fin de año empresa | 20 (dic 140) | Comercial 0,56 | — | |
| video institucional / video corporativo | 90 / 50 | Navegacional 0,79 / 0,54 | 52 / 11 | Buscan videos concretos |
| motion graphics / video animado / animación 2D | 1.300 / 720 / 480 | Informativa | 9 | |
| servicio de drone / tomas aéreas | 40 / 70 | Comercial 0,86 | — | "drone" 14.800 = producto |
| fotografía inmobiliaria / tour virtual 360 | 30 / 20 | Informativa | — / 53 | |

### 5.2 Competencia, mapa, IA y enlaces
- **Tráfico orgánico estimado (DataForSEO, Perú):** MAIA ~200, Flama ~170, Maracuyá ~90, Show Chiquitines ~1.770, Show Happy Kids ~1.280, E2peru ~710, Million Perú ~90 (+156 desde el mapa), Cuadro24 ~20 (+380 desde el mapa), **InEventos ~4.150**, Rhino ~13.
  - La estimación de Rhino frente a su dato real (~30) indica que **subestima unas 2,3 veces**.
  - Aplicando ese factor, los líderes audiovisuales rondan **~400–450 visitas al mes**.
- **Google Maps:** 234 fichas verificadas de "productora de video" en 25 km. Las 10 primeras tienen 19–195 reseñas: Bolívar Studio 34 (5,0), Maracuyá 24 (4,9), E2peru 43 (4,8), 4K Audiovisual 23 (5,0). Rhino: ninguna.
- **ChatGPT, con búsqueda web, sobre "mejores productoras audiovisuales en Lima para videos corporativos y eventos":**
  - Recomienda a Maracuyá, Bolívar Studio, Tierra Films, 4K Audiovisual, D'JEZ, Nativo, B.CONTENT, Cíclope y Kromática.
  - Fuentes que cita: fichas de Google Maps, InEventos y webs propias.
  - **Bolívar Studio no tiene tráfico orgánico medible y aun así sale 2.º gracias a sus reseñas.**
- **Enlaces:** MAIA 236 dominios, Maracuyá 336, Chiquitines 93, Flama 47. **Ningún enlace de calidad es común** a Maracuyá, MAIA y Bolívar (los 4 dominios comunes son spam).
- **SERP:**
  - AI Overview en casi todas las búsquedas.
  - Instagram, Facebook y TikTok ocupan primeros puestos en "fotos corporativas" y "alquiler de pantallas LED".
  - Listados (Sortlist, geotv.pe, bcontent, InEventos) en "productora audiovisual (lima)".

---

## 6. Lo que se buscaba
1. Reemplazar la web antigua por una mejor **sin romper lo que posiciona**.
2. Ampliar el SEO, "muy reducido". El dueño pidió 5.000 visitas al mes; los datos muestran que no es alcanzable (≈10 veces el líder del rubro).
3. Que **lleguen clientes cuanto antes**.
4. Google Ads con **S/ 100 al mes como máximo**.
5. **Prioridades comerciales del dueño:** (1) cobertura de eventos, (2) streaming y podcast, (3) catering.
6. El dueño **acepta riesgos** para ir rápido y **no quiere leer muchos documentos**: necesita resúmenes.

**Misión del consultor** (en `CLAUDE.md`): proteger lo ganado, expandir el SEO, estructura antes que diseño, decir la verdad con datos y no inventar datos de la empresa para publicar.

---

## 7. Lo que se hizo (31 oct – 1 nov 2026)
| Paso | Resultado | Archivo |
|---|---|---|
| Diagnóstico y primer plan | Activos, problemas técnicos, primera arquitectura (sustituida) | `01-…` (histórico) |
| Investigación de mercado | Demanda, competencia, SERP, enlaces | `02-…` |
| Arquitectura con catálogo completo | URLs, palabras por URL, títulos, H1, redirecciones, tandas | `03-…` **(vigente)** |
| Proyecciones | Escenarios orgánicos y SEM | `04-…` (§8 vigente) |
| Prioridades del dueño | Cobertura, streaming, catering | `05-…` (contexto) |
| Contenido de 24 bloques de página | Título, descripción, H1, secciones y preguntas frecuentes; marcadores | `06-…` **(vigente)** |
| Especificación técnica y brief | Astro, redirecciones, medición, lanzamiento, brief visual | `07-…` **(vigente)** |
| Redirecciones | 6 redirecciones 301 | `vercel.json` |
| Tres direcciones visuales | A Cine, B Editorial (recomendada), C Bold; HTML y PNG | `design/direcciones/` |
| Auditoría 1 | Vacío en GSC, demanda corporativa, escritorio frente a móvil, contraste, legal | `08-…` |
| Revisión crítica | Sin ficha de Maps, IA, InEventos, oportunidades | `09-…` |
| Catálogo ampliado | Pantallas LED, sonido, BTL, maestro de ceremonias, 360, fotos corporativas, fin de año | doc 03 §10, doc 06 §18–24 |
| Datos de prueba | Solo para mockup y staging | `content/datos-de-prueba.json` |
| Auditoría 3 | Coherencia, intención, dificultad, oportunidades | `10-…` |
| Auditoría SEM y plan corregido | Dos campañas, presupuestos, palabras, negativas, medición | `11-…` **(vigente para Ads)** |
| Traspaso | Este documento | `00-traspaso.md` |

---

## 8. Hallazgos clave (los que cambian decisiones)
| # | Hallazgo | Confianza |
|---|---|---|
| 1 | Cero impresiones del 20 nov 2025 al 14 jul 2026, con corte y vuelta bruscos; posible bloqueo anti-bots, que también explicaría el "No apta" de Ads | Dato confirmado; causa hipótesis |
| 2 | Google cambió la canónica de `www` (nov 2025) a sin `www` (desde jul 2026). Hoy `www` redirige a sin `www` y la etiqueta canónica dice `www` | Confirmado (GSC y rastreo del 1 nov); falta *Inspección de URL* |
| 3 | Sin ficha de Maps; la IA recomienda por reseñas | Confirmado |
| 4 | Mercado pequeño; ~800 búsquedas de compra audiovisual al mes | Confirmado (volúmenes redondeados) |
| 5 | Demanda corporativa real: eventos ~150–300/mes, catering ~300/mes; buena parte del volumen es informativa o social | Confirmado (SERP + clasificador) |
| 6 | Oportunidades comerciales débiles en competencia: pantallas LED (~450–550), fotos corporativas (390–480, mixta), coffee break en Lima (140 + 70) | Confirmado |
| 7 | Orgánico: 77 % de los clics desde escritorio. Anuncios: 73 % desde móvil | Confirmado |
| 8 | Competencia débil en SEO (dificultad 0–11; sin enlaces de calidad comunes) | Confirmado |
| 9 | InEventos es el directorio dominante y fuente de ChatGPT | Confirmado (estimación) |
| 10 | La conversión de Ads no mide contactos; la cuenta nunca agotó el presupuesto | Confirmado |

---

## 9. Decisiones

### 9.1 Tomadas
| Decisión | Quién | Fecha |
|---|---|---|
| Web nueva en **Astro + Tailwind**; Vercel o Cloudflare Pages; dominio en GoDaddy (cambiar **solo** A/CNAME, no MX) | Dueño | 31 oct |
| Lanzar cuando pase la lista de comprobación (doc 07 A.7), sin esperar al 10 de enero | Dueño | 31 oct |
| `/show.html` → 301 a `/show-infantil-navideno/` **desde el lanzamiento**, aunque sea en temporada (riesgo aceptado) | Dueño | 31 oct |
| URLs en minúsculas, sin tildes, con barra final; la home conserva "Productora audiovisual en Lima" | Consultor | 31 oct |
| Catálogo de 13 líneas; 18 páginas de servicio y 2 de temporada en **dos tandas** | Dueño + consultor | 31 oct |
| Datos de prueba verosímiles solo para mockup y staging; la compilación de producción debe bloquearlos | Dueño + consultor | 31 oct |
| Ads: **S/ 100 al mes**; ningún cambio en la cuenta sin vista previa y aprobación | Dueño | 31 oct |
| Plan SEM de **dos campañas** (doc 11) | Consultor | 1 nov |
| No usar servicios de indexación artificial (Omega Indexer) | Consultor | 31 oct |

### 9.2 Pendientes (decidir con datos)
| Decisión | Dato que la resuelve | Recomendación provisional |
|---|---|---|
| **Dominio canónico: con o sin `www`** | *Inspección de URL* → "URL canónica seleccionada por Google" en la home y en `show.html` | **Sin `www`**, salvo que la inspección diga otra cosa: Google la usa desde jul 2026 y así la home conserva su URL exacta. `www` redirige con 301. Al confirmarlo: actualizar `CLAUDE.md`, doc 07 y `astro.config.mjs`, y en la web actual cambiar la etiqueta canónica a la versión sin `www` (alinea las señales; riesgo bajo) |
| Dirección visual (A, B o C) | Preferencia del dueño | **B Editorial** (contraste corregido) |
| Hosting | Términos del plan (el gratuito de Vercel es para uso no comercial) | Vercel Pro o Cloudflare Pages |
| ¿Anunciar el show esta temporada? | Cuenta apta y medición instalada antes del **15 nov** | Si no, no se anuncia |
| ¿Catálogo de alquiler con ficha por equipo (modelo E2peru)? | Inventario real de equipos | Solo si hay inventario propio |
| ¿Estudio propio (podcast o fotos)? | Si existe un set abierto a clientes | Podcast: página para "estudios de grabación" (880). Fotos: sin estudio, negativas "estudio fotográfico" y "foto estudio" en Ads |
| ¿Bodas y fiestas sociales? | Confirmación del dueño | Si no se cubren: negativas en C2 (boda, matrimonio, quinceañero, cumpleaños). Aparecieron ~35 impresiones en 3 meses |

---

## 10. Plan SEO vigente (resumen)

### 10.1 URLs y palabra principal (detalle en doc 03; contenido en doc 06)
| URL | Palabra principal | Tanda |
|---|---|---|
| `/` | productora audiovisual | A |
| `/servicios/` | servicios audiovisuales (hub) | A |
| `/servicios/produccion-audiovisual/` (← `/video.html`) | servicios de producción audiovisual | A |
| `/servicios/video-corporativo/` | video corporativo | A |
| `/servicios/cobertura-de-eventos/` | cobertura audiovisual de eventos | A |
| `/servicios/streaming-y-podcast/` | streaming de eventos | A |
| `/servicios/catering-corporativo/` | catering corporativo (+ coffee break en Lima) | A |
| `/servicios/organizacion-de-eventos/` | organización de eventos corporativos | A |
| `/servicios/fotos-corporativas/` | fotos corporativas | A |
| `/servicios/alquiler-de-pantallas-led/` | pantalla led para eventos / alquiler de pantallas led | A |
| `/servicios/fotografia/` (← `/fotografia.html`) | fotografía publicitaria | A |
| `/servicios/marketing-digital/` (← `/marketing.html`) | gestión de redes sociales | A |
| `/servicios/desarrollo-web/` (← `/web.html`) | diseño y desarrollo de páginas web | A |
| `/show-infantil-navideno/` (← `/show.html`) | show infantil navideño | A |
| `/fiesta-de-fin-de-ano-para-empresas/` | fiesta de fin de año para empresas | A |
| `/servicios/spots-publicitarios/` | video publicitario | B |
| `/servicios/animacion-y-motion-graphics/` | motion graphics | B |
| `/servicios/drones/` | servicio de drone | B |
| `/servicios/video-y-fotografia-inmobiliaria/` | fotografía inmobiliaria | B |
| `/servicios/alquiler-de-sonido-y-proyectores/` | alquiler de proyector / de sonido | B |
| `/servicios/activaciones-btl/` | activaciones btl | B |
| `/servicios/maestro-de-ceremonias/` | maestro de ceremonias (responder primero "cuánto cobra") | B |

Además: `/portafolio/` con 4 casos, `/nosotros/`, `/contacto/`, `/gracias/` (noindex), `/politica-de-privacidad/` y `/Brochure.pdf` (misma URL, sin redirección).

### 10.2 Reglas técnicas (detalle en doc 07)
- Títulos ≤ 60 caracteres, descripciones ≤ 155 y un solo H1. **La compilación falla** si no se cumple, si queda `[COMPLETAR]`/`[VALIDAR]` o si se usan datos de prueba.
- JSON-LD:
  - Organization + ProfessionalService y WebSite.
  - BreadcrumbList, Service y FAQPage en servicios.
  - VideoObject en casos.
  - Review solo con reseñas reales.
- Core Web Vitals en móvil: LCP < 2,5 s, INP < 200 ms, CLS < 0,1.
- Staging con `noindex`. Lista de lanzamiento: 200/301, retirar `noindex`, sitemap, medición, DNS.
- Tras el lanzamiento:
  - Sitemap nuevo, más un sitemap temporal con las URLs antiguas.
  - *Solicitar indexación* en 8–10 páginas.
  - Bing Webmaster Tools + IndexNow.
  - Actualizar las URL finales de Ads y el enlace de la ficha de Google.
- **SEO local y autoridad:**
  - Ficha de Google con categoría principal "Productora de video" (secundarias solo de servicios reales).
  - **25 reseñas en 6 meses.**
  - Altas en **InEventos**, Sortlist, geotv.pe y bcontent.
  - Enlaces de clientes y gremios.
  - Publicaciones en Instagram, Facebook y TikTok con textos de servicio.

---

## 11. Plan SEM vigente (S/ 100 al mes; detalle en doc 11)

**Requisitos previos:**
- Resolver "No apta".
- Pasar "Vista de una página" a conversión **secundaria**.
- Instalar Google Tag Manager en la web actual con tres conversiones **principales**: clic en WhatsApp (`wa.me` / `api.whatsapp.com`), clic en `tel:` y formulario enviado.

**Estructura:**
| Campaña | Contenido | Cuándo | Horario | Presupuesto diario |
|---|---|---|---|---|
| **C1 · Temporada** | T1 Show infantil navideño · T2 Fiesta de fin de año (solo con su página publicada) | Hasta el 22 dic | Todos los días 7:00–21:00 | nov S/ 2,40 · dic S/ 2,70 |
| **C2 · Servicios** | S1 Cobertura de eventos · S2 Producción · S3 Catering · S4 Pantallas LED · S5 Streaming (pausado) | Todo el año | Lun–sáb 7:00–20:00 (validado con datos) | nov S/ 2,40 · dic S/ 1,30 · desde ene S/ 3,30 |

**Configuración común:**
- Solo red de Búsqueda; Lima y Callao por "presencia"; idioma español.
- CPC manual; concordancia de frase y exacta.
- **Sin ajustes por dispositivo** hasta tener 30 contactos reales.
- **Noviembre está calculado para activar el 10 nov** (21 días; S/ 4,80 al día entre las dos campañas). Si se activa otro día, antes o después: presupuesto diario de cada campaña = lo que le queda del mes ÷ días que quedan.
- **Dentro de C2, el reparto desde enero** (eventos 35 · catering 25 · LED 25 · producción 15) se dirige con pujas y pausas, revisando el gasto por grupo cada lunes.

**Palabras clave y CPC máximo:**
| Grupo | CPC máx. | Palabras |
|---|---|---|
| T1 Show | S/ 0,90 | "show infantil navideño", "show navideño para empresas", "show de navidad para empresas", "show navideño lima", "show infantil navideño precio", "show navideño a domicilio", [show navideño para niños], [show infantil navideño lima] |
| T2 Fin de año | S/ 1,20 | "fiesta de fin de año para empresas", "fiesta de fin de año empresa", "catering navideño", "video de saludo navideño para empresas" |
| S1 Eventos | S/ 1,80 | "servicio de fotografía y video para eventos", "foto y video para eventos", "servicio de video para eventos", "cobertura audiovisual de eventos", "cobertura de eventos corporativos", "grabación de eventos"; "filmación de eventos" a S/ 1,00 |
| S2 Producción | S/ 1,20 | [productora audiovisual], [productora audiovisual en lima], [productora audiovisual lima], [producción de videos], "productora de videos corporativos", "producción de videos corporativos", "servicio de videos corporativos", "videos institucionales para empresas". **Fuera:** [video institucional], [video corporativo]; **pausada:** [productoras audiovisuales] |
| S3 Catering | S/ 1,00 | "catering corporativo", "catering para empresas", "catering para eventos corporativos", "coffee break lima", "servicio de coffee break", "coffee break para empresas", "coffee break para" |
| S4 Pantallas LED | S/ 1,50 | "alquiler de pantallas led", "alquiler de pantalla led para eventos", "pantalla led alquiler", "alquiler pantalla led", "pantalla led para eventos" |

S5 Streaming queda pausado (casi sin búsquedas). Si se activa, quitar "live" de la lista general: bloquearía "live streaming".

**Negativas:**
- **Generales:** empleo(s), trabajo(s), vacante, bolsa de trabajo, sueldo, salario, curso(s), clases, carrera, universidad, instituto, diplomado, tutorial, "cómo hacer", "qué es", "cuánto cobrar" (también sin tildes), significado, definición, ejemplo(s), plantilla, pdf, gratis, descargar, app, software, programa, wikipedia, production, live, stock, agency, videography, españa, madrid.
- **Otras productoras** (lista propia para ambas campañas, concordancia de frase; todas aparecieron en los términos de Rhino): "producciones isa", palomino, "arte y video", "arte video", "gama films", "gama producciones", "titan producciones", yaolme, "solano producciones", "saes producciones", "lapa producciones", horus, "contraluz films", "maia films", "criss producciones", "apu producciones", "rea producciones", "vas producciones", "creative producciones", "filmaciones el rey", "mil enfoques", "producciones avi", "clip producciones", "ms filmaciones", "oss productions", makefilm, "foto latino". Se amplía cada lunes.
- **C1:** entradas, mall, "centro comercial", mallplaza, "real plaza", jockey, municipalidad, parque, cartelera, hoy, disfraz(ces), canción(es), letra, dibujo(s), ideas, guion, texto, frases, mensaje(s), cumpleaños (si no se ofrece).
- **S4:** comprar, venta, vendo, segunda, usada(o), arduino, tv, televisor, reparar, reparación, mochila, fondo(s), publicidad, publicitaria, flexible, manchas.
- **C2, según lo que confirme el dueño:** boda(s), matrimonio, quinceañero(a) y cumpleaños si no cubre eventos sociales; "estudio fotográfico", "estudios fotográficos", "foto estudio" y "foto studio" si no tiene estudio abierto al público.

**Recursos:**
- Llamada (+51 965 683 542).
- Textos destacados ("Atención por WhatsApp", "Lima y Callao").
- Fragmento "Servicios".
- Enlaces a páginas nuevas cuando existan.
- Ubicación cuando exista la ficha.
- Formulario de contacto **solo si la cuenta es elegible**.
- **Nunca precios de prueba en anuncios.**
- URL finales con la versión sin `www` (hoy `www` redirige).

**Reglas:**
- **Corte del show el 15 nov** si la cuenta sigue "No apta" o no se miden contactos.
- **Cada lunes:** revisar términos y negativas, pausar palabras con 10 clics o más sin contacto, y revisar el gasto por grupo.
- **A los 30 días:** ajustar el CPC.
- **A los 60 días, o con 30 contactos:** decidir dispositivo, horario y puja automática.
- **Al lanzar la web nueva:** cambiar las URL finales y activar S3 y S4.

---

## 12. Lo que se espera conseguir

### 12.1 Proyección (hipótesis con rangos; no son promesas)
| Canal, a 12 meses del lanzamiento | Escenario central |
|---|---|
| Orgánico | **200–330 visitas al mes** (alto ~450; bajo 60–120 si el bloqueo no se resuelve) |
| Google Ads (S/ 100) | ~40–85 clics al mes (central ~60), 1–5 contactos; noviembre parcial 25–60 |
| Ficha de Google, directos, redes | 30–100 (sin datos propios) |
| **Total** | **~270–500 visitas al mes → 6–18 consultas al mes** (confianza baja) |

- **Evolución orgánica central:** meses 1–2 entre 25 y 50 · mes 3 entre 60 y 100 · mes 6 entre 100 y 170 · mes 12 entre 200 y 330. Más un pico de diciembre de +100 a +300 si el show llega al top 2.
- **Aportes previstos a 12 meses:** "productora audiovisual" y home ~40 · marca ~30 · show (media anual) ~50 · pantallas LED 20–40 · fotos corporativas 15–30 · cobertura 7–15 · catering 6–15 · video corporativo 10–15 · resto y búsquedas pequeñas ~40–80.

### 12.2 Indicadores y metas
| Indicador | Meta |
|---|---|
| Bloqueo de rastreadores resuelto (*Probar URL publicada* muestra la página real) | Semana 1 |
| Canónica confirmada (con o sin `www`) | Semana 1 |
| Ficha de Google verificada | Semanas 1–2 |
| Reseñas reales | 10 al mes 3 · **25 al mes 6** |
| Altas en InEventos, Sortlist, geotv.pe y bcontent | Mes 1 |
| Contactos medidos por canal | Desde la activación de Ads o el lanzamiento |
| Top 5 en productora audiovisual, alquiler de pantallas led, fotos corporativas, cobertura audiovisual de eventos, catering corporativo y show infantil navideño | Meses 6–9 |
| Aparecer en la respuesta de ChatGPT a "mejores productoras audiovisuales en Lima" | Meses 6–12 |
| Coste por contacto en Ads conocido | Día 60 |

---

## 13. Estado y próximos pasos

**Bloqueos (dueño, esta semana):**
1. Search Console, en la home y en `show.html`:
   - *Inspección de URL → Probar URL publicada*: ¿página real o "One moment, please..."?
   - ¿Qué URL canónica eligió Google?
   - Protección anti-bots del hosting, y qué cambió en el hosting hacia el 20 nov 2025 y el 15 jul 2026.
2. Google Ads: motivo exacto de "No apta". Instalar la medición de contactos.
3. Crear y verificar la ficha de Google Business.

**Proyecto (consultor):**
4. El dueño elige la dirección visual → mockup completo (home más corta; escritorio y móvil por igual; contraste AA).
5. Construcción en Astro. **Primer commit:** salvaguarda de datos de prueba y comprobaciones de longitud y H1. Usar la canónica confirmada en el punto 1.
6. Staging con `noindex` → pruebas → lanzamiento con la lista de comprobación.
7. Después: indexación, Bing e IndexNow, Ads con URLs nuevas, vigilancia 4–8 semanas, tanda B.

---

## 14. Pendiente del dueño (datos reales)
- Logo, colores, fotos y videos propios.
- Precios "desde", plazos, medidas y resolución de las pantallas LED.
- Maestro de ceremonias (nombre, foto, video). Casos reales de BTL.
- Si tiene estudio (podcast o fotos) abierto a clientes, si cubre bodas y fiestas sociales, y si tiene inventario de equipos sueltos.
- Dirección, RUC y razón social. Permisos sanitarios (catering) y registro de operador de drone.
- Libro de Reclamaciones virtual y política de privacidad, con asesor legal.
- Autorización para nombrar a Redinter, Premium Tasting Lima, Bloom of Colors y Adidas.
- Términos del plan de hosting.

---

## 15. Riesgos
| Riesgo | Mitigación |
|---|---|
| El bloqueo se repite en plena temporada (la web sigue en el mismo hosting) | Verificarlo ya; vigilar las impresiones diarias en GSC y revisar el hosting el mismo día si caen a cero; la migración a Vercel/Cloudflare lo elimina |
| Elegir la canónica contraria a la que usa Google | Confirmar con *Inspección de URL* antes del lanzamiento |
| Caída temporal tras la migración (show en temporada) | Redirecciones 1 a 1 probadas, contenido equivalente, indexación solicitada, Ads de respaldo |
| Publicar datos de prueba | Salvaguarda en la compilación; datos reales en `content/datos-reales.json` |
| Romper el correo al cambiar el DNS | Solo A/CNAME en GoDaddy |
| Contenido pobre en 18 páginas | Dos tandas; tanda B solo con contenido real |
| Expectativas infladas | Proyección de §12; medir contactos, no visitas |
| Ads sin medición | Conversiones de contacto como requisito previo; corte del 15 nov |

---

## 16. Errores cometidos y lecciones
1. **Se descartó demasiado pronto el aviso "One moment, please..."**. Verificar también antes de descartar.
2. **"S/ 11 por conversión" eran vistas de página.** Revisar siempre qué mide una conversión.
3. **Se sobreestimó la demanda** de catering y eventos (doc 03) y de oportunidades del doc 09. Comprobar SERP e intención antes de asignar volumen.
4. **La primera proyección SEM suponía gastar todo el presupuesto**; la cuenta nunca lo agotó.
5. **El brief asumió móvil mayoritario** en orgánico sin datos: es escritorio.
6. **Se tomó la fecha del primer enlace de Flama como antigüedad del dominio.**
7. **Proliferaron versiones de la misma decisión.** Actualizar este traspaso y marcar lo sustituido.
8. **El plan SEM repartía el presupuesto por grupos de anuncios** en una campaña; Google Ads presupuesta por campaña.
9. **Se recomendó subir la puja en escritorio con datos orgánicos**; en anuncios manda el móvil. No trasladar datos de un canal a otro.
10. **Se fijó `www` como canónica** a partir de la etiqueta de la web y de una consulta `site:`, sin comprobar qué URL usa Google. Search Console y un rastreo muestran que Google pasó a la versión sin `www` y que `www` redirige. Antes de fijar una canónica: GSC por página, rastreo de ambas versiones e *Inspección de URL*.
11. **La cuenta de Ads mezcla dos campañas.** Al revisar términos de búsqueda hay que filtrar por la de Rhino: en un borrador de este traspaso se coló en las negativas una marca que solo aparecía en la campaña ajena.

---

## 17. Mapa de archivos y vigencia
| Archivo | Vigencia |
|---|---|
| `docs/seo/00-traspaso.md` | **Fuente de verdad** |
| `CLAUDE.md` | Reglas permanentes (se carga en cada sesión) |
| `docs/seo/03-arquitectura-catalogo-completo.md` | Vigente (URLs, palabras, títulos, tandas) |
| `docs/seo/06-contenido-de-paginas.md` | Vigente (contenido provisional) |
| `docs/seo/07-especificacion-tecnica-y-brief-de-diseno.md` | Vigente (construcción, lanzamiento, brief), salvo la canónica (§9.2) |
| `docs/seo/11-auditoria-y-plan-sem.md` | **Vigente para Google Ads** |
| `docs/seo/04-…` §8 | Vigente para la proyección SEM; el resto del 04 y el 05, contexto |
| `docs/seo/08-…`, `09-…`, `10-…` | Auditorías (hallazgos ya incorporados aquí) |
| `docs/seo/01-…`, `02-…` | Histórico y contexto |
| `vercel.json` | Vigente (redirecciones por ruta; la de dominio se configura en el panel del hosting) |
| `content/datos-de-prueba.json` | Solo mockup y staging |
| `design/direcciones/` | Tres direcciones (HTML, PNG, `render.js`) |

---

## 18. Herramientas, accesos y cómo actualizar los datos
| Herramienta | Estado y uso |
|---|---|
| **Adzviser** (workspace `one`) | Lectura de Search Console (`rhinoaudiovisuales.com`) y Google Ads (cuenta `midnightstudios`, campaña "Rhino Audiovisuales"). Consultas usadas: GSC por día, mes, consulta, página, país y dispositivo; Ads por campaña, mes, palabra clave, término de búsqueda, dispositivo, hora y estado. **Filtrar siempre por campaña** (la cuenta incluye otra marca). Escritura en Ads desactivada. GSC solo guarda 16 meses (exportar cada trimestre) y sus *Estadísticas de rastreo*, 90 días |
| **DataForSEO** | Volúmenes (10 palabras por llamada; Perú, español), SERP en vivo (ubicación "Peru"; la de ciudad falla), Labs (palabras de competidores, dificultad, intención, sugerencias, competidores por SERP; esta última falla con muchas palabras), Business Listings (categoría `video_production_service`), LLM y ChatGPT, enlaces, y `on_page_instant_pages` (sigue redirecciones y admite otro agente y JavaScript: sirvió para comprobar la redirección de `www`) |
| **Ahrefs** | Conectado, pero "plan insuficiente" |
| **GitHub** | Push solo a la rama de trabajo; los tags no suben (por eso `v1` es una rama) |
| **Web actual** | Inaccesible desde el entorno (proxy 403); se rastrea con DataForSEO |

---

## 19. Primera hora del siguiente consultor
1. Leer este documento y `CLAUDE.md`.
2. Pedir al dueño los resultados de §13 (bloqueos, canónica, "No apta", ficha) y la dirección visual.
3. Actualizar los datos de Search Console de los últimos 28 días, por día: ¿hay días con cero impresiones? ¿se mantiene la posición de "productora audiovisual"? ¿siguen los clics en la versión sin `www`?
4. Si se va a construir: doc 07 y primer commit con las salvaguardas.
5. Al terminar: **actualizar este traspaso** y el registro de cambios.

---

## 20. Registro de cambios
| Fecha | Cambio |
|---|---|
| 31 oct 2026 | Docs 01–09, `vercel.json`, tres direcciones visuales, datos de prueba. Rama `v1` congelada |
| 1 nov 2026 | Tercera auditoría (doc 10) y primera versión del traspaso; correcciones de coherencia en docs 01, 03, 04, 05, 09 y `CLAUDE.md` |
| 1 nov 2026 | Auditoría SEM y plan corregido (doc 11); contenido del doc 06 ajustado; corrección del doc 09 sobre dispositivos y formulario de Ads |
| 1 nov 2026 | Traspaso ampliado con los datos de Search Console (16 meses, días en que empieza y acaba el vacío, consultas y páginas de ago–oct), Google Ads (con revisión de términos de búsqueda filtrada por campaña), mercado y plan SEM completo. Hallazgo: Google cambió la canónica a la versión sin `www` (hoy `www` redirige); la canónica pasa a decisión pendiente en `CLAUDE.md` y en los docs 03 y 07. Doc 11: negativas por marcas, "cuánto cobrar", inglés y estudio; "servicio de videos corporativos" en S2 |
