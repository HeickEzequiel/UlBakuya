const router = require ("express").Router();

//Alumno
const getAllAlumnos = require("../controllers/Alumno/getAllAlumnos.js")
router.get("/alumnos", getAllAlumnos)

const getAlumno = require("../controllers/Alumno/getAlumno.js")
router.get("/alumno/:id", getAlumno)

const getAlumnoByName = require("../controllers/Alumno/getAlumnoByName.js")
router.get("/alumno", getAlumnoByName)

const postAlumno = require("../controllers/Alumno/postAlumno.js")
router.post("/newalumno", postAlumno)

const updateAlumno = require("../controllers/Alumno/updateAlumno.js");
router.put("/updatealumno/:id",updateAlumno)

const deleteAlumno = require("../controllers/Alumno/deleteAlumno.js")
router.delete("/deletealumno/:id", deleteAlumno)

const logicDeleteAlumno = require("../controllers/Alumno/logicDeleteAlumno.js")
router.get("/logicdeletealumno/:id", logicDeleteAlumno)

const logicRestoreAlumno = require("../controllers/Alumno/logicRestoreAlumno.js")
router.get("/logicrestorealumno/:id", logicRestoreAlumno)


//Profesor
const getAllProfesor = require("../controllers/Profesor/getAllProfesor.js")
router.get("/profesores", getAllProfesor)

const getProfesor = require("../controllers/Profesor/getProfesor.js")
router.get("/profesor/:id", getProfesor)

const getProfesorByName = require("../controllers/Profesor/getProfesorByName.js")
router.get("/profesor", getProfesorByName)

const postProfesor = require("../controllers/Profesor/postProfesor.js")
router.post("/newprofesor", postProfesor)

const updateProfesor = require("../controllers/Profesor/updateProfesor.js");
router.put("/updateprofesor/:id", updateProfesor);

const deleteProfesor = require("../controllers/Profesor/deteteProfesor.js")
router.delete("/deleteprofesor/:id", deleteProfesor)

const logicDeleteProfesor = require("../controllers/Profesor/logicDeleteProfesor.js")
router.get("/logicdeleteprofesor/:id", logicDeleteProfesor)

const logicRestoreProfesor = require("../controllers/Profesor/logicRestoreProfesor.js")
router.get("/logicrestoreprofesor/:id", logicRestoreProfesor)

//Dojan

const getAllDojan = require("../controllers/Dojan/getAllDojan.js")
router.get("/dojanes", getAllDojan)

const getDojan = require("../controllers/Dojan/getDojan.js")
router.get("/dojan/:id", getDojan)

const getDojanByName = require("../controllers/Dojan/getDojanByName.js")
router.get("/dojan", getDojanByName)

const postDojan = require("../controllers/Dojan/postDojan.js")
router.post("/newdojan", postDojan)

const updateDojan = require("../controllers/Dojan/updateDojan.js");
router.put("/updatedojan/:id",updateDojan);

const deleteDojan = require("../controllers/Dojan/deleteDojan.js")
router.post("/deletedojan/:id", deleteDojan)

const logicDeleteDojan = require("../controllers/Dojan/logicDeleteDojan.js")
router.get("/logicdeletedojan/:id", logicDeleteDojan)

const logicRestoreDojan = require("../controllers/Dojan/logicRestoreDojan.js")
router.get("/logicretoredojan/:id", logicRestoreDojan)

//Escuelas

const getAllEscuelas = require("../controllers/Escuelas/getAllEscuelas.js")
router.get("/escuelas", getAllEscuelas)

const getEscuela = require("../controllers/Escuelas/getEscuela.js")
router.get("/escuela/:id", getEscuela)

const getEscuelaByName = require("../controllers/Escuelas/getEscuelaByName.js")
router.get("/escuela", getEscuelaByName)

const postEscuela = require("../controllers/Escuelas/postEscuela.js")
router.post("/newescuela", postEscuela)

