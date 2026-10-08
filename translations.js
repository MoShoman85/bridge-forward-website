var pageNames = {
  es: {home:"Inicio", about:"Quiénes somos", programs:"Programas", projects:"Proyectos", involved:"Participa", news:"Noticias", donate:"Donar", contact:"Contacto", privacy:"Política de Privacidad", legal:"Aviso Legal", convivencia:"Convivencia"},
  en: {home:"Home", about:"About Us", programs:"Programs", projects:"Projects", involved:"Get Involved", news:"News", donate:"Donate", contact:"Contact", privacy:"Privacy Policy", legal:"Legal Notice", convivencia:"Convivencia"},
  fr: {home:"Accueil", about:"Qui sommes-nous", programs:"Programmes", projects:"Projets", involved:"Participer", news:"Actualités", donate:"Faire un don", contact:"Contact", privacy:"Politique de confidentialité", legal:"Mentions légales", convivencia:"Convivencia"}
};

var translations = {
  es: {
    "nav.about":"Quiénes somos","nav.programs":"Programas","nav.projects":"Proyectos","nav.involved":"Participa","nav.news":"Noticias","nav.contact":"Contacto","nav.donate":"Donar",
    "hero.eyebrow":"Una nueva ONG en España",
    "hero.h1":"Unidos por un <em style=\"font-style:normal;color:var(--brand)\">Futuro Mejor</em>",
    "hero.p":"Asociación Bridge Forward es una organización sin ánimo de lucro comprometida con la dignidad humana, la protección, la educación y la creación de oportunidades para las personas y las comunidades.",
    "hero.cta1":"Conoce Nuestra Misión","hero.cta2":"Apoya Nuestra Misión","hero.imgAlt":"Equipo de Bridge Forward",
    "about.eyebrow":"Quiénes somos","about.h2":"Construyendo puentes hacia nuevas oportunidades",
    "about.p1":"Asociación Bridge Forward nace con la voluntad de contribuir a una sociedad más digna, inclusiva y solidaria.",
    "about.p2":"Nuestra visión combina un compromiso local en España con una mirada internacional, especialmente hacia la región de Oriente Medio.",
    "about.cta":"Ver Nuestros Programas",
    "mission.quote":"\"Promover la dignidad humana, la protección, la educación y la creación de oportunidades para las personas y las comunidades.\"",
    "values.dignity.title":"Dignidad","values.dignity.desc":"Respetamos el valor y los derechos de cada persona.",
    "values.inclusion.title":"Inclusión","values.inclusion.desc":"Promovemos la participación y la igualdad de oportunidades.",
    "values.transparency.title":"Transparencia","values.transparency.desc":"Actuamos con responsabilidad, transparencia y rendición de cuentas.",
    "values.solidarity.title":"Solidaridad","values.solidarity.desc":"Trabajamos junto a las comunidades y las personas que necesitan apoyo.",
    "values.commitment.title":"Compromiso","values.commitment.desc":"Buscamos soluciones sostenibles y orientadas a las necesidades reales.",
    "programs.eyebrow":"Nuestros programas","programs.h2":"Dónde enfocamos nuestro trabajo",
    "programs.p":"Estos cuatro programas guían todo lo que hacemos — aquí iremos anunciando los proyectos e iniciativas concretas de cada uno a medida que se pongan en marcha.",
    "programs.p1.title":"Programa de Protección y Resiliencia de Mujeres y Niños",
    "programs.p1.objective":"Fortalecer la protección de mujeres y niños y apoyar su resiliencia y su capacidad para vivir con dignidad, especialmente en comunidades afectadas por crisis, pobreza, desplazamiento y desastres.",
    "programs.p1.areas":"<li>Seguridad alimentaria y apoyo a los medios de vida.</li><li>Proyectos de agua y saneamiento sensibles a las necesidades de mujeres y niñas.</li><li>Empoderamiento económico de las mujeres.</li><li>Apoyo psicosocial para niños y mujeres.</li><li>Actividades de protección y prevención de la violencia y la explotación.</li><li>Apoyo a las familias más vulnerables.</li>",
    "programs.p2.title":"Programa de Educación y Cultura",
    "programs.p2.objective":"Ofrecer oportunidades educativas, de aprendizaje y culturales, especialmente para niños, mujeres y jóvenes en zonas afectadas por crisis.",
    "programs.p2.areas":"<li>Apoyo al retorno a la educación.</li><li>Creación y apoyo de espacios seguros de aprendizaje.</li><li>Programas de alfabetización para mujeres.</li><li>Formación y aprendizaje no formal.</li><li>Actividades culturales y educativas.</li><li>Sensibilización comunitaria.</li><li>Apoyo a niños y jóvenes para continuar su educación.</li>",
    "programs.p3.title":"Programa de Reconstrucción y Desarrollo Inclusivo",
    "programs.p3.objective":"Contribuir a la reconstrucción de las comunidades afectadas y crear oportunidades económicas, educativas y profesionales sostenibles.",
    "programs.p3.areas":"<li>Rehabilitación de viviendas.</li><li>Rehabilitación de instalaciones educativas y comunitarias.</li><li>Apoyo a microempresas y pequeñas empresas.</li><li>Empoderamiento económico.</li><li>Formación profesional para jóvenes y mujeres.</li><li>Desarrollo de competencias y oportunidades de empleo.</li><li>Recuperación psicosocial y comunitaria.</li><li>Apoyo a iniciativas locales y al desarrollo sostenible.</li>",
    "programs.p4.title":"Programa de Respuesta Humanitaria de Emergencia",
    "programs.p4.objective":"Ofrecer una respuesta rápida a las necesidades humanitarias derivadas de crisis, desastres y emergencias.",
    "programs.p4.areas":"<li>Planes de respuesta ante emergencias.</li><li>Respuesta rápida a necesidades urgentes.</li><li>Formación de equipos comunitarios de respuesta.</li><li>Agua, saneamiento e higiene (WASH).</li><li>Alimentación.</li><li>Alojamiento.</li><li>Artículos básicos y artículos no alimentarios.</li><li>Apoyo a familias, niños y mujeres afectados por emergencias.</li>",
    "projects.eyebrow":"Nuestros proyectos","projects.h2":"Nuestros proyectos",
    "projects.p":"Presentamos nuestros proyectos e iniciativas, mostrando su propósito, desarrollo y resultados de forma clara y transparente. Este es nuestro primer proyecto — iremos añadiendo más a medida que se pongan en marcha.",
    "projects.convivencia.teaser":"Un programa de encuentro, intercambio intercultural, aprendizaje del español y participación comunitaria, con primera implementación en València.",
    "projects.convivencia.cta":"Ver el proyecto",
    "projects.morecoming":"Más proyectos próximamente",
    "convivencia.eyebrow":"Nuestro primer proyecto","convivencia.h2":"Convivencia",
    "convivencia.tagline":"Encuentro · Idiomas · Cultura · Participación · Comunidad",
    "convivencia.location":"Primera implementación en València, España — con vocación de crecer a otros territorios.",
    "convivencia.intro":"<p>Convivencia es un programa comunitario, social, educativo y cultural que crea espacios accesibles donde personas de diferentes edades, culturas y procedencias pueden conocerse, aprender y construir relaciones de confianza — población local, personas migrantes, personas refugiadas, personas recién llegadas, estudiantes, jóvenes, familias y niños, todos juntos, sin crear espacios separados.</p><p>València es una ciudad diversa, pero la diversidad por sí sola no garantiza la convivencia. Muchas personas recién llegadas encuentran dificultades para aprender español, crear nuevas relaciones y participar en la vida local; muchas personas residentes, por su parte, tienen pocas oportunidades de relacionarse con otras culturas. Convivencia busca crear oportunidades sencillas, regulares y accesibles para que esto cambie.</p>",
    "convivencia.objective.h3":"Objetivo",
    "convivencia.objective.p":"Favorecer la convivencia intercultural, la inclusión social, el aprendizaje lingüístico y la participación comunitaria, mediante espacios de encuentro donde población local y personas de diferentes procedencias puedan relacionarse, aprender y colaborar en igualdad.",
    "convivencia.who.h3":"¿A quién va dirigido?",
    "convivencia.who.list":"<li>Personas recién llegadas a España, migrantes y refugiadas</li><li>Población local</li><li>Estudiantes nacionales e internacionales</li><li>Jóvenes, familias y niños</li><li>Personas mayores</li><li>Voluntarios, asociaciones y colectivos comunitarios</li>",
    "convivencia.who.note":"Convivencia no es un proyecto dirigido solo a personas migrantes — su valor está en reunir a personas de experiencias distintas en un mismo espacio.",
    "convivencia.what.h3":"Qué hacemos",
    "convivencia.what.list":"<li><strong>Café de Idiomas</strong> — espacio informal para practicar español, inglés, árabe y otras lenguas.</li><li><strong>Español en Comunidad</strong> — encuentros de conversación y práctica del español para personas recién llegadas, acompañados por voluntarios.</li><li><strong>Sabores del Mundo</strong> — preparación y conocimiento compartido de recetas e historias gastronómicas.</li><li><strong>Historias del Mundo</strong> — relatos personales, familiares y culturales.</li><li><strong>Cine y Diálogo</strong> — proyecciones y debate participativo.</li><li><strong>Arte y Artesanía</strong> — talleres prácticos dirigidos por participantes y colaboradores.</li><li><strong>Música del Mundo</strong> — intercambio de música, instrumentos y canciones.</li><li><strong>Enséñame una palabra</strong> — cada participante comparte palabras y expresiones de su idioma.</li><li><strong>Mapa Humano del Mundo</strong> — representación participativa de la diversidad de la comunidad.</li><li><strong>Juegos Interculturales</strong> — dinámicas cooperativas para facilitar el conocimiento entre personas.</li><li><strong>Actividades familiares</strong> — pensadas especialmente para niños y familias, para una convivencia intergeneracional.</li>",
    "convivencia.languages.h3":"Idiomas",
    "convivencia.languages.p":"Los tres idiomas principales son español, inglés y árabe. El proyecto está además abierto a francés, italiano, portugués, rumano, ucraniano, ruso, alemán, valenciano y cualquier otra lengua presente entre las personas participantes: la diversidad lingüística es uno de los recursos del proyecto, no una lista cerrada.",
    "convivencia.timeline.h3":"Cómo se desarrolla",
    "convivencia.timeline.list":"<li><strong>Preparación</strong> — planificación, difusión, búsqueda de colaboradores y voluntariado, y creación de la comunidad de aprendizaje de español.</li><li><strong>Mes 1 — Nos conocemos</strong> — primeros encuentros: Café de Idiomas, Español en Comunidad, Mapa Humano, juegos interculturales.</li><li><strong>Mes 2 — Compartimos</strong> — Sabores del Mundo, Historias del Mundo, arte, música e intercambio lingüístico.</li><li><strong>Mes 3 — Construimos juntos</strong> — Cine y Diálogo, actividades familiares, evaluación y recogida de propuestas para continuar.</li>",
    "convivencia.impact.h3":"Impacto esperado",
    "convivencia.impact.list":"<li>Mayor confianza para usar el español y mayor autonomía comunicativa</li><li>Nuevas relaciones y redes sociales, y menos aislamiento para quienes acaban de llegar</li><li>Más contacto entre población local y personas recién llegadas, y nuevas redes de voluntariado</li><li>Mayor conocimiento mutuo entre culturas y menos prejuicios</li><li>Espacios donde distintas generaciones comparten actividades y experiencias</li>",
    "convivencia.cta.p":"¿Quieres colaborar como voluntario/a en Convivencia?",
    "convivencia.cta.btn":"Súmate como voluntario/a",
    "involved.eyebrow":"Participa","involved.h2":"Forma parte de Bridge Forward",
    "involved.p":"Hay muchas formas de apoyar nuestra misión: como voluntario, colaborador profesional o difundiendo nuestro trabajo.",
    "form.fullname":"Nombre completo","form.fullname.placeholder":"Tu nombre",
    "form.email":"Correo electrónico","form.email.placeholder":"tu@correo.com",
    "form.phone":"Teléfono (opcional)","form.phone.placeholder":"+34 600 000 000",
    "form.howhelp":"¿Cómo te gustaría ayudar?",
    "form.opt1":"Voluntariado","form.opt2":"Colaboración profesional","form.opt3":"Actividades y eventos","form.opt4":"Difusión","form.opt5":"Otra",
    "form.message":"Mensaje","form.involve.placeholder":"Cuéntanos un poco cómo te gustaría ayudar...",
    "form.send":"Enviar",
    "form.note":"Este formulario todavía no está conectado — mientras tanto, escríbenos directamente a info@bridgeforwardspain.org.",
    "news.badge":"Próximamente","news.eyebrow":"Noticias","news.h2":"Noticias y actividades",
    "news.p":"Sigue nuestras actividades, proyectos, alianzas y las últimas novedades de Bridge Forward a medida que crecemos.",
    "news.emailNote":"¿Quieres ser el primero en enterarte? Escríbenos a <a href=\"mailto:info@bridgeforwardspain.org\" style=\"color:var(--brand);font-weight:600\">info@bridgeforwardspain.org</a> y te mantendremos informado.",
    "donate.eyebrow":"Apóyanos","donate.h2":"Apoya Nuestra Misión",
    "donate.p":"Estamos preparando una forma sencilla y segura de colaborar económicamente en línea.",
    "donate.cta":"Contáctanos sobre cómo colaborar","donate.small":"La colaboración en línea estará disponible próximamente.",
    "contact.eyebrow":"Contacto","contact.h2":"Estamos aquí para escucharte",
    "contact.p":"Si quieres conocer más sobre nuestra asociación, colaborar con nosotros o recibir información sobre nuestros proyectos, puedes ponerte en contacto con nuestro equipo.",
    "contact.address":"Calle Manuela Estellés, núm. 38, planta 1, puerta 3 · 46022 Valencia, España",
    "contact.registration":"Registro Nacional de Asociaciones, Sección 1ª, Nº 633.568",
    "form2.name":"Nombre","form2.name.placeholder":"Tu nombre",
    "form2.email":"Correo electrónico","form2.email.placeholder":"tu@correo.com",
    "form2.subject":"Asunto","form2.subject.placeholder":"¿En qué podemos ayudarte?",
    "form2.message.placeholder":"Escribe tu mensaje aquí...",
    "form2.send":"Enviar Mensaje",
    "footer.tagline":"Unidos por un mejor futuro. Una asociación sin ánimo de lucro con sede en España y vocación internacional.",
    "footer.explore":"Explora","footer.connect":"Conecta","footer.spain":"España","footer.followsoon":"Muy pronto en redes sociales.",
    "footer.legal":"© 2026 Asociación Bridge Forward · NIF G93862399 · España",
    "footer.privacy":"Política de Privacidad","footer.legalnotice":"Aviso Legal",
    "privacy.eyebrow":"Privacidad","privacy.h2":"Política de Privacidad","privacy.updated":"Última actualización: octubre de 2026",
    "privacy.content":"<h3>1. Responsable del tratamiento</h3><p>Asociación Bridge Forward, NIF G93862399, con domicilio en Calle Manuela Estellés, núm. 38, planta 1, puerta 3, 46022 Valencia, España, es la responsable del tratamiento de los datos personales que se recaban a través de este sitio web. Puedes contactarnos en info@bridgeforwardspain.org.</p><h3>2. Qué datos recogemos</h3><p>A través de los formularios de \"Participa\" y \"Contacto\" podemos recoger tu nombre, correo electrónico, teléfono (si lo facilitas) y el contenido del mensaje que nos envíes.</p><h3>3. Finalidad y base legal</h3><p>Utilizamos estos datos únicamente para responder a tu consulta o gestionar tu colaboración con la asociación, sobre la base de tu consentimiento al enviar el formulario y de nuestro interés legítimo en atender tu solicitud.</p><h3>4. Conservación</h3><p>Conservamos tus datos solo durante el tiempo necesario para atender tu solicitud o gestionar tu colaboración, y los eliminamos cuando ya no son necesarios para esa finalidad.</p><h3>5. Destinatarios</h3><p>No cedemos tus datos a terceros. Si en el futuro conectamos nuestros formularios a un proveedor externo para su gestión, actualizaremos esta política para informarte de ello.</p><h3>6. Tus derechos</h3><p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a info@bridgeforwardspain.org. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que no hemos tratado tus datos correctamente.</p><h3>7. Cookies</h3><p>Este sitio web no utiliza cookies de análisis ni de publicidad. Si esto cambia en el futuro, actualizaremos esta política.</p>",
    "legal.eyebrow":"Legal","legal.h2":"Aviso Legal","legal.updated":"Última actualización: octubre de 2026",
    "legal.content":"<h3>1. Datos identificativos</h3><p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos: el titular de este sitio web es <strong>Asociación Bridge Forward</strong>, asociación sin ánimo de lucro inscrita en el Registro Nacional de Asociaciones, Sección 1ª, con el número 633.568, y con NIF G93862399. Domicilio social: Calle Manuela Estellés, núm. 38, planta 1, puerta 3, 46022 Valencia, España. Correo electrónico de contacto: info@bridgeforwardspain.org.</p><h3>2. Objeto</h3><p>Este sitio web (bridgeforwardspain.org) tiene como finalidad informar sobre la misión, los programas y las actividades de Asociación Bridge Forward, así como facilitar el contacto con la entidad.</p><h3>3. Condiciones de uso</h3><p>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las condiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe.</p><h3>4. Propiedad intelectual</h3><p>Los contenidos de este sitio web (textos, imágenes, logotipos y demás elementos) son propiedad de Asociación Bridge Forward, salvo que se indique lo contrario, y están protegidos por la normativa de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.</p><h3>5. Alojamiento</h3><p>Este sitio web está alojado mediante GitHub Pages (GitHub, Inc.).</p><h3>6. Legislación aplicable</h3><p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los juzgados y tribunales de Valencia, España.</p>",
    "meta.title":"Asociación Bridge Forward",
    "meta.description":"Asociación Bridge Forward es una organización sin ánimo de lucro comprometida con la dignidad humana, la protección, la educación y la creación de oportunidades para las personas y las comunidades."
  },
  en: {
    "nav.about":"About","nav.programs":"Programs","nav.projects":"Projects","nav.involved":"Get Involved","nav.news":"News","nav.contact":"Contact","nav.donate":"Donate",
    "hero.eyebrow":"A new non-profit in Spain",
    "hero.h1":"United for a <em style=\"font-style:normal;color:var(--brand)\">Better Future</em>",
    "hero.p":"Asociación Bridge Forward is a non-profit organization committed to human dignity, protection, education, and creating opportunities for people and communities.",
    "hero.cta1":"Learn Our Mission","hero.cta2":"Support Our Mission","hero.imgAlt":"The Bridge Forward team",
    "about.eyebrow":"Who We Are","about.h2":"Building Bridges to New Opportunities",
    "about.p1":"Asociación Bridge Forward was founded to help build a more dignified, inclusive, and supportive society.",
    "about.p2":"Our vision brings together local commitment in Spain with an international outlook, especially toward the Middle East region.",
    "about.cta":"See Our Programs",
    "mission.quote":"\"To promote human dignity, protection, education, and the creation of opportunities for people and communities.\"",
    "values.dignity.title":"Dignity","values.dignity.desc":"We respect the worth and rights of every person.",
    "values.inclusion.title":"Inclusion","values.inclusion.desc":"We promote participation and equal opportunity.",
    "values.transparency.title":"Transparency","values.transparency.desc":"We act with responsibility, openness, and accountability.",
    "values.solidarity.title":"Solidarity","values.solidarity.desc":"We stand with the communities and people who need support.",
    "values.commitment.title":"Commitment","values.commitment.desc":"We pursue sustainable solutions built around real needs.",
    "programs.eyebrow":"Our Programs","programs.h2":"Where We Focus",
    "programs.p":"These four programs guide everything we do — we'll announce the specific projects and initiatives under each here as they launch.",
    "programs.p1.title":"Women and Child Protection and Resilience Program",
    "programs.p1.objective":"Strengthening the protection of women and children and supporting their resilience and ability to live with dignity, especially in communities affected by crises, poverty, displacement, and disasters.",
    "programs.p1.areas":"<li>Food security and livelihood support</li><li>Water and sanitation projects sensitive to the needs of women and girls</li><li>Economic empowerment of women</li><li>Psychosocial support for children and women</li><li>Protection and prevention activities against violence and exploitation</li><li>Support for the most vulnerable families</li>",
    "programs.p2.title":"Education and Culture Program",
    "programs.p2.objective":"Providing educational, learning, and cultural opportunities, especially for children, women, and youth in crisis-affected areas.",
    "programs.p2.areas":"<li>Supporting return to school</li><li>Establishing and supporting safe learning spaces</li><li>Literacy programs for women</li><li>Non-formal training and learning</li><li>Cultural and educational activities</li><li>Community awareness-raising</li><li>Supporting children and youth in continuing their education</li>",
    "programs.p3.title":"Reconstruction and Inclusive Development Program",
    "programs.p3.objective":"Contributing to the reconstruction of affected communities and creating sustainable economic, educational, and professional opportunities.",
    "programs.p3.areas":"<li>Housing rehabilitation</li><li>Rehabilitation of educational and community facilities</li><li>Support for micro and small enterprises</li><li>Economic empowerment</li><li>Vocational training for youth and women</li><li>Skills development and employment opportunities</li><li>Psychosocial and community recovery</li><li>Support for local initiatives and sustainable development</li>",
    "programs.p4.title":"Humanitarian Emergency Response Program",
    "programs.p4.objective":"Providing a rapid response to humanitarian needs resulting from crises, disasters, and emergencies.",
    "programs.p4.areas":"<li>Emergency response plans</li><li>Rapid response to urgent needs</li><li>Training of community response teams</li><li>Water, sanitation, and hygiene (WASH)</li><li>Food</li><li>Shelter</li><li>Basic and non-food items</li><li>Support for families, children, and women affected by emergencies</li>",
    "projects.eyebrow":"Our Projects","projects.h2":"Our Projects",
    "projects.p":"This is where we'll present our projects and initiatives, showing their purpose, progress, and results clearly and transparently. This is our first project — we'll add more as they launch.",
    "projects.convivencia.teaser":"A program of meeting, intercultural exchange, Spanish-language learning, and community participation, first rolled out in Valencia.",
    "projects.convivencia.cta":"See the project",
    "projects.morecoming":"More projects coming soon",
    "convivencia.eyebrow":"Our First Project","convivencia.h2":"Convivencia",
    "convivencia.tagline":"Meeting · Languages · Culture · Participation · Community",
    "convivencia.location":"First rolled out in Valencia, Spain — designed to grow into other places over time.",
    "convivencia.intro":"<p>Convivencia is a community program — social, educational, and cultural — that creates accessible spaces where people of different ages, cultures, and backgrounds can meet, learn, and build real trust: local residents, migrants, refugees, newcomers to Spain, students, young people, families, and children, all together, not in separate spaces.</p><p>Valencia is a diverse city, but diversity alone doesn't guarantee people actually live well together. Many newcomers struggle to learn Spanish, build new relationships, and take part in local life; many long-time residents, in turn, have few chances to connect with other cultures. Convivencia exists to create simple, regular, accessible opportunities for that to change.</p>",
    "convivencia.objective.h3":"Objective",
    "convivencia.objective.p":"To foster intercultural coexistence, social inclusion, language learning, and community participation, through spaces where local residents and people from different backgrounds can connect, learn, and collaborate as equals.",
    "convivencia.who.h3":"Who it's for",
    "convivencia.who.list":"<li>Newcomers to Spain, migrants, and refugees</li><li>Local residents</li><li>National and international students</li><li>Young people, families, and children</li><li>Older adults</li><li>Volunteers, associations, and community groups</li>",
    "convivencia.who.note":"Convivencia isn't a project aimed only at migrants — its value lies in bringing people with different experiences into the same space.",
    "convivencia.what.h3":"What we do",
    "convivencia.what.list":"<li><strong>Language Café</strong> — an informal space to practice Spanish, English, Arabic, and other languages.</li><li><strong>Spanish in Community</strong> — conversation sessions for newcomers to practice Spanish alongside volunteers.</li><li><strong>Flavors of the World</strong> — cooking and sharing recipes and food stories.</li><li><strong>Stories of the World</strong> — personal, family, and cultural stories.</li><li><strong>Film and Dialogue</strong> — screenings with participatory discussion.</li><li><strong>Art and Crafts</strong> — hands-on workshops led by participants and collaborators.</li><li><strong>Music of the World</strong> — sharing music, instruments, and songs.</li><li><strong>Teach Me a Word</strong> — each participant shares words and expressions from their own language.</li><li><strong>Human Map of the World</strong> — a participatory picture of the community's diversity.</li><li><strong>Intercultural Games</strong> — cooperative activities to help people get to know each other.</li><li><strong>Family activities</strong> — designed for children and families, for coexistence across generations.</li>",
    "convivencia.languages.h3":"Languages",
    "convivencia.languages.p":"The three main languages are Spanish, English, and Arabic. The project is also open to French, Italian, Portuguese, Romanian, Ukrainian, Russian, German, Valencian, and any other language participants bring with them — linguistic diversity is a resource for the project, not a closed list.",
    "convivencia.timeline.h3":"How it unfolds",
    "convivencia.timeline.list":"<li><strong>Preparation</strong> — planning, outreach, finding collaborators and volunteers, and setting up the Spanish-learning community.</li><li><strong>Month 1 — Getting to know each other</strong> — first gatherings: Language Café, Spanish in Community, Human Map, intercultural games.</li><li><strong>Month 2 — Sharing</strong> — Flavors of the World, Stories of the World, art, music, and language exchange.</li><li><strong>Month 3 — Building together</strong> — Film and Dialogue, family activities, evaluation, and gathering ideas for what comes next.</li>",
    "convivencia.impact.h3":"Expected impact",
    "convivencia.impact.list":"<li>More confidence using Spanish and greater everyday communication skills</li><li>New relationships and social networks, and less isolation for people who've just arrived</li><li>More contact between local residents and newcomers, and new volunteer networks</li><li>Greater mutual understanding across cultures, and fewer prejudices</li><li>Spaces where different generations share activities and experiences</li>",
    "convivencia.cta.p":"Want to volunteer with Convivencia?",
    "convivencia.cta.btn":"Become a volunteer",
    "involved.eyebrow":"Get Involved","involved.h2":"Be Part of Bridge Forward",
    "involved.p":"There are many ways to support our mission: as a volunteer, a professional collaborator, or by spreading the word.",
    "form.fullname":"Full name","form.fullname.placeholder":"Your name",
    "form.email":"Email","form.email.placeholder":"you@email.com",
    "form.phone":"Phone (optional)","form.phone.placeholder":"+34 600 000 000",
    "form.howhelp":"How would you like to help?",
    "form.opt1":"Volunteering","form.opt2":"Professional collaboration","form.opt3":"Activities & events","form.opt4":"Spreading the word","form.opt5":"Other",
    "form.message":"Message","form.involve.placeholder":"Tell us a bit about how you'd like to help...",
    "form.send":"Send",
    "form.note":"This form isn't connected yet — email us directly at info@bridgeforwardspain.org in the meantime.",
    "news.badge":"Stories Coming Soon","news.eyebrow":"News","news.h2":"News & Updates",
    "news.p":"Follow our activities, projects, partnerships, and the latest from Bridge Forward as we grow.",
    "news.emailNote":"Want to be the first to know? Email us at <a href=\"mailto:info@bridgeforwardspain.org\" style=\"color:var(--brand);font-weight:600\">info@bridgeforwardspain.org</a> and we'll keep you posted.",
    "donate.eyebrow":"Support Us","donate.h2":"Support Our Mission",
    "donate.p":"We're setting up a simple, secure way to give online.",
    "donate.cta":"Contact Us About Giving","donate.small":"Online giving launches soon.",
    "contact.eyebrow":"Contact","contact.h2":"We're Here to Listen",
    "contact.p":"Want to learn more about our association, collaborate with us, or get updates on our projects? Reach out to our team.",
    "contact.address":"Calle Manuela Estellés, 38, 1st floor, door 3 · 46022 Valencia, Spain",
    "contact.registration":"National Register of Associations, Section 1, No. 633,568",
    "form2.name":"Name","form2.name.placeholder":"Your name",
    "form2.email":"Email","form2.email.placeholder":"you@email.com",
    "form2.subject":"Subject","form2.subject.placeholder":"How can we help?",
    "form2.message.placeholder":"Write your message here...",
    "form2.send":"Send Message",
    "footer.tagline":"United for a better future. A non-profit association based in Spain, working with an international outlook.",
    "footer.explore":"Explore","footer.connect":"Connect","footer.spain":"Spain","footer.followsoon":"Follow us soon — social channels launching shortly.",
    "footer.legal":"© 2026 Asociación Bridge Forward · NIF G93862399 · Spain",
    "footer.privacy":"Privacy Policy","footer.legalnotice":"Legal Notice",
    "privacy.eyebrow":"Privacy","privacy.h2":"Privacy Policy","privacy.updated":"Last updated: October 2026",
    "privacy.content":"<h3>1. Data controller</h3><p>Asociación Bridge Forward, Tax ID (NIF) G93862399, address Calle Manuela Estellés, 38, 1st floor, door 3, 46022 Valencia, Spain, is the controller for personal data collected through this website. You can reach us at info@bridgeforwardspain.org.</p><h3>2. What we collect</h3><p>Through the \"Get Involved\" and \"Contact\" forms, we may collect your name, email address, phone number (if you provide it), and the content of the message you send us.</p><h3>3. Purpose and legal basis</h3><p>We use this data only to respond to your inquiry or manage your collaboration with the association, based on the consent you give by submitting the form and our legitimate interest in handling your request.</p><h3>4. Retention</h3><p>We keep your data only for as long as needed to handle your inquiry or manage your collaboration, and delete it once it's no longer needed for that purpose.</p><h3>5. Recipients</h3><p>We do not share your data with third parties. If we connect our forms to an external provider in the future, we'll update this policy to reflect that.</p><h3>6. Your rights</h3><p>You can exercise your rights to access, rectify, erase, object to, restrict, or port your data by writing to info@bridgeforwardspain.org. You can also file a complaint with Spain's data protection authority (AEPD) if you believe we haven't handled your data properly.</p><h3>7. Cookies</h3><p>This website does not use analytics or advertising cookies. If that changes, we'll update this policy.</p>",
    "legal.eyebrow":"Legal","legal.h2":"Legal Notice","legal.updated":"Last updated: October 2026",
    "legal.content":"<h3>1. Identification</h3><p>In compliance with Article 10 of Spain's Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is <strong>Asociación Bridge Forward</strong>, a non-profit association registered with the National Register of Associations, Section 1, number 633,568, and Tax ID (NIF) G93862399. Registered address: Calle Manuela Estellés, 38, 1st floor, door 3, 46022 Valencia, Spain. Contact email: info@bridgeforwardspain.org.</p><h3>2. Purpose</h3><p>This website (bridgeforwardspain.org) exists to share Asociación Bridge Forward's mission, programs, and activities, and to make it easy to get in touch with the association.</p><h3>3. Terms of use</h3><p>Accessing and using this website makes you a user of it and implies acceptance of the terms in this Legal Notice. Users agree to make appropriate use of the site's content and services and not to use them for unlawful activities or in bad faith.</p><h3>4. Intellectual property</h3><p>The content of this website (text, images, logos, and other elements) belongs to Asociación Bridge Forward, unless stated otherwise, and is protected under intellectual property law. Reproducing it, in whole or in part, without express authorization is prohibited.</p><h3>5. Hosting</h3><p>This website is hosted on GitHub Pages (GitHub, Inc.).</p><h3>6. Governing law</h3><p>These terms are governed by Spanish law. Any dispute arising from access to or use of this website will be subject to the courts of Valencia, Spain.</p>",
    "meta.title":"Asociación Bridge Forward",
    "meta.description":"Asociación Bridge Forward is a non-profit organization committed to human dignity, protection, education, and creating opportunities for people and communities."
  },
  fr: {
    "nav.about":"À propos","nav.programs":"Programmes","nav.projects":"Projets","nav.involved":"Participer","nav.news":"Actualités","nav.contact":"Contact","nav.donate":"Faire un don",
    "hero.eyebrow":"Une nouvelle association en Espagne",
    "hero.h1":"Unis pour un <em style=\"font-style:normal;color:var(--brand)\">avenir meilleur</em>",
    "hero.p":"Asociación Bridge Forward est une organisation à but non lucratif engagée pour la dignité humaine, la protection, l'éducation et la création d'opportunités pour les personnes et les communautés.",
    "hero.cta1":"Découvrir notre mission","hero.cta2":"Soutenir notre mission","hero.imgAlt":"L'équipe de Bridge Forward",
    "about.eyebrow":"Qui sommes-nous","about.h2":"Construire des ponts vers de nouvelles opportunités",
    "about.p1":"Asociación Bridge Forward a été fondée pour contribuer à une société plus digne, inclusive et solidaire.",
    "about.p2":"Notre vision allie un engagement local en Espagne à une perspective internationale, en particulier envers la région du Moyen-Orient.",
    "about.cta":"Découvrir nos programmes",
    "mission.quote":"\"Promouvoir la dignité humaine, la protection, l'éducation et la création d'opportunités pour les personnes et les communautés.\"",
    "values.dignity.title":"Dignité","values.dignity.desc":"Nous respectons la valeur et les droits de chaque personne.",
    "values.inclusion.title":"Inclusion","values.inclusion.desc":"Nous favorisons la participation et l'égalité des chances.",
    "values.transparency.title":"Transparence","values.transparency.desc":"Nous agissons avec responsabilité, transparence et redevabilité.",
    "values.solidarity.title":"Solidarité","values.solidarity.desc":"Nous sommes aux côtés des communautés et des personnes qui ont besoin de soutien.",
    "values.commitment.title":"Engagement","values.commitment.desc":"Nous recherchons des solutions durables fondées sur des besoins réels.",
    "programs.eyebrow":"Nos programmes","programs.h2":"Nos axes d'action",
    "programs.p":"Ces quatre programmes guident tout notre travail — nous annoncerons ici les projets et initiatives concrets de chacun à mesure qu'ils seront lancés.",
    "programs.p1.title":"Programme de Protection et de Résilience des Femmes et des Enfants",
    "programs.p1.objective":"Renforcer la protection des femmes et des enfants et soutenir leur résilience et leur capacité à vivre dans la dignité, en particulier dans les communautés touchées par les crises, la pauvreté, le déplacement et les catastrophes.",
    "programs.p1.areas":"<li>Sécurité alimentaire et soutien aux moyens de subsistance</li><li>Projets d'eau et d'assainissement tenant compte des besoins des femmes et des filles</li><li>Autonomisation économique des femmes</li><li>Soutien psychosocial pour les enfants et les femmes</li><li>Activités de protection et de prévention contre la violence et l'exploitation</li><li>Soutien aux familles les plus vulnérables</li>",
    "programs.p2.title":"Programme d'Éducation et de Culture",
    "programs.p2.objective":"Offrir des opportunités éducatives, d'apprentissage et culturelles, en particulier pour les enfants, les femmes et les jeunes dans les zones touchées par les crises.",
    "programs.p2.areas":"<li>Soutien au retour à l'école</li><li>Création et soutien d'espaces d'apprentissage sûrs</li><li>Programmes d'alphabétisation pour les femmes</li><li>Formation et apprentissage non formels</li><li>Activités culturelles et éducatives</li><li>Sensibilisation communautaire</li><li>Soutien aux enfants et aux jeunes pour la poursuite de leurs études</li>",
    "programs.p3.title":"Programme de Reconstruction et de Développement Inclusif",
    "programs.p3.objective":"Contribuer à la reconstruction des communautés touchées et créer des opportunités économiques, éducatives et professionnelles durables.",
    "programs.p3.areas":"<li>Réhabilitation des logements</li><li>Réhabilitation des infrastructures éducatives et communautaires</li><li>Soutien aux micro et petites entreprises</li><li>Autonomisation économique</li><li>Formation professionnelle pour les jeunes et les femmes</li><li>Développement des compétences et opportunités d'emploi</li><li>Rétablissement psychosocial et communautaire</li><li>Soutien aux initiatives locales et au développement durable</li>",
    "programs.p4.title":"Programme de Réponse Humanitaire d'Urgence",
    "programs.p4.objective":"Fournir une réponse rapide aux besoins humanitaires résultant des crises, des catastrophes et des urgences.",
    "programs.p4.areas":"<li>Plans de réponse aux urgences</li><li>Réponse rapide aux besoins urgents</li><li>Formation des équipes communautaires de réponse</li><li>Eau, assainissement et hygiène (WASH)</li><li>Alimentation</li><li>Abri</li><li>Articles de première nécessité non alimentaires</li><li>Soutien aux familles, enfants et femmes touchés par les urgences</li>",
    "projects.eyebrow":"Nos projets","projects.h2":"Nos projets",
    "projects.p":"C'est ici que nous présenterons nos projets et initiatives, en montrant clairement leur objectif, leur avancement et leurs résultats. Voici notre premier projet — nous en ajouterons d'autres à mesure qu'ils seront lancés.",
    "projects.convivencia.teaser":"Un programme de rencontre, d'échange interculturel, d'apprentissage de l'espagnol et de participation communautaire, d'abord lancé à Valencia.",
    "projects.convivencia.cta":"Voir le projet",
    "projects.morecoming":"D'autres projets bientôt",
    "convivencia.eyebrow":"Notre premier projet","convivencia.h2":"Convivencia",
    "convivencia.tagline":"Rencontre · Langues · Culture · Participation · Communauté",
    "convivencia.location":"D'abord lancé à Valencia, en Espagne — conçu pour s'étendre ensuite à d'autres territoires.",
    "convivencia.intro":"<p>Convivencia est un programme communautaire à caractère social, éducatif et culturel, qui crée des espaces accessibles où des personnes d'âges, de cultures et de parcours différents peuvent se rencontrer, apprendre et construire une relation de confiance : population locale, personnes migrantes, personnes réfugiées, personnes récemment arrivées en Espagne, étudiants, jeunes, familles et enfants, tous ensemble, sans créer d'espaces séparés.</p><p>Valencia est une ville diverse, mais la diversité ne garantit pas, à elle seule, le vivre-ensemble. Beaucoup de personnes récemment arrivées rencontrent des difficultés pour apprendre l'espagnol, créer de nouvelles relations et participer à la vie locale ; de nombreux habitants, de leur côté, ont peu d'occasions de côtoyer d'autres cultures. Convivencia veut créer des occasions simples, régulières et accessibles pour que cela change.</p>",
    "convivencia.objective.h3":"Objectif",
    "convivencia.objective.p":"Favoriser la cohabitation interculturelle, l'inclusion sociale, l'apprentissage linguistique et la participation communautaire, à travers des espaces de rencontre où la population locale et les personnes d'origines différentes peuvent se lier, apprendre et collaborer sur un pied d'égalité.",
    "convivencia.who.h3":"À qui s'adresse le projet",
    "convivencia.who.list":"<li>Personnes récemment arrivées en Espagne, migrantes et réfugiées</li><li>Population locale</li><li>Étudiants nationaux et internationaux</li><li>Jeunes, familles et enfants</li><li>Personnes âgées</li><li>Bénévoles, associations et collectifs communautaires</li>",
    "convivencia.who.note":"Convivencia n'est pas un projet réservé aux personnes migrantes — sa valeur tient justement à réunir des personnes aux expériences différentes dans un même espace.",
    "convivencia.what.h3":"Ce que nous faisons",
    "convivencia.what.list":"<li><strong>Café des Langues</strong> — un espace informel pour pratiquer l'espagnol, l'anglais, l'arabe et d'autres langues.</li><li><strong>Espagnol en Communauté</strong> — des rencontres de conversation pour que les nouveaux arrivants pratiquent l'espagnol avec des bénévoles.</li><li><strong>Saveurs du Monde</strong> — préparation et partage de recettes et d'histoires culinaires.</li><li><strong>Histoires du Monde</strong> — récits personnels, familiaux et culturels.</li><li><strong>Cinéma et Dialogue</strong> — projections suivies d'un débat participatif.</li><li><strong>Art et Artisanat</strong> — ateliers pratiques animés par les participants et les collaborateurs.</li><li><strong>Musique du Monde</strong> — échange de musiques, d'instruments et de chansons.</li><li><strong>Apprends-moi un mot</strong> — chaque participant partage des mots et expressions de sa langue.</li><li><strong>Carte Humaine du Monde</strong> — une représentation participative de la diversité de la communauté.</li><li><strong>Jeux Interculturels</strong> — des dynamiques coopératives pour faciliter la rencontre entre les personnes.</li><li><strong>Activités familiales</strong> — pensées pour les enfants et les familles, pour un vivre-ensemble intergénérationnel.</li>",
    "convivencia.languages.h3":"Langues",
    "convivencia.languages.p":"Les trois langues principales sont l'espagnol, l'anglais et l'arabe. Le projet est aussi ouvert au français, à l'italien, au portugais, au roumain, à l'ukrainien, au russe, à l'allemand, au valencien et à toute autre langue présente parmi les participants — la diversité linguistique est une ressource du projet, pas une liste fermée.",
    "convivencia.timeline.h3":"Déroulement",
    "convivencia.timeline.list":"<li><strong>Préparation</strong> — planification, communication, recherche de partenaires et de bénévoles, mise en place de la communauté d'apprentissage de l'espagnol.</li><li><strong>Mois 1 — On se découvre</strong> — premières rencontres : Café des Langues, Espagnol en Communauté, Carte Humaine, jeux interculturels.</li><li><strong>Mois 2 — On partage</strong> — Saveurs du Monde, Histoires du Monde, art, musique et échange linguistique.</li><li><strong>Mois 3 — On construit ensemble</strong> — Cinéma et Dialogue, activités familiales, évaluation et recueil des idées pour la suite.</li>",
    "convivencia.impact.h3":"Impact attendu",
    "convivencia.impact.list":"<li>Plus de confiance pour s'exprimer en espagnol et plus d'autonomie au quotidien</li><li>De nouvelles relations et de nouveaux réseaux, moins d'isolement pour les personnes récemment arrivées</li><li>Plus de contacts entre la population locale et les nouveaux arrivants, et de nouveaux réseaux de bénévoles</li><li>Une meilleure connaissance mutuelle entre les cultures, et moins de préjugés</li><li>Des espaces où différentes générations partagent des activités et des expériences</li>",
    "convivencia.cta.p":"Envie de devenir bénévole sur Convivencia ?",
    "convivencia.cta.btn":"Devenir bénévole",
    "involved.eyebrow":"Participer","involved.h2":"Rejoignez Bridge Forward",
    "involved.p":"Il existe de nombreuses façons de soutenir notre mission : comme bénévole, collaborateur professionnel, ou en partageant notre travail.",
    "form.fullname":"Nom complet","form.fullname.placeholder":"Votre nom",
    "form.email":"E-mail","form.email.placeholder":"vous@email.com",
    "form.phone":"Téléphone (facultatif)","form.phone.placeholder":"+33 6 00 00 00 00",
    "form.howhelp":"Comment souhaitez-vous aider ?",
    "form.opt1":"Bénévolat","form.opt2":"Collaboration professionnelle","form.opt3":"Activités et événements","form.opt4":"Faire connaître notre mission","form.opt5":"Autre",
    "form.message":"Message","form.involve.placeholder":"Dites-nous comment vous aimeriez aider...",
    "form.send":"Envoyer",
    "form.note":"Ce formulaire n'est pas encore connecté — écrivez-nous directement à info@bridgeforwardspain.org en attendant.",
    "news.badge":"Bientôt","news.eyebrow":"Actualités","news.h2":"Actualités et activités",
    "news.p":"Suivez nos activités, projets, partenariats et toutes les actualités de Bridge Forward au fil de notre développement.",
    "news.emailNote":"Vous voulez être informé en premier ? Écrivez-nous à <a href=\"mailto:info@bridgeforwardspain.org\" style=\"color:var(--brand);font-weight:600\">info@bridgeforwardspain.org</a> et nous vous tiendrons informé.",
    "donate.eyebrow":"Nous soutenir","donate.h2":"Soutenir notre mission",
    "donate.p":"Nous mettons en place un moyen simple et sécurisé de faire un don en ligne.",
    "donate.cta":"Nous contacter à propos d'un don","donate.small":"Les dons en ligne seront bientôt disponibles.",
    "contact.eyebrow":"Contact","contact.h2":"Nous sommes là pour vous écouter",
    "contact.p":"Vous souhaitez en savoir plus sur notre association, collaborer avec nous ou recevoir des informations sur nos projets ? Contactez notre équipe.",
    "contact.address":"Calle Manuela Estellés, n° 38, 1er étage, porte 3 · 46022 Valencia, Espagne",
    "contact.registration":"Registre national des associations, Section 1, n° 633 568",
    "form2.name":"Nom","form2.name.placeholder":"Votre nom",
    "form2.email":"E-mail","form2.email.placeholder":"vous@email.com",
    "form2.subject":"Sujet","form2.subject.placeholder":"Comment pouvons-nous vous aider ?",
    "form2.message.placeholder":"Écrivez votre message ici...",
    "form2.send":"Envoyer le message",
    "footer.tagline":"Unis pour un avenir meilleur. Une association à but non lucratif basée en Espagne, avec une vocation internationale.",
    "footer.explore":"Découvrir","footer.connect":"Contact","footer.spain":"Espagne","footer.followsoon":"Bientôt sur les réseaux sociaux.",
    "footer.legal":"© 2026 Asociación Bridge Forward · NIF G93862399 · Espagne",
    "footer.privacy":"Politique de confidentialité","footer.legalnotice":"Mentions légales",
    "privacy.eyebrow":"Confidentialité","privacy.h2":"Politique de confidentialité","privacy.updated":"Dernière mise à jour : octobre 2026",
    "privacy.content":"<h3>1. Responsable du traitement</h3><p>Asociación Bridge Forward, NIF G93862399, domiciliée Calle Manuela Estellés, n° 38, 1er étage, porte 3, 46022 Valencia, Espagne, est responsable du traitement des données personnelles collectées via ce site. Vous pouvez nous contacter à info@bridgeforwardspain.org.</p><h3>2. Données collectées</h3><p>Via les formulaires « Participer » et « Contact », nous pouvons collecter votre nom, votre e-mail, votre téléphone (si vous le fournissez) et le contenu de votre message.</p><h3>3. Finalité et base légale</h3><p>Nous utilisons ces données uniquement pour répondre à votre demande ou gérer votre collaboration avec l'association, sur la base du consentement donné en envoyant le formulaire et de notre intérêt légitime à traiter votre demande.</p><h3>4. Conservation</h3><p>Nous conservons vos données seulement le temps nécessaire pour traiter votre demande ou gérer votre collaboration, puis nous les supprimons.</p><h3>5. Destinataires</h3><p>Nous ne partageons pas vos données avec des tiers. Si nous connectons nos formulaires à un prestataire externe à l'avenir, nous mettrons à jour cette politique.</p><h3>6. Vos droits</h3><p>Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité en écrivant à info@bridgeforwardspain.org. Vous pouvez également déposer une réclamation auprès de l'autorité espagnole de protection des données (AEPD).</p><h3>7. Cookies</h3><p>Ce site n'utilise pas de cookies d'analyse ni de publicité. Si cela change, nous mettrons à jour cette politique.</p>",
    "legal.eyebrow":"Mentions légales","legal.h2":"Mentions légales","legal.updated":"Dernière mise à jour : octobre 2026",
    "legal.content":"<h3>1. Identification</h3><p>Conformément à l'article 10 de la loi espagnole 34/2002 sur les services de la société de l'information et le commerce électronique (LSSI-CE), le titulaire de ce site est <strong>Asociación Bridge Forward</strong>, association à but non lucratif inscrite au Registre national des associations, Section 1, sous le numéro 633 568, et portant le numéro d'identification fiscale (NIF) G93862399. Siège social : Calle Manuela Estellés, n° 38, 1er étage, porte 3, 46022 Valencia, Espagne. E-mail de contact : info@bridgeforwardspain.org.</p><h3>2. Objet</h3><p>Ce site (bridgeforwardspain.org) a pour objet de présenter la mission, les programmes et les activités d'Asociación Bridge Forward, et de faciliter la prise de contact avec l'association.</p><h3>3. Conditions d'utilisation</h3><p>L'accès et l'utilisation de ce site confèrent la qualité d'utilisateur et impliquent l'acceptation des présentes conditions. L'utilisateur s'engage à faire un usage approprié des contenus et services du site et à ne pas les utiliser à des fins illicites ou contraires à la bonne foi.</p><h3>4. Propriété intellectuelle</h3><p>Les contenus de ce site (textes, images, logos et autres éléments) appartiennent à Asociación Bridge Forward, sauf mention contraire, et sont protégés par le droit de la propriété intellectuelle. Toute reproduction totale ou partielle sans autorisation expresse est interdite.</p><h3>5. Hébergement</h3><p>Ce site est hébergé sur GitHub Pages (GitHub, Inc.).</p><h3>6. Droit applicable</h3><p>Les présentes conditions sont régies par le droit espagnol. Tout litige relatif à l'accès ou à l'utilisation de ce site relève des tribunaux de Valencia, Espagne.</p>",
    "meta.title":"Asociación Bridge Forward",
    "meta.description":"Asociación Bridge Forward est une organisation à but non lucratif engagée pour la dignité humaine, la protection, l'éducation et la création d'opportunités pour les personnes et les communautés."
  }
};

