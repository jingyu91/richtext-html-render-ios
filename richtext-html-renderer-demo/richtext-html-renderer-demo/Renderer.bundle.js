/*! For license information please see Renderer.bundle.js.LICENSE.txt */
var Renderer;(()=>{"use strict";var e={135:(e,t,n)=>{var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=/["'&<>]/,E=function(e){var t,n=""+e,r=o.exec(n);if(!r)return n;var E="",c=0,u=0;for(c=r.index;c<n.length;c++){switch(n.charCodeAt(c)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}u!==c&&(E+=n.substring(u,c)),u=c+1,E+=t}return u!==c?E+n.substring(u,c):E},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function L(e,t){return e(t={exports:{}},t.exports),t.exports}var a=L((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}));u(a),a.BLOCKS;var i=L((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"}));u(i),i.INLINES;var S=L((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));u(S);var _=L((function(e,t){var n,r=c&&c.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,E=t.length;o<E;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var E=o(S);t.TOP_LEVEL_BLOCKS=[a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET,a.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[a.BLOCKS.TABLE,a.BLOCKS.TABLE_ROW,a.BLOCKS.TABLE_CELL,a.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[a.BLOCKS.HR,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[a.BLOCKS.OL_LIST]=[a.BLOCKS.LIST_ITEM],n[a.BLOCKS.UL_LIST]=[a.BLOCKS.LIST_ITEM],n[a.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[a.BLOCKS.QUOTE]=[a.BLOCKS.PARAGRAPH],n[a.BLOCKS.TABLE]=[a.BLOCKS.TABLE_ROW],n[a.BLOCKS.TABLE_ROW]=[a.BLOCKS.TABLE_CELL,a.BLOCKS.TABLE_HEADER_CELL],n[a.BLOCKS.TABLE_CELL]=[a.BLOCKS.PARAGRAPH],n[a.BLOCKS.TABLE_HEADER_CELL]=[a.BLOCKS.PARAGRAPH],n),t.HEADINGS=[a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([a.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[a.BLOCKS.DOCUMENT,a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.LIST_ITEM,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[E.default.BOLD,E.default.CODE,E.default.ITALIC,E.default.UNDERLINE]}));u(_),_.V1_MARKS,_.V1_NODE_TYPES,_.TEXT_CONTAINERS,_.HEADINGS,_.CONTAINERS,_.VOID_BLOCKS,_.TABLE_BLOCKS,_.LIST_ITEM_BLOCKS,_.TOP_LEVEL_BLOCKS;var O=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(O);var d=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));u(d);var B=L((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:a.BLOCKS.DOCUMENT,data:{},content:[{nodeType:a.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));u(B);var l=L((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++)if(t===e[r[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(i.INLINES,e.nodeType)},t.isBlock=function(e){return n(a.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));u(l),l.isText,l.isBlock,l.isInline;var f=L((function(e,t){var n=c&&c.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=c&&c.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=c&&c.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},E=c&&c.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},u=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return a.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return i.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return u(S).default}}),o(_,t),o(O,t),o(d,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return u(B).default}});var L=E(l);t.helpers=L}));u(f);var T,I,C=f.helpers,A=(f.EMPTY_DOCUMENT,f.MARKS),N=f.INLINES,D=f.BLOCKS,K=((T={})[D.PARAGRAPH]=function(e,t){return"<p>".concat(t(e.content),"</p>")},T[D.HEADING_1]=function(e,t){return"<h1>".concat(t(e.content),"</h1>")},T[D.HEADING_2]=function(e,t){return"<h2>".concat(t(e.content),"</h2>")},T[D.HEADING_3]=function(e,t){return"<h3>".concat(t(e.content),"</h3>")},T[D.HEADING_4]=function(e,t){return"<h4>".concat(t(e.content),"</h4>")},T[D.HEADING_5]=function(e,t){return"<h5>".concat(t(e.content),"</h5>")},T[D.HEADING_6]=function(e,t){return"<h6>".concat(t(e.content),"</h6>")},T[D.EMBEDDED_ENTRY]=function(e,t){return"<div>".concat(t(e.content),"</div>")},T[D.UL_LIST]=function(e,t){return"<ul>".concat(t(e.content),"</ul>")},T[D.OL_LIST]=function(e,t){return"<ol>".concat(t(e.content),"</ol>")},T[D.LIST_ITEM]=function(e,t){return"<li>".concat(t(e.content),"</li>")},T[D.QUOTE]=function(e,t){return"<blockquote>".concat(t(e.content),"</blockquote>")},T[D.HR]=function(){return"<hr/>"},T[D.TABLE]=function(e,t){return"<table>".concat(t(e.content),"</table>")},T[D.TABLE_ROW]=function(e,t){return"<tr>".concat(t(e.content),"</tr>")},T[D.TABLE_HEADER_CELL]=function(e,t){return"<th>".concat(t(e.content),"</th>")},T[D.TABLE_CELL]=function(e,t){return"<td>".concat(t(e.content),"</td>")},T[N.ASSET_HYPERLINK]=function(e){return p(N.ASSET_HYPERLINK,e)},T[N.ENTRY_HYPERLINK]=function(e){return p(N.ENTRY_HYPERLINK,e)},T[N.EMBEDDED_ENTRY]=function(e){return p(N.EMBEDDED_ENTRY,e)},T[N.HYPERLINK]=function(e,t){var n,r="string"==typeof e.data.uri?e.data.uri:"";return"<a href=".concat((n=r,'"'.concat(n.replace(/"/g,"&quot;"),'"')),">").concat(t(e.content),"</a>")},T),s=((I={})[A.BOLD]=function(e){return"<b>".concat(e,"</b>")},I[A.ITALIC]=function(e){return"<i>".concat(e,"</i>")},I[A.UNDERLINE]=function(e){return"<u>".concat(e,"</u>")},I[A.CODE]=function(e){return"<code>".concat(e,"</code>")},I[A.SUPERSCRIPT]=function(e){return"<sup>".concat(e,"</sup>")},I[A.SUBSCRIPT]=function(e){return"<sub>".concat(e,"</sub>")},I),p=function(e,t){return"<span>type: ".concat(E(e)," id: ").concat(E(t.data.target.sys.id),"</span>")};function R(e,t){var n=t.renderNode,r=t.renderMark;return e.map((function(e){return function(e,t){var n=t.renderNode,r=t.renderMark;if(C.isText(e)){var o=E(e.value);return e.marks.length>0?e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o):o}return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,(function(e){return R(e,{renderMark:r,renderNode:n})})):""}(e,{renderNode:n,renderMark:r})})).join("")}t.S=function(e,t){return void 0===t&&(t={}),e&&e.content?R(e.content,{renderNode:r(r({},K),t.renderNode),renderMark:r(r({},s),t.renderMark)}):""}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var E=t[r]={exports:{}};return e[r](E,E.exports,n),E.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{Renderer:()=>t});var e=n(135);class t{static render(t){return(0,e.S)(t)}}})(),Renderer=r})();