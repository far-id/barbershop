const Dt=["top","right","bottom","left"],gt=["start","end"],ht=Dt.reduce((t,e)=>t.concat(e,e+"-"+gt[0],e+"-"+gt[1]),[]),Y=Math.min,I=Math.max,Z=Math.round,Q=Math.floor,H=t=>({x:t,y:t}),Ft={left:"right",right:"left",bottom:"top",top:"bottom"},kt={start:"end",end:"start"};function rt(t,e,o){return I(t,Y(e,o))}function U(t,e){return typeof t=="function"?t(e):t}function N(t){return t.split("-")[0]}function F(t){return t.split("-")[1]}function vt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(N(t))?"y":"x"}function lt(t){return vt(ot(t))}function bt(t,e,o){o===void 0&&(o=!1);const n=F(t),i=lt(t),r=ct(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=et(s)),[s,et(s)]}function Bt(t){const e=et(t);return[tt(t),e,tt(e)]}function tt(t){return t.replace(/start|end/g,e=>kt[e])}function Mt(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Nt(t,e,o,n){const i=F(t);let r=Mt(N(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(tt)))),r}function et(t){return t.replace(/left|right|bottom|top/g,e=>Ft[e])}function Vt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ot(t){return typeof t!="number"?Vt(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function pt(t,e,o){let{reference:n,floating:i}=t;const r=ot(e),s=lt(e),c=ct(s),l=N(e),a=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,g=n[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:n.y-i.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:u};break;case"left":f={x:n.x-i.width,y:u};break;default:f={x:n.x,y:n.y}}switch(F(e)){case"start":f[s]-=g*(o&&a?-1:1);break;case"end":f[s]+=g*(o&&a?-1:1);break}return f}const Wt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=pt(a,n,l),g=n,f={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y,data:b,reset:v}=await p({x:d,y:u,initialPlacement:n,placement:g,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,f={...f,[w]:{...f[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(a=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=pt(a,g,l)),h=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:f}};async function at(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=U(e,t),m=Ot(f),w=c[g?u==="floating"?"reference":"floating":u],p=nt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),x=u==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=nt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const $t=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=U(t,e)||{};if(a==null)return{};const u=Ot(d),g={x:o,y:n},f=lt(i),m=ct(f),h=await s.getDimensions(a),w=f==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[f]-g[f]-r.floating[m],v=g[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let C=A?A[y]:0;(!C||!await(s.isElement==null?void 0:s.isElement(A)))&&(C=c.floating[y]||r.floating[m]);const W=b/2-v/2,$=C/2-h[m]/2-1,O=Y(u[p],$),P=Y(u[x],$),R=O,z=C-h[m]-P,E=C/2-h[m]/2+W,S=rt(R,E,z),D=!l.arrow&&F(i)!=null&&E!==S&&r.reference[m]/2-(E<R?O:P)-h[m]/2<0,M=D?E<R?E-R:E-z:0;return{[f]:g[f]+M,data:{[f]:S,centerOffset:E-S-M,...D&&{alignmentOffset:M}},reset:D}}});function Ht(t,e,o){return(t?[...o.filter(i=>F(i)===t),...o.filter(i=>F(i)!==t)]:o.filter(i=>N(i)===i)).filter(i=>t?F(i)===t||(e?tt(i)!==i:!1):!0)}const _t=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var o,n,i;const{rects:r,middlewareData:s,placement:c,platform:l,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:g=ht,autoAlignment:f=!0,...m}=U(t,e),h=u!==void 0||g===ht?Ht(u||null,f,g):g,w=await at(e,m),p=((o=s.autoPlacement)==null?void 0:o.index)||0,x=h[p];if(x==null)return{};const y=bt(x,r,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==x)return{reset:{placement:h[0]}};const b=[w[N(x)],w[y[0]],w[y[1]]],v=[...((n=s.autoPlacement)==null?void 0:n.overflows)||[],{placement:x,overflows:b}],A=h[p+1];if(A)return{data:{index:p+1,overflows:v},reset:{placement:A}};const C=v.map(O=>{const P=F(O.placement);return[O.placement,P&&d?O.overflows.slice(0,2).reduce((R,z)=>R+z,0):O.overflows[0],O.overflows]}).sort((O,P)=>O[1]-P[1]),$=((i=C.filter(O=>O[2].slice(0,F(O[0])?2:3).every(P=>P<=0))[0])==null?void 0:i[0])||C[0][0];return $!==c?{data:{index:p+1,overflows:v},reset:{placement:$}}:{}}}},zt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=U(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const p=N(i),x=N(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=g||(x||!h?[et(c)]:Bt(c));!g&&m!=="none"&&b.push(...Nt(c,h,m,y));const v=[c,...b],A=await at(e,w),C=[];let W=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&C.push(A[p]),u){const R=bt(i,s,y);C.push(A[R[0]],A[R[1]])}if(W=[...W,{placement:i,overflows:C}],!C.every(R=>R<=0)){var $,O;const R=((($=r.flip)==null?void 0:$.index)||0)+1,z=v[R];if(z)return{data:{index:R,overflows:W},reset:{placement:z}};let E=(O=W.filter(S=>S.overflows[0]<=0).sort((S,D)=>S.overflows[1]-D.overflows[1])[0])==null?void 0:O.placement;if(!E)switch(f){case"bestFit":{var P;const S=(P=W.map(D=>[D.placement,D.overflows.filter(M=>M>0).reduce((M,St)=>M+St,0)]).sort((D,M)=>D[1]-M[1])[0])==null?void 0:P[0];S&&(E=S);break}case"initialPlacement":E=c;break}if(i!==E)return{reset:{placement:E}}}return{}}}};async function It(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=N(o),c=F(o),l=ot(o)==="y",a=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=U(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),l?{x:f*d,y:g*a}:{x:g*a,y:f*d}}const jt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await It(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},Xt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=U(t,e),a={x:o,y:n},d=await at(e,l),u=ot(N(i)),g=vt(u);let f=a[g],m=a[u];if(r){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=f+d[w],y=f-d[p];f=rt(x,f,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=m+d[w],y=m-d[p];m=rt(x,m,y)}const h=c.fn({...e,[g]:f,[u]:m});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function K(t){return At(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(At(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function At(t){return t instanceof Node||t instanceof T(t).Node}function k(t){return t instanceof Element||t instanceof T(t).Element}function B(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function wt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function J(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Yt(t){return["table","td","th"].includes(K(t))}function ft(t){const e=ut(),o=L(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function qt(t){let e=_(t);for(;B(e)&&!q(e);){if(ft(e))return e;e=_(e)}return null}function ut(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(K(t))}function L(t){return T(t).getComputedStyle(t)}function it(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(K(t)==="html")return t;const e=t.assignedSlot||t.parentNode||wt(t)&&t.host||V(t);return wt(e)?e.host:e}function Rt(t){const e=_(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&J(e)?e:Rt(e)}function G(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Rt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=T(i);return r?e.concat(s,s.visualViewport||[],J(i)?i:[],s.frameElement&&o?G(s.frameElement):[]):e.concat(i,G(i,[],o))}function Ct(t){const e=L(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=B(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=Z(o)!==r||Z(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function dt(t){return k(t)?t:t.contextElement}function X(t){const e=dt(t);if(!B(e))return H(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Ct(e);let s=(r?Z(o.width):o.width)/n,c=(r?Z(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ut=H(0);function Et(t){const e=T(t);return!ut()||!e.visualViewport?Ut:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Kt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==T(t)?!1:e}function j(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=dt(t);let s=H(1);e&&(n?k(n)&&(s=X(n)):s=X(t));const c=Kt(r,o,n)?Et(r):H(0);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=T(r),f=n&&k(n)?T(n):n;let m=g,h=m.frameElement;for(;h&&n&&f!==m;){const w=X(h),p=h.getBoundingClientRect(),x=L(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,u*=w.y,l+=y,a+=b,m=T(h),h=m.frameElement}}return nt({width:d,height:u,x:l,y:a})}const Gt=[":popover-open",":modal"];function mt(t){return Gt.some(e=>{try{return t.matches(e)}catch{return!1}})}function Jt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=V(n),c=e?mt(e.floating):!1;if(n===s||c&&r)return o;let l={scrollLeft:0,scrollTop:0},a=H(1);const d=H(0),u=B(n);if((u||!u&&!r)&&((K(n)!=="body"||J(s))&&(l=it(n)),B(n))){const g=j(n);a=X(n),d.x=g.x+n.clientLeft,d.y=g.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+d.x,y:o.y*a.y-l.scrollTop*a.y+d.y}}function Qt(t){return Array.from(t.getClientRects())}function Tt(t){return j(V(t)).left+it(t).scrollLeft}function Zt(t){const e=V(t),o=it(t),n=t.ownerDocument.body,i=I(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=I(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Tt(t);const c=-o.scrollTop;return L(n).direction==="rtl"&&(s+=I(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function te(t,e){const o=T(t),n=V(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const a=ut();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function ee(t,e){const o=j(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=B(t)?X(t):H(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,a=n*r.y;return{width:s,height:c,x:l,y:a}}function xt(t,e,o){let n;if(e==="viewport")n=te(t,o);else if(e==="document")n=Zt(V(t));else if(k(e))n=ee(e,o);else{const i=Et(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return nt(n)}function Pt(t,e){const o=_(t);return o===e||!k(o)||q(o)?!1:L(o).position==="fixed"||Pt(o,e)}function ne(t,e){const o=e.get(t);if(o)return o;let n=G(t,[],!1).filter(c=>k(c)&&K(c)!=="body"),i=null;const r=L(t).position==="fixed";let s=r?_(t):t;for(;k(s)&&!q(s);){const c=L(s),l=ft(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(s)&&!l&&Pt(t,s))?n=n.filter(d=>d!==s):i=c,s=_(s)}return e.set(t,n),n}function oe(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?mt(e)?[]:ne(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((a,d)=>{const u=xt(e,d,i);return a.top=I(u.top,a.top),a.right=Y(u.right,a.right),a.bottom=Y(u.bottom,a.bottom),a.left=I(u.left,a.left),a},xt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ie(t){const{width:e,height:o}=Ct(t);return{width:e,height:o}}function se(t,e,o){const n=B(e),i=V(e),r=o==="fixed",s=j(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=H(0);if(n||!n&&!r)if((K(e)!=="body"||J(i))&&(c=it(e)),n){const u=j(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=Tt(i));const a=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:a,y:d,width:s.width,height:s.height}}function st(t){return L(t).position==="static"}function yt(t,e){return!B(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Lt(t,e){const o=T(t);if(mt(t))return o;if(!B(t)){let i=_(t);for(;i&&!q(i);){if(k(i)&&!st(i))return i;i=_(i)}return o}let n=yt(t,e);for(;n&&Yt(n)&&st(n);)n=yt(n,e);return n&&q(n)&&st(n)&&!ft(n)?o:n||qt(t)||o}const re=async function(t){const e=this.getOffsetParent||Lt,o=this.getDimensions,n=await o(t.floating);return{reference:se(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ce(t){return L(t).direction==="rtl"}const le={convertOffsetParentRelativeRectToViewportRelativeRect:Jt,getDocumentElement:V,getClippingRect:oe,getOffsetParent:Lt,getElementRects:re,getClientRects:Qt,getDimensions:ie,getScale:X,isElement:k,isRTL:ce};function ae(t,e){let o=null,n;const i=V(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:a,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const f=Q(d),m=Q(i.clientWidth-(a+u)),h=Q(i.clientHeight-(d+g)),w=Q(a),x={rootMargin:-f+"px "+-m+"px "+-h+"px "+-w+"px",threshold:I(0,Y(1,l))||1};let y=!0;function b(v){const A=v[0].intersectionRatio;if(A!==l){if(!y)return s();A?s(!1,A):n=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return s(!0),r}function fe(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=dt(t),d=i||r?[...a?G(a):[],...G(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",o,{passive:!0}),r&&p.addEventListener("resize",o)});const u=a&&c?ae(a,o):null;let g=-1,f=null;s&&(f=new ResizeObserver(p=>{let[x]=p;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(e)})),o()}),a&&!l&&f.observe(a),f.observe(e));let m,h=l?j(t):null;l&&w();function w(){const p=j(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&o(),h=p,m=requestAnimationFrame(w)}return o(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),u==null||u(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const ue=jt,de=_t,me=Xt,ge=zt,he=$t,pe=(t,e,o)=>{const n=new Map,i={platform:le,...o},r={...i.platform,_c:n};return Wt(t,e,{...i,platform:r})};export{de as a,he as b,pe as c,fe as d,ge as f,G as g,ue as o,me as s};
