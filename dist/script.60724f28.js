parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
$("#contact-form").submit(function(){var t=$(this),e=!1;if(t.find("textaria, input").each(function(){""==$(this).val()&&(e=!0,console.log("empty field: validation error"))}),!e){var o=t.serialize();$.ajax({type:"POST",url:"../mail.php",dataType:"json",data:o,beforeSend:function(e){t.find('button[type="submit"]').attr("disabled","disabled")},success:function(e){e.error?(alert(e.error),t.trigger("reset"),console.log("error data")):(t[0].reset(),console.log("success"))},error:function(t,e,o){alert(t.status),alert(o)},complete:function(e){t.find('button[type="submit"]').prop("disabled",!1),console.log("complete")}})}return!1});
},{}]},{},["L4bL"], null)
//# sourceMappingURL=/script.60724f28.js.map