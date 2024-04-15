import{r as h,bI as X,bJ as Z,v as $,l as tt,m as et,bK as it,j as e}from"./index-5d1582d4.js";import{D as at,d as r}from"./index-81ffed24.js";import{N as ot}from"./Notification-b903467d.js";import{F as d}from"./index-2daf2b68.js";import{S as s}from"./index-a21a4ee5.js";import{B as j}from"./button-1dd3c86b.js";import{T as nt,a as rt}from"./index-89427187.js";import{R as st}from"./ReloadOutlined-5d09a93f.js";import{S as dt}from"./SearchOutlined-54091923.js";import"./PurePanel-9c90c19c.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./pickAttrs-c42834d1.js";import"./index-8ab4410e.js";import"./Overflow-dad1924c.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./index-c0762df4.js";import"./compact-item-f6aa6deb.js";import"./move-8c08fc05.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./useLocale-98ce2b95.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./ExclamationCircleFilled-3566f72d.js";import"./CloseOutlined-21301cb3.js";import"./collapse-97de76d4.js";import"./row-140c9d21.js";import"./responsiveObserver-74647030.js";import"./index-3f290c1a.js";import"./CheckOutlined-9e439339.js";import"./DownOutlined-e8684ab4.js";import"./index-1944453b.js";import"./index-949dd1fb.js";import"./index-4ad10529.js";import"./LeftOutlined-79fdd531.js";import"./Dropdown-fc6ae30f.js";import"./index-da9f04ea.js";import"./index-3aef6c56.js";import"./EllipsisOutlined-5f99f7fa.js";import"./index-3651fbdb.js";import"./useBreakpoint-945b7321.js";import"./useForceUpdate-3f4a0339.js";import"./Pagination-bc2271f4.js";import"./index-8ccb2d3a.js";import"./index-ef77481e.js";import"./BaseInput-5f67969b.js";import"./extendsObject-e8a436b4.js";import"./useClosable-dc268733.js";const{RangePicker:L}=at,re=()=>{var I,Y,D,k,M,N,T,S,w,C,F;const[i]=d.useForm(),[b,H]=h.useState(""),[V,P]=h.useState(""),[E,B]=h.useState(""),[l,{data:n,isLoading:O}]=X(),[A,{isLoading:G}]=Z(),{data:x}=$(),{data:g}=tt({name:"",status:"",page:0,resultLimit:500}),{data:y}=et({search:"",province:"",status:"",page:0,resultLimit:500}),{data:u,isLoading:Q}=it({type:b,name:"",clinic:V,speciality:E,page:0,resultLimit:100});h.useEffect(()=>{l({fromDate:"",toDate:"",fromTime:"",toTime:"",doctorId:"",type:"",status:"",clinicId:"",specialityId:"",page:0,resultLimit:10})},[i,l]);const R=t=>{const o=t!=null&&t.date?r(t.date[0]).format("YYYY-MM-DD"):"",a=t!=null&&t.date?r(t.date[1]).format("YYYY-MM-DD"):"",m=t!=null&&t.time?r(t.time[0]).format("YYYY-MM-DD HH:mm:ss"):"",p=t!=null&&t.time?r(t.time[1]).format("YYYY-MM-DD HH:mm:ss"):"";l({fromDate:o,toDate:a,fromTime:m,toTime:p,doctorId:t.doctorId,type:t.type,status:t.status,clinicId:t.clinicId,specialityId:t.specialityId,page:0,resultLimit:10})},U=()=>{i.resetFields(),l({fromDate:"",toDate:"",fromTime:"",toTime:"",doctorId:"",type:"",status:"",clinicId:"",specialityId:"",page:0,resultLimit:10})},K=(t,o)=>{const a=i.getFieldValue("date"),m=i.getFieldValue("time"),p=a?r(a[0]).format("YYYY-MM-DD"):"",f=a?r(a[1]).format("YYYY-MM-DD"):"",c=m?r(m[0]).format("YYYY-MM-DD HH:mm:ss"):"",W=m?r(m[1]).format("YYYY-MM-DD HH:mm:ss"):"";l({fromDate:p,toDate:f,fromTime:c,toTime:W,doctorId:i.getFieldValue("doctorId"),type:i.getFieldValue("type"),status:i.getFieldValue("status"),clinicId:i.getFieldValue("clinicId"),specialityId:i.getFieldValue("specialityId"),page:t-1,resultLimit:o||10})},_=[{title:"STT",key:"index",width:60,render:(t,o,a)=>a+1},{title:"Tên bác sĩ/Tên dịch vụ",dataIndex:"doctorName",key:"doctorName"},{title:"Phòng khám",dataIndex:"clinicName",key:"clinicName"},{title:"Chuyên khoa",dataIndex:"specialityName",key:"specialityName",width:160},{title:"Thời gian bắt đầu",dataIndex:"timeStart",key:"timeStart",width:200},{title:"Thời gian kết thúc",dataIndex:"timeEnd",key:"timeEnd",width:200},{title:"Trạng thái",dataIndex:"status",key:"status",render:t=>{let o="",a="";return t==="0"?(o="red",a="Đã huỷ"):t==="2"?(o="blue",a="Khám xong"):t==="1"&&(o="green",a="Đặt thành công"),e.jsx(rt,{color:o,children:a})},width:120},{title:"Lý do đặt lịch",dataIndex:"reasonBooking",key:"reasonBooking",render:t=>e.jsx("p",{title:t,className:"line-clamp-3",children:t}),width:300},{title:"Lý do huỷ lịch",dataIndex:"reasonCancel",key:"reasonCancel",width:300,render:t=>e.jsx("p",{title:t,className:"line-clamp-3",children:t})},{title:"Người cập nhật cuối",dataIndex:"lastUpdatedUser",key:"lastUpdatedUser",width:200},{title:"Thời gian cập nhật",dataIndex:"updatedAt",key:"updatedAt",width:200},{title:"Mã hoá đơn",dataIndex:"vnpSoHoaDon",key:"vnpSoHoaDon",width:200},{title:"Mã giao dịch",dataIndex:"vnpSoGiaoDich",key:"vnpSoGiaoDich",width:200},{title:"Người trả phí đặt",dataIndex:"whoPay",key:"whoPay",width:200,render:t=>(t==="0"?t="Người đặt trả phí":t==="1"&&(t="Bác sĩ trả phí"),e.jsx("p",{children:t}))}],v=()=>{const t=i.getFieldValue("date"),o=i.getFieldValue("time"),a=t?r(t[0]).format("YYYY-MM-DD"):"",m=t?r(t[1]).format("YYYY-MM-DD"):"",p=o?r(o[0]).format("YYYY-MM-DD HH:mm:ss"):"",f=o?r(o[1]).format("YYYY-MM-DD HH:mm:ss"):"";A({fromDate:a,toDate:m,fromTime:p,toTime:f,doctorId:i.getFieldValue("doctorId"),type:i.getFieldValue("type"),status:i.getFieldValue("status"),clinicId:i.getFieldValue("clinicId"),specialityId:i.getFieldValue("specialityId")}).unwrap().then(c=>{window.location.href=c.message}).catch(c=>{ot("error","Lỗi",c.data.message||c.mesage)})},z=t=>{H(t)},J=t=>{P(t)},q=t=>{B(t)};return e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex justify-between mb-6",children:e.jsx("h2",{className:"text-2xl font-semibold",children:"Quản lý"})}),e.jsx(d,{onFinish:R,form:i,children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 grid grid-cols-3 gap-x-10 gap-y-5 mx-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Ngày đặt lịch"}),e.jsx(d.Item,{name:"date",children:e.jsx(L,{className:"w-full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Thời gian khám"}),e.jsx(d.Item,{name:"time",children:e.jsx(L,{showTime:!0})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Trạng thái lịch khám:"}),e.jsx(d.Item,{name:"status",children:e.jsx(s,{placeholder:"Trạng thái lịch khám",className:"h-8",allowClear:!0,children:(I=x==null?void 0:x.data)==null?void 0:I.map(t=>e.jsx(s.Option,{value:t.value,children:t.name},t.value))})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Phòng khám:"}),e.jsx(d.Item,{name:"clinicId",children:e.jsx(s,{placeholder:"---Phòng khám---",allowClear:!0,onChange:J,children:(D=(Y=y==null?void 0:y.data)==null?void 0:Y.data)==null?void 0:D.map(t=>e.jsx(s.Option,{value:t.id,children:t.name},t.id))})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Chuyên khoa:"}),e.jsx(d.Item,{name:"specialityId",children:e.jsx(s,{placeholder:"---Chuyên khoa---",allowClear:!0,onChange:q,children:(M=(k=g==null?void 0:g.data)==null?void 0:k.data)==null?void 0:M.map(t=>e.jsx(s.Option,{value:t.id,children:t.name},t.id))})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Loại khám:"}),e.jsx(d.Item,{name:"type",children:e.jsxs(s,{placeholder:"---Loại khám---",allowClear:!0,onChange:z,children:[e.jsx(s.Option,{value:"1",children:"Bác sĩ"},"1"),e.jsx(s.Option,{value:"2",children:"Dịch vụ"},"2")]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Bác sĩ/Dịch vụ:"}),e.jsx(d.Item,{name:"doctorId",children:e.jsx(s,{placeholder:"---Select---",allowClear:!0,loading:Q,children:(T=(N=u==null?void 0:u.data)==null?void 0:N.data)==null?void 0:T.map(t=>e.jsx(s.Option,{value:t.id,children:t.doctorName},t.id))})})]})]}),e.jsxs("div",{className:"mb-8 float-right mr-8 flex items-center gap-3",children:[e.jsx(j,{icon:e.jsx(st,{}),onClick:U,children:"Đặt lại"}),e.jsx(j,{type:"primary",icon:e.jsx(dt,{}),className:"bg-blue-600",htmlType:"submit",children:"Tìm kiếm"})]})]})}),e.jsx(j,{loading:G,onClick:v,children:"Export"}),e.jsx(nt,{columns:_,dataSource:Array.isArray((S=n==null?void 0:n.data)==null?void 0:S.data)?(w=n==null?void 0:n.data)==null?void 0:w.data:[],loading:O,scroll:{y:400,x:3e3},pagination:{current:(C=n==null?void 0:n.data)!=null&&C.currentPage?n.data.currentPage+1:1,total:(F=n==null?void 0:n.data)==null?void 0:F.totalItems,pageSize:10,onChange:K}})]})};export{re as default};
