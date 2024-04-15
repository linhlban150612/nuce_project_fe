import{c as M,b as L,r as x,bz as A,bA as B,j as e,L as u}from"./index-5d1582d4.js";import{k as g}from"./index-d5b70956.js";import{N as k}from"./Notification-b903467d.js";import{D as F,d as y}from"./index-81ffed24.js";import{k as R,h as f}from"./index-2ebe3d10.js";import{F as d}from"./index-2daf2b68.js";import{B as l}from"./button-1dd3c86b.js";import{T as j,a as Y}from"./index-89427187.js";import{S as b}from"./index-4ad10529.js";import{M as O}from"./index-2499abbf.js";import{R as P}from"./ReloadOutlined-5d09a93f.js";import{S as $}from"./SearchOutlined-54091923.js";import{E as X}from"./ExclamationCircleFilled-3566f72d.js";import"./iconBase-7dfc76c2.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./CloseOutlined-21301cb3.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./PurePanel-9c90c19c.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./pickAttrs-c42834d1.js";import"./index-8ab4410e.js";import"./Overflow-dad1924c.js";import"./index-c0762df4.js";import"./compact-item-f6aa6deb.js";import"./move-8c08fc05.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./index-a21a4ee5.js";import"./index-3f290c1a.js";import"./useLocale-98ce2b95.js";import"./CheckOutlined-9e439339.js";import"./DownOutlined-e8684ab4.js";import"./collapse-97de76d4.js";import"./row-140c9d21.js";import"./responsiveObserver-74647030.js";import"./index-1944453b.js";import"./index-949dd1fb.js";import"./index-3651fbdb.js";import"./useBreakpoint-945b7321.js";import"./useForceUpdate-3f4a0339.js";import"./Pagination-bc2271f4.js";import"./LeftOutlined-79fdd531.js";import"./index-8ccb2d3a.js";import"./index-da9f04ea.js";import"./index-3aef6c56.js";import"./EllipsisOutlined-5f99f7fa.js";import"./index-ef77481e.js";import"./BaseInput-5f67969b.js";import"./extendsObject-e8a436b4.js";import"./useClosable-dc268733.js";import"./Dropdown-fc6ae30f.js";import"./fade-72ecde73.js";const{confirm:z}=O,{RangePicker:K}=F,_e=()=>{const{idDoctor:r}=M(),T=L(),[s]=d.useForm(),[h,D]=x.useState([]),[n,{data:c,isLoading:N}]=A(),[E]=B();x.useEffect(()=>{s.resetFields(),n({idDoctor:r||"",fromDate:"",toDate:""})},[n,r,s]);const p=o=>{o!==void 0&&z({title:"Xác nhận xoá",icon:e.jsx(X,{}),content:"Bạn có muốn xoá lịch khám này không ??",okText:"Có",cancelText:"Không",okType:"danger",async onOk(){try{await E({idDoctor:r,idsToDelete:o}),k("success","Thành công","Xoá lịch khám thành công thành công!"),await n({idDoctor:r||"",fromDate:"",toDate:""}),s.submit()}catch{k("error","Lỗi","Lỗi xoá")}}})},C=o=>{const t=y(o.name[0]).format("YYYY-MM-DD"),m=y(o.name[1]).format("YYYY-MM-DD");n({idDoctor:r||"",fromDate:t,toDate:m})},w=()=>{s.resetFields(),n({idDoctor:r||"",fromDate:"",toDate:""})},S=[{title:"STT",key:"index",width:100,render:(o,t,m)=>m+1},{title:"Ngày",dataIndex:"date",key:"date"},{title:"Số lịch khám",dataIndex:"schedulesCount",key:"schedulesCount",render:(o,t)=>t.schedules&&Array.isArray(t.schedules)?t.schedules.length:0},{title:"Action",key:"action",render:(o,t)=>e.jsx(b,{size:"middle",children:e.jsx(R,{title:"Tạo lịch khám",className:`text-2xl ${t.isCreate===0?"text-gray-400 cursor-not-allowed":"text-blue-500 hover:text-blue-400 cursor-pointer"}`,onClick:()=>{t.isCreate===1&&T(`/doctor/them-lich-kham/${r}`,{state:t.date})}})})}],I=o=>{const t=[{title:"Thời gian bắt đầu",dataIndex:"startTime",key:"startTime"},{title:"Thời gian kết thúc",dataIndex:"endTime",key:"endTime"},{title:"Trạng thái",dataIndex:"statusValue",key:"statusValue",render:i=>{let a="";return i==="EXPIRED"?a="red":i==="FULL_SLOT"?a="orange":i==="ACTIVE"&&(a="green"),e.jsx(Y,{color:a,children:i})}},{title:"Lượng người tối đa",dataIndex:"maxNumber",key:"maxNumber"},{title:"Thời gian hết hạn đặt",dataIndex:"bookingExpiredTime",key:"bookingExpiredTime"},{title:"Quyền sửa xoá",dataIndex:"isEditable",key:"isEditable",render:i=>i===1?"Có":"Không"},{title:"Action",key:"action",render:(i,a)=>e.jsxs(b,{size:"middle",className:"text-xl",children:[a.isEditable===1?e.jsx(u,{to:`/doctor/sua-lich-kham/${a.id}/${r}`,children:e.jsx(g,{className:"text-yellow-400 hover:text-yellow-300"})}):e.jsx(g,{className:"text-yellow-400 cursor-not-allowed opacity-50"}),a.isEditable===1?e.jsx(f,{className:"cursor-pointer text-red-500 hover:text-red-400",onClick:()=>p([a.id])}):e.jsx(f,{className:"text-red-500 cursor-not-allowed opacity-50"})]})}],m=o.schedules.map(i=>({...i,key:i.id}));return e.jsx(j,{columns:t,dataSource:m,pagination:!1,rowSelection:{type:"checkbox",onChange:i=>{D(i)},getCheckboxProps:i=>({disabled:i.isEditable===0,name:i.isEditable})}})},v=c==null?void 0:c.data.map((o,t)=>({...o,key:t.toString()}));return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Quản lý lịch khám"}),e.jsx(l,{type:"primary",className:"bg-blue-600",children:e.jsx(u,{to:`/doctor/them-lich-kham/${r}`,children:"Tạo lịch khám"})})]}),e.jsx(d,{onFinish:C,form:s,children:e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 grid grid-cols-3 gap-10 mx-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Khoảng thời gian:"}),e.jsx(d.Item,{name:"name",children:e.jsx(K,{className:"w-full h-10"})})]})}),e.jsxs("div",{className:"mb-4 float-right mr-8 flex items-center gap-3",children:[e.jsx(l,{icon:e.jsx(P,{}),onClick:w,children:"Đặt lại"}),e.jsx(l,{type:"primary",icon:e.jsx($,{}),className:"bg-blue-600",htmlType:"submit",children:"Tìm kiếm"})]})]})}),e.jsx(l,{className:"my-6",type:"primary",danger:!0,onClick:()=>p(h),disabled:h.length===0,children:"Xoá"}),e.jsx(j,{columns:S,dataSource:v,loading:N,scroll:{y:400},expandable:{expandedRowRender:I}})]})};export{_e as default};