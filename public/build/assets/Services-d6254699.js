import{a as e,j as i}from"./app-78ede4fe.js";function r({services:c}){return e("section",{className:"services-section section-padding",id:"services_section",children:e("div",{className:"container",children:i("div",{className:"row",children:[e("div",{className:"col-lg-12 col-12",children:e("h2",{className:"mb-5",children:"Services"})}),c.filter(s=>s.prime==!0).map((s,a)=>e("div",{className:"mb-4 col-lg-6 col-12",children:i("div",{className:"services-thumb",children:[e("img",{src:`https://storage.googleapis.com/barbershop-raplontos/${s.image}`,className:"services-image img-fluid"}),i("div",{className:"services-info d-flex align-items-end",children:[e("h4",{className:"mb-0",children:s.name}),i("strong",{className:"services-thumb-price",children:[s.price.slice(0,-3),"k"]})]})]})},a))]})})})}export{r as default};
