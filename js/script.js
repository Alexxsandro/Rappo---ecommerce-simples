let img_menu = document.querySelector(".img_menu");
let filtro = document.querySelector(".filtro")
let img_perfil = document.querySelector(".img_perfil")
let perfil = document.querySelector(".perfil");
let sub_menu = document.querySelector(".sub_menu");
let idCarrinho = document.getElementById("carrinho")
let sub_menu_none = document.querySelector(".sub_menu");

img_menu.addEventListener("mouseenter", function(){
  
  sub_menu.style.display = "block";
  filtro.style.display = "block";
})

sub_menu_none.addEventListener("mouseleave",function(){
  
  sub_menu.style.display = "none";
  filtro.style.display = "none";
})

img_perfil.addEventListener("mouseenter", () => {
  perfil.style.display = "block";

})

let img_perfil_none = document.querySelector(".img_perfil");

img_perfil_none.addEventListener("click", () => {
  
  perfil.style.display = "none";

})

let filtro_carrinho = document.querySelector(".filtro_carrinho");
idCarrinho.addEventListener("mouseenter",() => {
  
  let carrinho = document.querySelector(".carrinho");
  carrinho.style.display = "block";

  
  filtro_carrinho.style.display = "block";
 
})
let idCarrinho_none1 = document.querySelector(".carrinho.hide");
let idCarrinho_none = document.querySelector(".carrinho")
idCarrinho_none.addEventListener("mouseleave", function () {
  
  filtro_carrinho.style.display = "none";

  

  let carrinho = document.querySelector(".carrinho");
  carrinho.style.display = "none";
  
});













var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
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
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
