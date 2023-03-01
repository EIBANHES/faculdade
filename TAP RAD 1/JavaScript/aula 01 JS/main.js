let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.querySelector("#nome").value;
  let endereco = document.querySelector("#endereco").value;
  let cpf = document.querySelector("#cpf").value;

  let template = `<tr>
    <td>${nome}</td> 
    <td>${endereco}</td>
    <td>${cpf}</td>
    </tr>`;

  let tabela = document.querySelector("tbody");
  tabela.innerHTML = tabela.innerHTML + template;
});
