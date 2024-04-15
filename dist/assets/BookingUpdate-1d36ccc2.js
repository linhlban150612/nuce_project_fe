import{b as B,c as L,bD as S,a5 as P,bC as q,r as F,j as e}from"./index-5d1582d4.js";import{N as y}from"./Notification-b903467d.js";import{d as m,D as x}from"./index-81ffed24.js";import{F as s}from"./index-2daf2b68.js";import{S as R}from"./index-8ccb2d3a.js";import{R as b,C as n}from"./row-140c9d21.js";import{I as Y}from"./index-87f528a8.js";import{S as N}from"./index-a21a4ee5.js";import{B as M}from"./button-1dd3c86b.js";import{E as Q}from"./EnterOutlined-5a77cb95.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./ExclamationCircleFilled-3566f72d.js";import"./CloseOutlined-21301cb3.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./PurePanel-9c90c19c.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./pickAttrs-c42834d1.js";import"./index-8ab4410e.js";import"./Overflow-dad1924c.js";import"./SearchOutlined-54091923.js";import"./index-c0762df4.js";import"./compact-item-f6aa6deb.js";import"./move-8c08fc05.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./useLocale-98ce2b95.js";import"./collapse-97de76d4.js";import"./responsiveObserver-74647030.js";import"./DownOutlined-e8684ab4.js";import"./UpOutlined-9e60ac00.js";import"./BaseInput-5f67969b.js";import"./index-3f290c1a.js";import"./CheckOutlined-9e439339.js";const{RangePicker:G}=x,ke=()=>{var T;const f=B(),[p]=s.useForm(),{id:j,idDoctor:k}=L(),[w,{isLoading:H}]=S(),{data:t,isLoading:C}=P(j||""),{data:h}=q();F.useEffect(()=>{var r,i,a,o,c,d;if(t){const u=m((r=t==null?void 0:t.data)==null?void 0:r.startTime,"HH:mm"),g=m((i=t==null?void 0:t.data)==null?void 0:i.endTime,"HH:mm"),l=m((a=t==null?void 0:t.data)==null?void 0:a.bookingExpiredTime,"HH:mm");p.setFieldsValue({maxNumber:t==null?void 0:t.data.maxNumber,whoPay:(o=t==null?void 0:t.data)==null?void 0:o.whoPay,date:(c=t==null?void 0:t.data)!=null&&c.date?m((d=t==null?void 0:t.data)==null?void 0:d.date):void 0,time:[u,g],expiredTime:l})}},[t,p]);const E=(r,i,a)=>{i&&m(i).isBefore(m(),"day")?a("Ngày không được nhỏ hơn ngày hiện tại!"):a()},I=async r=>{const i=m(r.date).format("YYYY-MM-DD"),a=m(r.expiredTime).format("HH:mm:ss"),o=m(r.time[0]).format("HH:mm:ss"),c=m(r.time[1]).format("HH:mm:ss"),d=i.concat(" ",a),u=i.concat(" ",o),g=i.concat(" ",c);delete r.time,delete r.date,delete r.expiredTime,await w({...r,id:j,bookingExpiredTime:d,startTime:u,endTime:g,status:1,idDoctor:k}).unwrap().then(()=>{y("success","Thành công","Cập nhật lịch khám thành công"),f(-1)}).catch(l=>{y("error","Lỗi",l.data.message||l.data)})};return e.jsxs(R,{spinning:C,children:[e.jsxs("button",{onClick:()=>f(-1),children:["Quay lại ",e.jsx(Q,{})]}),e.jsx("h2",{className:"my-6 mx-16 text-2xl font-semibold",children:"Cập nhật lịch khám"}),e.jsxs(s,{className:"mx-40",form:p,name:"basic",labelCol:{span:24},wrapperCol:{span:24},onFinish:I,labelWrap:!0,autoComplete:"off",children:[e.jsxs(b,{gutter:30,children:[e.jsx(n,{span:12,children:e.jsx(s.Item,{label:"Lượng khách tối đa",name:"maxNumber",rules:[{required:!0,message:"Trường này không được bỏ trống !"},{type:"number",min:1,message:"Lượng khách tối thiểu là 1!"},{type:"number",max:15,message:"Lượng khách tối đa là 15!"}],children:e.jsx(Y,{placeholder:"Lượng khách tối đa",className:"w-full"})})}),e.jsx(n,{span:12,children:e.jsx(s.Item,{name:"whoPay",label:"Người thanh toán",rules:[{required:!0,message:"Trường này không được bỏ trống !"}],children:e.jsx(N,{placeholder:"---Select---",className:"w-full",allowClear:!0,children:(T=h==null?void 0:h.data)==null?void 0:T.map(r=>e.jsx(N.Option,{value:r.code,children:r.value},r.code))})})}),e.jsx(n,{span:12,children:e.jsx(s.Item,{name:"date",label:"Ngày khám",rules:[{required:!0,message:"Trường này không được bỏ trống !"},{validator:E}],children:e.jsx(x,{className:"w-full"})})})]}),e.jsxs(b,{gutter:30,children:[e.jsx(n,{span:12,children:e.jsx(s.Item,{name:"time",label:"Thời gian khám",rules:[{required:!0,message:"Trường này không được bỏ trống !"}],children:e.jsx(G,{picker:"time",className:"w-full"})})}),e.jsx(n,{span:12,children:e.jsx(s.Item,{name:"expiredTime",label:"Thời gian lịch đặt hết hạn",rules:[{required:!0,message:"Trường này không được bỏ trống !"}],children:e.jsx(x,{picker:"time",className:"w-full"})})})]}),e.jsx(s.Item,{labelAlign:"left",children:e.jsx(M,{type:"primary",htmlType:"submit",className:"bg-blue-500",loading:H,children:"Cập nhật"})})]})]})};export{ke as default};