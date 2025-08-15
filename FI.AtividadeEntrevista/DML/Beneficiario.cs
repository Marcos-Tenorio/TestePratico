using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.DML
{
    public class Beneficiario
    {
        public long Id { get; set; }

        public string CPF { get; set; }

        public string Nome { get; set; }

        public long IDCLIENTE { get; set; }


        public Beneficiario(int IdCliente)
        {
            IDCLIENTE = IdCliente;
        }

        public Beneficiario()
        { }

    }
}
