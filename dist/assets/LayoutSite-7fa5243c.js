import{r as a,A as w,_ as k,b as y,e as C,f as S,j as e,L as i,S as A,O as F}from"./index-5d1582d4.js";import{A as M,a as z,b as E,c as H}from"./index-d5b70956.js";import{c as O}from"./convertToSlug-3fcf7559.js";import{I as V}from"./index-b7a9a960.js";import{N as D}from"./Notification-b903467d.js";import{l as j}from"./logoDA-ea219ba8.js";import{u as L}from"./useTranslation-57c75f11.js";import{L as I,R as f}from"./RollbackOutlined-a6219f1d.js";import{D as R}from"./index-4ad10529.js";import{A as T}from"./index-e9ae2b2e.js";import{F as B}from"./index-493d93ef.js";import"./iconBase-7dfc76c2.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./ExclamationCircleFilled-3566f72d.js";import"./CloseOutlined-21301cb3.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./LeftOutlined-79fdd531.js";import"./Dropdown-fc6ae30f.js";import"./index-8ab4410e.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./PurePanel-9c90c19c.js";import"./index-da9f04ea.js";import"./index-3aef6c56.js";import"./Overflow-dad1924c.js";import"./EllipsisOutlined-5f99f7fa.js";import"./collapse-97de76d4.js";import"./move-8c08fc05.js";import"./button-1dd3c86b.js";import"./compact-item-f6aa6deb.js";import"./responsiveObserver-74647030.js";import"./useBreakpoint-945b7321.js";import"./useForceUpdate-3f4a0339.js";var G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"}}]},name:"history",theme:"outlined"};const $=G;var Q=function(c,n){return a.createElement(w,k({},c,{ref:n,icon:$}))};const K=a.forwardRef(Q),P=()=>{var p;const[o,c]=a.useState(!1),[,n]=a.useState(""),{t,i18n:m}=L(),x=y(),[g]=C(),{data:h,error:l}=S();a.useEffect(()=>{l&&"status"in l&&l.status===401&&g().unwrap().then(s=>{localStorage.setItem("token",s.data.token),localStorage.setItem("rfToken",s.data.refreshToken),window.location.reload()}).catch(s=>{console.error("Error refreshing token:",s)})},[l]);const v=s=>{m.changeLanguage(s)},u=()=>{c(!o)},d=s=>{n(s),c(!1),v(s)},r=s=>{x(`danh-sach/${O(t(s))}`,{state:{slug:s}})},N=()=>{localStorage.removeItem("token"),localStorage.removeItem("rfToken"),localStorage.removeItem("role"),D("success","Đăng xuất",""),x("/login")},b=[{label:e.jsxs("a",{href:"/ho-so-kham-benh",className:"mx-2 flex items-center gap-2",children:[e.jsx(V,{}),t("header.medExamRec")]}),key:"1"},{label:e.jsxs("a",{href:"/lich-hen",className:"mx-2 flex items-center gap-2",children:[e.jsx(K,{}),t("header.history")]}),key:"3"},{label:e.jsxs("button",{className:"mx-2",onClick:N,children:[e.jsx(I,{className:"mr-2"}),t("header.logout")]}),key:"2"}];return e.jsx("header",{className:"bg-[#EDFFFA]",children:e.jsx("div",{className:"mx-auto max-w-screen-xl px-8 py-2",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-12",children:e.jsx(i,{className:"block text-blue-600",to:"/",children:e.jsx("img",{src:j,className:" w-14",alt:""})})}),e.jsxs("div",{className:"flex items-center justify-center gap-6",children:[e.jsxs("a",{href:"",className:"text-start leading-5",onClick:()=>r("specialty"),children:[e.jsx("p",{className:"text-[13px] font-bold",children:t("header.specialty")}),e.jsx("p",{className:"text-[10px]",children:t("header.searchDoctor")})]}),e.jsxs("a",{href:"",className:"text-start leading-5",onClick:()=>r("clinics"),children:[e.jsx("p",{className:"text-[13px] font-bold",children:t("header.medFacilities")}),e.jsx("p",{className:"text-[10px]",children:t("header.hospital")})]}),e.jsxs("a",{href:"",className:"text-start leading-5",onClick:()=>r("doctor"),children:[e.jsx("p",{className:"text-[13px] font-bold",children:t("header.doctor")}),e.jsx("p",{className:"text-[10px]",children:t("header.choosingDoctor")})]}),e.jsxs("a",{href:"",className:"text-start leading-5",onClick:()=>r("service"),children:[e.jsx("p",{className:"text-[13px] font-bold",children:t("header.package")}),e.jsx("p",{className:"text-[10px]",children:t("header.generalEx")})]})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("a",{href:"https://www.facebook.com/profile.php?id=100008553451184",children:e.jsx(M,{className:"text-[#45C3D2] text-4xl"})}),localStorage.getItem("role")==="USER"?e.jsx(R,{menu:{items:b},trigger:["click"],className:"cursor-pointer",children:e.jsx("a",{onClick:s=>s.preventDefault(),children:e.jsx(T,{size:34,src:`${(p=h==null?void 0:h.data)==null?void 0:p.avatar}`})})}):localStorage.getItem("role")==="ADMIN"?e.jsxs(i,{className:"text-[#45C3D2] hover:text-blue-500 hover:underline font-medium",to:"/admin",children:["Quay lại admin ",e.jsx(f,{})]}):localStorage.getItem("role")==="DOCTOR"?e.jsxs(i,{className:"text-[#45C3D2] hover:text-blue-500 hover:underline font-medium",to:"/doctor",children:["Quay lại doctor ",e.jsx(f,{})]}):e.jsx(i,{to:"/login",className:"text-[#45C3D2] hover:text-blue-500 hover:underline font-medium",children:t("header.signin")}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{className:"flex gap-1 items-center p-2 ",onClick:u,children:[e.jsx("img",{src:m.language==="en"?"https://kenh14cdn.com/2017/5-1503128133747.png":"https://th.bing.com/th?id=OSK.e1790c55fb0493ee09dba2fc418bff07&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM",alt:"",className:"w-6 h-4 object-cover"}),e.jsx(z,{className:"text-[#45C3D2]"})]}),o&&e.jsxs("div",{className:"absolute top-full left-0 mt-2 bg-white rounded shadow border border-gray-200 z-50",children:[e.jsx("button",{className:"flex gap-1 items-center p-2 hover:bg-gray-100",onClick:()=>d("vi"),children:e.jsx("img",{src:"https://th.bing.com/th?id=OSK.e1790c55fb0493ee09dba2fc418bff07&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM",alt:"",className:"w-6 h-4 object-cover"})}),e.jsx("button",{className:"flex gap-1 items-center p-2 hover:bg-gray-100",onClick:()=>d("en"),children:e.jsx("img",{src:"https://kenh14cdn.com/2017/5-1503128133747.png",alt:"",className:"w-6 h-4 object-cover"})})]})]})]})})]})})})},U=()=>e.jsxs("footer",{className:"mt-8",children:[e.jsx("div",{className:"bg-[#EFEFEF] py-6",children:e.jsx("div",{className:"max-w-screen-xl mx-[18%] flex justify-between items-center",children:e.jsxs("div",{className:"text-start grid gap-2 grid-cols-1",children:[e.jsxs("p",{className:"text-[#75bbde] flex gap-3 items-center ",children:[e.jsx("img",{src:j,className:" w-14",alt:""}),e.jsx("span",{className:"text-xl font-bold",children:"Healthy Care"})]}),e.jsx("p",{className:"font-medium",children:"Đại học Xây Dựng Hà Nội"}),e.jsxs("p",{className:"flex gap-1.5 items-center",children:[e.jsx(B,{className:"text-lg"}),e.jsx("span",{children:"Số 55 đường Giải Phóng, Hai Bà Trưng, Hà Nội"})]}),e.jsxs("p",{className:"flex gap-1.5 items-center",children:[e.jsx(E,{className:"text-lg"}),e.jsx("span",{children:"linh116365@huce.edu.vn"})]}),e.jsxs("p",{className:"flex gap-1.5 items-center",children:[e.jsx(H,{className:"text-lg"}),e.jsx("span",{children:"Lê Bảo Linh"})]})]})})}),e.jsx("div",{className:"bg-[#64B9E5] py-6",children:e.jsxs("div",{className:"flex justify-between mx-[18%] items-start",children:[e.jsx("p",{className:"text-white text-sm",children:"© 2024 Healthy Care"}),e.jsxs("div",{className:"flex gap-1.5 items-center text-4xl",children:[e.jsx("button",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 250 250",preserveAspectRatio:"none",children:e.jsxs("g",{"fill-rule":"evenodd","clip-rule":"evenodd",children:[e.jsx("path",{fill:"#010101",d:"M25 0h200c13.808 0 25 11.192 25 25v200c0 13.808-11.192 25-25 25H25c-13.808 0-25-11.192-25-25V25C0 11.192 11.192 0 25 0"}),e.jsx("path",{fill:"#ee1d51",d:"M156.98 230c7.607 0 13.774-6.117 13.774-13.662s-6.167-13.663-13.774-13.663h-2.075c7.607 0 13.774 6.118 13.774 13.663S162.512 230 154.905 230z"}),e.jsx("path",{fill:"#66c8cf",d:"M154.717 202.675h-2.075c-7.607 0-13.775 6.118-13.775 13.663S145.035 230 152.642 230h2.075c-7.608 0-13.775-6.117-13.775-13.662s6.167-13.663 13.775-13.663"}),e.jsx("ellipse",{cx:"154.811",cy:"216.338",fill:"#010101",rx:"6.699",ry:"6.643"}),e.jsx("path",{fill:"#fff",d:"M50 196.5v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm66.415 0v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm-39.81 3.93c0-2.17 1.771-3.93 3.959-3.93 2.19 0 3.963 1.76 3.963 3.93s-1.772 3.93-3.963 3.93c-2.188-.001-3.959-1.76-3.959-3.93m0 6.738h7.922v22.645h-7.922zM87.924 196.5v33.313h7.925v-8.608l2.453-2.248L106.037 230h8.49l-11.133-16.095 10-9.733h-9.622l-7.923 7.86V196.5zm85.47 0v33.313h7.926v-8.608l2.452-2.248L191.509 230H200l-11.133-16.095 10-9.733h-9.622l-7.925 7.86V196.5z"}),e.jsx("path",{fill:"#ee1d52",d:"M161.167 81.186c10.944 7.819 24.352 12.42 38.832 12.42V65.755a39.26 39.26 0 0 1-8.155-.853v21.923c-14.479 0-27.885-4.601-38.832-12.42v56.835c0 28.432-23.06 51.479-51.505 51.479-10.613 0-20.478-3.207-28.673-8.707C82.187 183.57 95.23 189.5 109.66 189.5c28.447 0 51.508-23.047 51.508-51.48V81.186zm10.06-28.098c-5.593-6.107-9.265-14-10.06-22.726V26.78h-7.728c1.945 11.09 8.58 20.565 17.788 26.308m-80.402 99.107a23.445 23.445 0 0 1-4.806-14.256c0-13.004 10.548-23.547 23.561-23.547a23.6 23.6 0 0 1 7.147 1.103V87.022a51.97 51.97 0 0 0-8.152-.469v22.162a23.619 23.619 0 0 0-7.15-1.103c-13.013 0-23.56 10.543-23.56 23.548 0 9.195 5.272 17.157 12.96 21.035"}),e.jsx("path",{fill:"#fff",d:"M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z"}),e.jsx("path",{fill:"#69c9d0",d:"M191.844 64.902v-5.928a38.84 38.84 0 0 1-20.617-5.887 38.948 38.948 0 0 0 20.617 11.815M153.439 26.78a39.524 39.524 0 0 1-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 0 0-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466"}),e.jsx("path",{fill:"#fff",d:"M154.904 230c7.607 0 13.775-6.117 13.775-13.662s-6.168-13.663-13.775-13.663h-.188c-7.607 0-13.774 6.118-13.774 13.663S147.109 230 154.716 230zm-6.792-13.662c0-3.67 3-6.643 6.7-6.643 3.697 0 6.697 2.973 6.697 6.643s-3 6.645-6.697 6.645c-3.7-.001-6.7-2.975-6.7-6.645"})]})})}),e.jsx("button",{children:e.jsxs("svg",{width:"32",height:"32",preserveAspectRatio:"none",viewBox:"0 0 128 128",children:[e.jsx("path",{fill:"#3C579E",d:"M128 112c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V16C0 7.2 7.2 0 16 0h96c8.8 0 16 7.2 16 16z"}),e.jsx("path",{fill:"#FFF",d:"M68.877 128V78.188h-17.78V60.425h17.784V44.029c0-16.537 9.764-26.279 24.514-26.279 7.068 0 12.834.756 14.605.991v18.573l-11.874-.005c-8.022 0-9.523 3.979-9.523 9.572v13.544h20.556l-2.904 17.763H86.603V128z"})]})}),e.jsx("button",{children:e.jsxs("svg",{width:"32",height:"32",preserveAspectRatio:"none",viewBox:"0 0 128 128",children:[e.jsx("path",{fill:"#CC191E",d:"M128 112c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V16C0 7.2 7.2 0 16 0h96c8.8 0 16 7.2 16 16z"}),e.jsx("path",{fill:"#FFF",d:"M107.122 46.404s-.86-6.064-3.499-8.733c-3.348-3.506-7.098-3.523-8.816-3.728-12.312-.891-30.787-.891-30.787-.891h-.04s-18.474 0-30.787.891c-1.721.204-5.469.221-8.816 3.728-2.639 2.669-3.498 8.733-3.498 8.733S20 53.525 20 60.647v6.677c0 7.119.879 14.242.879 14.242s.859 6.062 3.498 8.732c3.348 3.508 7.745 3.396 9.702 3.764 7.041.676 29.922.885 29.922.885s18.49-.028 30.806-.918c1.721-.206 5.471-.223 8.817-3.729 2.64-2.672 3.499-8.733 3.499-8.733s.877-7.122.877-14.243v-6.677c0-7.122-.878-14.243-.878-14.243m-53.32 30.165-.003-27.038 26 13.565z"})]})})]})]})}),e.jsx("div",{className:"bg-[#EFEFEF] max-w-full flex justify-center items-center",children:e.jsx("div",{className:"text-black text-lg w-fit",children:"Sản phẩm chỉ phục vụ cho ĐATN, không mang mục đích thương mại"})})]}),Ee=()=>e.jsxs("div",{children:[e.jsx(P,{}),e.jsx(a.Suspense,{fallback:e.jsx(A,{}),children:e.jsx(F,{})}),e.jsx(U,{})]});export{Ee as default};