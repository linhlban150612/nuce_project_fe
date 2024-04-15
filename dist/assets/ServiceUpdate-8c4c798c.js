import{c as N,b as M,r as l,bv as O,bw as k,D,j as e}from"./index-5d1582d4.js";import{n as H}from"./index-d5b70956.js";import{N as m}from"./Notification-b903467d.js";import{d as I,C}from"./ckeditor-05c5dc69.js";import{F as a}from"./index-2daf2b68.js";import{S as R}from"./index-8ccb2d3a.js";import{R as q,C as c}from"./row-140c9d21.js";import{U as B}from"./index-1567c69b.js";import{I as V}from"./index-ef77481e.js";import{B as _}from"./button-1dd3c86b.js";import{E as z}from"./EnterOutlined-5a77cb95.js";import{L as U}from"./compact-item-f6aa6deb.js";import{P as A}from"./PlusOutlined-c3648a15.js";import"./iconBase-7dfc76c2.js";import"./render-43f47cb9.js";import"./asyncToGenerator-f41fc0b7.js";import"./ExclamationCircleFilled-3566f72d.js";import"./CloseOutlined-21301cb3.js";import"./useZIndex-412122f7.js";import"./useCSSVarCls-2b45069f.js";import"./index-8ab4410e.js";import"./useMergedState-a94f801d.js";import"./Compact-de17ca2f.js";import"./ResizeObserver.es-f4289e8a.js";import"./SearchOutlined-54091923.js";import"./index-98be3a7d.js";import"./reactNode-ed0d3403.js";import"./collapse-97de76d4.js";import"./useLocale-98ce2b95.js";import"./responsiveObserver-74647030.js";import"./pickAttrs-c42834d1.js";import"./fade-72ecde73.js";import"./useForceUpdate-3f4a0339.js";import"./CheckOutlined-9e439339.js";import"./index-c0762df4.js";import"./BaseInput-5f67969b.js";const Te=()=>{var f,b;const{id:p}=N(),d=M(),[o]=a.useForm(),[h,g]=l.useState(null),[u,y]=l.useState(null),[x,j]=l.useState(!1),{data:t,isLoading:S}=O(p||""),[T]=k(),[F,{isLoading:L}]=D();l.useEffect(()=>{var s,i,n,r,v;o.setFieldsValue({name:(s=t==null?void 0:t.data)==null?void 0:s.doctorName,note:(i=t==null?void 0:t.data)==null?void 0:i.note,descriptionHtml:(n=t==null?void 0:t.data)==null?void 0:n.descriptionHtml}),(r=t==null?void 0:t.data)!=null&&r.imageUrl&&g((v=t==null?void 0:t.data)==null?void 0:v.imageUrl)},[t,o]);const E=async s=>{y(s),j(!0),setTimeout(()=>{const i=URL.createObjectURL(s);g(i),j(!1)},2e3)},w=async s=>{delete s.imageObjectId,s.serviceId=p,await T(s).unwrap().then(i=>{const n=i==null?void 0:i.data,r=new FormData;if(u)r.append("image",u);else{m("success","Thành công","Cập nhật dịch vụ thành công"),d(-1);return}n&&r.append("id",n),F(r).unwrap().then(()=>{m("success","Thành công","Cập nhật dịch vụ thành công"),d(-1)})}).catch(i=>{m("error","Lỗi",i.data.message||i.data)})};return e.jsxs("div",{className:"",children:[e.jsxs("button",{onClick:()=>d(-1),children:["Quay lại ",e.jsx(z,{})]}),e.jsx("h2",{className:"my-6 mx-16 text-2xl font-semibold",children:"Cập nhật dịch vụ"}),e.jsx(R,{spinning:S,children:e.jsxs(a,{className:"mx-40",form:o,name:"basic",labelCol:{span:24},wrapperCol:{span:24},onFinish:w,labelWrap:!0,autoComplete:"off",children:[e.jsxs(q,{gutter:26,children:[e.jsx(c,{span:12,children:e.jsx(a.Item,{label:"Ảnh",name:"imageObjectId",children:e.jsx(B,{beforeUpload:s=>{const i="2";s.size/1024/1024<i?E(s):m("warning","Cảnh báo","Ảnh không được quá "+i.toString()+"MB")},showUploadList:!1,listType:"picture-card",accept:"image/*",children:h?x?e.jsxs("div",{children:[e.jsx(U,{}),e.jsx("div",{style:{marginTop:8},children:"Đang tải ảnh..."})]}):e.jsx("img",{src:h,alt:"Ảnh đã upload",style:{width:"100%"}}):e.jsx("div",{children:x?e.jsxs("div",{children:[e.jsx(U,{}),e.jsx("div",{style:{marginTop:8},children:"Đang tải ảnh..."})]}):e.jsxs("div",{children:[e.jsx(A,{}),e.jsx("div",{style:{marginTop:8},children:"Upload"})]})})})})}),e.jsx(c,{span:12,children:e.jsx(a.Item,{label:"Tên dịch vụ",name:"name",rules:[{required:!0,message:"Trường này không được bỏ trống !"},{min:6,message:"Tên dịch vụ phải lớn hơn 6 kí tự!"}],children:e.jsx(V,{placeholder:"Tên dịch vụ"})})}),e.jsx(c,{span:24,children:e.jsx(a.Item,{label:"Ghi chú giá",name:"note",rules:[{required:!0,message:"Trường này không được bỏ trống !"}],children:e.jsx(I.CKEditor,{data:(f=t==null?void 0:t.data)==null?void 0:f.note,editor:C,onChange:(s,i)=>{const n=i.getData();o.setFieldsValue({note:n})}})})}),e.jsx(c,{span:24,children:e.jsx(a.Item,{name:"descriptionHtml",label:"Mô tả",rules:[{required:!0,message:"Vui lòng không bỏ trống"}],children:e.jsx(I.CKEditor,{data:(b=t==null?void 0:t.data)==null?void 0:b.descriptionHtml,editor:C,onChange:(s,i)=>{const n=i.getData();o.setFieldsValue({descriptionHtml:n})}})})})]}),e.jsx(a.Item,{labelAlign:"left",children:e.jsx(_,{type:"primary",htmlType:"submit",className:"bg-blue-500",children:L?e.jsx(H,{className:"animate-spin"}):"Cập nhật"})})]})})]})};export{Te as default};
