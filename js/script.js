let menuHamburguer,
  filtro,
  imgPerfil,
  perfil,
  subMenu,
  idCarrinho,
  subMenuNone,
  filtroCarrinho,
  perfilNone,
  modalEntrar,
  btnModalCd,
  modalCadastro;

menuHamburguer = document.querySelector(".img_menu");
filtro = document.querySelector(".filtro");
imgPerfil = document.querySelector(".img_perfil");
perfil = document.querySelector(".perfil");
subMenu = document.querySelector(".sub_menu");
idCarrinho = document.getElementById("carrinho");
subMenuNone = document.querySelector(".sub_menu");
filtroCarrinho = document.querySelector(".filtro_carrinho");
perfilNone = document.querySelector(".img_perfil");
modalEntrar = document.querySelector(".modal_entrar");
modalCadastro = document.querySelector(".modal_cadastro");
btnModalCd = document.getElementById("btn_modal_cd");

menuHamburguer.addEventListener("mouseenter", function () {
  subMenu.classList.add("sub-01");
  filtro.classList.add("filtro-01");
});

subMenuNone.addEventListener("mouseleave", function () {
  subMenu.classList.remove("sub-01");
  filtro.classList.remove("filtro-01");
});

imgPerfil.addEventListener("mouseenter", () => {
  perfil.classList.add("perfil-01");
});

perfilNone.addEventListener("click", () => {
  perfil.classList.remove("perfil-01");
});

idCarrinho.addEventListener("mouseenter", () => {

  let carrinho = document.querySelector(".carrinho");

  let ferrCarrinho = document.querySelector(".qntdCarrinho p");
  if (ferrCarrinho.innerHTML !== "0" && ferrCarrinho.innerHTML !== null) {
    carrinho.style.display = "block";
    filtroCarrinho.style.display = "block";

    let converte = JSON.stringify(listaProdutos);
    let setLocalstorage = localStorage.setItem("listaProdutos", converte);
  }
});

let btn_ctn = document.getElementById('btn_ctn')
btn_ctn.addEventListener('click', () => {
  let carrinho = document.querySelector(".carrinho");

  carrinho.style.display = "none";
  filtroCarrinho.style.display = "none";
})

let idCarrinho_none1 = document.querySelector(".carrinho.hide");
let idCarrinho_none = document.querySelector(".carrinho");

idCarrinho_none.addEventListener("mouseleave", function () {
  filtroCarrinho.style.display = "none";
  let carrinho = document.querySelector(".carrinho");
  carrinho.style.display = "none";
});

const entrar = () => {
  modalEntrar.classList.add("modal-ativo");
  perfil.classList.remove("perfil-01");
  filtro.classList.add("filtro-01");
};

const cadastro = () => {
  modalCadastro.classList.add("modal-ativo-cs");
  perfil.classList.remove("perfil-01");
  filtro.classList.add("filtro-01");
};

(function(){
  setTimeout(() => {
    let modal = document.querySelector('.container_modal')
    modal.style.display = "block";
  }, 3500)
})();

let btnCloseModal = document.querySelector('.icone_volta')

btnCloseModal.addEventListener('click', () => {
  let modal = document.querySelector('.container_modal')
    modal.style.display = "none";
})

const cadastroUsuario = [];
btnModalCd.addEventListener("click", () => {
  let nomeCadastro = document.getElementById("nomeCadastro").value;
  let emailCadastro = document.getElementById("emailCadastro").value;
  let senhaCadastro = document.getElementById("senhaCadastro").value;

  if (nomeCadastro !== "" && emailCadastro !== "" && senhaCadastro !== "") {
    const usuario = {
      nome: "",
      email: "",
      senha: "",
    };

    usuario.nome = nomeCadastro;
    usuario.email = emailCadastro;
    usuario.senha = senhaCadastro;

    cadastroUsuario.push(usuario);

    let converte = JSON.stringify(cadastroUsuario);
    let setLocalStorage = localStorage.setItem("cadastro", converte);

    modalCadastro.classList.remove("modal-ativo-cs");
    perfil.classList.remove("perfil-01");
    filtro.classList.remove("filtro-01");
  } else {
    alert("precisa preencher todos os campos");
  }
});

const validaEntra = () => {
  let emailEntra = document.getElementById("emailEntra").value;
  let senhaEntra = document.getElementById("senhaEntra").value;

  if (emailEntra !== "" && senhaEntra !== "") {
    let getLocalStorage = localStorage.getItem("cadastro");
    let converte = JSON.parse(getLocalStorage);

    for (let valor of converte) {
      if (valor.email === emailEntra && valor.senha === senhaEntra) {
        modalEntrar.classList.remove("modal-ativo");
        perfil.classList.remove("perfil-01");
        filtro.classList.remove("filtro-01");
      }
    }
  }
};

const listaProdutos = [];
let qntdCarrinho = document.querySelector(".qntdCarrinho");
let numProduto = 0;
let totalProduto = document.querySelector(".totalProduto");
let total = 0;

