(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{279:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("6f7c2ea5",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r.r(e);var n={props:{items:{},title:String}},o=(r(281),r(20)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"n-products"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("ul",t._l(t.items,(function(r){return e("li",{key:r.id},[e("nuxt-link",{staticClass:"ds-nuxt-link_disable",attrs:{to:"/catalog/".concat(r.id)}},[e("div",[e("div",[e("img",{attrs:{src:r.thumbnail,alt:""}})]),t._v(" "),e("b",[t._v("Производитель:")]),t._v(" "+t._s(r.brand)+"\n                    "),e("br"),t._v(" "),e("b",[t._v("Модель:")]),t._v(" "+t._s(r.title)+"\n                    "),e("br"),t._v(" "),e("b",[t._v("Рейтинг:")]),t._v(" "+t._s(r.rating)+"\n                ")])])],1)})),0)])}),[],!1,null,"0461675e",null);e.default=component.exports},281:function(t,e,r){"use strict";r(279)},282:function(t,e,r){var n=r(82)((function(i){return i[1]}));n.push([t.i,".n-products ul[data-v-0461675e]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(3,1fr)}.n-products li[data-v-0461675e]{border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.1);list-style-type:none;padding:20px}.n-products li[data-v-0461675e]:hover{box-shadow:0 2px 10px rgba(95,190,5,.925)}.n-products li img[data-v-0461675e]{border-radius:10px;height:150px;-o-object-fit:cover;object-fit:cover;width:100%}.n-products h1[data-v-0461675e]{width:20%}",""]),n.locals={},t.exports=n},295:function(t,e,r){"use strict";r.r(e);r(38),r(14);var n={components:{productsList:r(280).default},layout:"sample",computed:{items:function(){return this.$store.state.products.products.filter((function(t){return t})).reverse()}}},o=r(20),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"wrapper-container"},[t("products-list",{attrs:{items:this.items,title:"Каталог"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsList:r(280).default})}}]);