exports.home = {
    method: 'GET',
    path: '/',
    onRequest: (request, response) => {
        response.redirect("/assets/");
    }
}

exports.fsw = {
    method: 'GET',
    path: '/firebase-messaging-sw.js',
    onRequest: (request, response) => {
        response.redirect("/assets/firebase-messaging-sw.js");
    }
}


