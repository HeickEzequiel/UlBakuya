import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import UserNav from "../usernav/UserNav"
import userStore from "../../store/loginStore"

function Manual() {
  const { isLogged, user } = userStore()
    return (
        <div className="">
            <Nav/>
            {isLogged ? <UserNav/> : <div className='relative flex items-center p-4 w-full '></div>}
                <div className="p-8">
                     <br/>
                    <div > 
                        <p className="">Introducción</p>
                        <p className="">
                        Nuestro sistema educativo tiene como principal objetivo mejorar la calidad de vida de las personas, cualidades físicas y psíquicas.
                        Brinda también la posibilidad de formar Instructores calificados que puedan enseñar esta disciplina transmitiendo la pasión, energía y filosofía de vida que el TAEKWON-DO propone.<br/>
                        Somos conscientes de la responsabilidad que significa ser un instructor de TAEKWON-DO y la necesidad de estar muy bien preparado para dictar clases seguras que en ningún momento pongan en peligro la salud de los participantes. Hoy en día las Artes Marciales han evolucionado de tal manera que no queda espacio para instructores improvisados y sin preparación. Por esto nuestros instructores aprenden a planificar metódicamente cada una de sus clases ofreciendo a sus alumnos la garantía de un entrenamiento seguro y efectivo.
                        Esta disciplina está dirigida al público en general, con el objetivo de ofrecerles una actividad complementaria, para que puedan expandir sus posibilidades desarrollando un sistema de entrenamiento serio y fundamentado que se encuentra en perfecta armonía y sintonía con la filosofía y desarrollo técnico de las Artes Marciales y el deporte.<br/>

                        <br/> <span>Nuestro sistema se divide en varias áreas:</span> <br/>
                        <ul> <br/>
                            <li/>Entrenamiento Continuo
                            <li/>Graduaciones-Exámenes
                            <li/>Actualizaciones-Cursos-Seminarios
                            <li/>Competencias
                        </ul> <br/>


                        Las clases están compuestas por un Área Técnica que abarca el estudio y la práctica de la técnica de esta actividad; y un Área Teórica, en la que se estudian los distintos aspectos del Taekwondo, como así también, las pautas básicas de Anatomía, Fisiología y Biomecánica aplicadas, teniendo en cuenta edades y conocimientos previos.<br/>

                        El Taekwon-do se caracteriza por ofrecer un sistema que puede adaptarse a cualquier tipo de participantes. Esta adaptabilidad que ofrece nuestra actividad garantiza la posibilidad de que todo el mundo pueda practicarlo,  sin   distinción   de   sexo   0   edad.
                        Por último, el Área de Instrucción es la que nos asegura que la clase sea bien enseñada, teniendo en cuenta no solo la pedagogía y la didáctica a aplicar, sino también la comunicación con nuestros alumnos.
                        Aseguramos entrenadores de excelente calidad quienes para obtener su Certificación deben aprobar un examen riguroso que no deja dudas de sus habilidades y cualidades.<br/>

                        <span>EI ENTRENAMIENTO CONTINUO</span> es uno de los motores principales del sistema educativo del Taekwon-do. Les brinda a los Practicantes e Instructores la posibilidad de entrenar con elementos, bolsas guantes de foco, palmetas, y con estrategias de combate real. Este entrenamiento asegura absoluta credibilidad y confianza al practicante.<br/>
                        También se entrenan la flexibilidad, la fuerza y la resistencia, para lograr el óptimo estado físico.<br/>
                        Este Entrenamiento Continuo tiene lugar durante todo el año con una frecuencia variada.<br/>
                        Las actualizaciones se realizan varias veces al año con el objetivo de ofrecer a los Practicantes talleres y clínicas de perfeccionamiento sistema que mejoran aún más la calidad del Alumno.<br/>
                        </p>
                        <br/>
                    </div>
                    <div className="">
                        
                        <ol type="I">
                            <li>¿Cómo son las técnicas de lucha en el Taekwon-do?</li>
                            <li>¿Quién puede practicar Taekwon-do?</li>
                            <li>¿Existe combate en la clase de Taekwon-do?</li>
                            <li>¿Cuáles son los beneficios que otorga la práctica de Taekwon-do?</li>
                            <li>Plan de enseñanza</li>
                            <li>Objetivos específicos y generales</li>
                            <li>Participación</li>
                            <li>Preguntas básicas sobre nosotros</li>
                            <li>El alumno frente a la escuela</li>
                            <li>La escuela frente al medio social</li>
                            <li>Material de entrenamiento</li>
                        </ol>
                        <br/><br/>
                        <p>Teoria</p>
                        <ol type="I">
                            <li>Cinturón Blanco</li>
                            <li>Cinturón Blanco punta amarilla</li>
                            <li>Cinturón Amarillo</li>
                            <li>Cinturón Amarillo punta verde</li>
                            <li>Cinturón Verde</li>
                            <li>Cinturón Verde punta azul</li>
                            <li>Cinturón Azul</li>
                            <li>Cinturón Azul punta roja</li>
                            <li>Cinturón Rojo</li>
                            <li>Cinturón Rojo punta negra</li>
                        </ol>
                        <br/>
                    </div>
                    <div>
                        <p>¿CÓMO SON LAS TÉCNICAS DE LUCHA EN EL TAEKWON-DO?</p><br/>

                        <p>Las técnicas de lucha utilizadas en el TAEKWON-DO son sobre todo seguras y efectivas. Golpes, patadas, bloqueos, saltos y esquives ejecutados con fluidez y dinámica nos dan una imagen de lo que TAEKWON-DO representa.
                        La selección de movimientos y su debida combinación y enseñanza técnico-pedagógica están minuciosamente estudiados para que las clases de TAEKWON-DO pasen todos los controles de calidad en cuanto a seguridad y planificación del entrenamiento se refiere.
                        Selección de técnicas y combinaciones, intensidad, volumen de trabajo, frecuencia, duración, opciones y control de lesiones son los parámetros que se planifican cuidadosamente y que cada instructor debe saber manejar con responsabilidad al dar una clase de Artes Marciales.
                        </p><br/>

                        <p>¿QUIÉN PUEDE PRACTICAR TAEKWON-DO?</p> <br/>

                        <p>TAEKWON-DO es para todo el mundo, es muy simple y existen opciones para cada uno de sus movimientos por lo cual cada practicante puede adaptar el entrenamiento a su nivel. EI TAEKWON-DO puede ser practicado por todos, hombres y mujeres sin distinción de edad</p><br/>
                        <p>¿EXISTE COMBATE EN LA CLASE DE TAEKWON-DO?</p><br/>

                        <p>Si, pero no es obligatorio. El enfrentamiento cuerpo a cuerpo se desarrolla bajo estrictas normas de protocolo y cortesía, que minimizan al máximo cualquier posibilidad de lesión. Además, la clase está dirigida y controlada por estricta y atenta mirada del instructor</p><br/>

                        <p>¿CUALES SON LOS BENEFICIOS QUE OTORGA LA PRÁCTICA DE TAEKWON-DO?</p><br/>

                        <p>TAEKWON-DO es un entrenamiento que da resultados rápidos y reales. Su práctica continua produce: <br/>
                            <ul>
                                <li/>Quema de grasa
                                <li/>Aumento del tono muscular
                                <li/>Aumento de la resistencia muscular
                                <li/>Aumento de la velocidad
                                <li/>Mejoras en el rendimiento del sistema cardio-respiratorio
                                <li/>Mejoras en la coordinación, la flexibilidad, el equilibrio y la postura
                                <li/>Descarga de tensiones y liberación del estrés
                                <li/>Aumento de la seguridad y la autoestima
                            </ul>
                        </p><br/>

                        <p>PLAN DE ENSEÑANZA</p><br/>

                        <p>Las clases estarán a cargo de un instructor especializado de esta disciplina, quien tiene un profundo y actualizado conocimiento de las técnicas de trabajo específicas de enseñanza.
                        No se realizarán evaluaciones de tipo final o parcial como las convencionales, ya que este arte se divide por graduaciones (cinturones de color). Se efectuarán exámenes cada 2,3,4 o 6 meses según su graduación y nivel.
                        El alumno tendrá la oportunidad, de así desearlo, de participar en torneos, cursos y seminario; tanto nacionales como internacionales.
                        </p><br/>
                        
                        <p>OBJETIVOS ESPECÍFICOS Y GENERALES</p><br/>

                        <p>Hacer partícipe a toda la comunidad de esta disciplina desarrollada por la Escuela UL BAKUYA.
                        Tomar conciencia de la importancia de la interacción comunitaria
                        Brindar a los jóvenes y adultos de la comunidad un ámbito de estimulación para la salida laboral.
                        Ofrecer a la comunidad un centro educativo, con un elevado nivel humano y docente, con el respaldo de una prestigiosa organización.
                        Fomentar vínculos dentro de una comunidad.
                        Integrar a niños, jóvenes y adultos con diferentes características personales, unidos por una misma inquietud.
                        Incentivar el desarrollo de las capacidades individuales.
                        Fomentar actitudes positivas y nobles ante la vida.
                        Darles un espacio para enseñar o perfeccionar esta disciplina para miembros de la comunidad.</p><br/>

                        <p>PARTICIPACIÓN</p><br/>

                        <p>Los practicantes de Taekwon-do pueden alejarse y reincorporarse tantas veces como lo deseen. Pero para ser promovidos a nuevas categorías deben cumplir con un estricto régimen de asistencia. Cuando son promovidos a categorías de Danes deben asumir la responsabilidad que categoría demanda, practicando, actualizándose y participando activamente en esta disciplina</p><br/>

                        <p>PREGUNTAS BASICAS</p><br/>

                        <p>¿Cuáles son los beneficios de practicar Taekwon-do en la Escuela?<br/>
                        Un método único para aprender a defenderse.<br/>
                        Desarrollo de la salud, fortalecimiento del carácter e incremento de la capacidad motriz.<br/>
                        Competencias y cursos, tanto nacionales como internacionales.<br/>
                        La posibilidad de que los instructores se formen como verdaderos profesionales, en lo que a la educación de la defensa personal se refiere.<br/>
                        Que nuestros alumnos logren en su paso por el Taekwon-do una experiencia educativa y altamente formativa.<br/>

                        ¿Qué pide la Escuela UL BAKUYA?<br/>
                        Pedimos que aquel que practica Taekwon-do no lo mal use y se comporte con responsabilidad. Que tenga en cuenta: Puntualidad-Pulcritud -Caballerosidad-Ética-Comportamiento moral-Respeto por la jerarquía -Juego limpio en la competencia - Respeto por el rival -Disciplina-Humildad-Respeto absoluto por los principios del Taekwon-do (Cortesía, integridad, perseverancia, autocontrol y espíritu indomable).<br/>
                        ¿Cómo se da lo que ofrece la Escuela UI Bakuya?<br/>
                        A través de las clases semanales, clases cursos, seminarios, competencias internas, nacionales y encuentros de formación para practicantes e instructores.<br/>

                        ¿Cuál es nuestra posición con respecto a la parte deportiva?<br/>

                        El Taekwon-do es un arte, una ciencia y un deporte. Para nosotros, el deporte es solo conforma una faceta mas de nuestro sistema de aprendizaje y formación, por lo cual no es ésta en particular, la más importante.
                        </p><br/>

                        <p>EL ALUMNO FRENTE A LA ESCUELA</p><br/>

                        <p>Un punto importante para cualquier practicante de esta escuela se refiere a como se ubica este interes frente a la actividad. Si considera que el aprendizaje es una mercadería permutable o comprada en cuotas, seguramente obtendrá resultados anecdóticos. Si en cambio utiliza el aprendizaje como un medio para suprarse, encontrará respuestas a sus diversos intereses y podrá utilizarlo como referencia de vida.</p><br/>

                        <p>LA ESCUELA FRENTE AL MEDIO SOCIAL</p><br/>

                        <p>La Escuela estimula la participación entusiasta en todos los eventos que se desarrollan, destacando siempre que participar es la mejor manera de aprender y mantenerse actualizado, y que la comunicación y el intercambio aportan siempre al desarrollo y el crecimiento personal y del conjunto.</p><br/>

                        <p>MATERIAL DE ENTRENAMIENTO</p><br/>
                        <p>Es verdad que el entrenamiento de Taekwon-do no necesita material costoso. Sin embargo, unos equipos sencillos son necesarios para el entrenamiento: el fortalecimiento, para forjar o desarrollar las herramientas necesarias para el ataque y la defensa; y un dobok (uniforme de práctica), para el aspecto espiritual y el sentimiento de pertenencia.<br/>
                        La Federación Internacional de Taekwon-do introdujo este uniforme en 1982, basándose en diseño y tradición.<br/>
                        Este nuevo uniforme, sigue conservando ciertos aspectos del uniforme tradicional, pero elimina muchos inconvenientes ligados con otros uniformes de otras artes marciales. Por ejemplo, no se desata durante los ejercicios o en las competencias. También pone fin a prácticas poco serias, que consistían en crear en el golpe, un sonido artificial por medio de trajes almidonados o con telas especiales.<br/>
                        Se considera el uniforme dobok, como de primera necesidad para el entrenamiento, así como para los distintos eventos, debido a las siguientes razones:<br/>
                        Llevar el uniforme dobok estimula el orgullo del estudiante, como practicante de Taekwon-do
                        Identifica el grado de destreza y conocimiento adquirido.<br/>
                        Los cambios de grados y de danes indicados por el color del cinturón, crean un estímulo, mientras que simultáneamente preservan la humildad.<br/>
                        El uniforme dobok oficial hace la distinción entre el Taekwon-do ortodoxo y las imitaciones.<br/>
                        </p><br/>

                    </div>
                    <div>
                        <p>TEORIA</p><br/>

                        <p>A continuación, presentamos un resumen de la Teoría del Taekwon-do que hará de guía para facilitarle el camino que comenzamos a transitar juntos.
                        RECUERDE QUE EL PRESENTE MATERIAL ES UN RESUMEN DEL PROGRAMA NO EL PROGRAMA EN SI MISMO.LA ENCICLOPEDIA DEL TAEKWONDO CONSTA DE 15 TOMOS.
                        </p><br/>
                        <br/>
                        <p>TEORÍA DE CINTURÓN BLANCO</p><br/>

                        <p>SIGNIFICADO DE LA PALABRA TAEKWON-DO<br/>
                        Literalmente TAE significa pie, KWON significa puño y DO significa camino.<br/>
                        De otra manera:<br/>
                        TAE: Acción de pies, incluyendo saltos.<br/>
                        KWON: Acción de puños incluyendo otras posiciones de los brazos<br/>
                        DO: arte o camino. Se refiere a los aspectos éticos, morales y filosóficos perseguidos por el arte para el desarrollo personal de cada estudiante. Utilizar el cuerpo con técnicas de ataque y defensa para elevar el espíritu, colabora con el crecimiento del estudiante y lo ayuda a confiar en si mismo. También se lo conoce como "el arte de pies y manos".<br/>
                        
                        NOMBRE DEL FUNDADOR DEL TAEKWON-DO<br/>
                        GENERAL CHOI HONG HI (1918 - 2002)<br/>
                        General debido a que fue militar; ya retirado del ejército coreano.<br/>
                        NOMBRE DE LA ASOCIACIÓN:<br/>
                        FIT (Federación Integral de Taekwondo)<br/>
                        Director: Ariel Farias - 7° Dan<br/>
                        ESCUELAS DE LA ASOCIACION<br/>
                        UL BAKUYA<br/>
                        Director: Ariel Farias 7º Dan<br/>
                        PIL SUNG<br/>
                        Director: Diego Pin 6º Dan<br/>
                        GYEOMSON<br/>
                        Director: Leandro De Marco 5º Dan<br/>
                        UBUNTU<br/>
                        Directora: Romina Aulita 5º Dan<br/>

                        GRAL.CHOI HONG HI<br/>
                        El general nace el 9 de noviembre de 1918 en la zona rural de Hwa Dac,  distrito   de   Myong   Ghun,  Korea. Nació siendo un niño débil, hecho que causó a sus padres una gran ansiedad. Siendo el menor, estudió caligrafia y Taekyon bajo la tutela del renombrado Ok-Nam II Dong. Más tarde, mientras cursaba el quinto año, el joven Choi fue suspendido indefinidamente por planear y dirigir una masiva deserción de su escuela, en el nacimiento del Levantamiento Estudiantil Kwang-Ju.<br/>
                        En Tokio, el Gral. Choi fue forzado a unirse al Ejército Japonés como estudiante voluntario. Hacia el final de la Segunda Guerra Mundial, recibió una sentencia de 7 años de prisión cuando se descubrieron sus planes para expulsar a los japoneses. No recuperaría la libertad hasta después de la liberación de Corea del dominio japonés. En 1945, Choi se enroló en una escuela militar de idiomas, que después se convertiría en la academia militar Coreana de hoy día, y el 15 de enero de 1946, fue nombrado Teniente Segundo.<br/>
                        El 11 de abril de 1955, el General Choi, después de una exhaustiva investigación desarrollo y experimentación, proclamo el taekwondo al mundo, como un completo y depurado arte marcial de origen básico coreano.<br/>
                        En marzo de 1959, el general Choi condujo el equipo de Taekwon-do del ejército R.O.K, en una demostración de técnicas de poder en la República de China y en la República de Vietnam, para aumentar con ella la estima nacional coreana, como también para preparar el camino de la adopción del Taekwon-do como una parte especial; del entrenamiento militar de ambos países.<br/>
                        En 1965, el General Choi recibió la aprobación del gobierno de Corea del Sur para declarar al Taekwon-do el arte marcial nacional coreano. Luego condujo la Misión de Buena Voluntad del Taekwon-do en una gira de demostración en Europa, Medio Oriente, África y Asia. El 22 de marzo de 1966, el General Choi fundó la Federación Internacional de Taekwon-do en Seúl, Corea, con el consentimiento de 9 países. Esta era la primera vez que la sede de una organización internacional se establecía en Corea.<br/>

                        En 1968, el General Choi condujo el equipo de demostración de Taekwon-do a un CISM (Consejo Internacional de Deporte Militar) realizado en Francia. Esta visita concretó futuros planes para la adopción del Taekwon-Do como uno de los eventos deportivos del CISM. En 1969, el General Choi logró celebrar el Primer Campeonato Asiático de Taekwon-do en Hong Kong. Este fue un evento significativo en el que el Taekwon-do fue aceptado internacionalmente como arte marcial y como deporte. En 1974, un evento espectacular de magnitud mundial tuvo lugar en la ciudad de Montreal, Canadá. Fue el Primer Campeonato Mundial de Taekwon-do. Este torneo de altísimo éxito sólo fue posible gracias a la devoción dedicación del General Choi, quien pudo lograr y conducir este encuentro multinacional. En junio de 1979, en Oslo, Noruega el General Choi colaboró con la formación de la Federación Europea de Taekwon-do, con 14 naciones europeas como miembros fundadores, incluyendo a Polonia, Hungría y Yugoslavia de Europa del Este. Con la fundación de esta Federación, la visión del General Choi de establecer al Taekwon-do como una Organización apolítica de magnitud mundial se hizo realidad.<br/>
                        Choi Hong Hi es un Mayor General retirado del Ejército de Corea del Sur, y fue el primer embajador de su país en Malasia. Para agregar a sus logros militares y diplomáticos, realizó exhibiciones individuales, tanto en su país como en el exterior, ganando varios premios en la Exhibición Anual de Arte Nacional de Corea por su exquisita caligrafía.<br/>
                        El General Choi, uno de los padres fundadores de las fuerzas armadas R.O.K., fue responsable de varias contribuciones e innovaciones para el mejoramiento de operaciones y procedimientos militares. Al mismo tiempo, el General Choi se encontraba ocupado en la fundación del Sistema de Inteligencia Militar Coreano, escribiendo la Teoría General de Inteligencia Militar, En 1961, mientras comandaba el 6° cuerpo R.O.K. del Ejército, el Gral. Choi tuvo bajo su control operativo a la 7ma. División de Infantería del Ejército Norteamericano, convirtiéndose así en el primer general de la historia de Corea en tener control militar sobre tropas extranjeras. Choi Hong Hi ha publicado una gran cantidad de libros sobre el Taekwon-do, comenzando con la primera edición de texto del Taekwon-do en 1958, un manual de Taekwon-do en 1965, una guía de Taekwon-do en 1972, y la Enciclopedia del Taekwon-do en 1985, consistente en 15 volúmenes con más de 30.000 fotografías e ilustraciones. El 15 de junio del año 2002, Choi Hong Hi fallece en la ciudad de Pyong Yang en Corea del Norte a causa del Cáncer
                        </p><br/>

                        <h1>TEORÍA DE CINTURÓN</h1>
    <h2>BLANCO PTA.AMARILLA</h2>
    <h3>DOCTRINAS DEL TAEKWON-DO</h3>
    <ul>
        <li>Cortesía</li>
        <li>Integridad</li>
        <li>Perseverancia</li>
        <li>Auto control</li>
        <li>Espíritu indomable</li>
    </ul>
    
    <h3>SIGNIFICADO DEL COLOR BLANCO DEL CINTURÓN</h3>
    <p>BLANCO: Representa la inocencia, debido a que el estudiante principiante no tiene conocimientos previos del TAEKWON-DO</p>
    
    <h3>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE CHON-JI</h3>
    <p>CHON-JI - 19 movimientos</p>
    <p>Significa literalmente "El Cielo - La Tierra". Esto es interpretado en Oriente como la creación del mundo o el principio de la historia de la Humanidad, por tal motivo este Tul es ejecutado por el principiante. El mismo consiste en dos partes similares: una representa el Cielo y la otra, la Tierra.</p>
    
    <h3>EXPLICACIÓN DE LAS POSICIONES DE PIERNA (SOGUI)</h3>
    <h4>CHARYOT SOGUI (Posición de atención)</h4>
    <p>Es la posición que se usa para saludar, por lo tanto es la primera que aprende el estudiante.</p>
    <p>Los pies forman un ángulo de 45° y al saludar se inclina el torso. Las rodillas van extendidas.</p>
    
    <h2>TEORÍA DE CINTURÓN AMARILLO</h2>
    <h3>JURAMENTOS DE LOS PRACTICANTES</h3>
    <ul>
        <li>Respetaré las doctrinas del TAEKWON-DO</li>
        <li>Respetaré al instructor</li>
        <li>Nunca abusaré del TAEKWON-DO</li>
        <li>Seré un campeón de la justicia y de la libertad</li>
        <li>Crearé un mundo de paz</li>
    </ul>
    
    <h3>SIGNIFICADO DEL COLOR AMARILLO DEL CINTURÓN</h3>
    <p>AMARILLO: Representa la tierra, en la que crece una planta que desarrolla sus raíces, como el cimiento del TAEKWON-DO es colocado en el estudiante.</p>
    
    <h3>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE DAN-GUN</h3>
    <p>DAN-GUN- 21 movimientos</p>
    <p>Significado: Es el nombre del Santo Dan-Gun, fundador legendario de Corea en el año 2333 A.C.</p>
    
    <h3>EXPLICACIÓN DE LAS POSICIONES DE PIERNA (SOGUI)</h3>
    <h4>NARANI SOGUI (Posición con pies paralelos)</h4>
    <p>Tiene un ancho de hombros de separación por el canto externo de los pies, que a su vez los mismos van paralelos. El peso del cuerpo se distribuye el 50 % en cada pierna. Se la utiliza para realizar posiciones frontales o laterales.</p>
    
    <h4>GUNNUN SOGUI (Posición para caminar)</h4>
    <p>Esta es una posición sólida tanto en defensa como en ataque. Tiene un ancho y medio de hombros de separación entre la punta de los dedos gordos de cada pie a lo largo y a una distancia lateral de ancho de hombros formada desde el centro del empeine de cada pie. La rodilla de atrás va extendida y la de adelante va flexionada formando una línea perpendicular con el talón. El peso del cuerpo se distribuye la mitad en cada pierna. El pie de atrás tiene una inclinación de 25° hacia afuera. Se utiliza con frente total o semi frontal. La posición será derecha o izquierda, según el pie avanzado.</p>

    <h1>TEORÍA DE CINTURÓN AMARILLO PUNTA VERDE</h1>
    <h2>INSTRUCTORES QUE INTRODUJERON EL TAEKWON-DO EN LA ARGENTINA</h2>
    <ul>
        <li>HAN CHANG KIM</li>
        <li>NAM SUN CHOI</li>
        <li>KWANG DUK CHUNG</li>
    </ul>
    <p>Todos de nacionalidad coreana.</p>
    
    <h2>CLASIFICACIÓN DE INSTRUCTORES</h2>
    <ul>
        <li>I, II y III DAN: Instructor Asistente (Boosabum)</li>
        <li>IV, V y VI DAN: Instructor (Sabum)</li>
        <li>VII y VIII DAN: Maestro (Sajium)</li>
        <li>IX DAN: Gran Maestro (Sasong)</li>
    </ul>
    <p>En todos los casos se utiliza la partícula Nim. Por ejemplo: Sabum Nim; se refiere a una forma tradicional oriental de respeto que debe mantener siempre el de menor grado hacia el de mayor grado.</p>
    
    <h2>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE DO-SAN</h2>
    <p>DO-SAN - 24 movimientos</p>
    <p>Significado: Es el seudónimo del patriota Ahn Chang-jo (1876-1938). Los 24 movimientos representan toda su vida, la cual dedicó al desarrollo de la educación de Corea y a su movimiento de independencia.</p>
    
    <h2>EXPLICACIÓN DE LAS POSICIONES DE PIERNA (SOGUI)</h2>
    <h3>NIUNJA SOGUI (posición en L)</h3>
    <p>Tiene un ancho y medio de hombros de separación en largo entre el canto externo del pie de atrás hasta la punta del dedo gordo del pie de adelante, que a su vez debe estar en línea recta con el talón del pie de atrás. La rodilla del pie de atrás cae perpendicularmente sobre el dedo gordo, mientras que la del pie de adelante cae sobre el talón. Siempre se la utiliza en posición semi frontal. Los pies van 15° hacia adentro. El peso del cuerpo se distribuye en un 70% sobre la pierna de atrás y un 30% sobre la de adelante.</p>
    
    <h3>ANNUN SOGUI (posición de jinete)</h3>
    <p>Tiene un ancho y medio de hombros de separación entre el canto interno de cada pie, los que a su vez van paralelos. Se utiliza con frente total o lateral. Las rodillas caen perpendicularmente sobre el dedo gordo de cada pie. La espalda debe estar erguida y la cintura curvada. El peso del cuerpo se distribuye mitad en cada pierna.</p>
    
    <h1>TEORÍA DE CINTURÓN VERDE</h1>
    <h2>FUNDACIÓN DEL TKD, LA I.T.F. Y LA INTRODUCCIÓN EN ARGENTINA</h2>
    <ul>
        <li>TKD SE FUNDO 11/04/1955</li>
        <li>I.T.F. SE FUNDÓ 22/03/1966</li>
        <li>ARGENTINA SE INTRODUJO 1967</li>
    </ul>
    
    <h2>¿QUÉ REPRESENTA EL COLOR DEL CINTURÓN VERDE?</h2>
    <p>VERDE: Representa el crecimiento de la planta, así como la destreza del TAEKWON-DO comienza a desarrollarse.</p>
    
    <h2>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE WON-HYO</h2>
    <p>WON-HYO - 28 movimientos</p>
    <p>Significado: Fue el notable monje que introdujo el budismo en la Dinastía Silla en el año 686 A.C.</p>
    <h1>TEORÍA DE CINTURÓN VERDE PUNTA AZUL</h1>

<h2>EXPLICACIÓN DEL SALUDO</h2>
<p>Se grita la palabra <strong>TAEKWON</strong> solamente cuando se saluda entre personas. Por ejemplo: alumno - instructor; alumno - alumno.</p>
<p><strong>CHARYOT</strong>: Atención, posición de saludo.</p>
<p><strong>KYONG YE</strong>: Saludo.</p>

<h3>Ejemplos de Saludo:</h3>
<ul>
    <li><strong>CHARYOT, KYONG YE:</strong> Atención, saludo.</li>
    <li><strong>CHARYOT, SABUM NIM KE, KYONG YE:</strong> Atención al instructor, saludo.</li>
</ul>

<p>Al saludar se inclina el torso 15º, se mantiene la vista al frente y la espalda erguida. Los talones deben estar juntos, mientras que las puntas de los pies van separadas formando un ángulo de 45º.</p>

<h2>DEBERES DEL ALUMNO</h2>
<ol>
    <li>Nunca te canses de aprender, un buen estudiante puede aprender en cualquier lugar y momento. Este es el secreto del conocimiento.</li>
    <li>Un buen estudiante debe estar deseoso de sacrificarse por su arte e Instructor. Muchos de ellos sienten que su entrenamiento es una mercancía comprada en cuotas y no están deseosos de participar en demostraciones, torneos, enseñar o trabajar alrededor del gimnasio, un Instructor debe forzarse para corregir este tipo de estudiante.</li>
    <li>Siempre sé un buen ejemplo para cinturones de menor graduación. Es natural que ellos intenten imitar a estudiantes más avanzados.</li>
    <li>Siempre sé leal y nunca critiques al instructor, al TAEKWON-DO o los métodos de enseñanza.</li>
    <li>Si un Instructor te enseña una técnica practícala e intenta utilizarla.</li>
    <li>Recuerda que la conducta del estudiante fuera del gimnasio refleja el arte y al Instructor.</li>
    <li>Si un estudiante adopta una técnica y el Instructor la desaprueba, el estudiante debe descartarla inmediatamente.</li>
    <li>Nunca seas irrespetuoso con tu Instructor. Pese a que un estudiante le esté permitido estar en desacuerdo, debe eventualmente seguir al instructor y posteriormente discutir ese tema.</li>
    <li>Un estudiante debe estar siempre ansioso por aprender y hacer preguntas.</li>
    <li>Nunca traiciones al Instructor.</li>
</ol>

<h2>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE YUL-GOK</h2>
<p><strong>YUL-GOK</strong> - 38 movimientos</p>
<p><strong>Significado:</strong> Es el seudónimo del gran filósofo y erudito de Corea YI I (1536-1584), llamado el "Confucio de Corea". Los 38 movimientos de este Tul se refieren a su lugar de nacimiento sobre el paralelo 38 y el diagrama representa "erudito".</p>

<h2>EXPLICACIÓN DE LA POSICIÓN DE PIERNA (SOGUI)</h2>
<h3>Kyocha Sogui (posición en X)</h3>
<p>A: El pie semi apoyado cruza por detrás cuando se salta cayendo en esta posición o desplaza con patadas laterales.</p>
<p>B: El pie semi apoyado cruza por adelante cuando se la utiliza con los ejercicios fundamentales de brazos o patadas.</p>
<p>Las rodillas van flexionadas y los pies paralelos en diagonal. Se la utiliza con frente total o semi frontal.</p>

<h2>TEORÍA DE CINTURÓN AZUL</h2>
<h3>RELACIÓN INSTRUCTOR-ALUMNO</h3>
<p>Hoy día en Corea, continúan utilizándose algunas de las antiguas enseñanzas de Confucio, que alcanzaron trascendencia tras su muerte. Una de ellas es el profundo respeto hacia el maestro. Resaltando esta doctrina con un proverbio coreano que dice "Padre y madre son aquellos que me crían; mientras que el maestro es aquel que me educa". Este es el motivo por el cual el alumno debe prestar tanta atención a sus padres como a su maestro.</p>
<p>Educar un niño para que se convierta en un hombre con fuertes principios éticos y morales, es la difícil tarea que ejerce el maestro, respetando el deseo de los padres.</p>
<p>Este mismo tipo de relación debe estar presente también en el TAEKWON-DO. La responsabilidad de la correcta enseñanza del arte recae en el instructor. El cual procurará educar a sus alumnos física y mentalmente fuertes, para que puedan contribuir con el prójimo y la sociedad.</p>

<h2>HISTORIA DEL TAEKWONDO</h2>
<p>Hace aproximadamente 1.300 años, durante el siglo VII, la península de Corea estuvo dividida en tres reinos: Silla, Koguryo y Baek Je. Silla el más pequeño de estos reinos, estuvo constantemente invadida y acosada por sus dos vecinos más poderosos del norte y del oeste.</p>
<p>Durante el reinado de Chin Heung, el vigésimo cuarto Rey de Silla, los jóvenes aristócratas y la clase guerrera, formaron una elite de cuerpo oficial llamado Hwa Rang Do. Este cuerpo guerrero, además de la práctica de lanza, arco, espada y gancho, también se entrenaba en las disciplinas físicas, mentales y variadas formas de lucha con pies y manos.</p>
<p>Para fortalecer sus cuerpos escalaban escarpadas montañas y nadaban ríos turbulentos en los meses más fríos. De esta manera se impulsaron sin piedad a prepararse para la tarea de defender su patria.</p>
<p>Los Hwa Rang Do se hicieron conocidos en la península por su coraje y destreza en la lucha, ganando el respeto de sus adversarios más grandes.</p>

<h2>¿QUÉ REPRESENTA EL COLOR DEL CINTURÓN AZUL?</h2>
<p><strong>AZUL:</strong> Representa el cielo, hacia el cual se dirige la plata que madura y se convierte en un árbol, a medida que progresa el entrenamiento en el TAEK WON-DO.</p>

<h2>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE JOONG-GUN</h2>
<p><strong>JOONG-GUN</strong> - 32 movimientos</p>
<p>Quien asesinó a Hiro Bumi Ho, el primer gobernador general japonés en Corea. También conocido por ser el hombre que desempeñó el papel principal en la fusión Coreo-japonesa. Los 32 movimientos representan la edad del Sr. Ahn cuando fue ejecutado en la prisión de Lui-Shung (1910).</p>

<h2>EXPLICACIÓN DE LA POSICIÓN DE PIERNA (SOGUI) PARA CINTURÓN AZUL</h2>
<h3>Dwibal Sogui (posición L corta)</h3>
<p>Tiene un ancho de hombros de separación entre el canto externo del pie de atrás hasta la punta del dedo gordo del pie de adelante. La rodilla del pie de atrás cae perpendicularmente flexionada sobre el del dedo gordo, mientras que el de adelante apoya el metatarso levemente. El pie de adelante tiene una inclinación de 25°, mientras que el de atrás lleva solamente 15°, ambos hacia adentro. Siempre se utiliza en posición semi frontal.</p>

<h3>Nachuo Sogui (posición para caminar baja)</h3>
<p>Se la utiliza con frente total o semi frontal. Sirve para controlar la distancia al atacar. El peso del cuerpo se distribuye mitad en cada pierna.</p>
<h1>TEORÍA DE CINTURÓN AZUL PUNTA ROJA</h1>

<h2>¿QUÉ ES EL TUL?</h2>
<p>La antigua ley en Oriente era similar a la ley de Hammurabi: "ojo por ojo, diente por diente". Ese era el motivo por el cual los estudiantes no tenían la posibilidad de ejercitarse en el arte del combate ya que cuando se llevaba a cabo, "era real". Hasta que un día un practicante creó algo similar a un tul y de esa manera se pudo ejercitar todo tipo de ataques y defensas sin ningún oponente (sin riesgos).</p>

<p>Entonces: "El Tul, consiste en una serie de ejercicios fundamentales que muchos de ellos representan técnicas estáticas y otros en movimiento, tanto en ataque como en defensa, armados con una secuencia fija y lógica." El estudiante trata con uno o diversos oponentes imaginarios, en distintas direcciones y situaciones, utilizando todo tipo de herramientas para el ataque o la defensa. Permite desarrollar técnicas de combate, moldear el cuerpo, controlar la respiración y crear movimientos armónicos y fluidos. También permite evaluar el poder y trabajar la destreza con características de belleza.</p>

<p>Al practicar un Tul se debe tener en cuenta las siguientes indicaciones:</p>
<ul>
    <li>A- Deben comenzar y terminar en el mismo lugar. Esto muestra la exactitud del estudiante.</li>
    <li>B- Se debe mantener la correcta postura y mirada en cada movimiento.</li>
    <li>C- Se deben tensar y relajar los músculos en el momento justo.</li>
    <li>D- Debe ser ejecutado rítmicamente, sin rigidez.</li>
    <li>E- Los movimientos deben ejecutarse acelerada o desaceleradamente, según se indique en el Tul.</li>
    <li>F- Se debe perfeccionar cada Tul antes de aprender el siguiente.</li>
    <li>G- Los estudiantes deben conocer el propósito de cada movimiento.</li>
    <li>H- Se deben ejecutar los movimientos con realismo.</li>
    <li>I- Las técnicas de ataque o defensa se deben repartir por igual entre las manos y los pies derechos e izquierdos.</li>
</ul>

<p>En TAEKWON-DO existen 24 TUL, que representan las 24 horas, un día, o toda la vida.</p>

<h2>¿QUÉ REPRESENTA EL COLOR BLANCO DEL TRAJE DO BOK?</h2>
<p>El color blanco del Do Bok representa la pureza del estudiante, debido a que no posee ningún conocimiento previo sobre el TAEKWON-DO. Comparándolo así con una hoja de papel en blanco, la cual el Instructor comenzará a escribir con las técnicas del TAEKWON-DO junto a los principios éticos y morales de este.</p>

<h2>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE TOI-GYE</h2>
<p>TOI-GYE - 37 movimientos. Significado: Es el pseudónimo del célebre erudito Yi Hwang (siglo XVI), una autoridad en el Confucionismo. Los 37 movimientos se refieren al lugar de nacimiento sobre el paralelo 37°, el diagrama significa "erudito".</p>

<h2>EXPLICACIÓN DE LA POSICIÓN DE PIERNA (SOGUI)</h2>
<p>MOA SOGUI (posición con pies juntos): Los pies van juntos. Las rodillas van extendidas. Se utiliza con frente total o lateral.</p>

<h1>TEORÍA DE CINTURÓN ROJO</h1>

<h2>¿QUÉ ES EL COMBATE? DISTINTOS TIPOS</h2>
<p>"El combate es la aplicación física de las técnicas de ataque y defensa que se obtienen de los modelos (TUL) y de los ejercicios fundamentales, contra uno o varios oponentes, en diversas situaciones y diferentes sentidos. Por lo tanto, no sólo es indispensable promover el espíritu de lucha y el coraje, sino también entrenar la vista, interpretar la táctica y la maniobra de los oponentes. Fraguar, endurecer o desarrollar las herramientas de ataque o de bloqueo también forman parte del entrenamiento, que a su vez nos sirve para probar nuestra propia capacidad."</p>

<p>En realidad, casi todos los estudiantes se hallan ansiosos de moverse en esta fase del aprendizaje. No sólo el entrenamiento se torna más interesante, sino que por primera vez el estudiante comienza a adquirir un grado de satisfacción a través de la aplicación de las técnicas. Por lo tanto, el instructor estimula al estudiante a que aprenda los ejercicios fundamentales, los modelos necesarios y las técnicas de combate antes de que participe de las clases de combate y especialmente de las competencias. Debido a que, si no ha consolidado una buena base, podría desarrollar malos hábitos que son muy difíciles de perder cuando un estudiante progresa.</p>

<h3>DISTINTOS TIPOS DE COMBATE</h3>

<h4>COMBATE A TRES PASOS (SAMBO MATSOGI)</h4>
<p>Este es el ejercicio básico de enfrentamiento para principiantes. Usualmente se lo utiliza entre 10° y 6° GUP. Este es un ejercicio para familiarizarse con las correctas técnicas de ataque y defensa, principalmente las de mano a las zonas media y alta. Sirve para desarrollar el balance de cuerpo, mejorar los desplazamientos y ajustar la distancia entre el ataque y la defensa.</p>

<ul>
    <li>1-Un sentido: El ataque es ejecutado cuando se avanza y el bloqueo cuando se retrocede. Puede ser ejecutado solo o con un compañero.</li>
    <li>2-Dos sentidos: Los ataques y las defensas son ejecutados en avance y retroceso. Ambas pueden ser ejecutadas a solas o con un compañero.</li>
</ul>

<h4>COMBATE DOS PASOS (IBO MATSOGI)</h4>
<p>El objetivo principal de este enfrentamiento es adquirir una técnica donde estén asociados el uso de manos y pies, puesto que el atacante debe utilizarlos de un modo alternativo. Sin embargo, es opcional para el atacante, utilizar primero la mano o el pie. Como el caso del enfrentamiento a tres pasos, existen dos métodos para su práctica.</p>

<ul>
    <li>1-El ataque se ejecuta únicamente cuando se avanza y la defensa cuando se retrocede.</li>
    <li>2-El ataque y la defensa se ejecutan avanzando o retrocediendo.</li>
</ul>

<h4>COMBATE A UN PASO (ILBO MATSOGI)</h4>
<p>Este enfrentamiento está considerado como el más importante desde el punto de vista que es el propósito último del Taekwon-do, en un combate real, es vencer con un solo golpe. Por esto, no es solamente un ejercicio para todos los niveles, sino también se puede utilizar en situaciones reales.</p>

<h2>¿QUÉ REPRESENTA EL COLOR DEL CINTURÓN ROJO?</h2>
<p>ROJO: Representa el peligro alertando al estudiante para que ejercite el control, y aconseje a sus adversarios a mantener distancia.</p>

<h2>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE HWA-RANG</h2>
<p>HWA-RANG - 29 movimientos. Significado: Es el nombre del grupo de jóvenes, que tiene su origen en la Dinastía Silla a principios del siglo VII. Los 29 movimientos se refieren a la división de infantería vigesimonovena (29°) donde el TAEKWON-DO fue desarrollado hasta su madurez.</p>

<h2>EXPLICACIÓN DE LA POSICIÓN DE PIERNA (SOGUI)</h2>
<p>SOOJIK SOGUI (posición L vertical o parada): Tiene un ancho de hombros de separación entre el canto interno del pie de atrás hasta la punta del dedo gordo del pie de adelante. Las rodillas van extendidas, y los pies 15° hacia adentro. Siempre se utiliza en posición semi-frontal. El peso del cuerpo se distribuye, 60% en la pierna de atrás y 40% en la de adelante.</p>

<h2>TEORÍA DE CINTURÓN ROJO PUNTA NEGRA</h2>
<h3>TEORÍA DEL PODER</h3>
<ol>
    <li><strong>I-Fuerza de Reacción:</strong>
        Según la Ley de Newton, cada fuerza aplicada sobre un cuerpo genera una fuerza de reacción de igual magnitud, pero de sentido opuesto. También llamamos fuerza de reacción a la obtenida, por ejemplo, al realizar un golpe de puño derecho, al mismo tiempo que se lleva con fuerza similar el puño izquierdo hacia la cadera.
    </li>
    <li><strong>II-Concentración:</strong>
        Al aplicar la fuerza de impacto sobre la menor superficie, se logra concentrar la fuerza y como consecuencia se incrementa su efecto (presión). Otro aspecto importante de la concentración es el de liberar la fuerza principalmente en el momento del impacto y no al comienzo. Cuanto más corto es el tiempo de concentración, más fuerte es el impacto.
    </li>
    <li><strong>III -Equilibrio:</strong>
        Siempre se mantiene el cuerpo en equilibrio. Las posturas deben ser estables y flexibles. El equilibrio puede ser de estabilidad estática o dinámica.
    </li>
    <li><strong>IV-Control de la Respiración:</strong>
        Una respiración controlada actúa sobre la resistencia y la velocidad, pero principalmente puede controlar el cuerpo al recibir un impacto e incrementar el poder cuando un golpe va dirigido hacia el adversario.
    </li>
    <li><strong>V-Masa:</strong>
        Matemáticamente el máximo de energía cinética se obtiene al multiplicar el peso del cuerpo por la velocidad máxima. Por eso es muy importante incrementar el peso del cuerpo al ejecutar un golpe. Esto se produce por medio de la rotación de la cadera o por la elevación de esta durante la ejecución del movimiento y bajando en el momento del impacto (movimiento ondulatorio).
    </li>
    <li><strong>VI- Velocidad:</strong>
        Este es el factor más importante de la potencia. Científicamente la potencia es igual a masa por aceleración (F=M x A) o (P=M x V<sup>2</sup>). Como se aprecia en la fórmula de la potencia, la velocidad se encuentra elevada al cuadrado, por lo tanto, es el factor más influyente en el resultado.
    </li>
</ol>

<h3>LOS SECRETOS DEL ENTRENAMIENTO</h3>
<p>
    Un antiguo proverbio dice que aun el cielo no puede empobrecer al obrero diligente. Sin embargo, en Taekwon-Do, la diligencia o el entrenamiento intensivo solo, no producen técnicas de calidad. Por el contrario, enseñanzas que provengan de un instructor falso o "no calificado" pueden ser peores que no aprender nada. En efecto, los movimientos que no son científicos no solamente reducen la potencia, sino también necesitan una gran cantidad de tiempo para ser corregidos. Por otro lado, bajo la guía correcta de un instructor competente un estudiante que se entrena honradamente, con devoción, aprenderá las verdaderas técnicas del Taekwon-Do en un período de tiempo reducido y realizando menos esfuerzos.
</p>

<h4>Los estudiantes deben guardar claramente en su mente los secretos siguientes:</h4>
<ol>
    <li>Estudiar la teoría del poder a fondo.</li>
    <li>Comprender el objetivo de cada movimiento claramente.</li>
    <li>Realizar el movimiento de los ojos, de las manos, de los pies y la respiración en una acción coordinada única.</li>
    <li>Elegir sus armas de ataque de modo apropiado para cada punto vital.</li>
    <li>Familiarizarse con el ángulo y la distancia correcta en ataque o defensa.</li>
    <li>Mantener los brazos y las piernas ligeramente flexionadas al realizar el movimiento.</li>
    <li>Cada movimiento debe empezar con una acción hacia atrás, con pocas excepciones. Sin embargo, una vez que el movimiento ha empezado, no debe pararse antes de haber alcanzado el blanco.</li>
    <li>Crear un movimiento ondulante, utilizando correctamente las rodillas para eso.</li>
    <li>Exhalar corta y bruscamente en el momento de cada golpe, salvo en caso de movimiento conectado.</li>
</ol>

<h3>CICLO DE COMPOSICIÓN DEL TAEKWON-DO</h3>
<p>
    El Tae Kwon-Do se compone de 5 fases:
    <ul>
        <li>Movimientos fundamentales</li>
        <li>Forma</li>
        <li>Práctica con accesorios</li>
        <li>Ejercicios de combate</li>
        <li>Defensa personal</li>
    </ul>
    Es imposible separar estas fases, ya que todas componen un ciclo, donde cada una de ellas es imprescindible para el desarrollo de la otra. Así, por ejemplo, los movimientos fundamentales se necesitan para el combate y las formas y coincidentemente, el combate y la forma son necesarios para perfeccionar los movimientos fundamentales.
</p>
<p>
    Es por ello, que en la ilustración no se pueden distinguir el principio y el fin del ciclo. El estudiante deberá retomar cada uno de los movimientos fundamentales para perfeccionar sus técnicas avanzadas de combate y defensa personal. Los movimientos fundamentales practicados exhaustivamente, permiten desarrollar habilidad de manera que el alumno pueda enfrentar situaciones de combate real con confianza.
</p>
<p>
    Las formas lo colocan en una situación hipotética, donde debe poder defenderse, contraatacar y atacar frente a varios oponentes. Luego de la práctica de los movimientos fundamentales y las formas, se debe aplicar la pericia obtenida en el combate contra oponentes reales. Paralelamente, el alumno debe desarrollar su cuerpo, endurecer las herramientas de ataque y defensa, para obtener máximo poder y provocar la concentración contra ataques espontáneos, es decir: situaciones donde aplicar la defensa personal.
</p>
<p>
    Sin embargo, siempre ha de volverse a los movimientos básicos aun cuando se haya desarrollado una alta capacitación en defensa personal.
</p>

<h3>¿QUÉ REPRESENTA EL COLOR DEL CINTURÓN NEGRO?</h3>
<p>
    <strong>NEGRO:</strong> Representa el contrario del blanco, es decir, la madurez y el conocimiento del Taekwon-do. Indica también la imprevisibilidad de la oscuridad y el miedo.
</p>

<h3>SIGNIFICADO Y CANTIDAD DE MOVIMIENTOS DE CHOONG-MOO</h3>
<p>
    <strong>CHOONG-MOO - 30 movimientos</strong>
</p>
<p>
    <strong>Significado:</strong> Fue el nombre dado al Gran Almirante Yi Soon-Sin de la Dinastía Lee. Tuvo notoriedad por haber inventado el primer barco de guerra armado (kobukson) en 1592; que fue, según se dice el precursor de los submarinos modernos. La razón por la cual este Tul termina con el ataque de la mano izquierda es que simbolizan su muerte lamentable, sin tener oportunidad de poder demostrar su potencial por causa de su forzada restricción, debida a su lealtad al Rey.
</p>

               
                    </div>                   
                </div>
            <Footer/>
        </div>
    )
}

export default Manual