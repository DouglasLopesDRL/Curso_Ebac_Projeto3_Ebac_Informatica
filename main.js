$(document).ready(function(){
    
    $('#telefone').mask("(00) 00000-0000", {
        placeholder: "Insira seu telefone...(00) 00000-0000"
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        submitHandler: function (form) {
            form.reset();
        },
        invalidHandler: function (event, validator) {
            if(validator.numberOfInvalids()){
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        }
    });
});