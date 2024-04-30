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

//Usuario
const login = require("../controllers/Users/login.js")
router.post("/", login)

const postUser = require("../controllers/Users/postUser.js")
router.post("/newuser", postUser)



module.exports = router;