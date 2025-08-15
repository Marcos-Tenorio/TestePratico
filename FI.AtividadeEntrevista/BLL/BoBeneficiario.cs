using FI.AtividadeEntrevista.DAL.Beneficiarios;
using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class BoBeneficiario
    {

        /// <summary>
        /// Incluir beneficiario
        /// </summary>
        /// <param name="benef">Recebe objeto Beneficiario</param>
        public void Incluir(Beneficiario benef)
        {
            DaoBeneficiario benefCliente = new DaoBeneficiario();

            benefCliente.Incluir(benef);

        }

        /// <summary>
        /// Consultar beneficiarios
        /// </summary>
        /// <param name="idCliente">Recebe ID do cliente</param>
        /// <returns></returns>
        public List<Beneficiario> Consultar(long idCliente)
        {
            DaoBeneficiario benefCliente = new DaoBeneficiario();

            return benefCliente.Consultar(idCliente);
        }

        /// <summary>
        /// Excluir beneficiarios
        /// </summary>
        /// <param name="idCliente">Recebe ID do cliente</param>
        public void Excluir(long idCliente)
        {
            DaoBeneficiario benefCliente = new DaoBeneficiario();
            benefCliente.Excluir(idCliente);
        }

    }
}
