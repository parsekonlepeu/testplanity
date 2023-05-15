import{j as o}from"./jsx-runtime-6eef64cc.js";import{C as u}from"./ClientMain-b51016a3.js";import{i as c,c as S,a as f,s as h}from"./appointmentSlice-91d9bc63.js";import{P as k}from"./Provider-7df69044.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./ChoiceClient-50e4d41e.js";import"./ButtonLoad-befe4ed4.js";import"./InputAnimate-33ad1e38.js";import"./useManageInput-bd87c1dd.js";import"./ChoicePhoneNumber-123c4985.js";import"./index.esm-1814e9b6.js";import"./ChoiceEmail-8fcf2082.js";import"./ButtonDelete-3c872c28.js";import"./IconButton-47780534.js";import"./useHover-fea14334.js";import"./index-169ee69c.js";import"./v4-a960c1f4.js";const d=({appointmentState:t,children:l})=>o.jsx(k,{store:S({reducer:{appointment:f({name:"appointment",initialState:t,reducers:{simpleChangeAppointment:h}}).reducer}}),children:l}),q={title:"Test/Templates/ClientMain",decorators:[t=>o.jsx("div",{style:{padding:"3rem"},children:t()})],component:u,parameters:{backgrounds:{default:"white",values:[{name:"white",value:"white"}]}}},e={decorators:[t=>o.jsx(d,{appointmentState:c,children:t()})]},r={decorators:[t=>o.jsx(d,{appointmentState:{...c,created:!0},children:t()})]};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [(story: () => React.ReactNode) => <Mockstore appointmentState={mockState}>{story()}</Mockstore>]
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [(story: () => React.ReactNode) => <Mockstore appointmentState={{
    ...mockState,
    created: true
  }}>\r
        {story()}\r
      </Mockstore>]
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["Default","Created"];export{r as Created,e as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=ClientMain.stories-a6f7891a.js.map
