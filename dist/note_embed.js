(function(){function l(a){return function(c,d,e,f){d=z(d,f,4);var h=!r(c)&&b.keys(c),p=(h||c).length,g=0<a?0:p-1;3>arguments.length&&(e=c[h?h[g]:g],g+=a);for(var k=d,l=e;0<=g&&g<p;g+=a)var m=h?h[g]:g,l=k(l,c[m],m,c);return l}}function n(a){return function(c,b,e){b=q(b,e);e=v(c);for(var f=0<a?0:e-1;0<=f&&f<e;f+=a)if(b(c[f],f,c))return f;return-1}}function g(a,c,d){return function(e,f,h){var p=0,g=v(e);if("number"==typeof h)0<a?p=0<=h?h:Math.max(h+g,p):g=0<=h?Math.min(h+1,g):h+g+1;else if(d&&h&&g)return h=
d(e,f),e[h]===f?h:-1;if(f!==f)return h=c(t.call(e,p,g),b.isNaN),0<=h?h+p:-1;for(h=0<a?p:g-1;0<=h&&h<g;h+=a)if(e[h]===f)return h;return-1}}function k(a,c){var d=K.length,e=a.constructor,e=b.isFunction(e)&&e.prototype||u,f="constructor";for(b.has(a,f)&&!b.contains(c,f)&&c.push(f);d--;)f=K[d],f in a&&a[f]!==e[f]&&!b.contains(c,f)&&c.push(f)}var m=this,x=m._,w=Array.prototype,u=Object.prototype,L=w.push,t=w.slice,A=u.toString,R=u.hasOwnProperty,D=Array.isArray,M=Object.keys,E=Function.prototype.bind,
N=Object.create,F=function(){},b=function(a){if(a instanceof b)return a;if(!(this instanceof b))return new b(a);this._wrapped=a};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):m._=b;b.VERSION="1.8.3";var z=function(a,c,b){if(void 0===c)return a;switch(null==b?3:b){case 1:return function(b){return a.call(c,b)};case 2:return function(b,d){return a.call(c,b,d)};case 3:return function(b,d,h){return a.call(c,b,d,h)};case 4:return function(b,
d,h,p){return a.call(c,b,d,h,p)}}return function(){return a.apply(c,arguments)}},q=function(a,c,d){return null==a?b.identity:b.isFunction(a)?z(a,c,d):b.isObject(a)?b.matcher(a):b.property(a)};b.iteratee=function(a,c){return q(a,c,Infinity)};var B=function(a,c){return function(b){var e=arguments.length;if(2>e||null==b)return b;for(var f=1;f<e;f++)for(var h=arguments[f],p=a(h),g=p.length,k=0;k<g;k++){var l=p[k];c&&void 0!==b[l]||(b[l]=h[l])}return b}},O=function(a){if(!b.isObject(a))return{};if(N)return N(a);
F.prototype=a;a=new F;F.prototype=null;return a},C=function(a){return function(c){return null==c?void 0:c[a]}},S=Math.pow(2,53)-1,v=C("length"),r=function(a){a=v(a);return"number"==typeof a&&0<=a&&a<=S};b.each=b.forEach=function(a,c,d){c=z(c,d);var e;if(r(a))for(d=0,e=a.length;d<e;d++)c(a[d],d,a);else{var f=b.keys(a);d=0;for(e=f.length;d<e;d++)c(a[f[d]],f[d],a)}return a};b.map=b.collect=function(a,c,d){c=q(c,d);d=!r(a)&&b.keys(a);for(var e=(d||a).length,f=Array(e),h=0;h<e;h++){var p=d?d[h]:h;f[h]=
c(a[p],p,a)}return f};b.reduce=b.foldl=b.inject=l(1);b.reduceRight=b.foldr=l(-1);b.find=b.detect=function(a,c,d){c=r(a)?b.findIndex(a,c,d):b.findKey(a,c,d);if(void 0!==c&&-1!==c)return a[c]};b.filter=b.select=function(a,c,d){var e=[];c=q(c,d);b.each(a,function(a,b,d){c(a,b,d)&&e.push(a)});return e};b.reject=function(a,c,d){return b.filter(a,b.negate(q(c)),d)};b.every=b.all=function(a,c,d){c=q(c,d);d=!r(a)&&b.keys(a);for(var e=(d||a).length,f=0;f<e;f++){var h=d?d[f]:f;if(!c(a[h],h,a))return!1}return!0};
b.some=b.any=function(a,c,d){c=q(c,d);d=!r(a)&&b.keys(a);for(var e=(d||a).length,f=0;f<e;f++){var h=d?d[f]:f;if(c(a[h],h,a))return!0}return!1};b.contains=b.includes=b.include=function(a,c,d,e){r(a)||(a=b.values(a));if("number"!=typeof d||e)d=0;return 0<=b.indexOf(a,c,d)};b.invoke=function(a,c){var d=t.call(arguments,2),e=b.isFunction(c);return b.map(a,function(a){var b=e?c:a[c];return null==b?b:b.apply(a,d)})};b.pluck=function(a,c){return b.map(a,b.property(c))};b.where=function(a,c){return b.filter(a,
b.matcher(c))};b.findWhere=function(a,c){return b.find(a,b.matcher(c))};b.max=function(a,c,d){var e=-Infinity,f=-Infinity,h;if(null==c&&null!=a){a=r(a)?a:b.values(a);for(var p=0,g=a.length;p<g;p++)d=a[p],d>e&&(e=d)}else c=q(c,d),b.each(a,function(a,b,d){h=c(a,b,d);if(h>f||-Infinity===h&&-Infinity===e)e=a,f=h});return e};b.min=function(a,c,d){var e=Infinity,f=Infinity,h;if(null==c&&null!=a){a=r(a)?a:b.values(a);for(var p=0,g=a.length;p<g;p++)d=a[p],d<e&&(e=d)}else c=q(c,d),b.each(a,function(a,b,d){h=
c(a,b,d);if(h<f||Infinity===h&&Infinity===e)e=a,f=h});return e};b.shuffle=function(a){a=r(a)?a:b.values(a);for(var c=a.length,d=Array(c),e=0,f;e<c;e++)f=b.random(0,e),f!==e&&(d[e]=d[f]),d[f]=a[e];return d};b.sample=function(a,c,d){return null==c||d?(r(a)||(a=b.values(a)),a[b.random(a.length-1)]):b.shuffle(a).slice(0,Math.max(0,c))};b.sortBy=function(a,c,d){c=q(c,d);return b.pluck(b.map(a,function(a,b,d){return{value:a,index:b,criteria:c(a,b,d)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==
d){if(c>d||void 0===c)return 1;if(c<d||void 0===d)return-1}return a.index-b.index}),"value")};var G=function(a){return function(c,d,e){var f={};d=q(d,e);b.each(c,function(b,e){var g=d(b,e,c);a(f,b,g)});return f}};b.groupBy=G(function(a,c,d){b.has(a,d)?a[d].push(c):a[d]=[c]});b.indexBy=G(function(a,b,d){a[d]=b});b.countBy=G(function(a,c,d){b.has(a,d)?a[d]++:a[d]=1});b.toArray=function(a){return a?b.isArray(a)?t.call(a):r(a)?b.map(a,b.identity):b.values(a):[]};b.size=function(a){return null==a?0:r(a)?
a.length:b.keys(a).length};b.partition=function(a,c,d){c=q(c,d);var e=[],f=[];b.each(a,function(a,b,d){(c(a,b,d)?e:f).push(a)});return[e,f]};b.first=b.head=b.take=function(a,c,d){return null==a?void 0:null==c||d?a[0]:b.initial(a,a.length-c)};b.initial=function(a,b,d){return t.call(a,0,Math.max(0,a.length-(null==b||d?1:b)))};b.last=function(a,c,d){return null==a?void 0:null==c||d?a[a.length-1]:b.rest(a,Math.max(0,a.length-c))};b.rest=b.tail=b.drop=function(a,b,d){return t.call(a,null==b||d?1:b)};b.compact=
function(a){return b.filter(a,b.identity)};var y=function(a,c,d,e){var f=[],h=0;e=e||0;for(var g=v(a);e<g;e++){var k=a[e];if(r(k)&&(b.isArray(k)||b.isArguments(k))){c||(k=y(k,c,d));var l=0,m=k.length;for(f.length+=m;l<m;)f[h++]=k[l++]}else d||(f[h++]=k)}return f};b.flatten=function(a,b){return y(a,b,!1)};b.without=function(a){return b.difference(a,t.call(arguments,1))};b.uniq=b.unique=function(a,c,d,e){b.isBoolean(c)||(e=d,d=c,c=!1);null!=d&&(d=q(d,e));e=[];for(var f=[],h=0,g=v(a);h<g;h++){var k=
a[h],l=d?d(k,h,a):k;c?(h&&f===l||e.push(k),f=l):d?b.contains(f,l)||(f.push(l),e.push(k)):b.contains(e,k)||e.push(k)}return e};b.union=function(){return b.uniq(y(arguments,!0,!0))};b.intersection=function(a){for(var c=[],d=arguments.length,e=0,f=v(a);e<f;e++){var h=a[e];if(!b.contains(c,h)){for(var g=1;g<d&&b.contains(arguments[g],h);g++);g===d&&c.push(h)}}return c};b.difference=function(a){var c=y(arguments,!0,!0,1);return b.filter(a,function(a){return!b.contains(c,a)})};b.zip=function(){return b.unzip(arguments)};
b.unzip=function(a){for(var c=a&&b.max(a,v).length||0,d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,e);return d};b.object=function(a,b){for(var d={},e=0,f=v(a);e<f;e++)b?d[a[e]]=b[e]:d[a[e][0]]=a[e][1];return d};b.findIndex=n(1);b.findLastIndex=n(-1);b.sortedIndex=function(a,b,d,e){d=q(d,e,1);b=d(b);e=0;for(var f=v(a);e<f;){var h=Math.floor((e+f)/2);d(a[h])<b?e=h+1:f=h}return e};b.indexOf=g(1,b.findIndex,b.sortedIndex);b.lastIndexOf=g(-1,b.findLastIndex);b.range=function(a,b,d){null==b&&(b=a||0,a=0);d=d||
1;b=Math.max(Math.ceil((b-a)/d),0);for(var e=Array(b),f=0;f<b;f++,a+=d)e[f]=a;return e};var P=function(a,c,d,e,f){if(!(e instanceof c))return a.apply(d,f);c=O(a.prototype);a=a.apply(c,f);return b.isObject(a)?a:c};b.bind=function(a,c){if(E&&a.bind===E)return E.apply(a,t.call(arguments,1));if(!b.isFunction(a))throw new TypeError("Bind must be called on a function");var d=t.call(arguments,2),e=function(){return P(a,e,c,this,d.concat(t.call(arguments)))};return e};b.partial=function(a){var c=t.call(arguments,
1),d=function(){for(var e=0,f=c.length,h=Array(f),g=0;g<f;g++)h[g]=c[g]===b?arguments[e++]:c[g];for(;e<arguments.length;)h.push(arguments[e++]);return P(a,d,this,this,h)};return d};b.bindAll=function(a){var c,d=arguments.length,e;if(1>=d)throw Error("bindAll must be passed function names");for(c=1;c<d;c++)e=arguments[c],a[e]=b.bind(a[e],a);return a};b.memoize=function(a,c){var d=function(e){var f=d.cache,h=""+(c?c.apply(this,arguments):e);b.has(f,h)||(f[h]=a.apply(this,arguments));return f[h]};d.cache=
{};return d};b.delay=function(a,b){var d=t.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=b.partial(b.delay,b,1);b.throttle=function(a,c,d){var e,f,h,g=null,k=0;d||(d={});var l=function(){k=!1===d.leading?0:b.now();g=null;h=a.apply(e,f);g||(e=f=null)};return function(){var m=b.now();k||!1!==d.leading||(k=m);var n=c-(m-k);e=this;f=arguments;0>=n||n>c?(g&&(clearTimeout(g),g=null),k=m,h=a.apply(e,f),g||(e=f=null)):g||!1===d.trailing||(g=setTimeout(l,n));return h}};
b.debounce=function(a,c,d){var e,f,h,g,k,l=function(){var m=b.now()-g;m<c&&0<=m?e=setTimeout(l,c-m):(e=null,d||(k=a.apply(h,f),e||(h=f=null)))};return function(){h=this;f=arguments;g=b.now();var m=d&&!e;e||(e=setTimeout(l,c));m&&(k=a.apply(h,f),h=f=null);return k}};b.wrap=function(a,c){return b.partial(c,a)};b.negate=function(a){return function(){return!a.apply(this,arguments)}};b.compose=function(){var a=arguments,b=a.length-1;return function(){for(var d=b,e=a[b].apply(this,arguments);d--;)e=a[d].call(this,
e);return e}};b.after=function(a,b){return function(){if(1>--a)return b.apply(this,arguments)}};b.before=function(a,b){var d;return function(){0<--a&&(d=b.apply(this,arguments));1>=a&&(b=null);return d}};b.once=b.partial(b.before,2);var Q=!{toString:null}.propertyIsEnumerable("toString"),K="valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");b.keys=function(a){if(!b.isObject(a))return[];if(M)return M(a);var c=[],d;for(d in a)b.has(a,d)&&c.push(d);Q&&k(a,c);
return c};b.allKeys=function(a){if(!b.isObject(a))return[];var c=[],d;for(d in a)c.push(d);Q&&k(a,c);return c};b.values=function(a){for(var c=b.keys(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=a[c[f]];return e};b.mapObject=function(a,c,d){c=q(c,d);d=b.keys(a);for(var e=d.length,f={},h,g=0;g<e;g++)h=d[g],f[h]=c(a[h],h,a);return f};b.pairs=function(a){for(var c=b.keys(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=[c[f],a[c[f]]];return e};b.invert=function(a){for(var c={},d=b.keys(a),e=0,f=d.length;e<f;e++)c[a[d[e]]]=
d[e];return c};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=B(b.allKeys);b.extendOwn=b.assign=B(b.keys);b.findKey=function(a,c,d){c=q(c,d);d=b.keys(a);for(var e,f=0,h=d.length;f<h;f++)if(e=d[f],c(a[e],e,a))return e};b.pick=function(a,c,d){var e={},f=a,h,g;if(null==f)return e;b.isFunction(c)?(g=b.allKeys(f),h=z(c,d)):(g=y(arguments,!1,!1,1),h=function(a,b,c){return b in c},f=Object(f));for(var k=0,l=g.length;k<l;k++){var m=g[k],n=f[m];
h(n,m,f)&&(e[m]=n)}return e};b.omit=function(a,c,d){if(b.isFunction(c))c=b.negate(c);else{var e=b.map(y(arguments,!1,!1,1),String);c=function(a,c){return!b.contains(e,c)}}return b.pick(a,c,d)};b.defaults=B(b.allKeys,!0);b.create=function(a,c){var d=O(a);c&&b.extendOwn(d,c);return d};b.clone=function(a){return b.isObject(a)?b.isArray(a)?a.slice():b.extend({},a):a};b.tap=function(a,b){b(a);return a};b.isMatch=function(a,c){var d=b.keys(c),e=d.length;if(null==a)return!e;for(var f=Object(a),h=0;h<e;h++){var g=
d[h];if(c[g]!==f[g]||!(g in f))return!1}return!0};var H=function(a,c,d,e){if(a===c)return 0!==a||1/a===1/c;if(null==a||null==c)return a===c;a instanceof b&&(a=a._wrapped);c instanceof b&&(c=c._wrapped);var f=A.call(a);if(f!==A.call(c))return!1;switch(f){case "[object RegExp]":case "[object String]":return""+a===""+c;case "[object Number]":return+a!==+a?+c!==+c:0===+a?1/+a===1/c:+a===+c;case "[object Date]":case "[object Boolean]":return+a===+c}f="[object Array]"===f;if(!f){if("object"!=typeof a||
"object"!=typeof c)return!1;var h=a.constructor,g=c.constructor;if(h!==g&&!(b.isFunction(h)&&h instanceof h&&b.isFunction(g)&&g instanceof g)&&"constructor"in a&&"constructor"in c)return!1}d=d||[];e=e||[];for(h=d.length;h--;)if(d[h]===a)return e[h]===c;d.push(a);e.push(c);if(f){h=a.length;if(h!==c.length)return!1;for(;h--;)if(!H(a[h],c[h],d,e))return!1}else{f=b.keys(a);h=f.length;if(b.keys(c).length!==h)return!1;for(;h--;)if(g=f[h],!b.has(c,g)||!H(a[g],c[g],d,e))return!1}d.pop();e.pop();return!0};
b.isEqual=function(a,b){return H(a,b)};b.isEmpty=function(a){return null==a?!0:r(a)&&(b.isArray(a)||b.isString(a)||b.isArguments(a))?0===a.length:0===b.keys(a).length};b.isElement=function(a){return!(!a||1!==a.nodeType)};b.isArray=D||function(a){return"[object Array]"===A.call(a)};b.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a};b.each("Arguments Function String Number Date RegExp Error".split(" "),function(a){b["is"+a]=function(b){return A.call(b)==="[object "+a+"]"}});
b.isArguments(arguments)||(b.isArguments=function(a){return b.has(a,"callee")});"function"!=typeof/./&&"object"!=typeof Int8Array&&(b.isFunction=function(a){return"function"==typeof a||!1});b.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};b.isNaN=function(a){return b.isNumber(a)&&a!==+a};b.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"===A.call(a)};b.isNull=function(a){return null===a};b.isUndefined=function(a){return void 0===a};b.has=function(a,b){return null!=a&&
R.call(a,b)};b.noConflict=function(){m._=x;return this};b.identity=function(a){return a};b.constant=function(a){return function(){return a}};b.noop=function(){};b.property=C;b.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}};b.matcher=b.matches=function(a){a=b.extendOwn({},a);return function(c){return b.isMatch(c,a)}};b.times=function(a,b,d){var e=Array(Math.max(0,a));b=z(b,d,1);for(d=0;d<a;d++)e[d]=b(d);return e};b.random=function(a,b){null==b&&(b=a,a=0);return a+Math.floor(Math.random()*
(b-a+1))};b.now=Date.now||function(){return(new Date).getTime()};D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};B=b.invert(D);C=function(a){var c=function(b){return a[b]},d="(?:"+b.keys(a).join("|")+")",e=RegExp(d),f=RegExp(d,"g");return function(a){a=null==a?"":""+a;return e.test(a)?a.replace(f,c):a}};b.escape=C(D);b.unescape=C(B);b.result=function(a,c,d){c=null==a?void 0:a[c];void 0===c&&(c=d);return b.isFunction(c)?c.call(a):c};var T=0;b.uniqueId=function(a){var b=
++T+"";return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,W=function(a){return"\\"+U[a]};b.template=function(a,c,d){!c&&d&&(c=d);c=b.defaults({},c,b.templateSettings);d=RegExp([(c.escape||I).source,(c.interpolate||I).source,(c.evaluate||I).source].join("|")+"|$","g");var e=0,f="__p+='";a.replace(d,function(b,c,d,
g,h){f+=a.slice(e,h).replace(V,W);e=h+b.length;c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='");return b});f+="';\n";c.variable||(f="with(obj||{}){\n"+f+"}\n");f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=new Function(c.variable||"obj","_",f)}catch(k){throw k.source=f,k;}d=function(a){return g.call(this,a,b)};d.source="function("+(c.variable||"obj")+
"){\n"+f+"}";return d};b.chain=function(a){a=b(a);a._chain=!0;return a};var J=function(a,c){return a._chain?b(c).chain():c};b.mixin=function(a){b.each(b.functions(a),function(c){var d=b[c]=a[c];b.prototype[c]=function(){var a=[this._wrapped];L.apply(a,arguments);return J(this,d.apply(b,a))}})};b.mixin(b);b.each("pop push reverse shift sort splice unshift".split(" "),function(a){var c=w[a];b.prototype[a]=function(){var b=this._wrapped;c.apply(b,arguments);"shift"!==a&&"splice"!==a||0!==b.length||delete b[0];
return J(this,b)}});b.each(["concat","join","slice"],function(a){var c=w[a];b.prototype[a]=function(){return J(this,c.apply(this._wrapped,arguments))}});b.prototype.value=function(){return this._wrapped};b.prototype.valueOf=b.prototype.toJSON=b.prototype.value;b.prototype.toString=function(){return""+this._wrapped};"function"===typeof define&&define.amd&&define("underscore",[],function(){return b})}).call(this);
(function(){var l=window.dc=window.dc||{};window.DocumentCloud=l;l.embed=l.embed||{};l.embed.notes=l.embed.notes||{};var n=l._=l._||window._.noConflict();n.t=n.t||function(g){return g};l.embed.immediatelyLoadNote=function(g,k){k=k||{};var m={};if(n.has(g,"id"))m=g;else try{m=JSON.parse(g)}catch(L){try{m.id=parseInt(g.match(/(\d+).(?:js|json)$/)[1],10)}catch(t){}}var x=k.id=m.id,w=new l.embed.noteModel(k);l.embed.notes[x]=l.embed.notes[x]||new l.embed.noteView({model:w,el:k.container});if(n.has(m,
"image_url"))l.embed.noteCallback(m);else{note_url=g.match(/\.js$/)?g+"on":g;var u=new XMLHttpRequest;u.open("GET",note_url,!0);u.onload=function(){if(200<=u.status&&400>u.status){var g=JSON.parse(u.responseText);l.embed.noteCallback(g)}};u.onerror=function(){};u.send()}l.recordHit&&l.embed.pingRemoteUrl("note",x)};if(n.isUndefined(l.embed.loadNote)||!n.isUndefined(l._notesWaitingForAppLoad))l.embed.loadNote=l.embed.immediatelyLoadNote;l.embed.noteCallback=function(g){var k=l.embed.notes[g.id];if(!k.el){var m=
k.model.options.container||"#DC-note-"+k.model.id;k.setElement(m);k.el||(console.log("WARNING!  Unable to find an element ("+m+") to embed note.  Inserting one to continue."),l._.find(document.querySelectorAll("script:not([src])"),function(g){return g.innerText.match("/annotations/"+k.model.id+".js")}).insertAdjacentHTML("beforebegin",'<div id="DC-note-'+k.model.id+'"></div>'),k.setElement("#DC-note-"+k.model.id))}k.model.attributes=g;k.render();k.model.options&&k.model.options.afterLoad&&k.model.options.afterLoad(k)};
l.embed.pingRemoteUrl=function(g,k){var m=window.location,m=m.protocol+"//"+m.host+m.pathname;if(m.match(/^file:/))return!1;var m=m.replace(/[\/]+$/,""),x=l.recordHit,w=encodeURIComponent(g+":"+k+":"+m),m=function(){var g=document.createElement("img");n.each({class:"DV-pixelping",alt:"",width:1,height:1,src:x+"?key="+w},function(k,l,m){g.setAttribute(l,k)});document.body.appendChild(g)};"loading"!=document.readyState?m():document.addEventListener("DOMContentLoaded",m)};l.embed.noteModel=function(g){this.options=
g||{};this.id=g.id};l.embed.noteModel.prototype={get:function(g){return this.attributes[g]},option:function(g){return this.attributes.options[g]},isPrivate:function(){return"private"==this.get("access")},isDraft:function(){return"exclusive"==this.get("access")},canonicalUrl:function(){return this.get("canonical_url")},contextualUrl:function(){var g=this.get("canonical_url"),k=g.indexOf("/annotations/");return g.substring(0,k)+".html"+this._documentPageAnchor()},publishedUrlWithAnchor:function(){return this.get("published_url")+
this._documentPageAnchor()},viewerUrl:function(){return this.publishedUrlWithAnchor()},_documentPageAnchor:function(){var g=this.get("id");return"#document/p"+this.get("page")+"/a"+g},imageUrl:function(){return this._imageUrl=this._imageUrl||this.get("image_url").replace("{size}","normal").replace("{page}",this.get("page"))},coordinates:function(g){if(!this._coordinates||g)g=n.map(this.get("location").image.split(","),function(g){return parseInt(g,10)}),this._coordinates={top:g[0],left:g[3],right:g[1],
height:g[2]-g[0],width:g[1]-g[3]},this._transformCoordinatesToLegacy();return this._coordinates},_transformCoordinatesToLegacy:function(){var g={top:1,left:-2,width:-8};this._coordinates=n.mapObject(this._coordinates,function(k,l){return n.has(g,l)?k+g[l]:k})}};l.embed.noteView=function(g){this.model=g.model;this.setElement(this.model.options.el||"#DC-note-"+this.model.id)};l.embed.noteView.prototype={IMAGE_WIDTH:700,setElement:function(g){this.el=g instanceof Element?g:document.querySelector(g)},
render:function(){this.el.innerHTML=JST.note_embed({note:this.model,hasImage:!n.isEmpty(this.model.coordinates()),extraClasses:this._extraClasses().join(" "),imagePosition:this._inlineCSS()});return this.el},_inlineCSS:function(){var g=this.model.coordinates();return n.isEmpty(g)?{}:{aspectRatio:g.height/g.width*100,heightPixel:g.height,widthPixel:g.width,widthPercent:this.IMAGE_WIDTH/g.width*100,offsetTopPercent:g.top/g.height*-100,offsetLeftPercent:g.left/g.width*-100}},_extraClasses:function(){var g=
[];this.model.isPrivate()&&g.push("private");this.model.isDraft()&&g.push("draft");return n.map(g,function(g){return"DC-note-"+g})},displayModes:{},displayNames:{},cacheDomReferences:n.noop,checkAndSetWidth:n.noop,resize:n.noop}})();(function(){window.JST=window.JST||{};window.JST.note_embed=dc._.template('<div class="DC-note <%= extraClasses %>" data-version="1.1" style="background-image:url(\'<%= note.imageUrl() %>\')">\n  <div class="DC-note-header">\n    <a class="DC-note-embed-resource" href="<%= note.publishedUrlWithAnchor() %>" target="_blank" title="View the note \'<%- note.get(\'title\') %>\' in its original document context on DocumentCloud in a new window or tab">\n      <span class="DC-note-title"><%- note.get(\'title\') %></span>\n      <span class="DC-note-page-number">(p. <%= note.get(\'page\') %>)</span>\n    </a>\n  </div>\n  <% if (hasImage) { %>\n  <div class="DC-note-image-max-bounds" style="max-height:<%= imagePosition.heightPixel %>px;max-width:<%= imagePosition.widthPixel %>px">\n    <div class="DC-note-image-aspect-ratio" style="padding-bottom:<%= imagePosition.aspectRatio %>%">\n      <a class="DC-note-image-link DC-note-image-space-filler" href="<%= note.publishedUrlWithAnchor() %>" target="_blank" title="View the note \'<%- note.get(\'title\') %>\' in its original document context on DocumentCloud in a new window or tab">\n        <img class="DC-note-image" width="<%= imagePosition.widthPixel %>" height="<%= imagePosition.heightPixel %>" src="<%= note.imageUrl() %>" alt="Selected portion of a source document hosted by DocumentCloud" style="top:<%= imagePosition.offsetTopPercent %>%;left:<%= imagePosition.offsetLeftPercent %>%;width:<%= imagePosition.widthPercent %>%;">\n      </a>\n    </div>\n  </div>\n  <% } %>\n  <div class="DC-note-body"><%= note.get(\'content\') %></div>\n  <div class="DC-note-credit">\n    <a href="<%= note.publishedUrlWithAnchor() %>" target="_blank" title="View the note \'<%- note.get(\'title\') %>\' in its original document context on DocumentCloud in a new window or tab">\n      View the entire document with <span class="DC-note-logotype-link">DocumentCloud</span>\n    </a>\n  </div>\n  <div class="DC-note-background-fader"></div>\n</div>\n')})();