let produtos = document.querySelectorAll(".produtos");
produtos[0].addEventListener("click", () => {
  if (produtos[0].id === "prod-01") {
    let criaId = Math.floor(Math.random() * 100000);
    let precoProduto = 1000;

    const adcProduto = {
      idProduto: "",
      preco: 0,
    };
    adcProduto.idProduto = criaId;
    adcProduto.preco = precoProduto;

    listaProdutos.push(adcProduto);

    let table = document.querySelector(".table");
    let tableTr = document.createElement("tr");
    let atr = document.createAttribute("id");
    atr.value = criaId;
    tableTr.setAttributeNode(atr);

    tableTr.innerHTML = ` <td>Nike shox</td>
    <td>R$ 1.000,00</td>
    <td><button class="btn_remove" onclick="deletaCarrinho(${criaId})">Remover</button></td>`;
    table.appendChild(tableTr);
    total += 1000;

    totalProduto.innerHTML = `<span>R$${total},00</span>`;
    
    numProduto++;

    qntdCarrinho.innerHTML = `<p>${numProduto}</p>`;
  }
});
produtos[1].addEventListener("click", () => {
  if (produtos[1].id === "prod-02") {
    let criaId = Math.floor(Math.random() * 100000);
    let precoProduto = 1189;

    const adcProduto = {
      idProduto: "",
      preco: 0,
    };
    adcProduto.idProduto = criaId;
    adcProduto.preco = precoProduto;

    listaProdutos.push(adcProduto);

    let table = document.querySelector(".table");
    let tableTr = document.createElement("tr");
    let atr = document.createAttribute("id");
    atr.value = criaId;
    tableTr.setAttributeNode(atr);
    tableTr.innerHTML = ` <td>Nike shox</td>
    <td>R$ 1.189,00</td>
    <td><button class="btn_remove" onclick="deletaCarrinho(${criaId})">Remover</button></td>`;
    table.appendChild(tableTr);

    total += 1189;
    totalProduto.innerHTML = `<span>R$${total},00</span>`;

    numProduto++;
    qntdCarrinho.innerHTML = `<p>${numProduto}</p>`;
  }
});
produtos[2].addEventListener("click", () => {
  if (produtos[2].id === "prod-03") {
    let criaId = Math.floor(Math.random() * 100000);
    let precoProduto = 480;

    const adcProduto = {
      idProduto: "",
      preco: 0,
    };
    adcProduto.idProduto = criaId;
    adcProduto.preco = precoProduto;

    listaProdutos.push(adcProduto);

    let table = document.querySelector(".table");
    let tableTr = document.createElement("tr");
    let atr = document.createAttribute("id");
    atr.value = criaId;
    tableTr.setAttributeNode(atr);

    tableTr.innerHTML = ` <td>Nike shox</td>
    <td>R$ 480,99</td>
    <td><button class="btn_remove" onclick="deletaCarrinho(${criaId})">Remover</button></td>`;
    table.appendChild(tableTr);

    total += 480;
    totalProduto.innerHTML = `<span>R$ ${total},00</span>`;

    numProduto++;
    qntdCarrinho.innerHTML = `<p>${numProduto}</p>`;
  }
});
produtos[3].addEventListener("click", () => {
  if (produtos[3].id === "prod-04") {
    let criaId = Math.floor(Math.random() * 100000);
    let precoProduto = 1580;

    const adcProduto = {
      idProduto: "",
      preco: 0,
    };
    adcProduto.idProduto = criaId;
    adcProduto.preco = precoProduto;

    listaProdutos.push(adcProduto);

    let table = document.querySelector(".table");
    let tableTr = document.createElement("tr");
    let atr = document.createAttribute("id");
    atr.value = criaId;
    tableTr.setAttributeNode(atr);

    tableTr.innerHTML = ` <td>Nike shox</td>
    <td>R$ 1.580,00</td>
    <td><button class="btn_remove" onclick="deletaCarrinho(${criaId})">Remover</button></td>`;
    table.appendChild(tableTr);

    total += 1580;
    totalProduto.innerHTML = `<span>R$ ${total},00</span>`;

    numProduto++;
    qntdCarrinho.innerHTML = `<p>${numProduto}</p>`;

  }
});

const deletaCarrinho = (value) => {
  let idProd = document.getElementById(value);
  if (idProd.innerText === "Nike shox	R$ 1.000,00	Remover") {
    total -= 1000;
    totalProduto.innerHTML = `<span>R$ ${total.toFixed(2)}</span>`;
  }
  if (idProd.innerText === "Nike shox	R$ 1.189,00	Remover") {
    total -= 1189;
    totalProduto.innerHTML = `<span>R$ ${total.toFixed(2)}</span>`;
  }
  if (idProd.innerText === "Nike shox	R$ 480,99	Remover") {
    total -= 480;
    totalProduto.innerHTML = `<span>R$ ${total.toFixed(2)}</span>`;
  }
  if (idProd.innerText === "Nike shox	R$ 1.580,00	Remover") {
    total -= 1580;
    totalProduto.innerHTML = `<span>R$ ${total.toFixed(2)}</span>`;
  }

  idProd.remove();

  listaProdutos.forEach((valor, indice) => {
    if (valor.idProduto === value) {
      listaProdutos.splice(indice, 1);
     
    }
  });
  let converte = JSON.stringify(listaProdutos);
  let setLocalstorage = localStorage.setItem("listaProdutos", converte);

  numProduto--;
  qntdCarrinho.innerHTML = `<p>${numProduto}</p>`;
};

  var swiper = new Swiper(".swiper", {
    slidesPerView: getView(),
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 600 ? "vertical" : "horizontal";

  return direction;
}

function getView() {
  let viewWidth = window.innerWidth;
  console.log(viewWidth)
  let pageView = viewWidth <= '600' ? 1 : 4;

  return pageView;
}

const finalizarPedido = () => {
  let ferrCarrinho = document.querySelector(".qntdCarrinho p");
  if (ferrCarrinho.innerHTML !== "0" && ferrCarrinho.innerHTML !== null) {
    const testando = {
      totalProduto: total,
    };

    listaProdutos.push(testando);
    window.location.href = "./pagamento.html";
  }
};
