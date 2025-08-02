import{a as d,S as m,i as l}from"./assets/vendor-CRsTpldL.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="51493488-12143edce1099078d847fb8bb";function g(t){const i=encodeURIComponent(t.trim()),r=`https://pixabay.com/api/?key=${p}&q=${i}&orientation=horizontal&image_type=photo&safesearch=true`;return d.get(r).then(s=>s.data.hits)}let c=document.querySelector(".gallery");document.querySelector(".loader");let a;function y(t){let i=t.map(r=>{let s=r.webformatURL,e=r.largeImageURL,o=r.likes,n=r.views,u=r.comments,f=r.downloads;return`
      <li class="gallery-item">
      <a href="${e}">
        <img src="${s}" alt="" />
        <ul class="img_info">
          <li>
            <p class="info_title">Likes</p>
            <p>${o}</p>
          </li>
          <li>
            <p class="info_title">Views</p>
            <p>${n}</p>
          </li>
          <li>
            <p class="info_title">Comments</p>
            <p>${u}</p>
          </li>
          <li>
            <p class="info_title">Downloads</p>
            <p>${f}</p>
          </li>
        </ul>
      </a>
    </li>
      `}).join("");c.insertAdjacentHTML("afterbegin",i),a?a.refresh():a=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function h(){c&&(c.innerHTML="")}function L(){const t=document.querySelector(".loader");t&&t.classList.remove("none")}function b(){const t=document.querySelector(".loader");t&&t.classList.add("none")}const w=document.querySelector(".form");w.addEventListener("submit",t=>{t.preventDefault();const i=t.target.elements["search-text"].value.trim();if(!i){l.error({title:"Error",message:"Please enter a search term."});return}L(),h(),g(i).then(r=>{if(r.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r)}).catch(()=>{l.error({message:"An error occurred while fetching images."})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
