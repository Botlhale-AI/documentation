"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1495],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_vU9c",l="tabItemActive_cw6a";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),h=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),v=g.tabGroupChoices,k=g.setTabGroupChoices,b=(0,a.useState)(f),y=b[0],N=b[1],T=[];if(null!=p){var P=v[p];null!=P&&P!==y&&h.some((function(e){return e.value===P}))&&N(P)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;N(a),null!=p&&(k(p,a),setTimeout((function(){var e,n,a,r,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.target)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3134:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),s=n(8215),l=["components"],u={},c="Text-to-Speech API",p={unversionedId:"APIs/Rest APIs/Speech APIs/TTS",id:"APIs/Rest APIs/Speech APIs/TTS",isDocsHomePage:!1,title:"Text-to-Speech API",description:"TTS POST",source:"@site/docs/1 - APIs/Rest APIs/Speech APIs/1 - TTS.md",sourceDirName:"1 - APIs/Rest APIs/Speech APIs",slug:"/APIs/Rest APIs/Speech APIs/TTS",permalink:"/docs/APIs/Rest APIs/Speech APIs/TTS",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported Languages",permalink:"/docs/APIs/Rest APIs/Languages"},next:{title:"Speech-to-Text API Overview",permalink:"/docs/APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/Overview"}},d=[{value:"TTS <code>POST</code>",id:"tts-post",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-to-speech-api"},"Text-to-Speech API"),(0,o.kt)("h2",{id:"tts-post"},"TTS ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/tts\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"You need to include an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/APIs/Authentication#generate-a-bearer-token-post"},"Authentication")," page of this documentation for information on how to generate authentication token codes.")))),(0,o.kt)("p",null,"This endpoint handles single text to speech conversion."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TextMsg"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the text message from the user to the bot.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the language in which the user interacts with the bot. ",(0,o.kt)("br",null),"See the ",(0,o.kt)("a",{parentName:"td",href:"/docs/APIs/Rest%20APIs/Languages"},"Supported Languages")," page for a list of supported languages and codes.")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"request-example"},"Request Example"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"https://api.botlhale.xyz/tts\"\n\npayload={\n  'LanguageCode': 'xh-ZA',\n  'TextMsg': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'\n  }\nfiles=[\n\n]\nheaders = {\n  'Authorization': 'Bearer <IdToken>'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(s.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.botlhale.xyz/tts' \\\n--header 'Authorization: Bearer <IdToken>' \\\n--form 'LanguageCode=\"xh-ZA\"' \\\n--form 'TextMsg=\"Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.\"'\n"))),(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer <IdToken>");\n\nvar formdata = new FormData();\nformdata.append("LanguageCode", "xh-ZA");\nformdata.append("TextMsg", "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.");\n\nvar requestOptions = {\n  method: \'POST\',\n  headers: myHeaders,\n  body: formdata,\n  redirect: \'follow\'\n};\n\nfetch("https://api.botlhale.xyz/tts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJs - Request",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var request = require('request');\nvar options = {\n  'method': 'POST',\n  'url': 'https://api.botlhale.xyz/tts',\n  'headers': {\n    'Authorization': 'Bearer <IdToken>'\n  },\n  formData: {\n    'LanguageCode': 'xh-ZA',\n    'TextMsg': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'\n  }\n};\nrequest(options, function (error, response) {\n  if (error) throw new Error(error);\n  console.log(response.body);\n});\n")))),(0,o.kt)("h4",{id:"response-body"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DateReceived": "01/05/2021 15:38:35",\n    "LanguageCode": "xh-ZA",\n    "SpeechResponseURL": "<URL>",\n    "TextMsg": "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala."\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"We are here to help! Please email ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@botlhale.ai"},"support@botlhale.ai")," with any questions.")))))}h.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);