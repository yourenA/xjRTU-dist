(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"07oh":function(t,e,a){"use strict";var n=a("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.query=d,e.remove=i,e.resetPassword=f,e.add=w,e.edit=y,e.editStatus=x,e.editApply=b;var r=n(a("Ico4")),u=n(a("mK77")),s=n(a("BG4o")),c=n(a("UWy3")),l=n(a("t3Un"));function d(t){return o.apply(this,arguments)}function o(){return o=(0,c.default)(r.default.mark(function t(e){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.endpoint_id,a=(0,s.default)(e,["endpoint_id"]),t.abrupt("return",(0,l.default)("/users",{method:"GET",params:(0,u.default)({},a)}));case 2:case"end":return t.stop()}},t)})),o.apply(this,arguments)}function i(t){return p.apply(this,arguments)}function p(){return p=(0,c.default)(r.default.mark(function t(e){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,t.abrupt("return",(0,l.default)("/users/".concat(a),{method:"DELETE"}));case 2:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,c.default)(r.default.mark(function t(e){var a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,console.log("id",a),t.abrupt("return",(0,l.default)("/users/".concat(a,"/password"),{method:"PUT"}));case 3:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function w(t){return v.apply(this,arguments)}function v(){return v=(0,c.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.default)("/users",{method:"POST",data:(0,u.default)({},e)}));case 1:case"end":return t.stop()}},t)})),v.apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return m=(0,c.default)(r.default.mark(function t(e){var a,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,n=(0,s.default)(e,["id"]),t.abrupt("return",(0,l.default)("/users/".concat(a),{method:"PUT",data:(0,u.default)({},n)}));case 2:case"end":return t.stop()}},t)})),m.apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return k=(0,c.default)(r.default.mark(function t(e){var a,n,u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.data,n=a.id,u=a.status,console.log("id",n),t.abrupt("return",(0,l.default)("/users/".concat(n,"/status"),{method:"PUT",data:{status:u}}));case 3:case"end":return t.stop()}},t)})),k.apply(this,arguments)}function b(t){return g.apply(this,arguments)}function g(){return g=(0,c.default)(r.default.mark(function t(e){var a,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,n=e.bind_status,console.log("id",a),t.abrupt("return",(0,l.default)("/users/".concat(a,"/bind_status"),{method:"PUT",data:{bind_status:Number(n)}}));case 3:case"end":return t.stop()}},t)})),g.apply(this,arguments)}},WHZz:function(t,e,a){"use strict";var n=a("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("rXjv")),u=n(a("mK77")),s=n(a("Ico4")),c=a("07oh"),l={namespace:"user_manage",state:{data:[],meta:{total:0,per_page:0,current_page:1},loading:!0},effects:{fetch:s.default.mark(function t(e,a){var n,r,u,l,d;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,l=a.put,t.next=4,l({type:"changeLoading",payload:!0});case 4:return t.next=6,u(c.query,n);case 6:if(d=t.sent,console.log(d),200!==d.status){t.next=14;break}return t.next=11,l({type:"save",payload:d.data});case 11:return t.next=13,l({type:"changeLoading",payload:!1});case 13:r&&r();case 14:case"end":return t.stop()}},t)}),add:s.default.mark(function t(e,a){var n,r,u,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,a.put,t.next=4,u(c.add,n);case 4:l=t.sent,console.log(l),200===l.status&&r&&r();case 7:case"end":return t.stop()}},t)}),edit:s.default.mark(function t(e,a){var n,r,u,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,a.put,console.log("edit"),t.next=5,u(c.edit,n);case 5:l=t.sent,console.log(l),200===l.status&&r&&r();case 8:case"end":return t.stop()}},t)}),editApply:s.default.mark(function t(e,a){var n,r,u,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,a.put,console.log("edit"),t.next=5,u(c.editApply,n);case 5:l=t.sent,console.log(l),200===l.status&&r&&r();case 8:case"end":return t.stop()}},t)}),editStatus:s.default.mark(function t(e,a){var n,r,u,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,a.put,console.log("payload",n),t.next=5,u(c.editStatus,n);case 5:l=t.sent,console.log(l),200===l.status&&r&&r();case 8:case"end":return t.stop()}},t)}),remove:s.default.mark(function t(e,a){var n,r,u,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,a.put,t.next=4,u(c.remove,n);case 4:l=t.sent,200===l.status&&r&&r();case 6:case"end":return t.stop()}},t)}),resetPassword:s.default.mark(function t(e,a){var n,r,u,l;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,u=a.call,a.put,t.next=4,u(c.resetPassword,n);case 4:l=t.sent,200===l.status&&r&&r();case 6:case"end":return t.stop()}},t)})},reducers:{save:function(t,e){return(0,u.default)({},t,{data:e.payload.data,meta:e.payload.meta})},saveAndPush:function(t,e){var a=[].concat((0,r.default)(t.data),(0,r.default)(e.payload.data));return(0,u.default)({},t,{data:a,meta:e.payload.meta})},changeLoading:function(t,e){return(0,u.default)({},t,{loading:e.payload})}}};e.default=l}}]);