
$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val(),
                "CPF": $(this).find("#CPF").val()
            },
            error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();
                $("tbody").empty();
               
            }
        });
    })
})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}

function formatCPF(input) {
    var value = input.value;

    var digitsOnly = value.replace(/\D/g, '');

    if (digitsOnly.length !== 11) {
        alert("CPF inválido! Deve conter 11 dígitos.");
        input.value = '';
        return;
    }

    if (/^(\d)\1{10}$/.test(digitsOnly)) {
        alert("CPF inválido!");
        input.value = '';
        return;
    }

    var formattedCPF = digitsOnly.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    input.value = formattedCPF;
}

function formatCEP(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = value.padStart(8, '0');
    var formattedCEP = formattedValue.replace(/(\d{5})(\d{3})/, "$1-$2");
    if (formattedCEP === "00000-000") {
        alert("Por favor, insira um CEP valido");

    }
    else {
        input.value = formattedCEP;
    }
}

function formatTel(input) {
    var valorCampo = input.value;
    if (valorCampo.length === 10) {
        input.value = valorCampo.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    else if (valorCampo.length === 11) {
        input.value = valorCampo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
}

$(document).ready(function () {
    $("#CPF").blur(function () { 
        var cpf = $(this).val();
        if (cpf) {
            $.ajax({
                url: '@Url.Action("ValidaCPFClienteExis","Cliente")',
                type: 'GET',
                data: { cpf: cpf },
                success: function (disponivel) {
                    if (!disponivel) {
                        $("#cpfMsg").text("Este CPF já está cadastrado!");
                    } else {
                        $("#cpfMsg").text("");
                    }
                }
            });
        }
    });

    $("#formCliente").submit(function (e) {
        if ($("#cpfMsg").text() !== "") {
            e.preventDefault(); 
            alert("Corrija o CPF antes de salvar.");
        }
    });
});

