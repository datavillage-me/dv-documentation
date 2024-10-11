(self.webpackChunkdocusaurus_openapi_test=self.webpackChunkdocusaurus_openapi_test||[]).push([[339],{96447:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(74848),o=a(28453),r=(a(43905),a(51107));a(23397),a(19365),a(69016);const i={id:"cagemanager-api",title:"CageManager API",description:"A very cool api to manage very cool cages :-)",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,l={id:"api/cage-manager/cagemanager-api",title:"CageManager API",description:"A very cool api to manage very cool cages :-)",source:"@site/docs/api/cage-manager/cagemanager-api.info.mdx",sourceDirName:"api/cage-manager",slug:"/api/cage-manager/cagemanager-api",permalink:"/dv-documentation/docs/api/cage-manager/cagemanager-api",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"cagemanager-api",title:"CageManager API",description:"A very cool api to manage very cool cages :-)",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"cageManagerSidebar",previous:{title:"Cage Manager",permalink:"/dv-documentation/docs/api/cage-manager"},next:{title:"Cage Deployment",permalink:"/dv-documentation/docs/api/cage-manager/deploy"}},c={},d=[];function u(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: latest"}),"\n",(0,n.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"CageManager API"}),"\n",(0,n.jsx)(t.p,{children:"A very cool api to manage very cool cages :-)"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},69016:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(96540)),r=n(a(4213));t.default=function(e){let{url:t,proxy:a}=e;return o.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},o.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),o.default.createElement("ul",{className:"export-dropdown dropdown__menu"},o.default.createElement("li",null,o.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(96540)),r=a(83262),i=n(a(86025)),s=n(a(15626));t.default=function(e){const{colorMode:t}=(0,r.useColorMode)(),{logo:a,darkLogo:n}=e,l=()=>"dark"===t?n?.altText??a?.altText:a?.altText,c=(0,i.default)(a?.url),d=(0,i.default)(n?.url);return a&&n?o.default.createElement(s.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):a||n?o.default.createElement(s.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4213:function(e,t,a){var n,o,r,i=a(96763);o=[],void 0===(r="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,a)},n.onerror=function(){i.error("could not download file")},n.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,a){var i=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):o(l.href)?n(e,t,a):r(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),a);else if(o(e))n(e,a,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,a,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,a);var r="application/octet-stream"===e.type,i=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&i||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,p=u.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,o):n)||(e.exports=r)}}]);