"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var Marker=function(){function t(e,n){_classCallCheck(this,t),this.color=e,this.amountInk=n}return _createClass(t,[{key:"showColor",value:function(){document.getElementById("showColor").innerText=this.color}},{key:"showPercent",value:function(){document.getElementById("showPercent").innerText="".concat(this.amountInk,"%")}},{key:"getAndShow",value:function(e){console.log("Check text: ".concat(e));for(var n=this.amountInk,t="",o=Array.from(e),r=0;r<o.length&&0!==n;r++)t+=o[r]," "!==o[r]&&(n-=.5);console.log(t),document.querySelector(".marker_tex").innerHTML='\n            <div style="color:'.concat(this.color,'">\n                ').concat(t,"\n            </div>\n        "),console.log("After: ".concat(n)),this.amountInk=n}},{key:"showPercenAfter",value:function(){document.getElementById("showPercenAfter").innerText="".concat(this.amountInk,"%")}},{key:"showBarAfter",value:function(){document.querySelector(".marker_bar").innerHTML='\n            <div style="width:'.concat(this.amountInk,"%;\n            position: absolute;\n            display: block;content: '';\n            background-color: aquamarine;\n            height: 18px;\">\n            </div>\n        ")}}]),t}();