function setLanguage(lang) {
  var dict = translations[lang];
  if (!dict) return;
  document.documentElement.lang = lang;

  var pageId = (typeof PAGE_ID !== 'undefined') ? PAGE_ID : 'home';
  var names = pageNames[lang] || pageNames.es;
  var pageName = names[pageId] || '';
  document.title = (pageId === 'home' || !pageName) ? dict["meta.title"] : (pageName + ' · ' + dict["meta.title"]);

  var metaDesc = document.getElementById('metaDescription');
  if (metaDesc) metaDesc.setAttribute('content', dict["meta.description"]);

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });
  var heroImg = document.getElementById('heroImg');
  if (heroImg && dict["hero.imgAlt"]) heroImg.alt = dict["hero.imgAlt"];

  ['es', 'en', 'fr'].forEach(function (code) {
    var btn = document.getElementById('lang' + code.charAt(0).toUpperCase() + code.slice(1));
    if (btn) btn.classList.toggle('active', code === lang);
  });

  try { localStorage.setItem('bf_lang', lang); } catch (e) {}
}

(function () {
  var saved = null;
  try { saved = localStorage.getItem('bf_lang'); } catch (e) {}
  setLanguage(saved && translations[saved] ? saved : 'es');

  function wireForm(btnId, noteId) {
    var btn = document.getElementById(btnId);
    var note = document.getElementById(noteId);
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (note) note.style.display = 'block';
    });
  }
  wireForm('involveSendBtn', 'involveNote');
  wireForm('contactSendBtn', 'contactNote');
})();
