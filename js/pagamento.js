let
  table,
  total = 0;

(function () {
  table = document.querySelector(".table");
  let getLocalstorage = localStorage.getItem("listaProdutos");
  let converte = JSON.parse(getLocalstorage);


  converte.map((valor) => {
       if(valor != null){
       
       
          total += valor.preco;
          let criaTr = document.createElement("tr");
          let novoAtr = document.createAttribute("id");
          novoAtr.value = valor.idProduto;
          criaTr.setAttributeNode(novoAtr);

          
            
            criaTr.innerHTML = `
              <td><img src="./img/logo.png"></td>
              <td>Nike shox</td>
              <td>R$ ${valor.preco},00</td>
              <td><button onclick="remove(${valor.idProduto})">Remover</button></td>`;
      
              table.appendChild(criaTr);
              
            
      
        
       }
  })


  let subProd = document.querySelector(".subProd");
  let totalProd = document.querySelector(".totalProd");

  totalProd.innerHTML = `<span>R$ ${total},00</span>`;
  subProd.innerHTML = `<span>R$ ${total},00</span>`;
})();

const remove = (valor) => {
  let subProd = document.querySelector(".subProd");
  let totalProd = document.querySelector(".totalProd");
  let removendo = document.getElementById(valor);
  let guardaValor = removendo.innerText;

  if (guardaValor.indexOf("R$ 1000,00") >= 1) {
    total -= 1000;
    subProd.innerHTML = `<span>R$ ${total},00</span>`;
    totalProd.innerHTML = `<span>R$ ${total},00</span>`;
  }
  if (guardaValor.indexOf("R$ 1189,00") >= 1) {
    total -= 1189;
    subProd.innerHTML = `<span>R$ ${total},00</span>`;
    totalProd.innerHTML = `<span>R$ ${total},00</span>`;
  }
  if (guardaValor.indexOf("R$ 480,00") >= 1) {
    total -= 480;
    subProd.innerHTML = `<span>R$ ${total},00</span>`;
    totalProd.innerHTML = `<span>R$ ${total},00</span>`;
  }
  if (guardaValor.indexOf("R$ 1580,00") >= 1) {
    total -= 1580;
    subProd.innerHTML = `<span>R$ ${total},00</span>`;
    totalProd.innerHTML = `<span>R$ ${total},00</span>`;
  }

  
  
  let getLocalstorage = localStorage.getItem('listaProdutos')
  let converte = JSON.parse(getLocalstorage)

  converte.forEach((value, indice) => {
 
    if (value.idProduto === valor) {
      converte.splice(indice, 1);
      
    }
  });
  
  localStorage.removeItem('listaProdutos')
  
  removendo.remove();

  let converteString = JSON.stringify(converte)
  let setLocalStorage = localStorage.setItem("listaProdutos", converteString)
  
  

};

const submitCep = () => {
  let cep = document.getElementById("cep").value;
  if (cep !== "" && cep !== null && cep !== undefined) {
    let resultCep = document.querySelector(".resultCep");
    resultCep.style.display = "block";

    let cepValido = cep.replace("-", "");

    fetch(`https://viacep.com.br/ws/${cepValido}/json/`).then((res) => {
      res.json().then((data) => {
        let endereco_1 = document.querySelector(".endereco_1");
        endereco_1.innerHTML = `Rua ${data.logradouro},${data.localidade},${data.uf}`;
      });
    });
  } else {
    alert("cep está vazio");
  }
};

let cupomDesconto = document.getElementById("cupomDesconto");
cupomDesconto.addEventListener("blur", () => {
  if (cupomDesconto.value === "RAPPO2022") {
    if (total > 900) {
      let saltoComDesconto = total * 0.15;
      let finalSaldo = total - saltoComDesconto;
      let subProd = document.querySelector(".subProd");
      let totalProd = document.querySelector(".totalProd");

      subProd.innerHTML = `<span>R$ ${finalSaldo}</span>`;
      totalProd.innerHTML = `<span>R$ ${finalSaldo}</span>`;

      
    }
  }
});

function finalizandoCarrinho() {
  let endereco1 = document.getElementById('endereco1').checked
  let endereco2 = document.getElementById('endereco2').checked

  let finLocalStorage = localStorage.getItem("listaProdutos")
  console.log(finLocalStorage !== null)
  if(finLocalStorage !== null && finLocalStorage !== undefined && finLocalStorage !== '' && (endereco1 === true || endereco2 === true)){
     alert("Seguindo com a compra ...")
  }else{
    alert("Preencha o cep e verifique se tem itens adicionados ao carrinho")
  }
}

