"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[409],{7409:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,o,i,c,s,d,l,u,p,m,x=t(1413),f=t(9439),b=t(5705),h=t(168),g=t(6444),j=(0,g.ZP)(b.l0)(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),Z=g.ZP.label(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n"]))),y=(g.ZP.input(o||(o=(0,h.Z)(["\n  padding: 5px;\n  margin-top: 5px;\n\n  border-radius: 5px;\n"]))),g.ZP.button(i||(i=(0,h.Z)(["\n  background-color: #21c53c;\n  padding: 8px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  color: #ffffff;\n\n  :hover {\n    background-color: #0c9422;\n  }\n  :active {\n    background-color: #056e17;\n  }\n"])))),k=t(6727),v=k.Ry().shape({name:k.Z_().min(2).max(20).required(""),number:k.Z_().required("")}),P=[/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],w=t(3587),C=t.n(w),z=t(5218),A=t(5302),N=t(184),L=function(){var n=(0,A.wY)().data,e=(0,A.F3)(),t=(0,f.Z)(e,1)[0];return(0,N.jsx)(b.J9,{initialValues:{name:"",number:""},validationSchema:v,onSubmit:function(e,r){return n.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?(0,z.ZP)("".concat(e.name," is already in contacts."),{icon:"\u26a0\ufe0f"}):(t(e),z.ZP.success("".concat(e.name," added to contacts.")),r.resetForm())},children:(0,N.jsxs)(j,{children:[(0,N.jsxs)(Z,{children:["Name*",(0,N.jsx)(b.gN,{type:"text",name:"name",as:"input",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,N.jsx)(b.Bc,{name:"name",component:"span"}),(0,N.jsxs)(Z,{children:["Number*",(0,N.jsx)(b.gN,{type:"tel",name:"number",as:"input",component:function(n){var e=n.field;return(0,N.jsx)(C(),(0,x.Z)((0,x.Z)({},e),{},{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number must contain 7 digits",mask:P}))}})]}),(0,N.jsx)(b.Bc,{name:"number",component:"span"}),(0,N.jsx)(y,{type:"submit",children:"Add contact"})]})})},_=t(5048),F=t(3165),B=g.ZP.label(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),q=g.ZP.p(s||(s=(0,h.Z)(["\n  margin-bottom: 10px;\n"]))),J=function(){var n=(0,_.v9)(F.mj),e=(0,_.I0)();return(0,N.jsxs)(B,{children:[(0,N.jsx)(q,{children:"Find contacts by name"}),(0,N.jsx)("input",{type:"text",value:n,onChange:function(n){var t=n.target.value;e((0,F.fW)(t))}})]})},S=g.ZP.li(d||(d=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n"]))),Y=g.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n"]))),D=g.ZP.button(u||(u=(0,h.Z)(["\n  padding: 5px;\n  background-color: #b70a0a;\n\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #ffffff;\n\n  :hover {\n    background-color: #8e0000;\n  }\n  :active {\n    background-color: #690000;\n  }\n  :disabled {\n    background-color: #888888;\n  }\n"]))),E=function(n){var e=n.id,t=n.name,r=n.number,a=(0,A.Nt)(),o=(0,f.Z)(a,2),i=o[0],c=o[1].isLoading;return(0,N.jsxs)(S,{children:[(0,N.jsx)(Y,{children:(0,N.jsxs)("p",{children:[t,": "]})}),(0,N.jsxs)(Y,{children:[(0,N.jsx)("p",{children:r}),(0,N.jsx)(D,{type:"button",disabled:c,onClick:function(){i(e),z.Am.success("".concat(t," is deleted"))},children:"Delete"})]})]})},I=g.ZP.ul(p||(p=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),M=t(966),R=function(){var n=(0,A.wY)(),e=n.data,t=void 0===e?[]:e,r=n.isLoading,a=n.isError,o=(0,_.v9)(F.mj),i=t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return(0,N.jsxs)(I,{children:[r&&!a&&(0,N.jsx)(M.N,{}),i.map((function(n){return(0,N.jsx)(E,(0,x.Z)({},n),n.id)}))]})},T=g.ZP.main(m||(m=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  padding: 20px;\n  max-width: 768px;\n  border-radius: 20px;\n\n  background-color: #1a202c89;\n  backdrop-filter: blur(5px);\n"])));function V(){return(0,N.jsxs)(T,{children:[(0,N.jsx)("h1",{children:"Phonebook"}),(0,N.jsx)(L,{}),(0,N.jsx)("h2",{children:"Contacts"}),(0,N.jsx)(J,{}),(0,N.jsx)(R,{})]})}}}]);
//# sourceMappingURL=409.f715e356.chunk.js.map