(function(e){function t(t){for(var a,d,c=t[0],o=t[1],i=t[2],u=0,l=[];u<c.length;u++)d=c[u],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&l.push(n[d][0]),n[d]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=d(d.s=s[0]))}return e}var a={},n={app:0},r=[];function d(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,d),s.l=!0,s.exports}d.m=e,d.c=a,d.d=function(e,t,s){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(d.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(s,a,function(t){return e[t]}.bind(null,a));return s},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/wavelength/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},4560:function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("9c30"),r=(s("51de"),s("e094"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("sin-chart")],1)}),d=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"chart"},[s("line-chart",{attrs:{"chart-data":e.datacollection,options:e.options}})],1),s("div",{staticClass:"slider-holder"},[s("vue-slider",{attrs:{min:0,max:25,interval:1,marks:!1,"tooltip-placement":"bottom","tooltip-formatter":e.formatter},on:{change:function(t){return e.updateChart()}},model:{value:e.frequency,callback:function(t){e.frequency=t},expression:"frequency"}})],1),s("div",[s("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.getNewRandom()}}},[e._v("Get new random")]),s("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return e.toggleRandomDataSet()}}},[e._v("Toggle random")]),s("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.getNewWords()}}},[e._v("New card")])],1),this.randomWave.hidden?e._e():s("div",[s("p",[e._v("Wave difference: "+e._s(4*this.getFrequencyDifference())+" %, points: "+e._s(this.getGuessResult()))])]),s("div",{staticClass:"card-holder"},[s("md-card",{staticClass:"md-primary"},[s("md-card-header",[s("md-card-header-text",[s("div",{staticClass:"md-title"},[e._v(e._s(this.words[0]))])])],1)],1),s("md-card",{staticClass:"md-accent"},[s("md-card-header",[s("md-card-header-text",[s("div",{staticClass:"md-title"},[e._v(e._s(this.words[1]))])])],1)],1)],1)])},o=[],i=s("b85c"),f=(s("4e82"),s("1fca")),u=f["b"].reactiveProp,l={extends:f["a"],mixins:[u],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},j=s("4971"),b=s.n(j),h=(s("24df"),[["Cool","Uncool"],["Bad person","Good person"]]),m={components:{LineChart:l,VueSlider:b.a},data:function(){return{datacollection:{},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},tooltips:{enabled:!1}},points:this.getPoints(1e3),frequency:0,formatter:function(e){return 4*e+" %"},randomFrequency:0,randomWave:{},cards:h,usedCards:[],words:[]}},mounted:function(){this.getNewRandom(),this.getNewWords()},methods:{updateChart:function(){this.datacollection={labels:this.points,datasets:[{label:"Guessed wave",borderColor:"#f87979",backgroundColor:"rgba(0,0,0,0)",data:this.getSin(this.points,this.frequency),pointRadius:0,borderWidth:3},this.randomWave]}},getNewRandom:function(){this.randomFrequency=Math.floor(26*Math.random()),this.randomWave={label:"Random wave",borderColor:"rgba(0,100,200, 1)",backgroundColor:"rgba(0,0,0,0)",data:this.getSin(this.points,this.randomFrequency),pointRadius:0,borderWidth:7,hidden:!1},this.updateChart()},getNewWords:function(){return 0===this.cards.length&&(this.cards=this.usedCards,this.shuffleCards(),this.usedCards=[]),this.words=this.cards.pop(),this.usedCards.push(this.words),this.words},shuffleCards:function(){this.cards.sort((function(){return Math.random()-.5}))},toggleRandomDataSet:function(){this.randomWave.hidden=!this.randomWave.hidden,this.updateChart()},getSin:function(e,t){var s,a=[],n=Object(i["a"])(e);try{for(n.s();!(s=n.n()).done;){var r=s.value;a.push(Math.sin(t*r/2))}}catch(d){n.e(d)}finally{n.f()}return a},getPoints:function(e){for(var t=[],s=0;s<e;s++)t.push(2*Math.PI/e*s);return t.push(2*Math.PI),t},getFrequencyDifference:function(){return Math.abs(this.randomFrequency-this.frequency)},getGuessResult:function(){var e=this.getFrequencyDifference();return e<3?3-e:0}}},p=m,v=(s("d66f"),s("2877")),g=Object(v["a"])(p,c,o,!1,null,null,null),y=g.exports,k={name:"App",components:{SinChart:y}},w=k,C=(s("034f"),Object(v["a"])(w,r,d,!1,null,null,null)),z=C.exports;a["default"].config.productionTip=!1,a["default"].use(n["MdButton"]),a["default"].use(n["MdCard"]),new a["default"]({render:function(e){return e(z)}}).$mount("#app")},"85ec":function(e,t,s){},d66f:function(e,t,s){"use strict";s("4560")}});
//# sourceMappingURL=app.64188710.js.map