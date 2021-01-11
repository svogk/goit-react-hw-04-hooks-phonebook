(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={filter:"Filter_filter__3wIHq"}},11:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),o=n(9),i=n.n(o),u=(n(18),n(12)),s=n(2),l=n(10),b=n.n(l),m=function(e){var t=e.filter,n=e.onChange;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:b.a.filter,children:"Find contacts by name"}),Object(r.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},d=n(23),j=n(6),f=n.n(j);var h=function(e){var t=e.onAddContact,n=e.onCheckContact,c=Object(a.useState)(""),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),m=b[0],j=b[1],h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":u(r);break;case"number":j(r);break;default:return}},p=function(e,t){return e.trim()&&t.trim()?n(e):(alert("\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f Name \u0438 Number"),!1)},O=function(){u(""),j("")};return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),p(i,m)?(t({id:Object(d.a)(),name:i,number:m}),O()):O()},children:[Object(r.jsxs)("label",{htmlFor:"",children:["Name",Object(r.jsx)("input",{className:f.a.input,type:"text",name:"name",value:i,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",onChange:h,autoFocus:!0})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Number",Object(r.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:m,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",onChange:h})]}),Object(r.jsx)("button",{children:"Add contact"})]})})},p=n(3),O=n.n(p),x=n(8),v=n.n(x),C=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDelete;return Object(r.jsxs)("li",{className:v.a.item,children:[n,": ",a,Object(r.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return c(t)},children:"Delete"})]})};C.protoTypes={name:O.a.string.isRequired,number:O.a.string.isRequired,onDelete:O.a.func.isRequired};var g=C;g.propTypes={contacts:O.a.arrayOf(O.a.shape({id:O.a.number.isRequired}))};var _=function(e){var t=e.contacts,n=e.onDelete;return 0===t.length?null:Object(r.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(r.jsx)(g,{name:a,number:c,onDelete:n,id:t},t)}))})},N=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),r=Object(s.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[e,c]),[c,o]},S=n(11);var k=function(){var e=N("contacts",S),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],b=i[1],d=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(h,{onAddContact:function(e){c([].concat(Object(u.a)(n),[e]))},onCheckContact:function(e){var t=!!n.find((function(t){return t.name===e}));return t&&alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"),!t}}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(m,{filter:l,onChange:function(e){b(e.target.value)}}),Object(r.jsx)(_,{contacts:d,onDelete:function(e){return c(n.filter((function(t){return t.id!==e})))}})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),w()},6:function(e,t,n){e.exports={form:"ContactForm_form__1L68T",input:"ContactForm_input__3EZYJ"}},8:function(e,t,n){e.exports={item:"ContactListItem_item__33Jpz",button:"ContactListItem_button__1BU3X"}}},[[21,1,2]]]);
//# sourceMappingURL=main.fe8c243d.chunk.js.map