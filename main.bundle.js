(()=>{var t={678:function(t,e,o){var i,n;n=void 0!==o.g?o.g:"undefined"!=typeof window?window:this,i=function(){return function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=l(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,f=function(s,p,f,u){if(!c("body"))return!1;e||d.Notify.init({});var x=l(!0,e,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof u&&!Array.isArray(u)){var y={};"object"==typeof f?y=f:"object"==typeof u&&(y=u),e=l(!0,e,y)}var b,h,w=e[s.toLocaleLowerCase("en")];m++,"string"!=typeof p&&(p="Notiflix "+s),e.plainText&&(b=p,(h=t.document.createElement("div")).innerHTML=b,p=h.textContent||h.innerText||""),!e.plainText&&p.length>e.messageMaxLength&&(e=l(!0,e,{closeButton:!0,messageMaxLength:150}),p='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),p.length>e.messageMaxLength&&(p=p.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),e.cssAnimation||(e.cssAnimationDuration=0);var g=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(g.id=r.wrapID,g.style.width=e.width,g.style.zIndex=e.zindex,g.style.opacity=e.opacity,"center-center"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.top=e.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===e.position?(g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.left="auto"):"left-top"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===e.position?(g.style.left=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=e.distance,g.style.top=e.distance,g.style.left="auto",g.style.bottom="auto"),e.backOverlay){var v=t.document.getElementById(r.overlayID)||t.document.createElement("div");v.id=r.overlayID,v.style.width="100%",v.style.height="100%",v.style.position="fixed",v.style.zIndex=e.zindex-1,v.style.left=0,v.style.top=0,v.style.right=0,v.style.bottom=0,v.style.background=w.backOverlayColor||e.backOverlayColor,v.className=e.cssAnimation?"nx-with-animation":"",v.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(v)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(g);var k=t.document.createElement("div");k.id=e.ID+"-"+m,k.className=e.className+" "+w.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=w.textColor,k.style.background=w.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof f&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+p+"</span>"+(e.closeButton?N:"");else{var C="";s===o?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=C+'<span class="nx-message nx-with-icon">'+p+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+p+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var I=t.document.getElementById(r.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var L=t.document.getElementById(k.id);if(L){var A,W,z=function(){L.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&g.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(A)},D=function(){if(L&&null!==L.parentNode&&L.parentNode.removeChild(L),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(W)};if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){D(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof f||e.clickToClose)&&L.addEventListener("click",(function(){"function"==typeof f&&f(),z();var t=setTimeout((function(){D(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof f){var T=function(){A=setTimeout((function(){z()}),e.timeout),W=setTimeout((function(){D()}),e.timeout+e.cssAnimationDuration)};T(),e.pauseOnHover&&(L.addEventListener("mouseenter",(function(){L.classList.add("nx-paused"),clearTimeout(A),clearTimeout(W)})),L.addEventListener("mouseleave",(function(){L.classList.remove("nx-paused"),T()})))}}if(e.showOnlyTheLastOne&&m>0)for(var S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+m+"])"),O=0;O<S.length;O++){var P=S[O];null!==P.parentNode&&P.parentNode.removeChild(P)}e=l(!0,e,x)},d={Notify:{init:function(o){e=l(!0,r,o),function(e,o){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i){f(o,t,e,i)},failure:function(t,e,o){f(i,t,e,o)},warning:function(t,e,o){f(n,t,e,o)},info:function(t,e,o){f(a,t,e,o)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}}(n)}.apply(e,[]),void 0===i||(t.exports=i)},645:(t,e,o)=>{var i={"./aa-red-love-cup.webp":100,"./ab-red-love-cup@2x.webp":458,"./ac-black-tea-cup.webp":507,"./ad-black-tea-cup@2x.webp":486,"./ae-b&w-essentials-mug.webp":962,"./af-b&w-essentials-mug@2x.webp":990,"./ag-winter-style-mug.webp":703,"./ah-winter-style-mug@2x.webp":385,"./ai-ceramic-tea-cup-white.webp":202,"./aj-ceramic-tea-cup-white@2x.webp":725,"./ak-no-handle-bar-cup.webp":118,"./al-no-handle-bar-cup@2x.webp":785};function n(t){var e=a(t);return o(e)}function a(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=645},886:(t,e,o)=>{var i={"./aa-notebook.webp":1,"./ab-notebook@2x.webp":719,"./ac-cup-in-woman-hands.webp":950,"./ad-cup-in-woman-hands@2x.webp":15,"./ae-cappuchino-cup.webp":706,"./af-cappuchino-cup@2.webp":66};function n(t){var e=a(t);return o(e)}function a(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=886},334:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/golden-designers-mug.webp"},185:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/golden-designers-mug@2x.webp"},720:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/pink-premium-ceramic.webp"},606:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/pink-premium-ceramic@2x.webp"},100:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/aa-red-love-cup.webp"},458:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ab-red-love-cup@2x.webp"},507:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ac-black-tea-cup.webp"},486:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ad-black-tea-cup@2x.webp"},962:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ae-b&w-essentials-mug.webp"},990:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/af-b&w-essentials-mug@2x.webp"},703:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ag-winter-style-mug.webp"},385:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ah-winter-style-mug@2x.webp"},202:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ai-ceramic-tea-cup-white.webp"},725:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/aj-ceramic-tea-cup-white@2x.webp"},118:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ak-no-handle-bar-cup.webp"},785:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/al-no-handle-bar-cup@2x.webp"},1:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/aa-notebook.webp"},719:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ab-notebook@2x.webp"},950:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ac-cup-in-woman-hands.webp"},15:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ad-cup-in-woman-hands@2x.webp"},706:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/ae-cappuchino-cup.webp"},66:(t,e,o)=>{"use strict";t.exports=o.p+"images/photos/af-cappuchino-cup@2.webp"}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{"use strict";var t=function(t,e){return t.map(e).join("")},e=function(t,e){return'\n<ul class="'.concat(e,'">\n  ').concat(t,"\n</ul>\n")},i=function(t,e){t.insertAdjacentHTML("beforeend",e)},n=function(t,e){var o=t.name,i=void 0===o?"":o,n=t.webp,a=void 0===n?"":n,r=t.webp2x,s=void 0===r?"":r,c=t.normalPrice,l=void 0===c?"":c,p=t.salePrice,m=void 0===p?"":p,f=t.hashLink,d=void 0===f?"":f;return'\n<li class="'.concat(e.item,'">\n  <a href="#').concat(d,'" class="').concat(e.link,'">\n    <div class="').concat(e.thumb,'">\n      <img class="').concat(e.image,'" srcset="').concat(a,",\n                  ").concat(s,' 2x"\n        src="').concat(a,'"\n        alt="').concat(i,'"\n      >\n    </div>\n\n    <div class=').concat(e.meta,'>\n      <p class="').concat(e.name,'">').concat(i,'</p>\n\n      <div class="').concat(e.prices,'">\n          ').concat(m?'\n                <span class="'.concat(e.salePrice,'">').concat(m,'</span>\n                <span class="').concat(e.oldPrice,'">').concat(l,"</span>"):'<span class="'.concat(e.normalPrice,'">').concat(l,"</span>"),"\n      </div>\n\n    </div>\n  </a>\n\n</li>")};const a={list:"VLnbAyl09tzpyMevwAEN",item:"NqZN5plRucYklAQgoS_h",link:"wn_9fVCasqDGIDm20Xa9",thumb:"q8x5T8Z_BIzfQLohRLRe",image:"K1LDwFyyIvAEVA50DCtn",name:"tUQ4bWDBB73R04YjHbQ2",normalPrice:"Ma_wlP2pld8Res5nqSQ0",salePrice:"cPCLL93rCLl_XJXkrsNw",oldPrice:"Cn8piwHmGuCWJJfDZBKa"};var r=e(t([{name:"golden designers mug",webp:o(334),webp2x:o(185),salePrice:"",normalPrice:"$99 USD",hashLink:"featured-product"},{name:"pink premium ceramic",webp:o(720),webp2x:o(606),salePrice:"$50.00",normalPrice:"$ 69.00 USD",hashLink:"featured-product"}],(function(t){return n(t,a)})),a.list);const s={list:"omX4HArsms3lQ4UkEBto",item:"IVPUhh11hhMT7c1jM6CO",link:"P7M6llFOkw3rw4MkdsQs",thumb:"m95OFNQzhmgTDeWS_kjW",image:"RZAUsMXIt6RtdX0chlEh",name:"EJQkG4_W6qp3GPg691Z4",normalPrice:"N9ndubQ3GlmTxJqn13rs",salePrice:"C9c1Yv10UiygVtgAU1Ub",oldPrice:"bQf0ZLfCJrZaQT3huUoS"};var c,l=(c=o(645)).keys().map(c),p=e(t([{webp:l[0],webp2x:l[1],name:"Red Love Cup",salePrice:"$25.00",normalPrice:"$ 37.00 USD",hashLink:"more-products"},{webp:l[2],webp2x:l[3],name:"Black Tea Cup",salePrice:"$15.00",normalPrice:"$ 29.00 USD",hashLink:"more-products"},{webp:l[4],webp2x:l[5],name:"B&W Essentials Mug",salePrice:"",normalPrice:"$ 19.00 USD",hashLink:"more-products"},{webp:l[6],webp2x:l[7],name:"Winter Style Mug",salePrice:"",normalPrice:"$ 25.00 USD",hashLink:"more-products"},{webp:l[8],webp2x:l[9],name:"Ceramic Tea",salePrice:"",normalPrice:"$ 46.00 USD",hashLink:"more-products"},{webp:l[10],webp2x:l[11],name:"No Handle Bar Cup",salePrice:"",normalPrice:"$ 34.00 USD",hashLink:"more-products"}],(function(t){return n(t,s)})),s.list),m=function(){return{root:document.querySelector("#root"),featuredProducts:document.querySelector("[data-featured-products]"),moreProducts:document.querySelector("[data-more-products]"),premiumOffer:document.querySelector("[data-premium-offer]"),openPremiumOfferBtn:document.querySelector("[data-open-premium-offer]")}};const f={flexWrapper:"RCpCTUOcSTDop9A61X0R",list:"ErBXucqV331KamIeHEUf",item:"oLP5hchS6s4T_9FCRENw",helloWorld:"WpGYTui2xKQMxz2W8bta",rightTitle:"cMGWJkR0N8o3gqx4UCve",callToAction:"c1qpP_LyNDven1gCwx0o",offerDescription:"EAo5g955yLgAcV4HZ0CC",startShoppingButton:"khmVMkfZh7Yf_u_dysAb"};var d,u=function(t){return t.keys().map(t)}(o(886)),x=e(t([{webp:u[0],webp2x:u[1],name:"Red Love Cup",hashLink:"premium-offer"},{webp:u[2],webp2x:u[3],name:"Red Love Cup",hashLink:"premium-offer"},{webp:u[4],webp2x:u[5],name:"Red Love Cup",hashLink:"premium-offer"}],(function(t){var e=t.webp,o=void 0===e?"":e,i=t.webp2x,n=void 0===i?"":i,a=t.name,r=void 0===a?"":a,s=t.hashLink,c=void 0===s?"":s;return'\n<li class="'.concat(f.item,'">\n  <a href="#').concat(c,'" class="').concat(f.link,'">\n    <div class="').concat(f.thumb,'">\n      <img class="').concat(f.image,'" srcset="').concat(o,",\n                  ").concat(n,' 2x"\n        src="').concat(o,'"\n        alt="').concat(r,'"\n      >\n    </div>\n  </a>\n\n</li>')})),f.list),y='\n<div class="'.concat(f.helloWorld,'">\n  <p class="').concat(f.rightTitle,'">Premium Offer</p>\n  <h2 class="').concat(f.callToAction,'">Get our Coffee Magazine</h2>\n  <p class="').concat(f.offerDescription,'">The most versatile furniture system ever created. Designed to fit your life.</p>\n  <button\n    class="').concat(f.startShoppingButton,'"\n    type="button"\n    data-open-premium-offer\n  >\n    Start Shopping\n  </button>\n</div>\n'),b='\n<div class="'.concat(f.flexWrapper,'">\n  ').concat(x,"\n  ").concat(y,"\n</div>\n"),h=o(678),w=m(),g=w.featuredProducts,v=w.moreProducts,k=w.premiumOffer;i(g,r),i(v,p),i(k,b),null==(d=m().openPremiumOfferBtn)||d.addEventListener("click",(function(){h.Notify.success("TODO: Open shop page")}))})()})();