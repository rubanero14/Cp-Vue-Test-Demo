(function(){"use strict";var t={2799:function(t,e,l){var o=l(9242),a=l(3396),r=l(7139);const s=(0,a.uE)('<header class="mb-0"><div class="container"><div class="row"><div class="col-12"><h1 class="text-center mb-3">Articles</h1></div></div></div></header>',1),i={class:"container"},n={class:"row"},c={class:"col-12 col-md-4 order-1"},d=(0,a._)("a",{class:"btn w-100 mb-2",href:"https://github.com/rubanero14/CP-Vue-Test"},[(0,a._)("i",{class:"bi bi-file-earmark-code"}),(0,a.Uk)(" Source Code")],-1),u={class:"col-12 col-md-4 order-3 order-md-2"},m=(0,a._)("i",{class:"bi bi-arrow-clockwise"},null,-1),b=(0,a.Uk)(" Load Articles"),f=[m,b],p=(0,a._)("i",{class:"bi bi-arrow-left"},null,-1),g=(0,a.Uk)(" Back"),v=[p,g],k={class:"col-12 col-md-4 order-2 order-md-3"},h=(0,a._)("i",{class:"bi bi-brightness-high"},null,-1),_=(0,a.Uk)(" Light Mode"),w=[h,_],y=(0,a._)("i",{class:"bi bi-moon"},null,-1),A=(0,a.Uk)(" Dark Mode"),D=[y,A],I={class:"row"},L={key:0,class:"col-12"},$=(0,a._)("p",null,"Please select number of articles to be loaded:",-1),O={class:"d-flex justify-content-start align-items-center"},C=(0,a._)("label",{for:"articlesNumber"},"10",-1),x={class:"d-flex justify-content-start align-items-center"},N=(0,a._)("label",{for:"articlesNumber"},"50",-1),j={class:"d-flex justify-content-start align-items-center"},V=(0,a._)("label",{for:"articlesNumber"},"100",-1),M={class:"d-flex justify-content-start align-items-center mb-3"},U=(0,a._)("label",{for:"articlesNumber"},"200",-1),T={key:1,class:"col-12"},P={class:"text-center"},q={class:"mb-3"},G={class:"row"},W={key:0,class:"col-12"},z=(0,a._)("p",null,"Click here to load the latest articles",-1),E=[z],B={key:0,class:"text-center"},F=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),H=[F],K={class:"col-12"},S={key:0},Y={key:1,class:"row"},Z={class:"card list text-center"},J={key:2};function Q(t,e,l,m,b,p){return(0,a.wg)(),(0,a.iD)("section",{class:(0,r.C_)({dark:t.$store.state.darkIsOn})},[s,(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",c,[(0,a.Wm)(o.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("div",u,[(0,a._)("div",null,[(0,a.Wm)(o.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[t.$store.state.articleLoaded?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn w-100 mb-4 mb-md-2",onClick:e[1]||(e[1]=(...t)=>p.resetPage&&p.resetPage(...t))},v)):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn w-100 mb-4 mb-md-2",onClick:e[0]||(e[0]=(...t)=>p.loadArticles&&p.loadArticles(...t))},f))])),_:1})])]),(0,a._)("div",k,[(0,a.Wm)(o.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[t.$store.state.darkIsOn?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn w-100 mb-2 mb-md-4",onClick:e[2]||(e[2]=(...t)=>p.toggleDarkMode&&p.toggleDarkMode(...t))},w)):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn w-100 mb-2 mb-md-4",onClick:e[3]||(e[3]=(...t)=>p.toggleDarkMode&&p.toggleDarkMode(...t))},D))])),_:1})])]),(0,a._)("div",I,[t.$store.state.articleLoaded?((0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",P,[(0,a._)("p",q,"Total Articles Loaded: "+(0,r.zw)(b.totalArticle),1)])])):((0,a.wg)(),(0,a.iD)("div",L,[$,(0,a._)("div",O,[(0,a.wy)((0,a._)("input",{onClick:e[4]||(e[4]=t=>p.setInputValue(b.totalArticle)),"onUpdate:modelValue":e[5]||(e[5]=t=>b.totalArticle=t),class:"me-1",value:"10",type:"radio",name:"articlesNumber"},null,512),[[o.G2,b.totalArticle]]),C]),(0,a._)("div",x,[(0,a.wy)((0,a._)("input",{onClick:e[6]||(e[6]=t=>p.setInputValue(b.totalArticle)),"onUpdate:modelValue":e[7]||(e[7]=t=>b.totalArticle=t),class:"me-1",value:"50",type:"radio",name:"articlesNumber",checked:""},null,512),[[o.G2,b.totalArticle]]),N]),(0,a._)("div",j,[(0,a.wy)((0,a._)("input",{onClick:e[8]||(e[8]=t=>p.setInputValue(b.totalArticle)),"onUpdate:modelValue":e[9]||(e[9]=t=>b.totalArticle=t),class:"me-1",value:"100",type:"radio",name:"articlesNumber"},null,512),[[o.G2,b.totalArticle]]),V]),(0,a._)("div",M,[(0,a.wy)((0,a._)("input",{onClick:e[10]||(e[10]=t=>p.setInputValue(b.totalArticle)),"onUpdate:modelValue":e[11]||(e[11]=t=>b.totalArticle=t),class:"me-1",value:"200",type:"radio",name:"articlesNumber"},null,512),[[o.G2,b.totalArticle]]),U])]))]),(0,a._)("div",G,[t.$store.state.articleLoaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",{class:"card text-center",onClick:e[12]||(e[12]=(...t)=>p.loadArticles&&p.loadArticles(...t))},E),t.$store.state.isLoading?((0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",{class:(0,r.C_)(["spinner-border",{"text-dark":!t.$store.state.darkIsOn,"text-light":t.$store.state.darkIsOn}]),role:"status"},H,2)])):(0,a.kq)("",!0)])),(0,a._)("div",K,[t.$store.state.articleLoaded?((0,a.wg)(),(0,a.iD)("hr",S)):(0,a.kq)("",!0),t.$store.state.articleLoaded?((0,a.wg)(),(0,a.iD)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.$store.state.todos,(t=>((0,a.wg)(),(0,a.j4)(o.W3,{class:"col-12 col-md-6 col-lg-4",name:"list",tag:"div",mode:"in-out",key:t.id,id:t.id},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[(0,a._)("p",null,(0,r.zw)(t.title),1)])])),_:2},1032,["id"])))),128))])):(0,a.kq)("",!0),t.$store.state.articleLoaded?((0,a.wg)(),(0,a.iD)("hr",J)):(0,a.kq)("",!0)])])])],2)}var R={data(){return{totalArticle:10}},mounted(){this.$store.commit("setArticleNumber",parseInt(this.totalArticle))},methods:{setInputValue(t){console.log(typeof parseInt(t),parseInt(this.totalArticle)),this.$store.commit("setArticleNumber",parseInt(this.totalArticle))},loadArticles(){console.log(typeof parseInt(this.totalArticle),parseInt(this.totalArticle)),this.$store.commit("setArticleNumber",parseInt(this.totalArticle)),this.$store.commit("loadData")},resetPage(){this.$store.commit("resetApp")},toggleDarkMode(){return this.$store.state.darkIsOn=!this.$store.state.darkIsOn}}},X=l(89);const tt=(0,X.Z)(R,[["render",Q]]);var et=tt,lt=l(65),ot=l(6265),at=l.n(ot);const rt=(0,lt.MT)({state(){return{todos:[],isLoading:!1,articleLoaded:!1,darkIsOn:!1,articleNumber:10}},actions:{},mutations:{loadData(t){t.isLoading=!0,at().get("https://jsonplaceholder.typicode.com/todos").then((e=>{t.isLoading=!1,t.todos.push(...e.data),console.log(t.todos),t.todos.length=t.articleNumber,t.articleLoaded=!0}))},resetApp(t){t.isLoading=!0,t.articleLoaded=!1,t.todos=[],t.isLoading=!1},setArticleNumber(t,e){t.articleNumber=e}}}),st=(0,o.ri)(et);st.use(rt),st.mount("#app")}},e={};function l(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,l),r.exports}l.m=t,function(){var t=[];l.O=function(e,o,a,r){if(!o){var s=1/0;for(d=0;d<t.length;d++){o=t[d][0],a=t[d][1],r=t[d][2];for(var i=!0,n=0;n<o.length;n++)(!1&r||s>=r)&&Object.keys(l.O).every((function(t){return l.O[t](o[n])}))?o.splice(n--,1):(i=!1,r<s&&(s=r));if(i){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,a,r]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};l.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,s=o[0],i=o[1],n=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(n)var d=n(l)}for(e&&e(o);c<s.length;c++)r=s[c],l.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return l.O(d)},o=self["webpackChunkvue_test_app"]=self["webpackChunkvue_test_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(2799)}));o=l.O(o)})();
//# sourceMappingURL=app.dceccd9e.js.map