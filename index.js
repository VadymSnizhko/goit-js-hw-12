import{a as f,S as m,i}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function h(s,t){return f(`${s}&page=${t}`)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),p=document.querySelector(".btn-more");function g(s){const t=s.map(o=>`<li class="gallery-cart">
      <a href=${o.largeImageURL}>
      <img class="gallery-image" src=${o.webformatURL} alt=${o.tags}></img>
      <div class="stats">
        <span>Like</span>
        <span>Views</span>
        <span>Comments</span>
        <span>Downloads</span>
        <span>${o.likes}</span>
        <span>${o.views}</span>
        <span>${o.comments}</span>
        <span>${o.downloads}</span>
      </div>
      </a>
  </li>`).join("");u.innerHTML=t,new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){u.innerHTML=""}function L(){d.classList.remove("hidden")}function b(){d.classList.add("hidden")}function w(){p.classList.remove("hidden")}function v(){p.classList.add("hidden")}const S=document.querySelector(".form"),$=document.querySelector(".btn-more"),l=document.querySelector("input"),q="49637256-cb46921c72200043e40baf2ce";let a=1;S.addEventListener("submit",P);$.addEventListener("click",I);function P(s){s.preventDefault(),v(),a=1;const t=l.value.trim(),o=`https://pixabay.com/api/?${new URLSearchParams({key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15})}`;t&&(L(),y(),console.log(t),l.value="",M(o))}async function M(s){try{const n=(await h(s,a)).data;n.total===0?i.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(g(n.hits),w(),a++,console.log(a))}catch(t){i.show({color:"red",position:"topRight",message:`Помилка '${t.message}'`})}finally{b()}}function I(){a++,console.log(a)}
//# sourceMappingURL=index.js.map
