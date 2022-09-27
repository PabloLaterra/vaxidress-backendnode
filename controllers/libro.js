exports.getLibros = (req, res, next) =>{
    res.status(200).json({
        status: 200,
        mensaje: 'se proceso correctamente'
    })
}

exports.getLibro = (req, res, next) =>{
    res.status(200).json({
        status: 200,
        mensaje: 'se devuelve el libro por id'
    })
}

exports.crearLibro = (req, res, next) =>{
    res.status(200).json({
        status: 200,
        mensaje: 'se ha creado el libro correctamente'
    })
}

exports.actualizarLibro = (req, res, next) =>{
    res.status(200).json({
        status: 200,
        mensaje: 'se actualizo el libro correctamente'
    })
}

exports.eliminarLibro = (req, res, next) =>{
    res.status(200).json({
        status: 200,
        mensaje: 'se elimino el libro correctamente'
    })
}
