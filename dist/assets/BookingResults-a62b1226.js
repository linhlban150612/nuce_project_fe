import{o as k,b as C,bH as y,r as j,j as e}from"./index-5d1582d4.js";import{S as B}from"./index-8ccb2d3a.js";import{R as T}from"./index-86fd86a6.js";import{B as f}from"./button-1dd3c86b.js";import"./reactNode-ed0d3403.js";import"./ExclamationCircleFilled-3566f72d.js";import"./asyncToGenerator-f41fc0b7.js";import"./Compact-de17ca2f.js";import"./render-43f47cb9.js";import"./compact-item-f6aa6deb.js";const O=()=>{const s=k(),d=C(),n=new URLSearchParams(s.search),o=n.get("vnp_Amount"),a=n.get("vnp_BankCode"),r=n.get("vnp_BankTranNo"),c=n.get("vnp_CardType"),p=n.get("vnp_OrderInfo"),i=n.get("vnp_PayDate"),m=n.get("vnp_ResponseCode"),u=n.get("vnp_TmnCode"),v=n.get("vnp_TransactionNo"),l=n.get("vnp_TransactionStatus"),g=n.get("vnp_TxnRef"),h=n.get("vnp_SecureHash"),[_,{data:t,isLoading:x,isError:R}]=y();return j.useEffect(()=>{(!s.state||!s.state.isFree)&&_({vnp_Amount:o,vnp_BankCode:a,vnp_BankTranNo:r,vnp_CardType:c,vnp_OrderInfo:p,vnp_PayDate:i,vnp_ResponseCode:m,vnp_TmnCode:u,vnp_TransactionNo:v,vnp_TransactionStatus:l,vnp_TxnRef:g,vnp_SecureHash:h})},[_,o,a,r,c,p,i,m,u,v,l,g,h,s]),e.jsx(B,{spinning:x,children:R?e.jsx(T,{status:"error",title:(t==null?void 0:t.message)||"Lỗi",subTitle:"Đặt lịch khám không thành công!!",extra:[e.jsx(f,{type:"default",onClick:()=>d(-4),children:"Đặt lại lịch"},"console")]}):e.jsx(T,{status:"success",title:(t==null?void 0:t.message)||"Thành công",subTitle:"Đặt lịch khám thành công!!",extra:[e.jsx(f,{type:"primary",className:"bg-blue-500",href:"/lich-hen",children:"Xem lịch đã đặt"},"console")]})})};export{O as default};