"use strict";function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.textWrap=document.getElementById("text"),this.titleTr="",this.messageTr="",this.langIsEng=!1}var n,s,a;return n=t,(s=[{key:"getText",value:function(){var e=window.location.search,t=e.substring(e.lastIndexOf("?")+1),n=new URLSearchParams(t);n.has("en")&&(this.langIsEng=!0),n.has("t")&&(this.titleTr=this.translateText(n.get("t"))),n.has("m")&&(this.messageTr=this.translateText(n.get("m"))),this.showText()}},{key:"translateText",value:function(e){var n=this;return e.split("-").map((function(e){return n.langIsEng?t.keyCodesEn[+e]:t.keyCodesRus[+e]})).join("")}},{key:"showText",value:function(){if(this.titleTr){var e=document.createElement("h1");e.innerHTML=this.titleTr,this.textWrap.appendChild(e)}if(this.messageTr){var t=document.createElement("p");t.innerHTML=this.messageTr,this.textWrap.appendChild(t)}}}])&&e(n.prototype,s),a&&e(n,a),t}();t.keyCodesRus={0:" ",65:"ф",66:"и",67:"с",68:"в",69:"у",70:"а",71:"п",72:"р",73:"ш",74:"о",75:"л",76:"д",77:"ь",78:"т",79:"щ",80:"з",81:"й",82:"к",83:"ы",84:"е",85:"г",86:"м",87:"ц",88:"ч",89:"н",90:"я",186:"ж",188:"б",190:"ю",219:"х",221:"ъ",222:"э",192:"ё"},t.keyCodesEn={65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",186:";",188:",",190:".",219:"[",221:"]",222:"'",192:"`"},document.addEventListener("DOMContentLoaded",(function(){(new t).getText()}));