import{b as f,j as s,L as k}from"./index-5d1582d4.js";import{T as v}from"./index-7633af43.js";import{M as B,a as T}from"./index-2ebe3d10.js";import{c as C}from"./convertToSlug-3fcf7559.js";import{u as L}from"./useTranslation-57c75f11.js";import{S as w}from"./index-8ccb2d3a.js";import{S as g}from"./index-a21a4ee5.js";import{P as $}from"./Pagination-bc2271f4.js";const _=({lstService:i,currentPage:h,handlePageChange:j,handleDateChange:N,selectedDates:l,toggleShowMoreDetails:d,showMoreDetails:t,doctorLoading:b})=>{var o,m;const{t:n}=L(),u=f(),y=(a,r)=>{u(`/bac-si/${C(n(r||""))}`,{state:{id:a}})};return s.jsx(w,{spinning:b,children:s.jsxs("div",{className:"max-w-screen-xl mx-auto grid grid-cols-1 gap-4",children:[(o=i==null?void 0:i.data)==null?void 0:o.data.map((a,r)=>{var x,p;return s.jsxs("div",{className:"py-3 rounded-xl shadow-md grid grid-cols-2 bg-white items-start",children:[s.jsxs("div",{className:"border-r border-gray-200 flex items-center gap-4 px-4",children:[s.jsx("div",{className:"flex flex-col justify-center items-center mt-4 w-1/5",children:s.jsx("img",{src:a.imageUrl,alt:"",className:"w-20 h-20 rounded-full"})}),s.jsxs("div",{className:"w-4/5 hover:brightness-125 cursor-pointer",onClick:()=>y(a.id,a.doctorName),children:[s.jsx("h3",{className:"font-medium text-xl text-blue-400",children:a.doctorName}),s.jsxs("p",{className:"flex gap-1 items-center text-gray-500",children:[s.jsx(B,{}),s.jsx("span",{children:a.provinceName})]})]})]}),s.jsxs("div",{className:"px-4",children:[s.jsx(g,{style:{width:150},value:l[r],onChange:e=>N(e,r),children:(x=a==null?void 0:a.schedules)==null?void 0:x.map((e,c)=>s.jsx(g.Option,{value:c,children:e.date},e.id))}),l[r]!==null&&s.jsxs(s.Fragment,{children:[s.jsxs("h3",{className:"flex gap-1 items-center uppercase my-2",children:[s.jsx(T,{}),n("listBooking.bookingTitle")]}),s.jsx("div",{className:"grid grid-cols-4 gap-3",children:(p=a==null?void 0:a.schedules[l[r]])==null?void 0:p.schedules.map((e,c)=>s.jsx(k,{to:`/dat-lich/${e.id}`,className:`bg-gray-100 py-3 text-center text-gray-800 text-sm font-medium ${e.status!==1?"pointer-events-none opacity-50":""}`,children:`${e.startTime}-${e.endTime}`},c))})]}),s.jsxs("p",{className:"text-gray-700 text-sm pt-1.5 my-1 border-b border-gray-200 pb-2.5 flex items-center",children:[n("listBooking.selectAndSet")," ",s.jsx(v,{className:"mx-0.5 text-black"})]}),s.jsxs("div",{className:"leading-6 border-b border-gray-200 pb-2",children:[s.jsx("p",{className:"uppercase text-gray-500 font-medium",children:n("listBooking.addressExamination")}),s.jsx("p",{className:"font-semibold",children:a.clinicName}),s.jsxs("p",{children:[a.wardName," - ",a.districtName," - ",a.provinceName]})]}),s.jsxs("p",{className:"border-b border-gray-200 py-2",children:[s.jsx("span",{className:"uppercase text-gray-500 font-medium mr-1",children:n("listBooking.priceExamitination")}),s.jsx("span",{dangerouslySetInnerHTML:{__html:a.note||""}}),s.jsx("div",{className:"p-2 bg-gray-100 border border-gray-300 text-sm my-1",children:s.jsx("p",{className:"text-gray-600",children:a.paymentMethod})})]}),s.jsxs("div",{children:[s.jsxs("p",{className:"mr-1",children:[s.jsx("span",{className:"uppercase text-gray-500 font-medium",children:n("listBooking.insurance")}),s.jsx("span",{className:"text-blue-400 ml-1 cursor-pointer",onClick:()=>d(r),children:t[r]?"":s.jsx("span",{children:n("listBooking.moreDetail")})})]}),t[r]&&s.jsxs("div",{children:[s.jsx("div",{className:"bg-gray-100 border border-gray-300 text-sm my-2",children:a.warrantyPolicy.map(e=>s.jsxs("div",{className:"border border-gray-300 p-2",children:[s.jsx("h1",{className:"text-base",children:e.name}),s.jsx("p",{className:"text-gray-600",children:e.value})]}))}),s.jsx("p",{onClick:()=>d(r),className:"text-blue-400 ml-1 cursor-pointer",children:t[r]?s.jsx("span",{children:n("listBooking.hidden")}):""})]})]})]})]},a.id)}),s.jsx("div",{className:"flex justify-center",children:s.jsx($,{current:h,total:((m=i==null?void 0:i.data)==null?void 0:m.totalItems)||0,pageSize:5,onChange:j})})]})})};export{_ as L};
