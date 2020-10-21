(()=>{"use strict";(()=>{const e=(e,t,o,n,r)=>{const i=new XMLHttpRequest;i.responseType="json",i.timeout=1e4,i.open(e,t),i.send(o),i.addEventListener("load",(()=>{200===i.status?n(i.response):r(`Статус ответа: ${i.status} ${i.statusText}`)})),i.addEventListener("error",(()=>{r("Произошла ошибка соединения")})),i.addEventListener("timeout",(()=>{r(`Запрос не успел выполниться за ${i.timeout}мс`)}))};window.backend={load(t,o){e("GET","https://21.javascript.pages.academy/keksobooking/data",null,t,o)},save(t,o,n){e("POST","https://21.javascript.pages.academy/keksobooking",t,o,n)}}})(),window.util={isEscEvent:(e,t)=>{"Escape"===e.key&&(e.preventDefault(),t())},isEnterEvent:(e,t)=>{"Enter"===e.key&&t()},setStatusDisabled:e=>{e.forEach((e=>{e.setAttribute("disabled","true")}))},setStatusActive:e=>{e.forEach((e=>{e.removeAttribute("disabled")}))}},window.debounce=e=>{let t=null;return(...o)=>{t&&clearTimeout(t),t=setTimeout((()=>{e(...o)}),500)}},(()=>{const e=document.querySelector(".map"),t=document.querySelector(".map__filters"),o=t.querySelectorAll("select"),n=t.querySelectorAll("input"),r=e=>{e.forEach((e=>{e.setAttribute("disabled","true")}))};window.cityPlan={map:e,mapFilterSelects:o,mapFilterInputs:n,onError:e=>{const t=document.createElement("div");t.style.position="absolute",t.style.top="180px",t.style.left="0",t.style.right="0",t.style="z-index: 100",t.style.width="790px",t.style.height="90px",t.style="margin: 0 auto",t.style.paddingTop="20px",t.style.fontSize="35px",t.style="text-align: center",t.style.color="tomato",t.style.backgroundColor="navy",t.style.border="5px solid white",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t),t.addEventListener("click",(()=>{t.remove()})),r(o),r(n)}}})(),(()=>{const e=document.querySelector(".ad-form"),t=e.querySelector("#title");let o=t.minLength,n=t.maxLength;const r=document.querySelector(".map__pins"),i=r.querySelector(".map__pin--main"),s=Math.floor(i.offsetLeft+32.5),a=Math.floor(i.offsetTop+32.5),d=e.querySelector("#address"),c=()=>{d.value=`${s}, ${a}`};c(),d.setAttribute("readonly","true");const l=e.querySelector("#price"),u=()=>{const e={valueMissing:"Обязательное поле",badInput:"Пожалуйста, введите число",rangeUnderflow:"Пожалуйста, не меньше "+l.min,rangeOverflow:"Пожалуйста, не больше "+l.max},t=Object.keys(e).find((e=>l.validity[e]));l.setCustomValidity(t?e[t]:"")},p={bungalow:0,flat:1e3,house:5e3,palace:1e4},m=e=>{l.setAttribute("min",e),l.setAttribute("placeholder",e)},v=e.querySelector("#type");let y=p[v.value];m(y);const h=e.querySelector("#timein"),f=e.querySelector("#timeout"),w=e.querySelector("#room_number"),E=e.querySelector("#capacity"),g={1:["1"],2:["1","2"],3:["1","2","3"],100:["0"]},L=()=>{const e=w.value,t=E.querySelectorAll("option");t.forEach((t=>{t.disabled=-1===g[e].indexOf(t.value)})),t[E.selectedIndex].disabled&&(E.querySelector("option:not([disabled])").selected=!0)};L(),window.validation={MAIN_PIN_WIDTH:65,MAIN_PIN_HEIGHT:65,PIN_TIP_HEIGHT:22,setupAddress:()=>{const e=Math.floor(i.offsetLeft+32.5),t=Math.floor(i.offsetTop+65+22);d.value=`${e}, ${t}`},adForm:e,mapPins:r,mainPin:i,initMainPinPosition:c,inputTitle:t,onInputTitleSetCustomValidity:()=>{let e=t.value.length;e<o?t.setCustomValidity(`Минимальная длина — 30 символов, ещё ${o-e} символов`):e>n?t.setCustomValidity(`Максимальная длина — 100 символов, удалите лишние ${e-n} символов`):t.setCustomValidity(""),t.reportValidity()},inputPrice:l,onInputPriceCheckValidity:()=>{u()},onInputPriceSetCustomValidity:()=>{u()},selectType:v,onSelectTypeChange:()=>{y=p[v.value],m(y)},selectCheckIn:h,onSelectCheckInChange:()=>{var e;e=h.value,f.value=e},selectCheckOut:f,onSelectCheckOutChange:()=>{var e;e=f.value,h.value=e},adFormRoomNumber:w,onAdFormRoomNumberChange:()=>{L()}}})(),(()=>{const{isEscEvent:e}=window.util,{map:t}=window.cityPlan,o=t=>{e(t,n)},n=()=>{const e=t.querySelector(".map__card");e&&(e.remove(),document.removeEventListener("keydown",o))};window.card={openPopup:e=>{n(),(e=>{const o=document.querySelector("#card").content.cloneNode(!0),r=document.createDocumentFragment(),{title:i,address:s,price:a,rooms:d,guests:c,checkin:l,checkout:u,description:p,photos:m,features:v,type:y}=e.offer,{avatar:h}=e.author;o.querySelector(".popup__close").addEventListener("click",(()=>{n()}));const f=o.querySelector(".popup__features");f.innerHTML="";const w=o.querySelector(".popup__type");switch(y){case"flat":w.textContent="квартира";break;case"bungalow":w.textContent="бунгало";break;case"house":w.textContent="дом";break;case"palace":w.textContent="дворец"}o.querySelector(".popup__text--capacity").textContent=`${d} комнат${(e=>{let t=e;return e>20&&(t=e%10),e>=5&&e<=20?"":{0:"",1:"а",2:"ы",3:"ы",4:"ы",5:"",6:"",7:"",8:"",9:""}[t]})(d)} для ${c} гост${(e=>{let t=e;return e>=10&&(t=e%10),1===t?"я":"ей"})(c)}`,o.querySelector(".popup__title").textContent=i,o.querySelector(".popup__text--address").textContent=s,o.querySelector(".popup__text--price").textContent=a+"₽/ночь",o.querySelector(".popup__text--time").textContent=`Заезд после ${l}, выезд до ${u}`,f.appendChild(((e,t)=>(e.forEach((e=>{const o=document.createElement("li");o.className="popup__feature popup__feature--"+e,t.appendChild(o)})),t))(v,r)),o.querySelector(".popup__description").textContent=p,((e,t)=>{const o=e.querySelector(".popup__photos"),n=o.querySelector("img");o.innerHTML="",t.forEach((e=>{const t=n.cloneNode(!0);t.src=e,r.appendChild(t)})),o.appendChild(r)})(o,m),o.querySelector(".popup__avatar").src=h;const E=document.querySelector(".map__filters-container");t.insertBefore(o,E)})(e),document.addEventListener("keydown",o)},closePopup:n}})(),(()=>{const{openPopup:e}=window.card;window.marker={getPins:t=>{const o=document.querySelector("#pin").content.querySelector(".map__pin"),n=document.createDocumentFragment();return t.forEach((t=>{const r=o.cloneNode(!0),i=r.querySelector("img");r.style=`left: ${t.location.x-i.width/2}px; top: ${t.location.y-i.height}px;`,i.src=t.author.avatar,i.alt=t.offer.title,n.append(r),r.addEventListener("click",(()=>{e(t)}))})),n}}})(),(()=>{const e="any",{getPins:t}=window.marker,{map:o}=window.cityPlan,{closePopup:n}=window.card,{mapPins:r}=window.validation,i=document.querySelector(".map__filters"),s=i.querySelector("#housing-type"),a=i.querySelector("#housing-price"),d=i.querySelector("#housing-rooms"),c=i.querySelector("#housing-guests"),l=i.querySelector(".map__features");let u;const p=()=>{o.querySelectorAll(".map__pin:not(.map__pin--main)").forEach((e=>{e.remove()}))},m=e=>{p(),r.append(t(e.slice(0,5)))},v=window.debounce(m);window.filter={onLoad:e=>{u=e,m(e)},removePins:p,formOnSityPlan:i,onFormSetNewAds:()=>{let t=[];u.forEach((o=>{(t=>s.value===t.offer.type||s.value===e)(o)&&(t=>"low"===a.value&&t.offer.price<1e4||"middle"===a.value&&t.offer.price>=1e4&&t.offer.price<5e4||"high"===a.value&&t.offer.price>=5e4||a.value===t.offer.price||a.value===e)(o)&&(t=>+d.value===t.offer.rooms||d.value===e)(o)&&(t=>+c.value===t.offer.guests||c.value===e)(o)&&(e=>{const t=l.querySelectorAll(".map__checkbox:checked");return Array.from(t).every((t=>e.offer.features.includes(t.value)))})(o)&&t.push(o)})),n(),v(t)}}})(),(()=>{const e=["gif","jpg","jpeg","png"],t={default:{width:"40px",height:"44px",borderRadius:"0",marginLeft:"0"},edited:{width:"70px",height:"70px",borderRadius:"5px",marginLeft:"-15px"}},{adForm:o}=window.validation,n=o.querySelector("#avatar"),r=o.querySelector(".ad-form-header__preview img"),i=o.querySelector("#images"),s=o.querySelector(".ad-form__photo"),a=document.querySelector(".ad-form__photo-container"),d=(t,o)=>{const n=t.name.toLowerCase();e.some((e=>n.endsWith(e)))&&o(t)},c=function(e){const o=t.edited;e.setAttribute("width",o.width),e.setAttribute("height",o.height),e.style.width=o.width,e.style.height=o.height,e.style.borderRadius=o.borderRadius,e.style.objectFit="cover"},l=e=>{const o=t.edited,n=()=>{URL.revokeObjectURL(r.src),r.removeEventListener("load",n)};r.addEventListener("load",n),r.src=URL.createObjectURL(e),c(),r.style.marginLeft=o.marginLeft},u=e=>{const t=document.createElement("div");t.classList.add("ad-form__photo"),a.appendChild(t);const o=document.createElement("img"),n=()=>{URL.revokeObjectURL(o.src),o.removeEventListener("load",n)};o.addEventListener("load",n),o.src=URL.createObjectURL(e),c(),o.setAttribute("alt","Фотография жилья"),s.remove(),t.appendChild(o)},p=()=>{d(n.files[0],l)},m=()=>{d(i.files[0],u)};window.imageUpload={setDisabled:()=>{const e=t.default;r.style.width=e.width,r.style.height=e.height,r.style.borderRadius=e.borderRadius,r.style.marginLeft=e.marginLeft,r.src="img/muffin-grey.svg",o.querySelectorAll(".ad-form__photo").forEach((e=>{e.remove()})),a.appendChild(s),n.removeEventListener("change",p),i.removeEventListener("change",m)},setEnabled:()=>{n.addEventListener("change",p),i.addEventListener("change",m)}}})(),(()=>{const{MAIN_PIN_WIDTH:e,MAIN_PIN_HEIGHT:t,PIN_TIP_HEIGHT:o,mainPin:n,setupAddress:r}=window.validation,{map:i}=window.cityPlan,s={top:i.offsetTop+130-(t+o),right:1200+Math.ceil(e/2)-n.offsetWidth,bottom:630-(t+o),left:0+Math.ceil(e/2)-n.offsetWidth};window.shift={onMainPinSetAddressMouseMove:e=>{e.preventDefault();let t={x:e.clientX,y:e.clientY};const o=e=>{e.preventDefault();const o=t.x-e.clientX,i=t.y-e.clientY;t={x:e.clientX,y:e.clientY};const a={x:n.offsetLeft-o,y:n.offsetTop-i};a.x<s.left?a.x=s.left:a.x>s.right&&(a.x=s.right),a.y<s.top?a.y=s.top:a.y>s.bottom&&(a.y=s.bottom),n.style.top=a.y+"px",n.style.left=a.x+"px",r()},i=e=>{e.preventDefault(),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}}})(),(()=>{const{map:e,mapFilterSelects:t,mapFilterInputs:o,onError:n}=window.cityPlan,{setupAddress:r,adForm:i,mainPin:s,initMainPinPosition:a,inputTitle:d,onInputTitleSetCustomValidity:c,inputPrice:l,onInputPriceCheckValidity:u,onInputPriceSetCustomValidity:p,selectType:m,onSelectTypeChange:v,selectCheckIn:y,onSelectCheckInChange:h,selectCheckOut:f,onSelectCheckOutChange:w,adFormRoomNumber:E,onAdFormRoomNumberChange:g}=window.validation,{closePopup:L}=window.card,{load:S,save:b}=window.backend,{onMainPinSetAddressMouseMove:_}=window.shift,{isEscEvent:q,setStatusDisabled:x,setStatusActive:k}=window.util,{onLoad:C,removePins:P,formOnSityPlan:A,onFormSetNewAds:I}=window.filter,{setDisabled:T,setEnabled:M}=window.imageUpload,N=i.querySelectorAll("select"),R=i.querySelectorAll("input"),F=i.querySelector("#description"),$=i.querySelector(".ad-form__submit"),D=document.querySelector(".ad-form__reset");x(t),x(o),x(N),x(R),F.setAttribute("disabled","true"),$.setAttribute("disabled","true"),D.setAttribute("disabled","true");const O=e=>{0===e.button&&Q()};s.addEventListener("mousedown",O),s.addEventListener("mousedown",_);const H=document.querySelector("#success").content.querySelector(".success").cloneNode(!0),j=()=>{V()},U=e=>{q(e,V)},V=()=>{H.remove(),H.removeEventListener("click",j),document.removeEventListener("keydown",U)},G=document.querySelector("#error").content.querySelector(".error").cloneNode(!0),W=()=>{e.appendChild(G),G.addEventListener("click",X),document.addEventListener("keydown",Y)},X=()=>{z()},Y=e=>{q(e,z)},z=()=>{G.remove(),G.removeEventListener("click",X),document.removeEventListener("keydown",Y)},B=e=>{e.preventDefault(),K()},J=t=>{t.preventDefault(),$.setAttribute("disabled","true"),D.setAttribute("disabled","true");const o=new FormData(i);b(o,(()=>{K(),e.appendChild(H),H.addEventListener("click",j),document.addEventListener("keydown",U)}),W),document.activeElement.blur()},K=()=>{L(),P(),i.reset(),e.classList.add("map--faded"),i.classList.add("ad-form--disabled"),r(),s.style.left="570px",s.style.top="375px",a(),x(t),x(o),x(N),x(R),x([F,$,D]),i.removeEventListener("submit",J),s.addEventListener("mousedown",O),D.removeEventListener("click",B),A.removeEventListener("change",I),d.removeEventListener("input",c),l.removeEventListener("invalid",u),l.removeEventListener("input",p),m.removeEventListener("change",v),y.removeEventListener("change",h),f.removeEventListener("change",w),E.removeEventListener("change",g),T()},Q=()=>{i.classList.remove("ad-form--disabled"),e.classList.remove("map--faded"),r(),k(R),k(N),k(t),k(o),k([F,$,D]),S(C,n),i.addEventListener("submit",J),s.removeEventListener("mousedown",O),D.addEventListener("click",B),A.addEventListener("change",I),d.addEventListener("input",c),l.addEventListener("invalid",u),l.addEventListener("input",p),m.addEventListener("change",v),y.addEventListener("change",h),f.addEventListener("change",w),E.addEventListener("change",g),M()}})()})();