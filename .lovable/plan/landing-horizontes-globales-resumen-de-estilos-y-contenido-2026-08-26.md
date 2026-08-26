# Landing "Horizontes Globales" — resumen de estilos y contenido

## 1. Estilos que voy a seguir (tomados de la landing de Medicina 2026)

**Paleta (misma identidad Continental International Education)**
- Fondo base: negro `#000` y grises azulados profundos (slate 900/800) para secciones alternas.
- Morado institucional: `#5a00aa` (primario), `#4a008c` (hover/oscuro), violeta `#8750ff` (acentos, glow de botones).
- Celeste `#b9e1ff` para chips, textos destacados y botón secundario.
- Blanco y slate 300/400 para textos y párrafos secundarios.
- Todo se define como tokens semánticos en `src/styles.css` (formato oklch), sin colores hardcodeados en componentes.

**Tipografía**
- Sans geométrica condensada tipo Neue Plak; se usará **Archivo / Archivo Expanded** (la misma fuente fallback real de la referencia) vía Google Fonts.
- Títulos en MAYÚSCULAS, peso 800–900, tracking cerrado, con mezcla de peso dentro del mismo titular (línea liviana + línea ultra bold), tal como "CARRERA DE / **MEDICINA HUMANA** / EN **LIMA**".
- Cuerpo en peso regular, line-height amplio, con palabras clave en negrita.

**Componentes y patrones visuales**
- Header transparente sobre el hero, logo a la izquierda y navegación por anclas a la derecha.
- Hero a pantalla completa: imagen de fondo con degradado oscuro hacia la izquierda, chip con punto ("CONVOCATORIA 2026"), titular grande, párrafo, fila de banderas y botón morado con sombra/glow. Flecha animada de scroll.
- Barra de datos rápidos con íconos en línea bajo el hero.
- Tarjetas con imagen superior, título, subtítulo destacado y descripción; carrusel/grilla responsive.
- Bloques de dos columnas para "Sí cubre / No cubre" (check celeste vs. equis atenuada).
- Timeline vertical/horizontal numerado (01…09) con conectores.
- Acordeón para FAQ, en tarjetas oscuras con borde sutil.
- CTA flotante fijo en la esquina inferior derecha (morado + celeste), igual que la referencia.
- Animaciones sutiles de aparición al hacer scroll y hovers con elevación.

## 2. Contenido y secciones (según el documento)

1. **Hero** — "Horizontes Globales. Tu próxima experiencia internacional está más cerca de lo que imaginas." + CTA "Postula ahora" + banderas de destinos.
2. **01 Conoce Horizontes Globales** — qué es, iniciativa de Continental International Education, cofinanciamiento; 3 pilares (Experiencia internacional / Desarrollo académico y profesional / Nuevas oportunidades).
3. **02 Programas elegibles** — "Tu experiencia puede llevarte más lejos": misiones académicas internacionales, programas de corta duración, pasantías de investigación o prácticas.
4. **03 ¿Qué cubre?** — dos columnas: cubre (programa académico, pasajes, seguro internacional, alojamiento) vs. no cubre (gastos personales, visa y trámites, traslados particulares, otros).
5. **04 Requisitos** — con pestañas por unidad académica: **UC Pregrado**, **Instituto Continental**, **Continental Florida University**; más el aviso destacado: "Cumplir los requisitos no garantiza la asignación del Programa".
6. **05 ¿Cómo postular?** — timeline de 9 pasos (Elige tu experiencia → … → Continúa con el proceso establecido), con el botón "Postula" integrado en el paso 03.
7. **Banda inspiracional** — "El mundo también puede ser parte de tu experiencia universitaria. Conoce. Aprende. Conecta. Representa. Crece."
8. **06 Fechas y plazos** — Convocatoria 2026: 02 SEP lanzamiento y apertura; 17 SEP cierre.
9. **07 Preguntas frecuentes** — acordeón con las 14 preguntas y sus respuestas completas del documento.
10. **Contacto** — horario de atención y las 7 personas de contacto con cargo y correo (Jeannette Sempe, Alonso de La Cruz, Thalia Obando, Mary Lara, Samanta Ramos, Mireya Mamani, Gabriela Martinez), en tarjetas con foto.
11. **08 Postula / CTA final** — "¿Estás listo para ampliar tus horizontes?" con el formulario de postulación.
12. **Footer** — logo, enlaces de ancla y aviso legal breve.

## 3. Detalles técnicos

- Página única en `src/routes/index.tsx` (reemplaza el placeholder), con componentes por sección en `src/components/landing/`.
- Tokens de color, gradientes y sombras nuevos en `src/styles.css`; fuente Archivo cargada con `<link>` en `src/routes/__root.tsx`.
- SEO en el `head()` de la ruta: título, descripción, og y twitter propios de Horizontes Globales.
- Imágenes: se usarán las fotos de contacto extraídas del documento y se generarán imágenes de hero/tarjetas alineadas al estilo de la referencia.
- Navegación por anclas suaves entre secciones; diseño responsive mobile-first.

## 4. Punto por definir: la ficha de postulación

El documento enlaza a un Google Sheet. Opciones para el botón "Postula":
- **A (más simple):** el botón abre el Google Form/Sheet en una pestaña nueva.
- **B (recomendada):** formulario propio dentro de la landing con almacenamiento en Lovable Cloud y panel para exportar los datos.

Salvo indicación contraria, implementaré la **opción A** en esta primera versión y dejaré la sección lista para migrar a un formulario propio.
