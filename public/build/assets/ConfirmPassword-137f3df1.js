import{W as d,r as l,j as e,F as c,a as s,Y as p}from"./app-78ede4fe.js";import{A as u}from"./AuthenticationLayout-aed00b08.js";import{T as f,I as w}from"./TextInput-f2c34bb5.js";import{I as h}from"./InputLabel-7b5a6e9d.js";import{P as b}from"./PrimaryButton-b0e8cb16.js";import"./app-92ef73ee.js";function x(){const{data:r,setData:t,post:o,processing:i,errors:m,reset:n}=d({password:""});return l.useEffect(()=>()=>{n("password")},[]),e(c,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[e("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:a=>t("password",a.target.value)}),s(w,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(b,{className:"ml-4",disabled:i,children:"Confirm"})})]})]})}x.layout=r=>s(u,{children:r});export{x as default};