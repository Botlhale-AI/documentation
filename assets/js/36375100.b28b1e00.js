"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5460],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_vU9c",l="tabItemActive_cw6a";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,h=r.Children.toArray(e.children),m=null!=c?c:h.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),b=k.tabGroupChoices,v=k.setTabGroupChoices,y=(0,r.useState)(f),g=y[0],T=y[1],A=[];if(null!=p){var N=b[p];null!=N&&N!==g&&m.some((function(e){return e.value===N}))&&T(N)}var P=function(e){var t=e.currentTarget,n=A.indexOf(t),r=m[n].value;T(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=A.indexOf(e.target)+1;n=A[r]||A[0];break;case"ArrowLeft":var a=A.indexOf(e.target)-1;n=A[a]||A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:E,onFocus:P,onClick:P},null!=n?n:t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3259:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),s=n(8215),l=["components"],u={},c="Authentication",p={unversionedId:"APIs/Authentication",id:"APIs/Authentication",isDocsHomePage:!1,title:"Authentication",description:"The Botlhale API uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. You can get your API keys by going to Profile > API on the platform.",source:"@site/docs/1 - APIs/1 - Authentication.md",sourceDirName:"1 - APIs",slug:"/APIs/Authentication",permalink:"/docs/APIs/Authentication",editUrl:"https://botlhale-ai.github.io/documentation/docs/1 - APIs/1 - Authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart Guide",permalink:"/docs/APIs/Quickstart"},next:{title:"Response Codes",permalink:"/docs/APIs/Response Codes"}},d=[{value:"What is Bearer Authentication?",id:"what-is-bearer-authentication",children:[]},{value:"Generate A Bearer Token <code>POST</code>",id:"generate-a-bearer-token-post",children:[{value:"Request Example",id:"request-example",children:[]}]},{value:"API Auth",id:"api-auth",children:[]}],h={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The Botlhale API uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. You can get your API keys by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile > API")," on the platform."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can get your API keys by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile > API")," on the platform."))),(0,o.kt)("p",null,"Authentication to the all API endpoints is performed via Bearer Authentication. To perform Bearer Authentication you first need to provide your API key as the basic auth username value and password to ",(0,o.kt)("inlineCode",{parentName:"p"},"generateAuthToken")," endpoint and use ",(0,o.kt)("inlineCode",{parentName:"p"},"IdToken")," in the response as Bearer token for all other endpoints. "),(0,o.kt)("h2",{id:"what-is-bearer-authentication"},"What is Bearer Authentication?"),(0,o.kt)("p",null,"Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The name ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer authentication")," can be understood as ",(0,o.kt)("inlineCode",{parentName:"p"},"give access to the bearer of this token.")," The bearer token is a cryptic string, usually generated by the server in response to a login request. The client must send this token in the Authorization header when making requests to protected resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Authorization: Bearer <IdToken>\n")),(0,o.kt)("p",null,"All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,o.kt)("h2",{id:"generate-a-bearer-token-post"},"Generate A Bearer Token ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/generateAuthToken\n\n")),(0,o.kt)("p",null,"This endpoint generates bearer auth token for secure access to our API."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"REFRESH_TOKEN"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required"),". Refresh token to genrate a new access token.")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"request-example"},"Request Example"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nurl = "https://api.botlhale.xyz/generateAuthToken"\n\npayload={\'REFRESH_TOKEN\': <REFRESH_TOKEN>,}\nfiles=[]\n\nheaders = {}\n\nresponse = requests.request("POST", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n'))),(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var formdata = new FormData();\nformdata.append(\"REFRESH_TOKEN\", REFRESH_TOKEN);\n\nvar requestOptions = {\nmethod: 'POST',\nbody: formdata,\nredirect: 'follow'\n};\n\nfetch(\"https://api.botlhale.xyz/generateAuthToken\", requestOptions)\n.then(response => response.text())\n.then(result => console.log(result))\n.catch(error => console.log('error', error));   \n"))),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJs - Request",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var request = require('request');\nvar options = {\n  'method': 'POST',\n  'url': 'https://api.botlhale.xyz/generateAuthToken',\n  'headers': {\n\n  },\n  formData: {\n    'REFRESH_TOKEN': '<IdToken>'\n  }\n};\nrequest(options, function (error, response) {\n  if (error) throw new Error(error);\n  console.log(response.body);\n});\n"))),(0,o.kt)(s.Z,{value:"js2",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request POST 'https://api.botlhale.io/generateAuthToken' \\\n--form 'REFRESH_TOKEN=<REFRESH_TOKEN>'\n")))),(0,o.kt)("h4",{id:"response-body"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "AuthenticationResult": {\n        "AccessToken": "YOUR_ACCESS_TOKEN",\n        "ExpiresIn": 3600,\n        "IdToken": "YOUR_ID_TOKEN",\n        "RefreshToken": "YOUR_REFRESH_TOKEN",\n        "TokenType": "Bearer"\n    }\n }\n')),(0,o.kt)("h2",{id:"api-auth"},"API Auth"),(0,o.kt)("p",null,"Include ",(0,o.kt)("inlineCode",{parentName:"p"},"IdToken")," as Bearer Token in headers for Authorization on other API endpoints. All API endpoints require a Bearer Token in header for example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'headers = {"Authorization": "Bearer <IdToken>"}\n')))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);