var LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL=LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL||{};LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.makeNamespace=function(ns_string){let parts=ns_string.split("."),parent=LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL,i;if(parts[0]==="LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL"){parts=parts.slice(1)}for(i=0;i<parts.length;i+=1){if(typeof parent[parts[i]]==="undefined"){parent[parts[i]]={}}parent=parent[parts[i]]}return parent};LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.makeNamespace("LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor");LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor={setHtml:function(){$("p:contains('net.monoplay.design').optionGroup").addClass("displaynone")}};if(document.readyState==="complete"){LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor.setHtml()}else{window.addEventListener("load",LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor.setHtml)}
