import{j as e}from"./jsx-runtime-6eef64cc.js";import{T as A}from"./Tabbar-52912609.js";import{M,a as P,b,c as v}from"./index.esm-1814e9b6.js";import{I as c}from"./IconButton-47780534.js";import{C as _}from"./Client-837e9f3d.js";import{D as I}from"./Date-693fc03e.js";import{L as B}from"./ListPresta-fb3d5650.js";import{W as p}from"./WithIcon-13eb9f6b.js";import{T as d}from"./TapButton-9a92e109.js";import{i as s,c as D,a as F,s as T,b as w,d as E,e as z,f as O,g as L}from"./appointmentSlice-91d9bc63.js";import{P as W}from"./Provider-7df69044.js";import"./index-c013ead5.js";import"./useHover-fea14334.js";import"./ClientMain-b51016a3.js";import"./ChoiceClient-50e4d41e.js";import"./ButtonLoad-befe4ed4.js";import"./InputAnimate-33ad1e38.js";import"./useManageInput-bd87c1dd.js";import"./ChoicePhoneNumber-123c4985.js";import"./ChoiceEmail-8fcf2082.js";import"./ButtonDelete-3c872c28.js";import"./ClientDown-d784aba7.js";import"./ChoiceBirthday-ae46cb4f.js";import"./ToggleButton-0146ac91.js";import"./ToggleSwitch-c611fe09.js";import"./InfoClient-cc71ad01.js";import"./Info-40b1c361.js";import"./Grow-63b67df2.js";import"./CSSTransition-12fac145.js";import"./inheritsLoose-9eefaa95.js";import"./index-169ee69c.js";import"./_commonjsHelpers-725317a4.js";import"./ChoiceDate-a178b43b.js";import"./ChoiceHour-c2886367.js";import"./Presta-9f523ab8.js";import"./DisplayValue-a05b5cc6.js";import"./collaborateur-0cc274ba.js";import"./assertThisInitialized-081f9914.js";import"./v4-a960c1f4.js";const m=()=>e.jsxs("div",{className:"appoint-contenair",children:[e.jsxs("div",{className:"appoint-head",children:[e.jsx("p",{children:"Rendez-vous"}),e.jsxs("div",{className:"appoint-head-button",children:[e.jsx(c,{Icon:M,backgroudnColor:"white",color:"#34423E",borderColor:"#34423E",size:40}),e.jsx(c,{Icon:P,backgroudnColor:"#48BB78",hoverColor:"#38A169",hoverBorderColor:"#38A169",hoverIconColor:"white",color:"white",borderColor:"#48BB78",size:40})]})]}),e.jsxs("div",{className:"appoint-main",children:[e.jsx(_,{}),e.jsx(I,{}),e.jsx(B,{}),e.jsxs("div",{className:"appoint-button-bott",children:[e.jsx(p,{Icon:b,children:e.jsx(d,{label:"Ajouter un titre",padding:0,type:"text"})}),e.jsx(p,{Icon:v,children:e.jsx(d,{label:"Ajouter une note",padding:0,type:"text"})})]})]}),e.jsx("div",{className:"appoint-footer",children:e.jsx(A,{})})]});try{m.displayName="Appointment",m.__docgenInfo={description:"",displayName:"Appointment",props:{}}}catch{}const i=({appointmentState:t,children:y})=>e.jsx(W,{store:D({reducer:{appointment:F({name:"appointment",initialState:t,reducers:{simpleChangeAppointment:T,initAppointment:w,addPrestation:E,delPrestation:z,changeCollPrestations:O,changePresPrestations:L}}).reducer}}),children:y}),Pe={title:"Test/Pages/Appointment",decorators:[t=>e.jsx("div",{style:{padding:"3rem"},children:t()})],component:m},o={decorators:[t=>e.jsx(i,{appointmentState:s,children:t()})]},r={decorators:[t=>e.jsx(i,{appointmentState:{...s,nameClient:"François Rolet",tel:"06 00 00 00 00",email:"f.rolet@mail.com"},children:t()})]},a={decorators:[t=>e.jsx(i,{appointmentState:{...s,nameClient:"François Rolet",tel:"06 00 00 00 00",email:"f.rolet@mail.com",created:!0,came:!0},children:t()})]},n={decorators:[t=>e.jsx(i,{appointmentState:{...s,nameClient:"François Rolet",tel:"06 00 00 00 00",email:"f.rolet@mail.com",created:!0,came:!1},children:t()})]};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [(story: () => React.ReactNode) => <Mockstore appointmentState={mockState}>{story()}</Mockstore>]
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var C,x,j;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [(story: () => React.ReactNode) => <Mockstore appointmentState={{
    ...mockState,
    nameClient: "François Rolet",
    tel: "06 00 00 00 00",
    email: "f.rolet@mail.com"
  }}>\r
        {story()}\r
      </Mockstore>]
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,R,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [(story: () => React.ReactNode) => <Mockstore appointmentState={{
    ...mockState,
    nameClient: "François Rolet",
    tel: "06 00 00 00 00",
    email: "f.rolet@mail.com",
    created: true,
    came: true
  }}>\r
        {story()}\r
      </Mockstore>]
}`,...(g=(R=a.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var S,k,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [(story: () => React.ReactNode) => <Mockstore appointmentState={{
    ...mockState,
    nameClient: "François Rolet",
    tel: "06 00 00 00 00",
    email: "f.rolet@mail.com",
    created: true,
    came: false
  }}>\r
        {story()}\r
      </Mockstore>]
}`,...(N=(k=n.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const be=["Default","NotCreated","CreatedCame","CreatedNotCame"];export{a as CreatedCame,n as CreatedNotCame,o as Default,r as NotCreated,be as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Appointment.stories-66f06d6f.js.map
