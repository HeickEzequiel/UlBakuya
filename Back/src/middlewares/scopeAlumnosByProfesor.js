function scopeAlumnosByProfesor(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ error: "No autorizado" });
    }

    const { nivel, idProfesor } = req.user;

    if(nivel === 'Instructor mayor' || nivel === 'Instructor menor'){
        if(!idProfesor){
            return res.status(400).json({error: 'Este usuario no está vinculado a un profesor'})
        }
        req.alumnosWhere = { profeId: idProfesor }
    } else {
        req.alumnosWhere = {}
    }

    next()
}

module.exports = scopeAlumnosByProfesor