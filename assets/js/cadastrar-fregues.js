/* INTEGRAÇÃO BACK-END */

const formulario = document.querySelector("form");

const inomeFregues = document.querySelector("#nomeFregues");
const iemailFregues = document.querySelector("#emailFregues");
const irgNumeroFregues = document.querySelector("#rgNumeroFregues");
const irgOrgaoEmissorFregues = document.querySelector("#rgOrgaoEmissorFregues");
const icpfFregues = document.querySelector("#cpfFregues");
const isenhaFregues = document.querySelector("#senhaFregues");
const icepFregues = document.querySelector("#cepFregues");
const iruaFregues = document.querySelector("#ruaFregues");
const ibairroFregues = document.querySelector("#bairroFregues");
const icidadeFregues = document.querySelector("#cidadeFregues");
const iufFregues = document.querySelector("#ufFregues");
const inumeroEnderecoFregues = document.querySelector("#numeroEnderecoFregues");
const icomplementoFregues = document.querySelector("#complementoFregues");
const idddFregues = document.querySelector("#dddFregues");
const inumeroTelefoneFregues = document.querySelector("#numeroTelefoneFregues");

function cadastrar() {
  fetch("http://localhost:8080/fregues/cadastrar", 
  {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(
      {
        "id": null,
        "usuario": {
            "id": null,
            "nome_completo": inomeFregues.value,
            "email": iemailFregues.value,
            "rg_numero": irgNumeroFregues.value,
            "rg_orgao_emissor": irgOrgaoEmissorFregues.value,
            "cpf": icpfFregues.value,
            "senha": isenhaFregues.value,
            "endereco": {
                "id": null,
                "cep": icepFregues.value,
                "rua": iruaFregues.value,
                "bairro": ibairroFregues.value,
                "cidade": icidadeFregues.value,
                "uf": iufFregues.value,
                "numero": inumeroEnderecoFregues.value,
                "complemento": icomplementoFregues.value
            },
            "telefone": {
                "id": null,
                "prefixo": null,
                "ddd": idddFregues.value,
                "numero": inumeroTelefoneFregues.value
            }
        }
    })
  })
  .then(function (response) { console.log(response) })
  .catch(function (error) { console.log(error) })
}

function limpar() {
  inomeFregues.value = "";
  iemailFregues.value = "";
  irgNumeroFregues.value = "";
  irgOrgaoEmissorFregues.value = "";
  icpfFregues.value = "";
  isenhaFregues.value = "";
  icepFregues.value = "";
  iruaFregues.value = "";
  ibairroFregues.value = "";
  icidadeFregues.value = "";
  iufFregues.value = "";
  inumeroEnderecoFregues.value = "";
  icomplementoFregues.value = "";
  idddFregues.value = "";
  inumeroTelefoneFregues.value = "";
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  cadastrar();
  limpar();
});