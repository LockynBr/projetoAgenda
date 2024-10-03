exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

// Faz a verificação do token
exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('error404');
    }

    next();
};

// Cria um token e armazena para depois fazer a verificação
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
