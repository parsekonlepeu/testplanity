import{j as n}from"./jsx-runtime-6eef64cc.js";import{W as t}from"./WithIcon-13eb9f6b.js";import{e as h,f as x,g as j,h as f}from"./index.esm-1814e9b6.js";import{C as g}from"./ChoiceBirthday-ae46cb4f.js";import{T as C}from"./ToggleButton-0146ac91.js";import{T as r}from"./ToggleSwitch-c611fe09.js";import{T as a}from"./TapButton-9a92e109.js";import{I as u}from"./InfoClient-cc71ad01.js";import{u as o}from"./appointmentSlice-91d9bc63.js";const c=()=>{const i=o(e=>e.appointment.genre),s=o(e=>e.appointment.birthday),d=o(e=>e.appointment.remiderSMS),p=o(e=>e.appointment.marketingSMS),m=o(e=>e.appointment.infoClient),l=o(e=>e.appointment.loyalty);return n.jsxs("div",{className:"client-down-contenair",children:[n.jsxs("div",{className:"client-down-first-line",children:[n.jsx(t,{Icon:h,posIcon:"left",iconColor:"#5F706A",children:n.jsx(C,{values:["Homme","Femme","Enfants"],onChange:console.log,select:i})}),n.jsx(t,{Icon:x,posIcon:"left",iconColor:"#5F706A",children:n.jsx(g,{dayInit:s.day,monthInit:s.month})}),n.jsxs("div",{className:"client-down-toggles",children:[n.jsxs("div",{className:"toggle-client-down-contenair",children:[n.jsx(r,{value:d}),n.jsx("p",{children:"SMS de rappel"})]}),n.jsxs("div",{className:"toggle-client-down-contenair",children:[n.jsx(r,{value:p}),n.jsx("p",{children:"SMS marketing"})]})]})]}),n.jsx("div",{className:"client-down-second-line",children:n.jsx(u,{text:m,fold:!1})}),n.jsxs("div",{className:"client-down-third-line",children:[n.jsxs("div",{className:"client-down-unknow",children:[n.jsx(t,{Icon:j,posIcon:"left",iconColor:"#5F706A",children:n.jsx(a,{type:"text",label:"Carte de fidélité",labelColor:"#34423E",padding:0})}),n.jsx("p",{children:` : Points : ${l.points} - Gains : ${l.gain}€ (+)`})]}),n.jsxs("div",{className:"client-down-unknow",children:[n.jsx(t,{Icon:f,posIcon:"left",iconColor:"#5F706A",children:n.jsx(a,{type:"text",label:"Forfait brushing par 5 - cheveux courts",labelColor:"#34423E",padding:0})}),n.jsx("p",{children:"(4)"})]})]})]})};try{c.displayName="ClientDown",c.__docgenInfo={description:"",displayName:"ClientDown",props:{}}}catch{}export{c as C};
//# sourceMappingURL=ClientDown-d784aba7.js.map