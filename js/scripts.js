"use strict";for(var tabNavs=document.querySelectorAll(".nav__item"),tabPanes=document.querySelectorAll(".content__item"),i=0;i<tabNavs.length;i++)tabNavs[i].addEventListener("click",function(t){t.preventDefault();for(var e=t.target.getAttribute("data-tab"),a=0;a<tabNavs.length;a++){e===tabPanes[a].getAttribute("data-tab-content")?(tabNavs[a].classList.add("nav__item_active"),tabPanes[a].classList.add("content__item_active")):(tabNavs[a].classList.remove("nav__item_active"),tabPanes[a].classList.remove("content__item_active"))}});var btnInBascet=document.querySelectorAll(".product__button");for(i=0;i<btnInBascet.length;i++)btnInBascet[i].addEventListener("click",function(t){t.preventDefault();var e=t.target.parentNode.querySelector(".product__name").textContent,a=document.createElement("div");a.innerHTML="<span>"+e+'</span><a href="#" class="product__close"> <img src="./img/content/close.png"></a> ',a.classList.add("product__name"),document.querySelector(".shopping-list").appendChild(a),deleteProduct()});function deleteProduct(){for(var t=document.querySelectorAll(".product__close"),e=0;e<t.length;e++)t[e].addEventListener("click",function(t){t.preventDefault(),t.target.closest(".product__name").remove()})}deleteProduct();