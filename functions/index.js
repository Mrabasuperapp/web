

exports.home = {
    method: 'GET',
    path: '/',
    onRequest: (request, response) => {
        response.redirect("/assets/");
    }
}

// exports.homeGuard = {
//     path: '/',
//     onGuard: (request, response, next) => {
//         response.redirect("/assets/");
//     }
// }
