import{j as f,k,l as d,n as x,h as L,K as T,b}from"./open-closed.esm.aa47f60b.js";import{a as u}from"./vendor.84248098.js";function I(){var e=u.exports.useRef(!1);return u.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e}var c;(function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"})(c||(c={}));function h(e,t,l){t===void 0&&(t=c.All);var i=l===void 0?{}:l,n=i.initialFocus,a=i.containers,m=u.exports.useRef(typeof window!="undefined"?document.activeElement:null),o=u.exports.useRef(null),R=I(),v=Boolean(t&c.RestoreFocus),E=Boolean(t&c.InitialFocus);u.exports.useEffect(function(){!v||(m.current=document.activeElement)},[v]),u.exports.useEffect(function(){if(!!v)return function(){f(m.current),m.current=null}},[v]),u.exports.useEffect(function(){if(!!E&&!!e.current){var r=document.activeElement;if(n==null?void 0:n.current){if((n==null?void 0:n.current)===r){o.current=r;return}}else if(e.current.contains(r)){o.current=r;return}(n==null?void 0:n.current)?f(n.current):k(e.current,d.First)===x.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=document.activeElement}},[e,n,E]),L("keydown",function(r){!(t&c.TabLock)||!e.current||r.key===T.Tab&&(r.preventDefault(),k(e.current,(r.shiftKey?d.Previous:d.Next)|d.WrapAround)===x.Success&&(o.current=document.activeElement))}),L("focus",function(r){if(!!(t&c.FocusLock)){var p=new Set(a==null?void 0:a.current);if(p.add(e),!!p.size){var F=o.current;if(!!F&&!!R.current){var s=r.target;s&&s instanceof HTMLElement?w(p,s)?(o.current=s,f(s)):(r.preventDefault(),r.stopPropagation(),f(F)):f(o.current)}}}},!0)}function w(e,t){for(var l=b(e),i;!(i=l()).done;){var n,a=i.value;if((n=a.current)==null?void 0:n.contains(t))return!0}return!1}export{c as F,h as u};
//# sourceMappingURL=use-focus-trap.esm.177adad9.js.map
