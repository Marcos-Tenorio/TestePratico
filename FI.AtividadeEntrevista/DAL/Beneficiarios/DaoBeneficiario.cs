using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.DAL.Beneficiarios
{
    internal class DaoBeneficiario : AcessoDados
    {
        internal void Incluir(Beneficiario beneficiario)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Nome", beneficiario.Nome));
            parametros.Add(new System.Data.SqlClient.SqlParameter("CPF", beneficiario.CPF));
            parametros.Add(new System.Data.SqlClient.SqlParameter("IDCLIENTE", beneficiario.IDCLIENTE));

            base.Executar("FI_SP_IncBeneficiario", parametros);
        }

        internal List<Beneficiario> Consultar(long idCliente)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();
            parametros.Add(new System.Data.SqlClient.SqlParameter("ID", idCliente));

            DataSet benefDataSet = base.Consultar("FI_SP_ConsultaClienteID", parametros);
            List<Beneficiario> lista = new List<Beneficiario>();

            lista = Converter(benefDataSet);


            return lista;
        }

        private List<DML.Beneficiario> Converter(DataSet ds)
        {
            List<DML.Beneficiario> lista = new List<DML.Beneficiario>();
            if (ds != null && ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    DML.Beneficiario benef = new DML.Beneficiario();
                    benef.Id = row.Field<long>("Id");
                    benef.CPF = row.Field<string>("CPF");
                    benef.Nome = row.Field<string>("Nome");
                    benef.IDCLIENTE = row.Field<long>("IDCLIENTE");

                    lista.Add(benef);
                }
            }

            return lista;
        }

        internal void Excluir(long idCliente)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();
            parametros.Add(new System.Data.SqlClient.SqlParameter("ID", idCliente));

            base.Executar("FI_SP_ExcluirBeneficiarios", parametros);
        }

    }
}
