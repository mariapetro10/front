$(document).ready(function () {
    estadoInicial()
});

/**
 * Autentica al usuario en la aplicaciòn
 */
function registrar() {
    let name = $("#username").val()
    let email = $("#useremail").val()
    let password = $("#password").val()
    let repeatpassword = $("#passwordrepeat").val()

    let datos = {
        name: $("#username").val(),
        password: $("#password").val(),
        email: $("#useremail").val()
    }


    let datosPeticion = JSON.stringify(datos)

    $.ajax({
        url: "http://144.22.232.117:80/api/user/new",
        data: datosPeticion,
        type: 'POST',
        contentType: "application/JSON",
        dataType: 'json',
        success: function (respuesta) {
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
        $("#mensaje").html("No fue posible crear la cuenta");
    } else
        $("#mensaje").html("Cuenta creada de forma correcta")
    $("#mensaje").show()


}

function estadoInicial() {
    $("#username").focus()
    $("#usermensaje").hide()
}

