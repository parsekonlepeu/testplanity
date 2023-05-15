import{j as n}from"./jsx-runtime-6eef64cc.js";import{W as h}from"./WithIcon-13eb9f6b.js";import{f as g,e as u}from"./index.esm-1814e9b6.js";import{C as f}from"./ChoiceBirthday-ae46cb4f.js";import{T as I}from"./ToggleButton-0146ac91.js";import{T as x}from"./TapButton-9a92e109.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./useHover-fea14334.js";const E={title:"Test/Molecules/WithIcon",component:h,parameters:{backgrounds:{default:"default",values:[{name:"default",value:"white"}]}}},e={args:{Icon:g,children:n.jsx(f,{}),posIcon:"left"}},o={args:{Icon:u,children:n.jsx(I,{values:["Femme","Homme","Enfants"],onChange:console.log}),posIcon:"left"}},t={args:{Icon:u,children:n.jsx(x,{label:"Info client",type:"text",padding:0})}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    Icon: MdOutlineCake,
    children: <ChoiceBirthday />,
    posIcon: "left"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    Icon: MdOutlinePerson,
    children: <ToggleButton values={["Femme", "Homme", "Enfants"]} onChange={console.log} />,
    posIcon: "left"
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    Icon: MdOutlinePerson,
    children: <TapButton label="Info client" type="text" padding={0} />
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const b=["withChoiceBirthday","withToggleButton","withText"];export{b as __namedExportsOrder,E as default,e as withChoiceBirthday,t as withText,o as withToggleButton};
//# sourceMappingURL=WithIcon.stories-1153947a.js.map
