(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(5),o=t.n(i),s=(t(11),t(1)),c=t(2);var m=function(){return r.a.createElement("button",{"data-btn":"btn",className:"close"})};var u=[{name:"Header",presents:[{subName:"HeaderOne",component:function(){return r.a.createElement("div",{className:"headerOne titles"},r.a.createElement("h1",{className:"headerOne__title"},"Awesome One Title"))}},{subName:"HeaderTwo",component:function(){return r.a.createElement("div",{className:"headerTwo titles"},r.a.createElement("h1",{className:"headerTwo__title"},"Amaizing Two Title"))}},{subName:"HeaderThree",component:function(){return r.a.createElement("div",{className:"headerThree titles"},r.a.createElement("h1",{className:"headerThree__title"},"Incredible Three Title"))}}]},{name:"Main",presents:[{subName:"MainOne",component:function(e){var a=e.iterKey;return r.a.createElement("div",{"data-key":a,"data-name":"MainOne",className:"mainOne mains component"},r.a.createElement(m,null),r.a.createElement("p",{className:"mainOne__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, amet asperiores similique, doloremque veniam quasi molestias tempora debitis, eveniet impedit quam. Doloremque eius molestiae nisi ducimus accusamus, neque et repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, exercitationem accusantium dolores hic vitae nesciunt veniam tempore enim fuga? Quis alias quaerat eius nisi est, corporis rem nostrum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, exercitationem accusantium dolores hic vitae nesciunt veniam tempore enim fuga? Quis alias quaerat eius nisi est, corporis rem nostrum commodi."))}},{subName:"MainTwo",component:function(e){var a=e.iterKey;return r.a.createElement("div",{"data-key":a,"data-name":"MainTwo",className:"mainTwo mains component"},r.a.createElement(m,null),r.a.createElement("p",{className:"mainTwo__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, amet asperiores similique, doloremque veniam quasi molestias tempora debitis, eveniet impedit quam. Doloremque eius molestiae nisi ducimus accusamus, neque et repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, exercitationem accusantium dolores hic vitae nesciunt veniam tempore enim fuga? Quis alias quaerat eius nisi est, corporis rem nostrum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, exercitationem accusantium dolores hic vitae nesciunt veniam tempore enim fuga? Quis alias quaerat eius nisi est, corporis rem nostrum commodi."))}},{subName:"MainThree",component:function(e){var a=e.iterKey;return r.a.createElement("div",{"data-key":a,"data-name":"MainThree",className:"mainThree mains component"},r.a.createElement(m,null),r.a.createElement("p",{className:"mainThree__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, amet asperiores similique, doloremque veniam quasi molestias tempora debitis, eveniet impedit quam. Doloremque eius molestiae nisi ducimus accusamus, neque et repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, exercitationem accusantium dolores hic vitae nesciunt veniam tempore enim fuga? Quis alias quaerat eius nisi est, corporis rem nostrum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, exercitationem accusantium dolores hic vitae nesciunt veniam tempore enim fuga? Quis alias quaerat eius nisi est, corporis rem nostrum commodi."))}}]},{name:"Footer",presents:[{subName:"FooterOne",component:function(){return r.a.createElement("div",{className:"footerOne sprites"},r.a.createElement("p",{className:"footerOne__text"},"-- Powered by React --"))}},{subName:"FooterTwo",component:function(){return r.a.createElement("div",{className:"footerTwo sprites"},r.a.createElement("p",{className:"footerTwo__text"},"-- Powered by Angular --"))}},{subName:"FooterThree",component:function(){return r.a.createElement("div",{className:"footerThree sprites"},r.a.createElement("p",{className:"footerThree__text"},"-- Powered by JavaScript --"))}}]}],l=t(3);var d=function(e){var a=e.category,t=e.currentNode,i=Object(n.useState)({header:[],footer:[],main:[]}),o=Object(c.a)(i,2),m=o[0],u=o[1],d=function e(a){return a.dataset.zone?a:e(a.parentNode)},p=function(e,t){var n;return a.forEach((function(a){a.name.toLowerCase()===e&&a.presents.forEach((function(e){e.subName.toLowerCase()===t&&(n=e.component)}))})),n};return r.a.createElement("div",{onDragLeave:function(e){e.target.style.border="none"},onDragEnter:function(e){e.target.style.border="2px dashed black"},onDragOver:function(e){return e.preventDefault()},onDrop:function(e){var a=e.target;a.style.border="none";var n=d(a);if(n.dataset.zone===t.category){var r=p(t.category,t.target);if(m[n.dataset.zone].length)if("main"===n.dataset.zone){var i=m[n.dataset.zone],o=[i.length+1,r];i.push(o),u(Object(s.a)({},m,Object(l.a)({},n.dataset.zone,i)))}else u(Object(s.a)({},m,Object(l.a)({},n.dataset.zone,[[1,r]])));else u(Object(s.a)({},m,Object(l.a)({},n.dataset.zone,[[1,r]])))}},onClick:function(e){if(e.target.dataset.btn){console.log("\u041a\u041b\u0418\u041a \u041f\u041e \u041a\u041d\u041e\u041f\u041a\u0415 \u0422\u0410\u0420\u0413\u0415\u0422",e.target),console.log("\u041a\u041b\u0418\u041a \u041f\u041e \u041a\u041d\u041e\u041f\u041a\u0415 \u0421\u0422\u0415\u0419\u0422",m);var a=e.target.parentNode;console.log("\u041a\u041e\u041c\u041f\u041e\u041d\u0415\u041d\u0422",a);var t=a.parentNode.dataset.zone;m[t].forEach((function(e,n){var r=Object(c.a)(e,1)[0];if(console.log("\u0426\u0418\u041a\u041b \u041a\u041e\u041c\u041f\u041e\u041d\u0415\u041d\u0422",r),console.log("\u041a\u0415\u0419 \u041a\u041e\u041c\u041f\u041e\u041d\u0415\u041d\u0422",a.dataset.key),String(r)===a.dataset.key){console.log("\u0421\u041e\u0412\u041f\u0410\u041b\u041e \u0421\u0422\u0415\u0419\u0422",m);var i=m[t];i.splice(n,1),u(Object(s.a)({},m,Object(l.a)({},t,i)))}}))}},className:"drag-zone"},r.a.createElement("header",{"data-zone":"header",className:"drag-zone__header"},m.header&&m.header.map((function(e,a){var t=Object(c.a)(e,2),n=t[0],i=t[1];return r.a.createElement(i,{iterKey:n,key:a})}))),r.a.createElement("main",{"data-zone":"main",className:"drag-zone__main"},m.main&&m.main.map((function(e,a){var t=Object(c.a)(e,2),n=t[0],i=t[1];return r.a.createElement(i,{iterKey:n,key:a})}))),r.a.createElement("footer",{"data-zone":"footer",className:"drag-zone__footer"},m.footer&&m.footer.map((function(e,a){var t=Object(c.a)(e,2),n=t[0],i=t[1];return r.a.createElement(i,{iterKey:n,key:a})}))))};var p=function(){var e=Object(n.useState)({subArray:null,currentNode:null}),a=Object(c.a)(e,2),t=a[0],i=a[1],o=function(e){e.dataTransfer.setData("text/html","dragstart"),i(Object(s.a)({},t,{currentNode:{category:t.category,target:e.target.dataset.name}}))},m=function(e){var a=e.target,t=a.parentNode.parentNode.children[1],n=function(e){var a;return u.forEach((function(t){t.name.toLowerCase()===e&&(a=t.presents)})),a}(a.dataset.name);t.style.transition="0.3s",t.style.padding="30px 25px",t.style.overflow="auto",t.style.width="25%",i({category:a.dataset.name,subArray:n})};return r.a.createElement("section",{className:"drag"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"drag-category"},u.map((function(e,a){var t=e.name;return r.a.createElement("li",{"data-name":t.toLowerCase(),key:a,onClick:m,className:"drag-category__item"},t)}))),r.a.createElement("div",{className:"drag-subCategory"},r.a.createElement("div",{onClick:function(e){var a=e.target.parentNode;a.style.transition="0.3s",a.style.padding="0",a.style.overflow="hidden",a.style.width="0",i(Object(s.a)({},t,{subArray:null}))},className:"drag-subCategory__btn"}),r.a.createElement("ul",{className:"drag-subCategory__list"},t.subArray&&t.subArray.map((function(e,a){var t=e.subName;return r.a.createElement("li",{"data-name":t.toLowerCase(),draggable:!0,onDragStart:o,key:a,className:"drag-subCategory__item"},t)})))),r.a.createElement(d,{category:u,currentNode:t.currentNode})))};var g=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.f11c89d1.chunk.js.map