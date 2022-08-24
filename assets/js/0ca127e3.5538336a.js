"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3405],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2712:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Test",s={unversionedId:"bot-builder/Testing",id:"bot-builder/Testing",isDocsHomePage:!1,title:"Test",description:"This section is for testing a chatbot that has already been trained.",source:"@site/docs/bot-builder/5-Testing.md",sourceDirName:"bot-builder",slug:"/bot-builder/Testing",permalink:"/docs/bot-builder/Testing",editUrl:"https://botlhale-ai.github.io/documentation/docs/bot-builder/5-Testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Train",permalink:"/docs/bot-builder/Training"},next:{title:"Deployments",permalink:"/docs/live-bots/Deployments"}},u=[{value:"Quick Test",id:"quick-test",children:[]},{value:"Test on Telegram",id:"test-on-telegram",children:[]}],p={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test"},"Test"),(0,a.kt)("p",null,"This section is for testing a chatbot that has already been trained. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NB: If you leave the Test page, you will have to reload the model. We advise that you open the Test page in a new Tab or Window  should you want to navigate the app while testing.")),(0,a.kt)("h2",{id:"quick-test"},"Quick Test"),(0,a.kt)("p",null,"To test, select the language and the model (chatbot) that you want to test, and specify the fallback accuracy and the fallback MSG (this is a message that the trained bot will trigger when it can\u2019t intelligently respond to a message it received from the user). After selecting the chatbot you can click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Load Model")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/qtest.PNG",alt:"Testing Dashboard"})),(0,a.kt)("p",null,"After the chatbot is loaded a chat interface will pop up, and you can start interacting with the chatbot."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/qtest-msg.PNG",alt:"Chatbot interaction interface"})),(0,a.kt)("h2",{id:"test-on-telegram"},"Test on Telegram"),(0,a.kt)("p",null,"To test on Telegram, you can click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test on Telegram")," tab. Select the language and model that you want to test, and provide a valid telegram bot token. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect to Telegram")," to start a 15 minute testing session."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://sendpulse.com/knowledge-base/chatbot/create-telegram-chatbot"},"click here to learn how to create a bot on telegram!"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/telegramtest.PNG",alt:"Testing on Telegram"})),(0,a.kt)("p",null,"After you connect, the ",(0,a.kt)("strong",{parentName:"p"},"Telegram Testing Models")," table will show you the bot that you just connected to Telegram and you can click on the Telegram button to start testing or just chat with the bot on your phone."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/telegramtestcode.PNG",alt:"Testing Dashboard"})))}d.isMDXComponent=!0}}]);