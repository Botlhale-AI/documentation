"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3049],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7294),r=t(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),i="tabItem_vU9c",l="tabItemActive_cw6a";var p=function(e){var n,t=e.lazy,r=e.block,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,c=a.Children.toArray(e.children),h=null!=d?d:c.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=p?p:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,f=o(),k=f.tabGroupChoices,y=f.setTabGroupChoices,T=(0,a.useState)(g),b=T[0],v=T[1],x=[];if(null!=u){var D=k[u];null!=D&&D!==b&&h.some((function(e){return e.value===D}))&&v(D)}var N=function(e){var n=e.currentTarget,t=x.indexOf(n),a=h[t].value;v(a),null!=u&&(y(u,a),setTimeout((function(){var e,t,a,r,o,s,i,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,o=e.right,s=window,i=s.innerHeight,p=s.innerWidth,t>=0&&o<=p&&r<=i&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.target)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},h.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":b===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:N,onClick:N},null!=t?t:n)}))),t?(0,a.cloneElement)(c.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},7459:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=t(5064),i=t(8215),l=["components"],p={},d="Chatbot API",u={unversionedId:"APIs/Rest APIs/chatbots",id:"APIs/Rest APIs/chatbots",isDocsHomePage:!1,title:"Chatbot API",description:"startConversation POST",source:"@site/docs/1 - APIs/Rest APIs/0-chatbots.md",sourceDirName:"1 - APIs/Rest APIs",slug:"/APIs/Rest APIs/chatbots",permalink:"/docs/APIs/Rest APIs/chatbots",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Response Codes",permalink:"/docs/APIs/Response Codes"},next:{title:"Translation API",permalink:"/docs/APIs/Rest APIs/translate"}},m=[{value:"startConversation <code>POST</code>",id:"startconversation-post",children:[]},{value:"Message  <code>POST</code>",id:"message--post",children:[{value:"Text - Text  <code>example request</code>",id:"text---text--example-request",children:[]},{value:"Text - Speech  <code>example request</code>",id:"text---speech--example-request",children:[]},{value:"Speech - Text  <code>example request</code>",id:"speech---text--example-request",children:[]},{value:"Speech - Speech  <code>example request</code>",id:"speech---speech--example-request",children:[]}]}],c={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chatbot-api"},"Chatbot API"),(0,o.kt)("h2",{id:"startconversation-post"},"startConversation ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/startConversation\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"You need to include an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/APIs/Authentication#generate-a-bearer-token-post"},"Authentication")," page of this documentation for information on how to generate authentication token codes.")))),(0,o.kt)("p",null,"This endpoint allows you to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationID")," valid for 24 hours. This is a unique ID you need to provide to keep track of different conversations."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BotID"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies the bot to which the message should be sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the language in which the user interacts with the bot. ",(0,o.kt)("br",null),"See the ",(0,o.kt)("a",{parentName:"td",href:"/docs/APIs/Rest%20APIs/Languages"},"Supported Languages")," page for a list of supported languages and codes.")))),(0,o.kt)("h4",{id:"request-example"},"Request Example"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"https://api.botlhale.xyz/startConversation\"\n\npayload={\n  'BotID': 'YPBDDDGASKSEVTHT',\n  'LanguageCode': 'English'\n  }\n  \nfiles=[\n\n]\nheaders = {\"Authorization\": \"Bearer <IdToken>\"}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(i.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.botlhale.xyz/startConversation' \\\n-H 'Authorization: Bearer <IdToken>' \\\n--form 'BotID=\"YPBDDDGASKSEVTHT\"' \\\n--form 'LanguageCode=\"English\"'\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("BotID", "YPBDDDGASKSEVTHT");\nformdata.append("LanguageCode", "English");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\',\n  headers: {"Authorization": "Bearer <IdToken>"}\n};\n\nfetch("https://api.botlhale.xyz/startConversation", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(i.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fs = require('fs');\n\nvar options = {\n  'method': 'POST',\n  'hostname': 'https://api.botlhale.xyz',\n  'path': '/startConversation',\n  'headers': {\n      \"Authorization\": \"Bearer <IdToken>\"\n  },\n  'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"BotID\\\"\\r\\n\\r\\nYPBDDDGASKSEVTHT\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"LanguageCode\\\"\\r\\n\\r\\nEnglish\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();\n")))),(0,o.kt)("h4",{id:"response-body"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ConversationID": "p52C32Li4xx5"\n}\n')),(0,o.kt)("h2",{id:"message--post"},"Message  ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/message\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"You need to include an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/APIs/Authentication#generate-a-bearer-token-post"},"Authentication")," page of this documentation for information on how to generate authentication token codes.")))),(0,o.kt)("p",null,"This endpoint handles the messages. It receives messages from the user and returns the bot response in JSON format."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BotID"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies the bot to which the message should be sent.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},"This is the language in which the user interacts with the bot. ",(0,o.kt)("br",null),"See the ",(0,o.kt)("a",{parentName:"td",href:"/docs/APIs/Rest%20APIs/Languages"},"Supported Languages")," page for a list of supported languages and codes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConversationID"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},"This is a unique Id you need to provide to keep track of different conversations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies whether the user message is speech or text.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ResponseType"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies whether the response should be speech or text.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TextMsg"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Required if MessageType = 'text'"),(0,o.kt)("td",{parentName:"tr",align:null},"Text message from the user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SpeechFile"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"file")),(0,o.kt)("td",{parentName:"tr",align:null},"Required if MessageType = 'speech'"),(0,o.kt)("td",{parentName:"tr",align:null},"Binary audio file of the user's message")))),(0,o.kt)("h3",{id:"text---text--example-request"},"Text - Text  ",(0,o.kt)("inlineCode",{parentName:"h3"},"example request")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"https://api.botlhale.xyz/message\"\n\npayload={'BotID': 'YPBDDDGASKSEVTHT',\n'LanguageCode': 'English',\n'ConversationID': 'p52C32Li4xx5',\n'MessageType': 'text',\n'ResponseType': 'text',\n'TextMsg': 'hello'}\nfiles=[\n\n]\nheaders = {\"Authorization\": \"Bearer <IdToken>\"}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(i.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.botlhale.xyz/message' \\\n-H \"Authorization: Bearer <IdToken>\" \\\n--form 'BotID=\"YPBDDDGASKSEVTHT\"' \\\n--form 'LanguageCode=\"English\"' \\\n--form 'ConversationID=\"p52C32Li4xx5\"' \\\n--form 'MessageType=\"text\"' \\\n--form 'ResponseType=\"text\"' \\\n--form 'TextMsg=\"hello\"'\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("BotID", "YPBDDDGASKSEVTHT");\nformdata.append("LanguageCode", "English");\nformdata.append("ConversationID", "p52C32Li4xx5");\nformdata.append("MessageType", "text");\nformdata.append("ResponseType", "text");\nformdata.append("TextMsg", "hello");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\',\n  headers: {"Authorization": "Bearer <IdToken>"}\n  \n};\n\nfetch("https://api.botlhale.xyz/message", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(i.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fs = require('fs');\n\nvar options = {\n  'method': 'POST',\n  'hostname': 'https://api.botlhale.xyz',\n  'path': '/message',\n  'headers': {\n    \"Authorization\": \"Bearer <IdToken>\"\n  },\n  'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"BotID\\\"\\r\\n\\r\\nYPBDDDGASKSEVTHT\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"LanguageCode\\\"\\r\\n\\r\\nEnglish\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"ConversationID\\\"\\r\\n\\r\\np52C32Li4xx5\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"MessageType\\\"\\r\\n\\r\\ntext\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"ResponseType\\\"\\r\\n\\r\\ntext\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"TextMsg\\\"\\r\\n\\r\\nhello\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();\n")))),(0,o.kt)("h4",{id:"response-body-1"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "BotID":"<BotID>",\n    "Buttons":[{\n         "payload":"/small",\n         "title":"Small"\n     },\n         {\n         "payload":"/medium",\n         "title":"Medium"\n     }, \n          {\n         "payload":"/large",\n         "title":"Large"\n     }, \n     ],\n    "Confidence":1.0,\n    "ConversationID":"<ConversationID>",\n    "DateReceived":"16/06/2021 10:36:26",\n    "Entities":[{\n        "confidence_entity": 0.8229705691337585,\n        "end": 17,\n        "entity": "coffee_type",\n        "start": 12,\n        "value": "caffe latte",\n     }],\n    "Intent":"order_coffee",\n    "LanguageCode":"English",\n    "MessageID":"<MessageID>",\n    "TextMsg":"Can I get a latte",\n    "TextResponse":["What size would you like?"]\n}\n')),(0,o.kt)("h3",{id:"text---speech--example-request"},"Text - Speech  ",(0,o.kt)("inlineCode",{parentName:"h3"},"example request")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"https://api.botlhale.xyz/message\"\n\npayload={'BotID': 'YPBDDDGASKSEVTHT',\n'LanguageCode': 'English',\n'ConversationID': 'p52C32Li4xx5',\n'MessageType': 'text',\n'ResponseType': 'speech',\n'TextMsg': 'hello'}\nfiles=[\n\n]\nheaders = {\"Authorization\": \"Bearer <IdToken>\"}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(i.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.botlhale.xyz/message' \\\n-H \"Authorization: Bearer <IdToken>\"\n--form 'BotID=\"YPBDDDGASKSEVTHT\"' \\\n--form 'LanguageCode=\"English\"' \\\n--form 'ConversationID=\"p52C32Li4xx5\"' \\\n--form 'MessageType=\"text\"' \\\n--form 'ResponseType=\"speech\"' \\\n--form 'TextMsg=\"hello\"'\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("BotID", "YPBDDDGASKSEVTHT");\nformdata.append("LanguageCode", "English");\nformdata.append("ConversationID", "p52C32Li4xx5");\nformdata.append("MessageType", "text");\nformdata.append("ResponseType", "speech");\nformdata.append("TextMsg", "hello");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\',\n  headers: {"Authorization": "Bearer <IdToken>"}\n};\n\nfetch("https://api.botlhale.xyz/message", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(i.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fs = require('fs');\n\nvar options = {\n  'method': 'POST',\n  'hostname': 'https://api.botlhale.xyz',\n  'path': '/message',\n  'headers': {\n    \"Authorization\": \"Bearer <IdToken>\",\n  },\n  'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"BotID\\\"\\r\\n\\r\\nYPBDDDGASKSEVTHT\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"LanguageCode\\\"\\r\\n\\r\\nEnglish\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"ConversationID\\\"\\r\\n\\r\\np52C32Li4xx5\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"MessageType\\\"\\r\\n\\r\\ntext\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"ResponseType\\\"\\r\\n\\r\\nspeech\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"TextMsg\\\"\\r\\n\\r\\nhello\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();\n")))),(0,o.kt)("h4",{id:"response-body-2"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "BotID":"<BotID>",\n    "Buttons":[{\n         "payload":"/small",\n         "title":"Small"\n     },\n         {\n         "payload":"/medium",\n         "title":"Medium"\n     }, \n          {\n         "payload":"/large",\n         "title":"Large"\n     }, \n     ],\n    "Confidence":1.0,\n    "ConversationID":"<ConversationID>",\n    "DateReceived":"16/06/2021 10:36:26",\n    "Entities":[{\n        "confidence_entity": 0.8229705691337585,\n        "end": 17,\n        "entity": "coffee_type",\n        "start": 12,\n        "value": "caffe latte"\n     }],\n    "Intent":"order_coffee",\n    "LanguageCode":"English",\n    "MessageID":"<MessageID>",\n    "SpeechResponseURL": "<URL>",\n    "TextMsg":"Can I get a latte",\n    "TextResponse":["What size would you like?"]\n}\n')),(0,o.kt)("h3",{id:"speech---text--example-request"},"Speech - Text  ",(0,o.kt)("inlineCode",{parentName:"h3"},"example request")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"https://api.botlhale.xyz/message\"\n\npayload={'BotID': 'dshfgjdsgfd',\n'LanguageCode': 'English',\n'ConversationID': 'fdgsgfd',\n'MessageType': 'speech',\n'ResponseType': 'text'}\nfiles=[\n  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))\n]\nheaders = {\"Authorization\": \"Bearer <IdToken>\"}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(i.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.botlhale.xyz/message' \\\n-H \"Authorization: Bearer <IdToken>\" \\\n--form 'BotID=\"dshfgjdsgfd\"' \\\n--form 'LanguageCode=\"English\"' \\\n--form 'ConversationID=\"fdgsgfd\"' \\\n--form 'MessageType=\"speech\"' \\\n--form 'ResponseType=\"text\"' \\\n--form 'SpeechFile=@\"6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav\"'\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("BotID", "dshfgjdsgfd");\nformdata.append("LanguageCode", "English");\nformdata.append("ConversationID", "fdgsgfd");\nformdata.append("MessageType", "speech");\nformdata.append("ResponseType", "text");\nformdata.append("SpeechFile", fileInput.files[0], "[PROXY]");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\',\n  headers: {"Authorization": "Bearer <IdToken>"}\n};\n\nfetch("https://api.botlhale.xyz/message", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(i.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var https = require(\'follow-redirects\').https;\nvar fs = require(\'fs\');\n\nvar options = {\n  \'method\': \'POST\',\n  \'hostname\': \'https://api.botlhale.xyz\',\n  \'path\': \'/message\',\n  \'headers\': {\n   "Authorization": "Bearer <IdToken>"\n  },\n  \'maxRedirects\': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on("error", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"BotID\\"\\r\\n\\r\\ndshfgjdsgfd\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"LanguageCode\\"\\r\\n\\r\\nEnglish\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"ConversationID\\"\\r\\n\\r\\nfdgsgfd\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"MessageType\\"\\r\\n\\r\\nspeech\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"ResponseType\\"\\r\\n\\r\\ntext\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"SpeechFile\\"; filename=\\"[PROXY]\\"\\r\\nContent-Type: \\"{Insert_File_Content_Type}\\"\\r\\n\\r\\n" + fs.readFileSync(\'6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav\') + "\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";\n\nreq.setHeader(\'content-type\', \'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\');\n\nreq.write(postData);\n\nreq.end();\n')))),(0,o.kt)("h4",{id:"response-body-3"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "BotID":"<BotID>",\n    "Buttons":[{\n         "payload":"/small",\n         "title":"Small"\n     },\n         {\n         "payload":"/medium",\n         "title":"Medium"\n     }, \n          {\n         "payload":"/large",\n         "title":"Large"\n     }, \n     ],\n    "Confidence":1.0,\n    "ConversationID":"<ConversationID>",\n    "DateReceived":"16/06/2021 10:36:26",\n    "Entities":[{\n        "confidence_entity": 0.8229705691337585,\n        "end": 17,\n        "entity": "coffee_type",\n        "start": 12,\n        "value": "caffe latte",\n     }],\n    "Intent":"order_coffee",\n    "LanguageCode":"English",\n    "MessageID":"<MessageID>",\n    "Transcription": "Can I get a latte",\n    "TextResponse":["What size would you like?"]\n}\n')),(0,o.kt)("h3",{id:"speech---speech--example-request"},"Speech - Speech  ",(0,o.kt)("inlineCode",{parentName:"h3"},"example request")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"https://api.botlhale.xyz/message\"\n\npayload={'BotID': 'dshfgjdsgfd',\n'LanguageCode': 'English',\n'ConversationID': 'fdgsgfd',\n'MessageType': 'speech',\n'ResponseType': 'text'}\nfiles=[\n  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))\n]\nheaders = {\"Authorization\": \"Bearer <IdToken>\"}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(i.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.botlhale.xyz/message' \\\n-H \"Authorization: Bearer <IdToken>\" \\\n--form 'BotID=\"dshfgjdsgfd\"' \\\n--form 'LanguageCode=\"English\"' \\\n--form 'ConversationID=\"fdgsgfd\"' \\\n--form 'MessageType=\"speech\"' \\\n--form 'ResponseType=\"text\"' \\\n--form 'SpeechFile=@\"jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav\"'\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("BotID", "dshfgjdsgfd");\nformdata.append("LanguageCode", "English");\nformdata.append("ConversationID", "fdgsgfd");\nformdata.append("MessageType", "speech");\nformdata.append("ResponseType", "text");\nformdata.append("SpeechFile", fileInput.files[0], "[PROXY]");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\',\n  headers: {"Authorization": "Bearer <IdToken>"}\n};\n\nfetch("https://api.botlhale.xyz/message", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(i.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var https = require(\'follow-redirects\').https;\nvar fs = require(\'fs\');\n\nvar options = {\n  \'method\': \'POST\',\n  \'hostname\': \'https://api.botlhale.xyz\',\n  \'path\': \'/message\',\n  \'headers\': {\n     "Authorization": "Bearer <IdToken>"\n  },\n  \'maxRedirects\': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on("error", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"BotID\\"\\r\\n\\r\\ndshfgjdsgfd\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"LanguageCode\\"\\r\\n\\r\\nEnglish\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"ConversationID\\"\\r\\n\\r\\nfdgsgfd\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"MessageType\\"\\r\\n\\r\\nspeech\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"ResponseType\\"\\r\\n\\r\\ntext\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\"SpeechFile\\"; filename=\\"[PROXY]\\"\\r\\nContent-Type: \\"{Insert_File_Content_Type}\\"\\r\\n\\r\\n" + fs.readFileSync(\'jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav\') + "\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";\n\nreq.setHeader(\'content-type\', \'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\');\n\nreq.write(postData);\n\nreq.end();\n')))),(0,o.kt)("h4",{id:"response-body-4"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "BotID":"<BotID>",\n    "Buttons":[{\n         "payload":"/small",\n         "title":"Small"\n     },\n         {\n         "payload":"/medium",\n         "title":"Medium"\n     }, \n          {\n         "payload":"/large",\n         "title":"Large"\n     }, \n     ],\n    "Confidence":1.0,\n    "ConversationID":"<ConversationID>",\n    "DateReceived":"16/06/2021 10:36:26",\n    "Entities":[{\n        "confidence_entity": 0.8229705691337585,\n        "end": 17,\n        "entity": "coffee_type",\n        "start": 12,\n        "value": "caffe latte"\n     }],\n    "Intent":"order_coffee",\n    "LanguageCode":"English",\n    "MessageID":"<MessageID>",\n    "SpeechResponseURL": "<URL>",\n    "Transcription": "Can I get a latte",\n    "TextResponse":["What size would you like?"]\n}\n')))}h.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);