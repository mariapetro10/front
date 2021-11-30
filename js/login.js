$(document).ready(function () {
    estadoInicial()
});

/**
 * Intenta autenticar al usuario en la aplicaciòn
 */
function login() {
    //capturar los datos del usuario
    let email = $("#useremail").val()
    let password = $("#password").val()

    $.ajax({
        url: "http://144.22.232.117:80/api/user/" + email + "/" + password,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            resultado(respuesta)
        },
        error: function (xhr, status) {
            console.log("algo fallo");
        },
        complete: function (xhr, status) {
            console.log("Todo super bien" + status);
        }
    });
}

function resultado(respuesta) {
    let id = respuesta.id
    let nombre = respuesta.name

    if (id == null) {
        $("#mensaje").html("No existe usuario");
    } else
        $("#mensaje").html("Bienvenido!!  " + " " + nombre)
    $("#mensaje").show()


}

function estadoInicial() {
    $("#useremail").focus()
    $("#usermensaje").hide()
}