import{c as ie,r as d,bE as oe,w as se,v as ae,bF as re,bG as le,j as e}from"./index-5d1582d4.js";import{N as r}from"./Notification-b903467d.js";import{D as ce,d as T}from"./index-81ffed24.js";import{c as D,d as M}from"./index-493d93ef.js";import{F as a}from"./index-2daf2b68.js";import{S as B}from"./index-a21a4ee5.js";import{B as x}from"./button-1dd3c86b.js";import{T as R,a as me}from"./index-89427187.js";import{M as j}from"./index-2499abbf.js";import{I as O}from"./index-ef77481e.js";import{U as de}from"./index-1567c69b.js";import{S as he}from"./index-4ad10529.js";import{R as pe}from"./ReloadOutlined-5d09a93f.js";import{S as ue}from"./SearchOutlined-54091923.js";import{E}from"./ExclamationCircleFilled-3566f72d.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./CloseOutlined-21301cb3.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./PurePanel-9c90c19c.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./pickAttrs-c42834d1.js";import"./index-8ab4410e.js";import"./Overflow-dad1924c.js";import"./index-c0762df4.js";import"./compact-item-f6aa6deb.js";import"./move-8c08fc05.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./useLocale-98ce2b95.js";import"./iconBase-7dfc76c2.js";import"./collapse-97de76d4.js";import"./row-140c9d21.js";import"./responsiveObserver-74647030.js";import"./index-3f290c1a.js";import"./CheckOutlined-9e439339.js";import"./DownOutlined-e8684ab4.js";import"./index-1944453b.js";import"./index-949dd1fb.js";import"./index-3651fbdb.js";import"./useBreakpoint-945b7321.js";import"./useForceUpdate-3f4a0339.js";import"./Pagination-bc2271f4.js";import"./LeftOutlined-79fdd531.js";import"./index-8ccb2d3a.js";import"./index-da9f04ea.js";import"./index-3aef6c56.js";import"./EllipsisOutlined-5f99f7fa.js";import"./extendsObject-e8a436b4.js";import"./useClosable-dc268733.js";import"./fade-72ecde73.js";import"./BaseInput-5f67969b.js";import"./Dropdown-fc6ae30f.js";const{confirm:v}=j,{RangePicker:xe}=ce,jt=()=>{var L;const{id:l}=ie(),[c]=a.useForm(),[k]=a.useForm(),[b]=a.useForm(),[_,y]=d.useState(!1),[A,w]=d.useState(!1),[h,C]=d.useState(""),[p,S]=d.useState([]),[m,{data:g,isLoading:P}]=oe(),[U,{isLoading:Y}]=se(),{data:f}=ae(),[z,{isLoading:V}]=re(),[H]=le();d.useEffect(()=>{c.resetFields(),m({idService:l||null,status:"",fromDate:"",toDate:""})},[m,c,l]);const q=t=>{t!==void 0&&v({title:"Xác nhận huỷ",icon:e.jsx(E,{}),content:"Bạn có muốn huỷ lịch khám này không ??",okText:"Có",cancelText:"Không",okType:"danger",async onOk(){try{await U({...t,idBooking:h}).unwrap().then(()=>{r("success","Thành công","Huỷ lịch khám thành công!"),N(),m({idService:l||null,status:"",fromDate:"",toDate:""}),c.submit(),k.resetFields()}).catch(n=>{r("error","Lỗi",n.message||n.data.message)})}catch{r("error","Lỗi","Lỗi huỷ")}}})},K=t=>{const n=t!=null&&t.date?T(t.date[0]).format("YYYY-MM-DD"):"",o=t!=null&&t.date?T(t.date[1]).format("YYYY-MM-DD"):"";m({idService:l||null,status:t.status,fromDate:n,toDate:o})},X=()=>{c.resetFields(),m({idService:l||null,status:"",fromDate:"",toDate:""})},G=t=>{C(t),y(!0)},N=()=>{y(!1)},Q=t=>{C(t),w(!0)},F=()=>{w(!1)},Z=[{title:"STT",key:"index",width:100,render:(t,n,o)=>o+1},{title:"Ngày",dataIndex:"date",key:"date"},{title:"Số lịch khám",dataIndex:"schedulesCount",key:"schedulesCount",render:(t,n)=>n.bookingResponse&&Array.isArray(n.bookingResponse)?n.bookingResponse.length:0}],J=t=>{const n=[{title:"Thời gian bắt đầu",dataIndex:"timeStart",key:"timeStart",width:200},{title:"Thời gian kết thúc",dataIndex:"timeEnd",key:"timeEnd",width:200},{title:"Trạng thái",dataIndex:"status",key:"status",render:s=>{let i="",u="";return s===0?(i="red",u="Đã huỷ"):s===2?(i="blue",u="Khám xong"):s===1&&(i="green",u="Đặt thành công"),e.jsx(me,{color:i,children:u})},width:200},{title:"Họ tên bệnh nhân",key:"fullName",render:(s,i)=>e.jsx("p",{children:i.patientProfile.fullName}),width:200},{title:"SDT bệnh nhân",key:"phoneNumber",render:(s,i)=>e.jsx("p",{children:i.patientProfile.phoneNumber}),width:200},{title:"Email bệnh nhân",key:"email",render:(s,i)=>e.jsx("p",{children:i.patientProfile.email}),width:200},{title:"Năm sinh",key:"birthdate",render:(s,i)=>e.jsx("p",{children:i.patientProfile.birthdate}),width:200},{title:"Lý do đặt lịch",dataIndex:"reasonBooking",key:"reasonBooking",render:(s,i)=>e.jsx("p",{title:i.reasonBooking,className:"line-clamp-3",children:i.reasonBooking}),width:400},{title:"Lý do huỷ",dataIndex:"reasonCancel",key:"reasonCancel",render:(s,i)=>e.jsx("p",{title:i.reasonCancel,className:"line-clamp-3",children:i.reasonCancel}),width:300},{title:"Action",key:"action",fixed:"right",width:100,render:(s,i)=>e.jsxs(he,{size:"middle",className:"text-xl",children:[i.isCancel===1?e.jsx(D,{className:"cursor-pointer text-red-500 hover:text-red-400",title:"Huỷ lịch khám",onClick:()=>G(i.id)}):e.jsx(D,{className:"text-red-500 cursor-not-allowed opacity-50"}),i.isDone===1?e.jsx(M,{onClick:()=>Q(i.id),className:"cursor-pointer text-green-500 hover:text-green-400",title:"Đã khám xong"}):e.jsx(M,{className:"text-green-500 cursor-not-allowed opacity-50"})]})}],o=t.bookingResponse.map(s=>({...s,key:s.id}));return e.jsx(R,{columns:n,dataSource:o,pagination:!1,scroll:{x:2200}})},W=g==null?void 0:g.data.map((t,n)=>({...t,key:n.toString()})),[$,I]=d.useState(!0),ee=t=>{const n="2";return t.size/1024/1024<n?(I(!0),!0):(r("warning","Cảnh báo","File không được quá "+n.toString()+"MB"),I(!1),!1)},te=t=>{if($){let n=[...t.fileList];n=n.map(o=>(!o.url&&o.originFileObj&&(o.url=URL.createObjectURL(o.originFileObj)),o.status="done",o)),S(n)}},ne=t=>{t!==void 0&&v({title:"Xác nhận hoàn thành",icon:e.jsx(E,{}),content:"Bạn có muốn hoàn thành lịch khám này không ??",okText:"Có",cancelText:"Không",okType:"danger",async onOk(){try{const n=new FormData;p&&p.forEach(o=>{n.append("files",o.originFileObj)}),h&&n.append("id",h),await H(n).unwrap().then(()=>{z({...t,idBooking:h}).unwrap().then(()=>{r("success","Thành công","Hoàn thành lịch khám thành công!"),F(),m({idService:l||null,status:"",fromDate:"",toDate:""}),c.submit(),b.resetFields(),S([])}).catch(o=>{r("error","Lỗi",o.message||o.data.message)})}).catch(o=>{r("error","Lỗi",o.message||o.data.message)})}catch{r("error","Lỗi","Lỗi huỷ")}}})};return e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex justify-between mb-6",children:e.jsx("h2",{className:"text-2xl font-semibold",children:"Quản lý lịch hẹn đã đặt"})}),e.jsx(a,{onFinish:K,form:c,children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 grid grid-cols-3 gap-10 mx-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Khoảng thời gian:"}),e.jsx(a.Item,{name:"name",children:e.jsx(xe,{className:"w-full h-8"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-[17px] my-1.5 text-gray-700",children:"Trạng thái đặt lịch:"}),e.jsx(a.Item,{name:"status",children:e.jsx(B,{placeholder:"Trạng thái đặt lịch",className:"h-8",allowClear:!0,children:(L=f==null?void 0:f.data)==null?void 0:L.map(t=>e.jsx(B.Option,{value:t.value,children:t.name},t.value))})})]})]}),e.jsxs("div",{className:"mb-4 float-right mr-8 flex items-center gap-3",children:[e.jsx(x,{icon:e.jsx(pe,{}),onClick:X,children:"Đặt lại"}),e.jsx(x,{type:"primary",icon:e.jsx(ue,{}),className:"bg-blue-600",htmlType:"submit",children:"Tìm kiếm"})]})]})}),e.jsx(R,{columns:Z,dataSource:W,loading:P,scroll:{y:400},expandable:{expandedRowRender:J}}),e.jsx(j,{width:500,open:_,footer:null,onCancel:N,children:e.jsxs(a,{name:"normal_login",className:"login-form",labelCol:{span:24},wrapperCol:{span:24},initialValues:{remember:!0},onFinish:q,form:k,children:[e.jsx(a.Item,{label:"Lý do huỷ",name:"reasonCancel",rules:[{required:!0,message:"Vui lòng nhập lý do huỷ!!"}],children:e.jsx(O,{placeholder:"Nhập lý do huỷ"})}),e.jsx(a.Item,{className:"text-center",children:e.jsx(x,{type:"primary",htmlType:"submit",className:"bg-blue-500 w-full",style:{height:"45px"},loading:Y,children:"Huỷ đặt lịch"})})]})}),e.jsx(j,{width:800,open:A,footer:null,onCancel:F,title:"Biểu mẫu hoàn thành lịch khám",children:e.jsxs(a,{name:"normal_login",className:"login-form",labelCol:{span:24},wrapperCol:{span:24},initialValues:{remember:!0},onFinish:ne,form:b,children:[e.jsx(a.Item,{label:"Files đính kèm",name:"imageObjectId",rules:[{required:!0,message:"Trường này không được bỏ trống !"}],children:e.jsx(de,{listType:"picture-card",fileList:p,showUploadList:{showPreviewIcon:!0,showRemoveIcon:!0,showDownloadIcon:!1},accept:"image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf",beforeUpload:ee,onChange:te,maxCount:2,children:p.length<2&&"+ Upload"})}),e.jsx(a.Item,{label:"Lời nhắn",name:"msg",rules:[{required:!0,message:"Vui lòng nhập lời nhắn!!"}],children:e.jsx(O.TextArea,{placeholder:"Nhập lời nhắn"})}),e.jsx(a.Item,{className:"text-center",children:e.jsx(x,{type:"primary",htmlType:"submit",className:"bg-blue-500 w-full",style:{height:"45px"},loading:V,children:"Xác nhận khám xong"})})]})})]})};export{jt as default};
