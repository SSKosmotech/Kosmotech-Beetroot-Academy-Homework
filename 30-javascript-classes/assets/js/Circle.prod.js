"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var Circle=function(){function t(e){_classCallCheck(this,t),this.radius=e}return _createClass(t,[{key:"showCircle",value:function(){document.getElementById("circle").innerHTML=' \n            <div class="circle" style="width: '.concat(2*this.radius,"px;height:").concat(2*this.radius,'px;background-color:red;position: absolute; border-radius: 50%"></div>\n        ')}},{key:"showGetRadius",value:function(){document.getElementById("radius").innerText=this.getRadius}},{key:"showDiametr",value:function(){document.getElementById("diametr").innerText=this.getDiametr}},{key:"squareCircle",value:function(){return(Math.PI*Math.pow(this.radius,2)).toFixed(2)}},{key:"showSquareCircle",value:function(){document.getElementById("square_circle").innerText=this.squareCircle()}},{key:"lineWidthCircle",value:function(){return(2*Math.PI*this.radius).toFixed(2)}},{key:"showLineWidthCircle",value:function(){document.getElementById("line_width_circle").innerText=this.lineWidthCircle()}},{key:"getRadius",get:function(){return this.radius}},{key:"setRadius",set:function(e){this.radius=e}},{key:"getDiametr",get:function(){return 2*this.radius}}]),t}();