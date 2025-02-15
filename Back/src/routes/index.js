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
router.delete("/logicdeleteprofesor/:id", logicDeleteProfesor)

const logicRestoreProfesor = require("../controllers/Profesor/logicRestoreProfesor.js")
router.delete("/logicrestoreprofesor/:id", logicRestoreProfesor)

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

//Escuelas

const getAllEscuelas = require("../controllers/Escuelas/getAllEscuelas.js")
router.get("/escuelas", getAllEscuelas)

const getEscuela = require("../controllers/Escuelas/getEscuela.js")
router.get("/escuela/:id", getDojan)

const getEscuelaByName = require("../controllers/Escuelas/getEscuelaByName.js")
router.get("/escuela", getEscuelaByName)

const postEscuela = require("../controllers/Escuelas/postEscuela.js")
router.post("/newescuela", postEscuela)

const updateEscuela = require("../controllers/Escuelas/updateEscuela.js");
router.put("/updateescuela/:id",updateEscuela);

const deleteEscuela = require("../controllers/Escuelas/deleteEscuelas.js")
router.delete("/deleteescuela/:id", deleteEscuela)

const logicDeleteEscuela = require("../controllers/Escuelas/logicDeleteEscuelas.js")
router.delete("/logicdeleteescuela/:id", logicDeleteEscuela)

const logicRestoreEscuela = require("../controllers/Escuelas/logicRestoreEscuelas.js")
router.delete("/logicrestorescuela/:id", logicRestoreEscuela)



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
router.delete("/logicdeleteuser/:id", logicDeleteUser)

const logicRestoreUser = require("../controllers/Users/logicRestoreUser.js")
router.delete("/logicrestoreuser/:id", logicRestoreUser)



module.exports = router;