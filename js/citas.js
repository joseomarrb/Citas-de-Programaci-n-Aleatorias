let citas = [
  {
    'autor': 'Albert Einstein',
    'texto': 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
  },
  {
    'autor': 'Anónimo',
    'texto': 'Semanas de programación te pueden ahorrar horas de planeación.'
  },
  {
    'autor': 'Alan Kay',
    'texto': 'La mejor forma de predecir el futuro es inventarlo.'
  },
  {
    'autor': 'Amelia Earhart',
    'texto': 'Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.'
  },
  {
    'autor': 'Aristotle',
    'texto': 'La calidad no es un acto, es un hábito.'
  },
  {
    'autor': 'Benjamin Franklin',
    'texto': 'Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.'
  },
  {
    'autor': 'Charles R. Swindoll',
    'texto': 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.'
  },
  {
    'autor': 'Jane Goodall',
    'texto': 'Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.'
  },
  {
    'autor': 'John Muir',
    'texto': 'El poder de la imaginación nos hace infinitos.'
  },
  {
    'autor': 'Mark Twain',
    'texto': 'Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.'
  },
  {
    'autor': 'Pablo Picasso',
    'texto': 'Los ordenadores son inútiles. Sólo pueden darte respuestas.'
  },
  {
    'autor': 'Paul Leary',
    'texto': 'Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza.'
  },
  {
    'autor': 'Michael Sinz',
    'texto': 'Programar es como el sexo: un único error y tienes que estar soportándolo toda la vida.'
  },
  {
    'autor': 'Alan J. Perlis',
    'texto': 'Hay dos formas de escribir programas sin errores; sólo la tercera funciona.'
  },
  {
    'autor': 'Mark Minasi',
    'texto': 'Si McDonnalds funcionara como una compañía de software, uno de cada cien Big Macs te envenenarían, y la respuesta sería: lo sentimos, aquí tiene un cupón para dos más.'
  },
  {
    'autor': 'Martin Golding',
    'texto': 'Codifica siempre como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives.'
  },
  {
    'autor': 'Paul Ehrlich',
    'texto': 'Cometer errores es humano, pero para estropear realmente las cosas necesitas un ordenador.'
  },
  {
    'autor': 'Mitch Radcliffe',
    'texto': 'Un ordenador te permite cometer más errores y más rápido que cualquier otra invención en la historia de la humanidad, con las posibles excepciones de las pistolas y el tequila.'
  },
  {
    'autor': 'Brian Kernighan',
    'texto': 'Depurar es al menos dos veces más duro que escribir el código por primera vez. Por tanto, si tu escribes el código de la forma más inteligente posible no serás, por definición, lo suficientemente inteligente para depurarlo.'
  },
  {
    'autor': 'Edsger W. Dijkstra',
    'texto': 'Si la depuración es el proceso de eliminar errores, entonces la programación debe ser el proceso de introducirlos.'
  },
  {
    'autor': 'Francis Glassborow',
    'texto': 'Los buenos programadores usan sus cerebros, pero unas buenas directrices nos ahorran de tener que hacerlo en cada caso.'
  },
  {
    'autor': 'Bill Clinton',
    'texto': 'Considerando el lamentable estado de nuestras aplicaciones informáticas actuales, el desarrollo de software es todavía un arte oscuro, y no puede ser aún considerado una ingeniería.'
  },
  {
    'autor': 'Jim McCarthy',
    'texto': 'No puedes crear un gran software sin un gran equipo, y la mayoría de los equipos de desarrollo se comportan como familias disfuncionales.'
  },
  {
    'autor': 'Steve McConnell',
    'texto': 'El buen código es su mejor documentación.'
  },
  {
    'autor': 'Eaglesons Law',
    'texto': 'Cualquier código tuyo que no hayas mirado en los últimos seis meses o más es como si lo hubiese escrito otro.'
  },
  {
    'autor': 'George Carrette',
    'texto': 'Primero aprende informática y toda la teoría. Después desarrolla un estilo de programación. Entonces, olvídalo todo y hackea.'
  },
  {
    'autor': 'Ley de Mosher de la Ingeniería del Software',
    'texto': 'No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo.'
  },
  {
    'autor': 'John Johnson',
    'texto': 'Primero resuelve el problema. Entonces, escribe el código.'
  },
  {
    'autor': 'Linus Torvalds',
    'texto': 'El software es como el sexo: mejor si es libre y gratis.'
  },
  {
    'autor': 'Tom Cargill',
    'texto': 'El primer 90% del código corresponde al primer 90% del tiempo de desarrollo. El 10% restante corresponde al otro 90% del desarrollo.'
  },
  {
    'autor': 'Stan Kelly-Bootle',
    'texto': '¿Los índices de los arrays deberían comenzar en 0 o en 1? Mi propuesta neutral de usar 0.5 fue rechazada, en mi opinión, sin la debida consideración.'
  },
  {
    'autor': 'Rich Cook',
    'texto': 'La programación es una carrera entre los desarrolladores, intentando construir mayores y mejores programas a prueba de idiotas, y el universo, intentanto producir mayores y mejores idiotas. Por ahora va ganando el Universo.'
  },
  {
    'autor': 'Larry Wall',
    'texto': 'La mayoría de ustedes están familiarizados con las virtudes del programador. Son tres, por supusto: pereza, impaciencia y orgullo desmedido.'
  },
  {
    'autor': 'Bill Gates',
    'texto': 'Un gran operario de tornos vale varias veces más que un operario medio, pero un gran escritor de código vale 10.000 veces el precio de un desarrollador medio.'
  },
  {
    'autor': 'Grady Booch',
    'texto': 'La función de un buen software es hacer que lo complejo aparente ser simple.'
  },
  {
    'autor': 'Brian Kernigan',
    'texto': 'Controlar la complejidad es la esencia de la programación.'
  },
  {
    'autor': 'C.A.R. Hoare',
    'texto': 'Hay dos maneras de diseñar software: una es hacerlo tan simple que sea obvia su falta de deficiencias, y la otra es hacerlo tan complejo que no haya deficiencias obvias.'
  },
  {
    'autor': 'Nytwind',
    'texto': 'La web es como una dominatriz. En todos los sitios que voy me encuentro pequeños botones ordenándome que me someta.'
  },
  {
    'autor': 'Alan Kay',
    'texto': 'La mayoría del software actual es muy parecido a una pirámide egipcia, con millones de ladrillos puestos unos encima de otros sin una estructura integral, simplemente realizada a base de fuerza bruta y miles de esclavos.'
  },
  {
    'autor': 'Douglas Coupland',
    'texto': 'Incluso cuando te tomas unas vacaciones de la tecnología, la tecnología no se toma un descanso de ti.'
  },
  {
    'autor': 'Bill Gates',
    'texto': 'Sé bueno con los nerds. Es muy probable que termines trabajando para uno de ellos.'
  },
  {
    'autor': 'Hayao Miyazaki',
    'texto': 'Para crecer, necesitas traicionar las expectativas de los demás.'
  },
  {
    'autor': 'Yuval noah',
    'texto': 'Los principales productos de la economía del siglo XXI no serán los textiles, vehículos y armas, sino más bien cuerpos, cerebros y mentes.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Un punto  y coma (;) perdido puede ser un verdadero quebradero de cabeza.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Persona que tiene relaciones más duraderas y profundas con una computadora que con otra persona.'
  },
  {
    'autor': 'Sócrates.',
    'texto': 'Emplea tu tiempo cultivándote  a través de los escritos de otros, así ganaras fácilmente lo que para nosotros ha sido una dura tarea.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Casarse con un software es un pecado capital en este mundo de constante evolución.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Si continuamos desarrollando nuestra tecnología sin sabiduría o prudencia, nuestro servidor se convertirá en nuestro verdugo.'
  },
  {
    'autor': 'Albert Einstein',
    'texto': 'La creatividad es la inteligencia divirtiéndose.'
  },
  {
    'autor': 'Ed catmull',
    'texto': 'Toma riesgos y prepárate para fallar.'
  },
  {
    'autor': 'John Lasseter',
    'texto': 'El arte desafía A la tecnología y la tecnología inspira al arte.'
  },
  {
    'autor': 'Rafael Gómez',
    'texto': 'Uno de los peores defectos que tienen los que desarrollan software es la inconstancia: acumular tareas lo que trae agobio, las prisas, las horas extras y aquí comienza a resentirse la calidad del trabajo.'
  },
  {
    'autor': 'Pablo Picasso',
    'texto': 'Los ordenadores son inútiles. Sólo pueden darte respuestas.'
  },
  {
    'autor': 'Omar Bradley',
    'texto': 'Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día.'
  },
  {
    'autor': 'Robert C. Martin',
    'texto': 'La verdad solo se puede encontrar en un lugar: el código.'
  },
  {
    'autor': 'Rafael Gómez',
    'texto': 'Un desarrollador de software profesional no duda en eliminar lo que sea necesario siempre que vaya a ser sustituido por una idea mejor que añada simplicidad, mejor diseño o mayor legibilidad a la solución.'
  },
  {
    'autor': 'Rafael Gómez',
    'texto': 'El curriculum solo lo da la calidad, no la cantidad de proyectos mal acabados y con problemas.'
  },
  {
    'autor': 'Rafael Gómez',
    'texto': 'En ocasiones un software termina siendo un jardín abandonado lleno de malas hierba.'
  },
  {
    'autor': 'Alan Moore',
    'texto': 'La tecnología es siempre un arma de doble filo. Traerá muchos beneficios, pero también muchos desastres.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'En software, < < bello y elegante>>” significa fácil y barato de evolucionar y mantener.'
  },
  {
    'autor': 'Sydney Harriso',
    'texto': 'El verdadero peligro no es que los ordenadores empiecen a pensar como los hombres, sino que los hombres empiecen a pensar como los ordenadores.'
  },
  {
    'autor': 'Bill Gates',
    'texto': 'Si tu negocio no está en Internet, tu negocio no existe.'
  },
  {
    'autor': 'José Krutch',
    'texto': 'La tecnología hizo posible las grandes poblaciones; ahora las grandes poblaciones hacen que la tecnología sea indispensable.'
  },
  {
    'autor': 'Christian Lous Lange',
    'texto': 'La tecnología es un siervo útil, pero un amo peligroso.'
  },
  {
    'autor': 'Hayao Miyazaki',
    'texto': 'Haz todo a mano, incluso cuando usas la computadora.'
  },
  {
    'autor': 'Arthur C. Clarke',
    'texto': 'Cualquier profesor que pueda ser sustituido por una maquina, debería ser sustituido por una maquina.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Caminar sobre el agua y programar aplicaciones siguiendo una especificación son cosas fáciles si ambas están congeladas.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Un programador tiene un problema y decide usar expresiones regulares; ahora tiene dos problemas.'
  },
  {
    'autor': 'Andrew Stanton',
    'texto': '<<Comete un error pronto y rápido>> y << equivócate lo antes posible>>.'
  },
  {
    'autor': 'Mary Wollstonecraft',
    'texto': 'No deseo que (las mujeres) tengan poder sobre los hombres, sino sobre sí mismas.'
  },
  {
    'autor': 'Yuval noah',
    'texto': 'La idea de tener un puesto de trabajo por toda la vida es totalmente arcaica.'
  },
  {
    'autor': 'Larry Ellison, CEO Oracle',
    'texto': 'Cuando se innova, tiene que estar preparado para la gente que le dice que usted está loco.'
  },
  {
    'autor': 'Steve Jobs',
    'texto': 'Por cada persona capaz de armar su propia computadora hay un millón que no sabe hacerlo.'
  },
  {
    'autor': 'Gray Scott',
    'texto': 'La verdadera pregunta es: ¿cuándo elaboraremos una lista de derechos de inteligencia artificial? ¿En qué consistirá? ¿Quién los va a diseñar?.'
  },
  {
    'autor': 'Drew Houston - CEO de Dropbox.',
    'texto': 'No te preocupes por el fracaso. Sólo debes acertar una vez.'
  },
  {
    'autor': 'Tara Westover',
    'texto': 'Te puedes educar a ti misma mucho mejor que cualquier otra persona.'
  },
  {
    'autor': 'Steve Jobs',
    'texto': 'El diseño no es solo lo que se ve y lo que se siente. El diseño es cómo funciona.'
  },
  {
    'autor': 'Gray Scott',
    'texto': 'No habrá forma de que la mente humana le siga el ritmo a una máquina con inteligencia artificial a partir del año 2035.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Le das tu laptop o celular a un programador y entre sus soluciones te va sugerir en primer lugar: “hay que formatear la vaina” y luego te dirá: soy un programador no un técnico.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Ella: Seguro está pensando en otra; Él: Porque funciona el programa, si el código que puse está mal.?.'
  },
];

