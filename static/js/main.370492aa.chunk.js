(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(45)},34:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=(a(34),a(2)),u=a(13),o=a(19),s=a(18),m=a(8),p=r.a.createContext();function h(){var e=r.a.useContext(p);if(!e)throw new Error("useCart must be used within a CartProvider");return e}function d(e){var t=r.a.useState([]),a=Object(m.a)(t,2),n=a[0],c=a[1],l=r.a.useMemo(function(){return[n,c]},[n]);return r.a.createElement(p.Provider,Object.assign({value:l},e))}function v(e,t,a){var n=t.find(function(t){return t.id===e.id}),r=t.filter(function(t){return t.id!==e.id});n?(n.count+=1,a(function(e){return[].concat(Object(s.a)(r),[n])})):a(function(t){return[].concat(Object(s.a)(t),[Object(o.a)({},e,{count:1})])})}var b=a(12),f=a.n(b),E=a(16),k=a(6),y=a(7),g=a(10),N=a(9),j=a(11);var w=function(e){var t=e.item,a=h(),n=Object(m.a)(a,2),c=n[0],l=n[1];return r.a.createElement("button",{className:"button",onClick:function(e){v(t,c,l),e.preventDefault()}},"Add to cart ",t.price)};var O=function(e){var t=e.item,a=t.name,n=(t.description,t.price),c=t.id,l=t.image;return r.a.createElement("li",{className:"item"},r.a.createElement(i.b,{to:"/item/".concat(c)},r.a.createElement("h2",null,a),r.a.createElement("img",{src:"".concat("/accessibility-patterns","/images/").concat(l.id),alt:l.alt,className:"item--image"}),r.a.createElement("p",null,"Price: ",n),r.a.createElement(w,{item:t})))},C=[{id:0,name:"Blue shoe",description:"A blue sailor shoe with blue white checked pattern in the back",price:300,type:"shoe",image:{id:"blue-01.jpeg",alt:"A blue shoe with white laces"}},{id:1,name:"Red shoe",description:"A classic vans shoe in red fabric, with white stiching. Low cut and flexible flat rubber sole.",price:200,type:"shoe",image:{id:"red-3.jpg",alt:"A red shoe with white laces"}},{id:2,name:"Yellow shoe",description:"A classic vans shoe in yellow fabric, with white stiching. Low cut and flexible flat rubber sole.",price:100,type:"shoe",image:{id:"yellow-2.jpg",alt:"A yellow shoe with white laces"}},{id:3,name:"Blue sock",description:"A thin blue sock, with no rubber band",price:300,type:"sock",image:{id:"blue_sock.jpg",alt:"A man with a blue sock"}},{id:4,name:"Red sock",description:"a red adidas football sock, with white detials. The sock is of a thick material and goes up to the knee",price:200,type:"sock",image:{id:"red_sock.jpg",alt:"A man with a blue sock"}},{id:5,name:"Yellow sock",description:"A thin yellow sock, with no rubber band",price:100,type:"sock",image:{id:"yellow_sock.jpg",alt:"A man with a blue sock"}}],x=new(function(){function e(){Object(k.a)(this,e)}return Object(y.a)(e,[{key:"listItems",value:function(e){if(e){var t=C.filter(function(t){return t.type===e});return Promise.resolve(t)}return Promise.resolve(C)}},{key:"getItem",value:function(e){var t=C.find(function(t){return t.id===e});return t?Promise.resolve(t):Promise.reject("Can not find item")}}]),e}()),D=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(g.a)(this,Object(N.a)(t).call(this,e))).state={items:[]},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.type;this.setItems(e)}},{key:"componentDidUpdate",value:function(){var e=Object(E.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.match.params.type!==t.match.params.type&&(a=this.props.match.params.type,this.setItems(a));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setItems",value:function(){var e=Object(E.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.listItems(t);case 3:a=e.sent,this.setState({items:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.props.history.push("/404");case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Shoes:"),r.a.createElement("ul",{className:"itemlist"},this.state.items.map(function(e){return r.a.createElement(O,{item:e})})))}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(g.a)(this,Object(N.a)(t).call(this,e))).state={},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=parseInt(this.props.match.params.id,10),e.next=4,x.getItem(t);case 4:a=e.sent,this.setState({item:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.props.history.push("/404");case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.item)return r.a.createElement("h2",null,"Loading");var e=this.state.item,t=e.name,a=e.image,n=e.description,c=e.price;return r.a.createElement("section",{className:"item"},r.a.createElement("h2",null,t),r.a.createElement("img",{className:"item--image",src:"".concat("/accessibility-patterns","/images/").concat(a.id),alt:a.alt}),r.a.createElement("p",null,n),r.a.createElement("p",null,"Price: ",c),r.a.createElement(w,{item:this.state.item}))}}]),t}(r.a.Component);var q=function(){return r.a.createElement("h1",null,"Not Found")};var F=function(e){var t=e.adjustable,a=void 0===t||t,n=h(),c=Object(m.a)(n,2),l=c[0],i=c[1],u=l.reduce(function(e,t){return e+t.price},0);return r.a.createElement("section",{className:"checkout"},r.a.createElement("table",{className:"checkout--table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"))),r.a.createElement("tbody",null,l.map(function(e){return r.a.createElement("tr",{className:"checkout-item",key:"checkout-cart-".concat(e.id)},r.a.createElement("td",{className:"checkout--cell"},e.name),r.a.createElement("td",{className:"checkout--cell"},e.price),r.a.createElement("td",{className:"checkout--cell"},r.a.createElement("span",{className:"checkout--cell"},e.count),a?r.a.createElement("button",{className:"checkout--cell--button",onClick:function(){return v(e,l,i)}},"+"):null,a?r.a.createElement("button",{className:"checkout--cell--button",onClick:function(){return function(e,t,a){var n=t.find(function(t){return t.id===e.id}),r=t.filter(function(t){return t.id!==e.id});n&&(1===n.count?a(function(e){return Object(s.a)(r)}):(n.count-=1,a(function(e){return[].concat(Object(s.a)(r),[n])})))}(e,l,i)}},"-"):null))}))),r.a.createElement("p",{className:"checkout--total"},"Subtotal: ",u))};var I=function(){var e=h(),t=Object(m.a)(e,1)[0];return t.reduce(function(e,t){return e+t.price},0),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"What is in your cart"),0===t.length?r.a.createElement("p",null,"Your cart is empty"):r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(i.b,{className:"button button__full",to:"/payment/contact"},"go pay")))},S=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(g.a)(this,Object(N.a)(t).call(this,e))).state={},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))}}]),t}(r.a.Component),P=a(17),z=a(15);var L=function(e){var t=e.error,a=Object.keys(t);return 0===a.length?null:r.a.createElement("section",{class:"error-container",role:"error","aria-relevant":"all"},r.a.createElement("h3",null,"Oops you missed some information or something is wrong"),r.a.createElement("p",null,r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:"error-key-".concat(e)},t[e])}))))};var _=function(e){var t,a=e.email,n=e.updateData,c=e.error,l=e.validate;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Fill in contact information:"),r.a.createElement(L,{error:c}),r.a.createElement("label",{className:"checkout--input"},"Email",r.a.createElement("input",(t={type:"text",value:a,"aria-required":"true"},Object(z.a)(t,"type","text"),Object(z.a)(t,"onChange",function(e){return n("email",e.target.value)}),t)),r.a.createElement("p",{className:"checkout--error",role:"error"},c.email)),r.a.createElement("button",{className:"button",onClick:function(){return l(["email"],"address")}},"Next"))};var B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Fill in delivery information:"),r.a.createElement(L,{error:e.error}),r.a.createElement("label",{className:"checkout--input"},"Firstname",r.a.createElement("input",{type:"text","aria-required":"true",value:e.firstname,onChange:function(t){return e.updateData("firstname",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.firstname)),r.a.createElement("label",{className:"checkout--input"},"Lastname",r.a.createElement("input",{type:"text","aria-required":"true",value:e.lastname,onChange:function(t){return e.updateData("lastname",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.lastname)),r.a.createElement("label",{className:"checkout--input"},"Adress",r.a.createElement("input",{type:"text","aria-required":"true",value:e.address,onChange:function(t){return e.updateData("address",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.address)),r.a.createElement("label",{className:"checkout--input"},"City",r.a.createElement("input",{type:"text","aria-required":"true",value:e.city,onChange:function(t){return e.updateData("city",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.city)),r.a.createElement("label",{className:"checkout--input"},"Zipcode",r.a.createElement("input",{type:"number","aria-required":"true",value:e.zipcode,onChange:function(t){return e.updateData("zipcode",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.zipcode)),r.a.createElement("label",{className:"checkout--input"},"Country",r.a.createElement("input",{type:"text","aria-required":"true",value:e.country,onChange:function(t){return e.updateData("country",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.country)),r.a.createElement("button",{className:"button",onClick:function(){return e.validate(["firstname","lastname","address","city","zipcode","country"],"creditcard")}},"Next"))};var M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Fill in payment detauls:"),r.a.createElement(L,{error:e.error}),r.a.createElement("label",{className:"checkout--input"},"Creditcard number:",r.a.createElement("input",{type:"number","aria-required":"true",value:e.creditcardnumber,onChange:function(t){return e.updateData("creditcardnumber",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.creditcardnumber)),r.a.createElement("label",{className:"checkout--input"},"Month:",r.a.createElement("input",{type:"number","aria-required":"true",value:e.month,onChange:function(t){return e.updateData("month",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.month)),r.a.createElement("label",{className:"checkout--input"},"Year:",r.a.createElement("input",{type:"number","aria-required":"true",value:e.year,onChange:function(t){return e.updateData("year",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.year)),r.a.createElement("label",{className:"checkout--input"},"CVC:",r.a.createElement("input",{type:"number","aria-required":"true",value:e.cvc,onChange:function(t){return e.updateData("cvc",t.target.value)}}),r.a.createElement("p",{className:"checkout--error"},e.error.cvc)),r.a.createElement("button",{className:"button",onClick:function(){return e.validate(["creditcardnumber","month","year","cvc"],"receipt")}},"Pay"))};var R=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"receipt"),r.a.createElement("p",null,"Also sent to ",e.email),r.a.createElement(F,{adjustable:!1}),r.a.createElement(i.b,{to:"/",className:"button"},"Continue shopping"))},Y=function(e){function t(){var e;return Object(k.a)(this,t),(e=Object(g.a)(this,Object(N.a)(t).call(this))).state={email:"",firstname:"",lastname:"",address:"",city:"",zipcode:"",country:"",creditcardnumber:"",month:"",year:"",cvc:"",error:{}},e.updateData=e.updateData.bind(Object(P.a)(e)),e.validate=e.validate.bind(Object(P.a)(e)),e}return Object(j.a)(t,e),Object(y.a)(t,[{key:"updateData",value:function(e,t){var a={};a[e]=t,this.setState(a)}},{key:"validate",value:function(e,t){var a=this,n={};e.map(function(e){n=Object(o.a)({},n,a.validateData(e,a.state[e]))}),this.setState({error:n}),0===Object.keys(n).length&&this.props.history.push(t)}},{key:"validateData",value:function(e,t){switch(e){case"zipcode":case"creditcardnumber":case"month":case"year":case"cvc":var a=this.validateNumber(e,t);if(a)return a;break;case"email":var n=this.validateEmail(e,t);if(n)return n;break;default:var r=this.validateRequire(e,t);if(r)return r}return null}},{key:"validateNumber",value:function(e,t){var a={};try{return NaN===parseInt(t,10)||0===t.length?(a[e]="Needs to be a valid number",a):null}catch(n){return a[e]="Needs to be a valid number",a}return null}},{key:"validateRequire",value:function(e,t){var a={};if(!t||0===t.length)return a[e]="This is required",a}},{key:"validateEmail",value:function(e,t){var a={};if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))return a[e]="The email address is invalid",a}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{path:"".concat(this.props.match.path,"/contact"),render:function(t){return r.a.createElement(_,Object.assign({},t,e.state,{updateData:e.updateData,validate:e.validate}))},exact:!0}),r.a.createElement(u.a,{path:"".concat(this.props.match.path,"/address"),exact:!0,render:function(t){return r.a.createElement(B,Object.assign({},t,e.state,{updateData:e.updateData,validate:e.validate}))}}),r.a.createElement(u.a,{path:"".concat(this.props.match.path,"/creditcard"),exact:!0,render:function(t){return r.a.createElement(M,Object.assign({},t,e.state,{updateData:e.updateData,validate:e.validate}))}}),r.a.createElement(u.a,{path:"".concat(this.props.match.path,"/receipt"),exact:!0,render:function(t){return r.a.createElement(R,Object.assign({},t,e.state,{updateData:e.updateData,validate:e.validate}))}}))}}]),t}(r.a.Component);var T=function(){var e=h(),t=Object(m.a)(e,1)[0].reduce(function(e,t){return e+t.count},0);return r.a.createElement(i.b,{to:"/checkout"},r.a.createElement("div",null,"Items in cart ",t))};var W=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"nav--item"},r.a.createElement(i.b,{to:"/"},"Store")),r.a.createElement("li",{className:"nav--item"},r.a.createElement(i.b,{to:"/filter/shoe"},"Shoes")),r.a.createElement("li",{className:"nav--item"},r.a.createElement(i.b,{to:"/filter/sock"},"Socks")),r.a.createElement("li",{className:"nav--right"},r.a.createElement(T,null))))};var Z=function(){return r.a.createElement(d,null,r.a.createElement(i.a,{basename:"/accessibility-patterns"},r.a.createElement(W,null),r.a.createElement(u.a,{path:"/",exact:!0,component:D}),r.a.createElement(u.a,{path:"/filter/:type",exact:!0,component:D}),r.a.createElement(u.a,{path:"/item/:id",exact:!0,component:A}),r.a.createElement(u.a,{path:"/404",exact:!0,component:q}),r.a.createElement(u.a,{path:"/checkout",component:S}),r.a.createElement(u.a,{path:"/payment",component:Y})))};a(44);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.370492aa.chunk.js.map