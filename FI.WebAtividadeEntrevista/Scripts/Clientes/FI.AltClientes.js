$(document).ready(function () {

    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
        $('#formCadastro #CPF').val(obj.CPF);
    }

    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: urlAlterarCliente,
            method: "POST",
            dataType: "json",
            data: {
                "Id": obj ? obj.Id : null,
                "Nome": $(this).find("#Nome").val(),
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
            success: function (r) {
                ModalDialog("Sucesso!", r.message || r, function () {
                    window.location.href = urlRetorno;
                });
            },
            error: function (r) {
                let msg = r.responseJSON && r.responseJSON.message
                    ? r.responseJSON.message
                    : "Ocorreu um erro.";
                ModalDialog("Ocorreu um erro", msg);
            }
        });
    });
});

function ModalDialog(titulo, mensagem, callback) {
    var random = Math.random().toString().replace('.', '');
    var html = '<div id="' + random + '" class="modal fade">' +
        '  <div class="modal-dialog">' +
        '    <div class="modal-content">' +
        '      <div class="modal-header">' +
        '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
        '        <h4 class="modal-title">' + titulo + '</h4>' +
        '      </div>' +
        '      <div class="modal-body"><p>' + mensagem + '</p></div>' +
        '      <div class="modal-footer">' +
        '        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    $('body').append(html);

    $('#' + random).modal('show');

    if (callback) {
        $('#' + random).on('hidden.bs.modal', function () {
            callback();
            $('#' + random).remove();
        });
    }
}

function formatCPF(input) {
    var digitsOnly = input.value.replace(/\D/g, '');
    if (digitsOnly.length !== 11 || /^(\d)\1{10}$/.test(digitsOnly)) {
        alert("CPF inválido!");
        return;
    }
    input.value = digitsOnly.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

//$(document).on("click", "#excBenef", function () {
//    var row = $(this).closest("tr");
//    var cpf = row.find("td:eq(0)").text();

//    $.ajax({
//        url: urlExcluirBenef,
//        type: "POST",
//        dataType: "json",
//        data: {
//            "CPF": cpf
//        },
//        success: function (data) {
//            if (data.success) {
//                row.remove();
//            } else {
//                alert(data.message || "Erro ao excluir beneficiário.");
//            }
//        },
//        error: function () {
//            alert("Erro ao excluir beneficiário.");
//        }
//    });
//});

function formatCEP(input) {
    var value = input.value.replace(/\D/g, '').padStart(8, '0');
    var formattedCEP = value.replace(/(\d{5})(\d{3})/, "$1-$2");
    if (formattedCEP === "00000-000") {
        alert("Por favor, insira um CEP válido");
    } else {
        input.value = formattedCEP;
    }
}

function formatTel(input) {
    var valorCampo = input.value.replace(/\D/g, '');
    if (valorCampo.length === 10) {
        input.value = valorCampo.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else if (valorCampo.length === 11) {
        input.value = valorCampo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else {
        alert("Telefone inválido. Insira um telefone válido.");
    }
}