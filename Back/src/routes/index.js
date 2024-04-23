const router = require ("express").Router();

const getAllAlumnos = require("../controllers/getAllAlumnos.js")
const getAllProfesor = require("../controllers/getAllProfesor.js")
const getAlumno = require("../controllers/getAlumno.js")
const getAlumnoByName = require("../controllers/getAlumnoByName.js")
const getProfesor = require("../controllers/getProfesor.js")
const getProfesorByName = require("../controllers/getProfesorByName.js")
const login = require("../controllers/login.js")
const postAlumno = require("../controllers/postAlumno.js")
const postProfesor = require("../controllers/postProfesor.js")
const postUser = require("../controllers/postUser.js")

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

module.exports = router;