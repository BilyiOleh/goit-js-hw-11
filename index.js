import{a as d,S as f,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="56466329-080e28ba0c43f88c01656e1cc";function p(s){return d.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b><br>${r.likes}</p>
          <p><b>Views</b><br>${r.views}</p>
          <p><b>Comments</b><br>${r.comments}</p>
          <p><b>Downloads</b><br>${r.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please fill in the search field!"});return}g(),b(),p(o).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits)}).catch(()=>{a.error({message:"Something went wrong!"})}).finally(()=>{L()}),l.reset()});
//# sourceMappingURL=index.js.map
