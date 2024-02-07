(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();let s;const m=document.querySelector(".hamburger"),p=document.querySelector("#_menu");m.addEventListener("click",()=>a());const d=[m,p];function a(){d.forEach(t=>t.classList.toggle("active"))}function v(){d.forEach(t=>t.classList.remove("active"))}function f(){s=document.documentElement.clientWidth}f();window.onresize=()=>{v(),f(),g(),E()};window.addEventListener("click",function(t){t.target.id=="close"&&a()});const S=Array(12).fill({name:"Menu"}),i=Array(17).fill({title:"Title",text:"Some text Some text Some text Some text  Some text Some text Some text Some text Some text Some text Some text Some text Some text"});let r=0;function g(){s>1280?r=i.length%5:s>1024?r=i.length%4:s>640?r=i.length%3:r=i.length%2}const x=document.querySelector("#_menu"),y=document.querySelector("#_data_body");function L(){S.forEach((t,o)=>{x.innerHTML+=`
    <div class="item ${o==0?"first":""}">
      <div class="item_el"></div>
      <div class="item_text">${t.name}</div>
    </div>
    `})}function h(){i.forEach((t,o)=>{let c=o>i.length-1-r;y.innerHTML+=`
      <div class="_element" style="display: ${c?"none":"flex"}">
        <div>
          <span class="title"><strong>${t.title}</strong></span>
          <span>
            ${t.text}
          </span>
        </div>
      </div>
    `})}g();L();h();function E(){y.innerHTML="",h()}
