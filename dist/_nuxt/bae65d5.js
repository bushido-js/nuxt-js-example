(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("6f2df8b1",content,!0,{sourceMap:!1})},191:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("32e4a1f4",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";var r=n(10),o=(n(55),n(14),{created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dummyjson.com/products");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.addProducts(r.products);case 7:case"end":return e.stop()}}),e)})))()},methods:{addProducts:function(t){this.$store.state.products.products.length||this.$store.commit("products/addProducts",t)}}}),c=n(20),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("ds-header"),t._v(" "),e("Nuxt"),t._v(" "),e("ds-footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{DsHeader:n(278).default,DsFooter:n(277).default})},199:function(t,e,n){"use strict";var r=n(20),component=Object(r.a)({},(function(){return(0,this._self._c)("div",[this._v("\n    Шаблон не выбран\n")])}),[],!1,null,null,null);e.a=component.exports},201:function(t,e,n){n(202),t.exports=n(203)},242:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;e.getters["auth/isAuthenticated"]||n("/")}},269:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("2c6794ac",content,!0,{sourceMap:!1})},270:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,'*,:after,:before{box-sizing:border-box}body,html{font-family:"Consolas",sans-serif}body,html,ul{margin:0;padding:0}.wrapper-container{margin:0 auto;width:80%}.ds-nuxt-link{color:#000;-webkit-text-decoration:none;text-decoration:none}.ds-nuxt-link:hover{color:#74b908}.ds-nuxt-link_disable{color:#000;-webkit-text-decoration:none;text-decoration:none}',""]),r.locals={},t.exports=r},271:function(t,e,n){t.exports=n.p+"img/semyanich.108ecb4.svg"},272:function(t,e,n){"use strict";n(190)},273:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,".header__title{align-items:center;background:hsla(0,0%,9%,.122);display:flex;justify-content:space-around}.header__title img{height:70px}.header__title-description{color:#252525;font-size:20px}.header__menu{background:#252525;height:50px}.header__link,.header__menu{align-items:center;display:flex;justify-content:center}.header__link{border-right:1px solid #555;color:#fff;font-size:19px;height:100%;padding:0 10px;-webkit-text-decoration:none;text-decoration:none;width:100%}.header__link:last-child{border:none}.header__link:hover{background:#74b908}",""]),r.locals={},t.exports=r},274:function(t,e,n){"use strict";n(191)},275:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,"footer[data-v-5cbdc3a4]{align-items:center;background:#252525;color:#fff;display:flex;font-size:150px;height:250px;justify-content:center;margin-top:40px}",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"getters",(function(){return l}));var r=n(200),o=(n(38),n(14),function(){return{products:[]}}),c={addProducts:function(t,e){var n;(n=t.products).push.apply(n,Object(r.a)(e))}},l={getCurrentProduct:function(t,e){return t.products.filter((function(t){return t.id==e}))},getListProducts:function(t){return t.products}}},277:function(t,e,n){"use strict";n.r(e);var r={},o=(n(274),n(20)),component=Object(o.a)(r,(function(){return(0,this._self._c)("footer",[this._v(" ЭТО ФУТЕР ")])}),[],!1,null,"5cbdc3a4",null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);n(272);var r=n(20),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"header__title"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(271),alt:""}})]),t._v(" "),e("div",{staticClass:"header__title-description"},[t._v("\n            IT_WORKSHOPS\n        ")])],1),t._v(" "),e("div",{staticClass:"header__menu"},[e("nuxt-link",{staticClass:"header__link ds-text-1",attrs:{to:"/catalog"}},[t._v("Каталог")]),t._v(" "),e("nuxt-link",{staticClass:"header__link ds-text-1",attrs:{to:"/delivery"}},[t._v("Доставка")]),t._v(" "),e("nuxt-link",{staticClass:"header__link ds-text-1",attrs:{to:"/news"}},[t._v("Новости")])],1)])}),[],!1,null,null,null);e.default=component.exports},37:function(t,e,n){"use strict";var r={props:["error"]},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[404===t.error.statusCode?e("h1",{staticStyle:{color:"red"}},[t._v("Страницы нет чувачок")]):e("h1",[t._v("Вышло недоразуме́ние / ошибка ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Уйти домой ")])],1)}),[],!1,null,null,null);e.a=component.exports}},[[201,8,1,9]]]);