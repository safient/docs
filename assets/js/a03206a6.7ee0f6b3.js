(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12],{6979:function(e,n,t){"use strict";var r=t(2122),a=t(9756),o=t(7294),l=t(3935),u=t(2263),c=t(5977),s=t(4996),i=t(6742),f=t(9105),h=t(6397),m=t(7052),d=t(6747),b=t(5613),C=t(4973),p=["contextualSearch"],v=null;function g(e){var n=e.hit,t=e.children;return o.createElement(i.Z,{to:n.url},t)}function k(e){var n=e.state,t=e.onClose,r=(0,h.Z)().generateSearchPageLink;return o.createElement(i.Z,{to:r(n.query),onClick:t},"See all ",n.context.nbHits," results")}function S(e){var n,i,h=e.contextualSearch,S=(0,a.Z)(e,p),E=(0,u.default)().siteMetadata,P=(0,b.Z)(),Z=null!=(n=null==(i=S.searchParameters)?void 0:i.facetFilters)?n:[],y=h?[].concat(P,Z):Z,O=Object.assign({},S.searchParameters,{facetFilters:y}),R=(0,s.C)().withBaseUrl,w=(0,c.k6)(),A=(0,o.useRef)(null),F=(0,o.useRef)(null),I=(0,o.useState)(!1),x=I[0],B=I[1],M=(0,o.useState)(null),T=M[0],j=M[1],D=(0,o.useCallback)((function(){return v?Promise.resolve():Promise.all([t.e(763).then(t.bind(t,3763)),Promise.all([t.e(532),t.e(945)]).then(t.bind(t,6945)),Promise.all([t.e(532),t.e(846)]).then(t.bind(t,9846))]).then((function(e){var n=e[0].DocSearchModal;v=n}))}),[]),L=(0,o.useCallback)((function(){D().then((function(){A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),B(!0)}))}),[D,B]),U=(0,o.useCallback)((function(){B(!1),A.current.remove()}),[B]),V=(0,o.useCallback)((function(e){D().then((function(){B(!0),j(e.key)}))}),[D,B,j]),Y=(0,o.useRef)({navigate:function(e){var n=e.itemUrl;w.push(n)}}).current,q=(0,o.useRef)((function(e){return e.map((function(e){var n=document.createElement("a");return n.href=e.url,Object.assign({},e,{url:R(""+n.pathname+n.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(k,(0,r.Z)({},e,{onClose:U}))}}),[U]),Q=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e}),[E.docusaurusVersion]);(0,m.D)({isOpen:x,onOpen:L,onClose:U,onInput:V,searchButtonRef:F});var z=(0,C.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(f.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+S.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(d.a,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:L,ref:F,translations:{buttonText:z,buttonAriaLabel:z}}),x&&(0,l.createPortal)(o.createElement(v,(0,r.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:T,navigator:Y,transformItems:q,hitComponent:g,resultsFooterComponent:H,transformSearchClient:Q},S,{searchParameters:O})),A.current))}n.Z=function(){var e=(0,u.default)().siteConfig;return o.createElement(S,e.themeConfig.algolia)}}}]);