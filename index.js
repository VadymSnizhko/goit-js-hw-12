import{a as b,S as w,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function v(r,t=1){return b(r,{params:{page:t}})}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector(".btn-more");function P(r){const t=r.map(a=>`<li class="gallery-cart">
      <a href=${a.largeImageURL}>
      <img class="gallery-image" src=${a.webformatURL} alt=${a.tags}></img>
      <div class="stats">
        <span>Like</span>
        <span>Views</span>
        <span>Comments</span>
        <span>Downloads</span>
        <span>${a.likes}</span>
        <span>${a.views}</span>
        <span>${a.comments}</span>
        <span>${a.downloads}</span>
      </div>
      </a>
  </li>`).join("");h.insertAdjacentHTML("beforeend",t),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function S(){h.innerHTML=""}function q(){m.classList.remove("hidden")}function $(){m.classList.add("hidden")}function u(){f.classList.remove("hidden")}function g(){f.classList.add("hidden")}const M=document.querySelector(".form"),n=document.querySelector(".btn-more"),p=document.querySelector("input"),y="49637256-cb46921c72200043e40baf2ce";let i=1,l="";M.addEventListener("submit",R);n.addEventListener("click",x);function R(r){r.preventDefault(),g(),i=1,l=p.value.trim();const s=`https://pixabay.com/api/?${new URLSearchParams({key:y,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15})}`;l&&(q(),S(),p.value="",L(s))}async function L(r){try{const s=(await v(r,i)).data;if(s.total===0)c.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{if(P(s.hits),u(),i++,i>2){const e=document.querySelector(".gallery-cart");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}}i>Math.ceil(s.totalHits/15)?(g(),c.show({color:"red",position:"topRight",message:"We're sorry, but you've reached the end of search results"})):u()}}catch(t){c.show({color:"red",position:"topRight",message:`Помилка '${t.message}'`})}finally{$()}}async function x(){n.disable=!0,n.innerHTML="Loading...";try{const t=`https://pixabay.com/api/?${new URLSearchParams({key:y,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15})}`;L(t),n.disable=!1,n.innerHTML="Load more"}catch(r){c.show({color:"red",position:"topRight",message:`Помилка: '${r.message}'`})}}
//# sourceMappingURL=index.js.map
