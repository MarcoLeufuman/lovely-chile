# Brief del proyecto — Sitio web Lovely Chile

| | |
|---|---|
| **Cliente** | Lovely Chile by Katherine L. — salón de belleza boutique |
| **Responsable** | Marco Leufuman (desarrollo, diseño y asesoría digital) |
| **Tipo de proyecto** | Sitio vitrina estático, mobile-first |
| **Fecha** | Octubre 2026 |
| **Versión del documento** | 1.0 |

---

## 1. Resumen

Lovely Chile es un studio privado de extensiones de pestañas, manicura y perfilado de cejas en Providencia, cerca de Metro Manuel Montt. Hoy todo su contacto con clientas ocurre en Instagram (@lovely_.chile).

El proyecto consiste en crear su primer sitio web: una vitrina rápida, clara y con la identidad de la marca. Su objetivo es que una clienta que llega desde Instagram entienda en menos de un minuto qué servicios hay, cuánto cuestan y cuál le conviene, y que termine escribiendo por WhatsApp con su elección ya hecha.

---

## 2. Situación actual

- **Un solo canal:** Instagram concentra la vitrina, las consultas y la disponibilidad, que se publica a mano en historias.
- **Información que se pierde:** los consejos de cuidado y las respuestas a preguntas frecuentes se publican en historias que duran 24 horas.
- **Decisión difícil para la clienta nueva:** hay 13 tipos de extensiones de pestañas con nombres parecidos (Volumen 4D, Efecto natural 4D, Closed fans, Efecto closed fans…). Muchas consultas por mensaje directo son para preguntar cuál elegir o cuánto cuesta una combinación.
- **Sin presencia en buscadores:** quien busca la marca o el servicio en Google no encuentra un sitio propio.
- **Material gráfico limitado:** no existe el logo en archivo editable ni fotos antiguas en alta calidad.

---

## 3. Objetivos

**De negocio**
1. Que la clienta llegue a WhatsApp con el servicio y el precio ya elegidos.
2. Reducir las preguntas repetidas por mensaje directo (precios, diferencias entre efectos, cuidados).
3. Dar una imagen profesional y confiable que respalde lo que se ve en Instagram.
4. Aparecer en Google al buscar la marca y empezar a aparecer en búsquedas de servicio + sector.

**Medibles al lanzamiento**
| Indicador | Meta |
|---|---|
| Lighthouse móvil (Rendimiento, Accesibilidad, Buenas prácticas, SEO) | 90 o más en las cuatro; ideal 95+ |
| Tiempo hasta ver el contenido principal (LCP, 4G) | Menos de 2,5 s |
| Peso de la carga inicial del inicio | Menos de ~500 KB |
| Toques desde cualquier punto hasta WhatsApp | Máximo 2 |
| Cabeceras de seguridad (securityheaders.com / Mozilla Observatory) | Nota A o superior |
| Búsqueda "Lovely Chile" en Google | Primer resultado dentro de 2 semanas tras la indexación |

---

## 4. Público objetivo

- Mujeres de Santiago, en su mayoría de Providencia y comunas cercanas.
- Llegan desde Instagram, **desde el celular**, muchas veces con datos móviles.
- **Clienta nueva:** necesita confianza (trabajos reales, testimonios, técnica certificada) y ayuda para elegir.
- **Clienta frecuente:** quiere ver precios y reservar rápido.

---

## 5. Alcance — versión 1

### Página principal (una sola página, en este orden)
1. **Encabezado:** logo de la marca recreado en SVG, menú y botón de WhatsApp. En celular, barra inferior fija con *Servicios* y *WhatsApp*.
2. **Inicio:** propuesta de valor, sector y accesos a WhatsApp e Instagram.
3. **Servicios y precios:** lista completa por categoría, promociones destacadas, botón de reserva por servicio y quiz "¿Qué pestañas son para ti?".
4. **Trabajos:** galería con filtros (pestañas, uñas, videos), vista ampliada y comparación de antes y después.
5. **Sobre Katherine:** certificación técnica (2020), técnica coreana de lifting y enfoque en durabilidad.
6. **Clientas Lovely y preguntas frecuentes:** testimonios reales y respuestas a las dudas más comunes.
7. **Tips Lovely:** últimos artículos del blog.
8. **Cómo reservar:** pasos simples y "Arma tu reserva".
9. **Pie de página:** sector, Instagram y WhatsApp.

