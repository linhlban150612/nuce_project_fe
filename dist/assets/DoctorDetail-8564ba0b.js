import{r as m,o as I,R as O,j as e,L as R}from"./index-5d1582d4.js";import{f as P,j as U,a as B}from"./index-d5b70956.js";import{b as G,a as Q}from"./index-2ebe3d10.js";import{T as q}from"./index-7633af43.js";import{u as z}from"./useTranslation-57c75f11.js";import{S as T}from"./index-8ccb2d3a.js";import{S as A}from"./index-a21a4ee5.js";import"./iconBase-7dfc76c2.js";import"./reactNode-ed0d3403.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./index-8ab4410e.js";import"./useZIndex-412122f7.js";import"./pickAttrs-c42834d1.js";import"./Overflow-dad1924c.js";import"./PurePanel-9c90c19c.js";import"./SearchOutlined-54091923.js";import"./asyncToGenerator-f41fc0b7.js";import"./index-3f290c1a.js";import"./useLocale-98ce2b95.js";import"./useCSSVarCls-2b45069f.js";import"./compact-item-f6aa6deb.js";import"./move-8c08fc05.js";import"./CheckOutlined-9e439339.js";import"./CloseOutlined-21301cb3.js";import"./DownOutlined-e8684ab4.js";const ye=()=>{var x,h,j,g,N,u,y,b,f,v,S,w,M,k,C,L;const{t:i}=z(),[t,H]=m.useState(!1),[l,$]=m.useState(!1),[n,E]=m.useState(0),c=I(),d=c.pathname.split("/")[1],{data:s,isLoading:o}=O(c.state.id),p=()=>{H(!t)},_=()=>{$(!l)},F=a=>{E(a)};return e.jsx(T,{spinning:o,children:e.jsxs("div",{className:"max-w-screen-xl mx-auto px-12 py-4",children:[e.jsxs("div",{className:"flex items-center gap-1 my-4 text-[#45C3D2] ",children:[e.jsxs("a",{href:"/",className:"flex gap-1",children:[e.jsx(P,{className:"text-xl"}),"/"]}),d==="bac-si"?e.jsxs("p",{children:[" ",i("doctorDetail.doctor")," /",(x=s==null?void 0:s.data)==null?void 0:x.specialityName]}):d==="dich-vu"?e.jsxs("p",{children:[i("doctorDetail.service"),"/",(h=s==null?void 0:s.data)==null?void 0:h.specialityName]}):null]}),e.jsxs("div",{className:"flex gap-8 w-4/6 text-[#555555] leading-6",children:[e.jsx("img",{src:(j=s==null?void 0:s.data)==null?void 0:j.imageUrl,alt:"",className:"w-32 h-32 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[27px] font-medium text-gray-800",children:(g=s==null?void 0:s.data)==null?void 0:g.doctorName}),e.jsx("div",{className:`${l?"max-h-full":"max-h-32 overflow-hidden"} transition-max-h duration-500 ease-in-out ml-3`,children:e.jsx("p",{className:" my-2",dangerouslySetInnerHTML:{__html:((N=s==null?void 0:s.data)==null?void 0:N.descriptionHtml)||""}})}),e.jsx("button",{className:"mt-2 flex text-[#288AD6] font-light",onClick:_,children:l?e.jsxs("span",{children:[i("clinicsDetail.hidden"),e.jsx(U,{className:"inline-block"})]}):e.jsxs("span",{children:[i("clinicsDetail.more"),e.jsx(B,{className:"inline-block"})]})}),e.jsxs("p",{className:"flex gap-1 items-center text-lg",children:[e.jsx(G,{})," ",(u=s==null?void 0:s.data)==null?void 0:u.provinceName]})]})]}),e.jsxs("div",{className:"py-3 my-3 grid grid-cols-2 gap-16 bg-white items-start",children:[e.jsx(T,{spinning:o,children:e.jsxs("div",{className:"px-4",children:[e.jsx(A,{style:{width:150},value:n,onChange:F,children:(y=s==null?void 0:s.data)==null?void 0:y.schedules.map((a,r)=>e.jsx(A.Option,{value:r,children:a.date},r))}),n!==null&&e.jsxs(e.Fragment,{children:[e.jsxs("h3",{className:"flex gap-1 items-center uppercase my-2",children:[e.jsx(Q,{}),i("doctorDetail.bookingTitle")]}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:(f=(b=s==null?void 0:s.data)==null?void 0:b.schedules[n])==null?void 0:f.schedules.map((a,r)=>e.jsx(R,{to:`/dat-lich/${a.id}`,className:`bg-gray-100 py-3 text-center text-gray-800 text-sm font-medium ${a.status!==1?"pointer-events-none opacity-50":""}`,children:`${a.startTime}-${a.endTime}`},r))})]}),e.jsxs("p",{className:"text-gray-700 text-sm pt-1.5 my-1 pb-2.5 flex items-center",children:[i("doctorDetail.selectAndSet")," ",e.jsx(q,{className:"mx-0.5 text-black"})]})]})}),e.jsxs("div",{className:"border-l border-gray-200 pl-8 py-4",children:[e.jsxs("div",{className:"leading-6 border-b border-gray-200 pb-2",children:[e.jsx("p",{className:"uppercase text-gray-500 font-medium",children:i("doctorDetail.addressExamination")}),e.jsx("p",{className:"font-semibold",children:(v=s==null?void 0:s.data)==null?void 0:v.clinicName}),e.jsxs("p",{children:[" ",(S=s==null?void 0:s.data)==null?void 0:S.address," ",(w=s==null?void 0:s.data)==null?void 0:w.wardName," - ",(M=s==null?void 0:s.data)==null?void 0:M.districtName," - ",(k=s==null?void 0:s.data)==null?void 0:k.provinceName]})]}),e.jsxs("p",{className:"border-b border-gray-200 py-2",children:[e.jsxs("span",{className:"uppercase text-gray-500 font-medium mr-1",children:[i("doctorDetail.priceExamitination"),":"]}),e.jsx("span",{dangerouslySetInnerHTML:{__html:((C=s==null?void 0:s.data)==null?void 0:C.note)||""}}),e.jsx("div",{className:"p-2 bg-gray-100 border border-gray-300 text-sm my-1",children:e.jsx("p",{className:"text-gray-600",children:(L=s==null?void 0:s.data)==null?void 0:L.paymentMethod})})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mr-1",children:[e.jsx("span",{className:"uppercase text-gray-500 font-medium",children:i("doctorDetail.insurance")}),e.jsx("span",{className:"text-blue-400 ml-1 cursor-pointer",onClick:p,children:t?"":e.jsx("span",{children:i("doctorDetail.moreDetail")})})]}),t&&e.jsxs("div",{children:[e.jsx("div",{className:"bg-gray-100 border border-gray-300 text-sm my-2",children:s.data.warrantyPolicy.map(a=>e.jsxs("div",{className:"border border-gray-300 p-2",children:[e.jsx("h1",{className:"text-base",children:a.name}),e.jsx("p",{className:"text-gray-600",children:a.value})]}))}),e.jsx("p",{onClick:p,className:"text-blue-400 ml-1 cursor-pointer",children:t?e.jsx("span",{children:i("doctorDetail.hidden")}):""})]})]})]})]})]})})};export{ye as default};
