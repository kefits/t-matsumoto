(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1752:function(a,c,b){a.exports=b(8027)},8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3769)}])},9893:function(c,b,a){"use strict";var d=a(603),e=a(5893),f=a(7294),g=a(2293),h=a(7357),i=a(155),j=a(3946),k=a(5861),l=a(6972),m=a(326),n=a(3156),o=a(9661),p=a(3321),q=a(5819),r=["Home","Research","Blog"],s=["/","research","https://kefism.hatenablog.com/"];b.Z=function(){var a=(0,d.Z)(f.useState(null),2),b=a[0],u=a[1],c=(0,d.Z)(f.useState(null),2),t=(c[0],c[1],function(){u(null)});return(0,e.jsx)(g.Z,{position:"static",children:(0,e.jsx)(n.Z,{maxWidth:"xl",children:(0,e.jsxs)(i.Z,{disableGutters:!0,children:[(0,e.jsx)(o.Z,{alt:"Bayes",src:"/images/bayes.gif",sx:{width:40,height:40,margin:1.5}}),(0,e.jsx)(k.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Bayesian is All You Need"}),(0,e.jsxs)(h.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,e.jsx)(j.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(a){u(a.currentTarget)},color:"inherit",children:(0,e.jsx)(m.Z,{})}),(0,e.jsx)(l.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(b),onClose:t,sx:{display:{xs:"block",md:"none"}},children:r.map(function(a){return(0,e.jsx)(q.Z,{onClick:t,children:(0,e.jsx)(k.Z,{textAlign:"center",children:a})},a)})})]}),(0,e.jsx)(h.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},justifyContent:"right",children:r.map(function(a,b){return(0,e.jsx)(p.Z,{onClick:t,sx:{my:2,color:"white",display:"block"},href:s[b],children:(0,e.jsx)(k.Z,{variant:"h6",children:a})},a)})})]})})})}},3769:function(i,b,a){"use strict";a.r(b),a.d(b,{default:function(){return O}});var j=a(5893),d=a(9008),k=a.n(d),e=a(214),l=a.n(e),m=a(9893),f=a(7294),n=a(9661),o=a(3366),p=a(7462),q=a(5408),r=a(8700),s=a(9707),t=a(9766),g=a(948),u=a(1657);let v=["component","direction","spacing","divider","children"],w=a=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[a],x=(0,g.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(b,a)=>[a.root]})(({ownerState:b,theme:a})=>{let c=(0,p.Z)({display:"flex"},(0,q.k9)({theme:a},(0,q.P$)({values:b.direction,breakpoints:a.breakpoints.values}),a=>({flexDirection:a})));if(b.spacing){let g=(0,r.hB)(a),d=Object.keys(a.breakpoints.values).reduce((c,a)=>(("object"==typeof b.spacing&&null!=b.spacing[a]||"object"==typeof b.direction&&null!=b.direction[a])&&(c[a]=!0),c),{}),h=(0,q.P$)({values:b.direction,base:d}),e=(0,q.P$)({values:b.spacing,base:d}),f=(c,a)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${w(a?h[a]:b.direction)}`]:(0,r.NA)(g,c)}});c=(0,t.Z)(c,(0,q.k9)({theme:a},e,f))}return c}),h=f.forwardRef(function(d,e){let g=(0,u.Z)({props:d,name:"MuiStack"}),a=(0,s.Z)(g),{component:h="div",direction:i="column",spacing:k=0,divider:b,children:c}=a,l=(0,o.Z)(a,v);return(0,j.jsx)(x,(0,p.Z)({as:h,ownerState:{direction:i,spacing:k},ref:e},l,{children:b?function(a,c){let b=f.Children.toArray(a).filter(Boolean);return b.reduce((a,e,d)=>(a.push(e),d<b.length-1&&a.push(f.cloneElement(c,{key:`separator-${d}`})),a),[])}(c,b):c}))});var y=h,z=a(917);function A(b){let{styles:a,defaultTheme:c={}}=b;return(0,j.jsx)(z.xB,{styles:"function"==typeof a?b=>{var d;return a(null==(d=b)||0===Object.keys(d).length?c:b)}:a})}var B=a(247),C=function(a){return(0,j.jsx)(A,(0,p.Z)({},a,{defaultTheme:B.Z}))};let D=(a,b)=>(0,p.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},b&&{colorScheme:a.palette.mode}),E=a=>(0,p.Z)({color:(a.vars||a).palette.text.primary},a.typography.body1,{backgroundColor:(a.vars||a).palette.background.default,"@media print":{backgroundColor:(a.vars||a).palette.common.white}}),F=(a,f=!1)=>{var c,d;let b={html:D(a,f),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:a.typography.fontWeightBold},body:(0,p.Z)({margin:0},E(a),{"&::backdrop":{backgroundColor:(a.vars||a).palette.background.default}})},e=null==(c=a.components)?void 0:null==(d=c.MuiCssBaseline)?void 0:d.styleOverrides;return e&&(b=[b,e]),b};var G=function(a){let b=(0,u.Z)({props:a,name:"MuiCssBaseline"}),{children:c,enableColorScheme:d=!1}=b;return(0,j.jsxs)(f.Fragment,{children:[(0,j.jsx)(C,{styles:a=>F(a,d)}),c]})},H=a(7357),I=a(3156),c=((0,a(1752).default)()||{}).publicRuntimeConfig,J=(void 0===c?{}:c).basePath;function K(){var a;return(0,j.jsxs)(f.Fragment,{children:[(0,j.jsx)(G,{}),(0,j.jsx)(I.Z,{maxWidth:"sm",children:(0,j.jsx)(H.Z,{sx:{bgcolor:"#ffffff",height:"25vh"},children:(0,j.jsx)(y,{direction:"row",spacing:2,justifyContent:"center",m:5,children:(0,j.jsx)(n.Z,{alt:"Tomoki Matsumoto",src:(J||"")+(a="images/profile.jpg"),sx:{width:150,height:150,margin:2.5}})})})})]})}var L=a(3642),M=a(5155),N=a(1649),O=function(){return(0,j.jsxs)("div",{className:l().container,children:[(0,j.jsxs)(k(),{children:[(0,j.jsx)("title",{children:"Tomoki Matsumoto' site"}),(0,j.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,j.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,j.jsx)(m.Z,{}),(0,j.jsxs)("main",{className:l().main,children:[(0,j.jsx)("h1",{className:l().title,children:"Welcome to Tomoki Matsumoto' site"}),(0,j.jsx)(K,{}),(0,j.jsxs)("div",{className:l().grid,children:[(0,j.jsxs)("a",{href:"https://twitter.com/kefism",className:l().card,children:[(0,j.jsx)("h2",{children:"Twitter"}),(0,j.jsx)(H.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,j.jsx)(L.mWf,{size:30})})]}),(0,j.jsxs)("a",{href:"https://github.com/kefits",className:l().card,children:[(0,j.jsx)("h2",{children:"GitHub"}),(0,j.jsx)(H.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,j.jsx)(M.lfl,{size:30})})]}),(0,j.jsxs)("a",{href:"https://www.linkedin.com/in/tomoki514/?locale=en_US",className:l().card,children:[(0,j.jsx)("h2",{children:"LinkedIn"}),(0,j.jsx)(H.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,j.jsx)(N.gXb,{size:30})})]})]})]}),(0,j.jsx)("footer",{className:l().footer})]})}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5177:function(e,c,a){"use strict";a.d(c,{w_:function(){return j}});var b=a(7294),d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=b.createContext&&b.createContext(d),g=function(){return(g=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},h=function(b,e){var d={};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(b,a[c])&&(d[a[c]]=b[a[c]]);return d};function i(a){return a&&a.map(function(a,c){return b.createElement(a.tag,g({key:c},a.attr),i(a.child))})}function j(a){return function(c){return b.createElement(k,g({attr:g({},a.attr)},c),i(a.child))}}function k(c){var a=function(a){var d,i=c.attr,j=c.size,e=c.title,k=h(c,["attr","size","title"]),f=j||a.size||"1em";return a.className&&(d=a.className),c.className&&(d=(d?d+" ":"")+c.className),b.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,k,{className:d,style:g(g({color:c.color||a.color},a.style),c.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),e&&b.createElement("title",null,e),c.children)};return void 0!==f?b.createElement(f.Consumer,null,function(b){return a(b)}):a(d)}}},function(a){a.O(0,[415,866,158,139,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])