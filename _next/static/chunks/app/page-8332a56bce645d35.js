(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1114:function(e,t,s){Promise.resolve().then(s.bind(s,8450))},8450:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Y}});var n=s(7437),l=s(3463),i=s.n(l),r=s(4839),a=s(2265);let c=(0,a.memo)(e=>{let{children:t,className:s,onClick:l}=e;return(0,n.jsx)("button",{className:(0,r.Z)("text-sky-600 select-none font-semibold hover:underline active:text-sky-700",s),onClick:l,children:t})}),o=(0,a.memo)(e=>{let{children:t,checked:s,onChange:l}=e;return(0,n.jsxs)("label",{className:"cursor-pointer inline-flex items-center relative align-top mx-2",children:[(0,n.jsx)("input",{type:"checkbox",className:"h-0 w-0 absolute",checked:s,onChange:e=>{l(e.target.checked)}}),(0,n.jsx)("span",{className:(0,r.Z)("inline-flex w-4 h-4 select-none border-2 rounded-sm transition",s&&"bg-sky-600 border-sky-600"),children:s&&(0,n.jsx)("div",{className:"h-full flex items-center justify-center",children:(0,n.jsx)("svg",{viewBox:"0 0 12 10",className:"fill-none stroke-2 stroke-current w-3 text-white",children:(0,n.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})})}),(0,n.jsx)("span",{className:"ms-2 select-none",children:t})]})});var u=s(4887);let d=(0,a.memo)(e=>{let{className:t}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})}),m=(0,a.memo)(function(e){let{children:t,title:s,isOpen:l,onClose:i}=e,[c,o]=(0,a.useState)(!1),[m,f]=(0,a.useState)(!1);return(l&&!c?o(!0):!l&&m&&f(!1),(0,a.useEffect)(()=>{l?f(!0):setTimeout(()=>{o(!1)},300)},[l]),c)?(0,n.jsx)(n.Fragment,{children:(0,u.createPortal)((0,n.jsxs)("div",{className:(0,r.Z)("fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-10",{"opacity-100":m,"opacity-0 pointer-events-none":!m}),children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),(0,n.jsxs)("div",{className:(0,r.Z)("relative bg-white rounded-lg shadow-lg transform transition-transform duration-300 min-w-80",{"translate-y-0":m,"-translate-y-10":!m}),children:[s&&(0,n.jsxs)("div",{className:"p-4 border-b flex justify-between items-center",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold",children:s}),(0,n.jsx)("button",{className:"text-gray-600 hover:text-gray-900",onClick:i,children:(0,n.jsx)(d,{className:"w-6 h-6"})})]}),(0,n.jsx)("div",{className:"p-4",children:t})]})]}),document.body)}):null});var f=s(3872);let h=(0,a.memo)(function(e){let{message:t,show:s,onClose:l}=e,[i,c]=(0,a.useState)(s);return(0,a.useEffect)(()=>{if(s)c(!0);else{let e=setTimeout(()=>{c(!1)},500);return()=>clearTimeout(e)}},[s]),i&&(0,n.jsx)("div",{className:(0,r.Z)("fixed bottom-4 right-4 transition-transform transform",{"toast-enter":s,"toast-leave":!s}),children:(0,n.jsxs)("div",{className:"flex gap-2 bg-blue-500 text-white p-4 rounded shadow-lg",onClick:l,children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:t})}),(0,n.jsx)("button",{className:"text-white hover:text-gray-200","aria-label":"Close",children:(0,n.jsx)(f._0w,{})})]})})});function x(e){let t=e.parentElement;for(;t;){if(["relative","absolute","fixed"].includes(window.getComputedStyle(t).position))return t;t=t.parentElement}return null}function p(){let[e,t]=(0,a.useState)({width:window.innerWidth,height:window.innerHeight}),s=(0,a.useCallback)(()=>{t({width:window.innerWidth,height:window.innerHeight})},[]);return(0,a.useEffect)(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[s]),e}function v(e){let{targetRef:t,position:s,onChangePosition:n}=e,{width:l}=p(),i=(0,a.useCallback)((e,s)=>{let n=t.current;if(!n)return;let l=x(n);if(!l)return;let i=Math.max(0,Math.min(l.clientWidth-n.clientWidth,e*l.clientWidth)),r=Math.max(0,Math.min(l.clientHeight-n.clientHeight,s*l.clientHeight));n.style.left="".concat(i,"px"),n.style.top="".concat(r,"px")},[t]);(0,a.useEffect)(()=>{t.current&&i(s.x,s.y)},[t,s,i,l]),(0,a.useEffect)(()=>{let e,s,l;let r=t.current;if(!r)return;let a=x(r);if(!a)return;let c=e=>{Array.from(a.children).filter(e=>e!==r).forEach(t=>{t instanceof HTMLElement&&(t.style.pointerEvents=e?"none":"auto")})},o=t=>{t.preventDefault();let n="touches"in t?t.touches[0].clientX:t.clientX,i="touches"in t?t.touches[0].clientY:t.clientY;e=n,s=i,l=r.getBoundingClientRect(),c(!0),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u),document.addEventListener("touchend",d)},u=t=>{t.preventDefault();let r="touches"in t?t.touches[0].clientX:t.clientX,c=("touches"in t?t.touches[0].clientY:t.clientY)-s,o=(r-e+(l.left-a.getBoundingClientRect().left))/a.clientWidth,u=(c+(l.top-a.getBoundingClientRect().top))/a.clientHeight;i(o,u),null==n||n({x:o,y:u})},d=()=>{c(!1),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",d)};return r.addEventListener("mousedown",o),r.addEventListener("touchstart",o),()=>{r.removeEventListener("mousedown",o),r.removeEventListener("touchstart",o)}},[n,i,t])}async function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(t,1e3*e)})}var j=s(2737),w=s.n(j),y=s(9099),k=s(9291),b=JSON.parse('[{"category":"Lofi","videos":["c3suauAz0zQ","HlFIRYKJGYQ"]},{"category":"RnB/Soul","videos":["cy-7bbETsfA"]}]'),C=s(2599),N=s.n(C);let E=b.map(e=>{let{category:t}=e;return t}),L=[],M=(0,y.Ue)()((0,k.tJ)((e,t)=>({displayClock:!0,setDisplayClock:t=>e({displayClock:t}),clockPosition:{x:.8,y:.1},setClockPosition:t=>e({clockPosition:t}),displayEllapsed:!0,setDisplayEllapsed:t=>e({displayEllapsed:t}),ellapsedPosition:{x:.05,y:.1},setEllapsedPosition:t=>e({ellapsedPosition:t}),displayCategory:!1,setDisplayCategory:t=>e({displayCategory:t}),selectedCategories:E,selectCategories:t=>{e({selectedCategories:t,currentBGMIndex:0})},likes:[],toggleLike:t=>{e(e=>({likes:e.likes.includes(t)?e.likes.filter(e=>e!==t):[...e.likes,t]}))},cachedBGMList:void 0,getBGMList:()=>{let s=t().cachedBGMList;if(s&&N().isEqual(L,t().selectedCategories))return s;let n=function(e,t){let s=b.filter(t=>{let{category:s}=t;return e.includes(s)}).map(e=>{let{videos:t}=e;return t}).flat();return e.includes("Favorites")&&s.push(...t),0===s.length&&s.push(...b.map(e=>{let{videos:t}=e;return t}).flat()),N().shuffle(N().uniq(s))}(t().selectedCategories,t().likes);return L=t().selectedCategories,e({cachedBGMList:n}),n},currentBGMIndex:0,nextBGM:()=>{e(e=>({currentBGMIndex:(e.currentBGMIndex+1)%e.getBGMList().length}))},previousBGM:()=>{e(e=>({currentBGMIndex:(e.currentBGMIndex-1+e.getBGMList().length)%e.getBGMList().length}))},getCurrentBGM:()=>t().getBGMList()[t().currentBGMIndex],closeInfoToastEver:!1,getCloseInfoToastEver:()=>t().closeInfoToastEver,setCloseInfoToastEver:t=>e({closeInfoToastEver:t})}),{name:"player-storage",partialize:e=>N().pick(e,["displayClock","displayEllapsed","selectedCategories","clockPosition","ellapsedPosition","likes","closeInfoToastEver"])}));function B(e){let{draggableRef:t,fontRef:s}=e,{width:n}=p();(0,a.useEffect)(()=>{let e=t.current&&x(t.current);if(e){var n;null===(n=s.current)||void 0===n||n.style.setProperty("font-size","".concat(.045*e.clientWidth,"px"))}},[t,s,n])}let G=(0,a.memo)(function(){let[e,t]=(0,a.useState)(()=>Date.now()),{clockPosition:s,setClockPosition:l}=M(),i=(0,a.useRef)(null),r=(0,a.useRef)(null);return B({draggableRef:i,fontRef:r}),v({targetRef:i,position:s,onChangePosition:l}),(0,a.useEffect)(()=>{let e=setInterval(()=>{t(Date.now())},6e4);return()=>clearInterval(e)},[]),(0,n.jsx)("div",{ref:i,className:"absolute flex items-center opacity-80 cursor-pointer hover:opacity-90",children:(0,n.jsx)("div",{ref:r,className:"text-white whitespace-nowrap",children:w()(e).format("A hh:mm")})})}),R=(0,a.memo)(function(e){let{startTime:t}=e,[s,l]=(0,a.useState)(()=>Date.now()-t),{ellapsedPosition:i,setEllapsedPosition:r}=M(),c=(0,a.useRef)(null),o=(0,a.useRef)(null);return B({draggableRef:c,fontRef:o}),v({targetRef:c,position:i,onChangePosition:r}),(0,a.useEffect)(()=>{let e=setInterval(()=>{l(Date.now()-t)},1e3);return()=>clearInterval(e)},[t]),(0,n.jsx)("div",{ref:c,className:"absolute flex items-center opacity-80 cursor-pointer hover:opacity-90",children:(0,n.jsx)("div",{ref:o,className:"text-white text-3xl",children:w().duration(s).format("HH:mm:ss")})})}),I=(0,a.memo)(function(e){let{onApply:t}=e,{selectedCategories:s,selectCategories:l}=M(),[i,r]=(0,a.useState)(()=>s),o=b.map(e=>{let{category:t}=e;return t}),u=0===N().difference(o,i).length,d=(0,a.useCallback)(e=>{e?r(o):r([])},[r,o]),m=(0,a.useCallback)((e,t)=>{e?r([...i,t]):r(N().without(i,t))},[i,r]),f=(0,a.useCallback)(()=>{if(0===i.length){alert("Please select at least one category.");return}l(i),t()},[l,t,i]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,n.jsx)(z,{category:"All",checked:u,onChange:d}),(0,n.jsx)("hr",{}),(0,n.jsx)(z,{category:"Favorites",checked:i.includes("Favorites"),onChange:m}),b.map(e=>{let{category:t}=e;return(0,n.jsx)(z,{category:t,checked:i.includes(t),onChange:m},t)})]}),(0,n.jsx)("div",{className:"flex justify-end mt-2 px-4",children:(0,n.jsx)(c,{onClick:f,children:"Apply"})})]})}),z=(0,a.memo)(function(e){let{category:t,checked:s,onChange:l}=e,i=(0,a.useCallback)(e=>{l(e,t)},[t,l]);return(0,n.jsx)(o,{checked:s,onChange:i,children:t})});var S=s(6356);let P=(0,a.memo)(function(){let[e,t]=(0,a.useState)(null),[s,l]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e),l(!0)};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}},[]);let i=(0,a.useCallback)(()=>{e&&(e.prompt(),e.userChoice.then(()=>{t(null),l(!1)}))},[e]);return s?(0,n.jsx)(S.RUY,{className:"size-4 sm:size-5 cursor-pointer text-slate-600 hover:text-slate-700 active:text-slate-800",onClick:i}):null});var T=s(9960),H=s.n(T),D=s(565);let W={height:"100%",width:"100%",playerVars:{autoplay:1,fs:0,loop:1}},Z=(0,a.memo)(function(){let{getCurrentBGM:e}=M(),t=e(),s=(0,a.useCallback)(e=>{e.target.playVideo()},[]);return(0,n.jsx)(D.Z,{videoId:t,className:"w-full h-full",opts:W,onReady:s})}),_=(0,a.memo)(function(e){let{fullscreenRef:t}=e,{nextBGM:s,previousBGM:l,likes:i,toggleLike:c,getCurrentBGM:o}=M(),{isFullscreen:u,onToggleFullScreen:d}=function(e){let{fullscreenRef:t}=e,[s,n]=(0,a.useState)("undefined"!=typeof document&&!!document.fullscreenElement),l=(0,a.useCallback)(()=>{if(s)document.exitFullscreen();else{var e;null===(e=t.current)||void 0===e||e.requestFullscreen()}},[s,t]);return(0,a.useEffect)(()=>{let e=()=>{n(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e)}},[]),{isFullscreen:s,onToggleFullScreen:l}}({fullscreenRef:t}),m=i.includes(o()),[h,x]=(0,a.useState)(!1),p=(0,a.useCallback)(()=>{l()},[l]),v=(0,a.useCallback)(()=>{s()},[s]),g=()=>{x(!0),c(o()),setTimeout(()=>x(!1),600)};return(0,n.jsxs)("div",{className:"flex flex-row justify-evenly items-center bg-black py-1 px-2 sm:flex-col sm:py-5",children:[u?(0,n.jsx)(f.Y7H,{className:"size-6 text-white cursor-pointer",onClick:d}):(0,n.jsx)(f.a1O,{className:"size-6 text-white cursor-pointer",onClick:d}),m?(0,n.jsx)(f.$0H,{className:(0,r.Z)("size-6 text-rose-600 cursor-pointer",{"heart-animation":h}),onClick:g}):(0,n.jsx)(f.BgW,{className:(0,r.Z)("size-6 text-white cursor-pointer",{"heart-animation":h}),onClick:g}),(0,n.jsx)(f.Ain,{className:"size-6 text-white cursor-pointer",onClick:p}),(0,n.jsx)(f.vdW,{className:"size-6 text-white cursor-pointer",onClick:v})]})}),A=(0,a.memo)(function(){let[e,t]=(0,a.useState)(!1),{getCloseInfoToastEver:s,setCloseInfoToastEver:l}=M(),i=(0,a.useCallback)(async()=>{t(!1),await g(.5),l(!0)},[t,l]);if((0,a.useEffect)(()=>{e();async function e(){await g(1),s()||t(!0)}},[]),!(!window.matchMedia("(max-width: 768px)").matches||s()))return(0,n.jsx)(h,{message:"Best viewed in fullscreen landscape mode",show:e,onClose:i})}),F=(0,a.memo)(function(){let{displayClock:e,setDisplayClock:t,displayEllapsed:s,setDisplayEllapsed:l,setDisplayCategory:i}=M(),r=(0,a.useCallback)(e=>{t(e)},[t]),u=(0,a.useCallback)(e=>{l(e)},[l]),d=(0,a.useCallback)(()=>{i(!0)},[i]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{checked:e,onChange:r,children:"clock"}),(0,n.jsx)(o,{checked:s,onChange:u,children:"ellapsed"}),(0,n.jsx)(c,{className:"ml-1",onClick:d,children:"category"})]})});function Y(){let e=(0,a.useRef)(Date.now()),t=(0,a.useRef)(null),{displayClock:s,displayEllapsed:l,displayCategory:c,setDisplayCategory:o}=M(),u=(0,a.useCallback)(()=>{o(!1)},[o]),d=(0,a.useCallback)(()=>{o(!1)},[o]);return(0,n.jsx)("div",{className:"bg-white flex justify-center items-start w-full h-full sm:items-center",children:(0,n.jsxs)("div",{className:"w-full h-full max-w-5xl max-h-max flex flex-col sm:w-4/5 sm:max-h-[600px]",children:[(0,n.jsx)("header",{className:(0,r.Z)("flex flex-col-reverse items-center p-2 sm:p-5 sm:flex-col",i().className),children:(0,n.jsxs)("div",{className:"w-full flex flex-col justify-between sm:flex-row",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3 font-extrabold text-xl self-start sm:text-2xl",children:[(0,n.jsx)("span",{children:"Office BGM"}),(0,n.jsx)(P,{})]}),(0,n.jsx)("div",{className:"flex self-end",children:(0,n.jsx)(F,{})})]})}),(0,n.jsx)("main",{className:(0,r.Z)("flex bg-white w-full h-full flex-col max-h-[400px] sm:max-h-none sm:flex-row ",i().className),children:(0,n.jsx)("div",{className:"relative w-full h-full rounded-none overflow-hidden flex bg-black mt-0.5 min-h-[185px] max-h-[400px] sm:rounded-lg sm:min-h-0 sm:max-h-full",children:(0,n.jsx)("div",{ref:t,className:"absolute top-0 left-0 w-full h-full",children:(0,n.jsxs)("div",{className:"relative w-full h-full flex flex-col justify-between sm:flex-row",children:[(0,n.jsxs)("div",{className:"relative w-full h-full",children:[s&&(0,n.jsx)(G,{}),l&&(0,n.jsx)(R,{startTime:e.current}),(0,n.jsx)(Z,{})]}),(0,n.jsx)(_,{fullscreenRef:t})]})})})}),(0,n.jsx)(m,{title:"Category",isOpen:c,onClose:u,children:(0,n.jsx)(I,{onApply:d})}),(0,n.jsx)(A,{}),(0,n.jsx)("footer",{className:"flex justify-end w-full pt-5 text-xs text-gray-400",children:(0,n.jsxs)("div",{className:"flex flex-col items-end px-2",children:[(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)("i",{children:"@ 2024 "}),(0,n.jsx)("i",{children:"developed by inhan"}),(0,n.jsx)("a",{href:"https://github.com/inhaan/office-bgm/",target:"_blank",rel:"noopener noreferrer",className:"text-base hover:text-gray-600 transition",children:(0,n.jsx)(f.hJX,{})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{href:"https://iconscout.com/icons/music",target:"_blank",children:"Music"})," ","by"," ",(0,n.jsx)("a",{href:"https://iconscout.com/contributors/roundicons-com",target:"_blank",children:"Roundicons.com"})]})]})})]})})}w().extend(H())}},function(e){e.O(0,[243,51,240,866,781,971,23,744],function(){return e(e.s=1114)}),_N_E=e.O()}]);