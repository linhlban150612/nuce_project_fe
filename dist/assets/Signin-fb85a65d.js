import{u as b,j as e,L as o}from"./index-5d1582d4.js";import{N as h}from"./Notification-b903467d.js";import{l as j}from"./logoDA-ea219ba8.js";import{F as r}from"./index-2daf2b68.js";import{I as p}from"./index-ef77481e.js";import{U as w}from"./UserOutlined-93acf3c1.js";import{L as k}from"./LockOutlined-f68f3a61.js";import{B as N}from"./button-1dd3c86b.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./ExclamationCircleFilled-3566f72d.js";import"./CloseOutlined-21301cb3.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./index-8ab4410e.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./SearchOutlined-54091923.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./collapse-97de76d4.js";import"./row-140c9d21.js";import"./responsiveObserver-74647030.js";import"./useLocale-98ce2b95.js";import"./compact-item-f6aa6deb.js";import"./index-c0762df4.js";import"./BaseInput-5f67969b.js";const Z=()=>{const[x,{isLoading:d}]=b(),g=async u=>{var i,a,n;try{const{email:l,password:f}=u,t=await x({email:l,password:f,rememberMe:!0}).unwrap(),m=(i=t==null?void 0:t.data)==null?void 0:i.token,c=(a=t==null?void 0:t.data)==null?void 0:a.refreshToken,s=(n=t==null?void 0:t.data)==null?void 0:n.role;if(m&&c)localStorage.setItem("token",m),localStorage.setItem("rfToken",c),localStorage.setItem("role",s),h("success","Thành công","Đăng nhập thành công"),s==="ADMIN"?window.location.href="/admin":s==="DOCTOR"?window.location.href="/doctor":s==="USER"&&(window.location.href="/");else throw new Error("Không có dữ liệu token hoặc refreshToken")}catch(l){h("error","Lỗi",l.data||"Có lỗi xảy ra")}};return e.jsx("section",{className:"bg-white",children:e.jsxs("div",{className:"lg:grid lg:min-h-screen lg:grid-cols-12",children:[e.jsx("aside",{className:"relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-4",children:e.jsx("img",{alt:"Pattern",src:"https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",className:"absolute inset-0 h-full w-full object-cover"})}),e.jsx("main",{className:"flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-8",children:e.jsxs("div",{className:"max-w-xl",children:[e.jsx(o,{className:"block text-blue-600",to:"/",children:e.jsx("img",{src:j,className:"w-20",alt:""})}),e.jsx("path",{d:"M73.11 125.24A52.13 52.13 0 0 1 21 74.49V21.88a73.09 73.09 0 1 0 107.67 98.74L112.71 107a52 52 0 0 1-39.6 18.24M73.11 0A72.82 72.82 0 0 0 44.3 5.91l-.3.15a3.76 3.76 0 0 0-2.13 3.37v22A52.14 52.14 0 0 1 113.36 40l16.19-13.33A73 73 0 0 0 73.11 0",className:"bookingcare-2020_svg__cls-1"}),e.jsx("h1",{className:"my-6 text-2xl font-bold text-blue-500 sm:text-3xl md:text-4xl",children:"Chào mừng bạn quay trở lại!!"}),e.jsxs(r,{name:"normal_login",className:"login-form",labelCol:{span:24},wrapperCol:{span:24},initialValues:{remember:!0},onFinish:g,children:[e.jsx(r.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Email không được bỏ trống!"}],children:e.jsx(p,{prefix:e.jsx(w,{className:"site-form-item-icon p-3"}),placeholder:"Email"})}),e.jsx(r.Item,{label:"Mật khẩu",name:"password",rules:[{required:!0,message:"Mật khẩu không được bỏ trống!"}],children:e.jsx(p.Password,{prefix:e.jsx(k,{className:"site-form-item-icon p-3"}),placeholder:"Mật khẩu"})}),e.jsx(r.Item,{children:e.jsx(o,{className:"login-form-forgot float-right text-blue-500 hover:text-blue-800 hover:underline",to:"/business/forgot",children:"Quên mật khẩu ??"})}),e.jsxs(r.Item,{className:"text-center",children:[e.jsx(N,{type:"primary",htmlType:"submit",className:"bg-blue-500 w-full",style:{height:"45px"},loading:d,children:"Đăng nhập"}),e.jsx("p",{className:"my-2",children:"Hoặc"}),e.jsxs("p",{children:["Chưa có tài khoản? ",e.jsx(o,{to:"/register",className:"text-blue-500 hover:text-blue-800 hover:underline",children:"Đăng ký ngay"})]})]})]})]})})]})})};export{Z as default};