### Páginas adicionales
- **Blog "Tips Lovely":** cinco artículos iniciales, incluido "Cuidados antes y después de tu cita".
- **Página 404** y **página sin conexión** con la identidad de la marca.

### Funcionalidades
| Funcionalidad | Qué resuelve |
|---|---|
| Botones de WhatsApp con mensaje ya escrito | La clienta solo aprieta enviar; la dueña sabe qué servicio quiere |
| Quiz "¿Qué pestañas son para ti?" | Ayuda a elegir entre 13 efectos con nombres parecidos |
| "Arma tu reserva" con total automático | Suma servicios y aplica las promociones vigentes; el mensaje sale detallado |
| Galería con filtros y antes/después | Muestra resultados reales de forma interactiva |
| Videos cortos propios | Movimiento y detalle sin depender de incrustar Instagram |
| Blog | Conserva lo que hoy se pierde en historias y atrae visitas desde Google |

---

## 6. Fuera de alcance (versión 1)

| Elemento | Motivo |
|---|---|
| Agenda o calendario online | La disponibilidad hoy se maneja a mano; un calendario desactualizado genera reclamos |
| Pagos, tienda online, registro de usuarias | No hay venta de productos ni necesidad de cuentas |
| Publicación de dirección exacta y horario | Es un studio privado: se coordinan por conversación directa |
| Chatbot, ventanas emergentes, pantalla de carga | Agregan peso y pasos sin resolver un problema real |

### Versiones futuras previstas
- **v1.1:** "Regala Lovely" (regalar un servicio), barra de promoción del mes, código QR para el studio, evaluación de Perfil de Empresa en Google.
- **v2:** agenda online mediante una herramienta externa.
- **v3:** edición de precios y blog por la propia dueña, sin tocar código.

---

## 7. Requisitos no funcionales

**Experiencia**
- Diseño pensado primero para celular (desde 360 px) y adaptado a tablet y escritorio.
- El contenido se ve de inmediato: nunca una pantalla en blanco ni de carga.
- Si algo falla (sin conexión, imagen que no carga, página inexistente), el sitio muestra un mensaje amable con una salida clara.
- Animaciones fluidas que respetan la preferencia de "reducir movimiento" del teléfono.

**Accesibilidad**
- Contraste de texto según WCAG AA, textos alternativos en imágenes, formularios con etiquetas, navegación con teclado y botones de al menos 44 × 44 px.

**Seguridad y privacidad**
- HTTPS obligatorio y cabeceras de seguridad (CSP estricta, protección contra incrustación, permisos del navegador desactivados).
- Sin servidor, base de datos ni claves: no hay datos de clientas que proteger ni filtrar.
- Las fotos se publican sin metadatos de ubicación (GPS), para no revelar la dirección del studio.
- Sin rastreadores de terceros.

**SEO**
- Títulos, descripciones y datos estructurados de negocio local en cada página.
- Mapa del sitio, una sola versión del dominio y alta en Google Search Console y Bing Webmaster Tools.
- Contenido del blog orientado a preguntas reales de las clientas.

---

## 8. Identidad visual

- **Logo:** recreación fiel del sello actual (círculo rosa, "lovely chile" en letra manuscrita, dos corazones verdes y "by Katherine L."). No se diseña un logo nuevo.
- **Paleta de colores vivos**, tomada del logo y del ambiente del studio:

| Rol | Color |
|---|---|
| Rosa Lovely (principal) | `#FF2E93` |
| Morado (secundario) | `#7B2CBF` |
| Verde corazón (acento) | `#2BB673` |
| Dorado cálido (brillo) | `#FFC857` |
| Fondo | `#FFF0F6` |
| Texto | `#1A1A1A` |

