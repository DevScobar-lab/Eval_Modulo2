

$(document).ready(function() {
    let intereses = [];

    $(".btn-primary").click(function(e) {
        e.preventDefault();
        let interes = $(this).closest('.card').find('.card-title').text();

        // Guarda el interés como string en el arreglo
        intereses.push(interes);
        alert(`Has mostrado interés por: ${interes}`);
    });

    $("#verIntereses").click(function() {
        if (intereses.length > 0) {
            // Une los elementos del arreglo directamente
            const cadena = intereses.join(", ");
            alert(`Has mostrado interés por: ${cadena}`);
        } else {
            alert('No se mostró ningún interés (qué pena :( )');
        }
    });

    $(".nav-item a").mouseenter(function(){
        $(this).css('color', '#Ffff00');
        $(this).css({'text-shadow': '0 0 10px 5px rgba(0, 0, 255, 0.5)'});
    });

    $(".nav-item a").mouseleave(function(){
        $(this).css('color', '#FFFFFF');
    });

    $("#formContacto").click(function(){
        $("#contactModal").modal('show')
    });


    $(".close").click(function(){
        $("#contactModal").modal('hide');
    });

    $("#btnCerrar").click(function(){
        $("#contactModal").modal('hide');
    });



    $("#contactModal").submit(function(event) {


            $("#contactModal").modal('hide');
            alert("Formulario enviado correctamente");
             // Ocultar el modal si todo es válido

    });
});
