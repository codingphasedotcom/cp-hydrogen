import{j as r,a,d as Pe,e as Ie,b as c,F as _,C as Oe,c as ne,f as C,g as Ae,h as ke,i as Le}from"./vendor.84248098.js";import{useCartUI as G}from"./CartUIProvider.client.0837ea4c.js";import je from"./CartIconWithItems.client.6376d072.js";import{BUTTON_PRIMARY_CLASSES as oe}from"./Button.client.cd98f033.js";import{u as ae,a as L,r as E,_ as ie,b as O,c as j,d as S,F as le,f as se,e as ue,i as Fe,g as Me,m as F,S as W,h as de,K as Be}from"./open-closed.esm.aa47f60b.js";import{u as Ue,F as Y}from"./use-focus-trap.esm.177adad9.js";var ce=a.exports.createContext(!1);function _e(){return a.exports.useContext(ce)}function pe(e){return r(ce.Provider,{value:e.force,children:e.children})}function Ge(){var e=_e(),t=a.exports.useContext(fe),n=a.exports.useState(function(){if(!e&&t!==null||typeof window=="undefined")return null;var s=document.getElementById("headlessui-portal-root");if(s)return s;var i=document.createElement("div");return i.setAttribute("id","headlessui-portal-root"),document.body.appendChild(i)}),l=n[0],o=n[1];return a.exports.useEffect(function(){e||t!==null&&o(t.current)},[t,o,e]),l}var We=a.exports.Fragment;function z(e){var t=e,n=Ge(),l=a.exports.useState(function(){return typeof window=="undefined"?null:document.createElement("div")}),o=l[0],s=ae();return L(function(){if(!!n&&!!o)return n.appendChild(o),function(){if(!!n&&!!o&&(n.removeChild(o),n.childNodes.length<=0)){var i;(i=n.parentElement)==null||i.removeChild(n)}}},[n,o]),s?!n||!o?null:Pe.exports.createPortal(E({props:t,defaultTag:We,name:"Portal"}),o):null}var Ye=a.exports.Fragment,fe=a.exports.createContext(null);function ze(e){var t=e.target,n=ie(e,["target"]);return r(fe.Provider,{value:t,children:E({props:n,defaultTag:Ye,name:"Popover.Group"})})}z.Group=ze;var P=new Set,D=new Map;function ve(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function he(e){var t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function He(e,t){t===void 0&&(t=!0),L(function(){if(!!t&&!!e.current){var n=e.current;P.add(n);for(var l=O(D.keys()),o;!(o=l()).done;){var s=o.value;s.contains(n)&&(he(s),D.delete(s))}return document.querySelectorAll("body > *").forEach(function(i){if(i instanceof HTMLElement){for(var p=O(P),d;!(d=p()).done;){var u=d.value;if(i.contains(u))return}P.size===1&&(D.set(i,{"aria-hidden":i.getAttribute("aria-hidden"),inert:i.inert}),ve(i))}}),function(){if(P.delete(n),P.size>0)document.querySelectorAll("body > *").forEach(function(u){if(u instanceof HTMLElement&&!D.has(u)){for(var g=O(P),b;!(b=g()).done;){var T=b.value;if(u.contains(T))return}D.set(u,{"aria-hidden":u.getAttribute("aria-hidden"),inert:u.inert}),ve(u)}});else for(var i=O(D.keys()),p;!(p=i()).done;){var d=p.value;he(d),D.delete(d)}}}},[t])}var me=a.exports.createContext(null);function ge(){var e=a.exports.useContext(me);if(e===null){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ge),t}return e}function $e(){var e=a.exports.useState([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,a.exports.useMemo(function(){return function(o){var s=a.exports.useCallback(function(p){return n(function(d){return[].concat(d,[p])}),function(){return n(function(d){var u=d.slice(),g=u.indexOf(p);return g!==-1&&u.splice(g,1),u})}},[]),i=a.exports.useMemo(function(){return{register:s,slot:o.slot,name:o.name,props:o.props}},[s,o.slot,o.name,o.props]);return r(me.Provider,{value:i,children:o.children})}},[n])]}var Qe="p";function qe(e){var t=ge(),n="headlessui-description-"+j();L(function(){return t.register(n)},[n,t.register]);var l=e,o=S({},t.props,{id:n});return E({props:S({},l,o),slot:t.slot||{},defaultTag:Qe,name:t.name||"Description"})}var H=a.exports.createContext(function(){});H.displayName="StackContext";var I;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"})(I||(I={}));function Ke(){return a.exports.useContext(H)}function Ve(e){var t=e.children,n=e.onUpdate,l=e.type,o=e.element,s=Ke(),i=a.exports.useCallback(function(){for(var p=arguments.length,d=new Array(p),u=0;u<p;u++)d[u]=arguments[u];n==null||n.apply(void 0,d),s.apply(void 0,d)},[s,n]);return L(function(){return i(I.Add,l,o),function(){return i(I.Remove,l,o)}},[i,l,o]),r(H.Provider,{value:i,children:t})}var $,h;(function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"})(h||(h={}));var M;(function(e){e[e.SetTitleId=0]="SetTitleId"})(M||(M={}));var Je=($={},$[M.SetTitleId]=function(e,t){return e.titleId===t.id?e:S({},e,{titleId:t.id})},$),B=a.exports.createContext(null);B.displayName="DialogContext";function Q(e){var t=a.exports.useContext(B);if(t===null){var n=new Error("<"+e+" /> is missing a parent <"+A.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Q),n}return t}function Xe(e,t){return F(t.type,Je,e,t)}var Ze="div",et=le.RenderStrategy|le.Static,tt=se(function(t,n){var l=t.open,o=t.onClose,s=t.initialFocus,i=ie(t,["open","onClose","initialFocus"]),p=a.exports.useState(0),d=p[0],u=p[1],g=Me();if(l===void 0&&g!==null){var b;l=F(g,(b={},b[W.Open]=!0,b[W.Closed]=!1,b))}var T=a.exports.useRef(new Set),f=a.exports.useRef(null),be=ue(f,n),q=t.hasOwnProperty("open")||g!==null,K=t.hasOwnProperty("onClose");if(!q&&!K)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!q)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!K)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+l);if(typeof o!="function")throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+o);var m=l?h.Open:h.Closed,Ce=function(){return g!==null?g===W.Open:m===h.Open}(),V=a.exports.useReducer(Xe,{titleId:null,descriptionId:null}),U=V[0],J=V[1],R=a.exports.useCallback(function(){return o(!1)},[o]),X=a.exports.useCallback(function(v){return J({type:M.SetTitleId,id:v})},[J]),ye=ae(),Z=ye&&m===h.Open,k=d>1,ee=a.exports.useContext(B)!==null,we=k?"parent":"leaf";Ue(f,Z?F(we,{parent:Y.RestoreFocus,leaf:Y.All}):Y.None,{initialFocus:s,containers:T}),He(f,k?Z:!1),de("mousedown",function(v){var x,y=v.target;m===h.Open&&(k||((x=f.current)==null?void 0:x.contains(y))||R())}),de("keydown",function(v){v.key===Be.Escape&&m===h.Open&&(k||(v.preventDefault(),v.stopPropagation(),R()))}),a.exports.useEffect(function(){if(m===h.Open&&!ee){var v=document.documentElement.style.overflow,x=document.documentElement.style.paddingRight,y=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=y+"px",function(){document.documentElement.style.overflow=v,document.documentElement.style.paddingRight=x}}},[m,ee]),a.exports.useEffect(function(){if(m===h.Open&&!!f.current){var v=new IntersectionObserver(function(x){for(var y=O(x),N;!(N=y()).done;){var w=N.value;w.boundingClientRect.x===0&&w.boundingClientRect.y===0&&w.boundingClientRect.width===0&&w.boundingClientRect.height===0&&R()}});return v.observe(f.current),function(){return v.disconnect()}}},[m,f,R]);var te=$e(),De=te[0],Te=te[1],Ne="headlessui-dialog-"+j(),Re=a.exports.useMemo(function(){return[{dialogState:m,close:R,setTitleId:X},U]},[m,U,R,X]),re=a.exports.useMemo(function(){return{open:m===h.Open}},[m]),Ee={ref:be,id:Ne,role:"dialog","aria-modal":m===h.Open?!0:void 0,"aria-labelledby":U.titleId,"aria-describedby":De,onClick:function(x){x.stopPropagation()}},Se=i;return r(Ve,{type:"Dialog",element:f,onUpdate:a.exports.useCallback(function(v,x,y){var N;x==="Dialog"&&F(v,(N={},N[I.Add]=function(){T.current.add(y),u(function(w){return w+1})},N[I.Remove]=function(){T.current.add(y),u(function(w){return w-1})},N))},[]),children:r(pe,{force:!0,children:r(z,{children:r(B.Provider,{value:Re,children:r(z.Group,{target:f,children:r(pe,{force:!1,children:r(Te,{slot:re,name:"Dialog.Description",children:E({props:S({},Se,Ee),slot:re,defaultTag:Ze,features:et,visible:Ce,name:"Dialog"})})})})})})})})}),rt="div",nt=se(function e(t,n){var l=Q([A.displayName,e.name].join(".")),o=l[0],s=o.dialogState,i=o.close,p=ue(n),d="headlessui-dialog-overlay-"+j(),u=a.exports.useCallback(function(f){if(f.target===f.currentTarget){if(Fe(f.currentTarget))return f.preventDefault();f.preventDefault(),f.stopPropagation(),i()}},[i]),g=a.exports.useMemo(function(){return{open:s===h.Open}},[s]),b={ref:p,id:d,"aria-hidden":!0,onClick:u},T=t;return E({props:S({},T,b),slot:g,defaultTag:rt,name:"Dialog.Overlay"})}),ot="h2";function xe(e){var t=Q([A.displayName,xe.name].join(".")),n=t[0],l=n.dialogState,o=n.setTitleId,s="headlessui-dialog-title-"+j();a.exports.useEffect(function(){return o(s),function(){return o(null)}},[s,o]);var i=a.exports.useMemo(function(){return{open:l===h.Open}},[l]),p={id:s},d=e;return E({props:S({},d,p),slot:i,defaultTag:ot,name:"Dialog.Title"})}var A=Object.assign(tt,{Overlay:nt,Title:xe,Description:qe});function gt(){const{isCartOpen:e,closeCart:t}=G(),n=Ie();return c(A,{open:e,onClose:t,children:[r(A.Overlay,{className:"fixed z-20 inset-0 bg-gray-50 opacity-75"}),c("div",{className:`absolute flex flex-col md:block z-20 top-0 left-0 right-0 bottom-0 md:top-7 h-full md:left-auto md:right-7 md:bottom-auto md:h-auto md:max-h-[calc(100vh-56px)] bg-gray-50 w-full md:w-[470px] rounded-b-lg shadow-2xl ${n===0?"overflow-hidden":"overflow-y-scroll"}`,children:[r(at,{}),n===0?r(ut,{}):c(_,{children:[r(it,{}),r(st,{})]})]})]})}function at(){const{closeCart:e}=G();return c("header",{className:"border-b border-gray-300 bg-white py-3 px-6 flex justify-between items-center sticky top-0",children:[c("button",{type:"button",onClick:e,children:[r(dt,{}),r("span",{className:"sr-only",children:"Close cart"})]}),r("span",{className:"text-xs text-gray-500",children:"Free shipping on orders over $50"}),r(je,{})]})}function it(){return c("div",{className:"px-7 flex-grow",role:"table","aria-label":"Shopping cart",children:[c("div",{role:"row",className:"sr-only",children:[r("div",{role:"columnheader",children:"Product image"}),r("div",{role:"columnheader",children:"Product details"}),r("div",{role:"columnheader",children:"Price"})]}),r(Oe,{children:({merchandise:e})=>c("div",{role:"row",className:"flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900",children:[r("div",{role:"cell",className:"flex-shrink-0 mr-7",children:r(ne,{to:`products/${e.product.handle}`,children:r(C.Image,{className:"bg-white border border-black border-opacity-5 rounded-xl ",options:{width:98,height:98,crop:"center"}})})}),c("div",{role:"cell",className:"flex flex-col w-full justify-between items-start flex-grow-1 mr-4",children:[r(ne,{to:`products/${e.product.handle}`,className:"hover:underline",children:r(C.ProductTitle,{className:"text-lg font-medium"})}),r(C.SelectedOptions,{as:"ul",className:"text-xs space-y-1",children:({name:t,value:n})=>c(_,{children:[t,": ",n]})}),r(C.Attributes,{as:"ul",className:"text-sm space-y-1",children:({key:t,value:n})=>c(_,{children:[t,": ",n]})}),r(lt,{})]}),c("div",{role:"cell",className:"flex flex-col justify-between items-end",children:[r(C.QuantityAdjustButton,{adjust:"remove","aria-label":"Remove from cart",className:"disabled:pointer-events-all disabled:cursor-wait",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:r("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),r(C.Price,{className:"text-lg"})]})]})})]})}function lt(){return c("div",{className:"flex border rounded border-gray-300 items-center overflow-auto mt-2",children:[r(C.QuantityAdjustButton,{adjust:"decrease","aria-label":"Decrease quantity",className:"p-2 disabled:pointer-events-all disabled:cursor-wait",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:r("path",{fillRule:"evenodd",d:"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",clipRule:"evenodd"})})}),r(C.Quantity,{as:"div",className:"p-2 text-gray-900 text-xs text-center"}),r(C.QuantityAdjustButton,{adjust:"increase","aria-label":"Increase quantity",className:"p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:r("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})})})]})}function st(){return r("footer",{className:"bottom-0 sticky pb-8 border-t border-black border-opacity-5",children:c("div",{className:"relative h-60 bg-white text-gray-900 p-7",children:[c("div",{role:"table","aria-label":"Cost summary",children:[c("div",{role:"row",className:"flex justify-between",children:[r("span",{className:"font-semibold",role:"rowheader",children:"Subtotal"}),r(Ae,{amountType:"subtotal",role:"cell",className:"text-right "})]}),c("div",{role:"row",className:"flex justify-between mt-2",children:[r("span",{className:"font-semibold",role:"rowheader",children:"Shipping"}),r("span",{role:"cell",className:"uppercase",children:"Free"})]})]}),r(ke,{className:"flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md"}),r(Le,{className:oe,children:"Checkout"})]})})}function ut(){const{closeCart:e}=G();return c("div",{className:"p-7 flex flex-col",children:[r("p",{className:"mb-4 text-lg text-gray-500 text-center",children:"Your cart is empty"}),r("button",{type:"button",onClick:e,className:oe,children:"Continue Shopping"})]})}function dt(){return r("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}export{gt as default};
//# sourceMappingURL=Cart.client.0c65f35e.js.map