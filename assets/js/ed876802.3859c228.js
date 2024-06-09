"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6687],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5839:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="FAQs",c={unversionedId:"Platform/bot-builder/FAQs",id:"Platform/bot-builder/FAQs",isDocsHomePage:!1,title:"FAQs",description:"With Botlhale's NLP Toolkit platform, you can create a collection of questions, complete with answers, that are commonly asked about your product or service. These are a useful way of improving the customer's experience and reducing support tickets.",source:"@site/docs/0 - Platform/bot-builder/3 - FAQs.md",sourceDirName:"0 - Platform/bot-builder",slug:"/Platform/bot-builder/FAQs",permalink:"/docs/Platform/bot-builder/FAQs",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/docs/Platform/bot-builder/Entities"},next:{title:"Dialogue Manager",permalink:"/docs/Platform/bot-builder/Dialogue Manager"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,"With Botlhale's NLP Toolkit platform, you can create a collection of questions, complete with answers, that are commonly asked about your product or service. These are a useful way of improving the customer's experience and reducing support tickets. "),(0,a.kt)("p",null,"On Botlhale's platform, these FAQs work similarly to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Intents"},"intents")," in that the chatbot categorises messages to a particular FAQ and returns the response associated with the selected question."),(0,a.kt)("p",null,"Use the following steps to create one or more FAQs for your chatbot."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the FAQs Manager page of the platform, click the ",(0,a.kt)("inlineCode",{parentName:"li"},"+ New FAQ")," button."),(0,a.kt)("li",{parentName:"ol"},"A pop-up window appears, prompting you to assign a name to your new FAQ."),(0,a.kt)("li",{parentName:"ol"},"Enter your desired name and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create FAQ"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on the Edit icon next to your newly created FAQ."),(0,a.kt)("li",{parentName:"ol"},"You are taken to a new page. Here, you can begin adding the question and response associated with this FAQ. Note that this must be added in all the languages supported by your chatbot. "),(0,a.kt)("li",{parentName:"ol"},"Repeat these steps for as many FAQs as needed. ")),(0,a.kt)("p",null,"Once created, these FAQs can be added to your dialogue in the form of button elements via the Dialogue Manager. For more information on this, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Elements#bot-buttons-menu"},"Dialogue Elements")," section of this documentation. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"We are here to help! Please email ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@botlhale.ai"},"support@botlhale.ai")," with any questions.")))))}m.isMDXComponent=!0}}]);