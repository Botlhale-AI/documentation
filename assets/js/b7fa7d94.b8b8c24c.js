"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5920:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={},c="Live Chats",l={unversionedId:"Platform/help-desk/Live Chats",id:"Platform/help-desk/Live Chats",isDocsHomePage:!1,title:"Live Chats",description:"This tab enables your end-users to communicate with a LIVE human agent.",source:"@site/docs/0 - Platform/help-desk/1 - Live Chats.md",sourceDirName:"0 - Platform/help-desk",slug:"/Platform/help-desk/Live Chats",permalink:"/docs/Platform/help-desk/Live Chats",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Knowledge Base",permalink:"/docs/Platform/live-bots/Knowledge Base"},next:{title:"Archived Chats",permalink:"/docs/Platform/help-desk/Archived Chats"}},p=[{value:"Human Handoff Integration",id:"human-handoff-integration",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"live-chats"},"Live Chats"),(0,r.kt)("p",null,"This tab enables your end-users to communicate with a LIVE human agent."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://stoplight.io/api/v1/projects/cHJqOjU4NzU5/images/Qa56xllEezc",alt:"live_chat.png"})),(0,r.kt)("p",null,"This section covers the interaction between the human (and agent from Client) and the customer (end-user). This is triggered after the human hand-over function is activated on the chatbot by the customer."),(0,r.kt)("h2",{id:"human-handoff-integration"},"Human Handoff Integration"),(0,r.kt)("p",null,"To hand over the conversation between a user and a bot to a human agent, the bot builder has a pre-defined dialogue that can be selected to enable the feature. The figure below shows the pre-defined dialogue option."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://botlhale-docs1-new.s3.amazonaws.com/create-live.PNG",alt:"deploy"})),(0,r.kt)("p",null,"The human handoff dialogue contains two dialogue streams 1) provide_handoff_options and 2) execute_handoff as can be seen in the figure below. These 2 dialogues work off the shell and do not require any modifications. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://botlhale-docs1-new.s3.amazonaws.com/create-live-show.PNG",alt:"deploy"})),(0,r.kt)("p",null,"The human handoff capability uses Socket.IO (",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v3/"},"https://socket.io/docs/v3/"),") which is a library that allows message passing between a server and multiple clients. All chatbots with human handoff setup will need to connect to our socketIO server: ",(0,r.kt)("a",{parentName:"p",href:"https://app.botlhale.xyz/live_server"},"https://app.botlhale.xyz/live_server")),(0,r.kt)("p",null,"Below are code snippets to setup socket IO, and event listener and emitter functions to interface with our socket IO server. The code snippets are for a JavaScript client, however if your bot is integrated on a non-JS environment, there are also several client implementations in other languages at ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v3/"},"https://socket.io/docs/v3/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script src=\"https://cdn.socket.io/3.1.3/socket.io.min.js\" \nintegrity=\"sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh\" crossorigin=\"anonymous\"><\/script>\n\n// SOCKET IO initialisation !\nconst socket = io.connect('https://app.botlhale.io/live_agent', {autoConnect: false});\n\n// first time connecting to the main socket !\nsocket.on('startConversation', function() {\n   socket.emit('username', {\n       \"ConversationID\": ConversationID,\n       \"BotID\": BotID\n   });\n});\n \n// receiving a message !\nsocket.on('to_user', function(data) {\n   let text = data.message;\n   setBotResponse(text);\n});\n \n// send messages to clients !\nsocket.on('messages', function(data) {\n   let messages = []\n   // populate messages variable with user-bot conversation !\n   // each element in the array must have the following format:\n   // {'sender': String, 'message': String}\n   // if message belongs to the user, then the value of 'sender' must be 'user'\n   // if message belongs to the bot, then the value of 'sender' must be 'bot'\n   socket.emit('messages_to_client', {\n       \"messages\": messages,\n       \"bot_id\": BotID\n   });\n});\n \n// disconnecting socket !\nsocket.on('disconnect_socket', function(data) {\n   socket.disconnect();\n});\n\n // Sending a message\nif (socket.connected) {\n  // Send a message to socket \n   socket.emit('from_user', {\n       \"message\": message,\n       \"ConversationID\": ConversationID,\n       \"BotID\": BotID\n   });\n \n} else {\n  // Send a message bot\n}\n\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"We are here to help! For any questions and queries about this feature, please email ",(0,r.kt)("a",{parentName:"em",href:"mailto:support@botlhale.ai"},"support@botlhale.ai")))))))}m.isMDXComponent=!0}}]);