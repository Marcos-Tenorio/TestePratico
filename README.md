# 🚀 FI.WebAtividadeEntrevista

## 📄 Descrição
Projeto para gerenciamento de **clientes** com integração de **beneficiários**, implementando operações **CRUD** com join entre as tabelas. Desenvolvido em **.NET Framework 4.8**, utilizando arquitetura **MVC** com camadas **BLL, DAL e DML** no backend e **jQuery, jTable e AJAX** no frontend.

---

## 🛠 Tecnologias Utilizadas
- **Backend:** .NET Framework 4.8, MVC, BLL/DAL/DML  
- **Frontend:** jQuery, jTable, AJAX  
- **Banco de Dados:** SQLite (local)  
- **IDE recomendada:** Visual Studio (com suporte ao .NET Framework 4.8)

---

## 🧩 Principais Classes/Controllers
- `ClienteController`: Gerencia as operações CRUD de clientes.  
- `BeneficiarioController`: Gerencia os beneficiários relacionados aos clientes.  
- `ClienteBLL`: Contém a lógica de negócios para clientes.  
- `ClienteDAL`: Acesso ao banco para operações CRUD de clientes.  
- `BeneficiarioDAL`: Acesso ao banco para operações CRUD de beneficiários.  
- `ClienteDML`: Representação da tabela Clientes.  
- `BeneficiarioDML`: Representação da tabela Beneficiários.  

---

## ⚙️ Pré-requisitos
Para executar o projeto corretamente, instale o **Visual Studio** com as seguintes opções:  
- 📦 Pacote de direcionamento do .NET Framework 4.8  
- 🛠 SDK do .NET Framework 4.8  
- 🗄 SQL Server Express 2019 LocalDB  

---

## 🚀 Instalação e Configuração
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
2. Abra a solução no Visual Studio.
3. Restaure os pacotes NuGet.
4. Compile e execute o projeto (F5 ou Ctrl + F5).

---

## 🔒 Problemas Com Certificado de Seguranca
Caso ocorra algum problema com certificado ao executar a aplicação em **localhost**, siga os passos abaixo (uso do terminal de comando):
1️⃣ Apagar configuração antiga do IIS Express:

cmd:
- cd %USERPROFILE%\Documents\IISExpress\config
- del applicationhost.config

2️⃣ Reinstalar certificado autoassinado do IIS Express:

cmd:
- cd "C:\Program Files (x86)\IIS Express"
- IisExpressAdminCmd.exe setupsslUrl -url:https://localhost:44300/ -UseSelfSigned **(Substitua 44300 pela porta que seu projeto utiliza no HTTPS.)**

3️⃣ Confiar no certificado:

cmd: 
certmgr.msc

- Navegue até Certificados - Usuário Atual > Pessoal > Certificados.
- Localize o certificado IIS Express Development Certificate.
- Clique com o botão direito → Todas as Tarefas → Exportar (opcional, backup) ou apenas Marcar como confiável no Autoridade de Certificação Raiz Confiável.

4️⃣ Reinicie o Visual Studio e verifique se o HTTPS está funcionando no localhost ✅

---
##🧪 Testes
- Atualmente não há testes automatizados implementados.
- Recomenda-se implementar testes unitários para a camada BLL e DAL futuramente.