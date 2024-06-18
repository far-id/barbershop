import{r as u,j as t,F as x,a as e,Y as w,y as h}from"./app-78ede4fe.js";import{G as y,C as k,T as i,A as N,B as o}from"./AuthenticatedLayout-086a16fd.js";import{B as C}from"./index.esm-d95da9e2.js";import"./app-92ef73ee.js";import"./transition-d2d5de59.js";import"./floating-ui.dom-76f5b9d3.js";function j(n){return y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}}]})(n)}function S({queues:n,serves:f}){const[c,d]=u.useState(n),[m,b]=u.useState(""),g=(r,l)=>{r.preventDefault(),h.put(route("queue.status",l),{status:"serving"}),d([...c].filter(a=>a.id!==l))},p=(r,l)=>{r.preventDefault(),h.put(route("queue.status",l),{status:"canceled"}),d([...c].filter(a=>a.id!==l))},v=(r,l)=>{r.preventDefault(),h.put(route("queue.status",l),{status:"finished"})};return u.useEffect(()=>{(l=>d(l?[...n].filter(a=>Object.keys(a).some(s=>s==="booking_id"||s==="name"?a[s].toString().toLowerCase().includes(l.toLowerCase()):!1)):n))(m)},[m]),t(x,{children:[e(w,{title:"Queue"}),e("div",{className:"justify-between block w-full md:flex gap-x-4 md:overflow-x-auto scrollbar scrollbar-thumb-indigo-400 scrollbar-h-1 scrollbar-track-gray-200 scrollbar-track-rounded-full",children:f.map((r,l)=>t(k,{className:"mb-3 md:mb-0 min-w-fit",children:[t("div",{className:"flex items-center justify-between w-full gap-x-14",children:[e("span",{children:r.booking_id}),e("p",{className:"min-w-fit",children:r.name}),e("button",{onClick:a=>v(a,r.id),title:"Finish The Serve",className:"inline-flex items-center justify-center overflow-hidden text-lg font-medium text-gray-900 transition-all duration-75 ease-in border rounded-full hover:border-none group hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-400 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",children:e("span",{className:"relative px-4 py-2 transition-all duration-75 ease-in bg-white rounded-full dark:bg-gray-900 group-hover:bg-opacity-0",children:j()})})]}),t("div",{children:[e("ul",{children:r.services.map((a,s)=>t("li",{className:"flex justify-between",children:[e("span",{className:"min-w-fit",children:a.name}),e("div",{className:"w-full border-b-2 border-blue-200"}),t("span",{children:[a.price.slice(0,-3),"k"]})]},s))}),t("div",{className:"flex justify-between mt-3 border-t-2 border-dashed",children:[e("span",{children:"Total:"}),e("div",{className:"w-full border-b-2 border-gray-200"}),r.total_price.toString().slice(0,-3),"k"]})]})]},l))}),e("div",{className:"flex w-full p-3 my-6 bg-white rounded-lg shadow-md",children:t("div",{className:"items-center w-full",children:[e("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",children:"Search"}),t("div",{className:"relative",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),e("input",{onChange:r=>b(r.target.value),type:"search",id:"default-search",className:"block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search by Id or Name",required:!0})]})]})}),e("div",{className:"overflow-hidden overflow-x-auto rounded-lg shadow-md",children:t(i,{hoverable:!0,children:[t(i.Head,{children:[e(i.HeadCell,{children:"#"}),e(i.HeadCell,{children:"Name"}),e(i.HeadCell,{children:"Arrival"}),e(i.HeadCell,{children:e("span",{className:"sr-only",children:"Edit"})})]}),e(i.Body,{className:"divide-y",children:c.map((r,l)=>t(i.Row,{className:"bg-white dark:border-gray-700 dark:bg-gray-800",children:[e(i.Cell,{className:"font-medium text-gray-900 whitespace-nowrap dark:text-white",children:r.booking_id}),e(i.Cell,{children:r.name}),t(i.Cell,{children:[e("span",{className:"mr-2",children:r.arrival_time}),r.arrival_date]}),t(i.Cell,{className:"flex justify-center -ml-6 gap-x-2",children:[e("button",{onClick:a=>g(a,r.id),className:"font-medium text-cyan-600 hover:underline dark:text-cyan-500",children:"Serve"}),e("button",{onClick:a=>p(a,r.id),className:"font-medium text-pink-600 hover:underline dark:text-pink-500",children:"Cancel"})]})]},l))})]})})]})}S.layout=n=>e(N,{children:n,header:t(o,{"aria-label":"breadcrumb",children:[e(o.Item,{href:route("dashboard"),icon:C,children:e("p",{children:"Dashboard"})}),e(o.Item,{href:route("queues.index"),children:"Queues"}),e(o.Item,{children:"List"})]})});export{S as default};