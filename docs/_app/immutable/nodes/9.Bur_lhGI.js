import{s as w,n as P,d as E,e as N}from"../chunks/scheduler.CbksUgmw.js";import{S as A,i as K,e as k,c as y,b as B,d as _,k as m,o as v,f as g,l as O,A as U,s as Y,u as C,B as j,a as z,C as F,n as R,q as G,x as H,v as J,D as L,h as Q,g as W,t as X,j as Z,m as x}from"../chunks/index.CKmXrqYi.js";import{e as S}from"../chunks/each.D6YF6ztN.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.GyAeeTib.js";function p(s){let e,t,l,a=`${s[4]?100:s[7]}%`,r,n;return{c(){e=k("div"),t=k("div"),this.h()},l(o){e=y(o,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0});var u=B(e);t=y(u,"DIV",{class:!0}),B(t).forEach(_),u.forEach(_),this.h()},h(){m(t,"class",l="progress-bar-meter "+s[5]+" svelte-12wvf64"),v(t,"width",a),m(e,"class",r="progress-bar "+s[6]+" svelte-12wvf64"),m(e,"data-testid","progress-bar"),m(e,"role","progressbar"),m(e,"aria-labelledby",s[3]),m(e,"aria-valuenow",s[0]),m(e,"aria-valuemin",s[1]),m(e,"aria-valuemax",n=s[2]-s[1])},m(o,u){g(o,e,u),O(e,t)},p(o,[u]){u&32&&l!==(l="progress-bar-meter "+o[5]+" svelte-12wvf64")&&m(t,"class",l),u&144&&a!==(a=`${o[4]?100:o[7]}%`)&&v(t,"width",a),u&64&&r!==(r="progress-bar "+o[6]+" svelte-12wvf64")&&m(e,"class",r),u&8&&m(e,"aria-labelledby",o[3]),u&1&&m(e,"aria-valuenow",o[0]),u&2&&m(e,"aria-valuemin",o[1]),u&6&&n!==(n=o[2]-o[1])&&m(e,"aria-valuemax",n)},i:P,o:P,d(o){o&&_(e)}}}const $="w-full overflow-hidden",ee="h-full";function te(s,e,t){let l,a,r,n,o,{value:u=void 0}=e,{min:d=0}=e,{max:c=100}=e,{height:i="h-2"}=e,{rounded:h="rounded-token"}=e,{transition:b="transition-[width]"}=e,{animIndeterminate:I="anim-indeterminate"}=e,{meter:T="bg-surface-900-50-token"}=e,{track:M="bg-surface-200-700-token"}=e,{labelledby:D=""}=e;return s.$$set=f=>{t(15,e=E(E({},e),N(f))),"value"in f&&t(0,u=f.value),"min"in f&&t(1,d=f.min),"max"in f&&t(2,c=f.max),"height"in f&&t(8,i=f.height),"rounded"in f&&t(9,h=f.rounded),"transition"in f&&t(10,b=f.transition),"animIndeterminate"in f&&t(11,I=f.animIndeterminate),"meter"in f&&t(12,T=f.meter),"track"in f&&t(13,M=f.track),"labelledby"in f&&t(3,D=f.labelledby)},s.$$.update=()=>{s.$$.dirty&7&&t(7,l=u?100*(u-d)/(c-d):0),s.$$.dirty&1&&t(4,a=u===void 0||u<0),s.$$.dirty&2064&&t(14,r=a?I:""),t(6,n=`${$} ${M} ${i} ${h} ${e.class??""}`),s.$$.dirty&22016&&t(5,o=`${ee} ${T} ${h} ${r} ${b}`)},e=N(e),[u,d,c,D,a,o,n,l,i,h,b,I,T,M,r]}class ae extends A{constructor(e){super(),K(this,e,te,p,w,{value:0,min:1,max:2,height:8,rounded:9,transition:10,animIndeterminate:11,meter:12,track:13,labelledby:3})}}function V(s,e,t){const l=s.slice();return l[6]=e[t].letter,l[7]=e[t].top,l[8]=e[t].left,l}function le(s){let e,t=S(s[1]),l=[];for(let a=0;a<t.length;a+=1)l[a]=q(V(s,t,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=C()},l(a){for(let r=0;r<l.length;r+=1)l[r].l(a);e=C()},m(a,r){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(a,r);g(a,e,r)},p(a,r){if(r&2){t=S(a[1]);let n;for(n=0;n<t.length;n+=1){const o=V(a,t,n);l[n]?l[n].p(o,r):(l[n]=q(o),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},d(a){a&&_(e),Q(l,a)}}}function re(s){let e,t="Reset",l,a;return{c(){e=k("button"),e.textContent=t,this.h()},l(r){e=y(r,"BUTTON",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-zes6ut"&&(e.textContent=t),this.h()},h(){m(e,"class","btn")},m(r,n){g(r,e,n),l||(a=R(e,"click",s[4]),l=!0)},p:P,d(r){r&&_(e),l=!1,a()}}}function q(s){let e,t=s[6]+"",l;return{c(){e=k("p"),l=X(t),this.h()},l(a){e=y(a,"P",{class:!0,style:!0});var r=B(e);l=Z(r,t),r.forEach(_),this.h()},h(){m(e,"class","neonText svelte-w68add"),v(e,"left",s[8]+"vw"),v(e,"top",s[7]+"vh")},m(a,r){g(a,e,r),O(e,l)},p(a,r){r&2&&t!==(t=a[6]+"")&&x(l,t),r&2&&v(e,"left",a[8]+"vw"),r&2&&v(e,"top",a[7]+"vh")},d(a){a&&_(e)}}}function ne(s){let e,t,l,a,r,n,o;e=new ae({props:{label:"Progress Bar",value:s[2],max:100}});function u(i,h){return h&4&&(l=null),l==null&&(l=i[2]===100&&alert("You have completed the alphabet!")==null),l?re:le}let d=u(s,-1),c=d(s);return{c(){U(e.$$.fragment),t=Y(),c.c(),a=C()},l(i){j(e.$$.fragment,i),t=z(i),c.l(i),a=C()},m(i,h){F(e,i,h),g(i,t,h),c.m(i,h),g(i,a,h),r=!0,n||(o=R(window,"keydown",G(s[3])),n=!0)},p(i,[h]){const b={};h&4&&(b.value=i[2]),e.$set(b),d===(d=u(i,h))&&c?c.p(i,h):(c.d(1),c=d(i),c&&(c.c(),c.m(a.parentNode,a)))},i(i){r||(H(e.$$.fragment,i),r=!0)},o(i){J(e.$$.fragment,i),r=!1},d(i){i&&(_(t),_(a)),L(e,i),c.d(i),n=!1,o()}}}function se(s,e,t){let l,a="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),r=[],n=[];function o(d){d.keyCode<65||d.keyCode>90||(r.push({letter:a[d.keyCode-65],top:10+Math.random()*80,left:10+Math.random()*80}),n.includes(a[d.keyCode-65])||n.push(a[d.keyCode-65]),t(0,n),t(1,r),setTimeout(()=>{t(1,r=r.filter(c=>c!==r[0]))},1e3))}const u=()=>t(0,n=[]);return s.$$.update=()=>{s.$$.dirty&1&&t(2,l=Math.round(n.length/a.length*100))},[n,r,l,o,u]}class ce extends A{constructor(e){super(),K(this,e,se,ne,w,{})}}export{ce as component};
