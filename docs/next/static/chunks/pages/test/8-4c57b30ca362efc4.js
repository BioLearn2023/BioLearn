(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4063],{48719:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/8",function(){return i(2730)}])},2730:function(e,t,i){"use strict";let r,n,a;i.r(t),i.d(t,{API_8:function(){return m},test:function(){return d}});var l=i(85893),u=i(62694),s=i(67294),o=i(11163),c=i(25071);class d{constructor(e,t,i,r=[]){this.intrebare=e,this.raspuns=t,this.input=i,this.raspunsuri=r}}let m={getQuestions:function(){return r},getAnswers:function(){return n},getUsedState:function(){return a}};t.default=()=>{var e,t,i,m,p;let[g,f]=(0,s.useState)(0),[h,x]=(0,s.useState)([new d("Grana este o structură caracteristică:",1,-1,["cloroplastului","lizozomului","nucleului","mitocondriei"]),new d("Fiecare celulă rezultată din mitoza unei celule mamă cu 2n = 46 de cromozomi, prezintă:",3,-1,["2n = 23 cromozomi ","n = 23 cromozomi","2n = 46 cromozomi","n = 46 cromozomi"]),new d("Reprezintă o afecțiune a sistemului respirator:",2,-1,["ateroscleroza","bronșita","candidoza","gastrita"]),new d("Prin arterele pulmonare, s\xe2ngele:",2,-1,["ajunge \xeen atriul drept","pleacă din ventriculul drept","ajunge \xeen atriul st\xe2ng","pleacă din ventriculul st\xe2ng"]),new d("La mamifere, o structură caracteristică urechii externe este:",3,-1,["melcul membranos","lanțul de oscioare","conductul auditiv extern","trompa lui Eustachio"]),new d("Celulele gliale:",3,-1,["sunt anucleate","generează impulsurile nervoase","sintetizează mielina","sunt hrănite de către neuroni"]),new d("Chemoreceptorii gustativi:",1,-1,["conțin celule \xeen formă de fus","prezintă un cil la polul bazal","se numesc papile gustative","sunt numeroși la nivelul stomacului"]),new d("Bacilul Koch poate produce:",3,-1,["astm bronșic","sifilis","TBC","ulcer gastro-intestinal"]),new d("Un organism cu genotipul AABB:",2,-1,["conține un singur set de cromozomi","este pur din punct de vedere genetic","are factori ereditari diferiți \xeen fiecare pereche","produce patru tipuri diferite de gameți"]),new d("Ficatul:",1,-1,["este localizat sub diafragmă","se situează inferior față de intestinul gros","intră \xeen alcătuirea tubului digestiv","participă la digestie prin secreția unui suc acid"]),new d("Descendenții unei familii \xeen care mama are grupa A (II) homozigotă, iar tatăl grupa 0 (I) pot avea:",1,-1,["grupa A (II)","grupa AB (IV)","grupa B (III)","grupa 0 (I)"]),new d("Paralizia unui membru se numește: ",4,-1,["boala Parkinson","epilepsie","monohibridare","monoplegie"]),new d("Tenia:",2,-1,["aparține protistelor","este parazită la om","reprezintă un vierme cilindric","trăiește liber \xeen mediul acvatic"]),new d("Cuibărirea embrionului \xeen mucoasa uterină se numește:",3,-1,["fecundație","nastie","nidație","polenizare"]),new d("Membrana celulară:",1,-1,["delimitează citoplasma","este dispusă la periferia peretelui celular","lipsește la celula procariotă","conține celuloză"])]),[v,w]=(0,s.useState)(!1),b=Array(h.length).fill(0),[z,j]=(0,s.useState)(Array(h.length).fill(0));(0,s.useEffect)(()=>{x(function(e){for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t].intrebare,e[i].intrebare]=[e[i].intrebare,e[t].intrebare],[e[t].input,e[i].input]=[e[i].input,e[t].input],[e[t].raspuns,e[i].raspuns]=[e[i].raspuns,e[t].raspuns],[e[t].raspunsuri,e[i].raspunsuri]=[e[i].raspunsuri,e[t].raspunsuri]}return e}(h)),w(!0),r=h},[h]),(0,s.useEffect)(()=>{n=z},[z]),(0,s.useEffect)(()=>{a=g},[g]);let k=(0,o.useRouter)(),y=-1,[E,N]=(0,s.useState)(0),[I,T]=(0,s.useState)("Următoarea \xeentrebare"),_=e=>{var t,i;y=e,null===(t=document.getElementById(e.toString()))||void 0===t||t.classList.add("outline");for(let t=1;t<=4;t++)t!=e&&(null===(i=document.getElementById(t.toString()))||void 0===i||i.classList.remove("outline"))},C=()=>{var e,t;h[E].input=y,y===(null===(e=h[E])||void 0===e?void 0:e.raspuns)&&(b[E]=1),-1==y&&alert("Nu ai selectat niciun raspuns!"),f(1),N(e=>e+1),null===(t=document.getElementById(y.toString()))||void 0===t||t.classList.remove("outline"),E>=h.length-2&&(T("Finalizează testul"),console.log(a)),E==h.length-1&&(j(b),w(!1),k.push("/test/rezultate"))};return(0,l.jsxs)("div",{children:[v?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(u.Zb,{className:"max-w-sm mx-auto my-auto flex h-1/2 rounded-lg relative grid mt-28 border-lime-300 bg-transparent",children:[(0,l.jsx)("h5",{className:"text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:null===(e=h[E])||void 0===e?void 0:e.intrebare}),(0,l.jsxs)(u.Zb,{className:"border-lime-300 bg-transparent",children:[(0,l.jsx)(u.zx,{gradientDuoTone:"tealToLime",id:"1",onClick:()=>_(1),children:null===(t=h[E])||void 0===t?void 0:t.raspunsuri[0]}),(0,l.jsx)(u.zx,{gradientDuoTone:"tealToLime",id:"2",onClick:()=>_(2),children:null===(i=h[E])||void 0===i?void 0:i.raspunsuri[1]}),(0,l.jsx)(u.zx,{gradientDuoTone:"tealToLime",id:"3",onClick:()=>_(3),children:null===(m=h[E])||void 0===m?void 0:m.raspunsuri[2]}),(0,l.jsx)(u.zx,{gradientDuoTone:"tealToLime",id:"4",onClick:()=>_(4),children:null===(p=h[E])||void 0===p?void 0:p.raspunsuri[3]})]}),(0,l.jsxs)(u.zx,{className:"mx-auto w-32",gradientDuoTone:"tealToLime",onClick:()=>C(),children:[I," ","",(0,l.jsx)(c.Z,{className:" ml-2 w-4"})]})]})}):(0,l.jsx)("div",{}),(0,l.jsx)("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:(0,l.jsx)("div",{className:"relative left-[calc(50%-20rem)] aspect-[16/9] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),(0,l.jsx)("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:(0,l.jsx)("div",{className:"relative right-[calc(0%+11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-green-900 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})})]})}},25071:function(e,t,i){"use strict";var r=i(67294);let n=r.forwardRef(function({title:e,titleId:t,...i},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},i),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"}))});t.Z=n}},function(e){e.O(0,[5445,6556,5863,3966,9774,2888,179],function(){return e(e.s=48719)}),_N_E=e.O()}]);