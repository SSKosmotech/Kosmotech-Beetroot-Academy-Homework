"use strict";var wrap_text=document.getElementById("edit_text"),div_edit=document.createElement("div"),some_text='Some text, you can press "ctrl + E" to edit it ';div_edit.innerText=some_text;var text_area=document.createElement("textarea");text_area.innerText=some_text,text_area.style.display="none",text_area.classList.add("get_text"),wrap_text.append(div_edit),wrap_text.append(text_area),document.addEventListener("keydown",function(e){var t;e.ctrlKey&&"KeyE"===e.code&&(e.preventDefault(),div_edit.style.display="none",text_area.style.display="block"),e.ctrlKey&&"KeyS"===e.code&&(e.preventDefault(),t=document.querySelector(".get_text").value,div_edit.textContent=t,div_edit.style.display="block",text_area.style.display="none",div_edit.appendChild(resize_point))});var my_table=document.createElement("table");my_table.setAttribute("id","myTable");var table_thead_sort=document.createElement("thead");table_thead_sort.setAttribute("id","table_head");var table_tbody_sort=document.createElement("tbody");table_tbody_sort.setAttribute("id","table_body"),my_table.append(table_thead_sort),my_table.append(table_tbody_sort),document.getElementById("div_table").append(my_table);var DATA=[{name:"Zorita Serrano",age:30,startDate:"01/06/2012"},{name:"Airi Satou",age:33,startDate:"28/11/2009"},{name:"Bob Dou",age:29,startDate:"15/10/2008"},{name:"Michelle House",age:37,startDate:"02/05/2011"},{name:"Yuri Berry",age:40,startDate:"25/06/2009"},{name:"Jennifer Chang",age:28,startDate:"14/11/2010"},{name:"Shou Itou",age:20,startDate:"14/08/2011"}];function viewHeaderTable(){document.getElementById("table_head").innerHTML='\n            <tr>\n                <th class="name">Name </th>\n                <th class="age">Age </th>\n                <th class="start_date">Start date</th>\n            </tr>\n        '}function viewBodyTable(){var t="";DATA.forEach(function(e){t+="\n        <tr>\n            <td>".concat(e.name,"</td>\n            <td>").concat(e.age,"</td>\n            <td>").concat(e.startDate,"</td>\n        </tr>\n    ")}),document.getElementById("table_body").innerHTML=t}function sortTable(e){for(var t,a,n,i,s,o=0,d=document.getElementById("myTable"),r=!0,l="asc";r;){for(r=!1,t=d.rows,a=1;a<t.length-1;a++)if(s=!1,n=t[a].getElementsByTagName("TD")[e].innerText.split("/").reverse().join("/ "),i=t[a+1].getElementsByTagName("TD")[e].innerText.split("/").reverse().join("/ "),"asc"==l){if(i<n){s=!0;break}}else if("desc"==l&&n<i){s=!0;break}s?(t[a].parentNode.insertBefore(t[a+1],t[a]),r=!0,o++):0==o&&"asc"==l&&(l="desc",r=!0)}}document.addEventListener("click",function(e){e.target.classList.contains("name")?(console.log("click name"),sortTable(0)):e.target.classList.contains("age")?(console.log("click age"),sortTable(1)):e.target.classList.contains("start_date")&&(console.log("click start_date"),sortTable(2))}),viewHeaderTable(),viewBodyTable(),div_edit.style.border="1px solid blue",div_edit.style.width="30%",div_edit.style.height="200px",div_edit.style.overflow="hidden",div_edit.style.position="relative";var resize_point=document.createElement("div");function resizeDiv(e){div_edit.style.width=e.clientX-div_edit.offsetLeft+"px",div_edit.style.height=e.clientY-div_edit.offsetTop+"px"}function stopResize(e){document.removeEventListener("mousemove",resizeDiv),document.removeEventListener("mouseup",stopResize)}div_edit.appendChild(resize_point),resize_point.style.width="10px",resize_point.style.height="10px",resize_point.style.background="red",resize_point.style.position="absolute",resize_point.style.right="0",resize_point.style.bottom="0",resize_point.style.cursor="sw-resize",resize_point.addEventListener("mousedown",function(){console.log("Init resize"),document.addEventListener("mousemove",resizeDiv),document.addEventListener("mouseup",stopResize)});