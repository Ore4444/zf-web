/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.io.xhrMultiPart"],["require","dojox.uuid.generateRandomUuid"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.io.xhrMultiPart"]){_4._hasResource["dojox.io.xhrMultiPart"]=true;_4.provide("dojox.io.xhrMultiPart");_4.require("dojox.uuid.generateRandomUuid");(function(){function _7(_8,_9){if(!_8["name"]&&!_8["content"]){throw new Error("Each part of a multi-part request requires 'name' and 'content'.");}var _a=[];_a.push("--"+_9,"Content-Disposition: form-data; name=\""+_8.name+"\""+(_8["filename"]?"; filename=\""+_8.filename+"\"":""));if(_8["contentType"]){var ct="Content-Type: "+_8.contentType;if(_8["charset"]){ct+="; Charset="+_8.charset;}_a.push(ct);}if(_8["contentTransferEncoding"]){_a.push("Content-Transfer-Encoding: "+_8.contentTransferEncoding);}_a.push("",_8.content);return _a;};function _b(_c,_d){var o=_4.formToObject(_c),_e=[];for(var p in o){if(_4.isArray(o[p])){_4.forEach(o[p],function(_f){_e=_e.concat(_7({name:p,content:_f},_d));});}else{_e=_e.concat(_7({name:p,content:o[p]},_d));}}return _e;};_6.io.xhrMultiPart=function(_10){if(!_10["file"]&&!_10["content"]&&!_10["form"]){throw new Error("content, file or form must be provided to dojox.io.xhrMultiPart's arguments");}var _11=_6.uuid.generateRandomUuid(),tmp=[],out="";if(_10["file"]||_10["content"]){var v=_10["file"]||_10["content"];_4.forEach((_4.isArray(v)?v:[v]),function(_12){tmp=tmp.concat(_7(_12,_11));});}else{if(_10["form"]){if(_4.query("input[type=file]",_10["form"]).length){throw new Error("dojox.io.xhrMultiPart cannot post files that are values of an INPUT TYPE=FILE.  Use dojo.io.iframe.send() instead.");}tmp=_b(_10["form"],_11);}}if(tmp.length){tmp.push("--"+_11+"--","");out=tmp.join("\r\n");}console.log(out);return _4.rawXhrPost(_4.mixin(_10,{contentType:"multipart/form-data; boundary="+_11,postData:out}));};})();}}};});