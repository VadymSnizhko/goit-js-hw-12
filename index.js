import{a as f,S as g,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function h(s,o=1){return f(s,{params:{page:o}})}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".btn-more");function y(s){const o=s.map(t=>`<li class="gallery-cart">
      <a href=${t.largeImageURL}>
      <img class="gallery-image" src=${t.webformatURL} alt=${t.tags}></img>
      <div class="stats">
        <span>Like</span>
        <span>Views</span>
        <span>Comments</span>
        <span>Downloads</span>
        <span>${t.likes}</span>
        <span>${t.views}</span>
        <span>${t.comments}</span>
        <span>${t.downloads}</span>
      </div>
      </a>
  </li>`).join("");u.insertAdjacentHTML("beforeend",o),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function L(){u.innerHTML=""}function b(){p.classList.remove("hidden")}function w(){p.classList.add("hidden")}function v(){m.classList.remove("hidden")}function S(){m.classList.add("hidden")}const $=document.querySelector(".form"),i=document.querySelector(".btn-more"),d=document.querySelector("input"),q="49637256-cb46921c72200043e40baf2ce";let n=1;$.addEventListener("submit",M);i.addEventListener("click",R);function M(s){s.preventDefault(),S(),n=1;const o=d.value.trim(),t=`https://pixabay.com/api/?${new URLSearchParams({key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15})}`;o&&(b(),L(),console.log(o),d.value="",P(t))}async function P(s){try{const a=(await h(s,n)).data;a.total===0?l.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(a.hits),v(),n++,console.log(n))}catch(o){l.show({color:"red",position:"topRight",message:`Помилка '${o.message}'`})}finally{w()}}async function R(){n++,i.disable=!0,i.innerHTML="Loading...";try{i.disable=!1,i.innerHTML="Load more"}catch(s){l.show({color:"red",position:"topRight",message:`Помилка: '${s.message}'`})}console.log(n)}
//# sourceMappingURL=index.js.map
