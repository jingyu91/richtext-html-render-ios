/*! For license information please see Renderer.bundle.js.LICENSE.txt */
var Renderer;(()=>{var e={135:(e,t,n)=>{"use strict";var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=/["'&<>]/,u=function(e){var t,n=""+e,r=o.exec(n);if(!r)return n;var u="",i=0,c=0;for(i=r.index;i<n.length;i++){switch(n.charCodeAt(i)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==i&&(u+=n.substring(c,i)),c=i+1,u+=t}return c!==i?u+n.substring(c,i):u},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t){return e(t={exports:{}},t.exports),t.exports}var f=a((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}));c(f),f.BLOCKS;var E=a((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"}));c(E),E.INLINES;var l=a((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));c(l);var L=a((function(e,t){var n,r=i&&i.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=i&&i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var u=o(l);t.TOP_LEVEL_BLOCKS=[f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET,f.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[f.BLOCKS.TABLE,f.BLOCKS.TABLE_ROW,f.BLOCKS.TABLE_CELL,f.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[f.BLOCKS.HR,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[f.BLOCKS.OL_LIST]=[f.BLOCKS.LIST_ITEM],n[f.BLOCKS.UL_LIST]=[f.BLOCKS.LIST_ITEM],n[f.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[f.BLOCKS.QUOTE]=[f.BLOCKS.PARAGRAPH],n[f.BLOCKS.TABLE]=[f.BLOCKS.TABLE_ROW],n[f.BLOCKS.TABLE_ROW]=[f.BLOCKS.TABLE_CELL,f.BLOCKS.TABLE_HEADER_CELL],n[f.BLOCKS.TABLE_CELL]=[f.BLOCKS.PARAGRAPH],n[f.BLOCKS.TABLE_HEADER_CELL]=[f.BLOCKS.PARAGRAPH],n),t.HEADINGS=[f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([f.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[f.BLOCKS.DOCUMENT,f.BLOCKS.PARAGRAPH,f.BLOCKS.HEADING_1,f.BLOCKS.HEADING_2,f.BLOCKS.HEADING_3,f.BLOCKS.HEADING_4,f.BLOCKS.HEADING_5,f.BLOCKS.HEADING_6,f.BLOCKS.OL_LIST,f.BLOCKS.UL_LIST,f.BLOCKS.LIST_ITEM,f.BLOCKS.HR,f.BLOCKS.QUOTE,f.BLOCKS.EMBEDDED_ENTRY,f.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[u.default.BOLD,u.default.CODE,u.default.ITALIC,u.default.UNDERLINE]}));c(L),L.V1_MARKS,L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var s=a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(s);var d=a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(d);var O=a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:f.BLOCKS.DOCUMENT,data:{},content:[{nodeType:f.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));c(O);var S=a((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++)if(t===e[r[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(E.INLINES,e.nodeType)},t.isBlock=function(e){return n(f.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));c(S),S.isText,S.isBlock,S.isInline;var _=a((function(e,t){var n=i&&i.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=i&&i.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=i&&i.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},u=i&&i.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},c=i&&i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return f.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return c(l).default}}),o(L,t),o(s,t),o(d,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return c(O).default}});var a=u(S);t.helpers=a}));c(_);var B,p,T=_.helpers,A=(_.EMPTY_DOCUMENT,_.MARKS),I=_.INLINES,y=_.BLOCKS,C=((B={})[y.PARAGRAPH]=function(e,t){return"<p>".concat(t(e.content),"</p>")},B[y.HEADING_1]=function(e,t){return"<h1>".concat(t(e.content),"</h1>")},B[y.HEADING_2]=function(e,t){return"<h2>".concat(t(e.content),"</h2>")},B[y.HEADING_3]=function(e,t){return"<h3>".concat(t(e.content),"</h3>")},B[y.HEADING_4]=function(e,t){return"<h4>".concat(t(e.content),"</h4>")},B[y.HEADING_5]=function(e,t){return"<h5>".concat(t(e.content),"</h5>")},B[y.HEADING_6]=function(e,t){return"<h6>".concat(t(e.content),"</h6>")},B[y.EMBEDDED_ENTRY]=function(e,t){return"<div>".concat(t(e.content),"</div>")},B[y.UL_LIST]=function(e,t){return"<ul>".concat(t(e.content),"</ul>")},B[y.OL_LIST]=function(e,t){return"<ol>".concat(t(e.content),"</ol>")},B[y.LIST_ITEM]=function(e,t){return"<li>".concat(t(e.content),"</li>")},B[y.QUOTE]=function(e,t){return"<blockquote>".concat(t(e.content),"</blockquote>")},B[y.HR]=function(){return"<hr/>"},B[y.TABLE]=function(e,t){return"<table>".concat(t(e.content),"</table>")},B[y.TABLE_ROW]=function(e,t){return"<tr>".concat(t(e.content),"</tr>")},B[y.TABLE_HEADER_CELL]=function(e,t){return"<th>".concat(t(e.content),"</th>")},B[y.TABLE_CELL]=function(e,t){return"<td>".concat(t(e.content),"</td>")},B[I.ASSET_HYPERLINK]=function(e){return D(I.ASSET_HYPERLINK,e)},B[I.ENTRY_HYPERLINK]=function(e){return D(I.ENTRY_HYPERLINK,e)},B[I.EMBEDDED_ENTRY]=function(e){return D(I.EMBEDDED_ENTRY,e)},B[I.HYPERLINK]=function(e,t){var n,r="string"==typeof e.data.uri?e.data.uri:"";return"<a href=".concat((n=r,'"'.concat(n.replace(/"/g,"&quot;"),'"')),">").concat(t(e.content),"</a>")},B),N=((p={})[A.BOLD]=function(e){return"<b>".concat(e,"</b>")},p[A.ITALIC]=function(e){return"<i>".concat(e,"</i>")},p[A.UNDERLINE]=function(e){return"<u>".concat(e,"</u>")},p[A.CODE]=function(e){return"<code>".concat(e,"</code>")},p[A.SUPERSCRIPT]=function(e){return"<sup>".concat(e,"</sup>")},p[A.SUBSCRIPT]=function(e){return"<sub>".concat(e,"</sub>")},p),D=function(e,t){return"<span>type: ".concat(u(e)," id: ").concat(u(t.data.target.sys.id),"</span>")};function K(e,t){var n=t.renderNode,r=t.renderMark;return e.map((function(e){return function(e,t){var n=t.renderNode,r=t.renderMark;if(T.isText(e)){var o=u(e.value);return e.marks.length>0?e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o):o}return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,(function(e){return K(e,{renderMark:r,renderNode:n})})):""}(e,{renderNode:n,renderMark:r})})).join("")}t.S=function(e,t){return void 0===t&&(t={}),e&&e.content?K(e.content,{renderNode:r(r({},C),t.renderNode),renderMark:r(r({},N),t.renderMark)}):""}},346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,a=Object.prototype,f=a.hasOwnProperty,E=a.propertyIsEnumerable,l="function"==typeof i,L="function"==typeof WeakMap,s=function(){if(L)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),d=function(n,r){var o=n.__proto__||c(n);if(!o)return t(null);var u=o.constructor;if(u===r.Object)return o===r.Object.prototype?{}:t(o);if(~e.call(u).indexOf("[native code]"))try{return new u}catch(e){}return t(o)},O=function(e,t,n,r){var o=d(e,t);for(var u in r.set(e,o),e)f.call(e,u)&&(o[u]=n(e[u],r));if(l)for(var c=i(e),a=0,L=c.length,s=void 0;a<L;++a)s=c[a],E.call(e,s)&&(o[s]=n(e[s],r));return o},S=function(e,t,n,c){var a=d(e,t);c.set(e,a);for(var f=l?u(e).concat(i(e)):u(e),E=0,L=f.length,s=void 0,O=void 0;E<L;++E)if("callee"!==(s=f[E])&&"caller"!==s)if(O=o(e,s)){O.get||O.set||(O.value=n(e[s],c));try{r(a,s,O)}catch(e){a[s]=O.value}}else a[s]=n(e[s],c);return a},_=Array.isArray,B=Object.getPrototypeOf,p=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function T(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||p,o=n?S:O,u=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var i,c,a,f=e.__proto__||B(e),E=f&&f.constructor;if(!E||E===r.Object)return o(e,r,u,t);if(_(e)){if(n)return S(e,r,u,t);i=new E,t.set(e,i);for(var l=0,L=e.length;l<L;++l)i[l]=u(e[l],t);return i}if(e instanceof r.Date)return new E(e.getTime());if(e instanceof r.RegExp)return(i=new E(e.source,e.flags||(c=e,a="",c.global&&(a+="g"),c.ignoreCase&&(a+="i"),c.multiline&&(a+="m"),c.unicode&&(a+="u"),c.sticky&&(a+="y"),a))).lastIndex=e.lastIndex,i;if(r.Map&&e instanceof r.Map)return i=new E,t.set(e,i),e.forEach((function(e,n){i.set(n,u(e,t))})),i;if(r.Set&&e instanceof r.Set)return i=new E,t.set(e,i),e.forEach((function(e){i.add(u(e,t))})),i;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new E(e.length),t.set(e,i),e.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return i=new E(e.buffer.slice(0)),t.set(e,i),i;if(e instanceof r.ArrayBuffer)return i=e.slice(0),t.set(e,i),i}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:o(e,r,u,t)};return u(e,s())}return T.default=T,T.strict=function(e,t){return T(e,{isStrict:!0,realm:t?t.realm:void 0})},T}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{Renderer:()=>L});var e=n(135),t=n(346),o=n.n(t),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},a=function(e){return e&&e.sys&&"Link"===e.sys.type},f=function(e){return e.type+"!"+e.id},E=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t};const l=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),u=[].concat(i(n.items),i(r)),l=new Map(u.map((function(e){return[f(e.sys),e]})));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,E(n,a,(function(e){return function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,u=f({type:r,id:o});return e.get(u)||c}(e,t);return r===c?n?r:t:r}(l,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items};class L{static render(t){let n=l(t)[0].fields.contentstext;return(0,e.S)(n,{renderNode:{"embedded-asset-block":e=>{const t=e?.data?.target?.fields?.file?.url;if(void 0!==t)return`<img src="https:${t}" alt="${e.data.target.fields.title}" />`}}})}}})(),Renderer=r})();
