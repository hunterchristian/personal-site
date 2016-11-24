/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _ractive = __webpack_require__(298);

	var _ractive2 = _interopRequireDefault(_ractive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ractive = new _ractive2.default({
	    el: '.ractiveEl',
	    template: '<div>my new ractive!!!!</div>'
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(295);

	/* eslint max-len: 0 */

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	// Should be removed in the next major release:

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
		Ractive.js v0.8.5
		Sun Nov 13 2016 17:56:27 GMT+0000 (UTC) - commit d533d91f155a4f042c1acc87136459141c2c8af9

		http://ractivejs.org
		http://twitter.com/RactiveJS

		Released under the MIT License.
	*/


	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  ((function() { var current = global.Ractive; var next = factory(); next.noConflict = function() { global.Ractive = current; return next; }; return global.Ractive = next; })());
	}(this, function () { 'use strict';

	  var defaults = {
	  	// render placement:
	  	el:                     void 0,
	  	append:				    false,

	  	// template:
	  	template:               null,

	  	// parse:
	  	delimiters:             [ '{{', '}}' ],
	  	tripleDelimiters:       [ '{{{', '}}}' ],
	  	staticDelimiters:       [ '[[', ']]' ],
	  	staticTripleDelimiters: [ '[[[', ']]]' ],
	  	csp: 					true,
	  	interpolate:            false,
	  	preserveWhitespace:     false,
	  	sanitize:               false,
	  	stripComments:          true,
	  	contextLines:           0,

	  	// data & binding:
	  	data:                   {},
	  	computed:               {},
	  	magic:                  false,
	  	modifyArrays:           false,
	  	adapt:                  [],
	  	isolated:               false,
	  	twoway:                 true,
	  	lazy:                   false,

	  	// transitions:
	  	noIntro:                false,
	  	transitionsEnabled:     true,
	  	complete:               void 0,

	  	// css:
	  	css:                    null,
	  	noCssTransform:         false
	  };

	  // These are a subset of the easing equations found at
	  // https://raw.github.com/danro/easing-js - license info
	  // follows:

	  // --------------------------------------------------
	  // easing.js v0.5.4
	  // Generic set of easing functions with AMD support
	  // https://github.com/danro/easing-js
	  // This code may be freely distributed under the MIT license
	  // http://danro.mit-license.org/
	  // --------------------------------------------------
	  // All functions adapted from Thomas Fuchs & Jeremy Kahn
	  // Easing Equations (c) 2003 Robert Penner, BSD license
	  // https://raw.github.com/danro/easing-js/master/LICENSE
	  // --------------------------------------------------

	  // In that library, the functions named easeIn, easeOut, and
	  // easeInOut below are named easeInCubic, easeOutCubic, and
	  // (you guessed it) easeInOutCubic.
	  //
	  // You can add additional easing functions to this list, and they
	  // will be globally available.


	  var easing = {
	  	linear: function ( pos ) { return pos; },
	  	easeIn: function ( pos ) { return Math.pow( pos, 3 ); },
	  	easeOut: function ( pos ) { return ( Math.pow( ( pos - 1 ), 3 ) + 1 ); },
	  	easeInOut: function ( pos ) {
	  		if ( ( pos /= 0.5 ) < 1 ) { return ( 0.5 * Math.pow( pos, 3 ) ); }
	  		return ( 0.5 * ( Math.pow( ( pos - 2 ), 3 ) + 2 ) );
	  	}
	  };

	  var legacy = null;

	  /*global console, navigator */

	  var win = typeof window !== 'undefined' ? window : null;
	  var doc = win ? document : null;

	  var isClient = !!doc;
	  var isJsdom = ( typeof navigator !== 'undefined' && /jsDom/.test( navigator.appName ) );
	  var hasConsole = ( typeof console !== 'undefined' && typeof console.warn === 'function' && typeof console.warn.apply === 'function' );

	  var magicSupported;
	  try {
	  	Object.defineProperty({}, 'test', { value: 0 });
	  	magicSupported = true;
	  } catch ( e ) {
	  	magicSupported = false;
	  }

	  var svg = doc ?
	  	doc.implementation.hasFeature( 'http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1' ) :
	  	false;

	  var vendors = [ 'o', 'ms', 'moz', 'webkit' ];

	  var html   = 'http://www.w3.org/1999/xhtml';
	  var mathml = 'http://www.w3.org/1998/Math/MathML';
	  var svg$1    = 'http://www.w3.org/2000/svg';
	  var xlink  = 'http://www.w3.org/1999/xlink';
	  var xml    = 'http://www.w3.org/XML/1998/namespace';
	  var xmlns  = 'http://www.w3.org/2000/xmlns';

	  var namespaces = { html: html, mathml: mathml, svg: svg$1, xlink: xlink, xml: xml, xmlns: xmlns };

	  var createElement;
	  var matches;
	  var div;
	  var methodNames;
	  var unprefixed;
	  var prefixed;
	  var i;
	  var j;
	  var makeFunction;
	  // Test for SVG support
	  if ( !svg ) {
	  	createElement = function ( type, ns, extend ) {
	  		if ( ns && ns !== html ) {
	  			throw 'This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you\'re trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information';
	  		}

	  		return extend ?
	  			doc.createElement( type, extend ) :
	  			doc.createElement( type );
	  	};
	  } else {
	  	createElement = function ( type, ns, extend ) {
	  		if ( !ns || ns === html ) {
	  			return extend ?
	  				doc.createElement( type, extend ) :
	  				doc.createElement( type );
	  		}

	  		return extend ?
	  			doc.createElementNS( ns, type, extend ) :
	  			doc.createElementNS( ns, type );
	  	};
	  }

	  function createDocumentFragment () {
	  	return doc.createDocumentFragment();
	  }

	  function getElement ( input ) {
	  	var output;

	  	if ( !input || typeof input === 'boolean' ) { return; }

	  	if ( !win || !doc || !input ) {
	  		return null;
	  	}

	  	// We already have a DOM node - no work to do. (Duck typing alert!)
	  	if ( input.nodeType ) {
	  		return input;
	  	}

	  	// Get node from string
	  	if ( typeof input === 'string' ) {
	  		// try ID first
	  		output = doc.getElementById( input );

	  		// then as selector, if possible
	  		if ( !output && doc.querySelector ) {
	  			output = doc.querySelector( input );
	  		}

	  		// did it work?
	  		if ( output && output.nodeType ) {
	  			return output;
	  		}
	  	}

	  	// If we've been given a collection (jQuery, Zepto etc), extract the first item
	  	if ( input[0] && input[0].nodeType ) {
	  		return input[0];
	  	}

	  	return null;
	  }

	  if ( !isClient ) {
	  	matches = null;
	  } else {
	  	div = createElement( 'div' );
	  	methodNames = [ 'matches', 'matchesSelector' ];

	  	makeFunction = function ( methodName ) {
	  		return function ( node, selector ) {
	  			return node[ methodName ]( selector );
	  		};
	  	};

	  	i = methodNames.length;

	  	while ( i-- && !matches ) {
	  		unprefixed = methodNames[i];

	  		if ( div[ unprefixed ] ) {
	  			matches = makeFunction( unprefixed );
	  		} else {
	  			j = vendors.length;
	  			while ( j-- ) {
	  				prefixed = vendors[i] + unprefixed.substr( 0, 1 ).toUpperCase() + unprefixed.substring( 1 );

	  				if ( div[ prefixed ] ) {
	  					matches = makeFunction( prefixed );
	  					break;
	  				}
	  			}
	  		}
	  	}

	  	// IE8...
	  	if ( !matches ) {
	  		matches = function ( node, selector ) {
	  			var nodes, parentNode, i;

	  			parentNode = node.parentNode;

	  			if ( !parentNode ) {
	  				// empty dummy <div>
	  				div.innerHTML = '';

	  				parentNode = div;
	  				node = node.cloneNode();

	  				div.appendChild( node );
	  			}

	  			nodes = parentNode.querySelectorAll( selector );

	  			i = nodes.length;
	  			while ( i-- ) {
	  				if ( nodes[i] === node ) {
	  					return true;
	  				}
	  			}

	  			return false;
	  		};
	  	}
	  }

	  function detachNode ( node ) {
	  	if ( node && typeof node.parentNode !== 'unknown' && node.parentNode ) {
	  		node.parentNode.removeChild( node );
	  	}

	  	return node;
	  }

	  function safeToStringValue ( value ) {
	  	return ( value == null || !value.toString ) ? '' : '' + value;
	  }

	  function safeAttributeString ( string ) {
	  	return safeToStringValue( string )
	  		.replace( /&/g, '&amp;' )
	  		.replace( /"/g, '&quot;' )
	  		.replace( /'/g, '&#39;' );
	  }

	  var camel = /(-.)/g;
	  function camelize ( string ) {
	  	return string.replace( camel, function ( s ) { return s.charAt( 1 ).toUpperCase(); } );
	  }

	  var decamel = /[A-Z]/g;
	  function decamelize ( string ) {
	  	return string.replace( decamel, function ( s ) { return ("-" + (s.toLowerCase())); } );
	  }

	  var create;
	  var defineProperty;
	  var defineProperties;
	  try {
	  	Object.defineProperty({}, 'test', { get: function() {}, set: function() {} });

	  	if ( doc ) {
	  		Object.defineProperty( createElement( 'div' ), 'test', { value: 0 });
	  	}

	  	defineProperty = Object.defineProperty;
	  } catch ( err ) {
	  	// Object.defineProperty doesn't exist, or we're in IE8 where you can
	  	// only use it with DOM objects (what were you smoking, MSFT?)
	  	defineProperty = function ( obj, prop, desc ) {
	  		if ( desc.get ) obj[ prop ] = desc.get();
	  		else obj[ prop ] = desc.value;
	  	};
	  }

	  try {
	  	try {
	  		Object.defineProperties({}, { test: { value: 0 } });
	  	} catch ( err ) {
	  		// TODO how do we account for this? noMagic = true;
	  		throw err;
	  	}

	  	if ( doc ) {
	  		Object.defineProperties( createElement( 'div' ), { test: { value: 0 } });
	  	}

	  	defineProperties = Object.defineProperties;
	  } catch ( err ) {
	  	defineProperties = function ( obj, props ) {
	  		var prop;

	  		for ( prop in props ) {
	  			if ( props.hasOwnProperty( prop ) ) {
	  				defineProperty( obj, prop, props[ prop ] );
	  			}
	  		}
	  	};
	  }

	  try {
	  	Object.create( null );

	  	create = Object.create;
	  } catch ( err ) {
	  	// sigh
	  	create = (function () {
	  		var F = function () {};

	  		return function ( proto, props ) {
	  			var obj;

	  			if ( proto === null ) {
	  				return {};
	  			}

	  			F.prototype = proto;
	  			obj = new F();

	  			if ( props ) {
	  				Object.defineProperties( obj, props );
	  			}

	  			return obj;
	  		};
	  	}());
	  }

	  function extendObj ( target ) {
	  	var sources = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	  	var prop;

	  	sources.forEach( function ( source ) {
	  		for ( prop in source ) {
	  			if ( hasOwn.call( source, prop ) ) {
	  				target[ prop ] = source[ prop ];
	  			}
	  		}
	  	});

	  	return target;
	  }

	  function fillGaps ( target ) {
	  	var sources = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	  	sources.forEach( function ( s ) {
	  		for ( var key in s ) {
	  			if ( hasOwn.call( s, key ) && !( key in target ) ) {
	  				target[ key ] = s[ key ];
	  			}
	  		}
	  	});

	  	return target;
	  }

	  var hasOwn = Object.prototype.hasOwnProperty;

	  var toString = Object.prototype.toString;
	  // thanks, http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
	  function isArray ( thing ) {
	  	return toString.call( thing ) === '[object Array]';
	  }

	  function isEqual ( a, b ) {
	  	if ( a === null && b === null ) {
	  		return true;
	  	}

	  	if ( typeof a === 'object' || typeof b === 'object' ) {
	  		return false;
	  	}

	  	return a === b;
	  }

	  // http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
	  function isNumeric ( thing ) {
	  	return !isNaN( parseFloat( thing ) ) && isFinite( thing );
	  }

	  function isObject ( thing ) {
	  	return ( thing && toString.call( thing ) === '[object Object]' );
	  }

	  function noop () {}

	  var alreadyWarned = {};
	  var log;
	  var printWarning;
	  var welcome;
	  if ( hasConsole ) {
	  	var welcomeIntro = [
	  		("%cRactive.js %c0.8.5 %cin debug mode, %cmore..."),
	  		'color: rgb(114, 157, 52); font-weight: normal;',
	  		'color: rgb(85, 85, 85); font-weight: normal;',
	  		'color: rgb(85, 85, 85); font-weight: normal;',
	  		'color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;'
	  	];
	  	var welcomeMessage = "You're running Ractive 0.8.5 in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\nTo disable debug mode, add this line at the start of your app:\n  Ractive.DEBUG = false;\n\nTo disable debug mode when your app is minified, add this snippet:\n  Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});\n\nGet help and support:\n  http://docs.ractivejs.org\n  http://stackoverflow.com/questions/tagged/ractivejs\n  http://groups.google.com/forum/#!forum/ractive-js\n  http://twitter.com/ractivejs\n\nFound a bug? Raise an issue:\n  https://github.com/ractivejs/ractive/issues\n\n";

	  	welcome = function () {
	  		if ( Ractive.WELCOME_MESSAGE === false ) {
	  			welcome = noop;
	  			return;
	  		}
	  		var message = 'WELCOME_MESSAGE' in Ractive ? Ractive.WELCOME_MESSAGE : welcomeMessage;
	  		var hasGroup = !!console.groupCollapsed;
	  		if ( hasGroup ) console.groupCollapsed.apply( console, welcomeIntro );
	  		console.log( message );
	  		if ( hasGroup ) {
	  			console.groupEnd( welcomeIntro );
	  		}

	  		welcome = noop;
	  	};

	  	printWarning = function ( message, args ) {
	  		welcome();

	  		// extract information about the instance this message pertains to, if applicable
	  		if ( typeof args[ args.length - 1 ] === 'object' ) {
	  			var options = args.pop();
	  			var ractive = options ? options.ractive : null;

	  			if ( ractive ) {
	  				// if this is an instance of a component that we know the name of, add
	  				// it to the message
	  				var name;
	  				if ( ractive.component && ( name = ractive.component.name ) ) {
	  					message = "<" + name + "> " + message;
	  				}

	  				var node;
	  				if ( node = ( options.node || ( ractive.fragment && ractive.fragment.rendered && ractive.find( '*' ) ) ) ) {
	  					args.push( node );
	  				}
	  			}
	  		}

	  		console.warn.apply( console, [ '%cRactive.js: %c' + message, 'color: rgb(114, 157, 52);', 'color: rgb(85, 85, 85);' ].concat( args ) );
	  	};

	  	log = function () {
	  		console.log.apply( console, arguments );
	  	};
	  } else {
	  	printWarning = log = welcome = noop;
	  }

	  function format ( message, args ) {
	  	return message.replace( /%s/g, function () { return args.shift(); } );
	  }

	  function fatal ( message ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	message = format( message, args );
	  	throw new Error( message );
	  }

	  function logIfDebug () {
	  	if ( Ractive.DEBUG ) {
	  		log.apply( null, arguments );
	  	}
	  }

	  function warn ( message ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	message = format( message, args );
	  	printWarning( message, args );
	  }

	  function warnOnce ( message ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	message = format( message, args );

	  	if ( alreadyWarned[ message ] ) {
	  		return;
	  	}

	  	alreadyWarned[ message ] = true;
	  	printWarning( message, args );
	  }

	  function warnIfDebug () {
	  	if ( Ractive.DEBUG ) {
	  		warn.apply( null, arguments );
	  	}
	  }

	  function warnOnceIfDebug () {
	  	if ( Ractive.DEBUG ) {
	  		warnOnce.apply( null, arguments );
	  	}
	  }

	  // Error messages that are used (or could be) in multiple places
	  var badArguments = 'Bad arguments';
	  var noRegistryFunctionReturn = 'A function was specified for "%s" %s, but no %s was returned';
	  var missingPlugin = function ( name, type ) { return ("Missing \"" + name + "\" " + type + " plugin. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#" + type + "s"); };

	  function findInViewHierarchy ( registryName, ractive, name ) {
	  	var instance = findInstance( registryName, ractive, name );
	  	return instance ? instance[ registryName ][ name ] : null;
	  }

	  function findInstance ( registryName, ractive, name ) {
	  	while ( ractive ) {
	  		if ( name in ractive[ registryName ] ) {
	  			return ractive;
	  		}

	  		if ( ractive.isolated ) {
	  			return null;
	  		}

	  		ractive = ractive.parent;
	  	}
	  }

	  function interpolate ( from, to, ractive, type ) {
	  	if ( from === to ) return null;

	  	if ( type ) {
	  		var interpol = findInViewHierarchy( 'interpolators', ractive, type );
	  		if ( interpol ) return interpol( from, to ) || null;

	  		fatal( missingPlugin( type, 'interpolator' ) );
	  	}

	  	return interpolators.number( from, to ) ||
	  	       interpolators.array( from, to ) ||
	  	       interpolators.object( from, to ) ||
	  	       null;
	  }

	  function snap ( to ) {
	  	return function () { return to; };
	  }

	  var interpolators = {
	  	number: function ( from, to ) {
	  		var delta;

	  		if ( !isNumeric( from ) || !isNumeric( to ) ) {
	  			return null;
	  		}

	  		from = +from;
	  		to = +to;

	  		delta = to - from;

	  		if ( !delta ) {
	  			return function () { return from; };
	  		}

	  		return function ( t ) {
	  			return from + ( t * delta );
	  		};
	  	},

	  	array: function ( from, to ) {
	  		var intermediate, interpolators, len, i;

	  		if ( !isArray( from ) || !isArray( to ) ) {
	  			return null;
	  		}

	  		intermediate = [];
	  		interpolators = [];

	  		i = len = Math.min( from.length, to.length );
	  		while ( i-- ) {
	  			interpolators[i] = interpolate( from[i], to[i] );
	  		}

	  		// surplus values - don't interpolate, but don't exclude them either
	  		for ( i=len; i<from.length; i+=1 ) {
	  			intermediate[i] = from[i];
	  		}

	  		for ( i=len; i<to.length; i+=1 ) {
	  			intermediate[i] = to[i];
	  		}

	  		return function ( t ) {
	  			var i = len;

	  			while ( i-- ) {
	  				intermediate[i] = interpolators[i]( t );
	  			}

	  			return intermediate;
	  		};
	  	},

	  	object: function ( from, to ) {
	  		var properties, len, interpolators, intermediate, prop;

	  		if ( !isObject( from ) || !isObject( to ) ) {
	  			return null;
	  		}

	  		properties = [];
	  		intermediate = {};
	  		interpolators = {};

	  		for ( prop in from ) {
	  			if ( hasOwn.call( from, prop ) ) {
	  				if ( hasOwn.call( to, prop ) ) {
	  					properties.push( prop );
	  					interpolators[ prop ] = interpolate( from[ prop ], to[ prop ] ) || snap( to[ prop ] );
	  				}

	  				else {
	  					intermediate[ prop ] = from[ prop ];
	  				}
	  			}
	  		}

	  		for ( prop in to ) {
	  			if ( hasOwn.call( to, prop ) && !hasOwn.call( from, prop ) ) {
	  				intermediate[ prop ] = to[ prop ];
	  			}
	  		}

	  		len = properties.length;

	  		return function ( t ) {
	  			var i = len, prop;

	  			while ( i-- ) {
	  				prop = properties[i];

	  				intermediate[ prop ] = interpolators[ prop ]( t );
	  			}

	  			return intermediate;
	  		};
	  	}
	  };

	  // TODO: deprecate in future release
	  var deprecations = {
	  	construct: {
	  		deprecated: 'beforeInit',
	  		replacement: 'onconstruct'
	  	},
	  	render: {
	  		deprecated: 'init',
	  		message: 'The "init" method has been deprecated ' +
	  			'and will likely be removed in a future release. ' +
	  			'You can either use the "oninit" method which will fire ' +
	  			'only once prior to, and regardless of, any eventual ractive ' +
	  			'instance being rendered, or if you need to access the ' +
	  			'rendered DOM, use "onrender" instead. ' +
	  			'See http://docs.ractivejs.org/latest/migrating for more information.'
	  	},
	  	complete: {
	  		deprecated: 'complete',
	  		replacement: 'oncomplete'
	  	}
	  };

	  var Hook = function Hook ( event ) {
	  	this.event = event;
	  	this.method = 'on' + event;
	  	this.deprecate = deprecations[ event ];
	  };

	  Hook.prototype.call = function call ( method, ractive, arg ) {
	  	if ( ractive[ method ] ) {
	  		arg ? ractive[ method ]( arg ) : ractive[ method ]();
	  		return true;
	  	}
	  };

	  Hook.prototype.fire = function fire ( ractive, arg ) {
	  	this.call( this.method, ractive, arg );

	  	// handle deprecations
	  	if ( !ractive[ this.method ] && this.deprecate && this.call( this.deprecate.deprecated, ractive, arg ) ) {
	  		if ( this.deprecate.message ) {
	  			warnIfDebug( this.deprecate.message );
	  		} else {
	  			warnIfDebug( 'The method "%s" has been deprecated in favor of "%s" and will likely be removed in a future release. See http://docs.ractivejs.org/latest/migrating for more information.', this.deprecate.deprecated, this.deprecate.replacement );
	  		}
	  	}

	  	// TODO should probably use internal method, in case ractive.fire was overwritten
	  	arg ? ractive.fire( this.event, arg ) : ractive.fire( this.event );
	  };

	  function addToArray ( array, value ) {
	  	var index = array.indexOf( value );

	  	if ( index === -1 ) {
	  		array.push( value );
	  	}
	  }

	  function arrayContains ( array, value ) {
	  	for ( var i = 0, c = array.length; i < c; i++ ) {
	  		if ( array[i] == value ) {
	  			return true;
	  		}
	  	}

	  	return false;
	  }

	  function arrayContentsMatch ( a, b ) {
	  	var i;

	  	if ( !isArray( a ) || !isArray( b ) ) {
	  		return false;
	  	}

	  	if ( a.length !== b.length ) {
	  		return false;
	  	}

	  	i = a.length;
	  	while ( i-- ) {
	  		if ( a[i] !== b[i] ) {
	  			return false;
	  		}
	  	}

	  	return true;
	  }

	  function ensureArray ( x ) {
	  	if ( typeof x === 'string' ) {
	  		return [ x ];
	  	}

	  	if ( x === undefined ) {
	  		return [];
	  	}

	  	return x;
	  }

	  function lastItem ( array ) {
	  	return array[ array.length - 1 ];
	  }

	  function removeFromArray ( array, member ) {
	  	if ( !array ) {
	  		return;
	  	}

	  	var index = array.indexOf( member );

	  	if ( index !== -1 ) {
	  		array.splice( index, 1 );
	  	}
	  }

	  function toArray ( arrayLike ) {
	  	var array = [], i = arrayLike.length;
	  	while ( i-- ) {
	  		array[i] = arrayLike[i];
	  	}

	  	return array;
	  }

	  var _Promise;
	  var PENDING = {};
	  var FULFILLED = {};
	  var REJECTED = {};
	  if ( typeof Promise === 'function' ) {
	  	// use native Promise
	  	_Promise = Promise;
	  } else {
	  	_Promise = function ( callback ) {
	  		var fulfilledHandlers = [],
	  			rejectedHandlers = [],
	  			state = PENDING,

	  			result,
	  			dispatchHandlers,
	  			makeResolver,
	  			fulfil,
	  			reject,

	  			promise;

	  		makeResolver = function ( newState ) {
	  			return function ( value ) {
	  				if ( state !== PENDING ) {
	  					return;
	  				}

	  				result = value;
	  				state = newState;

	  				dispatchHandlers = makeDispatcher( ( state === FULFILLED ? fulfilledHandlers : rejectedHandlers ), result );

	  				// dispatch onFulfilled and onRejected handlers asynchronously
	  				wait( dispatchHandlers );
	  			};
	  		};

	  		fulfil = makeResolver( FULFILLED );
	  		reject = makeResolver( REJECTED );

	  		try {
	  			callback( fulfil, reject );
	  		} catch ( err ) {
	  			reject( err );
	  		}

	  		promise = {
	  			// `then()` returns a Promise - 2.2.7
	  			then: function ( onFulfilled, onRejected ) {
	  				var promise2 = new _Promise( function ( fulfil, reject ) {

	  					var processResolutionHandler = function ( handler, handlers, forward ) {

	  						// 2.2.1.1
	  						if ( typeof handler === 'function' ) {
	  							handlers.push( function ( p1result ) {
	  								var x;

	  								try {
	  									x = handler( p1result );
	  									resolve( promise2, x, fulfil, reject );
	  								} catch ( err ) {
	  									reject( err );
	  								}
	  							});
	  						} else {
	  							// Forward the result of promise1 to promise2, if resolution handlers
	  							// are not given
	  							handlers.push( forward );
	  						}
	  					};

	  					// 2.2
	  					processResolutionHandler( onFulfilled, fulfilledHandlers, fulfil );
	  					processResolutionHandler( onRejected, rejectedHandlers, reject );

	  					if ( state !== PENDING ) {
	  						// If the promise has resolved already, dispatch the appropriate handlers asynchronously
	  						wait( dispatchHandlers );
	  					}

	  				});

	  				return promise2;
	  			}
	  		};

	  		promise[ 'catch' ] = function ( onRejected ) {
	  			return this.then( null, onRejected );
	  		};

	  		return promise;
	  	};

	  	_Promise.all = function ( promises ) {
	  		return new _Promise( function ( fulfil, reject ) {
	  			var result = [], pending, i, processPromise;

	  			if ( !promises.length ) {
	  				fulfil( result );
	  				return;
	  			}

	  			processPromise = function ( promise, i ) {
	  				if ( promise && typeof promise.then === 'function' ) {
	  					promise.then( function ( value ) {
	  						result[i] = value;
	  						--pending || fulfil( result );
	  					}, reject );
	  				}

	  				else {
	  					result[i] = promise;
	  					--pending || fulfil( result );
	  				}
	  			};

	  			pending = i = promises.length;
	  			while ( i-- ) {
	  				processPromise( promises[i], i );
	  			}
	  		});
	  	};

	  	_Promise.resolve = function ( value ) {
	  		return new _Promise( function ( fulfil ) {
	  			fulfil( value );
	  		});
	  	};

	  	_Promise.reject = function ( reason ) {
	  		return new _Promise( function ( fulfil, reject ) {
	  			reject( reason );
	  		});
	  	};
	  }

	  var Promise$1 = _Promise;

	  // TODO use MutationObservers or something to simulate setImmediate
	  function wait ( callback ) {
	  	setTimeout( callback, 0 );
	  }

	  function makeDispatcher ( handlers, result ) {
	  	return function () {
	  		var handler;

	  		while ( handler = handlers.shift() ) {
	  			handler( result );
	  		}
	  	};
	  }

	  function resolve ( promise, x, fulfil, reject ) {
	  	// Promise Resolution Procedure
	  	var then;

	  	// 2.3.1
	  	if ( x === promise ) {
	  		throw new TypeError( 'A promise\'s fulfillment handler cannot return the same promise' );
	  	}

	  	// 2.3.2
	  	if ( x instanceof _Promise ) {
	  		x.then( fulfil, reject );
	  	}

	  	// 2.3.3
	  	else if ( x && ( typeof x === 'object' || typeof x === 'function' ) ) {
	  		try {
	  			then = x.then; // 2.3.3.1
	  		} catch ( e ) {
	  			reject( e ); // 2.3.3.2
	  			return;
	  		}

	  		// 2.3.3.3
	  		if ( typeof then === 'function' ) {
	  			var called, resolvePromise, rejectPromise;

	  			resolvePromise = function ( y ) {
	  				if ( called ) {
	  					return;
	  				}
	  				called = true;
	  				resolve( promise, y, fulfil, reject );
	  			};

	  			rejectPromise = function ( r ) {
	  				if ( called ) {
	  					return;
	  				}
	  				called = true;
	  				reject( r );
	  			};

	  			try {
	  				then.call( x, resolvePromise, rejectPromise );
	  			} catch ( e ) {
	  				if ( !called ) { // 2.3.3.3.4.1
	  					reject( e ); // 2.3.3.3.4.2
	  					called = true;
	  					return;
	  				}
	  			}
	  		}

	  		else {
	  			fulfil( x );
	  		}
	  	}

	  	else {
	  		fulfil( x );
	  	}
	  }

	  var TransitionManager = function TransitionManager ( callback, parent ) {
	  	this.callback = callback;
	  	this.parent = parent;

	  	this.intros = [];
	  	this.outros = [];

	  	this.children = [];
	  	this.totalChildren = this.outroChildren = 0;

	  	this.detachQueue = [];
	  	this.outrosComplete = false;

	  	if ( parent ) {
	  		parent.addChild( this );
	  	}
	  };

	  TransitionManager.prototype.add = function add ( transition ) {
	  	var list = transition.isIntro ? this.intros : this.outros;
	  	list.push( transition );
	  };

	  TransitionManager.prototype.addChild = function addChild ( child ) {
	  	this.children.push( child );

	  	this.totalChildren += 1;
	  	this.outroChildren += 1;
	  };

	  TransitionManager.prototype.decrementOutros = function decrementOutros () {
	  	this.outroChildren -= 1;
	  	check( this );
	  };

	  TransitionManager.prototype.decrementTotal = function decrementTotal () {
	  	this.totalChildren -= 1;
	  	check( this );
	  };

	  TransitionManager.prototype.detachNodes = function detachNodes () {
	  	this.detachQueue.forEach( detach );
	  	this.children.forEach( _detachNodes );
	  };

	  TransitionManager.prototype.ready = function ready () {
	  	detachImmediate( this );
	  };

	  TransitionManager.prototype.remove = function remove ( transition ) {
	  	var list = transition.isIntro ? this.intros : this.outros;
	  	removeFromArray( list, transition );
	  	check( this );
	  };

	  TransitionManager.prototype.start = function start () {
	  	this.children.forEach( function ( c ) { return c.start(); } );
	  	this.intros.concat( this.outros ).forEach( function ( t ) { return t.start(); } );
	  	this.ready = true;
	  	check( this );
	  };

	  function detach ( element ) {
	  	element.detach();
	  }

	  function _detachNodes ( tm ) { // _ to avoid transpiler quirk
	  	tm.detachNodes();
	  }

	  function check ( tm ) {
	  	if ( !tm.ready || tm.outros.length || tm.outroChildren ) return;

	  	// If all outros are complete, and we haven't already done this,
	  	// we notify the parent if there is one, otherwise
	  	// start detaching nodes
	  	if ( !tm.outrosComplete ) {
	  		tm.outrosComplete = true;

	  		if ( tm.parent && !tm.parent.outrosComplete ) {
	  			tm.parent.decrementOutros( tm );
	  		} else {
	  			tm.detachNodes();
	  		}
	  	}

	  	// Once everything is done, we can notify parent transition
	  	// manager and call the callback
	  	if ( !tm.intros.length && !tm.totalChildren ) {
	  		if ( typeof tm.callback === 'function' ) {
	  			tm.callback();
	  		}

	  		if ( tm.parent && !tm.notifiedTotal ) {
	  			tm.notifiedTotal = true;
	  			tm.parent.decrementTotal();
	  		}
	  	}
	  }

	  // check through the detach queue to see if a node is up or downstream from a
	  // transition and if not, go ahead and detach it
	  function detachImmediate ( manager ) {
	  	var queue = manager.detachQueue;
	  	var outros = collectAllOutros( manager );

	  	var i = queue.length, j = 0, node, trans;
	  	start: while ( i-- ) {
	  		node = queue[i].node;
	  		j = outros.length;
	  		while ( j-- ) {
	  			trans = outros[j].element.node;
	  			// check to see if the node is, contains, or is contained by the transitioning node
	  			if ( trans === node || trans.contains( node ) || node.contains( trans ) ) continue start;
	  		}

	  		// no match, we can drop it
	  		queue[i].detach();
	  		queue.splice( i, 1 );
	  	}
	  }

	  function collectAllOutros ( manager, list ) {
	  	if ( !list ) {
	  		list = [];
	  		var parent = manager;
	  		while ( parent.parent ) parent = parent.parent;
	  		return collectAllOutros( parent, list );
	  	} else {
	  		var i = manager.children.length;
	  		while ( i-- ) {
	  			list = collectAllOutros( manager.children[i], list );
	  		}
	  		list = list.concat( manager.outros );
	  		return list;
	  	}
	  }

	  var changeHook = new Hook( 'change' );

	  var batch;

	  var runloop = {
	  	start: function ( instance, returnPromise ) {
	  		var promise, fulfilPromise;

	  		if ( returnPromise ) {
	  			promise = new Promise$1( function ( f ) { return ( fulfilPromise = f ); } );
	  		}

	  		batch = {
	  			previousBatch: batch,
	  			transitionManager: new TransitionManager( fulfilPromise, batch && batch.transitionManager ),
	  			fragments: [],
	  			tasks: [],
	  			immediateObservers: [],
	  			deferredObservers: [],
	  			ractives: [],
	  			instance: instance
	  		};

	  		return promise;
	  	},

	  	end: function () {
	  		flushChanges();

	  		if ( !batch.previousBatch ) batch.transitionManager.start();

	  		batch = batch.previousBatch;
	  	},

	  	addFragment: function ( fragment ) {
	  		addToArray( batch.fragments, fragment );
	  	},

	  	// TODO: come up with a better way to handle fragments that trigger their own update
	  	addFragmentToRoot: function ( fragment ) {
	  		if ( !batch ) return;

	  		var b = batch;
	  		while ( b.previousBatch ) {
	  			b = b.previousBatch;
	  		}

	  		addToArray( b.fragments, fragment );
	  	},

	  	addInstance: function ( instance ) {
	  		if ( batch ) addToArray( batch.ractives, instance );
	  	},

	  	addObserver: function ( observer, defer ) {
	  		addToArray( defer ? batch.deferredObservers : batch.immediateObservers, observer );
	  	},

	  	registerTransition: function ( transition ) {
	  		transition._manager = batch.transitionManager;
	  		batch.transitionManager.add( transition );
	  	},

	  	// synchronise node detachments with transition ends
	  	detachWhenReady: function ( thing ) {
	  		batch.transitionManager.detachQueue.push( thing );
	  	},

	  	scheduleTask: function ( task, postRender ) {
	  		var _batch;

	  		if ( !batch ) {
	  			task();
	  		} else {
	  			_batch = batch;
	  			while ( postRender && _batch.previousBatch ) {
	  				// this can't happen until the DOM has been fully updated
	  				// otherwise in some situations (with components inside elements)
	  				// transitions and decorators will initialise prematurely
	  				_batch = _batch.previousBatch;
	  			}

	  			_batch.tasks.push( task );
	  		}
	  	}
	  };

	  function dispatch ( observer ) {
	  	observer.dispatch();
	  }

	  function flushChanges () {
	  	var which = batch.immediateObservers;
	  	batch.immediateObservers = [];
	  	which.forEach( dispatch );

	  	// Now that changes have been fully propagated, we can update the DOM
	  	// and complete other tasks
	  	var i = batch.fragments.length;
	  	var fragment;

	  	which = batch.fragments;
	  	batch.fragments = [];
	  	var ractives = batch.ractives;
	  	batch.ractives = [];

	  	while ( i-- ) {
	  		fragment = which[i];

	  		// TODO deprecate this. It's annoying and serves no useful function
	  		var ractive = fragment.ractive;
	  		if ( Object.keys( ractive.viewmodel.changes ).length ) {
	  			changeHook.fire( ractive, ractive.viewmodel.changes );
	  		}
	  		ractive.viewmodel.changes = {};
	  		removeFromArray( ractives, ractive );

	  		fragment.update();
	  	}

	  	i = ractives.length;
	  	while ( i-- ) {
	  		var ractive$1 = ractives[i];
	  		changeHook.fire( ractive$1, ractive$1.viewmodel.changes );
	  		ractive$1.viewmodel.changes = {};
	  	}

	  	batch.transitionManager.ready();

	  	which = batch.deferredObservers;
	  	batch.deferredObservers = [];
	  	which.forEach( dispatch );

	  	var tasks = batch.tasks;
	  	batch.tasks = [];

	  	for ( i = 0; i < tasks.length; i += 1 ) {
	  		tasks[i]();
	  	}

	  	// If updating the view caused some model blowback - e.g. a triple
	  	// containing <option> elements caused the binding on the <select>
	  	// to update - then we start over
	  	if ( batch.fragments.length || batch.immediateObservers.length || batch.deferredObservers.length || batch.ractives.length || batch.tasks.length ) return flushChanges();
	  }

	  var refPattern = /\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g;
	  var splitPattern = /([^\\](?:\\\\)*)\./;
	  var escapeKeyPattern = /\\|\./g;
	  var unescapeKeyPattern = /((?:\\)+)\1|\\(\.)/g;

	  function escapeKey ( key ) {
	  	if ( typeof key === 'string' ) {
	  		return key.replace( escapeKeyPattern, '\\$&' );
	  	}

	  	return key;
	  }

	  function normalise ( ref ) {
	  	return ref ? ref.replace( refPattern, '.$1' ) : '';
	  }

	  function splitKeypathI ( keypath ) {
	  	var result = [],
	  		match;

	  	keypath = normalise( keypath );

	  	while ( match = splitPattern.exec( keypath ) ) {
	  		var index = match.index + match[1].length;
	  		result.push( keypath.substr( 0, index ) );
	  		keypath = keypath.substr( index + 1 );
	  	}

	  	result.push(keypath);

	  	return result;
	  }

	  function unescapeKey ( key ) {
	  	if ( typeof key === 'string' ) {
	  		return key.replace( unescapeKeyPattern, '$1$2' );
	  	}

	  	return key;
	  }

	  function bind ( fn, context ) {
	  	if ( !/this/.test( fn.toString() ) ) return fn;

	  	var bound = fn.bind( context );
	  	for ( var prop in fn ) bound[ prop ] = fn[ prop ];

	  	return bound;
	  }

	  function set ( ractive, pairs ) {
	  	var promise = runloop.start( ractive, true );

	  	var i = pairs.length;
	  	while ( i-- ) {
	  		var ref = pairs[i], model = ref[0], value = ref[1];
	  		if ( typeof value === 'function' ) value = bind( value, ractive );
	  		model.set( value );
	  	}

	  	runloop.end();

	  	return promise;
	  }

	  var star = /\*/;
	  function gather ( ractive, keypath, base ) {
	  	if ( base === void 0 ) base = ractive.viewmodel;

	  	if ( star.test( keypath ) ) {
	  		return base.findMatches( splitKeypathI( keypath ) );
	  	} else {
	  		return [ base.joinAll( splitKeypathI( keypath ) ) ];
	  	}
	  }

	  function build ( ractive, keypath, value ) {
	  	var sets = [];

	  	// set multiple keypaths in one go
	  	if ( isObject( keypath ) ) {
	  		var loop = function ( k ) {
	  			if ( keypath.hasOwnProperty( k ) ) {
	  				sets.push.apply( sets, gather( ractive, k ).map( function ( m ) { return [ m, keypath[k] ]; } ) );
	  			}
	  		};

	  		for ( var k in keypath ) loop( k );

	  	}
	  	// set a single keypath
	  	else {
	  		sets.push.apply( sets, gather( ractive, keypath ).map( function ( m ) { return [ m, value ]; } ) );
	  	}

	  	return sets;
	  }

	  var errorMessage = 'Cannot add to a non-numeric value';

	  function add ( ractive, keypath, d ) {
	  	if ( typeof keypath !== 'string' || !isNumeric( d ) ) {
	  		throw new Error( 'Bad arguments' );
	  	}

	  	var sets = build( ractive, keypath, d );

	  	return set( ractive, sets.map( function ( pair ) {
	  		var model = pair[0], add = pair[1], value = model.get();
	  		if ( !isNumeric( add ) || !isNumeric( value ) ) throw new Error( errorMessage );
	  		return [ model, value + add ];
	  	}));
	  }

	  function Ractive$add ( keypath, d ) {
	  	return add( this, keypath, ( d === undefined ? 1 : +d ) );
	  }

	  var noAnimation = Promise$1.resolve();
	  defineProperty( noAnimation, 'stop', { value: noop });

	  var linear = easing.linear;

	  function getOptions ( options, instance ) {
	  	options = options || {};

	  	var easing;
	  	if ( options.easing ) {
	  		easing = typeof options.easing === 'function' ?
	  			options.easing :
	  			instance.easing[ options.easing ];
	  	}

	  	return {
	  		easing: easing || linear,
	  		duration: 'duration' in options ? options.duration : 400,
	  		complete: options.complete || noop,
	  		step: options.step || noop
	  	};
	  }

	  function protoAnimate ( ractive, model, to, options ) {
	  	options = getOptions( options, ractive );
	  	var from = model.get();

	  	// don't bother animating values that stay the same
	  	if ( isEqual( from, to ) ) {
	  		options.complete( options.to );
	  		return noAnimation; // TODO should this have .then and .catch methods?
	  	}

	  	var interpolator = interpolate( from, to, ractive, options.interpolator );

	  	// if we can't interpolate the value, set it immediately
	  	if ( !interpolator ) {
	  		runloop.start();
	  		model.set( to );
	  		runloop.end();

	  		return noAnimation;
	  	}

	  	return model.animate( from, to, options, interpolator );
	  }

	  function Ractive$animate ( keypath, to, options ) {
	  	if ( typeof keypath === 'object' ) {
	  		var keys = Object.keys( keypath );

	  		throw new Error( ("ractive.animate(...) no longer supports objects. Instead of ractive.animate({\n  " + (keys.map( function ( key ) { return ("'" + key + "': " + (keypath[ key ])); } ).join( '\n  ' )) + "\n}, {...}), do\n\n" + (keys.map( function ( key ) { return ("ractive.animate('" + key + "', " + (keypath[ key ]) + ", {...});"); } ).join( '\n' )) + "\n") );
	  	}


	  	return protoAnimate( this, this.viewmodel.joinAll( splitKeypathI( keypath ) ), to, options );
	  }

	  var detachHook = new Hook( 'detach' );

	  function Ractive$detach () {
	  	if ( this.isDetached ) {
	  		return this.el;
	  	}

	  	if ( this.el ) {
	  		removeFromArray( this.el.__ractive_instances__, this );
	  	}

	  	this.el = this.fragment.detach();
	  	this.isDetached = true;

	  	detachHook.fire( this );
	  	return this.el;
	  }

	  function Ractive$find ( selector ) {
	  	if ( !this.el ) throw new Error( ("Cannot call ractive.find('" + selector + "') unless instance is rendered to the DOM") );

	  	return this.fragment.find( selector );
	  }

	  function sortByDocumentPosition ( node, otherNode ) {
	  	if ( node.compareDocumentPosition ) {
	  		var bitmask = node.compareDocumentPosition( otherNode );
	  		return ( bitmask & 2 ) ? 1 : -1;
	  	}

	  	// In old IE, we can piggy back on the mechanism for
	  	// comparing component positions
	  	return sortByItemPosition( node, otherNode );
	  }

	  function sortByItemPosition ( a, b ) {
	  	var ancestryA = getAncestry( a.component || a._ractive.proxy );
	  	var ancestryB = getAncestry( b.component || b._ractive.proxy );

	  	var oldestA = lastItem( ancestryA );
	  	var oldestB = lastItem( ancestryB );
	  	var mutualAncestor;

	  	// remove items from the end of both ancestries as long as they are identical
	  	// - the final one removed is the closest mutual ancestor
	  	while ( oldestA && ( oldestA === oldestB ) ) {
	  		ancestryA.pop();
	  		ancestryB.pop();

	  		mutualAncestor = oldestA;

	  		oldestA = lastItem( ancestryA );
	  		oldestB = lastItem( ancestryB );
	  	}

	  	// now that we have the mutual ancestor, we can find which is earliest
	  	oldestA = oldestA.component || oldestA;
	  	oldestB = oldestB.component || oldestB;

	  	var fragmentA = oldestA.parentFragment;
	  	var fragmentB = oldestB.parentFragment;

	  	// if both items share a parent fragment, our job is easy
	  	if ( fragmentA === fragmentB ) {
	  		var indexA = fragmentA.items.indexOf( oldestA );
	  		var indexB = fragmentB.items.indexOf( oldestB );

	  		// if it's the same index, it means one contains the other,
	  		// so we see which has the longest ancestry
	  		return ( indexA - indexB ) || ancestryA.length - ancestryB.length;
	  	}

	  	// if mutual ancestor is a section, we first test to see which section
	  	// fragment comes first
	  	var fragments = mutualAncestor.iterations;
	  	if ( fragments ) {
	  		var indexA$1 = fragments.indexOf( fragmentA );
	  		var indexB$1 = fragments.indexOf( fragmentB );

	  		return ( indexA$1 - indexB$1 ) || ancestryA.length - ancestryB.length;
	  	}

	  	throw new Error( 'An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/ractivejs/ractive/issues - thanks!' );
	  }

	  function getParent ( item ) {
	  	var parentFragment = item.parentFragment;

	  	if ( parentFragment ) return parentFragment.owner;

	  	if ( item.component && ( parentFragment = item.component.parentFragment ) ) {
	  		return parentFragment.owner;
	  	}
	  }

	  function getAncestry ( item ) {
	  	var ancestry = [ item ];
	  	var ancestor = getParent( item );

	  	while ( ancestor ) {
	  		ancestry.push( ancestor );
	  		ancestor = getParent( ancestor );
	  	}

	  	return ancestry;
	  }


	  var Query = function Query ( ractive, selector, live, isComponentQuery ) {
	  	this.ractive = ractive;
	  	this.selector = selector;
	  	this.live = live;
	  	this.isComponentQuery = isComponentQuery;

	  	this.result = [];

	  	this.dirty = true;
	  };

	  Query.prototype.add = function add ( item ) {
	  	this.result.push( item );
	  	this.makeDirty();
	  };

	  Query.prototype.cancel = function cancel () {
	  	var liveQueries = this._root[ this.isComponentQuery ? 'liveComponentQueries' : 'liveQueries' ];
	  	var selector = this.selector;

	  	var index = liveQueries.indexOf( selector );

	  	if ( index !== -1 ) {
	  		liveQueries.splice( index, 1 );
	  		liveQueries[ selector ] = null;
	  	}
	  };

	  Query.prototype.init = function init () {
	  	this.dirty = false;
	  };

	  Query.prototype.makeDirty = function makeDirty () {
	  	var this$1 = this;

	  		if ( !this.dirty ) {
	  		this.dirty = true;

	  		// Once the DOM has been updated, ensure the query
	  		// is correctly ordered
	  		runloop.scheduleTask( function () { return this$1.update(); } );
	  	}
	  };

	  Query.prototype.remove = function remove ( nodeOrComponent ) {
	  	var index = this.result.indexOf( this.isComponentQuery ? nodeOrComponent.instance : nodeOrComponent );
	  	if ( index !== -1 ) this.result.splice( index, 1 );
	  };

	  Query.prototype.update = function update () {
	  	this.result.sort( this.isComponentQuery ? sortByItemPosition : sortByDocumentPosition );
	  	this.dirty = false;
	  };

	  Query.prototype.test = function test ( item ) {
	  	return this.isComponentQuery ?
	  		( !this.selector || item.name === this.selector ) :
	  		( item ? matches( item, this.selector ) : null );
	  };

	  function Ractive$findAll ( selector, options ) {
	  	if ( !this.el ) throw new Error( ("Cannot call ractive.findAll('" + selector + "', ...) unless instance is rendered to the DOM") );

	  	options = options || {};
	  	var liveQueries = this._liveQueries;

	  	// Shortcut: if we're maintaining a live query with this
	  	// selector, we don't need to traverse the parallel DOM
	  	var query = liveQueries[ selector ];
	  	if ( query ) {
	  		// Either return the exact same query, or (if not live) a snapshot
	  		return ( options && options.live ) ? query : query.slice();
	  	}

	  	query = new Query( this, selector, !!options.live, false );

	  	// Add this to the list of live queries Ractive needs to maintain,
	  	// if applicable
	  	if ( query.live ) {
	  		liveQueries.push( selector );
	  		liveQueries[ '_' + selector ] = query;
	  	}

	  	this.fragment.findAll( selector, query );

	  	query.init();
	  	return query.result;
	  }

	  function Ractive$findAllComponents ( selector, options ) {
	  	options = options || {};
	  	var liveQueries = this._liveComponentQueries;

	  	// Shortcut: if we're maintaining a live query with this
	  	// selector, we don't need to traverse the parallel DOM
	  	var query = liveQueries[ selector ];
	  	if ( query ) {
	  		// Either return the exact same query, or (if not live) a snapshot
	  		return ( options && options.live ) ? query : query.slice();
	  	}

	  	query = new Query( this, selector, !!options.live, true );

	  	// Add this to the list of live queries Ractive needs to maintain,
	  	// if applicable
	  	if ( query.live ) {
	  		liveQueries.push( selector );
	  		liveQueries[ '_' + selector ] = query;
	  	}

	  	this.fragment.findAllComponents( selector, query );

	  	query.init();
	  	return query.result;
	  }

	  function Ractive$findComponent ( selector ) {
	  	return this.fragment.findComponent( selector );
	  }

	  function Ractive$findContainer ( selector ) {
	  	if ( this.container ) {
	  		if ( this.container.component && this.container.component.name === selector ) {
	  			return this.container;
	  		} else {
	  			return this.container.findContainer( selector );
	  		}
	  	}

	  	return null;
	  }

	  function Ractive$findParent ( selector ) {

	  	if ( this.parent ) {
	  		if ( this.parent.component && this.parent.component.name === selector ) {
	  			return this.parent;
	  		} else {
	  			return this.parent.findParent ( selector );
	  		}
	  	}

	  	return null;
	  }

	  function enqueue ( ractive, event ) {
	  	if ( ractive.event ) {
	  		ractive._eventQueue.push( ractive.event );
	  	}

	  	ractive.event = event;
	  }

	  function dequeue ( ractive ) {
	  	if ( ractive._eventQueue.length ) {
	  		ractive.event = ractive._eventQueue.pop();
	  	} else {
	  		ractive.event = null;
	  	}
	  }

	  var starMaps = {};

	  // This function takes a keypath such as 'foo.bar.baz', and returns
	  // all the variants of that keypath that include a wildcard in place
	  // of a key, such as 'foo.bar.*', 'foo.*.baz', 'foo.*.*' and so on.
	  // These are then checked against the dependants map (ractive.viewmodel.depsMap)
	  // to see if any pattern observers are downstream of one or more of
	  // these wildcard keypaths (e.g. 'foo.bar.*.status')
	  function getPotentialWildcardMatches ( keypath ) {
	  	var keys, starMap, mapper, i, result, wildcardKeypath;

	  	keys = splitKeypathI( keypath );
	  	if( !( starMap = starMaps[ keys.length ]) ) {
	  		starMap = getStarMap( keys.length );
	  	}

	  	result = [];

	  	mapper = function ( star, i ) {
	  		return star ? '*' : keys[i];
	  	};

	  	i = starMap.length;
	  	while ( i-- ) {
	  		wildcardKeypath = starMap[i].map( mapper ).join( '.' );

	  		if ( !result.hasOwnProperty( wildcardKeypath ) ) {
	  			result.push( wildcardKeypath );
	  			result[ wildcardKeypath ] = true;
	  		}
	  	}

	  	return result;
	  }

	  // This function returns all the possible true/false combinations for
	  // a given number - e.g. for two, the possible combinations are
	  // [ true, true ], [ true, false ], [ false, true ], [ false, false ].
	  // It does so by getting all the binary values between 0 and e.g. 11
	  function getStarMap ( num ) {
	  	var ones = '', max, binary, starMap, mapper, i, j, l, map;

	  	if ( !starMaps[ num ] ) {
	  		starMap = [];

	  		while ( ones.length < num ) {
	  			ones += 1;
	  		}

	  		max = parseInt( ones, 2 );

	  		mapper = function ( digit ) {
	  			return digit === '1';
	  		};

	  		for ( i = 0; i <= max; i += 1 ) {
	  			binary = i.toString( 2 );
	  			while ( binary.length < num ) {
	  				binary = '0' + binary;
	  			}

	  			map = [];
	  			l = binary.length;
	  			for (j = 0; j < l; j++) {
	  				map.push( mapper( binary[j] ) );
	  			}
	  			starMap[i] = map;
	  		}

	  		starMaps[ num ] = starMap;
	  	}

	  	return starMaps[ num ];
	  }

	  var wildcardCache = {};

	  function fireEvent ( ractive, eventName, options ) {
	  	if ( options === void 0 ) options = {};

	  	if ( !eventName ) { return; }

	  	if ( !options.event ) {
	  		options.event = {
	  			name: eventName,
	  			// until event not included as argument default
	  			_noArg: true
	  		};
	  	} else {
	  		options.event.name = eventName;
	  	}

	  	var eventNames = getWildcardNames( eventName );

	  	return fireEventAs( ractive, eventNames, options.event, options.args, true );
	  }

	  function getWildcardNames ( eventName ) {
	  	if ( wildcardCache.hasOwnProperty( eventName ) ) {
	  		return wildcardCache[ eventName ];
	  	} else {
	  		return wildcardCache[ eventName ] = getPotentialWildcardMatches( eventName );
	  	}
	  }

	  function fireEventAs  ( ractive, eventNames, event, args, initialFire ) {

	  	if ( initialFire === void 0 ) initialFire = false;

	  	var subscribers, i, bubble = true;

	  	enqueue( ractive, event );

	  	for ( i = eventNames.length; i >= 0; i-- ) {
	  		subscribers = ractive._subs[ eventNames[ i ] ];

	  		if ( subscribers ) {
	  			bubble = notifySubscribers( ractive, subscribers, event, args ) && bubble;
	  		}
	  	}

	  	dequeue( ractive );

	  	if ( ractive.parent && bubble ) {

	  		if ( initialFire && ractive.component ) {
	  			var fullName = ractive.component.name + '.' + eventNames[ eventNames.length-1 ];
	  			eventNames = getWildcardNames( fullName );

	  			if( event && !event.component ) {
	  				event.component = ractive;
	  			}
	  		}

	  		fireEventAs( ractive.parent, eventNames, event, args );
	  	}

	  	return bubble;
	  }

	  function notifySubscribers ( ractive, subscribers, event, args ) {
	  	var originalEvent = null, stopEvent = false;

	  	if ( event && !event._noArg ) {
	  		args = [ event ].concat( args );
	  	}

	  	// subscribers can be modified inflight, e.g. "once" functionality
	  	// so we need to copy to make sure everyone gets called
	  	subscribers = subscribers.slice();

	  	for ( var i = 0, len = subscribers.length; i < len; i += 1 ) {
	  		if ( !subscribers[ i ].off && subscribers[ i ].apply( ractive, args ) === false ) {
	  			stopEvent = true;
	  		}
	  	}

	  	if ( event && !event._noArg && stopEvent && ( originalEvent = event.original ) ) {
	  		originalEvent.preventDefault && originalEvent.preventDefault();
	  		originalEvent.stopPropagation && originalEvent.stopPropagation();
	  	}

	  	return !stopEvent;
	  }

	  function Ractive$fire ( eventName ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	return fireEvent( this, eventName, { args: args });
	  }

	  function badReference ( key ) {
	  	throw new Error( ("An index or key reference (" + key + ") cannot have child properties") );
	  }

	  function resolveAmbiguousReference ( fragment, ref ) {
	  	var localViewmodel = fragment.findContext().root;
	  	var keys = splitKeypathI( ref );
	  	var key = keys[0];

	  	var hasContextChain;
	  	var crossedComponentBoundary;
	  	var aliases;

	  	while ( fragment ) {
	  		// repeated fragments
	  		if ( fragment.isIteration ) {
	  			if ( key === fragment.parent.keyRef ) {
	  				if ( keys.length > 1 ) badReference( key );
	  				return fragment.context.getKeyModel( fragment.key );
	  			}

	  			if ( key === fragment.parent.indexRef ) {
	  				if ( keys.length > 1 ) badReference( key );
	  				return fragment.context.getKeyModel( fragment.index );
	  			}
	  		}

	  		// alias node or iteration
	  		if ( ( ( aliases = fragment.owner.aliases ) || ( aliases = fragment.aliases ) ) && aliases.hasOwnProperty( key ) ) {
	  			var model = aliases[ key ];

	  			if ( keys.length === 1 ) return model;
	  			else if ( typeof model.joinAll === 'function' ) {
	  				return model.joinAll( keys.slice( 1 ) );
	  			}
	  		}

	  		if ( fragment.context ) {
	  			// TODO better encapsulate the component check
	  			if ( !fragment.isRoot || fragment.ractive.component ) hasContextChain = true;

	  			if ( fragment.context.has( key ) ) {
	  				if ( crossedComponentBoundary ) {
	  					return localViewmodel.createLink( key, fragment.context.joinKey( keys.shift() ), key ).joinAll( keys );
	  				}

	  				return fragment.context.joinAll( keys );
	  			}
	  		}

	  		if ( fragment.componentParent && !fragment.ractive.isolated ) {
	  			// ascend through component boundary
	  			fragment = fragment.componentParent;
	  			crossedComponentBoundary = true;
	  		} else {
	  			fragment = fragment.parent;
	  		}
	  	}

	  	if ( !hasContextChain ) {
	  		return localViewmodel.joinAll( keys );
	  	}
	  }

	  var stack = [];
	  var captureGroup;

	  function startCapturing () {
	  	stack.push( captureGroup = [] );
	  }

	  function stopCapturing () {
	  	var dependencies = stack.pop();
	  	captureGroup = stack[ stack.length - 1 ];
	  	return dependencies;
	  }

	  function capture ( model ) {
	  	if ( captureGroup ) {
	  		captureGroup.push( model );
	  	}
	  }

	  var KeyModel = function KeyModel ( key, parent ) {
	  	this.value = key;
	  	this.isReadonly = this.isKey = true;
	  	this.deps = [];
	  	this.links = [];
	  	this.parent = parent;
	  };

	  KeyModel.prototype.get = function get ( shouldCapture ) {
	  	if ( shouldCapture ) capture( this );
	  	return unescapeKey( this.value );
	  };

	  KeyModel.prototype.getKeypath = function getKeypath () {
	  	return unescapeKey( this.value );
	  };

	  KeyModel.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		var i = this.deps.length;
	  	while ( i-- ) this$1.deps[i].rebinding( next, previous, false );

	  	i = this.links.length;
	  	while ( i-- ) this$1.links[i].rebinding( next, previous, false );
	  };

	  KeyModel.prototype.register = function register ( dependant ) {
	  	this.deps.push( dependant );
	  };

	  KeyModel.prototype.registerLink = function registerLink ( link ) {
	  	addToArray( this.links, link );
	  };

	  KeyModel.prototype.unregister = function unregister ( dependant ) {
	  	removeFromArray( this.deps, dependant );
	  };

	  KeyModel.prototype.unregisterLink = function unregisterLink ( link ) {
	  	removeFromArray( this.links, link );
	  };

	  function bind$1               ( x ) { x.bind(); }
	  function cancel             ( x ) { x.cancel(); }
	  function handleChange       ( x ) { x.handleChange(); }
	  function mark               ( x ) { x.mark(); }
	  function marked             ( x ) { x.marked(); }
	  function notifiedUpstream   ( x ) { x.notifiedUpstream(); }
	  function render             ( x ) { x.render(); }
	  function teardown           ( x ) { x.teardown(); }
	  function unbind             ( x ) { x.unbind(); }
	  function unrender           ( x ) { x.unrender(); }
	  function unrenderAndDestroy ( x ) { x.unrender( true ); }
	  function update             ( x ) { x.update(); }
	  function toString$1           ( x ) { return x.toString(); }
	  function toEscapedString    ( x ) { return x.toString( true ); }

	  var KeypathModel = function KeypathModel ( parent, ractive ) {
	  	this.parent = parent;
	  	this.ractive = ractive;
	  	this.value = ractive ? parent.getKeypath( ractive ) : parent.getKeypath();
	  	this.deps = [];
	  	this.children = {};
	  	this.isReadonly = this.isKeypath = true;
	  };

	  KeypathModel.prototype.get = function get ( shouldCapture ) {
	  	if ( shouldCapture ) capture( this );
	  	return this.value;
	  };

	  KeypathModel.prototype.getChild = function getChild ( ractive ) {
	  	if ( !( ractive._guid in this.children ) ) {
	  		var model = new KeypathModel( this.parent, ractive );
	  		this.children[ ractive._guid ] = model;
	  		model.owner = this;
	  	}
	  	return this.children[ ractive._guid ];
	  };

	  KeypathModel.prototype.getKeypath = function getKeypath () {
	  	return this.value;
	  };

	  KeypathModel.prototype.handleChange = function handleChange$1 () {
	  	var this$1 = this;

	  		var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		this$1.children[ keys[i] ].handleChange();
	  	}

	  	this.deps.forEach( handleChange );
	  };

	  KeypathModel.prototype.rebindChildren = function rebindChildren ( next ) {
	  	var this$1 = this;

	  		var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		var child = this$1.children[keys[i]];
	  		child.value = next.getKeypath( child.ractive );
	  		child.handleChange();
	  	}
	  };

	  KeypathModel.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		var model = next ? next.getKeypathModel( this.ractive ) : undefined;

	  	var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		this$1.children[ keys[i] ].rebinding( next, previous, false );
	  	}

	  	i = this.deps.length;
	  	while ( i-- ) {
	  		this$1.deps[i].rebinding( model, this$1, false );
	  	}
	  };

	  KeypathModel.prototype.register = function register ( dep ) {
	  	this.deps.push( dep );
	  };

	  KeypathModel.prototype.removeChild = function removeChild( model ) {
	  	if ( model.ractive ) delete this.children[ model.ractive._guid ];
	  };

	  KeypathModel.prototype.teardown = function teardown () {
	  	var this$1 = this;

	  		if ( this.owner ) this.owner.removeChild( this );

	  	var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		this$1.children[ keys[i] ].teardown();
	  	}
	  };

	  KeypathModel.prototype.unregister = function unregister ( dep ) {
	  	removeFromArray( this.deps, dep );
	  	if ( !this.deps.length ) this.teardown();
	  };

	  var hasProp = Object.prototype.hasOwnProperty;

	  var shuffleTasks = { early: [], mark: [] };
	  var registerQueue = { early: [], mark: [] };

	  var ModelBase = function ModelBase ( parent ) {
	  	this.deps = [];

	  	this.children = [];
	  	this.childByKey = {};
	  	this.links = [];

	  	this.keyModels = {};

	  	this.unresolved = [];
	  	this.unresolvedByKey = {};

	  	this.bindings = [];
	  	this.patternObservers = [];

	  	if ( parent ) {
	  		this.parent = parent;
	  		this.root = parent.root;
	  	}
	  };

	  ModelBase.prototype.addUnresolved = function addUnresolved ( key, resolver ) {
	  	if ( !this.unresolvedByKey[ key ] ) {
	  		this.unresolved.push( key );
	  		this.unresolvedByKey[ key ] = [];
	  	}

	  	this.unresolvedByKey[ key ].push( resolver );
	  };

	  ModelBase.prototype.addShuffleTask = function addShuffleTask ( task, stage ) { if ( stage === void 0 ) stage = 'early';

	  	shuffleTasks[stage].push( task ); };
	  ModelBase.prototype.addShuffleRegister = function addShuffleRegister ( item, stage ) { if ( stage === void 0 ) stage = 'early';

	  	registerQueue[stage].push({ model: this, item: item }); };

	  ModelBase.prototype.clearUnresolveds = function clearUnresolveds ( specificKey ) {
	  	var this$1 = this;

	  		var i = this.unresolved.length;

	  	while ( i-- ) {
	  		var key = this$1.unresolved[i];

	  		if ( specificKey && key !== specificKey ) continue;

	  		var resolvers = this$1.unresolvedByKey[ key ];
	  		var hasKey = this$1.has( key );

	  		var j = resolvers.length;
	  		while ( j-- ) {
	  			if ( hasKey ) resolvers[j].attemptResolution();
	  			if ( resolvers[j].resolved ) resolvers.splice( j, 1 );
	  		}

	  		if ( !resolvers.length ) {
	  			this$1.unresolved.splice( i, 1 );
	  			this$1.unresolvedByKey[ key ] = null;
	  		}
	  	}
	  };

	  ModelBase.prototype.findMatches = function findMatches ( keys ) {
	  	var len = keys.length;

	  	var existingMatches = [ this ];
	  	var matches;
	  	var i;

	  	var loop = function (  ) {
	  		var key = keys[i];

	  		if ( key === '*' ) {
	  			matches = [];
	  			existingMatches.forEach( function ( model ) {
	  				matches.push.apply( matches, model.getValueChildren( model.get() ) );
	  			});
	  		} else {
	  			matches = existingMatches.map( function ( model ) { return model.joinKey( key ); } );
	  		}

	  		existingMatches = matches;
	  	};

	  		for ( i = 0; i < len; i += 1 ) loop(  );

	  	return matches;
	  };

	  ModelBase.prototype.getKeyModel = function getKeyModel ( key, skip ) {
	  	if ( key !== undefined && !skip ) return this.parent.getKeyModel( key, true );

	  	if ( !( key in this.keyModels ) ) this.keyModels[ key ] = new KeyModel( escapeKey( key ), this );

	  	return this.keyModels[ key ];
	  };

	  ModelBase.prototype.getKeypath = function getKeypath ( ractive ) {
	  	if ( ractive !== this.ractive && this._link ) return this._link.target.getKeypath( ractive );

	  	if ( !this.keypath ) {
	  		this.keypath = this.parent.isRoot ? this.key : ("" + (this.parent.getKeypath( ractive )) + "." + (escapeKey( this.key )));
	  	}

	  	return this.keypath;
	  };

	  ModelBase.prototype.getValueChildren = function getValueChildren ( value ) {
	  	var this$1 = this;

	  		var children;
	  	if ( isArray( value ) ) {
	  		children = [];
	  		if ( 'length' in this && this.length !== value.length ) {
	  			children.push( this.joinKey( 'length' ) );
	  		}
	  		value.forEach( function ( m, i ) {
	  			children.push( this$1.joinKey( i ) );
	  		});
	  	}

	  	else if ( isObject( value ) || typeof value === 'function' ) {
	  		children = Object.keys( value ).map( function ( key ) { return this$1.joinKey( key ); } );
	  	}

	  	else if ( value != null ) {
	  		return [];
	  	}

	  	return children;
	  };

	  ModelBase.prototype.getVirtual = function getVirtual ( shouldCapture ) {
	  	var this$1 = this;

	  		var value = this.get( shouldCapture, { virtual: false } );
	  	if ( isObject( value ) ) {
	  		var result = isArray( value ) ? [] : {};

	  		var keys = Object.keys( value );
	  		var i = keys.length;
	  		while ( i-- ) {
	  			var child = this$1.childByKey[ keys[i] ];
	  			if ( !child ) result[ keys[i] ] = value[ keys[i] ];
	  			else if ( child._link ) result[ keys[i] ] = child._link.getVirtual();
	  			else result[ keys[i] ] = child.getVirtual();
	  		}

	  		i = this.children.length;
	  		while ( i-- ) {
	  			var child$1 = this$1.children[i];
	  			if ( !( child$1.key in result ) && child$1._link ) {
	  				result[ child$1.key ] = child$1._link.getVirtual();
	  			}
	  		}

	  		return result;
	  	} else return value;
	  };

	  ModelBase.prototype.has = function has ( key ) {
	  	if ( this._link ) return this._link.has( key );

	  	var value = this.get();
	  	if ( !value ) return false;

	  	key = unescapeKey( key );
	  	if ( hasProp.call( value, key ) ) return true;

	  	// We climb up the constructor chain to find if one of them contains the key
	  	var constructor = value.constructor;
	  	while ( constructor !== Function && constructor !== Array && constructor !== Object ) {
	  		if ( hasProp.call( constructor.prototype, key ) ) return true;
	  		constructor = constructor.constructor;
	  	}

	  	return false;
	  };

	  ModelBase.prototype.joinAll = function joinAll ( keys, opts ) {
	  	var model = this;
	  	for ( var i = 0; i < keys.length; i += 1 ) {
	  		if ( opts && opts.lastLink === false && i + 1 === keys.length && model.childByKey[keys[i]] && model.childByKey[keys[i]]._link ) return model.childByKey[keys[i]];
	  		model = model.joinKey( keys[i], opts );
	  	}

	  	return model;
	  };

	  ModelBase.prototype.notifyUpstream = function notifyUpstream () {
	  	var parent = this.parent, path = [ this.key ];
	  	while ( parent ) {
	  		if ( parent.patternObservers.length ) parent.patternObservers.forEach( function ( o ) { return o.notify( path.slice() ); } );
	  		path.unshift( parent.key );
	  		parent.links.forEach( notifiedUpstream );
	  		parent.deps.forEach( handleChange );
	  		parent = parent.parent;
	  	}
	  };

	  ModelBase.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  	// tell the deps to move to the new target
	  	var this$1 = this;

	  		var i = this.deps.length;
	  	while ( i-- ) {
	  		if ( this$1.deps[i].rebinding ) this$1.deps[i].rebinding( next, previous, safe );
	  	}

	  	i = this.links.length;
	  	while ( i-- ) {
	  		var link = this$1.links[i];
	  		// only relink the root of the link tree
	  		if ( link.owner._link ) link.relinking( next, true, safe );
	  	}

	  	i = this.children.length;
	  	while ( i-- ) {
	  		var child = this$1.children[i];
	  		child.rebinding( next ? next.joinKey( child.key ) : undefined, child, safe );
	  	}

	  	i = this.unresolved.length;
	  	while ( i-- ) {
	  		var unresolved = this$1.unresolvedByKey[ this$1.unresolved[i] ];
	  		var c = unresolved.length;
	  		while ( c-- ) {
	  			unresolved[c].rebinding( next, previous );
	  		}
	  	}

	  	if ( this.keypathModel ) this.keypathModel.rebinding( next, previous, false );

	  	i = this.bindings.length;
	  	while ( i-- ) {
	  		this$1.bindings[i].rebinding( next, previous, safe );
	  	}
	  };

	  ModelBase.prototype.register = function register ( dep ) {
	  	this.deps.push( dep );
	  };

	  ModelBase.prototype.registerChange = function registerChange ( key, value ) {
	  	if ( !this.isRoot ) {
	  		this.root.registerChange( key, value );
	  	} else {
	  		this.changes[ key ] = value;
	  		runloop.addInstance( this.root.ractive );
	  	}
	  };

	  ModelBase.prototype.registerLink = function registerLink ( link ) {
	  	addToArray( this.links, link );
	  };

	  ModelBase.prototype.registerPatternObserver = function registerPatternObserver ( observer ) {
	  	this.patternObservers.push( observer );
	  	this.register( observer );
	  };

	  ModelBase.prototype.registerTwowayBinding = function registerTwowayBinding ( binding ) {
	  	this.bindings.push( binding );
	  };

	  ModelBase.prototype.removeUnresolved = function removeUnresolved ( key, resolver ) {
	  	var resolvers = this.unresolvedByKey[ key ];

	  	if ( resolvers ) {
	  		removeFromArray( resolvers, resolver );
	  	}
	  };

	  ModelBase.prototype.shuffled = function shuffled () {
	  	var this$1 = this;

	  		var i = this.children.length;
	  	while ( i-- ) {
	  		this$1.children[i].shuffled();
	  	}
	  	if ( this.wrapper ) {
	  		this.wrapper.teardown();
	  		this.wrapper = null;
	  		this.rewrap = true;
	  	}
	  };

	  ModelBase.prototype.unregister = function unregister ( dependant ) {
	  	removeFromArray( this.deps, dependant );
	  };

	  ModelBase.prototype.unregisterLink = function unregisterLink ( link ) {
	  	removeFromArray( this.links, link );
	  };

	  ModelBase.prototype.unregisterPatternObserver = function unregisterPatternObserver ( observer ) {
	  	removeFromArray( this.patternObservers, observer );
	  	this.unregister( observer );
	  };

	  ModelBase.prototype.unregisterTwowayBinding = function unregisterTwowayBinding ( binding ) {
	  	removeFromArray( this.bindings, binding );
	  };

	  ModelBase.prototype.updateFromBindings = function updateFromBindings$1 ( cascade ) {
	  	var this$1 = this;

	  		var i = this.bindings.length;
	  	while ( i-- ) {
	  		var value = this$1.bindings[i].getValue();
	  		if ( value !== this$1.value ) this$1.set( value );
	  	}

	  	// check for one-way bindings if there are no two-ways
	  	if ( !this.bindings.length ) {
	  		var oneway = findBoundValue( this.deps );
	  		if ( oneway && oneway.value !== this.value ) this.set( oneway.value );
	  	}

	  	if ( cascade ) {
	  		this.children.forEach( updateFromBindings );
	  		this.links.forEach( updateFromBindings );
	  		if ( this._link ) this._link.updateFromBindings( cascade );
	  	}
	  };

	  function updateFromBindings ( model ) {
	  	model.updateFromBindings( true );
	  }

	  function findBoundValue( list ) {
	  	var i = list.length;
	  	while ( i-- ) {
	  		if ( list[i].bound ) {
	  			var owner = list[i].owner;
	  			if ( owner ) {
	  				var value = owner.name === 'checked' ?
	  					owner.node.checked :
	  					owner.node.value;
	  				return { value: value };
	  			}
	  		}
	  	}
	  }

	  function fireShuffleTasks ( stage ) {
	  	if ( !stage ) {
	  		fireShuffleTasks( 'early' );
	  		fireShuffleTasks( 'mark' );
	  	} else {
	  		var tasks = shuffleTasks[stage];
	  		shuffleTasks[stage] = [];
	  		var i = tasks.length;
	  		while ( i-- ) tasks[i]();

	  		var register = registerQueue[stage];
	  		registerQueue[stage] = [];
	  		i = register.length;
	  		while ( i-- ) register[i].model.register( register[i].item );
	  	}
	  }

	  KeyModel.prototype.addShuffleTask = ModelBase.prototype.addShuffleTask;
	  KeyModel.prototype.addShuffleRegister = ModelBase.prototype.addShuffleRegister;
	  KeypathModel.prototype.addShuffleTask = ModelBase.prototype.addShuffleTask;
	  KeypathModel.prototype.addShuffleRegister = ModelBase.prototype.addShuffleRegister;

	  // this is the dry method of checking to see if a rebind applies to
	  // a particular keypath because in some cases, a dep may be bound
	  // directly to a particular keypath e.g. foo.bars.0.baz and need
	  // to avoid getting kicked to foo.bars.1.baz if foo.bars is unshifted
	  function rebindMatch ( template, next, previous ) {
	  	var keypath = template.r || template;

	  	// no valid keypath, go with next
	  	if ( !keypath || typeof keypath !== 'string' ) return next;

	  	// completely contextual ref, go with next
	  	if ( keypath === '.' || keypath[0] === '@' || (next || previous).isKey || (next || previous).isKeypath ) return next;

	  	var parts = keypath.split( '/' );
	  	var keys = splitKeypathI( parts[ parts.length - 1 ] );

	  	// check the keypath against the model keypath to see if it matches
	  	var model = next || previous;
	  	var i = keys.length;
	  	var match = true, shuffling = false;

	  	while ( model && i-- ) {
	  		if ( model.shuffling ) shuffling = true;
	  		// non-strict comparison to account for indices in keypaths
	  		if ( keys[i] != model.key ) match = false;
	  		model = model.parent;
	  	}

	  	// next is undefined, but keypath is shuffling and previous matches
	  	if ( !next && match && shuffling ) return previous;
	  	// next is defined, but doesn't match the keypath
	  	else if ( next && !match && shuffling ) return previous;
	  	else return next;
	  }

	  var LinkModel = (function (ModelBase) {
	  	function LinkModel ( parent, owner, target, key ) {
	  		ModelBase.call( this, parent );

	  		this.owner = owner;
	  		this.target = target;
	  		this.key = key === undefined ? owner.key : key;
	  		if ( owner.isLink ) this.sourcePath = "" + (owner.sourcePath) + "." + (this.key);

	  		target.registerLink( this );

	  		this.isReadonly = parent.isReadonly;

	  		this.isLink = true;
	  	}

	  	LinkModel.prototype = Object.create( ModelBase && ModelBase.prototype );
	  	LinkModel.prototype.constructor = LinkModel;

	  	LinkModel.prototype.animate = function animate ( from, to, options, interpolator ) {
	  		this.target.animate( from, to, options, interpolator );
	  	};

	  	LinkModel.prototype.applyValue = function applyValue ( value ) {
	  		this.target.applyValue( value );
	  	};

	  	LinkModel.prototype.get = function get ( shouldCapture, opts ) {
	  		if ( shouldCapture ) {
	  			capture( this );

	  			// may need to tell the target to unwrap
	  			opts = opts || {};
	  			opts.unwrap = true;
	  		}

	  		return this.target.get( false, opts );
	  	};

	  	LinkModel.prototype.getKeypath = function getKeypath ( ractive ) {
	  		if ( ractive && ractive !== this.root.ractive ) return this.target.getKeypath( ractive );

	  		return ModelBase.prototype.getKeypath.call( this, ractive );
	  	};

	  	LinkModel.prototype.getKeypathModel = function getKeypathModel ( ractive ) {
	  		if ( !this.keypathModel ) this.keypathModel = new KeypathModel( this );
	  		if ( ractive && ractive !== this.root.ractive ) return this.keypathModel.getChild( ractive );
	  		return this.keypathModel;
	  	};

	  	LinkModel.prototype.handleChange = function handleChange$1 () {
	  		this.deps.forEach( handleChange );
	  		this.links.forEach( handleChange );
	  		this.notifyUpstream();
	  	};

	  	LinkModel.prototype.joinKey = function joinKey ( key ) {
	  		// TODO: handle nested links
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new LinkModel( this, this, this.target.joinKey( key ), key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	LinkModel.prototype.mark = function mark () {
	  		this.target.mark();
	  	};

	  	LinkModel.prototype.marked = function marked$1 () {
	  		this.links.forEach( marked );

	  		this.deps.forEach( handleChange );
	  		this.clearUnresolveds();
	  	};

	  	LinkModel.prototype.notifiedUpstream = function notifiedUpstream$1 () {
	  		this.links.forEach( notifiedUpstream );
	  		this.deps.forEach( handleChange );
	  	};

	  	LinkModel.prototype.relinked = function relinked () {
	  		this.target.registerLink( this );
	  		this.children.forEach( function ( c ) { return c.relinked(); } );
	  	};

	  	LinkModel.prototype.relinking = function relinking ( target, root, safe ) {
	  		var this$1 = this;

	  		if ( root && this.sourcePath ) target = rebindMatch( this.sourcePath, target, this.target );
	  		if ( !target || this.target === target ) return;

	  		this.target.unregisterLink( this );
	  		if ( this.keypathModel ) this.keypathModel.rebindChildren( target );

	  		this.target = target;
	  		this.children.forEach( function ( c ) {
	  			c.relinking( target.joinKey( c.key ), false, safe );
	  		});

	  		if ( root ) this.addShuffleTask( function () {
	  			this$1.relinked();
	  			if ( !safe ) this$1.notifyUpstream();
	  		});
	  	};

	  	LinkModel.prototype.set = function set ( value ) {
	  		this.target.set( value );
	  	};

	  	LinkModel.prototype.shuffle = function shuffle ( newIndices ) {
	  		// watch for extra shuffles caused by a shuffle in a downstream link
	  		var this$1 = this;

	  		if ( this.shuffling ) return;

	  		// let the real model handle firing off shuffles
	  		if ( !this.target.shuffling ) {
	  			this.target.shuffle( newIndices );
	  		} else {
	  			this.shuffling = true;

	  			var i = newIndices.length;
	  			while ( i-- ) {
	  				var idx = newIndices[ i ];
	  				// nothing is actually changing, so move in the index and roll on
	  				if ( i === idx ) {
	  					continue;
	  				}

	  				// rebind the children on i to idx
	  				if ( i in this$1.childByKey ) this$1.childByKey[ i ].rebinding( !~idx ? undefined : this$1.joinKey( idx ), this$1.childByKey[ i ], true );

	  				if ( !~idx && this$1.keyModels[ i ] ) {
	  					this$1.keyModels[i].rebinding( undefined, this$1.keyModels[i], false );
	  				} else if ( ~idx && this$1.keyModels[ i ] ) {
	  					if ( !this$1.keyModels[ idx ] ) this$1.childByKey[ idx ].getKeyModel( idx );
	  					this$1.keyModels[i].rebinding( this$1.keyModels[ idx ], this$1.keyModels[i], false );
	  				}
	  			}

	  			var upstream = this.source().length !== this.source().value.length;

	  			this.links.forEach( function ( l ) { return l.shuffle( newIndices ); } );

	  			i = this.deps.length;
	  			while ( i-- ) {
	  				if ( this$1.deps[i].shuffle ) this$1.deps[i].shuffle( newIndices );
	  			}

	  			this.marked();

	  			if ( upstream ) this.notifyUpstream();

	  			this.shuffling = false;
	  		}

	  	};

	  	LinkModel.prototype.source = function source () {
	  		if ( this.target.source ) return this.target.source();
	  		else return this.target;
	  	};

	  	LinkModel.prototype.teardown = function teardown$1 () {
	  		if ( this._link ) this._link.teardown();
	  		this.children.forEach( teardown );
	  	};

	  	return LinkModel;
	  }(ModelBase));

	  ModelBase.prototype.link = function link ( model, keypath ) {
	  	var lnk = this._link || new LinkModel( this.parent, this, model, this.key );
	  	lnk.sourcePath = keypath;
	  	if ( this._link ) this._link.relinking( model, true, false );
	  	this.rebinding( lnk, this, false );
	  	fireShuffleTasks();

	  	var unresolved = !this._link;
	  	this._link = lnk;
	  	if ( unresolved ) this.parent.clearUnresolveds();
	  	lnk.marked();
	  	return lnk;
	  };

	  ModelBase.prototype.unlink = function unlink () {
	  	if ( this._link ) {
	  		var ln = this._link;
	  		this._link = undefined;
	  		ln.rebinding( this, this._link );
	  		fireShuffleTasks();
	  		ln.teardown();
	  	}
	  };

	  var requestAnimationFrame;

	  // If window doesn't exist, we don't need requestAnimationFrame
	  if ( !win ) {
	  	requestAnimationFrame = null;
	  } else {
	  	// https://gist.github.com/paulirish/1579671
	  	(function(vendors, lastTime, win) {

	  		var x, setTimeout;

	  		if ( win.requestAnimationFrame ) {
	  			return;
	  		}

	  		for ( x = 0; x < vendors.length && !win.requestAnimationFrame; ++x ) {
	  			win.requestAnimationFrame = win[vendors[x]+'RequestAnimationFrame'];
	  		}

	  		if ( !win.requestAnimationFrame ) {
	  			setTimeout = win.setTimeout;

	  			win.requestAnimationFrame = function(callback) {
	  				var currTime, timeToCall, id;

	  				currTime = Date.now();
	  				timeToCall = Math.max( 0, 16 - (currTime - lastTime ) );
	  				id = setTimeout( function() { callback(currTime + timeToCall); }, timeToCall );

	  				lastTime = currTime + timeToCall;
	  				return id;
	  			};
	  		}

	  	}( vendors, 0, win ));

	  	requestAnimationFrame = win.requestAnimationFrame;
	  }

	  var rAF = requestAnimationFrame;

	  var getTime = ( win && win.performance && typeof win.performance.now === 'function' ) ?
	  	function () { return win.performance.now(); } :
	  	function () { return Date.now(); };

	  // TODO what happens if a transition is aborted?

	  var tickers = [];
	  var running = false;

	  function tick () {
	  	runloop.start();

	  	var now = getTime();

	  	var i;
	  	var ticker;

	  	for ( i = 0; i < tickers.length; i += 1 ) {
	  		ticker = tickers[i];

	  		if ( !ticker.tick( now ) ) {
	  			// ticker is complete, remove it from the stack, and decrement i so we don't miss one
	  			tickers.splice( i--, 1 );
	  		}
	  	}

	  	runloop.end();

	  	if ( tickers.length ) {
	  		rAF( tick );
	  	} else {
	  		running = false;
	  	}
	  }

	  var Ticker = function Ticker ( options ) {
	  	this.duration = options.duration;
	  	this.step = options.step;
	  	this.complete = options.complete;
	  	this.easing = options.easing;

	  	this.start = getTime();
	  	this.end = this.start + this.duration;

	  	this.running = true;

	  	tickers.push( this );
	  	if ( !running ) rAF( tick );
	  };

	  Ticker.prototype.tick = function tick$1 ( now ) {
	  	if ( !this.running ) return false;

	  	if ( now > this.end ) {
	  		if ( this.step ) this.step( 1 );
	  		if ( this.complete ) this.complete( 1 );

	  		return false;
	  	}

	  	var elapsed = now - this.start;
	  	var eased = this.easing( elapsed / this.duration );

	  	if ( this.step ) this.step( eased );

	  	return true;
	  };

	  Ticker.prototype.stop = function stop () {
	  	if ( this.abort ) this.abort();
	  	this.running = false;
	  };

	  var prefixers = {};

	  // TODO this is legacy. sooner we can replace the old adaptor API the better
	  function prefixKeypath ( obj, prefix ) {
	  	var prefixed = {}, key;

	  	if ( !prefix ) {
	  		return obj;
	  	}

	  	prefix += '.';

	  	for ( key in obj ) {
	  		if ( obj.hasOwnProperty( key ) ) {
	  			prefixed[ prefix + key ] = obj[ key ];
	  		}
	  	}

	  	return prefixed;
	  }

	  function getPrefixer ( rootKeypath ) {
	  	var rootDot;

	  	if ( !prefixers[ rootKeypath ] ) {
	  		rootDot = rootKeypath ? rootKeypath + '.' : '';

	  		prefixers[ rootKeypath ] = function ( relativeKeypath, value ) {
	  			var obj;

	  			if ( typeof relativeKeypath === 'string' ) {
	  				obj = {};
	  				obj[ rootDot + relativeKeypath ] = value;
	  				return obj;
	  			}

	  			if ( typeof relativeKeypath === 'object' ) {
	  				// 'relativeKeypath' is in fact a hash, not a keypath
	  				return rootDot ? prefixKeypath( relativeKeypath, rootKeypath ) : relativeKeypath;
	  			}
	  		};
	  	}

	  	return prefixers[ rootKeypath ];
	  }

	  var Model = (function (ModelBase) {
	  	function Model ( parent, key ) {
	  		ModelBase.call( this, parent );

	  		this.ticker = null;

	  		if ( parent ) {
	  			this.key = unescapeKey( key );
	  			this.isReadonly = parent.isReadonly;

	  			if ( parent.value ) {
	  				this.value = parent.value[ this.key ];
	  				if ( isArray( this.value ) ) this.length = this.value.length;
	  				this.adapt();
	  			}
	  		}
	  	}

	  	Model.prototype = Object.create( ModelBase && ModelBase.prototype );
	  	Model.prototype.constructor = Model;

	  	Model.prototype.adapt = function adapt () {
	  		var this$1 = this;

	  		var adaptors = this.root.adaptors;
	  		var len = adaptors.length;

	  		this.rewrap = false;

	  		// Exit early if no adaptors
	  		if ( len === 0 ) return;

	  		var value = this.wrapper ? ( 'newWrapperValue' in this ? this.newWrapperValue : this.wrapperValue ) : this.value;

	  		// TODO remove this legacy nonsense
	  		var ractive = this.root.ractive;
	  		var keypath = this.getKeypath();

	  		// tear previous adaptor down if present
	  		if ( this.wrapper ) {
	  			var shouldTeardown = this.wrapperValue === value ? false : !this.wrapper.reset || this.wrapper.reset( value ) === false;

	  			if ( shouldTeardown ) {
	  				this.wrapper.teardown();
	  				this.wrapper = null;

	  				// don't branch for undefined values
	  				if ( this.value !== undefined ) {
	  					var parentValue = this.parent.value || this.parent.createBranch( this.key );
	  					if ( parentValue[ this.key ] !== value ) parentValue[ this.key ] = value;
	  				}
	  			} else {
	  				delete this.newWrapperValue;
	  				this.wrapperValue = value;
	  				this.value = this.wrapper.get();
	  				return;
	  			}
	  		}

	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var adaptor = adaptors[i];
	  			if ( adaptor.filter( value, keypath, ractive ) ) {
	  				this$1.wrapper = adaptor.wrap( ractive, value, keypath, getPrefixer( keypath ) );
	  				this$1.wrapperValue = value;
	  				this$1.wrapper.__model = this$1; // massive temporary hack to enable array adaptor

	  				this$1.value = this$1.wrapper.get();

	  				break;
	  			}
	  		}
	  	};

	  	Model.prototype.animate = function animate ( from, to, options, interpolator ) {
	  		var this$1 = this;

	  		if ( this.ticker ) this.ticker.stop();

	  		var fulfilPromise;
	  		var promise = new Promise$1( function ( fulfil ) { return fulfilPromise = fulfil; } );

	  		this.ticker = new Ticker({
	  			duration: options.duration,
	  			easing: options.easing,
	  			step: function ( t ) {
	  				var value = interpolator( t );
	  				this$1.applyValue( value );
	  				if ( options.step ) options.step( t, value );
	  			},
	  			complete: function () {
	  				this$1.applyValue( to );
	  				if ( options.complete ) options.complete( to );

	  				this$1.ticker = null;
	  				fulfilPromise();
	  			}
	  		});

	  		promise.stop = this.ticker.stop;
	  		return promise;
	  	};

	  	Model.prototype.applyValue = function applyValue ( value ) {
	  		if ( isEqual( value, this.value ) ) return;

	  		// TODO deprecate this nonsense
	  		this.registerChange( this.getKeypath(), value );

	  		if ( this.parent.wrapper && this.parent.wrapper.set ) {
	  			this.parent.wrapper.set( this.key, value );
	  			this.parent.value = this.parent.wrapper.get();

	  			this.value = this.parent.value[ this.key ];
	  			if ( this.wrapper ) this.newWrapperValue = this.value;
	  			this.adapt();
	  		} else if ( this.wrapper ) {
	  			this.newWrapperValue = value;
	  			this.adapt();
	  		} else {
	  			var parentValue = this.parent.value || this.parent.createBranch( this.key );
	  			parentValue[ this.key ] = value;

	  			this.value = value;
	  			this.adapt();
	  		}

	  		this.parent.clearUnresolveds();
	  		this.clearUnresolveds();

	  		// keep track of array length
	  		if ( isArray( value ) ) this.length = value.length;

	  		// notify dependants
	  		this.links.forEach( handleChange );
	  		this.children.forEach( mark );
	  		this.deps.forEach( handleChange );

	  		this.notifyUpstream();

	  		if ( this.key === 'length' && isArray( this.parent.value ) ) this.parent.length = this.parent.value.length;
	  	};

	  	Model.prototype.createBranch = function createBranch ( key ) {
	  		var branch = isNumeric( key ) ? [] : {};
	  		this.set( branch );

	  		return branch;
	  	};

	  	Model.prototype.get = function get ( shouldCapture, opts ) {
	  		if ( this._link ) return this._link.get( shouldCapture, opts );
	  		if ( shouldCapture ) capture( this );
	  		// if capturing, this value needs to be unwrapped because it's for external use
	  		if ( opts && opts.virtual ) return this.getVirtual( false );
	  		return ( shouldCapture || ( opts && opts.unwrap ) ) && this.wrapper ? this.wrapperValue : this.value;
	  	};

	  	Model.prototype.getKeypathModel = function getKeypathModel ( ractive ) {
	  		if ( !this.keypathModel ) this.keypathModel = new KeypathModel( this );
	  		return this.keypathModel;
	  	};

	  	Model.prototype.joinKey = function joinKey ( key, opts ) {
	  		if ( this._link ) {
	  			if ( opts && !opts.lastLink === false && ( key === undefined || key === '' ) ) return this;
	  			return this._link.joinKey( key );
	  		}

	  		if ( key === undefined || key === '' ) return this;


	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new Model( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		if ( this.childByKey[ key ]._link ) return this.childByKey[ key ]._link;
	  		return this.childByKey[ key ];
	  	};

	  	Model.prototype.mark = function mark$1 () {
	  		if ( this._link ) return this._link.mark();

	  		var value = this.retrieve();

	  		if ( !isEqual( value, this.value ) ) {
	  			var old = this.value;
	  			this.value = value;

	  			// make sure the wrapper stays in sync
	  			if ( old !== value || this.rewrap ) {
	  				if ( this.wrapper ) this.newWrapperValue = value;
	  				this.adapt();
	  			}

	  			// keep track of array lengths
	  			if ( isArray( value ) ) this.length = value.length;

	  			this.children.forEach( mark );
	  			this.links.forEach( marked );

	  			this.deps.forEach( handleChange );
	  			this.clearUnresolveds();
	  		}
	  	};

	  	Model.prototype.merge = function merge ( array, comparator ) {
	  		var oldArray = this.value, newArray = array;
	  		if ( oldArray === newArray ) oldArray = recreateArray( this );
	  		if ( comparator ) {
	  			oldArray = oldArray.map( comparator );
	  			newArray = newArray.map( comparator );
	  		}

	  		var oldLength = oldArray.length;

	  		var usedIndices = {};
	  		var firstUnusedIndex = 0;

	  		var newIndices = oldArray.map( function ( item ) {
	  			var index;
	  			var start = firstUnusedIndex;

	  			do {
	  				index = newArray.indexOf( item, start );

	  				if ( index === -1 ) {
	  					return -1;
	  				}

	  				start = index + 1;
	  			} while ( ( usedIndices[ index ] === true ) && start < oldLength );

	  			// keep track of the first unused index, so we don't search
	  			// the whole of newArray for each item in oldArray unnecessarily
	  			if ( index === firstUnusedIndex ) {
	  				firstUnusedIndex += 1;
	  			}
	  			// allow next instance of next "equal" to be found item
	  			usedIndices[ index ] = true;
	  			return index;
	  		});

	  		this.parent.value[ this.key ] = array;
	  		this.shuffle( newIndices );
	  	};

	  	Model.prototype.retrieve = function retrieve () {
	  		return this.parent.value ? this.parent.value[ this.key ] : undefined;
	  	};

	  	Model.prototype.set = function set ( value ) {
	  		if ( this.ticker ) this.ticker.stop();
	  		this.applyValue( value );
	  	};

	  	Model.prototype.shuffle = function shuffle ( newIndices ) {
	  		var this$1 = this;

	  		this.shuffling = true;
	  		var i = newIndices.length;
	  		while ( i-- ) {
	  			var idx = newIndices[ i ];
	  			// nothing is actually changing, so move in the index and roll on
	  			if ( i === idx ) {
	  				continue;
	  			}

	  			// rebind the children on i to idx
	  			if ( i in this$1.childByKey ) this$1.childByKey[ i ].rebinding( !~idx ? undefined : this$1.joinKey( idx ), this$1.childByKey[ i ], true );

	  			if ( !~idx && this$1.keyModels[ i ] ) {
	  				this$1.keyModels[i].rebinding( undefined, this$1.keyModels[i], false );
	  			} else if ( ~idx && this$1.keyModels[ i ] ) {
	  				if ( !this$1.keyModels[ idx ] ) this$1.childByKey[ idx ].getKeyModel( idx );
	  				this$1.keyModels[i].rebinding( this$1.keyModels[ idx ], this$1.keyModels[i], false );
	  			}
	  		}

	  		var upstream = this.length !== this.value.length;

	  		this.links.forEach( function ( l ) { return l.shuffle( newIndices ); } );
	  		fireShuffleTasks( 'early' );

	  		i = this.deps.length;
	  		while ( i-- ) {
	  			if ( this$1.deps[i].shuffle ) this$1.deps[i].shuffle( newIndices );
	  		}

	  		this.mark();
	  		fireShuffleTasks( 'mark' );

	  		if ( upstream ) this.notifyUpstream();
	  		this.shuffling = false;
	  	};

	  	Model.prototype.teardown = function teardown$1 () {
	  		if ( this._link ) this._link.teardown();
	  		this.children.forEach( teardown );
	  		if ( this.wrapper ) this.wrapper.teardown();
	  		if ( this.keypathModel ) this.keypathModel.teardown();
	  	};

	  	return Model;
	  }(ModelBase));

	  function recreateArray( model ) {
	  	var array = [];

	  	for ( var i = 0; i < model.length; i++ ) {
	  		array[ i ] = (model.childByKey[i] || {}).value;
	  	}

	  	return array;
	  }

	  var GlobalModel = (function (Model) {
	  	function GlobalModel ( ) {
	  		Model.call( this, null, '@global' );
	  		this.value = typeof global !== 'undefined' ? global : window;
	  		this.isRoot = true;
	  		this.root = this;
	  		this.adaptors = [];
	  	}

	  	GlobalModel.prototype = Object.create( Model && Model.prototype );
	  	GlobalModel.prototype.constructor = GlobalModel;

	  	GlobalModel.prototype.getKeypath = function getKeypath() {
	  		return '@global';
	  	};

	  	// global model doesn't contribute changes events because it has no instance
	  	GlobalModel.prototype.registerChange = function registerChange () {};

	  	return GlobalModel;
	  }(Model));

	  var GlobalModel$1 = new GlobalModel();

	  var keypathExpr = /^@[^\(]+\(([^\)]+)\)/;

	  function resolveReference ( fragment, ref ) {
	  	var context = fragment.findContext();

	  	// special references
	  	// TODO does `this` become `.` at parse time?
	  	if ( ref === '.' || ref === 'this' ) return context;
	  	if ( ref.indexOf( '@keypath' ) === 0 ) {
	  		var match = keypathExpr.exec( ref );
	  		if ( match && match[1] ) {
	  			var model = resolveReference( fragment, match[1] );
	  			if ( model ) return model.getKeypathModel();
	  		}
	  		return context.getKeypathModel();
	  	}
	  	if ( ref.indexOf( '@rootpath' ) === 0 ) {
	  		// check to see if this is an empty component root
	  		while ( context.isRoot && context.ractive.component ) {
	  			context = context.ractive.component.parentFragment.findContext();
	  		}

	  		var match$1 = keypathExpr.exec( ref );
	  		if ( match$1 && match$1[1] ) {
	  			var model$1 = resolveReference( fragment, match$1[1] );
	  			if ( model$1 ) return model$1.getKeypathModel( fragment.ractive.root );
	  		}
	  		return context.getKeypathModel( fragment.ractive.root );
	  	}
	  	if ( ref === '@index' || ref === '@key' ) {
	  		var repeater = fragment.findRepeatingFragment();
	  		// make sure the found fragment is actually an iteration
	  		if ( !repeater.isIteration ) return;
	  		return repeater.context.getKeyModel( repeater[ ref[1] === 'i' ? 'index' : 'key' ] );
	  	}
	  	if ( ref === '@this' ) {
	  		return fragment.ractive.viewmodel.getRactiveModel();
	  	}
	  	if ( ref === '@global' ) {
	  		return GlobalModel$1;
	  	}

	  	// ancestor references
	  	if ( ref[0] === '~' ) return fragment.ractive.viewmodel.joinAll( splitKeypathI( ref.slice( 2 ) ) );
	  	if ( ref[0] === '.' ) {
	  		var parts = ref.split( '/' );

	  		while ( parts[0] === '.' || parts[0] === '..' ) {
	  			var part = parts.shift();

	  			if ( part === '..' ) {
	  				context = context.parent;
	  			}
	  		}

	  		ref = parts.join( '/' );

	  		// special case - `{{.foo}}` means the same as `{{./foo}}`
	  		if ( ref[0] === '.' ) ref = ref.slice( 1 );
	  		return context.joinAll( splitKeypathI( ref ) );
	  	}

	  	return resolveAmbiguousReference( fragment, ref );
	  }

	  function Ractive$get ( keypath, opts ) {
	  	if ( typeof keypath !== 'string' ) return this.viewmodel.get( true, keypath );

	  	var keys = splitKeypathI( keypath );
	  	var key = keys[0];

	  	var model;

	  	if ( !this.viewmodel.has( key ) ) {
	  		// if this is an inline component, we may need to create
	  		// an implicit mapping
	  		if ( this.component && !this.isolated ) {
	  			model = resolveReference( this.component.parentFragment, key );

	  			if ( model ) {
	  				this.viewmodel.map( key, model );
	  			}
	  		}
	  	}

	  	model = this.viewmodel.joinAll( keys );
	  	return model.get( true, opts );
	  }

	  function gatherRefs( fragment ) {
	  	var key = {}, index = {};

	  	// walk up the template gather refs as we go
	  	while ( fragment ) {
	  		if ( fragment.parent && ( fragment.parent.indexRef || fragment.parent.keyRef ) ) {
	  			var ref = fragment.parent.indexRef;
	  			if ( ref && !( ref in index ) ) index[ref] = fragment.index;
	  			ref = fragment.parent.keyRef;
	  			if ( ref && !( ref in key ) ) key[ref] = fragment.key;
	  		}

	  		if ( fragment.componentParent && !fragment.ractive.isolated ) {
	  			fragment = fragment.componentParent;
	  		} else {
	  			fragment = fragment.parent;
	  		}
	  	}

	  	return { key: key, index: index };
	  }

	  // This function takes an array, the name of a mutator method, and the
	  // arguments to call that mutator method with, and returns an array that
	  // maps the old indices to their new indices.

	  // So if you had something like this...
	  //
	  //     array = [ 'a', 'b', 'c', 'd' ];
	  //     array.push( 'e' );
	  //
	  // ...you'd get `[ 0, 1, 2, 3 ]` - in other words, none of the old indices
	  // have changed. If you then did this...
	  //
	  //     array.unshift( 'z' );
	  //
	  // ...the indices would be `[ 1, 2, 3, 4, 5 ]` - every item has been moved
	  // one higher to make room for the 'z'. If you removed an item, the new index
	  // would be -1...
	  //
	  //     array.splice( 2, 2 );
	  //
	  // ...this would result in [ 0, 1, -1, -1, 2, 3 ].
	  //
	  // This information is used to enable fast, non-destructive shuffling of list
	  // sections when you do e.g. `ractive.splice( 'items', 2, 2 );

	  function getNewIndices ( length, methodName, args ) {
	  	var spliceArguments, newIndices = [], removeStart, removeEnd, balance, i;

	  	spliceArguments = getSpliceEquivalent( length, methodName, args );

	  	if ( !spliceArguments ) {
	  		return null; // TODO support reverse and sort?
	  	}

	  	balance = ( spliceArguments.length - 2 ) - spliceArguments[1];

	  	removeStart = Math.min( length, spliceArguments[0] );
	  	removeEnd = removeStart + spliceArguments[1];
	  	newIndices.startIndex = removeStart;

	  	for ( i = 0; i < removeStart; i += 1 ) {
	  		newIndices.push( i );
	  	}

	  	for ( ; i < removeEnd; i += 1 ) {
	  		newIndices.push( -1 );
	  	}

	  	for ( ; i < length; i += 1 ) {
	  		newIndices.push( i + balance );
	  	}

	  	// there is a net shift for the rest of the array starting with index + balance
	  	if ( balance !== 0 ) {
	  		newIndices.touchedFrom = spliceArguments[0];
	  	} else {
	  		newIndices.touchedFrom = length;
	  	}

	  	return newIndices;
	  }


	  // The pop, push, shift an unshift methods can all be represented
	  // as an equivalent splice
	  function getSpliceEquivalent ( length, methodName, args ) {
	  	switch ( methodName ) {
	  		case 'splice':
	  			if ( args[0] !== undefined && args[0] < 0 ) {
	  				args[0] = length + Math.max( args[0], -length );
	  			}

	  			if ( args[0] === undefined ) args[0] = 0;

	  			while ( args.length < 2 ) {
	  				args.push( length - args[0] );
	  			}

	  			if ( typeof args[1] !== 'number' ) {
	  				args[1] = length - args[0];
	  			}

	  			// ensure we only remove elements that exist
	  			args[1] = Math.min( args[1], length - args[0] );

	  			return args;

	  		case 'sort':
	  		case 'reverse':
	  			return null;

	  		case 'pop':
	  			if ( length ) {
	  				return [ length - 1, 1 ];
	  			}
	  			return [ 0, 0 ];

	  		case 'push':
	  			return [ length, 0 ].concat( args );

	  		case 'shift':
	  			return [ 0, length ? 1 : 0 ];

	  		case 'unshift':
	  			return [ 0, 0 ].concat( args );
	  	}
	  }

	  var arrayProto = Array.prototype;

	  function makeArrayMethod ( methodName ) {
	  	function path ( keypath ) {
	  		var args = [], len = arguments.length - 1;
	  		while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  		return model( this.viewmodel.joinAll( splitKeypathI( keypath ) ), args );
	  	}

	  	function model ( mdl, args ) {
	  		var array = mdl.get();

	  		if ( !isArray( array ) ) {
	  			if ( array === undefined ) {
	  				array = [];
	  				var result$1 = arrayProto[ methodName ].apply( array, args );
	  				var promise$1 = runloop.start( this, true ).then( function () { return result$1; } );
	  				mdl.set( array );
	  				runloop.end();
	  				return promise$1;
	  			} else {
	  				throw new Error( ("shuffle array method " + methodName + " called on non-array at " + (mdl.getKeypath())) );
	  			}
	  		}

	  		var newIndices = getNewIndices( array.length, methodName, args );
	  		var result = arrayProto[ methodName ].apply( array, args );

	  		var promise = runloop.start( this, true ).then( function () { return result; } );
	  		promise.result = result;

	  		if ( newIndices ) {
	  			mdl.shuffle( newIndices );
	  		} else {
	  			mdl.set( result );
	  		}

	  		runloop.end();

	  		return promise;
	  	}

	  	return { path: path, model: model };
	  }

	  var comparators = {};

	  function getComparator ( option ) {
	  	if ( !option ) return null; // use existing arrays
	  	if ( option === true ) return JSON.stringify;
	  	if ( typeof option === 'function' ) return option;

	  	if ( typeof option === 'string' ) {
	  		return comparators[ option ] || ( comparators[ option ] = function ( thing ) { return thing[ option ]; } );
	  	}

	  	throw new Error( 'If supplied, options.compare must be a string, function, or `true`' ); // TODO link to docs
	  }

	  function merge$1 ( ractive, model, array, options ) {
	  	var promise = runloop.start( ractive, true );
	  	var value = model.get();

	  	if ( !isArray( value ) || !isArray( array ) ) {
	  		throw new Error( 'You cannot merge an array with a non-array' );
	  	}

	  	var comparator = getComparator( options && options.compare );
	  	model.merge( array, comparator );

	  	runloop.end();
	  	return promise;
	  }

	  function thisRactive$merge ( keypath, array, options ) {
	  	return merge$1( this, this.viewmodel.joinAll( splitKeypathI( keypath ) ), array, options );
	  }

	  var updateHook = new Hook( 'update' );

	  function update$2 ( ractive, model ) {
	  	// if the parent is wrapped, the adaptor will need to be updated before
	  	// updating on this keypath
	  	if ( model.parent && model.parent.wrapper ) {
	  		model.parent.adapt();
	  	}

	  	var promise = runloop.start( ractive, true );

	  	model.mark();
	  	model.registerChange( model.getKeypath(), model.get() );

	  	if ( !model.isRoot ) {
	  		// there may be unresolved refs that are now resolvable up the context tree
	  		var parent = model.parent, key = model.key;
	  		while ( parent && !parent.isRoot ) {
	  			if ( parent.clearUnresolveds ) parent.clearUnresolveds( key );
	  			key = parent.key;
	  			parent = parent.parent;
	  		}
	  	}

	  	// notify upstream of changes
	  	model.notifyUpstream();

	  	runloop.end();

	  	updateHook.fire( ractive, model );

	  	return promise;
	  }

	  function Ractive$update ( keypath ) {
	  	if ( keypath ) keypath = splitKeypathI( keypath );

	  	return update$2( this, keypath ? this.viewmodel.joinAll( keypath ) : this.viewmodel );
	  }

	  var modelPush = makeArrayMethod( 'push' ).model;
	  var modelPop = makeArrayMethod( 'pop' ).model;
	  var modelShift = makeArrayMethod( 'shift' ).model;
	  var modelUnshift = makeArrayMethod( 'unshift' ).model;
	  var modelSort = makeArrayMethod( 'sort' ).model;
	  var modelSplice = makeArrayMethod( 'splice' ).model;
	  var modelReverse = makeArrayMethod( 'reverse' ).model;

	  // TODO: at some point perhaps this could support relative * keypaths?
	  function build$1 ( el, keypath, value ) {
	  	var sets = [];

	  	// set multiple keypaths in one go
	  	if ( isObject( keypath ) ) {
	  		for ( var k in keypath ) {
	  			if ( keypath.hasOwnProperty( k ) ) {
	  				sets.push( [ findModel( el, k ).model, keypath[k] ] );
	  			}
	  		}

	  	}
	  	// set a single keypath
	  	else {
	  		sets.push( [ findModel( el, keypath ).model, value ] );
	  	}

	  	return sets;
	  }

	  // get relative keypaths and values
	  function get ( keypath ) {
	  	if ( !keypath ) return this._element.parentFragment.findContext().get( true );

	  	var model = resolveReference( this._element.parentFragment, keypath );

	  	return model ? model.get( true ) : undefined;
	  }

	  function resolve$1 ( path, ractive ) {
	  	var ref = findModel( this, path ), model = ref.model, instance = ref.instance;
	  	return model ? model.getKeypath( ractive || instance ) : path;
	  }

	  function findModel ( el, path ) {
	  	var frag = el._element.parentFragment;

	  	if ( typeof path !== 'string' ) {
	  		return { model: frag.findContext(), instance: path };
	  	}

	  	return { model: resolveReference( frag, path ), instance: frag.ractive };
	  }

	  // the usual mutation suspects
	  function add$1 ( keypath, value ) {
	  	if ( value === undefined ) value = 1;
	  	if ( !isNumeric( value ) ) throw new Error( 'Bad arguments' );
	  	return set( this.ractive, build$1( this, keypath, value ).map( function ( pair ) {
	  		var model = pair[0], val = pair[1], value = model.get();
	  		if ( !isNumeric( val ) || !isNumeric( value ) ) throw new Error( 'Cannot add non-numeric value' );
	  		return [ model, value + val ];
	  	}) );
	  }

	  function animate ( keypath, value, options ) {
	  	var model = findModel( this, keypath ).model;
	  	return protoAnimate( this.ractive, model, value, options );
	  }

	  function link ( source, dest ) {
	  	var there = findModel( this, source ).model, here = findModel( this, dest ).model;
	  	var promise = runloop.start( this.ractive, true );
	  	here.link( there, source );
	  	runloop.end();
	  	return promise;
	  }

	  function merge ( keypath, array, options ) {
	  	return merge$1( this.ractive, findModel( this, keypath ).model, array, options );
	  }

	  function pop ( keypath ) {
	  	return modelPop( findModel( this, keypath ).model, [] );
	  }

	  function push ( keypath ) {
	  	var values = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

	  	return modelPush( findModel( this, keypath ).model, values );
	  }

	  function reverse ( keypath ) {
	  	return modelReverse( findModel( this, keypath ).model, [] );
	  }

	  function set$1 ( keypath, value ) {
	  	return set( this.ractive, build$1( this, keypath, value ) );
	  }

	  function shift ( keypath ) {
	  	return modelShift( findModel( this, keypath ).model, [] );
	  }

	  function splice ( keypath, index, drop ) {
	  	var add = [], len = arguments.length - 3;
	  	while ( len-- > 0 ) add[ len ] = arguments[ len + 3 ];

	  	add.unshift( index, drop );
	  	return modelSplice( findModel( this, keypath ).model, add );
	  }

	  function sort ( keypath ) {
	  	return modelSort( findModel( this, keypath ).model, [] );
	  }

	  function subtract ( keypath, value ) {
	  	if ( value === undefined ) value = 1;
	  	if ( !isNumeric( value ) ) throw new Error( 'Bad arguments' );
	  	return set( this.ractive, build$1( this, keypath, value ).map( function ( pair ) {
	  		var model = pair[0], val = pair[1], value = model.get();
	  		if ( !isNumeric( val ) || !isNumeric( value ) ) throw new Error( 'Cannot add non-numeric value' );
	  		return [ model, value - val ];
	  	}) );
	  }

	  function toggle ( keypath ) {
	  	var ref = findModel( this, keypath ), model = ref.model;
	  	return set( this.ractive, [ [ model, !model.get() ] ] );
	  }

	  function unlink ( dest ) {
	  	var here = findModel( this, dest ).model;
	  	var promise = runloop.start( this.ractive, true );
	  	if ( here.owner && here.owner._link ) here.owner.unlink();
	  	runloop.end();
	  	return promise;
	  }

	  function unshift ( keypath ) {
	  	var add = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) add[ len ] = arguments[ len + 1 ];

	  	return modelUnshift( findModel( this, keypath ).model, add );
	  }

	  function update$1 ( keypath ) {
	  	return update$2( this.ractive, findModel( this, keypath ).model );
	  }

	  function updateModel ( keypath, cascade ) {
	  	var ref = findModel( this, keypath ), model = ref.model;
	  	var promise = runloop.start( this.ractive, true );
	  	model.updateFromBindings( cascade );
	  	runloop.end();
	  	return promise;
	  }

	  // two-way binding related helpers
	  function isBound () {
	  	var ref = getBindingModel( this ), model = ref.model;
	  	return !!model;
	  }

	  function getBindingPath ( ractive ) {
	  	var ref = getBindingModel( this ), model = ref.model, instance = ref.instance;
	  	if ( model ) return model.getKeypath( ractive || instance );
	  }

	  function getBinding () {
	  	var ref = getBindingModel( this ), model = ref.model;
	  	if ( model ) return model.get( true );
	  }

	  function getBindingModel ( ctx ) {
	  	var el = ctx._element;
	  	return { model: el.binding && el.binding.model, instance: el.parentFragment.ractive };
	  }

	  function setBinding ( value ) {
	  	var ref = getBindingModel( this ), model = ref.model;
	  	return set( this.ractive, [ [ model, value ] ] );
	  }

	  // deprecated getters
	  function keypath () {
	  	warnOnceIfDebug( ("Object property keypath is deprecated, please use resolve() instead.") );
	  	return this.resolve();
	  }

	  function rootpath () {
	  	warnOnceIfDebug( ("Object property rootpath is deprecated, please use resolve( ractive.root ) instead.") );
	  	return this.resolve( this.ractive.root );
	  }

	  function context () {
	  	warnOnceIfDebug( ("Object property context is deprecated, please use get() instead.") );
	  	return this.get();
	  }

	  function index () {
	  	warnOnceIfDebug( ("Object property index is deprecated, you can use get( \"indexName\" ) instead.") );
	  	return gatherRefs( this._element.parentFragment ).index;
	  }

	  function key () {
	  	warnOnceIfDebug( ("Object property key is deprecated, you can use get( \"keyName\" ) instead.") );
	  	return gatherRefs( this._element.parentFragment ).key;
	  }

	  function addHelpers ( obj, element ) {
	  	defineProperties( obj, {
	  		_element: { value: element },
	  		ractive: { value: element.parentFragment.ractive },
	  		resolve: { value: resolve$1 },
	  		get: { value: get },

	  		add: { value: add$1 },
	  		animate: { value: animate },
	  		link: { value: link },
	  		merge: { value: merge },
	  		pop: { value: pop },
	  		push: { value: push },
	  		reverse: { value: reverse },
	  		set: { value: set$1 },
	  		shift: { value: shift },
	  		sort: { value: sort },
	  		splice: { value: splice },
	  		subtract: { value: subtract },
	  		toggle: { value: toggle },
	  		unlink: { value: unlink },
	  		unshift: { value: unshift },
	  		update: { value: update$1 },
	  		updateModel: { value: updateModel },

	  		isBound: { value: isBound },
	  		getBindingPath: { value: getBindingPath },
	  		getBinding: { value: getBinding },
	  		setBinding: { value: setBinding },

	  		keypath: { get: keypath },
	  		rootpath: { get: rootpath },
	  		context: { get: context },
	  		index: { get: index },
	  		key: { get: key }
	  	});

	  	return obj;
	  }

	  var query = doc && doc.querySelector;

	  function staticInfo( node ) {
	  	if ( typeof node === 'string' && query ) {
	  		node = query.call( document, node );
	  	}

	  	if ( !node || !node._ractive ) return {};

	  	var storage = node._ractive;

	  	return addHelpers( {}, storage.proxy );
	  }

	  function getNodeInfo( node ) {
	  	if ( typeof node === 'string' ) {
	  		node = this.find( node );
	  	}

	  	return staticInfo( node );
	  }

	  var insertHook = new Hook( 'insert' );

	  function Ractive$insert ( target, anchor ) {
	  	if ( !this.fragment.rendered ) {
	  		// TODO create, and link to, documentation explaining this
	  		throw new Error( 'The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.' );
	  	}

	  	target = getElement( target );
	  	anchor = getElement( anchor ) || null;

	  	if ( !target ) {
	  		throw new Error( 'You must specify a valid target to insert into' );
	  	}

	  	target.insertBefore( this.detach(), anchor );
	  	this.el = target;

	  	( target.__ractive_instances__ || ( target.__ractive_instances__ = [] ) ).push( this );
	  	this.isDetached = false;

	  	fireInsertHook( this );
	  }

	  function fireInsertHook( ractive ) {
	  	insertHook.fire( ractive );

	  	ractive.findAllComponents('*').forEach( function ( child ) {
	  		fireInsertHook( child.instance );
	  	});
	  }

	  function link$1( there, here ) {
	  	if ( here === there || (there + '.').indexOf( here + '.' ) === 0 || (here + '.').indexOf( there + '.' ) === 0 ) {
	  		throw new Error( 'A keypath cannot be linked to itself.' );
	  	}

	  	var promise = runloop.start();
	  	var model;

	  	// may need to allow a mapping to resolve implicitly
	  	var sourcePath = splitKeypathI( there );
	  	if ( !this.viewmodel.has( sourcePath[0] ) && this.component ) {
	  		model = resolveReference( this.component.parentFragment, sourcePath[0] );
	  		model = model.joinAll( sourcePath.slice( 1 ) );
	  	}

	  	this.viewmodel.joinAll( splitKeypathI( here ) ).link( model || this.viewmodel.joinAll( sourcePath ), there );

	  	runloop.end();

	  	return promise;
	  }

	  var ReferenceResolver = function ReferenceResolver ( fragment, reference, callback ) {
	  	var this$1 = this;

	  		this.fragment = fragment;
	  	this.reference = normalise( reference );
	  	this.callback = callback;

	  	this.keys = splitKeypathI( reference );
	  	this.resolved = false;

	  	this.contexts = [];

	  	// TODO the consumer should take care of addUnresolved
	  	// we attach to all the contexts between here and the root
	  	// - whenever their values change, they can quickly
	  	// check to see if we can resolve
	  	while ( fragment ) {
	  		if ( fragment.context ) {
	  			fragment.context.addUnresolved( this$1.keys[0], this$1 );
	  			this$1.contexts.push( fragment.context );
	  		}

	  		fragment = fragment.componentParent || fragment.parent;
	  	}
	  };

	  ReferenceResolver.prototype.attemptResolution = function attemptResolution () {
	  	if ( this.resolved ) return;

	  	var model = resolveAmbiguousReference( this.fragment, this.reference );

	  	if ( model ) {
	  		this.resolved = true;
	  		this.callback( model );
	  	}
	  };

	  ReferenceResolver.prototype.forceResolution = function forceResolution () {
	  	if ( this.resolved ) return;

	  	var model = this.fragment.findContext().joinAll( this.keys );
	  	this.callback( model );
	  	this.resolved = true;
	  };

	  ReferenceResolver.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		if ( previous ) previous.removeUnresolved( this.keys[0], this );
	  	if ( next ) runloop.scheduleTask( function () { return next.addUnresolved( this$1.keys[0], this$1 ); } );
	  };

	  ReferenceResolver.prototype.unbind = function unbind () {
	  	var this$1 = this;

	  		if ( this.fragment ) removeFromArray( this.fragment.unresolved, this );

	  	if ( this.resolved ) return;

	  	this.contexts.forEach( function ( c ) { return c.removeUnresolved( this$1.keys[0], this$1 ); } );
	  };

	  function observe ( keypath, callback, options ) {
	  	var this$1 = this;

	  	var observers = [];
	  	var map;

	  	if ( isObject( keypath ) ) {
	  		map = keypath;
	  		options = callback || {};

	  		Object.keys( map ).forEach( function ( keypath ) {
	  			var callback = map[ keypath ];

	  			var keypaths = keypath.split( ' ' );
	  			if ( keypaths.length > 1 ) keypaths = keypaths.filter( function ( k ) { return k; } );

	  			keypaths.forEach( function ( keypath ) {
	  				observers.push( createObserver( this$1, keypath, callback, options ) );
	  			});
	  		});
	  	}

	  	else {
	  		var keypaths;

	  		if ( typeof keypath === 'function' ) {
	  			options = callback;
	  			callback = keypath;
	  			keypaths = [ '' ];
	  		} else {
	  			keypaths = keypath.split( ' ' );
	  		}

	  		if ( keypaths.length > 1 ) keypaths = keypaths.filter( function ( k ) { return k; } );

	  		keypaths.forEach( function ( keypath ) {
	  			observers.push( createObserver( this$1, keypath, callback, options || {} ) );
	  		});
	  	}

	  	// add observers to the Ractive instance, so they can be
	  	// cancelled on ractive.teardown()
	  	this._observers.push.apply( this._observers, observers );

	  	return {
	  		cancel: function () {
	  			observers.forEach( function ( observer ) {
	  				removeFromArray ( this$1._observers, observer );
	  				observer.cancel();
	  			} );
	  		}
	  	};
	  }

	  function createObserver ( ractive, keypath, callback, options ) {
	  	var viewmodel = ractive.viewmodel;

	  	var keys = splitKeypathI( keypath );
	  	var wildcardIndex = keys.indexOf( '*' );
	  	options.keypath = keypath;

	  	// normal keypath - no wildcards
	  	if ( !~wildcardIndex ) {
	  		var key = keys[0];
	  		var model;

	  		// if not the root model itself, check if viewmodel has key.
	  		if ( key !== '' && !viewmodel.has( key ) ) {
	  			// if this is an inline component, we may need to create an implicit mapping
	  			if ( ractive.component && !ractive.isolated ) {
	  				model = resolveReference( ractive.component.parentFragment, key );
	  				if ( model ) {
	  					viewmodel.map( key, model );
	  					model = viewmodel.joinAll( keys );
	  				}
	  			}
	  		} else {
	  			model = viewmodel.joinAll( keys );
	  		}

	  		return new Observer( ractive, model, callback, options );
	  	}

	  	// pattern observers - more complex case
	  	var baseModel = wildcardIndex === 0 ?
	  		viewmodel :
	  		viewmodel.joinAll( keys.slice( 0, wildcardIndex ) );

	  	return new PatternObserver( ractive, baseModel, keys.splice( wildcardIndex ), callback, options );
	  }

	  var Observer = function Observer ( ractive, model, callback, options ) {
	  	var this$1 = this;

	  		this.context = options.context || ractive;
	  	this.callback = callback;
	  	this.ractive = ractive;

	  	if ( model ) this.resolved( model );
	  	else {
	  		this.keypath = options.keypath;
	  		this.resolver = new ReferenceResolver( ractive.fragment, options.keypath, function ( model ) {
	  			this$1.resolved( model );
	  		});
	  	}

	  	if ( options.init !== false ) {
	  		this.dirty = true;
	  		this.dispatch();
	  	} else {
	  		this.oldValue = this.newValue;
	  	}

	  	this.defer = options.defer;
	  	this.once = options.once;
	  	this.strict = options.strict;

	  	this.dirty = false;
	  };

	  Observer.prototype.cancel = function cancel () {
	  	this.cancelled = true;
	  	if ( this.model ) {
	  		this.model.unregister( this );
	  	} else {
	  		this.resolver.unbind();
	  	}
	  };

	  Observer.prototype.dispatch = function dispatch () {
	  	if ( !this.cancelled ) {
	  		this.callback.call( this.context, this.newValue, this.oldValue, this.keypath );
	  		this.oldValue = this.model ? this.model.get() : this.newValue;
	  		this.dirty = false;
	  	}
	  };

	  Observer.prototype.handleChange = function handleChange () {
	  	var this$1 = this;

	  		if ( !this.dirty ) {
	  		var newValue = this.model.get();
	  		if ( isEqual( newValue, this.oldValue ) ) return;

	  		this.newValue = newValue;

	  		if ( this.strict && this.newValue === this.oldValue ) return;

	  		runloop.addObserver( this, this.defer );
	  		this.dirty = true;

	  		if ( this.once ) runloop.scheduleTask( function () { return this$1.cancel(); } );
	  	}
	  };

	  Observer.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		next = rebindMatch( this.keypath, next, previous );
	  	// TODO: set up a resolver if next is undefined?
	  	if ( next === this.model ) return false;

	  	if ( this.model ) this.model.unregister( this );
	  	if ( next ) next.addShuffleTask( function () { return this$1.resolved( next ); } );
	  };

	  Observer.prototype.resolved = function resolved ( model ) {
	  	this.model = model;
	  	this.keypath = model.getKeypath( this.ractive );

	  	this.oldValue = undefined;
	  	this.newValue = model.get();

	  	model.register( this );
	  };

	  var PatternObserver = function PatternObserver ( ractive, baseModel, keys, callback, options ) {
	  	var this$1 = this;

	  		this.context = options.context || ractive;
	  	this.ractive = ractive;
	  	this.baseModel = baseModel;
	  	this.keys = keys;
	  	this.callback = callback;

	  	var pattern = keys.join( '\\.' ).replace( /\*/g, '(.+)' );
	  	var baseKeypath = baseModel.getKeypath( ractive );
	  	this.pattern = new RegExp( ("^" + (baseKeypath ? baseKeypath + '\\.' : '') + "" + pattern + "$") );

	  	this.oldValues = {};
	  	this.newValues = {};

	  	this.defer = options.defer;
	  	this.once = options.once;
	  	this.strict = options.strict;

	  	this.dirty = false;
	  	this.changed = [];
	  	this.partial = false;

	  	var models = baseModel.findMatches( this.keys );

	  	models.forEach( function ( model ) {
	  		this$1.newValues[ model.getKeypath( this$1.ractive ) ] = model.get();
	  	});

	  	if ( options.init !== false ) {
	  		this.dispatch();
	  	} else {
	  		this.oldValues = this.newValues;
	  	}

	  	baseModel.registerPatternObserver( this );
	  };

	  PatternObserver.prototype.cancel = function cancel () {
	  	this.baseModel.unregisterPatternObserver( this );
	  };

	  PatternObserver.prototype.dispatch = function dispatch () {
	  	var this$1 = this;

	  		Object.keys( this.newValues ).forEach( function ( keypath ) {
	  		if ( this$1.newKeys && !this$1.newKeys[ keypath ] ) return;

	  		var newValue = this$1.newValues[ keypath ];
	  		var oldValue = this$1.oldValues[ keypath ];

	  		if ( this$1.strict && newValue === oldValue ) return;
	  		if ( isEqual( newValue, oldValue ) ) return;

	  		var args = [ newValue, oldValue, keypath ];
	  		if ( keypath ) {
	  			var wildcards = this$1.pattern.exec( keypath );
	  			if ( wildcards ) {
	  				args = args.concat( wildcards.slice( 1 ) );
	  			}
	  		}

	  		this$1.callback.apply( this$1.context, args );
	  	});

	  	if ( this.partial ) {
	  		for ( var k in this.newValues ) {
	  			this.oldValues[k] = this.newValues[k];
	  		}
	  	} else {
	  		this.oldValues = this.newValues;
	  	}

	  	this.newKeys = null;
	  	this.dirty = false;
	  };

	  PatternObserver.prototype.notify = function notify ( key ) {
	  	this.changed.push( key );
	  };

	  PatternObserver.prototype.shuffle = function shuffle ( newIndices ) {
	  	var this$1 = this;

	  		if ( !isArray( this.baseModel.value ) ) return;

	  	var base = this.baseModel.getKeypath( this.ractive );
	  	var max = this.baseModel.value.length;
	  	var suffix = this.keys.length > 1 ? '.' + this.keys.slice( 1 ).join( '.' ) : '';

	  	this.newKeys = {};
	  	for ( var i = 0; i < newIndices.length; i++ ) {
	  		if ( newIndices[ i ] === -1 || newIndices[ i ] === i ) continue;
	  		this$1.newKeys[ ("" + base + "." + i + "" + suffix) ] = true;
	  	}

	  	for ( var i$1 = newIndices.touchedFrom; i$1 < max; i$1++ ) {
	  		this$1.newKeys[ ("" + base + "." + i$1 + "" + suffix) ] = true;
	  	}
	  };

	  PatternObserver.prototype.handleChange = function handleChange () {
	  	var this$1 = this;

	  		if ( !this.dirty || this.changed.length ) {
	  		if ( !this.dirty ) this.newValues = {};

	  		// handle case where previously extant keypath no longer exists -
	  		// observer should still fire, with undefined as new value
	  		// TODO huh. according to the test suite that's not the case...
	  		// NOTE: I don't think this will work with partial updates
	  		// Object.keys( this.oldValues ).forEach( keypath => {
	  		// this.newValues[ keypath ] = undefined;
	  		// });

	  		if ( !this.changed.length ) {
	  			this.baseModel.findMatches( this.keys ).forEach( function ( model ) {
	  				var keypath = model.getKeypath( this$1.ractive );
	  				this$1.newValues[ keypath ] = model.get();
	  			});
	  			this.partial = false;
	  		} else {
	  			var count = 0;
	  			var ok = this.baseModel.isRoot ?
	  				this.changed.map( function ( keys ) { return keys.map( escapeKey ).join( '.' ); } ) :
	  				this.changed.map( function ( keys ) { return this$1.baseModel.getKeypath( this$1.ractive ) + '.' + keys.map( escapeKey ).join( '.' ); } );

	  			this.baseModel.findMatches( this.keys ).forEach( function ( model ) {
	  				var keypath = model.getKeypath( this$1.ractive );
	  				// is this model on a changed keypath?
	  				if ( ok.filter( function ( k ) { return keypath.indexOf( k ) === 0 || k.indexOf( keypath ) === 0; } ).length ) {
	  					count++;
	  					this$1.newValues[ keypath ] = model.get();
	  				}
	  			});

	  			// no valid change triggered, so bail to avoid breakage
	  			if ( !count ) return;

	  			this.partial = true;
	  		}

	  		runloop.addObserver( this, this.defer );
	  		this.dirty = true;
	  		this.changed.length = 0;

	  		if ( this.once ) this.cancel();
	  	}
	  };

	  function observeList ( keypath, callback, options ) {
	  	if ( typeof keypath !== 'string' ) {
	  		throw new Error( 'ractive.observeList() must be passed a string as its first argument' );
	  	}

	  	var model = this.viewmodel.joinAll( splitKeypathI( keypath ) );
	  	var observer = new ListObserver( this, model, callback, options || {} );

	  	// add observer to the Ractive instance, so it can be
	  	// cancelled on ractive.teardown()
	  	this._observers.push( observer );

	  	return {
	  		cancel: function () {
	  			observer.cancel();
	  		}
	  	};
	  }

	  function negativeOne () {
	  	return -1;
	  }

	  var ListObserver = function ListObserver ( context, model, callback, options ) {
	  	this.context = context;
	  	this.model = model;
	  	this.keypath = model.getKeypath();
	  	this.callback = callback;

	  	this.pending = null;

	  	model.register( this );

	  	if ( options.init !== false ) {
	  		this.sliced = [];
	  		this.shuffle([]);
	  		this.handleChange();
	  	} else {
	  		this.sliced = this.slice();
	  	}
	  };

	  ListObserver.prototype.handleChange = function handleChange () {
	  	if ( this.pending ) {
	  		// post-shuffle
	  		this.callback( this.pending );
	  		this.pending = null;
	  	}

	  	else {
	  		// entire array changed
	  		this.shuffle( this.sliced.map( negativeOne ) );
	  		this.handleChange();
	  	}
	  };

	  ListObserver.prototype.shuffle = function shuffle ( newIndices ) {
	  	var this$1 = this;

	  		var newValue = this.slice();

	  	var inserted = [];
	  	var deleted = [];
	  	var start;

	  	var hadIndex = {};

	  	newIndices.forEach( function ( newIndex, oldIndex ) {
	  		hadIndex[ newIndex ] = true;

	  		if ( newIndex !== oldIndex && start === undefined ) {
	  			start = oldIndex;
	  		}

	  		if ( newIndex === -1 ) {
	  			deleted.push( this$1.sliced[ oldIndex ] );
	  		}
	  	});

	  	if ( start === undefined ) start = newIndices.length;

	  	var len = newValue.length;
	  	for ( var i = 0; i < len; i += 1 ) {
	  		if ( !hadIndex[i] ) inserted.push( newValue[i] );
	  	}

	  	this.pending = { inserted: inserted, deleted: deleted, start: start };
	  	this.sliced = newValue;
	  };

	  ListObserver.prototype.slice = function slice () {
	  	var value = this.model.get();
	  	return isArray( value ) ? value.slice() : [];
	  };

	  var onceOptions = { init: false, once: true };

	  function observeOnce ( keypath, callback, options ) {
	  	if ( isObject( keypath ) || typeof keypath === 'function' ) {
	  		options = extendObj( callback || {}, onceOptions );
	  		return this.observe( keypath, options );
	  	}

	  	options = extendObj( options || {}, onceOptions );
	  	return this.observe( keypath, callback, options );
	  }

	  function trim ( str ) { return str.trim(); };

	  function notEmptyString ( str ) { return str !== ''; };

	  function Ractive$off ( eventName, callback ) {
	  	// if no arguments specified, remove all callbacks
	  	var this$1 = this;

	  	if ( !eventName ) {
	  		// TODO use this code instead, once the following issue has been resolved
	  		// in PhantomJS (tests are unpassable otherwise!)
	  		// https://github.com/ariya/phantomjs/issues/11856
	  		// defineProperty( this, '_subs', { value: create( null ), configurable: true });
	  		for ( eventName in this._subs ) {
	  			delete this._subs[ eventName ];
	  		}
	  	}

	  	else {
	  		// Handle multiple space-separated event names
	  		var eventNames = eventName.split( ' ' ).map( trim ).filter( notEmptyString );

	  		eventNames.forEach( function ( eventName ) {
	  			var subscribers = this$1._subs[ eventName ];

	  			// If we have subscribers for this event...
	  			if ( subscribers ) {
	  				// ...if a callback was specified, only remove that
	  				if ( callback ) {
	  					// flag this callback as off so that any in-flight firings don't call
	  					// a cancelled handler - this is _slightly_ hacky
	  					callback.off = true;
	  					var index = subscribers.indexOf( callback );
	  					if ( index !== -1 ) {
	  						subscribers.splice( index, 1 );
	  					}
	  				}

	  				// ...otherwise remove all callbacks
	  				else {
	  					this$1._subs[ eventName ] = [];
	  				}
	  			}
	  		});
	  	}

	  	return this;
	  }

	  function Ractive$on ( eventName, callback ) {
	  	// allow multiple listeners to be bound in one go
	  	var this$1 = this;

	  	if ( typeof eventName === 'object' ) {
	  		var listeners = [];
	  		var n;

	  		for ( n in eventName ) {
	  			if ( eventName.hasOwnProperty( n ) ) {
	  				listeners.push( this.on( n, eventName[ n ] ) );
	  			}
	  		}

	  		return {
	  			cancel: function () {
	  				var listener;
	  				while ( listener = listeners.pop() ) listener.cancel();
	  			}
	  		};
	  	}

	  	// Handle multiple space-separated event names
	  	var eventNames = eventName.split( ' ' ).map( trim ).filter( notEmptyString );

	  	eventNames.forEach( function ( eventName ) {
	  		( this$1._subs[ eventName ] || ( this$1._subs[ eventName ] = [] ) ).push( callback );
	  	});

	  	return {
	  		cancel: function () { return this$1.off( eventName, callback ); }
	  	};
	  }

	  function Ractive$once ( eventName, handler ) {
	  	var listener = this.on( eventName, function () {
	  		handler.apply( this, arguments );
	  		listener.cancel();
	  	});

	  	// so we can still do listener.cancel() manually
	  	return listener;
	  }

	  var pop$1 = makeArrayMethod( 'pop' ).path;

	  var push$1 = makeArrayMethod( 'push' ).path;

	  var PREFIX = '/* Ractive.js component styles */';

	  // Holds current definitions of styles.
	  var styleDefinitions = [];

	  // Flag to tell if we need to update the CSS
	  var isDirty = false;

	  // These only make sense on the browser. See additional setup below.
	  var styleElement = null;
	  var useCssText = null;

	  function addCSS( styleDefinition ) {
	  	styleDefinitions.push( styleDefinition );
	  	isDirty = true;
	  }

	  function applyCSS() {

	  	// Apply only seems to make sense when we're in the DOM. Server-side renders
	  	// can call toCSS to get the updated CSS.
	  	if ( !doc || !isDirty ) return;

	  	if ( useCssText ) {
	  		styleElement.styleSheet.cssText = getCSS( null );
	  	} else {
	  		styleElement.innerHTML = getCSS( null );
	  	}

	  	isDirty = false;
	  }

	  function getCSS( cssIds ) {

	  	var filteredStyleDefinitions = cssIds ? styleDefinitions.filter( function ( style ) { return ~cssIds.indexOf( style.id ); } ) : styleDefinitions;

	  	return filteredStyleDefinitions.reduce( function ( styles, style ) { return ("" + styles + "\n\n/* {" + (style.id) + "} */\n" + (style.styles)); }, PREFIX );

	  }

	  // If we're on the browser, additional setup needed.
	  if ( doc && ( !styleElement || !styleElement.parentNode ) ) {

	  	styleElement = doc.createElement( 'style' );
	  	styleElement.type = 'text/css';

	  	doc.getElementsByTagName( 'head' )[ 0 ].appendChild( styleElement );

	  	useCssText = !!styleElement.styleSheet;
	  }

	  var renderHook = new Hook( 'render' );
	  var completeHook = new Hook( 'complete' );

	  function render$1 ( ractive, target, anchor, occupants ) {
	  	// if `noIntro` is `true`, temporarily disable transitions
	  	var transitionsEnabled = ractive.transitionsEnabled;
	  	if ( ractive.noIntro ) ractive.transitionsEnabled = false;

	  	var promise = runloop.start( ractive, true );
	  	runloop.scheduleTask( function () { return renderHook.fire( ractive ); }, true );

	  	if ( ractive.fragment.rendered ) {
	  		throw new Error( 'You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first' );
	  	}

	  	anchor = getElement( anchor ) || ractive.anchor;

	  	ractive.el = target;
	  	ractive.anchor = anchor;

	  	// ensure encapsulated CSS is up-to-date
	  	if ( ractive.cssId ) applyCSS();

	  	if ( target ) {
	  		( target.__ractive_instances__ || ( target.__ractive_instances__ = [] ) ).push( ractive );

	  		if ( anchor ) {
	  			var docFrag = doc.createDocumentFragment();
	  			ractive.fragment.render( docFrag );
	  			target.insertBefore( docFrag, anchor );
	  		} else {
	  			ractive.fragment.render( target, occupants );
	  		}
	  	}

	  	runloop.end();
	  	ractive.transitionsEnabled = transitionsEnabled;

	  	return promise.then( function () { return completeHook.fire( ractive ); } );
	  }

	  function Ractive$render ( target, anchor ) {
	  	if ( this.torndown ) {
	  		warnIfDebug( 'ractive.render() was called on a Ractive instance that was already torn down' );
	  		return Promise.resolve();
	  	}

	  	target = getElement( target ) || this.el;

	  	if ( !this.append && target ) {
	  		// Teardown any existing instances *before* trying to set up the new one -
	  		// avoids certain weird bugs
	  		var others = target.__ractive_instances__;
	  		if ( others ) others.forEach( teardown );

	  		// make sure we are the only occupants
	  		if ( !this.enhance ) {
	  			target.innerHTML = ''; // TODO is this quicker than removeChild? Initial research inconclusive
	  		}
	  	}

	  	var occupants = this.enhance ? toArray( target.childNodes ) : null;
	  	var promise = render$1( this, target, anchor, occupants );

	  	if ( occupants ) {
	  		while ( occupants.length ) target.removeChild( occupants.pop() );
	  	}

	  	return promise;
	  }

	  var adaptConfigurator = {
	  	extend: function ( Parent, proto, options ) {
	  		proto.adapt = combine( proto.adapt, ensureArray( options.adapt ) );
	  	},

	  	init: function () {}
	  };

	  function combine ( a, b ) {
	  	var c = a.slice();
	  	var i = b.length;

	  	while ( i-- ) {
	  		if ( !~c.indexOf( b[i] ) ) {
	  			c.push( b[i] );
	  		}
	  	}

	  	return c;
	  }

	  var selectorsPattern = /(?:^|\})?\s*([^\{\}]+)\s*\{/g;
	  var commentsPattern = /\/\*[\s\S]*?\*\//g;
	  var selectorUnitPattern = /((?:(?:\[[^\]+]\])|(?:[^\s\+\>~:]))+)((?:::?[^\s\+\>\~\(:]+(?:\([^\)]+\))?)*\s*[\s\+\>\~]?)\s*/g;
	  var excludePattern = /^(?:@|\d+%)/;
	  var dataRvcGuidPattern = /\[data-ractive-css~="\{[a-z0-9-]+\}"]/g;

	  function trim$1 ( str ) {
	  	return str.trim();
	  }

	  function extractString ( unit ) {
	  	return unit.str;
	  }

	  function transformSelector ( selector, parent ) {
	  	var selectorUnits = [];
	  	var match;

	  	while ( match = selectorUnitPattern.exec( selector ) ) {
	  		selectorUnits.push({
	  			str: match[0],
	  			base: match[1],
	  			modifiers: match[2]
	  		});
	  	}

	  	// For each simple selector within the selector, we need to create a version
	  	// that a) combines with the id, and b) is inside the id
	  	var base = selectorUnits.map( extractString );

	  	var transformed = [];
	  	var i = selectorUnits.length;

	  	while ( i-- ) {
	  		var appended = base.slice();

	  		// Pseudo-selectors should go after the attribute selector
	  		var unit = selectorUnits[i];
	  		appended[i] = unit.base + parent + unit.modifiers || '';

	  		var prepended = base.slice();
	  		prepended[i] = parent + ' ' + prepended[i];

	  		transformed.push( appended.join( ' ' ), prepended.join( ' ' ) );
	  	}

	  	return transformed.join( ', ' );
	  }

	  function transformCss ( css, id ) {
	  	var dataAttr = "[data-ractive-css~=\"{" + id + "}\"]";

	  	var transformed;

	  	if ( dataRvcGuidPattern.test( css ) ) {
	  		transformed = css.replace( dataRvcGuidPattern, dataAttr );
	  	} else {
	  		transformed = css
	  		.replace( commentsPattern, '' )
	  		.replace( selectorsPattern, function ( match, $1 ) {
	  			// don't transform at-rules and keyframe declarations
	  			if ( excludePattern.test( $1 ) ) return match;

	  			var selectors = $1.split( ',' ).map( trim$1 );
	  			var transformed = selectors
	  				.map( function ( selector ) { return transformSelector( selector, dataAttr ); } )
	  				.join( ', ' ) + ' ';

	  			return match.replace( $1, transformed );
	  		});
	  	}

	  	return transformed;
	  }

	  function s4() {
	  	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }

	  function uuid() {
	  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	  }

	  var cssConfigurator = {
	  	name: 'css',

	  	// Called when creating a new component definition
	  	extend: function ( Parent, proto, options ) {
	  		if ( !options.css ) return;

	  		var id = uuid();
	  		var styles = options.noCssTransform ? options.css : transformCss( options.css, id );

	  		proto.cssId = id;

	  		addCSS( { id: id, styles: styles } );

	  	},

	  	// Called when creating a new component instance
	  	init: function ( Parent, target, options ) {
	  		if ( !options.css ) return;

	  		warnIfDebug( ("\nThe css option is currently not supported on a per-instance basis and will be discarded. Instead, we recommend instantiating from a component definition with a css option.\n\nconst Component = Ractive.extend({\n\t...\n\tcss: '/* your css */',\n\t...\n});\n\nconst componentInstance = new Component({ ... })\n\t\t") );
	  	}

	  };

	  function validate ( data ) {
	  	// Warn if userOptions.data is a non-POJO
	  	if ( data && data.constructor !== Object ) {
	  		if ( typeof data === 'function' ) {
	  			// TODO do we need to support this in the new Ractive() case?
	  		} else if ( typeof data !== 'object' ) {
	  			fatal( ("data option must be an object or a function, `" + data + "` is not valid") );
	  		} else {
	  			warnIfDebug( 'If supplied, options.data should be a plain JavaScript object - using a non-POJO as the root object may work, but is discouraged' );
	  		}
	  	}
	  }

	  var dataConfigurator = {
	  	name: 'data',

	  	extend: function ( Parent, proto, options ) {
	  		var key;
	  		var value;

	  		// check for non-primitives, which could cause mutation-related bugs
	  		if ( options.data && isObject( options.data ) ) {
	  			for ( key in options.data ) {
	  				value = options.data[ key ];

	  				if ( value && typeof value === 'object' ) {
	  					if ( isObject( value ) || isArray( value ) ) {
	  						warnIfDebug( ("Passing a `data` option with object and array properties to Ractive.extend() is discouraged, as mutating them is likely to cause bugs. Consider using a data function instead:\n\n  // this...\n  data: function () {\n    return {\n      myObject: {}\n    };\n  })\n\n  // instead of this:\n  data: {\n    myObject: {}\n  }") );
	  					}
	  				}
	  			}
	  		}

	  		proto.data = combine$1( proto.data, options.data );
	  	},

	  	init: function ( Parent, ractive, options ) {
	  		var result = combine$1( Parent.prototype.data, options.data );

	  		if ( typeof result === 'function' ) result = result.call( ractive );

	  		// bind functions to the ractive instance at the top level,
	  		// unless it's a non-POJO (in which case alarm bells should ring)
	  		if ( result && result.constructor === Object ) {
	  			for ( var prop in result ) {
	  				if ( typeof result[ prop ] === 'function' ) result[ prop ] = bind( result[ prop ], ractive );
	  			}
	  		}

	  		return result || {};
	  	},

	  	reset: function ( ractive ) {
	  		var result = this.init( ractive.constructor, ractive, ractive.viewmodel );
	  		ractive.viewmodel.root.set( result );
	  		return true;
	  	}
	  };

	  function combine$1 ( parentValue, childValue ) {
	  	validate( childValue );

	  	var parentIsFn = typeof parentValue === 'function';
	  	var childIsFn = typeof childValue === 'function';

	  	// Very important, otherwise child instance can become
	  	// the default data object on Ractive or a component.
	  	// then ractive.set() ends up setting on the prototype!
	  	if ( !childValue && !parentIsFn ) {
	  		childValue = {};
	  	}

	  	// Fast path, where we just need to copy properties from
	  	// parent to child
	  	if ( !parentIsFn && !childIsFn ) {
	  		return fromProperties( childValue, parentValue );
	  	}

	  	return function () {
	  		var child = childIsFn ? callDataFunction( childValue, this ) : childValue;
	  		var parent = parentIsFn ? callDataFunction( parentValue, this ) : parentValue;

	  		return fromProperties( child, parent );
	  	};
	  }

	  function callDataFunction ( fn, context ) {
	  	var data = fn.call( context );

	  	if ( !data ) return;

	  	if ( typeof data !== 'object' ) {
	  		fatal( 'Data function must return an object' );
	  	}

	  	if ( data.constructor !== Object ) {
	  		warnOnceIfDebug( 'Data function returned something other than a plain JavaScript object. This might work, but is strongly discouraged' );
	  	}

	  	return data;
	  }

	  function fromProperties ( primary, secondary ) {
	  	if ( primary && secondary ) {
	  		for ( var key in secondary ) {
	  			if ( !( key in primary ) ) {
	  				primary[ key ] = secondary[ key ];
	  			}
	  		}

	  		return primary;
	  	}

	  	return primary || secondary;
	  }

	  var TEMPLATE_VERSION = 4;

	  var pattern = /\$\{([^\}]+)\}/g;

	  function fromExpression ( body, length ) {
	  	if ( length === void 0 ) length = 0;

	  	var args = new Array( length );

	  	while ( length-- ) {
	  		args[length] = "_" + length;
	  	}

	  	// Functions created directly with new Function() look like this:
	  	//     function anonymous (_0 /**/) { return _0*2 }
	  	//
	  	// With this workaround, we get a little more compact:
	  	//     function (_0){return _0*2}
	  	return new Function( [], ("return function (" + (args.join(',')) + "){return(" + body + ");};") )();
	  }

	  function fromComputationString ( str, bindTo ) {
	  	var hasThis;

	  	var functionBody = 'return (' + str.replace( pattern, function ( match, keypath ) {
	  		hasThis = true;
	  		return ("__ractive.get(\"" + keypath + "\")");
	  	}) + ');';

	  	if ( hasThis ) functionBody = "var __ractive = this; " + functionBody;
	  	var fn = new Function( functionBody );
	  	return hasThis ? fn.bind( bindTo ) : fn;
	  }

	  var functions = create( null );

	  function getFunction ( str, i ) {
	  	if ( functions[ str ] ) return functions[ str ];
	  	return functions[ str ] = createFunction( str, i );
	  }

	  function addFunctions( template ) {
	  	if ( !template ) return;

	  	var exp = template.e;

	  	if ( !exp ) return;

	  	Object.keys( exp ).forEach( function ( str ) {
	  		if ( functions[ str ] ) return;
	  		functions[ str ] = exp[ str ];
	  	});
	  }

	  var Parser;
	  var ParseError;
	  var leadingWhitespace = /^\s+/;
	  ParseError = function ( message ) {
	  	this.name = 'ParseError';
	  	this.message = message;
	  	try {
	  		throw new Error(message);
	  	} catch (e) {
	  		this.stack = e.stack;
	  	}
	  };

	  ParseError.prototype = Error.prototype;

	  Parser = function ( str, options ) {
	  	var this$1 = this;

	  	var items, item, lineStart = 0;

	  	this.str = str;
	  	this.options = options || {};
	  	this.pos = 0;

	  	this.lines = this.str.split( '\n' );
	  	this.lineEnds = this.lines.map( function ( line ) {
	  		var lineEnd = lineStart + line.length + 1; // +1 for the newline

	  		lineStart = lineEnd;
	  		return lineEnd;
	  	}, 0 );

	  	// Custom init logic
	  	if ( this.init ) this.init( str, options );

	  	items = [];

	  	while ( ( this$1.pos < this$1.str.length ) && ( item = this$1.read() ) ) {
	  		items.push( item );
	  	}

	  	this.leftover = this.remaining();
	  	this.result = this.postProcess ? this.postProcess( items, options ) : items;
	  };

	  Parser.prototype = {
	  	read: function ( converters ) {
	  		var this$1 = this;

	  		var pos, i, len, item;

	  		if ( !converters ) converters = this.converters;

	  		pos = this.pos;

	  		len = converters.length;
	  		for ( i = 0; i < len; i += 1 ) {
	  			this$1.pos = pos; // reset for each attempt

	  			if ( item = converters[i]( this$1 ) ) {
	  				return item;
	  			}
	  		}

	  		return null;
	  	},

	  	getContextMessage: function ( pos, message ) {
	  		var ref = this.getLinePos( pos ), lineNum = ref[0], columnNum = ref[1];
	  		if ( this.options.contextLines === -1 ) {
	  			return [ lineNum, columnNum, ("" + message + " at line " + lineNum + " character " + columnNum) ];
	  		}

	  		var line = this.lines[ lineNum - 1 ];

	  		var contextUp = '';
	  		var contextDown = '';
	  		if ( this.options.contextLines ) {
	  			var start = lineNum - 1 - this.options.contextLines < 0 ? 0 : lineNum - 1 - this.options.contextLines;
	  			contextUp = this.lines.slice( start, lineNum - 1 - start ).join( '\n' ).replace( /\t/g, '  ' );
	  			contextDown = this.lines.slice( lineNum, lineNum + this.options.contextLines ).join( '\n' ).replace( /\t/g, '  ' );
	  			if ( contextUp ) {
	  				contextUp += '\n';
	  			}
	  			if ( contextDown ) {
	  				contextDown = '\n' + contextDown;
	  			}
	  		}

	  		var numTabs = 0;
	  		var annotation = contextUp + line.replace( /\t/g, function ( match, char ) {
	  			if ( char < columnNum ) {
	  				numTabs += 1;
	  			}

	  			return '  ';
	  		}) + '\n' + new Array( columnNum + numTabs ).join( ' ' ) + '^----' + contextDown;

	  		return [ lineNum, columnNum, ("" + message + " at line " + lineNum + " character " + columnNum + ":\n" + annotation) ];
	  	},

	  	getLinePos: function ( char ) {
	  		var this$1 = this;

	  		var lineNum = 0, lineStart = 0, columnNum;

	  		while ( char >= this$1.lineEnds[ lineNum ] ) {
	  			lineStart = this$1.lineEnds[ lineNum ];
	  			lineNum += 1;
	  		}

	  		columnNum = char - lineStart;
	  		return [ lineNum + 1, columnNum + 1, char ]; // line/col should be one-based, not zero-based!
	  	},

	  	error: function ( message ) {
	  		var ref = this.getContextMessage( this.pos, message ), lineNum = ref[0], columnNum = ref[1], msg = ref[2];

	  		var error = new ParseError( msg );

	  		error.line = lineNum;
	  		error.character = columnNum;
	  		error.shortMessage = message;

	  		throw error;
	  	},

	  	matchString: function ( string ) {
	  		if ( this.str.substr( this.pos, string.length ) === string ) {
	  			this.pos += string.length;
	  			return string;
	  		}
	  	},

	  	matchPattern: function ( pattern ) {
	  		var match;

	  		if ( match = pattern.exec( this.remaining() ) ) {
	  			this.pos += match[0].length;
	  			return match[1] || match[0];
	  		}
	  	},

	  	allowWhitespace: function () {
	  		this.matchPattern( leadingWhitespace );
	  	},

	  	remaining: function () {
	  		return this.str.substring( this.pos );
	  	},

	  	nextChar: function () {
	  		return this.str.charAt( this.pos );
	  	}
	  };

	  Parser.extend = function ( proto ) {
	  	var Parent = this, Child, key;

	  	Child = function ( str, options ) {
	  		Parser.call( this, str, options );
	  	};

	  	Child.prototype = create( Parent.prototype );

	  	for ( key in proto ) {
	  		if ( hasOwn.call( proto, key ) ) {
	  			Child.prototype[ key ] = proto[ key ];
	  		}
	  	}

	  	Child.extend = Parser.extend;
	  	return Child;
	  };

	  var Parser$1 = Parser;

	  var TEXT              = 1;
	  var INTERPOLATOR      = 2;
	  var TRIPLE            = 3;
	  var SECTION           = 4;
	  var INVERTED          = 5;
	  var CLOSING           = 6;
	  var ELEMENT           = 7;
	  var PARTIAL           = 8;
	  var COMMENT           = 9;
	  var DELIMCHANGE       = 10;
	  var ATTRIBUTE         = 13;
	  var CLOSING_TAG       = 14;
	  var COMPONENT         = 15;
	  var YIELDER           = 16;
	  var INLINE_PARTIAL    = 17;
	  var DOCTYPE           = 18;
	  var ALIAS             = 19;

	  var NUMBER_LITERAL    = 20;
	  var STRING_LITERAL    = 21;
	  var ARRAY_LITERAL     = 22;
	  var OBJECT_LITERAL    = 23;
	  var BOOLEAN_LITERAL   = 24;
	  var REGEXP_LITERAL    = 25;

	  var GLOBAL            = 26;
	  var KEY_VALUE_PAIR    = 27;


	  var REFERENCE         = 30;
	  var REFINEMENT        = 31;
	  var MEMBER            = 32;
	  var PREFIX_OPERATOR   = 33;
	  var BRACKETED         = 34;
	  var CONDITIONAL       = 35;
	  var INFIX_OPERATOR    = 36;

	  var INVOCATION        = 40;

	  var SECTION_IF        = 50;
	  var SECTION_UNLESS    = 51;
	  var SECTION_EACH      = 52;
	  var SECTION_WITH      = 53;
	  var SECTION_IF_WITH   = 54;

	  var ELSE              = 60;
	  var ELSEIF            = 61;

	  var EVENT             = 70;
	  var DECORATOR         = 71;
	  var TRANSITION        = 72;
	  var BINDING_FLAG      = 73;

	  var delimiterChangePattern = /^[^\s=]+/;
	  var whitespacePattern = /^\s+/;
	  function readDelimiterChange ( parser ) {
	  	var start, opening, closing;

	  	if ( !parser.matchString( '=' ) ) {
	  		return null;
	  	}

	  	start = parser.pos;

	  	// allow whitespace before new opening delimiter
	  	parser.allowWhitespace();

	  	opening = parser.matchPattern( delimiterChangePattern );
	  	if ( !opening ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace (in fact, it's necessary...)
	  	if ( !parser.matchPattern( whitespacePattern ) ) {
	  		return null;
	  	}

	  	closing = parser.matchPattern( delimiterChangePattern );
	  	if ( !closing ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace before closing '='
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '=' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return [ opening, closing ];
	  }

	  var regexpPattern = /^(\/(?:[^\n\r\u2028\u2029/\\[]|\\.|\[(?:[^\n\r\u2028\u2029\]\\]|\\.)*])+\/(?:([gimuy])(?![a-z]*\2))*(?![a-zA-Z_$0-9]))/;

	  function readNumberLiteral ( parser ) {
	  	var result;

	  	if ( result = parser.matchPattern( regexpPattern ) ) {
	  		return {
	  			t: REGEXP_LITERAL,
	  			v: result
	  		};
	  	}

	  	return null;
	  }

	  var pattern$1 = /[-/\\^$*+?.()|[\]{}]/g;

	  function escapeRegExp ( str ) {
	  	return str.replace( pattern$1, '\\$&' );
	  }

	  var regExpCache = {};

	  function getLowestIndex ( haystack, needles ) {
	  	return haystack.search( regExpCache[needles.join()] || ( regExpCache[needles.join()] = new RegExp( needles.map( escapeRegExp ).join( '|' ) ) ) );
	  }

	  // https://github.com/kangax/html-minifier/issues/63#issuecomment-37763316
	  var booleanAttributes = /^(allowFullscreen|async|autofocus|autoplay|checked|compact|controls|declare|default|defaultChecked|defaultMuted|defaultSelected|defer|disabled|enabled|formNoValidate|hidden|indeterminate|inert|isMap|itemScope|loop|multiple|muted|noHref|noResize|noShade|noValidate|noWrap|open|pauseOnExit|readOnly|required|reversed|scoped|seamless|selected|sortable|translate|trueSpeed|typeMustMatch|visible)$/i;
	  var voidElementNames = /^(?:area|base|br|col|command|doctype|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;

	  var htmlEntities = { quot: 34, amp: 38, apos: 39, lt: 60, gt: 62, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, copy: 169, ordf: 170, laquo: 171, not: 172, shy: 173, reg: 174, macr: 175, deg: 176, plusmn: 177, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, sup1: 185, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, Agrave: 192, Aacute: 193, Acirc: 194, Atilde: 195, Auml: 196, Aring: 197, AElig: 198, Ccedil: 199, Egrave: 200, Eacute: 201, Ecirc: 202, Euml: 203, Igrave: 204, Iacute: 205, Icirc: 206, Iuml: 207, ETH: 208, Ntilde: 209, Ograve: 210, Oacute: 211, Ocirc: 212, Otilde: 213, Ouml: 214, times: 215, Oslash: 216, Ugrave: 217, Uacute: 218, Ucirc: 219, Uuml: 220, Yacute: 221, THORN: 222, szlig: 223, agrave: 224, aacute: 225, acirc: 226, atilde: 227, auml: 228, aring: 229, aelig: 230, ccedil: 231, egrave: 232, eacute: 233, ecirc: 234, euml: 235, igrave: 236, iacute: 237, icirc: 238, iuml: 239, eth: 240, ntilde: 241, ograve: 242, oacute: 243, ocirc: 244, otilde: 245, ouml: 246, divide: 247, oslash: 248, ugrave: 249, uacute: 250, ucirc: 251, uuml: 252, yacute: 253, thorn: 254, yuml: 255, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, 'int': 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830	};
	  var controlCharacters = [ 8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376 ];
	  var entityPattern = new RegExp( '&(#?(?:x[\\w\\d]+|\\d+|' + Object.keys( htmlEntities ).join( '|' ) + '));?', 'g' );
	  var codePointSupport = typeof String.fromCodePoint === 'function';
	  var codeToChar = codePointSupport ? String.fromCodePoint : String.fromCharCode;

	  function decodeCharacterReferences ( html ) {
	  	return html.replace( entityPattern, function ( match, entity ) {
	  		var code;

	  		// Handle named entities
	  		if ( entity[0] !== '#' ) {
	  			code = htmlEntities[ entity ];
	  		} else if ( entity[1] === 'x' ) {
	  			code = parseInt( entity.substring( 2 ), 16 );
	  		} else {
	  			code = parseInt( entity.substring( 1 ), 10 );
	  		}

	  		if ( !code ) {
	  			return match;
	  		}

	  		return codeToChar( validateCode( code ) );
	  	});
	  }

	  var lessThan = /</g;
	  var greaterThan = />/g;
	  var amp = /&/g;
	  var invalid = 65533;

	  function escapeHtml ( str ) {
	  	return str
	  		.replace( amp, '&amp;' )
	  		.replace( lessThan, '&lt;' )
	  		.replace( greaterThan, '&gt;' );
	  }

	  // some code points are verboten. If we were inserting HTML, the browser would replace the illegal
	  // code points with alternatives in some cases - since we're bypassing that mechanism, we need
	  // to replace them ourselves
	  //
	  // Source: http://en.wikipedia.org/wiki/Character_encodings_in_HTML#Illegal_characters
	  function validateCode ( code ) {
	  	if ( !code ) {
	  		return invalid;
	  	}

	  	// line feed becomes generic whitespace
	  	if ( code === 10 ) {
	  		return 32;
	  	}

	  	// ASCII range. (Why someone would use HTML entities for ASCII characters I don't know, but...)
	  	if ( code < 128 ) {
	  		return code;
	  	}

	  	// code points 128-159 are dealt with leniently by browsers, but they're incorrect. We need
	  	// to correct the mistake or we'll end up with missing € signs and so on
	  	if ( code <= 159 ) {
	  		return controlCharacters[ code - 128 ];
	  	}

	  	// basic multilingual plane
	  	if ( code < 55296 ) {
	  		return code;
	  	}

	  	// UTF-16 surrogate halves
	  	if ( code <= 57343 ) {
	  		return invalid;
	  	}

	  	// rest of the basic multilingual plane
	  	if ( code <= 65535 ) {
	  		return code;
	  	} else if ( !codePointSupport ) {
	  		return invalid;
	  	}

	  	// supplementary multilingual plane 0x10000 - 0x1ffff
	  	if ( code >= 65536 && code <= 131071 ) {
	  		return code;
	  	}

	  	// supplementary ideographic plane 0x20000 - 0x2ffff
	  	if ( code >= 131072 && code <= 196607 ) {
	  		return code;
	  	}

	  	return invalid;
	  }

	  var expectedExpression = 'Expected a JavaScript expression';
	  var expectedParen = 'Expected closing paren';

	  // bulletproof number regex from https://gist.github.com/Rich-Harris/7544330
	  var numberPattern = /^(?:[+-]?)0*(?:(?:(?:[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/;

	  function readNumberLiteral$1 ( parser ) {
	  	var result;

	  	if ( result = parser.matchPattern( numberPattern ) ) {
	  		return {
	  			t: NUMBER_LITERAL,
	  			v: result
	  		};
	  	}

	  	return null;
	  }

	  function readBooleanLiteral ( parser ) {
	  	var remaining = parser.remaining();

	  	if ( remaining.substr( 0, 4 ) === 'true' ) {
	  		parser.pos += 4;
	  		return {
	  			t: BOOLEAN_LITERAL,
	  			v: 'true'
	  		};
	  	}

	  	if ( remaining.substr( 0, 5 ) === 'false' ) {
	  		parser.pos += 5;
	  		return {
	  			t: BOOLEAN_LITERAL,
	  			v: 'false'
	  		};
	  	}

	  	return null;
	  }

	  var stringMiddlePattern;
	  var escapeSequencePattern;
	  var lineContinuationPattern;
	  // Match one or more characters until: ", ', \, or EOL/EOF.
	  // EOL/EOF is written as (?!.) (meaning there's no non-newline char next).
	  stringMiddlePattern = /^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/;

	  // Match one escape sequence, including the backslash.
	  escapeSequencePattern = /^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/;

	  // Match one ES5 line continuation (backslash + line terminator).
	  lineContinuationPattern = /^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/;

	  // Helper for defining getDoubleQuotedString and getSingleQuotedString.
	  function makeQuotedStringMatcher ( okQuote ) {
	  	return function ( parser ) {
	  		var literal = '"';
	  		var done = false;
	  		var next;

	  		while ( !done ) {
	  			next = ( parser.matchPattern( stringMiddlePattern ) || parser.matchPattern( escapeSequencePattern ) ||
	  				parser.matchString( okQuote ) );
	  			if ( next ) {
	  				if ( next === ("\"") ) {
	  					literal += "\\\"";
	  				} else if ( next === ("\\'") ) {
	  					literal += "'";
	  				} else {
	  					literal += next;
	  				}
	  			} else {
	  				next = parser.matchPattern( lineContinuationPattern );
	  				if ( next ) {
	  					// convert \(newline-like) into a \u escape, which is allowed in JSON
	  					literal += '\\u' + ( '000' + next.charCodeAt(1).toString(16) ).slice( -4 );
	  				} else {
	  					done = true;
	  				}
	  			}
	  		}

	  		literal += '"';

	  		// use JSON.parse to interpret escapes
	  		return JSON.parse( literal );
	  	};
	  }

	  var getSingleQuotedString = makeQuotedStringMatcher( ("\"") );
	  var getDoubleQuotedString = makeQuotedStringMatcher( ("'") );

	  function readStringLiteral ( parser ) {
	  	var start, string;

	  	start = parser.pos;

	  	if ( parser.matchString( '"' ) ) {
	  		string = getDoubleQuotedString( parser );

	  		if ( !parser.matchString( '"' ) ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return {
	  			t: STRING_LITERAL,
	  			v: string
	  		};
	  	}

	  	if ( parser.matchString( ("'") ) ) {
	  		string = getSingleQuotedString( parser );

	  		if ( !parser.matchString( ("'") ) ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return {
	  			t: STRING_LITERAL,
	  			v: string
	  		};
	  	}

	  	return null;
	  }

	  var namePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*/;

	  var identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

	  // http://mathiasbynens.be/notes/javascript-properties
	  // can be any name, string literal, or number literal
	  function readKey ( parser ) {
	  	var token;

	  	if ( token = readStringLiteral( parser ) ) {
	  		return identifier.test( token.v ) ? token.v : '"' + token.v.replace( /"/g, '\\"' ) + '"';
	  	}

	  	if ( token = readNumberLiteral$1( parser ) ) {
	  		return token.v;
	  	}

	  	if ( token = parser.matchPattern( namePattern ) ) {
	  		return token;
	  	}

	  	return null;
	  }

	  function readKeyValuePair ( parser ) {
	  	var start, key, value;

	  	start = parser.pos;

	  	// allow whitespace between '{' and key
	  	parser.allowWhitespace();

	  	var refKey = parser.nextChar() !== '\'' && parser.nextChar() !== '"';

	  	key = readKey( parser );
	  	if ( key === null ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace between key and ':'
	  	parser.allowWhitespace();

	  	// es2015 shorthand property
	  	if ( refKey && ( parser.nextChar() === ',' || parser.nextChar() === '}' ) ) {
	  		if ( !namePattern.test( key ) ) {
	  			parser.error( ("Expected a valid reference, but found '" + key + "' instead.") );
	  		}

	  		return {
	  			t: KEY_VALUE_PAIR,
	  			k: key,
	  			v: {
	  				t: REFERENCE,
	  				n: key
	  			}
	  		};
	  	}

	  	// next character must be ':'
	  	if ( !parser.matchString( ':' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace between ':' and value
	  	parser.allowWhitespace();

	  	// next expression must be a, well... expression
	  	value = readExpression( parser );
	  	if ( value === null ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return {
	  		t: KEY_VALUE_PAIR,
	  		k: key,
	  		v: value
	  	};
	  }

	  function readKeyValuePairs ( parser ) {
	  	var start, pairs, pair, keyValuePairs;

	  	start = parser.pos;

	  	pair = readKeyValuePair( parser );
	  	if ( pair === null ) {
	  		return null;
	  	}

	  	pairs = [ pair ];

	  	if ( parser.matchString( ',' ) ) {
	  		keyValuePairs = readKeyValuePairs( parser );

	  		if ( !keyValuePairs ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return pairs.concat( keyValuePairs );
	  	}

	  	return pairs;
	  }

	  function readObjectLiteral ( parser ) {
	  	var start, keyValuePairs;

	  	start = parser.pos;

	  	// allow whitespace
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '{' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	keyValuePairs = readKeyValuePairs( parser );

	  	// allow whitespace between final value and '}'
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '}' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return {
	  		t: OBJECT_LITERAL,
	  		m: keyValuePairs
	  	};
	  }

	  function readExpressionList ( parser ) {
	  	parser.allowWhitespace();

	  	var expr = readExpression( parser );

	  	if ( expr === null ) return null;

	  	var expressions = [ expr ];

	  	// allow whitespace between expression and ','
	  	parser.allowWhitespace();

	  	if ( parser.matchString( ',' ) ) {
	  		var next = readExpressionList( parser );
	  		if ( next === null ) parser.error( expectedExpression );

	  		expressions.push.apply( expressions, next );
	  	}

	  	return expressions;
	  }

	  function readArrayLiteral ( parser ) {
	  	var start, expressionList;

	  	start = parser.pos;

	  	// allow whitespace before '['
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '[' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	expressionList = readExpressionList( parser );

	  	if ( !parser.matchString( ']' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return {
	  		t: ARRAY_LITERAL,
	  		m: expressionList
	  	};
	  }

	  function readLiteral ( parser ) {
	  	return readNumberLiteral$1( parser )  ||
	  	       readBooleanLiteral( parser ) ||
	  	       readStringLiteral( parser )  ||
	  	       readObjectLiteral( parser )  ||
	  	       readArrayLiteral( parser )   ||
	  	       readNumberLiteral( parser );
	  }

	  var prefixPattern = /^(?:~\/|(?:\.\.\/)+|\.\/(?:\.\.\/)*|\.)/;
	  var globals;
	  var keywords;
	  // if a reference is a browser global, we don't deference it later, so it needs special treatment
	  globals = /^(?:Array|console|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null|Object|Number|String|Boolean)\b/;

	  // keywords are not valid references, with the exception of `this`
	  keywords = /^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/;

	  var legalReference = /^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:\.(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/;
	  var relaxedName = /^[a-zA-Z_$][-\/a-zA-Z_$0-9]*/;
	  var specials = /^@(?:keypath|rootpath|index|key|this|global)/;
	  var specialCall = /^\s*\(/;
	  var spreadPattern = /^\s*\.{3}/;

	  function readReference ( parser ) {
	  	var startPos, prefix, name, global, reference, fullLength, lastDotIndex, spread;

	  	startPos = parser.pos;

	  	name = parser.matchPattern( specials );

	  	if ( name === '@keypath' || name === '@rootpath' ) {
	  		if ( parser.matchPattern( specialCall ) ) {
	  			var ref = readReference( parser );
	  			if ( !ref ) parser.error( ("Expected a valid reference for a keypath expression") );

	  			parser.allowWhitespace();

	  			if ( !parser.matchString( ')' ) ) parser.error( ("Unclosed keypath expression") );
	  			name += "(" + (ref.n) + ")";
	  		}
	  	}

	  	spread = !name && parser.spreadArgs && parser.matchPattern( spreadPattern );

	  	if ( !name ) {
	  		prefix = parser.matchPattern( prefixPattern ) || '';
	  		name = ( !prefix && parser.relaxedNames && parser.matchPattern( relaxedName ) ) ||
	  		       parser.matchPattern( legalReference );

	  		if ( !name && prefix === '.' ) {
	  			prefix = '';
	  			name = '.';
	  		} else if ( !name && prefix ) {
	  			name = prefix;
	  			prefix = '';
	  		}
	  	}

	  	if ( !name ) {
	  		return null;
	  	}

	  	// bug out if it's a keyword (exception for ancestor/restricted refs - see https://github.com/ractivejs/ractive/issues/1497)
	  	if ( !prefix && !parser.relaxedNames && keywords.test( name ) ) {
	  		parser.pos = startPos;
	  		return null;
	  	}

	  	// if this is a browser global, stop here
	  	if ( !prefix && globals.test( name ) ) {
	  		global = globals.exec( name )[0];
	  		parser.pos = startPos + global.length;

	  		return {
	  			t: GLOBAL,
	  			v: ( spread ? '...' : '' ) + global
	  		};
	  	}

	  	fullLength = ( spread ? 3 : 0 ) + ( prefix || '' ).length + name.length;
	  	reference = ( prefix || '' ) + normalise( name );

	  	if ( parser.matchString( '(' ) ) {
	  		// if this is a method invocation (as opposed to a function) we need
	  		// to strip the method name from the reference combo, else the context
	  		// will be wrong
	  		// but only if the reference was actually a member and not a refinement
	  		lastDotIndex = reference.lastIndexOf( '.' );
	  		if ( lastDotIndex !== -1 && name[ name.length - 1 ] !== ']' ) {
	  			var refLength = reference.length;
	  			reference = reference.substr( 0, lastDotIndex );
	  			parser.pos = startPos + (fullLength - ( refLength - lastDotIndex ) );
	  		} else {
	  			parser.pos -= 1;
	  		}
	  	}

	  	return {
	  		t: REFERENCE,
	  		n: ( spread ? '...' : '' ) + reference.replace( /^this\./, './' ).replace( /^this$/, '.' )
	  	};
	  }

	  function readBracketedExpression ( parser ) {
	  	if ( !parser.matchString( '(' ) ) return null;

	  	parser.allowWhitespace();

	  	var expr = readExpression( parser );

	  	if ( !expr ) parser.error( expectedExpression );

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( ')' ) ) parser.error( expectedParen );

	  	return {
	  		t: BRACKETED,
	  		x: expr
	  	};
	  }

	  function readPrimary ( parser ) {
	  	return readLiteral( parser )
	  		|| readReference( parser )
	  		|| readBracketedExpression( parser );
	  }

	  function readRefinement ( parser ) {
	  	// some things call for strict refinement (partial names), meaning no space between reference and refinement
	  	if ( !parser.strictRefinement ) {
	  		parser.allowWhitespace();
	  	}

	  	// "." name
	  	if ( parser.matchString( '.' ) ) {
	  		parser.allowWhitespace();

	  		var name = parser.matchPattern( namePattern );
	  		if ( name ) {
	  			return {
	  				t: REFINEMENT,
	  				n: name
	  			};
	  		}

	  		parser.error( 'Expected a property name' );
	  	}

	  	// "[" expression "]"
	  	if ( parser.matchString( '[' ) ) {
	  		parser.allowWhitespace();

	  		var expr = readExpression( parser );
	  		if ( !expr ) parser.error( expectedExpression );

	  		parser.allowWhitespace();

	  		if ( !parser.matchString( ']' ) ) parser.error( ("Expected ']'") );

	  		return {
	  			t: REFINEMENT,
	  			x: expr
	  		};
	  	}

	  	return null;
	  }

	  function readMemberOrInvocation ( parser ) {
	  	var expression = readPrimary( parser );

	  	if ( !expression ) return null;

	  	while ( expression ) {
	  		var refinement = readRefinement( parser );
	  		if ( refinement ) {
	  			expression = {
	  				t: MEMBER,
	  				x: expression,
	  				r: refinement
	  			};
	  		}

	  		else if ( parser.matchString( '(' ) ) {
	  			parser.allowWhitespace();
	  			var start = parser.spreadArgs;
	  			parser.spreadArgs = true;
	  			var expressionList = readExpressionList( parser );
	  			parser.spreadArgs = start;

	  			parser.allowWhitespace();

	  			if ( !parser.matchString( ')' ) ) {
	  				parser.error( expectedParen );
	  			}

	  			expression = {
	  				t: INVOCATION,
	  				x: expression
	  			};

	  			if ( expressionList ) expression.o = expressionList;
	  		}

	  		else {
	  			break;
	  		}
	  	}

	  	return expression;
	  }

	  var readTypeOf;
	  var makePrefixSequenceMatcher;
	  makePrefixSequenceMatcher = function ( symbol, fallthrough ) {
	  	return function ( parser ) {
	  		var expression;

	  		if ( expression = fallthrough( parser ) ) {
	  			return expression;
	  		}

	  		if ( !parser.matchString( symbol ) ) {
	  			return null;
	  		}

	  		parser.allowWhitespace();

	  		expression = readExpression( parser );
	  		if ( !expression ) {
	  			parser.error( expectedExpression );
	  		}

	  		return {
	  			s: symbol,
	  			o: expression,
	  			t: PREFIX_OPERATOR
	  		};
	  	};
	  };

	  // create all prefix sequence matchers, return readTypeOf
	  (function() {
	  	var i, len, matcher, prefixOperators, fallthrough;

	  	prefixOperators = '! ~ + - typeof'.split( ' ' );

	  	fallthrough = readMemberOrInvocation;
	  	for ( i = 0, len = prefixOperators.length; i < len; i += 1 ) {
	  		matcher = makePrefixSequenceMatcher( prefixOperators[i], fallthrough );
	  		fallthrough = matcher;
	  	}

	  	// typeof operator is higher precedence than multiplication, so provides the
	  	// fallthrough for the multiplication sequence matcher we're about to create
	  	// (we're skipping void and delete)
	  	readTypeOf = fallthrough;
	  }());

	  var readTypeof = readTypeOf;

	  var readLogicalOr;
	  var makeInfixSequenceMatcher;
	  makeInfixSequenceMatcher = function ( symbol, fallthrough ) {
	  	return function ( parser ) {
	  		var start, left, right;

	  		left = fallthrough( parser );
	  		if ( !left ) {
	  			return null;
	  		}

	  		// Loop to handle left-recursion in a case like `a * b * c` and produce
	  		// left association, i.e. `(a * b) * c`.  The matcher can't call itself
	  		// to parse `left` because that would be infinite regress.
	  		while ( true ) {
	  			start = parser.pos;

	  			parser.allowWhitespace();

	  			if ( !parser.matchString( symbol ) ) {
	  				parser.pos = start;
	  				return left;
	  			}

	  			// special case - in operator must not be followed by [a-zA-Z_$0-9]
	  			if ( symbol === 'in' && /[a-zA-Z_$0-9]/.test( parser.remaining().charAt( 0 ) ) ) {
	  				parser.pos = start;
	  				return left;
	  			}

	  			parser.allowWhitespace();

	  			// right operand must also consist of only higher-precedence operators
	  			right = fallthrough( parser );
	  			if ( !right ) {
	  				parser.pos = start;
	  				return left;
	  			}

	  			left = {
	  				t: INFIX_OPERATOR,
	  				s: symbol,
	  				o: [ left, right ]
	  			};

	  			// Loop back around.  If we don't see another occurrence of the symbol,
	  			// we'll return left.
	  		}
	  	};
	  };

	  // create all infix sequence matchers, and return readLogicalOr
	  (function() {
	  	var i, len, matcher, infixOperators, fallthrough;

	  	// All the infix operators on order of precedence (source: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Operator_Precedence)
	  	// Each sequence matcher will initially fall through to its higher precedence
	  	// neighbour, and only attempt to match if one of the higher precedence operators
	  	// (or, ultimately, a literal, reference, or bracketed expression) already matched
	  	infixOperators = '* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||'.split( ' ' );

	  	// A typeof operator is higher precedence than multiplication
	  	fallthrough = readTypeof;
	  	for ( i = 0, len = infixOperators.length; i < len; i += 1 ) {
	  		matcher = makeInfixSequenceMatcher( infixOperators[i], fallthrough );
	  		fallthrough = matcher;
	  	}

	  	// Logical OR is the fallthrough for the conditional matcher
	  	readLogicalOr = fallthrough;
	  }());

	  var readLogicalOr$1 = readLogicalOr;

	  // The conditional operator is the lowest precedence operator, so we start here
	  function getConditional ( parser ) {
	  	var start, expression, ifTrue, ifFalse;

	  	expression = readLogicalOr$1( parser );
	  	if ( !expression ) {
	  		return null;
	  	}

	  	start = parser.pos;

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '?' ) ) {
	  		parser.pos = start;
	  		return expression;
	  	}

	  	parser.allowWhitespace();

	  	ifTrue = readExpression( parser );
	  	if ( !ifTrue ) {
	  		parser.error( expectedExpression );
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( ':' ) ) {
	  		parser.error( 'Expected ":"' );
	  	}

	  	parser.allowWhitespace();

	  	ifFalse = readExpression( parser );
	  	if ( !ifFalse ) {
	  		parser.error( expectedExpression );
	  	}

	  	return {
	  		t: CONDITIONAL,
	  		o: [ expression, ifTrue, ifFalse ]
	  	};
	  }

	  function readExpression ( parser ) {
	  	// The conditional operator is the lowest precedence operator (except yield,
	  	// assignment operators, and commas, none of which are supported), so we
	  	// start there. If it doesn't match, it 'falls through' to progressively
	  	// higher precedence operators, until it eventually matches (or fails to
	  	// match) a 'primary' - a literal or a reference. This way, the abstract syntax
	  	// tree has everything in its proper place, i.e. 2 + 3 * 4 === 14, not 20.
	  	return getConditional( parser );
	  }

	  function flattenExpression ( expression ) {
	  	var refs, count = 0, stringified;

	  	extractRefs( expression, refs = [] );
	  	stringified = stringify( expression );

	  	refs = refs.map( function ( r ) { return r.indexOf( '...' ) === 0 ? r.substr( 3 ) : r; } );

	  	return {
	  		r: refs,
	  		s: getVars(stringified)
	  	};

	  	function getVars(expr) {
	  		var vars = [];
	  		for ( var i = count - 1; i >= 0; i-- ) {
	  			vars.push( ("spread$" + i) );
	  		}
	  		return vars.length ? ("(function(){var " + (vars.join(',')) + ";return(" + expr + ");})()") : expr;
	  	}

	  	function stringify ( node ) {
	  		switch ( node.t ) {
	  			case BOOLEAN_LITERAL:
	  			case GLOBAL:
	  			case NUMBER_LITERAL:
	  			case REGEXP_LITERAL:
	  				return node.v;

	  			case STRING_LITERAL:
	  				return JSON.stringify( String( node.v ) );

	  			case ARRAY_LITERAL:
	  				return '[' + ( node.m ? node.m.map( stringify ).join( ',' ) : '' ) + ']';

	  			case OBJECT_LITERAL:
	  				return '{' + ( node.m ? node.m.map( stringify ).join( ',' ) : '' ) + '}';

	  			case KEY_VALUE_PAIR:
	  				return node.k + ':' + stringify( node.v );

	  			case PREFIX_OPERATOR:
	  				return ( node.s === 'typeof' ? 'typeof ' : node.s ) + stringify( node.o );

	  			case INFIX_OPERATOR:
	  				return stringify( node.o[0] ) + ( node.s.substr( 0, 2 ) === 'in' ? ' ' + node.s + ' ' : node.s ) + stringify( node.o[1] );

	  			case INVOCATION:
	  				if ( node.spread ) {
	  					var id = count++;
	  					return ("(spread$" + id + " = " + (stringify(node.x)) + ").apply(spread$" + id + ", [].concat(" + (node.o ? node.o.map( function ( a ) { return a.n && a.n.indexOf( '...' ) === 0 ? stringify( a ) : '[' + stringify(a) + ']'; } ).join( ',' ) : '') + ") )");
	  				} else {
	  					return stringify( node.x ) + '(' + ( node.o ? node.o.map( stringify ).join( ',' ) : '' ) + ')';
	  				}

	  			case BRACKETED:
	  				return '(' + stringify( node.x ) + ')';

	  			case MEMBER:
	  				return stringify( node.x ) + stringify( node.r );

	  			case REFINEMENT:
	  				return ( node.n ? '.' + node.n : '[' + stringify( node.x ) + ']' );

	  			case CONDITIONAL:
	  				return stringify( node.o[0] ) + '?' + stringify( node.o[1] ) + ':' + stringify( node.o[2] );

	  			case REFERENCE:
	  				return '_' + refs.indexOf( node.n );

	  			default:
	  				throw new Error( 'Expected legal JavaScript' );
	  		}
	  	}
	  }

	  // TODO maybe refactor this?
	  function extractRefs ( node, refs ) {
	  	var i, list;

	  	if ( node.t === REFERENCE ) {
	  		if ( refs.indexOf( node.n ) === -1 ) {
	  			refs.unshift( node.n );
	  		}
	  	}

	  	list = node.o || node.m;
	  	if ( list ) {
	  		if ( isObject( list ) ) {
	  			extractRefs( list, refs );
	  		} else {
	  			i = list.length;
	  			while ( i-- ) {
	  				if ( list[i].n && list[i].n.indexOf('...') === 0 ) {
	  					node.spread = true;
	  				}
	  				extractRefs( list[i], refs );
	  			}
	  		}
	  	}

	  	if ( node.x ) {
	  		extractRefs( node.x, refs );
	  	}

	  	if ( node.r ) {
	  		extractRefs( node.r, refs );
	  	}

	  	if ( node.v ) {
	  		extractRefs( node.v, refs );
	  	}
	  }

	  // simple JSON parser, without the restrictions of JSON parse
	  // (i.e. having to double-quote keys).
	  //
	  // If passed a hash of values as the second argument, ${placeholders}
	  // will be replaced with those values

	  var specials$1 = {
	  	'true': true,
	  	'false': false,
	  	'null': null,
	  	undefined: undefined
	  };

	  var specialsPattern = new RegExp( '^(?:' + Object.keys( specials$1 ).join( '|' ) + ')' );
	  var numberPattern$1 = /^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/;
	  var placeholderPattern = /\$\{([^\}]+)\}/g;
	  var placeholderAtStartPattern = /^\$\{([^\}]+)\}/;
	  var onlyWhitespace = /^\s*$/;

	  var JsonParser = Parser$1.extend({
	  	init: function ( str, options ) {
	  		this.values = options.values;
	  		this.allowWhitespace();
	  	},

	  	postProcess: function ( result ) {
	  		if ( result.length !== 1 || !onlyWhitespace.test( this.leftover ) ) {
	  			return null;
	  		}

	  		return { value: result[0].v };
	  	},

	  	converters: [
	  		function getPlaceholder ( parser ) {
	  			if ( !parser.values ) return null;

	  			var placeholder = parser.matchPattern( placeholderAtStartPattern );

	  			if ( placeholder && ( parser.values.hasOwnProperty( placeholder ) ) ) {
	  				return { v: parser.values[ placeholder ] };
	  			}
	  		},

	  		function getSpecial ( parser ) {
	  			var special = parser.matchPattern( specialsPattern );
	  			if ( special ) return { v: specials$1[ special ] };
	  		},

	  		function getNumber ( parser ) {
	  			var number = parser.matchPattern( numberPattern$1 );
	  			if ( number ) return { v: +number };
	  		},

	  		function getString ( parser ) {
	  			var stringLiteral = readStringLiteral( parser );
	  			var values = parser.values;

	  			if ( stringLiteral && values ) {
	  				return {
	  					v: stringLiteral.v.replace( placeholderPattern, function ( match, $1 ) { return ( $1 in values ? values[ $1 ] : $1 ); } )
	  				};
	  			}

	  			return stringLiteral;
	  		},

	  		function getObject ( parser ) {
	  			if ( !parser.matchString( '{' ) ) return null;

	  			var result = {};

	  			parser.allowWhitespace();

	  			if ( parser.matchString( '}' ) ) {
	  				return { v: result };
	  			}

	  			var pair;
	  			while ( pair = getKeyValuePair( parser ) ) {
	  				result[ pair.key ] = pair.value;

	  				parser.allowWhitespace();

	  				if ( parser.matchString( '}' ) ) {
	  					return { v: result };
	  				}

	  				if ( !parser.matchString( ',' ) ) {
	  					return null;
	  				}
	  			}

	  			return null;
	  		},

	  		function getArray ( parser ) {
	  			if ( !parser.matchString( '[' ) ) return null;

	  			var result = [];

	  			parser.allowWhitespace();

	  			if ( parser.matchString( ']' ) ) {
	  				return { v: result };
	  			}

	  			var valueToken;
	  			while ( valueToken = parser.read() ) {
	  				result.push( valueToken.v );

	  				parser.allowWhitespace();

	  				if ( parser.matchString( ']' ) ) {
	  					return { v: result };
	  				}

	  				if ( !parser.matchString( ',' ) ) {
	  					return null;
	  				}

	  				parser.allowWhitespace();
	  			}

	  			return null;
	  		}
	  	]
	  });

	  function getKeyValuePair ( parser ) {
	  	parser.allowWhitespace();

	  	var key = readKey( parser );

	  	if ( !key ) return null;

	  	var pair = { key: key };

	  	parser.allowWhitespace();
	  	if ( !parser.matchString( ':' ) ) {
	  		return null;
	  	}
	  	parser.allowWhitespace();

	  	var valueToken = parser.read();

	  	if ( !valueToken ) return null;

	  	pair.value = valueToken.v;
	  	return pair;
	  }

	  function parseJSON ( str, values ) {
	  	var parser = new JsonParser( str, { values: values });
	  	return parser.result;
	  }

	  var methodCallPattern = /^([a-zA-Z_$][a-zA-Z_$0-9]*)\(.*\)\s*$/;
	  var ExpressionParser;
	  ExpressionParser = Parser$1.extend({
	  	converters: [ readExpression ],
	  	spreadArgs: true
	  });

	  // TODO clean this up, it's shocking
	  function processDirective ( tokens, parentParser, type ) {
	  	var result,
	  		match,
	  		token,
	  		colonIndex,
	  		directiveName,
	  		directiveArgs,
	  		parsed;

	  	if ( typeof tokens === 'string' ) {
	  		var pos = parentParser.pos - tokens.length;
	  		if ( type === DECORATOR || type === TRANSITION ) {
	  			var parser = new ExpressionParser( ("[" + tokens + "]") );
	  			return { a: flattenExpression( parser.result[0] ) };
	  		}

	  		if ( type === EVENT && ( match = methodCallPattern.exec( tokens ) ) ) {
	  			warnIfDebug( parentParser.getContextMessage( pos, ("Unqualified method events are deprecated. Prefix methods with '@this.' to call methods on the current Ractive instance.") )[2] );
	  			tokens = "@this." + (match[1]) + "" + (tokens.substr(match[1].length));
	  		}

	  		if ( type === EVENT && ~tokens.indexOf( '(' ) ) {
	  			var parser$1 = new ExpressionParser( '[' + tokens + ']' );
	  			if ( parser$1.result && parser$1.result[0] ) {
	  				if ( parser$1.remaining().length ) {
	  					parentParser.pos = pos + tokens.length - parser$1.remaining().length;
	  					parentParser.error( ("Invalid input after event expression '" + (parser$1.remaining()) + "'") );
	  				}
	  				return { x: flattenExpression( parser$1.result[0] ) };
	  			}

	  			if ( tokens.indexOf( ':' ) > tokens.indexOf( '(' ) || !~tokens.indexOf( ':' ) ) {
	  				parentParser.pos = pos;
	  				parentParser.error( ("Invalid input in event expression '" + tokens + "'") );
	  			}

	  		}

	  		if ( tokens.indexOf( ':' ) === -1 ) {
	  			return tokens.trim();
	  		}

	  		tokens = [ tokens ];
	  	}

	  	result = {};

	  	directiveName = [];
	  	directiveArgs = [];

	  	if ( tokens ) {
	  		while ( tokens.length ) {
	  			token = tokens.shift();

	  			if ( typeof token === 'string' ) {
	  				colonIndex = token.indexOf( ':' );

	  				if ( colonIndex === -1 ) {
	  					directiveName.push( token );
	  				} else {
	  					// is the colon the first character?
	  					if ( colonIndex ) {
	  						// no
	  						directiveName.push( token.substr( 0, colonIndex ) );
	  					}

	  					// if there is anything after the colon in this token, treat
	  					// it as the first token of the directiveArgs fragment
	  					if ( token.length > colonIndex + 1 ) {
	  						directiveArgs[0] = token.substring( colonIndex + 1 );
	  					}

	  					break;
	  				}
	  			}

	  			else {
	  				directiveName.push( token );
	  			}
	  		}

	  		directiveArgs = directiveArgs.concat( tokens );
	  	}

	  	if ( !directiveName.length ) {
	  		result = '';
	  	} else if ( directiveArgs.length || typeof directiveName !== 'string' ) {
	  		result = {
	  			// TODO is this really necessary? just use the array
	  			n: ( directiveName.length === 1 && typeof directiveName[0] === 'string' ? directiveName[0] : directiveName )
	  		};

	  		if ( directiveArgs.length === 1 && typeof directiveArgs[0] === 'string' ) {
	  			parsed = parseJSON( '[' + directiveArgs[0] + ']' );
	  			result.a = parsed ? parsed.value : [ directiveArgs[0].trim() ];
	  		}

	  		else {
	  			result.d = directiveArgs;
	  		}
	  	} else {
	  		result = directiveName;
	  	}

	  	if ( directiveArgs.length && type ) {
	  		warnIfDebug( parentParser.getContextMessage( parentParser.pos, ("Proxy events with arguments are deprecated. You can fire events with arguments using \"@this.fire('eventName', arg1, arg2, ...)\".") )[2] );
	  	}

	  	return result;
	  }

	  var attributeNamePattern = /^[^\s"'>\/=]+/;
	  var onPattern = /^on/;
	  var proxyEventPattern = /^on-([a-zA-Z\\*\\.$_][a-zA-Z\\*\\.$_0-9\-]+)$/;
	  var reservedEventNames = /^(?:change|reset|teardown|update|construct|config|init|render|unrender|detach|insert)$/;
	  var decoratorPattern = /^as-([a-z-A-Z][-a-zA-Z_0-9]*)$/;
	  var transitionPattern = /^([a-zA-Z](?:(?!-in-out)[-a-zA-Z_0-9])*)-(in|out|in-out)$/;
	  var directives = {
	  				   'intro-outro': { t: TRANSITION, v: 't0' },
	  				   intro: { t: TRANSITION, v: 't1' },
	  				   outro: { t: TRANSITION, v: 't2' },
	  				   lazy: { t: BINDING_FLAG, v: 'l' },
	  				   twoway: { t: BINDING_FLAG, v: 't' },
	  				   decorator: { t: DECORATOR }
	  				 };
	  var unquotedAttributeValueTextPattern = /^[^\s"'=<>`]+/;
	  function readAttribute ( parser ) {
	  	var attr, name, value, i, nearest, idx;

	  	parser.allowWhitespace();

	  	name = parser.matchPattern( attributeNamePattern );
	  	if ( !name ) {
	  		return null;
	  	}

	  	// check for accidental delimiter consumption e.g. <tag bool{{>attrs}} />
	  	nearest = name.length;
	  	for ( i = 0; i < parser.tags.length; i++ ) {
	  		if ( ~( idx = name.indexOf( parser.tags[ i ].open ) ) ) {
	  			if ( idx < nearest ) nearest = idx;
	  		}
	  	}
	  	if ( nearest < name.length ) {
	  		parser.pos -= name.length - nearest;
	  		name = name.substr( 0, nearest );
	  		return { n: name };
	  	}

	  	attr = { n: name };

	  	value = readAttributeValue( parser );
	  	if ( value != null ) { // not null/undefined
	  		attr.f = value;
	  	}

	  	return attr;
	  }

	  function readAttributeValue ( parser ) {
	  	var start, valueStart, startDepth, value;

	  	start = parser.pos;

	  	// next character must be `=`, `/`, `>` or whitespace
	  	if ( !/[=\/>\s]/.test( parser.nextChar() ) ) {
	  		parser.error( 'Expected `=`, `/`, `>` or whitespace' );
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '=' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	valueStart = parser.pos;
	  	startDepth = parser.sectionDepth;

	  	value = readQuotedAttributeValue( parser, ("'") ) ||
	  			readQuotedAttributeValue( parser, ("\"") ) ||
	  			readUnquotedAttributeValue( parser );

	  	if ( value === null ) {
	  		parser.error( 'Expected valid attribute value' );
	  	}

	  	if ( parser.sectionDepth !== startDepth ) {
	  		parser.pos = valueStart;
	  		parser.error( 'An attribute value must contain as many opening section tags as closing section tags' );
	  	}

	  	if ( !value.length ) {
	  		return '';
	  	}

	  	if ( value.length === 1 && typeof value[0] === 'string' ) {
	  		return decodeCharacterReferences( value[0] );
	  	}

	  	return value;
	  }

	  function readUnquotedAttributeValueToken ( parser ) {
	  	var start, text, haystack, needles, index;

	  	start = parser.pos;

	  	text = parser.matchPattern( unquotedAttributeValueTextPattern );

	  	if ( !text ) {
	  		return null;
	  	}

	  	haystack = text;
	  	needles = parser.tags.map( function ( t ) { return t.open; } ); // TODO refactor... we do this in readText.js as well

	  	if ( ( index = getLowestIndex( haystack, needles ) ) !== -1 ) {
	  		text = text.substr( 0, index );
	  		parser.pos = start + text.length;
	  	}

	  	return text;
	  }

	  function readUnquotedAttributeValue ( parser ) {
	  	var tokens, token;

	  	parser.inAttribute = true;

	  	tokens = [];

	  	token = readMustache( parser ) || readUnquotedAttributeValueToken( parser );
	  	while ( token ) {
	  		tokens.push( token );
	  		token = readMustache( parser ) || readUnquotedAttributeValueToken( parser );
	  	}

	  	if ( !tokens.length ) {
	  		return null;
	  	}

	  	parser.inAttribute = false;
	  	return tokens;
	  }

	  function readQuotedAttributeValue ( parser, quoteMark ) {
	  	var start, tokens, token;

	  	start = parser.pos;

	  	if ( !parser.matchString( quoteMark ) ) {
	  		return null;
	  	}

	  	parser.inAttribute = quoteMark;

	  	tokens = [];

	  	token = readMustache( parser ) || readQuotedStringToken( parser, quoteMark );
	  	while ( token !== null ) {
	  		tokens.push( token );
	  		token = readMustache( parser ) || readQuotedStringToken( parser, quoteMark );
	  	}

	  	if ( !parser.matchString( quoteMark ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.inAttribute = false;

	  	return tokens;
	  }

	  function readQuotedStringToken ( parser, quoteMark ) {
	  	var haystack = parser.remaining();

	  	var needles = parser.tags.map( function ( t ) { return t.open; } ); // TODO refactor... we do this in readText.js as well
	  	needles.push( quoteMark );

	  	var index = getLowestIndex( haystack, needles );

	  	if ( index === -1 ) {
	  		parser.error( 'Quoted attribute value must have a closing quote' );
	  	}

	  	if ( !index ) {
	  		return null;
	  	}

	  	parser.pos += index;
	  	return haystack.substr( 0, index );
	  }

	  function readAttributeOrDirective ( parser ) {
	  		var match,
	  			attribute,
	  		    directive;

	  		attribute = readAttribute( parser );

	  		if ( !attribute ) return null;

	  		// intro, outro, decorator
	  		if ( directive = directives[ attribute.n ] ) {
	  			attribute.t = directive.t;
	  			if ( directive.v ) attribute.v = directive.v;
	  			delete attribute.n; // no name necessary

	  			if ( directive.t === TRANSITION || directive.t === DECORATOR ) attribute.f = processDirective( attribute.f, parser );

	  			if ( directive.t === TRANSITION ) {
	  				warnOnceIfDebug( ("" + (directive.v === 't0' ? 'intro-outro' : directive.v === 't1' ? 'intro' : 'outro') + " is deprecated. To specify tranisitions, use the transition name suffixed with '-in', '-out', or '-in-out' as an attribute. Arguments can be specified in the attribute value as a simple list of expressions without mustaches.") );
	  			} else if ( directive.t === DECORATOR ) {
	  				warnOnceIfDebug( ("decorator is deprecated. To specify decorators, use the decorator name prefixed with 'as-' as an attribute. Arguments can be specified in the attribute value as a simple list of expressions without mustaches.") );
	  			}
	  		}

	  		// decorators
	  		else if ( match = decoratorPattern.exec( attribute.n ) ) {
	  			delete attribute.n;
	  			attribute.t = DECORATOR;
	  			attribute.f = processDirective( attribute.f, parser, DECORATOR );
	  			if ( typeof attribute.f === 'object' ) attribute.f.n = match[1];
	  			else attribute.f = match[1];
	  		}

	  		// transitions
	  		else if ( match = transitionPattern.exec( attribute.n ) ) {
	  			delete attribute.n;
	  			attribute.t = TRANSITION;
	  			attribute.f = processDirective( attribute.f, parser, TRANSITION );
	  			if ( typeof attribute.f === 'object' ) attribute.f.n = match[1];
	  			else attribute.f = match[1];
	  			attribute.v = match[2] === 'in-out' ? 't0' : match[2] === 'in' ? 't1' : 't2';
	  		}

	  		// on-click etc
	  		else if ( match = proxyEventPattern.exec( attribute.n ) ) {
	  			attribute.n = match[1];
	  			attribute.t = EVENT;
	  			attribute.f = processDirective( attribute.f, parser, EVENT );

	  			if ( reservedEventNames.test( attribute.f.n || attribute.f ) ) {
	  				parser.pos -= ( attribute.f.n || attribute.f ).length;
	  				parser.error( 'Cannot use reserved event names (change, reset, teardown, update, construct, config, init, render, unrender, detach, insert)' );
	  			}
	  		}

	  		else {
	  			if ( parser.sanitizeEventAttributes && onPattern.test( attribute.n ) ) {
	  				return { exclude: true };
	  			} else {
	  				attribute.f = attribute.f || ( attribute.f === '' ? '' : 0 );
	  				attribute.t = ATTRIBUTE;
	  			}
	  		}

	  		return attribute;
	  }

	  var delimiterChangeToken = { t: DELIMCHANGE, exclude: true };

	  function readMustache ( parser ) {
	  	var mustache, i;

	  	// If we're inside a <script> or <style> tag, and we're not
	  	// interpolating, bug out
	  	if ( parser.interpolate[ parser.inside ] === false ) {
	  		return null;
	  	}

	  	for ( i = 0; i < parser.tags.length; i += 1 ) {
	  		if ( mustache = readMustacheOfType( parser, parser.tags[i] ) ) {
	  			return mustache;
	  		}
	  	}

	  	if ( parser.inTag && !parser.inAttribute ) {
	  		mustache = readAttributeOrDirective( parser );
	  		if ( mustache ) {
	  			parser.allowWhitespace();
	  			return mustache;
	  		}
	  	}
	  }

	  function readMustacheOfType ( parser, tag ) {
	  	var start, mustache, reader, i;

	  	start = parser.pos;

	  	if ( parser.matchString( '\\' + tag.open ) ) {
	  		if ( start === 0 || parser.str[ start - 1 ] !== '\\' ) {
	  			return tag.open;
	  		}
	  	} else if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	// delimiter change?
	  	if ( mustache = readDelimiterChange( parser ) ) {
	  		// find closing delimiter or abort...
	  		if ( !parser.matchString( tag.close ) ) {
	  			return null;
	  		}

	  		// ...then make the switch
	  		tag.open = mustache[0];
	  		tag.close = mustache[1];
	  		parser.sortMustacheTags();

	  		return delimiterChangeToken;
	  	}

	  	parser.allowWhitespace();

	  	// illegal section closer
	  	if ( parser.matchString( '/' ) ) {
	  		parser.pos -= 1;
	  		var rewind = parser.pos;
	  		if ( !readNumberLiteral( parser ) ) {
	  			parser.pos = rewind - ( tag.close.length );
	  			if ( parser.inAttribute ) {
	  				parser.pos = start;
	  				return null;
	  			} else {
	  				parser.error( 'Attempted to close a section that wasn\'t open' );
	  			}
	  		} else {
	  			parser.pos = rewind;
	  		}
	  	}

	  	for ( i = 0; i < tag.readers.length; i += 1 ) {
	  		reader = tag.readers[i];

	  		if ( mustache = reader( parser, tag ) ) {
	  			if ( tag.isStatic ) {
	  				mustache.s = true; // TODO make this `1` instead - more compact
	  			}

	  			if ( parser.includeLinePositions ) {
	  				mustache.p = parser.getLinePos( start );
	  			}

	  			return mustache;
	  		}
	  	}

	  	parser.pos = start;
	  	return null;
	  }

	  function refineExpression ( expression, mustache ) {
	  	var referenceExpression;

	  	if ( expression ) {
	  		while ( expression.t === BRACKETED && expression.x ) {
	  			expression = expression.x;
	  		}

	  		if ( expression.t === REFERENCE ) {
	  			mustache.r = expression.n;
	  		} else {
	  			if ( referenceExpression = getReferenceExpression( expression ) ) {
	  				mustache.rx = referenceExpression;
	  			} else {
	  				mustache.x = flattenExpression( expression );
	  			}
	  		}

	  		return mustache;
	  	}
	  }

	  // TODO refactor this! it's bewildering
	  function getReferenceExpression ( expression ) {
	  	var members = [], refinement;

	  	while ( expression.t === MEMBER && expression.r.t === REFINEMENT ) {
	  		refinement = expression.r;

	  		if ( refinement.x ) {
	  			if ( refinement.x.t === REFERENCE ) {
	  				members.unshift( refinement.x );
	  			} else {
	  				members.unshift( flattenExpression( refinement.x ) );
	  			}
	  		} else {
	  			members.unshift( refinement.n );
	  		}

	  		expression = expression.x;
	  	}

	  	if ( expression.t !== REFERENCE ) {
	  		return null;
	  	}

	  	return {
	  		r: expression.n,
	  		m: members
	  	};
	  }

	  function readTriple ( parser, tag ) {
	  	var expression = readExpression( parser ), triple;

	  	if ( !expression ) {
	  		return null;
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	triple = { t: TRIPLE };
	  	refineExpression( expression, triple ); // TODO handle this differently - it's mysterious

	  	return triple;
	  }

	  function readUnescaped ( parser, tag ) {
	  	var expression, triple;

	  	if ( !parser.matchString( '&' ) ) {
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	expression = readExpression( parser );

	  	if ( !expression ) {
	  		return null;
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	triple = { t: TRIPLE };
	  	refineExpression( expression, triple ); // TODO handle this differently - it's mysterious

	  	return triple;
	  }

	  var legalAlias = /^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/;
	  var asRE = /^as/i;

	  function readAliases( parser ) {
	  	var aliases = [], alias, start = parser.pos;

	  	parser.allowWhitespace();

	  	alias = readAlias( parser );

	  	if ( alias ) {
	  		alias.x = refineExpression( alias.x, {} );
	  		aliases.push( alias );

	  		parser.allowWhitespace();

	  		while ( parser.matchString(',') ) {
	  			alias = readAlias( parser );

	  			if ( !alias ) {
	  				parser.error( 'Expected another alias.' );
	  			}

	  			alias.x = refineExpression( alias.x, {} );
	  			aliases.push( alias );

	  			parser.allowWhitespace();
	  		}

	  		return aliases;
	  	}

	  	parser.pos = start;
	  	return null;
	  }

	  function readAlias( parser ) {
	  	var expr, alias, start = parser.pos;

	  	parser.allowWhitespace();

	  	expr = readExpression( parser, [] );

	  	if ( !expr ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchPattern( asRE ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	alias = parser.matchPattern( legalAlias );

	  	if ( !alias ) {
	  		parser.error( 'Expected a legal alias name.' );
	  	}

	  	return { n: alias, x: expr };
	  }

	  function readPartial ( parser, tag ) {
	  	if ( !parser.matchString( '>' ) ) return null;

	  	parser.allowWhitespace();

	  	// Partial names can include hyphens, so we can't use readExpression
	  	// blindly. Instead, we use the `relaxedNames` flag to indicate that
	  	// `foo-bar` should be read as a single name, rather than 'subtract
	  	// bar from foo'
	  	parser.relaxedNames = parser.strictRefinement = true;
	  	var expression = readExpression( parser );
	  	parser.relaxedNames = parser.strictRefinement = false;

	  	if ( !expression ) return null;

	  	var partial = { t: PARTIAL };
	  	refineExpression( expression, partial ); // TODO...

	  	parser.allowWhitespace();

	  	// check for alias context e.g. `{{>foo bar as bat, bip as bop}}` then
	  	// turn it into `{{#with bar as bat, bip as bop}}{{>foo}}{{/with}}`
	  	var aliases = readAliases( parser );
	  	if ( aliases ) {
	  		partial = {
	  			t: ALIAS,
	  			z: aliases,
	  			f: [ partial ]
	  		};
	  	}

	  	// otherwise check for literal context e.g. `{{>foo bar}}` then
	  	// turn it into `{{#with bar}}{{>foo}}{{/with}}`
	  	else {
	  		var context = readExpression( parser );
	  		if ( context) {
	  			partial = {
	  				t: SECTION,
	  				n: SECTION_WITH,
	  				f: [ partial ]
	  			};

	  			refineExpression( context, partial );
	  		}
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	return partial;
	  }

	  function readComment ( parser, tag ) {
	  	var index;

	  	if ( !parser.matchString( '!' ) ) {
	  		return null;
	  	}

	  	index = parser.remaining().indexOf( tag.close );

	  	if ( index !== -1 ) {
	  		parser.pos += index + tag.close.length;
	  		return { t: COMMENT };
	  	}
	  }

	  function readExpressionOrReference ( parser, expectedFollowers ) {
	  	var start, expression, i;

	  	start = parser.pos;
	  	expression = readExpression( parser );

	  	if ( !expression ) {
	  		// valid reference but invalid expression e.g. `{{new}}`?
	  		var ref = parser.matchPattern( /^(\w+)/ );
	  		if ( ref ) {
	  			return {
	  				t: REFERENCE,
	  				n: ref
	  			};
	  		}

	  		return null;
	  	}

	  	for ( i = 0; i < expectedFollowers.length; i += 1 ) {
	  		if ( parser.remaining().substr( 0, expectedFollowers[i].length ) === expectedFollowers[i] ) {
	  			return expression;
	  		}
	  	}

	  	parser.pos = start;
	  	return readReference( parser );
	  }

	  function readInterpolator ( parser, tag ) {
	  	var start, expression, interpolator, err;

	  	start = parser.pos;

	  	// TODO would be good for perf if we could do away with the try-catch
	  	try {
	  		expression = readExpressionOrReference( parser, [ tag.close ]);
	  	} catch ( e ) {
	  		err = e;
	  	}

	  	if ( !expression ) {
	  		if ( parser.str.charAt( start ) === '!' ) {
	  			// special case - comment
	  			parser.pos = start;
	  			return null;
	  		}

	  		if ( err ) {
	  			throw err;
	  		}
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "' after reference") );

	  		if ( !expression ) {
	  			// special case - comment
	  			if ( parser.nextChar() === '!' ) {
	  				return null;
	  			}

	  			parser.error( ("Expected expression or legal reference") );
	  		}
	  	}

	  	interpolator = { t: INTERPOLATOR };
	  	refineExpression( expression, interpolator ); // TODO handle this differently - it's mysterious

	  	return interpolator;
	  }

	  var yieldPattern = /^yield\s*/;

	  function readYielder ( parser, tag ) {
	  	if ( !parser.matchPattern( yieldPattern ) ) return null;

	  	var name = parser.matchPattern( /^[a-zA-Z_$][a-zA-Z_$0-9\-]*/ );

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("expected legal partial name") );
	  	}

	  	var yielder = { t: YIELDER };
	  	if ( name ) yielder.n = name;

	  	return yielder;
	  }

	  function readClosing ( parser, tag ) {
	  	var start, remaining, index, closing;

	  	start = parser.pos;

	  	if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '/' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	remaining = parser.remaining();
	  	index = remaining.indexOf( tag.close );

	  	if ( index !== -1 ) {
	  		closing = {
	  			t: CLOSING,
	  			r: remaining.substr( 0, index ).split( ' ' )[0]
	  		};

	  		parser.pos += index;

	  		if ( !parser.matchString( tag.close ) ) {
	  			parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  		}

	  		return closing;
	  	}

	  	parser.pos = start;
	  	return null;
	  }

	  var elsePattern = /^\s*else\s*/;

	  function readElse ( parser, tag ) {
	  	var start = parser.pos;

	  	if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	if ( !parser.matchPattern( elsePattern ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	return {
	  		t: ELSE
	  	};
	  }

	  var elsePattern$1 = /^\s*elseif\s+/;

	  function readElseIf ( parser, tag ) {
	  	var start = parser.pos;

	  	if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	if ( !parser.matchPattern( elsePattern$1 ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	var expression = readExpression( parser );

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	return {
	  		t: ELSEIF,
	  		x: expression
	  	};
	  }

	  var handlebarsBlockCodes = {
	  	'each':    SECTION_EACH,
	  	'if':      SECTION_IF,
	  	'with':    SECTION_IF_WITH,
	  	'unless':  SECTION_UNLESS
	  };

	  var indexRefPattern = /^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/;
	  var keyIndexRefPattern = /^\s*,\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/;
	  var handlebarsBlockPattern = new RegExp( '^(' + Object.keys( handlebarsBlockCodes ).join( '|' ) + ')\\b' );
	  function readSection ( parser, tag ) {
	  	var start, expression, section, child, children, hasElse, block, unlessBlock, conditions, closed, i, expectedClose, aliasOnly = false;

	  	start = parser.pos;

	  	if ( parser.matchString( '^' ) ) {
	  		section = { t: SECTION, f: [], n: SECTION_UNLESS };
	  	} else if ( parser.matchString( '#' ) ) {
	  		section = { t: SECTION, f: [] };

	  		if ( parser.matchString( 'partial' ) ) {
	  			parser.pos = start - parser.standardDelimiters[0].length;
	  			parser.error( 'Partial definitions can only be at the top level of the template, or immediately inside components' );
	  		}

	  		if ( block = parser.matchPattern( handlebarsBlockPattern ) ) {
	  			expectedClose = block;
	  			section.n = handlebarsBlockCodes[ block ];
	  		}
	  	} else {
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	if ( block === 'with' ) {
	  		var aliases = readAliases( parser );
	  		if ( aliases ) {
	  			aliasOnly = true;
	  			section.z = aliases;
	  			section.t = ALIAS;
	  		}
	  	} else if ( block === 'each' ) {
	  		var alias = readAlias( parser );
	  		if ( alias ) {
	  			section.z = [ { n: alias.n, x: { r: '.' } } ];
	  			expression = alias.x;
	  		}
	  	}

	  	if ( !aliasOnly ) {
	  		if ( !expression ) expression = readExpression( parser );

	  		if ( !expression ) {
	  			parser.error( 'Expected expression' );
	  		}

	  		// optional index and key references
	  		if ( i = parser.matchPattern( indexRefPattern ) ) {
	  			var extra;

	  			if ( extra = parser.matchPattern( keyIndexRefPattern ) ) {
	  				section.i = i + ',' + extra;
	  			} else {
	  				section.i = i;
	  			}
	  		}
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	parser.sectionDepth += 1;
	  	children = section.f;

	  	conditions = [];

	  	var pos;
	  	do {
	  		pos = parser.pos;
	  		if ( child = readClosing( parser, tag ) ) {
	  			if ( expectedClose && child.r !== expectedClose ) {
	  				parser.pos = pos;
	  				parser.error( ("Expected " + (tag.open) + "/" + expectedClose + "" + (tag.close)) );
	  			}

	  			parser.sectionDepth -= 1;
	  			closed = true;
	  		}

	  		else if ( !aliasOnly && ( child = readElseIf( parser, tag ) ) ) {
	  			if ( section.n === SECTION_UNLESS ) {
	  				parser.error( '{{else}} not allowed in {{#unless}}' );
	  			}

	  			if ( hasElse ) {
	  				parser.error( 'illegal {{elseif...}} after {{else}}' );
	  			}

	  			if ( !unlessBlock ) {
	  				unlessBlock = [];
	  			}

	  			var mustache = {
	  				t: SECTION,
	  				n: SECTION_IF,
	  				f: children = []
	  			};
	  			refineExpression( child.x, mustache );

	  			unlessBlock.push( mustache );
	  		}

	  		else if ( !aliasOnly && ( child = readElse( parser, tag ) ) ) {
	  			if ( section.n === SECTION_UNLESS ) {
	  				parser.error( '{{else}} not allowed in {{#unless}}' );
	  			}

	  			if ( hasElse ) {
	  				parser.error( 'there can only be one {{else}} block, at the end of a section' );
	  			}

	  			hasElse = true;

	  			// use an unless block if there's no elseif
	  			if ( !unlessBlock ) {
	  				unlessBlock = [];
	  			}

	  			unlessBlock.push({
	  				t: SECTION,
	  				n: SECTION_UNLESS,
	  				f: children = []
	  			});
	  		}

	  		else {
	  			child = parser.read( READERS );

	  			if ( !child ) {
	  				break;
	  			}

	  			children.push( child );
	  		}
	  	} while ( !closed );

	  	if ( unlessBlock ) {
	  		section.l = unlessBlock;
	  	}

	  	if ( !aliasOnly ) {
	  		refineExpression( expression, section );
	  	}

	  	// TODO if a section is empty it should be discarded. Don't do
	  	// that here though - we need to clean everything up first, as
	  	// it may contain removeable whitespace. As a temporary measure,
	  	// to pass the existing tests, remove empty `f` arrays
	  	if ( !section.f.length ) {
	  		delete section.f;
	  	}

	  	return section;
	  }

	  var OPEN_COMMENT = '<!--';
	  var CLOSE_COMMENT = '-->';
	  function readHtmlComment ( parser ) {
	  	var start, content, remaining, endIndex, comment;

	  	start = parser.pos;

	  	if ( parser.textOnlyMode || !parser.matchString( OPEN_COMMENT ) ) {
	  		return null;
	  	}

	  	remaining = parser.remaining();
	  	endIndex = remaining.indexOf( CLOSE_COMMENT );

	  	if ( endIndex === -1 ) {
	  		parser.error( 'Illegal HTML - expected closing comment sequence (\'-->\')' );
	  	}

	  	content = remaining.substr( 0, endIndex );
	  	parser.pos += endIndex + 3;

	  	comment = {
	  		t: COMMENT,
	  		c: content
	  	};

	  	if ( parser.includeLinePositions ) {
	  		comment.p = parser.getLinePos( start );
	  	}

	  	return comment;
	  }

	  var leadingLinebreak = /^[ \t\f\r\n]*\r?\n/;
	  var trailingLinebreak = /\r?\n[ \t\f\r\n]*$/;
	  function stripStandalones ( items ) {
	  	var i, current, backOne, backTwo, lastSectionItem;

	  	for ( i=1; i<items.length; i+=1 ) {
	  		current = items[i];
	  		backOne = items[i-1];
	  		backTwo = items[i-2];

	  		// if we're at the end of a [text][comment][text] sequence...
	  		if ( isString( current ) && isComment( backOne ) && isString( backTwo ) ) {

	  			// ... and the comment is a standalone (i.e. line breaks either side)...
	  			if ( trailingLinebreak.test( backTwo ) && leadingLinebreak.test( current ) ) {

	  				// ... then we want to remove the whitespace after the first line break
	  				items[i-2] = backTwo.replace( trailingLinebreak, '\n' );

	  				// and the leading line break of the second text token
	  				items[i] = current.replace( leadingLinebreak, '' );
	  			}
	  		}

	  		// if the current item is a section, and it is preceded by a linebreak, and
	  		// its first item is a linebreak...
	  		if ( isSection( current ) && isString( backOne ) ) {
	  			if ( trailingLinebreak.test( backOne ) && isString( current.f[0] ) && leadingLinebreak.test( current.f[0] ) ) {
	  				items[i-1] = backOne.replace( trailingLinebreak, '\n' );
	  				current.f[0] = current.f[0].replace( leadingLinebreak, '' );
	  			}
	  		}

	  		// if the last item was a section, and it is followed by a linebreak, and
	  		// its last item is a linebreak...
	  		if ( isString( current ) && isSection( backOne ) ) {
	  			lastSectionItem = lastItem( backOne.f );

	  			if ( isString( lastSectionItem ) && trailingLinebreak.test( lastSectionItem ) && leadingLinebreak.test( current ) ) {
	  				backOne.f[ backOne.f.length - 1 ] = lastSectionItem.replace( trailingLinebreak, '\n' );
	  				items[i] = current.replace( leadingLinebreak, '' );
	  			}
	  		}
	  	}

	  	return items;
	  }

	  function isString ( item ) {
	  	return typeof item === 'string';
	  }

	  function isComment ( item ) {
	  	return item.t === COMMENT || item.t === DELIMCHANGE;
	  }

	  function isSection ( item ) {
	  	return ( item.t === SECTION || item.t === INVERTED ) && item.f;
	  }

	  function trimWhitespace ( items, leadingPattern, trailingPattern ) {
	  	var item;

	  	if ( leadingPattern ) {
	  		item = items[0];
	  		if ( typeof item === 'string' ) {
	  			item = item.replace( leadingPattern, '' );

	  			if ( !item ) {
	  				items.shift();
	  			} else {
	  				items[0] = item;
	  			}
	  		}
	  	}

	  	if ( trailingPattern ) {
	  		item = lastItem( items );
	  		if ( typeof item === 'string' ) {
	  			item = item.replace( trailingPattern, '' );

	  			if ( !item ) {
	  				items.pop();
	  			} else {
	  				items[ items.length - 1 ] = item;
	  			}
	  		}
	  	}
	  }

	  var contiguousWhitespace = /[ \t\f\r\n]+/g;
	  var preserveWhitespaceElements = /^(?:pre|script|style|textarea)$/i;
	  var leadingWhitespace$1 = /^[ \t\f\r\n]+/;
	  var trailingWhitespace = /[ \t\f\r\n]+$/;
	  var leadingNewLine = /^(?:\r\n|\r|\n)/;
	  var trailingNewLine = /(?:\r\n|\r|\n)$/;

	  function cleanup ( items, stripComments, preserveWhitespace, removeLeadingWhitespace, removeTrailingWhitespace ) {
	  	if ( typeof items === 'string' ) return;

	  	var i,
	  		item,
	  		previousItem,
	  		nextItem,
	  		preserveWhitespaceInsideFragment,
	  		removeLeadingWhitespaceInsideFragment,
	  		removeTrailingWhitespaceInsideFragment,
	  		key;

	  	// First pass - remove standalones and comments etc
	  	stripStandalones( items );

	  	i = items.length;
	  	while ( i-- ) {
	  		item = items[i];

	  		// Remove delimiter changes, unsafe elements etc
	  		if ( item.exclude ) {
	  			items.splice( i, 1 );
	  		}

	  		// Remove comments, unless we want to keep them
	  		else if ( stripComments && item.t === COMMENT ) {
	  			items.splice( i, 1 );
	  		}
	  	}

	  	// If necessary, remove leading and trailing whitespace
	  	trimWhitespace( items, removeLeadingWhitespace ? leadingWhitespace$1 : null, removeTrailingWhitespace ? trailingWhitespace : null );

	  	i = items.length;
	  	while ( i-- ) {
	  		item = items[i];

	  		// Recurse
	  		if ( item.f ) {
	  			var isPreserveWhitespaceElement = item.t === ELEMENT && preserveWhitespaceElements.test( item.e );
	  			preserveWhitespaceInsideFragment = preserveWhitespace || isPreserveWhitespaceElement;

	  			if ( !preserveWhitespace && isPreserveWhitespaceElement ) {
	  				trimWhitespace( item.f, leadingNewLine, trailingNewLine );
	  			}

	  			if ( !preserveWhitespaceInsideFragment ) {
	  				previousItem = items[ i - 1 ];
	  				nextItem = items[ i + 1 ];

	  				// if the previous item was a text item with trailing whitespace,
	  				// remove leading whitespace inside the fragment
	  				if ( !previousItem || ( typeof previousItem === 'string' && trailingWhitespace.test( previousItem ) ) ) {
	  					removeLeadingWhitespaceInsideFragment = true;
	  				}

	  				// and vice versa
	  				if ( !nextItem || ( typeof nextItem === 'string' && leadingWhitespace$1.test( nextItem ) ) ) {
	  					removeTrailingWhitespaceInsideFragment = true;
	  				}
	  			}

	  			cleanup( item.f, stripComments, preserveWhitespaceInsideFragment, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );

	  			// clean up name templates (events, decorators, etc)
	  			if ( isArray( item.f.n ) ) {
	  				cleanup( item.f.n, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespace );
	  			}

	  			// clean up arg templates (events, decorators, etc)
	  			if ( isArray( item.f.d ) ) {
	  				cleanup( item.f.d, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespace );
	  			}
	  		}

	  		// Split if-else blocks into two (an if, and an unless)
	  		if ( item.l ) {
	  			cleanup( item.l, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );

	  			item.l.forEach( function ( s ) { return s.l = 1; } );
	  			item.l.unshift( i + 1, 0 );
	  			items.splice.apply( items, item.l );
	  			delete item.l; // TODO would be nice if there was a way around this
	  		}

	  		// Clean up element attributes
	  		if ( item.a ) {
	  			for ( key in item.a ) {
	  				if ( item.a.hasOwnProperty( key ) && typeof item.a[ key ] !== 'string' ) {
	  					cleanup( item.a[ key ], stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );
	  				}
	  			}
	  		}
	  		// Clean up conditional attributes
	  		if ( item.m ) {
	  			cleanup( item.m, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );
	  			if ( item.m.length < 1 ) delete item.m;
	  		}
	  	}

	  	// final pass - fuse text nodes together
	  	i = items.length;
	  	while ( i-- ) {
	  		if ( typeof items[i] === 'string' ) {
	  			if ( typeof items[i+1] === 'string' ) {
	  				items[i] = items[i] + items[i+1];
	  				items.splice( i + 1, 1 );
	  			}

	  			if ( !preserveWhitespace ) {
	  				items[i] = items[i].replace( contiguousWhitespace, ' ' );
	  			}

	  			if ( items[i] === '' ) {
	  				items.splice( i, 1 );
	  			}
	  		}
	  	}
	  }

	  var closingTagPattern = /^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/;

	  function readClosingTag ( parser ) {
	  	var start, tag;

	  	start = parser.pos;

	  	// are we looking at a closing tag?
	  	if ( !parser.matchString( '</' ) ) {
	  		return null;
	  	}

	  	if ( tag = parser.matchPattern( closingTagPattern ) ) {
	  		if ( parser.inside && tag !== parser.inside ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return {
	  			t: CLOSING_TAG,
	  			e: tag
	  		};
	  	}

	  	// We have an illegal closing tag, report it
	  	parser.pos -= 2;
	  	parser.error( 'Illegal closing tag' );
	  }

	  var tagNamePattern = /^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/;
	  var validTagNameFollower = /^[\s\n\/>]/;
	  var exclude = { exclude: true };
	  var disallowedContents;
	  // based on http://developers.whatwg.org/syntax.html#syntax-tag-omission
	  disallowedContents = {
	  	li: [ 'li' ],
	  	dt: [ 'dt', 'dd' ],
	  	dd: [ 'dt', 'dd' ],
	  	p: 'address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul'.split( ' ' ),
	  	rt: [ 'rt', 'rp' ],
	  	rp: [ 'rt', 'rp' ],
	  	optgroup: [ 'optgroup' ],
	  	option: [ 'option', 'optgroup' ],
	  	thead: [ 'tbody', 'tfoot' ],
	  	tbody: [ 'tbody', 'tfoot' ],
	  	tfoot: [ 'tbody' ],
	  	tr: [ 'tr', 'tbody' ],
	  	td: [ 'td', 'th', 'tr' ],
	  	th: [ 'td', 'th', 'tr' ]
	  };

	  function readElement ( parser ) {
	  	var start,
	  		element,
	  		attribute,
	  		selfClosing,
	  		children,
	  		partials,
	  		hasPartials,
	  		child,
	  		closed,
	  		pos,
	  		remaining,
	  		closingTag;

	  	start = parser.pos;

	  	if ( parser.inside || parser.inAttribute || parser.textOnlyMode ) {
	  		return null;
	  	}

	  	if ( !parser.matchString( '<' ) ) {
	  		return null;
	  	}

	  	// if this is a closing tag, abort straight away
	  	if ( parser.nextChar() === '/' ) {
	  		return null;
	  	}

	  	element = {};
	  	if ( parser.includeLinePositions ) {
	  		element.p = parser.getLinePos( start );
	  	}

	  	if ( parser.matchString( '!' ) ) {
	  		element.t = DOCTYPE;
	  		if ( !parser.matchPattern( /^doctype/i ) ) {
	  			parser.error( 'Expected DOCTYPE declaration' );
	  		}

	  		element.a = parser.matchPattern( /^(.+?)>/ );
	  		return element;
	  	}

	  	element.t = ELEMENT;

	  	// element name
	  	element.e = parser.matchPattern( tagNamePattern );
	  	if ( !element.e ) {
	  		return null;
	  	}

	  	// next character must be whitespace, closing solidus or '>'
	  	if ( !validTagNameFollower.test( parser.nextChar() ) ) {
	  		parser.error( 'Illegal tag name' );
	  	}

	  	parser.allowWhitespace();

	  	parser.inTag = true;

	  	// directives and attributes
	  	while ( attribute = readMustache( parser ) ) {
	  		if ( attribute !== false ) {
	  			if ( !element.m ) element.m = [];
	  			element.m.push( attribute );
	  		}

	  		parser.allowWhitespace();
	  	}

	  	parser.inTag = false;

	  	// allow whitespace before closing solidus
	  	parser.allowWhitespace();

	  	// self-closing solidus?
	  	if ( parser.matchString( '/' ) ) {
	  		selfClosing = true;
	  	}

	  	// closing angle bracket
	  	if ( !parser.matchString( '>' ) ) {
	  		return null;
	  	}

	  	var lowerCaseName = element.e.toLowerCase();
	  	var preserveWhitespace = parser.preserveWhitespace;

	  	if ( !selfClosing && !voidElementNames.test( element.e ) ) {
	  		parser.elementStack.push( lowerCaseName );

	  		// Special case - if we open a script element, further tags should
	  		// be ignored unless they're a closing script element
	  		if ( lowerCaseName === 'script' || lowerCaseName === 'style' || lowerCaseName === 'textarea' ) {
	  			parser.inside = lowerCaseName;
	  		}

	  		children = [];
	  		partials = create( null );

	  		do {
	  			pos = parser.pos;
	  			remaining = parser.remaining();

	  			if ( !remaining ) {
	  				parser.error( ("Missing end " + (parser.elementStack.length > 1 ? 'tags' : 'tag') + " (" + (parser.elementStack.reverse().map( function ( x ) { return ("</" + x + ">"); } ).join( '' )) + ")") );
	  			}

	  			// if for example we're in an <li> element, and we see another
	  			// <li> tag, close the first so they become siblings
	  			if ( !canContain( lowerCaseName, remaining ) ) {
	  				closed = true;
	  			}

	  			// closing tag
	  			else if ( closingTag = readClosingTag( parser ) ) {
	  				closed = true;

	  				var closingTagName = closingTag.e.toLowerCase();

	  				// if this *isn't* the closing tag for the current element...
	  				if ( closingTagName !== lowerCaseName ) {
	  					// rewind parser
	  					parser.pos = pos;

	  					// if it doesn't close a parent tag, error
	  					if ( !~parser.elementStack.indexOf( closingTagName ) ) {
	  						var errorMessage = 'Unexpected closing tag';

	  						// add additional help for void elements, since component names
	  						// might clash with them
	  						if ( voidElementNames.test( closingTagName ) ) {
	  							errorMessage += " (<" + closingTagName + "> is a void element - it cannot contain children)";
	  						}

	  						parser.error( errorMessage );
	  					}
	  				}
	  			}

	  			// implicit close by closing section tag. TODO clean this up
	  			else if ( child = readClosing( parser, { open: parser.standardDelimiters[0], close: parser.standardDelimiters[1] } ) ) {
	  				closed = true;
	  				parser.pos = pos;
	  			}

	  			else {
	  				if ( child = parser.read( PARTIAL_READERS ) ) {
	  					if ( partials[ child.n ] ) {
	  						parser.pos = pos;
	  						parser.error( 'Duplicate partial definition' );
	  					}

	  					cleanup( child.f, parser.stripComments, preserveWhitespace, !preserveWhitespace, !preserveWhitespace );

	  					partials[ child.n ] = child.f;
	  					hasPartials = true;
	  				}

	  				else {
	  					if ( child = parser.read( READERS ) ) {
	  						children.push( child );
	  					} else {
	  						closed = true;
	  					}
	  				}
	  			}
	  		} while ( !closed );

	  		if ( children.length ) {
	  			element.f = children;
	  		}

	  		if ( hasPartials ) {
	  			element.p = partials;
	  		}

	  		parser.elementStack.pop();
	  	}

	  	parser.inside = null;

	  	if ( parser.sanitizeElements && parser.sanitizeElements.indexOf( lowerCaseName ) !== -1 ) {
	  		return exclude;
	  	}

	  	return element;
	  }

	  function canContain ( name, remaining ) {
	  	var match, disallowed;

	  	match = /^<([a-zA-Z][a-zA-Z0-9]*)/.exec( remaining );
	  	disallowed = disallowedContents[ name ];

	  	if ( !match || !disallowed ) {
	  		return true;
	  	}

	  	return !~disallowed.indexOf( match[1].toLowerCase() );
	  }

	  function readText ( parser ) {
	  	var index, remaining, disallowed, barrier;

	  	remaining = parser.remaining();

	  	if ( parser.textOnlyMode ) {
	  		disallowed = parser.tags.map( function ( t ) { return t.open; } );
	  		disallowed = disallowed.concat( parser.tags.map( function ( t ) { return '\\' + t.open; } ) );

	  		index = getLowestIndex( remaining, disallowed );
	  	} else {
	  		barrier = parser.inside ? '</' + parser.inside : '<';

	  		if ( parser.inside && !parser.interpolate[ parser.inside ] ) {
	  			index = remaining.indexOf( barrier );
	  		} else {
	  			disallowed = parser.tags.map( function ( t ) { return t.open; } );
	  			disallowed = disallowed.concat( parser.tags.map( function ( t ) { return '\\' + t.open; } ) );

	  			// http://developers.whatwg.org/syntax.html#syntax-attributes
	  			if ( parser.inAttribute === true ) {
	  				// we're inside an unquoted attribute value
	  				disallowed.push( ("\""), ("'"), ("="), ("<"), (">"), '`' );
	  			} else if ( parser.inAttribute ) {
	  				// quoted attribute value
	  				disallowed.push( parser.inAttribute );
	  			} else {
	  				disallowed.push( barrier );
	  			}

	  			index = getLowestIndex( remaining, disallowed );
	  		}
	  	}

	  	if ( !index ) {
	  		return null;
	  	}

	  	if ( index === -1 ) {
	  		index = remaining.length;
	  	}

	  	parser.pos += index;

	  	if ( ( parser.inside && parser.inside !== 'textarea' ) || parser.textOnlyMode ) {
	  		return remaining.substr( 0, index );
	  	} else {
	  		return decodeCharacterReferences( remaining.substr( 0, index ) );
	  	}
	  }

	  var startPattern = /^<!--\s*/;
	  var namePattern$1 = /s*>\s*([a-zA-Z_$][-a-zA-Z_$0-9]*)\s*/;
	  var finishPattern = /\s*-->/;

	  function readPartialDefinitionComment ( parser ) {
	  	var start = parser.pos;
	  	var open = parser.standardDelimiters[0];
	  	var close = parser.standardDelimiters[1];

	  	if ( !parser.matchPattern( startPattern ) || !parser.matchString( open ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	var name = parser.matchPattern( namePattern$1 );

	  	warnOnceIfDebug( ("Inline partial comments are deprecated.\nUse this...\n  {{#partial " + name + "}} ... {{/partial}}\n\n...instead of this:\n  <!-- {{>" + name + "}} --> ... <!-- {{/" + name + "}} -->'") );

	  	// make sure the rest of the comment is in the correct place
	  	if ( !parser.matchString( close ) || !parser.matchPattern( finishPattern ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	var content = [];
	  	var closed;

	  	var endPattern = new RegExp('^<!--\\s*' + escapeRegExp( open ) + '\\s*\\/\\s*' + name + '\\s*' + escapeRegExp( close ) + '\\s*-->');

	  	do {
	  		if ( parser.matchPattern( endPattern ) ) {
	  			closed = true;
	  		}

	  		else {
	  			var child = parser.read( READERS );
	  			if ( !child ) {
	  				parser.error( ("expected closing comment ('<!-- " + open + "/" + name + "" + close + " -->')") );
	  			}

	  			content.push( child );
	  		}
	  	} while ( !closed );

	  	return {
	  		t: INLINE_PARTIAL,
	  		f: content,
	  		n: name
	  	};
	  }

	  var partialDefinitionSectionPattern = /^\s*#\s*partial\s+/;

	  function readPartialDefinitionSection ( parser ) {
	  	var start, name, content, child, closed;

	  	start = parser.pos;

	  	var delimiters = parser.standardDelimiters;

	  	if ( !parser.matchString( delimiters[0] ) ) {
	  		return null;
	  	}

	  	if ( !parser.matchPattern( partialDefinitionSectionPattern ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	name = parser.matchPattern( /^[a-zA-Z_$][a-zA-Z_$0-9\-\/]*/ );

	  	if ( !name ) {
	  		parser.error( 'expected legal partial name' );
	  	}

	  	parser.allowWhitespace();
	  	if ( !parser.matchString( delimiters[1] ) ) {
	  		parser.error( ("Expected closing delimiter '" + (delimiters[1]) + "'") );
	  	}

	  	content = [];

	  	do {
	  		// TODO clean this up
	  		if ( child = readClosing( parser, { open: parser.standardDelimiters[0], close: parser.standardDelimiters[1] }) ) {
	  			if ( !child.r === 'partial' ) {
	  				parser.error( ("Expected " + (delimiters[0]) + "/partial" + (delimiters[1])) );
	  			}

	  			closed = true;
	  		}

	  		else {
	  			child = parser.read( READERS );

	  			if ( !child ) {
	  				parser.error( ("Expected " + (delimiters[0]) + "/partial" + (delimiters[1])) );
	  			}

	  			content.push( child );
	  		}
	  	} while ( !closed );

	  	return {
	  		t: INLINE_PARTIAL,
	  		n: name,
	  		f: content
	  	};
	  }

	  function readTemplate ( parser ) {
	  	var fragment = [];
	  	var partials = create( null );
	  	var hasPartials = false;

	  	var preserveWhitespace = parser.preserveWhitespace;

	  	while ( parser.pos < parser.str.length ) {
	  		var pos = parser.pos, item, partial;

	  		if ( partial = parser.read( PARTIAL_READERS ) ) {
	  			if ( partials[ partial.n ] ) {
	  				parser.pos = pos;
	  				parser.error( 'Duplicated partial definition' );
	  			}

	  			cleanup( partial.f, parser.stripComments, preserveWhitespace, !preserveWhitespace, !preserveWhitespace );

	  			partials[ partial.n ] = partial.f;
	  			hasPartials = true;
	  		} else if ( item = parser.read( READERS ) ) {
	  			fragment.push( item );
	  		} else  {
	  			parser.error( 'Unexpected template content' );
	  		}
	  	}

	  	var result = {
	  		v: TEMPLATE_VERSION,
	  		t: fragment
	  	};

	  	if ( hasPartials ) {
	  		result.p = partials;
	  	}

	  	return result;
	  }

	  function insertExpressions ( obj, expr ) {

	  	Object.keys( obj ).forEach( function ( key ) {
	  		if  ( isExpression( key, obj ) ) return addTo( obj, expr );

	  		var ref = obj[ key ];
	  		if ( hasChildren( ref ) ) insertExpressions( ref, expr );
	   	});
	  }

	  function isExpression( key, obj ) {
	  	return key === 's' && isArray( obj.r );
	  }

	  function addTo( obj, expr ) {
	  	var s = obj.s, r = obj.r;
	  	if ( !expr[ s ] ) expr[ s ] = fromExpression( s, r.length );
	  }

	  function hasChildren( ref ) {
	  	return isArray( ref ) || isObject( ref );
	  }

	  // See https://github.com/ractivejs/template-spec for information
	  // about the Ractive template specification

	  var STANDARD_READERS = [ readPartial, readUnescaped, readSection, readYielder, readInterpolator, readComment ];
	  var TRIPLE_READERS = [ readTriple ];
	  var STATIC_READERS = [ readUnescaped, readSection, readInterpolator ]; // TODO does it make sense to have a static section?

	  var StandardParser;

	  function parse ( template, options ) {
	  	return new StandardParser( template, options || {} ).result;
	  }

	  parse.computedStrings = function( computed ) {
	  	if ( !computed ) return [];

	  	Object.keys( computed ).forEach( function ( key ) {
	  		var value = computed[ key ];
	  		if ( typeof value === 'string' ) {
	  			computed[ key ] = fromComputationString( value );
	  		}
	  	});
	  };


	  var READERS = [ readMustache, readHtmlComment, readElement, readText ];
	  var PARTIAL_READERS = [ readPartialDefinitionComment, readPartialDefinitionSection ];

	  StandardParser = Parser$1.extend({
	  	init: function ( str, options ) {
	  		var tripleDelimiters = options.tripleDelimiters || [ '{{{', '}}}' ],
	  			staticDelimiters = options.staticDelimiters || [ '[[', ']]' ],
	  			staticTripleDelimiters = options.staticTripleDelimiters || [ '[[[', ']]]' ];

	  		this.standardDelimiters = options.delimiters || [ '{{', '}}' ];

	  		this.tags = [
	  			{ isStatic: false, isTriple: false, open: this.standardDelimiters[0], close: this.standardDelimiters[1], readers: STANDARD_READERS },
	  			{ isStatic: false, isTriple: true,  open: tripleDelimiters[0],        close: tripleDelimiters[1],        readers: TRIPLE_READERS },
	  			{ isStatic: true,  isTriple: false, open: staticDelimiters[0],        close: staticDelimiters[1],        readers: STATIC_READERS },
	  			{ isStatic: true,  isTriple: true,  open: staticTripleDelimiters[0],  close: staticTripleDelimiters[1],  readers: TRIPLE_READERS }
	  		];

	  		this.contextLines = options.contextLines || 0;

	  		this.sortMustacheTags();

	  		this.sectionDepth = 0;
	  		this.elementStack = [];

	  		this.interpolate = {
	  			script: !options.interpolate || options.interpolate.script !== false,
	  			style: !options.interpolate || options.interpolate.style !== false,
	  			textarea: true
	  		};

	  		if ( options.sanitize === true ) {
	  			options.sanitize = {
	  				// blacklist from https://code.google.com/p/google-caja/source/browse/trunk/src/com/google/caja/lang/html/html4-elements-whitelist.json
	  				elements: 'applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title'.split( ' ' ),
	  				eventAttributes: true
	  			};
	  		}

	  		this.stripComments = options.stripComments !== false;
	  		this.preserveWhitespace = options.preserveWhitespace;
	  		this.sanitizeElements = options.sanitize && options.sanitize.elements;
	  		this.sanitizeEventAttributes = options.sanitize && options.sanitize.eventAttributes;
	  		this.includeLinePositions = options.includeLinePositions;
	  		this.textOnlyMode = options.textOnlyMode;
	  		this.csp = options.csp;
	  	},

	  	postProcess: function ( result ) {
	  		// special case - empty string
	  		if ( !result.length ) {
	  			return { t: [], v: TEMPLATE_VERSION };
	  		}

	  		if ( this.sectionDepth > 0 ) {
	  			this.error( 'A section was left open' );
	  		}

	  		cleanup( result[0].t, this.stripComments, this.preserveWhitespace, !this.preserveWhitespace, !this.preserveWhitespace );

	  		if ( this.csp !== false ) {
	  			var expr = {};
	  			insertExpressions( result[0].t, expr );
	  			if ( Object.keys( expr ).length ) result[0].e = expr;
	  		}

	  		return result[0];
	  	},

	  	converters: [
	  		readTemplate
	  	],

	  	sortMustacheTags: function () {
	  		// Sort in order of descending opening delimiter length (longer first),
	  		// to protect against opening delimiters being substrings of each other
	  		this.tags.sort( function ( a, b ) {
	  			return b.open.length - a.open.length;
	  		});
	  	}
	  });

	  var parseOptions = [
	  	'delimiters',
	  	'tripleDelimiters',
	  	'staticDelimiters',
	  	'staticTripleDelimiters',
	  	'csp',
	  	'interpolate',
	  	'preserveWhitespace',
	  	'sanitize',
	  	'stripComments',
	  	'contextLines'
	  ];

	  var TEMPLATE_INSTRUCTIONS = "Either preparse or use a ractive runtime source that includes the parser. ";

	  var COMPUTATION_INSTRUCTIONS = "Either use:\n\n\tRactive.parse.computedStrings( component.computed )\n\nat build time to pre-convert the strings to functions, or use functions instead of strings in computed properties.";


	  function throwNoParse ( method, error, instructions ) {
	  	if ( !method ) {
	  		fatal( ("Missing Ractive.parse - cannot parse " + error + ". " + instructions) );
	  	}
	  }

	  function createFunction ( body, length ) {
	  	throwNoParse( fromExpression, 'new expression function', TEMPLATE_INSTRUCTIONS );
	  	return fromExpression( body, length );
	  }

	  function createFunctionFromString ( str, bindTo ) {
	  	throwNoParse( fromComputationString, 'compution string "${str}"', COMPUTATION_INSTRUCTIONS );
	  	return fromComputationString( str, bindTo );
	  }

	  var parser = {

	  	fromId: function ( id, options ) {
	  		if ( !doc ) {
	  			if ( options && options.noThrow ) { return; }
	  			throw new Error( ("Cannot retrieve template #" + id + " as Ractive is not running in a browser.") );
	  		}

	  		if ( id ) id = id.replace( /^#/, '' );

	  		var template;

	  		if ( !( template = doc.getElementById( id ) )) {
	  			if ( options && options.noThrow ) { return; }
	  			throw new Error( ("Could not find template element with id #" + id) );
	  		}

	  		if ( template.tagName.toUpperCase() !== 'SCRIPT' ) {
	  			if ( options && options.noThrow ) { return; }
	  			throw new Error( ("Template element with id #" + id + ", must be a <script> element") );
	  		}

	  		return ( 'textContent' in template ? template.textContent : template.innerHTML );

	  	},

	  	isParsed: function ( template) {
	  		return !( typeof template === 'string' );
	  	},

	  	getParseOptions: function ( ractive ) {
	  		// Could be Ractive or a Component
	  		if ( ractive.defaults ) { ractive = ractive.defaults; }

	  		return parseOptions.reduce( function ( val, key ) {
	  			val[ key ] = ractive[ key ];
	  			return val;
	  		}, {});
	  	},

	  	parse: function ( template, options ) {
	  		throwNoParse( parse, 'template', TEMPLATE_INSTRUCTIONS );
	  		var parsed = parse( template, options );
	  		addFunctions( parsed );
	  		return parsed;
	  	},

	  	parseFor: function( template, ractive ) {
	  		return this.parse( template, this.getParseOptions( ractive ) );
	  	}
	  };

	  var templateConfigurator = {
	  	name: 'template',

	  	extend: function ( Parent, proto, options ) {
	  		// only assign if exists
	  		if ( 'template' in options ) {
	  			var template = options.template;

	  			if ( typeof template === 'function' ) {
	  				proto.template = template;
	  			} else {
	  				proto.template = parseTemplate( template, proto );
	  			}
	  		}
	  	},

	  	init: function ( Parent, ractive, options ) {
	  		// TODO because of prototypal inheritance, we might just be able to use
	  		// ractive.template, and not bother passing through the Parent object.
	  		// At present that breaks the test mocks' expectations
	  		var template = 'template' in options ? options.template : Parent.prototype.template;
	  		template = template || { v: TEMPLATE_VERSION, t: [] };

	  		if ( typeof template === 'function' ) {
	  			var fn = template;
	  			template = getDynamicTemplate( ractive, fn );

	  			ractive._config.template = {
	  				fn: fn,
	  				result: template
	  			};
	  		}

	  		template = parseTemplate( template, ractive );

	  		// TODO the naming of this is confusing - ractive.template refers to [...],
	  		// but Component.prototype.template refers to {v:1,t:[],p:[]}...
	  		// it's unnecessary, because the developer never needs to access
	  		// ractive.template
	  		ractive.template = template.t;

	  		if ( template.p ) {
	  			extendPartials( ractive.partials, template.p );
	  		}
	  	},

	  	reset: function ( ractive ) {
	  		var result = resetValue( ractive );

	  		if ( result ) {
	  			var parsed = parseTemplate( result, ractive );

	  			ractive.template = parsed.t;
	  			extendPartials( ractive.partials, parsed.p, true );

	  			return true;
	  		}
	  	}
	  };

	  function resetValue ( ractive ) {
	  	var initial = ractive._config.template;

	  	// If this isn't a dynamic template, there's nothing to do
	  	if ( !initial || !initial.fn ) {
	  		return;
	  	}

	  	var result = getDynamicTemplate( ractive, initial.fn );

	  	// TODO deep equality check to prevent unnecessary re-rendering
	  	// in the case of already-parsed templates
	  	if ( result !== initial.result ) {
	  		initial.result = result;
	  		return result;
	  	}
	  }

	  function getDynamicTemplate ( ractive, fn ) {
	  	return fn.call( ractive, {
	  		fromId: parser.fromId,
	  		isParsed: parser.isParsed,
	  		parse: function ( template, options ) {
	  			if ( options === void 0 ) options = parser.getParseOptions( ractive );

	  			return parser.parse( template, options );
	  		}
	  	});
	  }

	  function parseTemplate ( template, ractive ) {
	  	if ( typeof template === 'string' ) {
	  		// parse will validate and add expression functions
	  		template = parseAsString( template, ractive );
	  	}
	  	else {
	  		// need to validate and add exp for already parsed template
	  		validate$1( template );
	  		addFunctions( template );
	  	}

	  	return template;
	  }

	  function parseAsString ( template, ractive ) {
	  	// ID of an element containing the template?
	  	if ( template[0] === '#' ) {
	  		template = parser.fromId( template );
	  	}

	  	return parser.parseFor( template, ractive );
	  }

	  function validate$1( template ) {

	  	// Check that the template even exists
	  	if ( template == undefined ) {
	  		throw new Error( ("The template cannot be " + template + ".") );
	  	}

	  	// Check the parsed template has a version at all
	  	else if ( typeof template.v !== 'number' ) {
	  		throw new Error( 'The template parser was passed a non-string template, but the template doesn\'t have a version.  Make sure you\'re passing in the template you think you are.' );
	  	}

	  	// Check we're using the correct version
	  	else if ( template.v !== TEMPLATE_VERSION ) {
	  		throw new Error( ("Mismatched template version (expected " + TEMPLATE_VERSION + ", got " + (template.v) + ") Please ensure you are using the latest version of Ractive.js in your build process as well as in your app") );
	  	}
	  }

	  function extendPartials ( existingPartials, newPartials, overwrite ) {
	  	if ( !newPartials ) return;

	  	// TODO there's an ambiguity here - we need to overwrite in the `reset()`
	  	// case, but not initially...

	  	for ( var key in newPartials ) {
	  		if ( overwrite || !existingPartials.hasOwnProperty( key ) ) {
	  			existingPartials[ key ] = newPartials[ key ];
	  		}
	  	}
	  }

	  var registryNames = [
	  	'adaptors',
	  	'components',
	  	'computed',
	  	'decorators',
	  	'easing',
	  	'events',
	  	'interpolators',
	  	'partials',
	  	'transitions'
	  ];

	  var Registry = function Registry ( name, useDefaults ) {
	  	this.name = name;
	  	this.useDefaults = useDefaults;
	  };

	  Registry.prototype.extend = function extend ( Parent, proto, options ) {
	  	this.configure(
	  		this.useDefaults ? Parent.defaults : Parent,
	  		this.useDefaults ? proto : proto.constructor,
	  		options );
	  };

	  Registry.prototype.init = function init () {
	  	// noop
	  };

	  Registry.prototype.configure = function configure ( Parent, target, options ) {
	  	var name = this.name;
	  	var option = options[ name ];

	  	var registry = create( Parent[name] );

	  	for ( var key in option ) {
	  		registry[ key ] = option[ key ];
	  	}

	  	target[ name ] = registry;
	  };

	  Registry.prototype.reset = function reset ( ractive ) {
	  	var registry = ractive[ this.name ];
	  	var changed = false;

	  	Object.keys( registry ).forEach( function ( key ) {
	  		var item = registry[ key ];
	  			
	  		if ( item._fn ) {
	  			if ( item._fn.isOwner ) {
	  				registry[key] = item._fn;
	  			} else {
	  				delete registry[key];
	  			}
	  			changed = true;
	  		}
	  	});

	  	return changed;
	  };

	  var registries = registryNames.map( function ( name ) { return new Registry( name, name === 'computed' ); } );

	  function wrap ( parent, name, method ) {
	  	if ( !/_super/.test( method ) ) return method;

	  	function wrapper () {
	  		var superMethod = getSuperMethod( wrapper._parent, name );
	  		var hasSuper = '_super' in this;
	  		var oldSuper = this._super;

	  		this._super = superMethod;

	  		var result = method.apply( this, arguments );

	  		if ( hasSuper ) {
	  			this._super = oldSuper;
	  		} else {
	  			delete this._super;
	  		}

	  		return result;
	  	}

	  	wrapper._parent = parent;
	  	wrapper._method = method;

	  	return wrapper;
	  }

	  function getSuperMethod ( parent, name ) {
	  	if ( name in parent ) {
	  		var value = parent[ name ];

	  		return typeof value === 'function' ?
	  			value :
	  			function () { return value; };
	  	}

	  	return noop;
	  }

	  function getMessage( deprecated, correct, isError ) {
	  	return "options." + deprecated + " has been deprecated in favour of options." + correct + "."
	  		+ ( isError ? (" You cannot specify both options, please use options." + correct + ".") : '' );
	  }

	  function deprecateOption ( options, deprecatedOption, correct ) {
	  	if ( deprecatedOption in options ) {
	  		if( !( correct in options ) ) {
	  			warnIfDebug( getMessage( deprecatedOption, correct ) );
	  			options[ correct ] = options[ deprecatedOption ];
	  		} else {
	  			throw new Error( getMessage( deprecatedOption, correct, true ) );
	  		}
	  	}
	  }

	  function deprecate ( options ) {
	  	deprecateOption( options, 'beforeInit', 'onconstruct' );
	  	deprecateOption( options, 'init', 'onrender' );
	  	deprecateOption( options, 'complete', 'oncomplete' );
	  	deprecateOption( options, 'eventDefinitions', 'events' );

	  	// Using extend with Component instead of options,
	  	// like Human.extend( Spider ) means adaptors as a registry
	  	// gets copied to options. So we have to check if actually an array
	  	if ( isArray( options.adaptors ) ) {
	  		deprecateOption( options, 'adaptors', 'adapt' );
	  	}
	  }

	  var custom = {
	  	adapt: adaptConfigurator,
	  	css: cssConfigurator,
	  	data: dataConfigurator,
	  	template: templateConfigurator
	  };

	  var defaultKeys = Object.keys( defaults );

	  var isStandardKey = makeObj( defaultKeys.filter( function ( key ) { return !custom[ key ]; } ) );

	  // blacklisted keys that we don't double extend
	  var isBlacklisted = makeObj( defaultKeys.concat( registries.map( function ( r ) { return r.name; } ) ) );

	  var order = [].concat(
	  	defaultKeys.filter( function ( key ) { return !registries[ key ] && !custom[ key ]; } ),
	  	registries,
	  	//custom.data,
	  	custom.template,
	  	custom.css
	  );

	  var config = {
	  	extend: function ( Parent, proto, options ) { return configure( 'extend', Parent, proto, options ); },

	  	init: function ( Parent, ractive, options ) { return configure( 'init', Parent, ractive, options ); },

	  	reset: function ( ractive ) {
	  		return order.filter( function ( c ) {
	  			return c.reset && c.reset( ractive );
	  		}).map( function ( c ) { return c.name; } );
	  	},

	  	// this defines the order. TODO this isn't used anywhere in the codebase,
	  	// only in the test suite - should get rid of it
	  	order: order
	  };

	  function configure ( method, Parent, target, options ) {
	  	deprecate( options );

	  	for ( var key in options ) {
	  		if ( isStandardKey.hasOwnProperty( key ) ) {
	  			var value = options[ key ];

	  			// warn the developer if they passed a function and ignore its value

	  			// NOTE: we allow some functions on "el" because we duck type element lists
	  			// and some libraries or ef'ed-up virtual browsers (phantomJS) return a
	  			// function object as the result of querySelector methods
	  			if ( key !== 'el' && typeof value === 'function' ) {
	  				warnIfDebug( ("" + key + " is a Ractive option that does not expect a function and will be ignored"),
	  					method === 'init' ? target : null );
	  			}
	  			else {
	  				target[ key ] = value;
	  			}
	  		}
	  	}

	  	// disallow combination of `append` and `enhance`
	  	if ( options.append && options.enhance ) {
	  		throw new Error( 'Cannot use append and enhance at the same time' );
	  	}

	  	registries.forEach( function ( registry ) {
	  		registry[ method ]( Parent, target, options );
	  	});

	  	adaptConfigurator[ method ]( Parent, target, options );
	  	templateConfigurator[ method ]( Parent, target, options );
	  	cssConfigurator[ method ]( Parent, target, options );

	  	extendOtherMethods( Parent.prototype, target, options );
	  }

	  function extendOtherMethods ( parent, target, options ) {
	  	for ( var key in options ) {
	  		if ( !isBlacklisted[ key ] && options.hasOwnProperty( key ) ) {
	  			var member = options[ key ];

	  			// if this is a method that overwrites a method, wrap it:
	  			if ( typeof member === 'function' ) {
	  				member = wrap( parent, key, member );
	  			}

	  			target[ key ] = member;
	  		}
	  	}
	  }

	  function makeObj ( array ) {
	  	var obj = {};
	  	array.forEach( function ( x ) { return obj[x] = true; } );
	  	return obj;
	  }

	  var shouldRerender = [ 'template', 'partials', 'components', 'decorators', 'events' ];

	  var completeHook$1 = new Hook( 'complete' );
	  var resetHook = new Hook( 'reset' );
	  var renderHook$1 = new Hook( 'render' );
	  var unrenderHook = new Hook( 'unrender' );

	  function Ractive$reset ( data ) {
	  	data = data || {};

	  	if ( typeof data !== 'object' ) {
	  		throw new Error( 'The reset method takes either no arguments, or an object containing new data' );
	  	}

	  	// TEMP need to tidy this up
	  	data = dataConfigurator.init( this.constructor, this, { data: data });

	  	var promise = runloop.start( this, true );

	  	// If the root object is wrapped, try and use the wrapper's reset value
	  	var wrapper = this.viewmodel.wrapper;
	  	if ( wrapper && wrapper.reset ) {
	  		if ( wrapper.reset( data ) === false ) {
	  			// reset was rejected, we need to replace the object
	  			this.viewmodel.set( data );
	  		}
	  	} else {
	  		this.viewmodel.set( data );
	  	}

	  	// reset config items and track if need to rerender
	  	var changes = config.reset( this );
	  	var rerender;

	  	var i = changes.length;
	  	while ( i-- ) {
	  		if ( shouldRerender.indexOf( changes[i] ) > -1 ) {
	  			rerender = true;
	  			break;
	  		}
	  	}

	  	if ( rerender ) {
	  		unrenderHook.fire( this );
	  		this.fragment.resetTemplate( this.template );
	  		renderHook$1.fire( this );
	  		completeHook$1.fire( this );
	  	}

	  	runloop.end();

	  	resetHook.fire( this, data );

	  	return promise;
	  }

	  function collect( source, name, attr, dest ) {
	  	source.forEach( function ( item ) {
	  		// queue to rerender if the item is a partial and the current name matches
	  		if ( item.type === PARTIAL && ( item.refName ===  name || item.name === name ) ) {
	  			item.inAttribute = attr;
	  			dest.push( item );
	  			return; // go no further
	  		}

	  		// if it has a fragment, process its items
	  		if ( item.fragment ) {
	  			collect( item.fragment.iterations || item.fragment.items, name, attr, dest );
	  		}

	  		// or if it is itself a fragment, process its items
	  		else if ( isArray( item.items ) ) {
	  			collect( item.items, name, attr, dest );
	  		}

	  		// or if it is a component, step in and process its items
	  		else if ( item.type === COMPONENT && item.instance ) {
	  			// ...unless the partial is shadowed
	  			if ( item.instance.partials[ name ] ) return;
	  			collect( item.instance.fragment.items, name, attr, dest );
	  		}

	  		// if the item is an element, process its attributes too
	  		if ( item.type === ELEMENT ) {
	  			if ( isArray( item.attributes ) ) {
	  				collect( item.attributes, name, true, dest );
	  			}
	  		}
	  	});
	  }

	  function forceResetTemplate ( partial ) {
	  	partial.forceResetTemplate();
	  }

	  function resetPartial ( name, partial ) {
	  	var collection = [];
	  	collect( this.fragment.items, name, false, collection );

	  	var promise = runloop.start( this, true );

	  	this.partials[ name ] = partial;
	  	collection.forEach( forceResetTemplate );

	  	runloop.end();

	  	return promise;
	  }

	  var Item = function Item ( options ) {
	  	this.parentFragment = options.parentFragment;
	  	this.ractive = options.parentFragment.ractive;

	  	this.template = options.template;
	  	this.index = options.index;
	  	this.type = options.template.t;

	  	this.dirty = false;
	  };

	  Item.prototype.bubble = function bubble () {
	  	if ( !this.dirty ) {
	  		this.dirty = true;
	  		this.parentFragment.bubble();
	  	}
	  };

	  Item.prototype.destroyed = function destroyed () {
	  	if ( this.fragment ) this.fragment.destroyed();
	  };

	  Item.prototype.find = function find () {
	  	return null;
	  };

	  Item.prototype.findAll = function findAll () {
	  	// noop
	  };

	  Item.prototype.findComponent = function findComponent () {
	  	return null;
	  };

	  Item.prototype.findAllComponents = function findAllComponents () {
	  	// noop;
	  };

	  Item.prototype.findNextNode = function findNextNode () {
	  	return this.parentFragment.findNextNode( this );
	  };

	  Item.prototype.shuffled = function shuffled () {
	  	if ( this.fragment ) this.fragment.shuffled();
	  };

	  Item.prototype.valueOf = function valueOf () {
	  	return this.toString();
	  };

	  var ComputationChild = (function (Model) {
	  	function ComputationChild () {
	  		Model.apply(this, arguments);
	  	}

	  	ComputationChild.prototype = Object.create( Model && Model.prototype );
	  	ComputationChild.prototype.constructor = ComputationChild;

	  	ComputationChild.prototype.get = function get ( shouldCapture ) {
	  		if ( shouldCapture ) capture( this );

	  		var parentValue = this.parent.get();
	  		return parentValue ? parentValue[ this.key ] : undefined;
	  	};

	  	ComputationChild.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;

	  		this.links.forEach( marked );
	  		this.deps.forEach( handleChange );
	  		this.children.forEach( handleChange );
	  		this.clearUnresolveds(); // TODO is this necessary?
	  	};

	  	ComputationChild.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ComputationChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	return ComputationChild;
	  }(Model));

	  function createResolver ( proxy, ref, index ) {
	  	var resolver = proxy.fragment.resolve( ref, function ( model ) {
	  		removeFromArray( proxy.resolvers, resolver );
	  		proxy.models[ index ] = model;
	  		proxy.bubble();
	  	});

	  	proxy.resolvers.push( resolver );
	  }

	  var ExpressionProxy = (function (Model) {
	  	function ExpressionProxy ( fragment, template ) {
	  		var this$1 = this;

	  		Model.call( this, fragment.ractive.viewmodel, null );

	  		this.fragment = fragment;
	  		this.template = template;

	  		this.isReadonly = true;
	  		this.dirty = true;

	  		this.fn = getFunction( template.s, template.r.length );

	  		this.resolvers = [];
	  		this.models = this.template.r.map( function ( ref, index ) {
	  			var model = resolveReference( this$1.fragment, ref );

	  			if ( !model ) {
	  				createResolver( this$1, ref, index );
	  			}

	  			return model;
	  		});
	  		this.dependencies = [];

	  		this.shuffle = undefined;

	  		this.bubble();
	  	}

	  	ExpressionProxy.prototype = Object.create( Model && Model.prototype );
	  	ExpressionProxy.prototype.constructor = ExpressionProxy;

	  	ExpressionProxy.prototype.bubble = function bubble ( actuallyChanged ) {
	  		// refresh the keypath
	  		if ( actuallyChanged === void 0 ) actuallyChanged = true;

	  		if ( this.registered ) delete this.root.expressions[ this.keypath ];
	  		this.keypath = undefined;

	  		if ( actuallyChanged ) {
	  			this.dirty = true;
	  			this.handleChange();
	  		}
	  	};

	  	ExpressionProxy.prototype.get = function get ( shouldCapture ) {
	  		if ( shouldCapture ) capture( this );

	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			this.value = this.getValue();
	  			if ( this.wrapper ) this.newWrapperValue = this.value;
	  			this.adapt();
	  		}

	  		return shouldCapture && this.wrapper ? this.wrapperValue : this.value;
	  	};

	  	ExpressionProxy.prototype.getKeypath = function getKeypath () {
	  		var this$1 = this;

	  		if ( !this.template ) return '@undefined';
	  		if ( !this.keypath ) {
	  			this.keypath = '@' + this.template.s.replace( /_(\d+)/g, function ( match, i ) {
	  				if ( i >= this$1.models.length ) return match;

	  				var model = this$1.models[i];
	  				return model ? model.getKeypath() : '@undefined';
	  			});

	  			this.root.expressions[ this.keypath ] = this;
	  			this.registered = true;
	  		}

	  		return this.keypath;
	  	};

	  	ExpressionProxy.prototype.getValue = function getValue () {
	  		var this$1 = this;

	  		startCapturing();
	  		var result;

	  		try {
	  			var params = this.models.map( function ( m ) { return m ? m.get( true ) : undefined; } );
	  			result = this.fn.apply( this.fragment.ractive, params );
	  		} catch ( err ) {
	  			warnIfDebug( ("Failed to compute " + (this.getKeypath()) + ": " + (err.message || err)) );
	  		}

	  		var dependencies = stopCapturing();
	  		// remove missing deps
	  		this.dependencies.filter( function ( d ) { return !~dependencies.indexOf( d ); } ).forEach( function ( d ) {
	  			d.unregister( this$1 );
	  			removeFromArray( this$1.dependencies, d );
	  		});
	  		// register new deps
	  		dependencies.filter( function ( d ) { return !~this$1.dependencies.indexOf( d ); } ).forEach( function ( d ) {
	  			d.register( this$1 );
	  			this$1.dependencies.push( d );
	  		});

	  		return result;
	  	};

	  	ExpressionProxy.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;

	  		this.links.forEach( marked );
	  		this.deps.forEach( handleChange );
	  		this.children.forEach( handleChange );

	  		this.clearUnresolveds();
	  	};

	  	ExpressionProxy.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ComputationChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	ExpressionProxy.prototype.mark = function mark () {
	  		this.handleChange();
	  	};

	  	ExpressionProxy.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  		var idx = this.models.indexOf( previous );

	  		if ( ~idx ) {
	  			next = rebindMatch( this.template.r[idx], next, previous );
	  			if ( next !== previous ) {
	  				previous.unregister( this );
	  				this.models.splice( idx, 1, next );
	  				// TODO: set up a resolver if there is no next?
	  				if ( next ) next.addShuffleRegister( this, 'mark' );
	  			}
	  		}
	  		this.bubble( !safe );
	  	};

	  	ExpressionProxy.prototype.retrieve = function retrieve () {
	  		return this.get();
	  	};

	  	ExpressionProxy.prototype.teardown = function teardown () {
	  		var this$1 = this;

	  		this.unbind();
	  		this.fragment = undefined;
	  		if ( this.dependencies ) this.dependencies.forEach( function ( d ) { return d.unregister( this$1 ); } );
	  		Model.prototype.teardown.call(this);
	  	};

	  	ExpressionProxy.prototype.unregister = function unregister( dep ) {
	  		Model.prototype.unregister.call( this, dep );
	  		if ( !this.deps.length ) this.teardown();
	  	};

	  	ExpressionProxy.prototype.unbind = function unbind$1 () {
	  		this.resolvers.forEach( unbind );
	  	};

	  	return ExpressionProxy;
	  }(Model));

	  var ReferenceExpressionChild = (function (Model) {
	  	function ReferenceExpressionChild ( parent, key ) {
	  		Model.call ( this, parent, key );
	  	}

	  	ReferenceExpressionChild.prototype = Object.create( Model && Model.prototype );
	  	ReferenceExpressionChild.prototype.constructor = ReferenceExpressionChild;

	  	ReferenceExpressionChild.prototype.applyValue = function applyValue ( value ) {
	  		if ( isEqual( value, this.value ) ) return;

	  		var parent = this.parent, keys = [ this.key ];
	  		while ( parent ) {
	  			if ( parent.base ) {
	  				var target = parent.model.joinAll( keys );
	  				target.applyValue( value );
	  				break;
	  			}

	  			keys.unshift( parent.key );

	  			parent = parent.parent;
	  		}
	  	};

	  	ReferenceExpressionChild.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ReferenceExpressionChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	ReferenceExpressionChild.prototype.retrieve = function retrieve () {
	  		var parent = this.parent.get();
	  		return parent && this.key in parent ? parent[ this.key ] : undefined;
	  	};

	  	return ReferenceExpressionChild;
	  }(Model));

	  var ReferenceExpressionProxy = (function (Model) {
	  	function ReferenceExpressionProxy ( fragment, template ) {
	  		var this$1 = this;

	  		Model.call( this, null, null );
	  		this.dirty = true;
	  		this.root = fragment.ractive.viewmodel;
	  		this.template = template;

	  		this.resolvers = [];

	  		this.base = resolve$2( fragment, template );
	  		var baseResolver;

	  		if ( !this.base ) {
	  			baseResolver = fragment.resolve( template.r, function ( model ) {
	  				this$1.base = model;
	  				this$1.bubble();

	  				removeFromArray( this$1.resolvers, baseResolver );
	  			});

	  			this.resolvers.push( baseResolver );
	  		}

	  		var intermediary = this.intermediary = {
	  			handleChange: function () { return this$1.handleChange(); },
	  			rebinding: function ( next, previous ) {
	  				if ( previous === this$1.base ) {
	  					next = rebindMatch( template, next, previous );
	  					if ( next !== this$1.base ) {
	  						this$1.base.unregister( intermediary );
	  						this$1.base = next;
	  						// TODO: if there is no next, set up a resolver?
	  					}
	  				} else {
	  					var idx = this$1.members.indexOf( previous );
	  					if ( ~idx ) {
	  						// only direct references will rebind... expressions handle themselves
	  						next = rebindMatch( template.m[idx].n, next, previous );
	  						if ( next !== this$1.members[idx] ) {
	  							this$1.members.splice( idx, 1, next );
	  							// TODO: if there is no next, set up a resolver?
	  						}
	  					}
	  				}

	  				if ( next !== previous ) previous.unregister( intermediary );
	  				if ( next ) next.addShuffleTask( function () { return next.register( intermediary ); } );

	  				this$1.bubble();
	  			}
	  		};

	  		this.members = template.m.map( function ( template, i ) {
	  			if ( typeof template === 'string' ) {
	  				return { get: function () { return template; } };
	  			}

	  			var model;
	  			var resolver;

	  			if ( template.t === REFERENCE ) {
	  				model = resolveReference( fragment, template.n );

	  				if ( model ) {
	  					model.register( intermediary );
	  				} else {
	  					resolver = fragment.resolve( template.n, function ( model ) {
	  						this$1.members[i] = model;

	  						model.register( intermediary );
	  						this$1.handleChange();

	  						removeFromArray( this$1.resolvers, resolver );
	  					});

	  					this$1.resolvers.push( resolver );
	  				}

	  				return model;
	  			}

	  			model = new ExpressionProxy( fragment, template );
	  			model.register( intermediary );
	  			return model;
	  		});

	  		this.isUnresolved = true;
	  		this.bubble();
	  	}

	  	ReferenceExpressionProxy.prototype = Object.create( Model && Model.prototype );
	  	ReferenceExpressionProxy.prototype.constructor = ReferenceExpressionProxy;

	  	ReferenceExpressionProxy.prototype.bubble = function bubble () {
	  		if ( !this.base ) return;
	  		if ( !this.dirty ) this.handleChange();
	  	};

	  	ReferenceExpressionProxy.prototype.forceResolution = function forceResolution () {
	  		this.resolvers.forEach( function ( resolver ) { return resolver.forceResolution(); } );
	  		this.dirty = true;
	  		this.bubble();
	  	};

	  	ReferenceExpressionProxy.prototype.get = function get ( shouldCapture ) {
	  		var this$1 = this;

	  		if ( this.dirty ) {
	  			this.bubble();

	  			var i = this.members.length, resolved = true;
	  			while ( resolved && i-- ) {
	  				if ( !this$1.members[i] ) resolved = false;
	  			}

	  			if ( this.base && resolved ) {
	  				var keys = this.members.map( function ( m ) { return escapeKey( String( m.get() ) ); } );
	  				var model = this.base.joinAll( keys );

	  				if ( model !== this.model ) {
	  					if ( this.model ) {
	  						this.model.unregister( this );
	  						this.model.unregisterTwowayBinding( this );
	  					}

	  					this.model = model;
	  					this.parent = model.parent;
	  					this.model.register( this );
	  					this.model.registerTwowayBinding( this );

	  					if ( this.keypathModel ) this.keypathModel.handleChange();
	  				}
	  			}

	  			this.value = this.model ? this.model.get( shouldCapture ) : undefined;
	  			this.dirty = false;
	  			this.mark();
	  			return this.value;
	  		} else {
	  			return this.model ? this.model.get( shouldCapture ) : undefined;
	  		}
	  	};

	  	// indirect two-way bindings
	  	ReferenceExpressionProxy.prototype.getValue = function getValue () {
	  		var this$1 = this;

	  		this.value = this.model ? this.model.get() : undefined;

	  		var i = this.bindings.length;
	  		while ( i-- ) {
	  			var value = this$1.bindings[i].getValue();
	  			if ( value !== this$1.value ) return value;
	  		}

	  		// check one-way bindings
	  		var oneway = findBoundValue( this.deps );
	  		if ( oneway ) return oneway.value;

	  		return this.value;
	  	};

	  	ReferenceExpressionProxy.prototype.getKeypath = function getKeypath () {
	  		return this.model ? this.model.getKeypath() : '@undefined';
	  	};

	  	ReferenceExpressionProxy.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;
	  		this.mark();
	  	};

	  	ReferenceExpressionProxy.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ReferenceExpressionChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	ReferenceExpressionProxy.prototype.mark = function mark$1 () {
	  		if ( this.dirty ) {
	  			this.deps.forEach( handleChange );
	  		}

	  		this.links.forEach( marked );
	  		this.children.forEach( mark );
	  		this.clearUnresolveds();
	  	};

	  	ReferenceExpressionProxy.prototype.retrieve = function retrieve () {
	  		return this.value;
	  	};

	  	ReferenceExpressionProxy.prototype.rebinding = function rebinding () { }; // NOOP

	  	ReferenceExpressionProxy.prototype.set = function set ( value ) {
	  		if ( !this.model ) throw new Error( 'Unresolved reference expression. This should not happen!' );
	  		this.model.set( value );
	  	};

	  	ReferenceExpressionProxy.prototype.unbind = function unbind$1 () {
	  		this.resolvers.forEach( unbind );
	  		if ( this.model ) {
	  			this.model.unregister( this );
	  			this.model.unregisterTwowayBinding( this );
	  		}
	  	};

	  	return ReferenceExpressionProxy;
	  }(Model));

	  function resolve$2 ( fragment, template ) {
	  	if ( template.r ) {
	  		return resolveReference( fragment, template.r );
	  	}

	  	else if ( template.x ) {
	  		return new ExpressionProxy( fragment, template.x );
	  	}

	  	else if ( template.rx ) {
	  		return new ReferenceExpressionProxy( fragment, template.rx );
	  	}
	  }

	  function resolveAliases( section ) {
	  	if ( section.template.z ) {
	  		section.aliases = {};

	  		var refs = section.template.z;
	  		for ( var i = 0; i < refs.length; i++ ) {
	  			section.aliases[ refs[i].n ] = resolve$2( section.parentFragment, refs[i].x );
	  		}
	  	}
	  }

	  var Alias = (function (Item) {
	  	function Alias ( options ) {
	  		Item.call( this, options );

	  		this.fragment = null;
	  	}

	  	Alias.prototype = Object.create( Item && Item.prototype );
	  	Alias.prototype.constructor = Alias;

	  	Alias.prototype.bind = function bind () {
	  		resolveAliases( this );

	  		this.fragment = new Fragment({
	  			owner: this,
	  			template: this.template.f
	  		}).bind();
	  	};

	  	Alias.prototype.detach = function detach () {
	  		return this.fragment ? this.fragment.detach() : createDocumentFragment();
	  	};

	  	Alias.prototype.find = function find ( selector ) {
	  		if ( this.fragment ) {
	  			return this.fragment.find( selector );
	  		}
	  	};

	  	Alias.prototype.findAll = function findAll ( selector, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAll( selector, query );
	  		}
	  	};

	  	Alias.prototype.findComponent = function findComponent ( name ) {
	  		if ( this.fragment ) {
	  			return this.fragment.findComponent( name );
	  		}
	  	};

	  	Alias.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAllComponents( name, query );
	  		}
	  	};

	  	Alias.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment && this.fragment.firstNode( skipParent );
	  	};

	  	Alias.prototype.rebinding = function rebinding () {
	  		var this$1 = this;

	  		if ( this.locked ) return;
	  		this.locked = true;
	  		runloop.scheduleTask( function () {
	  			this$1.locked = false;
	  			resolveAliases( this$1 );
	  		});
	  	};

	  	Alias.prototype.render = function render ( target ) {
	  		this.rendered = true;
	  		if ( this.fragment ) this.fragment.render( target );
	  	};

	  	Alias.prototype.toString = function toString ( escape ) {
	  		return this.fragment ? this.fragment.toString( escape ) : '';
	  	};

	  	Alias.prototype.unbind = function unbind () {
	  		this.aliases = {};
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Alias.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( this.rendered && this.fragment ) this.fragment.unrender( shouldDestroy );
	  		this.rendered = false;
	  	};

	  	Alias.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			this.fragment.update();
	  		}
	  	};

	  	return Alias;
	  }(Item));

	  function findElement( start, orComponent, name ) {
	  	if ( orComponent === void 0 ) orComponent = true;

	  	while ( start && ( start.type !== ELEMENT || ( name && start.name !== name ) ) && ( !orComponent || start.type !== COMPONENT ) ) {
	  		// start is a fragment - look at the owner
	  		if ( start.owner ) start = start.owner;
	  		// start is a component or yielder - look at the container
	  		else if ( start.component ) start = start.containerFragment || start.component.parentFragment;
	  		// start is an item - look at the parent
	  		else if ( start.parent ) start = start.parent;
	  		// start is an item without a parent - look at the parent fragment
	  		else if ( start.parentFragment ) start = start.parentFragment;

	  		else start = undefined;
	  	}

	  	return start;
	  }

	  function camelCase ( hyphenatedStr ) {
	  	return hyphenatedStr.replace( /-([a-zA-Z])/g, function ( match, $1 ) {
	  		return $1.toUpperCase();
	  	});
	  }

	  var space = /\s+/;
	  var specials$2 = { 'float': 'cssFloat' };
	  var remove = /\/\*(?:[\s\S]*?)\*\//g;
	  var escape = /url\(\s*(['"])(?:\\[\s\S]|(?!\1).)*\1\s*\)|url\((?:\\[\s\S]|[^)])*\)|(['"])(?:\\[\s\S]|(?!\1).)*\2/gi;
	  var value = /\0(\d+)/g;

	  function readStyle ( css ) {
	      var values = [];

	      if ( typeof css !== 'string' ) return {};

	      return css.replace( escape, function ( match ) { return ("\u0000" + (values.push( match ) - 1)); })
	          .replace( remove, '' )
	          .split( ';' )
	          .filter( function ( rule ) { return !!rule.trim(); } )
	          .map( function ( rule ) { return rule.replace( value, function ( match, n ) { return values[ n ]; } ); } )
	          .reduce(function ( rules, rule ) {
	              var i = rule.indexOf(':');
	              var name = camelCase( rule.substr( 0, i ).trim() );
	              rules[ specials$2[ name ] || name ] = rule.substr( i + 1 ).trim();
	              return rules;
	          }, {});
	  }

	  function readClass ( str ) {
	    var list = str.split( space );

	    // remove any empty entries
	    var i = list.length;
	    while ( i-- ) {
	      if ( !list[i] ) list.splice( i, 1 );
	    }

	    return list;
	  }

	  var textTypes = [ undefined, 'text', 'search', 'url', 'email', 'hidden', 'password', 'search', 'reset', 'submit' ];

	  function getUpdateDelegate ( attribute ) {
	  	var element = attribute.element, name = attribute.name;

	  	if ( name === 'id' ) return updateId;

	  	if ( name === 'value' ) {
	  		if ( attribute.interpolator ) attribute.interpolator.bound = true;

	  		// special case - selects
	  		if ( element.name === 'select' && name === 'value' ) {
	  			return element.getAttribute( 'multiple' ) ? updateMultipleSelectValue : updateSelectValue;
	  		}

	  		if ( element.name === 'textarea' ) return updateStringValue;

	  		// special case - contenteditable
	  		if ( element.getAttribute( 'contenteditable' ) != null ) return updateContentEditableValue;

	  		// special case - <input>
	  		if ( element.name === 'input' ) {
	  			var type = element.getAttribute( 'type' );

	  			// type='file' value='{{fileList}}'>
	  			if ( type === 'file' ) return noop; // read-only

	  			// type='radio' name='{{twoway}}'
	  			if ( type === 'radio' && element.binding && element.binding.attribute.name === 'name' ) return updateRadioValue;

	  			if ( ~textTypes.indexOf( type ) ) return updateStringValue;
	  		}

	  		return updateValue;
	  	}

	  	var node = element.node;

	  	// special case - <input type='radio' name='{{twoway}}' value='foo'>
	  	if ( attribute.isTwoway && name === 'name' ) {
	  		if ( node.type === 'radio' ) return updateRadioName;
	  		if ( node.type === 'checkbox' ) return updateCheckboxName;
	  	}

	  	if ( name === 'style' ) return updateStyleAttribute;

	  	if ( name.indexOf( 'style-' ) === 0 ) return updateInlineStyle;

	  	// special case - class names. IE fucks things up, again
	  	if ( name === 'class' && ( !node.namespaceURI || node.namespaceURI === html ) ) return updateClassName;

	  	if ( name.indexOf( 'class-' ) === 0 ) return updateInlineClass;

	  	if ( attribute.isBoolean ) {
	  		var type$1 = element.getAttribute( 'type' );
	  		if ( attribute.interpolator && name === 'checked' && ( type$1 === 'checkbox' || type$1 === 'radio' ) ) attribute.interpolator.bound = true;
	  		return updateBoolean;
	  	}

	  	if ( attribute.namespace && attribute.namespace !== attribute.node.namespaceURI ) return updateNamespacedAttribute;

	  	return updateAttribute;
	  }

	  function updateId ( reset ) {
	  	var ref = this, node = ref.node;
	  	var value = this.getValue();

	  	// remove the mapping to this node if it hasn't already been replaced
	  	if ( this.ractive.nodes[ node.id ] === node ) delete this.ractive.nodes[ node.id ];
	  	if ( reset ) return node.removeAttribute( 'id' );

	  	this.ractive.nodes[ value ] = node;

	  	node.id = value;
	  }

	  function updateMultipleSelectValue ( reset ) {
	  	var value = this.getValue();

	  	if ( !isArray( value ) ) value = [ value ];

	  	var options = this.node.options;
	  	var i = options.length;

	  	if ( reset ) {
	  		while ( i-- ) options[i].selected = false;
	  	} else {
	  		while ( i-- ) {
	  			var option = options[i];
	  			var optionValue = option._ractive ?
	  				option._ractive.value :
	  				option.value; // options inserted via a triple don't have _ractive

	  			option.selected = arrayContains( value, optionValue );
	  		}
	  	}
	  }

	  function updateSelectValue ( reset ) {
	  	var value = this.getValue();

	  	if ( !this.locked ) { // TODO is locked still a thing?
	  		this.node._ractive.value = value;

	  		var options = this.node.options;
	  		var i = options.length;
	  		var wasSelected = false;

	  		if ( reset ) {
	  			while ( i-- ) options[i].selected = false;
	  		} else {
	  			while ( i-- ) {
	  				var option = options[i];
	  				var optionValue = option._ractive ?
	  					option._ractive.value :
	  					option.value; // options inserted via a triple don't have _ractive
	  				if ( option.disabled && option.selected ) wasSelected = true;

	  				if ( optionValue == value ) { // double equals as we may be comparing numbers with strings
	  					option.selected = true;
	  					return;
	  				}
	  			}
	  		}

	  		if ( !wasSelected ) this.node.selectedIndex = -1;
	  	}
	  }


	  function updateContentEditableValue ( reset ) {
	  	var value = this.getValue();

	  	if ( !this.locked ) {
	  		if ( reset ) this.node.innerHTML = '';
	  		else this.node.innerHTML = value === undefined ? '' : value;
	  	}
	  }

	  function updateRadioValue ( reset ) {
	  	var node = this.node;
	  	var wasChecked = node.checked;

	  	var value = this.getValue();

	  	if ( reset ) return node.checked = false;

	  	//node.value = this.element.getAttribute( 'value' );
	  	node.value = this.node._ractive.value = value;
	  	node.checked = value === this.element.getAttribute( 'name' );

	  	// This is a special case - if the input was checked, and the value
	  	// changed so that it's no longer checked, the twoway binding is
	  	// most likely out of date. To fix it we have to jump through some
	  	// hoops... this is a little kludgy but it works
	  	if ( wasChecked && !node.checked && this.element.binding && this.element.binding.rendered ) {
	  		this.element.binding.group.model.set( this.element.binding.group.getValue() );
	  	}
	  }

	  function updateValue ( reset ) {
	  	if ( !this.locked ) {
	  		if ( reset ) {
	  			this.node.removeAttribute( 'value' );
	  			this.node.value = this.node._ractive.value = null;
	  			return;
	  		}

	  		var value = this.getValue();

	  		this.node.value = this.node._ractive.value = value;
	  		this.node.setAttribute( 'value', value );
	  	}
	  }

	  function updateStringValue ( reset ) {
	  	if ( !this.locked ) {
	  		if ( reset ) {
	  			this.node._ractive.value = '';
	  			this.node.removeAttribute( 'value' );
	  			return;
	  		}

	  		var value = this.getValue();

	  		this.node._ractive.value = value;

	  		this.node.value = safeToStringValue( value );
	  		this.node.setAttribute( 'value', safeToStringValue( value ) );
	  	}
	  }

	  function updateRadioName ( reset ) {
	  	if ( reset ) this.node.checked = false;
	  	else this.node.checked = ( this.getValue() == this.node._ractive.value );
	  }

	  function updateCheckboxName ( reset ) {
	  	var ref = this, element = ref.element, node = ref.node;
	  	var binding = element.binding;

	  	var value = this.getValue();
	  	var valueAttribute = element.getAttribute( 'value' );

	  	if ( reset ) {
	  		// TODO: WAT?
	  	}

	  	if ( !isArray( value ) ) {
	  		binding.isChecked = node.checked = ( value == valueAttribute );
	  	} else {
	  		var i = value.length;
	  		while ( i-- ) {
	  			if ( valueAttribute == value[i] ) {
	  				binding.isChecked = node.checked = true;
	  				return;
	  			}
	  		}
	  		binding.isChecked = node.checked = false;
	  	}
	  }

	  function updateStyleAttribute ( reset ) {
	  	var props = reset ? {} : readStyle( this.getValue() || '' );
	  	var style = this.node.style;
	  	var keys = Object.keys( props );
	  	var prev = this.previous || [];

	  	var i = 0;
	  	while ( i < keys.length ) {
	  		if ( keys[i] in style ) style[ keys[i] ] = props[ keys[i] ];
	  		i++;
	  	}

	  	// remove now-missing attrs
	  	i = prev.length;
	  	while ( i-- ) {
	  		if ( !~keys.indexOf( prev[i] ) && prev[i] in style ) style[ prev[i] ] = '';
	  	}

	  	this.previous = keys;
	  }

	  function updateInlineStyle ( reset ) {
	  	if ( !this.styleName ) {
	  		this.styleName = camelize( this.name.substr( 6 ) );
	  	}

	  	this.node.style[ this.styleName ] = reset ? '' : this.getValue();
	  }

	  function updateClassName ( reset ) {
	  	var value = reset ? [] : readClass( safeToStringValue( this.getValue() ) );
	  	var attr = readClass( this.node.className );
	  	var prev = this.previous || attr.slice( 0 );

	  	var i = 0;
	  	while ( i < value.length ) {
	  		if ( !~attr.indexOf( value[i] ) ) attr.push( value[i] );
	  		i++;
	  	}

	  	// remove now-missing classes
	  	i = prev.length;
	  	while ( i-- ) {
	  		if ( !~value.indexOf( prev[i] ) ) {
	  			var idx = attr.indexOf( prev[i] );
	  			if ( ~idx ) attr.splice( idx, 1 );
	  		}
	  	}

	  	var className = attr.join( ' ' );

	  	if ( className !== this.node.className ) {
	  		this.node.className = className;
	  	}

	  	this.previous = value;
	  }

	  function updateInlineClass ( reset ) {
	  	var name = this.name.substr( 6 );
	  	var attr = readClass( this.node.className );
	  	var value = reset ? false : this.getValue();

	  	if ( !this.inlineClass ) this.inlineClass = name;

	  	if ( value && !~attr.indexOf( name ) ) attr.push( name );
	  	else if ( !value && ~attr.indexOf( name ) ) attr.splice( attr.indexOf( name ), 1 );

	  	this.node.className = attr.join( ' ' );
	  }

	  function updateBoolean ( reset ) {
	  	// with two-way binding, only update if the change wasn't initiated by the user
	  	// otherwise the cursor will often be sent to the wrong place
	  	if ( !this.locked ) {
	  		if ( reset ) {
	  			if ( this.useProperty ) this.node[ this.propertyName ] = false;
	  			this.node.removeAttribute( this.propertyName );
	  			return;
	  		}

	  		if ( this.useProperty ) {
	  			this.node[ this.propertyName ] = this.getValue();
	  		} else {
	  			if ( this.getValue() ) {
	  				this.node.setAttribute( this.propertyName, '' );
	  			} else {
	  				this.node.removeAttribute( this.propertyName );
	  			}
	  		}
	  	}
	  }

	  function updateAttribute ( reset ) {
	  	if ( reset ) this.node.removeAttribute( this.name );
	  	else this.node.setAttribute( this.name, safeToStringValue( this.getString() ) );
	  }

	  function updateNamespacedAttribute ( reset ) {
	  	if ( reset ) this.node.removeAttributeNS( this.namespace, this.name.slice( this.name.indexOf( ':' ) + 1 ) );
	  	else this.node.setAttributeNS( this.namespace, this.name.slice( this.name.indexOf( ':' ) + 1 ), safeToStringValue( this.getString() ) );
	  }

	  var propertyNames = {
	  	'accept-charset': 'acceptCharset',
	  	accesskey: 'accessKey',
	  	bgcolor: 'bgColor',
	  	'class': 'className',
	  	codebase: 'codeBase',
	  	colspan: 'colSpan',
	  	contenteditable: 'contentEditable',
	  	datetime: 'dateTime',
	  	dirname: 'dirName',
	  	'for': 'htmlFor',
	  	'http-equiv': 'httpEquiv',
	  	ismap: 'isMap',
	  	maxlength: 'maxLength',
	  	novalidate: 'noValidate',
	  	pubdate: 'pubDate',
	  	readonly: 'readOnly',
	  	rowspan: 'rowSpan',
	  	tabindex: 'tabIndex',
	  	usemap: 'useMap'
	  };

	  function lookupNamespace ( node, prefix ) {
	  	var qualified = "xmlns:" + prefix;

	  	while ( node ) {
	  		if ( node.hasAttribute && node.hasAttribute( qualified ) ) return node.getAttribute( qualified );
	  		node = node.parentNode;
	  	}

	  	return namespaces[ prefix ];
	  }

	  var Attribute = (function (Item) {
	  	function Attribute ( options ) {
	  		Item.call( this, options );

	  		this.name = options.template.n;
	  		this.namespace = null;

	  		this.owner = options.owner || options.parentFragment.owner || options.element || findElement( options.parentFragment );
	  		this.element = options.element || (this.owner.attributeByName ? this.owner : findElement( options.parentFragment ) );
	  		this.parentFragment = options.parentFragment; // shared
	  		this.ractive = this.parentFragment.ractive;

	  		this.rendered = false;
	  		this.updateDelegate = null;
	  		this.fragment = null;

	  		this.element.attributeByName[ this.name ] = this;

	  		if ( !isArray( options.template.f ) ) {
	  			this.value = options.template.f;
	  			if ( this.value === 0 ) {
	  				this.value = '';
	  			}
	  		} else {
	  			this.fragment = new Fragment({
	  				owner: this,
	  				template: options.template.f
	  			});
	  		}

	  		this.interpolator = this.fragment &&
	  			this.fragment.items.length === 1 &&
	  			this.fragment.items[0].type === INTERPOLATOR &&
	  			this.fragment.items[0];

	  		if ( this.interpolator ) this.interpolator.owner = this;
	  	}

	  	Attribute.prototype = Object.create( Item && Item.prototype );
	  	Attribute.prototype.constructor = Attribute;

	  	Attribute.prototype.bind = function bind () {
	  		if ( this.fragment ) {
	  			this.fragment.bind();
	  		}
	  	};

	  	Attribute.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.parentFragment.bubble();
	  			this.element.bubble();
	  			this.dirty = true;
	  		}
	  	};

	  	Attribute.prototype.destroyed = function destroyed () {
	  		this.updateDelegate( true );
	  	};

	  	Attribute.prototype.getString = function getString () {
	  		return this.fragment ?
	  			this.fragment.toString() :
	  			this.value != null ? '' + this.value : '';
	  	};

	  	// TODO could getValue ever be called for a static attribute,
	  	// or can we assume that this.fragment exists?
	  	Attribute.prototype.getValue = function getValue () {
	  		return this.fragment ? this.fragment.valueOf() : booleanAttributes.test( this.name ) ? true : this.value;
	  	};

	  	Attribute.prototype.render = function render () {
	  		var node = this.element.node;
	  		this.node = node;

	  		// should we use direct property access, or setAttribute?
	  		if ( !node.namespaceURI || node.namespaceURI === namespaces.html ) {
	  			this.propertyName = propertyNames[ this.name ] || this.name;

	  			if ( node[ this.propertyName ] !== undefined ) {
	  				this.useProperty = true;
	  			}

	  			// is attribute a boolean attribute or 'value'? If so we're better off doing e.g.
	  			// node.selected = true rather than node.setAttribute( 'selected', '' )
	  			if ( booleanAttributes.test( this.name ) || this.isTwoway ) {
	  				this.isBoolean = true;
	  			}

	  			if ( this.propertyName === 'value' ) {
	  				node._ractive.value = this.value;
	  			}
	  		}

	  		if ( node.namespaceURI ) {
	  			var index = this.name.indexOf( ':' );
	  			if ( index !== -1 ) {
	  				this.namespace = lookupNamespace( node, this.name.slice( 0, index ) );
	  			} else {
	  				this.namespace = node.namespaceURI;
	  			}
	  		}

	  		this.rendered = true;
	  		this.updateDelegate = getUpdateDelegate( this );
	  		this.updateDelegate();
	  	};

	  	Attribute.prototype.toString = function toString () {
	  		var value = this.getValue();

	  		// Special case - select and textarea values (should not be stringified)
	  		if ( this.name === 'value' && ( this.element.getAttribute( 'contenteditable' ) !== undefined || ( this.element.name === 'select' || this.element.name === 'textarea' ) ) ) {
	  			return;
	  		}

	  		// Special case – bound radio `name` attributes
	  		if ( this.name === 'name' && this.element.name === 'input' && this.interpolator && this.element.getAttribute( 'type' ) === 'radio' ) {
	  			return ("name=\"{{" + (this.interpolator.model.getKeypath()) + "}}\"");
	  		}

	  		// Special case - style and class attributes and directives
	  		if ( this.owner === this.element && ( this.name === 'style' || this.name === 'class' || this.styleName || this.inlineClass ) ) {
	  			return;
	  		}

	  		if ( !this.rendered && this.owner === this.element && ( !this.name.indexOf( 'style-' ) || !this.name.indexOf( 'class-' ) ) ) {
	  			if ( !this.name.indexOf( 'style-' ) ) {
	  				this.styleName = camelize( this.name.substr( 6 ) );
	  			} else {
	  				this.inlineClass = this.name.substr( 6 );
	  			}

	  			return;
	  		}

	  		if ( booleanAttributes.test( this.name ) ) return value ? this.name : '';
	  		if ( value == null ) return '';

	  		var str = safeAttributeString( this.getString() );
	  		return str ?
	  			("" + (this.name) + "=\"" + str + "\"") :
	  			this.name;
	  	};

	  	Attribute.prototype.unbind = function unbind () {
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Attribute.prototype.unrender = function unrender () {
	  		this.updateDelegate( true );

	  		this.rendered = false;
	  	};

	  	Attribute.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			if ( this.fragment ) this.fragment.update();
	  			if ( this.rendered ) this.updateDelegate();
	  			if ( this.isTwoway && !this.locked ) {
	  				this.interpolator.twowayBinding.lastVal( true, this.interpolator.model.get() );
	  			}
	  		}
	  	};

	  	return Attribute;
	  }(Item));

	  var BindingFlag = (function (Item) {
	  	function BindingFlag ( options ) {
	  		Item.call( this, options );

	  		this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  		this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  		this.flag = options.template.v === 'l' ? 'lazy' : 'twoway';

	  		if ( this.element.type === ELEMENT ) {
	  			if ( isArray( options.template.f ) ) {
	  				this.fragment = new Fragment({
	  					owner: this,
	  					template: options.template.f
	  				});
	  			}

	  			this.interpolator = this.fragment &&
	  								this.fragment.items.length === 1 &&
	  								this.fragment.items[0].type === INTERPOLATOR &&
	  								this.fragment.items[0];
	  		}
	  	}

	  	BindingFlag.prototype = Object.create( Item && Item.prototype );
	  	BindingFlag.prototype.constructor = BindingFlag;

	  	BindingFlag.prototype.bind = function bind () {
	  		if ( this.fragment ) this.fragment.bind();
	  		set$2( this, this.getValue(), true );
	  	};

	  	BindingFlag.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.element.bubble();
	  			this.dirty = true;
	  		}
	  	};

	  	BindingFlag.prototype.getValue = function getValue () {
	  		if ( this.fragment ) return this.fragment.valueOf();
	  		else if ( 'value' in this ) return this.value;
	  		else if ( 'f' in this.template ) return this.template.f;
	  		else return true;
	  	};

	  	BindingFlag.prototype.render = function render () {
	  		set$2( this, this.getValue(), true );
	  	};

	  	BindingFlag.prototype.toString = function toString () { return ''; };

	  	BindingFlag.prototype.unbind = function unbind () {
	  		if ( this.fragment ) this.fragment.unbind();

	  		delete this.element[ this.flag ];
	  	};

	  	BindingFlag.prototype.unrender = function unrender () {
	  		if ( this.element.rendered ) this.element.recreateTwowayBinding();
	  	};

	  	BindingFlag.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			if ( this.fragment ) this.fragment.update();
	  			set$2( this, this.getValue(), true );
	  		}
	  	};

	  	return BindingFlag;
	  }(Item));

	  function set$2 ( flag, value, update ) {
	  	if ( value === 0 ) {
	  		flag.value = true;
	  	} else if ( value === 'true' ) {
	  		flag.value = true;
	  	} else if ( value === 'false' || value === '0' ) {
	  		flag.value = false;
	  	} else {
	  		flag.value = value;
	  	}

	  	var current = flag.element[ flag.flag ];
	  	flag.element[ flag.flag ] = flag.value;
	  	if ( update && !flag.element.attributes.binding && current !== flag.value ) {
	  		flag.element.recreateTwowayBinding();
	  	}

	  	return flag.value;
	  }

	  var div$1 = doc ? createElement( 'div' ) : null;

	  var attributes = false;
	  function inAttributes() { return attributes; }
	  function doInAttributes( fn ) {
	  	attributes = true;
	  	fn();
	  	attributes = false;
	  }

	  var ConditionalAttribute = (function (Item) {
	  	function ConditionalAttribute ( options ) {
	  		Item.call( this, options );

	  		this.attributes = [];

	  		this.owner = options.owner;

	  		this.fragment = new Fragment({
	  			ractive: this.ractive,
	  			owner: this,
	  			template: this.template
	  		});
	  		// this fragment can't participate in node-y things
	  		this.fragment.findNextNode = noop;

	  		this.dirty = false;
	  	}

	  	ConditionalAttribute.prototype = Object.create( Item && Item.prototype );
	  	ConditionalAttribute.prototype.constructor = ConditionalAttribute;

	  	ConditionalAttribute.prototype.bind = function bind () {
	  		this.fragment.bind();
	  	};

	  	ConditionalAttribute.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.dirty = true;
	  			this.owner.bubble();
	  		}
	  	};

	  	ConditionalAttribute.prototype.render = function render () {
	  		this.node = this.owner.node;
	  		if ( this.node ) {
	  			this.isSvg = this.node.namespaceURI === svg$1;
	  		}

	  		attributes = true;
	  		if ( !this.rendered ) this.fragment.render();
	  		attributes = false;

	  		this.rendered = true;
	  		this.dirty = true; // TODO this seems hacky, but necessary for tests to pass in browser AND node.js
	  		this.update();
	  	};

	  	ConditionalAttribute.prototype.toString = function toString () {
	  		return this.fragment.toString();
	  	};

	  	ConditionalAttribute.prototype.unbind = function unbind () {
	  		this.fragment.unbind();
	  	};

	  	ConditionalAttribute.prototype.unrender = function unrender () {
	  		this.rendered = false;
	  		this.fragment.unrender();
	  	};

	  	ConditionalAttribute.prototype.update = function update () {
	  		var this$1 = this;

	  		var str;
	  		var attrs;

	  		if ( this.dirty ) {
	  			this.dirty = false;

	  			attributes = true;
	  			this.fragment.update();
	  			attributes = false;

	  			if ( this.rendered && this.node ) {
	  				str = this.fragment.toString();
	  				attrs = parseAttributes( str, this.isSvg );

	  				// any attributes that previously existed but no longer do
	  				// must be removed
	  				this.attributes.filter( function ( a ) { return notIn( attrs, a ); } ).forEach( function ( a ) {
	  					this$1.node.removeAttribute( a.name );
	  				});

	  				attrs.forEach( function ( a ) {
	  					this$1.node.setAttribute( a.name, a.value );
	  				});

	  				this.attributes = attrs;
	  			}
	  		}
	  	};

	  	return ConditionalAttribute;
	  }(Item));

	  function parseAttributes ( str, isSvg ) {
	  	var tagName = isSvg ? 'svg' : 'div';
	  	return str
	  		? (div$1.innerHTML = "<" + tagName + " " + str + "></" + tagName + ">") &&
	  			toArray(div$1.childNodes[0].attributes)
	  		: [];
	  }

	  function notIn ( haystack, needle ) {
	  	var i = haystack.length;

	  	while ( i-- ) {
	  		if ( haystack[i].name === needle.name ) {
	  			return false;
	  		}
	  	}

	  	return true;
	  }

	  function processWrapper ( wrapper, array, methodName, newIndices ) {
	  	var __model = wrapper.__model;

	  	if ( newIndices ) {
	  		__model.shuffle( newIndices );
	  	} else {
	  		// If this is a sort or reverse, we just do root.set()...
	  		// TODO use merge logic?
	  		//root.viewmodel.mark( keypath );
	  	}
	  }

	  var mutatorMethods = [ 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift' ];
	  var patchedArrayProto = [];

	  mutatorMethods.forEach( function ( methodName ) {
	  	var method = function () {
	  		var this$1 = this;
	  		var args = [], len = arguments.length;
	  		while ( len-- ) args[ len ] = arguments[ len ];

	  		var newIndices = getNewIndices( this.length, methodName, args );

	  		// lock any magic array wrappers, so that things don't get fudged
	  		this._ractive.wrappers.forEach( function ( r ) { if ( r.magic ) r.magic.locked = true; } );

	  		// apply the underlying method
	  		var result = Array.prototype[ methodName ].apply( this, arguments );

	  		// trigger changes
	  		runloop.start();

	  		this._ractive.setting = true;
	  		var i = this._ractive.wrappers.length;
	  		while ( i-- ) {
	  			processWrapper( this$1._ractive.wrappers[i], this$1, methodName, newIndices );
	  		}

	  		runloop.end();

	  		this._ractive.setting = false;

	  		// unlock the magic arrays... magic... bah
	  		this._ractive.wrappers.forEach( function ( r ) { if ( r.magic ) r.magic.locked = false; } );

	  		return result;
	  	};

	  	defineProperty( patchedArrayProto, methodName, {
	  		value: method,
	  		configurable: true
	  	});
	  });

	  var patchArrayMethods;
	  var unpatchArrayMethods;

	  // can we use prototype chain injection?
	  // http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/#wrappers_prototype_chain_injection
	  if ( ({}).__proto__ ) {
	  	// yes, we can
	  	patchArrayMethods = function ( array ) { return array.__proto__ = patchedArrayProto; };
	  	unpatchArrayMethods = function ( array ) { return array.__proto__ = Array.prototype; };
	  }

	  else {
	  	// no, we can't
	  	patchArrayMethods = function ( array ) {
	  		var i = mutatorMethods.length;
	  		while ( i-- ) {
	  			var methodName = mutatorMethods[i];
	  			defineProperty( array, methodName, {
	  				value: patchedArrayProto[ methodName ],
	  				configurable: true
	  			});
	  		}
	  	};

	  	unpatchArrayMethods = function ( array ) {
	  		var i = mutatorMethods.length;
	  		while ( i-- ) {
	  			delete array[ mutatorMethods[i] ];
	  		}
	  	};
	  }

	  patchArrayMethods.unpatch = unpatchArrayMethods; // TODO export separately?
	  var patch = patchArrayMethods;

	  var errorMessage$1 = 'Something went wrong in a rather interesting way';

	  var arrayAdaptor = {
	  	filter: function ( object ) {
	  		// wrap the array if a) b) it's an array, and b) either it hasn't been wrapped already,
	  		// or the array didn't trigger the get() itself
	  		return isArray( object ) && ( !object._ractive || !object._ractive.setting );
	  	},
	  	wrap: function ( ractive, array, keypath ) {
	  		return new ArrayWrapper( ractive, array, keypath );
	  	}
	  };

	  var ArrayWrapper = function ArrayWrapper ( ractive, array ) {
	  	this.root = ractive;
	  	this.value = array;
	  	this.__model = null; // filled in later

	  	// if this array hasn't already been ractified, ractify it
	  	if ( !array._ractive ) {
	  		// define a non-enumerable _ractive property to store the wrappers
	  		defineProperty( array, '_ractive', {
	  			value: {
	  				wrappers: [],
	  				instances: [],
	  				setting: false
	  			},
	  			configurable: true
	  		});

	  		patch( array );
	  	}

	  	// store the ractive instance, so we can handle transitions later
	  	if ( !array._ractive.instances[ ractive._guid ] ) {
	  		array._ractive.instances[ ractive._guid ] = 0;
	  		array._ractive.instances.push( ractive );
	  	}

	  	array._ractive.instances[ ractive._guid ] += 1;
	  	array._ractive.wrappers.push( this );
	  };

	  ArrayWrapper.prototype.get = function get () {
	  	return this.value;
	  };

	  ArrayWrapper.prototype.reset = function reset ( value ) {
	  	return this.value === value;
	  };

	  ArrayWrapper.prototype.teardown = function teardown () {
	  	var array, storage, wrappers, instances, index;

	  	array = this.value;
	  	storage = array._ractive;
	  	wrappers = storage.wrappers;
	  	instances = storage.instances;

	  	// if teardown() was invoked because we're clearing the cache as a result of
	  	// a change that the array itself triggered, we can save ourselves the teardown
	  	// and immediate setup
	  	if ( storage.setting ) {
	  		return false; // so that we don't remove it from cached wrappers
	  	}

	  	index = wrappers.indexOf( this );
	  	if ( index === -1 ) {
	  		throw new Error( errorMessage$1 );
	  	}

	  	wrappers.splice( index, 1 );

	  	// if nothing else depends on this array, we can revert it to its
	  	// natural state
	  	if ( !wrappers.length ) {
	  		delete array._ractive;
	  		patch.unpatch( this.value );
	  	}

	  	else {
	  		// remove ractive instance if possible
	  		instances[ this.root._guid ] -= 1;
	  		if ( !instances[ this.root._guid ] ) {
	  			index = instances.indexOf( this.root );

	  			if ( index === -1 ) {
	  				throw new Error( errorMessage$1 );
	  			}

	  			instances.splice( index, 1 );
	  		}
	  	}
	  };

	  var magicAdaptor;

	  try {
	  	Object.defineProperty({}, 'test', { get: function() {}, set: function() {} });

	  	magicAdaptor = {
	  		filter: function ( value ) {
	  			return value && typeof value === 'object';
	  		},
	  		wrap: function ( ractive, value, keypath ) {
	  			return new MagicWrapper( ractive, value, keypath );
	  		}
	  	};
	  } catch ( err ) {
	  	magicAdaptor = false;
	  }

	  var magicAdaptor$1 = magicAdaptor;

	  function createOrWrapDescriptor ( originalDescriptor, ractive, keypath, wrapper ) {
	  	if ( originalDescriptor.set && originalDescriptor.set.__magic ) {
	  		originalDescriptor.set.__magic.dependants.push({ ractive: ractive, keypath: keypath });
	  		return originalDescriptor;
	  	}

	  	var setting;

	  	var dependants = [{ ractive: ractive, keypath: keypath }];

	  	var descriptor = {
	  		get: function () {
	  			return 'value' in originalDescriptor ? originalDescriptor.value : originalDescriptor.get.call( this );
	  		},
	  		set: function (value) {
	  			if ( setting ) return;

	  			if ( 'value' in originalDescriptor ) {
	  				originalDescriptor.value = value;
	  			} else {
	  				originalDescriptor.set.call( this, value );
	  			}

	  			if ( wrapper.locked ) return;
	  			setting = true;
	  			dependants.forEach( function (ref) {
	  				var ractive = ref.ractive;
	  				var keypath = ref.keypath;

	  				ractive.set( keypath, value );
	  			});
	  			setting = false;
	  		},
	  		enumerable: true
	  	};

	  	descriptor.set.__magic = { dependants: dependants, originalDescriptor: originalDescriptor };

	  	return descriptor;
	  }

	  function revert ( descriptor, ractive, keypath ) {
	  	if ( !descriptor.set || !descriptor.set.__magic ) return true;

	  	var dependants = descriptor.set.__magic;
	  	var i = dependants.length;
	  	while ( i-- ) {
	  		var dependant = dependants[i];
	  		if ( dependant.ractive === ractive && dependant.keypath === keypath ) {
	  			dependants.splice( i, 1 );
	  			return false;
	  		}
	  	}
	  }

	  var MagicWrapper = function MagicWrapper ( ractive, value, keypath ) {
	  	var this$1 = this;

	  		this.ractive = ractive;
	  	this.value = value;
	  	this.keypath = keypath;

	  	this.originalDescriptors = {};

	  	// wrap all properties with getters
	  	Object.keys( value ).forEach( function ( key ) {
	  		var originalDescriptor = Object.getOwnPropertyDescriptor( this$1.value, key );
	  		this$1.originalDescriptors[ key ] = originalDescriptor;

	  		var childKeypath = keypath ? ("" + keypath + "." + (escapeKey( key ))) : escapeKey( key );

	  		var descriptor = createOrWrapDescriptor( originalDescriptor, ractive, childKeypath, this$1 );



	  		Object.defineProperty( this$1.value, key, descriptor );
	  	});
	  };

	  MagicWrapper.prototype.get = function get () {
	  	return this.value;
	  };

	  MagicWrapper.prototype.reset = function reset ( value ) {
	  	return this.value === value;
	  };

	  MagicWrapper.prototype.set = function set ( key, value ) {
	  	this.value[ key ] = value;
	  };

	  MagicWrapper.prototype.teardown = function teardown () {
	  	var this$1 = this;

	  		Object.keys( this.value ).forEach( function ( key ) {
	  		var descriptor = Object.getOwnPropertyDescriptor( this$1.value, key );
	  		if ( !descriptor.set || !descriptor.set.__magic ) return;

	  		revert( descriptor );

	  		if ( descriptor.set.__magic.dependants.length === 1 ) {
	  			Object.defineProperty( this$1.value, key, descriptor.set.__magic.originalDescriptor );
	  		}
	  	});
	  };

	  var MagicArrayWrapper = function MagicArrayWrapper ( ractive, array, keypath ) {
	  	this.value = array;

	  	this.magic = true;

	  	this.magicWrapper = magicAdaptor$1.wrap( ractive, array, keypath );
	  	this.arrayWrapper = arrayAdaptor.wrap( ractive, array, keypath );
	  	this.arrayWrapper.magic = this.magicWrapper;

	  	// ugh, this really is a terrible hack
	  	Object.defineProperty( this, '__model', {
	  		get: function () {
	  			return this.arrayWrapper.__model;
	  		},
	  		set: function ( model ) {
	  			this.arrayWrapper.__model = model;
	  		}
	  	});
	  };

	  MagicArrayWrapper.prototype.get = function get () {
	  	return this.value;
	  };

	  MagicArrayWrapper.prototype.teardown = function teardown () {
	  	this.arrayWrapper.teardown();
	  	this.magicWrapper.teardown();
	  };

	  MagicArrayWrapper.prototype.reset = function reset ( value ) {
	  	return this.arrayWrapper.reset( value ) && this.magicWrapper.reset( value );
	  };

	  var magicArrayAdaptor = {
	  	filter: function ( object, keypath, ractive ) {
	  		return magicAdaptor$1.filter( object, keypath, ractive ) && arrayAdaptor.filter( object );
	  	},

	  	wrap: function ( ractive, array, keypath ) {
	  		return new MagicArrayWrapper( ractive, array, keypath );
	  	}
	  };

	  // TODO this is probably a bit anal, maybe we should leave it out
	  function prettify ( fnBody ) {
	  	var lines = fnBody
	  		.replace( /^\t+/gm, function ( tabs ) { return tabs.split( '\t' ).join( '  ' ); } )
	  		.split( '\n' );

	  	var minIndent = lines.length < 2 ? 0 :
	  		lines.slice( 1 ).reduce( function ( prev, line ) {
	  			return Math.min( prev, /^\s*/.exec( line )[0].length );
	  		}, Infinity );

	  	return lines.map( function ( line, i ) {
	  		return '    ' + ( i ? line.substring( minIndent ) : line );
	  	}).join( '\n' );
	  }

	  // Ditto. This function truncates the stack to only include app code
	  function truncateStack ( stack ) {
	  	if ( !stack ) return '';

	  	var lines = stack.split( '\n' );
	  	var name = Computation.name + '.getValue';

	  	var truncated = [];

	  	var len = lines.length;
	  	for ( var i = 1; i < len; i += 1 ) {
	  		var line = lines[i];

	  		if ( ~line.indexOf( name ) ) {
	  			return truncated.join( '\n' );
	  		} else {
	  			truncated.push( line );
	  		}
	  	}
	  }

	  var Computation = (function (Model) {
	  	function Computation ( viewmodel, signature, key ) {
	  		Model.call( this, null, null );

	  		this.root = this.parent = viewmodel;
	  		this.signature = signature;

	  		this.key = key; // not actually used, but helps with debugging
	  		this.isExpression = key && key[0] === '@';

	  		this.isReadonly = !this.signature.setter;

	  		this.context = viewmodel.computationContext;

	  		this.dependencies = [];

	  		this.children = [];
	  		this.childByKey = {};

	  		this.deps = [];

	  		this.dirty = true;

	  		// TODO: is there a less hackish way to do this?
	  		this.shuffle = undefined;
	  	}

	  	Computation.prototype = Object.create( Model && Model.prototype );
	  	Computation.prototype.constructor = Computation;

	  	Computation.prototype.get = function get ( shouldCapture ) {
	  		if ( shouldCapture ) capture( this );

	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			this.value = this.getValue();
	  			if ( this.wrapper ) this.newWrapperValue = this.value;
	  			this.adapt();
	  		}

	  		// if capturing, this value needs to be unwrapped because it's for external use
	  		return shouldCapture && this.wrapper ? this.wrapperValue : this.value;
	  	};

	  	Computation.prototype.getValue = function getValue () {
	  		startCapturing();
	  		var result;

	  		try {
	  			result = this.signature.getter.call( this.context );
	  		} catch ( err ) {
	  			warnIfDebug( ("Failed to compute " + (this.getKeypath()) + ": " + (err.message || err)) );

	  			// TODO this is all well and good in Chrome, but...
	  			// ...also, should encapsulate this stuff better, and only
	  			// show it if Ractive.DEBUG
	  			if ( hasConsole ) {
	  				if ( console.groupCollapsed ) console.groupCollapsed( '%cshow details', 'color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;' );
	  				var functionBody = prettify( this.signature.getterString );
	  				var stack = this.signature.getterUseStack ? '\n\n' + truncateStack( err.stack ) : '';
	  				console.error( ("" + (err.name) + ": " + (err.message) + "\n\n" + functionBody + "" + stack) );
	  				if ( console.groupCollapsed ) console.groupEnd();
	  			}
	  		}

	  		var dependencies = stopCapturing();
	  		this.setDependencies( dependencies );

	  		// if not the first computation and the value is not the same,
	  		// register the change for change events
	  		if ( 'value' in this && result !== this.value ) {
	  			this.registerChange( this.getKeypath(), result );
	  		}

	  		return result;
	  	};

	  	Computation.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;

	  		this.links.forEach( marked );
	  		this.deps.forEach( handleChange );
	  		this.children.forEach( handleChange );
	  		this.clearUnresolveds(); // TODO same question as on Model - necessary for primitives?
	  	};

	  	Computation.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ComputationChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	Computation.prototype.mark = function mark () {
	  		this.handleChange();
	  	};

	  	Computation.prototype.rebinding = function rebinding ( next, previous ) {
	  		// computations will grab all of their deps again automagically
	  		if ( next !== previous ) this.handleChange();
	  	};

	  	Computation.prototype.set = function set ( value ) {
	  		if ( !this.signature.setter ) {
	  			throw new Error( ("Cannot set read-only computed value '" + (this.key) + "'") );
	  		}

	  		this.signature.setter( value );
	  		this.mark();
	  	};

	  	Computation.prototype.setDependencies = function setDependencies ( dependencies ) {
	  		// unregister any soft dependencies we no longer have
	  		var this$1 = this;

	  		var i = this.dependencies.length;
	  		while ( i-- ) {
	  			var model = this$1.dependencies[i];
	  			if ( !~dependencies.indexOf( model ) ) model.unregister( this$1 );
	  		}

	  		// and add any new ones
	  		i = dependencies.length;
	  		while ( i-- ) {
	  			var model$1 = dependencies[i];
	  			if ( !~this$1.dependencies.indexOf( model$1 ) ) model$1.register( this$1 );
	  		}

	  		this.dependencies = dependencies;
	  	};

	  	Computation.prototype.teardown = function teardown () {
	  		var this$1 = this;

	  		var i = this.dependencies.length;
	  		while ( i-- ) {
	  			if ( this$1.dependencies[i] ) this$1.dependencies[i].unregister( this$1 );
	  		}
	  		if ( this.root.computations[this.key] === this ) delete this.root.computations[this.key];
	  		Model.prototype.teardown.call(this);
	  	};

	  	Computation.prototype.unregister = function unregister ( dependent ) {
	  		Model.prototype.unregister.call( this, dependent );
	  		// tear down expressions with no deps, because they will be replaced when needed
	  		if ( this.isExpression && this.deps.length === 0 ) this.teardown();
	  	};

	  	return Computation;
	  }(Model));

	  var RactiveModel = (function (Model) {
	  	function RactiveModel ( ractive ) {
	  		Model.call( this, null, '' );
	  		this.value = ractive;
	  		this.isRoot = true;
	  		this.root = this;
	  		this.adaptors = [];
	  		this.ractive = ractive;
	  		this.changes = {};
	  	}

	  	RactiveModel.prototype = Object.create( Model && Model.prototype );
	  	RactiveModel.prototype.constructor = RactiveModel;

	  	RactiveModel.prototype.getKeypath = function getKeypath() {
	  		return '@this';
	  	};

	  	return RactiveModel;
	  }(Model));

	  var hasProp$1 = Object.prototype.hasOwnProperty;

	  var RootModel = (function (Model) {
	  	function RootModel ( options ) {
	  		Model.call( this, null, null );

	  		// TODO deprecate this
	  		this.changes = {};

	  		this.isRoot = true;
	  		this.root = this;
	  		this.ractive = options.ractive; // TODO sever this link

	  		this.value = options.data;
	  		this.adaptors = options.adapt;
	  		this.adapt();

	  		this.computationContext = options.ractive;
	  		this.computations = {};

	  		// TODO this is only for deprecation of using expression keypaths
	  		this.expressions = {};
	  	}

	  	RootModel.prototype = Object.create( Model && Model.prototype );
	  	RootModel.prototype.constructor = RootModel;

	  	RootModel.prototype.applyChanges = function applyChanges () {
	  		this._changeHash = {};
	  		this.flush();

	  		return this._changeHash;
	  	};

	  	RootModel.prototype.compute = function compute ( key, signature ) {
	  		var computation = new Computation( this, signature, key );
	  		this.computations[ key ] = computation;

	  		return computation;
	  	};

	  	RootModel.prototype.createLink = function createLink ( keypath, target, targetPath ) {
	  		var this$1 = this;

	  		var keys = splitKeypathI( keypath );

	  		var model = this;
	  		while ( keys.length ) {
	  			var key = keys.shift();
	  			model = this$1.childByKey[ key ] || this$1.joinKey( key );
	  		}

	  		return model.link( target, targetPath );
	  	};

	  	RootModel.prototype.get = function get ( shouldCapture, options ) {
	  		var this$1 = this;

	  		if ( shouldCapture ) capture( this );

	  		if ( !options || options.virtual !== false ) {
	  			var result = this.getVirtual();
	  			var keys = Object.keys( this.computations );
	  			var i = keys.length;
	  			while ( i-- ) {
	  				var computation = this$1.computations[ keys[i] ];
	  				// exclude template expressions
	  				if ( !computation.isExpression ) {
	  					result[ keys[i] ] = computation.get();
	  				}
	  			}

	  			return result;
	  		} else {
	  			return this.value;
	  		}
	  	};

	  	RootModel.prototype.getKeypath = function getKeypath () {
	  		return '';
	  	};

	  	RootModel.prototype.getRactiveModel = function getRactiveModel() {
	  		return this.ractiveModel || ( this.ractiveModel = new RactiveModel( this.ractive ) );
	  	};

	  	RootModel.prototype.getValueChildren = function getValueChildren () {
	  		var children = Model.prototype.getValueChildren.call( this, this.value );

	  		this.children.forEach( function ( child ) {
	  			if ( child._link ) {
	  				var idx = children.indexOf( child );
	  				if ( ~idx ) children.splice( idx, 1, child._link );
	  				else children.push( child._link );
	  			}
	  		});

	  		for ( var k in this.computations ) {
	  			children.push( this.computations[k] );
	  		}

	  		return children;
	  	};

	  	RootModel.prototype.handleChange = function handleChange$1 () {
	  		this.deps.forEach( handleChange );
	  	};

	  	RootModel.prototype.has = function has ( key ) {
	  		var value = this.value;

	  		key = unescapeKey( key );
	  		if ( hasProp$1.call( value, key ) ) return true;

	  		// mappings/links and computations
	  		if ( key in this.computations || this.childByKey[key] && this.childByKey[key]._link ) return true;
	  		// TODO remove this after deprecation is done
	  		if ( key in this.expressions ) return true;

	  		// We climb up the constructor chain to find if one of them contains the key
	  		var constructor = value.constructor;
	  		while ( constructor !== Function && constructor !== Array && constructor !== Object ) {
	  			if ( hasProp$1.call( constructor.prototype, key ) ) return true;
	  			constructor = constructor.constructor;
	  		}

	  		return false;
	  	};

	  	RootModel.prototype.joinKey = function joinKey ( key, opts ) {
	  		if ( key === '@global' ) return GlobalModel$1;
	  		if ( key === '@this' ) return this.getRactiveModel();

	  		if ( this.expressions.hasOwnProperty( key ) ) {
	  			warnIfDebug( ("Accessing expression keypaths (" + (key.substr(1)) + ") from the instance is deprecated. You can used a getNodeInfo or event object to access keypaths with expression context.") );
	  			return this.expressions[ key ];
	  		}

	  		return this.computations.hasOwnProperty( key ) ? this.computations[ key ] :
	  		       Model.prototype.joinKey.call( this, key, opts );
	  	};

	  	RootModel.prototype.map = function map ( localKey, origin ) {
	  		var local = this.joinKey( localKey );
	  		local.link( origin );
	  	};

	  	RootModel.prototype.rebinding = function rebinding () {
	  	};

	  	RootModel.prototype.set = function set ( value ) {
	  		// TODO wrapping root node is a baaaad idea. We should prevent this
	  		var wrapper = this.wrapper;
	  		if ( wrapper ) {
	  			var shouldTeardown = !wrapper.reset || wrapper.reset( value ) === false;

	  			if ( shouldTeardown ) {
	  				wrapper.teardown();
	  				this.wrapper = null;
	  				this.value = value;
	  				this.adapt();
	  			}
	  		} else {
	  			this.value = value;
	  			this.adapt();
	  		}

	  		this.deps.forEach( handleChange );
	  		this.children.forEach( mark );
	  		this.clearUnresolveds(); // TODO do we need to do this with primitive values? if not, what about e.g. unresolved `length` property of null -> string?
	  	};

	  	RootModel.prototype.retrieve = function retrieve () {
	  		return this.wrapper ? this.wrapper.get() : this.value;
	  	};

	  	RootModel.prototype.update = function update () {
	  		// noop
	  	};

	  	return RootModel;
	  }(Model));

	  function getComputationSignature ( ractive, key, signature ) {
	  	var getter;
	  	var setter;

	  	// useful for debugging
	  	var getterString;
	  	var getterUseStack;
	  	var setterString;

	  	if ( typeof signature === 'function' ) {
	  		getter = bind( signature, ractive );
	  		getterString = signature.toString();
	  		getterUseStack = true;
	  	}

	  	if ( typeof signature === 'string' ) {
	  		getter = createFunctionFromString( signature, ractive );
	  		getterString = signature;
	  	}

	  	if ( typeof signature === 'object' ) {
	  		if ( typeof signature.get === 'string' ) {
	  			getter = createFunctionFromString( signature.get, ractive );
	  			getterString = signature.get;
	  		} else if ( typeof signature.get === 'function' ) {
	  			getter = bind( signature.get, ractive );
	  			getterString = signature.get.toString();
	  			getterUseStack = true;
	  		} else {
	  			fatal( '`%s` computation must have a `get()` method', key );
	  		}

	  		if ( typeof signature.set === 'function' ) {
	  			setter = bind( signature.set, ractive );
	  			setterString = signature.set.toString();
	  		}
	  	}

	  	return {
	  		getter: getter,
	  		setter: setter,
	  		getterString: getterString,
	  		setterString: setterString,
	  		getterUseStack: getterUseStack
	  	};
	  }

	  var constructHook = new Hook( 'construct' );

	  var registryNames$1 = [
	  	'adaptors',
	  	'components',
	  	'decorators',
	  	'easing',
	  	'events',
	  	'interpolators',
	  	'partials',
	  	'transitions'
	  ];

	  var uid = 0;

	  function construct ( ractive, options ) {
	  	if ( Ractive.DEBUG ) welcome();

	  	initialiseProperties( ractive );

	  	// TODO remove this, eventually
	  	defineProperty( ractive, 'data', { get: deprecateRactiveData });

	  	// TODO don't allow `onconstruct` with `new Ractive()`, there's no need for it
	  	constructHook.fire( ractive, options );

	  	// Add registries
	  	registryNames$1.forEach( function ( name ) {
	  		ractive[ name ] = extendObj( create( ractive.constructor[ name ] || null ), options[ name ] );
	  	});

	  	// Create a viewmodel
	  	var viewmodel = new RootModel({
	  		adapt: getAdaptors( ractive, ractive.adapt, options ),
	  		data: dataConfigurator.init( ractive.constructor, ractive, options ),
	  		ractive: ractive
	  	});

	  	ractive.viewmodel = viewmodel;

	  	// Add computed properties
	  	var computed = extendObj( create( ractive.constructor.prototype.computed ), options.computed );

	  	for ( var key in computed ) {
	  		var signature = getComputationSignature( ractive, key, computed[ key ] );
	  		viewmodel.compute( key, signature );
	  	}
	  }

	  function combine$2 ( arrays ) {
	  	var res = [];
	  	var args = res.concat.apply( res, arrays );

	  	var i = args.length;
	  	while ( i-- ) {
	  		if ( !~res.indexOf( args[i] ) ) {
	  			res.unshift( args[i] );
	  		}
	  	}

	  	return res;
	  }

	  function getAdaptors ( ractive, protoAdapt, options ) {
	  	protoAdapt = protoAdapt.map( lookup );
	  	var adapt = ensureArray( options.adapt ).map( lookup );

	  	var builtins = [];
	  	var srcs = [ protoAdapt, adapt ];
	  	if ( ractive.parent && !ractive.isolated ) {
	  		srcs.push( ractive.parent.viewmodel.adaptors );
	  	}
	  	srcs.push( builtins );

	  	var magic = 'magic' in options ? options.magic : ractive.magic;
	  	var modifyArrays = 'modifyArrays' in options ? options.modifyArrays : ractive.modifyArrays;

	  	if ( magic ) {
	  		if ( !magicSupported ) {
	  			throw new Error( 'Getters and setters (magic mode) are not supported in this browser' );
	  		}

	  		if ( modifyArrays ) {
	  			builtins.push( magicArrayAdaptor );
	  		}

	  		builtins.push( magicAdaptor$1 );
	  	}

	  	if ( modifyArrays ) {
	  		builtins.push( arrayAdaptor );
	  	}

	  	return combine$2( srcs );


	  	function lookup ( adaptor ) {
	  		if ( typeof adaptor === 'string' ) {
	  			adaptor = findInViewHierarchy( 'adaptors', ractive, adaptor );

	  			if ( !adaptor ) {
	  				fatal( missingPlugin( adaptor, 'adaptor' ) );
	  			}
	  		}

	  		return adaptor;
	  	}
	  }

	  function initialiseProperties ( ractive ) {
	  	// Generate a unique identifier, for places where you'd use a weak map if it
	  	// existed
	  	ractive._guid = 'r-' + uid++;

	  	// events
	  	ractive._subs = create( null );

	  	// storage for item configuration from instantiation to reset,
	  	// like dynamic functions or original values
	  	ractive._config = {};

	  	// nodes registry
	  	ractive.nodes = {};

	  	// events
	  	ractive.event = null;
	  	ractive._eventQueue = [];

	  	// live queries
	  	ractive._liveQueries = [];
	  	ractive._liveComponentQueries = [];

	  	// observers
	  	ractive._observers = [];

	  	if(!ractive.component){
	  		ractive.root = ractive;
	  		ractive.parent = ractive.container = null; // TODO container still applicable?
	  	}

	  }

	  function deprecateRactiveData () {
	  	throw new Error( 'Using `ractive.data` is no longer supported - you must use the `ractive.get()` API instead' );
	  }

	  function getChildQueue ( queue, ractive ) {
	  	return queue[ ractive._guid ] || ( queue[ ractive._guid ] = [] );
	  }

	  function fire ( hookQueue, ractive ) {
	  	var childQueue = getChildQueue( hookQueue.queue, ractive );

	  	hookQueue.hook.fire( ractive );

	  	// queue is "live" because components can end up being
	  	// added while hooks fire on parents that modify data values.
	  	while ( childQueue.length ) {
	  		fire( hookQueue, childQueue.shift() );
	  	}

	  	delete hookQueue.queue[ ractive._guid ];
	  }

	  var HookQueue = function HookQueue ( event ) {
	  	this.hook = new Hook( event );
	  	this.inProcess = {};
	  	this.queue = {};
	  };

	  HookQueue.prototype.begin = function begin ( ractive ) {
	  	this.inProcess[ ractive._guid ] = true;
	  };

	  HookQueue.prototype.end = function end ( ractive ) {
	  	var parent = ractive.parent;

	  	// If this is *isn't* a child of a component that's in process,
	  	// it should call methods or fire at this point
	  	if ( !parent || !this.inProcess[ parent._guid ] ) {
	  		fire( this, ractive );
	  	}
	  	// elsewise, handoff to parent to fire when ready
	  	else {
	  		getChildQueue( this.queue, parent ).push( ractive );
	  	}

	  	delete this.inProcess[ ractive._guid ];
	  };

	  var configHook = new Hook( 'config' );
	  var initHook = new HookQueue( 'init' );

	  function initialise ( ractive, userOptions, options ) {
	  	Object.keys( ractive.viewmodel.computations ).forEach( function ( key ) {
	  		var computation = ractive.viewmodel.computations[ key ];

	  		if ( ractive.viewmodel.value.hasOwnProperty( key ) ) {
	  			computation.set( ractive.viewmodel.value[ key ] );
	  		}
	  	});

	  	// init config from Parent and options
	  	config.init( ractive.constructor, ractive, userOptions );

	  	configHook.fire( ractive );
	  	initHook.begin( ractive );

	  	var fragment;

	  	// Render virtual DOM
	  	if ( ractive.template ) {
	  		var cssIds;

	  		if ( options.cssIds || ractive.cssId ) {
	  			cssIds = options.cssIds ? options.cssIds.slice() : [];

	  			if ( ractive.cssId ) {
	  				cssIds.push( ractive.cssId );
	  			}
	  		}

	  		ractive.fragment = fragment = new Fragment({
	  			owner: ractive,
	  			template: ractive.template,
	  			cssIds: cssIds
	  		}).bind( ractive.viewmodel );
	  	}

	  	initHook.end( ractive );

	  	if ( fragment ) {
	  		// render automatically ( if `el` is specified )
	  		var el = getElement( ractive.el );
	  		if ( el ) {
	  			var promise = ractive.render( el, ractive.append );

	  			if ( Ractive.DEBUG_PROMISES ) {
	  				promise['catch']( function ( err ) {
	  					warnOnceIfDebug( 'Promise debugging is enabled, to help solve errors that happen asynchronously. Some browsers will log unhandled promise rejections, in which case you can safely disable promise debugging:\n  Ractive.DEBUG_PROMISES = false;' );
	  					warnIfDebug( 'An error happened during rendering', { ractive: ractive });
	  					logIfDebug( err );

	  					throw err;
	  				});
	  			}
	  		}
	  	}
	  }

	  var DOMEvent = function DOMEvent ( name, owner ) {
	  	if ( name.indexOf( '*' ) !== -1 ) {
	  		fatal( ("Only component proxy-events may contain \"*\" wildcards, <" + (owner.name) + " on-" + name + "=\"...\"/> is not valid") );
	  	}

	  	this.name = name;
	  	this.owner = owner;
	  	this.node = null;
	  	this.handler = null;
	  };

	  DOMEvent.prototype.listen = function listen ( directive ) {
	  	var node = this.node = this.owner.node;
	  	var name = this.name;

	  	if ( !( ("on" + name) in node ) ) {
	  		warnOnce( missingPlugin( name, 'events' ) );
	  		}

	  		node.addEventListener( name, this.handler = function( event ) {
	  		directive.fire({
	  				node: node,
	  			original: event
	  			});
	  		}, false );
	  };

	  DOMEvent.prototype.unlisten = function unlisten () {
	  	this.node.removeEventListener( this.name, this.handler, false );
	  };

	  var CustomEvent = function CustomEvent ( eventPlugin, owner ) {
	  	this.eventPlugin = eventPlugin;
	  	this.owner = owner;
	  	this.handler = null;
	  };

	  CustomEvent.prototype.listen = function listen ( directive ) {
	  	var node = this.owner.node;

	  	this.handler = this.eventPlugin( node, function ( event ) {
	  		if ( event === void 0 ) event = {};

	  			event.node = event.node || node;
	  		directive.fire( event );
	  	});
	  };

	  CustomEvent.prototype.unlisten = function unlisten () {
	  	this.handler.teardown();
	  };

	  var RactiveEvent = function RactiveEvent ( ractive, name ) {
	  	this.ractive = ractive;
	  	this.name = name;
	  	this.handler = null;
	  };

	  RactiveEvent.prototype.listen = function listen ( directive ) {
	  	var ractive = this.ractive;

	  	this.handler = ractive.on( this.name, function () {
	  		var event;

	  		// semi-weak test, but what else? tag the event obj ._isEvent ?
	  		if ( arguments.length && arguments[0] && arguments[0].node ) {
	  			event = Array.prototype.shift.call( arguments );
	  			event.component = ractive;
	  		}

	  		var args = Array.prototype.slice.call( arguments );
	  		directive.fire( event, args );

	  		// cancel bubbling
	  		return false;
	  	});
	  };

	  RactiveEvent.prototype.unlisten = function unlisten () {
	  	this.handler.cancel();
	  };

	  var specialPattern = /^(event|arguments)(\..+)?$/;
	  var dollarArgsPattern = /^\$(\d+)(\..+)?$/;

	  var EventDirective = function EventDirective ( options ) {
	  	var this$1 = this;

	  		this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  	this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  	this.template = options.template;
	  	this.parentFragment = options.parentFragment;
	  	this.ractive = options.parentFragment.ractive;

	  	this.events = [];

	  	if ( this.element.type === COMPONENT ) {
	  		this.template.n.split( '-' ).forEach( function ( n ) {
	  			this$1.events.push( new RactiveEvent( this$1.element.instance, n ) );
	  		});
	  	} else {
	  		this.template.n.split( '-' ).forEach( function ( n ) {
	  			var fn = findInViewHierarchy( 'events', this$1.ractive, n );
	  			// we need to pass in "this" in order to get
	  			// access to node when it is created.
	  			this$1.events.push(fn ? new CustomEvent( fn, this$1.element ) : new DOMEvent( n, this$1.element ));
	  		});
	  	}

	  	this.context = null;

	  	// method calls
	  	this.resolvers = null;
	  	this.models = null;

	  	// handler directive
	  	this.action = null;
	  	this.args = null;
	  };

	  EventDirective.prototype.bind = function bind () {
	  	var this$1 = this;

	  		this.context = this.parentFragment.findContext();

	  	var template = this.template.f;

	  	if ( template.x ) {
	  		this.fn = getFunction( template.x.s, template.x.r.length );
	  		this.resolvers = [];
	  		this.models = template.x.r.map( function ( ref, i ) {
	  			var specialMatch = specialPattern.exec( ref );
	  			if ( specialMatch ) {
	  				// on-click="foo(event.node)"
	  				return {
	  					special: specialMatch[1],
	  					keys: specialMatch[2] ? splitKeypathI( specialMatch[2].substr(1) ) : []
	  				};
	  			}

	  			var dollarMatch = dollarArgsPattern.exec( ref );
	  			if ( dollarMatch ) {
	  				// on-click="foo($1)"
	  				return {
	  					special: 'arguments',
	  					keys: [ dollarMatch[1] - 1 ].concat( dollarMatch[2] ? splitKeypathI( dollarMatch[2].substr( 1 ) ) : [] )
	  				};
	  			}

	  			var resolver;

	  			var model = resolveReference( this$1.parentFragment, ref );
	  			if ( !model ) {
	  				resolver = this$1.parentFragment.resolve( ref, function ( model ) {
	  					this$1.models[i] = model;
	  					removeFromArray( this$1.resolvers, resolver );
	  					model.register( this$1 );
	  				});

	  				this$1.resolvers.push( resolver );
	  			} else model.register( this$1 );

	  			return model;
	  		});
	  	}

	  	else {
	  		// TODO deprecate this style of directive
	  		this.action = typeof template === 'string' ? // on-click='foo'
	  			template :
	  			typeof template.n === 'string' ? // on-click='{{dynamic}}'
	  				template.n :
	  				new Fragment({
	  					owner: this,
	  					template: template.n
	  				});

	  		this.args = template.a ? // static arguments
	  			( typeof template.a === 'string' ? [ template.a ] : template.a ) :
	  			template.d ? // dynamic arguments
	  				new Fragment({
	  					owner: this,
	  					template: template.d
	  				}) :
	  				[]; // no arguments
	  	}

	  	if ( this.action && typeof this.action !== 'string' ) this.action.bind();
	  	if ( this.args && template.d ) this.args.bind();
	  };

	  EventDirective.prototype.bubble = function bubble () {
	  	if ( !this.dirty ) {
	  		this.dirty = true;
	  		this.owner.bubble();
	  	}
	  };

	  EventDirective.prototype.destroyed = function destroyed () {
	  	this.events.forEach( function ( e ) { return e.unlisten(); } );
	  };

	  EventDirective.prototype.fire = function fire ( event, passedArgs ) {

	  	// augment event object
	  	if ( passedArgs === void 0 ) passedArgs = [];

	  		if ( event && !event.hasOwnProperty( '_element' ) ) {
	  		   addHelpers( event, this.owner );
	  	}

	  	if ( this.fn ) {
	  		var values = [];

	  		if ( event ) passedArgs.unshift( event );

	  		if ( this.models ) {
	  			this.models.forEach( function ( model ) {
	  				if ( !model ) return values.push( undefined );

	  				if ( model.special ) {
	  					var obj = model.special === 'event' ? event : passedArgs;
	  					var keys = model.keys.slice();

	  					while ( keys.length ) obj = obj[ keys.shift() ];
	  					return values.push( obj );
	  				}

	  				if ( model.wrapper ) {
	  					return values.push( model.wrapperValue );
	  				}

	  				values.push( model.get() );
	  			});
	  		}

	  		// make event available as `this.event`
	  		var ractive = this.ractive;
	  		var oldEvent = ractive.event;

	  		ractive.event = event;
	  		var result = this.fn.apply( ractive, values ).pop();

	  		// Auto prevent and stop if return is explicitly false
	  		if ( result === false ) {
	  			var original = event ? event.original : undefined;
	  			if ( original ) {
	  				original.preventDefault && original.preventDefault();
	  				original.stopPropagation && original.stopPropagation();
	  			} else {
	  				warnOnceIfDebug( ("handler '" + (this.template.n) + "' returned false, but there is no event available to cancel") );
	  			}
	  		}

	  		ractive.event = oldEvent;
	  	}

	  	else {
	  		var action = this.action.toString();
	  		var args = this.template.f.d ? this.args.getArgsList() : this.args;

	  		if ( passedArgs.length ) args = args.concat( passedArgs );

	  		if ( event ) event.name = action;

	  		fireEvent( this.ractive, action, {
	  			event: event,
	  			args: args
	  		});
	  	}
	  };

	  EventDirective.prototype.handleChange = function handleChange () {};

	  EventDirective.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		if ( !this.models ) return;
	  	var idx = this.models.indexOf( previous );

	  	if ( ~idx ) {
	  		this.models.splice( idx, 1, next );
	  		previous.unregister( this );
	  		if ( next ) next.addShuffleTask( function () { return next.register( this$1 ); } );
	  	}
	  };

	  EventDirective.prototype.render = function render () {
	  	// render events after everything else, so they fire after bindings
	  	var this$1 = this;

	  		runloop.scheduleTask( function () { return this$1.events.forEach( function ( e ) { return e.listen( this$1 ); }, true ); } );
	  };

	  EventDirective.prototype.toString = function toString() { return ''; };

	  EventDirective.prototype.unbind = function unbind$1 () {
	  	var this$1 = this;

	  		var template = this.template.f;

	  	if ( template.m ) {
	  		if ( this.resolvers ) this.resolvers.forEach( unbind );
	  		this.resolvers = [];

	  		if ( this.models ) this.models.forEach( function ( m ) {
	  			if ( m.unregister ) m.unregister( this$1 );
	  		});
	  		this.models = null;
	  	}

	  	else {
	  		// TODO this is brittle and non-explicit, fix it
	  		if ( this.action && this.action.unbind ) this.action.unbind();
	  		if ( this.args && this.args.unbind ) this.args.unbind();
	  	}
	  };

	  EventDirective.prototype.unrender = function unrender () {
	  	this.events.forEach( function ( e ) { return e.unlisten(); } );
	  };

	  EventDirective.prototype.update = function update () {
	  	if ( this.method || !this.dirty ) return; // nothing to do

	  	this.dirty = false;

	  	// ugh legacy
	  	if ( this.action && this.action.update ) this.action.update();
	  	if ( this.args && this.args.update ) this.args.update();
	  };

	  // TODO it's unfortunate that this has to run every time a
	  // component is rendered... is there a better way?
	  function updateLiveQueries ( component ) {
	  	// Does this need to be added to any live queries?
	  	var instance = component.ractive;

	  	do {
	  		var liveQueries = instance._liveComponentQueries;

	  		var i = liveQueries.length;
	  		while ( i-- ) {
	  			var name = liveQueries[i];
	  			var query = liveQueries[ ("_" + name) ];

	  			if ( query.test( component ) ) {
	  				query.add( component.instance );
	  				// keep register of applicable selectors, for when we teardown
	  				component.liveQueries.push( query );
	  			}
	  		}
	  	} while ( instance = instance.parent );
	  }

	  function removeFromLiveComponentQueries ( component ) {
	  	var instance = component.ractive;

	  	while ( instance ) {
	  		var query = instance._liveComponentQueries[ ("_" + (component.name)) ];
	  		if ( query ) query.remove( component );

	  		instance = instance.parent;
	  	}
	  }

	  function makeDirty ( query ) {
	  	query.makeDirty();
	  }

	  var teardownHook = new Hook( 'teardown' );

	  var Component = (function (Item) {
	  	function Component ( options, ComponentConstructor ) {
	  		var this$1 = this;

	  		Item.call( this, options );
	  		this.type = COMPONENT; // override ELEMENT from super

	  		var instance = create( ComponentConstructor.prototype );

	  		this.instance = instance;
	  		this.name = options.template.e;
	  		this.parentFragment = options.parentFragment;

	  		this.liveQueries = [];

	  		if ( instance.el ) {
	  			warnIfDebug( ("The <" + (this.name) + "> component has a default 'el' property; it has been disregarded") );
	  		}

	  		var partials = options.template.p || {};
	  		if ( !( 'content' in partials ) ) partials.content = options.template.f || [];
	  		this._partials = partials; // TEMP

	  		this.yielders = {};

	  		// find container
	  		var fragment = options.parentFragment;
	  		var container;
	  		while ( fragment ) {
	  			if ( fragment.owner.type === YIELDER ) {
	  				container = fragment.owner.container;
	  				break;
	  			}

	  			fragment = fragment.parent;
	  		}

	  		// add component-instance-specific properties
	  		instance.parent = this.parentFragment.ractive;
	  		instance.container = container || null;
	  		instance.root = instance.parent.root;
	  		instance.component = this;

	  		construct( this.instance, { partials: partials });

	  		// for hackability, this could be an open option
	  		// for any ractive instance, but for now, just
	  		// for components and just for ractive...
	  		instance._inlinePartials = partials;

	  		this.attributeByName = {};

	  		this.attributes = [];
	  		var leftovers = [];
	  		( this.template.m || [] ).forEach( function ( template ) {
	  			switch ( template.t ) {
	  				case ATTRIBUTE:
	  				case EVENT:
	  				case TRANSITION:
	  					this$1.attributes.push( createItem({
	  						owner: this$1,
	  						parentFragment: this$1.parentFragment,
	  						template: template
	  					}) );
	  					break;

	  				case BINDING_FLAG:
	  				case DECORATOR:
	  					break;

	  				default:
	  					leftovers.push( template );
	  					break;
	  			}
	  		});

	  		this.attributes.push( new ConditionalAttribute({
	  			owner: this,
	  			parentFragment: this.parentFragment,
	  			template: leftovers
	  		}) );

	  		this.eventHandlers = [];
	  		if ( this.template.v ) this.setupEvents();
	  	}

	  	Component.prototype = Object.create( Item && Item.prototype );
	  	Component.prototype.constructor = Component;

	  	Component.prototype.bind = function bind$1$$ () {
	  		this.attributes.forEach( bind$1 );

	  		initialise( this.instance, {
	  			partials: this._partials
	  		}, {
	  			cssIds: this.parentFragment.cssIds
	  		});

	  		this.eventHandlers.forEach( bind$1 );

	  		this.bound = true;
	  	};

	  	Component.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.dirty = true;
	  			this.parentFragment.bubble();
	  		}
	  	};

	  	Component.prototype.checkYielders = function checkYielders () {
	  		var this$1 = this;

	  		Object.keys( this.yielders ).forEach( function ( name ) {
	  			if ( this$1.yielders[ name ].length > 1 ) {
	  				runloop.end();
	  				throw new Error( ("A component template can only have one {{yield" + (name ? ' ' + name : '') + "}} declaration at a time") );
	  			}
	  		});
	  	};

	  	Component.prototype.destroyed = function destroyed () {
	  		if ( this.instance.fragment ) this.instance.fragment.destroyed();
	  	};

	  	Component.prototype.detach = function detach () {
	  		return this.instance.fragment.detach();
	  	};

	  	Component.prototype.find = function find ( selector ) {
	  		return this.instance.fragment.find( selector );
	  	};

	  	Component.prototype.findAll = function findAll ( selector, query ) {
	  		this.instance.fragment.findAll( selector, query );
	  	};

	  	Component.prototype.findComponent = function findComponent ( name ) {
	  		if ( !name || this.name === name ) return this.instance;

	  		if ( this.instance.fragment ) {
	  			return this.instance.fragment.findComponent( name );
	  		}
	  	};

	  	Component.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( query.test( this ) ) {
	  			query.add( this.instance );

	  			if ( query.live ) {
	  				this.liveQueries.push( query );
	  			}
	  		}

	  		this.instance.fragment.findAllComponents( name, query );
	  	};

	  	Component.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.instance.fragment.firstNode( skipParent );
	  	};

	  	Component.prototype.render = function render$1$$ ( target, occupants ) {
	  		render$1( this.instance, target, null, occupants );

	  		this.checkYielders();
	  		this.attributes.forEach( render );
	  		this.eventHandlers.forEach( render );
	  		updateLiveQueries( this );

	  		this.rendered = true;
	  	};

	  	Component.prototype.setupEvents = function setupEvents () {
	  		var this$1 = this;

	  		var handlers = this.eventHandlers;

	  		Object.keys( this.template.v ).forEach( function ( key ) {
	  			var eventNames = key.split( '-' );
	  			var template = this$1.template.v[ key ];

	  			eventNames.forEach( function ( eventName ) {
	  				var event = new RactiveEvent( this$1.instance, eventName );
	  				handlers.push( new EventDirective( this$1, event, template ) );
	  			});
	  		});
	  	};

	  	Component.prototype.shuffled = function shuffled () {
	  		this.liveQueries.forEach( makeDirty );
	  		Item.prototype.shuffled.call(this);
	  	};

	  	Component.prototype.toString = function toString () {
	  		return this.instance.toHTML();
	  	};

	  	Component.prototype.unbind = function unbind$1 () {
	  		this.bound = false;

	  		this.attributes.forEach( unbind );

	  		var instance = this.instance;
	  		instance.viewmodel.teardown();
	  		instance.fragment.unbind();
	  		instance._observers.forEach( cancel );

	  		removeFromLiveComponentQueries( this );

	  		if ( instance.fragment.rendered && instance.el.__ractive_instances__ ) {
	  			removeFromArray( instance.el.__ractive_instances__, instance );
	  		}

	  		teardownHook.fire( instance );
	  	};

	  	Component.prototype.unrender = function unrender$1 ( shouldDestroy ) {
	  		var this$1 = this;

	  		this.rendered = false;

	  		this.shouldDestroy = shouldDestroy;
	  		this.instance.unrender();
	  		this.attributes.forEach( unrender );
	  		this.eventHandlers.forEach( unrender );
	  		this.liveQueries.forEach( function ( query ) { return query.remove( this$1.instance ); } );
	  	};

	  	Component.prototype.update = function update$1 () {
	  		this.dirty = false;
	  		this.instance.fragment.update();
	  		this.checkYielders();
	  		this.attributes.forEach( update );
	  		this.eventHandlers.forEach( update );
	  	};

	  	return Component;
	  }(Item));

	  var missingDecorator = {
	  	update: noop,
	  	teardown: noop
	  };

	  var Decorator = function Decorator ( options ) {
	  	this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  	this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  	this.parentFragment = this.owner.parentFragment;
	  	this.ractive = this.owner.ractive;
	  	var template = this.template = options.template;

	  	this.dynamicName = typeof template.f.n === 'object';
	  	this.dynamicArgs = !!template.f.d;

	  	if ( this.dynamicName ) {
	  		this.nameFragment = new Fragment({
	  			owner: this,
	  			template: template.f.n
	  		});
	  	} else {
	  		this.name = template.f.n || template.f;
	  	}

	  	if ( this.dynamicArgs ) {
	  		this.argsFragment = new Fragment({
	  			owner: this,
	  			template: template.f.d
	  		});
	  	} else {
	  		if ( template.f.a && template.f.a.s ) {
	  			this.args = [];
	  		} else {
	  			this.args = template.f.a || [];
	  		}
	  	}

	  	this.node = null;
	  	this.intermediary = null;

	  	this.element.decorators.push( this );
	  };

	  Decorator.prototype.bind = function bind () {
	  	var this$1 = this;

	  		if ( this.dynamicName ) {
	  		this.nameFragment.bind();
	  		this.name = this.nameFragment.toString();
	  	}

	  	if ( this.dynamicArgs ) this.argsFragment.bind();

	  	// TODO: dry this up once deprecation is done
	  	if ( this.template.f.a && this.template.f.a.s ) {
	  		this.resolvers = [];
	  		this.models = this.template.f.a.r.map( function ( ref, i ) {
	  			var resolver;
	  			var model = resolveReference( this$1.parentFragment, ref );
	  			if ( !model ) {
	  				resolver = this$1.parentFragment.resolve( ref, function ( model ) {
	  					this$1.models[i] = model;
	  					removeFromArray( this$1.resolvers, resolver );
	  					model.register( this$1 );
	  				});

	  				this$1.resolvers.push( resolver );
	  			} else model.register( this$1 );

	  			return model;
	  		});
	  		this.argsFn = getFunction( this.template.f.a.s, this.template.f.a.r.length );
	  	}
	  };

	  Decorator.prototype.bubble = function bubble () {
	  	if ( !this.dirty ) {
	  		this.dirty = true;
	  		this.owner.bubble();
	  	}
	  };

	  Decorator.prototype.destroyed = function destroyed () {
	  	if ( this.intermediary ) this.intermediary.teardown();
	  };

	  Decorator.prototype.handleChange = function handleChange () { this.bubble(); };

	  Decorator.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  	var idx = this.models.indexOf( previous );
	  	if ( !~idx ) return;

	  	next = rebindMatch( this.template.f.a.r[ idx ], next, previous );
	  	if ( next === previous ) return;

	  	previous.unregister( this );
	  	this.models.splice( idx, 1, next );
	  	if ( next ) next.addShuffleRegister( this, 'mark' );

	  	if ( !safe ) this.bubble();
	  };

	  Decorator.prototype.render = function render () {
	  	var this$1 = this;

	  		runloop.scheduleTask( function () {
	  		var fn = findInViewHierarchy( 'decorators', this$1.ractive, this$1.name );

	  		if ( !fn ) {
	  			warnOnce( missingPlugin( this$1.name, 'decorator' ) );
	  			this$1.intermediary = missingDecorator;
	  			return;
	  		}

	  		this$1.node = this$1.element.node;

	  		var args;
	  		if ( this$1.argsFn ) {
	  			args = this$1.models.map( function ( model ) {
	  				if ( !model ) return undefined;

	  				return model.get();
	  			});
	  			args = this$1.argsFn.apply( this$1.ractive, args );
	  		} else {
	  			args = this$1.dynamicArgs ? this$1.argsFragment.getArgsList() : this$1.args;
	  		}

	  		this$1.intermediary = fn.apply( this$1.ractive, [ this$1.node ].concat( args ) );

	  		if ( !this$1.intermediary || !this$1.intermediary.teardown ) {
	  			throw new Error( ("The '" + (this$1.name) + "' decorator must return an object with a teardown method") );
	  		}
	  	}, true );
	  	this.rendered = true;
	  };

	  Decorator.prototype.toString = function toString () { return ''; };

	  Decorator.prototype.unbind = function unbind$1 () {
	  	var this$1 = this;

	  		if ( this.dynamicName ) this.nameFragment.unbind();
	  	if ( this.dynamicArgs ) this.argsFragment.unbind();
	  	if ( this.resolvers ) this.resolvers.forEach( unbind );
	  	if ( this.models ) this.models.forEach( function ( m ) {
	  		if ( m ) m.unregister( this$1 );
	  	});
	  };

	  Decorator.prototype.unrender = function unrender ( shouldDestroy ) {
	  	if ( ( !shouldDestroy || this.element.rendered ) && this.intermediary ) this.intermediary.teardown();
	  	this.rendered = false;
	  };

	  Decorator.prototype.update = function update () {
	  	if ( !this.dirty ) return;

	  	this.dirty = false;

	  	var nameChanged = false;

	  	if ( this.dynamicName && this.nameFragment.dirty ) {
	  		var name = this.nameFragment.toString();
	  		nameChanged = name !== this.name;
	  		this.name = name;
	  	}

	  	if ( this.intermediary ) {
	  		if ( nameChanged || !this.intermediary.update ) {
	  			this.unrender();
	  			this.render();
	  		}
	  		else {
	  			if ( this.dynamicArgs ) {
	  				if ( this.argsFragment.dirty ) {
	  					var args = this.argsFragment.getArgsList();
	  					this.intermediary.update.apply( this.ractive, args );
	  				}
	  			}
	  			else if ( this.argsFn ) {
	  				var args$1 = this.models.map( function ( model ) {
	  					if ( !model ) return undefined;

	  					return model.get();
	  				});
	  				this.intermediary.update.apply( this.ractive, this.argsFn.apply( this.ractive, args$1 ) );
	  			}
	  			else {
	  				this.intermediary.update.apply( this.ractive, this.args );
	  			}
	  		}
	  	}

	  	// need to run these for unrender/render cases
	  	// so can't just be in conditional if above

	  	if ( this.dynamicName && this.nameFragment.dirty ) {
	  		this.nameFragment.update();
	  	}

	  	if ( this.dynamicArgs && this.argsFragment.dirty ) {
	  		this.argsFragment.update();
	  	}
	  };

	  var Doctype = (function (Item) {
	  	function Doctype () {
	  		Item.apply(this, arguments);
	  	}

	  	Doctype.prototype = Object.create( Item && Item.prototype );
	  	Doctype.prototype.constructor = Doctype;

	  	Doctype.prototype.bind = function bind () {
	  		// noop
	  	};

	  	Doctype.prototype.render = function render () {
	  		// noop
	  	};

	  	Doctype.prototype.teardown = function teardown () {
	  		// noop
	  	};

	  	Doctype.prototype.toString = function toString () {
	  		return '<!DOCTYPE' + this.template.a + '>';
	  	};

	  	Doctype.prototype.unbind = function unbind () {
	  		// noop
	  	};

	  	Doctype.prototype.unrender = function unrender () {
	  		// noop
	  	};

	  	Doctype.prototype.update = function update () {
	  		// noop
	  	};

	  	return Doctype;
	  }(Item));

	  function updateLiveQueries$1 ( element ) {
	  	// Does this need to be added to any live queries?
	  	var node = element.node;
	  	var instance = element.ractive;

	  	do {
	  		var liveQueries = instance._liveQueries;

	  		var i = liveQueries.length;
	  		while ( i-- ) {
	  			var selector = liveQueries[i];
	  			var query = liveQueries[ ("_" + selector) ];

	  			if ( query.test( node ) ) {
	  				query.add( node );
	  				// keep register of applicable selectors, for when we teardown
	  				element.liveQueries.push( query );
	  			}
	  		}
	  	} while ( instance = instance.parent );
	  }

	  function warnAboutAmbiguity ( description, ractive ) {
	  	warnOnceIfDebug( ("The " + description + " being used for two-way binding is ambiguous, and may cause unexpected results. Consider initialising your data to eliminate the ambiguity"), { ractive: ractive });
	  }

	  var Binding = function Binding ( element, name ) {
	  	if ( name === void 0 ) name = 'value';

	  		this.element = element;
	  	this.ractive = element.ractive;
	  	this.attribute = element.attributeByName[ name ];

	  	var interpolator = this.attribute.interpolator;
	  	interpolator.twowayBinding = this;

	  	var model = interpolator.model;

	  	// not bound?
	  	if ( !model ) {
	  		// try to force resolution
	  		interpolator.resolver.forceResolution();
	  		model = interpolator.model;

	  		warnAboutAmbiguity( ("'" + (interpolator.template.r) + "' reference"), this.ractive );
	  		}

	  		else if ( model.isUnresolved ) {
	  			// reference expressions (e.g. foo[bar])
	  			model.forceResolution();
	  			warnAboutAmbiguity( 'expression', this.ractive );
	  	}

	  	// TODO include index/key/keypath refs as read-only
	  	else if ( model.isReadonly ) {
	  		var keypath = model.getKeypath().replace( /^@/, '' );
	  		warnOnceIfDebug( ("Cannot use two-way binding on <" + (element.name) + "> element: " + keypath + " is read-only. To suppress this warning use <" + (element.name) + " twoway='false'...>"), { ractive: this.ractive });
	  		return false;
	  	}

	  	this.attribute.isTwoway = true;
	  	this.model = model;

	  	// initialise value, if it's undefined
	  	var value = model.get();
	  	this.wasUndefined = value === undefined;

	  	if ( value === undefined && this.getInitialValue ) {
	  		value = this.getInitialValue();
	  		model.set( value );
	  	}
	  	this.lastVal( true, value );

	  	var parentForm = findElement( this.element, false, 'form' );
	  	if ( parentForm ) {
	  		this.resetValue = value;
	  		parentForm.formBindings.push( this );
	  	}
	  };

	  Binding.prototype.bind = function bind () {
	  	this.model.registerTwowayBinding( this );
	  };

	  Binding.prototype.handleChange = function handleChange () {
	  	var this$1 = this;

	  		var value = this.getValue();
	  	if ( this.lastVal() === value ) return;

	  	runloop.start( this.root );
	  	this.attribute.locked = true;
	  	this.model.set( value );
	  	this.lastVal( true, value );

	  	// if the value changes before observers fire, unlock to be updatable cause something weird and potentially freezy is up
	  	if ( this.model.get() !== value ) this.attribute.locked = false;
	  	else runloop.scheduleTask( function () { return this$1.attribute.locked = false; } );

	  	runloop.end();
	  };

	  Binding.prototype.lastVal = function lastVal ( setting, value ) {
	  	if ( setting ) this.lastValue = value;
	  	else return this.lastValue;
	  };

	  Binding.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		if ( this.model && this.model === previous ) previous.unregisterTwowayBinding( this );
	  	if ( next ) {
	  		this.model = next;
	  		runloop.scheduleTask( function () { return next.registerTwowayBinding( this$1 ); } );
	  	}
	  };

	  Binding.prototype.render = function render () {
	  	this.node = this.element.node;
	  	this.node._ractive.binding = this;
	  	this.rendered = true; // TODO is this used anywhere?
	  };

	  	Binding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.value );
	  };

	  Binding.prototype.unbind = function unbind () {
	  	this.model.unregisterTwowayBinding( this );
	  };

	  Binding.prototype.unrender = function unrender () {
	  		// noop?
	  	};

	  // This is the handler for DOM events that would lead to a change in the model
	  // (i.e. change, sometimes, input, and occasionally click and keyup)
	  function handleDomEvent () {
	  	this._ractive.binding.handleChange();
	  }

	  var CheckboxBinding = (function (Binding) {
	  	function CheckboxBinding ( element ) {
	  		Binding.call( this, element, 'checked' );
	  	}

	  	CheckboxBinding.prototype = Object.create( Binding && Binding.prototype );
	  	CheckboxBinding.prototype.constructor = CheckboxBinding;

	  	CheckboxBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		this.node.addEventListener( 'change', handleDomEvent, false );

	  		if ( this.node.attachEvent ) {
	  			this.node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	CheckboxBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  		this.node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	CheckboxBinding.prototype.getInitialValue = function getInitialValue () {
	  		return !!this.element.getAttribute( 'checked' );
	  	};

	  	CheckboxBinding.prototype.getValue = function getValue () {
	  		return this.node.checked;
	  	};

	  	CheckboxBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.checked );
	  	};

	  	return CheckboxBinding;
	  }(Binding));

	  function getBindingGroup ( group, model, getValue ) {
	  	var hash = "" + group + "-bindingGroup";
	  	return model[hash] || ( model[ hash ] = new BindingGroup( hash, model, getValue ) );
	  }

	  var BindingGroup = function BindingGroup ( hash, model, getValue ) {
	  	var this$1 = this;

	  		this.model = model;
	  	this.hash = hash;
	  	this.getValue = function () {
	  		this$1.value = getValue.call(this$1);
	  		return this$1.value;
	  	};

	  	this.bindings = [];
	  };

	  BindingGroup.prototype.add = function add ( binding ) {
	  	this.bindings.push( binding );
	  };

	  BindingGroup.prototype.bind = function bind () {
	  	this.value = this.model.get();
	  	this.model.registerTwowayBinding( this );
	  	this.bound = true;
	  };

	  BindingGroup.prototype.remove = function remove ( binding ) {
	  	removeFromArray( this.bindings, binding );
	  	if ( !this.bindings.length ) {
	  		this.unbind();
	  	}
	  };

	  BindingGroup.prototype.unbind = function unbind () {
	  	this.model.unregisterTwowayBinding( this );
	  	this.bound = false;
	  	delete this.model[this.hash];
	  };

	  var push$2 = [].push;

	  function getValue() {
	  	var all = this.bindings.filter(function ( b ) { return b.node && b.node.checked; }).map(function ( b ) { return b.element.getAttribute( 'value' ); });
	  	var res = [];
	  	all.forEach(function ( v ) { if ( !arrayContains( res, v ) ) res.push( v ); });
	  	return res;
	  }

	  var CheckboxNameBinding = (function (Binding) {
	  	function CheckboxNameBinding ( element ) {
	  		Binding.call( this, element, 'name' );

	  		this.checkboxName = true; // so that ractive.updateModel() knows what to do with this

	  		// Each input has a reference to an array containing it and its
	  		// group, as two-way binding depends on being able to ascertain
	  		// the status of all inputs within the group
	  		this.group = getBindingGroup( 'checkboxes', this.model, getValue );
	  		this.group.add( this );

	  		if ( this.noInitialValue ) {
	  			this.group.noInitialValue = true;
	  		}

	  		// If no initial value was set, and this input is checked, we
	  		// update the model
	  		if ( this.group.noInitialValue && this.element.getAttribute( 'checked' ) ) {
	  			var existingValue = this.model.get();
	  			var bindingValue = this.element.getAttribute( 'value' );

	  			if ( !arrayContains( existingValue, bindingValue ) ) {
	  				push$2.call( existingValue, bindingValue ); // to avoid triggering runloop with array adaptor
	  			}
	  		}
	  	}

	  	CheckboxNameBinding.prototype = Object.create( Binding && Binding.prototype );
	  	CheckboxNameBinding.prototype.constructor = CheckboxNameBinding;

	  	CheckboxNameBinding.prototype.bind = function bind () {
	  		if ( !this.group.bound ) {
	  			this.group.bind();
	  		}
	  	};

	  	CheckboxNameBinding.prototype.changed = function changed () {
	  		var wasChecked = !!this.isChecked;
	  		this.isChecked = this.node.checked;
	  		return this.isChecked === wasChecked;
	  	};

	  	CheckboxNameBinding.prototype.getInitialValue = function getInitialValue () {
	  		// This only gets called once per group (of inputs that
	  		// share a name), because it only gets called if there
	  		// isn't an initial value. By the same token, we can make
	  		// a note of that fact that there was no initial value,
	  		// and populate it using any `checked` attributes that
	  		// exist (which users should avoid, but which we should
	  		// support anyway to avoid breaking expectations)
	  		this.noInitialValue = true; // TODO are noInitialValue and wasUndefined the same thing?
	  		return [];
	  	};

	  	CheckboxNameBinding.prototype.getValue = function getValue$1 () {
	  		return this.group.value;
	  	};

	  	CheckboxNameBinding.prototype.handleChange = function handleChange () {
	  		this.isChecked = this.element.node.checked;
	  		this.group.value = this.model.get();
	  		var value = this.element.getAttribute( 'value' );
	  		if ( this.isChecked && !arrayContains( this.group.value, value ) ) {
	  			this.group.value.push( value );
	  		} else if ( !this.isChecked && arrayContains( this.group.value, value ) ) {
	  			removeFromArray( this.group.value, value );
	  		}
	  		// make sure super knows there's a change
	  		this.lastValue = null;
	  		Binding.prototype.handleChange.call(this);
	  	};

	  	CheckboxNameBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		var node = this.node;

	  		var existingValue = this.model.get();
	  		var bindingValue = this.element.getAttribute( 'value' );

	  		if ( isArray( existingValue ) ) {
	  			this.isChecked = arrayContains( existingValue, bindingValue );
	  		} else {
	  			this.isChecked = existingValue == bindingValue;
	  		}

	  		node.name = '{{' + this.model.getKeypath() + '}}';
	  		node.checked = this.isChecked;

	  		node.addEventListener( 'change', handleDomEvent, false );

	  		// in case of IE emergency, bind to click event as well
	  		if ( node.attachEvent ) {
	  			node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	CheckboxNameBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.group.bindings.forEach( function ( binding ) { return binding.wasUndefined = true; } );

	  		if ( node.checked ) {
	  			var valueSoFar = this.group.getValue();
	  			valueSoFar.push( this.element.getAttribute( 'value' ) );

	  			this.group.model.set( valueSoFar );
	  		}
	  	};

	  	CheckboxNameBinding.prototype.unbind = function unbind () {
	  		this.group.remove( this );
	  	};

	  	CheckboxNameBinding.prototype.unrender = function unrender () {
	  		var node = this.element.node;

	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	return CheckboxNameBinding;
	  }(Binding));

	  var ContentEditableBinding = (function (Binding) {
	  	function ContentEditableBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	ContentEditableBinding.prototype = Object.create( Binding && Binding.prototype );
	  	ContentEditableBinding.prototype.constructor = ContentEditableBinding;

	  	ContentEditableBinding.prototype.getInitialValue = function getInitialValue () {
	  		return this.element.fragment ? this.element.fragment.toString() : '';
	  	};

	  	ContentEditableBinding.prototype.getValue = function getValue () {
	  		return this.element.node.innerHTML;
	  	};

	  	ContentEditableBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		var node = this.node;

	  		node.addEventListener( 'change', handleDomEvent, false );
	  		node.addEventListener( 'blur', handleDomEvent, false );

	  		if ( !this.ractive.lazy ) {
	  			node.addEventListener( 'input', handleDomEvent, false );

	  			if ( node.attachEvent ) {
	  				node.addEventListener( 'keyup', handleDomEvent, false );
	  			}
	  		}
	  	};

	  	ContentEditableBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.innerHTML );
	  	};

	  	ContentEditableBinding.prototype.unrender = function unrender () {
	  		var node = this.node;

	  		node.removeEventListener( 'blur', handleDomEvent, false );
	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'input', handleDomEvent, false );
	  		node.removeEventListener( 'keyup', handleDomEvent, false );
	  	};

	  	return ContentEditableBinding;
	  }(Binding));

	  function handleBlur () {
	  	handleDomEvent.call( this );

	  	var value = this._ractive.binding.model.get();
	  	this.value = value == undefined ? '' : value;
	  }

	  function handleDelay ( delay ) {
	  	var timeout;

	  	return function () {
	  		var this$1 = this;

	  		if ( timeout ) clearTimeout( timeout );

	  		timeout = setTimeout( function () {
	  			var binding = this$1._ractive.binding;
	  			if ( binding.rendered ) handleDomEvent.call( this$1 );
	  			timeout = null;
	  		}, delay );
	  	};
	  }

	  var GenericBinding = (function (Binding) {
	  	function GenericBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	GenericBinding.prototype = Object.create( Binding && Binding.prototype );
	  	GenericBinding.prototype.constructor = GenericBinding;

	  	GenericBinding.prototype.getInitialValue = function getInitialValue () {
	  		return '';
	  	};

	  	GenericBinding.prototype.getValue = function getValue () {
	  		return this.node.value;
	  	};

	  	GenericBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		// any lazy setting for this element overrides the root
	  		// if the value is a number, it's a timeout
	  		var lazy = this.ractive.lazy;
	  		var timeout = false;

	  		if ( 'lazy' in this.element ) {
	  			lazy = this.element.lazy;
	  		}

	  		if ( isNumeric( lazy ) ) {
	  			timeout = +lazy;
	  			lazy = false;
	  		}

	  		this.handler = timeout ? handleDelay( timeout ) : handleDomEvent;

	  		var node = this.node;

	  		node.addEventListener( 'change', handleDomEvent, false );

	  		if ( !lazy ) {
	  			node.addEventListener( 'input', this.handler, false );

	  			if ( node.attachEvent ) {
	  				node.addEventListener( 'keyup', this.handler, false );
	  			}
	  		}

	  		node.addEventListener( 'blur', handleBlur, false );
	  	};

	  	GenericBinding.prototype.unrender = function unrender () {
	  		var node = this.element.node;
	  		this.rendered = false;

	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'input', this.handler, false );
	  		node.removeEventListener( 'keyup', this.handler, false );
	  		node.removeEventListener( 'blur', handleBlur, false );
	  	};

	  	return GenericBinding;
	  }(Binding));

	  var FileBinding = (function (GenericBinding) {
	  	function FileBinding () {
	  		GenericBinding.apply(this, arguments);
	  	}

	  	FileBinding.prototype = Object.create( GenericBinding && GenericBinding.prototype );
	  	FileBinding.prototype.constructor = FileBinding;

	  	FileBinding.prototype.getInitialValue = function getInitialValue () {
	  		return undefined;
	  	};

	  	FileBinding.prototype.getValue = function getValue () {
	  		return this.node.files;
	  	};

	  	FileBinding.prototype.render = function render () {
	  		this.element.lazy = false;
	  		GenericBinding.prototype.render.call(this);
	  	};

	  	FileBinding.prototype.setFromNode = function setFromNode( node ) {
	  		this.model.set( node.files );
	  	};

	  	return FileBinding;
	  }(GenericBinding));

	  function getSelectedOptions ( select ) {
	      return select.selectedOptions
	  		? toArray( select.selectedOptions )
	  		: select.options
	  			? toArray( select.options ).filter( function ( option ) { return option.selected; } )
	  			: [];
	  }

	  var MultipleSelectBinding = (function (Binding) {
	  	function MultipleSelectBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	MultipleSelectBinding.prototype = Object.create( Binding && Binding.prototype );
	  	MultipleSelectBinding.prototype.constructor = MultipleSelectBinding;

	  	MultipleSelectBinding.prototype.forceUpdate = function forceUpdate () {
	  		var this$1 = this;

	  		var value = this.getValue();

	  		if ( value !== undefined ) {
	  			this.attribute.locked = true;
	  			runloop.scheduleTask( function () { return this$1.attribute.locked = false; } );
	  			this.model.set( value );
	  		}
	  	};

	  	MultipleSelectBinding.prototype.getInitialValue = function getInitialValue () {
	  		return this.element.options
	  			.filter( function ( option ) { return option.getAttribute( 'selected' ); } )
	  			.map( function ( option ) { return option.getAttribute( 'value' ); } );
	  	};

	  	MultipleSelectBinding.prototype.getValue = function getValue () {
	  		var options = this.element.node.options;
	  		var len = options.length;

	  		var selectedValues = [];

	  		for ( var i = 0; i < len; i += 1 ) {
	  			var option = options[i];

	  			if ( option.selected ) {
	  				var optionValue = option._ractive ? option._ractive.value : option.value;
	  				selectedValues.push( optionValue );
	  			}
	  		}

	  		return selectedValues;
	  	};

	  	MultipleSelectBinding.prototype.handleChange = function handleChange () {
	  		var attribute = this.attribute;
	  		var previousValue = attribute.getValue();

	  		var value = this.getValue();

	  		if ( previousValue === undefined || !arrayContentsMatch( value, previousValue ) ) {
	  			Binding.prototype.handleChange.call(this);
	  		}

	  		return this;
	  	};

	  	MultipleSelectBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		this.node.addEventListener( 'change', handleDomEvent, false );

	  		if ( this.model.get() === undefined ) {
	  			// get value from DOM, if possible
	  			this.handleChange();
	  		}
	  	};

	  	MultipleSelectBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		var selectedOptions = getSelectedOptions( node );
	  		var i = selectedOptions.length;
	  		var result = new Array( i );

	  		while ( i-- ) {
	  			var option = selectedOptions[i];
	  			result[i] = option._ractive ? option._ractive.value : option.value;
	  		}

	  		this.model.set( result );
	  	};

	  	MultipleSelectBinding.prototype.setValue = function setValue () {
	  		throw new Error( 'TODO not implemented yet' );
	  	};

	  	MultipleSelectBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  	};

	  	MultipleSelectBinding.prototype.updateModel = function updateModel () {
	  		if ( this.attribute.value === undefined || !this.attribute.value.length ) {
	  			this.keypath.set( this.initialValue );
	  		}
	  	};

	  	return MultipleSelectBinding;
	  }(Binding));

	  var NumericBinding = (function (GenericBinding) {
	  	function NumericBinding () {
	  		GenericBinding.apply(this, arguments);
	  	}

	  	NumericBinding.prototype = Object.create( GenericBinding && GenericBinding.prototype );
	  	NumericBinding.prototype.constructor = NumericBinding;

	  	NumericBinding.prototype.getInitialValue = function getInitialValue () {
	  		return undefined;
	  	};

	  	NumericBinding.prototype.getValue = function getValue () {
	  		var value = parseFloat( this.node.value );
	  		return isNaN( value ) ? undefined : value;
	  	};

	  	NumericBinding.prototype.setFromNode = function setFromNode( node ) {
	  		var value = parseFloat( node.value );
	  		if ( !isNaN( value ) ) this.model.set( value );
	  	};

	  	return NumericBinding;
	  }(GenericBinding));

	  var siblings = {};

	  function getSiblings ( hash ) {
	  	return siblings[ hash ] || ( siblings[ hash ] = [] );
	  }

	  var RadioBinding = (function (Binding) {
	  	function RadioBinding ( element ) {
	  		Binding.call( this, element, 'checked' );

	  		this.siblings = getSiblings( this.ractive._guid + this.element.getAttribute( 'name' ) );
	  		this.siblings.push( this );
	  	}

	  	RadioBinding.prototype = Object.create( Binding && Binding.prototype );
	  	RadioBinding.prototype.constructor = RadioBinding;

	  	RadioBinding.prototype.getValue = function getValue () {
	  		return this.node.checked;
	  	};

	  	RadioBinding.prototype.handleChange = function handleChange () {
	  		runloop.start( this.root );

	  		this.siblings.forEach( function ( binding ) {
	  			binding.model.set( binding.getValue() );
	  		});

	  		runloop.end();
	  	};

	  	RadioBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		this.node.addEventListener( 'change', handleDomEvent, false );

	  		if ( this.node.attachEvent ) {
	  			this.node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	RadioBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.checked );
	  	};

	  	RadioBinding.prototype.unbind = function unbind () {
	  		removeFromArray( this.siblings, this );
	  	};

	  	RadioBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  		this.node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	return RadioBinding;
	  }(Binding));

	  function getValue$1() {
	  	var checked = this.bindings.filter( function ( b ) { return b.node.checked; } );
	  	if ( checked.length > 0 ) {
	  		return checked[0].element.getAttribute( 'value' );
	  	}
	  }

	  var RadioNameBinding = (function (Binding) {
	  	function RadioNameBinding ( element ) {
	  		Binding.call( this, element, 'name' );

	  		this.group = getBindingGroup( 'radioname', this.model, getValue$1 );
	  		this.group.add( this );

	  		if ( element.checked ) {
	  			this.group.value = this.getValue();
	  		}
	  	}

	  	RadioNameBinding.prototype = Object.create( Binding && Binding.prototype );
	  	RadioNameBinding.prototype.constructor = RadioNameBinding;

	  	RadioNameBinding.prototype.bind = function bind () {
	  		var this$1 = this;

	  		if ( !this.group.bound ) {
	  			this.group.bind();
	  		}

	  		// update name keypath when necessary
	  		this.nameAttributeBinding = {
	  			handleChange: function () { return this$1.node.name = "{{" + (this$1.model.getKeypath()) + "}}"; }
	  		};

	  		this.model.getKeypathModel().register( this.nameAttributeBinding );
	  	};

	  	RadioNameBinding.prototype.getInitialValue = function getInitialValue () {
	  		if ( this.element.getAttribute( 'checked' ) ) {
	  			return this.element.getAttribute( 'value' );
	  		}
	  	};

	  	RadioNameBinding.prototype.getValue = function getValue$1 () {
	  		return this.element.getAttribute( 'value' );
	  	};

	  	RadioNameBinding.prototype.handleChange = function handleChange () {
	  		// If this <input> is the one that's checked, then the value of its
	  		// `name` model gets set to its value
	  		if ( this.node.checked ) {
	  			this.group.value = this.getValue();
	  			Binding.prototype.handleChange.call(this);
	  		}
	  	};

	  	RadioNameBinding.prototype.lastVal = function lastVal ( setting, value ) {
	  		if ( !this.group ) return;
	  		if ( setting ) this.group.lastValue = value;
	  		else return this.group.lastValue;
	  	};

	  	RadioNameBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		var node = this.node;

	  		node.name = "{{" + (this.model.getKeypath()) + "}}";
	  		node.checked = this.model.get() == this.element.getAttribute( 'value' );

	  		node.addEventListener( 'change', handleDomEvent, false );

	  		if ( node.attachEvent ) {
	  			node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	RadioNameBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		if ( node.checked ) {
	  			this.group.model.set( this.element.getAttribute( 'value' ) );
	  		}
	  	};

	  	RadioNameBinding.prototype.unbind = function unbind () {
	  		this.group.remove( this );

	  		this.model.getKeypathModel().unregister( this.nameAttributeBinding );
	  	};

	  	RadioNameBinding.prototype.unrender = function unrender () {
	  		var node = this.node;

	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	return RadioNameBinding;
	  }(Binding));

	  var SingleSelectBinding = (function (Binding) {
	  	function SingleSelectBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	SingleSelectBinding.prototype = Object.create( Binding && Binding.prototype );
	  	SingleSelectBinding.prototype.constructor = SingleSelectBinding;

	  	SingleSelectBinding.prototype.forceUpdate = function forceUpdate () {
	  		var this$1 = this;

	  		var value = this.getValue();

	  		if ( value !== undefined ) {
	  			this.attribute.locked = true;
	  			runloop.scheduleTask( function () { return this$1.attribute.locked = false; } );
	  			this.model.set( value );
	  		}
	  	};

	  	SingleSelectBinding.prototype.getInitialValue = function getInitialValue () {
	  		if ( this.element.getAttribute( 'value' ) !== undefined ) {
	  			return;
	  		}

	  		var options = this.element.options;
	  		var len = options.length;

	  		if ( !len ) return;

	  		var value;
	  		var optionWasSelected;
	  		var i = len;

	  		// take the final selected option...
	  		while ( i-- ) {
	  			var option = options[i];

	  			if ( option.getAttribute( 'selected' ) ) {
	  				if ( !option.getAttribute( 'disabled' ) ) {
	  					value = option.getAttribute( 'value' );
	  				}

	  				optionWasSelected = true;
	  				break;
	  			}
	  		}

	  		// or the first non-disabled option, if none are selected
	  		if ( !optionWasSelected ) {
	  			while ( ++i < len ) {
	  				if ( !options[i].getAttribute( 'disabled' ) ) {
	  					value = options[i].getAttribute( 'value' );
	  					break;
	  				}
	  			}
	  		}

	  		// This is an optimisation (aka hack) that allows us to forgo some
	  		// other more expensive work
	  		// TODO does it still work? seems at odds with new architecture
	  		if ( value !== undefined ) {
	  			this.element.attributeByName.value.value = value;
	  		}

	  		return value;
	  	};

	  	SingleSelectBinding.prototype.getValue = function getValue () {
	  		var options = this.node.options;
	  		var len = options.length;

	  		var i;
	  		for ( i = 0; i < len; i += 1 ) {
	  			var option = options[i];

	  			if ( options[i].selected && !options[i].disabled ) {
	  				return option._ractive ? option._ractive.value : option.value;
	  			}
	  		}
	  	};

	  	SingleSelectBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);
	  		this.node.addEventListener( 'change', handleDomEvent, false );
	  	};

	  	SingleSelectBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		var option = getSelectedOptions( node )[0];
	  		this.model.set( option._ractive ? option._ractive.value : option.value );
	  	};

	  	// TODO this method is an anomaly... is it necessary?
	  	SingleSelectBinding.prototype.setValue = function setValue ( value ) {
	  		this.model.set( value );
	  	};

	  	SingleSelectBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  	};

	  	return SingleSelectBinding;
	  }(Binding));

	  function isBindable ( attribute ) {
	  	return attribute &&
	  		   attribute.template.f &&
	  	       attribute.template.f.length === 1 &&
	  	       attribute.template.f[0].t === INTERPOLATOR &&
	  	       !attribute.template.f[0].s;
	  }

	  function selectBinding ( element ) {
	  	var attributes = element.attributeByName;

	  	// contenteditable - bind if the contenteditable attribute is true
	  	// or is bindable and may thus become true...
	  	if ( element.getAttribute( 'contenteditable' ) || isBindable( attributes.contenteditable ) ) {
	  		// ...and this element also has a value attribute to bind
	  		return isBindable( attributes.value ) ? ContentEditableBinding : null;
	  	}

	  	// <input>
	  	if ( element.name === 'input' ) {
	  		var type = element.getAttribute( 'type' );

	  		if ( type === 'radio' || type === 'checkbox' ) {
	  			var bindName = isBindable( attributes.name );
	  			var bindChecked = isBindable( attributes.checked );

	  			// for radios we can either bind the name attribute, or the checked attribute - not both
	  			if ( bindName && bindChecked ) {
	  				if ( type === 'radio' ) {
	  					warnIfDebug( 'A radio input can have two-way binding on its name attribute, or its checked attribute - not both', { ractive: element.root });
	  				} else {
	  					// A checkbox with bindings for both name and checked - see https://github.com/ractivejs/ractive/issues/1749
	  					return CheckboxBinding;
	  				}
	  			}

	  			if ( bindName ) {
	  				return type === 'radio' ? RadioNameBinding : CheckboxNameBinding;
	  			}

	  			if ( bindChecked ) {
	  				return type === 'radio' ? RadioBinding : CheckboxBinding;
	  			}
	  		}

	  		if ( type === 'file' && isBindable( attributes.value ) ) {
	  			return FileBinding;
	  		}

	  		if ( isBindable( attributes.value ) ) {
	  			return ( type === 'number' || type === 'range' ) ? NumericBinding : GenericBinding;
	  		}

	  		return null;
	  	}

	  	// <select>
	  	if ( element.name === 'select' && isBindable( attributes.value ) ) {
	  		return element.getAttribute( 'multiple' ) ? MultipleSelectBinding : SingleSelectBinding;
	  	}

	  	// <textarea>
	  	if ( element.name === 'textarea' && isBindable( attributes.value ) ) {
	  		return GenericBinding;
	  	}
	  }

	  function makeDirty$1 ( query ) {
	  	query.makeDirty();
	  }

	  var endsWithSemi = /;\s*$/;

	  var Element = (function (Item) {
	  	function Element ( options ) {
	  		var this$1 = this;

	  		Item.call( this, options );

	  		this.liveQueries = []; // TODO rare case. can we handle differently?

	  		this.name = options.template.e.toLowerCase();
	  		this.isVoid = voidElementNames.test( this.name );

	  		// find parent element
	  		this.parent = findElement( this.parentFragment, false );

	  		if ( this.parent && this.parent.name === 'option' ) {
	  			throw new Error( ("An <option> element cannot contain other elements (encountered <" + (this.name) + ">)") );
	  		}

	  		this.decorators = [];

	  		// create attributes
	  		this.attributeByName = {};

	  		this.attributes = [];
	  		var leftovers = [];
	  		( this.template.m || [] ).forEach( function ( template ) {
	  			switch ( template.t ) {
	  				case ATTRIBUTE:
	  				case BINDING_FLAG:
	  				case DECORATOR:
	  				case EVENT:
	  				case TRANSITION:
	  					this$1.attributes.push( createItem({
	  						owner: this$1,
	  						parentFragment: this$1.parentFragment,
	  						template: template
	  					}) );
	  					break;

	  				default:
	  					leftovers.push( template );
	  					break;
	  			}
	  		});

	  		if ( leftovers.length ) {
	  			this.attributes.push( new ConditionalAttribute({
	  				owner: this,
	  				parentFragment: this.parentFragment,
	  				template: leftovers
	  			}) );
	  		}

	  		var i = this.attributes.length;
	  		while ( i-- ) {
	  			var attr = this$1.attributes[ i ];
	  			if ( attr.name === 'type' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'max' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'min' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'class' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'value' ) {
	  				this$1.attributes.push( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			}
	  		}

	  		// create children
	  		if ( options.template.f && !options.deferContent ) {
	  			this.fragment = new Fragment({
	  				template: options.template.f,
	  				owner: this,
	  				cssIds: null
	  			});
	  		}

	  		this.binding = null; // filled in later
	  	}

	  	Element.prototype = Object.create( Item && Item.prototype );
	  	Element.prototype.constructor = Element;

	  	Element.prototype.bind = function bind$1$$ () {
	  		this.attributes.binding = true;
	  		this.attributes.forEach( bind$1 );
	  		this.attributes.binding = false;

	  		if ( this.fragment ) this.fragment.bind();

	  		// create two-way binding if necessary
	  		if ( !this.binding ) this.recreateTwowayBinding();
	  	};

	  	Element.prototype.createTwowayBinding = function createTwowayBinding () {
	  		var shouldBind = 'twoway' in this ? this.twoway : this.ractive.twoway;

	  		if ( !shouldBind ) return null;

	  		var Binding = selectBinding( this );

	  		if ( !Binding ) return null;

	  		var binding = new Binding( this );

	  		return binding && binding.model ?
	  			binding :
	  			null;
	  	};

	  	Element.prototype.destroyed = function destroyed () {
	  		this.attributes.forEach( function ( a ) { return a.destroyed(); } );
	  		if ( this.fragment ) this.fragment.destroyed();
	  	};

	  	Element.prototype.detach = function detach () {
	  		// if this element is no longer rendered, the transitions are complete and the attributes can be torn down
	  		if ( !this.rendered ) this.destroyed();

	  		return detachNode( this.node );
	  	};

	  	Element.prototype.find = function find ( selector ) {
	  		if ( matches( this.node, selector ) ) return this.node;
	  		if ( this.fragment ) {
	  			return this.fragment.find( selector );
	  		}
	  	};

	  	Element.prototype.findAll = function findAll ( selector, query ) {
	  		// Add this node to the query, if applicable, and register the
	  		// query on this element
	  		var matches = query.test( this.node );
	  		if ( matches ) {
	  			query.add( this.node );
	  			if ( query.live ) this.liveQueries.push( query );
	  		}

	  		if ( this.fragment ) {
	  			this.fragment.findAll( selector, query );
	  		}
	  	};

	  	Element.prototype.findComponent = function findComponent ( name ) {
	  		if ( this.fragment ) {
	  			return this.fragment.findComponent( name );
	  		}
	  	};

	  	Element.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAllComponents( name, query );
	  		}
	  	};

	  	Element.prototype.findNextNode = function findNextNode () {
	  		return null;
	  	};

	  	Element.prototype.firstNode = function firstNode () {
	  		return this.node;
	  	};

	  	Element.prototype.getAttribute = function getAttribute ( name ) {
	  		var attribute = this.attributeByName[ name ];
	  		return attribute ? attribute.getValue() : undefined;
	  	};

	  	Element.prototype.recreateTwowayBinding = function recreateTwowayBinding () {
	  		if ( this.binding ) {
	  			this.binding.unbind();
	  			this.binding.unrender();
	  		}

	  		if ( this.binding = this.createTwowayBinding() ) {
	  			this.binding.bind();
	  			if ( this.rendered ) this.binding.render();
	  		}
	  	};

	  	Element.prototype.render = function render$1 ( target, occupants ) {
	  		// TODO determine correct namespace
	  		var this$1 = this;

	  		this.namespace = getNamespace( this );

	  		var node;
	  		var existing = false;

	  		if ( occupants ) {
	  			var n;
	  			while ( ( n = occupants.shift() ) ) {
	  				if ( n.nodeName.toUpperCase() === this$1.template.e.toUpperCase() && n.namespaceURI === this$1.namespace ) {
	  					this$1.node = node = n;
	  					existing = true;
	  					break;
	  				} else {
	  					detachNode( n );
	  				}
	  			}
	  		}

	  		if ( !node ) {
	  			node = createElement( this.template.e, this.namespace, this.getAttribute( 'is' ) );
	  			this.node = node;
	  		}

	  		defineProperty( node, '_ractive', {
	  			value: {
	  				proxy: this
	  			}
	  		});

	  		// Is this a top-level node of a component? If so, we may need to add
	  		// a data-ractive-css attribute, for CSS encapsulation
	  		if ( this.parentFragment.cssIds ) {
	  			node.setAttribute( 'data-ractive-css', this.parentFragment.cssIds.map( function ( x ) { return ("{" + x + "}"); } ).join( ' ' ) );
	  		}

	  		if ( existing && this.foundNode ) this.foundNode( node );

	  		if ( this.fragment ) {
	  			var children = existing ? toArray( node.childNodes ) : undefined;

	  			this.fragment.render( node, children );

	  			// clean up leftover children
	  			if ( children ) {
	  				children.forEach( detachNode );
	  			}
	  		}

	  		if ( existing ) {
	  			// store initial values for two-way binding
	  			if ( this.binding && this.binding.wasUndefined ) this.binding.setFromNode( node );
	  			// remove unused attributes
	  			var i = node.attributes.length;
	  			while ( i-- ) {
	  				var name = node.attributes[i].name;
	  				if ( !( name in this$1.attributeByName ) ) node.removeAttribute( name );
	  			}
	  		}

	  		this.attributes.forEach( render );

	  		if ( this.binding ) this.binding.render();

	  		updateLiveQueries$1( this );

	  		if ( this._introTransition && this.ractive.transitionsEnabled ) {
	  			this._introTransition.isIntro = true;
	  			runloop.registerTransition( this._introTransition );
	  		}

	  		if ( !existing ) {
	  			target.appendChild( node );
	  		}

	  		this.rendered = true;
	  	};

	  	Element.prototype.shuffled = function shuffled () {
	  		this.liveQueries.forEach( makeDirty$1 );
	  		Item.prototype.shuffled.call(this);
	  	};

	  	Element.prototype.toString = function toString () {
	  		var tagName = this.template.e;

	  		var attrs = this.attributes.map( stringifyAttribute ).join( '' );

	  		// Special case - selected options
	  		if ( this.name === 'option' && this.isSelected() ) {
	  			attrs += ' selected';
	  		}

	  		// Special case - two-way radio name bindings
	  		if ( this.name === 'input' && inputIsCheckedRadio( this ) ) {
	  			attrs += ' checked';
	  		}

	  		// Special case style and class attributes and directives
	  		var style, cls;
	  		this.attributes.forEach( function ( attr ) {
	  			if ( attr.name === 'class' ) {
	  				cls = ( cls || '' ) + ( cls ? ' ' : '' ) + safeAttributeString( attr.getString() );
	  			} else if ( attr.name === 'style' ) {
	  				style = ( style || '' ) + ( style ? ' ' : '' ) + safeAttributeString( attr.getString() );
	  				if ( style && !endsWithSemi.test( style ) ) style += ';';
	  			} else if ( attr.styleName ) {
	  				style = ( style || '' ) + ( style ? ' ' : '' ) +  "" + (decamelize( attr.styleName )) + ": " + (safeAttributeString( attr.getString() )) + ";";
	  			} else if ( attr.inlineClass && attr.getValue() ) {
	  				cls = ( cls || '' ) + ( cls ? ' ' : '' ) + attr.inlineClass;
	  			}
	  		});
	  		// put classes first, then inline style
	  		if ( style !== undefined ) attrs = ' style' + ( style ? ("=\"" + style + "\"") : '' ) + attrs;
	  		if ( cls !== undefined ) attrs = ' class' + (cls ? ("=\"" + cls + "\"") : '') + attrs;

	  		var str = "<" + tagName + "" + attrs + ">";

	  		if ( this.isVoid ) return str;

	  		// Special case - textarea
	  		if ( this.name === 'textarea' && this.getAttribute( 'value' ) !== undefined ) {
	  			str += escapeHtml( this.getAttribute( 'value' ) );
	  		}

	  		// Special case - contenteditable
	  		else if ( this.getAttribute( 'contenteditable' ) !== undefined ) {
	  			str += ( this.getAttribute( 'value' ) || '' );
	  		}

	  		if ( this.fragment ) {
	  			str += this.fragment.toString( !/^(?:script|style)$/i.test( this.template.e ) ); // escape text unless script/style
	  		}

	  		str += "</" + tagName + ">";
	  		return str;
	  	};

	  	Element.prototype.unbind = function unbind$1 () {
	  		this.attributes.forEach( unbind );

	  		if ( this.binding ) this.binding.unbind();
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Element.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( !this.rendered ) return;
	  		this.rendered = false;

	  		// unrendering before intro completed? complete it now
	  		// TODO should be an API for aborting transitions
	  		var transition = this._introTransition;
	  		if ( transition && transition.complete ) transition.complete();

	  		// Detach as soon as we can
	  		if ( this.name === 'option' ) {
	  			// <option> elements detach immediately, so that
	  			// their parent <select> element syncs correctly, and
	  			// since option elements can't have transitions anyway
	  			this.detach();
	  		} else if ( shouldDestroy ) {
	  			runloop.detachWhenReady( this );
	  		}

	  		if ( this.fragment ) this.fragment.unrender();

	  		if ( this.binding ) this.binding.unrender();

	  		// outro transition
	  		if ( this._outroTransition && this.ractive.transitionsEnabled ) {
	  			this._outroTransition.isIntro = false;
	  			runloop.registerTransition( this._outroTransition );
	  		}

	  		removeFromLiveQueries( this );
	  		// TODO forms are a special case
	  	};

	  	Element.prototype.update = function update$1 () {
	  		if ( this.dirty ) {
	  			this.dirty = false;

	  			this.attributes.forEach( update );

	  			if ( this.fragment ) this.fragment.update();
	  		}
	  	};

	  	return Element;
	  }(Item));

	  function inputIsCheckedRadio ( element ) {
	  	var attributes = element.attributeByName;

	  	var typeAttribute  = attributes.type;
	  	var valueAttribute = attributes.value;
	  	var nameAttribute  = attributes.name;

	  	if ( !typeAttribute || ( typeAttribute.value !== 'radio' ) || !valueAttribute || !nameAttribute.interpolator ) {
	  		return;
	  	}

	  	if ( valueAttribute.getValue() === nameAttribute.interpolator.model.get() ) {
	  		return true;
	  	}
	  }

	  function stringifyAttribute ( attribute ) {
	  	var str = attribute.toString();
	  	return str ? ' ' + str : '';
	  }

	  function removeFromLiveQueries ( element ) {
	  	var i = element.liveQueries.length;
	  	while ( i-- ) {
	  		var query = element.liveQueries[i];
	  		query.remove( element.node );
	  	}
	  }

	  function getNamespace ( element ) {
	  	// Use specified namespace...
	  	var xmlns = element.getAttribute( 'xmlns' );
	  	if ( xmlns ) return xmlns;

	  	// ...or SVG namespace, if this is an <svg> element
	  	if ( element.name === 'svg' ) return svg$1;

	  	var parent = element.parent;

	  	if ( parent ) {
	  		// ...or HTML, if the parent is a <foreignObject>
	  		if ( parent.name === 'foreignobject' ) return html;

	  		// ...or inherit from the parent node
	  		return parent.node.namespaceURI;
	  	}

	  	return element.ractive.el.namespaceURI;
	  }

	  var Form = (function (Element) {
	  	function Form ( options ) {
	  		Element.call( this, options );
	  		this.formBindings = [];
	  	}

	  	Form.prototype = Object.create( Element && Element.prototype );
	  	Form.prototype.constructor = Form;

	  	Form.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );
	  		this.node.addEventListener( 'reset', handleReset, false );
	  	};

	  	Form.prototype.unrender = function unrender ( shouldDestroy ) {
	  		this.node.removeEventListener( 'reset', handleReset, false );
	  		Element.prototype.unrender.call( this, shouldDestroy );
	  	};

	  	return Form;
	  }(Element));

	  function handleReset () {
	  	var element = this._ractive.proxy;

	  	runloop.start();
	  	element.formBindings.forEach( updateModel$1 );
	  	runloop.end();
	  }

	  function updateModel$1 ( binding ) {
	  	binding.model.set( binding.resetValue );
	  }

	  var Mustache = (function (Item) {
	  	function Mustache ( options ) {
	  		Item.call( this, options );

	  		this.parentFragment = options.parentFragment;
	  		this.template = options.template;
	  		this.index = options.index;
	  		if ( options.owner ) this.parent = options.owner;

	  		this.isStatic = !!options.template.s;

	  		this.model = null;
	  		this.dirty = false;
	  	}

	  	Mustache.prototype = Object.create( Item && Item.prototype );
	  	Mustache.prototype.constructor = Mustache;

	  	Mustache.prototype.bind = function bind () {
	  		// try to find a model for this view
	  		var this$1 = this;

	  		var model = resolve$2( this.parentFragment, this.template );
	  		var value = model ? model.get() : undefined;

	  		if ( this.isStatic ) {
	  			this.model = { get: function () { return value; } };
	  			return;
	  		}

	  		if ( model ) {
	  			model.register( this );
	  			this.model = model;
	  		} else {
	  			this.resolver = this.parentFragment.resolve( this.template.r, function ( model ) {
	  				this$1.model = model;
	  				model.register( this$1 );

	  				this$1.handleChange();
	  				this$1.resolver = null;
	  			});
	  		}
	  	};

	  	Mustache.prototype.handleChange = function handleChange () {
	  		this.bubble();
	  	};

	  	Mustache.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  		next = rebindMatch( this.template, next, previous );
	  		if ( this['static'] ) return false;
	  		if ( next === this.model ) return false;

	  		if ( this.model ) {
	  			this.model.unregister( this );
	  		}
	  		if ( next ) next.addShuffleRegister( this, 'mark' );
	  		this.model = next;
	  		if ( !safe ) this.handleChange();
	  		return true;
	  	};

	  	Mustache.prototype.unbind = function unbind () {
	  		if ( !this.isStatic ) {
	  			this.model && this.model.unregister( this );
	  			this.model = undefined;
	  			this.resolver && this.resolver.unbind();
	  		}
	  	};

	  	return Mustache;
	  }(Item));

	  var Interpolator = (function (Mustache) {
	  	function Interpolator () {
	  		Mustache.apply(this, arguments);
	  	}

	  	Interpolator.prototype = Object.create( Mustache && Mustache.prototype );
	  	Interpolator.prototype.constructor = Interpolator;

	  	Interpolator.prototype.bubble = function bubble () {
	  		if ( this.owner ) this.owner.bubble();
	  		Mustache.prototype.bubble.call(this);
	  	};

	  	Interpolator.prototype.detach = function detach () {
	  		return detachNode( this.node );
	  	};

	  	Interpolator.prototype.firstNode = function firstNode () {
	  		return this.node;
	  	};

	  	Interpolator.prototype.getString = function getString () {
	  		return this.model ? safeToStringValue( this.model.get() ) : '';
	  	};

	  	Interpolator.prototype.render = function render ( target, occupants ) {
	  		if ( inAttributes() ) return;
	  		var value = this.getString();

	  		this.rendered = true;

	  		if ( occupants ) {
	  			var n = occupants[0];
	  			if ( n && n.nodeType === 3 ) {
	  				occupants.shift();
	  				if ( n.nodeValue !== value ) {
	  					n.nodeValue = value;
	  				}
	  			} else {
	  				n = this.node = doc.createTextNode( value );
	  				if ( occupants[0] ) {
	  					target.insertBefore( n, occupants[0] );
	  				} else {
	  					target.appendChild( n );
	  				}
	  			}

	  			this.node = n;
	  		} else {
	  			this.node = doc.createTextNode( value );
	  			target.appendChild( this.node );
	  		}
	  	};

	  	Interpolator.prototype.toString = function toString ( escape ) {
	  		var string = this.getString();
	  		return escape ? escapeHtml( string ) : string;
	  	};

	  	Interpolator.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( shouldDestroy ) this.detach();
	  		this.rendered = false;
	  	};

	  	Interpolator.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			if ( this.rendered ) {
	  				this.node.data = this.getString();
	  			}
	  		}
	  	};

	  	Interpolator.prototype.valueOf = function valueOf () {
	  		return this.model ? this.model.get() : undefined;
	  	};

	  	return Interpolator;
	  }(Mustache));

	  var Input = (function (Element) {
	  	function Input () {
	  		Element.apply(this, arguments);
	  	}

	  	Input.prototype = Object.create( Element && Element.prototype );
	  	Input.prototype.constructor = Input;

	  	Input.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );
	  		this.node.defaultValue = this.node.value;
	  	};

	  	return Input;
	  }(Element));

	  var Mapping = (function (Item) {
	  	function Mapping ( options ) {
	  		Item.call( this, options );

	  		this.name = options.template.n;

	  		this.owner = options.owner || options.parentFragment.owner || options.element || findElement( options.parentFragment );
	  		this.element = options.element || (this.owner.attributeByName ? this.owner : findElement( options.parentFragment ) );
	  		this.parentFragment = this.element.parentFragment; // shared
	  		this.ractive = this.parentFragment.ractive;

	  		this.fragment = null;

	  		this.element.attributeByName[ this.name ] = this;

	  		this.value = options.template.f;
	  	}

	  	Mapping.prototype = Object.create( Item && Item.prototype );
	  	Mapping.prototype.constructor = Mapping;

	  	Mapping.prototype.bind = function bind () {
	  		if ( this.fragment ) {
	  			this.fragment.bind();
	  		}

	  		var template = this.template.f;
	  		var viewmodel = this.element.instance.viewmodel;

	  		if ( template === 0 ) {
	  			// empty attributes are `true`
	  			viewmodel.joinKey( this.name ).set( true );
	  		}

	  		else if ( typeof template === 'string' ) {
	  			var parsed = parseJSON( template );
	  			viewmodel.joinKey( this.name ).set( parsed ? parsed.value : template );
	  		}

	  		else if ( isArray( template ) ) {
	  			createMapping( this, true );
	  		}
	  	};

	  	Mapping.prototype.render = function render () {};

	  	Mapping.prototype.unbind = function unbind () {
	  		if ( this.fragment ) this.fragment.unbind();
	  		if ( this.boundFragment ) this.boundFragment.unbind();

	  		if ( this.element.bound ) {
	  			if ( this.link.target === this.model ) this.link.owner.unlink();
	  		}
	  	};

	  	Mapping.prototype.unrender = function unrender () {};

	  	Mapping.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			if ( this.fragment ) this.fragment.update();
	  			if ( this.boundFragment ) this.boundFragment.update();
	  			if ( this.rendered ) this.updateDelegate();
	  		}
	  	};

	  	return Mapping;
	  }(Item));

	  function createMapping ( item ) {
	  	var template = item.template.f;
	  	var viewmodel = item.element.instance.viewmodel;
	  	var childData = viewmodel.value;

	  	if ( template.length === 1 && template[0].t === INTERPOLATOR ) {
	  		item.model = resolve$2( item.parentFragment, template[0] );

	  		if ( !item.model ) {
	  			warnOnceIfDebug( ("The " + (item.name) + "='{{" + (template[0].r) + "}}' mapping is ambiguous, and may cause unexpected results. Consider initialising your data to eliminate the ambiguity"), { ractive: item.element.instance }); // TODO add docs page explaining item
	  			item.parentFragment.ractive.get( item.name ); // side-effect: create mappings as necessary
	  			item.model = item.parentFragment.findContext().joinKey( item.name );
	  		}

	  		item.link = viewmodel.createLink( item.name, item.model, template[0].r );

	  		if ( item.model.get() === undefined && item.name in childData ) {
	  			item.model.set( childData[ item.name ] );
	  		}
	  	}

	  	else {
	  		item.boundFragment = new Fragment({
	  			owner: item,
	  			template: template
	  		}).bind();

	  		item.model = viewmodel.joinKey( item.name );
	  		item.model.set( item.boundFragment.valueOf() );

	  		// item is a *bit* of a hack
	  		item.boundFragment.bubble = function () {
	  			Fragment.prototype.bubble.call( item.boundFragment );
	  			// defer this to avoid mucking around model deps if there happens to be an expression involved
	  			runloop.scheduleTask(function () {
	  				item.boundFragment.update();
	  				item.model.set( item.boundFragment.valueOf() );
	  			});
	  		};
	  	}
	  }

	  var Option = (function (Element) {
	  	function Option ( options ) {
	  		var template = options.template;
	  		if ( !template.a ) template.a = {};

	  		// If the value attribute is missing, use the element's content,
	  		// as long as it isn't disabled
	  		if ( template.a.value === undefined && !( 'disabled' in template.a ) ) {
	  			template.a.value = template.f || '';
	  		}

	  		Element.call( this, options );

	  		this.select = findElement( this.parent || this.parentFragment, false, 'select' );
	  	}

	  	Option.prototype = Object.create( Element && Element.prototype );
	  	Option.prototype.constructor = Option;

	  	Option.prototype.bind = function bind () {
	  		if ( !this.select ) {
	  			Element.prototype.bind.call(this);
	  			return;
	  		}

	  		// If the select has a value, it overrides the `selected` attribute on
	  		// this option - so we delete the attribute
	  		var selectedAttribute = this.attributeByName.selected;
	  		if ( selectedAttribute && this.select.getAttribute( 'value' ) !== undefined ) {
	  			var index = this.attributes.indexOf( selectedAttribute );
	  			this.attributes.splice( index, 1 );
	  			delete this.attributeByName.selected;
	  		}

	  		Element.prototype.bind.call(this);
	  		this.select.options.push( this );
	  	};

	  	Option.prototype.bubble = function bubble () {
	  		// if we're using content as value, may need to update here
	  		var value = this.getAttribute( 'value' );
	  		if ( this.node && this.node.value !== value ) {
	  			this.node._ractive.value = value;
	  		}
	  		Element.prototype.bubble.call(this);
	  	};

	  	Option.prototype.getAttribute = function getAttribute ( name ) {
	  		var attribute = this.attributeByName[ name ];
	  		return attribute ? attribute.getValue() : name === 'value' && this.fragment ? this.fragment.valueOf() : undefined;
	  	};

	  	Option.prototype.isSelected = function isSelected () {
	  		var optionValue = this.getAttribute( 'value' );

	  		if ( optionValue === undefined || !this.select ) {
	  			return false;
	  		}

	  		var selectValue = this.select.getAttribute( 'value' );

	  		if ( selectValue == optionValue ) {
	  			return true;
	  		}

	  		if ( this.select.getAttribute( 'multiple' ) && isArray( selectValue ) ) {
	  			var i = selectValue.length;
	  			while ( i-- ) {
	  				if ( selectValue[i] == optionValue ) {
	  					return true;
	  				}
	  			}
	  		}
	  	};

	  	Option.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );

	  		if ( !this.attributeByName.value ) {
	  			this.node._ractive.value = this.getAttribute( 'value' );
	  		}
	  	};

	  	Option.prototype.unbind = function unbind () {
	  		Element.prototype.unbind.call(this);

	  		if ( this.select ) {
	  			removeFromArray( this.select.options, this );
	  		}
	  	};

	  	return Option;
	  }(Element));

	  function getPartialTemplate ( ractive, name, parentFragment ) {
	  	// If the partial in instance or view heirarchy instances, great
	  	var partial = getPartialFromRegistry( ractive, name, parentFragment || {} );
	  	if ( partial ) return partial;

	  	// Does it exist on the page as a script tag?
	  	partial = parser.fromId( name, { noThrow: true } );
	  	if ( partial ) {
	  		// parse and register to this ractive instance
	  		var parsed = parser.parseFor( partial, ractive );

	  		// register extra partials on the ractive instance if they don't already exist
	  		if ( parsed.p ) fillGaps( ractive.partials, parsed.p );

	  		// register (and return main partial if there are others in the template)
	  		return ractive.partials[ name ] = parsed.t;
	  	}
	  }

	  function getPartialFromRegistry ( ractive, name, parentFragment ) {
	  	// if there was an instance up-hierarchy, cool
	  	var partial = findParentPartial( name, parentFragment.owner );
	  	if ( partial ) return partial;

	  	// find first instance in the ractive or view hierarchy that has this partial
	  	var instance = findInstance( 'partials', ractive, name );

	  	if ( !instance ) { return; }

	  	partial = instance.partials[ name ];

	  	// partial is a function?
	  	var fn;
	  	if ( typeof partial === 'function' ) {
	  		fn = partial.bind( instance );
	  		fn.isOwner = instance.partials.hasOwnProperty(name);
	  		partial = fn.call( ractive, parser );
	  	}

	  	if ( !partial && partial !== '' ) {
	  		warnIfDebug( noRegistryFunctionReturn, name, 'partial', 'partial', { ractive: ractive });
	  		return;
	  	}

	  	// If this was added manually to the registry,
	  	// but hasn't been parsed, parse it now
	  	if ( !parser.isParsed( partial ) ) {
	  		// use the parseOptions of the ractive instance on which it was found
	  		var parsed = parser.parseFor( partial, instance );

	  		// Partials cannot contain nested partials!
	  		// TODO add a test for this
	  		if ( parsed.p ) {
	  			warnIfDebug( 'Partials ({{>%s}}) cannot contain nested inline partials', name, { ractive: ractive });
	  		}

	  		// if fn, use instance to store result, otherwise needs to go
	  		// in the correct point in prototype chain on instance or constructor
	  		var target = fn ? instance : findOwner( instance, name );

	  		// may be a template with partials, which need to be registered and main template extracted
	  		target.partials[ name ] = partial = parsed.t;
	  	}

	  	// store for reset
	  	if ( fn ) partial._fn = fn;

	  	return partial.v ? partial.t : partial;
	  }

	  function findOwner ( ractive, key ) {
	  	return ractive.partials.hasOwnProperty( key )
	  		? ractive
	  		: findConstructor( ractive.constructor, key);
	  }

	  function findConstructor ( constructor, key ) {
	  	if ( !constructor ) { return; }
	  	return constructor.partials.hasOwnProperty( key )
	  		? constructor
	  		: findConstructor( constructor._Parent, key );
	  }

	  function findParentPartial( name, parent ) {
	  	if ( parent ) {
	  		if ( parent.template && parent.template.p && parent.template.p[name] ) {
	  			return parent.template.p[name];
	  		} else if ( parent.parentFragment && parent.parentFragment.owner ) {
	  			return findParentPartial( name, parent.parentFragment.owner );
	  		}
	  	}
	  }

	  var Partial = (function (Mustache) {
	  	function Partial () {
	  		Mustache.apply(this, arguments);
	  	}

	  	Partial.prototype = Object.create( Mustache && Mustache.prototype );
	  	Partial.prototype.constructor = Partial;

	  	Partial.prototype.bind = function bind () {
	  		// keep track of the reference name for future resets
	  		this.refName = this.template.r;

	  		// name matches take priority over expressions
	  		var template = this.refName ? getPartialTemplate( this.ractive, this.refName, this.parentFragment ) || null : null;
	  		var templateObj;

	  		if ( template ) {
	  			this.named = true;
	  			this.setTemplate( this.template.r, template );
	  		}

	  		if ( !template ) {
	  			Mustache.prototype.bind.call(this);
	  			if ( this.model && ( templateObj = this.model.get() ) && typeof templateObj === 'object' && ( typeof templateObj.template === 'string' || isArray( templateObj.t ) ) ) {
	  				if ( templateObj.template ) {
	  					this.source = templateObj.template;
	  					templateObj = parsePartial( this.template.r, templateObj.template, this.ractive );
	  				} else {
	  					this.source = templateObj.t;
	  				}
	  				this.setTemplate( this.template.r, templateObj.t );
	  			} else if ( ( !this.model || typeof this.model.get() !== 'string' ) && this.refName ) {
	  				this.setTemplate( this.refName, template );
	  			} else {
	  				this.setTemplate( this.model.get() );
	  			}
	  		}

	  		this.fragment = new Fragment({
	  			owner: this,
	  			template: this.partialTemplate
	  		}).bind();
	  	};

	  	Partial.prototype.detach = function detach () {
	  		return this.fragment.detach();
	  	};

	  	Partial.prototype.find = function find ( selector ) {
	  		return this.fragment.find( selector );
	  	};

	  	Partial.prototype.findAll = function findAll ( selector, query ) {
	  		this.fragment.findAll( selector, query );
	  	};

	  	Partial.prototype.findComponent = function findComponent ( name ) {
	  		return this.fragment.findComponent( name );
	  	};

	  	Partial.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		this.fragment.findAllComponents( name, query );
	  	};

	  	Partial.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment.firstNode( skipParent );
	  	};

	  	Partial.prototype.forceResetTemplate = function forceResetTemplate () {
	  		var this$1 = this;

	  		this.partialTemplate = undefined;

	  		// on reset, check for the reference name first
	  		if ( this.refName ) {
	  			this.partialTemplate = getPartialTemplate( this.ractive, this.refName, this.parentFragment );
	  		}

	  		// then look for the resolved name
	  		if ( !this.partialTemplate ) {
	  			this.partialTemplate = getPartialTemplate( this.ractive, this.name, this.parentFragment );
	  		}

	  		if ( !this.partialTemplate ) {
	  			warnOnceIfDebug( ("Could not find template for partial '" + (this.name) + "'") );
	  			this.partialTemplate = [];
	  		}

	  		if ( this.inAttribute ) {
	  			doInAttributes( function () { return this$1.fragment.resetTemplate( this$1.partialTemplate ); } );
	  		} else {
	  			this.fragment.resetTemplate( this.partialTemplate );
	  		}

	  		this.bubble();
	  	};

	  	Partial.prototype.render = function render ( target, occupants ) {
	  		this.fragment.render( target, occupants );
	  	};

	  	Partial.prototype.setTemplate = function setTemplate ( name, template ) {
	  		this.name = name;

	  		if ( !template && template !== null ) template = getPartialTemplate( this.ractive, name, this.parentFragment );

	  		if ( !template ) {
	  			warnOnceIfDebug( ("Could not find template for partial '" + name + "'") );
	  		}

	  		this.partialTemplate = template || [];
	  	};

	  	Partial.prototype.toString = function toString ( escape ) {
	  		return this.fragment.toString( escape );
	  	};

	  	Partial.prototype.unbind = function unbind () {
	  		Mustache.prototype.unbind.call(this);
	  		this.fragment.unbind();
	  	};

	  	Partial.prototype.unrender = function unrender ( shouldDestroy ) {
	  		this.fragment.unrender( shouldDestroy );
	  	};

	  	Partial.prototype.update = function update () {
	  		var template;

	  		if ( this.dirty ) {
	  			this.dirty = false;

	  			if ( !this.named ) {
	  				if ( this.model ) {
	  					template = this.model.get();
	  				}

	  				if ( template && typeof template === 'string' && template !== this.name ) {
	  					this.setTemplate( template );
	  					this.fragment.resetTemplate( this.partialTemplate );
	  				} else if ( template && typeof template === 'object' && ( typeof template.template === 'string' || isArray( template.t ) ) ) {
	  					if ( template.t !== this.source && template.template !== this.source ) {
	  						if ( template.template ) {
	  							this.source = template.template;
	  							template = parsePartial( this.name, template.template, this.ractive );
	  						} else {
	  							this.source = template.t;
	  						}
	  						this.setTemplate( this.name, template.t );
	  						this.fragment.resetTemplate( this.partialTemplate );
	  					}
	  				}
	  			}

	  			this.fragment.update();
	  		}
	  	};

	  	return Partial;
	  }(Mustache));

	  function parsePartial( name, partial, ractive ) {
	  	var parsed;

	  	try {
	  		parsed = parser.parse( partial, parser.getParseOptions( ractive ) );
	  	} catch (e) {
	  		warnIfDebug( ("Could not parse partial from expression '" + name + "'\n" + (e.message)) );
	  	}

	  	return parsed || { t: [] };
	  }

	  var RepeatedFragment = function RepeatedFragment ( options ) {
	  	this.parent = options.owner.parentFragment;

	  	// bit of a hack, so reference resolution works without another
	  	// layer of indirection
	  	this.parentFragment = this;
	  	this.owner = options.owner;
	  	this.ractive = this.parent.ractive;

	  	// encapsulated styles should be inherited until they get applied by an element
	  	this.cssIds = 'cssIds' in options ? options.cssIds : ( this.parent ? this.parent.cssIds : null );

	  	this.context = null;
	  	this.rendered = false;
	  	this.iterations = [];

	  	this.template = options.template;

	  	this.indexRef = options.indexRef;
	  	this.keyRef = options.keyRef;

	  	this.pendingNewIndices = null;
	  	this.previousIterations = null;

	  	// track array versus object so updates of type rest
	  	this.isArray = false;
	  };

	  RepeatedFragment.prototype.bind = function bind ( context ) {
	  	var this$1 = this;

	  		this.context = context;
	  	var value = context.get();

	  	// {{#each array}}...
	  	if ( this.isArray = isArray( value ) ) {
	  		// we can't use map, because of sparse arrays
	  		this.iterations = [];
	  		var max = value.length;
	  		for ( var i = 0; i < max; i += 1 ) {
	  			this$1.iterations[i] = this$1.createIteration( i, i );
	  		}
	  	}

	  	// {{#each object}}...
	  	else if ( isObject( value ) ) {
	  		this.isArray = false;

	  		// TODO this is a dreadful hack. There must be a neater way
	  		if ( this.indexRef ) {
	  			var refs = this.indexRef.split( ',' );
	  			this.keyRef = refs[0];
	  			this.indexRef = refs[1];
	  		}

	  		this.iterations = Object.keys( value ).map( function ( key, index ) {
	  			return this$1.createIteration( key, index );
	  		});
	  	}

	  	return this;
	  };

	  RepeatedFragment.prototype.bubble = function bubble () {
	  	this.owner.bubble();
	  };

	  RepeatedFragment.prototype.createIteration = function createIteration ( key, index ) {
	  	var fragment = new Fragment({
	  		owner: this,
	  		template: this.template
	  	});

	  	// TODO this is a bit hacky
	  	fragment.key = key;
	  	fragment.index = index;
	  	fragment.isIteration = true;

	  	var model = this.context.joinKey( key );

	  	// set up an iteration alias if there is one
	  	if ( this.owner.template.z ) {
	  		fragment.aliases = {};
	  		fragment.aliases[ this.owner.template.z[0].n ] = model;
	  	}

	  	return fragment.bind( model );
	  };

	  RepeatedFragment.prototype.destroyed = function destroyed () {
	  	this.iterations.forEach( function ( i ) { return i.destroyed(); } );
	  };

	  RepeatedFragment.prototype.detach = function detach () {
	  	var docFrag = createDocumentFragment();
	  	this.iterations.forEach( function ( fragment ) { return docFrag.appendChild( fragment.detach() ); } );
	  	return docFrag;
	  };

	  RepeatedFragment.prototype.find = function find ( selector ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.iterations[i].find( selector );
	  		if ( found ) return found;
	  	}
	  };

	  RepeatedFragment.prototype.findAll = function findAll ( selector, query ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		this$1.iterations[i].findAll( selector, query );
	  	}
	  };

	  RepeatedFragment.prototype.findComponent = function findComponent ( name ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.iterations[i].findComponent( name );
	  		if ( found ) return found;
	  	}
	  };

	  RepeatedFragment.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		this$1.iterations[i].findAllComponents( name, query );
	  	}
	  };

	  RepeatedFragment.prototype.findNextNode = function findNextNode ( iteration ) {
	  	var this$1 = this;

	  		if ( iteration.index < this.iterations.length - 1 ) {
	  		for ( var i = iteration.index + 1; i < this$1.iterations.length; i++ ) {
	  			var node = this$1.iterations[ i ].firstNode( true );
	  			if ( node ) return node;
	  		}
	  	}

	  	return this.owner.findNextNode();
	  };

	  RepeatedFragment.prototype.firstNode = function firstNode ( skipParent ) {
	  	return this.iterations[0] ? this.iterations[0].firstNode( skipParent ) : null;
	  };

	  RepeatedFragment.prototype.rebinding = function rebinding ( next ) {
	  	var this$1 = this;

	  		this.context = next;
	  	this.iterations.forEach( function ( fragment ) {
	  		var model = next ? next.joinKey( fragment.key || fragment.index ) : undefined;
	  		fragment.context = model;
	  		if ( this$1.owner.template.z ) {
	  			fragment.aliases = {};
	  			fragment.aliases[ this$1.owner.template.z[0].n ] = model;
	  		}
	  	});
	  };

	  RepeatedFragment.prototype.render = function render ( target, occupants ) {
	  	// TODO use docFrag.cloneNode...

	  	if ( this.iterations ) {
	  		this.iterations.forEach( function ( fragment ) { return fragment.render( target, occupants ); } );
	  	}

	  	this.rendered = true;
	  };

	  RepeatedFragment.prototype.shuffle = function shuffle ( newIndices ) {
	  	var this$1 = this;

	  		if ( !this.pendingNewIndices ) this.previousIterations = this.iterations.slice();

	  	if ( !this.pendingNewIndices ) this.pendingNewIndices = [];

	  	this.pendingNewIndices.push( newIndices );

	  	var iterations = [];

	  	newIndices.forEach( function ( newIndex, oldIndex ) {
	  		if ( newIndex === -1 ) return;

	  		var fragment = this$1.iterations[ oldIndex ];
	  		iterations[ newIndex ] = fragment;

	  		if ( newIndex !== oldIndex && fragment ) fragment.dirty = true;
	  	});

	  	this.iterations = iterations;

	  	this.bubble();
	  };

	  RepeatedFragment.prototype.shuffled = function shuffled () {
	  	this.iterations.forEach( function ( i ) { return i.shuffled(); } );
	  };

	  RepeatedFragment.prototype.toString = function toString$1$$ ( escape ) {
	  	return this.iterations ?
	  		this.iterations.map( escape ? toEscapedString : toString$1 ).join( '' ) :
	  		'';
	  };

	  RepeatedFragment.prototype.unbind = function unbind$1 () {
	  	this.iterations.forEach( unbind );
	  	return this;
	  };

	  RepeatedFragment.prototype.unrender = function unrender$1 ( shouldDestroy ) {
	  	this.iterations.forEach( shouldDestroy ? unrenderAndDestroy : unrender );
	  	if ( this.pendingNewIndices && this.previousIterations ) {
	  		this.previousIterations.forEach( function ( fragment ) {
	  			if ( fragment.rendered ) shouldDestroy ? unrenderAndDestroy( fragment ) : unrender( fragment );
	  		});
	  	}
	  	this.rendered = false;
	  };

	  // TODO smart update
	  RepeatedFragment.prototype.update = function update$1 () {
	  	// skip dirty check, since this is basically just a facade

	  	var this$1 = this;

	  		if ( this.pendingNewIndices ) {
	  		this.updatePostShuffle();
	  		return;
	  	}

	  	if ( this.updating ) return;
	  	this.updating = true;

	  	var value = this.context.get(),
	  			  wasArray = this.isArray;

	  	var toRemove;
	  	var oldKeys;
	  	var reset = true;
	  	var i;

	  	if ( this.isArray = isArray( value ) ) {
	  		if ( wasArray ) {
	  			reset = false;
	  			if ( this.iterations.length > value.length ) {
	  				toRemove = this.iterations.splice( value.length );
	  			}
	  		}
	  	} else if ( isObject( value ) && !wasArray ) {
	  		reset = false;
	  		toRemove = [];
	  		oldKeys = {};
	  		i = this.iterations.length;

	  		while ( i-- ) {
	  			var fragment$1 = this$1.iterations[i];
	  			if ( fragment$1.key in value ) {
	  				oldKeys[ fragment$1.key ] = true;
	  			} else {
	  				this$1.iterations.splice( i, 1 );
	  				toRemove.push( fragment$1 );
	  			}
	  		}
	  	}

	  	if ( reset ) {
	  		toRemove = this.iterations;
	  		this.iterations = [];
	  	}

	  	if ( toRemove ) {
	  		toRemove.forEach( function ( fragment ) {
	  			fragment.unbind();
	  			fragment.unrender( true );
	  		});
	  	}

	  	// update the remaining ones
	  	this.iterations.forEach( update );

	  	// add new iterations
	  	var newLength = isArray( value ) ?
	  		value.length :
	  		isObject( value ) ?
	  			Object.keys( value ).length :
	  			0;

	  	var docFrag;
	  	var fragment;

	  	if ( newLength > this.iterations.length ) {
	  		docFrag = this.rendered ? createDocumentFragment() : null;
	  		i = this.iterations.length;

	  		if ( isArray( value ) ) {
	  			while ( i < value.length ) {
	  				fragment = this$1.createIteration( i, i );

	  				this$1.iterations.push( fragment );
	  				if ( this$1.rendered ) fragment.render( docFrag );

	  				i += 1;
	  			}
	  		}

	  		else if ( isObject( value ) ) {
	  			// TODO this is a dreadful hack. There must be a neater way
	  			if ( this.indexRef && !this.keyRef ) {
	  				var refs = this.indexRef.split( ',' );
	  				this.keyRef = refs[0];
	  				this.indexRef = refs[1];
	  			}

	  			Object.keys( value ).forEach( function ( key ) {
	  				if ( !oldKeys || !( key in oldKeys ) ) {
	  					fragment = this$1.createIteration( key, i );

	  					this$1.iterations.push( fragment );
	  					if ( this$1.rendered ) fragment.render( docFrag );

	  					i += 1;
	  				}
	  			});
	  		}

	  		if ( this.rendered ) {
	  			var parentNode = this.parent.findParentNode();
	  			var anchor = this.parent.findNextNode( this.owner );

	  			parentNode.insertBefore( docFrag, anchor );
	  		}
	  	}

	  	this.updating = false;
	  };

	  RepeatedFragment.prototype.updatePostShuffle = function updatePostShuffle () {
	  	var this$1 = this;

	  		var newIndices = this.pendingNewIndices[ 0 ];

	  	// map first shuffle through
	  	this.pendingNewIndices.slice( 1 ).forEach( function ( indices ) {
	  		newIndices.forEach( function ( newIndex, oldIndex ) {
	  			newIndices[ oldIndex ] = indices[ newIndex ];
	  		});
	  	});

	  	// This algorithm (for detaching incorrectly-ordered fragments from the DOM and
	  	// storing them in a document fragment for later reinsertion) seems a bit hokey,
	  	// but it seems to work for now
	  	var len = this.context.get().length, oldLen = this.previousIterations.length;
	  	var i;
	  	var removed = {};

	  	newIndices.forEach( function ( newIndex, oldIndex ) {
	  		var fragment = this$1.previousIterations[ oldIndex ];
	  		this$1.previousIterations[ oldIndex ] = null;

	  		if ( newIndex === -1 ) {
	  			removed[ oldIndex ] = fragment;
	  		} else if ( fragment.index !== newIndex ) {
	  			var model = this$1.context.joinKey( newIndex );
	  			fragment.index = newIndex;
	  			fragment.context = model;
	  			if ( this$1.owner.template.z ) {
	  				fragment.aliases = {};
	  				fragment.aliases[ this$1.owner.template.z[0].n ] = model;
	  			}
	  		}
	  	});

	  	// if the array was spliced outside of ractive, sometimes there are leftover fragments not in the newIndices
	  	this.previousIterations.forEach( function ( frag, i ) {
	  		if ( frag ) removed[ i ] = frag;
	  	});

	  	// create new/move existing iterations
	  	var docFrag = this.rendered ? createDocumentFragment() : null;
	  	var parentNode = this.rendered ? this.parent.findParentNode() : null;

	  	var contiguous = 'startIndex' in newIndices;
	  	i = contiguous ? newIndices.startIndex : 0;

	  	for ( i; i < len; i++ ) {
	  		var frag = this$1.iterations[i];

	  		if ( frag && contiguous ) {
	  			// attach any built-up iterations
	  			if ( this$1.rendered ) {
	  				if ( removed[i] ) docFrag.appendChild( removed[i].detach() );
	  				if ( docFrag.childNodes.length  ) parentNode.insertBefore( docFrag, frag.firstNode() );
	  			}
	  			continue;
	  		}

	  		if ( !frag ) this$1.iterations[i] = this$1.createIteration( i, i );

	  		if ( this$1.rendered ) {
	  			if ( removed[i] ) docFrag.appendChild( removed[i].detach() );

	  			if ( frag ) docFrag.appendChild( frag.detach() );
	  			else {
	  				this$1.iterations[i].render( docFrag );
	  			}
	  		}
	  	}

	  	// append any leftovers
	  	if ( this.rendered ) {
	  		for ( i = len; i < oldLen; i++ ) {
	  			if ( removed[i] ) docFrag.appendChild( removed[i].detach() );
	  		}

	  		if ( docFrag.childNodes.length ) {
	  			parentNode.insertBefore( docFrag, this.owner.findNextNode() );
	  		}
	  	}

	  	// trigger removal on old nodes
	  	Object.keys( removed ).forEach( function ( k ) { return removed[k].unbind().unrender( true ); } );

	  	this.iterations.forEach( update );

	  	this.pendingNewIndices = null;

	  	this.shuffled();
	  };

	  function isEmpty ( value ) {
	  	return !value ||
	  	       ( isArray( value ) && value.length === 0 ) ||
	  		   ( isObject( value ) && Object.keys( value ).length === 0 );
	  }

	  function getType ( value, hasIndexRef ) {
	  	if ( hasIndexRef || isArray( value ) ) return SECTION_EACH;
	  	if ( isObject( value ) || typeof value === 'function' ) return SECTION_IF_WITH;
	  	if ( value === undefined ) return null;
	  	return SECTION_IF;
	  }

	  var Section = (function (Mustache) {
	  	function Section ( options ) {
	  		Mustache.call( this, options );

	  		this.sectionType = options.template.n || null;
	  		this.templateSectionType = this.sectionType;
	  		this.subordinate = options.template.l === 1;
	  		this.fragment = null;
	  	}

	  	Section.prototype = Object.create( Mustache && Mustache.prototype );
	  	Section.prototype.constructor = Section;

	  	Section.prototype.bind = function bind () {
	  		Mustache.prototype.bind.call(this);

	  		if ( this.subordinate ) {
	  			this.sibling = this.parentFragment.items[ this.parentFragment.items.indexOf( this ) - 1 ];
	  			this.sibling.nextSibling = this;
	  		}

	  		// if we managed to bind, we need to create children
	  		if ( this.model ) {
	  			this.dirty = true;
	  			this.update();
	  		} else if ( this.sectionType && this.sectionType === SECTION_UNLESS && ( !this.sibling || !this.sibling.isTruthy() ) ) {
	  			this.fragment = new Fragment({
	  				owner: this,
	  				template: this.template.f
	  			}).bind();
	  		}
	  	};

	  	Section.prototype.detach = function detach () {
	  		return this.fragment ? this.fragment.detach() : createDocumentFragment();
	  	};

	  	Section.prototype.find = function find ( selector ) {
	  		if ( this.fragment ) {
	  			return this.fragment.find( selector );
	  		}
	  	};

	  	Section.prototype.findAll = function findAll ( selector, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAll( selector, query );
	  		}
	  	};

	  	Section.prototype.findComponent = function findComponent ( name ) {
	  		if ( this.fragment ) {
	  			return this.fragment.findComponent( name );
	  		}
	  	};

	  	Section.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAllComponents( name, query );
	  		}
	  	};

	  	Section.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment && this.fragment.firstNode( skipParent );
	  	};

	  	Section.prototype.isTruthy = function isTruthy () {
	  		if ( this.subordinate && this.sibling.isTruthy() ) return true;
	  		var value = !this.model ? undefined : this.model.isRoot ? this.model.value : this.model.get();
	  		return !!value && ( this.templateSectionType === SECTION_IF_WITH || !isEmpty( value ) );
	  	};

	  	Section.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  		if ( Mustache.prototype.rebinding.call( this, next, previous, safe ) ) {
	  			if ( this.fragment && this.sectionType !== SECTION_IF && this.sectionType !== SECTION_UNLESS ) {
	  				this.fragment.rebinding( next, previous );
	  			}
	  		}
	  	};

	  	Section.prototype.render = function render ( target, occupants ) {
	  		this.rendered = true;
	  		if ( this.fragment ) this.fragment.render( target, occupants );
	  	};

	  	Section.prototype.shuffle = function shuffle ( newIndices ) {
	  		if ( this.fragment && this.sectionType === SECTION_EACH ) {
	  			this.fragment.shuffle( newIndices );
	  		}
	  	};

	  	Section.prototype.toString = function toString ( escape ) {
	  		return this.fragment ? this.fragment.toString( escape ) : '';
	  	};

	  	Section.prototype.unbind = function unbind () {
	  		Mustache.prototype.unbind.call(this);
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Section.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( this.rendered && this.fragment ) this.fragment.unrender( shouldDestroy );
	  		this.rendered = false;
	  	};

	  	Section.prototype.update = function update () {
	  		if ( !this.dirty ) return;

	  		if ( this.fragment && this.sectionType !== SECTION_IF && this.sectionType !== SECTION_UNLESS ) {
	  			this.fragment.context = this.model;
	  		}

	  		if ( !this.model && this.sectionType !== SECTION_UNLESS ) return;

	  		this.dirty = false;

	  		var value = !this.model ? undefined : this.model.isRoot ? this.model.value : this.model.get();
	  		var siblingFalsey = !this.subordinate || !this.sibling.isTruthy();
	  		var lastType = this.sectionType;

	  		// watch for switching section types
	  		if ( this.sectionType === null || this.templateSectionType === null ) this.sectionType = getType( value, this.template.i );
	  		if ( lastType && lastType !== this.sectionType && this.fragment ) {
	  			if ( this.rendered ) {
	  				this.fragment.unbind().unrender( true );
	  			}

	  			this.fragment = null;
	  		}

	  		var newFragment;

	  		var fragmentShouldExist = this.sectionType === SECTION_EACH || // each always gets a fragment, which may have no iterations
	  		                            this.sectionType === SECTION_WITH || // with (partial context) always gets a fragment
	  		                            ( siblingFalsey && ( this.sectionType === SECTION_UNLESS ? !this.isTruthy() : this.isTruthy() ) ); // if, unless, and if-with depend on siblings and the condition

	  		if ( fragmentShouldExist ) {
	  			if ( this.fragment ) {
	  				this.fragment.update();
	  			} else {
	  				if ( this.sectionType === SECTION_EACH ) {
	  					newFragment = new RepeatedFragment({
	  						owner: this,
	  						template: this.template.f,
	  						indexRef: this.template.i
	  					}).bind( this.model );
	  				} else {
	  	 				// only with and if-with provide context - if and unless do not
	  					var context = this.sectionType !== SECTION_IF && this.sectionType !== SECTION_UNLESS ? this.model : null;
	  					newFragment = new Fragment({
	  						owner: this,
	  						template: this.template.f
	  					}).bind( context );
	  				}
	  			}
	  		} else {
	  			if ( this.fragment && this.rendered ) {
	  				this.fragment.unbind().unrender( true );
	  			}

	  			this.fragment = null;
	  		}

	  		if ( newFragment ) {
	  			if ( this.rendered ) {
	  				var parentNode = this.parentFragment.findParentNode();
	  				var anchor = this.parentFragment.findNextNode( this );

	  				if ( anchor ) {
	  					var docFrag = createDocumentFragment();
	  					newFragment.render( docFrag );

	  					// we use anchor.parentNode, not parentNode, because the sibling
	  					// may be temporarily detached as a result of a shuffle
	  					anchor.parentNode.insertBefore( docFrag, anchor );
	  				} else {
	  					newFragment.render( parentNode );
	  				}
	  			}

	  			this.fragment = newFragment;
	  		}

	  		if ( this.nextSibling ) {
	  			this.nextSibling.dirty = true;
	  			this.nextSibling.update();
	  		}
	  	};

	  	return Section;
	  }(Mustache));

	  function valueContains ( selectValue, optionValue ) {
	  	var i = selectValue.length;
	  	while ( i-- ) {
	  		if ( selectValue[i] == optionValue ) return true;
	  	}
	  }

	  var Select = (function (Element) {
	  	function Select ( options ) {
	  		Element.call( this, options );
	  		this.options = [];
	  	}

	  	Select.prototype = Object.create( Element && Element.prototype );
	  	Select.prototype.constructor = Select;

	  	Select.prototype.foundNode = function foundNode ( node ) {
	  		if ( this.binding ) {
	  			var selectedOptions = getSelectedOptions( node );

	  			if ( selectedOptions.length > 0 ) {
	  				this.selectedOptions = selectedOptions;
	  			}
	  		}
	  	};

	  	Select.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );
	  		this.sync();

	  		var node = this.node;

	  		var i = node.options.length;
	  		while ( i-- ) {
	  			node.options[i].defaultSelected = node.options[i].selected;
	  		}

	  		this.rendered = true;
	  	};

	  	Select.prototype.sync = function sync () {
	  		var this$1 = this;

	  		var selectNode = this.node;

	  		if ( !selectNode ) return;

	  		var options = toArray( selectNode.options );

	  		if ( this.selectedOptions ) {
	  			options.forEach( function ( o ) {
	  				if ( this$1.selectedOptions.indexOf( o ) >= 0 ) o.selected = true;
	  				else o.selected = false;
	  			});
	  			this.binding.setFromNode( selectNode );
	  			delete this.selectedOptions;
	  			return;
	  		}

	  		var selectValue = this.getAttribute( 'value' );
	  		var isMultiple = this.getAttribute( 'multiple' );

	  		// If the <select> has a specified value, that should override
	  		// these options
	  		if ( selectValue !== undefined ) {
	  			var optionWasSelected;

	  			options.forEach( function ( o ) {
	  				var optionValue = o._ractive ? o._ractive.value : o.value;
	  				var shouldSelect = isMultiple ? valueContains( selectValue, optionValue ) : selectValue == optionValue;

	  				if ( shouldSelect ) {
	  					optionWasSelected = true;
	  				}

	  				o.selected = shouldSelect;
	  			});

	  			if ( !optionWasSelected && !isMultiple ) {
	  				if ( this.binding ) {
	  					this.binding.forceUpdate();
	  				}
	  			}
	  		}

	  		// Otherwise the value should be initialised according to which
	  		// <option> element is selected, if twoway binding is in effect
	  		else if ( this.binding ) {
	  			this.binding.forceUpdate();
	  		}
	  	};

	  	Select.prototype.update = function update () {
	  		Element.prototype.update.call(this);
	  		this.sync();
	  	};

	  	return Select;
	  }(Element));

	  var Textarea = (function (Input) {
	  	function Textarea( options ) {
	  		var template = options.template;

	  		options.deferContent = true;

	  		Input.call( this, options );

	  		// check for single interpolator binding
	  		if ( !this.attributeByName.value ) {
	  			if ( template.f && isBindable( { template: template } ) ) {
	  				this.attributes.push( createItem( {
	  					owner: this,
	  					template: { t: ATTRIBUTE, f: template.f, n: 'value' },
	  					parentFragment: this.parentFragment
	  				} ) );
	  			} else {
	  				this.fragment = new Fragment({ owner: this, cssIds: null, template: template.f });
	  			}
	  		}
	  	}

	  	Textarea.prototype = Object.create( Input && Input.prototype );
	  	Textarea.prototype.constructor = Textarea;

	  	Textarea.prototype.bubble = function bubble () {
	  		var this$1 = this;

	  		if ( !this.dirty ) {
	  			this.dirty = true;

	  			if ( this.rendered && !this.binding && this.fragment ) {
	  				runloop.scheduleTask( function () {
	  					this$1.dirty = false;
	  					this$1.node.value = this$1.fragment.toString();
	  				});
	  			}

	  			this.parentFragment.bubble(); // default behaviour
	  		}
	  	};

	  	return Textarea;
	  }(Input));

	  var Text = (function (Item) {
	  	function Text ( options ) {
	  		Item.call( this, options );
	  		this.type = TEXT;
	  	}

	  	Text.prototype = Object.create( Item && Item.prototype );
	  	Text.prototype.constructor = Text;

	  	Text.prototype.bind = function bind () {
	  		// noop
	  	};

	  	Text.prototype.detach = function detach () {
	  		return detachNode( this.node );
	  	};

	  	Text.prototype.firstNode = function firstNode () {
	  		return this.node;
	  	};

	  	Text.prototype.render = function render ( target, occupants ) {
	  		if ( inAttributes() ) return;
	  		this.rendered = true;

	  		if ( occupants ) {
	  			var n = occupants[0];
	  			if ( n && n.nodeType === 3 ) {
	  				occupants.shift();
	  				if ( n.nodeValue !== this.template ) {
	  					n.nodeValue = this.template;
	  				}
	  			} else {
	  				n = this.node = doc.createTextNode( this.template );
	  				if ( occupants[0] ) {
	  					target.insertBefore( n, occupants[0] );
	  				} else {
	  					target.appendChild( n );
	  				}
	  			}

	  			this.node = n;
	  		} else {
	  			this.node = doc.createTextNode( this.template );
	  			target.appendChild( this.node );
	  		}
	  	};

	  	Text.prototype.toString = function toString ( escape ) {
	  		return escape ? escapeHtml( this.template ) : this.template;
	  	};

	  	Text.prototype.unbind = function unbind () {
	  		// noop
	  	};

	  	Text.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( this.rendered && shouldDestroy ) this.detach();
	  		this.rendered = false;
	  	};

	  	Text.prototype.update = function update () {
	  		// noop
	  	};

	  	Text.prototype.valueOf = function valueOf () {
	  		return this.template;
	  	};

	  	return Text;
	  }(Item));

	  var prefix;

	  if ( !isClient ) {
	  	prefix = null;
	  } else {
	  	var prefixCache = {};
	  	var testStyle = createElement( 'div' ).style;

	  	prefix = function ( prop ) {
	  		prop = camelCase( prop );

	  		if ( !prefixCache[ prop ] ) {
	  			if ( testStyle[ prop ] !== undefined ) {
	  				prefixCache[ prop ] = prop;
	  			}

	  			else {
	  				// test vendors...
	  				var capped = prop.charAt( 0 ).toUpperCase() + prop.substring( 1 );

	  				var i = vendors.length;
	  				while ( i-- ) {
	  					var vendor = vendors[i];
	  					if ( testStyle[ vendor + capped ] !== undefined ) {
	  						prefixCache[ prop ] = vendor + capped;
	  						break;
	  					}
	  				}
	  			}
	  		}

	  		return prefixCache[ prop ];
	  	};
	  }

	  var prefix$1 = prefix;

	  var visible;
	  var hidden = 'hidden';

	  if ( doc ) {
	  	var prefix$2;

	  	if ( hidden in doc ) {
	  		prefix$2 = '';
	  	} else {
	  		var i$1 = vendors.length;
	  		while ( i$1-- ) {
	  			var vendor = vendors[i$1];
	  			hidden = vendor + 'Hidden';

	  			if ( hidden in doc ) {
	  				prefix$2 = vendor;
	  				break;
	  			}
	  		}
	  	}

	  	if ( prefix$2 !== undefined ) {
	  		doc.addEventListener( prefix$2 + 'visibilitychange', onChange );
	  		onChange();
	  	} else {
	  		// gah, we're in an old browser
	  		if ( 'onfocusout' in doc ) {
	  			doc.addEventListener( 'focusout', onHide );
	  			doc.addEventListener( 'focusin', onShow );
	  		}

	  		else {
	  			win.addEventListener( 'pagehide', onHide );
	  			win.addEventListener( 'blur', onHide );

	  			win.addEventListener( 'pageshow', onShow );
	  			win.addEventListener( 'focus', onShow );
	  		}

	  		visible = true; // until proven otherwise. Not ideal but hey
	  	}
	  }

	  function onChange () {
	  	visible = !doc[ hidden ];
	  }

	  function onHide () {
	  	visible = false;
	  }

	  function onShow () {
	  	visible = true;
	  }

	  var unprefixPattern = new RegExp( '^-(?:' + vendors.join( '|' ) + ')-' );

	  function unprefix ( prop ) {
	  	return prop.replace( unprefixPattern, '' );
	  }

	  var vendorPattern = new RegExp( '^(?:' + vendors.join( '|' ) + ')([A-Z])' );

	  function hyphenate ( str ) {
	  	if ( !str ) return ''; // edge case

	  	if ( vendorPattern.test( str ) ) str = '-' + str;

	  	return str.replace( /[A-Z]/g, function ( match ) { return '-' + match.toLowerCase(); } );
	  }

	  var createTransitions;

	  if ( !isClient ) {
	  	createTransitions = null;
	  } else {
	  	var testStyle$1 = createElement( 'div' ).style;
	  	var linear$1 = function ( x ) { return x; };

	  	var canUseCssTransitions = {};
	  	var cannotUseCssTransitions = {};

	  	// determine some facts about our environment
	  	var TRANSITION$1;
	  	var TRANSITIONEND;
	  	var CSS_TRANSITIONS_ENABLED;
	  	var TRANSITION_DURATION;
	  	var TRANSITION_PROPERTY;
	  	var TRANSITION_TIMING_FUNCTION;

	  	if ( testStyle$1.transition !== undefined ) {
	  		TRANSITION$1 = 'transition';
	  		TRANSITIONEND = 'transitionend';
	  		CSS_TRANSITIONS_ENABLED = true;
	  	} else if ( testStyle$1.webkitTransition !== undefined ) {
	  		TRANSITION$1 = 'webkitTransition';
	  		TRANSITIONEND = 'webkitTransitionEnd';
	  		CSS_TRANSITIONS_ENABLED = true;
	  	} else {
	  		CSS_TRANSITIONS_ENABLED = false;
	  	}

	  	if ( TRANSITION$1 ) {
	  		TRANSITION_DURATION = TRANSITION$1 + 'Duration';
	  		TRANSITION_PROPERTY = TRANSITION$1 + 'Property';
	  		TRANSITION_TIMING_FUNCTION = TRANSITION$1 + 'TimingFunction';
	  	}

	  	createTransitions = function ( t, to, options, changedProperties, resolve ) {

	  		// Wait a beat (otherwise the target styles will be applied immediately)
	  		// TODO use a fastdom-style mechanism?
	  		setTimeout( function () {
	  			var jsTransitionsComplete;
	  			var cssTransitionsComplete;
	  			var cssTimeout;

	  			function transitionDone () { clearTimeout( cssTimeout ); }

	  			function checkComplete () {
	  				if ( jsTransitionsComplete && cssTransitionsComplete ) {
	  					t.unregisterCompleteHandler( transitionDone );
	  					// will changes to events and fire have an unexpected consequence here?
	  					t.ractive.fire( t.name + ':end', t.node, t.isIntro );
	  					resolve();
	  				}
	  			}

	  			// this is used to keep track of which elements can use CSS to animate
	  			// which properties
	  			var hashPrefix = ( t.node.namespaceURI || '' ) + t.node.tagName;

	  			// need to reset transition properties
	  			var style = t.node.style;
	  			var previous = {
	  				property: style[ TRANSITION_PROPERTY ],
	  				timing: style[ TRANSITION_TIMING_FUNCTION ],
	  				duration: style[ TRANSITION_DURATION ]
	  			};

	  			style[ TRANSITION_PROPERTY ] = changedProperties.map( prefix$1 ).map( hyphenate ).join( ',' );
	  			style[ TRANSITION_TIMING_FUNCTION ] = hyphenate( options.easing || 'linear' );
	  			style[ TRANSITION_DURATION ] = ( options.duration / 1000 ) + 's';

	  			function transitionEndHandler ( event ) {
	  				var index = changedProperties.indexOf( camelCase( unprefix( event.propertyName ) ) );

	  				if ( index !== -1 ) {
	  					changedProperties.splice( index, 1 );
	  				}

	  				if ( changedProperties.length ) {
	  					// still transitioning...
	  					return;
	  				}

	  				clearTimeout( cssTimeout );
	  				cssTransitionsDone();
	  			}

	  			function cssTransitionsDone () {
	  				style[ TRANSITION_PROPERTY ] = previous.property;
	  				style[ TRANSITION_TIMING_FUNCTION ] = previous.duration;
	  				style[ TRANSITION_DURATION ] = previous.timing;

	  				t.node.removeEventListener( TRANSITIONEND, transitionEndHandler, false );

	  				cssTransitionsComplete = true;
	  				checkComplete();
	  			}

	  			t.node.addEventListener( TRANSITIONEND, transitionEndHandler, false );

	  			// safety net in case transitionend never fires
	  			cssTimeout = setTimeout( function () {
	  				changedProperties = [];
	  				cssTransitionsDone();
	  			}, options.duration + ( options.delay || 0 ) + 50 );
	  			t.registerCompleteHandler( transitionDone );

	  			setTimeout( function () {
	  				var i = changedProperties.length;
	  				var hash;
	  				var originalValue;
	  				var index;
	  				var propertiesToTransitionInJs = [];
	  				var prop;
	  				var suffix;
	  				var interpolator;

	  				while ( i-- ) {
	  					prop = changedProperties[i];
	  					hash = hashPrefix + prop;

	  					if ( CSS_TRANSITIONS_ENABLED && !cannotUseCssTransitions[ hash ] ) {
	  						style[ prefix$1( prop ) ] = to[ prop ];

	  						// If we're not sure if CSS transitions are supported for
	  						// this tag/property combo, find out now
	  						if ( !canUseCssTransitions[ hash ] ) {
	  							originalValue = t.getStyle( prop );

	  							// if this property is transitionable in this browser,
	  							// the current style will be different from the target style
	  							canUseCssTransitions[ hash ] = ( t.getStyle( prop ) != to[ prop ] );
	  							cannotUseCssTransitions[ hash ] = !canUseCssTransitions[ hash ];

	  							// Reset, if we're going to use timers after all
	  							if ( cannotUseCssTransitions[ hash ] ) {
	  								style[ prefix$1( prop ) ] = originalValue;
	  							}
	  						}
	  					}

	  					if ( !CSS_TRANSITIONS_ENABLED || cannotUseCssTransitions[ hash ] ) {
	  						// we need to fall back to timer-based stuff
	  						if ( originalValue === undefined ) {
	  							originalValue = t.getStyle( prop );
	  						}

	  						// need to remove this from changedProperties, otherwise transitionEndHandler
	  						// will get confused
	  						index = changedProperties.indexOf( prop );
	  						if ( index === -1 ) {
	  							warnIfDebug( 'Something very strange happened with transitions. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!', { node: t.node });
	  						} else {
	  							changedProperties.splice( index, 1 );
	  						}

	  						// TODO Determine whether this property is animatable at all

	  						suffix = /[^\d]*$/.exec( to[ prop ] )[0];
	  						interpolator = interpolate( parseFloat( originalValue ), parseFloat( to[ prop ] ) ) || ( function () { return to[ prop ]; } );

	  						// ...then kick off a timer-based transition
	  						propertiesToTransitionInJs.push({
	  							name: prefix$1( prop ),
	  							interpolator: interpolator,
	  							suffix: suffix
	  						});
	  					}
	  				}

	  				// javascript transitions
	  				if ( propertiesToTransitionInJs.length ) {
	  					var easing;

	  					if ( typeof options.easing === 'string' ) {
	  						easing = t.ractive.easing[ options.easing ];

	  						if ( !easing ) {
	  							warnOnceIfDebug( missingPlugin( options.easing, 'easing' ) );
	  							easing = linear$1;
	  						}
	  					} else if ( typeof options.easing === 'function' ) {
	  						easing = options.easing;
	  					} else {
	  						easing = linear$1;
	  					}

	  					new Ticker({
	  						duration: options.duration,
	  						easing: easing,
	  						step: function ( pos ) {
	  							var i = propertiesToTransitionInJs.length;
	  							while ( i-- ) {
	  								var prop = propertiesToTransitionInJs[i];
	  								t.node.style[ prop.name ] = prop.interpolator( pos ) + prop.suffix;
	  							}
	  						},
	  						complete: function () {
	  							jsTransitionsComplete = true;
	  							checkComplete();
	  						}
	  					});
	  				} else {
	  					jsTransitionsComplete = true;
	  				}

	  				if ( !changedProperties.length ) {
	  					// We need to cancel the transitionEndHandler, and deal with
	  					// the fact that it will never fire
	  					t.node.removeEventListener( TRANSITIONEND, transitionEndHandler, false );
	  					cssTransitionsComplete = true;
	  					checkComplete();
	  				}
	  			}, 0 );
	  		}, options.delay || 0 );
	  	};
	  }

	  var createTransitions$1 = createTransitions;

	  function resetStyle ( node, style ) {
	  	if ( style ) {
	  		node.setAttribute( 'style', style );
	  	} else {
	  		// Next line is necessary, to remove empty style attribute!
	  		// See http://stackoverflow.com/a/7167553
	  		node.getAttribute( 'style' );
	  		node.removeAttribute( 'style' );
	  	}
	  }

	  var getComputedStyle = win && ( win.getComputedStyle || legacy.getComputedStyle );
	  var resolved = Promise$1.resolve();

	  var names = {
	  	t0: 'intro-outro',
	  	t1: 'intro',
	  	t2: 'outro'
	  };

	  var Transition = function Transition ( options ) {
	  	this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  	this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  	this.ractive = this.owner.ractive;
	  	this.template = options.template;
	  	this.parentFragment = options.parentFragment;
	  	this.options = options;
	  	this.onComplete = [];
	  };

	  Transition.prototype.animateStyle = function animateStyle ( style, value, options ) {
	  	var this$1 = this;

	  		if ( arguments.length === 4 ) {
	  		throw new Error( 't.animateStyle() returns a promise - use .then() instead of passing a callback' );
	  	}

	  	// Special case - page isn't visible. Don't animate anything, because
	  	// that way you'll never get CSS transitionend events
	  	if ( !visible ) {
	  		this.setStyle( style, value );
	  		return resolved;
	  	}

	  	var to;

	  	if ( typeof style === 'string' ) {
	  		to = {};
	  		to[ style ] = value;
	  	} else {
	  		to = style;

	  		// shuffle arguments
	  		options = value;
	  	}

	  	// As of 0.3.9, transition authors should supply an `option` object with
	  	// `duration` and `easing` properties (and optional `delay`), plus a
	  	// callback function that gets called after the animation completes

	  	// TODO remove this check in a future version
	  	if ( !options ) {
	  		warnOnceIfDebug( 'The "%s" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340', this.name );
	  		options = this;
	  	}

	  	return new Promise$1( function ( fulfil ) {
	  		// Edge case - if duration is zero, set style synchronously and complete
	  		if ( !options.duration ) {
	  			this$1.setStyle( to );
	  			fulfil();
	  			return;
	  		}

	  		// Get a list of the properties we're animating
	  		var propertyNames = Object.keys( to );
	  		var changedProperties = [];

	  		// Store the current styles
	  		var computedStyle = getComputedStyle( this$1.owner.node );

	  		var i = propertyNames.length;
	  		while ( i-- ) {
	  			var prop = propertyNames[i];
	  			var current = computedStyle[ prefix$1( prop ) ];

	  			if ( current === '0px' ) current = 0;

	  			// we need to know if we're actually changing anything
	  			if ( current != to[ prop ] ) { // use != instead of !==, so we can compare strings with numbers
	  				changedProperties.push( prop );

	  				// make the computed style explicit, so we can animate where
	  				// e.g. height='auto'
	  				this$1.owner.node.style[ prefix$1( prop ) ] = current;
	  			}
	  		}

	  		// If we're not actually changing anything, the transitionend event
	  		// will never fire! So we complete early
	  		if ( !changedProperties.length ) {
	  			fulfil();
	  			return;
	  		}

	  		createTransitions$1( this$1, to, options, changedProperties, fulfil );
	  	});
	  };

	  Transition.prototype.bind = function bind () {
	  	var this$1 = this;

	  		var options = this.options;
	  	if ( options.template ) {
	  		if ( options.template.v === 't0' || options.template.v == 't1' ) this.element._introTransition = this;
	  		if ( options.template.v === 't0' || options.template.v == 't2' ) this.element._outroTransition = this;
	  		this.eventName = names[ options.template.v ];
	  	}

	  	var ractive = this.owner.ractive;

	  	if ( options.name ) {
	  		this.name = options.name;
	  	} else {
	  		var name = options.template.f;
	  		if ( typeof name.n === 'string' ) name = name.n;

	  		if ( typeof name !== 'string' ) {
	  			var fragment = new Fragment({
	  				owner: this.owner,
	  				template: name.n
	  			}).bind(); // TODO need a way to capture values without bind()

	  			name = fragment.toString();
	  			fragment.unbind();

	  			if ( name === '' ) {
	  				// empty string okay, just no transition
	  				return;
	  			}
	  		}

	  		this.name = name;
	  	}

	  	if ( options.params ) {
	  		this.params = options.params;
	  	} else {
	  		if ( options.template.f.a && !options.template.f.a.s ) {
	  			this.params = options.template.f.a;
	  		}

	  		else if ( options.template.f.d ) {
	  			// TODO is there a way to interpret dynamic arguments without all the
	  			// 'dependency thrashing'?
	  			var fragment$1 = new Fragment({
	  				owner: this.owner,
	  				template: options.template.f.d
	  			}).bind();

	  			this.params = fragment$1.getArgsList();
	  			fragment$1.unbind();
	  		}
	  	}

	  	if ( typeof this.name === 'function' ) {
	  		this._fn = this.name;
	  		this.name = this._fn.name;
	  	} else {
	  		this._fn = findInViewHierarchy( 'transitions', ractive, this.name );
	  	}

	  	if ( !this._fn ) {
	  		warnOnceIfDebug( missingPlugin( this.name, 'transition' ), { ractive: ractive });
	  	}

	  	// TODO: dry up after deprecation is done
	  	if ( options.template && this.template.f.a && this.template.f.a.s ) {
	  		this.resolvers = [];
	  		this.models = this.template.f.a.r.map( function ( ref, i ) {
	  			var resolver;
	  			var model = resolveReference( this$1.parentFragment, ref );
	  			if ( !model ) {
	  				resolver = this$1.parentFragment.resolve( ref, function ( model ) {
	  					this$1.models[i] = model;
	  					removeFromArray( this$1.resolvers, resolver );
	  					model.register( this$1 );
	  				});

	  				this$1.resolvers.push( resolver );
	  			} else model.register( this$1 );

	  			return model;
	  		});
	  		this.argsFn = getFunction( this.template.f.a.s, this.template.f.a.r.length );
	  	}
	  };

	  Transition.prototype.destroyed = function destroyed () {};

	  Transition.prototype.getStyle = function getStyle ( props ) {
	  	var computedStyle = getComputedStyle( this.owner.node );

	  	if ( typeof props === 'string' ) {
	  		var value = computedStyle[ prefix$1( props ) ];
	  		return value === '0px' ? 0 : value;
	  	}

	  	if ( !isArray( props ) ) {
	  		throw new Error( 'Transition$getStyle must be passed a string, or an array of strings representing CSS properties' );
	  	}

	  	var styles = {};

	  	var i = props.length;
	  	while ( i-- ) {
	  		var prop = props[i];
	  		var value$1 = computedStyle[ prefix$1( prop ) ];

	  		if ( value$1 === '0px' ) value$1 = 0;
	  		styles[ prop ] = value$1;
	  	}

	  	return styles;
	  };

	  Transition.prototype.processParams = function processParams ( params, defaults ) {
	  	if ( typeof params === 'number' ) {
	  		params = { duration: params };
	  	}

	  	else if ( typeof params === 'string' ) {
	  		if ( params === 'slow' ) {
	  			params = { duration: 600 };
	  		} else if ( params === 'fast' ) {
	  			params = { duration: 200 };
	  		} else {
	  			params = { duration: 400 };
	  		}
	  	} else if ( !params ) {
	  		params = {};
	  	}

	  	return extendObj( {}, defaults, params );
	  };

	  Transition.prototype.rebinding = function rebinding ( next, previous ) {
	  	var idx = this.models.indexOf( previous );
	  	if ( !~idx ) return;

	  	next = rebindMatch( this.template.f.a.r[ idx ], next, previous );
	  	if ( next === previous ) return;

	  	previous.unregister( this );
	  	this.models.splice( idx, 1, next );
	  	if ( next ) next.addShuffleRegister( this, 'mark' );
	  };

	  Transition.prototype.registerCompleteHandler = function registerCompleteHandler ( fn ) {
	  	addToArray( this.onComplete, fn );
	  };

	  Transition.prototype.render = function render () {};

	  Transition.prototype.setStyle = function setStyle ( style, value ) {
	  	if ( typeof style === 'string' ) {
	  		this.owner.node.style[ prefix$1( style ) ] = value;
	  	}

	  	else {
	  		var prop;
	  		for ( prop in style ) {
	  			if ( style.hasOwnProperty( prop ) ) {
	  				this.owner.node.style[ prefix$1( prop ) ] = style[ prop ];
	  			}
	  		}
	  	}

	  	return this;
	  };

	  Transition.prototype.start = function start () {
	  	var this$1 = this;

	  		var node = this.node = this.element.node;
	  	var originalStyle = node.getAttribute( 'style' );

	  	var completed;
	  	var args = this.params;

	  	// create t.complete() - we don't want this on the prototype,
	  	// because we don't want `this` silliness when passing it as
	  	// an argument
	  	this.complete = function ( noReset ) {
	  		if ( completed ) {
	  			return;
	  		}

	  		this$1.onComplete.forEach( function ( fn ) { return fn(); } );
	  		if ( !noReset && this$1.isIntro ) {
	  			resetStyle( node, originalStyle);
	  		}

	  		this$1._manager.remove( this$1 );

	  		completed = true;
	  	};

	  	// If the transition function doesn't exist, abort
	  	if ( !this._fn ) {
	  		this.complete();
	  		return;
	  	}

	  	// get expression args if supplied
	  	if ( this.argsFn ) {
	  		var values = this.models.map( function ( model ) {
	  			if ( !model ) return undefined;

	  			return model.get();
	  		});
	  		args = this.argsFn.apply( this.ractive, values );
	  	}

	  	var promise = this._fn.apply( this.ractive, [ this ].concat( args ) );
	  	if ( promise ) promise.then( this.complete );
	  };

	  Transition.prototype.toString = function toString () { return ''; };

	  Transition.prototype.unbind = function unbind$1 () {
	  	if ( this.resolvers ) this.resolvers.forEach( unbind );
	  };

	  Transition.prototype.unregisterCompleteHandler = function unregisterCompleteHandler ( fn ) {
	  	removeFromArray( this.onComplete, fn );
	  };

	  Transition.prototype.unrender = function unrender () {};

	  Transition.prototype.update = function update () {};

	  var elementCache = {};

	  var ieBug;
	  var ieBlacklist;

	  try {
	  	createElement( 'table' ).innerHTML = 'foo';
	  } catch ( err ) {
	  	ieBug = true;

	  	ieBlacklist = {
	  		TABLE:  [ '<table class="x">', '</table>' ],
	  		THEAD:  [ '<table><thead class="x">', '</thead></table>' ],
	  		TBODY:  [ '<table><tbody class="x">', '</tbody></table>' ],
	  		TR:     [ '<table><tr class="x">', '</tr></table>' ],
	  		SELECT: [ '<select class="x">', '</select>' ]
	  	};
	  }

	  function insertHtml ( html, node, docFrag ) {
	  	var nodes = [];

	  	// render 0 and false
	  	if ( html == null || html === '' ) return nodes;

	  	var container;
	  	var wrapper;
	  	var selectedOption;

	  	if ( ieBug && ( wrapper = ieBlacklist[ node.tagName ] ) ) {
	  		container = element( 'DIV' );
	  		container.innerHTML = wrapper[0] + html + wrapper[1];
	  		container = container.querySelector( '.x' );

	  		if ( container.tagName === 'SELECT' ) {
	  			selectedOption = container.options[ container.selectedIndex ];
	  		}
	  	}

	  	else if ( node.namespaceURI === svg$1 ) {
	  		container = element( 'DIV' );
	  		container.innerHTML = '<svg class="x">' + html + '</svg>';
	  		container = container.querySelector( '.x' );
	  	}

	  	else if ( node.tagName === 'TEXTAREA' ) {
	  		container = createElement( 'div' );

	  		if ( typeof container.textContent !== 'undefined' ) {
	  			container.textContent = html;
	  		} else {
	  			container.innerHTML = html;
	  		}
	  	}

	  	else {
	  		container = element( node.tagName );
	  		container.innerHTML = html;

	  		if ( container.tagName === 'SELECT' ) {
	  			selectedOption = container.options[ container.selectedIndex ];
	  		}
	  	}

	  	var child;
	  	while ( child = container.firstChild ) {
	  		nodes.push( child );
	  		docFrag.appendChild( child );
	  	}

	  	// This is really annoying. Extracting <option> nodes from the
	  	// temporary container <select> causes the remaining ones to
	  	// become selected. So now we have to deselect them. IE8, you
	  	// amaze me. You really do
	  	// ...and now Chrome too
	  	var i;
	  	if ( node.tagName === 'SELECT' ) {
	  		i = nodes.length;
	  		while ( i-- ) {
	  			if ( nodes[i] !== selectedOption ) {
	  				nodes[i].selected = false;
	  			}
	  		}
	  	}

	  	return nodes;
	  }

	  function element ( tagName ) {
	  	return elementCache[ tagName ] || ( elementCache[ tagName ] = createElement( tagName ) );
	  }

	  var Triple = (function (Mustache) {
	  	function Triple ( options ) {
	  		Mustache.call( this, options );
	  	}

	  	Triple.prototype = Object.create( Mustache && Mustache.prototype );
	  	Triple.prototype.constructor = Triple;

	  	Triple.prototype.detach = function detach () {
	  		var docFrag = createDocumentFragment();
	  		this.nodes.forEach( function ( node ) { return docFrag.appendChild( node ); } );
	  		return docFrag;
	  	};

	  	Triple.prototype.find = function find ( selector ) {
	  		var this$1 = this;

	  		var len = this.nodes.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var node = this$1.nodes[i];

	  			if ( node.nodeType !== 1 ) continue;

	  			if ( matches( node, selector ) ) return node;

	  			var queryResult = node.querySelector( selector );
	  			if ( queryResult ) return queryResult;
	  		}

	  		return null;
	  	};

	  	Triple.prototype.findAll = function findAll ( selector, query ) {
	  		var this$1 = this;

	  		var len = this.nodes.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var node = this$1.nodes[i];

	  			if ( node.nodeType !== 1 ) continue;

	  			if ( query.test( node ) ) query.add( node );

	  			var queryAllResult = node.querySelectorAll( selector );
	  			if ( queryAllResult ) {
	  				var numNodes = queryAllResult.length;
	  				var j;

	  				for ( j = 0; j < numNodes; j += 1 ) {
	  					query.add( queryAllResult[j] );
	  				}
	  			}
	  		}
	  	};

	  	Triple.prototype.findComponent = function findComponent () {
	  		return null;
	  	};

	  	Triple.prototype.firstNode = function firstNode () {
	  		return this.nodes[0];
	  	};

	  	Triple.prototype.render = function render ( target ) {
	  		var html = this.model ? this.model.get() : '';
	  		this.nodes = insertHtml( html, this.parentFragment.findParentNode(), target );
	  		this.rendered = true;
	  	};

	  	Triple.prototype.toString = function toString () {
	  		return this.model && this.model.get() != null ? decodeCharacterReferences( '' + this.model.get() ) : '';
	  	};

	  	Triple.prototype.unrender = function unrender () {
	  		if ( this.nodes ) this.nodes.forEach( function ( node ) { return detachNode( node ); } );
	  		this.rendered = false;
	  	};

	  	Triple.prototype.update = function update () {
	  		if ( this.rendered && this.dirty ) {
	  			this.dirty = false;

	  			this.unrender();
	  			var docFrag = createDocumentFragment();
	  			this.render( docFrag );

	  			var parentNode = this.parentFragment.findParentNode();
	  			var anchor = this.parentFragment.findNextNode( this );

	  			parentNode.insertBefore( docFrag, anchor );
	  		} else {
	  			// make sure to reset the dirty flag even if not rendered
	  			this.dirty = false;
	  		}
	  	};

	  	return Triple;
	  }(Mustache));

	  var Yielder = (function (Item) {
	  	function Yielder ( options ) {
	  		Item.call( this, options );

	  		this.container = options.parentFragment.ractive;
	  		this.component = this.container.component;

	  		this.containerFragment = options.parentFragment;
	  		this.parentFragment = this.component.parentFragment;

	  		// {{yield}} is equivalent to {{yield content}}
	  		this.name = options.template.n || '';
	  	}

	  	Yielder.prototype = Object.create( Item && Item.prototype );
	  	Yielder.prototype.constructor = Yielder;

	  	Yielder.prototype.bind = function bind () {
	  		var name = this.name;

	  		( this.component.yielders[ name ] || ( this.component.yielders[ name ] = [] ) ).push( this );

	  		// TODO don't parse here
	  		var template = this.container._inlinePartials[ name || 'content' ];

	  		if ( typeof template === 'string' ) {
	  			template = parse( template ).t;
	  		}

	  		if ( !template ) {
	  			warnIfDebug( ("Could not find template for partial \"" + name + "\""), { ractive: this.ractive });
	  			template = [];
	  		}

	  		this.fragment = new Fragment({
	  			owner: this,
	  			ractive: this.container.parent,
	  			template: template
	  		}).bind();
	  	};

	  	Yielder.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.containerFragment.bubble();
	  			this.dirty = true;
	  		}
	  	};

	  	Yielder.prototype.detach = function detach () {
	  		return this.fragment.detach();
	  	};

	  	Yielder.prototype.find = function find ( selector ) {
	  		return this.fragment.find( selector );
	  	};

	  	Yielder.prototype.findAll = function findAll ( selector, queryResult ) {
	  		this.fragment.findAll( selector, queryResult );
	  	};

	  	Yielder.prototype.findComponent = function findComponent ( name ) {
	  		return this.fragment.findComponent( name );
	  	};

	  	Yielder.prototype.findAllComponents = function findAllComponents ( name, queryResult ) {
	  		this.fragment.findAllComponents( name, queryResult );
	  	};

	  	Yielder.prototype.findNextNode = function findNextNode() {
	  		return this.containerFragment.findNextNode( this );
	  	};

	  	Yielder.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment.firstNode( skipParent );
	  	};

	  	Yielder.prototype.render = function render ( target, occupants ) {
	  		return this.fragment.render( target, occupants );
	  	};

	  	Yielder.prototype.setTemplate = function setTemplate ( name ) {
	  		var template = this.parentFragment.ractive.partials[ name ];

	  		if ( typeof template === 'string' ) {
	  			template = parse( template ).t;
	  		}

	  		this.partialTemplate = template || []; // TODO warn on missing partial
	  	};

	  	Yielder.prototype.toString = function toString ( escape ) {
	  		return this.fragment.toString( escape );
	  	};

	  	Yielder.prototype.unbind = function unbind () {
	  		this.fragment.unbind();
	  		removeFromArray( this.component.yielders[ this.name ], this );
	  	};

	  	Yielder.prototype.unrender = function unrender ( shouldDestroy ) {
	  		this.fragment.unrender( shouldDestroy );
	  	};

	  	Yielder.prototype.update = function update () {
	  		this.dirty = false;
	  		this.fragment.update();
	  	};

	  	return Yielder;
	  }(Item));

	  // finds the component constructor in the registry or view hierarchy registries
	  function getComponentConstructor ( ractive, name ) {
	  	var instance = findInstance( 'components', ractive, name );
	  	var Component;

	  	if ( instance ) {
	  		Component = instance.components[ name ];

	  		// best test we have for not Ractive.extend
	  		if ( !Component._Parent ) {
	  			// function option, execute and store for reset
	  			var fn = Component.bind( instance );
	  			fn.isOwner = instance.components.hasOwnProperty( name );
	  			Component = fn();

	  			if ( !Component ) {
	  				warnIfDebug( noRegistryFunctionReturn, name, 'component', 'component', { ractive: ractive });
	  				return;
	  			}

	  			if ( typeof Component === 'string' ) {
	  				// allow string lookup
	  				Component = getComponentConstructor( ractive, Component );
	  			}

	  			Component._fn = fn;
	  			instance.components[ name ] = Component;
	  		}
	  	}

	  	return Component;
	  }

	  var constructors = {};
	  constructors[ ALIAS ] = Alias;
	  constructors[ DOCTYPE ] = Doctype;
	  constructors[ INTERPOLATOR ] = Interpolator;
	  constructors[ PARTIAL ] = Partial;
	  constructors[ SECTION ] = Section;
	  constructors[ TRIPLE ] = Triple;
	  constructors[ YIELDER ] = Yielder;

	  constructors[ ATTRIBUTE ] = Attribute;
	  constructors[ BINDING_FLAG ] = BindingFlag;
	  constructors[ DECORATOR ] = Decorator;
	  constructors[ EVENT ] = EventDirective;
	  constructors[ TRANSITION ] = Transition;

	  var specialElements = {
	  	doctype: Doctype,
	  	form: Form,
	  	input: Input,
	  	option: Option,
	  	select: Select,
	  	textarea: Textarea
	  };

	  function createItem ( options ) {
	  	if ( typeof options.template === 'string' ) {
	  		return new Text( options );
	  	}

	  	if ( options.template.t === ELEMENT ) {
	  		// could be component or element
	  		var ComponentConstructor = getComponentConstructor( options.parentFragment.ractive, options.template.e );
	  		if ( ComponentConstructor ) {
	  			return new Component( options, ComponentConstructor );
	  		}

	  		var tagName = options.template.e.toLowerCase();

	  		var ElementConstructor = specialElements[ tagName ] || Element;
	  		return new ElementConstructor( options );
	  	}

	  	var Item;

	  	// component mappings are a special case of attribute
	  	if ( options.template.t === ATTRIBUTE ) {
	  		var el = options.owner;
	  		if ( !el || ( el.type !== COMPONENT && el.type !== ELEMENT ) ) {
	  			el = findElement( options.parentFragment );
	  		}
	  		options.element = el;

	  		Item = el.type === COMPONENT ? Mapping : Attribute;
	  	} else {
	  		Item = constructors[ options.template.t ];
	  	}

	  	if ( !Item ) throw new Error( ("Unrecognised item type " + (options.template.t)) );

	  	return new Item( options );
	  }

	  // TODO all this code needs to die
	  function processItems ( items, values, guid, counter ) {
	  	if ( counter === void 0 ) counter = 0;

	  	return items.map( function ( item ) {
	  		if ( item.type === TEXT ) {
	  			return item.template;
	  		}

	  		if ( item.fragment ) {
	  			if ( item.fragment.iterations ) {
	  				return item.fragment.iterations.map( function ( fragment ) {
	  					return processItems( fragment.items, values, guid, counter );
	  				}).join( '' );
	  			} else {
	  				return processItems( item.fragment.items, values, guid, counter );
	  			}
	  		}

	  		var placeholderId = "" + guid + "-" + (counter++);
	  		var model = item.model || item.newModel;

	  		values[ placeholderId ] = model ?
	  			model.wrapper ?
	  				model.wrapperValue :
	  				model.get() :
	  			undefined;

	  		return '${' + placeholderId + '}';
	  	}).join( '' );
	  }

	  function unrenderAndDestroy$1 ( item ) {
	  	item.unrender( true );
	  }

	  var Fragment = function Fragment ( options ) {
	  	this.owner = options.owner; // The item that owns this fragment - an element, section, partial, or attribute

	  	this.isRoot = !options.owner.parentFragment;
	  	this.parent = this.isRoot ? null : this.owner.parentFragment;
	  	this.ractive = options.ractive || ( this.isRoot ? options.owner : this.parent.ractive );

	  	this.componentParent = ( this.isRoot && this.ractive.component ) ? this.ractive.component.parentFragment : null;

	  	this.context = null;
	  	this.rendered = false;

	  	// encapsulated styles should be inherited until they get applied by an element
	  	this.cssIds = 'cssIds' in options ? options.cssIds : ( this.parent ? this.parent.cssIds : null );

	  	this.resolvers = [];

	  	this.dirty = false;
	  	this.dirtyArgs = this.dirtyValue = true; // TODO getArgsList is nonsense - should deprecate legacy directives style

	  	this.template = options.template || [];
	  	this.createItems();
	  };

	  Fragment.prototype.bind = function bind$1$$ ( context ) {
	  	this.context = context;
	  	this.items.forEach( bind$1 );
	  	this.bound = true;

	  	// in rare cases, a forced resolution (or similar) will cause the
	  	// fragment to be dirty before it's even finished binding. In those
	  	// cases we update immediately
	  	if ( this.dirty ) this.update();

	  	return this;
	  };

	  Fragment.prototype.bubble = function bubble () {
	  	this.dirtyArgs = this.dirtyValue = true;

	  	if ( !this.dirty ) {
	  		this.dirty = true;

	  		if ( this.isRoot ) { // TODO encapsulate 'is component root, but not overall root' check?
	  			if ( this.ractive.component ) {
	  				this.ractive.component.bubble();
	  			} else if ( this.bound ) {
	  				runloop.addFragment( this );
	  			}
	  		} else {
	  			this.owner.bubble();
	  		}
	  	}
	  };

	  Fragment.prototype.createItems = function createItems () {
	  	// this is a hot code path
	  	var this$1 = this;

	  		var max = this.template.length;
	  	this.items = [];
	  	for ( var i = 0; i < max; i++ ) {
	  		this$1.items[i] = createItem({ parentFragment: this$1, template: this$1.template[i], index: i });
	  	}
	  };

	  Fragment.prototype.destroyed = function destroyed () {
	  	this.items.forEach( function ( i ) { return i.destroyed(); } );
	  };

	  Fragment.prototype.detach = function detach () {
	  	var docFrag = createDocumentFragment();
	  	this.items.forEach( function ( item ) { return docFrag.appendChild( item.detach() ); } );
	  	return docFrag;
	  };

	  Fragment.prototype.find = function find ( selector ) {
	  	var this$1 = this;

	  		var len = this.items.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.items[i].find( selector );
	  		if ( found ) return found;
	  	}
	  };

	  Fragment.prototype.findAll = function findAll ( selector, query ) {
	  	var this$1 = this;

	  		if ( this.items ) {
	  		var len = this.items.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var item = this$1.items[i];

	  			if ( item.findAll ) {
	  				item.findAll( selector, query );
	  			}
	  		}
	  	}

	  	return query;
	  };

	  Fragment.prototype.findComponent = function findComponent ( name ) {
	  	var this$1 = this;

	  		var len = this.items.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.items[i].findComponent( name );
	  		if ( found ) return found;
	  	}
	  };

	  Fragment.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  	var this$1 = this;

	  		if ( this.items ) {
	  		var len = this.items.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var item = this$1.items[i];

	  			if ( item.findAllComponents ) {
	  				item.findAllComponents( name, query );
	  			}
	  		}
	  	}

	  	return query;
	  };

	  Fragment.prototype.findContext = function findContext () {
	  	var fragment = this;
	  	while ( fragment && !fragment.context ) fragment = fragment.parent;
	  	if ( !fragment ) return this.ractive.viewmodel;
	  	else return fragment.context;
	  };

	  Fragment.prototype.findNextNode = function findNextNode ( item ) {
	  	// search for the next node going forward
	  	var this$1 = this;

	  		if ( item ) {
	  		for ( var i = item.index + 1; i < this$1.items.length; i++ ) {
	  			if ( !this$1.items[ i ] ) continue;

	  			var node = this$1.items[ i ].firstNode( true );
	  			if ( node ) return node;
	  		}
	  	}

	  	// if this is the root fragment, and there are no more items,
	  	// it means we're at the end...
	  	if ( this.isRoot ) {
	  		if ( this.ractive.component ) {
	  			return this.ractive.component.parentFragment.findNextNode( this.ractive.component );
	  		}

	  		// TODO possible edge case with other content
	  		// appended to this.ractive.el?
	  		return null;
	  	}

	  	if ( this.parent ) return this.owner.findNextNode( this ); // the argument is in case the parent is a RepeatedFragment
	  };

	  Fragment.prototype.findParentNode = function findParentNode () {
	  	var fragment = this;

	  	do {
	  		if ( fragment.owner.type === ELEMENT ) {
	  			return fragment.owner.node;
	  		}

	  		if ( fragment.isRoot && !fragment.ractive.component ) { // TODO encapsulate check
	  			return fragment.ractive.el;
	  		}

	  		if ( fragment.owner.type === YIELDER ) {
	  			fragment = fragment.owner.containerFragment;
	  		} else {
	  			fragment = fragment.componentParent || fragment.parent; // TODO ugh
	  		}
	  	} while ( fragment );

	  	throw new Error( 'Could not find parent node' ); // TODO link to issue tracker
	  };

	  Fragment.prototype.findRepeatingFragment = function findRepeatingFragment () {
	  	var fragment = this;
	  	// TODO better check than fragment.parent.iterations
	  	while ( ( fragment.parent || fragment.componentParent ) && !fragment.isIteration ) {
	  		fragment = fragment.parent || fragment.componentParent;
	  	}

	  	return fragment;
	  };

	  Fragment.prototype.firstNode = function firstNode ( skipParent ) {
	  	var this$1 = this;

	  		var node;
	  	for ( var i = 0; i < this$1.items.length; i++ ) {
	  		node = this$1.items[i].firstNode( true );

	  		if ( node ) {
	  			return node;
	  		}
	  	}

	  	if ( skipParent ) return null;

	  	return this.parent.findNextNode( this.owner );
	  };

	  // TODO ideally, this would be deprecated in favour of an
	  // expression-like approach
	  Fragment.prototype.getArgsList = function getArgsList () {
	  	if ( this.dirtyArgs ) {
	  		var values = {};
	  		var source = processItems( this.items, values, this.ractive._guid );
	  		var parsed = parseJSON( '[' + source + ']', values );

	  		this.argsList = parsed ?
	  			parsed.value :
	  			[ this.toString() ];

	  		this.dirtyArgs = false;
	  	}

	  	return this.argsList;
	  };

	  Fragment.prototype.rebinding = function rebinding ( next ) {
	  	this.context = next;
	  };

	  Fragment.prototype.render = function render ( target, occupants ) {
	  	if ( this.rendered ) throw new Error( 'Fragment is already rendered!' );
	  	this.rendered = true;

	  	this.items.forEach( function ( item ) { return item.render( target, occupants ); } );
	  };

	  Fragment.prototype.resetTemplate = function resetTemplate ( template ) {
	  	var wasBound = this.bound;
	  	var wasRendered = this.rendered;

	  	// TODO ensure transitions are disabled globally during reset

	  	if ( wasBound ) {
	  		if ( wasRendered ) this.unrender( true );
	  		this.unbind();
	  	}

	  	this.template = template;
	  	this.createItems();

	  	if ( wasBound ) {
	  		this.bind( this.context );

	  		if ( wasRendered ) {
	  			var parentNode = this.findParentNode();
	  			var anchor = this.findNextNode();

	  			if ( anchor ) {
	  				var docFrag = createDocumentFragment();
	  				this.render( docFrag );
	  				parentNode.insertBefore( docFrag, anchor );
	  			} else {
	  				this.render( parentNode );
	  			}
	  		}
	  	}
	  };

	  Fragment.prototype.resolve = function resolve ( template, callback ) {
	  	if ( !this.context && this.parent.resolve ) {
	  		return this.parent.resolve( template, callback );
	  	}

	  	var resolver = new ReferenceResolver( this, template, callback );
	  	this.resolvers.push( resolver );

	  	return resolver; // so we can e.g. force resolution
	  };

	  Fragment.prototype.shuffled = function shuffled () {
	  	this.items.forEach( function ( i ) { return i.shuffled(); } );
	  };

	  Fragment.prototype.toHtml = function toHtml () {
	  	return this.toString();
	  };

	  Fragment.prototype.toString = function toString$1$$ ( escape ) {
	  	return this.items.map( escape ? toEscapedString : toString$1 ).join( '' );
	  };

	  Fragment.prototype.unbind = function unbind$1 () {
	  	this.items.forEach( unbind );
	  	this.bound = false;

	  	return this;
	  };

	  Fragment.prototype.unrender = function unrender$1 ( shouldDestroy ) {
	  	this.items.forEach( shouldDestroy ? unrenderAndDestroy$1 : unrender );
	  	this.rendered = false;
	  };

	  Fragment.prototype.update = function update$1 () {
	  	if ( this.dirty ) {
	  		if ( !this.updating ) {
	  			this.dirty = false;
	  			this.updating = true;
	  			this.items.forEach( update );
	  			this.updating = false;
	  		} else if ( this.isRoot ) {
	  			runloop.addFragmentToRoot( this );
	  		}
	  	}
	  };

	  Fragment.prototype.valueOf = function valueOf () {
	  	if ( this.items.length === 1 ) {
	  		return this.items[0].valueOf();
	  	}

	  	if ( this.dirtyValue ) {
	  		var values = {};
	  		var source = processItems( this.items, values, this.ractive._guid );
	  		var parsed = parseJSON( source, values );

	  		this.value = parsed ?
	  			parsed.value :
	  			this.toString();

	  		this.dirtyValue = false;
	  	}

	  	return this.value;
	  };

	  // TODO should resetTemplate be asynchronous? i.e. should it be a case
	  // of outro, update template, intro? I reckon probably not, since that
	  // could be achieved with unrender-resetTemplate-render. Also, it should
	  // conceptually be similar to resetPartial, which couldn't be async

	  function Ractive$resetTemplate ( template ) {
	  	templateConfigurator.init( null, this, { template: template });

	  	var transitionsEnabled = this.transitionsEnabled;
	  	this.transitionsEnabled = false;

	  	// Is this is a component, we need to set the `shouldDestroy`
	  	// flag, otherwise it will assume by default that a parent node
	  	// will be detached, and therefore it doesn't need to bother
	  	// detaching its own nodes
	  	var component = this.component;
	  	if ( component ) component.shouldDestroy = true;
	  	this.unrender();
	  	if ( component ) component.shouldDestroy = false;

	  	// remove existing fragment and create new one
	  	this.fragment.unbind().unrender( true );

	  	this.fragment = new Fragment({
	  		template: this.template,
	  		root: this,
	  		owner: this
	  	});

	  	var docFrag = createDocumentFragment();
	  	this.fragment.bind( this.viewmodel ).render( docFrag );

	  	// if this is a component, its el may not be valid, so find a
	  	// target based on the component container
	  	if ( component ) {
	  		this.fragment.findParentNode().insertBefore( docFrag, component.findNextNode() );
	  	} else {
	  		this.el.insertBefore( docFrag, this.anchor );
	  	}

	  	this.transitionsEnabled = transitionsEnabled;
	  }

	  var reverse$1 = makeArrayMethod( 'reverse' ).path;

	  function Ractive$set ( keypath, value ) {
	  	var ractive = this;

	  	return set( ractive, build( ractive, keypath, value ) );
	  }

	  var shift$1 = makeArrayMethod( 'shift' ).path;

	  var sort$1 = makeArrayMethod( 'sort' ).path;

	  var splice$1 = makeArrayMethod( 'splice' ).path;

	  function Ractive$subtract ( keypath, d ) {
	  	return add( this, keypath, ( d === undefined ? -1 : -d ) );
	  }

	  var teardownHook$1 = new Hook( 'teardown' );

	  // Teardown. This goes through the root fragment and all its children, removing observers
	  // and generally cleaning up after itself

	  function Ractive$teardown () {
	  	if ( this.torndown ) {
	  		warnIfDebug( 'ractive.teardown() was called on a Ractive instance that was already torn down' );
	  		return Promise$1.resolve();
	  	}

	  	this.torndown = true;
	  	this.fragment.unbind();
	  	this.viewmodel.teardown();

	  	this._observers.forEach( cancel );

	  	if ( this.fragment.rendered && this.el.__ractive_instances__ ) {
	  		removeFromArray( this.el.__ractive_instances__, this );
	  	}

	  	this.shouldDestroy = true;
	  	var promise = ( this.fragment.rendered ? this.unrender() : Promise$1.resolve() );

	  	teardownHook$1.fire( this );

	  	return promise;
	  }

	  function Ractive$toggle ( keypath ) {
	  	if ( typeof keypath !== 'string' ) {
	  		throw new TypeError( badArguments );
	  	}

	  	return set( this, gather( this, keypath ).map( function ( m ) { return [ m, !m.get() ]; } ) );
	  }

	  function Ractive$toCSS() {
	  	var cssIds = [ this.cssId ].concat( this.findAllComponents().map( function ( c ) { return c.cssId; } ) );
	  	var uniqueCssIds = Object.keys(cssIds.reduce( function ( ids, id ) { return (ids[id] = true, ids); }, {}));
	  	return getCSS( uniqueCssIds );
	  }

	  function Ractive$toHTML () {
	  	return this.fragment.toString( true );
	  }

	  function toText () {
	  	return this.fragment.toString( false );
	  }

	  function Ractive$transition ( name, node, params ) {

	  	if ( node instanceof HTMLElement ) {
	  		// good to go
	  	}
	  	else if ( isObject( node ) ) {
	  		// omitted, use event node
	  		params = node;
	  	}

	  	// if we allow query selector, then it won't work
	  	// simple params like "fast"

	  	// else if ( typeof node === 'string' ) {
	  	// 	// query selector
	  	// 	node = this.find( node )
	  	// }

	  	node = node || this.event.node;

	  	if ( !node || !node._ractive ) {
	  		fatal( ("No node was supplied for transition " + name) );
	  	}

	  	params = params || {};
	  	var owner = node._ractive.proxy;
	  	var transition = new Transition({ owner: owner, parentFragment: owner.parentFragment, name: name, params: params });
	  	transition.bind();

	  	var promise = runloop.start( this, true );
	  	runloop.registerTransition( transition );
	  	runloop.end();

	  	promise.then( function () { return transition.unbind(); } );
	  	return promise;
	  }

	  function unlink$1( here ) {
	  	var promise = runloop.start();
	  	this.viewmodel.joinAll( splitKeypathI( here ), { lastLink: false } ).unlink();
	  	runloop.end();
	  	return promise;
	  }

	  var unrenderHook$1 = new Hook( 'unrender' );

	  function Ractive$unrender () {
	  	if ( !this.fragment.rendered ) {
	  		warnIfDebug( 'ractive.unrender() was called on a Ractive instance that was not rendered' );
	  		return Promise$1.resolve();
	  	}

	  	var promise = runloop.start( this, true );

	  	// If this is a component, and the component isn't marked for destruction,
	  	// don't detach nodes from the DOM unnecessarily
	  	var shouldDestroy = !this.component || this.component.shouldDestroy || this.shouldDestroy;
	  	this.fragment.unrender( shouldDestroy );

	  	removeFromArray( this.el.__ractive_instances__, this );

	  	unrenderHook$1.fire( this );

	  	runloop.end();
	  	return promise;
	  }

	  var unshift$1 = makeArrayMethod( 'unshift' ).path;

	  function Ractive$updateModel ( keypath, cascade ) {
	  	var promise = runloop.start( this, true );

	  	if ( !keypath ) {
	  		this.viewmodel.updateFromBindings( true );
	  	} else {
	  		this.viewmodel.joinAll( splitKeypathI( keypath ) ).updateFromBindings( cascade !== false );
	  	}

	  	runloop.end();

	  	return promise;
	  }

	  var proto = {
	  	add: Ractive$add,
	  	animate: Ractive$animate,
	  	detach: Ractive$detach,
	  	find: Ractive$find,
	  	findAll: Ractive$findAll,
	  	findAllComponents: Ractive$findAllComponents,
	  	findComponent: Ractive$findComponent,
	  	findContainer: Ractive$findContainer,
	  	findParent: Ractive$findParent,
	  	fire: Ractive$fire,
	  	get: Ractive$get,
	  	getNodeInfo: getNodeInfo,
	  	insert: Ractive$insert,
	  	link: link$1,
	  	merge: thisRactive$merge,
	  	observe: observe,
	  	observeList: observeList,
	  	observeOnce: observeOnce,
	  	// TODO reinstate these
	  	// observeListOnce,
	  	off: Ractive$off,
	  	on: Ractive$on,
	  	once: Ractive$once,
	  	pop: pop$1,
	  	push: push$1,
	  	render: Ractive$render,
	  	reset: Ractive$reset,
	  	resetPartial: resetPartial,
	  	resetTemplate: Ractive$resetTemplate,
	  	reverse: reverse$1,
	  	set: Ractive$set,
	  	shift: shift$1,
	  	sort: sort$1,
	  	splice: splice$1,
	  	subtract: Ractive$subtract,
	  	teardown: Ractive$teardown,
	  	toggle: Ractive$toggle,
	  	toCSS: Ractive$toCSS,
	  	toCss: Ractive$toCSS,
	  	toHTML: Ractive$toHTML,
	  	toHtml: Ractive$toHTML,
	  	toText: toText,
	  	transition: Ractive$transition,
	  	unlink: unlink$1,
	  	unrender: Ractive$unrender,
	  	unshift: unshift$1,
	  	update: Ractive$update,
	  	updateModel: Ractive$updateModel
	  };

	  function wrap$1 ( method, superMethod, force ) {

	  	if ( force || needsSuper( method, superMethod ) )  {

	  		return function () {

	  			var hasSuper = ( '_super' in this ), _super = this._super, result;

	  			this._super = superMethod;

	  			result = method.apply( this, arguments );

	  			if ( hasSuper ) {
	  				this._super = _super;
	  			}

	  			return result;
	  		};
	  	}

	  	else {
	  		return method;
	  	}
	  }

	  function needsSuper ( method, superMethod ) {
	  	return typeof superMethod === 'function' && /_super/.test( method );
	  }

	  function unwrap ( Child ) {
	  	var options = {};

	  	while ( Child ) {
	  		addRegistries( Child, options );
	  		addOtherOptions( Child, options );

	  		if ( Child._Parent !== Ractive ) {
	  			Child = Child._Parent;
	  		} else {
	  			Child = false;
	  		}
	  	}

	  	return options;
	  }

	  function addRegistries ( Child, options ) {
	  	registries.forEach( function ( r ) {
	  		addRegistry(
	  			r.useDefaults ? Child.prototype : Child,
	  			options, r.name );
	  	});
	  }

	  function addRegistry ( target, options, name ) {
	  	var registry, keys = Object.keys( target[ name ] );

	  	if ( !keys.length ) { return; }

	  	if ( !( registry = options[ name ] ) ) {
	  		registry = options[ name ] = {};
	  	}

	  	keys
	  		.filter( function ( key ) { return !( key in registry ); } )
	  		.forEach( function ( key ) { return registry[ key ] = target[ name ][ key ]; } );
	  }

	  function addOtherOptions ( Child, options ) {
	  	Object.keys( Child.prototype ).forEach( function ( key ) {
	  		if ( key === 'computed' ) { return; }

	  		var value = Child.prototype[ key ];

	  		if ( !( key in options ) ) {
	  			options[ key ] = value._method ? value._method : value;
	  		}

	  		// is it a wrapped function?
	  		else if ( typeof options[ key ] === 'function'
	  				&& typeof value === 'function'
	  				&& options[ key ]._method ) {

	  			var result, needsSuper = value._method;

	  			if ( needsSuper ) { value = value._method; }

	  			// rewrap bound directly to parent fn
	  			result = wrap$1( options[ key ]._method, value );

	  			if ( needsSuper ) { result._method = result; }

	  			options[ key ] = result;
	  		}
	  	});
	  }

	  function extend () {
	  	var options = [], len = arguments.length;
	  	while ( len-- ) options[ len ] = arguments[ len ];

	  	if( !options.length ) {
	  		return extendOne( this );
	  	} else {
	  		return options.reduce( extendOne, this );
	  	}
	  }

	  function extendOne ( Parent, options ) {
	  	if ( options === void 0 ) options = {};

	  	var Child, proto;

	  	// if we're extending with another Ractive instance...
	  	//
	  	//   var Human = Ractive.extend(...), Spider = Ractive.extend(...);
	  	//   var Spiderman = Human.extend( Spider );
	  	//
	  	// ...inherit prototype methods and default options as well
	  	if ( options.prototype instanceof Ractive ) {
	  		options = unwrap( options );
	  	}

	  	Child = function ( options ) {
	  		if ( !( this instanceof Child ) ) return new Child( options );

	  		construct( this, options || {} );
	  		initialise( this, options || {}, {} );
	  	};

	  	proto = create( Parent.prototype );
	  	proto.constructor = Child;

	  	// Static properties
	  	defineProperties( Child, {
	  		// alias prototype as defaults
	  		defaults: { value: proto },

	  		// extendable
	  		extend: { value: extend, writable: true, configurable: true },

	  		// Parent - for IE8, can't use Object.getPrototypeOf
	  		_Parent: { value: Parent }
	  	});

	  	// extend configuration
	  	config.extend( Parent, proto, options );

	  	dataConfigurator.extend( Parent, proto, options );

	  	if ( options.computed ) {
	  		proto.computed = extendObj( create( Parent.prototype.computed ), options.computed );
	  	}

	  	Child.prototype = proto;

	  	return Child;
	  }

	  function joinKeys () {
	  	var keys = [], len = arguments.length;
	  	while ( len-- ) keys[ len ] = arguments[ len ];

	  	return keys.map( escapeKey ).join( '.' );
	  }

	  function splitKeypath ( keypath ) {
	  	return splitKeypathI( keypath ).map( unescapeKey );
	  }

	  // Ractive.js makes liberal use of things like Array.prototype.indexOf. In
	  // older browsers, these are made available via a shim - here, we do a quick
	  // pre-flight check to make sure that either a) we're not in a shit browser,
	  // or b) we're using a Ractive-legacy.js build
	  var FUNCTION = 'function';

	  if (
	  	typeof Date.now !== FUNCTION                 ||
	  	typeof String.prototype.trim !== FUNCTION    ||
	  	typeof Object.keys !== FUNCTION              ||
	  	typeof Array.prototype.indexOf !== FUNCTION  ||
	  	typeof Array.prototype.forEach !== FUNCTION  ||
	  	typeof Array.prototype.map !== FUNCTION      ||
	  	typeof Array.prototype.filter !== FUNCTION   ||
	  	( win && typeof win.addEventListener !== FUNCTION )
	  ) {
	  	throw new Error( 'It looks like you\'re attempting to use Ractive.js in an older browser. You\'ll need to use one of the \'legacy builds\' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.' );
	  }

	  function Ractive ( options ) {
	  	if ( !( this instanceof Ractive ) ) return new Ractive( options );

	  	construct( this, options || {} );
	  	initialise( this, options || {}, {} );
	  }

	  extendObj( Ractive.prototype, proto, defaults );
	  Ractive.prototype.constructor = Ractive;

	  // alias prototype as `defaults`
	  Ractive.defaults = Ractive.prototype;

	  // static properties
	  defineProperties( Ractive, {

	  	// debug flag
	  	DEBUG:          { writable: true, value: true },
	  	DEBUG_PROMISES: { writable: true, value: true },

	  	// static methods:
	  	extend:         { value: extend },
	  	escapeKey:      { value: escapeKey },
	  	getNodeInfo:    { value: staticInfo },
	  	joinKeys:       { value: joinKeys },
	  	parse:          { value: parse },
	  	splitKeypath:   { value: splitKeypath },
	  	unescapeKey:    { value: unescapeKey },
	  	getCSS:         { value: getCSS },

	  	// namespaced constructors
	  	Promise:        { value: Promise$1 },

	  	// support
	  	enhance:        { writable: true, value: false },
	  	svg:            { value: svg },
	  	magic:          { value: magicSupported },

	  	// version
	  	VERSION:        { value: '0.8.5' },

	  	// plugins
	  	adaptors:       { writable: true, value: {} },
	  	components:     { writable: true, value: {} },
	  	decorators:     { writable: true, value: {} },
	  	easing:         { writable: true, value: easing },
	  	events:         { writable: true, value: {} },
	  	interpolators:  { writable: true, value: interpolators },
	  	partials:       { writable: true, value: {} },
	  	transitions:    { writable: true, value: {} }
	  });

	  return Ractive;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);