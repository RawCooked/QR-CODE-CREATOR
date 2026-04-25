const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Background3D-DHHjWvKZ.js","assets/motion-DaUpJ-T_.js","assets/three-BWSyjIsf.js"])))=>i.map(i=>d[i]);
import{r as c,j as e,m as u,A as $,R as A}from"./motion-DaUpJ-T_.js";import{_ as E,c as R}from"./three-BWSyjIsf.js";import{Q as q}from"./qr-DQ1eMEfk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=l(i);fetch(i.href,a)}})();/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M=(...t)=>t.filter((n,l,s)=>!!n&&s.indexOf(n)===l).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=c.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:i="",children:a,iconNode:o,...r},p)=>c.createElement("svg",{ref:p,...P,width:n,height:n,stroke:t,strokeWidth:s?Number(l)*24/Number(n):l,className:M("lucide",i),...r},[...o.map(([h,m])=>c.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(t,n)=>{const l=c.forwardRef(({className:s,...i},a)=>c.createElement(T,{ref:a,iconNode:n,className:M(`lucide-${D(t)}`,s),...i}));return l.displayName=`${t}`,l};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=d("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=d("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=d("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=d("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=d("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=d("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=d("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=d("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=d("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=d("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=d("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=d("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=d("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=d("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=d("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=d("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=d("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=d("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ee=(t,n)=>{const l=(n||"").trim();if(/^https?:\/\//i.test(l))return l;const s=l.replace(/^@/,"");return{instagram:`https://instagram.com/${s}`,tiktok:`https://www.tiktok.com/@${s}`,x:`https://x.com/${s}`,linkedin:`https://www.linkedin.com/in/${s}`,facebook:`https://www.facebook.com/${s}`,youtube:`https://www.youtube.com/@${s}`,github:`https://github.com/${s}`}[t]||l},S=t=>t?new Date(t).toISOString().replace(/[-:]/g,"").split(".")[0]+"Z":"",x={url:{label:"URL",icon:Q,fields:[{name:"url",label:"Website URL",type:"url",value:"https://myqr.app",placeholder:"https://..."}],build:t=>t.url||""},text:{label:"Text",icon:_,fields:[{name:"content",label:"Plain text",type:"textarea",value:"Hello from myQr ✨"}],build:t=>t.content||""},wifi:{label:"Wi-Fi",icon:Y,fields:[{name:"ssid",label:"Network name (SSID)",type:"text",value:"MyNetwork"},{name:"password",label:"Password",type:"text",value:"password123"},{name:"encryption",label:"Security",type:"select",value:"WPA",options:[{label:"WPA / WPA2",value:"WPA"},{label:"WEP",value:"WEP"},{label:"None",value:"nopass"}]},{name:"hidden",label:"Hidden network",type:"checkbox",value:!1}],build:t=>`WIFI:T:${t.encryption};S:${t.ssid};P:${t.password};H:${t.hidden?"true":"false"};;`},email:{label:"Email",icon:V,fields:[{name:"to",label:"Recipient",type:"email",value:"hello@example.com"},{name:"subject",label:"Subject",type:"text",value:"Hello"},{name:"body",label:"Message",type:"textarea",value:"Reaching out via your QR code."}],build:t=>`mailto:${t.to}?subject=${encodeURIComponent(t.subject||"")}&body=${encodeURIComponent(t.body||"")}`},phone:{label:"Call",icon:F,fields:[{name:"phone",label:"Phone number",type:"tel",value:"+15555550123"}],build:t=>`tel:${t.phone}`},sms:{label:"SMS",icon:U,fields:[{name:"phone",label:"Phone number",type:"tel",value:"+15555550123"},{name:"message",label:"Message",type:"textarea",value:"Hi!"}],build:t=>`sms:${t.phone}?body=${encodeURIComponent(t.message||"")}`},contact:{label:"vCard",icon:J,fields:[{name:"fullname",label:"Full name",type:"text",value:"Jane Doe"},{name:"org",label:"Company",type:"text",value:"Acme Inc."},{name:"phone",label:"Phone",type:"tel",value:"+15555550123"},{name:"email",label:"Email",type:"email",value:"jane@acme.com"},{name:"website",label:"Website",type:"url",value:"https://acme.com"}],build:t=>`BEGIN:VCARD
VERSION:3.0
FN:${t.fullname}
ORG:${t.org}
TEL:${t.phone}
EMAIL:${t.email}
URL:${t.website}
END:VCARD`},location:{label:"Location",icon:W,fields:[{name:"place",label:"Place or address",type:"text",value:"Eiffel Tower, Paris"}],build:t=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.place||"")}`},social:{label:"Social",icon:C,fields:[{name:"platform",label:"Platform",type:"select",value:"instagram",options:[{label:"Instagram",value:"instagram"},{label:"TikTok",value:"tiktok"},{label:"X / Twitter",value:"x"},{label:"LinkedIn",value:"linkedin"},{label:"Facebook",value:"facebook"},{label:"YouTube",value:"youtube"},{label:"GitHub",value:"github"}]},{name:"handle",label:"Handle or full URL",type:"text",value:"@myqr"}],build:t=>ee(t.platform,t.handle)},event:{label:"Event",icon:I,fields:[{name:"title",label:"Title",type:"text",value:"Launch Party"},{name:"location",label:"Location",type:"text",value:"Online"},{name:"start",label:"Starts",type:"datetime-local",value:"2026-05-01T18:00"},{name:"end",label:"Ends",type:"datetime-local",value:"2026-05-01T20:00"},{name:"description",label:"Description",type:"textarea",value:"See you there!"}],build:t=>`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${t.title}
LOCATION:${t.location}
DTSTART:${S(t.start)}
DTEND:${S(t.end)}
DESCRIPTION:${t.description}
END:VEVENT
END:VCALENDAR`}},N=t=>x[t].fields.reduce((n,l)=>({...n,[l.name]:l.value??""}),{});function ae({value:t,onChange:n}){return e.jsx("div",{className:"type-grid",children:Object.entries(x).map(([l,s])=>{const i=s.icon,a=t===l;return e.jsxs(u.button,{type:"button",className:`type-btn ${a?"active":""}`,onClick:()=>n(l),whileTap:{scale:.94},whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:26},children:[e.jsx(i,{size:18,strokeWidth:2.2}),e.jsx("span",{children:s.label}),a&&e.jsx(u.span,{layoutId:"type-underline",className:"type-underline",transition:{type:"spring",stiffness:380,damping:30}})]},l)})})}function te({type:t,values:n,onChange:l}){const s=x[t],i=(a,o)=>l({...n,[a]:o});return e.jsx($,{mode:"wait",children:e.jsx(u.div,{className:"fields",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25},children:s.fields.map(a=>{const o=`f-${t}-${a.name}`;return e.jsxs("div",{className:`field field-${a.type}`,children:[a.type!=="checkbox"&&e.jsx("label",{htmlFor:o,children:a.label}),a.type==="textarea"&&e.jsx("textarea",{id:o,rows:3,value:n[a.name]??"",placeholder:a.placeholder,onChange:r=>i(a.name,r.target.value)}),a.type==="select"&&e.jsx("select",{id:o,value:n[a.name]??"",onChange:r=>i(a.name,r.target.value),children:a.options.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))}),a.type==="checkbox"&&e.jsxs("label",{className:"checkbox",htmlFor:o,children:[e.jsx("input",{id:o,type:"checkbox",checked:!!n[a.name],onChange:r=>i(a.name,r.target.checked)}),e.jsx("span",{children:a.label})]}),!["textarea","select","checkbox"].includes(a.type)&&e.jsx("input",{id:o,type:a.type,value:n[a.name]??"",placeholder:a.placeholder,onChange:r=>i(a.name,r.target.value)})]},a.name)})},t)})}const j=[{id:"aurora",name:"Aurora",fg:"#7c5cff",fg2:"#22d3ee",bg:"#ffffff"},{id:"sunset",name:"Sunset",fg:"#ff5e7e",fg2:"#ffb347",bg:"#fff8f1"},{id:"mint",name:"Mint",fg:"#0f9f75",fg2:"#34d399",bg:"#f4fffb"},{id:"midnight",name:"Midnight",fg:"#0b0d12",fg2:"#3b3f57",bg:"#ffffff"},{id:"cobalt",name:"Cobalt",fg:"#1e3a8a",fg2:"#3b82f6",bg:"#eff6ff"},{id:"mono",name:"Mono",fg:"#000000",fg2:"#000000",bg:"#ffffff"},{id:"invert",name:"Invert",fg:"#ffffff",fg2:"#ffffff",bg:"#0b0d12"},{id:"rose",name:"Rose",fg:"#9f1239",fg2:"#fb7185",bg:"#fff1f2"}],k=[{id:"square",name:"Square"},{id:"rounded",name:"Rounded"},{id:"dots",name:"Dots"},{id:"classy",name:"Classy"},{id:"classy-rounded",name:"Classy Round"},{id:"extra-rounded",name:"Extra Round"}],w=[{id:"square",name:"Square"},{id:"dot",name:"Dot"},{id:"extra-rounded",name:"Rounded"}],ne=[{id:"square",name:"Square"},{id:"dot",name:"Dot"}],le=[{id:"L",name:"L · 7%"},{id:"M",name:"M · 15%"},{id:"Q",name:"Q · 25%"},{id:"H",name:"H · 30%"}];function y({title:t,children:n}){return e.jsxs("div",{className:"ctrl-section",children:[e.jsx("h4",{children:t}),n]})}function f({active:t,onClick:n,children:l,style:s}){return e.jsx(u.button,{type:"button",className:`chip ${t?"active":""}`,onClick:n,whileTap:{scale:.93},whileHover:{y:-1},style:s,children:l})}function ie({style:t,setStyle:n}){const l=a=>n({...t,...a}),s=a=>{var p;const o=(p=a.target.files)==null?void 0:p[0];if(!o)return;const r=new FileReader;r.onload=()=>l({logo:r.result}),r.readAsDataURL(o)},i=()=>{const a=j[Math.floor(Math.random()*j.length)],o=k[Math.floor(Math.random()*k.length)];l({fg:a.fg,fg2:a.fg2,bg:a.bg,gradient:a.fg!==a.fg2,dotStyle:o.id,cornerSquareStyle:w[Math.floor(Math.random()*w.length)].id})};return e.jsxs("div",{className:"controls",children:[e.jsx(y,{title:"Palettes",children:e.jsxs("div",{className:"palette-row",children:[j.map(a=>{const o=t.fg===a.fg&&t.bg===a.bg;return e.jsxs("button",{className:`palette ${o?"active":""}`,onClick:()=>l({fg:a.fg,fg2:a.fg2,bg:a.bg,gradient:a.fg!==a.fg2}),title:a.name,type:"button",children:[e.jsx("span",{className:"palette-swatch",style:{background:`linear-gradient(135deg, ${a.fg}, ${a.fg2})`}}),e.jsx("span",{className:"palette-bg",style:{background:a.bg}})]},a.id)}),e.jsx("button",{className:"palette random",onClick:i,title:"Surprise me",type:"button",children:e.jsx(K,{size:16})})]})}),e.jsxs(y,{title:"Colors",children:[e.jsxs("div",{className:"color-row",children:[e.jsxs("label",{className:"color-pick",children:[e.jsx("span",{children:"Foreground"}),e.jsx("input",{type:"color",value:t.fg,onChange:a=>l({fg:a.target.value})})]}),e.jsxs("label",{className:"color-pick",children:[e.jsx("span",{children:"Background"}),e.jsx("input",{type:"color",value:t.bg,onChange:a=>l({bg:a.target.value})})]}),e.jsxs("label",{className:`color-pick ${t.gradient?"":"dim"}`,children:[e.jsx("span",{children:"Accent"}),e.jsx("input",{type:"color",value:t.fg2,onChange:a=>l({fg2:a.target.value}),disabled:!t.gradient})]})]}),e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:t.gradient,onChange:a=>l({gradient:a.target.checked})}),e.jsx("span",{children:"Gradient fill"})]}),t.gradient&&e.jsxs("label",{className:"slider",children:[e.jsxs("span",{children:["Angle · ",t.gradientAngle,"°"]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:t.gradientAngle,onChange:a=>l({gradientAngle:+a.target.value})})]})]}),e.jsx(y,{title:"Dot style",children:e.jsx("div",{className:"chip-row",children:k.map(a=>e.jsx(f,{active:t.dotStyle===a.id,onClick:()=>l({dotStyle:a.id}),children:a.name},a.id))})}),e.jsxs(y,{title:"Corners",children:[e.jsx("div",{className:"chip-row",children:w.map(a=>e.jsxs(f,{active:t.cornerSquareStyle===a.id,onClick:()=>l({cornerSquareStyle:a.id}),children:["▢ ",a.name]},a.id))}),e.jsx("div",{className:"chip-row",children:ne.map(a=>e.jsxs(f,{active:t.cornerDotStyle===a.id,onClick:()=>l({cornerDotStyle:a.id}),children:["● ",a.name]},a.id))})]}),e.jsxs(y,{title:"Logo",children:[e.jsxs("div",{className:"logo-row",children:[e.jsxs("label",{className:"logo-upload",children:[e.jsx(X,{size:16}),e.jsx("span",{children:t.logo?"Replace logo":"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",onChange:s,hidden:!0})]}),t.logo&&e.jsxs("button",{className:"logo-clear",onClick:()=>l({logo:null}),type:"button",children:[e.jsx(Z,{size:14})," Remove"]})]}),t.logo&&e.jsxs("label",{className:"slider",children:[e.jsxs("span",{children:["Logo size · ",Math.round(t.logoSize*100),"%"]}),e.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.02",value:t.logoSize,onChange:a=>l({logoSize:+a.target.value})})]})]}),e.jsxs(y,{title:"Advanced",children:[e.jsxs("label",{className:"slider",children:[e.jsxs("span",{children:["Margin · ",t.margin,"px"]}),e.jsx("input",{type:"range",min:"0",max:"40",step:"1",value:t.margin,onChange:a=>l({margin:+a.target.value})})]}),e.jsx("div",{className:"chip-row",children:le.map(a=>e.jsx(f,{active:t.ecLevel===a.id,onClick:()=>l({ecLevel:a.id}),children:a.name},a.id))})]})]})}function se({payload:t,style:n,onReady:l}){const s=c.useRef(null),i=c.useRef(null),a=c.useMemo(()=>{const o=n.gradient?{type:n.dotStyle,gradient:{type:"linear",rotation:(n.gradientAngle||45)*(Math.PI/180),colorStops:[{offset:0,color:n.fg},{offset:1,color:n.fg2}]}}:{type:n.dotStyle,color:n.fg};return{width:360,height:360,type:"svg",data:t||" ",margin:n.margin,qrOptions:{errorCorrectionLevel:n.ecLevel},image:n.logo||void 0,imageOptions:{hideBackgroundDots:!0,imageSize:n.logoSize,margin:6,crossOrigin:"anonymous"},dotsOptions:o,backgroundOptions:{color:n.bg},cornersSquareOptions:{type:n.cornerSquareStyle,color:n.fg},cornersDotOptions:{type:n.cornerDotStyle,color:n.fg}}},[t,n]);return c.useEffect(()=>{i.current=new q(a),s.current&&(s.current.innerHTML="",i.current.append(s.current)),l==null||l(i.current)},[]),c.useEffect(()=>{i.current&&(i.current.update(a),l==null||l(i.current))},[a,l]),e.jsxs(u.div,{className:"qr-preview",initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.5,ease:[.22,1,.36,1]},children:[e.jsx("div",{className:"qr-frame",style:{background:n.bg},children:e.jsx("div",{ref:s,className:"qr-canvas"})}),e.jsxs("div",{className:"qr-caption",children:[e.jsx("span",{className:"qr-dot"}),e.jsx("span",{className:"qr-text",children:"Live preview · scans as you type"})]})]})}function oe({qr:t,payload:n}){const[l,s]=c.useState(!1),i=h=>t==null?void 0:t.download({name:"myqr",extension:h}),a=async()=>{if(n)try{await navigator.clipboard.writeText(n),s(!0),setTimeout(()=>s(!1),1500)}catch{}},o=async()=>{var h;if(!navigator.share||!t)return r();try{const m=await t.getRawData("png"),g=new File([m],"myqr.png",{type:"image/png"});(h=navigator.canShare)!=null&&h.call(navigator,{files:[g]})?await navigator.share({files:[g],title:"myQr",text:n}):await navigator.share({title:"myQr",text:n})}catch{}},r=()=>i("png"),p=({onClick:h,icon:m,label:g,primary:b})=>e.jsxs(u.button,{type:"button",onClick:h,className:`action ${b?"primary":""}`,whileTap:{scale:.96},whileHover:{y:-1},children:[e.jsx(m,{size:16}),e.jsx("span",{children:g})]});return e.jsxs("div",{className:"actions",children:[e.jsx(p,{onClick:()=>i("png"),icon:v,label:"PNG",primary:!0}),e.jsx(p,{onClick:()=>i("svg"),icon:v,label:"SVG"}),e.jsx(p,{onClick:()=>i("jpeg"),icon:v,label:"JPG"}),e.jsx(p,{onClick:a,icon:l?z:O,label:l?"Copied":"Copy data"}),e.jsx(p,{onClick:o,icon:C,label:"Share"})]})}const re=c.lazy(()=>E(()=>import("./Background3D-DHHjWvKZ.js"),__vite__mapDeps([0,1,2]))),ce={fg:"#7c5cff",fg2:"#22d3ee",bg:"#ffffff",gradient:!0,gradientAngle:45,dotStyle:"rounded",cornerSquareStyle:"extra-rounded",cornerDotStyle:"dot",margin:8,ecLevel:"Q",logo:null,logoSize:.28};function de(){const[t,n]=c.useState("url"),[l,s]=c.useState(()=>N("url")),[i,a]=c.useState(ce),[o,r]=c.useState(null),[p,h]=c.useState(!0);c.useEffect(()=>{s(N(t))},[t]),c.useEffect(()=>{const b=matchMedia("(prefers-reduced-motion: reduce)").matches,L=matchMedia("(max-width: 720px)").matches;(b||L)&&h(!1)},[]);const m=c.useMemo(()=>{try{return x[t].build(l)||""}catch{return""}},[t,l]),g=m.length;return e.jsxs("div",{className:"app-shell",children:[p&&e.jsx(c.Suspense,{fallback:null,children:e.jsx(re,{})}),e.jsxs("header",{className:"topbar",children:[e.jsxs(u.div,{className:"brand",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx("div",{className:"logo",children:e.jsx(G,{size:22})}),e.jsxs("div",{className:"brand-text",children:[e.jsx("h1",{children:"myQr"}),e.jsx("p",{children:"Beautiful, customizable QR codes"})]})]}),e.jsxs("div",{className:"topbar-meta",children:[e.jsxs("span",{className:"badge",children:[e.jsx(B,{size:13})," Live"]}),e.jsx("a",{className:"ghost-link",href:"https://github.com",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:e.jsx(H,{size:16})})]})]}),e.jsxs("main",{className:"grid",children:[e.jsxs(u.section,{className:"panel left",initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.5,delay:.05},children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Content"}),e.jsx("span",{className:"hint",children:"Choose what your QR points to"})]}),e.jsx(ae,{value:t,onChange:n}),e.jsx(te,{type:t,values:l,onChange:s}),e.jsx("div",{className:"panel-foot",children:e.jsxs("span",{className:`char ${g>1e3?"warn":""}`,children:[g," chars"]})})]}),e.jsxs(u.section,{className:"panel center",initial:{opacity:0,scale:.97},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1},children:[e.jsx(se,{payload:m,style:i,onReady:r}),e.jsx(oe,{qr:o,payload:m})]}),e.jsxs(u.section,{className:"panel right",initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Style"}),e.jsx("span",{className:"hint",children:"Make it yours"})]}),e.jsx(ie,{style:i,setStyle:a})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("span",{children:"myQr · crafted with care"})})]})}R.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(de,{})}));
