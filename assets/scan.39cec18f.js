import{a as n,u as i,r,o as c,i as d,j as h,k as l}from"./vendor.77b0d9d2.js";const u={style:{width:"100%",height:"100vh","text-align":"center"}},p=n({setup(f){const s=i(),o=r();let a;return c(()=>{navigator.mediaDevices.getUserMedia({video:{width:750,height:750/innerWidth*innerHeight,facingMode:"environment"}}).then(e=>{if(!o.value)return;a=e;const t=o.value;t.srcObject=e,t.onloadedmetadata=()=>{t.play()}}),setTimeout(()=>{a&&a.getTracks().forEach(e=>e.stop()),s.push("/passVerify")},5e3)}),(e,t)=>(d(),h("div",u,[l("video",{ref_key:"video",ref:o,style:{transform:"translate(-50%, 0)",height:"100vh",position:"absolute",left:"50%"}},null,512)]))}});export{p as default};
