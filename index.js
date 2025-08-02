import{a as S,S as q,i as n}from"./assets/vendor-CRsTpldL.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const $="51493488-12143edce1099078d847fb8bb";async function h(s,r){try{const t=encodeURIComponent(s.trim()),i=`https://pixabay.com/api/?key=${$}&q=${t}&orientation=horizontal&image_type=photo&safesearch=true&per_page=15&page=${r}`;return(await S.get(i)).data}catch(t){console.log(t)}}let m=document.querySelector(".gallery");const u=document.querySelector(".loader"),d=document.querySelector(".show-more");let f;function y(s){let r=s.map(t=>{let i=t.webformatURL,e=t.largeImageURL,o=t.likes,a=t.views,b=t.comments,v=t.downloads;return`
      <li class="gallery-item">
      <a href="${e}">
        <img src="${i}" alt="" />
        <ul class="img_info">
          <li>
            <p class="info_title">Likes</p>
            <p>${o}</p>
          </li>
          <li>
            <p class="info_title">Views</p>
            <p>${a}</p>
          </li>
          <li>
            <p class="info_title">Comments</p>
            <p>${b}</p>
          </li>
          <li>
            <p class="info_title">Downloads</p>
            <p>${v}</p>
          </li>
        </ul>
      </a>
    </li>
      `}).join("");m.insertAdjacentHTML("beforeend",r),f?f.refresh():f=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function p(){m&&(m.innerHTML="")}function L(){u&&u.classList.remove("none")}function w(){u&&u.classList.add("none")}function _(){d&&d.classList.remove("none")}function g(){d&&d.classList.add("none")}const O=document.querySelector(".form"),P=document.querySelector(".show-more");g();let l=1,c="";O.addEventListener("submit",async s=>{if(s.preventDefault(),p(),c=s.target.elements["search-text"].value.trim(),!c){n.error({title:"Error",message:"Please enter a search term."});return}L(),p();try{const r=await h(c,l);let t=r.total;if(r.hits.length>=t){n.error({message:"Were sorry, but youve reached the end of search results"}),g();return}if(r.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r.hits),_()}catch{n.error({message:"An error occurred while fetching images."})}finally{w()}});P.addEventListener("click",async()=>{l+=1,L();try{const s=await h(c,l);y(s.hits);const r=document.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}s.totalHits<=l*15&&(n.info({message:"You have reached the end of the results."}),g())}catch{n.error({message:"Error loading more images."})}finally{w()}});
//# sourceMappingURL=index.js.map
