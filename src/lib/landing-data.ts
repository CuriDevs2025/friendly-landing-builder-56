export const APPLY_URL =
  "https://docs.google.com/spreadsheets/d/1_Hqk1I4mOwfWbhfuW722ULDYHElVcbK3_l8FEX0YaVQ/edit?gid=0#gid=0";

export const NAV_ITEMS = [
  { id: "conoce", label: "Conócenos" },
  { id: "programas", label: "Programas" },
  { id: "cobertura", label: "¿Qué cubre?" },
  { id: "requisitos", label: "Requisitos" },
  { id: "postular", label: "Cómo postular" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" },
];

export const PILLARS = [
  {
    title: "Experiencia internacional",
    text: "Vive una experiencia académica en otro país y representa a la Universidad.",
  },
  {
    title: "Desarrollo académico y profesional",
    text: "Suma competencias globales a tu formación y a tu hoja de vida.",
  },
  {
    title: "Nuevas oportunidades",
    text: "Amplía tu red de contactos y descubre nuevos caminos profesionales.",
  },
];

export const COVERED = [
  "Programa académico",
  "Pasajes internacionales",
  "Seguro internacional",
  "Alojamiento",
];

export const NOT_COVERED = [
  "Gastos personales",
  "Visa y trámites migratorios",
  "Traslados particulares",
  "Otros gastos no contemplados",
];

export const REQUIREMENTS: { id: string; label: string; items: string[] }[] = [
  {
    id: "pregrado",
    label: "UC Pregrado",
    items: [
      "Ser estudiante regular.",
      "Tener entre 40 y 170 créditos aprobados.",
      "Pertenecer como mínimo al tercio superior.",
      "No tener deudas ni moras pendientes.",
      "Acreditar la capacidad de asumir los costos no cubiertos por el Fondo para la experiencia de movilidad internacional.",
      "No contar con sanciones disciplinarias.",
      "Haber sido admitido en un programa de movilidad elegible.",
      "Cumplir con la documentación requerida.",
      "Ser mayor de edad.",
      "Aceptar las condiciones de este beneficio al momento de la postulación.",
    ],
  },
  {
    id: "instituto",
    label: "Instituto Continental",
    items: [
      "Ser estudiante del 3er al 5to ciclo de todas las carreras del Instituto Continental.",
      "Ser estudiante de la modalidad presencial.",
      "Pertenecer al tercio superior.",
      "Sin sanciones disciplinarias o institucionales.",
      "Sin deudas o moras pendientes con el Instituto.",
      "Acreditar necesidad económica para acceder al beneficio.",
      "Acreditar la capacidad de asumir los costos no cubiertos por el Fondo para la experiencia de movilidad internacional.",
      "Haber sido seleccionado para participar en un programa de movilidad internacional elegible.",
      "No presentar impedimentos legales, administrativos o migratorios para salir del Perú.",
      "Cumplir con los requisitos documentarios y migratorios del destino.",
      "Comprometerse a continuar sus estudios y mantener su condición de estudiante regular en el Instituto Continental durante el periodo establecido para el beneficio.",
      "No contar con otro beneficio, beca, subvención o financiamiento institucional destinado a la misma experiencia de movilidad internacional.",
      "Ser mayor de edad.",
      "Aceptar las condiciones de este beneficio al momento de la postulación.",
    ],
  },
  {
    id: "cfu",
    label: "Continental Florida University",
    items: [
      "Ser estudiante activo de Continental Florida University, tanto en pregrado como en posgrado.",
      "No registrar deudas y tener buen historial de pago al momento de la postulación.",
      "No haber desaprobado ninguna asignatura en el último año de estudios.",
      "En pregrado, ser estudiante de tercer ciclo como mínimo y tener pendiente 14 meses de estudios.",
      "No contar con sanciones disciplinarias.",
      "Tener una situación de dificultad económica que justifique la necesidad de acceder al financiamiento.",
      "Presentar la documentación requerida dentro de los plazos establecidos en la convocatoria.",
      "Comprometerse con la representación institucional durante el programa.",
      "Ser mayor de edad.",
      "Aceptar las condiciones de este beneficio al momento de la postulación.",
    ],
  },
];

export const STEPS = [
  { title: "Elige tu experiencia", text: "Revisa los programas elegibles de la convocatoria." },
  { title: "Revisa si cumples el perfil", text: "Verifica los requisitos de tu unidad académica." },
  { title: "Postula", text: "Completa la ficha de postulación en línea.", cta: true },
  { title: "Presenta tu documentación", text: "Envía los documentos dentro de los plazos." },
  { title: "Evaluamos tu postulación", text: "El Comité de Selección revisa cada caso." },
  { title: "Conoce los resultados", text: "Te comunicamos la decisión del Comité." },
  { title: "Formaliza tu beneficio", text: "Acepta las condiciones establecidas." },
  { title: "Vive tu experiencia internacional", text: "Viaja y representa a la Universidad." },
  { title: "Continúa con el proceso establecido", text: "Cumple los compromisos posteriores." },
];

export const DATES = [
  { day: "02", month: "SEP", title: "Lanzamiento + apertura de postulaciones" },
  { day: "17", month: "SEP", title: "Cierre de postulaciones" },
];

export const FAQS = [
  {
    q: "¿Qué es Horizontes Globales?",
    a: "Horizontes Globales es una iniciativa de Continental International Education que busca facilitar el acceso de estudiantes a experiencias académicas internacionales mediante un esquema institucional de cofinanciamiento. Su objetivo es reducir las barreras económicas y ampliar las oportunidades de movilidad internacional.",
  },
  {
    q: "¿Es una beca?",
    a: "No. Horizontes Globales no es una beca ni un crédito bancario tradicional. Es un mecanismo institucional que permite facilitar el acceso a determinadas experiencias de movilidad internacional.",
  },
  { q: "¿Tengo que devolver el beneficio?", a: "No." },
  {
    q: "¿Cuánto puedo recibir?",
    a: "El monto depende de las características del programa, la situación económica acreditada por el estudiante y la evaluación del Comité de Selección.",
  },
  {
    q: "¿Me entregan el dinero directamente?",
    a: "No. El estudiante no recibe el financiamiento en efectivo. Continental International Education realiza directamente los pagos correspondientes al programa académico, pasajes, seguro internacional y/o alojamiento, según corresponda al programa y al monto aprobado.",
  },
  {
    q: "¿Qué gastos cubre?",
    a: "El programa puede cubrir parcialmente: programa académico, pasajes internacionales, seguro internacional y alojamiento, según el destino y el programa. La cobertura dependerá de las características de cada experiencia y del monto de financiamiento aprobado.",
  },
  {
    q: "¿Qué gastos no cubre?",
    a: "No cubre gastos personales o de bolsillo, trámites y costos de visa, traslados particulares que no estén incluidos en el programa, ni otros conceptos que no hayan sido contemplados expresamente en la convocatoria.",
  },
  {
    q: "¿Qué experiencias puedo financiar?",
    a: "Horizontes Globales puede aplicarse a las experiencias de movilidad internacional definidas por la Universidad para cada convocatoria: misiones académicas internacionales, programas de corta duración, rotaciones clínicas, pasantías de investigación o prácticas. La lista de programas elegibles será comunicada en cada convocatoria.",
  },
  {
    q: "¿Puedo elegir cualquier destino?",
    a: "No necesariamente. El programa aplica a las experiencias de movilidad internacional previamente definidas por la Universidad para cada convocatoria. Te recomendamos revisar la lista de programas elegibles antes de postular.",
  },
  {
    q: "¿Quiénes pueden postular?",
    a: "Los requisitos dependen de la unidad académica. Para Universidad Continental – Pregrado, entre los principales requisitos se encuentran: ser estudiante regular, tener entre 40 y 170 créditos aprobados, pertenecer como mínimo al tercio superior, no registrar deudas ni moras, acreditar una situación económica que justifique la necesidad de financiamiento, haber sido admitido en un programa elegible y cumplir con los requisitos académicos y documentarios establecidos. Para Instituto Continental y Continental Florida University aplican requisitos específicos según cada institución.",
  },
  {
    q: "¿Cumplir los requisitos garantiza que recibiré el beneficio?",
    a: "No. Cumplir con los requisitos mínimos permite postular, pero no garantiza la asignación del financiamiento. La selección considera de manera integral el rendimiento académico, la situación económica, el cumplimiento de los requisitos, las características del programa y la disponibilidad presupuestal.",
  },
  {
    q: "¿Cómo se seleccionan los beneficiarios?",
    a: "Las postulaciones son evaluadas por un Comité de Selección designado por la Universidad. El Comité determina la condición de beneficiario, el monto de financiamiento otorgado, las condiciones y, si fuera necesario, la priorización de postulantes cuando la demanda supere los recursos disponibles.",
  },
  {
    q: "¿Qué pasa si no puedo participar en la experiencia?",
    a: "El estudiante puede perder el beneficio si no participa en el programa para el cual fue seleccionado, salvo que exista una causa debidamente justificada y aceptada por la Universidad. Si la Universidad ya realizó un desembolso, el monto correspondiente deberá ser asumido por el estudiante de acuerdo con las condiciones establecidas.",
  },
  {
    q: "¿Cuándo puedo postular?",
    a: "¡Tienes tiempo hasta el 17 de septiembre para postular!",
  },
  {
    q: "¿Dónde puedo resolver mis dudas?",
    a: "Escríbenos a nuestros canales de atención de lunes a viernes de 9:00 a. m. a 1:00 p. m. y de 3:00 p. m. a 6:00 p. m. Encuentra los correos del equipo en la sección de contacto.",
  },
];

export const CONTACTS = [
  {
    name: "Jeannette Sempe",
    role: "Directora de Relaciones Internacionales",
    email: "ysampe@continental.edu.pe",
  },
  {
    name: "Alonso de La Cruz",
    role: "Coordinador de desarrollo internacional y convenios",
    email: "cooperacionuc@continental.edu.pe",
  },
  {
    name: "Thalia Obando",
    role: "Coordinadora de movilidad internacional OUT-IN",
    email: "uoglobal@continental.edu.pe",
  },
  {
    name: "Mary Lara",
    role: "Coordinadora de programas cortos internacionales",
    email: "mlara@continental.edu.pe",
  },
  {
    name: "Samanta Ramos",
    role: "Asistente de movilidad internacional - Huancayo",
    email: "vinculacion.internacional@continental.edu.pe",
  },
  {
    name: "Mireya Mamani",
    role: "Asistente de movilidad internacional - Cusco",
    email: "vinculacion.internacional@continental.edu.pe",
  },
  {
    name: "Gabriela Martinez",
    role: "Asistente de movilidad internacional - Arequipa",
    email: "vinculacion.internacional@continental.edu.pe",
  },
];
