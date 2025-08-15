using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace FI.WebAtividadeEntrevista.Controllers.Services
{
    internal class ServicesCliente
    {
        public bool ValidaCpf(string CPF)
        {
            int[] verificadorI = new int[9] { 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            int[] verificadorF = new int[10] { 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 };
            string cpf = CPF;
            string auxCPF;
            string digito;
            int soma;
            int resto;

            cpf = new string(cpf.Where(char.IsDigit).ToArray());
            if (cpf.All(digit => digit == cpf[0]))
                return false;

            auxCPF = cpf.Substring(0, 9);
            soma = 0;

            for (int i = 0; i < 9; i++)
            {
                soma += int.Parse(cpf[i].ToString()) * verificadorI[i];
            }

            resto = soma % 11;

            if (resto < 2)
            {
                resto = 0;
            }
            else
            {
                resto = 11 - resto;
            }

            digito = resto.ToString();
            auxCPF = auxCPF + digito;

            soma = 0;

            for (int i = 0; i < 10; i++)
            {
                soma += int.Parse(auxCPF[i].ToString()) * verificadorF[i];
            }

            resto = soma % 11;

            if (resto < 2)
            {
                resto = 0;
            }
            else
            {
                resto = 11 - resto;
            }

            auxCPF = auxCPF + resto;

            if (cpf == auxCPF)
            {
                return true;
            }
            else { return false; }
        }
    }
}