const updateEscuela = require("../controllers/Escuelas/updateEscuela.js");
router.put("/updateescuela/:id",updateEscuela);

const deleteEscuela = require("../controllers/Escuelas/deleteEscuelas.js")
router.delete("/deleteescuela/:id", deleteEscuela)

const logicDeleteEscuela = require("../controllers/Escuelas/logicDeleteEscuelas.js")
router.get("/logicdeleteescuela/:id", logicDeleteEscuela)

const logicRestoreEscuela = require("../controllers/Escuelas/logicRestoreEscuelas.js")
router.get("/logicrestorescuela/:id", logicRestoreEscuela)


//Usuario
const login = require("../controllers/Users/login.js")
router.post("/login", login)

const postUser = require("../controllers/Users/postUser.js")
router.post("/newuser", postUser)

const getAllUsers = require("../controllers/Users/getAllUsers.js")
router.get("/users", getAllUsers)

const getUser = require("../controllers/Users/getUser.js")
router.get("/user/:id", getUser)

const getUserByName = require("../controllers/Users/getUserByName.js")
router.get("/user", getUserByName)

const updateUser = require("../controllers/Users/updateUser.js")
router.put("/updateuser/:id", updateUser)

const deleteUser = require("../controllers/Users/deleteUser.js")
router.delete("/deleteuser/:id", deleteUser)

const logicDeleteUser = require("../controllers/Users/logicDeleteUser.js")
router.get("/logicdeleteuser/:id", logicDeleteUser)

const logicRestoreUser = require("../controllers/Users/logicRestoreUser.js")
router.get("/logicrestoreuser/:id", logicRestoreUser)


// Inscripciones

const getAllInscripciones= require("../controllers/Inscripciones/getAllIncripciones.js")
router.get("/inscripciones", getAllInscripciones)

const getInscripcion = require("../controllers/Inscripciones/getInscripcion.js")
router.get("/inscripcion/:id", getInscripcion)

const getInscripcionByName = require("../controllers/Inscripciones/getInscripcionByName.js")
router.get("/inscripcion", getInscripcionByName)

const postInscripcion = require("../controllers/Inscripciones/postInscripcion.js")
router.post("/newinscripcion", postInscripcion)

const updateInscripcion = require("../controllers/Inscripciones/updateInscripcion.js");
router.put("/updateinscripcion/:id",updateInscripcion);

const deleteInscripcion = require("../controllers/Inscripciones/deleteIncripciones.js")
router.delete("/deleteinscripcion/:id", deleteInscripcion)

const logicDeleteInscripcion = require("../controllers/Inscripciones/logicDeleteInscripcion.js")
router.get("/logicdeleteinscripcion/:id", logicDeleteInscripcion)

const logicRestoreInscripcion = require("../controllers/Inscripciones/logicRestoreInscripcion.js");
router.get("/logicrestoreinscripcion/:id", logicRestoreInscripcion)

//Eventos

const getAllEventos = require("../controllers/Eventos/getAllEventos.js")
router.get("/eventos", getAllEventos)

const getEvento = require("../controllers/Eventos/getEvento.js")
router.get("/evento/:id", getEvento)

const getEventoByName = require("../controllers/Eventos/getEventoByName.js")
router.get("/evento",getEventoByName)

const postEvento = require("../controllers/Eventos/postEvento.js")
router.post("/newevento", postEvento)

const updateEvento = require("../controllers/Eventos/updateEvento.js")
router.put("/updateevento/:id", updateEvento)

const deleteEventos = require("../controllers/Eventos/deleteEventos.js");
router.delete("/deleteevento/:id", deleteEventos)

const logicDeleteEventos = require("../controllers/Eventos/logicDeleteEventos.js")
router.get("/logicdeleteevento/:id", logicDeleteEventos)

const logicRestoreEventos = require("../controllers/Eventos/logicRestoreEventos.js")
router.get("/logicrestoreevento/:id", logicRestoreEventos)




module.exports = router;