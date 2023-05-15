import{r as s}from"./index-c013ead5.js";const b=(t,e)=>{const[c,a]=s.useState(t),[r,u]=s.useState(!1);s.useEffect(()=>{a(t)},[t]);const n=s.useCallback(o=>{e&&e(o.target.value),a(o.target.value)},[]),l=s.useCallback(()=>{u(!0)},[]),f=s.useCallback(()=>{u(!1)},[]);return{value:c,focus:r,functions:{onChange:n,onFocus:l,onBlur:f}}};export{b as u};
//# sourceMappingURL=useManageInput-bd87c1dd.js.map
