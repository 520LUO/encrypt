import{d as r,$ as c,e as p,h as l,i as _,j as m,c as a,k as s,b as f,l as o}from"./index-9229b107.js";const u={class:"scroll-y"},v=o("h3",{class:"mb-20px"},"文件转存功能（即将上线）",-1),h=o("div",{class:"rowSS"},"文件转存，可以把任意的网盘文件转到加密文件夹中，建议1G内的文件使用",-1),b=o("div",{class:"rowSS"},"大文件推荐使用本地加密后，再从云盘客户端上进行上传，比较可靠",-1),w=o("div",{class:"el-upload__tip"},"即将上线",-1),S=r({}),B=Object.assign(S,{__name:"index",setup(k){return c(p()),(e,t)=>{const n=l("el-button"),i=l("el-upload");return _(),m("div",u,[v,h,b,a(i,{"file-list":e.fileList,"onUpdate:fileList":t[0]||(t[0]=d=>e.fileList=d),class:"upload-demo",action:"/enc-api/encryptFile",multiple:"","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,limit:3,"on-exceed":e.handleExceed},{tip:s(()=>[w]),default:s(()=>[a(n,{type:"primary"},{default:s(()=>[f("Click to upload")]),_:1})]),_:1},8,["file-list","on-preview","on-remove","before-remove","on-exceed"])])}}});export{B as default};
