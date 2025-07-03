const { Alumno, Profesor, Escuela} = require("../../db.js");


const postAlumno = async(req, res) =>{
    try{
        const {
            nombre,
            apellido,
            imagen,
            fecha_de_nacimiento,
            escuela,
            graduacion,
            fecha_de_examen,
            profesor,
            estado,
            eliminado
        } = req.body;

        console.log("BODY RECIBIDO:", req.body);

        if(nombre && apellido  && fecha_de_nacimiento && escuela && graduacion && profesor){
            const [newAlumno, created] = await Alumno.findOrCreate({
                where:{
                    nombre,
                    apellido,
                    fecha_de_nacimiento
                },
                defaults:{    
                    imagen,
                    escuela,
                    graduacion,
                    fecha_de_examen,
                    profesor,
                    estado,
                    eliminado
                }

            })

            
      console.log("ALUMNO CREADO:", newAlumno.id);

            const profesoresDB = await Profesor.findAll({
                where: {
                    id: Array.isArray(profesor) ? profesor : [profesor]
                }
            });
            await newAlumno.setAlumnosProfesores(profesoresDB)

  console.log("PROFESORES ENCONTRADOS:", profesoresDB.map(p => p.id));


            const escuelasDB = await Escuela.findAll({
                where: {
                    id: Array.isArray(escuela) ? escuela : [escuela]
                }
            })
            await newAlumno.setAlumnosEscuela(escuelasDB)

             console.log("ESCUELAS ENCONTRADAS:", escuelasDB.map(e => e.id));

            return res.status(200).json({
                alumno: newAlumno,
                profesor: profesoresDB,
                escuela: escuelasDB
            })

        }
        return res.status(400).send("Datos incorrectos")
    }catch (error){
        console.error("ERROR EN POST ALUMNO:", error);
        return res.status(500).send(error.message)
    }
}
module.exports = postAlumno