- **Tono:** cercano, femenino y chileno, como en su Instagram. "Tu lugar seguro", con foco en resultados duraderos y naturales.

---

## 9. Decisiones técnicas

| Decisión | Elección | Por qué |
|---|---|---|
| Tecnología | HTML, CSS y JavaScript sin frameworks | Sitio de una página sin estado ni login; carga inmediata en celular; fácil de mantener |
| Backend | Ninguno | El contacto ocurre por WhatsApp; no hay datos que guardar |
| Hosting | Cloudflare Pages (a confirmar en la etapa de publicación) | Gratis, permite uso comercial, cabeceras de seguridad propias y vistas previas por rama |
| Dominio | `.cl` en NIC Chile, a nombre de la dueña del negocio | Confianza local; el dominio es propiedad del negocio, no del desarrollador |
| Crecimiento del blog | Migración a Astro cuando supere ~10 artículos | Evita repetir menú y pie en cada archivo sin perder el sitio estático |

---

## 10. Etapas e hitos

| Etapa | Hito | Aprobación |
|---|---|---|
| 0 · Preparación | Repositorio, brief y estructura base | Desarrollo |
| 1 · Prototipos | P0 identidad → P1 wireframe → P2 mockup | Clienta |
| 2 · Construcción | P3: sitio navegable con vista previa | Desarrollo + clienta |
| 3 · Contenido y SEO | Fotos, videos y textos finales | Clienta |
| 4 · Seguridad | Auditoría completa | Desarrollo |
| 5 · Pruebas | Dispositivos reales, errores provocados, Lighthouse | Desarrollo + clienta |
| 6 · Publicación | Sitio en producción | Desarrollo |
| 7 · Dominio | Dominio propio con HTTPS | Clienta compra, desarrollo configura |
| 8 · Lanzamiento | Google, monitoreo, Instagram y guía para la dueña | Clienta |
| 9 · Documentación | README y caso de estudio | Desarrollo |

Duración estimada: 7 a 10 semanas, según la disponibilidad de contenido.

---

## 11. Entregables

- Sitio web publicado con dominio propio y HTTPS.
- Código fuente versionado en este repositorio.
- Logo recreado en SVG.
- Cinco artículos iniciales del blog.
- Guía de uso para la dueña: qué es el dominio y el hosting, costos anuales, renovación, cómo pedir cambios y qué hacer si el sitio no carga.
- README con capturas, decisiones técnicas y resultados de pruebas.

---

## 12. Criterios de aceptación

- Cada prototipo (P0, P1, P2) aprobado por la clienta antes de avanzar.
- Todos los precios revisados y confirmados por la clienta.
- Metas de la sección 3 cumplidas.
- Probado en Chrome (Android) y Safari (iPhone), incluido el teléfono de la clienta.
- Los botones de WhatsApp abren la app con el mensaje correcto en Android, iPhone y escritorio.
- Ninguna página queda en blanco sin conexión, con JavaScript desactivado o en una red lenta.

---

## 13. Riesgos y cómo se manejan

| Riesgo | Mitigación |
|---|---|
| Fotos o textos reales llegan tarde | Se avanza con marcadores visibles y se pide el contenido desde la primera etapa |
| Fotos con ubicación GPS revelan la dirección | Se eliminan los metadatos de cada imagen antes de publicarla |
| Precios desactualizados en el sitio | Revisión con la clienta antes de publicar y canal claro para pedir cambios |
| El dominio vence sin renovarse | Recordatorio anual para la dueña y el desarrollador; renovación solo en nic.cl |
| Exceso de animaciones afecta la velocidad | Presupuesto de peso y pruebas en celulares de gama media |
| Contenido falso o exagerado | Solo testimonios con permiso y cifras respaldadas por la clienta |

---

## 14. Cómo se medirá el éxito después del lanzamiento

- Consultas por WhatsApp que llegan con el servicio ya elegido.
- Búsquedas que traen visitas desde Google (revisión mensual en Search Console).
- Comentarios de clientas y de la dueña sobre la facilidad de uso.
- Publicación regular de artículos en el blog.
