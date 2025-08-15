using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Text;

namespace FI.WebAtividadeEntrevista.Models
{
    internal class BeneficiarioModel
    {
        /// <summary>
        /// Id
        /// </summary>

        public int Id { get; set; }

        /// <summary>
        /// CPF
        /// </summary>
        [Required]
        [RegularExpression(@"^\d{3}\.\d{3}\.\d{3}-\d{2}$", ErrorMessage = "CPF inválido")]
        public string CPF { get; set; }

        /// <summary>
        /// Nome 
        /// </summary>
        [Required]
        public string Nome { get; set; }

        /// <summary>
        /// ID do cliente
        /// </summary>
        public int IDCLIENTE { get; set; }

    }
}