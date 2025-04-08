import{S as d,a as p,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),u=document.querySelector(".loader");function f(s){const r=s.map(o=>`<li class="gallery-cart">
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
  </li>`).join("");l.innerHTML=r,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){l.innerHTML=""}function h(){u.classList.remove("hidden")}function g(){u.classList.add("hidden")}function y(s){return p(s).then(r=>r.data).catch(r=>(c.show({color:"red",position:"topRight",message:`Помилка '${r.message}'`}),null)).finally(()=>g())}const L=document.querySelector(".form");document.querySelector("button");const i=document.querySelector("input"),b="49637256-cb46921c72200043e40baf2ce";L.addEventListener("submit",w);function w(s){s.preventDefault();const r=i.value.trim(),o=`https://pixabay.com/api/?${new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;if(!r)return;h(),m(),i.value="";const e=y(o);console.log(e),e.then(t=>{t.total===0?c.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):f(t.hits)})}
//# sourceMappingURL=index.js.map
