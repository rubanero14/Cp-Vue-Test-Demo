(function(){"use strict";var t={8052:function(t,e,o){var s=o(9242),r=o(3396),a=o(7139);const n={class:"row"},i=(0,r._)("div",{class:"col-4"},[(0,r._)("a",{class:"btn",href:"https://github.com/rubanero14/CP-Vue-Test"},"View Source Code")],-1),c=(0,r._)("div",{class:"col-4"},[(0,r._)("h1",{class:"text-center"},"Articles")],-1),l={class:"col-4"},d=(0,r.Uk)("Light Mode "),u=(0,r._)("i",{class:"bi bi-brightness-high"},null,-1),g=[d,u],f=(0,r.Uk)("Dark Mode "),v=(0,r._)("i",{class:"bi bi-moon"},null,-1),k=[f,v],p=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-12"})],-1),h={class:"container"},b={class:"row"},_={key:0,class:"col-12"},w=(0,r._)("div",{class:"card"},[(0,r._)("div",{class:"d-flex justify-content-center align-items-center"},[(0,r._)("p",null,"Click below to load the latest articles")])],-1),y={key:0,class:"text-center"},m=(0,r._)("div",{class:"spinner-border",role:"status"},[(0,r._)("span",{class:"visually-hidden"},"Loading...")],-1),D=[m],L={class:"col-12"},O={key:0},$={key:1,class:"row"},C={class:"card text-center"},j={key:2},x={class:"col-12"},M={class:"text-center"};function q(t,e,o,d,u,f){return(0,r.wg)(),(0,r.iD)("section",{class:(0,a.C_)({dark:t.$store.state.darkIsOn})},[(0,r._)("header",{class:(0,a.C_)({"mb-0":t.$store.state.articleLoaded})},[(0,r._)("div",n,[i,c,(0,r._)("div",l,[t.$store.state.darkIsOn?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn toggle",onClick:e[0]||(e[0]=(...t)=>f.toggleDarkMode&&f.toggleDarkMode(...t))},g)):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"btn toggle",onClick:e[1]||(e[1]=(...t)=>f.toggleDarkMode&&f.toggleDarkMode(...t))},k))])])],2),p,(0,r._)("div",h,[(0,r._)("div",b,[t.$store.state.articleLoaded?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",_,[w,t.$store.state.isLoading?((0,r.wg)(),(0,r.iD)("div",y,D)):(0,r.kq)("",!0)])),(0,r._)("div",L,[t.$store.state.articleLoaded?((0,r.wg)(),(0,r.iD)("hr",O)):(0,r.kq)("",!0),t.$store.state.articleLoaded?((0,r.wg)(),(0,r.iD)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.$store.state.todos,(t=>((0,r.wg)(),(0,r.j4)(s.W3,{class:"col-12 col-md-6 col-lg-4",tag:"div",key:t.id,id:t.id},{default:(0,r.w5)((()=>[(0,r._)("div",C,[(0,r._)("p",null,(0,a.zw)(t.title),1)])])),_:2},1032,["id"])))),128))])):(0,r.kq)("",!0),t.$store.state.articleLoaded?((0,r.wg)(),(0,r.iD)("hr",j)):(0,r.kq)("",!0)])]),(0,r._)("div",x,[(0,r._)("div",M,[t.$store.state.articleLoaded?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn",onClick:e[2]||(e[2]=(...t)=>f.loadArticles&&f.loadArticles(...t))},"Click Here")),t.$store.state.articleLoaded?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"btn",onClick:e[3]||(e[3]=(...t)=>f.resetPage&&f.resetPage(...t))},"Back")):(0,r.kq)("",!0)])])])],2)}var A={data(){return{}},methods:{loadArticles(){this.$store.commit("loadData")},resetPage(){this.$store.commit("resetApp")},toggleDarkMode(){return this.$store.state.darkIsOn=!this.$store.state.darkIsOn}},computed:{},watch:{},props:{},components:{},provide:{},inject:{}},P=o(89);const I=(0,P.Z)(A,[["render",q]]);var T=I,H=o(65),U=o(6265),V=o.n(U);const z=(0,H.MT)({state(){return{todos:[],isLoading:!1,articleLoaded:!1,darkIsOn:!1}},actions:{},mutations:{loadData(t){t.isLoading=!0,V().get("https://jsonplaceholder.typicode.com/todos").then((e=>{t.isLoading=!1,t.todos.push(...e.data),console.log(t.todos),t.todos.length=10,t.articleLoaded=!0}))},resetApp(t){t.isLoading=!0,t.articleLoaded=!1,t.todos=[],t.isLoading=!1}}}),B=(0,s.ri)(T);B.use(z),B.mount("#app")}},e={};function o(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,r,a){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],a=t[d][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||n>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[c])}))?s.splice(c--,1):(i=!1,a<n&&(n=a));if(i){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,n=s[0],i=s[1],c=s[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var d=c(o)}for(e&&e(s);l<n.length;l++)a=n[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},s=self["webpackChunkvue_test_app"]=self["webpackChunkvue_test_app"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(8052)}));s=o.O(s)})();
//# sourceMappingURL=app.fe216eda.js.map