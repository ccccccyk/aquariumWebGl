System.register("chunks:///main.js",["cc"],(function(){"use strict";var t,o,r;return{setters:[function(e){t=e.cclegacy,o=e._decorator,r=e.Component}],execute:function(){function e(t,o){return(e=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var n;t._RF.push({},"59234sjigFASLdIWfGvXN4P","Main",void 0);var c=o.ccclass;o.property,c("Main")(n=function(t){var o,r;function n(){return t.apply(this,arguments)||this}return r=t,(o=n).prototype=Object.create(r.prototype),o.prototype.constructor=o,e(o,r),n.prototype.start=function(){console.log("测试")},n}(r));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});