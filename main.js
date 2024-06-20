(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'/* Css Reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* Variables */\n:root {\n    --color_top: #EEEEEE;\n    --color_middle1: #686D76;\n    --color_middle2: #373A40;\n    --color_bottom: #f17415;\n    --color_action: #b34d00;\n    --complementary: #007DDC;\n    --text_color: rgb(226, 226, 226);\n\n    --small_size: 320px;\n    --tablet_size: 768px;\n    --laptop_size: 992px;\n    --desktop_size: 1200px;\n\n    --dist_s: 0.5em;\n    --dist_x: 1em;\n    --dist_xx: 1.5em;\n    --dist_L: 2em;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\n\n\nh1 {\n    font-size: 2em;\n    text-decoration: underline;\n    margin-bottom: 1rem;\n}\n\nh2 {\n    font-size: 1.5em;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--color_middle2);\n    font-size: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\nheader {\n    display: flex;\n    background-color: var(--color_top);\n    height: 3em;\n    padding: 0.5em;\n}\n\nnav {\n    display: flex;\n}\n\nbutton {\n  appearance: none;\n  background-color: var(--color_top);\n  border-width: 0;\n  box-sizing: border-box;\n  color: #000000;\n  cursor: pointer;\n  display: inline-block;\n  outline: 0;\n  margin-left: 1.5em;\n  padding: 2em 2em;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\nbutton:hover {\n    background-color: var(--color_bottom);\n}\n\nbutton:active {\n    background-color: var(--color_action);\n}\n\n\n/* Sections */\nsection {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n\n    color: var(--text_color);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n\n}\n\n.block {\n    background-color: var(--color_middle1);\n    outline: 2px solid var(--color_top);\n    border-radius: 10px;\n    padding: 1em 1em 1em 1em;\n    margin: 1em 0 1em 0;\n}\n\n.location img {\n    height: 500px;\n}\n\n.items {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(200px, 1fr));\n    grid-template-rows: minmax(500px, 1fr);\n    gap: 1.5em;\n\n    margin-bottom: var(--dist_L);\n}\n\n\n.dish {\n    background-color: var(--color_middle1);\n    border: 2px solid var(--color_top);\n\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    border-radius: 0 0 50px 0;\n    min-height: 500px;\n    transition: all 300ms ease 0s;\n}\n\n.dish img {\n    height: 250px;\n    object-fit: cover;\n}\n\n.information {\n    margin: 1em;\n}\n\n\n/* Footer */\n\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    background-color: var(--color_bottom);\n    padding: 0.5em;\n}\n\n.heart {\n    /* Modify size here: */\n    --size: 20px;\n\n    margin: 7px 5px 0 5px;\n    position: relative;\n    width: var(--size);\n    height: calc(var(--size) * 0.3);\n    transform: translateY(-3px);\n  }\n\n  .heart:before,\n  .heart:after {\n    position: absolute;\n    content: "";\n    left: calc(var(--size) * 0.55);\n    top: 0;\n    width: calc(var(--size) * 0.55);\n    height: calc(var(--size) * 0.85);\n    background: rgb(209, 2, 2);\n    border-radius: calc(var(--size) * 0.55) calc(var(--size) * 0.55) 0 0;\n    transform: rotate(-45deg);\n    transform-origin: 0 100%;\n  }\n\n  .heart:after {\n    left: 0;\n    transform: rotate(45deg);\n    transform-origin: 100% 100%;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-complementary);\n\n    &:hover {\n        text-decoration: underline overline #111;\n    }\n}\n\n/* Modules */\n\n.flex_centered_col {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.padding_bottom_s {\n    padding-bottom: var(--dist_s);\n}\n\n.padding_bottom_x {\n    padding-bottom: var(--dist_x);\n}\n\n.padding_left_s {\n    padding-left: var(--dist_s);\n}\n\n.margin_left_s {\n    margin-left: var(--dist_s);\n}\n\n.margin_bottom_s {\n    margin-bottom: var(--dist_s);\n}\n\n.margin_bottom_L {\n    margin-bottom: var(--dist_L);\n}\n\n.flex_hor {\n    display: flex;\n}\n\n.none {\n    display: none;\n}\n\n.text_centered {\n    text-align: center;\n}\n\n.underlined {\n    text-decoration: underline var(--color_bottom);\n}\n\n\n\n\n/* Media Queries */\n\n@media (width > 1250px) {\n    #content {\n        margin: 0 15em 0 15em;\n    }\n}\n\n@media (width < 1600px) {\n    .items {\n        grid-template-columns: repeat(2, minmax(200px, 1fr));\n    }\n}\n\n@media (width < 1250px) {\n    #content {\n        margin: 0 8em 0 8em;\n    }\n\n}\n\n@media (width < 1000px) {\n    .items {\n        grid-template-columns: repeat(1, minmax(200px, 1fr));\n    }\n}\n\n@media (width < 720px) {\n    #content {\n        margin: 0 1em 0 1em;\n    }\n}\n\n@media (width < 698) {\n\n}\n',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,m="".concat(l," ").concat(d);i[l]=d+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),s=t.n(c),l=t(56),d=t.n(l),m=t(540),u=t.n(m),p=t(113),f=t.n(p),g=t(208),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),r()(g.A,v),g.A&&g.A.locals&&g.A.locals;const b=document.querySelector("#home_button"),h=document.querySelector("#menu_button"),x=document.querySelector("#about_button"),y=document.querySelector("#home_container"),_=document.querySelector("#menu_container"),w=document.querySelector("#about_container"),k=document.querySelectorAll('[type="container"]');function z(n){switch(function(){console.log("Hiding all");for(let n of k)n.classList.contains("none")||n.classList.add("none")}(),n.target.id){case"home_button":console.log("Showing home container"),y.classList.remove("none");break;case"menu_button":console.log("Showing menu container"),_.classList.remove("none");break;case"about_button":console.log("Showing about container"),w.classList.remove("none");break;default:console.log("Something went wrong")}}b.addEventListener("click",z),h.addEventListener("click",z),x.addEventListener("click",z)})();