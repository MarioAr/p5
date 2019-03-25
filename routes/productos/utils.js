const error = { error: "Error en parametros" }
module.exports.getId = (req, res, next) => {
    let { id } = req.params;
    if (Number(id)) {
        req.id = id;
        next();
        return;
    }

    res.json(error);
}

module.exports.post = (req, res, next) => {
    let { name, price } = req.body;
    if (name && price) {
        
        next();
        return;
    }

    res.json(error);
}