import{b as o,r as n,j as c,O as a}from"./index-5d1582d4.js";const i=()=>{const e=o(),[s]=n.useState(()=>{const t=localStorage.getItem("token");return t||null});return n.useEffect(()=>{(async()=>{s&&e("/")})()},[s,e]),c.jsx(a,{})};export{i as default};
