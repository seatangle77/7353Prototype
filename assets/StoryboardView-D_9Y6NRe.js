import{_ as h,b as w,d as S,e as f,f as x,g as k,h as $,i as V,j,k as C,l as I,m as R,n as q,p as A,q as B,r as T,s as u,o as t,c as o,t as y,w as m,a as e,u as D,F as g,v as l,x as b}from"./index-a2n4RH2Y.js";const F={props:{scene:Object},methods:{requireImg(i){return new URL(Object.assign({"../assets/img/activitysb1.webp":w,"../assets/img/activitysb2.webp":S,"../assets/img/activitysb3.webp":f,"../assets/img/activitysb4.webp":x,"../assets/img/activitysb5.webp":k,"../assets/img/community_img.png":$,"../assets/img/instrument_img.png":V,"../assets/img/prototypesb1.webp":j,"../assets/img/prototypesb2.webp":C,"../assets/img/prototypesb3.webp":I,"../assets/img/prototypesb4.webp":R,"../assets/img/prototypesb5.webp":q,"../assets/img/prototypesb6.webp":A,"../assets/img/prototypesb7.webp":B,"../assets/img/subject_img.jpg":T})[`../assets/img/${i}`],import.meta.url).href}}},L={class:"storyboard-card"},N={style:{cursor:"pointer"}},O=["src"],E=["src"],P={style:{"margin-top":"20px"}};function U(i,d,s,v,a,n){const r=u("el-popover");return t(),o("div",L,[y(r,{ref:"popover",trigger:"hover",width:650,"popper-style":"box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px;"},{reference:m(()=>[e("div",N,[e("img",{src:n.requireImg(s.scene.img),alt:"Scene image",style:{width:"300px","object-fit":"cover"}},null,8,O)])]),default:m(()=>[e("img",{src:n.requireImg(s.scene.img),alt:"Scene image",style:{width:"100%","max-width":"650px","max-height":"700px"}},null,8,E)]),_:1},512),e("div",P,D(s.scene.description),1)])}const W=h(F,[["render",U],["__scopeId","data-v-2038e54d"]]),z=[{description:"Scene 1: Introducing VR device, a teacher explains the workings of VR devices to engaged students.",img:"activitysb1.webp"},{description:"Scene 2: Demonstrating the VR supermarket game interface and operations.",img:"activitysb2.webp"},{description:"Scene 3: Students take turns wearing VR goggles and navigate the virtual supermarket to find items on their shopping list.",img:"activitysb3.webp"},{description:"Scene 4: Simulating the checkout process, students learn to proceed to checkout and select payment methods in a virtual setting.",img:"activitysb4.webp"},{description:"Scene 5: After the game ends, teachers and students have discussions and reviews to boost the students' confidence and encourage them to learn how to solve practical problems.",img:"activitysb5.webp"}],G=[{description:"Scene 1: A user explores a detailed virtual supermarket with a variety of products.",img:"prototypesb1.webp"},{description:"Scene 2: The user seeks assistance from a virtual assistant to find specific items.",img:"prototypesb2.webp"},{description:"Scene 3: The assistant provides directions and helps the user locate each item.",img:"prototypesb3.webp"},{description:"Scene 4: The user navigates through different sections, selects items, and adds them to their virtual shopping cart.",img:"prototypesb4.webp"},{description:"Scene 5: With shopping complete, the user proceeds to 'Checkout'.",img:"prototypesb5.webp"},{description:"Scene 6: The user scans their items, chooses bags, payment method, and completes the transaction.",img:"prototypesb6.webp"},{description:"Scene 7: Alternatively, the user can opt for self-checkout, scan items individually, address discrepancies, and complete the payment process.",img:"prototypesb7.webp"}],_={activity:z,prototype:G},H={components:{StoryboardCard:W},data(){return{activityScenes:[],prototypeScenes:[],storyboarddata:_}},mounted(){this.loadScenes()},methods:{loadScenes(){this.activityScenes=_.activity,this.prototypeScenes=_.prototype}}},J=e("h2",null,"Activity Storyboards",-1),K={class:"storyboards-flex-container"},M=e("h2",null,"Prototype Storyboards",-1),Q={class:"storyboards-flex-container"};function X(i,d,s,v,a,n){const r=u("StoryboardCard");return t(),o("div",null,[J,e("div",K,[(t(!0),o(g,null,l(a.activityScenes,(c,p)=>(t(),b(r,{key:"activity-"+p,scene:c},null,8,["scene"]))),128))]),M,e("div",Q,[(t(!0),o(g,null,l(a.prototypeScenes,(c,p)=>(t(),b(r,{key:"prototype-"+p,scene:c},null,8,["scene"]))),128))])])}const Y=h(H,[["render",X]]),ee={__name:"StoryboardView",setup(i){return(d,s)=>(t(),o("main",null,[y(Y)]))}};export{ee as default};