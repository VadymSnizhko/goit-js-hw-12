import{a as b,S as w,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function v(t,o=1){return b(t,{params:{page:o}})}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".btn-more");function q(t){const o=t.map(s=>`<li class="gallery-cart">
      <a href=${s.largeImageURL}>
      <img class="gallery-image" src=${s.webformatURL} alt=${s.tags}></img>
      <div class="stats">
        <span>Like</span>
        <span>Views</span>
        <span>Comments</span>
        <span>Downloads</span>
        <span>${s.likes}</span>
        <span>${s.views}</span>
        <span>${s.comments}</span>
        <span>${s.downloads}</span>
      </div>
      </a>
  </li>`).join("");f.insertAdjacentHTML("beforeend",o),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function S(){f.innerHTML=""}function P(){h.classList.remove("hidden")}function M(){h.classList.add("hidden")}function d(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}const $=document.querySelector(".form"),n=document.querySelector(".btn-more"),p=document.querySelector("input"),R="49637256-cb46921c72200043e40baf2ce";let i=1,l="";$.addEventListener("submit",H);n.addEventListener("click",I);function y(t){return`https://pixabay.com/api/?${new URLSearchParams({key:R,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15})}`}function H(t){t.preventDefault(),g(),i=1,l=p.value.trim();const o=y(l);l&&(P(),S(),p.value="",L(o))}async function L(t){try{const a=(await v(t,i)).data;if(a.total===0)c.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{if(q(a.hits),d(),i++,i>2){const e=document.querySelector(".gallery-cart");if(e){const r=e.getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}}i>Math.ceil(a.totalHits/15)?(g(),c.show({color:"red",position:"topRight",message:"We're sorry, but you've reached the end of search results"})):d()}}catch(o){c.show({color:"red",position:"topRight",message:`Помилка '${o.message}'`})}finally{M()}}async function I(){n.disable=!0,n.innerHTML="Loading...";try{const t=y(l);L(t),n.disable=!1,n.innerHTML="Load more"}catch(t){c.show({color:"red",position:"topRight",message:`Помилка: '${t.message}'`})}}
//# sourceMappingURL=index.js.map
