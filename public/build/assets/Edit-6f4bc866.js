import{W as h,j as t,F as u,a as e,Y as b}from"./app-78ede4fe.js";import{L as n,a as p,b as x,c as f,A as g,B as s}from"./AuthenticatedLayout-086a16fd.js";import{B as v}from"./index.esm-d95da9e2.js";import"./app-92ef73ee.js";import"./transition-d2d5de59.js";import"./floating-ui.dom-76f5b9d3.js";function B({branch:r}){const{data:i,setData:c,put:m,processing:o,errors:d}=h({name:r.name,address:r.address}),l=a=>{c({...i,[a.target.name]:a.target.value})};return t(u,{children:[e(b,{title:"Branches"}),e("div",{className:"p-4 m-1 bg-white rounded-lg md:w-1/2",children:t("form",{className:"flex flex-col w-full gap-4",onSubmit:a=>{a.preventDefault(),m(route("branches.update",r.id))},children:[t("div",{children:[e("div",{className:"block mb-2",children:e(n,{htmlFor:"name",value:"Name of Branch"})}),e(p,{id:"name",name:"name",placeholder:"Condet",required:!0,value:i.name,onChange:a=>l(a),shadow:!0,type:"text"}),d.name&&e("p",{className:"text-xs italic text-red-500",children:d.name})]}),t("div",{children:[e("div",{className:"block mb-2",children:e(n,{htmlFor:"address",value:"Address of Branch"})}),e(x,{id:"address",name:"address",placeholder:"Jl. Pengantin Ali No.12, Kec. Ciracas, Kota Jakarta Timur.",required:!0,value:i.address,onChange:a=>l(a),shadow:!0,rows:3})]}),d.address&&e("p",{className:"text-xs italic text-red-500",children:d.address}),e(f,{type:"submit",disabled:o,className:"bg-blue-600",children:"Submit"})]})})]})}B.layout=r=>e(g,{children:r,header:t(s,{"aria-label":"breadcrumb",children:[e(s.Item,{href:route("dashboard"),icon:v,children:e("p",{children:"Dashboard"})}),e(s.Item,{href:route("branches.index"),children:"Branches"}),e(s.Item,{children:"Edit"})]})});export{B as default};
