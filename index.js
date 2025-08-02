import{a as S,S as q,i as n}from"./assets/vendor-CRsTpldL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="51493488-12143edce1099078d847fb8bb",p=15;async function g(s,t){try{const r=encodeURIComponent(s.trim()),i=`https://pixabay.com/api/?key=${$}&q=${r}&orientation=horizontal&image_type=photo&safesearch=true&per_page=15&page=${t}`;return(await S.get(i)).data}catch(r){console.log(r)}}let m=document.querySelector(".gallery");const u=document.querySelector(".loader"),d=document.querySelector(".show-more");let f;function h(s){let t=s.map(r=>{let i=r.webformatURL,e=r.largeImageURL,o=r.likes,l=r.views,b=r.comments,v=r.downloads;return`
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
            <p>${l}</p>
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
      `}).join("");m.insertAdjacentHTML("beforeend",t),f?f.refresh():f=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function P(){m&&(m.innerHTML="")}function y(){u&&u.classList.remove("none")}function L(){u&&u.classList.add("none")}function _(){d&&d.classList.remove("none")}function w(){d&&d.classList.add("none")}const E=document.querySelector(".form"),O=document.querySelector(".show-more");let a=1,c="";E.addEventListener("submit",async s=>{if(s.preventDefault(),P(),c=s.target.elements["search-text"].value.trim(),!c){n.error({title:"Error",message:"Please enter a search term."});return}a=1,y();try{const t=await g(c,a);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits),t.totalHits>a*p?_():(w(),n.info({message:"You have reached the end of the results."}))}catch{n.error({message:"An error occurred while fetching images."})}finally{L()}});O.addEventListener("click",async()=>{a+=1,y();try{const s=await g(c,a);h(s.hits);const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}s.totalHits<=a*p&&(n.info({message:"You have reached the end of the results."}),w())}catch{n.error({message:"Error loading more images."})}finally{L()}});
//# sourceMappingURL=index.js.map
