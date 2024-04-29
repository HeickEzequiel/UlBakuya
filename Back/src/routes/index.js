const router = require ("express").Router();

const getAllAlumnos = require("../controllers/Alumno/getAllAlumnos.js")
const getAllProfesor = require("../controllers/Profesor/getAllProfesor.js")
const getAlumno = require("../controllers/Alumno/getAlumno.js")
const getAlumnoByName = require("../controllers/Alumno/getAlumnoByName.js")
const getProfesor = require("../controllers/Profesor/getProfesor.js")
const getProfesorByName = require("../controllers/Profesor/getProfesorByName.js")
const login = require("../controllers/Users/login.js")
const postAlumno = require("../controllers/Alumno/postAlumno.js")
const postProfesor = require("../controllers/Profesor/postProfesor.js")
const postUser = require("../controllers/Users/postUser.js")
const updateAlumno = require("../controllers/Alumno/updateAlumno.js");


router.get("/alumnos", getAllAlumnos)
router.get("/profesores", getAllProfesor)
router.get("/alumno/:id", getAlumno)
router.get("/alumno", getAlumnoByName)
router.get("/profesor/:id", getProfesor)
router.get("/profesor", getProfesorByName)
router.post("/", login)
router.post("/newalumno", postAlumno)
router.post("/newprofesor", postProfesor)
router.post("/newuser", postUser)
router.put("/updatealumno/:id",updateAlumno)

module.exports = router;