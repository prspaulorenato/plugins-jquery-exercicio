$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: false,
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength:9
            },
            cpf: {
                required: true,
                minlength: 11
            },
        },

        messages: {
            nome: 'Por favor, insira o seu nome',
            email: '*Insira seu e-mail',
            telefone: '*Insira seu telefone',
            endereco: 'Insira o seu endereço',
            cep: 'Insira o seu cep',
            cpf: 'Insira um cpf válido'
        },
        submitHandler: function (form) {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Formulário enviado!',
                confirmButtonText: 'Ok'
            })
            form.reset();
        },
        invalidHandler: function (evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
                if (camposIncorretos) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: `${camposIncorretos} campos incorretos!`,
                        confirmButtonText: 'Ok'
                    });
                }
        }
    })

})





