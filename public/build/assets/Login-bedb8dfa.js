import{W as c,r as d,a as e,F as u,j as a,b as p}from"./app-78ede4fe.js";function f({status:h,canResetPassword:t}){const{data:s,setData:o,post:i,processing:n,errors:l,reset:m}=c({email:"",password:"",remember:!1});return d.useEffect(()=>()=>{m("password")},[]),e(u,{children:e("section",{children:e("div",{className:"form-box",children:e("div",{className:"form-value",children:a("form",{onSubmit:r=>{r.preventDefault(),i(route("login"))},children:[e("h2",{children:"Login"}),l.email&&e("p",{className:"font-danger",children:l.email}),a("div",{className:"inputbox",children:[e("ion-icon",{name:"mail-outline"}),e("input",{id:"email",type:"email",name:"email",value:s.email,className:"block w-full mt-1",autoComplete:"username",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0}),e("label",{htmlFor:"email",children:"Email"})]}),a("div",{className:"inputbox",children:[e("ion-icon",{name:"lock-closed-outline"}),e("input",{id:"password",type:"password",name:"password",value:s.password,className:"block w-full mt-1",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0}),e("label",{htmlFor:"password",children:"Password"})]}),a("div",{className:"forget",children:[e("input",{id:"remember",name:"remember",type:"checkbox",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),a("label",{htmlFor:"remember",children:["Remember Me  ",t&&e(p,{href:route("password.request"),children:"Forgot your password?"})]})]}),e("button",{disabled:n,children:"Log in"})]})})})})})}export{f as default};
