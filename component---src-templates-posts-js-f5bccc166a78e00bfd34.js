webpackJsonp([0xcb0f60301f7b],{284:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(92),d=l(r),f=function(e){return e.test?u.default.createElement("span",null,e.text):u.default.createElement(d.default,{to:e.url},e.text)},s=function(e){var t=(e.data,e.pathContext),a=t.group,l=t.index,n=t.first,r=t.last,s=t.pageCount,i=t.pathPrefix,c=l-1==1?"":(l-1).toString(),o=(l+1).toString();return u.default.createElement("div",null,u.default.createElement("h4",null,s," Pages"),a.map(function(e){var t=e.node;return u.default.createElement("div",{key:t.id,className:"blogListing"},u.default.createElement("div",{className:"date"},t.fields.date),u.default.createElement(d.default,{className:"blogUrl",to:"/"+i+"/"+t.fields.slug},t.frontmatter.title),u.default.createElement("div",null,t.excerpt))}),u.default.createElement("div",{className:"previousLink"},u.default.createElement(f,{test:n,url:"/"+i+"/"+c,text:"Go to Previous Page"})),u.default.createElement("div",{className:"nextLink"},u.default.createElement(f,{test:r,url:"/"+i+"/"+o,text:"Go to Next Page"})))};t.default=s,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-posts-js-f5bccc166a78e00bfd34.js.map