(()=>{"use strict";(()=>{const e=(e,t,o,n,r)=>{const i=new XMLHttpRequest;i.responseType="json",i.timeout=2e4,i.open(e,t),i.send(o),i.addEventListener("load",(()=>{200===i.status?n(i.response):r(`Статус ответа: ${i.status} ${i.statusText}`)})),i.addEventListener("error",(()=>{r("Произошла ошибка соединения")})),i.addEventListener("timeout",(()=>{r(`Запрос не успел выполниться за ${i.timeout}мс`)}))};window.backend={load(t,o){e("GET","https://21.javascript.pages.academy/keksobooking/data",null,t,o)},save(t,o,n){e("POST","https://21.javascript.pages.academy/keksobooking",t,o,n)}}})(),window.util={isEscEvent:(e,t)=>{"Escape"===e.key&&(e.preventDefault(),t())},isEnterEvent:(e,t)=>{"Enter"===e.key&&t()}},window.debounce=e=>{let t=null;return(...o)=>{t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...o)}),500)}},(()=>{const e=document.querySelector(".map"),t=document.querySelector(".map__filters"),o=t.querySelectorAll("select"),n=t.querySelectorAll("input"),r=e=>{e.forEach((e=>{e.setAttribute("disabled","true")}))};window.cityPlan={map:e,mapFilterSelects:o,mapFilterInputs:n,onError:e=>{const t=document.createElement("div");t.style="z-index: 100; margin: 0 auto; text-align: center",t.style.width="790px",t.style.height="90px",t.style.paddingTop="20px",t.style.backgroundColor="navy",t.style.color="tomato",t.style.border="5px solid white",t.style.position="absolute",t.style.top="180px",t.style.left=0,t.style.right=0,t.style.fontSize="35px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t),t.addEventListener("click",(()=>{t.remove()})),r(o),r(n)}}})(),(()=>{const e=document.querySelector(".ad-form"),t=e.querySelector("#title");let o=t.minLength,n=t.maxLength;const r=document.querySelector(".map__pins"),i=r.querySelector(".map__pin--main"),s=Math.floor(i.offsetLeft+32.5),a=Math.floor(i.offsetTop+32.5),d=e.querySelector("#address"),l=()=>{d.value=`${s}, ${a}`};l(),d.setAttribute("readonly","true");const c=e.querySelector("#price"),u=()=>{const e={valueMissing:"Обязательное поле",badInput:"Пожалуйста, введите число",rangeUnderflow:"Пожалуйста, не меньше "+c.min,rangeOverflow:"Пожалуйста, не больше "+c.max},t=Object.keys(e).find((e=>c.validity[e]));c.setCustomValidity(t?e[t]:"")},p={bungalow:0,flat:1e3,house:5e3,palace:1e4},m=e=>{c.setAttribute("min",e),c.setAttribute("placeholder",e)},v=e.querySelector("#type");let y=p[v.value];m(y);const h=e.querySelector("#timein"),f=e.querySelector("#timeout"),w=e.querySelector("#room_number"),b=e.querySelector("#capacity"),E={1:["1"],2:["1","2"],3:["1","2","3"],100:["0"]},g=()=>{let e=w.value,t=b.querySelectorAll("option");t.forEach((t=>{t.disabled=-1===E[e].indexOf(t.value)})),t[b.selectedIndex].disabled&&(b.querySelector("option:not([disabled])").selected=!0)};g(),window.validation={MAIN_PIN_WIDTH:65,MAIN_PIN_HEIGHT:65,PIN_TIP_HEIGHT:22,setupAddress:()=>{const e=Math.floor(i.offsetLeft+32.5),t=Math.floor(i.offsetTop+65+22);d.value=`${e}, ${t}`},adForm:e,mapPins:r,mainPin:i,initMainPinPosition:l,inputTitle:t,onInputTitleSetCustomValidity:()=>{let e=t.value.length;e<o?t.setCustomValidity(`Минимальная длина — 30 символов, ещё ${o-e} символов`):e>n?t.setCustomValidity(`Максимальная длина — 100 символов, удалите лишние ${e-n} символов`):t.setCustomValidity(""),t.reportValidity()},inputPrice:c,onInputPriceCheckValidity:()=>{u()},onInputPriceSetCustomValidity:()=>{u()},selectType:v,onSelectTypeChange:()=>{y=p[v.value],m(y)},selectCheckIn:h,onSelectCheckInChange:()=>{var e;e=h.value,f.value=e},selectCheckOut:f,onSelectCheckOutChange:()=>{var e;e=f.value,h.value=e},adFormRoomNumber:w,onAdFormRoomNumberChange:()=>{g()}}})(),(()=>{const{isEscEvent:e}=window.util,{map:t}=window.cityPlan,o=t=>{e(t,n)},n=()=>{const e=t.querySelector(".map__card");e&&(e.remove(),document.removeEventListener("keydown",o))};window.card={openPopup:e=>{n(),(e=>{const o=document.querySelector("#card").content.cloneNode(!0),r=document.createDocumentFragment(),{title:i,address:s,price:a,rooms:d,guests:l,checkin:c,checkout:u,description:p,photos:m,features:v,type:y}=e.offer,{avatar:h}=e.author;o.querySelector(".popup__close").addEventListener("click",(()=>{n()}));const f=o.querySelector(".popup__features");f.innerHTML="";const w=o.querySelector(".popup__type");switch(y){case"flat":w.textContent="квартира";break;case"bungalow":w.textContent="бунгало";break;case"house":w.textContent="дом";break;case"palace":w.textContent="дворец"}o.querySelector(".popup__text--capacity").textContent=`${d} комнат${(e=>{let t=e;return e>20&&(t=e%10),e>=5&&e<=20?"":{0:"",1:"а",2:"ы",3:"ы",4:"ы",5:"",6:"",7:"",8:"",9:""}[t]})(d)} для ${l} гост${(e=>{let t=e;return e>=10&&(t=e%10),1===t?"я":"ей"})(l)}`,o.querySelector(".popup__title").textContent=i,o.querySelector(".popup__text--address").textContent=s,o.querySelector(".popup__text--price").textContent=a+"₽/ночь",o.querySelector(".popup__text--time").textContent=`Заезд после ${c}, выезд до ${u}`,f.appendChild(((e,t)=>(e.forEach((e=>{const o=document.createElement("li");o.className="popup__feature popup__feature--"+e,t.appendChild(o)})),t))(v,r)),o.querySelector(".popup__description").textContent=p,((e,t)=>{const o=e.querySelector(".popup__photos"),n=o.querySelector("img");o.innerHTML="",t.forEach((e=>{const t=n.cloneNode(!0);t.src=e,r.appendChild(t)})),o.appendChild(r)})(o,m),o.querySelector(".popup__avatar").src=h;const b=document.querySelector(".map__filters-container");t.insertBefore(o,b)})(e),document.addEventListener("keydown",o)},closePopup:n}})(),(()=>{const{openPopup:e}=window.card;window.marker={getPins:t=>{const o=document.querySelector("#pin").content.querySelector(".map__pin"),n=document.createDocumentFragment();return t.forEach((t=>{const r=o.cloneNode(!0),i=r.querySelector("img");r.style=`left: ${t.location.x-i.width/2}px; top: ${t.location.y-i.height}px;`,i.src=t.author.avatar,i.alt=t.offer.title,n.append(r),r.addEventListener("click",(()=>{e(t)}))})),n}}})(),(()=>{const e="any",{getPins:t}=window.marker,{map:o}=window.cityPlan,{closePopup:n}=window.card,{mapPins:r}=window.validation,i=document.querySelector(".map__filters"),s=i.querySelector("#housing-type"),a=i.querySelector("#housing-price"),d=i.querySelector("#housing-rooms"),l=i.querySelector("#housing-guests"),c=i.querySelector(".map__features");let u;const p=()=>{o.querySelectorAll(".map__pin:not(.map__pin--main)").forEach((e=>{e.remove()}))},m=e=>{p(),r.append(t(e.slice(0,5)))},v=window.debounce(m);window.filter={onLoad:e=>{u=e,m(e)},removePins:p,filterForm:i,onFiltersSetNewAds:()=>{let t=[];u.forEach((o=>{(t=>s.value===t.offer.type||s.value===e)(o)&&(t=>"low"===a.value&&t.offer.price<1e4||"middle"===a.value&&t.offer.price>=1e4&&t.offer.price<5e4||"high"===a.value&&t.offer.price>=5e4||a.value===t.offer.price||a.value===e)(o)&&(t=>+d.value===t.offer.rooms||d.value===e)(o)&&(t=>+l.value===t.offer.guests||l.value===e)(o)&&(e=>{const t=c.querySelectorAll(".map__checkbox:checked");return Array.from(t).every((t=>e.offer.features.includes(t.value)))})(o)&&t.push(o)})),n(),v(t)}}})(),(()=>{const e={default:{width:"40px",height:"44px",borderRadius:"0",marginLeft:"0"},edited:{width:"70px",height:"70px",borderRadius:"5px",marginLeft:"-15px"}},{adForm:t}=window.validation,o=t.querySelector("#avatar"),n=t.querySelector(".ad-form-header__preview img"),r=t.querySelector("#images"),i=t.querySelector(".ad-form__photo"),s=document.querySelector(".ad-form__photo-container"),a=()=>{(t=>{const o=e.edited,r=()=>{URL.revokeObjectURL(n.src),n.removeEventListener("load",r)};n.addEventListener("load",r),n.src=URL.createObjectURL(t),n.setAttribute("width",o.width),n.setAttribute("height",o.height),n.style.width=o.width,n.style.height=o.height,n.style.borderRadius=o.borderRadius,n.style.marginLeft=o.marginLeft,n.style.objectFit="cover"})(o.files[0])},d=()=>{(t=>{const o=document.createElement("div");o.classList.add("ad-form__photo"),s.appendChild(o);const n=document.createElement("img"),r=e.edited,a=()=>{URL.revokeObjectURL(n.src),n.removeEventListener("load",a)};n.addEventListener("load",a),n.src=URL.createObjectURL(t),n.setAttribute("alt","Фотография жилья"),n.setAttribute("width",r.width),n.setAttribute("height",r.height),n.style.width=r.width,n.style.height=r.height,n.style.borderRadius=r.borderRadius,n.style.objectFit="cover",i.remove(),o.appendChild(n)})(r.files[0])};window.imageUpload={setDisabled:()=>{const l=e.default;n.style.width=l.width,n.style.height=l.height,n.style.borderRadius=l.borderRadius,n.style.marginLeft=l.marginLeft,n.src="img/muffin-grey.svg",t.querySelectorAll(".ad-form__photo").forEach((e=>{e.remove()})),s.appendChild(i),o.removeEventListener("change",a),r.removeEventListener("change",d)},setEnabled:()=>{o.addEventListener("change",a),r.addEventListener("change",d)}}})(),(()=>{const{MAIN_PIN_WIDTH:e,MAIN_PIN_HEIGHT:t,PIN_TIP_HEIGHT:o,mainPin:n,setupAddress:r}=window.validation,{map:i}=window.cityPlan,s={top:i.offsetTop+130-(t+o),right:1200+Math.ceil(e/2)-n.offsetWidth,bottom:630-(t+o),left:0+Math.ceil(e/2)-n.offsetWidth};window.shift={onMainPinSetAdressMouseMove:e=>{e.preventDefault();let t={x:e.clientX,y:e.clientY};const o=e=>{e.preventDefault();const o=t.x-e.clientX,i=t.y-e.clientY;t={x:e.clientX,y:e.clientY};const a={x:n.offsetLeft-o,y:n.offsetTop-i};a.x<s.left?a.x=s.left:a.x>s.right&&(a.x=s.right),a.y<s.top?a.y=s.top:a.y>s.bottom&&(a.y=s.bottom),n.style.top=a.y+"px",n.style.left=a.x+"px",r()},i=e=>{e.preventDefault(),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}}})(),(()=>{const{map:e,mapFilterSelects:t,mapFilterInputs:o,onError:n}=window.cityPlan,{setupAddress:r,adForm:i,mainPin:s,initMainPinPosition:a,inputTitle:d,onInputTitleSetCustomValidity:l,inputPrice:c,onInputPriceCheckValidity:u,onInputPriceSetCustomValidity:p,selectType:m,onSelectTypeChange:v,selectCheckIn:y,onSelectCheckInChange:h,selectCheckOut:f,onSelectCheckOutChange:w,adFormRoomNumber:b,onAdFormRoomNumberChange:E}=window.validation,{closePopup:g}=window.card,{load:L,save:S}=window.backend,{onMainPinSetAdressMouseMove:_}=window.shift,{isEscEvent:q}=window.util,{onLoad:x,removePins:k,filterForm:C,onFiltersSetNewAds:A}=window.filter,P=i.querySelectorAll("select"),I=i.querySelectorAll("input"),T=i.querySelector("#description"),M=i.querySelector(".ad-form__submit"),N=document.querySelector(".ad-form__reset"),R=e=>{e.forEach((e=>{e.setAttribute("disabled","true")}))},F=e=>{e.forEach((e=>{e.removeAttribute("disabled","true")}))};R(t),R(o),R(P),R(I),T.setAttribute("disabled","true"),M.setAttribute("disabled","true"),N.setAttribute("disabled","true");const $=e=>{0===e.button&&J()};s.addEventListener("mousedown",$),s.addEventListener("mousedown",_);const D=document.querySelector("#success").content.querySelector(".success").cloneNode(!0),H=()=>{U()},O=e=>{q(e,U)},U=()=>{D.remove(),D.removeEventListener("click",H),document.removeEventListener("keydown",O)},j=document.querySelector("#error").content.querySelector(".error").cloneNode(!0),V=()=>{e.appendChild(j),j.addEventListener("click",G),document.addEventListener("keydown",W)},G=()=>{X()},W=e=>{q(e,X)},X=()=>{j.remove(),j.removeEventListener("click",G),document.removeEventListener("keydown",W)},Y=e=>{e.preventDefault(),B()},z=t=>{t.preventDefault(),M.setAttribute("disabled","true"),N.setAttribute("disabled","true");const o=new FormData(i);S(o,(()=>{B(),e.appendChild(D),D.addEventListener("click",H),document.addEventListener("keydown",O)}),V),document.activeElement.blur()},B=()=>{g(),k(),i.reset(),e.classList.add("map--faded"),i.classList.add("ad-form--disabled"),r(),s.style.left="570px",s.style.top="375px",a(),R(t),R(o),R(P),R(I),T.setAttribute("disabled","true"),M.setAttribute("disabled","true"),N.setAttribute("disabled","true"),i.removeEventListener("submit",z),s.addEventListener("mousedown",$),N.removeEventListener("click",Y),C.removeEventListener("change",A),d.removeEventListener("input",l),c.removeEventListener("invalid",u),c.removeEventListener("input",p),m.removeEventListener("change",v),y.removeEventListener("change",h),f.removeEventListener("change",w),b.removeEventListener("change",E),window.imageUpload.setDisabled()},J=()=>{i.classList.remove("ad-form--disabled"),e.classList.remove("map--faded"),r(),F(I),F(P),F(t),F(o),T.removeAttribute("disabled","true"),M.removeAttribute("disabled","true"),N.removeAttribute("disabled","true"),L(x,n),i.addEventListener("submit",z),s.removeEventListener("mousedown",$),N.addEventListener("click",Y),C.addEventListener("change",A),d.addEventListener("input",l),c.addEventListener("invalid",u),c.addEventListener("input",p),m.addEventListener("change",v),y.addEventListener("change",h),f.addEventListener("change",w),b.addEventListener("change",E),window.imageUpload.setEnabled()}})()})();