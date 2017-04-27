/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
Drupal.locale = { 'strings': {"Select your graduation year":"\u9009\u62e9\u4f60\u7684\u6bd5\u4e1a\u5e74\u4efd","My Likes":"\u6211\u611f\u5174\u8da3\u7684\u5b66\u6821","Province":"\u7701\/\u5dde","Pending":"\u672a\u7528","unlimited":"\u65e0\u9650"," majors":"\u9879 \u4e13\u4e1a","Select all":"\u9009\u62e9\u5168\u90e8","select all":"\u9009\u62e9\u5168\u90e8","City":"\u57ce\u5e02","Last Name":"\u59d3","First Name":"\u540d","Select your current status":"\u76ee\u524d\u5c31\u8bfb\u5e74\u7ea7","are you interested in? You can pick more than one.":"\u611f\u5174\u8da3\u5417\uff1f\u4f60\u8fd8\u53ef\u4ee5\u9009\u62e9\u66f4\u591a\u3002","Please select some interests below":"\u8bf7\u5728\u4e0b\u9762\u9009\u62e9\u4f60\u7684\u610f\u5411\u4e13\u4e1a","Show all ":"\u663e\u793a\u5168\u90e8 "," interests":"\u9879 \u4e13\u4e1a\u65b9\u5411\u53ca\u5174\u8da3","Hide":"\u9690\u85cf","Your Extracurricular and Academic Interests":"\u4f60\u7684\u5b66\u672f\u53ca\u8bfe\u5916\u6d3b\u52a8\u5174\u8da3\u9009\u9879","Your Suggested College Majors":"\u63a8\u8350\u4e13\u4e1a","My Dislikes":"\u6211\u7684\u4e0d\u5173\u6ce8\u6e05\u5355","It will no longer be found in search results":"\u641c\u7d22\u7ed3\u679c\u4e2d\u4e0d\u4f1a\u518d\u51fa\u73b0","click an interest to remove it, or \u003ca href=\"#\"\u003eclear all\u003c\/a\u003e":"\u70b9\u51fb\u4e00\u4e2a\u5174\u8da3\u79fb\u9664\uff0c\u6216\u8005 \u003ca href=\"#\"\u003e\u79fb\u9664\u6240\u6709\u003c\/a\u003e","If you'd like more information from a school, check the box next to the school name.":"\u5982\u679c\u8981\u4ece\u5b66\u6821\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u70b9\u51fb\u5b66\u6821\u540d\u79f0\u65c1\u7684\u9009\u6846","Login":"\u767b\u5f55","The email address you entered is already registered. Please log in or choose another email address":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5df2\u7ecf\u5b58\u5728\uff0c\u8bf7\u76f4\u63a5\u767b\u5f55\u6216\u8005\u8f93\u5165\u53e6\u4e00\u4e2a\u5730\u5740","Yes":"\u662f","Cancel":"\u53d6\u6d88","Add a high school":"\u589e\u52a0\u4e00\u6240\u9ad8\u4e2d","Add a school":"\u589e\u52a0\u4e00\u6240\u5b66\u6821","Add a score":"\u589e\u52a0\u4e00\u4e2a\u6210\u7ee9","Add a college":"\u589e\u52a0\u4e00\u6240\u5b66\u6821","Settings":"\u8bbe\u7f6e","Checkout":"\u4e3a\u672c\u6b21 Zinch-Talk \u4ed8\u6b3e","Review order":"\u63d0\u4ea4\u8ba2\u5355","Unspecified error":"\u672a\u77e5\u9519\u8bef","Drag to re-order":"\u62d6\u653e\u91cd\u65b0\u6392\u5e8f","Changes made in this table will not be saved until the form is submitted.":"\u5728\u6b64\u8868\u683c\u4e2d\u7684\u4fee\u6539\u53ea\u6709\u5728\u6574\u4e2a\u8868\u5355\u63d0\u4ea4\u540e\u624d\u4f1a\u88ab\u4fdd\u5b58\u3002","Select all rows in this table":"\u9009\u62e9\u6b64\u8868\u4e2d\u6240\u6709\u7684\u884c","Deselect all rows in this table":"\u53d6\u6d88\u9009\u62e9\u6b64\u8868\u4e2d\u6240\u6709\u7684\u884c","The changes to these blocks will not be saved until the \u003cem\u003eSave blocks\u003c\/em\u003e button is clicked.":"\u8fd9\u4e9b\u533a\u5757\u7684\u53d8\u66f4\u4e0d\u4f1a\u88ab\u50a8\u5b58\u8d77\u6765\uff0c\u9664\u975e\u60a8\u6309\u4e0b\u003cem\u003e\u50a8\u5b58\u533a\u5757\u003c\/em\u003e\u7684\u6309\u94ae\u3002","Your server has been successfully tested to support this feature.":"\u60a8\u7684\u670d\u52a1\u5668\u73af\u5883\u5df2\u7ecf\u901a\u8fc7\u6d4b\u8bd5\uff0c\u652f\u6301\u8fd9\u9879\u529f\u80fd\u3002","Your system configuration does not currently support this feature. The \u003ca href=\"http:\/\/drupal.org\/node\/15365\"\u003ehandbook page on Clean URLs\u003c\/a\u003e has additional troubleshooting information.":"\u4f60\u7684\u7cfb\u7edf\u8bbe\u7f6e\u76ee\u524d\u5e76\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u3002\u003ca href=\"http:\/\/drupal.org\/node\/15365\"\u003e\u5173\u4e8e\u7b80\u6d01\u7f51\u5740\u7684\u8bf4\u660e\u6587\u4ef6\u003c\/a\u003e\u6709\u66f4\u591a\u7684\u969c\u788d\u6392\u9664\u8bf4\u660e\u3002","Testing clean URLs...":"\u6d4b\u8bd5\u7b80\u6d01\u94fe\u63a5\u3002\u3002\u3002","Edit":"\u7f16\u8f91","Upload":"\u4e0a\u4f20","Only files with the following extensions are allowed: %files-allowed.":"\u53ea\u5141\u8bb8\u4ee5\u4e0b\u6269\u5c55\u540d\u6587\u4ef6\uff1a%files-allowed\u3002","Close":"\u5173\u95ed","Field":"\u5b57\u6bb5","Operation":"\u64cd\u4f5c","Value":"\u503c","Empty":"\u7a7a","Processing":"\u5904\u7406\u4e2d","- None -":"- \u65e0 -","Order":"\u8ba2\u5355","Details":"\u7ec6\u8282","or":"\u6216\u8005","Loading...":"\u52a0\u8f7d...","Deselect all":"\u53d6\u6d88\u5168\u9009","More Info":"\u67e5\u770b\u66f4\u591a","This is a graduate school that we can not calculate the result for now":"\u8be5\u6821\u4e3a\u7814\u7a76\u751f\u9662, \u76ee\u524d\u65e0\u6cd5\u8ba1\u7b97\u51fa\u76f8\u5e94\u7ed3\u679c","After shout":"\u5df2\u8868\u8fbe\u8fc7\u5174\u8da3","(The sat score is an estimate value from your class rank)":"(\u4f60\u7684SAT\u5206\u6570\u662f\u6839\u636e\u5e74\u7ea7\u6392\u540d\u4f30\u7b97\u5f97\u51fa)","not visible on profile":"\u6b64\u5185\u5bb9\u4e0d\u4f1a\u663e\u793a\u5728\u4e2a\u4eba\u4e3b\u9875\u4e0a","Please enter a correct 11-digit phone number":"\u8bf7\u6b63\u786e\u586b\u519911\u4f4d\u56fd\u5185\u624b\u673a\u53f7\u7801","Grad year":"\u6bd5\u4e1a\u5e74\u4efd"} };;

/**
 *bind event when you need, 
 *do it in custom code
 *
Drupal.behaviors.avatar_uploader = function(context) {
  var el = $('.avatar_uploader')
  if (el.size()) el.click(au.show);
}
**/

$.fn.centerMe = function() {
    this.css({
        'position': 'fixed',
        'left': '50%',
        'top': '50%'
    });
    this.css({
        'margin-left': -this.outerWidth() / 2 + 'px',
        'margin-top': -this.outerHeight() / 2 + 'px'
    });
    return this;
}
au = {
  panel:   null,
  
  Events: {
    upload: {},
    submit: {},
    cancel: {},
    presubmit: {},
    dosubmit: {}
  },
  
  //css options for panel
  _options: {},
  _uid : null,
  
  setup: function(uid, options) {
    if (!au.panel) {
      au._options = options;
      au._uid = uid;
      au.panel = $('<div class="avatar_uploader" />').css($.extend({'z-index': 999}, au._options)).appendTo($('body')).centerMe();
    }
  },
  
  show: function(uid, options) {
    if (uid) {
      au.setup(uid, options);
    }
    
    if (!au.panel.html()) {
      $.post(Drupal.settings.basePath + 'au/panel', {uid: au._uid}, function(res) {
        au.panel.html(res).centerMe();
      });
    }
    
    au.panel.centerMe().show('fast');
  },
  
  close: function() {
    au.panel.hide('fast');
  },
  
  trigger: function(name, param) {
    if (name == 'dosubmit' || name == 'cancel') {
      //close panel
      au.close();
    }
    
    //trigger event
    jQuery.each(au.Events[name], function(){
      this(param);
    });
  }
};
;
// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
document.createElement("canvas").getContext||(function(){var s=Math,j=s.round,F=s.sin,G=s.cos,V=s.abs,W=s.sqrt,k=10,v=k/2;function X(){return this.context_||(this.context_=new H(this))}var L=Array.prototype.slice;function Y(b,a){var c=L.call(arguments,2);return function(){return b.apply(a,c.concat(L.call(arguments)))}}var M={init:function(b){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var a=b||document;a.createElement("canvas");a.attachEvent("onreadystatechange",Y(this.init_,this,a))}},init_:function(b){b.namespaces.g_vml_||
b.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");b.namespaces.g_o_||b.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!b.styleSheets.ex_canvas_){var a=b.createStyleSheet();a.owningElement.id="ex_canvas_";a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var c=b.getElementsByTagName("canvas"),d=0;for(;d<c.length;d++)this.initElement(c[d])},
initElement:function(b){if(!b.getContext){b.getContext=X;b.innerHTML="";b.attachEvent("onpropertychange",Z);b.attachEvent("onresize",$);var a=b.attributes;if(a.width&&a.width.specified)b.style.width=a.width.nodeValue+"px";else b.width=b.clientWidth;if(a.height&&a.height.specified)b.style.height=a.height.nodeValue+"px";else b.height=b.clientHeight}return b}};function Z(b){var a=b.srcElement;switch(b.propertyName){case "width":a.style.width=a.attributes.width.nodeValue+"px";a.getContext().clearRect();
break;case "height":a.style.height=a.attributes.height.nodeValue+"px";a.getContext().clearRect();break}}function $(b){var a=b.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}M.init();var N=[],B=0;for(;B<16;B++){var C=0;for(;C<16;C++)N[B*16+C]=B.toString(16)+C.toString(16)}function I(){return[[1,0,0],[0,1,0],[0,0,1]]}function y(b,a){var c=I(),d=0;for(;d<3;d++){var f=0;for(;f<3;f++){var h=0,g=0;for(;g<3;g++)h+=b[d][g]*a[g][f];c[d][f]=
h}}return c}function O(b,a){a.fillStyle=b.fillStyle;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.lineWidth=b.lineWidth;a.miterLimit=b.miterLimit;a.shadowBlur=b.shadowBlur;a.shadowColor=b.shadowColor;a.shadowOffsetX=b.shadowOffsetX;a.shadowOffsetY=b.shadowOffsetY;a.strokeStyle=b.strokeStyle;a.globalAlpha=b.globalAlpha;a.arcScaleX_=b.arcScaleX_;a.arcScaleY_=b.arcScaleY_;a.lineScale_=b.lineScale_}function P(b){var a,c=1;b=String(b);if(b.substring(0,3)=="rgb"){var d=b.indexOf("(",3),f=b.indexOf(")",d+
1),h=b.substring(d+1,f).split(",");a="#";var g=0;for(;g<3;g++)a+=N[Number(h[g])];if(h.length==4&&b.substr(3,1)=="a")c=h[3]}else a=b;return{color:a,alpha:c}}function aa(b){switch(b){case "butt":return"flat";case "round":return"round";case "square":default:return"square"}}function H(b){this.m_=I();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=k*1;this.globalAlpha=1;this.canvas=b;
var a=b.ownerDocument.createElement("div");a.style.width=b.clientWidth+"px";a.style.height=b.clientHeight+"px";a.style.overflow="hidden";a.style.position="absolute";b.appendChild(a);this.element_=a;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}var i=H.prototype;i.clearRect=function(){this.element_.innerHTML=""};i.beginPath=function(){this.currentPath_=[]};i.moveTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};
i.lineTo=function(b,a){var c=this.getCoords_(b,a);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};i.bezierCurveTo=function(b,a,c,d,f,h){var g=this.getCoords_(f,h),l=this.getCoords_(b,a),e=this.getCoords_(c,d);Q(this,l,e,g)};function Q(b,a,c,d){b.currentPath_.push({type:"bezierCurveTo",cp1x:a.x,cp1y:a.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});b.currentX_=d.x;b.currentY_=d.y}i.quadraticCurveTo=function(b,a,c,d){var f=this.getCoords_(b,a),h=this.getCoords_(c,d),g={x:this.currentX_+
0.6666666666666666*(f.x-this.currentX_),y:this.currentY_+0.6666666666666666*(f.y-this.currentY_)};Q(this,g,{x:g.x+(h.x-this.currentX_)/3,y:g.y+(h.y-this.currentY_)/3},h)};i.arc=function(b,a,c,d,f,h){c*=k;var g=h?"at":"wa",l=b+G(d)*c-v,e=a+F(d)*c-v,m=b+G(f)*c-v,r=a+F(f)*c-v;if(l==m&&!h)l+=0.125;var n=this.getCoords_(b,a),o=this.getCoords_(l,e),q=this.getCoords_(m,r);this.currentPath_.push({type:g,x:n.x,y:n.y,radius:c,xStart:o.x,yStart:o.y,xEnd:q.x,yEnd:q.y})};i.rect=function(b,a,c,d){this.moveTo(b,
a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath()};i.strokeRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.stroke();this.currentPath_=f};i.fillRect=function(b,a,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(b,a);this.lineTo(b+c,a);this.lineTo(b+c,a+d);this.lineTo(b,a+d);this.closePath();this.fill();this.currentPath_=f};i.createLinearGradient=function(b,
a,c,d){var f=new D("gradient");f.x0_=b;f.y0_=a;f.x1_=c;f.y1_=d;return f};i.createRadialGradient=function(b,a,c,d,f,h){var g=new D("gradientradial");g.x0_=b;g.y0_=a;g.r0_=c;g.x1_=d;g.y1_=f;g.r1_=h;return g};i.drawImage=function(b){var a,c,d,f,h,g,l,e,m=b.runtimeStyle.width,r=b.runtimeStyle.height;b.runtimeStyle.width="auto";b.runtimeStyle.height="auto";var n=b.width,o=b.height;b.runtimeStyle.width=m;b.runtimeStyle.height=r;if(arguments.length==3){a=arguments[1];c=arguments[2];h=g=0;l=d=n;e=f=o}else if(arguments.length==
5){a=arguments[1];c=arguments[2];d=arguments[3];f=arguments[4];h=g=0;l=n;e=o}else if(arguments.length==9){h=arguments[1];g=arguments[2];l=arguments[3];e=arguments[4];a=arguments[5];c=arguments[6];d=arguments[7];f=arguments[8]}else throw Error("Invalid number of arguments");var q=this.getCoords_(a,c),t=[];t.push(" <g_vml_:group",' coordsize="',k*10,",",k*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var E=[];E.push("M11=",
this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",j(q.x/k),",","Dy=",j(q.y/k),"");var p=q,z=this.getCoords_(a+d,c),w=this.getCoords_(a,c+f),x=this.getCoords_(a+d,c+f);p.x=s.max(p.x,z.x,w.x,x.x);p.y=s.max(p.y,z.y,w.y,x.y);t.push("padding:0 ",j(p.x/k),"px ",j(p.y/k),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",E.join(""),", sizingmethod='clip');")}else t.push("top:",j(q.y/k),"px;left:",j(q.x/k),"px;");t.push(' ">','<g_vml_:image src="',b.src,
'"',' style="width:',k*d,"px;"," height:",k*f,'px;"',' cropleft="',h/n,'"',' croptop="',g/o,'"',' cropright="',(n-h-l)/n,'"',' cropbottom="',(o-g-e)/o,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",t.join(""))};i.stroke=function(b){var a=[],c=P(b?this.fillStyle:this.strokeStyle),d=c.color,f=c.alpha*this.globalAlpha;a.push("<g_vml_:shape",' filled="',!!b,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',k*10," ",k*10,'"',' stroked="',
!b,'"',' path="');var h={x:null,y:null},g={x:null,y:null},l=0;for(;l<this.currentPath_.length;l++){var e=this.currentPath_[l];switch(e.type){case "moveTo":a.push(" m ",j(e.x),",",j(e.y));break;case "lineTo":a.push(" l ",j(e.x),",",j(e.y));break;case "close":a.push(" x ");e=null;break;case "bezierCurveTo":a.push(" c ",j(e.cp1x),",",j(e.cp1y),",",j(e.cp2x),",",j(e.cp2y),",",j(e.x),",",j(e.y));break;case "at":case "wa":a.push(" ",e.type," ",j(e.x-this.arcScaleX_*e.radius),",",j(e.y-this.arcScaleY_*e.radius),
" ",j(e.x+this.arcScaleX_*e.radius),",",j(e.y+this.arcScaleY_*e.radius)," ",j(e.xStart),",",j(e.yStart)," ",j(e.xEnd),",",j(e.yEnd));break}if(e){if(h.x==null||e.x<h.x)h.x=e.x;if(g.x==null||e.x>g.x)g.x=e.x;if(h.y==null||e.y<h.y)h.y=e.y;if(g.y==null||e.y>g.y)g.y=e.y}}a.push(' ">');if(b)if(typeof this.fillStyle=="object"){var m=this.fillStyle,r=0,n={x:0,y:0},o=0,q=1;if(m.type_=="gradient"){var t=m.x1_/this.arcScaleX_,E=m.y1_/this.arcScaleY_,p=this.getCoords_(m.x0_/this.arcScaleX_,m.y0_/this.arcScaleY_),
z=this.getCoords_(t,E);r=Math.atan2(z.x-p.x,z.y-p.y)*180/Math.PI;if(r<0)r+=360;if(r<1.0E-6)r=0}else{var p=this.getCoords_(m.x0_,m.y0_),w=g.x-h.x,x=g.y-h.y;n={x:(p.x-h.x)/w,y:(p.y-h.y)/x};w/=this.arcScaleX_*k;x/=this.arcScaleY_*k;var R=s.max(w,x);o=2*m.r0_/R;q=2*m.r1_/R-o}var u=m.colors_;u.sort(function(ba,ca){return ba.offset-ca.offset});var J=u.length,da=u[0].color,ea=u[J-1].color,fa=u[0].alpha*this.globalAlpha,ga=u[J-1].alpha*this.globalAlpha,S=[],l=0;for(;l<J;l++){var T=u[l];S.push(T.offset*q+
o+" "+T.color)}a.push('<g_vml_:fill type="',m.type_,'"',' method="none" focus="100%"',' color="',da,'"',' color2="',ea,'"',' colors="',S.join(","),'"',' opacity="',ga,'"',' g_o_:opacity2="',fa,'"',' angle="',r,'"',' focusposition="',n.x,",",n.y,'" />')}else a.push('<g_vml_:fill color="',d,'" opacity="',f,'" />');else{var K=this.lineScale_*this.lineWidth;if(K<1)f*=K;a.push("<g_vml_:stroke",' opacity="',f,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',aa(this.lineCap),
'"',' weight="',K,'px"',' color="',d,'" />')}a.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",a.join(""))};i.fill=function(){this.stroke(true)};i.closePath=function(){this.currentPath_.push({type:"close"})};i.getCoords_=function(b,a){var c=this.m_;return{x:k*(b*c[0][0]+a*c[1][0]+c[2][0])-v,y:k*(b*c[0][1]+a*c[1][1]+c[2][1])-v}};i.save=function(){var b={};O(this,b);this.aStack_.push(b);this.mStack_.push(this.m_);this.m_=y(I(),this.m_)};i.restore=function(){O(this.aStack_.pop(),
this);this.m_=this.mStack_.pop()};function ha(b){var a=0;for(;a<3;a++){var c=0;for(;c<2;c++)if(!isFinite(b[a][c])||isNaN(b[a][c]))return false}return true}function A(b,a,c){if(!!ha(a)){b.m_=a;if(c)b.lineScale_=W(V(a[0][0]*a[1][1]-a[0][1]*a[1][0]))}}i.translate=function(b,a){A(this,y([[1,0,0],[0,1,0],[b,a,1]],this.m_),false)};i.rotate=function(b){var a=G(b),c=F(b);A(this,y([[a,c,0],[-c,a,0],[0,0,1]],this.m_),false)};i.scale=function(b,a){this.arcScaleX_*=b;this.arcScaleY_*=a;A(this,y([[b,0,0],[0,a,
0],[0,0,1]],this.m_),true)};i.transform=function(b,a,c,d,f,h){A(this,y([[b,a,0],[c,d,0],[f,h,1]],this.m_),true)};i.setTransform=function(b,a,c,d,f,h){A(this,[[b,a,0],[c,d,0],[f,h,1]],true)};i.clip=function(){};i.arcTo=function(){};i.createPattern=function(){return new U};function D(b){this.type_=b;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}D.prototype.addColorStop=function(b,a){a=P(a);this.colors_.push({offset:b,color:a.color,alpha:a.alpha})};function U(){}G_vmlCanvasManager=
M;CanvasRenderingContext2D=H;CanvasGradient=D;CanvasPattern=U})();
;
/*
 * @name BeautyTips
 * @desc a tooltips/baloon-help plugin for jQuery
 *
 * @author Jeff Robbins - Lullabot - http://www.lullabot.com
 * @version 0.9.5 release candidate 1  (5/20/2009)
 */
jQuery.bt={version:'0.9.5-rc1'};;(function($){jQuery.fn.bt=function(content,options){if(typeof content!='string'){var contentSelect=true;options=content;content=false;}
else{var contentSelect=false;}
if(jQuery.fn.hoverIntent&&jQuery.bt.defaults.trigger=='hover'){jQuery.bt.defaults.trigger='hoverIntent';}
return this.each(function(index){var opts=jQuery.extend(false,jQuery.bt.defaults,jQuery.bt.options,options);opts.spikeLength=numb(opts.spikeLength);opts.spikeGirth=numb(opts.spikeGirth);opts.overlap=numb(opts.overlap);var ajaxTimeout=false;if(opts.killTitle){$(this).find('[title]').andSelf().each(function(){if(!$(this).attr('bt-xTitle')){$(this).attr('bt-xTitle',$(this).attr('title')).attr('title','');}});}
if(typeof opts.trigger=='string'){opts.trigger=[opts.trigger];}
if(opts.trigger[0]=='hoverIntent'){var hoverOpts=jQuery.extend(opts.hoverIntentOpts,{over:function(){this.btOn();},out:function(){this.btOff();}});$(this).hoverIntent(hoverOpts);}
else if(opts.trigger[0]=='hover'){$(this).hover(function(){this.btOn();},function(){this.btOff();});}
else if(opts.trigger[0]=='now'){if($(this).hasClass('bt-active')){this.btOff();}
else{this.btOn();}}
else if(opts.trigger[0]=='none'){}
else if(opts.trigger.length>1&&opts.trigger[0]!=opts.trigger[1]){$(this).bind(opts.trigger[0],function(){this.btOn();}).bind(opts.trigger[1],function(){this.btOff();});}
else{$(this).bind(opts.trigger[0],function(){if($(this).hasClass('bt-active')){this.btOff();}
else{this.btOn();}});}
this.btOn=function(){if(typeof $(this).data('bt-box')=='object'){this.btOff();}
opts.preBuild.apply(this);$(jQuery.bt.vars.closeWhenOpenStack).btOff();$(this).addClass('bt-active '+opts.activeClass);if(contentSelect&&opts.ajaxPath==null){if(opts.killTitle){$(this).attr('title',$(this).attr('bt-xTitle'));}
content=$.isFunction(opts.contentSelector)?opts.contentSelector.apply(this):eval(opts.contentSelector);if(opts.killTitle){$(this).attr('title','');}}
if(opts.ajaxPath!=null&&content==false){if(typeof opts.ajaxPath=='object'){var url=eval(opts.ajaxPath[0]);url+=opts.ajaxPath[1]?' '+opts.ajaxPath[1]:'';}
else{var url=opts.ajaxPath;}
var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var cacheData=opts.ajaxCache?$(document.body).data('btCache-'+url.replace(/\./g,'')):null;if(typeof cacheData=='string'){content=selector?$("<div/>").append(cacheData.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):cacheData;}
else{var target=this;var ajaxOpts=jQuery.extend(false,{type:opts.ajaxType,data:opts.ajaxData,cache:opts.ajaxCache,url:url,complete:function(XMLHttpRequest,textStatus){if(textStatus=='success'||textStatus=='notmodified'){if(opts.ajaxCache){$(document.body).data('btCache-'+url.replace(/\./g,''),XMLHttpRequest.responseText);}
ajaxTimeout=false;content=selector?$("<div/>").append(XMLHttpRequest.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):XMLHttpRequest.responseText;}
else{if(textStatus=='timeout'){ajaxTimeout=true;}
content=opts.ajaxError.replace(/%error/g,XMLHttpRequest.statusText);}
if($(target).hasClass('bt-active')){target.btOn();}}},opts.ajaxOpts);jQuery.ajax(ajaxOpts);content=opts.ajaxLoading;}}
var shadowMarginX=0;var shadowMarginY=0;var shadowShiftX=0;var shadowShiftY=0;if(opts.shadow&&!shadowSupport()){opts.shadow=false;jQuery.extend(opts,opts.noShadowOpts);}
if(opts.shadow){if(opts.shadowBlur>Math.abs(opts.shadowOffsetX)){shadowMarginX=opts.shadowBlur*2;}
else{shadowMarginX=opts.shadowBlur+Math.abs(opts.shadowOffsetX);}
shadowShiftX=(opts.shadowBlur-opts.shadowOffsetX)>0?opts.shadowBlur-opts.shadowOffsetX:0;if(opts.shadowBlur>Math.abs(opts.shadowOffsetY)){shadowMarginY=opts.shadowBlur*2;}
else{shadowMarginY=opts.shadowBlur+Math.abs(opts.shadowOffsetY);}
shadowShiftY=(opts.shadowBlur-opts.shadowOffsetY)>0?opts.shadowBlur-opts.shadowOffsetY:0;}
if(opts.offsetParent){var offsetParent=$(opts.offsetParent);var offsetParentPos=offsetParent.offset();var pos=$(this).offset();var top=numb(pos.top)-numb(offsetParentPos.top)+numb($(this).css('margin-top'))-shadowShiftY;var left=numb(pos.left)-numb(offsetParentPos.left)+numb($(this).css('margin-left'))-shadowShiftX;}
else{var offsetParent=($(this).css('position')=='absolute')?$(this).parents().eq(0).offsetParent():$(this).offsetParent();var pos=$(this).btPosition();var top=numb(pos.top)+numb($(this).css('margin-top'))-shadowShiftY;var left=numb(pos.left)+numb($(this).css('margin-left'))-shadowShiftX;}
var width=$(this).btOuterWidth();var height=$(this).outerHeight();if(typeof content=='object'){if(content==null){return;}
var original=content;var clone=$(original).clone(true).show();var origClones=$(original).data('bt-clones')||[];origClones.push(clone);$(original).data('bt-clones',origClones);$(clone).data('bt-orig',original);$(this).data('bt-content-orig',{original:original,clone:clone});content=clone;}
if(typeof content=='null'||content==''){return;}
var $text=$('<div class="bt-content"></div>').append(content).css({padding:opts.padding,position:'absolute',width:(opts.shrinkToFit?'auto':opts.width),zIndex:opts.textzIndex,left:shadowShiftX,top:shadowShiftY}).css(opts.cssStyles);var $box=$('<div class="bt-wrapper"></div>').append($text).addClass(opts.cssClass).css({position:'absolute',width:opts.width,zIndex:opts.wrapperzIndex,visibility:'hidden'}).appendTo(offsetParent);if(jQuery.fn.bgiframe){$text.bgiframe();$box.bgiframe();}
$(this).data('bt-box',$box);var scrollTop=numb($(document).scrollTop());var scrollLeft=numb($(document).scrollLeft());var docWidth=numb($(window).width());var docHeight=numb($(window).height());var winRight=scrollLeft+docWidth;var winBottom=scrollTop+docHeight;var space=new Object();var thisOffset=$(this).offset();space.top=thisOffset.top-scrollTop;space.bottom=docHeight-((thisOffset+height)-scrollTop);space.left=thisOffset.left-scrollLeft;space.right=docWidth-((thisOffset.left+width)-scrollLeft);var textOutHeight=numb($text.outerHeight());var textOutWidth=numb($text.btOuterWidth());if(opts.positions.constructor==String){opts.positions=opts.positions.replace(/ /,'').split(',');}
if(opts.positions[0]=='most'){var position='top';for(var pig in space){position=space[pig]>space[position]?pig:position;}}
else{for(var x in opts.positions){var position=opts.positions[x];if((position=='left'||position=='right')&&space[position]>textOutWidth+opts.spikeLength){break;}
else if((position=='top'||position=='bottom')&&space[position]>textOutHeight+opts.spikeLength){break;}}}
var horiz=left+((width-textOutWidth)*.5);var vert=top+((height-textOutHeight)*.5);var points=new Array();var textTop,textLeft,textRight,textBottom,textTopSpace,textBottomSpace,textLeftSpace,textRightSpace,crossPoint,textCenter,spikePoint;switch(position){case'top':$text.css('margin-bottom',opts.spikeLength+'px');$box.css({top:(top-$text.outerHeight(true))+opts.overlap,left:horiz});textRightSpace=(winRight-opts.windowMargin)-($text.offset().left+$text.btOuterWidth(true));var xShift=shadowShiftX;if(textRightSpace<0){$box.css('left',(numb($box.css('left'))+textRightSpace)+'px');xShift-=textRightSpace;}
textLeftSpace=($text.offset().left+numb($text.css('margin-left')))-(scrollLeft+opts.windowMargin);if(textLeftSpace<0){$box.css('left',(numb($box.css('left'))-textLeftSpace)+'px');xShift+=textLeftSpace;}
textTop=$text.btPosition().top+numb($text.css('margin-top'));textLeft=$text.btPosition().left+numb($text.css('margin-left'));textRight=textLeft+$text.btOuterWidth();textBottom=textTop+$text.outerHeight();textCenter={x:textLeft+($text.btOuterWidth()*opts.centerPointX),y:textTop+($text.outerHeight()*opts.centerPointY)};points[points.length]=spikePoint={y:textBottom+opts.spikeLength,x:((textRight-textLeft)*.5)+xShift,type:'spike'};crossPoint=findIntersectX(spikePoint.x,spikePoint.y,textCenter.x,textCenter.y,textBottom);crossPoint.x=crossPoint.x<textLeft+opts.spikeGirth/2+opts.cornerRadius?textLeft+opts.spikeGirth/2+opts.cornerRadius:crossPoint.x;crossPoint.x=crossPoint.x>(textRight-opts.spikeGirth/2)-opts.cornerRadius?(textRight-opts.spikeGirth/2)-opts.CornerRadius:crossPoint.x;points[points.length]={x:crossPoint.x-(opts.spikeGirth/2),y:textBottom,type:'join'};points[points.length]={x:textLeft,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:textTop,type:'corner'};points[points.length]={x:textRight,y:textTop,type:'corner'};points[points.length]={x:textRight,y:textBottom,type:'corner'};points[points.length]={x:crossPoint.x+(opts.spikeGirth/2),y:textBottom,type:'join'};points[points.length]=spikePoint;break;case'left':$text.css('margin-right',opts.spikeLength+'px');$box.css({top:vert+'px',left:((left-$text.btOuterWidth(true))+opts.overlap)+'px'});textBottomSpace=(winBottom-opts.windowMargin)-($text.offset().top+$text.outerHeight(true));var yShift=shadowShiftY;if(textBottomSpace<0){$box.css('top',(numb($box.css('top'))+textBottomSpace)+'px');yShift-=textBottomSpace;}
textTopSpace=($text.offset().top+numb($text.css('margin-top')))-(scrollTop+opts.windowMargin);if(textTopSpace<0){$box.css('top',(numb($box.css('top'))-textTopSpace)+'px');yShift+=textTopSpace;}
textTop=$text.btPosition().top+numb($text.css('margin-top'));textLeft=$text.btPosition().left+numb($text.css('margin-left'));textRight=textLeft+$text.btOuterWidth();textBottom=textTop+$text.outerHeight();textCenter={x:textLeft+($text.btOuterWidth()*opts.centerPointX),y:textTop+($text.outerHeight()*opts.centerPointY)};points[points.length]=spikePoint={x:textRight+opts.spikeLength,y:((textBottom-textTop)*.5)+yShift,type:'spike'};crossPoint=findIntersectY(spikePoint.x,spikePoint.y,textCenter.x,textCenter.y,textRight);crossPoint.y=crossPoint.y<textTop+opts.spikeGirth/2+opts.cornerRadius?textTop+opts.spikeGirth/2+opts.cornerRadius:crossPoint.y;crossPoint.y=crossPoint.y>(textBottom-opts.spikeGirth/2)-opts.cornerRadius?(textBottom-opts.spikeGirth/2)-opts.cornerRadius:crossPoint.y;points[points.length]={x:textRight,y:crossPoint.y+opts.spikeGirth/2,type:'join'};points[points.length]={x:textRight,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:textTop,type:'corner'};points[points.length]={x:textRight,y:textTop,type:'corner'};points[points.length]={x:textRight,y:crossPoint.y-opts.spikeGirth/2,type:'join'};points[points.length]=spikePoint;break;case'bottom':$text.css('margin-top',opts.spikeLength+'px');$box.css({top:(top+height)-opts.overlap,left:horiz});textRightSpace=(winRight-opts.windowMargin)-($text.offset().left+$text.btOuterWidth(true));var xShift=shadowShiftX;if(textRightSpace<0){$box.css('left',(numb($box.css('left'))+textRightSpace)+'px');xShift-=textRightSpace;}
textLeftSpace=($text.offset().left+numb($text.css('margin-left')))-(scrollLeft+opts.windowMargin);if(textLeftSpace<0){$box.css('left',(numb($box.css('left'))-textLeftSpace)+'px');xShift+=textLeftSpace;}
textTop=$text.btPosition().top+numb($text.css('margin-top'));textLeft=$text.btPosition().left+numb($text.css('margin-left'));textRight=textLeft+$text.btOuterWidth();textBottom=textTop+$text.outerHeight();textCenter={x:textLeft+($text.btOuterWidth()*opts.centerPointX),y:textTop+($text.outerHeight()*opts.centerPointY)};points[points.length]=spikePoint={x:((textRight-textLeft)*.5)+xShift,y:shadowShiftY,type:'spike'};crossPoint=findIntersectX(spikePoint.x,spikePoint.y,textCenter.x,textCenter.y,textTop);crossPoint.x=crossPoint.x<textLeft+opts.spikeGirth/2+opts.cornerRadius?textLeft+opts.spikeGirth/2+opts.cornerRadius:crossPoint.x;crossPoint.x=crossPoint.x>(textRight-opts.spikeGirth/2)-opts.cornerRadius?(textRight-opts.spikeGirth/2)-opts.cornerRadius:crossPoint.x;points[points.length]={x:crossPoint.x+opts.spikeGirth/2,y:textTop,type:'join'};points[points.length]={x:textRight,y:textTop,type:'corner'};points[points.length]={x:textRight,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:textTop,type:'corner'};points[points.length]={x:crossPoint.x-(opts.spikeGirth/2),y:textTop,type:'join'};points[points.length]=spikePoint;break;case'right':$text.css('margin-left',(opts.spikeLength+'px'));$box.css({top:vert+'px',left:((left+width)-opts.overlap)+'px'});textBottomSpace=(winBottom-opts.windowMargin)-($text.offset().top+$text.outerHeight(true));var yShift=shadowShiftY;if(textBottomSpace<0){$box.css('top',(numb($box.css('top'))+textBottomSpace)+'px');yShift-=textBottomSpace;}
textTopSpace=($text.offset().top+numb($text.css('margin-top')))-(scrollTop+opts.windowMargin);if(textTopSpace<0){$box.css('top',(numb($box.css('top'))-textTopSpace)+'px');yShift+=textTopSpace;}
textTop=$text.btPosition().top+numb($text.css('margin-top'));textLeft=$text.btPosition().left+numb($text.css('margin-left'));textRight=textLeft+$text.btOuterWidth();textBottom=textTop+$text.outerHeight();textCenter={x:textLeft+($text.btOuterWidth()*opts.centerPointX),y:textTop+($text.outerHeight()*opts.centerPointY)};points[points.length]=spikePoint={x:shadowShiftX,y:((textBottom-textTop)*.5)+yShift,type:'spike'};crossPoint=findIntersectY(spikePoint.x,spikePoint.y,textCenter.x,textCenter.y,textLeft);crossPoint.y=crossPoint.y<textTop+opts.spikeGirth/2+opts.cornerRadius?textTop+opts.spikeGirth/2+opts.cornerRadius:crossPoint.y;crossPoint.y=crossPoint.y>(textBottom-opts.spikeGirth/2)-opts.cornerRadius?(textBottom-opts.spikeGirth/2)-opts.cornerRadius:crossPoint.y;points[points.length]={x:textLeft,y:crossPoint.y-opts.spikeGirth/2,type:'join'};points[points.length]={x:textLeft,y:textTop,type:'corner'};points[points.length]={x:textRight,y:textTop,type:'corner'};points[points.length]={x:textRight,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:textBottom,type:'corner'};points[points.length]={x:textLeft,y:crossPoint.y+opts.spikeGirth/2,type:'join'};points[points.length]=spikePoint;break;}
var canvas=document.createElement('canvas');$(canvas).attr('width',(numb($text.btOuterWidth(true))+opts.strokeWidth*2+shadowMarginX)).attr('height',(numb($text.outerHeight(true))+opts.strokeWidth*2+shadowMarginY)).appendTo($box).css({position:'absolute',zIndex:opts.boxzIndex});if(typeof G_vmlCanvasManager!='undefined'){canvas=G_vmlCanvasManager.initElement(canvas);}
if(opts.cornerRadius>0){var newPoints=new Array();var newPoint;for(var i=0;i<points.length;i++){if(points[i].type=='corner'){newPoint=betweenPoint(points[i],points[(i-1)%points.length],opts.cornerRadius);newPoint.type='arcStart';newPoints[newPoints.length]=newPoint;newPoints[newPoints.length]=points[i];newPoint=betweenPoint(points[i],points[(i+1)%points.length],opts.cornerRadius);newPoint.type='arcEnd';newPoints[newPoints.length]=newPoint;}
else{newPoints[newPoints.length]=points[i];}}
points=newPoints;}
var ctx=canvas.getContext("2d");if(opts.shadow&&opts.shadowOverlap!==true){var shadowOverlap=numb(opts.shadowOverlap);switch(position){case'top':if(opts.shadowOffsetX+opts.shadowBlur-shadowOverlap>0){$box.css('top',(numb($box.css('top'))-(opts.shadowOffsetX+opts.shadowBlur-shadowOverlap)));}
break;case'right':if(shadowShiftX-shadowOverlap>0){$box.css('left',(numb($box.css('left'))+shadowShiftX-shadowOverlap));}
break;case'bottom':if(shadowShiftY-shadowOverlap>0){$box.css('top',(numb($box.css('top'))+shadowShiftY-shadowOverlap));}
break;case'left':if(opts.shadowOffsetY+opts.shadowBlur-shadowOverlap>0){$box.css('left',(numb($box.css('left'))-(opts.shadowOffsetY+opts.shadowBlur-shadowOverlap)));}
break;}}
drawIt.apply(ctx,[points],opts.strokeWidth);ctx.fillStyle=opts.fill;if(opts.shadow){ctx.shadowOffsetX=opts.shadowOffsetX;ctx.shadowOffsetY=opts.shadowOffsetY;ctx.shadowBlur=opts.shadowBlur;ctx.shadowColor=opts.shadowColor;}
ctx.closePath();ctx.fill();if(opts.strokeWidth>0){ctx.shadowColor='rgba(0, 0, 0, 0)';ctx.lineWidth=opts.strokeWidth;ctx.strokeStyle=opts.strokeStyle;ctx.beginPath();drawIt.apply(ctx,[points],opts.strokeWidth);ctx.closePath();ctx.stroke();}
opts.preShow.apply(this,[$box[0]]);$box.css({display:'none',visibility:'visible'});opts.showTip.apply(this,[$box[0]]);if(opts.overlay){var overlay=$('<div class="bt-overlay"></div>').css({position:'absolute',backgroundColor:'blue',top:top,left:left,width:width,height:height,opacity:'.2'}).appendTo(offsetParent);$(this).data('overlay',overlay);}
if((opts.ajaxPath!=null&&opts.ajaxCache==false)||ajaxTimeout){content=false;}
if(opts.clickAnywhereToClose){jQuery.bt.vars.clickAnywhereStack.push(this);$(document).click(jQuery.bt.docClick);}
if(opts.closeWhenOthersOpen){jQuery.bt.vars.closeWhenOpenStack.push(this);}
opts.postShow.apply(this,[$box[0]]);};this.btOff=function(){var box=$(this).data('bt-box');if(typeof box=='undefined'){return;}
opts.preHide.apply(this,[box]);var i=this;i.btCleanup=function(){var box=$(i).data('bt-box');var contentOrig=$(i).data('bt-content-orig');var overlay=$(i).data('bt-overlay');if(typeof box=='object'){$(box).remove();$(i).removeData('bt-box');}
if(typeof contentOrig=='object'){var clones=$(contentOrig.original).data('bt-clones');$(contentOrig).data('bt-clones',arrayRemove(clones,contentOrig.clone));}
if(typeof overlay=='object'){$(overlay).remove();$(i).removeData('bt-overlay');}
jQuery.bt.vars.clickAnywhereStack=arrayRemove(jQuery.bt.vars.clickAnywhereStack,i);jQuery.bt.vars.closeWhenOpenStack=arrayRemove(jQuery.bt.vars.closeWhenOpenStack,i);$(i).removeClass('bt-active '+opts.activeClass);opts.postHide.apply(i);}
opts.hideTip.apply(this,[box,i.btCleanup]);};var refresh=this.btRefresh=function(){this.btOff();this.btOn();};});function drawIt(points,strokeWidth){this.moveTo(points[0].x,points[0].y);for(i=1;i<points.length;i++){if(points[i-1].type=='arcStart'){this.quadraticCurveTo(round5(points[i].x,strokeWidth),round5(points[i].y,strokeWidth),round5(points[(i+1)%points.length].x,strokeWidth),round5(points[(i+1)%points.length].y,strokeWidth));i++;}
else{this.lineTo(round5(points[i].x,strokeWidth),round5(points[i].y,strokeWidth));}}};function round5(num,strokeWidth){var ret;strokeWidth=numb(strokeWidth);if(strokeWidth%2){ret=num;}
else{ret=Math.round(num-.5)+.5;}
return ret;};function numb(num){return parseInt(num)||0;};function arrayRemove(arr,elem){var x,newArr=new Array();for(x in arr){if(arr[x]!=elem){newArr.push(arr[x]);}}
return newArr;};function canvasSupport(){var canvas_compatible=false;try{canvas_compatible=!!(document.createElement('canvas').getContext('2d'));}catch(e){canvas_compatible=!!(document.createElement('canvas').getContext);}
return canvas_compatible;}
function shadowSupport(){try{var userAgent=navigator.userAgent.toLowerCase();if(/webkit/.test(userAgent)){return true;}
else if(/gecko|mozilla/.test(userAgent)&&parseFloat(userAgent.match(/firefox\/(\d+(?:\.\d+)+)/)[1])>=3.1){return true;}}
catch(err){}
return false;}
function betweenPoint(point1,point2,dist){var y,x;if(point1.x==point2.x){y=point1.y<point2.y?point1.y+dist:point1.y-dist;return{x:point1.x,y:y};}
else if(point1.y==point2.y){x=point1.x<point2.x?point1.x+dist:point1.x-dist;return{x:x,y:point1.y};}};function centerPoint(arcStart,corner,arcEnd){var x=corner.x==arcStart.x?arcEnd.x:arcStart.x;var y=corner.y==arcStart.y?arcEnd.y:arcStart.y;var startAngle,endAngle;if(arcStart.x<arcEnd.x){if(arcStart.y>arcEnd.y){startAngle=(Math.PI/180)*180;endAngle=(Math.PI/180)*90;}
else{startAngle=(Math.PI/180)*90;endAngle=0;}}
else{if(arcStart.y>arcEnd.y){startAngle=(Math.PI/180)*270;endAngle=(Math.PI/180)*180;}
else{startAngle=0;endAngle=(Math.PI/180)*270;}}
return{x:x,y:y,type:'center',startAngle:startAngle,endAngle:endAngle};};function findIntersect(r1x1,r1y1,r1x2,r1y2,r2x1,r2y1,r2x2,r2y2){if(r2x1==r2x2){return findIntersectY(r1x1,r1y1,r1x2,r1y2,r2x1);}
if(r2y1==r2y2){return findIntersectX(r1x1,r1y1,r1x2,r1y2,r2y1);}
var r1m=(r1y1-r1y2)/(r1x1-r1x2);var r1b=r1y1-(r1m*r1x1);var r2m=(r2y1-r2y2)/(r2x1-r2x2);var r2b=r2y1-(r2m*r2x1);var x=(r2b-r1b)/(r1m-r2m);var y=r1m*x+r1b;return{x:x,y:y};};function findIntersectY(r1x1,r1y1,r1x2,r1y2,x){if(r1y1==r1y2){return{x:x,y:r1y1};}
var r1m=(r1y1-r1y2)/(r1x1-r1x2);var r1b=r1y1-(r1m*r1x1);var y=r1m*x+r1b;return{x:x,y:y};};function findIntersectX(r1x1,r1y1,r1x2,r1y2,y){if(r1x1==r1x2){return{x:r1x1,y:y};}
var r1m=(r1y1-r1y2)/(r1x1-r1x2);var r1b=r1y1-(r1m*r1x1);var x=(y-r1b)/r1m;return{x:x,y:y};};};jQuery.fn.btPosition=function(){function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0;};var left=0,top=0,results;if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();offset.top-=num(this,'marginTop');offset.left-=num(this,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;};jQuery.fn.btOuterWidth=function(margin){function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0;};return this["innerWidth"]()
+num(this,"borderLeftWidth")
+num(this,"borderRightWidth")
+(margin?num(this,"marginLeft")
+num(this,"marginRight"):0);};jQuery.fn.btOn=function(){return this.each(function(index){if(jQuery.isFunction(this.btOn)){this.btOn();}});};jQuery.fn.btOff=function(){return this.each(function(index){if(jQuery.isFunction(this.btOff)){this.btOff();}});};jQuery.bt.vars={clickAnywhereStack:[],closeWhenOpenStack:[]};jQuery.bt.docClick=function(e){if(!e){var e=window.event;};if(!$(e.target).parents().andSelf().filter('.bt-wrapper, .bt-active').length&&jQuery.bt.vars.clickAnywhereStack.length){$(jQuery.bt.vars.clickAnywhereStack).btOff();$(document).unbind('click',jQuery.bt.docClick);}};jQuery.bt.defaults={trigger:'hover',clickAnywhereToClose:true,closeWhenOthersOpen:false,shrinkToFit:false,width:'200px',padding:'10px',spikeGirth:10,spikeLength:15,overlap:0,overlay:false,killTitle:true,textzIndex:9999,boxzIndex:9998,wrapperzIndex:9997,offsetParent:null,positions:['most'],fill:"rgb(255, 255, 102)",windowMargin:10,strokeWidth:1,strokeStyle:"#000",cornerRadius:5,centerPointX:.5,centerPointY:.5,shadow:false,shadowOffsetX:2,shadowOffsetY:2,shadowBlur:3,shadowColor:"#000",shadowOverlap:false,noShadowOpts:{strokeStyle:'#999'},cssClass:'',cssStyles:{},activeClass:'bt-active',contentSelector:"$(this).attr('title')",ajaxPath:null,ajaxError:'<strong>ERROR:</strong> <em>%error</em>',ajaxLoading:'<blink>Loading...</blink>',ajaxData:{},ajaxType:'GET',ajaxCache:true,ajaxOpts:{},preBuild:function(){},preShow:function(box){},showTip:function(box){$(box).show();},postShow:function(box){},preHide:function(box){},hideTip:function(box,callback){$(box).hide();callback();},postHide:function(){},hoverIntentOpts:{interval:300,timeout:500}};jQuery.bt.options={};})(jQuery);;
Drupal.behaviors.beautytips=function(){jQuery.bt.options.closeWhenOthersOpen=true;beautytips=Drupal.settings.beautytips;for(var key in beautytips){var bt_options=new Array();if(beautytips[key]['list']){for(var k=0;k<beautytips[key]['list'].length;k++){bt_options[beautytips[key]['list'][k]]=beautytips[key][beautytips[key]['list'][k]];}}
if(beautytips[key]['cssSelect']){if(beautytips[key]['contentSelector']&&beautytips[key]['preEval']){$(beautytips[key]['cssSelect']).each(function(){eval(beautytips[key]['contentSelector']);});}
if(beautytips[key]['text']){$(beautytips[key]['cssSelect']).each(function(){$(this).bt(beautytips[key]['text'],bt_options);});}
else if(beautytips[key]['ajaxPath']){$(beautytips[key]['cssSelect']).each(function(){$(this).bt(bt_options);if(beautytips[key]['ajaxDisableLink']){$(beautytips[key]['ajaxDisableLink']).click(function(){return false;});}});}
else{$(beautytips[key]['cssSelect']).each(function(){$(this).bt(bt_options);});}}
bt_options.length=0;}}
;
/* $Id: lightbox.js,v 1.5.2.6.2.136 2010/09/24 08:39:40 snpower Exp $ */

/**
 * jQuery Lightbox
 * @author
 *   Stella Power, <http://drupal.org/user/66894>
 *
 * Based on Lightbox v2.03.3 by Lokesh Dhakar
 * <http://www.huddletogether.com/projects/lightbox2/>
 * Also partially based on the jQuery Lightbox by Warren Krewenki
 *   <http://warren.mesozen.com>
 *
 * Permission has been granted to Mark Ashmead & other Drupal Lightbox2 module
 * maintainers to distribute this file via Drupal.org
 * Under GPL license.
 *
 * Slideshow, iframe and video functionality added by Stella Power.
 */

var Lightbox = {
  auto_modal : false,
  overlayOpacity : 0.8, // Controls transparency of shadow overlay.
  overlayColor : '000', // Controls colour of shadow overlay.
  disableCloseClick : true,
  // Controls the order of the lightbox resizing animation sequence.
  resizeSequence: 0, // 0: simultaneous, 1: width then height, 2: height then width.
  resizeSpeed: 'normal', // Controls the speed of the lightbox resizing animation.
  fadeInSpeed: 'normal', // Controls the speed of the image appearance.
  slideDownSpeed: 'slow', // Controls the speed of the image details appearance.
  minWidth: 240,
  borderSize : 10,
  boxColor : 'fff',
  fontColor : '000',
  topPosition : '',
  infoHeight: 20,
  alternative_layout : false,
  imageArray : [],
  imageNum : null,
  total : 0,
  activeImage : null,
  inprogress : false,
  disableResize : false,
  disableZoom : false,
  isZoomedIn : false,
  rtl : false,
  loopItems : false,
  keysClose : ['c', 'x', 27],
  keysPrevious : ['p', 37],
  keysNext : ['n', 39],
  keysZoom : ['z'],
  keysPlayPause : [32],

  // Slideshow options.
  slideInterval : 5000, // In milliseconds.
  showPlayPause : true,
  autoStart : true,
  autoExit : true,
  pauseOnNextClick : false, // True to pause the slideshow when the "Next" button is clicked.
  pauseOnPrevClick : true, // True to pause the slideshow when the "Prev" button is clicked.
  slideIdArray : [],
  slideIdCount : 0,
  isSlideshow : false,
  isPaused : false,
  loopSlides : false,

  // Iframe options.
  isLightframe : false,
  iframe_width : 600,
  iframe_height : 400,
  iframe_border : 1,

  // Video and modal options.
  enableVideo : false,
  flvPlayer : '/flvplayer.swf',
  flvFlashvars : '',
  isModal : false,
  isVideo : false,
  videoId : false,
  modalWidth : 400,
  modalHeight : 400,
  modalHTML : null,


  // initialize()
  // Constructor runs on completion of the DOM loading.
  // The function inserts html at the bottom of the page which is used
  // to display the shadow overlay and the image container.
  initialize: function() {

    var s = Drupal.settings.lightbox2;
    Lightbox.overlayOpacity = s.overlay_opacity;
    Lightbox.overlayColor = s.overlay_color;
    Lightbox.disableCloseClick = s.disable_close_click;
    Lightbox.resizeSequence = s.resize_sequence;
    Lightbox.resizeSpeed = s.resize_speed;
    Lightbox.fadeInSpeed = s.fade_in_speed;
    Lightbox.slideDownSpeed = s.slide_down_speed;
    Lightbox.borderSize = s.border_size;
    Lightbox.boxColor = s.box_color;
    Lightbox.fontColor = s.font_color;
    Lightbox.topPosition = s.top_position;
    Lightbox.rtl = s.rtl;
    Lightbox.loopItems = s.loop_items;
    Lightbox.keysClose = s.keys_close.split(" ");
    Lightbox.keysPrevious = s.keys_previous.split(" ");
    Lightbox.keysNext = s.keys_next.split(" ");
    Lightbox.keysZoom = s.keys_zoom.split(" ");
    Lightbox.keysPlayPause = s.keys_play_pause.split(" ");
    Lightbox.disableResize = s.disable_resize;
    Lightbox.disableZoom = s.disable_zoom;
    Lightbox.slideInterval = s.slideshow_interval;
    Lightbox.showPlayPause = s.show_play_pause;
    Lightbox.showCaption = s.show_caption;
    Lightbox.autoStart = s.slideshow_automatic_start;
    Lightbox.autoExit = s.slideshow_automatic_exit;
    Lightbox.pauseOnNextClick = s.pause_on_next_click;
    Lightbox.pauseOnPrevClick = s.pause_on_previous_click;
    Lightbox.loopSlides = s.loop_slides;
    Lightbox.alternative_layout = s.use_alt_layout;
    Lightbox.iframe_width = s.iframe_width;
    Lightbox.iframe_height = s.iframe_height;
    Lightbox.iframe_border = s.iframe_border;
    Lightbox.enableVideo = s.enable_video;
    if (s.enable_video) {
      Lightbox.flvPlayer = s.flvPlayer;
      Lightbox.flvFlashvars = s.flvFlashvars;
    }

    // Make the lightbox divs.
    var layout_class = (s.use_alt_layout ? 'lightbox2-alt-layout' : 'lightbox2-orig-layout');
    var output = '<div id="lightbox2-overlay" style="display: none;"></div>\
      <div id="lightbox" style="display: none;" class="' + layout_class + '">\
        <div id="outerImageContainer"></div>\
        <div id="imageDataContainer" class="clearfix">\
          <div id="imageData"></div>\
        </div>\
      </div>';
    var loading = '<div id="loading"><a href="#" id="loadingLink"></a></div>';
    var modal = '<div id="modalContainer" style="display: none;"></div>';
    var frame = '<div id="frameContainer" style="display: none;"></div>';
    var imageContainer = '<div id="imageContainer" style="display: none;"></div>';
    var details = '<div id="imageDetails"></div>';
    var bottomNav = '<div id="bottomNav"></div>';
    var image = '<img id="lightboxImage" alt="" />';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" href="#"></a><a id="nextLink" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" href="#"></a><a id="frameNextLink" href="#"></a></div>';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="nextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="frameNextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var caption = '<span id="caption"></span>';
    var numberDisplay = '<span id="numberDisplay"></span>';
    var close = '<a id="bottomNavClose" title="' + Drupal.t('Close') + '" href="#"></a>';
    var zoom = '<a id="bottomNavZoom" href="#"></a>';
    var zoomOut = '<a id="bottomNavZoomOut" href="#"></a>';
    var pause = '<a id="lightshowPause" title="' + Drupal.t('Pause Slideshow') + '" href="#" style="display: none;"></a>';
    var play = '<a id="lightshowPlay" title="' + Drupal.t('Play Slideshow') + '" href="#" style="display: none;"></a>';

    $("body").append(output);
    $('#outerImageContainer').append(modal + frame + imageContainer + loading);
    if (!s.use_alt_layout) {
      $('#imageContainer').append(image + hoverNav);
      $('#imageData').append(details + bottomNav);
      $('#imageDetails').append(caption + numberDisplay);
      $('#bottomNav').append(frameNav + close + zoom + zoomOut + pause + play);
    }
    else {
      $('#outerImageContainer').append(bottomNav);
      $('#imageContainer').append(image);
      $('#bottomNav').append(close + zoom + zoomOut);
      $('#imageData').append(hoverNav + details);
      $('#imageDetails').append(caption + numberDisplay + pause + play);
    }

    // Setup onclick handlers.
    if (Lightbox.disableCloseClick) {
      $('#lightbox2-overlay').click(function() { Lightbox.end(); return false; } ).hide();
    }
    $('#loadingLink, #bottomNavClose').click(function() { Lightbox.end('forceClose'); return false; } );
    $('#prevLink, #framePrevLink').click(function() { Lightbox.changeData(Lightbox.activeImage - 1); return false; } );
    $('#nextLink, #frameNextLink').click(function() { Lightbox.changeData(Lightbox.activeImage + 1); return false; } );
    $('#bottomNavZoom').click(function() { Lightbox.changeData(Lightbox.activeImage, true); return false; } );
    $('#bottomNavZoomOut').click(function() { Lightbox.changeData(Lightbox.activeImage, false); return false; } );
    $('#lightshowPause').click(function() { Lightbox.togglePlayPause("lightshowPause", "lightshowPlay"); return false; } );
    $('#lightshowPlay').click(function() { Lightbox.togglePlayPause("lightshowPlay", "lightshowPause"); return false; } );

    // Fix positioning.
    $('#prevLink, #nextLink, #framePrevLink, #frameNextLink').css({ 'paddingTop': Lightbox.borderSize + 'px'});
    $('#imageContainer, #frameContainer, #modalContainer').css({ 'padding': Lightbox.borderSize + 'px'});
    $('#outerImageContainer, #imageDataContainer, #bottomNavClose').css({'backgroundColor': '#' + Lightbox.boxColor, 'color': '#'+Lightbox.fontColor});
    if (Lightbox.alternative_layout) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'bottom': Lightbox.borderSize + 'px', 'right': Lightbox.borderSize + 'px'});
    }
    else if (Lightbox.rtl == 1 && $.browser.msie) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'left': '0px'});
    }

    // Force navigation links to always be displayed
    if (s.force_show_nav) {
      $('#prevLink, #nextLink').addClass("force_show_nav");
    }

  },

  // initList()
  // Loops through anchor tags looking for 'lightbox', 'lightshow' and
  // 'lightframe', etc, references and applies onclick events to appropriate
  // links. You can rerun after dynamically adding images w/ajax.
  initList : function(context) {

    if (context == undefined || context == null) {
      context = document;
    }

    // Attach lightbox to any links with rel 'lightbox', 'lightshow' or
    // 'lightframe', etc.
    $("a[rel^='lightbox']:not(.lightbox-processed), area[rel^='lightbox']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightshow']:not(.lightbox-processed), area[rel^='lightshow']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, true, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightframe']:not(.lightbox-processed), area[rel^='lightframe']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, true, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    if (Lightbox.enableVideo) {
      $("a[rel^='lightvideo']:not(.lightbox-processed), area[rel^='lightvideo']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
        if (Lightbox.disableCloseClick) {
          $('#lightbox').unbind('click');
          $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
        }
        Lightbox.start(this, false, false, true, false);
        if (e.preventDefault) { e.preventDefault(); }
        return false;
      });
    }
    $("a[rel^='lightmodal']:not(.lightbox-processed), area[rel^='lightmodal']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      $('#lightbox').unbind('click');
      // Add classes from the link to the lightbox div - don't include lightbox-processed
      $('#lightbox').addClass($(this).attr('class'));
      $('#lightbox').removeClass('lightbox-processed');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("#lightboxAutoModal:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      Lightbox.auto_modal = true;
      $('#lightbox').unbind('click');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
  },

  // start()
  // Display overlay and lightbox. If image is part of a set, add siblings to
  // imageArray.
  start: function(imageLink, slideshow, lightframe, lightvideo, lightmodal) {

    Lightbox.isPaused = !Lightbox.autoStart;

    // Replaces hideSelectBoxes() and hideFlash() calls in original lightbox2.
    Lightbox.toggleSelectsFlash('hide');

    // Stretch overlay to fill page and fade in.
    var arrayPageSize = Lightbox.getPageSize();
    $("#lightbox2-overlay").hide().css({
      'width': '100%',
      'zIndex': '10090',
      'height': arrayPageSize[1] + 'px',
      'backgroundColor' : '#' + Lightbox.overlayColor
    });
    // Detect OS X FF2 opacity + flash issue.
    if (lightvideo && this.detectMacFF2()) {
      $("#lightbox2-overlay").removeClass("overlay_default");
      $("#lightbox2-overlay").addClass("overlay_macff2");
      $("#lightbox2-overlay").css({'opacity' : null});
    }
    else {
      $("#lightbox2-overlay").removeClass("overlay_macff2");
      $("#lightbox2-overlay").addClass("overlay_default");
      $("#lightbox2-overlay").css({'opacity' : Lightbox.overlayOpacity});
    }
    $("#lightbox2-overlay").fadeIn(Lightbox.fadeInSpeed);


    Lightbox.isSlideshow = slideshow;
    Lightbox.isLightframe = lightframe;
    Lightbox.isVideo = lightvideo;
    Lightbox.isModal = lightmodal;
    Lightbox.imageArray = [];
    Lightbox.imageNum = 0;

    var anchors = $(imageLink.tagName);
    var anchor = null;
    var rel_parts = Lightbox.parseRel(imageLink);
    var rel = rel_parts["rel"];
    var rel_group = rel_parts["group"];
    var title = (rel_parts["title"] ? rel_parts["title"] : imageLink.title);
    var rel_style = null;
    var i = 0;

    if (rel_parts["flashvars"]) {
      Lightbox.flvFlashvars = Lightbox.flvFlashvars + '&' + rel_parts["flashvars"];
    }

    // Set the title for image alternative text.
    var alt = imageLink.title;
    if (!alt) {
      var img = $(imageLink).find("img");
      if (img && $(img).attr("alt")) {
        alt = $(img).attr("alt");
      }
      else {
        alt = title;
      }
    }

    if ($(imageLink).attr('id') == 'lightboxAutoModal') {
      rel_style = rel_parts["style"];
      Lightbox.imageArray.push(['#lightboxAutoModal > *', title, alt, rel_style, 1]);
    }
    else {
      // Handle lightbox images with no grouping.
      if ((rel == 'lightbox' || rel == 'lightshow') && !rel_group) {
        Lightbox.imageArray.push([imageLink.href, title, alt]);
      }

      // Handle other items with no grouping.
      else if (!rel_group) {
        rel_style = rel_parts["style"];
        Lightbox.imageArray.push([imageLink.href, title, alt, rel_style]);
      }

      // Handle grouped items.
      else {

        // Loop through anchors and add them to imageArray.
        for (i = 0; i < anchors.length; i++) {
          anchor = anchors[i];
          if (anchor.href && typeof(anchor.href) == "string" && $(anchor).attr('rel')) {
            var rel_data = Lightbox.parseRel(anchor);
            var anchor_title = (rel_data["title"] ? rel_data["title"] : anchor.title);
            img_alt = anchor.title;
            if (!img_alt) {
              var anchor_img = $(anchor).find("img");
              if (anchor_img && $(anchor_img).attr("alt")) {
                img_alt = $(anchor_img).attr("alt");
              }
              else {
                img_alt = title;
              }
            }
            if (rel_data["rel"] == rel) {
              if (rel_data["group"] == rel_group) {
                if (Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) {
                  rel_style = rel_data["style"];
                }
                Lightbox.imageArray.push([anchor.href, anchor_title, img_alt, rel_style]);
              }
            }
          }
        }

        // Remove duplicates.
        for (i = 0; i < Lightbox.imageArray.length; i++) {
          for (j = Lightbox.imageArray.length-1; j > i; j--) {
            if (Lightbox.imageArray[i][0] == Lightbox.imageArray[j][0]) {
              Lightbox.imageArray.splice(j,1);
            }
          }
        }
        while (Lightbox.imageArray[Lightbox.imageNum][0] != imageLink.href) {
          Lightbox.imageNum++;
        }
      }
    }

    if (Lightbox.isSlideshow && Lightbox.showPlayPause && Lightbox.isPaused) {
      $('#lightshowPlay').show();
      $('#lightshowPause').hide();
    }

    // Calculate top and left offset for the lightbox.
    var arrayPageScroll = Lightbox.getPageScroll();
    var lightboxTop = arrayPageScroll[1] + (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
    var lightboxLeft = arrayPageScroll[0];
    $('#frameContainer, #modalContainer, #lightboxImage').hide();
    $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
    $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();
    $('#outerImageContainer').css({'width': '250px', 'height': '250px'});
    $('#lightbox').css({
      'zIndex': '10500',
      'top': lightboxTop + 'px',
      'left': lightboxLeft + 'px'
    }).show();

    Lightbox.total = Lightbox.imageArray.length;
    Lightbox.changeData(Lightbox.imageNum);
  },

  // changeData()
  // Hide most elements and preload image in preparation for resizing image
  // container.
  changeData: function(imageNum, zoomIn) {

    if (Lightbox.inprogress === false) {
      if (Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) {
        if (imageNum >= Lightbox.total) imageNum = 0;
        if (imageNum < 0) imageNum = Lightbox.total - 1;
      }

      if (Lightbox.isSlideshow) {
        for (var i = 0; i < Lightbox.slideIdCount; i++) {
          window.clearTimeout(Lightbox.slideIdArray[i]);
        }
      }
      Lightbox.inprogress = true;
      Lightbox.activeImage = imageNum;

      if (Lightbox.disableResize && !Lightbox.isSlideshow) {
        zoomIn = true;
      }
      Lightbox.isZoomedIn = zoomIn;


      // Hide elements during transition.
      $('#loading').css({'zIndex': '10500'}).show();
      if (!Lightbox.alternative_layout) {
        $('#imageContainer').hide();
      }
      $('#frameContainer, #modalContainer, #lightboxImage').hide();
      $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
      $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();

      // Preload image content, but not iframe pages.
      if (!Lightbox.isLightframe && !Lightbox.isVideo && !Lightbox.isModal) {
        $("#lightbox #imageDataContainer").removeClass('lightbox2-alt-layout-data');
        imgPreloader = new Image();
        imgPreloader.onerror = function() { Lightbox.imgNodeLoadingError(this); };

        imgPreloader.onload = function() {
          var photo = document.getElementById('lightboxImage');
          photo.src = Lightbox.imageArray[Lightbox.activeImage][0];
          photo.alt = Lightbox.imageArray[Lightbox.activeImage][2];

          var imageWidth = imgPreloader.width;
          var imageHeight = imgPreloader.height;

          // Resize code.
          var arrayPageSize = Lightbox.getPageSize();
          var targ = { w:arrayPageSize[2] - (Lightbox.borderSize * 2), h:arrayPageSize[3] - (Lightbox.borderSize * 6) - (Lightbox.infoHeight * 4) - (arrayPageSize[3] / 10) };
          var orig = { w:imgPreloader.width, h:imgPreloader.height };

          // Image is very large, so show a smaller version of the larger image
          // with zoom button.
          if (zoomIn !== true) {
            var ratio = 1.0; // Shrink image with the same aspect.
            $('#bottomNavZoomOut, #bottomNavZoom').hide();
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              ratio = ((targ.w / orig.w) < (targ.h / orig.h)) ? targ.w / orig.w : targ.h / orig.h;
              if (!Lightbox.disableZoom && !Lightbox.isSlideshow) {
                $('#bottomNavZoom').css({'zIndex': '10500'}).show();
              }
            }

            imageWidth  = Math.floor(orig.w * ratio);
            imageHeight = Math.floor(orig.h * ratio);
          }

          else {
            $('#bottomNavZoom').hide();
            // Only display zoom out button if the image is zoomed in already.
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              // Only display zoom out button if not a slideshow and if the
              // buttons aren't disabled.
              if (!Lightbox.disableResize && Lightbox.isSlideshow === false && !Lightbox.disableZoom) {
                $('#bottomNavZoomOut').css({'zIndex': '10500'}).show();
              }
            }
          }

          photo.style.width = (imageWidth) + 'px';
          photo.style.height = (imageHeight) + 'px';
          Lightbox.resizeContainer(imageWidth, imageHeight);

          // Clear onLoad, IE behaves irratically with animated gifs otherwise.
          imgPreloader.onload = function() {};
        };

        imgPreloader.src = Lightbox.imageArray[Lightbox.activeImage][0];
        imgPreloader.alt = Lightbox.imageArray[Lightbox.activeImage][2];
      }

      // Set up frame size, etc.
      else if (Lightbox.isLightframe) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var src = Lightbox.imageArray[Lightbox.activeImage][0];
        $('#frameContainer').html('<iframe id="lightboxFrame" style="display: none;" src="'+src+'"></iframe>');

        // Enable swf support in Gecko browsers.
        if ($.browser.mozilla && src.indexOf('.swf') != -1) {
          setTimeout(function () {
            document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
          }, 1000);
        }

        if (!Lightbox.iframe_border) {
          $('#lightboxFrame').css({'border': 'none'});
          $('#lightboxFrame').attr('frameborder', '0');
        }
        var iframe = document.getElementById('lightboxFrame');
        var iframeStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        iframe = Lightbox.setStyles(iframe, iframeStyles);
        Lightbox.resizeContainer(parseInt(iframe.width, 10), parseInt(iframe.height, 10));
      }
      else if (Lightbox.isVideo || Lightbox.isModal) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var container = document.getElementById('modalContainer');
        var modalStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        container = Lightbox.setStyles(container, modalStyles);
        if (Lightbox.isVideo) {
          Lightbox.modalHeight =  parseInt(container.height, 10) - 10;
          Lightbox.modalWidth =  parseInt(container.width, 10) - 10;
          Lightvideo.startVideo(Lightbox.imageArray[Lightbox.activeImage][0]);
        }
        Lightbox.resizeContainer(parseInt(container.width, 10), parseInt(container.height, 10));
      }
    }
  },

  // imgNodeLoadingError()
  imgNodeLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    var original_image = Lightbox.imageArray[Lightbox.activeImage][0];
    if (s.display_image_size !== "") {
      original_image = original_image.replace(new RegExp("."+s.display_image_size), "");
    }
    Lightbox.imageArray[Lightbox.activeImage][0] = original_image;
    image.onerror = function() { Lightbox.imgLoadingError(image); };
    image.src = original_image;
  },

  // imgLoadingError()
  imgLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    Lightbox.imageArray[Lightbox.activeImage][0] = s.default_image;
    image.src = s.default_image;
  },

  // resizeContainer()
  resizeContainer: function(imgWidth, imgHeight) {

    imgWidth = (imgWidth < Lightbox.minWidth ? Lightbox.minWidth : imgWidth);

    this.widthCurrent = $('#outerImageContainer').width();
    this.heightCurrent = $('#outerImageContainer').height();

    var widthNew = (imgWidth  + (Lightbox.borderSize * 2));
    var heightNew = (imgHeight  + (Lightbox.borderSize * 2));

    // Scalars based on change from old to new.
    this.xScale = ( widthNew / this.widthCurrent) * 100;
    this.yScale = ( heightNew / this.heightCurrent) * 100;

    // Calculate size difference between new and old image, and resize if
    // necessary.
    wDiff = this.widthCurrent - widthNew;
    hDiff = this.heightCurrent - heightNew;

    $('#modalContainer').css({'width': imgWidth, 'height': imgHeight});
    // Detect animation sequence.
    if (Lightbox.resizeSequence) {
      var animate1 = {width: widthNew};
      var animate2 = {height: heightNew};
      if (Lightbox.resizeSequence == 2) {
        animate1 = {height: heightNew};
        animate2 = {width: widthNew};
      }
      $('#outerImageContainer').animate(animate1, Lightbox.resizeSpeed).animate(animate2, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }
    // Simultaneous.
    else {
      $('#outerImageContainer').animate({'width': widthNew, 'height': heightNew}, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }

    // If new and old image are same size and no scaling transition is necessary
    // do a quick pause to prevent image flicker.
    if ((hDiff === 0) && (wDiff === 0)) {
      if ($.browser.msie) {
        Lightbox.pause(250);
      }
      else {
        Lightbox.pause(100);
      }
    }

    var s = Drupal.settings.lightbox2;
    if (!s.use_alt_layout) {
      $('#prevLink, #nextLink').css({'height': imgHeight + 'px'});
    }
    $('#imageDataContainer').css({'width': widthNew + 'px'});
  },

  // showData()
  // Display image and begin preloading neighbors.
  showData: function() {
    $('#loading').hide();

    if (Lightbox.isLightframe || Lightbox.isVideo || Lightbox.isModal) {
      Lightbox.updateDetails();
      if (Lightbox.isLightframe) {
        $('#frameContainer').show();
        if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
          $('#lightboxFrame').css({'zIndex': '10500'}).show();
        }
        else {
          $('#lightboxFrame').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
        }
      }
      else {
        if (Lightbox.isVideo) {
          $("#modalContainer").html(Lightbox.modalHTML).click(function(){return false;}).css('zIndex', '10500').show();
        }
        else {
          var src = unescape(Lightbox.imageArray[Lightbox.activeImage][0]);
          if (Lightbox.imageArray[Lightbox.activeImage][4]) {
            $(src).appendTo("#modalContainer");
            $('#modalContainer').css({'zIndex': '10500'}).show();
          }
          else {
            // Use a callback to show the new image, otherwise you get flicker.
            $("#modalContainer").hide().load(src, function () {$('#modalContainer').css({'zIndex': '10500'}).show();});
          }
          $('#modalContainer').unbind('click');
        }
        // This might be needed in the Lightframe section above.
        //$('#modalContainer').css({'zIndex': '10500'}).show();
      }
    }

    // Handle display of image content.
    else {
      $('#imageContainer').show();
      if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
        $('#lightboxImage').css({'zIndex': '10500'}).show();
      }
      else {
        $('#lightboxImage').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
      }
      Lightbox.updateDetails();
      this.preloadNeighborImages();
    }
    Lightbox.inprogress = false;

    // Slideshow specific stuff.
    if (Lightbox.isSlideshow) {
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        if (Lightbox.autoExit) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.end('slideshow');}, Lightbox.slideInterval);
        }
      }
      else {
        if (!Lightbox.isPaused && Lightbox.total > 1) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.changeData(Lightbox.activeImage + 1);}, Lightbox.slideInterval);
        }
      }
      if (Lightbox.showPlayPause && Lightbox.total > 1 && !Lightbox.isPaused) {
        $('#lightshowPause').show();
        $('#lightshowPlay').hide();
      }
      else if (Lightbox.showPlayPause && Lightbox.total > 1) {
        $('#lightshowPause').hide();
        $('#lightshowPlay').show();
      }
    }

    // Adjust the page overlay size.
    var arrayPageSize = Lightbox.getPageSize();
    var arrayPageScroll = Lightbox.getPageScroll();
    var pageHeight = arrayPageSize[1];
    if (Lightbox.isZoomedIn && arrayPageSize[1] > arrayPageSize[3]) {
      var lightboxTop = (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
      pageHeight = pageHeight + arrayPageScroll[1] + lightboxTop;
    }
    $('#lightbox2-overlay').css({'height': pageHeight + 'px', 'width': arrayPageSize[0] + 'px'});

    // Gecko browsers (e.g. Firefox, SeaMonkey, etc) don't handle pdfs as
    // expected.
    if ($.browser.mozilla) {
      if (Lightbox.imageArray[Lightbox.activeImage][0].indexOf(".pdf") != -1) {
        setTimeout(function () {
          document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
        }, 1000);
      }
    }
  },

  // updateDetails()
  // Display caption, image number, and bottom nav.
  updateDetails: function() {

    $("#imageDataContainer").hide();

    var s = Drupal.settings.lightbox2;

    if (s.show_caption) {
      var caption = Lightbox.filterXSS(Lightbox.imageArray[Lightbox.activeImage][1]);
      if (!caption) caption = '';
      $('#caption').html(caption).css({'zIndex': '10500'}).show();
    }

    // If image is part of set display 'Image x of x'.
    var numberDisplay = null;
    if (s.image_count && Lightbox.total > 1) {
      var currentImage = Lightbox.activeImage + 1;
      if (!Lightbox.isLightframe && !Lightbox.isModal && !Lightbox.isVideo) {
        numberDisplay = s.image_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else if (Lightbox.isVideo) {
        numberDisplay = s.video_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else {
        numberDisplay = s.page_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      $('#numberDisplay').html(numberDisplay).css({'zIndex': '10500'}).show();
    }
    else {
      $('#numberDisplay').hide();
    }

    $("#imageDataContainer").hide().slideDown(Lightbox.slideDownSpeed, function() {
      $("#bottomNav").show();
    });
    if (Lightbox.rtl == 1) {
      $("#bottomNav").css({'float': 'left'});
    }
    Lightbox.updateNav();
  },

  // updateNav()
  // Display appropriate previous and next hover navigation.
  updateNav: function() {

    $('#hoverNav').css({'zIndex': '10500'}).show();
    var prevLink = '#prevLink';
    var nextLink = '#nextLink';

    // Slideshow is separated as we need to show play / pause button.
    if (Lightbox.isSlideshow) {
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage !== 0) {
        $(prevLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnPrevClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage != (Lightbox.total - 1)) {
        $(nextLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnNextClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // All other types of content.
    else {

      if ((Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) && !Lightbox.alternative_layout) {
        $('#frameHoverNav').css({'zIndex': '10500'}).show();
        $('#hoverNav').css({'zIndex': '10500'}).hide();
        prevLink = '#framePrevLink';
        nextLink = '#frameNextLink';
      }

      // If not first image in set, display prev image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage !== 0) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(prevLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage != (Lightbox.total - 1)) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(nextLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // Don't enable keyboard shortcuts so forms will work.
    if (!Lightbox.isModal) {
      this.enableKeyboardNav();
    }
  },


  // enableKeyboardNav()
  enableKeyboardNav: function() {
    $(document).bind("keydown", this.keyboardAction);
  },

  // disableKeyboardNav()
  disableKeyboardNav: function() {
    $(document).unbind("keydown", this.keyboardAction);
  },

  // keyboardAction()
  keyboardAction: function(e) {
    if (e === null) { // IE.
      keycode = event.keyCode;
      escapeKey = 27;
    }
    else { // Mozilla.
      keycode = e.keyCode;
      escapeKey = e.DOM_VK_ESCAPE;
    }

    key = String.fromCharCode(keycode).toLowerCase();

    // Close lightbox.
    if (Lightbox.checkKey(Lightbox.keysClose, key, keycode)) {
      Lightbox.end('forceClose');
    }
    // Display previous image (p, <-).
    else if (Lightbox.checkKey(Lightbox.keysPrevious, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage !== 0) {
        Lightbox.changeData(Lightbox.activeImage - 1);
      }

    }
    // Display next image (n, ->).
    else if (Lightbox.checkKey(Lightbox.keysNext, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage != (Lightbox.total - 1)) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    // Zoom in.
    else if (Lightbox.checkKey(Lightbox.keysZoom, key, keycode) && !Lightbox.disableResize && !Lightbox.disableZoom && !Lightbox.isSlideshow && !Lightbox.isLightframe) {
      if (Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, false);
      }
      else if (!Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, true);
      }
      return false;
    }
    // Toggle play / pause (space).
    else if (Lightbox.checkKey(Lightbox.keysPlayPause, key, keycode) && Lightbox.isSlideshow) {

      if (Lightbox.isPaused) {
        Lightbox.togglePlayPause("lightshowPlay", "lightshowPause");
      }
      else {
        Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
      }
      return false;
    }
  },

  preloadNeighborImages: function() {

    if ((Lightbox.total - 1) > Lightbox.activeImage) {
      preloadNextImage = new Image();
      preloadNextImage.src = Lightbox.imageArray[Lightbox.activeImage + 1][0];
    }
    if (Lightbox.activeImage > 0) {
      preloadPrevImage = new Image();
      preloadPrevImage.src = Lightbox.imageArray[Lightbox.activeImage - 1][0];
    }

  },

  end: function(caller) {
    var closeClick = (caller == 'slideshow' ? false : true);
    if (Lightbox.isSlideshow && Lightbox.isPaused && !closeClick) {
      return;
    }
    // To prevent double clicks on navigation links.
    if (Lightbox.inprogress === true && caller != 'forceClose') {
      return;
    }
    Lightbox.disableKeyboardNav();
    $('#lightbox').hide();
    $("#lightbox2-overlay").fadeOut();
    Lightbox.isPaused = true;
    Lightbox.inprogress = false;
    // Replaces calls to showSelectBoxes() and showFlash() in original
    // lightbox2.
    Lightbox.toggleSelectsFlash('visible');
    if (Lightbox.isSlideshow) {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
      $('#lightshowPause, #lightshowPlay').hide();
    }
    else if (Lightbox.isLightframe) {
      $('#frameContainer').empty().hide();
    }
    else if (Lightbox.isVideo || Lightbox.isModal) {
      if (!Lightbox.auto_modal) {
        $('#modalContainer').hide().html("");
      }
      Lightbox.auto_modal = false;
    }
  },


  // getPageScroll()
  // Returns array with x,y page scroll values.
  // Core code from - quirksmode.com.
  getPageScroll : function() {

    var xScroll, yScroll;

    if (self.pageYOffset || self.pageXOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {  // Explorer 6 Strict.
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    }
    else if (document.body) {// All other Explorers.
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }

    arrayPageScroll = [xScroll,yScroll];
    return arrayPageScroll;
  },

  // getPageSize()
  // Returns array with page width, height and window width, height.
  // Core code from - quirksmode.com.
  // Edit for Firefox by pHaez.

  getPageSize : function() {

    var xScroll, yScroll;

    if (window.innerHeight && window.scrollMaxY) {
      xScroll = window.innerWidth + window.scrollMaxX;
      yScroll = window.innerHeight + window.scrollMaxY;
    }
    else if (document.body.scrollHeight > document.body.offsetHeight) { // All but Explorer Mac.
      xScroll = document.body.scrollWidth;
      yScroll = document.body.scrollHeight;
    }
    else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari.
      xScroll = document.body.offsetWidth;
      yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;

    if (self.innerHeight) { // All except Explorer.
      if (document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;
      }
      else {
        windowWidth = self.innerWidth;
      }
      windowHeight = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode.
      windowWidth = document.documentElement.clientWidth;
      windowHeight = document.documentElement.clientHeight;
    }
    else if (document.body) { // Other Explorers.
      windowWidth = document.body.clientWidth;
      windowHeight = document.body.clientHeight;
    }
    // For small pages with total height less than height of the viewport.
    if (yScroll < windowHeight) {
      pageHeight = windowHeight;
    }
    else {
      pageHeight = yScroll;
    }
    // For small pages with total width less than width of the viewport.
    if (xScroll < windowWidth) {
      pageWidth = xScroll;
    }
    else {
      pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
    return arrayPageSize;
  },


  // pause(numberMillis)
  pause : function(ms) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < ms);
  },


  // toggleSelectsFlash()
  // Hide / unhide select lists and flash objects as they appear above the
  // lightbox in some browsers.
  toggleSelectsFlash: function (state) {
    if (state == 'visible') {
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").show();
    }
    else if (state == 'hide') {
      $("select:visible, embed:visible, object:visible").not('#lightboxAutoModal select, #lightboxAutoModal embed, #lightboxAutoModal object').addClass("lightbox_hidden");
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").hide();
    }
  },


  // parseRel()
  parseRel: function (link) {
    var parts = [];
    parts["rel"] = parts["title"] = parts["group"] = parts["style"] = parts["flashvars"] = null;
    if (!$(link).attr('rel')) return parts;
    parts["rel"] = $(link).attr('rel').match(/\w+/)[0];

    if ($(link).attr('rel').match(/\[(.*)\]/)) {
      var info = $(link).attr('rel').match(/\[(.*?)\]/)[1].split('|');
      parts["group"] = info[0];
      parts["style"] = info[1];
      if (parts["style"] != undefined && parts["style"].match(/flashvars:\s?(.*?);/)) {
        parts["flashvars"] = parts["style"].match(/flashvars:\s?(.*?);/)[1];
      }
    }
    if ($(link).attr('rel').match(/\[.*\]\[(.*)\]/)) {
      parts["title"] = $(link).attr('rel').match(/\[.*\]\[(.*)\]/)[1];
    }
    return parts;
  },

  // setStyles()
  setStyles: function(item, styles) {
    item.width = Lightbox.iframe_width;
    item.height = Lightbox.iframe_height;
    item.scrolling = "auto";

    if (!styles) return item;
    var stylesArray = styles.split(';');
    for (var i = 0; i< stylesArray.length; i++) {
      if (stylesArray[i].indexOf('width:') >= 0) {
        var w = stylesArray[i].replace('width:', '');
        item.width = jQuery.trim(w);
      }
      else if (stylesArray[i].indexOf('height:') >= 0) {
        var h = stylesArray[i].replace('height:', '');
        item.height = jQuery.trim(h);
      }
      else if (stylesArray[i].indexOf('scrolling:') >= 0) {
        var scrolling = stylesArray[i].replace('scrolling:', '');
        item.scrolling = jQuery.trim(scrolling);
      }
      else if (stylesArray[i].indexOf('overflow:') >= 0) {
        var overflow = stylesArray[i].replace('overflow:', '');
        item.overflow = jQuery.trim(overflow);
      }
    }
    return item;
  },


  // togglePlayPause()
  // Hide the pause / play button as appropriate.  If pausing the slideshow also
  // clear the timers, otherwise move onto the next image.
  togglePlayPause: function(hideId, showId) {
    if (Lightbox.isSlideshow && hideId == "lightshowPause") {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
    }
    $('#' + hideId).hide();
    $('#' + showId).show();

    if (hideId == "lightshowPlay") {
      Lightbox.isPaused = false;
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        Lightbox.end();
      }
      else if (Lightbox.total > 1) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    else {
      Lightbox.isPaused = true;
    }
  },

  triggerLightbox: function (rel_type, rel_group) {
    if (rel_type.length) {
      if (rel_group && rel_group.length) {
        $("a[rel^='" + rel_type +"\[" + rel_group + "\]'], area[rel^='" + rel_type +"\[" + rel_group + "\]']").eq(0).trigger("click");
      }
      else {
        $("a[rel^='" + rel_type +"'], area[rel^='" + rel_type +"']").eq(0).trigger("click");
      }
    }
  },

  detectMacFF2: function() {
    var ua = navigator.userAgent.toLowerCase();
    if (/firefox[\/\s](\d+\.\d+)/.test(ua)) {
      var ffversion = new Number(RegExp.$1);
      if (ffversion < 3 && ua.indexOf('mac') != -1) {
        return true;
      }
    }
    return false;
  },

  checkKey: function(keys, key, code) {
    return (jQuery.inArray(key, keys) != -1 || jQuery.inArray(String(code), keys) != -1);
  },

  filterXSS: function(str, allowed_tags) {
    var output = "";
    $.ajax({
      url: Drupal.settings.basePath + 'system/lightbox2/filter-xss',
      data: {
        'string' : str,
        'allowed_tags' : allowed_tags
      },
      type: "POST",
      async: false,
      dataType:  "json",
      success: function(data) {
        output = data;
      }
    });
    return output;
  }

};

// Initialize the lightbox.
Drupal.behaviors.initLightbox = function (context) {
  $('body:not(.lightbox-processed)', context).addClass('lightbox-processed').each(function() {
    Lightbox.initialize();
    return false; // Break the each loop.
  });

  // Attach lightbox to any links with lightbox rels.
  Lightbox.initList(context);
  $('#lightboxAutoModal', context).triggerHandler('click');
};

;

var swftools=swftools||{};function ap_stopAll(playerID){swftools.onepixelout.closeAll(playerID);}
swftools.onepixelout=function(){var instances=[];return{pushInstance:function(playerID){instances.push(playerID);},closeAll:function(playerID){for(var i=0;i<instances.length;i++){player=swftools.getObject('swf-'+instances[i]);if(instances[i]!=playerID){player.SetVariable('closePlayer',1);}
else{player.SetVariable('closePlayer',0);}}}}}();Drupal.behaviors.swftools_onepixelout=function(context){$('.swftools-onepixelout:not(.swftools-onepixelout-processed)',context).addClass('swftools-onepixelout-processed').each(function(){swftools.onepixelout.pushInstance($(this).attr('id').substring(13));});};
var swftools=swftools||{};swftools.getObject=function(objectID){swftoolsObject=document.getElementById(objectID);if(typeof swftoolsObject=='object'){return swftoolsObject;}
if(typeof swftoolsObject.attributes.type!='undefined'&&swftoolsObject.attributes.type.value=='application/x-shockwave-flash'){return swftoolsObject;}
return swftoolsObject.getElementsByTagName('object')[0];}
;
Drupal.behaviors.location_auto_lookup = function(context){
  //total and complete hack.  please don't hate me.
  $('#edit-submitted-zip:not(.processed)').addClass('processed')
    .bind('blur', function(){
      var zip_code = $(this).val();
      $.ajax({
        type: 'POST',
          url: Drupal.settings.basePath + 'location_auto_lookup/city_state/' + zip_code,
          data: {js: true},
          dataType: 'json',
          success: function (data) {
            if (data.status) {
              var city = data.city;
              var state = data.state;
              $('#edit-submitted-state').val(state);
              $('#edit-submitted-city').val(city);
            }
            else {
            	// Failure.
            	// Eric Hu Note: users don't like this alert, so I comment it.
            	//alert(data.errorMessage);
            }
          },
          error: function (xmlhttp) {
        	  // Eric Hu Note: users don't like this alert, so I comment it.
        	  //alert('An HTTP error '+ xmlhttp.status);
          }
      });

  });
};
Drupal.Zinch_1on1 = Drupal.Zinch1on1 || {};
Drupal.Zinch_1on1.confirm = function(message, attributes, ok_callback, cancel_callback, is_close) {
  ok_callback = ok_callback || function(){};
  cancel_callback = cancel_callback || function() {$(this).dialog('close');};
  
  if (is_close) {
    var buttons = {};
    eval('buttons.' + Drupal.t('Close') + '=cancel_callback;')
  }
  else{
    var buttons = {};
    eval('buttons.' + Drupal.t('Cancel') + '=cancel_callback;')
    eval('buttons.' + Drupal.t('Yes') + '=ok_callback;')
  }
  
  $message = $('<div>' + message + '</div>');
  
  $.each(attributes, function(key, value) {
    $message.data(key, value);
  })
  
  $message.dialog({
    autoOpen: true,
    position: 'center',
    resizable: false,
    dialogClass: 'zinch-1on1-confirm',
    modal: true,
    buttons: buttons
  })
}

Drupal.Zinch_1on1.removeDiscussion = function() {
  var nid = $(this).data('nid');
  window.location.replace('/zinch-talk/' + nid + '/delete');
}

Drupal.Zinch_1on1.cancelDiscussion = function() {
  var uid = $(this).data('uid');
  var nid = $(this).data('nid');
  window.location.replace('/zinch-talk/' + uid + '/cancel/' + nid);
}

Drupal.behaviors.Zinch_1on1 = function(context) {
  $('#zinch-1on1-pages-add-time-slot-form #edit-timezone').change(function() {
    location.href = Drupal.settings.basePath + 'zinch-talk/add-time?timezone=' + $(this).val();
  })
}

Drupal.Zinch_1on1.goToProfile = function() {
  var uid = $(this).data('uid');
  var url = $(this).data('url');
  window.location.replace('/user/' + uid + '/edit/profile_account?destination=' + url);
}

Drupal.Zinch_1on1.track_clicking = function(param) {
  $.ajax({
    url: Drupal.settings.basePath+"zinch-talk/tracking",
    type : "GET",
    data: param,
    success:function() {      
    } 
  });
};
Drupal.behaviors.likeButtonTooltip = function() {

  if (!$('body').hasClass('front')) {
    $usrImage = $('.user_pic_point img.imagecache.imagecache-35x35')
             .add('.user_picture img.imagecache.imagecache-35x35');

    if ($usrImage.size()) {
      pattern = /user\-([0-9]*)/;
      //pattern_node = /node\/([0-9]*)/;
      $usrImage.each(function() {
        $this = $(this);
      
        href = $this.parent().attr('class');
        //info_page = $this.parent().attr('href');
        uid = pattern.exec(href);
        //nid = pattern_node.exec(info_page);
        // some lines above may be won't use any more
        if (uid) {
          $this.bt({
            ajaxPath: Drupal.settings.basePath+'_beautytips/member-details/' + uid[1],
            position: ['right', 'bottom'],
            fill: Drupal.settings.beautytips['.beautytips'].fill,
            strokeStyle: Drupal.settings.beautytips['.beautytips'].strokeStyle,
            spikeLength: Drupal.settings.beautytips['.beautytips'].spikeLength,
            spikeGirth: Drupal.settings.beautytips['.beautytips'].spikeGirth,
            padding: Drupal.settings.beautytips['.beautytips'].padding,
            cornerRadius: Drupal.settings.beautytips['.beautytips'].cornerRadius,
            cssStyles: Drupal.settings.beautytips['.beautytips'].cssStyles,
            cornerRadius: Drupal.settings.beautytips['.beautytips'].cornerRadius,
            strokeWidth: Drupal.settings.beautytips['.beautytips'].strokeWidth
          });
        }
      });
    }
  }
}


Drupal.behaviors.likeButtonTooltipByBt = function() {
  
  if(!$('body').hasClass('front')) {
    $usrName = $('.bt');
    if ($usrName.size()) {
      pattern = /user\-([0-9]*)/;
      pattern_node = /node\/([0-9]*)/;
      $usrName.each(function() {
        $this = $(this);
      
        href = $this.parent().attr('class');
        info_page = $this.parent().attr('href');
        uid = pattern.exec(href);
        nid = pattern_node.exec(info_page);

        if (uid && !nid) {
          $this.bt({
            ajaxPath: Drupal.settings.basePath+'_beautytips/member-details/' + uid[1],
            position: ['right', 'bottom'],
            fill: Drupal.settings.beautytips['.beautytips'].fill,
            strokeStyle: Drupal.settings.beautytips['.beautytips'].strokeStyle,
            spikeLength: Drupal.settings.beautytips['.beautytips'].spikeLength,
            spikeGirth: Drupal.settings.beautytips['.beautytips'].spikeGirth,
            padding: Drupal.settings.beautytips['.beautytips'].padding,
            cornerRadius: Drupal.settings.beautytips['.beautytips'].cornerRadius,
            cssStyles: Drupal.settings.beautytips['.beautytips'].cssStyles,
            cornerRadius: Drupal.settings.beautytips['.beautytips'].cornerRadius,
            strokeWidth: Drupal.settings.beautytips['.beautytips'].strokeWidth
          });
        }
      });
    }
  }
}











;
$(document).ready(function(){
  var currentProvince = $('.location_auto_province').val();
  var city = 'zinch-city';
  if(typeof(Drupal.settings.city) == 'undefined'){
    var currentDefaultCity = '';
  }else{
    if(Drupal.settings.city != null) {
        var currentDefaultCity = Drupal.settings.city.toString();
    } else {
        var currentDefaultCity = '';
    }
  }
  if(currentDefaultCity.indexOf(',') > -1) {
    currentDefaultCitySet = '';
    var arr = currentDefaultCity.split(',');
    for(var i=0;i<arr.length;i++) {
      currentDefaultCitySet = arr[i];
    }
  }else {
    currentDefaultCitySet = currentDefaultCity;
  }
  setcity(currentProvince, city, currentDefaultCitySet);
  $('.location_auto_province').change(function(){
    var province = $(this).val();
    var city = 'zinch-city';
    setcity(province, city, currentDefaultCity);
  });
});
function setcity(provinceName, cityClass, defaultCity) {
  switch (provinceName) {
    case "Anhui" :
      var cityOptions = new Array(
      "Hefei(*)", "Hefei",
      "Anqing", "Anqing",
      "Bengbu", "Bengbu",
      "Bozhou", "Bozhou",
      "Chaohu", "Chaohu",
      "Chuzhou", "Chuzhou",
      "Fuyang", "Fuyang",
      "Guichi", "Guichi",
      "Huaibei", "Huaibei",
      "Huaihua", "Huaihua",
      "Huainan", "Huainan",
      "Huangshan", "Huangshan",
      "Jiuhuashan", "Jiuhuashan",
      "Liuan", "Liuan",
      "Maanshan", "Maanshan",
      "Suzhou", "Suzhou",
      "Tongling", "Tongling",
      "Tunxi", "Tunxi",
      "Wuhu", "Wuhu",
      "Xuancheng", "Xuancheng");
       break;
    case "Beijing" :
      var cityOptions = new Array(
      "Dongcheng", "Dongcheng",
      "Xicheng", "Xicheng",
      "Chongwen", "Chongwen",
      "Xuanwu", "Xuanwu",
      "Chaoyang", "Chaoyang",
      "Fengtai", "Fengtai",
      "Shijingshan", "Shijingshan",
      "Haidian", "Haidian",
      "Mentougou", "Mentougou",
      "Fangshan", "Fangshan",
      "Tongzhou", "Tongzhou",
      "Shunyi", "Shunyi",
      "Changping", "Changping",
      "Daxing", "Daxing",
      "Pinggu", "Pinggu",
      "Huairou", "Huairou",
      "Miyun", "Miyun",
      "Yanqing", "Yanqing");
      break;
    case "Chongqing" :
      var cityOptions = new Array(
      "Wanzhou", "Wanzhou",
      "Fuling", "Fuling",
      "Yuzhou", "Yuzhou",
      "Dadukou", "Dadukou",
      "Jiangbei", "Jiangbei",
      "Shapingba", "Shapingba",
      "Jiulongpo","Jiulongpo",
      "Nanan", "Nanan",
      "Beibei", "Beibei",
      "Wansheng", "Wansheng",
      "Shuangjiao", "Shuangjiao",
      "Yubei", "Yubei",
      "Banan", "Banan",
      "Qianjiang", "Qianjiang",
      "Changshou", "Changshou",
      "Qijiang", "Qijiang",
      "Tongnan", "Tongnan",
      "Tongliang", "Tongliang",
      "Dazu", "Dazu",
      "Rongchang", "Rongchang",
      "Bishan", "Bishan",
      "Liangping", "Liangping",
      "Chengkou", "Chengkou",
      "Fengdu", "Fengdu",
      "Dianjiang", "Dianjiang",
      "Wulong", "Wulong",
      "Zhongxian", "Zhongxian",
      "Kaixian", "Kaixian",
      "Yunyang", "Yunyang",
      "Fengjie", "Fengjie",
      "Wushan", "Wushan",
      "Wuxi", "Wuxi",
      "Shizhu", "Shizhu",
      "Xiushan", "Xiushan",
      "Youyang", "Youyang",
      "Pengshui", "Pengshui",
      "JiangJin", "Jiangjin",
      "Hechuan", "Hechuan",
      "Yongzhou", "Yongzhou",
      "Nanzhou", "Nanzhou");
      break;
    case "Fujian" :
      var cityOptions = new Array(
      "Fuzhou(*)", "Fuzhou",
      "Fuan", "Fuan",
      "Longyan", "Longyan",
      "Nanping", "Nanping",
      "Ningde", "Ningde",
      "Putian", "Putian",
      "Quanzhou", "Quanzhou",
      "Sanming", "Sanming",
      "Shaowu", "Shaowu",
      "Shishi", "Shishi",
      "Jinjiang", "Jinjiang",
      "YongAn", "YongAn",
      "Wuyishan", "Wuyishan",
      "Xiamen", "Xiamen",
      "Zhangzhou", "Zhangzhou");
       break;
    case "Gansu" :
      var cityOptions = new Array(
      "Lanzhou(*)", "Lanzhou",
      "Baiyin", "Baiyin",
      "Dingxi", "Dingxi",
      "Dunhuang", "Dunhuang",
      "Gannan", "Gannan",
      "Jinchang", "Jinchang",
      "Jiuquan", "Jiuquan",
      "Linxia", "Linxia",
      "Pingliang", "Pingliang",
      "Tianshui", "Tianshui",
      "Wudu", "Wudu",
      "Wuwei", "Wuwei",
      "Xifeng", "Xifeng",
      "Jiayuguan","Jiayuguan",
      "Zhangye", "Zhangye");
      break;
    case "Guangdong" :
      var cityOptions = new Array(
      "Guangzhou(*)", "Guangzhou",
      "Chaoyang", "Chaoyang",
      "Chaozhou", "Chaozhou",
      "Chenghai", "Chenghai",
      "Dongguan", "Dongguan",
      "Foshan", "Foshan",
      "Heyuan", "Heyuan",
      "Huizhou", "Huizhou",
      "Jiangmen", "Jiangmen",
      "Jieyang", "Jieyang",
      "Kaiping", "Kaiping",
      "Maoming", "Maoming",
      "Meizhou", "Meizhou",
      "Qingyuan", "Qingyuan",
      "Shantou", "Shantou",
      "Shanwei", "Shanwei",
      "Shaoguan", "Shaoguan",
      "Shenzhen", "Shenzhen",
      "Shunde", "Shunde",
      "Yangjiang", "Yangjiang",
      "Yingde", "Yingde",
      "Yunfu", "Yunfu",
      "Zengcheng", "Zengcheng",
      "Zhanjiang", "Zhanjiang",
      "Zhaoqing", "Zhaoqing",
      "Zhongshan", "Zhongshan",
      "Zhuhai", "Zhuhai");
      break;
    case "Guangxi" :
      var cityOptions = new Array(
      "Nanning(*)", "Nanning",
      "Baise", "Baise",
      "Beihai", "Beihai",
      "Guilin", "Guilin",
      "Fangchenggang", "Fangchenggang",
      "Hechi", "Hechi",
      "Hezhou", "Hezhou",
      "Liuzhou", "Liuzhou",
      "Laibin", "Laibin",
      "Qinzhou", "Qinzhou",
      "Wuzhou", "Wuzhou",
      "Guigang", "Guigang",
      "Yulin", "Yulin");
      break;
    case "Guizhou" :
      var cityOptions = new Array(
      "Guiyang(*)", "Guiyang",
      "Anshun", "Anshun",
      "Bijie", "Bijie",
      "Dujun", "Dujun",
      "Kaili", "Kaili",
      "Liupanshui", "Liupanshui",
      "Tongren", "Tongren",
      "Xingyi", "XingYi",
      "Yuping", "Yuping",
      "Zunyi", "Zunyi");
      break;
    case "Hainan" :
      var cityOptions = new Array(
      "Haikou(*)", "Haikou",
      "Sanyan", "Sanyan",
      "Wuzhishan", "Wuzhishan",
      "Qionghai", "Qionghai",
      "Danzhou", "Danzhou",
      "Wenchang", "Wenchang",
      "Wanning", "Wanning",
      "Dongfang", "Dongfang",
      "Anding", "Anding",
      "Tunchang", "Tunchang",
      "Chengmai", "Chengmai",
      "Lingao", "Lingao",
      "Wanning", "Wanning",
      "Baishalizu", "Baishalizu",
      "Changjianglizu", "Changjianglizu",
      "LeDonglizu", "LeDonglizu",
      "LingshuiliZu", "LingshuiliZu",
      "Baotinglizu", "Baotinglizu",
      "Qiongzhonglizu", "Qiongzhonglizu",
      "the Xisha Islands", "the Xisha Islands",
      "the Nansha Islands", "the Nansha Islands",
      "the Zhongsha Islands", "the Zhongsha Islands"
      );
      break;
    case "Hebei" :
      var cityOptions = new Array(
      "Shijiazhuang(*)", "Shijiazhuang",
      "Baoding", "Baoding",
      "Beidaihe", "Beidaihe",
      "Cangzhou", "Cangzhou",
      "Chengde", "Chengde",
      "Fengrun", "Fengrun",
      "Handan", "Handan",
      "Hengshui", "Hengshui",
      "Langfang", "Langfang",
      "Nandaihe", "Nandaihe",
      "Qinhuangdao", "Qinhuangdao",
      "Tangshan", "Tangshan",
      "Xincheng", "Xincheng",
      "Xingtai", "Xingtai",
      "Zhangjiakou", "Zhangjiakou");
      break;
    case "Heilongjiang" :
      var cityOptions = new Array(
      "Harbin(*)", "Harbin",
      "Beian", "Beian",
      "Daqing", "DaQing",
      "DaHingganLing", "DaHingganLing",
      "Hegang", "Hegang",
      "Heihe", "Heihe",
      "Kiamusze", "Kiamusze",
      "Jixi", "Jixi",
      "Mutankiang", "Mutankiang",
      "Qiqihar", "Qiqihar",
      "Qitaihe", "Qitaihe",
      "Shuangyashan", "Shuangyashan",
      "Suihua", "Suihua",
      "Yichun", "Yichun");
      break;
    case "Henan" :
      var cityOptions = new Array(
      "Zhengzhou(*)", "Zhengzhou",
      "Anyang", "Anyang",
      "Hebi", "Hebi",
      "Huangchuan", "Huangchuan",
      "Jiaozuo", "Jiaozuo",
      "Jiyuan", "Jiyuan",
      "Kaifeng", "Kaifeng",
      "Luohe", "Luohe",
      "Luoyang", "Luoyang",
      "Nanyang", "Nanyang",
      "Pingdingshan", "Pingdingshan",
      "Puyang", "Puyang",
      "Sanmenxia", "Sanmenxia",
      "Shangqiu", "Shangqiu",
      "Xinxiang", "Xinxiang",
      "Xinyang", "Xinyang",
      "Xuchang", "Xuchang",
      "Zhoukou", "Zhoukou",
      "Zhumadian", "Zhumadian");
      break;
    case "Xianggang" :
      var cityOptions = new Array(
      "HongKong", "HongKong",
      "Kowloon", "Kowloon",
      "New Territories", "New Territories");
      break;
    case "Hubei" :
      var cityOptions = new Array(
      "Wuhan(*)", "Wuhan",
      "Enshi", "Enshi",
      "Ezhou", "Ezhou",
      "Huanggang", "Huanggang",
      "Huangshi", "Huangshi",
      "Jinmen", "Jinmen",
      "Jinzhou", "Jinzhou",
      "Qianjiang", "Qianjiang",
      "Shiyan", "Shiyan",
      "Suizhou", "Suizhou",
      "Wuxue", "Wuxue",
      "Xiantao", "Xiantao",
      "Xianning", "Xianning",
      "Xiangyang", "Xiangyang",
      "Xiangfan", "Xiangfan",
      "Xiaogan", "Xiaogan",
      "Yichang", "Yichang");
      break;
    case "Hunan" :
      var cityOptions = new Array(
      "Changsha(*)", "Changsha",
      "Changde", "Changde",
      "Chenzhou", "Chenzhou",
      "Hengyang", "Hengyang",
      "Huaihua", "Huaihua",
      "Jishou", "Jishou",
      "Loudi", "Loudi",
      "Shaoyang", "Shaoyang",
      "Xiangtan", "Xiangtan",
      "Yiyang", "Yiyang",
      "Yueyang", "Yueyang",
      "Yongzhou", "Yongzhou",
      "Zhangjiajie", "Zhangjiajie",
      "Zhuzhou", "Zhuzhou");
      break;
    case "Jiangsu" :
      var cityOptions = new Array(
      "Nanjing(*)", "Nanjing",
      "Changshu", "Changshu",
      "Changzhou", "Changzhou",
      "Haimen", "Haimen",
      "Huaian", "Huaian",
      "Jiangdu", "Jiangdu",
      "Jiangyin", "Jiangyin",
      "Kunshan", "Kunshan",
      "Lianyungang", "Lianyungang",
      "Nantong", "Nantong",
      "Qidong", "Qidong",
      "Shuyang", "Shuyang",
      "Suqian", "Suqian",
      "Suzhou", "Suzhou",
      "Taicang", "Taicang",
      "Taizhou", "Taizhou",
      "Tongli", "Tongli",
      "Wuxi", "Wuxi",
      "Xuzhou", "Xuzhou",
      "Yancheng", "Yancheng",
      "Yangzhou", "Yangzhou",
      "Yixing", "Yixing",
      "Yizheng", "Yizheng",
      "Zhangjiagang", "Zhangjiagang",
      "Zhenjiang", "Zhenjiang",
      "Zhouzhuang", "Zhouzhuang");
      break;
    case "Jiangxi" :
      var cityOptions = new Array(
      "Nanchang(*)", "Nanchang",
      "Fuzhou", "Fuzhou",
      "Ganzhou", "Ganzhou",
      "Jian", "Jian",
      "Jingdezhen", "Jingdezhen",
      "Jinggangshan", "Jinggangshan",
      "Jiujiang", "Jiujiang",
      "Lushan", "Lushan",
      "Pingxiang", "Pingxiang",
      "Shaorao", "Shaorao",
      "Xinyu", "Xinyu",
      "Yichun", "Yichun",
      "Yingtan", "Yingtan");
      break;
    case "Jilin" :
      var cityOptions = new Array(
      "Changchun(*)", "Changchun",
      "Baicheng", "Baicheng",
      "Baishan", "Baishan",
      "Hunchun", "Hunchun",
      "Liaoyuan", "Liaoyuan",
      "Meihe", "Meihe",
      "Jilin", "Jilin",
      "Siping", "Siping",
      "Songyuan", "Songyuan",
      "Tonghua", "Tonghua",
      "Yanji", "Yanji");
      break;
    case "Liaoning" :
      var cityOptions = new Array(
      "Shenyang(*)", "Shenyang",
      "Anshan", "Anshan",
      "Benxi", "Benxi",
      "Chaoyang", "Chaoyang",
      "Dalian", "Dalian",
      "Dandong", "Dandong",
      "Fushun", "Fushun",
      "Fuxin", "Fuxin",
      "Huludao", "Huludao",
      "Jinzhou", "Jinzhou",
      "Liaoyang", "Liaoyang",
      "Panjin", "Panjin",
      "Tieling", "Tieling",
      "Yingkou", "Yingkou");
      break;
    case "Aomen" :
      var cityOptions = new Array(
      "Macau", "Macau");
      break;
    case "Nei Mongol" :
      var cityOptions = new Array(
      "Hohhot(*)", "Hohhot",
      "Alxa League", "Alxa League",
      "Baotou", "Baotou",
      "Chifeng", "Chifeng",
      "Dongsheng", "Dongsheng",
      "Hailar", "Hailar",
      "Jining", "Jining",
      "Linhe", "Linhe",
      "Tongliao", "Tongliao",
      "Wuhai", "Wuhai",
      "Ulanhot", "Ulanhot",
      "Ordos", "Ordos",
      "Xilinhot", "Xilinhot");
      break;
    case "Ningxia" :
      var cityOptions = new Array(
      "Yinchuan(*)", "Yinchuan",
      "Guyuan", "Guyuan",
      "Zhongwei", "Zhongwei",
      "Shizuishan", "Shizuishan",
      "Wuzhong", "Wuzhong");
      break;
    case "Qinghai" :
      var cityOptions = new Array(
      "Xining(*)", "Xining",
      "Delingha", "Delingha",
      "Golmud", "Golmud",
      "Gonghe", "Gonghe",
      "Haidong", "Haidong",
      "Haiyan", "Haiyan",
      "Maqin", "Maqin",
      "Tongren", "Tongren",
      "Yushu", "Yushu");
      break;
    case "Shandong" :
      var cityOptions = new Array(
      "Jinan(*)", "Jinan",
      "Binzhou", "Binzhou",
      "Yanzhou", "Yanzhou",
      "Dezhou", "Dezhou",
      "Dongying", "Dongying",
      "Heze", "Heze",
      "Jining", "Jining",
      "Laiwu", "Laiwu",
      "Liaocheng", "Liaocheng",
      "Linyi", "Linyi",
      "Penglai", "Penglai",
      "Tsingtao", "Tsingtao",
      "Qufu", "Qufu",
      "Rizhao", "Rizhao",
      "Taian", "Taian",
      "Weifang", "Weifang",
      "Weihai", "Weihai",
      "Yantai", "Yantai",
      "Zaozhuang", "Zaozhuang",
      "Zibo", "Zibo");
      break;
    case "Shanghai" :
      var cityOptions = new Array(
      "Chongming", "Chongming",
      "Huangpu", "Huangpu",
      "Luwan", "Luwan",
      "Xuhui", "Xuhui",
      "Changning", "Changning",
      "Jingan", "Jingan",
      "Putuo", "Putuo",
      "Zhabei", "Zhabei",
      "Hongkou", "Hongkou",
      "Yangpu", "Yangpu",
      "Minxing", "Minxing",
      "Baoshan", "Baoshan",
      "Jiading", "Jiading",
      "Pudong", "Pudong",
      "Jinshan", "Jinshan",
      "Songjiang", "Songjiang",
      "Qingpu", "Qingpu",
      "Nanhui", "Nanhui",
      "Fengxian", "Fengxian",
      "Zhujiajiao", "Zhujiajiao");
      break;
    case "Shanxi" :
      var cityOptions = new Array(
      "Taiyuan(*)", "Taiyuan",
      "Changzhi", "Changzhi",
      "Datong", "Datong",
      "Houma", "Houma",
      "Jincheng", "Jincheng",
      "Lishi", "Lishi",
      "Linfen", "Linfen",
      "Ningwu", "Ningwu",
      "Shuozhou", "Shuozhou",
      "Xinzhou", "Xinzhou",
      "Yangquan", "Yangquan",
      "Yuci", "Yuci",
      "Jinzhong", "Jinzhong",
      "lvliang", "lvliang",
      "Yuncheng", "Yuncheng");
      break;
    case "Shaanxi" :
      var cityOptions = new Array(
      "Xian(*)", "Xian",
      "Ankang", "Ankang",
      "Baoji", "Baoji",
      "Hanzhong", "Hanzhong",
      "Weinan", "Weinan",
      "Shangzhou", "Shangzhou",
      "Suide", "Suide",
      "Tongzhou", "Tongzhou",
      "Xianyang", "Xianyang",
      "Yanan", "Yanan",
      "Tongchuan", "Tongchuan",
      "Yulin", "Yulin");
      break;
    case "Sichuan" :
      var cityOptions = new Array(
      "Chengdu(*)", "Chengdu",
      "Bazhou", "Bazhou",
      "Dazhou", "Dazhou",
      "Deyang", "Deyang",
      "Dujiangyan", "Dujiangyan",
      "EMeishan", "EMeishan",
      "Fuling", "Fuling",
      "Guangan", "Guangan",
      "Guangyuan", "Guangyuan",
      "Jiuzhaigou", "Jiuzhaigou",
      "Kangding", "Kangding",
      "Leshan", "Leshan",
      "Luzhou", "Luzhou",
      "Barkang", "Barkang",
      "Mianyang", "Mianyang",
      "Meishan", "Meishan",
      "Nanchong", "Nanchong",
      "Neijiang", "Neijiang",
      "Panzhihua", "Panzhihua",
      "Suining", "Suining",
      "Wenchuan", "Wenchuan",
      "Xichang", "Xichang",
      "Yaan", "Yaan",
      "Yibin", "Yibin",
      "Zigong", "Zigong",
      "Ziyang", "Ziyang");
      break;
    case "Taiwan" :
      var cityOptions = new Array(
      "Taipei(*)", "Taipei",
      "Keelung", "Keelung",
      "Tainan", "Tainan",
      "Taichung", "Taichung",
      "Kaohsiung", "Kaohsiung",
      "Pingtung", "Pingtung",
      "Nantou", "Nantou",
      "Yunlin", "Yunlin",
      "Hsinchu", "Hsinchu",
      "Changhua", "Changhua",
      "Maoli", "Maoli",
      "Chiayi", "Chiayi",
      "Hualien", "Hualien",
      "Taoyuan", "Taoyuan",
      "Yilan", "Yilan",
      "Taitung", "Taitung",
      "Quemoy", "Quemoy",
      "Matsu", "Matsu",
      "Penghu", "Penghu",
      "Others", "Others");
      break;
    case "Tianjin" :
      var cityOptions = new Array(
      "Tianjin", "Tianjin",
      "Heping", "Heping",
      "Dongli", "Dongli",
      "Hedong", "Hedong",
      "Xiqing", "Xiqing",
      "Hexi", "Hexi",
      "Jinnan", "Jinnan",
      "Nankai", "Nankai",
      "Beichen", "Beichen",
      "Hebei", "Hebei",
      "Wuqing", "Wuqing",
      "Hongqiao", "Hongqiao",
      "Tanggu", "Tanggu",
      "Hangu", "Hangu",
      "Dagang", "Dagang",
      "Ninghe", "Ninghe",
      "Jinghai", "Jinghai",
      "baodi", "baodi",
      "Jixian", "Jixian" );
      break;
    case "Xinjiang" :
      var cityOptions = new Array(
      "Urumqi(*)", "Urumqi",
      "Aksu", "Aksu",
      "Altay", "Altay",
      "Artush", "Artush",
      "Bole", "Bole",
      "Changji", "Changji",
      "Dongshan", "Dongshan",
      "Kumul", "Kumul",
      "Hotan", "Hotan",
      "Kashgar", "Kashgar",
      "Karamay", "Karamay",
      "Kuqa", "Kuqa",
      "Korla", "Korla",
      "Kuytun", "Kuytun",
      "Shihezi", "Shihezi",
      "Tacheng", "Tacheng",
      "Turpan", "Turpan",
      "Yining", "Yining");
      break;
    case "Xizang (Tibet)" :
      var cityOptions = new Array(
      "Lhasa(*)", "Lhasa",
      "Nagri", "Nagri",
      "Qamdo", "Qamdo",
      "Nyingchi", "Nyingchi",
      "Nagchu", "Nagchu",
      "Shigatse", "Shigatse",
      "Shannan", "Shannan");
      break;
    case "Twaiwan" :
      var cityOptions = new Array(
      "Taipei(*)", "Taipei",
      "Kaohsioung", "Kaohsioung");
      break;
    case "Yunnan" :
      var cityOptions = new Array(
      "Kunming(*)", "Kunming",
      "Dali", "Dali",
      "Baoshan", "Baoshan",
      "Chuxiong", "Chuxiong",
      "Dali", "Dali",
      "Dongchuan", "Dongchuan",
      "Gejiu", "Gejiu",
      "Jinghong", "Jinghong",
      "Kaiyuan", "Kaiyuan",
      "Lincang", "Lincang",
      "Lijiang", "Lijiang",
      "Liuku", "Liuku",
      "Luxi", "Luxi",
      "Qujing", "Qujing",
      "Simao", "Simao",
      "Wenshan", "Wenshan",
      "Xishuangbanna", "Xishuangbanna",
      "Yuxi", "Yuxi",
      "Zhongdian", "Zhongdian",
      "Zhaotong", "Zhaotong");
      break;
    case "Zhejiang" :
      var cityOptions = new Array(
      "Hangzhou(*)", "Hangzhou",
      "Anji", "Anji",
      "Cixi", "Cixi",
      "Dinghai", "Dinghai",
      "Fenghua", "Fenghua",
      "Haiyan", "Haiyan",
      "Huangyan", "Huangyan",
      "Huzhou", "Huzhou",
      "Jiaxing", "Jiaxing",
      "Jinhua", "Jinhua",
      "Linan", "Linan",
      "Linhai", "Linhai",
      "Lishui", "Lishui",
      "Ningbo", "Ningbo",
      "Ouhai", "Ouhai",
      "Pinghu", "Pinghu",
      "Qiandaohu", "Qiandaohu",
      "Quzhou", "Quzhou",
      "Jiangshan", "Jiangshan",
      "Ruian", "Ruian",
      "Shaoxing", "Shaoxing",
      "Shengzhou", "Shengzhou",
      "Taizhou", "Taizhou",
      "Wenling", "Wenling",
      "Wenzhou", "Wenzhou",
      "Yuyao", "Yuyao",
      "Zhoushan", "Zhoushan");
      break;
    case "Overseas" :
      var cityOptions = new Array(
      "America(*)", "America",
      "Britan", "Britan",
      "France", "France",
      "Switzerland", "Switzerland",
      "Australia", "Australia",
      "Newzland", "Newzland",
      "Canada", "Canada",
      "Austria", "Austria",
      "Korea", "Korea",
      "Janpan", "Janpan",
      "Germany", "Germany",
      "Italy", "Italy",
      "Spain", "Spain",
      "Russia", "Russia",
      "Thailand", "Thailand",
      "India", "India",
      "Holland", "Holland",
      "Singapore", "Singapore",
      "Europe", "Europe",
      "North America", "North America",
      "South America", "South America",
      "Asia", "Asia",
      "Africa", "Africa",
      "Oceania", "Oceania");
      break;
    default:
      var cityOptions = new Array("", "");
      break;
  }
  var cityObject = $('.'+cityClass).get(0);
  if(typeof(cityObject) != 'undefined'){
    cityObject.options.length = 0;
    var j = 0;
    for(var i = 0; i < cityOptions.length/2; i++) {
      j = i + 1;
      cityObject.options[j] = new Option(cityOptions[i*2],cityOptions[i*2+1]);
      if(cityOptions[i*2+1] == defaultCity) {
        cityObject.options[j].selected = true;
      }
    }
  }
};
$(document).ready(function(){
  if ($('#edit-submitted-location-state').length > 0) {
	setCityWebForm('edit-submitted-location-state', 'edit-submitted-location-city');
	$('#edit-submitted-location-state').change(function(){
	setCityWebForm('edit-submitted-location-state', 'edit-submitted-location-city');
	});
  } else if ($('#edit-submitted-toefl-right-state').length > 0) {
	setCityWebForm('edit-submitted-toefl-right-state', 'edit-submitted-toefl-right-city');
	$('#edit-submitted-toefl-right-state').change(function(){
	setCityWebForm('edit-submitted-toefl-right-state', 'edit-submitted-toefl-right-city');
	});
  }
});
function setCityWebForm(provinceid, cityid) {
  var provinceName = $('#'+provinceid).val();
  if (Drupal.settings.user_city && provinceName=='') {
    var user_city = Drupal.settings.user_city;
    provinceName = user_city;
  }
  switch (provinceName) {
    case "34" :
      var cityOptions = new Array(
      "Hefei(*)", "Hefei",
      "Anqing", "Anqing",
      "Bengbu", "Bengbu",
      "Bozhou", "Bozhou",
      "Chaohu", "Chaohu",
      "Chuzhou", "Chuzhou",
      "Fuyang", "Fuyang",
      "Guichi", "Guichi",
      "Huaibei", "Huaibei",
      "Huaihua", "Huaihua",
      "Huainan", "Huainan",
      "Huangshan", "Huangshan",
      "Jiuhuashan", "Jiuhuashan",
      "Liuan", "Liuan",
      "Maanshan", "Maanshan",
      "Suzhou", "Suzhou",
      "Tongling", "Tongling",
      "Tunxi", "Tunxi",
      "Wuhu", "Wuhu",
      "Xuancheng", "Xuancheng");
       break;
    case "11" :
      var cityOptions = new Array(
      "Dongcheng", "Dongcheng",
      "Xicheng", "Xicheng",
      "Chongwen", "Chongwen",
      "Xuanwu", "Xuanwu",
      "Chaoyang", "Chaoyang",
      "Fengtai", "Fengtai",
      "Shijingshan", "Shijingshan",
      "Haidian", "Haidian",
      "Mentougou", "Mentougou",
      "Fangshan", "Fangshan",
      "Tongzhou", "Tongzhou",
      "Shunyi", "Shunyi",
      "Changping", "Changping",
      "Daxing", "Daxing",
      "Pinggu", "Pinggu",
      "Huairou", "Huairou",
      "Miyun", "Miyun",
      "Yanqing", "Yanqing");
      break;
    case "97" :
      var cityOptions = new Array(
      "Wanzhou", "Wanzhou",
      "Fuling", "Fuling",
      "Yuzhou", "Yuzhou",
      "Dadukou", "Dadukou",
      "Jiangbei", "Jiangbei",
      "Shapingba", "Shapingba",
      "Jiulongpo","Jiulongpo",
      "Nanan", "Nanan",
      "Beibei", "Beibei",
      "Wansheng", "Wansheng",
      "Shuangjiao", "Shuangjiao",
      "Yubei", "Yubei",
      "Banan", "Banan",
      "Qianjiang", "Qianjiang",
      "Changshou", "Changshou",
      "Qijiang", "Qijiang",
      "Tongnan", "Tongnan",
      "Tongliang", "Tongliang",
      "Dazu", "Dazu",
      "Rongchang", "Rongchang",
      "Bishan", "Bishan",
      "Liangping", "Liangping",
      "Chengkou", "Chengkou",
      "Fengdu", "Fengdu",
      "Dianjiang", "Dianjiang",
      "Wulong", "Wulong",
      "Zhongxian", "Zhongxian",
      "Kaixian", "Kaixian",
      "Yunyang", "Yunyang",
      "Fengjie", "Fengjie",
      "Wushan", "Wushan",
      "Wuxi", "Wuxi",
      "Shizhu", "Shizhu",
      "Xiushan", "Xiushan",
      "Youyang", "Youyang",
      "Pengshui", "Pengshui",
      "JiangJin", "Jiangjin",
      "Hechuan", "Hechuan",
      "Yongzhou", "Yongzhou",
      "Nanzhou", "Nanzhou");
      break;
    case "35" :
      var cityOptions = new Array(
      "Fuzhou(*)", "Fuzhou",
      "Fuan", "Fuan",
      "Longyan", "Longyan",
      "Nanping", "Nanping",
      "Ningde", "Ningde",
      "Putian", "Putian",
      "Quanzhou", "Quanzhou",
      "Sanming", "Sanming",
      "Shaowu", "Shaowu",
      "Shishi", "Shishi",
      "Jinjiang", "Jinjiang",
      "YongAn", "YongAn",
      "Wuyishan", "Wuyishan",
      "Xiamen", "Xiamen",
      "Zhangzhou", "Zhangzhou");
       break;
    case "62" :
      var cityOptions = new Array(
      "Lanzhou(*)", "Lanzhou",
      "Baiyin", "Baiyin",
      "Dingxi", "Dingxi",
      "Dunhuang", "Dunhuang",
      "Gannan", "Gannan",
      "Jinchang", "Jinchang",
      "Jiuquan", "Jiuquan",
      "Linxia", "Linxia",
      "Pingliang", "Pingliang",
      "Tianshui", "Tianshui",
      "Wudu", "Wudu",
      "Wuwei", "Wuwei",
      "Xifeng", "Xifeng",
      "Jiayuguan","Jiayuguan",
      "Zhangye", "Zhangye");
      break;
    case "44" :
      var cityOptions = new Array(
      "Guangzhou(*)", "Guangzhou",
      "Chaoyang", "Chaoyang",
      "Chaozhou", "Chaozhou",
      "Chenghai", "Chenghai",
      "Dongguan", "Dongguan",
      "Foshan", "Foshan",
      "Heyuan", "Heyuan",
      "Huizhou", "Huizhou",
      "Jiangmen", "Jiangmen",
      "Jieyang", "Jieyang",
      "Kaiping", "Kaiping",
      "Maoming", "Maoming",
      "Meizhou", "Meizhou",
      "Qingyuan", "Qingyuan",
      "Shantou", "Shantou",
      "Shanwei", "Shanwei",
      "Shaoguan", "Shaoguan",
      "Shenzhen", "Shenzhen",
      "Shunde", "Shunde",
      "Yangjiang", "Yangjiang",
      "Yingde", "Yingde",
      "Yunfu", "Yunfu",
      "Zengcheng", "Zengcheng",
      "Zhanjiang", "Zhanjiang",
      "Zhaoqing", "Zhaoqing",
      "Zhongshan", "Zhongshan",
      "Zhuhai", "Zhuhai");
      break;
    case "45" :
      var cityOptions = new Array(
      "Nanning(*)", "Nanning",
      "Baise", "Baise",
      "Beihai", "Beihai",
      "Guilin", "Guilin",
      "Fangchenggang", "Fangchenggang",
      "Hechi", "Hechi",
      "Hezhou", "Hezhou",
      "Liuzhou", "Liuzhou",
      "Laibin", "Laibin",
      "Qinzhou", "Qinzhou",
      "Wuzhou", "Wuzhou",
      "Guigang", "Guigang",
      "Yulin", "Yulin");
      break;
    case "52" :
      var cityOptions = new Array(
      "Guiyang(*)", "Guiyang",
      "Anshun", "Anshun",
      "Bijie", "Bijie",
      "Dujun", "Dujun",
      "Kaili", "Kaili",
      "Liupanshui", "Liupanshui",
      "Tongren", "Tongren",
      "Xingyi", "XingYi",
      "Yuping", "Yuping",
      "Zunyi", "Zunyi");
      break;
    case "46" :
      var cityOptions = new Array(
      "Haikou(*)", "Haikou",
      "Sanyan", "Sanyan",
      "Wuzhishan", "Wuzhishan",
      "Qionghai", "Qionghai",
      "Danzhou", "Danzhou",
      "Wenchang", "Wenchang",
      "Wanning", "Wanning",
      "Dongfang", "Dongfang",
      "Anding", "Anding",
      "Tunchang", "Tunchang",
      "Chengmai", "Chengmai",
      "Lingao", "Lingao",
      "Wanning", "Wanning",
      "Baishalizu", "Baishalizu",
      "Changjianglizu", "Changjianglizu",
      "LeDonglizu", "LeDonglizu",
      "LingshuiliZu", "LingshuiliZu",
      "Baotinglizu", "Baotinglizu",
      "Qiongzhonglizu", "Qiongzhonglizu",
      "the Xisha Islands", "the Xisha Islands",
      "the Nansha Islands", "the Nansha Islands",
      "the Zhongsha Islands", "the Zhongsha Islands"
      );
      break;
    case "13" :
      var cityOptions = new Array(
      "Shijiazhuang(*)", "Shijiazhuang",
      "Baoding", "Baoding",
      "Beidaihe", "Beidaihe",
      "Cangzhou", "Cangzhou",
      "Chengde", "Chengde",
      "Fengrun", "Fengrun",
      "Handan", "Handan",
      "Hengshui", "Hengshui",
      "Langfang", "Langfang",
      "Nandaihe", "Nandaihe",
      "Qinhuangdao", "Qinhuangdao",
      "Tangshan", "Tangshan",
      "Xincheng", "Xincheng",
      "Xingtai", "Xingtai",
      "Zhangjiakou", "Zhangjiakou");
      break;
    case "23" :
      var cityOptions = new Array(
      "Harbin(*)", "Harbin",
      "Beian", "Beian",
      "Daqing", "DaQing",
      "DaHingganLing", "DaHingganLing",
      "Hegang", "Hegang",
      "Heihe", "Heihe",
      "Kiamusze", "Kiamusze",
      "Jixi", "Jixi",
      "Mutankiang", "Mutankiang",
      "Qiqihar", "Qiqihar",
      "Qitaihe", "Qitaihe",
      "Shuangyashan", "Shuangyashan",
      "Suihua", "Suihua",
      "Yichun", "Yichun");
      break;
    case "41" :
      var cityOptions = new Array(
      "Zhengzhou(*)", "Zhengzhou",
      "Anyang", "Anyang",
      "Hebi", "Hebi",
      "Huangchuan", "Huangchuan",
      "Jiaozuo", "Jiaozuo",
      "Jiyuan", "Jiyuan",
      "Kaifeng", "Kaifeng",
      "Luohe", "Luohe",
      "Luoyang", "Luoyang",
      "Nanyang", "Nanyang",
      "Pingdingshan", "Pingdingshan",
      "Puyang", "Puyang",
      "Sanmenxia", "Sanmenxia",
      "Shangqiu", "Shangqiu",
      "Xinxiang", "Xinxiang",
      "Xinyang", "Xinyang",
      "Xuchang", "Xuchang",
      "Zhoukou", "Zhoukou",
      "Zhumadian", "Zhumadian");
      break;
    case "91" :
      var cityOptions = new Array(
      "HongKong", "HongKong",
      "Kowloon", "Kowloon",
      "New Territories", "New Territories");
      break;
    case "42" :
      var cityOptions = new Array(
      "Wuhan(*)", "Wuhan",
      "Enshi", "Enshi",
      "Ezhou", "Ezhou",
      "Huanggang", "Huanggang",
      "Huangshi", "Huangshi",
      "Jinmen", "Jinmen",
      "Jinzhou", "Jinzhou",
      "Qianjiang", "Qianjiang",
      "Shiyan", "Shiyan",
      "Suizhou", "Suizhou",
      "Wuxue", "Wuxue",
      "Xiantao", "Xiantao",
      "Xianning", "Xianning",
      "Xiangyang", "Xiangyang",
      "Xiangfan", "Xiangfan",
      "Xiaogan", "Xiaogan",
      "Yichang", "Yichang");
      break;
    case "43" :
      var cityOptions = new Array(
      "Changsha(*)", "Changsha",
      "Changde", "Changde",
      "Chenzhou", "Chenzhou",
      "Hengyang", "Hengyang",
      "Huaihua", "Huaihua",
      "Jishou", "Jishou",
      "Loudi", "Loudi",
      "Shaoyang", "Shaoyang",
      "Xiangtan", "Xiangtan",
      "Yiyang", "Yiyang",
      "Yueyang", "Yueyang",
      "Yongzhou", "Yongzhou",
      "Zhangjiajie", "Zhangjiajie",
      "Zhuzhou", "Zhuzhou");
      break;
    case "32" :
      var cityOptions = new Array(
      "Nanjing(*)", "Nanjing",
      "Changshu", "Changshu",
      "Changzhou", "Changzhou",
      "Haimen", "Haimen",
      "Huaian", "Huaian",
      "Jiangdu", "Jiangdu",
      "Jiangyin", "Jiangyin",
      "Kunshan", "Kunshan",
      "Lianyungang", "Lianyungang",
      "Nantong", "Nantong",
      "Qidong", "Qidong",
      "Shuyang", "Shuyang",
      "Suqian", "Suqian",
      "Suzhou", "Suzhou",
      "Taicang", "Taicang",
      "Taizhou", "Taizhou",
      "Tongli", "Tongli",
      "Wuxi", "Wuxi",
      "Xuzhou", "Xuzhou",
      "Yancheng", "Yancheng",
      "Yangzhou", "Yangzhou",
      "Yixing", "Yixing",
      "Yizheng", "Yizheng",
      "Zhangjiagang", "Zhangjiagang",
      "Zhenjiang", "Zhenjiang",
      "Zhouzhuang", "Zhouzhuang");
      break;
    case "36" :
      var cityOptions = new Array(
      "Nanchang(*)", "Nanchang",
      "Fuzhou", "Fuzhou",
      "Ganzhou", "Ganzhou",
      "Jian", "Jian",
      "Jingdezhen", "Jingdezhen",
      "Jinggangshan", "Jinggangshan",
      "Jiujiang", "Jiujiang",
      "Lushan", "Lushan",
      "Pingxiang", "Pingxiang",
      "Shaorao", "Shaorao",
      "Xinyu", "Xinyu",
      "Yichun", "Yichun",
      "Yingtan", "Yingtan");
      break;
    case "22" :
      var cityOptions = new Array(
      "Changchun(*)", "Changchun",
      "Baicheng", "Baicheng",
      "Baishan", "Baishan",
      "Hunchun", "Hunchun",
      "Liaoyuan", "Liaoyuan",
      "Meihe", "Meihe",
      "Jilin", "Jilin",
      "Siping", "Siping",
      "Songyuan", "Songyuan",
      "Tonghua", "Tonghua",
      "Yanji", "Yanji");
      break;
    case "21" :
      var cityOptions = new Array(
      "Shenyang(*)", "Shenyang",
      "Anshan", "Anshan",
      "Benxi", "Benxi",
      "Chaoyang", "Chaoyang",
      "Dalian", "Dalian",
      "Dandong", "Dandong",
      "Fushun", "Fushun",
      "Fuxin", "Fuxin",
      "Huludao", "Huludao",
      "Jinzhou", "Jinzhou",
      "Liaoyang", "Liaoyang",
      "Panjin", "Panjin",
      "Tieling", "Tieling",
      "Yingkou", "Yingkou");
      break;
    case "92" :
      var cityOptions = new Array(
      "Macau", "Macau");
      break;
    case "15" :
      var cityOptions = new Array(
      "Hohhot(*)", "Hohhot",
      "Alxa League", "Alxa League",
      "Baotou", "Baotou",
      "Chifeng", "Chifeng",
      "Dongsheng", "Dongsheng",
      "Hailar", "Hailar",
      "Jining", "Jining",
      "Linhe", "Linhe",
      "Tongliao", "Tongliao",
      "Wuhai", "Wuhai",
      "Ulanhot", "Ulanhot",
      "Ordos", "Ordos",
      "Xilinhot", "Xilinhot");
      break;
    case "64" :
      var cityOptions = new Array(
      "Yinchuan(*)", "Yinchuan",
      "Guyuan", "Guyuan",
      "Zhongwei", "Zhongwei",
      "Shizuishan", "Shizuishan",
      "Wuzhong", "Wuzhong");
      break;
    case "63" :
      var cityOptions = new Array(
      "Xining(*)", "Xining",
      "Delingha", "Delingha",
      "Golmud", "Golmud",
      "Gonghe", "Gonghe",
      "Haidong", "Haidong",
      "Haiyan", "Haiyan",
      "Maqin", "Maqin",
      "Tongren", "Tongren",
      "Yushu", "Yushu");
      break;
    case "37" :
      var cityOptions = new Array(
      "Jinan(*)", "Jinan",
      "Binzhou", "Binzhou",
      "Yanzhou", "Yanzhou",
      "Dezhou", "Dezhou",
      "Dongying", "Dongying",
      "Heze", "Heze",
      "Jining", "Jining",
      "Laiwu", "Laiwu",
      "Liaocheng", "Liaocheng",
      "Linyi", "Linyi",
      "Penglai", "Penglai",
      "Tsingtao", "Tsingtao",
      "Qufu", "Qufu",
      "Rizhao", "Rizhao",
      "Taian", "Taian",
      "Weifang", "Weifang",
      "Weihai", "Weihai",
      "Yantai", "Yantai",
      "Zaozhuang", "Zaozhuang",
      "Zibo", "Zibo");
      break;
    case "31" :
      var cityOptions = new Array(
      "Chongming", "Chongming",
      "Huangpu", "Huangpu",
      "Luwan", "Luwan",
      "Xuhui", "Xuhui",
      "Changning", "Changning",
      "Jingan", "Jingan",
      "Putuo", "Putuo",
      "Zhabei", "Zhabei",
      "Hongkou", "Hongkou",
      "Yangpu", "Yangpu",
      "Minxing", "Minxing",
      "Baoshan", "Baoshan",
      "Jiading", "Jiading",
      "Pudong", "Pudong",
      "Jinshan", "Jinshan",
      "Songjiang", "Songjiang",
      "Qingpu", "Qingpu",
      "Nanhui", "Nanhui",
      "Fengxian", "Fengxian",
      "Zhujiajiao", "Zhujiajiao");
      break;
    case "14" :
      var cityOptions = new Array(
      "Taiyuan(*)", "Taiyuan",
      "Changzhi", "Changzhi",
      "Datong", "Datong",
      "Houma", "Houma",
      "Jincheng", "Jincheng",
      "Lishi", "Lishi",
      "Linfen", "Linfen",
      "Ningwu", "Ningwu",
      "Shuozhou", "Shuozhou",
      "Xinzhou", "Xinzhou",
      "Yangquan", "Yangquan",
      "Yuci", "Yuci",
      "Jinzhong", "Jinzhong",
      "lvliang", "lvliang",
      "Yuncheng", "Yuncheng");
      break;
    case "61" :
      var cityOptions = new Array(
      "Xian(*)", "Xian",
      "Ankang", "Ankang",
      "Baoji", "Baoji",
      "Hanzhong", "Hanzhong",
      "Weinan", "Weinan",
      "Shangzhou", "Shangzhou",
      "Suide", "Suide",
      "Tongzhou", "Tongzhou",
      "Xianyang", "Xianyang",
      "Yanan", "Yanan",
      "Tongchuan", "Tongchuan",
      "Yulin", "Yulin");
      break;
    case "51" :
      var cityOptions = new Array(
      "Chengdu(*)", "Chengdu",
      "Bazhou", "Bazhou",
      "Dazhou", "Dazhou",
      "Deyang", "Deyang",
      "Dujiangyan", "Dujiangyan",
      "EMeishan", "EMeishan",
      "Fuling", "Fuling",
      "Guangan", "Guangan",
      "Guangyuan", "Guangyuan",
      "Jiuzhaigou", "Jiuzhaigou",
      "Kangding", "Kangding",
      "Leshan", "Leshan",
      "Luzhou", "Luzhou",
      "Barkang", "Barkang",
      "Mianyang", "Mianyang",
      "Meishan", "Meishan",
      "Nanchong", "Nanchong",
      "Neijiang", "Neijiang",
      "Panzhihua", "Panzhihua",
      "Suining", "Suining",
      "Wenchuan", "Wenchuan",
      "Xichang", "Xichang",
      "Yaan", "Yaan",
      "Yibin", "Yibin",
      "Zigong", "Zigong",
      "Ziyang", "Ziyang");
      break;
    case "71" :
      var cityOptions = new Array(
      "Taipei(*)", "Taipei",
      "Keelung", "Keelung",
      "Tainan", "Tainan",
      "Taichung", "Taichung",
      "Kaohsiung", "Kaohsiung",
      "Pingtung", "Pingtung",
      "Nantou", "Nantou",
      "Yunlin", "Yunlin",
      "Hsinchu", "Hsinchu",
      "Changhua", "Changhua",
      "Maoli", "Maoli",
      "Chiayi", "Chiayi",
      "Hualien", "Hualien",
      "Taoyuan", "Taoyuan",
      "Yilan", "Yilan",
      "Taitung", "Taitung",
      "Quemoy", "Quemoy",
      "Matsu", "Matsu",
      "Penghu", "Penghu",
      "Others", "Others");
      break;
    case "12" :
      var cityOptions = new Array(
      "Tianjin", "Tianjin",
      "Heping", "Heping",
      "Dongli", "Dongli",
      "Hedong", "Hedong",
      "Xiqing", "Xiqing",
      "Hexi", "Hexi",
      "Jinnan", "Jinnan",
      "Nankai", "Nankai",
      "Beichen", "Beichen",
      "Hebei", "Hebei",
      "Wuqing", "Wuqing",
      "Hongqiao", "Hongqiao",
      "Tanggu", "Tanggu",
      "Hangu", "Hangu",
      "Dagang", "Dagang",
      "Ninghe", "Ninghe",
      "Jinghai", "Jinghai",
      "baodi", "baodi",
      "Jixian", "Jixian" );
      break;
    case "65" :
      var cityOptions = new Array(
      "Urumqi(*)", "Urumqi",
      "Aksu", "Aksu",
      "Altay", "Altay",
      "Artush", "Artush",
      "Bole", "Bole",
      "Changji", "Changji",
      "Dongshan", "Dongshan",
      "Kumul", "Kumul",
      "Hotan", "Hotan",
      "Kashgar", "Kashgar",
      "Karamay", "Karamay",
      "Kuqa", "Kuqa",
      "Korla", "Korla",
      "Kuytun", "Kuytun",
      "Shihezi", "Shihezi",
      "Tacheng", "Tacheng",
      "Turpan", "Turpan",
      "Yining", "Yining");
      break;
    case "54" :
      var cityOptions = new Array(
      "Lhasa(*)", "Lhasa",
      "Nagri", "Nagri",
      "Qamdo", "Qamdo",
      "Nyingchi", "Nyingchi",
      "Nagchu", "Nagchu",
      "Shigatse", "Shigatse",
      "Shannan", "Shannan");
      break;
    case "Twaiwan" :
      var cityOptions = new Array(
      "Taipei(*)", "Taipei",
      "Kaohsioung", "Kaohsioung");
      break;
    case "53" :
      var cityOptions = new Array(
      "Kunming(*)", "Kunming",
      "Dali", "Dali",
      "Baoshan", "Baoshan",
      "Chuxiong", "Chuxiong",
      "Dali", "Dali",
      "Dongchuan", "Dongchuan",
      "Gejiu", "Gejiu",
      "Jinghong", "Jinghong",
      "Kaiyuan", "Kaiyuan",
      "Lincang", "Lincang",
      "Lijiang", "Lijiang",
      "Liuku", "Liuku",
      "Luxi", "Luxi",
      "Qujing", "Qujing",
      "Simao", "Simao",
      "Wenshan", "Wenshan",
      "Xishuangbanna", "Xishuangbanna",
      "Yuxi", "Yuxi",
      "Zhongdian", "Zhongdian",
      "Zhaotong", "Zhaotong");
      break;
    case "33" :
      var cityOptions = new Array(
      "Hangzhou(*)", "Hangzhou",
      "Anji", "Anji",
      "Cixi", "Cixi",
      "Dinghai", "Dinghai",
      "Fenghua", "Fenghua",
      "Haiyan", "Haiyan",
      "Huangyan", "Huangyan",
      "Huzhou", "Huzhou",
      "Jiaxing", "Jiaxing",
      "Jinhua", "Jinhua",
      "Linan", "Linan",
      "Linhai", "Linhai",
      "Lishui", "Lishui",
      "Ningbo", "Ningbo",
      "Ouhai", "Ouhai",
      "Pinghu", "Pinghu",
      "Qiandaohu", "Qiandaohu",
      "Quzhou", "Quzhou",
      "Jiangshan", "Jiangshan",
      "Ruian", "Ruian",
      "Shaoxing", "Shaoxing",
      "Shengzhou", "Shengzhou",
      "Taizhou", "Taizhou",
      "Wenling", "Wenling",
      "Wenzhou", "Wenzhou",
      "Yuyao", "Yuyao",
      "Zhoushan", "Zhoushan");
      break;
    case "Overseas" :
      var cityOptions = new Array(
      "America(*)", "America",
      "Britan", "Britan",
      "France", "France",
      "Switzerland", "Switzerland",
      "Australia", "Australia",
      "Newzland", "Newzland",
      "Canada", "Canada",
      "Austria", "Austria",
      "Korea", "Korea",
      "Janpan", "Janpan",
      "Germany", "Germany",
      "Italy", "Italy",
      "Spain", "Spain",
      "Russia", "Russia",
      "Thailand", "Thailand",
      "India", "India",
      "Holland", "Holland",
      "Singapore", "Singapore",
      "Europe", "Europe",
      "North America", "North America",
      "South America", "South America",
      "Asia", "Asia",
      "Africa", "Africa",
      "Oceania", "Oceania");
      break;
    default:
      var cityOptions = new Array();
      break;
  }
  var defaultCity = $('#'+cityid).val();
  var cityObject = document.createElement("select");
  var newObjectName = $('#'+cityid).attr("name");
  cityObject.setAttribute("id", cityid);
  cityObject.setAttribute("name", newObjectName);
  cityObject.setAttribute("class", "form-select required");
  cityObject.options.length = 0;
  var j = 0;
  cityObject.options[0] = new Option("-城市-", "");
  for(var i = 0; i < cityOptions.length/2; i++) {
    j = i + 1;
    cityObject.options[j] = new Option(cityOptions[i*2],cityOptions[i*2+1]);
    if(cityOptions[i*2+1] == defaultCity) {
      cityObject.options[j].selected = true;
    }
  }
  $('#'+cityid).parent().html(cityObject);
};
Drupal.behaviors.bottom_schools_recommendation = function(context) {
  $('.toggle-bottom-schools', context).click(function() {
    $click = $(this);
    
    $click.addClass('recommend-loading');
    
    $('.school-list-mask').show();
    $.ajax({
        url: Drupal.settings.basePath + 'zinch/ajax/block_bottom_schools_recommendation',
        data: 'from=' + encodeURIComponent(location.href) + '&where=' + $('.bottom-schools-list', $click.parent().parent().parent()).attr('rel'),
        dataType: 'json',
        success: function(res){
          $('.bottom-schools-list-wrapper', $click.parent().parent().parent()).html(res.content);
          $('.bottom-schools-list-wrapper .bottom-school-shout-out a', $click.parent().parent().parent()).each(function() {
            $(this).attr('href', this.pathname.replace(/^([^\/])/,'/$1') + '?from=' + encodeURIComponent(location.href) + '&where=' + $('.bottom-schools-list', $click.parent().parent().parent()).attr('rel'));
          })
          $('.school-list-mask').hide();
          $click.removeClass('recommend-loading');
          Drupal.attachBehaviors($('.bottom-schools-list', $click.parent().parent().parent()));
      }
    });
  })
};
// $Id: autocomplete.js,v 1.23 2008/01/04 11:53:21 goba Exp $

/**
 * Attaches the autocomplete behavior to all required fields
 */
Drupal.behaviors.autocomplete = function (context) {
  var acdb = [];
  $('input.autocomplete:not(.autocomplete-processed)', context).each(function () {
    var uri = this.value;
    if (!acdb[uri]) {
      acdb[uri] = new Drupal.ACDB(uri);
    }
    var input = $('#' + this.id.substr(0, this.id.length - 13))
      .attr('autocomplete', 'OFF')[0];
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
    $(this).addClass('autocomplete-processed');
  });
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).size() == 0;
};

/**
 * An AutoComplete object
 */
Drupal.jsAC = function (input, db) {
  var ac = this;
  this.input = input;
  this.db = db;

  $(this.input)
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow
      this.selectDown();
      return false;
    case 38: // up arrow
      this.selectUp();
      return false;
    default: // all other keys
      return true;
  }
};

/**
 * Handler for the "keyup" event
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // shift
    case 17: // ctrl
    case 18: // alt
    case 20: // caps lock
    case 33: // page up
    case 34: // page down
    case 35: // end
    case 36: // home
    case 37: // left arrow
    case 38: // up arrow
    case 39: // right arrow
    case 40: // down arrow
      return true;

    case 9:  // tab
    case 13: // enter
    case 27: // esc
      this.hidePopup(e.keyCode);
      return true;

    default: // all other keys
      if (input.value.length > 0)
        this.populatePopup();
      else
        this.hidePopup(e.keyCode);
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = node.autocompleteValue;
};

/**
 * Highlights the next suggestion
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else {
    var lis = $('li', this.popup);
    if (lis.size() > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
};

/**
 * Unhighlights a suggestion
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
};

/**
 * Hides the autocomplete suggestions
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = this.selected.autocompleteValue;
  }
  // Hide popup
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function() { $(popup).remove(); });
  }
  this.selected = false;
};

/**
 * Positions the suggestions popup and starts a search
 */
Drupal.jsAC.prototype.populatePopup = function () {
  // Show popup
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = document.createElement('div');
  this.popup.id = 'autocomplete';
  this.popup.owner = this;
  $(this.popup).css({
    marginTop: this.input.offsetHeight +'px',
    width: (this.input.offsetWidth - 4) +'px',
    display: 'none'
  });
  $(this.input).before(this.popup);

  // Do search
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches
  var ul = document.createElement('ul');
  var ac = this;
  for (key in matches) {
    var li = document.createElement('li');
    $(li)
      .html('<div>'+ matches[key] +'</div>')
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); });
    li.autocompleteValue = key;
    $(ul).append(li);
  }

  // Show popup with matches, if any
  if (this.popup) {
    if (ul.childNodes.length > 0) {
      $(this.popup).empty().append(ul).show();
    }
    else {
      $(this.popup).css({visibility: 'hidden'});
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this key has been searched for before
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function() {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion
    $.ajax({
      type: "GET",
      url: db.uri +'/'+ Drupal.encodeURIComponent(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches['status'] == 'undefined' || matches['status'] != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ahahError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request
 */
Drupal.ACDB.prototype.cancel = function() {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};
;
 Drupal.behaviors.zinchEvent = function (context) {
    
    // attending and stream
    $("#zich-comment-wrapper").css("display", "block")
    $('#block-views-attend_event_user_list-block_2').css("display", "none");

    $("#event-extra-element .event-stream").click(function () {
      $(this).addClass("active").siblings("li").removeClass("active");
      $("#block-zinch_event-1").css("display", "block");
      $("#block-views-zinch_stream_all-block_1").css("display", "block");
      $('#block-views-attend_event_user_list-block_2').css("display", "none");
      return false;
    });
  $('#event-extra-element .event-attending').click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $("#block-zinch_event-1").css("display", "none");
      $("#block-views-zinch_stream_all-block_1").css("display", "none");
    $('#block-views-attend_event_user_list-block_2').css("display", "block");
    return false;
  });

  $("#block-views-attend_event_user_list-block_1 .number-people").click(
  function () {
    var attending = $("#event-extra-element .event-attending");
    $(attending).addClass("active").siblings("li").removeClass("active");
    $("#zich-comment-wrapper").css("display", "none")
    $('#block-views-attend_event_user_list-block_2').css("display", "block");
  });
  $('.children-reply-form .textarea-processed').val('');
  if(Drupal.settings.event_custom_timezone == 'yes') {
    var options = '<option value="America/New_York">United States/Eastern</option>';
    options += '<option value="America/Chicago">United States/Central</option>';
    options += '<option value="America/Denver">United States/Mountain</option>';
    options += '<option value="America/Phoenix">United States/Mountain (Arizona)</option>';
    options += '<option value="America/Los_Angeles">United States/Pacific</option>';
    options += '<option value="America/Anchorage">United States/Alaska</option>';
    options += '<option value="Pacific/Honolulu">United States/Hawaii</option>';
    options += '<option value="America/Puerto_Rico">United States/Puerto Rico</option>';
    var selected = $("#edit-field-event-date-0-timezone-timezone option[selected$='selected']").val();
    $("#edit-field-event-date-0-timezone-timezone option[value^='America']").remove();
    $("#edit-field-event-date-0-timezone-timezone option[value$='Africa/Abidjan']").before(options);
    $("#edit-field-event-date-0-timezone-timezone option[value$='"+selected+"']").attr('selected', true);
    Drupal.settings.event_custom_timezone = 'no';
  }
}

$(document).ready(function () {
		// for ticket#4940
		$('#edit-field-event-date-0-value-wrapper label').append('<span style="margin-left:60px;">Start Time <span class="form-required" title="This field is required.">*</span></span>');
		$('#edit-field-event-date-0-value2-wrapper label').append('<span style="margin-left:70px;">End Time</span>');
		$("#edit-field-event-date-0-timezone-timezone option:first-child").remove();

		// generate a csv link
		$('a.download_event_csv').click(function () {
			if ($(this).hasClass('generate')) {
				$('div.download_event').append("<span>Downloading......</span>");
				var download_csv = function (data) {
					$('a.download_event_csv').attr('href', data.href);
					$('a.download_event_csv').removeClass('generate');
					$('div.download_event span').remove();
					window.location.href = data.href;
				}

				$.ajax({
					type: 'POST',
					url: this.href,
					dataType: 'json',
					success: download_csv,
					data: 'nid='+$(this).attr('id')+'&title='+$(this).attr('title')
				});
				
				return false;
			}
		});

		// generate a csv link
		$('a.download_additional_questions_csv').click(function () {
			if ($(this).attr('href') == '/download_additional_questions_csv') {
				$('span.download_additional_questions_csv').append(" <span>Generating...</span>");
				var download_csv = function (data) {
					$('a.download_additional_questions_csv').attr('href', data.href);
					$('span.download_additional_questions_csv span').remove();
					window.location.href = data.href;
				}

				$.ajax({
					type: 'POST',
					url: this.href,
					dataType: 'json',
					success: download_csv
				});
				
				return false;
			}
		});

	$.cookie('block_generate', '', { expires: -1 }); // delete cookie
	// generate a csv link for page - "admin/reports/download_data_csv"
	$('a.download_data_csv').click(function () {
		var block_generate = $.cookie('block_generate'); // get cookie
		if (block_generate == 'block') {
			return false;
		}
		$.cookie('block_generate', 'block'); // set cookie

		$(this).parent().append('<span style="padding-left:5px;">Generating......</span>');
		var download_data_csv = function (data) {
			$('div.download_data_csv_container span').remove();
			window.location.href = data.href;
			$.cookie('block_generate', '', { expires: -1 }); // delete cookie
		}

		$.ajax({
			type: 'POST',
			url: this.href,
			dataType: 'json',
			success: download_data_csv,
			data: 'from='+$(this).attr('from')+'&title='+$(this).attr('title')+'&id='+$(this).attr('id')
		});
				
		return false;
	});

		// make "See map" link go to a new window
		$(".event-node .event-where a").attr("target", "_blank");

    //hide children comment
    var childComment = $("#zich-comment-wrapper .zinch-comment .children-comment-container");
//    childComment.css("display", "none");
    var childCommentForm = $("#zich-comment-wrapper .zinch-comment .children-reply-form");
//    childCommentForm.css("display", "none");
    $("#zich-comment-wrapper .zinch-comment .user-full-profile .reply-comment-control").toggle(
    function () {
      $(this).parents(".user-info").filter(":first").siblings(".children-comment-container").css("display", "none")
                                                  .siblings(".children-reply-form").css("display", "none");
    },
    function () {
      $(this).parents(".user-info").filter(":first").siblings(".children-comment-container").css("display", "block")
                                                  .siblings(".children-reply-form").css("display", "block");
    }
    );
  }
);

function changeSchoolUser(e) {
  $("#zich-comment-wrapper > .zinch-comment-school-user-item").css("display", "block");
  $("#zich-comment-wrapper > .zinch-comment-school").css("display", "none");
  $("#zich-comment-wrapper > .zinch-comment-user").css("display", "none");
  $(e).parent("li").addClass("active").siblings().removeClass("active");
  return false;
}

function changeSchool(e) {
  $("#zich-comment-wrapper > .zinch-comment-school-user-item").css("display", "none");
  $("#zich-comment-wrapper > .zinch-comment-school").css("display", "block");
  $("#zich-comment-wrapper > .zinch-comment-user").css("display", "none");
  $(e).parent("li").addClass("active").siblings().removeClass("active");
  return false;
}

function changeUser(e) {
  $("#zich-comment-wrapper > .zinch-comment-school-user-item").css("display", "none");
  $("#zich-comment-wrapper > .zinch-comment-school").css("display", "none");
  $("#zich-comment-wrapper > .zinch-comment-user").css("display", "block");
  $(e).parent("li").addClass("active").siblings().removeClass("active");
  return false;
}

//lester added, to do the ajax signup
function zinch_signup(id, op, popup) {

  if(popup){

    if(/msie/.test(navigator.userAgent.toLowerCase())){
      $('#attend-form-'+id).css({"display":"block"});
    }else{
      $('#attend-form-'+id).show('slow');
    }

    return false;
  
  }else{
    
    var validate = zinch_attend_validate(id);
    var url = Drupal.settings.zinch_signup_handler+'/'+id+'/'+op;
    //$('#signup-loading-'+id).addClass('onloading');
    
    var realname=$('#attend-form-realname-'+id).val();
    var email=$('#attend-form-email-'+id).val();
    var cellphone=$('#attend-form-cellphone-'+id).val();
    
    if(validate){

      //use sync request, can get better experience.
      $.ajax({
        //async: false,
        type: 'POST',
        url: url,
        data: '&realname='+realname+'&email='+email+'&cellphone='+cellphone,
        success: function(data) {

          $('#attend-form-'+id).hide();
          $('#signup-button-'+id).replaceWith(data);
          //console.log(data);

        }
      })

      return false;

    }
    

  }

  
  return false;
  
}

function zinch_attend_validate(id){

  var validated=true;
  var realname=$('#attend-form-realname-'+id).val();
  var email=$('#attend-form-email-'+id).val();
  var cellphone=$('#attend-form-cellphone-'+id).val();
  var realname_validate = /^[A-Za-z0-9]+ [A-Za-z0-9]+$/i;
  var email_validation = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
  var phone_validation = /1[3485]\d{9}$/;

  if(realname.length == 0){

    $('#edit-attend-form-realname-'+id).html('<span class="error"></span>姓名不能为空');
    validated = false;
    
  }else if (!realname_validate.test(realname)){

    $('#edit-attend-form-realname-'+id).html('<span class="error"></span>姓名格式错误');
    validated = false;

  }else{ 

    $('#edit-attend-form-realname-'+id).html('<span class="correct"></span>');
  }

  if(email.length == 0){

    $('#edit-attend-form-email-'+id).html('<span class="error"></span>电子邮件不能为空');
    validated = false;

  }else if(!email_validation.test(email)){

    $('#edit-attend-form-email-'+id).html('<span class="error"></span>电子邮件格式错误');
    validated = false;

  }else{

    $('#edit-attend-form-email-'+id).html('<span class="correct"></span>');

  }

  if(cellphone.length == 0){

    $('#edit-attend-form-cellphone-'+id).html('<span class="error"></span>手机号码不能为空');
    validated = false;

  }else if (!phone_validation.test(cellphone)){

    $('#edit-attend-form-cellphone-'+id).html('<span class="error"></span>手机号码格式错误');
    validated = false;
  
  }else{

    $('#edit-attend-form-cellphone-'+id).html('<span class="correct"></span>');

  }

  return validated;
}

function zinch_attend_cancel(id){

  if(id){
    $('#attend-form-'+id).hide('slow');
  }

}

function zinch_event_lead_modal(id, op, school_nid) {
  if (school_nid) {
    Drupal.zinch_lead_modal.event = {};
    Drupal.zinch_lead_modal.event.nid = id;
    Drupal.zinch_lead_modal.event.op = op;
    
    Drupal.zinch_lead_modal.school_nid = school_nid;
    Drupal.zinch_lead_modal.is_event = true
    var url = Drupal.settings.basePath + 'zinch/lead_modal/' + Drupal.zinch_lead_modal.school_nid + '/' + id;
    Drupal.zinch_lead_modal.school_nid = school_nid;
    
    var first_lead_modal_number = 1;
    
    // the second param use nid to pass through the client validatation
    Drupal.zinch_lead_modal.show(url, Drupal.zinch_lead_modal.school_nid, first_lead_modal_number);
  }
}

function stream_comments_show(id) {
  $('#stream-comments-'+id).toggle();
}
;

function zinch_school_save(type, nid, action) {
  $('.school-save-wapper-'+nid).addClass('school-loading');
  var url = Drupal.settings.basePath+'ajax/schoolsave/'+nid+'/'+type;
  $('.school-save-wapper-'+nid+' .school-save-options-box').slideUp('fast');
  $.get(url, function(data){
    if(action) {
      $('.school-save-wapper-'+nid).parent().html(data);
    }
  });
  $('.school-save-wapper-'+nid).removeClass('school-loading');
  var objLength = $('#myschool-inbox-message-wrapper').length;
  if(objLength){
    $.ajax({
      type: "POST",
      url: "/undergradschool/my-schools/row/"+nid+"/ajax",
      success: function(msg){
        var remTabId = $('.zinch-save-button-wrapper').attr('id');
        var row = msg;
        if($('#my-school-table-'+type).length) {
          $('#my-school-table-'+type+' tbody').prepend(row);
          $('#inbox-'+remTabId).remove();
          Drupal.settings.inbox.count--;
          if(Drupal.settings.inbox.count<=CN.rightInitCount){
            $('.myschool-inbox-right').addClass('myschool-inbox-right-null');
          }
        }
        $('#blk6').css('display','none');
        $('.my-school-readmore-insidebox').html('');
        $('#my-school-'+nid+' .flag-processed').removeClass('flag-processed');
        $('#my-school-'+nid+' select').val(type);
        Drupal.attachBehaviors();
      },
      error:function(){
        return '';
      }
    });
  }
}

function school_save_box_show(nid) {
    $('.school-save-wapper-'+nid+' .school-save-options-box').slideToggle('fast');
    $('.school-save-wapper-'+nid+' .options-toggle').toggleClass('active');
}

function zinchInboxModalCallbackTest(type) {
  var nid = $(window.parent.document).find('#hidden-schoolid').val();
  $.ajax({
      type: "POST",
      url: "/undergradschool/my-schools/row/"+nid+"/ajax",
      success: function(msg){
          zinchInboxModalCallback(nid, msg, type);
      },
      error:function(){
          return '';
      }
  });
}


function zinchInboxModalCallback (nid, msg, type) {
  var remTabId = $(window.parent.document).find('.zinch-save-button-wrapper').attr('id');
  var row = msg;
//  console.log(msg);
  if($(window.parent.document).find('#my-school-table-'+type).length) {
    $(window.parent.document).find('#my-school-table-'+type+' tbody').prepend(row);
    $(window.parent.document).find('#inbox-'+remTabId).remove();
    parent.CN.inboxCount--;
    if(parent.CN.inboxCount<=parent.CN.rightInitCount){
        $(window.parent.document).find('.myschool-inbox-right').addClass('myschool-inbox-right-null');
    }
  }
  $(window.parent.document).find('#blk6').css('display','none');
  $(window.parent.document).find('.my-school-readmore-insidebox').html('');
  $(window.parent.document).find('#my-school-'+nid+' .flag-processed').removeClass('flag-processed');
  $(window.parent.document).find('#my-school-'+nid+' select').val(type);
  Drupal.attachBehaviors(row);
};
$(document).ready(function () {
//  $('.guid-search1 legend a').click(function() {
//    $('.guid-search2').addClass('collapsed');
//  });
//  $('.guid-search2 legend a').click(function() {
//    $('.guid-search1').addClass('collapsed');
//  });
  $('.zch-pop-img-question-toefl').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">TOEFL 最低分数要求： 该院校以此分数为入学标准，低于此分数的学生没有申请资格。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });
  $('.zch-pop-img-question-sat[ref!="587"]').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">SAT平均分：举例说明，某学校的SAT平均分为1870-2230，这意味一半的学生成绩处于1870到2230之间,1/4的学生SAT成绩低于1870分，而另外1/4的学生SAT成绩高于2230分。 如果学生的SAT成绩低于1870，依然有可能进入该学校就读，只是需要她/他在其他方面有足够好的表现才行。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });
  $('.zch-pop-img-question-sat[ref="587"]').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">本校的工程类专业要求申请者必须提供SAT成绩。对于其他专业，建议申请者提供SAT成绩，但不是必须提供。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });
  $('.zch-pop-img-question-cond_adm').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">如果学校提供有条件录取，意味着英语水平不高的学生，无需提供TOEFL和SAT成绩，也可被录取。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });

  //For the global school name search
  $('#school_name_bar').keydown(function(e){
    var school_name = $('#school_name_bar').val();
    var characterCode;
    if(e && e.which){
      e = e;
      characterCode = e.which ;
    } else {
      e = event;
      characterCode = e.keyCode;
    }
    if(characterCode == 13){
      if(!school_name){
        return false;
      }
      $('#school_name_bar').parents('form').submit();
    }
  });
    //Bind school map click
    $('.modalframe-map-child:not(.modalframe-map-processed)').addClass('modalframe-map-processed').click(function() {
        var element = this;

        // Build modal frame options.
        var modalOptions = {
            url: $(element).attr('href'),
            autoFit: false,
            width: 800,
            height: 450,
        };
        // Open the modal frame dialog.
        Drupal.modalFrame.open(modalOptions);
        // Prevent default action of the link click event.
        return false;
    });
});

function reload_zch_pop() {
  $('.zch-pop-img-question-toefl').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">TOEFL 最低分数要求： 该院校以此分数为入学标准，低于此分数的学生没有申请资格。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });
  $('.zch-pop-img-question-sat[ref!="587"]').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">SAT平均分：举例说明，某学校的SAT平均分为1870-2230，这意味一半的学生成绩处于1870到2230之间,1/4的学生SAT成绩低于1870分，而另外1/4的学生SAT成绩高于2230分。 如果学生的SAT成绩低于1870，依然有可能进入该学校就读，只是需要她/他在其他方面有足够好的表现才行。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });  
$('.zch-pop-img-question-sat[ref="587"]').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">本校的工程类专业要求申请者必须提供SAT成绩。对于其他专业，建议申请者提供SAT成绩，但不是必须提供。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });  
    $('.zch-pop-img-question-toefl-click').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">TOEFL 最低分数要求： 该院校以此分数为入学标准，低于此分数的学生没有申请资格。</div>' +
      '</div>' +
    '</div>', {
    trigger: 'click',
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });
  $('.zch-pop-img-question-sat-click').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">SAT平均分：举例说明，某学校的SAT平均分为1870-2230，这意味一半的学生成绩处于1870到2230之间,1/4的学生SAT成绩低于1870分，而另外1/4的学生SAT成绩高于2230分。 如果学生的SAT成绩低于1870，依然有可能进入该学校就读，只是需要她/他在其他方面有足够好的表现才行。</div>' +
      '</div>' +
    '</div>', {
    trigger:  'click',
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });  
  $('.zch-pop-img-question-cond_adm').bt('<div class="zch-completeness-pop-module-rtl">' +
    '<div class="zch-pop-img-arrow"></div>' +
      '<div class="zch-pop-module-inner">' +
        '<div class="zch-pop-module-body-completeness">如果学校提供有条件录取，意味着英语水平不高的学生，无需提供TOEFL和SAT成绩，也可被录取。</div>' +
      '</div>' +
    '</div>', {
    trigger: ['mouseenter','click'],
    postShow: function(box){
      var that = this;
      $(box).bind('mouseleave',function() {
          that.btOff();
      });
    },
    positions: 'right',
    fill: '#444444',
    cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
    width: 330,
    height:230,
    padding: 2,
    animate: true,
    spikeLength: 10,
    spikeGirth: 25
  });
}

/*hide and show the filter form element when the lable is clicked*/
function show_this(id) {
  var to_hide = $('.tabs_header li.active a').attr('id');
  $('.'+to_hide+'_content').hide();
  $('.tabs_header .active').removeClass('active');
  $('#'+id).parent().addClass('active');
  $('.'+id+'_content').show();
}

//add by guojinli 2010/7/27   当用户点击不感兴趣并隐藏时出发的函数
function hide_school(ev,uid,scid){
	//$("#school_"+scid).hide();
	
	ev= ev || window.event;
	var mousePos=mousePosition(ev);
	var x=mousePos.x-250;
	var y=mousePos.y;
	var other='';
	//查看这些个选项那些个是不用显示出来的
	//city
	var cityCheckBox=$(".location_zone.collapsible");
	var city_visable=0;
	cityCheckBox.find("input:checkbox").each(function(i){
		if($(this).attr("checked") == true){
			city_visable++;
		}
	});
	if( city_visable == '1' ){
		other+="&city_data=city";
	}
	//rank
	var rankCheckBox=$(".rank_zone.collapsible");
	var rank_visable=0;
	rankCheckBox.find("input:checkbox").each(function(i){
		if($(this).attr("checked") == true){
			rank_visable++;
		}
	});
	if( rank_visable == '1' ){
		other+="&rank_data=rank";
	}
	//ranktype
	var ranktypeCheckBox=$(".ranktype_zone.collapsible");
	var ranktype_visable=0;
	ranktypeCheckBox.find("input:checkbox").each(function(i){
		if($(this).attr("checked") == true){
			ranktype_visable++;
		}
	});
	if( ranktype_visable == '1' ){
		other+="&ranktype_data=ranktype";
	}
	//schooltype
	var schooltypeCheckBox=$(".schooltype_zone.collapsible");
	var schooltype_visable=0;
	schooltypeCheckBox.find("input:checkbox").each(function(i){
		if($(this).attr("checked") == true){
			schooltype_visable++;
		}
	});
	if( schooltype_visable == '1' ){
		other+="&schooltype_data=schooltype";
	}
	//sex
	var sexCheckBox=$(".form-checkbox.option_online");
	var sex_visable=0;
	sexCheckBox.each(function(i){
		if($(this).attr("checked") == true){
			sex_visable++;
		}
	});
	if( sex_visable == '1' ){
		other+="&sex_data=sex";
	}
	var locationCheckBox=$(".prefix_checkbox_lable").find("input:checkbox");
	var location_visable=0;
	locationCheckBox.each(function(i){
		if($(this).attr("checked") == true){
			location_visable++;
		}
	});
	if( location_visable == '1' ){
		other+="&location_data=location";
	}
 	$.ajax({
		url: Drupal.settings.basePath+"no_because_ajax",
		type : "post",
		data : 'uid='+uid+"&scid="+scid+other,
		success: function(msg){
			$("#no_because").css({"top":y+"px","left":x+"px"});
			$('#no_because').html(msg);
		},
		error: function(){
			alert('Request is error');
			window.location.href=Drupal.settings.basePath+"undergradschool/search";
		}
	});

}

function mousePosition(ev){
	var x,y;
	var e = e||window.event;
	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,
		y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop
	};
}
//当用户点击确定后保存所选择的项
//function save_no_because(uid,scid){
//
//	var school_position=$(":checkbox[name='school_position'][checked=true]").val();
//	var school_city=$(":checkbox[name='school_city'][checked=true]").val();
//	var school_ranktype=$(":checkbox[name='rank_type'][checked=true]").val();
//	var school_male=$(":checkbox[name='school_male'][checked=true]").val();
//	var school_rank=$(":checkbox[name='school_rank'][checked=true]").val();
//	var school_type=$(":checkbox[name='school_type'][checked=true]").val();
//	var school_no=$(":radio[name='school_no'][checked=true]").val();
//	var str='';
//	if( typeof(school_no) != 'undefined' && school_no!='' ){str=str+school_no}
//	if( typeof(school_city) != 'undefined' && school_city!='' ){
//		//判断是否有选中的项  性别
//		var obj_city = $('#edit-main-locationfield-tag1-location-'+school_city).parent().parent().parent();
//		var valible_city=0;
//		obj_city.find("input:checkbox").each(function(i){
//			if( $(this).attr("checked") == true ){
//				valible_city=valible_city+1;
//			}
//		});
//		if( valible_city > 1 ){
//			$('#edit-main-locationfield-tag1-location-'+school_city).attr('checked',false);
//		}else if( valible_city == 0 ){
//			obj_city.find("input:checkbox").each(function(i){
//				if( $(this).attr("checked") == false ){
//					$(this).attr("checked",true);
//
//				}
//			});
//			$('#edit-main-locationfield-tag1-all-location-1').attr('checked',false);
//			$('#edit-main-locationfield-tag1-location-'+school_city).attr('checked',false);
//		}else{
//			$('#edit-main-locationfield-tag1-location-'+school_city).attr('checked',false);
//			$('#edit-main-locationfield-tag1-all-location-1').attr('checked',true);
//		}
//		str=str+school_city;
//	}
//
//
//	if( typeof(school_position) != 'undefined' && school_position!='' ){
//		var valible_region=0;
//		var obj_region=$(".prefix_checkbox_lable").find("input:checkbox");
//		obj_region.each(function(i){
//			if( $(this).attr("checked") == true ){
//				valible_region=valible_region+1;
//			}
//		});
//		if( valible_region > 1 ){
//		}else if (valible_region == 0){
//			obj_region.each(function(i){
//				if( $(this).attr("checked") == false ){
//					$(this).attr("checked",true);
//					if( $(this).attr("value") != school_position ){
//						obj_region_childs=$(this).parent().next().find("input:checkbox");
//						obj_region_childs.each(function(i){
//							$(this).attr("checked",true);
//						});
//					}
//				}
//			});
//			$('#edit-main-locationfield-tag2-all-states-1').attr('checked',false);
//		}else{
//			$('#edit-main-locationfield-tag2-all-states-1').attr('checked',true);
//		}
//		obj_region.each(function(i){
//			if( $(this).attr("value") == school_position ){
//				$(this).attr("checked",false);
//				obj_region_childs=$(this).parent().next().find("input:checkbox");
//				obj_region_childs.each(function(i){
//					$(this).attr("checked",false);
//				});
//			}
//		});
//		str=str+school_position;
//	}
//
//
//	if( typeof(school_male) != 'undefined' && school_male!='' ){
//		//判断是否有选中的项  性别
//		var obj_gender = $('#edit-main-stats-tag4-sex-'+school_male).parent().parent().parent();
//		var valible=0;
//		obj_gender.find("input:checkbox").each(function(i){
//			if( $(this).attr("checked") == true ){
//				valible=valible+1;
//			}
//		});
//		if( valible > 1 ){
//			$('#edit-main-stats-tag4-sex-'+school_male).attr('checked',false);
//		}else if( valible == 0 ){
//			obj_gender.find("input:checkbox").each(function(i){
//				if( $(this).attr("checked") == false ){
//					 $(this).attr("checked",true);
//				}
//			});
//			$('#edit-main-stats-tag4-sex-'+school_male).attr('checked',false);
//			$('#edit-main-stats-tag4-all-sex-1').attr('checked',false);
//		}else{
//			$('#edit-main-stats-tag4-sex-'+school_male).attr('checked',false);
//			$('#edit-main-stats-tag4-all-sex-1').attr('checked',true);
//		}
//		str=str+school_male;
//	}
//
//	if( typeof(school_rank) != 'undefined' && school_rank!='' ){
//		var obj_rank = $('#edit-main-stats-rankfield-rank-'+school_rank).parent().parent().parent();
//		var valible_rank=0;
//		obj_rank.find("input:checkbox").each(function(i){
//			if( $(this).attr("checked") == true ){
//				valible_rank=valible_rank+1;
//			}
//		});
//		if( valible_rank > 1 ){
//			$('#edit-main-stats-rankfield-rank-'+school_rank).attr('checked',false);
//		}else if( valible_rank == 0 ){
//			obj_rank.find("input:checkbox").each(function(i){
//				if( $(this).attr("checked") == false ){
//					 $(this).attr("checked",true);
//				}
//			});
//			$('#edit-main-stats-rankfield-rank-'+school_rank).attr('checked',false);
//			$('#edit-main-stats-rankfield-all-rank-1').attr('checked',false);
//		}else{
//			$('#edit-main-stats-rankfield-rank-'+school_rank).attr('checked',false);
//			$('#edit-main-stats-rankfield-all-rank-1').attr('checked',true);
//		}
//		str=str+school_rank;
//	}
//
//	if( typeof(school_type) != 'undefined' && school_type!='' ){
//		var obj_ranktype = $('#edit-main-stats-tag5-school-type-'+school_type).parent().parent().parent();
//		valible_schooltype=0;
//		obj_ranktype.find("input:checkbox").each(function(i){
//			if( $(this).attr("checked") == true ){
//				valible_schooltype=valible_schooltype+1;
//			}
//		});
//		if( valible_schooltype > 1 ){
//			$('#edit-main-stats-tag5-school-type-'+school_type).attr('checked',false);
//		}else if( valible_schooltype == 0 ){
//			obj_ranktype.find("input:checkbox").each(function(i){
//				if( $(this).attr("checked") == false ){
//					 $(this).attr("checked",true);
//				}
//			});
//			$('#edit-main-stats-tag5-school-type-'+school_type).attr('checked',false);
//			$('#edit-main-stats-tag5-all-school-type-1').attr('checked',false);
//		}else{
//			$('#edit-main-stats-tag5-school-type-'+school_type).attr('checked',false);
//			$('#edit-main-stats-tag5-all-school-type-1').attr('checked',true);
//		}
//		str=str+school_type;
//	}
//	if( typeof(school_ranktype) != 'undefined' && school_ranktype!='' ){
//		var obj_ranktype = $('#edit-main-stats-tag2-rank-type-'+school_ranktype).parent().parent().parent();
//		valible_ranktype=0;
//		obj_ranktype.find("input:checkbox").each(function(i){
//			if( $(this).attr("checked") == true ){
//				valible_ranktype=valible_ranktype+1;
//			}
//		});
//		if( valible_ranktype > 1 ){
//			$('#edit-main-stats-tag2-rank-type-'+school_ranktype).attr('checked',false);
//		}else if( valible_ranktype == 0 ){
//			obj_ranktype.find("input:checkbox").each(function(i){
//				if( $(this).attr("checked") == false ){
//					 $(this).attr("checked",true);
//				}
//			});
//			$('#edit-main-stats-tag2-rank-type-'+school_ranktype).attr('checked',false);
//			$('#edit-main-stats-tag2-all-rank-type-1').attr('checked',false);
//		}else{
//			$('#edit-main-stats-tag2-rank-type-'+school_ranktype).attr('checked',false);
//			$('#edit-main-stats-tag2-all-rank-type-1').attr('checked',true);
//
//		}
//		str=str+school_ranktype;
//
//	}
//	//把提交过来的数据存放到数据库
//	if( uid!= '' && scid !='' && str!='' ){
//		$.ajax({
//			url: "/no_because_ajax",
//			type : "post",
//			data : 'uid='+uid+"&scid="+scid+"&save=1",
//			success: function(msg){
//				if( msg!='' ){
//					alert(msg);
//				}
//			},
//			error: function(){
//				alert('Request is error');
//				window.location.href="/under_schoolsearch";
//			}
//		});
//	}
//	if( str == '7' || str=='' ){
//		var page=$(".page").find("strong").html();
//		underschoolsearch_multi(page,3,'');
//	}else{
//		ajax_params = getAllSearchCondition();
//		under_schoolsearch_ajax(ajax_params);
//	}
//	$('#no_because_in').hide();
//}
function check_is_noreason(id){
	if( id == 'school_no' ){
		$("#school_position").attr("checked",false);
		$("#school_city").attr("checked",false);
		$("#school_type").attr("checked",false);
		$("#school_male").attr("checked",false);
		$("#school_rank").attr("checked",false);
		$("#rank_type").attr("checked",false);
	}else{
		$("#school_no").attr("checked",false);
	}
}
function other_uncheck(){
	$('#school_no').attr('checked',true);
	$("#school_position").attr("checked",false);
	$("#school_city").attr("checked",false);
	$("#school_type").attr("checked",false);
	$("#school_male").attr("checked",false);
	$("#school_rank").attr("checked",false);
	$("#rank_type").attr("checked",false);
}
function get_NextInterest(ev, tid ){
	ev= ev || window.event;
	var mousePos=mousePosition(ev);
	var x=mousePos.x+100;
	var y=mousePos.y;
	//根据传递过来的tid去找到相应的下一级
	if( tid == '' ){
		alert('出现位置错误');
	}else{
		$.ajax({
			url: "Interest_ajax",
			type : "post",
			data : 'tid='+tid,
			success: function(msg){
				$("#showInterest").css({"top":y+"px","left":x+"px"});
				$('#showInterest').html(msg);
				$("#out_tid").val(tid);
			},
			error: function(){
				alert('Request is error');
				window.location.href=Drupal.settings.basePath+"undergradschool/search";
			}
		});
	}
}
function change_back(id){
	var td_hide_id=$("#td_hide_"+id).val();
	$("#tr_"+id).css({background: "#AFDD6F", cursor: "pointer"});
	$("#tr_"+id).click(function(){
		if( td_hide_id == '' ){
			$("#td_"+id).css("background","#83CEE2");
			//$("#td_"+id).css({ background: "#83CEE2"});
			$("#td_hide_"+id).val(id);
		}else{
			$("#td_"+id).css("background","#fff");
			$("#td_hide_"+id).val('');
		}
	});
}
function sub_interest(id) {
	$("#tr_"+id).css("background","#fff");
}
function save_change_back(tid){
	//获取所有隐藏文本框的值
	var obj=$("#interest_ajax").find("input:hidden");
	var tid=$("#out_tid").val();
	var str='<div style="background:#83CEE2;color:#FFF;margin-bottom:5px;padding-left:20px;" >';
	obj.each(function(i){
		if( $(this).attr('value')!='' && $(this).attr('value')!=tid ){
			str=str+'<span class="sub_interest_name">'+$(this).parent().find("h2").html()+'</span><span style="display:none;">'+tid+'</span>&nbsp;&nbsp;<span><a href="javascript:;" onclick="javascript:$(this).parent().parent().remove();interest_search();">X</a></span></div>';
			$("#out_Interest_"+tid).append(str);
			str='<div style="background:#83CEE2;color:#FFF;margin-bottom:5px;padding-left:20px;">';
		}
	});
	$('#interest_ajax').hide();
}

function show_hide_school(ev){
	ev= ev || window.event;
	var mousePos=mousePosition(ev);
	var x=mousePos.x;
	var y=mousePos.y+20;
	$.ajax({
		url: "/Show_Hide_School",
		type : "post",
		success: function(msg){
			$("#show_hide_school_out").css({"top":y+"px","left":x+"px"});
			$('#show_hide_school_out').html(msg);
		},
		error: function(){
			alert('Request is error');
			window.location.href=Drupal.settings.basePath+"undergradschool/search";
		}
	});
}
function add_school(){
	var scids =	$("#show_hide_school").find("input:checkbox");
	var scidsValue = new Array();
	var valible = 0;
	scids.each(function(i){
		if( $(this).attr("checked") == true ){
			scidsValue[valible] =  $(this).attr("value");
			valible = valible +1;
		}
	});
	if( scidsValue != '' ){
		$.ajax({
			url: "/Show_Hide_School",
			type: "post",
			data: "scid="+scidsValue,
			success: function(msg){
				if( msg  ){
					var page=$(".page").find("strong").html();
					underschoolsearch_multi(page,3,'');
				}
			},
			error: function(){
				alert('Request is error');
				window.location.href=Drupal.settings.basePath+"undergradschool/search";
			}
		});
	}
	$('#show_hide_school').hide();
 }
/*function for the local checkboxes*/
function slide_next(id) {
  $('#'+id).parents().next('div').toggle('fast');
  $('#'+id).toggleClass('span_minus');
}

//show layout
function choose_interest(ev,ct,content,profile){
	//var bH=$(document.body).height() + $(document.body).get(0).scrollHeight;
	var bH = $("body").height();
	var bW = $("body").width()+16;
	var objWH=getObjWh(ev,ct);
	$("#interest_fullbg").css({width:bW,height:bH,display:"block"});
	var tbT=objWH.split("|")[0]+"px";
	var tbL=objWH.split("|")[1]+"px";
	if (profile == 1) {
          cur_left = $(window).width() / 2 - 395;
        }
        else {
          cur_left = 0;
        }
	//alert(tbT);

//	$("#"+ct).css({top:tbT,left:tbL,display:"block"});
        $("#"+ct).css({
          top: ($(window).scrollTop()),
//          left: ($(window).width() - $("#"+ct).width()) / 2,
          left: cur_left,
          display: "block"
        })
	//$("#"+content).html("<div style='text-align:center'>正在加载，请稍后...</div>");
}
function getObjWh(ev,obj){
	//top
	ev= ev || window.event;
	var mousePos=mousePosition(ev);
	var objT= 0;
	var objL=80;
	return objT+"|"+objL;
}


//close layout
function closeBg(type, sa){
	var sub_li = '';
	$("#interest_fullbg").css("display","none");
	$("#interest_dialog").css("display","none");
	if(type == 'cancel'){
		$('#my_interests').find('li').each(function(){
			if(typeof(this.id) == 'undefined' || !(this.id)){
				$(this).remove();
				sub_li = 'sub_'+$(this).find('sup')[0].id;
				$('#'+sub_li).find('a').removeClass('active');
				$('#'+sub_li).find('a').addClass('nactive');
			}
		});
	}
        if (typeof(sa) == 'undefined') {
          sa = 5;
        }
	show_some_interests(sa);
}
function get_sub_interest(tid, obj){
	if( tid == '' ){
		alert('出现位置错误');
	}else{
      var interest_name = $(obj).html();
      if(in_array(tid) < 0){
        $('#my_interests').children().eq(0).append('<li onmouseover="delete_over_out(this,1)" onmouseout="delete_over_out(this)"><span style="display:none;">'+tid+'</span><span>'+interest_name+'</span><sup id="'+tid+'" style="visibility:hidden;"><a href="javascript:;" onclick="delete_my_interest(this,'+tid+')">X</a></sup></li>');
      }
		$.ajax({
			url: Drupal.settings.basePath+"New_Interest_ajax",
			type : "post",
			data : 'tid='+tid,
			success: function(msg){
				$('#ajax_sub_type').html(msg);
				var imgtag = $("#singnal_div").find('img');
				var img_src = imgtag.attr('src');
				var img_src2 = img_src.replace('arrow_r2','arrow_r1');
				imgtag.attr('src',img_src2);
				imgtag = $("#singnal_div_1").find('img');
				img_src = imgtag.attr('src');
				img_src2 = img_src.replace('arrow_r2','arrow_r1');
				imgtag.attr('src',img_src2);
				$('#ajax_sub_type').find('li').each(function(){
					var temp_tid = (this.id).split('_');

					if(in_array(Number(temp_tid[1])) <0){
						$(this).find('a').addClass('nactive');
					}else{
						$(this).find('a').addClass('active');
					}
				});
			},
			beforeSend: function(){
				$("#loading").bind("ajaxSend", function(){
					$(this).show('fast');
				});
			},
			complete: function(){
				$("#loading").bind("ajaxComplete", function(){
					$(this).hide('fast');
				});
			},
			error: function(){
				alert('Request is error');
				window.location.href=Drupal.settings.basePath+"undergradschool/search";
			}
		});
	}
}

function show_below(parent_tid,tid,obj){
	var interest_name = $(obj).attr('title');
	if(in_array(tid) < 0){
		$('#my_interests').children().eq(0).append('<li onmouseover="delete_over_out(this,1)" onmouseout="delete_over_out(this)"><span style="display:none;">'+parent_tid+'</span><span>'+interest_name+'</span><sup id="'+tid+'" style="visibility:hidden;"><a href="javascript:;" onclick="delete_my_interest(this,'+tid+')">X</a></sup></li>');
		$(obj).removeClass('nactive');
		$(obj).addClass('active');
		
	}else{
		alert('It\'s exsited in my interests!');
	}
}
function in_array(tid){
	var my_interests = [];
	$('#my_interests').find('sup').each(function(i){
		my_interests.push(Number(this.id));
	});
	return jQuery.inArray(tid,my_interests);
}
function delete_my_interest(obj,tid){
	$(obj).parent().parent().remove();
	$('#sub_'+tid).find('a').removeClass('active');
	$('#sub_'+tid).find('a').addClass('nactive');
}
function delete_all_interests() {
  $('#my_interests').find('sup').each(function(i){
    $(this).parent().remove();
    $('#sub_' + this.id).find('a').removeClass('active');
    $('#sub_' + this.id).find('a').addClass('nactive');    
  });
}
function delete_over_out(obj,type){
	if(type == 1){
		$(obj).find('sup')[0].style.visibility = 'visible';
	}
	else{
		$(obj).find('sup')[0].style.visibility = 'hidden';
	}
}
function select_all_sub_interets(parent_tid,type){
	var sub_interest_li = $('#ajax_sub_type').find('li');
	var tid;
	var temp_tid;
	if(type == 'unselectall'){
		sub_interest_li.find('a').removeClass('active');
		sub_interest_li.find('a').addClass('nactive');
		$('#selectall').css('display','');
		$('#unselectall').css('display','none');
		sub_interest_li.each(function(){
			temp_tid = (this.id).split('_');
			tid = Number(temp_tid[1]);
			if(in_array(tid) >=0){
				$('#'+tid).parent().remove();
			}
		});
	}else{
		$('#selectall').css('display','none');
		$('#unselectall').css('display','');
		sub_interest_li.each(function(){
			var temp_tid = (this.id).split('_');
			var tid = Number(temp_tid[1]);
		
			var interest_name = $(this).children().eq(0).attr('title');
			if(in_array(tid) < 0){
				$('#my_interests').children().eq(0).append('<li onmouseover="delete_over_out(this,1)" onmouseout="delete_over_out(this)"><span style="display:none;">'+parent_tid+'</span><span>'+interest_name+'</span><sup id="'+tid+'" style="visibility:hidden;"><a href="javascript:;" onclick="delete_my_interest(this,'+tid+')">X</a></sup></li>');
				sub_interest_li.find('a').removeClass('nactive');
				sub_interest_li.find('a').addClass('active');
			}
		});
	}
	return false;
}

function show_top5_info(nid, expand) {
  $('#school-top5-label-'+nid).toggleClass('top5-show');
  $('#school-top5-label-'+nid).toggleClass('top5-hide');
  $('#school-top5-'+nid).toggle('slide');
  if (expand == 1) {
    $('.show-content-'+nid).css('display', 'none');
    $('.hide-content-'+nid).css('display', '');
  }
  else {
    $('.show-content-'+nid).css('display', '');
    $('.hide-content-'+nid).css('display', 'none');    
  }
  return false;
};
/*
 * jQuery UI 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.3",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(j,k){return this.each(function(){if(!k){if(!j||c.filter(j,[this]).length){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")})}}return i.call(c(this),j,k)})},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;
/*
 * jQuery UI Dialog 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 *	ui.resizable.js
 */
(function(c){var b={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},a="ui-dialog ui-widget ui-widget-content ui-corner-all ";c.widget("ui.dialog",{_init:function(){this.originalTitle=this.element.attr("title");var l=this,m=this.options,j=m.title||this.originalTitle||"&nbsp;",e=c.ui.dialog.getTitleId(this.element),k=(this.uiDialog=c("<div/>")).appendTo(document.body).hide().addClass(a+m.dialogClass).css({position:"absolute",overflow:"hidden",zIndex:m.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){(m.closeOnEscape&&n.keyCode&&n.keyCode==c.ui.keyCode.ESCAPE&&l.close(n))}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(n){l.moveToTop(false,n)}),g=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k),f=(this.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),i=c('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).focus(function(){i.addClass("ui-state-focus")}).blur(function(){i.removeClass("ui-state-focus")}).mousedown(function(n){n.stopPropagation()}).click(function(n){l.close(n);return false}).appendTo(f),h=(this.uiDialogTitlebarCloseText=c("<span/>")).addClass("ui-icon ui-icon-closethick").text(m.closeText).appendTo(i),d=c("<span/>").addClass("ui-dialog-title").attr("id",e).html(j).prependTo(f);f.find("*").add(f).disableSelection();(m.draggable&&c.fn.draggable&&this._makeDraggable());(m.resizable&&c.fn.resizable&&this._makeResizable());this._createButtons(m.buttons);this._isOpen=false;(m.bgiframe&&c.fn.bgiframe&&k.bgiframe());(m.autoOpen&&this.open())},destroy:function(){(this.overlay&&this.overlay.destroy());this.uiDialog.hide();this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();(this.originalTitle&&this.element.attr("title",this.originalTitle))},close:function(f){var d=this;if(false===d._trigger("beforeclose",f)){return}(d.overlay&&d.overlay.destroy());d.uiDialog.unbind("keypress.ui-dialog");(d.options.hide?d.uiDialog.hide(d.options.hide,function(){d._trigger("close",f)}):d.uiDialog.hide()&&d._trigger("close",f));c.ui.dialog.overlay.resize();d._isOpen=false;if(d.options.modal){var e=0;c(".ui-dialog").each(function(){if(this!=d.uiDialog[0]){e=Math.max(e,c(this).css("z-index"))}});c.ui.dialog.maxZ=e}},isOpen:function(){return this._isOpen},moveToTop:function(f,e){if((this.options.modal&&!f)||(!this.options.stack&&!this.options.modal)){return this._trigger("focus",e)}if(this.options.zIndex>c.ui.dialog.maxZ){c.ui.dialog.maxZ=this.options.zIndex}(this.overlay&&this.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=++c.ui.dialog.maxZ));var d={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};this.uiDialog.css("z-index",++c.ui.dialog.maxZ);this.element.attr(d);this._trigger("focus",e)},open:function(){if(this._isOpen){return}var e=this.options,d=this.uiDialog;this.overlay=e.modal?new c.ui.dialog.overlay(this):null;(d.next().length&&d.appendTo("body"));this._size();this._position(e.position);d.show(e.show);this.moveToTop(true);(e.modal&&d.bind("keypress.ui-dialog",function(h){if(h.keyCode!=c.ui.keyCode.TAB){return}var g=c(":tabbable",this),i=g.filter(":first")[0],f=g.filter(":last")[0];if(h.target==f&&!h.shiftKey){setTimeout(function(){i.focus()},1)}else{if(h.target==i&&h.shiftKey){setTimeout(function(){f.focus()},1)}}}));c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();this._trigger("open");this._isOpen=true},_createButtons:function(g){var f=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiDialog.find(".ui-dialog-buttonpane").remove();(typeof g=="object"&&g!==null&&c.each(g,function(){return !(d=true)}));if(d){c.each(g,function(h,i){c('<button type="button"></button>').addClass("ui-state-default ui-corner-all").text(h).click(function(){i.apply(f.element[0],arguments)}).hover(function(){c(this).addClass("ui-state-hover")},function(){c(this).removeClass("ui-state-hover")}).focus(function(){c(this).addClass("ui-state-focus")}).blur(function(){c(this).removeClass("ui-state-focus")}).appendTo(e)});e.appendTo(this.uiDialog)}},_makeDraggable:function(){var d=this,f=this.options,e;this.uiDialog.draggable({cancel:".ui-dialog-content",handle:".ui-dialog-titlebar",containment:"document",start:function(){e=f.height;c(this).height(c(this).height()).addClass("ui-dialog-dragging");(f.dragStart&&f.dragStart.apply(d.element[0],arguments))},drag:function(){(f.drag&&f.drag.apply(d.element[0],arguments))},stop:function(){c(this).removeClass("ui-dialog-dragging").height(e);(f.dragStop&&f.dragStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}})},_makeResizable:function(g){g=(g===undefined?this.options.resizable:g);var d=this,f=this.options,e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:f.minHeight,start:function(){c(this).addClass("ui-dialog-resizing");(f.resizeStart&&f.resizeStart.apply(d.element[0],arguments))},resize:function(){(f.resize&&f.resize.apply(d.element[0],arguments))},handles:e,stop:function(){c(this).removeClass("ui-dialog-resizing");f.height=c(this).height();f.width=c(this).width();(f.resizeStop&&f.resizeStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_position:function(i){var e=c(window),f=c(document),g=f.scrollTop(),d=f.scrollLeft(),h=g;if(c.inArray(i,["center","top","right","bottom","left"])>=0){i=[i=="right"||i=="left"?i:"center",i=="top"||i=="bottom"?i:"middle"]}if(i.constructor!=Array){i=["center","middle"]}if(i[0].constructor==Number){d+=i[0]}else{switch(i[0]){case"left":d+=0;break;case"right":d+=e.width()-this.uiDialog.outerWidth();break;default:case"center":d+=(e.width()-this.uiDialog.outerWidth())/2}}if(i[1].constructor==Number){g+=i[1]}else{switch(i[1]){case"top":g+=0;break;case"bottom":g+=e.height()-this.uiDialog.outerHeight();break;default:case"middle":g+=(e.height()-this.uiDialog.outerHeight())/2}}g=Math.max(g,h);this.uiDialog.css({top:g,left:d})},_setData:function(e,f){(b[e]&&this.uiDialog.data(b[e],f));switch(e){case"buttons":this._createButtons(f);break;case"closeText":this.uiDialogTitlebarCloseText.text(f);break;case"dialogClass":this.uiDialog.removeClass(this.options.dialogClass).addClass(a+f);break;case"draggable":(f?this._makeDraggable():this.uiDialog.draggable("destroy"));break;case"height":this.uiDialog.height(f);break;case"position":this._position(f);break;case"resizable":var d=this.uiDialog,g=this.uiDialog.is(":data(resizable)");(g&&!f&&d.resizable("destroy"));(g&&typeof f=="string"&&d.resizable("option","handles",f));(g||this._makeResizable(f));break;case"title":c(".ui-dialog-title",this.uiDialogTitlebar).html(f||"&nbsp;");break;case"width":this.uiDialog.width(f);break}c.widget.prototype._setData.apply(this,arguments)},_size:function(){var e=this.options;this.element.css({height:0,minHeight:0,width:"auto"});var d=this.uiDialog.css({height:"auto",width:e.width}).height();this.element.css({minHeight:Math.max(e.minHeight-d,0),height:e.height=="auto"?"auto":Math.max(e.height-d,0)})}});c.extend(c.ui.dialog,{version:"1.7.3",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},getter:"isOpen",uuid:0,maxZ:0,getTitleId:function(d){return"ui-dialog-title-"+(d.attr("id")||++this.uuid)},overlay:function(d){this.$el=c.ui.dialog.overlay.create(d)}});c.extend(c.ui.dialog.overlay,{instances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(d){return d+".dialog-overlay"}).join(" "),create:function(e){if(this.instances.length===0){setTimeout(function(){if(c.ui.dialog.overlay.instances.length){c(document).bind(c.ui.dialog.overlay.events,function(f){var g=c(f.target).parents(".ui-dialog").css("zIndex")||0;return(g>c.ui.dialog.overlay.maxZ)})}},1);c(document).bind("keydown.dialog-overlay",function(f){(e.options.closeOnEscape&&f.keyCode&&f.keyCode==c.ui.keyCode.ESCAPE&&e.close(f))});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var d=c("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({width:this.width(),height:this.height()});(e.options.bgiframe&&c.fn.bgiframe&&d.bgiframe());this.instances.push(d);return d},destroy:function(d){this.instances.splice(c.inArray(this.instances,d),1);if(this.instances.length===0){c([document,window]).unbind(".dialog-overlay")}d.remove();var e=0;c.each(this.instances,function(){e=Math.max(e,this.css("z-index"))});this.maxZ=e},height:function(){if(c.browser.msie&&c.browser.version<7){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var d=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(e<d){return c(window).height()+"px"}else{return e+"px"}}else{return c(document).height()+"px"}},width:function(){if(c.browser.msie&&c.browser.version<7){var d=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(d<e){return c(window).width()+"px"}else{return d+"px"}}else{return c(document).width()+"px"}},resize:function(){var d=c([]);c.each(c.ui.dialog.overlay.instances,function(){d=d.add(this)});d.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;
/*
 * jQuery UI Draggable 1.7.3
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;if(c.cursorAt){this._adjustOffsetFromHelper(c.cursorAt)}if(c.containment){this._setContainment()}this._trigger("start",b);this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();this._trigger("drag",b,c);this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c);b._clear()})}else{this._trigger("stop",c);this._clear()}return false},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs}}}));a.extend(a.ui.draggable,{version:"1.7.3",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(b,c){var e=a(this).data("draggable").options;var d=a.makeArray(a(e.stack.group)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min)});a(d).each(function(f){this.style.zIndex=e.stack.min+f});this[0].style.zIndex=e.stack.min+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;
(function($){Drupal.modalFrame=Drupal.modalFrame||{dirtyFormsWarning:Drupal.t('Your changes will be lost if you close this popup now.'),options:{},iframe:{$container:null,$element:null},isOpen:false,isChildLoaded:false,parentReady:false,uniqueName:'modalframe-'+((new Date()).getTime())};Drupal.modalFrame.eventHandlerName=function(name){var self=this;return name+'.'+self.uniqueName;};Drupal.modalFrame.open=function(options){var self=this;if(self.isOpen||$('#modalframe-container').size()){return false;}
self.isChildLoaded=false;if(!self.parentReady){$(window).bind(self.eventHandlerName('childLoad'),function(event,iFrameWindow,isClosing){self.bindChild(iFrameWindow,isClosing);});$(window).bind(self.eventHandlerName('childUnload'),function(event,iFrameWindow){self.unbindChild(iFrameWindow);});$(window).bind(self.eventHandlerName('childClose'),function(event,args,statusMessages){self.close(args,statusMessages);});self.parentReady=true;}
if(Drupal.jsAC&&!Drupal.jsAC.prototype.modalFrameSelect){Drupal.jsAC.prototype.modalFrameSelect=Drupal.jsAC.prototype.select;Drupal.jsAC.prototype.select=function(node){this.modalFrameSelect(node);this.hidePopup();};}
self.options={url:options.url,width:options.width,height:options.height,autoFit:(options.autoFit==undefined||options.autoFit),draggable:(options.draggable==undefined||options.draggable),onOpen:options.onOpen,onLoad:options.onLoad,onSubmit:options.onSubmit,customDialogOptions:options.customDialogOptions};self.create();self.iframe.$container.dialog('option',{position:['-999em','-999em']}).dialog('open');return true;};Drupal.modalFrame.create=function(){var self=this;self.iframe.$element=$('<iframe id="modalframe-element" name="modalframe-element"'+($.browser.msie?' scrolling="yes" frameborder="0" allowTransparency="true"':'')+'/>');self.iframe.$container=$('<div id="modalframe-container"/>').append(self.iframe.$element);$('body').append(self.iframe.$container);var dialogOpen=function(){$('.modalframe').unbind('keypress.ui-dialog');$('.modalframe .ui-dialog-titlebar-close:not(.modalframe-processed)').addClass('modalframe-processed').attr('href','javascript:void(0)').attr('title',Drupal.t('Close')).unbind('click').bind('click',function(){self.close(false);return false;});if(!self.options.draggable){$('.modalframe .ui-dialog-titlebar').css('cursor','default');}
self.fixPosition($('.modalframe'),true);var dialogSize=self.sanitizeSize({width:self.options.width,height:self.options.height});var frameSize=$.extend({},dialogSize);frameSize.height-=$('.modalframe .ui-dialog-titlebar').outerHeight(true);var dialogPosition=self.computeCenterPosition($('.modalframe'),dialogSize);$('.modalframe').width(dialogSize.width).height(dialogSize.height);self.iframe.$container.width(frameSize.width).height(frameSize.height);self.iframe.$element.width(frameSize.width).height(frameSize.height);self.iframe.$container.dialog('option',{width:dialogSize.width,height:dialogSize.height});self.iframe.$element.hide();$('.modalframe').hide().css({top:dialogPosition.top,left:dialogPosition.left});$('.modalframe').fadeIn('slow',function(){self.load(self.options.url);});if(self.options.autoFit){var $window=$(window);self.currentWindowSize={width:$window.width(),height:$window.height()};$window.bind(self.eventHandlerName('resize'),function(){if(!self.isChildLoaded){return;}
if(!self.isOpen||!self.isObject(self.iframe.documentSize)){return;}
var newWindowSize={width:$window.width(),height:$window.height()};if(Math.abs(self.currentWindowSize.width-newWindowSize.width)>5||Math.abs(self.currentWindowSize.height-newWindowSize.height)>5){self.currentWindowSize=newWindowSize;self.resize();}});}
if($.isFunction(self.options.onOpen)){self.options.onOpen(self);}
self.isOpen=true;};var dialogBeforeClose=function(){if(self.beforeCloseEnabled){return true;}
if(!self.beforeCloseIsBusy){self.beforeCloseIsBusy=true;setTimeout(function(){self.close(false);},1);}
return false;};var dialogClose=function(){if(self.options.autoFit){$(window).unbind(self.eventHandlerName('resize'));delete self.currentWindowSize;}
$(document).unbind(self.eventHandlerName('keydown'));$('.modalframe .ui-dialog-titlebar-close').unbind(self.eventHandlerName('keydown'));self.fixPosition($('.modalframe'),false);try{self.iframe.$element.remove();self.iframe.$container.dialog('destroy').remove();}catch(e){};delete self.iframe.documentSize;delete self.iframe.Drupal;delete self.iframe.$element;delete self.iframe.$container;if(self.beforeCloseEnabled){delete self.beforeCloseEnabled;}
if(self.beforeCloseIsBusy){delete self.beforeCloseIsBusy;}
self.isOpen=false;};var dialogOptions={modal:true,autoOpen:false,closeOnEscape:true,draggable:self.options.draggable,resizable:false,title:Drupal.t('Loading...'),dialogClass:'modalframe',open:dialogOpen,beforeclose:dialogBeforeClose,close:dialogClose};if(self.options.draggable){dialogOptions.dragStart=function(){self.iframe.$container.hide();};dialogOptions.dragStop=function(){self.iframe.$container.show('fast');};}
$.extend(dialogOptions,self.options.customDialogOptions);self.iframe.$container.dialog(dialogOptions);};Drupal.modalFrame.load=function(url){var self=this;var iframe=self.iframe.$element.get(0);var doc=(iframe.contentWindow||iframe.contentDocument);if(doc.document){doc=doc.document;}
self.iframe.$element.bind('load',function(){if(!self.iframe.$element.is(':visible')){setTimeout(function(){try{self.iframe.$element.fadeIn('fast');}catch(e){}},1000);}});doc.location.replace(url);};Drupal.modalFrame.canClose=function(){var self=this;if(!self.isOpen){return false;}
if(self.isObject(self.iframe.Drupal)){try{if(self.isObject(self.iframe.Drupal.dirtyForms)){if(self.iframe.Drupal.dirtyForms.isDirty()&&!confirm(self.dirtyFormsWarning)){return false;}
self.iframe.Drupal.dirtyForms.warning=null;}
if(self.isObject(self.iframe.Drupal.onBeforeUnload)){self.iframe.Drupal.onBeforeUnload.disable();}}catch(e){}}
return true;};Drupal.modalFrame.close=function(args,statusMessages){var self=this;if(!self.canClose()){delete self.beforeCloseIsBusy;return false;}
function closeDialog(){if(!self.isObject(self.iframe.$container)){return;}
self.beforeCloseEnabled=true;self.iframe.$container.dialog('close');if($.isFunction(self.options.onSubmit)){self.options.onSubmit(args,statusMessages);}}
if(!self.isObject(self.iframe.$element)||!self.iframe.$element.size()||!self.iframe.$element.is(':visible')){closeDialog();}
else{self.iframe.$element.fadeOut('fast',function(){$('.modalframe').animate({height:'hide',opacity:'hide'},closeDialog);});}
return true;};Drupal.modalFrame.bindChild=function(iFrameWindow,isClosing){var self=this;var $iFrameWindow=iFrameWindow.jQuery;var $iFrameDocument=$iFrameWindow(iFrameWindow.document);self.iframe.Drupal=iFrameWindow.Drupal;if(isClosing){return;}
if(self.isObject(self.iframe.Drupal.dirtyForms)){self.iframe.Drupal.dirtyForms.warning=self.dirtyFormsWarning;}
$('.modalframe .ui-dialog-title').html($iFrameDocument.attr('title'));$iFrameDocument.attr('tabIndex',-1).css('outline',0);self.iframe.$element.fadeIn('slow',function(){self.iframe.documentSize={width:$iFrameDocument.width(),height:$iFrameWindow('body').height()+25};if(self.options.autoFit){self.currentWindowSize={width:$(window).width(),height:$(window).height()};self.resize();$(window).unbind(self.eventHandlerName('childResize')).bind(self.eventHandlerName('childResize'),function(){self.iframe.documentSize={width:$iFrameDocument.width(),height:$iFrameWindow('body').height()+25};self.resize();});}
var $closeButton=$('.modalframe .ui-dialog-titlebar-close');var $iFrameTabbables=$iFrameWindow(':tabbable:not(form)');var $firstTabbable=$iFrameTabbables.filter(':first');var $lastTabbable=$iFrameTabbables.filter(':last');if(!$firstTabbable.focus().size()){$iFrameDocument.focus();}
$(document).unbind(self.eventHandlerName('keydown'));$closeButton.unbind(self.eventHandlerName('keydown'));$closeButton.bind(self.eventHandlerName('keydown'),function(event){if(event.keyCode&&event.keyCode==$.ui.keyCode.TAB){var $target=(event.shiftKey?$lastTabbable:$firstTabbable);if(!$target.size()){$target=$iFrameDocument;}
setTimeout(function(){$target.focus();},10);return false;}});$iFrameDocument.bind(self.eventHandlerName('keydown'),function(event){if(event.keyCode){if(event.keyCode==$.ui.keyCode.TAB){if(event.shiftKey&&event.target==$firstTabbable.get(0)){setTimeout(function(){$closeButton.focus();},10);return false;}
else if(!event.shiftKey&&event.target==$lastTabbable.get(0)){setTimeout(function(){$closeButton.focus();},10);return false;}}
else if(event.keyCode==$.ui.keyCode.ESCAPE){setTimeout(function(){self.close(false);},10);return false;}}});$(document).bind(self.eventHandlerName('keydown'),function(event){if(event.keyCode&&event.keyCode==$.ui.keyCode.TAB){setTimeout(function(){if(!$iFrameWindow(':tabbable:not(form):first').focus().size()){$closeButton.focus();}},10);return false;}});self.isChildLoaded=true;self.iframe.$container.addClass('modalframe-loaded');if($.isFunction(self.options.onLoad)){self.options.onLoad(self,$iFrameWindow,$iFrameDocument);}});};Drupal.modalFrame.unbindChild=function(iFrameWindow){var self=this;self.isChildLoaded=false;iFrameWindow.jQuery(iFrameWindow.document).unbind(self.eventHandlerName('keydown'));$(window).unbind(self.eventHandlerName('childResize'));$('.modalframe .ui-dialog-title').html(Drupal.t('Please, wait...'));self.iframe.$container.removeClass('modalframe-loaded');self.iframe.$element.fadeOut('fast');};Drupal.modalFrame.isObject=function(something){return(something!==null&&typeof something==='object');};Drupal.modalFrame.sanitizeSize=function(size){var width,height;var $window=$(window);var minWidth=300,maxWidth=$window.width()-30;if(typeof size.width!='number'){width=maxWidth;}
else if(size.width<minWidth||size.width>maxWidth){width=Math.min(maxWidth,Math.max(minWidth,size.width));}
else{width=size.width;}
var minHeight=100,maxHeight=$window.height()-30;if(typeof size.height!='number'){height=maxHeight;}
else if(size.height<minHeight||size.height>maxHeight){height=Math.min(maxHeight,Math.max(minHeight,size.height));}
else{height=size.height;}
return{width:width,height:height};};Drupal.modalFrame.fixPosition=function($element,isOpen){var self=this,$window=$(window);if($.browser.msie&&parseInt($.browser.version)<=6){if(isOpen){var yPos=$window.scrollTop();var xPos=$window.scrollLeft();$window.bind(self.eventHandlerName('scroll'),function(){window.scrollTo(xPos,yPos);});}
else{$window.unbind(self.eventHandlerName('scroll'));}}
else{if(isOpen){var offset=$element.offset();$element.css({left:(offset.left-$window.scrollLeft()),top:(offset.top-$window.scrollTop()),position:'fixed'});}}};Drupal.modalFrame.computeCenterPosition=function($element,elementSize){var $window=$(window);var position={left:Math.max(0,parseInt(($window.width()-elementSize.width)/2)),top:Math.max(0,parseInt(($window.height()-elementSize.height)/2))};if($element.css('position')!='fixed'){var $document=$(document);position.left+=$document.scrollLeft();position.top+=$document.scrollTop();}
return position;};Drupal.modalFrame.resize=function(){var self=this,documentSize=self.iframe.documentSize;var maxSize=self.sanitizeSize({}),titleBarHeight=$('.modalframe .ui-dialog-titlebar').outerHeight(true);var frameSize=self.sanitizeSize(documentSize),dialogSize=$.extend({},frameSize);if((dialogSize.height+titleBarHeight)<=maxSize.height){dialogSize.height+=titleBarHeight;}
else{dialogSize.height=maxSize.height;frameSize.height=dialogSize.height-titleBarHeight;}
var dialogPosition=self.computeCenterPosition($('.modalframe'),dialogSize);var animationOptions=$.extend(dialogSize,dialogPosition);$('.modalframe').animate(animationOptions,'fast',function(){if(self.isObject(self.iframe.$element)&&self.isObject(self.iframe.$container)){$('.modalframe').width(dialogSize.width).height(dialogSize.height);self.iframe.$container.width(frameSize.width).height(frameSize.height);self.iframe.$element.width(frameSize.width).height(frameSize.height);self.iframe.$container.dialog('option',{width:dialogSize.width,height:dialogSize.height});}});};Drupal.theme.prototype.modalFrameThrobber=function(){return'<div class="modalframe-throbber">&nbsp;</div>';};})(jQuery);
;
Drupal.zinch_lead_modal = {school_nid:null, has_similar_schools:false,  window_count : 0};

Drupal.zinch_lead_modal.current_element = null;

Drupal.zinch_lead_modal.back_to_info_edit_modal = function() {
  
  // Back to first modal, so -1
  parent.Drupal.zinch_lead_modal.window_count--;
  Drupal.zinch_lead_modal.info_edit();
}

Drupal.behaviors.zinch_lead_modal = function(context){
  if($(document).attr('lead_modal_processed') !== true){
    $(document).attr('lead_modal_processed', true);
    $(document).bind("flagGlobalAfterLinkUpdate", function(event, data){
      // Update the like/denied counts
      Drupal.zinch_undergradschool_get_counts(data.flagName);
    });

    $(document).bind("additionalQuestionsSubmit", function(event, target, data){
      if((data) && (!data.errors)){
        //the submit was successful, let's just close this modal
        Drupal.zinch_lead_modal.additional_leads();
      }
    });
  }
  
  $('.my-school-table-row .my-school-shout-out .form-submit').click(function() {
    var school_nid = $('.school_nid', $(this).parents('form')).val();
    
    first_lead_modal_url = Drupal.settings.basePath + "zinch/lead_modal_additional_leads/" + school_nid;
    first_lead_modal_number = 3;

    Drupal.zinch_lead_modal.check_similar_schools(school_nid);

    Drupal.zinch_lead_modal.show(first_lead_modal_url, school_nid, first_lead_modal_number);
  })
  
  var trigger_lead_modal_button = function(){
    if ($(this).is('.flag-action') && $(this).parents('.flag-wrapper').is('.flag-like')) { //
      url = this.href;
      url = url.substr(0, url.indexOf('?'));
      school_nid = url.substr(url.lastIndexOf('/') + 1);
      Drupal.zinch_lead_modal.school_nid = school_nid;
      
      
      var first_lead_modal_url = Drupal.settings.basePath + "zinch/lead_modal/" + school_nid;
      var first_lead_modal_number = 1;
      
      var element_clicked = this;
      
      $.getJSON(Drupal.settings.basePath + 'ajax/check_user_info/lead_modal/' + school_nid, function(res) {
        if (res.status) {
          first_lead_modal_url = Drupal.settings.basePath + "zinch/lead_modal_users_competitiveness/" + school_nid;
          first_lead_modal_number = 2;
        }

        if (first_lead_modal_number == 3) {
          // Load modal 3 data
          Drupal.zinch_lead_modal.check_similar_schools(school_nid);
        }
        
        Drupal.zinch_lead_modal.show(first_lead_modal_url, element_clicked, first_lead_modal_number);
      })
      
    }
  };
  
  $('a.flag-link-toggle', context).unbind('click', trigger_lead_modal_button).bind('click', trigger_lead_modal_button);
  $('a.zinch-lead-modal:not(.zinch-lead-modal-processed)', context)
    
    // Now that we have matched an element, we add a CSS class, so that
    // we do not process the same element more than once.
    .addClass('zinch-lead-modal-processed')

    // Now, we attach an onClick event handler to the element.
    .bind('click', function() {
      var clicked_link = this;
      Drupal.zinch_lead_modal.show($(this).attr('href'), clicked_link);
      // Return false so that we cancel the default link behavior.
      return false;
    });

   $('#zinch-lead-modal-submit:not(.zinch-lead-modal-processed)', context)
    .addClass('zinch-lead-modal-processed')
    .click(function() {
    
    if (!Drupal.zinch_lead_modal_fetched_user_data) {
      return false;
    }
    $('h2.error').remove();
    $('.modalframe-page-content .required').removeClass('error');

    var pass = true;
    $("#zinch-lead-modal-mainform .required").each(function(){
        if ($(this).val() == '') {
            $(this).addClass('error');
            pass = false;
        };
    });

    // Validate the required fields in the additional question form.
    $("#zinch-lead-modal-additional_questions .required").each(function(){
        if ($(this).val() == '' || $(this).parent().parent().hasClass('hierarchical-select') && $(this).val() == 'label_0') {
            $(this).addClass('error');
            pass = false;
        };
    }); 
    if ( pass ) {
      //Add By Alex start
      if(typeof parent.CN != 'undefined'){
        var saveType = $('#edit-submitted-school-save').val();
        if(saveType=='' || typeof(saveType) == 'undefined'){
          saveType = 3;
        }
        var snid = $(window.parent.document).find('#hidden-schoolid').val();
        var strRow = parent.jsCacheRow[snid];
        zinchInboxModalCallback(snid, strRow, saveType);
      }
      //Add By Alex end
      $('#zinch-lead-modal-mainform form').submit();
        return false;
    } else {
      if ($('h2.error').length<1) {
        $("#zinch-lead-modal-mainform").before('<h2 class="error">你还有必填项没填哦!</h2>');
      } else {
        $('#zinch-lead-modal-mainform').prev().html('你还有必填项没填哦!');
      }
      // Report Validation Error
      parent.Drupal.zinch_lead_modal.lead_event('ValidationError');
      return false;
    }
   });
   
   if ($.browser.msie && $.browser.version < 9){ // fix
    $('.hierarchical-select-wrapper', context).bind('update-hierarchical-select', function(event, target, data){
      $('#edit-submitted-education-program-hierarchical-select-selects-1')
      .bind('focus', function() {$(this).addClass('expand');})
      .bind('focusout', function() {$(this).removeClass('expand');});
    });
  }

}

Drupal.zinch_lead_modal.mainFormSubmitted = function(target, data){
  
  if((data) && (!data.errors)){
    
    // if the lead is from a event page. we sign up the event after lead submission.
    if (parent.Drupal.zinch_lead_modal.is_event) {
      parent.zinch_signup(parent.Drupal.zinch_lead_modal.event.nid, parent.Drupal.zinch_lead_modal.event.op);
    }
    
    parent.Drupal.zinch_lead_modal.lead_submitted = true;
    parent.Drupal.zinch_lead_modal.lead_success = data.new_lead;
    //the submit was successful, trigger the additional questions submit
    var additional_questions = $('#zinch-lead-modal-additional_questions form');
    if (additional_questions.length > 0){
      additional_questions.submit();
    }
    else{
      Drupal.zinch_lead_modal.users_competitiveness();
    }
  }

  if (data.errors) {
    var form = $('#zinch-lead-modal-mainform .webform-client-form');
    // Report Validation Error
    parent.Drupal.zinch_lead_modal.lead_event('ValidationError');
    for (var name in data.errors) {
      var element_id = '';
      element_id = name.replace(/\]\[/g, '-');
      element_id = element_id.replace(/_/g, '-');
      element_id = 'edit-' + element_id;
      $('#' + element_id, form).addClass('error');
      var message = data.errors[name];

      if ($('h2.error').length<1) {
				$("#zinch-lead-modal-mainform").before('<h2 class="error">' + message + '</h2>');
			} else {
        $('#zinch-lead-modal-mainform').prev().html(message);
      }

      $('.views-throbbing').remove();
      break;
    }
  }
}

Drupal.zinch_lead_modal.additionalLeadsSubmitted = function(target, data){
  if((data) && (!data.errors)){
    Drupal.zinch_lead_modal.is_showing = false;
  }
  else {
    // Report Validation Error
    parent.Drupal.zinch_lead_modal.lead_event('ValidationError');
  }
  if (parent.Drupal.modalFrame) {
    parent.Drupal.modalFrame.close();
  }
  else if (Drupal.modalFrame) {
    Drupal.modalFrame.close();
  }
}

Drupal.zinch_lead_modal.usersCompetitivenessSubmitted = function(target, data){
  if((data) && (!data.errors)){
    Drupal.zinch_lead_modal.is_showing = false;
  }
  else {
  }
  Drupal.zinch_lead_modal.additional_leads();
}

Drupal.zinch_lead_modal.shoutOutOnMySchools = function(target, data){
  var school_nid = data.school_nid;
  Drupal.zinch_lead_modal.school_nid = school_nid;
  
  if((data) && (!data.errors)){
    Drupal.zinch_lead_modal.is_showing = false;
    if (data.flag_like) {
      $('#zinch-lead-modal-shout-out-on-my-schools-form-' + school_nid + ' .form-submit').val(data.after_shout_text).attr('disabled', 'disabled').removeClass('disable').addClass('disable');
    }
  }
}

Drupal.zinch_lead_modal.shoutOutButtonSubmitted = function(target, data){
  var school_nid = data.school_nid;
  Drupal.zinch_lead_modal.school_nid = school_nid;
  
  if((data) && (!data.errors)){
    Drupal.zinch_lead_modal.is_showing = false;
    if (data.status == 'success') {
      if (data.flag_like) {
        $('#zinch-lead-modal-shout-out-button-form-' + school_nid + ' .form-submit').val(data.after_shout_text).attr('disabled', 'disabled').removeClass('disable').addClass('disable');
        $('#zinch-lead-modal-shout-out-button-form-' + school_nid).addClass('liked');
      }
    } else {
      if (!data.logged_in) {
        zinch_ajax_login_popup();
      }
    }
    
  }
}

/*
 * Show the next form for additional leads.
 * This function requires us to look at the Drupal instance on the parent, 
 * it has its own Drupal instance which does not have the 
 * required parameters.
 * 
 * */
Drupal.zinch_lead_modal.additional_leads = function(){
  
  // Count modal number
  parent.Drupal.zinch_lead_modal.window_count++;
  
  // special case
  if (parent.Drupal.zinch_lead_modal.is_event) {
    parent.Drupal.zinch_lead_modal.is_showing = false;
    
    // this line should remove when #4312 is rolled.
    parent.Drupal.modalFrame.close();
    return false;
  }
  
  
  parent.Drupal.zinch_lead_modal.check_similar_schools();

  parent.Drupal.modalFrame.load(Drupal.settings.basePath+"zinch/lead_modal_additional_leads/"+parent.Drupal.zinch_lead_modal.school_nid);
  parent.Drupal.modalFrame.resize();
  return true;
}

Drupal.zinch_lead_modal.info_edit = function(){
  
  // special case
//  if (parent.Drupal.zinch_lead_modal.is_event) {
//    parent.Drupal.zinch_lead_modal.is_showing = false;
//    
//    // this line should remove when #4312 is rolled.
//    parent.Drupal.modalFrame.close();
//    return false;
//  }
  
  
    // TODO: Do we want to add a throbber
    parent.Drupal.modalFrame.load(Drupal.settings.basePath+"zinch/lead_modal/"+parent.Drupal.zinch_lead_modal.school_nid);
    return true;
}

/*
 * Show the next form for additional leads.
 * This function requires us to look at the Drupal instance on the parent, 
 * it has its own Drupal instance which does not have the 
 * required parameters.
 * 
 * */
Drupal.zinch_lead_modal.users_competitiveness = function(){
  
  // Count modal number
  parent.Drupal.zinch_lead_modal.window_count++;
  
  // special case
//  if (parent.Drupal.zinch_lead_modal.is_event) {
//    parent.Drupal.zinch_lead_modal.is_showing = false;
//    
//    // this line should remove when #4312 is rolled.
//    parent.Drupal.modalFrame.close();
//    return false;
//  }
  
    // TODO: Do we want to add a throbber
    parent.Drupal.modalFrame.load(Drupal.settings.basePath+"zinch/lead_modal_users_competitiveness/"+parent.Drupal.zinch_lead_modal.school_nid);
    parent.Drupal.modalFrame.resize();
    return true;
}

// This modal is the additional modal, can call it on page not in iframe.
// @see Drupal.zinch_lead_modal.additional_leads();
Drupal.zinch_lead_modal.additional_leads_direct = function(){
  Drupal.zinch_lead_modal.check_similar_schools();
  if(Drupal.zinch_lead_modal.has_similar_schools){
    Drupal.modalFrame.open({
      url: Drupal.settings.basePath+"zinch/lead_modal_additional_leads/" + Drupal.zinch_lead_modal.school_nid,
      width: 600, //perhaps we should make this configurable?
      height: 500
    });
  }
}

Drupal.zinch_lead_modal.is_zinch_client = function(element){
  return element != null && ($('.zinch_client', element).length > 0 || $(element).hasClass('zinch_client'));
}


Drupal.zinch_lead_modal.is_showing = false;

/**
 * first_window_count could be 1 or 2
 */
Drupal.zinch_lead_modal.show = function(href, element,first_window_number){
  var nid = 0;
  if(!isNaN(element)) {
    nid = element;
    Drupal.zinch_lead_modal.school_nid = nid;
  }
  
  if (!zinch_user_is_login()) {
    return;
  }

//prevent multiple calls from spawning windows
  if (Drupal.zinch_lead_modal.is_showing){
    return;
  }
  
  // we need decide the condition to submit a lead by ajax.
  // just merge it, someone will modify the if condition in other ticket.
  if (Drupal.settings.dreamschool_lead == 'yes') {
    var submit_success = false;
    
    $.ajax({
      async: false,
      data: {
        school_nid: Drupal.zinch_lead_modal.school_nid,
        page: location.href
      },
      url: Drupal.settings.basePath + 'zinch/lead/submit',
      type: 'POST',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("ZINCH_LEAD_SUBMIT","1");
      },
      success: function(res) {
        if (res.status == 'success') {
          submit_success = true;
        } else {
//          alert(res.message); //debug
        }
      }
    });
    
    if (submit_success) {
      // has submit by ajax
      Drupal.zinch_lead_modal.additional_leads_direct();
      return;
    }
  }

  Drupal.zinch_lead_modal.current_element = element;

  Drupal.zinch_lead_modal.is_showing = true;
  Drupal.zinch_lead_modal.window_count = first_window_number;
  
  // When the A element is clicked, the URL of the same link will be opened within a modal frame.
  Drupal.modalFrame.open({
    url: href,
    width: 600, //perhaps we should make this configurable?
    height: 500,
    onLoad: function($modalframe, $iFrameWindow, $iFrameDocument){
      if (top.Drupal.zinch_lead_modal.window_count == first_window_number) {
        $('.modalframe .ui-dialog-titlebar-close:not(.lead_modal-processed)').addClass('lead_modal-processed')
          .bind('click', function(){
            if (top.Drupal.zinch_lead_modal.window_count == first_window_number) {
              Drupal.zinch_lead_modal.is_showing = false;
              if (typeof school_nid == 'undefined') {
                school_nid = Drupal.zinch_lead_modal.school_nid;
              }
              //Add By Alex start
              if(typeof parent.CN != 'undefined'){
                var snid = $(window.parent.document).find('#hidden-schoolid').val();
                if (typeof snid != 'undefined') {
                  var strRow = parent.jsCacheRow[snid];
                  zinchInboxModalCallback(snid, strRow, 3);
                }
              }
              //Add By Alex end
              var query = Drupal.settings.trackingdata;
//              $.get(Drupal.settings.basePath+'undergradschool/flag/like/'+school_nid+'?'+query);
              if (top.Drupal.zinch_lead_modal.window_count == first_window_number) {
                Drupal.zinch_lead_modal.lead_event('Canceled');
              }
            }
        });
        
        if ($(top.document.body).hasClass('logged-in')) {
          top.Drupal.zinch_lead_modal.load_similar(Drupal.zinch_lead_modal.school_nid);
        }
      }
      
      // Process Modal 3
      if (top.Drupal.zinch_lead_modal.window_count == 3) {
        var iframe_body = $('#modalframe-element').contents().find('.modalframe-page-wrapper');
        $element = $(iframe_body);
        
        //Similar school page loaded
        if (typeof top.Drupal.zinch_lead_modal.similar_schools != 'undefined' && top.Drupal.zinch_lead_modal.similar_schools) {
          $('#zinch-lead-modal-additional-leads-form', $iFrameDocument).show();
          
          var add_el = $('#modalframe-element').contents().find('#zinch-lead-modal-additional-leads-form .leads .form-checkboxes');
          $(add_el).html(top.Drupal.zinch_lead_modal.similar_schools);
          
        }
        
        
        if (typeof top.Drupal.zinch_lead_modal.recommend_schools != 'undefined' && top.Drupal.zinch_lead_modal.recommend_schools) {
          $('#zinch-lead-modal-additional-leads-form', $iFrameDocument).show();
          
          var recommend_el = $('#modalframe-element').contents().find('#zinch-lead-modal-additional-leads-form .recommend_leads .form-checkboxes');
          $(recommend_el).html(top.Drupal.zinch_lead_modal.recommend_schools);
        }
        
        if (typeof top.Drupal.zinch_lead_modal.recommend_schools == 'undefined' || top.Drupal.zinch_lead_modal.recommend_schools == '') {
          $('#zinch-lead-modal-additional-leads-form .recommend_leads', $iFrameDocument).hide();
        }

        var height = $element.height() + 30;
        if (height < 500) {
          top.Drupal.modalFrame.iframe.documentSize.height = height + 30;
        }
        else {
          top.Drupal.modalFrame.iframe.documentSize.height = 500;
        }
        top.Drupal.modalFrame.iframe.documentSize.width = $element.width();
        top.Drupal.modalFrame.resize();
      }
      
    },
    onSubmit : function(args, statusMessage){
      if (statusMessage == "success"){
        if(nid == 0) {
          $(element).addClass('submitted');
        }
        Drupal.zinch_lead_modal.is_showing = false;
      }
      $.event.trigger('zinchLeadModalClosed', statusMessage);
    },
    customDialogOptions : {
      draggable: false,
      dialogClass: 'modalframe zinch-lead-modal',
      beforeclose : function() {

        var if_close_modal = true;

        if (Drupal.zinch_lead_modal.window_count > 2) {
          // Just close it
        }
        if (Drupal.zinch_lead_modal.window_count == 2) {
          if_close_modal = !(Drupal.zinch_lead_modal.additional_leads());
        }
        else if (Drupal.zinch_lead_modal.window_count == 1) {
          // If close 1st modal, just close it.
//          if_close_modal = !(Drupal.zinch_lead_modal.users_competitiveness());
        }

        if (if_close_modal) {
          Drupal.zinch_lead_modal.is_showing = false;
        }

        return if_close_modal;
      }
    }
  });
}

Drupal.zinch_lead_modal.lead_event = function(event) {
  var vpage;
  switch(event)
  {
    case 'Canceled':
    case 'ValidationError':
    case 'Success':
    case 'Duplicate':
      vpage = window.location.pathname;
      if ('/' != vpage.charAt(vpage.length-1) ) {
        vpage+='/';
      }
      vpage =vpage + "?ModalStatus=" + event;
      //_gaq.push(['_trackPageview', vpage]);
      break;
  }

  if (event) {
    vpage =vpage + "?ModalStatus=" + event;
  }
  
  if (typeof(_gaq) == 'object') {
    //_gaq.push(['_trackPageview', vpage]);
  }
  
}

Drupal.zinch_lead_modal.check_similar_schools = function(school_nid){
  
  if (typeof school_nid == 'undefined') {
    school_nid = Drupal.zinch_lead_modal.school_nid;
  }
  /*
  $.ajax({
    url: Drupal.settings.basePath+"zinch/lead_modal_has_additional_leads/" + school_nid,
    dataType: 'json',
    async: false,
    success: function(response){
      Drupal.zinch_lead_modal.has_similar_schools = response;
    }
  });
  */
  if (typeof Drupal.zinch_lead_modal.similar_schools == 'undefined') { 
    //emty, so sync load
    Drupal.zinch_lead_modal.load_similar(school_nid, false);
  }
}

//this is pretty much copied from modalframes/js/child.js.  If anyone has
//any idea on how to get this code triggered without having to hijack it here
//i'd love to change this code, 
Drupal.zinch_lead_modal.closeModal = function(args, statusMessages){
  Drupal.zinch_lead_modal.is_showing = false;
  
  var self = Drupal.modalFrameChild;

  // If we cannot reach the parent window, then we have nothing else todo here.
  if (!self || !self.isObject(parent.Drupal) || !self.isObject(parent.Drupal.modalFrame)) {
    return;
  }

  // Shortcuts to parent objects.
  self.$parentWindow = parent.jQuery(parent);
  self.parentModalFrame = parent.Drupal.modalFrame;

  // Close the child window from a separate thread because the current
  // one is busy processing Drupal behaviors.
  setTimeout(function() {
    self.triggerParentEvent('childClose', [args, statusMessages]);
  }, 1);
}
/**
 * inModal tell if the call comes from modal inside.
 */
Drupal.zinch_lead_modal.resize = function(inModal, delay) {
  delay = delay || 1;
  
  var t = setTimeout(function() {
    //Show modal box
    if (inModal) {
      if (typeof parent.Drupal.modalFrame.iframe.documentSize != 'undefined') {
        parent.Drupal.modalFrame.iframe.documentSize.height = $('.modalframe-page-wrapper').height() + 30;
        parent.Drupal.modalFrame.resize();
      } 
    }
    else {
      if (typeof Drupal.modalFrame.iframe.documentSize != 'undefined') {
        Drupal.modalFrame.iframe.documentSize.height = $('.modalframe-page-wrapper').height() + 30;
        Drupal.modalFrame.resize();
      } 
    }
    clearTimeout(t);
  }, delay);
}

Drupal.behaviors.zinch_lead_status = function(context){
  var selects = $("form[id^=zinch-lead-status-form] select", context);
  selects.bind('change', function(){
    frm = $(this).parents('form[id^=zinch-lead-status-form]');
    frm.submit();
  })
}

/**
 * Define the Drupal.zinch_event object.  This is used by zinch_lead_modal and zinch_vortex modules
 */
Drupal.zinch_events = Drupal.zinch_events || {}

Drupal.zinch_events.additionalQuestionsSubmit = function (target, data){
  $.event.trigger("additionalQuestionsSubmit", [target, data]);
}

Drupal.zinch_events.closeModal = function (target, data) {
  parent.Drupal.modalFrame.close();
}

/**
 * Obtain like count by ajax
 */
Drupal.zinch_undergradschool_get_counts = function(flagName){
    if(Drupal.zinch_lead_modal.school_nid) {
      var schoolname = $('.schoolname-'+Drupal.zinch_lead_modal.school_nid+' h1 a').text();
      if(!schoolname) {
       schoolname = $.trim($('.node-type-undergradschool h1.title').text()) ;
      }
      if(!schoolname) {
        schoolname = Drupal.settings.school_name[Drupal.zinch_lead_modal.school_nid];
      }
    }

    if(!schoolname) {
      schoolname = 'School Nid: '+Drupal.zinch_lead_modal.school_nid;
    }

    zinch_track_modal_shoutout(schoolname);
    path = Drupal.settings.basePath+"undergradschool/counts/" + flagName;
    $.ajax({
    url: path,
    type : "post",
    dataType : "text",
    data : '', //pretty sure we'll need a school id or something
    success: function(msg){
      if (flagName == 'like'){
        $('#like-counter span').html(msg);
      }
      else {
        $('#denied-counter span').html(msg);
      }
    },
    error: function(data){
      alert('Could not get like count');
    }
  });
}

$(document).ready(function(){
  
  //process of showing top5 show or hide
  $(".show-reason").click(function () {
    $(".top5-detail", $(this).parent()).slideToggle();
    $(this).toggleClass("expand");
  });
//  $('#zinch-lead-modal-mainform .school-toggle').click(function(){
//    if($('#edit-submitted-education-info-i-am-in-2').attr('checked')) {
//      $('#edit-submitted-education-info-i-am-in-1').attr('checked', true);
//    } else {
//      $('#edit-submitted-education-info-i-am-in-2').attr('checked', true);
//
//    }
//    var status = toggle_school_fields();
//    
//    $(document).trigger('zinch_lead_modal_school_toggle', [status]);
//  })
	
	/*** add some js for like form's front validate ***/

  if($(document).attr('flag_business') !== true){
    $(document).attr('flag_business', true);
    $(document).bind("flagGlobalBeforeLinkUpdate", function(event, data){
      var flagName = data.flagName;
      var contentId = data.contentId;
      var link = data.link;
      //$('a', link).unbind('click');
      var href = $('a', link).attr('href');
      var new_link = null;
      var new_text = '';
      if (flagName == 'dislike'){
        href = href.replace('flag/dislike', 'flag/like');
        new_link = $('.flag-like-' + contentId);
        new_text = 'like';
      }
      else if (flagName == 'like'){
        href = href.replace('flag/like', 'flag/dislike');
        new_link = $('.flag-dislike-' + contentId);
        new_text = 'dislike';
      }
      if (new_link && new_link.length > 0){
        new_link.removeClass('unflag-action');
        $('a', new_link[0]).removeClass('flag-processed')
        .removeClass('unflag-action')
        .attr('href', href)
        .text(new_text);
      }
      Drupal.attachBehaviors();
    });

    $(document).bind("flagGlobalAfterLinkUpdate", function(event, data){
      if ((data.flagName == 'like' || data.flagName == 'dislike') && data.flagStatus == 'flagged'){
        $('a', data.link).unbind('click');
      }
    });
		
		if ($('#edit-type-leads').attr('checked')) {
			$('#report_date_filter').css('display', 'none');
		}
		$('#edit-type-leads, #edit-type-report').click(function(){
			if ($('#edit-type-leads').attr('checked')) {
				$('#report_date_filter').css('display', 'none');
			} else {
				$('#report_date_filter').css('display', 'block');
			}			
		});
  }
});


Drupal.zinch_lead_modal.load_similar = function (school_nid, is_async) {
  if (typeof SIMILAR == 'undefined' ) SIMILAR = {};
  
  if(!SIMILAR[school_nid]) {
    $.ajax({
      url: Drupal.settings.basePath + "zinch/lead_modal_has_additional_leads/" + school_nid,
      dataType : 'json',
      async    : is_async === false ? false : true,
      success  : function(response){ //{status: 1|0, leads: html}
        //console.log(response);
        //ajax Loaded similar schools
        Drupal.zinch_lead_modal.has_similar_schools = response.status;
        Drupal.zinch_lead_modal.similar_schools     = response.add_leads;
        Drupal.zinch_lead_modal.recommend_schools     = response.recommend_leads;
        SIMILAR[school_nid] = response;
      }
    });
  } else {
    Drupal.zinch_lead_modal.has_similar_schools = SIMILAR[school_nid].status;
    Drupal.zinch_lead_modal.similar_schools     = SIMILAR[school_nid].add_leads;
    Drupal.zinch_lead_modal.recommend_schools      = SIMILAR[school_nid].recommend_leads;
  }
  //return Drupal.zinch_lead_modal.has_similar_schools;
};

$(document).bind('ajax_login_done', function(e, res, data) {
  Drupal.zinch_lead_modal.school_nid = res.school_nid;
  Drupal.zinch_lead_modal.load_similar(Drupal.zinch_lead_modal.school_nid);
});

;

Drupal.ajaxSubmit=Drupal.ajaxSubmit||{};Drupal.behaviors.ajaxSubmit=function($context){$('form.ajaxsubmit:not(.ajaxsubmit-processed)',$context).each(function(){var target=document.createElement('div');var form=this;$(target).addClass('ajaxsubmit-message');$(this).before(target);var options={dataType:'json',beforeSubmit:function(){Drupal.ajaxSubmit.beforeSubmit(target,form);},success:function(data){Drupal.ajaxSubmit.success(target,data,form);},complete:function(data,status){Drupal.ajaxSubmit.error(target,form);if(status=='error'||status=='parsererror'){alert(Drupal.t('An error occurred.'));}}};$(this).addClass('ajaxsubmit-processed').ajaxForm(options).find('input[name=ajaxsubmit]').attr('value','1').end().find('input.form-submit').click(function(){$(this).addClass('throbbing');});});};Drupal.ajaxSubmit.beforeSubmit=function(target,form){$(':input',form).removeClass('error');$(target).html('');};Drupal.ajaxSubmit.success=function(target,data,form){$('form input.throbbing').removeClass('throbbing');$(target).html(data.message);if(data.errors){for(var name in data.errors){$('[name="'+name+'"]',form).addClass('error');$('[name^="'+name+'["]',form).addClass('error');}}
if(data.preview){$(target).append(data.preview);}
if(data.__callbacks){$.each(data.__callbacks,function(i,callback){eval(callback)(target,data);});}
if(typeof data.disableScroll=='undefined'||!data.disableScroll){var offset=$(target).offset();window.scrollTo(0,offset.top-10);}
if(data.destination){window.location=Drupal.url(data.destination);}};Drupal.ajaxSubmit.error=function(target,data,form){$('input.form-submit',form).removeClass('throbbing');};;
(function($) {
  // @todo Document this.
  $.extend($,{ placeholder: {
      browser_supported: function() {
        return this._supported !== undefined ?
          this._supported :
          ( this._supported = !!('placeholder' in $('<input type="text">')[0]) );
      },
      shim: function(opts) {
        var config = {
          color: '#888',
          cls: 'placeholder',
          selector: 'input[placeholder], textarea[placeholder]'
        };
        $.extend(config,opts);
        !this.browser_supported() && $(config.selector)._placeholder_shim(config);
      }
  }});

  $.extend($.fn,{
    _placeholder_shim: function(config) {
      function calcPositionCss(target)
      {
        var op = $(target).offsetParent().offset();
        var ot = $(target).offset();

        return {
          top: ot.top - op.top,
          left: ot.left - op.left,
          width: $(target).width()
        };
      }
      return this.each(function() {
        var $this = $(this);
        
        if( $this.data('placeholder') ) {
          var $ol = $this.data('placeholder');
          $ol.css(calcPositionCss($this));
          return true;
        }

        var possible_line_height = {};
        if( !$this.is('textarea') && $this.css('height') != 'auto') {
          possible_line_height = { lineHeight: $this.css('height'), whiteSpace: 'nowrap' };
        }

        var ol = $('<label />')
          .text($this.attr('placeholder'))
          .addClass(config.cls)
          .css($.extend({
            position:'absolute',
            display: 'inline',
            float:'none',
            overflow:'hidden',
            textAlign: 'left',
            color: config.color,
            cursor: 'text',
            paddingTop: $this.css('padding-top'),
            paddingRight: $this.css('padding-right'),
            paddingBottom: $this.css('padding-bottom'),
            paddingLeft: $this.css('padding-left'),
            fontSize: $this.css('font-size'),
            fontFamily: $this.css('font-family'),
            fontStyle: $this.css('font-style'),
            fontWeight: $this.css('font-weight'),
            textTransform: $this.css('text-transform'),
            backgroundColor: 'transparent',
            zIndex: 99
          }, possible_line_height))
          .css(calcPositionCss(this))
          .attr('for', this.id)
          .data('target',$this)
          .click(function(){
            $(this).data('target').focus()
          })
          .insertBefore(this);
        $this
          .data('placeholder',ol)
          .focus(function(){
            ol.hide();
          }).blur(function() {
            ol[$this.val().length ? 'hide' : 'show']();
          }).triggerHandler('blur');
        $(window)
          .resize(function() {
            var $target = ol.data('target')
            ol.css(calcPositionCss($target))
          });
      });
    }
  });
})(jQuery);

jQuery(document).add(window).bind('ready load', function() {
  if (jQuery.placeholder) {
    jQuery.placeholder.shim();
  }
});;
var Fliqz = {};

Fliqz.OnUploaded = function(data, fieldId){
  $('#' + fieldId).val(data.id);
  $.event.trigger("fliqzOnUploadedComplete", [data]);
}

;
function zinch_profile_combo_edit(obj, cb, add){
  $('.ui-dialog ').html('');
	var div = $("<div>loading...</div>");
	//div.load("/zinch/zinch_profile_work/js");
  var urlTypeHigh = cb.indexOf("_highschool");
  var urlTypeCollege = cb.indexOf("_college");
  var urlTypeSibling = cb.indexOf("_sibling");
  var urlTypeActivity = cb.indexOf("_activity");
  var urlTypeWork = cb.indexOf("_work");
  if( urlTypeHigh != -1 ){
    OpenTitle = Drupal.settings.OpenTitleHigh;
  }else if( urlTypeCollege != -1 ){
    OpenTitle = Drupal.settings.OpenTitleCollege;
  }else if( urlTypeSibling != -1 ){
    OpenTitle = Drupal.settings.OpenTitleSibling;
  }else if( urlTypeActivity != -1 ){
    OpenTitle = Drupal.settings.urlTypeActivity;
  }else if( urlTypeWork != -1 ){
    OpenTitle = Drupal.settings.urlTypeWork;
  }else{
    OpenTitle = "Add Title";
  }
  if( add != 'add' ){
    OpenTitle = OpenTitle.replace('Add','Edit');
  }
	div.dialog({title:OpenTitle});
  $('.ui-dialog ').width(370);
	$.ajax({
		  url: cb,
		  dataType: 'text/html',
		  success: function(data){     
        var data = data.replace('zinch_profile_change_school_type','zinch_profile_alex_change_school_type');
        data = data.replace('zinch_profile_change_school_type','zinch_profile_alex_change_school_type');
				div.html(data);
        //check witch checked
        var witch_check = $(data).find('input[@name="school_type"][checked=true]').val();
        if(witch_check == '0'){
          $('.field_of_study_grad').parent().parent().hide();
          $('.degree_grad').parent().parent().hide();
        }else{
          $('.field_of_study').parent().parent().hide();
          $('.degree_college').parent().parent().hide();
        }
        Drupal.attachBehaviors(div.get(0));

        var date_settings = new Object();
        date_settings.changeMonth = 'true'; 
        date_settings.changeYear = 'true'; 
        date_settings.yearRange = "-3:3"; 
        
        $("input[id^='edit-date-datepicker-popup-']").datepicker(date_settings);
			},
		  error: function(request, status, ex){
				div.html(ex);//alert(ex);
			}
		});
	
//	$.getJSON("/zinch/zinch_profile_work/js/1", null, function(data) {
//		alert('here');
//		div.html(data.form);
//	});
	
	//$(".form-edit-div", obj.parentNode).toggle('slow');
//	var div = $(".form-edit-div", obj.parentNode);
//	div.dialog({
//      close: function(event, ui){
//		$("<div class='form-edit-div' style='display:none'>" + div.html() + "</div>").appendTo(obj.parentNode);
//	  }}
//	);
}

function zinch_profile_combo_delete(obj, cb){
	//new
	//$(obj.parentNode.parentNode.parentNode).remove();
	//old
	//$(obj.parentNode).remove();
	/*$.getJSON(cb, null, function(data){
		Drupal.Ajax.updater(data.updaters);
	});*/
  $.ajax({
   type: "GET",
   url: cb,
   success:function(msg){ 
     if( msg == 'success' ){
        window.location.reload();
     }
   }
  });
}

function zinch_profile_toggle_end_year(obj){
	var id = obj.id.replace('current', 'end-year');
	if (obj.checked){
	  $('#' + id + '-wrapper').hide();
	  $('#' + id).val('');
	}
	else{
		$('#' + id + '-wrapper').show();
	}
}

$(document).ready(function(){
  $("#activity").children('div').hide();
  $("#activity").attr("class","");
  $("#position").children('div').hide();
  $("#position").attr("class","");
  $("#highschool").children('div').hide();
  $("#highschool").attr("class","");
  $("#college").children('div').hide();
  $("#college").attr("class","");
  $("#sibling").children('div').hide();
  $("#sibling").attr("class","");
  Drupal.Ajax = Drupal.Ajax || {};
  Drupal.Ajax.plugins = Drupal.Ajax.plugins || {}; // in case if you do not load ajax.js
  Drupal.Ajax.plugins.disable_scrollfind = function(hook, args) {
    if (hook == 'scrollFind') return false;
  }
});
function show_next(type){
	if( type == 'activity' ){
		$("#activity").children('div').show();
    $("#activity").attr("class","form-group-items");
    $("#add_activity").hide();
	}else if(type == 'position'){
		$("#position").children('div').show();
    $("#position").attr("class","form-group-items");
    $("#add_position").hide();
	}else if( type == 'highschool' ){
		$("#highschool").children('div').show();
    $("#highschool").attr("class","form-group-items");
    $("#add_highschool").hide();
	}else if( type == 'college' ){
		$("#college").children('div').show();
    $("#college").attr("class","form-group-items");
    $("#add_college").hide();
    //college init state
    $('.field_of_study_grad').parent().parent().hide();
    $('.degree_grad').parent().parent().hide();
	}else if( type == 'sibling' ){
		$("#sibling").children('div').show();
    $("#sibling").attr("class","form-group-items");
    $("#add_sibling").hide();
	}
}
function hide_next(type){
  $('.form-text.'+type).val('');
  $('.form-textarea.autogrow.'+type).val('');
  if( type == 'activitys' ){
		$("#activity").children('div').hide();
    $("#activity").attr("class","");
    $("#add_activity").show();
	}else if(type == 'position'){
		$("#position").children('div').hide();
    $("#position").attr("class","");
    $("#add_position").show();
	}else if( type == 'highschool' ){
		$("#highschool").children('div').hide();
    $("#highschool").attr("class","");
    $("#add_highschool").show();
	}else if( type == 'college' ){
		$("#college").children('div').hide();
    $("#college").attr("class","");
    $("#add_college").show();
	}else if( type == 'sibling' ){
		$("#sibling").children('div').hide();
    $("#sibling").attr("class","");
    $("#add_sibling").show();
	}
}
function zinch_profile_change_school_type(obj){
  if( obj == '0' ){
    $('.field_of_study').parent().parent().show();
    $('.degree_college').parent().parent().show();
    $('.field_of_study_grad').parent().parent().hide();
    $('.degree_grad').parent().parent().hide();
    $('.field_of_study_grad').val('');
    $('.degree_grad').val('');
  }else if (obj == '1'){
    $('.field_of_study').parent().parent().hide();
    $('.degree_college').parent().parent().hide();
    $('.field_of_study_grad').parent().parent().show();
    $('.degree_grad').parent().parent().show();
    $('.field_of_study').val('');
    $('.degree_college').val('');
  }
}

function zinch_profile_alex_change_school_type(obj){
  if( obj == '0' ){
    $('.ui-widget-content .field_of_study').parent().parent().show();
    $('.ui-widget-content .degree_college').parent().parent().show();
    $('.ui-widget-content .field_of_study_grad').parent().parent().hide();
    $('.ui-widget-content .degree_grad').parent().parent().hide();
    $('.ui-widget-content .field_of_study_grad').val('');
    $('.ui-widget-content .degree_grad').val('');
  }else if (obj == '1'){
    $('.ui-widget-content .field_of_study').parent().parent().hide();
    $('.ui-widget-content .degree_college').parent().parent().hide();
    $('.ui-widget-content .field_of_study_grad').parent().parent().show();
    $('.ui-widget-content .degree_grad').parent().parent().show();
    $('.ui-widget-content .field_of_study').val('');
    $('.ui-widget-content .degree_college').val('');
  }
}

function check_year(year,id){
  var output = '';
  var startMore=Number(year)+4;
  $("#"+id+" option").each(function(i){
    var current_year = $(this).val();
    var option_select = '';
    if( startMore == current_year ){
      option_select = "selected";
    }
    output += "<option value='"+current_year+"' "+option_select+">"+current_year+"</option>";
  });
  var id_end = id.replace('start','end');
  $("#"+id_end).html( output );
  $("#"+id_end+" option").each(function(i){
    if($(this).val() <year){
      $(this).remove();
    }
  });
}

$(document).bind('autocompleteAfterSelect', function(event, input, data){
  var nid_input = $('#' + input.id + '-nid');
  var text = (data.innerText)?data.innerText:data.textContent;
  if (nid_input.length > 0){
    nid_input.val(data.autocompleteValue);
  }
  $(input).val(text);
});;
$(document).ready(function() { 
  $('#edit-field-malling-address-0-street-wrapper').find('label').text('Address:');
  $('#edit-field-malling-address-0-additional-wrapper').find('label').text('');
  $('#edit-field-malling-address-0-delete-location-wrapper').hide();
  var html_in = " <span class='after_legend'>(" + Drupal.t("not visible on profile") + ")</span>";
  $("#fieldset-email-address").find("legend").append(html_in);
  $("#fieldset-phone").find("legend").append(html_in);
  $("#fieldset-im").find("legend").append(html_in);
  $("#fieldset-mailing-address").find("legend").append(html_in);
  $("#fieldset-parent-email-address").find("legend").html("Parent(s) Email"+html_in);
  $("#fieldset-counselor-email-address").find("legend").html("Counselor's Email"+html_in);
  $("#fieldset-account-name").find("legend").append(html_in);
  $(".sticky-header").remove();
  $("#edit-field-home-town-0-delete-location-wrapper").remove();
  //$("#field_websites_values").find("th").append(" <span class='after_legend'>(Manage your websites)</span>");

  $('#node-form .default_pictures').bind('click', function(){
    var href = this.href;
    Drupal.modalFrame.open({
      url: href,
      width: 500, //perhaps we should make this configurable?
      height: 500,
      onLoad: function($modalframe, $iFrameWindow, $iFrameDocument){
      },
      onSubmit : function(args, statusMessage){
        $('#edit-field-profile-image-0-fid').val(args[0].fid);
        $('#edit-field-profile-image-0-list').val('1'); //not sure this is right.
        smallPath = args[0].filepath.replace('/files/', '/files/imagefield_thumbs/');
        $('.imagefield-preview img').attr('src', Drupal.settings.basePath + smallPath);
      }
    });
    return false;
  });
  //change_default_value('edit-field-first-name-0-value','First name');
  change_default_value('edit-verfication-code','请填写验证码');
  
  //Modify by Alex for user can change cellphone by himself
  codeJs = "";
  timeFunction = "";
  timeRemainingFunction = "";
  timeRemaining = 60;
  $('.user-edit-profile-settings #edit-field-cellphone-0-value-wrapper #edit-field-cellphone-0-value').attr('readonly', true);
  $('#edit-field-cellphone-0-value-wrapper').append($('#save_cellphone_verfication').css('display', 'none')
                                                                  ).append($('#edit-verfication-code-wrapper').css('display', 'none')
                                                                  ).append($('#edit_cellphone_verfication'));
  au.Events.submit.update = function(param) {
    $('#content-area .profile-new-avatar img').attr('src', param.new_avatar);
  }
  
});
function zinchEditCellphoneEvent () {
  $('#edit-verfication-code-wrapper').css('display', 'block');
  $('#save_cellphone_verfication').css('display', 'block');
  $('#edit-field-cellphone-0-value-wrapper #edit-field-cellphone-0-value').attr('readonly', false);
  $('#edit_cellphone_verfication').html('<a href="javascript:;" onclick="zinchGetVerificationCode()">获取验证码</a>');
}
function zinchGetVerificationCode () {
  var phoneNumber = $('#edit-field-cellphone-0-value').val();
  zinchPhoneCodeWaitingAccount(60000);
  zinchChangeTimeRemainingAccount(timeRemaining);
  $.ajax({
    type: "POST",
    url:  "/phone/code",
    data: "phoneNumber="+phoneNumber,
    success: function(msg){
      if(msg != "error"){
        codeJs = msg;
      }else{
        alert("请检查你的电话是否正确");
        zinchPhoneCodeResponseAccount();
      }
    }
  });
}
function zinchPhoneCodeWaitingAccount(timeLimit){
  var strWaiting = "<span class='waiting-response'>已发送</span>";
  $("#edit_cellphone_verfication").html(strWaiting).append('<div>如果未收到验证码，请在<span class="time-remaining">60</span>秒后重新获取</div>');
  timeFunction = window.setTimeout("zinchPhoneCodeResponseAccount()",timeLimit);
}
function zinchPhoneCodeResponseAccount() {
  var strResponse = '<a href="javascript:;" onclick=zinchGetVerificationCode()>获取验证码</a>';
  $("#edit_cellphone_verfication").html(strResponse);
  clearTimeout(timeFunction);
  clearInterval(timeRemainingFunction);
}
function zinchChangeTimeRemainingAccount(timeRemaining) {
  timeRemainingFunction = window.setInterval(function(){
    timeRemaining--;
    $(".time-remaining").html(timeRemaining);
  },1000);
}
function zinchSaveAccountAjax() {
  var mobile = $('#edit-field-cellphone-0-value').val();
  var verification = $('#edit-verfication-code').val();
  $.ajax({
    type: "POST",
    url:  "/save/mobile",
    data: "mobile="+mobile+"&verification="+verification,
    success: function(msg){
      if(msg != "error"){
        if(msg == 'success'){
          $('#edit-field-cellphone-0-value-wrapper #edit-field-cellphone-0-value').attr('readonly', true);
          $('#save_cellphone_verfication, #edit-verfication-code-wrapper').css('display', 'none');
          $('#edit_cellphone_verfication').html('<div id="edit_cellphone_verfication"><a href="javascript:;" id="edit_cellphone_verfication_event" onclick="zinchEditCellphoneEvent()">编辑</a></div>');
          alert("你的联系方式修改成功");
        } else {
          alert(msg);
        }
      }
    }
  });
}
function change_default_value(id,default_value){
  $("#"+id).bind("blur", function() {
    var txt = $(this);
    if ($.trim(txt.val()).length == 0) {
      txt.val(default_value);
      txt.addClass('detalt-text-value');
      txt.data("empty", true);
    }else{
      txt.data("empty", false);
    }
  }).bind("focus", function() {
    var txt = $(this);
    if (txt.data("empty")) {
      txt.val('');
      txt.removeClass(detalt-text-value);
      txt.data("empty", false);
    }
  }).blur();
}

Drupal.behaviors.zinch_profile = function(context) {
  var th = $("#field_websites_values, #field_general_websites_values").find("th");
  th.each(function(i){
    if( $(this).text() == Drupal.t('Order') ){
      $(this).remove();
    }
  });

  // Remove the "Undecided" option from the 1st level major selector.
  $('fieldset.group-general-college-info option[value="358484"]').remove();
  $('select option[value="none"]').html(Drupal.t('- None -'));
}


function zinch_profile_menu_ready() {
  $("#block-zinch_profile-0 .item-list ul").addClass('user-information-special');
  //process of study-tool show or hide
  $(".study-tool-button").click(function (e) {
    zinch_menu_change('study-tool-button', 'account', e);
    $('.non-authorized').bt('<div class="zch-completeness-pop-module-rtl">' +
      '<div class="zch-pop-img-arrow"></div>' +
        '<div class="zch-pop-module-inner">' +
          '<div class="zch-pop-module-body-completeness">你尚未通过Zinch的电话认证, 某些高级功能将无法正常使用；如果你刚刚注册, 并填写了正确的电话号码, Zinch将在48小时之内对你进行认证；你也可以拨打Zinch热线电话400-668-2526直接认证。</div>' +
        '</div>' +
      '</div>', {
      trigger: ['mouseenter','click'],
      postShow: function(box){
        var that = this;
        $(box).bind('mouseleave',function() {
            that.btOff();
        });
      },
      positions: 'left',
      fill: '#444444',
      cssStyles: {border: '2px solid #444444', borderRadius: '4px'},
      width: 330,
      height:230,
      padding: 2,
      animate: true,
      spikeLength: 10,
      spikeGirth: 25
    });
  });
  $(".study-tool-message").click(function (e) {
    zinch_menu_change('study-tool-message', 'message', e);
  });
  $("body") .click(function(){
    //$('canvas').remove();
    $('.bt-content').remove();
    $('#user-sidebar-empty').addClass('sidebar-empty-notice').html('');
    var expandClass = 'expand-message';
    $(".study-tool-message").removeClass(expandClass);
    $(".study-tool-button").removeClass('expand');
  });
}
function zinch_menu_change (className, type, e) {
  if (type == 'account') {
    var currentBody = $("#block-zinch_profile-0 .item-list").html();
    var expandClass = 'expand';
    $('.study-tool-message').removeClass('expand-message');
  } else if (type == 'message') {
    var currentBody = $("#zinch-unread-message").html();
    var expandClass = 'expand-message';
    $('.study-tool-button').removeClass('expand');
  }
  $('.'+className).toggleClass(expandClass);
  if ($('.'+className).hasClass(expandClass)) {
    $('#user-sidebar-empty').removeClass('sidebar-empty-notice').html(currentBody);
  } else {
    $('#user-sidebar-empty').addClass('sidebar-empty-notice').html('');
  }
  if (e && e.stopPropagation) {
     e.stopPropagation();  
  } else {
    window.event.cancelBubble = true;  
  }
}


;

jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){try{cookieValue=decodeURIComponent(cookie.substring(name.length+1));}
catch(e){cookieValue=cookie.substring(name.length+1);}
break;}}}
return cookieValue;}};;

Drupal.zinch=Drupal.zinch||{};Drupal.zinch.set_data=function(name,value){if(name==undefined){return;}
var options={expires:10,path:'/'};var str_value=JSON.stringify(value);$.cookie(name,str_value,options);}
Drupal.zinch.get_data=get_data=function(name){if(name==undefined){return'';}
var str_value=$.cookie(name);return JSON.parse(str_value);}
Drupal.zinch.set_tracking=function(id,value){if(id==undefined){return;}
var options={path:'/'};$.cookie(id,value,options);}
Drupal.zinch.init_tracking=function(){var maps=Drupal.settings.CookieMap;var reverse_map={};$.each(maps,function(key,value){reverse_map[value.field]={"field":key,"field_type":value.field_type};})
$.each($('#views-exposed-form-undergrad-school-search-page-1'),function(i,o){GetSavedFilters(o);});$.each($('#views-exposed-form-zinch-scholarship-search-page-1'),function(i,o){if(!$('body.logged-in')){GetSavedFilters(o);}
$("#ignore_gpa").change();});$('#views-exposed-form-undergrad-school-search-page-1:not(.tracking-processed)').addClass('tracking-processed').submit(function(){SetSavedFilters($('#views-exposed-form-undergrad-school-search-page-1'));});$('#views-exposed-form-zinch-scholarship-search-page-1:not(.tracking-processed)').addClass('tracking-processed').submit(function(){SetSavedFilters(this);});function SetSavedFilters(searchForm){var cookie=Drupal.zinch.get_data(Drupal.settings.CookieName);var prefs={};if(cookie){prefs['interests']=cookie['interests'];prefs['locations']=cookie['locations'];}
var inputs=$(':input');$.each(inputs,function(i,o){if(maps[o.name]!=null){var input=maps[o.name].field;prefs[input]=prefs[input]||[];if(o.type=='checkbox'){if(o.checked){prefs[input].push($(o).val());}}
else if(o.type=='radio'){if(o.checked){prefs[input].push($(o).val());}}
else{prefs[input]=$(o).val();}}});Drupal.zinch.set_data(Drupal.settings.CookieName,prefs);}
function GetSavedFilters(form){var prefs=Drupal.zinch.get_data(Drupal.settings.CookieName)||{};if(!ObjectIsEmpty(prefs)){ClearForm(form);}
$.each(prefs,function(field,val){var input=reverse_map[field];if(input!=undefined){widget_name=input.field.replace(/(\[|\])/g,'\\$1');if($.isArray(val)){$.each(val,function(key,key_val){if(input.field_type=="checkbox"||input.field_type=="radio"){var chk=$('[name='+widget_name+'][value='+key_val+']');if(chk!=undefined&&chk.length>0){chk[0].checked=true;}
else{chk=$('[value='+key_val+']');if(chk!=undefined&&chk.length>0){chk[0].checked=true;}}}});}
else{var item=$('[name='+widget_name+']');if(item.length>0){item.val(val);if(item[0].update_value){item[0].update_value(val);}}}}});}
function ClearForm(form){var elements=form.elements;for(i=0;i<elements.length;i++){field_type=elements[i].type.toLowerCase();switch(field_type){case"text":case"password":case"textarea":elements[i].value="";break;case"radio":case"checkbox":if(elements[i].checked){elements[i].checked=false;}
break;case"select-one":case"select-multi":elements[i].selectedIndex=-1;break;default:break;}}}
function ObjectIsEmpty(obj){for(var prop in obj){if(obj.hasOwnProperty(prop))return false;}
return true;}}
Drupal.zinch.init_unique_tracker=function(){$.get(Drupal.settings.basePath+'ajax/tracking',{tracking_type:"zt"},function(response){if(response.status=='success'){eval(response.script);}},'json');}
Drupal.zinch.urlParams={};(function(){var e,a=/\+/g,r=/([^&;=]+)=?([^&;]*)/g,d=function(s){return decodeURIComponent(s.replace(a," "));},q=window.location.search.substring(1);while(e=r.exec(q)){Drupal.zinch.urlParams[d(e[1])]=d(e[2]);}})();function replaceQueryString(url,param,value){var re=new RegExp("([?|&])"+param+"=.*?(&|$)","i");if(url.match(re)){return url.replace(re,'$1'+param+"="+value+'$2');}
else{if(url.indexOf('?')<=0){return url+'?'+param+"="+value;}
else{return url+'&'+param+"="+value;}}}
(function(){var utm_source=Drupal.zinch.urlParams['utm_source'];var utm_campaign=Drupal.zinch.urlParams['utm_campaign']
var utm_medium=Drupal.zinch.urlParams['utm_medium'];var utm_term=Drupal.zinch.urlParams['utm_term'];var utm_content=Drupal.zinch.urlParams['utm_content'];var source=Drupal.zinch.urlParams['source'];if(utm_source==null||utm_source==''){utm_source=source;}
if(!utm_source&&!utm_campaign&&!utm_medium&&!utm_term&&!utm_content&&$.cookie('__utmz')){if(!$.cookie('utm_source')&&!$.cookie('utm_campaign')&&!$.cookie('utm_medium')&&!$.cookie('utm_term')&&!$.cookie('utm_content')){/\d+?\.\d+?\.\d+?\.\d+?\.(.+?)$/i.exec($.cookie('__utmz'));var utmz=RegExp.$1;var parse={};var utmz_split=utmz.split('|');for(i in utmz_split){var item=utmz_split[i].split('=');if(item[0]=='utmcsr'){parse[item[0]]=item[1];}
else{parse[item[0]]='ga_'+item[1];}}
if(parse.utmcsr){Drupal.zinch.set_tracking('utm_source',parse.utmcsr);}
if(parse.utmccn){Drupal.zinch.set_tracking('utm_campaign',parse.utmccn);}
if(parse.utmcmd){Drupal.zinch.set_tracking('utm_medium',parse.utmcmd);}
if(parse.utmctr){Drupal.zinch.set_tracking('utm_term',parse.utmctr);}
if(parse.utmcct){Drupal.zinch.set_tracking('utm_content',parse.utmcct);}}}
else{if(utm_source!=null&&utm_source!=''){if(utm_source!=null&&utm_source!=''){Drupal.zinch.set_tracking('utm_source',utm_source);}
else{Drupal.zinch.set_tracking('utm_source','');}
if(utm_campaign!=null&&utm_campaign!=''){Drupal.zinch.set_tracking('utm_campaign',utm_campaign);}
else{Drupal.zinch.set_tracking('utm_campaign','');}
if(utm_medium!=null&&utm_medium!=''){Drupal.zinch.set_tracking('utm_medium',utm_medium);}
else{Drupal.zinch.set_tracking('utm_medium','');}
if(utm_term!=null&&utm_term!=''){Drupal.zinch.set_tracking('utm_term',utm_term);}
else{Drupal.zinch.set_tracking('utm_term','');}
if(utm_content!=null&&utm_content!=''){Drupal.zinch.set_tracking('utm_content',utm_content);}
else{Drupal.zinch.set_tracking('utm_content','');}}}})();;

Drupal.behaviors.zinchSelect=function(context){$('select.select-list').selectList();$('ul.selectlist-list li').click(function(){$(this).parent().prev('select.select-list').change();});};
/*
 * selectList jQuery plugin
 * version 0.3.3
 *
 * Copyright (c) 2009-2010 Michal Wojciechowski (odyniec.net)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://odyniec.net/projects/selectlist/
 *
 */

(function($) {

$.selectList = function(select, options) {
    var

        name = $(select).attr('name'),

        $list,

        $item, $newItem,

        $option,

        keyEvent,

        ready,

        first = 0,

        change, click, keypress, enter;

    function show($item, callback) {
        if (options.addAnimate && ready)
            if (typeof options.addAnimate == 'function')
                options.addAnimate($item.hide().get(0), callback);
            else
                $item.hide().fadeIn(300, callback);
        else {
            $item.show();
            if (callback)
                callback.call($item.get(0));
        }
    }

    function hide($item, callback) {
        if (options.removeAnimate && ready)
            if (typeof options.removeAnimate == 'function')
                options.removeAnimate($item.get(0), callback);
            else
                $item.fadeOut(300, callback);
        else {
            $item.hide();
            if (callback)
                callback.call($item.get(0));
        }
    }

    function cmp(item1, item2) {
        return typeof options.sort == 'function' ?
            options.sort(item1, item2)
            : ($(item1).data('text') > $(item2).data('text'))
                == (options.sort != 'desc');
    }

    function add(value, text, callHandler) {
        $option = null;

        if ($(value).is('option')) {
            $option = $(value);

            if ($option.get(0).index < first)
                return;

            if (!options.duplicates)
                $option.attr('disabled', 'disabled')
                    .data('disabled', 1);

            value = $option.val();
            text = $option.text();
        }

        $newItem = $(options.template.replace(/%text%/g,
            $('<b/>').text(text).html()).replace(/%value%/g, value)).hide();

        $('<input type="hidden" />').appendTo($newItem)
                .attr({name: name, value: value});

        $newItem.data('value', value).data('text', text);
        if ($option)
            $newItem.data('option', $option);

        $newItem.addClass(options.classPrefix + '-item');

        if (options.clickRemove)
            $newItem.click(function () {
                remove($(this));
            });

        if (first && !keypress)
            select.selectedIndex = 0;

        var callback = function () {
            if (callHandler !== false)
                options.onAdd(select, value, text);

        };

        if (options.sort && ($item = $list.children().eq(0)).length) {
            while ($item.length && cmp($newItem.get(0), $item.get(0)))
                $item = $item.next();

            show($item.length ? $newItem.insertBefore($item)
                : $newItem.appendTo($list), callback);
        }
        else
            show($newItem.appendTo($list), callback);

        checkValidation();
    }

    function remove($item, callHandler) {
        hide($item, function () {
            var value = $(this).data('value'),
                text = $(this).data('text');

            if ($(this).data('option'))
                $(this).data('option').removeAttr('disabled')
                    .removeData('disabled');

            $(this).remove();

            checkValidation();

            if (callHandler !== false)
                options.onRemove(select, value, text);
        });
    }

    function checkValidation() {
        if ($(select.form).validate && $(select).is('.' +

                $(select.form).validate().settings.errorClass))
            $(select.form).validate().element(select);
    }

    this.val = function () {
        var values = [];

        $list.find('input[name=' + name + ']')
            .each(function () {
                values.push($(this).val());
            });

        return values;
    };

    this.add = function (value, text) {
        add(value, text);
    };

    this.remove = function (value) {
        $list.children().each(function () {
            if ($(this).data('value') == value)
                remove($(this));
        });
    };

    this.setOptions = function (newOptions) {
        var sort = newOptions.sort && newOptions.sort != options.sort;

        options = $.extend(options, newOptions);

        if (sort)
            $list.children().slice(first).each(function () {
                add($(this).data('value'), $(this).data('text'), false);
            }).remove();
    };

    this.setOptions(options = $.extend({
        addAnimate: true,
        classPrefix: 'selectlist',
        clickRemove: true,
        removeAnimate: true,
        template: '<li>%text%</li>',
        onAdd: function () {},
        onRemove: function () {}
    }, options));

    ($list = $(options.list || $('<ul />').insertAfter($(select))))
        .addClass(options.classPrefix + '-list');

    $(select).find(':selected').each(function () {
        add($(this), null, false);
    });

//    $(select).removeAttr('multiple').removeAttr('size');
    $(select).removeAttr('multiple');
    $(select).get(0).removeAttribute('size');

    if ($(select).attr('title')) {
        $(select).prepend($('<option />').text($(select).attr('title')));
        first = 1;
        select.selectedIndex = 0;
    }

    keyEvent = $.browser.msie || $.browser.safari ? 'keydown' : 'keypress';

    $(select).bind(keyEvent, function (event) {
        keypress = true;

        if ((event.keyCode || event.which) == 13) {
            enter = true;
            $(select).change();
            keypress = true;
            return false;
        }
    })
    .change(function() {
        if (!keypress && !click) return;
        change = true;
        $option = $(select).find('option:selected');
        if (!$option.data('disabled') && (!keypress || enter))
            add($option);

        if (keypress)
            keypress = change = click = false;

        enter = false;
    })
    .mousedown(function () {
        click = true;
    });

    $(select).find('option').click(function (event) {
        if ($.browser.mozilla && event.pageX >= $(select).offset().left &&
                event.pageX <= $(select).offset().left + $(select).outerWidth() &&
                event.pageY >= $(select).offset().top &&
                event.pageY <= $(select).offset().top + $(select).outerHeight())
            return false;

        click = true;

        if (!($(this).attr('disabled') || $(this).data('disabled')
                || keypress || change))

            add($(this));

        if (!keypress)
            change = click = false;

        return false;
    });

    $(select.form).submit(function () {
        if ($(select.form).validate && !$(select.form).valid())
            return;

        $(select).removeAttr('name');
    });

    $(window).bind('beforeunload', function () {
        $(select).removeAttr('name');
    });

    if ($.validator) {
        validatorGetLength = $.validator.prototype.getLength;

        $.validator.prototype.getLength = function (value, element) {
            return $(element).is('select') && $(element).data('selectList') ?
                $(element).data('selectList').val().length
                : validatorGetLength(value, element);
        };
    }

    ready = true;
};

$.fn.selectList = function (options) {
    options = options || {};

    this.filter('select').each(function () {
        if ($(this).data('selectList'))
            $(this).data('selectList').setOptions(options);
        else
            $(this).data('selectList', new $.selectList(this, options));
    });

    if (options.instance)
        return $(this).filter('select').data('selectList');

    return this;
};

var jQueryVal = $.fn.val, validatorGetLength;

$.fn.val = function (value) {
    return (typeof value == 'undefined' && this.data('selectList') ?
        this.data('selectList').val : jQueryVal).call(this, value);
};

})(jQuery);
;

Drupal.behaviors.zinchFormsAC=function(context){$('.form-autocomplete:not(.zinch-forms-ac-processed)',context).addClass('zinch-forms-ac-processed').keyup(function(e){if(!e){e=window.event;}
switch(e.keyCode){case 9:case 13:case 16:case 17:case 18:case 20:case 27:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:return true;default:$(this).addClass('throbbing');return true;}});};
function range (low, high, step) {
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // *     example 1: range ( 0, 12 );
    // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // *     example 2: range( 0, 100, 10 );
    // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    // *     example 3: range( 'a', 'i' );
    // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    // *     example 4: range( 'c', 'a' );
    // *     returns 4: ['c', 'b', 'a']
    var matrix = [];
    var inival, endval, plus;
    var walker = step || 1;
    var chars = false;

    if (!isNaN(low) && !isNaN(high)) {
        inival = low;
        endval = high;
    } else if (isNaN(low) && isNaN(high)) {
        chars = true;
        inival = low.charCodeAt(0);
        endval = high.charCodeAt(0);
    } else {
        inival = (isNaN(low) ? 0 : low);
        endval = (isNaN(high) ? 0 : high);
    }

    plus = ((inival > endval) ? false : true);
    if (plus) {
        while (inival <= endval) {
            matrix.push(((chars) ? String.fromCharCode(inival) : inival));
            inival += walker;
        }
    } else {
        while (inival >= endval) {
            matrix.push(((chars) ? String.fromCharCode(inival) : inival));
            inival -= walker;
        }
    }

    return matrix;
}

$(document).ready(function() {
  //popup a image
  var imgbasepath = 'sites/all/themes/zinchus/images/';
  var img = 'school-profile-notification.png';
  var base = Drupal.settings.basePath;
  var phone_validation = /1[3485]\d{9}$/;
  
  if (Drupal.settings.imgHost) {
    base = Drupal.settings.imgHost + base;
  }
  
  var appenddiv = '<div id=\'firstadd\' class=\'school-profile-img\'><img src=' + base + imgbasepath + img + ' id=\'imgg\'></div>';
  if($('body').hasClass('not-logged-in') && $('body').hasClass('node-type-undergradschool')){
    if($('#firstadd').length == 0){
        $('#page-wrapper').append(appenddiv);        
    }
  }
  
  var appenddiv_handler = function() {
    $('#register-block').addClass('register-highlight');
    
    if($('#firstadd').length == 0){
        $('#page-wrapper').append(appenddiv);        
     }
     //$("html,body").animate({scrollTop: $("#register-block").offset().top}, 1000);
    return false;
  }
  
  //$('.flag-like .flag-processed').bind('click', appenddiv_handler);
  // shut the popup image
  $('body').click(function () {
      if($('#firstadd').length == 1){
          $('#firstadd').remove();
      }
  });

  $('#register-block .form-submit').click(function() {
    $('#register-button-wrapper').attr('class', 'register-button-wrapper-propress');
    //Not item should be empty!
    if($('#register-block #edit-email').val().length == 0) {
      $('#register-form-message').text('请填写电子邮件');
      $('#register-block #edit-email').focus();
      return false;
    }
    if($('#register-block #edit-password').val().length == 0) {
      $('#register-form-message').text('请填写密码');
      $('#register-block #edit-password').focus();
      return false;
    }
    if($('#register-block #edit-password').val().length < 6) {
      $('#register-form-message').text('密码不能少于6位');
      $('#register-block #edit-password').focus();
      return false;
    }
    if($('#register-block #edit-current-status').val() == 0) {
      $('#register-form-message').text('请选择就读年级');
      $('#register-block #edit-current-status').focus();
      return false;
    }
    if($('#register-block #edit-grad-year').val() == 0) {
      $('#register-form-message').text('请选择毕业年份');
      $('#register-block #edit-grad-year').focus();
      return false;
    }
    if($('#register-block #edit-phone').val().length == 0) {
      $('#register-form-message').text('请填写电话号码');
      $('#register-block #edit-phone').focus();
      return false;
    }
    if (!phone_validation.test($('#register-block #edit-phone').val())) {
      $('#register-form-message').text(Drupal.t('Please enter a correct 11-digit phone number'));
      $('#register-block #edit-phone').focus();
      return false;      
    }
    if (Drupal.settings.hasCodeJs == '1') {
      var verifyCode = $('#register-block #edit-verify-code').val();
      if(　typeof(codeJs)=='undefine'　||　codeJs != verifyCode || verifyCode=='' ){
        $('#register-form-message').text('请填写正确的验证码');
        $('#register-block #verify_code').focus();
        return false;
      }
    }
    if(!$('#accede').attr('checked')) {
      return false;
    }
    //Validate the email
    var mail = $('#register-block #edit-email').val();
    var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    if(!search_str.test(mail)){
      $('#register-form-message').text('电子邮件不正确');
      $('#register-block #edit-email').focus();
      return false;
    }

   reg_loading_button(1);
   //Check the mail is used or not
   //$('#register-block-button-span').addClass('views-throbbing');
   $.get(Drupal.settings.basePath+'zinch/email-used/'+mail, function(data) {
      if(data == 'yes') {
        //$('#register-block-button-span').removeClass('views-throbbing');
        $('#register-form-message').text('此邮箱已注册');
        $('#register-block #edit-email').focus();
        reg_loading_button();
        return false;
      }
      if(data == 'no') {
        //Ready for submit

        //$('#register-block-button-span').removeClass('views-throbbing');
       $('#register-form-message').text(' ');
       
       //track virtual page
       //should be here, because some page don't use ajax
       zinch_track_page(location.pathname + '/reg-school');
       
       var trigger_ajax_registration = false;
       if (trigger_ajax_registration && $('body').hasClass('node-type-undergradschool')) {//use ajax when undergrad school
         var data = {};
         $('#zinch-register-block-form input, #zinch-register-block-form select').each(function() {
           if ($(this).attr('name')) {
            data[$(this).attr('name')] = $(this).val();
           }
         });
         data['ajax'] = 1;
         
         var t = setTimeout(function() {
           $(document).trigger('ajax_login_pre_submit', [data]);
           clearTimeout(t);
         }, 700);//delay for ajax time
         
         $.ajax({
           'url':  $('#zinch-register-block-form').attr('action'),
           'type': 'POST',
           'data': data,
           'success':  function(res, textStatus, jqXHR) {
             /**
              res =>
               array(
                'component'    => $component, 
                'user_email'   => $user_email, 
                'school_name'  => $school_name,
                'next_url'     => url('undergradschool/flag/like/'.$values['school']),
                'school_nid'   => $values['school'],
              */
             $(document).trigger('ajax_login_done',[res, data]);
             //console.log(res);
            }, 
           'dataType': 'json'}
         );
        // $.post($('#zinch-register-block-form').attr('action')
       } else {
         // don't use ajax except school profile page
         $('#zinch-register-block-form').submit();
         return true;
       }
     }
    });  
    return false;
  });
  
 $('#register-block #edit-current-status').change(function(){
    var r;
    var d = new Date();
    var current_year = d.getFullYear();
    var current_status = $('#register-block #edit-current-status').val();
    
    if (current_status == 0) {
      return;
    }
    if (current_status == 5 || current_status == 6) {
      r = range(2000, current_year, 1);
    }
    else if (current_status == 3) {
      r = range(current_year+1, current_year + 5, 1);
    }
    else if (current_status == 1 || current_status == 2 || current_status == 4){
      r = range(current_year+1, current_year + 3, 1);
    }
    var optionElements = $.map(r, function(item) {return '<option value="'+ item +'">'+ item +'</option>';});
    if (current_status == 5 || current_status == 6) {
      optionElements.unshift("<option value='1999'>"+ Drupal.t('Before 2000')+ "</option>");
    }    
    optionElements.unshift("<option value='0'>"+ Drupal.t('Grad year')+ "</option>");
    $('#register-block #edit-grad-year-wrapper select')
    .empty().append(optionElements.join(''));
  });  
  
  $(document).bind('ajax_login_pre_submit', function(e, data) {
    $('.other_login').html('').hide();
    $('.other_login_line').html('').hide();
    //$('#authenticated-block').show();
    
    $('#register-block').animate({height: 0, opacity: 0}, 500, function(){
      $('#register-block').hide();
      $('#authenticated-block').show();
      
      var t = setTimeout(function() {
        //Show modal box
        show_ajax_modal_box(data, appenddiv_handler);
        clearTimeout(t);
      }, 700);
    });

    var zinchLoginMenu = '<li class="first"><a class="profile" href="/zinch_dashboard/profile/redirect">个人信息</a></li><li class="first"><a class="setting" href="/zinch_dashboard/settings/redirect">设置</a></li><li class="first"><a onclick="zinch_logout()" href="/logout" class="logout">退出</a></li>';
    $('#zinch-login-menu .item-list ul').html(zinchLoginMenu);
    $('#zinch-login-menu .item-list ul li').css('float', 'left');
  });

  $(document).bind('ajax_login_done', 
  //param {res, data}
    function(e, res, data) {
      //Track shoutout
      zinch_track_shoutout(res.component, res.user_email, res.school_name);
      //  console.log(e);
      //  if (e.res['next_url']) {
      //    $.get(e.res['next_url']);
      //  }
  });

  if ($('#register-button-wrapper .submit-loading').size() == 0) {
    $('<span id="submit-loading-wrapper"><img class="submit-loading" src="/sites/all/themes/zinchus/images/ajax-loader.gif"></span>').appendTo('#register-button-wrapper'); 
  }
});


function show_ajax_modal_box(data, appenddiv_handler) {
  Drupal.settings.lead_modal_data = {val: {}, checked: {}};
  Drupal.settings.lead_modal_data.val['edit-submitted-contact-info-profile-email'] = data.email;
  Drupal.settings.lead_modal_data.val['edit-submitted-contact-info-phone'] = data.phone;

  var edu = get_grad_years(data);
  Drupal.settings.lead_modal_data.val['edit-submitted-education-info-high-school-grad-year'] = edu.highschool;
  Drupal.settings.lead_modal_data.val['edit-submitted-education-info-college-grad-year'] = edu.college;
  Drupal.settings.lead_modal_data.checked['edit-submitted-education-info-i-am-in-' + edu.i_am_in] = true ;

  // Clear other fields
  Drupal.settings.lead_modal_data.val['edit-submitted-mailing-address-first-name'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-mailing-address-last-name'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-mailing-address-address'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-contact-info-gender'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-education-info-college-gpa'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-education-info-high-school-gpa'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-contact-info-date-of-birth-year'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-contact-info-date-of-birth-month'] = '';
  Drupal.settings.lead_modal_data.val['edit-submitted-contact-info-date-of-birth-day'] = '';
  
  
  $('body').removeClass('not-logged-in').addClass('logged-in');

  // Only zinch_client school can pop up modal
  $('a.flag-link-toggle').addClass('zinch_client');

  // Unbind reg mask layer
  $('.flag-like .flag-processed').unbind('click', appenddiv_handler);

  // Trigger lead modal
  $('a.flag-link-toggle').click();

  // Change button style
  $('a.flag-link-toggle').removeClass('flag-action').addClass('unflag-action');
  $('a.flag-link-toggle .shout-out').html('已表达兴趣');
}

function get_grad_years(data ) {
  var edu = {};
  switch(parseInt(data.current_status)) {
    case 1 :
      //means junior high school
      edu.highschool = data.grad_year + 3;
      edu.college = data.grad_year + 7;
      edu.i_am_in = 1;
      break;
    case 2 :
      edu.highschool = data.grad_year;
      edu.college = data.grad_year + 4;
      edu.i_am_in = 1;
      break;
    case 3 :
      edu.highschool = data.grad_year - 4;
      edu.college = data.grad_year 
      edu.i_am_in = 2;
      break;
    case 5 :
      edu.highschool = data.grad_year - 4;
      edu.college = data.grad_year;
      edu.i_am_in = 2;
      break;
    case 4 :
      edu.highschool = data.grad_year - 6;
      edu.college = data.grad_year - 2;
      edu.i_am_in = 2;
      break;
    case 6 :
      edu.highschool = data.grad_year - 6;
      edu.college = data.grad_year - 2;
      edu.i_am_in = 2;
      break;
  }
  return edu;
}

function reg_loading_button(display) {
  if (display) {
    $('#register-block-button').hide();
    $('#register-block-wrapper .submit-loading').show();    
  } else {
    $('#register-block-button').show();
    $('#register-block-wrapper .submit-loading').hide();    
  }
}

$(document).ready(function(){
  
  //track registration form behavior
  $('#registration-step1-form input[type=text]').blur(function(){
    if ($(this).val()) {
      zinch_track_event($(this).attr('name'), $(this).val(), 'Registration');
    }
  });
  
  $('#registration-step1-form input[type=submit]').click(function(){
    zinch_track_event('submit', $(this).val(), 'Registration');
  });
  
  $('#registration-step1-form input').keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
    return true;
  })
});

;
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function range (low, high, step) {
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // *     example 1: range ( 0, 12 );
    // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // *     example 2: range( 0, 100, 10 );
    // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    // *     example 3: range( 'a', 'i' );
    // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    // *     example 4: range( 'c', 'a' );
    // *     returns 4: ['c', 'b', 'a']
    var matrix = [];
    var inival, endval, plus;
    var walker = step || 1;
    var chars = false;

    if (!isNaN(low) && !isNaN(high)) {
        inival = low;
        endval = high;
    } else if (isNaN(low) && isNaN(high)) {
        chars = true;
        inival = low.charCodeAt(0);
        endval = high.charCodeAt(0);
    } else {
        inival = (isNaN(low) ? 0 : low);
        endval = (isNaN(high) ? 0 : high);
    }

    plus = ((inival > endval) ? false : true);
    if (plus) {
        while (inival <= endval) {
            matrix.push(((chars) ? String.fromCharCode(inival) : inival));
            inival += walker;
        }
    } else {
        while (inival >= endval) {
            matrix.push(((chars) ? String.fromCharCode(inival) : inival));
            inival -= walker;
        }
    }

    return matrix;
}

(function($) {

  $.organicTabs = function(el, options) {
    
    var base = this;
    base.$el = $(el);
    base.$nav = base.$el.find(".nav");
                
    base.init = function() {
        
      base.options = $.extend({},$.organicTabs.defaultOptions, options);
            
      // Accessible hiding fix
      $(".hide").css({
        "position": "relative",
        "top": 0,
        "left": 0,
        "display": "none"
      }); 
      $("li > a", base.$nav).each(function(){
        $(this).click(function() {
            
          // Figure out current list via CSS class
          var curList = base.$el.find("a.current").attr("href").substring(1),
                
          // List moving to
          $newList = $(this),
                    
          // Figure out ID of new list
          listID = $newList.attr("href").substring(1),
                
          // Set outer wrapper height to (static) height of current inner list
          $allListWrap = base.$el.find(".list-wrap"),
          curListHeight = $allListWrap.height();
          $allListWrap.height(curListHeight);
                                        
          if ((listID != curList) && ( base.$el.find(":animated").length == 0)) {
                                            
            // Fade out current list
            base.$el.find("#"+curList).fadeOut(base.options.speed, function() {
                        
              // Fade in new list on callback
              base.$el.find("#"+listID).fadeIn(base.options.speed);
                        
              // Adjust outer wrapper to fit new list snuggly
              var newHeight = base.$el.find("#"+listID).height();
              $allListWrap.animate({
                height: newHeight
              });
                        
              // Remove highlighting - Add to just-clicked tab
              base.$el.find(".nav li a").removeClass("current");
              $newList.addClass("current");
                            
            });
                    
          }   
                
          // Don't behave like a regular link
          // Stop propegation and bubbling
          return false;
        });
      });
    };
    base.init();
  };
    
  $.organicTabs.defaultOptions = {
    "speed": 300
  };
    
  $.fn.organicTabs = function(options) {
    return this.each(function() {
      (new $.organicTabs(this, options));
    });
  };
    
})(jQuery);

$(document).ready(function() {
  var user_email_already_exist_flag = false;
  var user_email_already_exist = function (email, func) {
     $.get(Drupal.settings.basePath+'zinch/email-used/'+ email,func);
  };
  
  $("#current_status").organicTabs({
      "speed": 200
  });  
  $("#edit-current-status-new").bind('focus', function(){$('#current_status').show('slow');});
 
  $("#current_status .list-wrap a").each(function(){
    $(this).click(function(){
      $("#edit-current-status-new").val($(this).html());
      user_register_validation('current');
      $("#edit-email").focus();
      $('#current_status').hide('slow');
      return false;
    });
  });
  var user_register_validation = function (element) {
    var re = true;
    var email_validation = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    var phone_validation = /1[3485]\d{9}$/;
    var current_status_array = ['大一', '大二', '大三', '大四', '高一', '高二', '高三', '初一', '初二', '初三', '本科以上'];
    var full_name_validation = /^[A-Za-z0-9]+ [A-Za-z0-9]+$/;
    if (element == 'all') {    
        $('#current_status').hide('slow');   
    }
    
    if ((element == 'email' || element == 'all')) {
      if ($('#registration-step1-form #edit-email').val().length == 0) {
        $('#registration-step1-form #edit-email-wrapper').addClass('register_error');
        $('#registration-step1-form #edit-email-wrapper .description').html('<span class="error"></span>请填写电子邮件');
        re = false;      
      }
      else if (!email_validation.test($('#registration-step1-form #edit-email').val())) {
        $('#registration-step1-form #edit-email-wrapper').addClass('register_error');
        $('#registration-step1-form #edit-email-wrapper .description').html('<span class="error"></span>电子邮件不正确');
        re = false;
      }
      else {
        re = true;
      }
    }
    
    if (element == 'phone' || element == 'all') {
      if ($('#registration-step1-form #edit-phone').val().length == 0) {
        $('#registration-step1-form #edit-phone-wrapper').addClass('register_error');
        $('#registration-step1-form #edit-phone-wrapper .description').html('<span class="error"></span>请填写电话号码');
        re = false;      
      }
      else if (!phone_validation.test($('#registration-step1-form #edit-phone').val())) {
        $('#registration-step1-form #edit-phone-wrapper').addClass('register_error');
        $('#registration-step1-form #edit-phone-wrapper .description').html('<span class="error"></span>请正确填写11位国内手机号码');
        re = false;            
      }
      else {
        $('#registration-step1-form #edit-phone-wrapper').removeClass('register_error');
        $('#registration-step1-form #edit-phone-wrapper .description').html('<span class="correct"></span>');
      }
    }
    
    if (element == 'password' || element == 'all') {
      if ($('#registration-step1-form #edit-password').size() > 0) {
        if ($('#registration-step1-form #edit-password').val().length < 6) {
          $('#registration-step1-form #edit-password-wrapper').addClass('register_error');
          $('#registration-step1-form #edit-password-wrapper .description').html('<span class="error"></span>请填写6位以上的密码');
          re = false;         
        }
        else {
          $('#registration-step1-form #edit-password-wrapper').removeClass('register_error');
          $('#registration-step1-form #edit-password-wrapper .description').html('<span class="correct"></span>');
        }
      }
    }
    
    if ((element == 'full_name') || element == 'all') {
      if ($('#registration-step1-form #edit-real-name').val().length > 0) {
        // alert($('#edit-real-name', $handler).val());
        if (!full_name_validation.test($('#registration-step1-form #edit-real-name').val())) {
          $('#registration-step1-form #edit-real-name-wrapper').addClass('register_error');
          $('.description', $('#registration-step1-form #edit-real-name-wrapper')).html('<span class="error"></span>请正确填写姓名，格式为Han Meimei&nbsp;&nbsp;');
          validate_debug_message = 'full_name';
          re = false;            
        }
        else {
          $('#registration-step1-form #edit-real-name-wrapper').removeClass('register_error');
          $('#registration-step1-form #edit-real-name-wrapper .description').html('<span class="correct"></span>');
        }
      }
      else {
        $('#registration-step1-form #edit-real-name-wrapper').addClass('register_error');
        $('#registration-step1-form #edit-real-name-wrapper .description').html('<span class="error"></span>请正确填写姓名，格式为Han Meimei&nbsp;&nbsp;');
        re = false;      
      }
    }
    
    if (element == 'grad_year' || element == 'all') {
      if ($('#registration-step1-form #edit-current-status').val() == 0 || $('#registration-step1-form #edit-grad-year').val() == 0) {
        $('#registration-step1-form #edit-current-status-wrapper, #registration-step1-form #edit-grad-year-wrapper').addClass('register_error');
        $('#registration-step1-form #edit-grad-year-wrapper .description').html('<span class="error"></span>学习阶段和毕业年份为必填字段');
        re = false;  
      }
      else {
        $('#registration-step1-form #edit-current-status-wrapper, #registration-step1-form #edit-grad-year-wrapper').removeClass('register_error');
        $('#registration-step1-form #edit-grad-year-wrapper .description').html('<span class="correct"></span>');
      }
    }
    
    if ((element == 'current' || element == 'all')) {
      if (-1 === $.inArray($('#edit-current-status-new').val(), current_status_array)) {
        $('#edit-current-status-new-wrapper').addClass('register_error');
        $('#edit-current-status-new-wrapper .description').html('<div class="item-message"><span class="error"></span>请填正确的学历</div>');
        re = false;
      }
      else if(!$('#edit-current-status-new').val()) {
        $('#edit-current-status-new-wrapper').addClass('register_error');
        $('#edit-current-status-new-wrapper .description').html('<div class="item-message"><span class="error"></span>请填写学历</div>');
        re = false;        
      }
      else {
        $('#edit-current-status-new-wrapper').removeClass('register_error');
        $('#edit-current-status-new-wrapper .description').html('<span class="correct"></span>');
      }
    }
    
    return re;
  };
  $('#registration-step1-form #edit-email').bind('focusout', function(){
    if (user_register_validation('email')) {
      user_email_already_exist($('#registration-step1-form #edit-email').val(), function(data) {
        if(data == 'yes') {
          user_email_already_exist_flag = true;
          $('#registration-step1-form #edit-email-wrapper').addClass('register_error');
          $('#registration-step1-form #edit-email-wrapper .description').html('<span class="error"></span>此邮箱已经被使用.');
        }
        else {
          user_email_already_exist_flag = false;
          $('#registration-step1-form #edit-email-wrapper').removeClass('register_error');
          $('#registration-step1-form #edit-email-wrapper .description').html('<span class="correct"></span>');
        }
      });
    }
  });
  
  $('#registration-step1-form #edit-real-name').bind('focusout', function(){
    user_register_validation('full_name');
  }); 
  
  $('#registration-step1-form #edit-phone').bind('focusout', function(){
    user_register_validation('phone');
  });  
  
  $('#registration-step1-form #edit-password').bind('focusout', function(){
    user_register_validation('password');
  });    
  
  $('#registration-step1-form #edit-current-status').change(function(){
    var r;
    var d = new Date();
    var current_year = d.getFullYear();
    var current_status = $('#registration-step1-form #edit-current-status').val();
    
    if (current_status == 0) {
      return;
    }
    if (current_status == 5 || current_status == 6) {
      r = range(2000, current_year, 1);
    }
    else if (current_status == 3) {
      r = range(current_year+1, current_year + 5, 1);
    }
    else if (current_status == 1 || current_status == 2 || current_status == 4){
      r = range(current_year+1, current_year + 3, 1);
    }
    var optionElements = $.map(r, function(item) {return '<option value="'+ item +'">'+ item +'</option>';});
    if (current_status == 5 || current_status == 6) {
      optionElements.unshift("<option value='1999'>2000年以前</option>");
    }    
    optionElements.unshift("<option value='0'>毕业年份</option>");
    $('#registration-step1-form #edit-grad-year-wrapper select')
    .empty().append(optionElements.join(''));
  });
  
  $('#registration-step1-form').submit(function() {
     if(!user_register_validation('all') || user_email_already_exist_flag) {
       return false;
     }
  });
});;
/**
 *  author:		Timothy Groves - http://www.brandspankingnew.net
 *	version:	1.0 - 2006-08-04
 *
 *	requires:	nothing
 *
 */

var useBSNns;

if (useBSNns)
{
	if (typeof(bsn) == "undefined")
		bsn = {}
	_bsn = bsn;
}
else
{
	_bsn = this;
}









_bsn.AjaxO = function ()
{
	this.req = {};
	this.isIE = false;
}



_bsn.AjaxO.prototype.makeRequest = function (url, meth, onComp, onErr)
{
	if (meth != "POST")
		meth = "GET";
	
	this.onComplete = onComp;
	this.onError = onErr;
	
	var pointer = this;
	
	// branch for native XMLHttpRequest object
	if (window.XMLHttpRequest)
	{
		this.req = new XMLHttpRequest();
		this.req.onreadystatechange = function () { pointer.processReqChange() };
		this.req.open("GET", url, true); //
		this.req.send(null);
	// branch for IE/Windows ActiveX version
	}
	else if (window.ActiveXObject)
	{
		this.req = new ActiveXObject("Microsoft.XMLHTTP");
		if (this.req)
		{
			this.req.onreadystatechange = function () { pointer.processReqChange() };
			this.req.open(meth, url, true);
			this.req.send();
		}
	}
}


_bsn.AjaxO.prototype.processReqChange = function()
{
	
	// only if req shows "loaded"
	if (this.req.readyState == 4) {
		// only if "OK"
		if (this.req.status == 200)
		{
			this.onComplete( this.req );
		} else {
			this.onError( this.req.status );
		}
	}
	
};
/**
 *  author:		Timothy Groves - http://www.brandspankingnew.net
 *	version:	1.5 - 2006-08-03
 *
 *	requires:	nothing
 *
 */

var useBSNns;

if (useBSNns)
{
	if (typeof(bsn) == "undefined")
		bsn = {}
	_bsn = bsn;
}
else
{
	_bsn = this;
}


if (typeof(_bsn.DOM) == "undefined")
	_bsn.DOM = {}




_bsn.DOM.createElement = function ( type, attr, cont, html )
{
	var ne = document.createElement( type );
	if (!ne)
		return false;
		
	for (var a in attr)
		ne[a] = attr[a];
		
	if (typeof(cont) == "string" && !html)
		ne.appendChild( document.createTextNode(cont) );
	else if (typeof(cont) == "string" && html)
		ne.innerHTML = cont;
	else if (typeof(cont) == "object")
		ne.appendChild( cont );

	return ne;
}





_bsn.DOM.clearElement = function ( id )
{
	var ele = this.getElement( id );
	
	if (!ele)
		return false;
	
	while (ele.childNodes.length)
		ele.removeChild( ele.childNodes[0] );
	
	return true;
}









_bsn.DOM.removeElement = function ( ele )
{
	var e = this.getElement(ele);
	
	if (!e)
		return false;
	else if (e.parentNode.removeChild(e))
		return true;
	else
		return false;
}





_bsn.DOM.replaceContent = function ( id, cont, html )
{
	var ele = this.getElement( id );
	
	if (!ele)
		return false;
	
	this.clearElement( ele );
	
	if (typeof(cont) == "string" && !html)
		ele.appendChild( document.createTextNode(cont) );
	else if (typeof(cont) == "string" && html)
		ele.innerHTML = cont;
	else if (typeof(cont) == "object")
		ele.appendChild( cont );
}









_bsn.DOM.getElement = function ( ele )
{
	if (typeof(ele) == "undefined")
	{
		return false;
	}
	else if (typeof(ele) == "string")
	{
		var re = document.getElementById( ele );
		if (!re)
			return false;
		else if (typeof(re.appendChild) != "undefined" ) {
			return re;
		} else {
			return false;
		}
	}
	else if (typeof(ele.appendChild) != "undefined")
		return ele;
	else
		return false;
}







_bsn.DOM.appendChildren = function ( id, arr )
{
	var ele = this.getElement( id );
	
	if (!ele)
		return false;
	
	
	if (typeof(arr) != "object")
		return false;
		
	for (var i=0;i<arr.length;i++)
	{
		var cont = arr[i];
		if (typeof(cont) == "string")
			ele.appendChild( document.createTextNode(cont) );
		else if (typeof(cont) == "object")
			ele.appendChild( cont );
	}
}





//	var opt = new Array( '1'=>'lorem', '2'=>'ipsum' );
// var sel = '2';

_bsn.DOM.createSelect = function ( attr, opt, sel )
{
	var select = this.createElement( 'select', attr );
	for (var a in opt)
	{
	
		var o = {id:a};
		if (a == sel)	o.selected = "selected";
		select.appendChild( this.createElement( 'option', o, opt[a] ) );
		
	}
	
	return select;
}




_bsn.DOM.getPos = function ( ele )
{
	var ele = this.getElement(ele);

	var obj = ele;

	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;


	var obj = ele;
	
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;

	return {x:curleft, y:curtop}
};
/**
 *  author:		Timothy Groves - http://www.brandspankingnew.net
 *	version:	1.1 - 2006-09-20
 *
 *	requires:	bsn.DOM.js
 *				bsn.Ajax.js
 *
 */

var useBSNns;

if (useBSNns)
{
	if (typeof(bsn) == "undefined")
		bsn = {}
	_bsn = bsn;
}
else
{
	_bsn = this;
}


if (typeof(_bsn.DOM) == "undefined")
	_bsn.DOM = {}
	







_bsn.AutoSuggest = function (fldID, param)
{
	if (!document.getElementById)
		return false;
	
	this.fld = _bsn.DOM.getElement(fldID);

	if (!this.fld)
		return false;
		
		
	this.nInputChars = 0;
	this.aSuggestions = [];
	this.iHighlighted = 0;
	
	
	// parameters object
	this.oP = (param) ? param : {};
	// defaults	
	if (!this.oP.minchars)		this.oP.minchars = 1;
	if (!this.oP.method)		this.oP.meth = "get";
	if (!this.oP.varname)		this.oP.varname = "input";
	if (!this.oP.className)		this.oP.className = "autosuggest";
	if (!this.oP.timeout)		this.oP.timeout = 2500;
	if (!this.oP.delay)			this.oP.delay = 500;
	if (!this.oP.maxheight && this.oP.maxheight !== 0)		this.oP.maxheight = 250;
	if (!this.oP.cache)			this.oP.cache = false;
	
	var pointer = this;
	
	this.fld.onkeyup = function (ev) {
		var key = (window.event) ? window.event.keyCode : ev.keyCode;
		if( key!='40' && key!='38' ){
			pointer.getSuggestions( this.value ) 
		}
	};
	this.fld.setAttribute("autocomplete","off");
}


_bsn.AutoSuggest.prototype.getSuggestions = function (val)
{
	if (val.length == this.nInputChars)
		return false;
	
	if (val.length < this.oP.minchars)
	{
		this.nInputChars = val.length;
		this.aSuggestions = [];
		this.clearSuggestions();
		return false;
	}
	
	
	if (val.length>this.nInputChars && this.aSuggestions.length && this.oP.cache)
	{
		// get from cache
		var arr = [];
		for (var i=0;i<this.aSuggestions.length;i++)
		{
			if (this.aSuggestions[i].substr(0,val.length).toLowerCase() == val.toLowerCase())
				arr.push( this.aSuggestions[i] );
		}
		
		this.nInputChars = val.length;
		this.aSuggestions = arr;
		
		
		this.createList( this.aSuggestions );
		
		return false;
	}
	
	
	this.nInputChars = val.length;
	
	var pointer = this;
	clearTimeout(this.ajID);
	this.ajID = setTimeout( function() { pointer.doAjaxRequest() }, this.oP.delay );


	return false;
}





_bsn.AutoSuggest.prototype.doAjaxRequest = function ()
{
	var pointer = this;
	
	// create ajax request
	//var url = this.oP.script+this.oP.varname+"="+this.fld.value;
	var url = this.oP.script+this.oP.varname+"/"+this.fld.value;
	var meth = this.oP.meth;
	var onSuccessFunc = function (req) { pointer.setSuggestions(req) };
	var onErrorFunc = function (status) { };

	var myAjax = new _bsn.AjaxO;
	myAjax.makeRequest( url, meth, onSuccessFunc, onErrorFunc );
}





_bsn.AutoSuggest.prototype.setSuggestions = function (req)
{
	
	var xml = req.responseXML;
	// traverse xml
	//
	this.aSuggestions = [];
	var results = xml.getElementsByTagName('results')[0].childNodes;
	for (var i=0;i<results.length;i++)
	{
		if (results[i].hasChildNodes())
		{
			//alert(results[i].childNodes[0].innerText)
			this.aSuggestions.push( results[i].childNodes[0].nodeValue );
		}
	}
	
	
	this.idAs = "as_"+this.fld.id;
	
	
	this.createList(this.aSuggestions);

}





_bsn.AutoSuggest.prototype.createList = function(arr)
{
	// clear previous list
	//
	this.clearSuggestions();

	// create and populate ul
	//
	var ul = _bsn.DOM.createElement("ul", {id:this.idAs, className:this.oP.className});
	
	
	var pointer = this;
	for (var i=0;i<arr.length;i++)
	{
		var a = _bsn.DOM.createElement("a", { href:"#" }, arr[i]);
		a.onclick = function () { 
			var nvalue=this.childNodes[0].nodeValue.split(',',1);
			
			pointer.setValue( nvalue ); 
			pointer.resetTimeout();
			return false; 
		}
		var li = _bsn.DOM.createElement(  "li", {}, a  );
		ul.appendChild(  li  );
	}
	
	var pos = _bsn.DOM.getPos(this.fld);
	
	ul.style.left = pos.x + "px";
	ul.style.top = ( pos.y + this.fld.offsetHeight ) + "px";
//	ul.style.width = this.fld.offsetWidth+"px";
	ul.onmouseover = function(){ pointer.killTimeout() }
	//ul.onmouseout = function(){ pointer.resetTimeout() }
	document.onclick = function(){ pointer.resetTimeout() }


	document.getElementsByTagName("body")[0].appendChild(ul);
	
	if (ul.offsetHeight > this.oP.maxheight && this.oP.maxheight != 0)
	{
		ul.style['height'] = this.oP.maxheight;
		//ul.style['overflow-y'] = 'scroll';
	} 
	
	
	var TAB = 9;
	var ESC = 27;
	var KEYUP = 38;
	var KEYDN = 40;
	var RETURN = 13;
	
	
	
	this.fld.onkeydown = function(ev)
	{
		var key = (window.event) ? window.event.keyCode : ev.keyCode;

		switch(key)
		{
			case TAB:
			pointer.setHighlightedValue();
			break;

			case ESC:
			pointer.clearSuggestions();
			break;

			case KEYUP:
			pointer.changeHighlight(key);
			return false;
			break;

			case KEYDN:
			pointer.changeHighlight(key);
			return false;
			break;
		}

	};

	this.iHighlighted = 0;
	
	
	// remove autosuggest after an interval
	//
	clearTimeout(this.toID);
	var pointer = this;
	this.toID = setTimeout(function () { pointer.clearSuggestions() }, this.oP.timeout);
}









_bsn.AutoSuggest.prototype.changeHighlight = function(key)
{
	var list = _bsn.DOM.getElement(this.idAs);
	if (!list)
		return false;
	
	
	if (this.iHighlighted > 0)
		list.childNodes[this.iHighlighted-1].className = "";
	
	if (key == 40)
		this.iHighlighted ++;
	else if (key = 38){
		this.iHighlighted --;
	}
	
	
	if (this.iHighlighted > list.childNodes.length)
		this.iHighlighted = list.childNodes.length;
	if (this.iHighlighted < 1)
		this.iHighlighted = 1;
	list.childNodes[this.iHighlighted-1].className = "highlight";
	var nvalue=list.childNodes[this.iHighlighted-1].innerText.split(',',1);
	document.getElementById("school_name").value=nvalue;	
	//alert(document.getElementById("school_name").value);
	this.killTimeout();
}








_bsn.AutoSuggest.prototype.killTimeout = function()
{
	clearTimeout(this.toID);
}

_bsn.AutoSuggest.prototype.resetTimeout = function()
{
	clearTimeout(this.toID);
	var pointer = this;
	this.toID = setTimeout(function () { pointer.clearSuggestions() }, 0);
}







_bsn.AutoSuggest.prototype.clearSuggestions = function ()
{
	if (document.getElementById(this.idAs))
		_bsn.DOM.removeElement(this.idAs);
	this.fld.onkeydown = null;
}







_bsn.AutoSuggest.prototype.setHighlightedValue = function ()
{
	if (this.iHighlighted)
	{
		this.fld.value = document.getElementById(this.idAs).childNodes[this.iHighlighted-1].firstChild.firstChild.nodeValue;
		this.killTimeout();
		this.clearSuggestions();
	}
}



_bsn.AutoSuggest.prototype.setValue = function (val)
{
	this.fld.value = val;
	this.resetTimeout();
};
$(document).ready(function() {
//  var options = {
//    script:Drupal.settings.basePath+'college/',
//    varname:'autocomplete',
//    minchars:'2',
//    timeout:'25000',
//    maxheight:'350',
//    delay:'1000'
//  };
//  var school_name_bar= new AutoSuggest('school_name_bar', options);

  $("#front-search .select_box").click(function(event){   
          event.stopPropagation();
          $(this).find(".option").toggle();
          $(this).parent().siblings().find(".option").hide();
  });
  $(document).click(function(event){
          var eo=$(event.target);
          if($("#front-search .select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
          $('#front-search .option').hide();									  
  });
  /*赋值给文本框*/
  $("#front-search .option a").click(function(){
          var value=$(this).text();
          $(this).parent().siblings("#front-search .select_txt").text(value);
          if (value == '学校') {
            Drupal.school_search_bar('college/autocomplete');
          }
          else {
            Drupal.school_search_bar('major/autocomplete');
          }
   })

  $('#zinch-school-quick-search-bar-1').submit(function() {
    if(Drupal.settings.current_url.substring(0,27) == 'undergradschool/name-search' || Drupal.settings.current_url.substring(0,28) == 'undergradschool/major-search') {
      //Means it's name search page , so we don't need to open a new window
      if ($("#front-search .select_txt").text() == '专业') {
        window.location.href = Drupal.settings.basePath+'undergradschool/major-search/'+$('#school_name_bar').val();
      }
      else {
        window.location.href = Drupal.settings.basePath+'undergradschool/name-search/'+$('#school_name_bar').val();
      } 
      return false;
    }else {
      //It's not name search page, we should open name search page in a new window
      if ($("#front-search .select_txt").text() == '专业') {
        window.open(Drupal.settings.basePath+'undergradschool/major-search/'+$('#school_name_bar').val());
      }
      else {
        window.open(Drupal.settings.basePath+'undergradschool/name-search/'+$('#school_name_bar').val());
      }
      return false;
    }
  });

  $('#zinch-high-school-quick-search-bar').submit(function() {
    window.open(Drupal.settings.basePath+'highschool/name-search/'+$('#highschool_name_bar').val());
    return false;
  });

  $('#zinch-high-school-quick-search-bar').css('display','none');
  $('#edit-school-type-select').change(function(){
      var school = $(this).children('option:selected').val();
      if(school == 'university'){
          $('#zinch-school-quick-search-bar-1').css('display','block');
          $('#zinch-high-school-quick-search-bar').css('display','none');
          Drupal.school_search_bar('college/autocomplete');
      }else if(school == 'highschool'){
        $('#zinch-school-quick-search-bar-1').css('display','none');
        $('#zinch-high-school-quick-search-bar').css('display','block');
        Drupal.school_search_bar('high-school/autocomplete');
      }
  });

  if ($("#front-search .select_txt").text() == '专业') {
    Drupal.school_search_bar('major/autocomplete');
  }
  else {
    Drupal.school_search_bar('college/autocomplete');
  }
});

Drupal.school_search_bar = function (uri) {
  var acdb = [];
  var uri = Drupal.settings.basePath + uri;

  if (!acdb[uri]) {
    acdb[uri] = new Drupal.ACDB(uri);
  }

  if($('#edit-school-type-select').children('option:selected').val() == 'university'){
      var input = $('#school_name_bar').attr('autocomplete', 'OFF')[0];
  }else if($('#edit-school-type-select').children('option:selected').val() == 'highschool'){
      var input = $('#highschool_name_bar').attr('autocomplete', 'OFF')[0];
  }

  if(typeof input !== 'undefined') {
    $(input).unbind();
    $(input).keydown(function(e){
          var school_name = $(this).val();
                  var column = this.id;
                  column = column.split('_')[2];
          var characterCode;
          if(e && e.which){
              e = e;
              characterCode = e.which ;
          } else {
              e = event;
              characterCode = e.keyCode;
          }
          if(characterCode == 13){
              if(!school_name){
  //				alert('school name is not empty!');
                  return false;
              }
  //			return false;
          }
      }).focus(function(){
          var school_name = $(this).val();
          if(school_name == '请输入学校名'){
              $(this).val('');
          }
      }).blur(function(){
          var school_name = $(this).val();
                  var column = this.id;
                  column = column.split('_')[2];
          if( school_name == ''){
              $(this).val('请输入学校名');
          }
      });
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
  }
};
/*
 * jQuery Form Plugin
 * version: 2.25 (08-APR-2009)
 * @requires jQuery v1.2.2 or later
 * @note This has been modified for ajax.module
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){$.B.1s=5(u){2(!4.G){R(\'1b: 2M 9 2N - 2O 2P 1t\');6 4}2(S u==\'5\')u={T:u};3 v=4.14(\'1c\')||1d.2Q.2R;v=(v.2S(/^([^#]+)/)||[])[1];v=v||\'\';u=$.1n({1e:v,H:4.14(\'1u\')||\'1Q\'},u||{});3 w={};4.L(\'C-1R-1S\',[4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-1R-1S L\');6 4}2(u.1v&&u.1v(4,u)===I){R(\'1b: 9 1f 1o 1v 1V\');6 4}3 a=4.1w(u.2T);2(u.J){u.O=u.J;K(3 n 1x u.J){2(u.J[n]2U 15){K(3 k 1x u.J[n])a.D({7:n,8:u.J[n][k]})}E a.D({7:n,8:u.J[n]})}}2(u.1y&&u.1y(a,4,u)===I){R(\'1b: 9 1f 1o 1y 1V\');6 4}4.L(\'C-9-1W\',[a,4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-9-1W L\');6 4}3 q=$.1z(a);2(u.H.2V()==\'1Q\'){u.1e+=(u.1e.2W(\'?\')>=0?\'&\':\'?\')+q;u.J=F}E u.J=q;3 x=4,V=[];2(u.2X)V.D(5(){x.1X()});2(u.2Y)V.D(5(){x.1Y()});2(!u.16&&u.17){3 y=u.T||5(){};V.D(5(a){$(u.17).2Z(a).P(y,1Z)})}E 2(u.T)V.D(u.T);u.T=5(a,b){K(3 i=0,M=V.G;i<M;i++)V[i].30(u,[a,b,x])};3 z=$(\'W:31\',4).18();3 A=I;K(3 j=0;j<z.G;j++)2(z[j])A=Q;2(u.20||A){2(u.21)$.32(u.21,1A);E 1A()}E $.33(u);4.L(\'C-9-34\',[4,u]);6 4;5 1A(){3 h=x[0];2($(\':W[7=9]\',h).G){35(\'36: 37 22 38 39 3a 3b "9".\');6}3 i=$.1n({},$.23,u);3 s=$.1n(Q,{},$.1n(Q,{},$.23),i);3 j=\'3c\'+(1B 3d().3e());3 k=$(\'<20 3f="\'+j+\'" 7="\'+j+\'" 24="25:26" />\');3 l=k[0];k.3g({3h:\'3i\',27:\'-28\',29:\'-28\'});3 m={1f:0,19:F,1g:F,3j:0,3k:\'n/a\',3l:5(){},2a:5(){},3m:5(){},3n:5(){4.1f=1;k.14(\'24\',\'25:26\')}};3 g=i.2b;2(g&&!$.1C++)$.1h.L("3o");2(g)$.1h.L("3p",[m,i]);2(s.2c&&s.2c(m,s)===I){s.2b&&$.1C--;6}2(m.1f)6;3 o=0;3 p=0;3 q=h.U;2(q){3 n=q.7;2(n&&!q.1i){u.O=u.O||{};u.O[n]=q.8;2(q.H=="X"){u.O[7+\'.x\']=h.Y;u.O[7+\'.y\']=h.Z}}}1j(5(){3 t=x.14(\'17\'),a=x.14(\'1c\');h.1k(\'17\',j);2(h.2d(\'1u\')!=\'2e\')h.1k(\'1u\',\'2e\');2(h.2d(\'1c\')!=i.1e)h.1k(\'1c\',i.1e);2(!u.3q){x.14({3r:\'2f/C-J\',3s:\'2f/C-J\'})}2(i.1D)1j(5(){p=Q;11()},i.1D);3 b=[];2g{2(u.O)K(3 n 1x u.O)b.D($(\'<W H="3t" 7="\'+n+\'" 8="\'+u.O[n]+\'" />\').2h(h)[0]);k.2h(\'1l\');l.2i?l.2i(\'2j\',11):l.3u(\'2k\',11,I);h.9()}3v{h.1k(\'1c\',a);t?h.1k(\'17\',t):x.3w(\'17\');$(b).2l()}},10);3 r=0;5 11(){2(o++)6;l.2m?l.2m(\'2j\',11):l.3x(\'2k\',11,I);3 c=Q;2g{2(p)3y\'1D\';3 d,N;N=l.2n?l.2n.2o:l.2p?l.2p:l.2o;2((N.1l==F||N.1l.2q==\'\')&&!r){r=1;o--;1j(11,2r);6}m.19=N.1l?N.1l.2q:F;m.1g=N.2s?N.2s:N;m.2a=5(a){3 b={\'3z-H\':i.16};6 b[a]};2(i.16==\'3A\'||i.16==\'3B\'){3 f=N.1E(\'1F\')[0];m.19=f?f.8:m.19}E 2(i.16==\'2t\'&&!m.1g&&m.19!=F){m.1g=2u(m.19)}d=$.3C(m,i.16)}3D(e){c=I;$.3E(i,m,\'2v\',e)}2(c){i.T(d,\'T\');2(g)$.1h.L("3F",[m,i])}2(g)$.1h.L("3G",[m,i]);2(g&&!--$.1C)$.1h.L("3H");2(i.2w)i.2w(m,c?\'T\':\'2v\');1j(5(){k.2l();m.1g=F},2r)};5 2u(s,a){2(1d.2x){a=1B 2x(\'3I.3J\');a.3K=\'I\';a.3L(s)}E a=(1B 3M()).3N(s,\'1G/2t\');6(a&&a.2y&&a.2y.1p!=\'3O\')?a:F}}};$.B.3P=5(c){6 4.2z().2A(\'9.C-1q\',5(){$(4).1s(c);6 I}).P(5(){$(":9,W:X",4).2A(\'2B.C-1q\',5(e){3 a=4.C;a.U=4;2(4.H==\'X\'){2(e.2C!=12){a.Y=e.2C;a.Z=e.3Q}E 2(S $.B.2D==\'5\'){3 b=$(4).2D();a.Y=e.2E-b.29;a.Z=e.2F-b.27}E{a.Y=e.2E-4.3R;a.Z=e.2F-4.3S}}1j(5(){a.U=a.Y=a.Z=F},10)})})};$.B.2z=5(){4.2G(\'9.C-1q\');6 4.P(5(){$(":9,W:X",4).2G(\'2B.C-1q\')})};$.B.1w=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1E(\'*\'):c.22;2(!d)6 a;K(3 i=0,M=d.G;i<M;i++){3 e=d[i];3 n=e.7;2(!n)1H;2(b&&c.U&&e.H=="X"){2(!e.1i&&c.U==e)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z});1H}3 v=$.18(e,Q);2(v&&v.1r==15){K(3 j=0,2H=v.G;j<2H;j++)a.D({7:n,8:v[j]})}E 2(v!==F&&S v!=\'12\')a.D({7:n,8:v})}2(!b&&c.U){3 f=c.1E("W");K(3 i=0,M=f.G;i<M;i++){3 g=f[i];3 n=g.7;2(n&&!g.1i&&g.H=="X"&&c.U==g)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z})}}6 a};$.B.3T=5(a){6 $.1z(4.1w(a))};$.B.3U=5(b){3 a=[];4.P(5(){3 n=4.7;2(!n)6;3 v=$.18(4,b);2(v&&v.1r==15){K(3 i=0,M=v.G;i<M;i++)a.D({7:n,8:v[i]})}E 2(v!==F&&S v!=\'12\')a.D({7:4.7,8:v})});6 $.1z(a)};$.B.18=5(a){K(3 b=[],i=0,M=4.G;i<M;i++){3 c=4[i];3 v=$.18(c,a);2(v===F||S v==\'12\'||(v.1r==15&&!v.G))1H;v.1r==15?$.3V(b,v):b.D(v)}6 b};$.18=5(b,c){3 n=b.7,t=b.H,1a=b.1p.1I();2(S c==\'12\')c=Q;2(c&&(!n||b.1i||t==\'1m\'||t==\'3W\'||(t==\'1J\'||t==\'1K\')&&!b.1L||(t==\'9\'||t==\'X\')&&b.C&&b.C.U!=b||1a==\'13\'&&b.1M==-1))6 F;2(1a==\'13\'){3 d=b.1M;2(d<0)6 F;3 a=[],1N=b.3X;3 e=(t==\'13-2I\');3 f=(e?d+1:1N.G);K(3 i=(e?d:0);i<f;i++){3 g=1N[i];2(g.1t){3 v=g.8;2(!v)v=(g.1O&&g.1O[\'8\']&&!(g.1O[\'8\'].3Y))?g.1G:g.8;2(e)6 v;a.D(v)}}6 a}6 b.8};$.B.1Y=5(){6 4.P(5(){$(\'W,13,1F\',4).2J()})};$.B.2J=$.B.3Z=5(){6 4.P(5(){3 t=4.H,1a=4.1p.1I();2(t==\'1G\'||t==\'40\'||1a==\'1F\')4.8=\'\';E 2(t==\'1J\'||t==\'1K\')4.1L=I;E 2(1a==\'13\')4.1M=-1})};$.B.1X=5(){6 4.P(5(){2(S 4.1m==\'5\'||(S 4.1m==\'41\'&&!4.1m.42))4.1m()})};$.B.43=5(b){2(b==12)b=Q;6 4.P(5(){4.1i=!b})};$.B.2K=5(b){2(b==12)b=Q;6 4.P(5(){3 t=4.H;2(t==\'1J\'||t==\'1K\')4.1L=b;E 2(4.1p.1I()==\'2L\'){3 a=$(4).44(\'13\');2(b&&a[0]&&a[0].H==\'13-2I\'){a.45(\'2L\').2K(I)}4.1t=b}})};5 R(){2($.B.1s.46&&1d.1P&&1d.1P.R)1d.1P.R(\'[47.C] \'+15.48.49.4a(1Z,\'\'))}})(4b);',62,260,'||if|var|this|function|return|name|value|submit||||||||||||||||||||||||||||fn|form|push|else|null|length|type|false|data|for|trigger|max|doc|extraData|each|true|log|typeof|success|clk|callbacks|input|image|clk_x|clk_y||cb|undefined|select|attr|Array|dataType|target|a_fieldValue|responseText|tag|ajaxSubmit|action|window|url|aborted|responseXML|event|disabled|setTimeout|setAttribute|body|reset|extend|via|tagName|plugin|constructor|a_ajaxSubmit|selected|method|beforeSerialize|a_formToArray|in|beforeSubmit|param|fileUpload|new|active|timeout|getElementsByTagName|textarea|text|continue|toLowerCase|checkbox|radio|checked|selectedIndex|ops|attributes|console|GET|pre|serialize|veto|vetoed|callback|validate|a_resetForm|a_clearForm|arguments|iframe|closeKeepAlive|elements|ajaxSettings|src|about|blank|top|1000px|left|getResponseHeader|global|beforeSend|getAttribute|POST|multipart|try|appendTo|attachEvent|onload|load|remove|detachEvent|contentWindow|document|contentDocument|innerHTML|100|XMLDocument|xml|toXml|error|complete|ActiveXObject|documentElement|a_ajaxFormUnbind|bind|click|offsetX|offset|pageX|pageY|unbind|jmax|one|a_clearFields|a_selected|option|skipping|process|no|element|location|href|match|semantic|instanceof|toUpperCase|indexOf|resetForm|clearForm|html|apply|file|get|ajax|notify|alert|Error|Form|must|not|be|named|jqFormIO|Date|getTime|id|css|position|absolute|status|statusText|getAllResponseHeaders|setRequestHeader|abort|ajaxStart|ajaxSend|skipEncodingOverride|encoding|enctype|hidden|addEventListener|finally|removeAttr|removeEventListener|throw|content|json|script|httpData|catch|handleError|ajaxSuccess|ajaxComplete|ajaxStop|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parsererror|a_ajaxForm|offsetY|offsetLeft|offsetTop|a_formSerialize|a_fieldSerialize|merge|button|options|specified|a_clearInputs|password|object|nodeType|a_enable|parent|find|debug|jquery|prototype|join|call|jQuery'.split('|'),0,{}));
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 * 
 *
 */

Drupal.Ajax = new Object;

Drupal.Ajax.plugins = {};

Drupal.Ajax.firstRun = false;

/**
 * Init function.
 * This is being executed by Drupal behaviours.
 * See bottom of script.
 * 
 * @param {HTMLElement} context
 * @return {Bool}
 */
Drupal.Ajax.init = function(context) {
  var f, s;
  if (f = $('.ajax-form', context)) {
    if (!Drupal.Ajax.firstRun) {
      Drupal.Ajax.invoke('init');
      Drupal.Ajax.firstRun = true;
    }
    s = $('input[type="submit"]', f);
    s.click(function(){
      this.form.ajax_activator = $(this);
      return true;
    });
    f.each(function(){
      this.ajax_activator = null;
      $(this).submit(function(){
        if (this.ajax_activator === null) {
          this.ajax_activator = $('#edit-submit', this);
        }
        if (this.ajax_activator.hasClass('ajax-trigger')) {
          Drupal.Ajax.go($(this), this.ajax_activator);
          return false;
        }
        else {
          return true;
        }
      });
      return true;
    });
  }
  return true;
};

/**
 * Invokes plugins
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 */
Drupal.Ajax.invoke = function(hook, args) {
  var plugin, r, ret;
  ret = true;
  for (plugin in Drupal.Ajax.plugins) {
    r = Drupal.Ajax.plugins[plugin](hook, args);
    if (r === false) {
      ret = false;
    }
  }
  return ret;
};

/**
 * Handles submission
 * 
 * @param {Object} submitter_
 * @return {Bool}
 */
Drupal.Ajax.go = function(formObj, submitter) {
  var submitterVal, submitterName, extraData;
  Drupal.Ajax.invoke('submit', {submitter:submitter});
  submitterVal = submitter.val();
  submitterName = submitter.attr('name');
  submitter.val(Drupal.t('Loading...'));
  extraData = {};
  extraData[submitterName] = submitterVal;
  extraData['drupal_ajax'] = '1';
  formObj.a_ajaxSubmit({
    extraData : extraData,
    beforeSubmit : function(data) {
      data[data.length] = {
        name : submitterName,
        value : submitterVal
      };
      data[data.length] = {
        name : 'drupal_ajax',
        value : '1'
      };
      return true;
    },
    dataType : 'json',
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      //window.alert(Drupal.t('ajax.module: An unknown error has occurred.'));
      if (window.console) {
        console.log('error', arguments);
      }
      return true;
    },
    success: function(data){
      submitter.val(submitterVal);
      Drupal.Ajax.response(submitter, formObj, data);
      return true;
    }
  });
  return false;
};

/**
 * Handles scroller
 * 
 * @param {Object} submitter
 * @return {Bool}
 */
Drupal.Ajax.scroller = function(submitter) {
  var scroll_weight, box, found, timer;
  scroll_weight = 100;
  timer = window.setInterval(function() {
    box = submitter;
    found = false;
    // Watch for thickbox
    while (box.parentNode !== null &&
        Drupal.Ajax.invoke('scrollFind', {container:box})) {
      box = box.parentNode;
      // Document
      if (box === document) {
        if (box.documentElement.scrollTop &&
            box.documentElement.scrollTop > 0) {
          box.documentElement.scrollTop -= scroll_weight;
          found = true;
        }
      }
      // Body
      else if (box === document.body) {
        if (box.scrollTop &&
            box.scrollTop > 0) {
          box.scrollTop -= scroll_weight;
          found = true;
        }
      }
      // Window
      else if (box === window) {
        if ((window.pageYOffset && window.pageYOffset > 0) ||
            (window.scrollY && window.scrollY > 0)) {
          window.scrollBy(0, -scroll_weight);
          found = true;
        }
      }
      // Any other element
      else {
        if (box.scrollTop &&
            box.scrollTop > 0) {
          box.scrollTop -= scroll_weight;
          found = true;
        }
      }
    }
    // Check if completed
    if (!found) {
      window.clearInterval(timer);
    }
    return true;
  }, 100);
  return true;
};

/**
 * Handles messaging
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} data
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.message = function(formObj, submitter, data, options) {
  var args;
  args = {
    formObj : formObj,
    submitter : submitter,
    data : data,
    options : options
  };
  if (Drupal.Ajax.invoke('message', args)) {
    Drupal.Ajax.writeMessage(args.formObj, args.submitter, args.options);
  }
  return true;
};

/**
 * Writes message
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.writeMessage = function(formObj, submitter, options) {
  var i, _i, thisItem, log, errBox, h;
  if (options.action === 'notify') {
    // Cleanups
    $('.messages, .ajax-preview', formObj).remove();
    $('input, textarea').removeClass('error status warning required');
    // Preview
    if (options.type === 'preview') {
      log = $('<div>').addClass('ajax-preview');
      log.html(options.messages);
      formObj.prepend(log);
    }
    // Status, Error, Message
    else {
      log = $('<ul>');
      errBox = $(".messages." + options.type, formObj[0])
      for (i = 0, _i = options.messages.length; i < _i; i++) {
        thisItem = $('#' + options.messages[i].id, formObj[0])
        thisItem.addClass(options.type);
        if (options.messages[i].required) {
          thisItem.addClass('required');
        }
        log.append('<li>' + options.messages[i].value + '</li>');
      }
      if (errBox.length === 0) {
        errBox = $("<div class='messages " + options.type + "'>");
        formObj.prepend(errBox);
      }
      errBox.html(log);
    }
  }
  else if (options.action === 'clear') {
    $('.messages, .ajax-preview', formObj).remove();
  }
  Drupal.Ajax.scroller(submitter[0]);
  return true;
};

/**
 * Updates message containers
 * 
 * @param {Object} updaters
 * @return {Bool}
 */
Drupal.Ajax.updater = function(updaters) {
  var i, _i, elm;
  for (i = 0, _i = updaters.length; i < _i; i++) {
    elm = $(updaters[i].selector);
    // HTML:IN
    if (updaters[i].type === 'html_in') {
      elm.html(updaters[i].value);
    }
    // HTML:OUT
    else if (updaters[i].type === 'html_out') {
      elm.replaceWith(updaters[i].value);
    }
    // FIELD
    else if (updaters[i].type === 'field') {
      elm.val(updaters[i].value);
    }
    // REMOVE
    else if(updaters[i].type === 'remove') {
      elm.remove();
    }
  }
  return true;
};

/**
 * Handles data response
 * 
 * @param {Object} submitter
 * @param {Object} formObj
 * @param {Object} data
 * @return {Bool}
 */
Drupal.Ajax.response = function(submitter, formObj, data){
  var newSubmitter;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  /**
   * Failure
   */
  if (data.status === false) {
    Drupal.Ajax.updater(data.updaters);
    Drupal.Ajax.message(formObj, submitter, data, {
      action : 'notify',
      messages : data.messages_error,
      type : 'error'
    });
  }
  /**
   * Success
   */
  else {
    // Display preview
    if (data.preview !== null) {
      Drupal.Ajax.updater(data.updaters);
      Drupal.Ajax.message(formObj, submitter, data, {
        action : 'notify',
        messages : decodeURIComponent(data.preview),
        type : 'preview'
      });
    }
    // If no redirect, then simply show messages
    else if (data.redirect === null) {
      Drupal.Ajax.updater(data.updaters);
      if (data.messages_status.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_status,
          type : 'status'
        });
      }
      if (data.messages_warning.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_warning,
          type : 'warning'
        });
      }
      if (data.messages_status.length === 0 &&
          data.messages_warning.length === 0) {
        Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
      }
    }
    // Redirect
    else {
      if (Drupal.Ajax.invoke('complete', data)) {
        Drupal.Ajax.redirect( data.redirect );
      }
      else {
        Drupal.Ajax.updater(data.updaters);
        if (data.messages_status.length === 0 &&
            data.messages_warning.length === 0) {
          Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
        }
        else {
          Drupal.Ajax.message(formObj, submitter, data, {
            action : 'notify',
            messages : data.messages_status,
            type : 'status'
          });
        }
      }
    }
  }
  return true;
};


/**
 * Redirects to appropriate page
 * 
 * @todo
 *   Some of this functionality should possibly hapen on
 *   the server instead of client.
 * @param {String} url
 */
Drupal.Ajax.redirect = function(url) {
  window.location.href = url;
};

Drupal.behaviors.Ajax = Drupal.Ajax.init;


;
$(document).ready(function(){
    $('.lazy-img').attr('src', '/sites/all/themes/zinchus/images/imgloading.gif');
});

(function() {
    function async_load() {
        $('.lazy-img').each(function(i){
            $(this).attr('src', $(this).attr('lazy-src'));
        });
        if(Drupal.settings.leyu != 'undefined') {
            $('body').append('<script>'+Drupal.settings.leyu+'</script>');
        }
    }
    if (window.attachEvent)
        window.attachEvent('onload', async_load);
    else
        window.addEventListener('load', async_load, false);
})();
;
function openrr(url){
	if(url == null || url == ''){
		url = '';
	}
  	window.open('?q=renren_pop/'+url,'new','height='+544+',,innerHeight='+544+',width='+800+',innerWidth='+800+',top='+100+',left='+300+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}
function Synchronous(num){
	if(num == 1){
		$('.agreeorno').empty();
		$('.agreeorno').append('<img src = "/sites/all/themes/zinchus/images/loader.gif" width="80px;">');
		$.post('?q=rr_agree', '', function(data){
			Obdata = Drupal.parseJson(data);
			var url = Obdata.output.url;
			var is_new = Obdata.output.is_new;
			if(url != ''){
				if(is_new != 0){
					window.close();
					window.opener.location.href = url;
				}else{
					window.location.href = url;
				}
			}else{
				window.close();
				window.opener.location.href = window.opener.location.href;
			}
		});
	}else if(num == 2){
		$.post('?q=rr_disagree', '', function(data){
			
		});
		//刷新父页面
		//window.opener.location.href = window.opener.location.href;
		window.close();
	}
}

function id_js_second_submit(){
	$('body').attr('onbeforeunload','');
	$('#loading_submit').empty();
	$('#loading_submit').append(Drupal.t('Loading...'));
	$('#id_js_second_submit').submit();
}

function zinch_browse_type(){
	var Sys = {};
	var btype = '';
    var ua = navigator.userAgent.toLowerCase();
    if (window.ActiveXObject){
    	Sys.ie = ua.match(/msie ([\d.]+)/)[1];
    }
  if(Sys.ie) {btype = Sys.ie;}
  return btype;
}

function id_js_user_bind_submit(){
	$('body').attr('onbeforeunload','');
	$('#loading_submit').empty();
	$('#loading_submit').append(Drupal.t('Loading...'));
	$('#id_js_userbind_submit').submit();
}
function unbind_login(){
	$('body').attr('onbeforeunload','');
	window.location.href = Drupal.settings.basePath+'?q=user_unbind_login';
};
function toQzoneLogin(url){
	if(url == null || url == ''){
		url = '';
	}
  	window.open('?q=qq_pop/'+url,'TencentLogin',"width=800,height=544,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1,top=100,left=300");
};
function toWeiboLogin(url){
	if(url == null || url == ''){
		url = '';
	}
  	window.open('?q=weibo_pop/'+url,'SinaLogin',"width=800,height=544,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1,top=100,left=300");
};
function toKaixinLogin(url){
	if(url == null || url == ''){
		url = '';
	}
  	window.open('?q=kaixin_pop/'+url,'KaixinLogin',"width=800,height=544,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1,top=100,left=300");
};
/*!
* jQuery Form Plugin
* version: 2.43 (12-MAR-2010)
* @requires jQuery v1.3.2 or later
*
* Examples and documentation at: http://malsup.com/jquery/form/
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function(b){function o(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(a);else window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function d(){function r(){var p=h.attr("target"),n=h.attr("action");j.setAttribute("target",z);j.getAttribute("method")!="POST"&&j.setAttribute("method","POST");j.getAttribute("action")!=g.url&&j.setAttribute("action",g.url);g.skipEncodingOverride||
h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});g.timeout&&setTimeout(function(){C=true;s()},g.timeout);var m=[];try{if(g.extraData)for(var u in g.extraData)m.push(b('<input type="hidden" name="'+u+'" value="'+g.extraData[u]+'" />').appendTo(j)[0]);t.appendTo("body");t.data("form-plugin-onload",s);j.submit()}finally{j.setAttribute("action",n);p?j.setAttribute("target",p):h.removeAttr("target");b(m).remove()}}function s(){if(!D){var p=true;try{if(C)throw"timeout";var n,m;m=v.contentWindow?
v.contentWindow.document:v.contentDocument?v.contentDocument:v.document;var u=g.dataType=="xml"||m.XMLDocument||b.isXMLDoc(m);o("isXml="+u);if(!u&&(m.body==null||m.body.innerHTML=="")){if(--G){o("requeing onLoad callback, DOM not available");setTimeout(s,250);return}o("Could not access iframe DOM after 100 tries.");return}o("response detected");D=true;i.responseText=m.body?m.body.innerHTML:null;i.responseXML=m.XMLDocument?m.XMLDocument:m;i.getResponseHeader=function(H){return{"content-type":g.dataType}[H]};
if(g.dataType=="json"||g.dataType=="script"){var E=m.getElementsByTagName("textarea")[0];if(E)i.responseText=E.value;else{var F=m.getElementsByTagName("pre")[0];if(F)i.responseText=F.innerHTML}}else if(g.dataType=="xml"&&!i.responseXML&&i.responseText!=null)i.responseXML=A(i.responseText);n=b.httpData(i,g.dataType)}catch(B){o("error caught:",B);p=false;i.error=B;b.handleError(g,i,"error",B)}if(p){g.success(n,"success");w&&b.event.trigger("ajaxSuccess",[i,g])}w&&b.event.trigger("ajaxComplete",[i,g]);
w&&!--b.active&&b.event.trigger("ajaxStop");if(g.complete)g.complete(i,p?"success":"error");setTimeout(function(){t.removeData("form-plugin-onload");t.remove();i.responseXML=null},100)}}function A(p,n){if(window.ActiveXObject){n=new ActiveXObject("Microsoft.XMLDOM");n.async="false";n.loadXML(p)}else n=(new DOMParser).parseFromString(p,"text/xml");return n&&n.documentElement&&n.documentElement.tagName!="parsererror"?n:null}var j=h[0];if(b(":input[name=submit]",j).length)alert('Error: Form elements must not be named "submit".');
else{var g=b.extend({},b.ajaxSettings,a),q=b.extend(true,{},b.extend(true,{},b.ajaxSettings),g),z="jqFormIO"+(new Date).getTime(),t=b('<iframe id="'+z+'" name="'+z+'" src="'+g.iframeSrc+'" onload="(jQuery(this).data(\'form-plugin-onload\'))()" />'),v=t[0];t.css({position:"absolute",top:"-1000px",left:"-1000px"});var i={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=
1;t.attr("src",g.iframeSrc)}},w=g.global;w&&!b.active++&&b.event.trigger("ajaxStart");w&&b.event.trigger("ajaxSend",[i,g]);if(q.beforeSend&&q.beforeSend(i,q)===false)q.global&&b.active--;else if(!i.aborted){var D=false,C=0;if(q=j.clk){var y=q.name;if(y&&!q.disabled){g.extraData=g.extraData||{};g.extraData[y]=q.value;if(q.type=="image"){g.extraData[y+".x"]=j.clk_x;g.extraData[y+".y"]=j.clk_y}}}g.forceSync?r():setTimeout(r,10);var G=100}}}if(!this.length){o("ajaxSubmit: skipping submit process - no element selected");
return this}if(typeof a=="function")a={success:a};var e=b.trim(this.attr("action"));if(e)e=(e.match(/^([^#]+)/)||[])[1];e=e||window.location.href||"";a=b.extend({url:e,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a||{});e={};this.trigger("form-pre-serialize",[this,a,e]);if(e.veto){o("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){o("ajaxSubmit: submit aborted via beforeSerialize callback");
return this}var f=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(var c in a.data)if(a.data[c]instanceof Array)for(var l in a.data[c])f.push({name:c,value:a.data[c][l]});else f.push({name:c,value:a.data[c]})}if(a.beforeSubmit&&a.beforeSubmit(f,this,a)===false){o("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[f,this,a,e]);if(e.veto){o("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}c=b.param(f);if(a.type.toUpperCase()==
"GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+c;a.data=null}else a.data=c;var h=this,k=[];a.resetForm&&k.push(function(){h.resetForm()});a.clearForm&&k.push(function(){h.clearForm()});if(!a.dataType&&a.target){var x=a.success||function(){};k.push(function(r){var s=a.replaceTarget?"replaceWith":"html";b(a.target)[s](r).each(x,arguments)})}else a.success&&k.push(a.success);a.success=function(r,s,A){for(var j=0,g=k.length;j<g;j++)k[j].apply(a,[r,s,A||h,h])};c=b("input:file",this).fieldValue();l=false;
for(e=0;e<c.length;e++)if(c[e])l=true;if(c.length&&a.iframe!==false||a.iframe||l||0)a.closeKeepAlive?b.get(a.closeKeepAlive,d):d();else b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){d.preventDefault();b(this).ajaxSubmit(a)}).bind("click.form-plugin",function(d){var e=d.target,f=b(e);if(!f.is(":submit,input:image")){e=f.closest(":submit");if(e.length==0)return;e=e[0]}var c=this;c.clk=e;
if(e.type=="image")if(d.offsetX!=undefined){c.clk_x=d.offsetX;c.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){f=f.offset();c.clk_x=d.pageX-f.left;c.clk_y=d.pageY-f.top}else{c.clk_x=d.pageX-e.offsetLeft;c.clk_y=d.pageY-e.offsetTop}setTimeout(function(){c.clk=c.clk_x=c.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var d=[];if(this.length==0)return d;var e=this[0],f=a?e.getElementsByTagName("*"):e.elements;
if(!f)return d;for(var c=0,l=f.length;c<l;c++){var h=f[c],k=h.name;if(k)if(a&&e.clk&&h.type=="image"){if(!h.disabled&&e.clk==h){d.push({name:k,value:b(h).val()});d.push({name:k+".x",value:e.clk_x},{name:k+".y",value:e.clk_y})}}else if((h=b.fieldValue(h,true))&&h.constructor==Array)for(var x=0,r=h.length;x<r;x++)d.push({name:k,value:h[x]});else h!==null&&typeof h!="undefined"&&d.push({name:k,value:h})}if(!a&&e.clk){a=b(e.clk);f=a[0];if((k=f.name)&&!f.disabled&&f.type=="image"){d.push({name:k,value:a.val()});
d.push({name:k+".x",value:e.clk_x},{name:k+".y",value:e.clk_y})}}return d};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var d=[];this.each(function(){var e=this.name;if(e){var f=b.fieldValue(this,a);if(f&&f.constructor==Array)for(var c=0,l=f.length;c<l;c++)d.push({name:e,value:f[c]});else f!==null&&typeof f!="undefined"&&d.push({name:this.name,value:f})}});return b.param(d)};b.fn.fieldValue=function(a){for(var d=[],e=0,f=this.length;e<f;e++){var c=
b.fieldValue(this[e],a);c===null||typeof c=="undefined"||c.constructor==Array&&!c.length||(c.constructor==Array?b.merge(d,c):d.push(c))}return d};b.fieldValue=function(a,d){var e=a.name,f=a.type,c=a.tagName.toLowerCase();if(typeof d=="undefined")d=true;if(d&&(!e||a.disabled||f=="reset"||f=="button"||(f=="checkbox"||f=="radio")&&!a.checked||(f=="submit"||f=="image")&&a.form&&a.form.clk!=a||c=="select"&&a.selectedIndex==-1))return null;if(c=="select"){c=a.selectedIndex;if(c<0)return null;d=[];a=a.options;
e=(f=f=="select-one")?c+1:a.length;for(c=f?c:0;c<e;c++){var l=a[c];if(l.selected){var h=l.value;h||(h=l.attributes&&l.attributes.value&&!l.attributes.value.specified?l.text:l.value);if(f)return h;d.push(h)}}return d}return a.value};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,d=this.tagName.toLowerCase();if(a=="text"||a=="password"||d=="textarea")this.value=
"";else if(a=="checkbox"||a=="radio")this.checked=false;else if(d=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a==undefined)a=true;return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){if(a==undefined)a=true;return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio")this.checked=a;else if(this.tagName.toLowerCase()==
"option"){d=b(this).parent("select");a&&d[0]&&d[0].type=="select-one"&&d.find("option").selected(false);this.selected=a}})}})(jQuery);
;
if (typeof String.prototype.toString == 'undefined') {
  //Fix IE6 BUG
  String.prototype.toString = function() {
    return this.valueOf();
  }
}

/**
 * Fixed console bug
 */
if (typeof window.console == 'undefined' || !window.console) {
  window.console = {
    log : function(txt) {
      window.status = txt.toString();
    }
  }
}

(function($){
	/**
	 * Attach Jquery Dropdown functionality to specifically chosen <select>s, on IE, since the
	 * browser doesn't render them properly
	 */
	Drupal.behaviors.themeAttachJQDropDown = function(context) {
		if ($.browser.msie) {
			// add here a list of CSS selectors to choose which CSS selectors will go through
			// the conversion into jQuery dropdowns
			selects = [
				'#webform-component-campus #edit-submitted-campus-hierarchical-select-selects-0',
				'#webform-component-campus #edit-submitted-campus-hierarchical-select-selects-1',
				'.node-type-vortex #edit-submitted-state',
				'#edit-submitted-program-of-interest'
			];

			$.each(selects, function(key, value) {
				$(value).each(function() {
					if (!$(this).hasClass('jquery-selectbox-processed')) {
						$(this)
							.addClass('jquery-selectbox-processed')
							.sb({
								fixedWidth: true
							});
					}
				});
			});
		}
	}

	/**
	 * This a simple jquery plugin.
	 * Features:
	 * 1.When loading a textfield or textarea form, you can specify a default value text for it, like "Write a comment".
	 * 2.When focus on it, will disappear default value text.
	 * 3.when blur, if user didn't make any change, display the old value text, if changed, do nothing.
	 *
	 * Using example:
	 * $("textarea").focus_disappear({
	 *   default_text: Drupal.t('Write a comment')
	 * });
	 *
	 * Author information:
	 * Steven, joinued@gmail.com
	 */
	$.fn.focus_disappear = function(options){
		var defaults = {default_text: ''};
		var options = $.extend(defaults, options);
		var default_value = options.default_text;

		if ($(this).val() === '') {
			$(this).val(default_value);
		}

		$(this).focus(function() {
			if($(this).val() == default_value) {
				$(this).val('');
			}
		});

		$(this).blur(function () {
			if ($(this).val() === '') {
				$(this).val(default_value);
			}
		});
	}

	Drupal.behaviors.globalLoad = function(context) {
		// For profile basic - 'First Name' && 'Last Name' && 'City' && 'Province', when they're empty, display default_text.
		$("#edit-field-first-name-0-value").focus_disappear({default_text: Drupal.t('First Name')});
		$("#edit-field-last-name-0-value").focus_disappear({default_text: Drupal.t('Last Name')});
	}

	Drupal.behaviors.disableDoubleSubmit = function(context) {
		$('#comment-form').submit(function() {
			$('#comment-form .form-submit').attr('disabled', 'disabled');
		});
	}

})(jQuery);


/**
 * @param product means the unique product code
 *   we are have many different shout-out, so we are using it as SKU
 *   this name should be same as Lead Component value
 *   
 * @param name label of name   
 *   we are using email as the shoutout name
 * @param category the category type
 */
function zinch_track_shoutout(product, name, category) {
  if (typeof _gaq == 'undefined') {
    _gaq = [];
  }
  
  var a    = new Date();
  var txID = '' + a.getFullYear() + (a.getMonth() + 1) + a.getDate() + '-' + a.getHours() + a.getMinutes() + a.getSeconds() + '-' + a.getMilliseconds();
  _gaq.push(['_addTrans',
      txID,           // order ID - required
      'SHOUT-OUT',     // affiliation or store name
      '1',    // total - required
      '1',    // tax
      '',     // shipping
      '',     // city
      '',     // state or province
      ''      // country
   ]);
   _gaq.push(['_addItem',
     txID,                       // order ID - necessary to associate item with transaction
     product  || 'Normal',        // SKU/code - required
     name     || 'Unknow',           // product name
     category || 'Unknow',       // category or variation
     '1',                        // unit price - required
     '1'                         // quantity - required
   ]);
  _gaq.push(['_trackTrans']);
}

/**
 * Track a page or virtual page
 */
function zinch_track_page(path) {
  if (typeof _gaq == 'undefined') {
    _gaq = [];
  }
  
  _gaq.push(['_trackPageview', path]);
}

function zinch_track_modal_shoutout(school) {
  var product = Drupal.settings.shoutout_component;
  var name    = Drupal.settings.user_name;
  zinch_track_shoutout(product, name, school);
}

/**
 * user uid|name
 * name event name
 * category event category
 */
function zinch_track_event(user, name, category) {
  if (typeof _gaq == 'undefined') {
    _gaq = [];
  }
  
  if (typeof category == 'undefined' || !category) {
    category = 'Rebate';
  }
  
  _gaq.push(['_trackEvent', category.toString(), name.toString(), user.toString()]);
}

/**
 * Ajax login
 */
$(document).ready(function() {
  zinch_ajax_login_ceil();
  
  //update topbar panel
  update_topbar_login_panel();
  
  
  //update summary_block
  var tm = window.setTimeout(function (){
    window.clearTimeout(tm);
    if(zinch_user_login_or_not()) {
      $.get('/ajax/user-summary-block',function(res) {
        $('#study-tool').html(res);
        //bind event
        zinch_profile_menu_ready();
      });
    }
  }, 150);
  //end update user_summary_block
  
  
  //Ajax loading 
  if ( window.boosted 
    && zinch_user_login_or_not() 
    && !$('body').hasClass('modalframe-body') /*Modal frame*/) {
    ajax_update_user_status();
  }
  
  //Zinch Analytics
  za_track();
});

Drupal.behaviors.gaFlag = function() {
  //Bind some event
  $('span.flag-wrapper').click(function(){
    //zinch_track_event($.cookie('DRUPAL_UID'), 'CLICK', 'Flag');
    zinch_track_school_flag();
  });
  $('#zinch-lead-modal-submit').click(function(){
    zinch_track_event($.cookie('DRUPAL_UID'), 'CLICK', 'LeadModal');
  });
  
//  if ($("#cellphone-edit-form-wrapper").length) {
//    $edit_cellphone_form = $("#cellphone-edit-form-wrapper").dialog({
//      autoOpen: true,
//      modal: true, 
//      dialogClass: 'cellphone-edit-form-popup'
//    });
//
//    $("#cellphone-edit-form-wrapper a.continue").click(function(){
//      $edit_cellphone_form.dialog("close");
//    });
//  };
}

/**
 * Ajax login ceil
 */
function zinch_ajax_login_ceil(title){
  title = title || '';
  
  var loginStatus = zinch_user_login_or_not();
  if(!loginStatus){
    $login = $("#user_ajax_login_form").dialog({autoOpen: false, /*show: "fade",*/ modal: true, dialogClass: 'zinch-login-popup'});
      $(".main-login a.popups-form-reload, #main-login a.popups-form-reload, #zinch-login-menu .login, .not-logged-in .school-save-box .school-save-text, .not-logged-in a.flag-action").click(function() {
        $('#zinch-registration-ajax-login-form .form-destination').remove();
        $login.dialog('option', 'title', title);
        $login.dialog("open");
        return false;
    });
  }
}

function zinch_ajax_login_popup(title) {
  title = title || ''; 
  
  $('#zinch-registration-ajax-login-form .form-destination').remove();
  $login = $("#user_ajax_login_form").dialog({autoOpen: false, /*show: "fade",*/ modal: true, dialogClass: 'zinch-login-popup'});
  $login.dialog('option', 'title', title);
  $login.dialog("open");
  return $login;
}

/**
 * Check user login or not by Javascript
 */
function zinch_user_login_or_not(){
  return zinch_user_is_login();
};

function zinch_user_is_login() {
  var uid = $.cookie('DRUPAL_UID');
  return uid > 0;
}

/**
 * Track 感兴趣
 */
function zinch_track_school_flag() {
  zinch_track_event($.cookie('DRUPAL_UID'), 'CLICK', 'Flag');
}

/**
 * Entrance of user status update
 */
function ajax_update_user_status() {
  
  $(document).trigger('pre_update_status');
  //Remove class
  $('body').removeClass('not-logged-in');
  
  var extra_params = '';
  if (typeof Drupal.settings.school_nid != 'undefined') {
    extra_params = '?nid=' + Drupal.settings.school_nid;
  }
  //Add a variable to params by Alex
  if (typeof Drupal.settings.currentUrl != 'undefined') {
    if (extra_params == '') {
      extra_params = '?current_url=' + Drupal.settings.currentUrl;
    } else {
      extra_params = extra_params + '&current_url=' + Drupal.settings.currentUrl;
    }
  }
  $.getJSON('/user_status.php' + extra_params, function(data) {
    //set global variable
    Drupal.settings.user_status = data;
    
    if (data.hooks.join) {
      $.each(data.hooks, function(i, v) {
        
        if (typeof v.__callback == 'function') {
          try {
            v.__callback.apply(i);
          } catch(e) {
            alert(e);
          }
        }
        else if (typeof v.__callback == 'string') {
          var fn = window[v.__callback];
          if (typeof fn == 'function') {
           try {
             fn.apply(v);
           } catch(e){
             alert(e);
           }
          }
        }
      });
    };
    
    $(document).trigger('post_update_status', data);
   }
 );
}

$(document).bind('post_update_status', function(){
  if(typeof(Drupal.settings.user_status) != 'undefined'){
    var userLoginType = Drupal.settings.user_status.user_login_type;
    var timestamp=Math.round(new Date().getTime()/1000) ;
    if(userLoginType == 'renren'){
      document.write('<script type="text/javascript" src="http://static.connect.renren.com/js/v1.0/FeatureLoader.jsp"></script>');
      document.write('<script type="text/javascript" src="/sites/all/modules/custom/zinch_renren/js/zinch_renren.js?q='+timestamp+'"></script>');
      XN_RequireFeatures(["Api"], function() {
        XN.Main.init("5b944d8fb57b48ffac24b29479ebe7b8", "/xd_receiver");
      });
    }
  }
});


$(document).bind('pre_update_status', function(){
  $('.region-user-sidebar')
    .prepend('<div id="sidebar-profile-placeholder" style="height:120px"></div>')
    .prepend('<div id="reg-loading" class="ajax-loading-panel" style="position:absolute;z-index:100"></div>');
    
  $('#firstadd').hide();
});

function update_topbar_login_panel() {
  if (zinch_user_is_login()) {
    //forgive me the disorder of here, because there are many tpl files which need to be changed
    $("#login-menu-anonymous").show();    
    $("#login-menu-login").hide();
    $('#other-login').hide();
  }
  else {
    $("#login-menu-login").show();
    $("#login-menu-anonymous").hide();  
    $('#other-login').show();
  }
}

function _ajax_update_user_block() {
  $('#reg-loading').fadeOut('slow').after(this.html);
  $('#sidebar-profile-placeholder').hide();
}

function _ajax_update_school_save_button() {
  $('a.flag-link-toggle').addClass('zinch_client');
  Drupal.attachBehaviors($('a.flag-link-toggle'));

  $('#like_link .school-save-box').html(this.html);
  
}

/**
* Zinch logout add by Alex
*/
function zinch_logout(){
  var baseUrl = '/logout?destination=';
  if(typeof(Drupal.settings.current_url) != 'undefined'){
    baseUrl += Drupal.settings.current_url;
  }
  var currentUrl = baseUrl;
  if(typeof(Drupal.settings.user_status) != 'undefined'){
    var userLoginType = Drupal.settings.user_status.user_login_type;
    if(userLoginType == 'renren'){
      var browse_type = zinch_browse_type();
      if(browse_type >= 9){
         window.location = currentUrl;
      }else{
        XN.Connect.logout(function(){
          window.location = currentUrl;
        });
      }
    }else{
      window.location = currentUrl;
    }
  }else{
    window.location = currentUrl;
  }
  return false;
}

//function close_cellphone_form_popup(target, data) {
//  $edit_cellphone_form.dialog("close");
//  if (data.status == 'success') {
//    $('#content .section').prepend('<div class="messages status">'+ data.message +'</div>');
//  };
//}

function za_track() {
  var u = Drupal.settings.current_url;
  if (u) {
    var uid = zinch_user_is_login() ? $.cookie('DRUPAL_UID') : 0;
    
    var reg = [/ichance\/info\/(\d+)/i, /**ichance**/
               /contact_ao\/(\d+)/i, /**contact_ao**/
               /^node\/(\d+)/i /**node**/
    ];
    $.each(reg, function(i, r) {
      if(r.test(u)) {

        var node_id = RegExp.$1;
        // For anony users, keep nids for processing when he login
        if (!zinch_user_is_login()) {

            var curr = new Date; // get current date
            curr.setHours(0,0,0,0);
            var first   = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
            var last    = first + 7; // last day is the first day + 6
            var lastday = new Date(curr.setDate(last));

            var visit_schools = $.cookie('anony_school_nids') || '';
            if (visit_schools.length < 200 && visit_schools.indexOf(node_id) == -1) {
                visit_schools += visit_schools ? ','+node_id : node_id;
                $.cookie('anony_school_nids', visit_schools, {expires: lastday, path: '/'});
            }
        }
        $.post('/za/?n=' + node_id + '&u=' + uid, function(){console.log('ZATrack')});
        return false;
      }
    });
  }
}

function zinch_view_school_profile_policy() {

  if (!zinch_user_is_login() && ($("body").hasClass('node-type-undergradschool') || $("body").hasClass('node-type-high-school'))) {
    
      if(/^\/(contact_ao|ichance|request_info)/i.test(location.pathname)) return false;

      var policy = Drupal.settings.visit_school_grace_time || 5;


      var visit = parseInt($.cookie('anony_school')) || 0;

      var curr = new Date; // get current date
      curr.setHours(0,0,0,0);
      var first   = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last    = first + 7; // last day is the first day + 6
      var lastday = new Date(curr.setDate(last));

      $.cookie('anony_school', visit+1, {expires: lastday, path: '/'});

      var refer = document.referrer || location.referrer;

      if (!refer) refer = location.href;
      
      //domain should match beta.zinchchina.com prod.zinch.cn www.zinch.cn ...
      if(refer && /^http:\/\/\w+\.\zinch(\w+)?\.(cn|com)/i.test(refer) && visit > policy ) {
        if($("body").hasClass('node-type-high-school')){
          var content_selector = '.quicktabs_main';

        }else{
          var content_selector = $('#school_profile_album').length ? '#school_profile_album' : '#content-area';
        }

        $(content_selector).html('').css({'min-height':'360px'});//set min-height
        $('.region-content-bottom').html('');
        
        new function() {
          $.get('/sites/all/themes/zinchus/templates/non-registered-users-block.html', function(res){
            var dv = $('<div id="anony-visit-tips"/>').html(res).hide();

            //get nid
            if($("body").hasClass('node-type-high-school')){
              var node_id = Drupal.settings.high_school_nid;
            }else{
              /page-node-(\d+)-/i.test($("body").attr('class'));
              var node_id = Drupal.settings.school_nid || RegExp.$1;
            }

            
            dv.find('a[href$="user/register"]').attr('href', '/request/info/' + node_id);
            dv.find('a[href$="user/login"]').attr('href', '/user/login/?destination=' + window.location.pathname);
            
            $(content_selector).append(dv);
            dv.fadeIn('slow');
            
            zinch_track_page('/vp/visit_school/' + location.pathname);
          });
        };
      }
  }
};

(function($){
  $.fn.zinch_grad_year = function (current_status, options) {
    
    /* 
      * To change this template, choose Tools | Templates
      * and open the template in the editor.
      */
    var range = function (low, high, step) {
      // http://kevin.vanzonneveld.net
      // +   original by: Waldo Malqui Silva
      // *     example 1: range ( 0, 12 );
      // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      // *     example 2: range( 0, 100, 10 );
      // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      // *     example 3: range( 'a', 'i' );
      // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
      // *     example 4: range( 'c', 'a' );
      // *     returns 4: ['c', 'b', 'a']
      var matrix = [];
      var inival, endval, plus;
      var walker = step || 1;
      var chars = false;

      if (!isNaN(low) && !isNaN(high)) {
        inival = low;
        endval = high;
      } else if (isNaN(low) && isNaN(high)) {
        chars = true;
        inival = low.charCodeAt(0);
        endval = high.charCodeAt(0);
      } else {
        inival = (isNaN(low) ? 0 : low);
        endval = (isNaN(high) ? 0 : high);
      }

      plus = ((inival > endval) ? false : true);
      if (plus) {
        while (inival <= endval) {
          matrix.push(((chars) ? String.fromCharCode(inival) : inival));
          inival += walker;
        }
      } else {
        while (inival >= endval) {
          matrix.push(((chars) ? String.fromCharCode(inival) : inival));
          inival -= walker;
        }
      }

      return matrix;
    }
    var defaults = {
      default_label: '毕业年份',
      default_label_value: 0,
      value: 0
    };
    options = $.extend(defaults, options);

    var r;
    var d = new Date();
    var current_year = d.getFullYear();

    if (current_status == 0) {
      return;
    }
    if (current_status == 5 || current_status == 6) {
      r = range(2000, current_year, 1);
    }
    else if (current_status == 3) {
      r = range(current_year, current_year + 5, 1);
    }
    else if (current_status == 1 || current_status == 2 || current_status == 4){
      r = range(current_year, current_year + 3, 1);
    }
    var optionElements = $.map(r, function(item) {
      return '<option value="'+ item +'">'+ item +'</option>';
    });
    if (current_status == 5 || current_status == 6) {
      optionElements.unshift("<option value='1999'>2000年以前</option>");
    }    
    optionElements.unshift("<option value='" + options.default_label_value + "'>" + options.default_label + "</option>");

    $(this).empty().append(optionElements.join('')).val(options.value);
  }
})(jQuery);
/*!
 * jQuery corner plugin: simple corner rounding
 * Examples and documentation at: http://jquery.malsup.com/corner/
 * version 2.12 (23-MAY-2011)
 * Requires jQuery v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Dave Methvin and Mike Alsup
 */

/**
 *  corner() takes a single string argument:  $('#myDiv').corner("effect corners width")
 *
 *  effect:  name of the effect to apply, such as round, bevel, notch, bite, etc (default is round). 
 *  corners: one or more of: top, bottom, tr, tl, br, or bl.  (default is all corners)
 *  width:   width of the effect; in the case of rounded corners this is the radius. 
 *           specify this value using the px suffix such as 10px (yes, it must be pixels).
 */
;(function($) { 

var style = document.createElement('div').style,
    moz = style['MozBorderRadius'] !== undefined,
    webkit = style['WebkitBorderRadius'] !== undefined,
    radius = style['borderRadius'] !== undefined || style['BorderRadius'] !== undefined,
    mode = document.documentMode || 0,
    noBottomFold = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8),

    expr = $.browser.msie && (function() {
        var div = document.createElement('div');
        try { div.style.setExpression('width','0+0'); div.style.removeExpression('width'); }
        catch(e) { return false; }
        return true;
    })();

$.support = $.support || {};
$.support.borderRadius = moz || webkit || radius; // so you can do:  if (!$.support.borderRadius) $('#myDiv').corner();

function sz(el, p) { 
    return parseInt($.css(el,p))||0; 
};
function hex2(s) {
    s = parseInt(s).toString(16);
    return ( s.length < 2 ) ? '0'+s : s;
};
function gpc(node) {
    while(node) {
        var v = $.css(node,'backgroundColor'), rgb;
        if (v && v != 'transparent' && v != 'rgba(0, 0, 0, 0)') {
            if (v.indexOf('rgb') >= 0) { 
                rgb = v.match(/\d+/g); 
                return '#'+ hex2(rgb[0]) + hex2(rgb[1]) + hex2(rgb[2]);
            }
            return v;
        }
        if (node.nodeName.toLowerCase() == 'html')
            break;
        node = node.parentNode; // keep walking if transparent
    }
    return '#ffffff';
};

function getWidth(fx, i, width) {
    switch(fx) {
    case 'round':  return Math.round(width*(1-Math.cos(Math.asin(i/width))));
    case 'cool':   return Math.round(width*(1+Math.cos(Math.asin(i/width))));
    case 'sharp':  return width-i;
    case 'bite':   return Math.round(width*(Math.cos(Math.asin((width-i-1)/width))));
    case 'slide':  return Math.round(width*(Math.atan2(i,width/i)));
    case 'jut':    return Math.round(width*(Math.atan2(width,(width-i-1))));
    case 'curl':   return Math.round(width*(Math.atan(i)));
    case 'tear':   return Math.round(width*(Math.cos(i)));
    case 'wicked': return Math.round(width*(Math.tan(i)));
    case 'long':   return Math.round(width*(Math.sqrt(i)));
    case 'sculpt': return Math.round(width*(Math.log((width-i-1),width)));
    case 'dogfold':
    case 'dog':    return (i&1) ? (i+1) : width;
    case 'dog2':   return (i&2) ? (i+1) : width;
    case 'dog3':   return (i&3) ? (i+1) : width;
    case 'fray':   return (i%2)*width;
    case 'notch':  return width; 
    case 'bevelfold':
    case 'bevel':  return i+1;
    case 'steep':  return i/2 + 1;
    case 'invsteep':return (width-i)/2+1;
    }
};

$.fn.corner = function(options) {
    // in 1.3+ we can fix mistakes with the ready state
    if (this.length == 0) {
        if (!$.isReady && this.selector) {
            var s = this.selector, c = this.context;
            $(function() {
                $(s,c).corner(options);
            });
        }
        return this;
    }

    return this.each(function(index){
        var $this = $(this),
            // meta values override options
            o = [$this.attr($.fn.corner.defaults.metaAttr) || '', options || ''].join(' ').toLowerCase(),
            keep = /keep/.test(o),                       // keep borders?
            cc = ((o.match(/cc:(#[0-9a-f]+)/)||[])[1]),  // corner color
            sc = ((o.match(/sc:(#[0-9a-f]+)/)||[])[1]),  // strip color
            width = parseInt((o.match(/(\d+)px/)||[])[1]) || 10, // corner width
            re = /round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,
            fx = ((o.match(re)||['round'])[0]),
            fold = /dogfold|bevelfold/.test(o),
            edges = { T:0, B:1 },
            opts = {
                TL:  /top|tl|left/.test(o),       TR:  /top|tr|right/.test(o),
                BL:  /bottom|bl|left/.test(o),    BR:  /bottom|br|right/.test(o)
            },
            // vars used in func later
            strip, pad, cssHeight, j, bot, d, ds, bw, i, w, e, c, common, $horz;
        
        if ( !opts.TL && !opts.TR && !opts.BL && !opts.BR )
            opts = { TL:1, TR:1, BL:1, BR:1 };
            
        // support native rounding
        if ($.fn.corner.defaults.useNative && fx == 'round' && (radius || moz || webkit) && !cc && !sc) {
            if (opts.TL)
                $this.css(radius ? 'border-top-left-radius' : moz ? '-moz-border-radius-topleft' : '-webkit-border-top-left-radius', width + 'px');
            if (opts.TR)
                $this.css(radius ? 'border-top-right-radius' : moz ? '-moz-border-radius-topright' : '-webkit-border-top-right-radius', width + 'px');
            if (opts.BL)
                $this.css(radius ? 'border-bottom-left-radius' : moz ? '-moz-border-radius-bottomleft' : '-webkit-border-bottom-left-radius', width + 'px');
            if (opts.BR)
                $this.css(radius ? 'border-bottom-right-radius' : moz ? '-moz-border-radius-bottomright' : '-webkit-border-bottom-right-radius', width + 'px');
            return;
        }
            
        strip = document.createElement('div');
        $(strip).css({
            overflow: 'hidden',
            height: '1px',
            minHeight: '1px',
            fontSize: '1px',
            backgroundColor: sc || 'transparent',
            borderStyle: 'solid'
        });
    
        pad = {
            T: parseInt($.css(this,'paddingTop'))||0,     R: parseInt($.css(this,'paddingRight'))||0,
            B: parseInt($.css(this,'paddingBottom'))||0,  L: parseInt($.css(this,'paddingLeft'))||0
        };

        if (typeof this.style.zoom != undefined) this.style.zoom = 1; // force 'hasLayout' in IE
        if (!keep) this.style.border = 'none';
        strip.style.borderColor = cc || gpc(this.parentNode);
        cssHeight = $(this).outerHeight();

        for (j in edges) {
            bot = edges[j];
            // only add stips if needed
            if ((bot && (opts.BL || opts.BR)) || (!bot && (opts.TL || opts.TR))) {
                strip.style.borderStyle = 'none '+(opts[j+'R']?'solid':'none')+' none '+(opts[j+'L']?'solid':'none');
                d = document.createElement('div');
                $(d).addClass('jquery-corner');
                ds = d.style;

                bot ? this.appendChild(d) : this.insertBefore(d, this.firstChild);

                if (bot && cssHeight != 'auto') {
                    if ($.css(this,'position') == 'static')
                        this.style.position = 'relative';
                    ds.position = 'absolute';
                    ds.bottom = ds.left = ds.padding = ds.margin = '0';
                    if (expr)
                        ds.setExpression('width', 'this.parentNode.offsetWidth');
                    else
                        ds.width = '100%';
                }
                else if (!bot && $.browser.msie) {
                    if ($.css(this,'position') == 'static')
                        this.style.position = 'relative';
                    ds.position = 'absolute';
                    ds.top = ds.left = ds.right = ds.padding = ds.margin = '0';
                    
                    // fix ie6 problem when blocked element has a border width
                    if (expr) {
                        bw = sz(this,'borderLeftWidth') + sz(this,'borderRightWidth');
                        ds.setExpression('width', 'this.parentNode.offsetWidth - '+bw+'+ "px"');
                    }
                    else
                        ds.width = '100%';
                }
                else {
                    ds.position = 'relative';
                    ds.margin = !bot ? '-'+pad.T+'px -'+pad.R+'px '+(pad.T-width)+'px -'+pad.L+'px' : 
                                        (pad.B-width)+'px -'+pad.R+'px -'+pad.B+'px -'+pad.L+'px';                
                }

                for (i=0; i < width; i++) {
                    w = Math.max(0,getWidth(fx,i, width));
                    e = strip.cloneNode(false);
                    e.style.borderWidth = '0 '+(opts[j+'R']?w:0)+'px 0 '+(opts[j+'L']?w:0)+'px';
                    bot ? d.appendChild(e) : d.insertBefore(e, d.firstChild);
                }
                
                if (fold && $.support.boxModel) {
                    if (bot && noBottomFold) continue;
                    for (c in opts) {
                        if (!opts[c]) continue;
                        if (bot && (c == 'TL' || c == 'TR')) continue;
                        if (!bot && (c == 'BL' || c == 'BR')) continue;
                        
                        common = { position: 'absolute', border: 'none', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: strip.style.borderColor };
                        $horz = $('<div/>').css(common).css({ width: width + 'px', height: '1px' });
                        switch(c) {
                        case 'TL': $horz.css({ bottom: 0, left: 0 }); break;
                        case 'TR': $horz.css({ bottom: 0, right: 0 }); break;
                        case 'BL': $horz.css({ top: 0, left: 0 }); break;
                        case 'BR': $horz.css({ top: 0, right: 0 }); break;
                        }
                        d.appendChild($horz[0]);
                        
                        var $vert = $('<div/>').css(common).css({ top: 0, bottom: 0, width: '1px', height: width + 'px' });
                        switch(c) {
                        case 'TL': $vert.css({ left: width }); break;
                        case 'TR': $vert.css({ right: width }); break;
                        case 'BL': $vert.css({ left: width }); break;
                        case 'BR': $vert.css({ right: width }); break;
                        }
                        d.appendChild($vert[0]);
                    }
                }
            }
        }
    });
};

$.fn.uncorner = function() { 
    if (radius || moz || webkit)
        this.css(radius ? 'border-radius' : moz ? '-moz-border-radius' : '-webkit-border-radius', 0);
    $('div.jquery-corner', this).remove();
    return this;
};

// expose options
$.fn.corner.defaults = {
    useNative: true, // true if plugin should attempt to use native browser support for border radius rounding
    metaAttr:  'data-corner' // name of meta attribute to use for options
};
    
})(jQuery);
;
Drupal.behaviors.zinch_tracking = function(context) {
  var data_channels = new Array();
  var tmp;
  $("[data-channel]").each(function() {
    if(tmp == $(this).attr("data-channel")) { 
      return true;
    }
    data_channels.push($(this).attr("data-channel"));
    tmp = $(this).attr("data-channel");
  });
  //var data_channel = $("[data-channel]").attr("data-channel");
  $.each(data_channels, function(key, data_channel) {
    var data_nids = new Array(); 
    //var data_nid = $("["+data_channel+"-nid]").attr(data_channel+"-nid");
    $("["+data_channel+"-nid]").each(function() {
      data_nids.push($(this).attr(data_channel+"-nid"));
    });
    data_nids = data_nids.join(",");
   // $(".toggle-bottom-schools").bind("click", function(){ zinch_tracking_log_click();});
    zinch_tracking_log_ajax(data_channel,data_nids);
  });   
}

function zinch_tracking_log_ajax(data_channel,data_nids) {
  $.ajax({
		type : 'POST',
		url : Drupal.settings.basePath + 'zinch_ad/ajax/statistics',
		data:{
			'data_channel' : data_channel,
			'data_nids' : data_nids
		},
		success:function(data){
      //alert(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			ajax_request_error(XMLHttpRequest, textStatus, errorThrown);
		}
	});
}

/*
function zinch_tracking_log_click() {
  var data_channel = $("[data-channel]").attr("data-channel");
  var data_nids = new Array(); 
  //var data_nid = $("["+data_channel+"-nid]").attr(data_channel+"-nid");
  $("["+data_channel+"-nid]").each(function() {
    data_nids.push($(this).attr(data_channel+"-nid"));
  });
  data_nids = data_nids.join(",");
  zinch_tracking_log_ajax(data_channel,data_nids);
}
*/
;
