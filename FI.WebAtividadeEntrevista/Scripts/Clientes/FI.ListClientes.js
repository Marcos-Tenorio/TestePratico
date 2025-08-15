
$(document).ready(function () {

    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable({
            title: 'Clientes',
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlClienteList,
            },
            fields: {
                Nome: {
                    title: 'Nome',
                    width: '50%'
                },
                Email: {
                    title: 'Email',
                    width: '35%'
                },
                Alterar: {
                    title: '',
                    display: function (data) {
                        return '<button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                    }
                },
                Excluir: {
                    title: '',
                    display: function (data) {
                        return '<button onclick="excluirCliente(' + data.record.Id + ')" class="btn btn-danger btn-sm">Excluir</button>';
                    }
                }
            }
        });

    //Load student list from server
    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable('load');
})

 function excluirCliente(id) {
     if (confirm("Tem certeza que deseja excluir este cliente?")) {
        $.ajax({
            url: urlExcluirCliente,
            type: 'POST',
            data: { id: id },
            success: function (resposta) {
                if (resposta.Result === "OK") {
                    $('#gridClientes').jtable('reload');
                } else {
                    alert("Erro: " + resposta.Message);
                }
            },
            error: function (xhr) {
                alert("Erro ao tentar excluir: " + xhr.status + " - " + xhr.statusText);
            }
        });
    }
}
