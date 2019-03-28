(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/kervi-js/fesm5/kervi-js.js":
/*!****************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/kervi-js/fesm5/kervi-js.js ***!
  \****************************************************************************************/
/*! exports provided: KerviBaseService, ConnectionState, KerviValue, ValueRange, ValueRangeType, KerviValueType, KerviEnumOptionModel, SelectValue, NumberValue, StringValue, BooleanValue, DateTimeValue, ColorValue, DashboardSizes, DashboardMessageModel, DashboardPanelComponent, DashboardPanelParameters, DashboardPanel, DashboardBackgroundModel, Dashboard, Action, DashboardLink, Controller, KerviJsModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviBaseService", function() { return KerviBaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionState", function() { return ConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviValue", function() { return KerviValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRange", function() { return ValueRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRangeType", function() { return ValueRangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviValueType", function() { return KerviValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviEnumOptionModel", function() { return KerviEnumOptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectValue", function() { return SelectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValue", function() { return NumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringValue", function() { return StringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanValue", function() { return BooleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeValue", function() { return DateTimeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorValue", function() { return ColorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSizes", function() { return DashboardSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMessageModel", function() { return DashboardMessageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanelComponent", function() { return DashboardPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanelParameters", function() { return DashboardPanelParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanel", function() { return DashboardPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBackgroundModel", function() { return DashboardBackgroundModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLink", function() { return DashboardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviJsModule", function() { return KerviJsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return KerviJsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviSpineBase = /** @class */ (function () {
    function KerviSpineBase(constructorOptions) {
        this.constructorOptions = constructorOptions;
        this.isConnected = false;
        this.doAuthenticate = false;
        this.sessionId = null;
        this.queryHandlers = [];
        this.commandHandlers = [];
        this.eventHandlers = [];
        this.rpcQueue = {};
        this.ready = false;
        this.messageId = 0;
        this.sensors = {};
        this.controllers = {};
        this.sensorTypes = [];
        this.controllerTypes = [];
        this.pointOfInterests = [];
        this.application = null;
        this.allowAnonymous = true;
        this.firstOnOpen = true;
        this.websocket = null;
        this.options = {
            userName: "anonymous",
            password: null,
            address: null,
            onOpen: null,
            onClose: null,
            onAuthenticate: null,
            onAuthenticateFailed: null,
            onAuthenticateStart: null,
            onLogOff: null,
            autoConnect: true,
            targetScope: null,
            protocol: "ws",
            apiToken: null
        };
        this.addEventHandler = function (eventName, id, callback) {
        };
        console.log("Kervi base spine init", this.options, constructorOptions);
        this.options = this.extend(this.options, constructorOptions);
        console.log("kbo", this.options);
        this.connect();
        /** @type {?} */
        var self = this;
        setInterval(function () {
            /** @type {?} */
            var hangingNodes = [];
            for (var id_1 in self.rpcQueue) {
                /** @type {?} */
                var query = self.rpcQueue[id_1];
                if (query["callbackTimeout"]) {
                    if (Date.now() - query["ts"] > query["timeout"]) {
                        /** @type {?} */
                        var callback = query["callbackTimeout"];
                        hangingNodes.push(id_1);
                        callback.call(self.options.targetScope);
                    }
                }
            }
            try {
                for (var hangingNodes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(hangingNodes), hangingNodes_1_1 = hangingNodes_1.next(); !hangingNodes_1_1.done; hangingNodes_1_1 = hangingNodes_1.next()) {
                    var id = hangingNodes_1_1.value;
                    delete self.rpcQueue[id];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (hangingNodes_1_1 && !hangingNodes_1_1.done && (_a = hangingNodes_1.return)) _a.call(hangingNodes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var e_1, _a;
        }, 1);
    }
    /**
     * @param {...?} p
     * @return {?}
     */
    KerviSpineBase.prototype.extend = /**
     * @param {...?} p
     * @return {?}
     */
    function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        for (var i = 1; i < p.length; i++)
            for (var key in p[i])
                if (p[i].hasOwnProperty(key))
                    p[0][key] = p[i][key];
        return p[0];
    };
    /**
     * @param {?} id
     * @param {?} callback
     * @param {?} callbackTimeout
     * @param {?} timeout
     * @return {?}
     */
    KerviSpineBase.prototype.addRPCCallback = /**
     * @param {?} id
     * @param {?} callback
     * @param {?} callbackTimeout
     * @param {?} timeout
     * @return {?}
     */
    function (id, callback, callbackTimeout, timeout) {
        if (callback)
            this.rpcQueue[id] = {
                "callback": callback,
                "callbackTimeout": callbackTimeout,
                "timeout": timeout,
                "ts": Date.now(),
            };
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KerviSpineBase.prototype.handleRPCResponse = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (message.id in this.rpcQueue) {
            /** @type {?} */
            var callback = this.rpcQueue[message.id]["callback"];
            if (callback) {
                delete this.rpcQueue[message.id];
                callback.call(this.options.targetScope, message.response, message.response);
            }
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KerviSpineBase.prototype.handleEvent = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var eventName = message.event;
        /** @type {?} */
        var id = message.id;
        /** @type {?} */
        var eventPath = eventName;
        if (id) {
            eventPath += "/" + id;
        }
        /** @type {?} */
        var value = null;
        if (message.args && message.args.length) {
            value = message.args[0];
        }
        for (var n = 0; (n < this.eventHandlers.length); n++) {
            /** @type {?} */
            var h = this.eventHandlers[n];
            if (h.eventName == eventPath)
                h.callback.call(value, id, value);
            else if (h.eventName == eventName)
                h.callback.call(value, id, value);
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KerviSpineBase.prototype.handleCommand = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log("cmd", this, message);
        /** @type {?} */
        var command = message.command;
        /** @type {?} */
        var args = null;
        if (message.args && message.args.length) {
            args = message.args[0];
        }
        for (var n = 0; (n < this.commandHandlers.length); n++) {
            /** @type {?} */
            var c = this.commandHandlers[n];
            if (c.command == command)
                c.callback.call(this, args);
        }
    };
    /**
     * @return {?}
     */
    KerviSpineBase.prototype.connect = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onOpen = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi open", this, evt);
        this.isConnected = true;
        this.eventHandlers = [];
        this.commandHandlers = [];
        this.queryHandlers = [];
        console.log("Kervi spine ready");
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onClose = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi spine on close", evt);
        this.isConnected = false;
        /** @type {?} */
        var self = this;
        if (this.options.onClose)
            this.options.onClose.call(this.options.targetScope, evt);
        this.firstOnOpen = true;
        if (this.options.autoConnect) {
            setTimeout(function () {
                self.connect();
            }, 1000);
        }
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviSpineBase.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
    };
    /**
     * @return {?}
     */
    KerviSpineBase.prototype.logoff = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onMessage = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onError = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi on error", evt);
    };
    /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    KerviSpineBase.prototype.addCommandHandler = /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    function (command, callback) {
    };
    /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    KerviSpineBase.prototype.addQueryHandler = /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    function (query, callback) {
    };
    /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    KerviSpineBase.prototype.sendCommand = /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    KerviSpineBase.prototype.sendQuery = /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    KerviSpineBase.prototype.triggerEvent = /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    function (eventName, id) {
    };
    return KerviSpineBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviWSSpine = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviWSSpine, _super);
    function KerviWSSpine(constructorOptions) {
        var _this = _super.call(this, constructorOptions) || this;
        _this.constructorOptions = constructorOptions;
        _this.addEventHandler = function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            /** @type {?} */
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            //console.log("add event handler",cmd);
            this.websocket.send(JSON.stringify(cmd));
        };
        console.log("kervi spine constructor");
        return _this;
    }
    /**
     * @return {?}
     */
    KerviWSSpine.prototype.connect = /**
     * @return {?}
     */
    function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        /** @type {?} */
        var self = this;
        this.websocket = new WebSocket(this.options.protocol + "://" + this.options.address);
        this.websocket.onopen = function (evt) {
            console.log("kervi spine on open");
            self.onOpen(evt);
        };
        this.websocket.onclose = function (evt) {
            self.onClose(evt);
        };
        this.websocket.onmessage = function (evt) {
            self.onMessage(evt);
        };
        this.websocket.onerror = function (evt) {
            self.onError(evt);
        };
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviWSSpine.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        if (this.options.onAuthenticateStart)
            this.options.onAuthenticateStart.call(this.options.targetScope);
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "authenticate", "userName": this.options.userName, "password": this.options.password };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @return {?}
     */
    KerviWSSpine.prototype.logoff = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "logoff", "session": this.sessionId };
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviWSSpine.prototype.onMessage = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        /** @type {?} */
        var message = JSON.parse(evt.data);
        /** @type {?} */
        var self = this;
        if (message.messageType == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, evt);
        }
        else if (message.messageType == "authentication_failed") {
            console.log("authentication failed", this.options.userName);
            if (this.options.userName == "anonymous") {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                console.log("x", self.options);
                if (self.options.onLogOff) {
                    console.log("x1");
                    self.options.onLogOff.call(self.options.targetScope, evt);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, evt);
        }
        else if (message.messageType == "session_authenticated") {
            /** @type {?} */
            var date = new Date();
            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            /** @type {?} */
            var expires = "; expires=" + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
            setTimeout(function () {
                console.log("to", self.options);
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, evt);
                self.firstOnOpen = false;
            }, 100);
        }
        else if (message.messageType == "session_logoff") {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, evt);
            if (this.allowAnonymous && this.options.userName != "anonymous") {
                this.authenticate("anonymous", null);
            }
            else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        }
        else if (message.messageType == "response")
            this.handleRPCResponse(message);
        else if (message.messageType == "event")
            this.handleEvent(message);
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, evt);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviWSSpine.prototype.onError = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi on error", evt);
    };
    /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    KerviWSSpine.prototype.addCommandHandler = /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    function (command, callback) {
        this.commandHandlers.push({ command: command, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerCommandHandler", "command": command };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    KerviWSSpine.prototype.addQueryHandler = /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    function (query, callback) {
        this.queryHandlers.push({ query: query, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerQueryHandler", "query": query };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    KerviWSSpine.prototype.sendCommand = /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        console.log("sec", arguments);
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                callback = p[i];
            else
                args.push(p[i]);
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "command", "command": command, "args": args };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback, null, 0);
        console.log("sendCommand", this, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    KerviWSSpine.prototype.sendQuery = /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        /** @type {?} */
        var callbackTimeout = null;
        /** @type {?} */
        var timeout = 10000;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                if (!callback)
                    callback = p[i];
                else
                    callbackTimeout = p[i];
            else {
                if (callbackTimeout)
                    timeout = p[i];
                else
                    args.push(p[i]);
            }
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "query", "query": query, "args": args };
        this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
        console.log("sendQuery", callback, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    KerviWSSpine.prototype.triggerEvent = /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    function (eventName, id) {
        /** @type {?} */
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    return KerviWSSpine;
}(KerviSpineBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviRMQSpine = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviRMQSpine, _super);
    function KerviRMQSpine(constructorOptions) {
        var _this = _super.call(this, constructorOptions) || this;
        _this.constructorOptions = constructorOptions;
        _this.exchange = "/exchange/";
        _this.addEventHandler = function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            /** @type {?} */
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            this.websocket.send(this.exchange, { topic: "registerEventHandler", router_id: this.socketSession }, JSON.stringify(cmd));
        };
        console.log("Kervi io spine init y", _this.options, constructorOptions);
        return _this;
    }
    /**
     * @param {?} frame
     * @return {?}
     */
    KerviRMQSpine.prototype.onMQError = /**
     * @param {?} frame
     * @return {?}
     */
    function (frame) {
        console.log("MQ error", frame);
    };
    /**
     * @return {?}
     */
    KerviRMQSpine.prototype.connect = /**
     * @return {?}
     */
    function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var mqUrl = "wss://mq.kervi.io:15673/ws";
        this.websocket = Stomp.client(mqUrl);
        this.websocket.heartbeat.incoming = 0;
        self.exchange = "/exchange/" + self.options.apiToken.app_id;
        console.log("exchange", self.exchange);
        this.websocket.connect(self.options.apiToken.api_token, "ui", function (frame) {
            console.log("MQ connect", frame, self.websocket, this, self);
            self.socketSession = frame.headers.session;
            self.exchange = "/exchange/" + self.options.apiToken.app_id;
            self.websocket.subscribe(self.exchange, function (message) {
                console.log("mq ", message);
                if (message.headers["topic"])
                    message.headers["topic"] = message.headers["topic"].replace(new RegExp("\\c", "g"), ":");
                if (message.command == "CONNECTED") ;
                else if (message.headers["topic"] == "ping")
                    self.onPing(message);
                else
                    self.onMessage(message);
            }, {});
        }, self.onMQError, self.options.apiToken.api_channel);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KerviRMQSpine.prototype.onPing = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log("onping", this.options.appId, message);
        /** @type {?} */
        var self = this;
        if (!this.isConnected && message.headers["connection_id"] == self.options.apiToken.app_id) {
            this.onOpen(message);
            this.websocket.send(self.exchange, { topic: "session:new", router_id: message.headers["router_id"], session_id: this.socketSession }, "{}");
        }
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviRMQSpine.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        if (this.options.onAuthenticateStart)
            this.options.onAuthenticateStart.call(this.options.targetScope);
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "authenticate", "userName": this.options.userName, "password": this.options.password };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @return {?}
     */
    KerviRMQSpine.prototype.logoff = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "logoff", "session": this.sessionId };
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviRMQSpine.prototype.onMessage = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("on m", evt);
        /** @type {?} */
        var message = JSON.parse(evt.body);
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var topic = evt.headers["topic"];
        if (topic == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, evt);
        }
        else if (topic == "authentication_failed") {
            console.log("authentication failed", this.options.userName);
            if (this.options.userName == "anonymous") {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                console.log("x", self.options);
                if (self.options.onLogOff) {
                    console.log("x1");
                    self.options.onLogOff.call(self.options.targetScope, evt);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, evt);
        }
        else if (topic == "session_authenticated") {
            /** @type {?} */
            var date = new Date();
            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            /** @type {?} */
            var expires = "; expires=" + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
            setTimeout(function () {
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, evt);
                self.firstOnOpen = false;
            }, 100);
        }
        else if (topic == "session_logoff") {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, evt);
            if (this.allowAnonymous && this.options.userName != "anonymous") {
                this.authenticate("anonymous", null);
            }
            else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        }
        else if (evt.headers["type"] == "query_response") {
            this.handleRPCResponse({ id: evt.headers["query_id"], response: message });
        }
        else if (evt.headers["type"] == "event") {
            console.log("e", evt);
            /** @type {?} */
            var topic_tag = evt.headers["topic"].split(":");
            this.handleEvent({ event: topic_tag[1], id: topic_tag[2], args: message.args });
        }
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, evt);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviRMQSpine.prototype.onError = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi on error", evt);
    };
    /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    KerviRMQSpine.prototype.addCommandHandler = /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    function (command, callback) {
        this.commandHandlers.push({ command: command, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerCommandHandler", "command": command };
        //this.websocket.send(JSON.stringify(cmd));
        this.websocket.send(this.exchange, { topic: "registerCommandHandler", router_id: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    KerviRMQSpine.prototype.addQueryHandler = /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    function (query, callback) {
        this.queryHandlers.push({ query: query, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerQueryHandler", "query": query };
        this.websocket.send(this.exchange, { topic: "registerQueryHandler", router_id: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    KerviRMQSpine.prototype.sendCommand = /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        console.log("sec", arguments);
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                callback = p[i];
            else
                args.push(p[i]);
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "args": args, kwargs: {} };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback, null, 0);
        console.log("sendCommand", this, cmd);
        this.websocket.send(this.exchange, { topic: "command:" + command, router_id: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    KerviRMQSpine.prototype.sendQuery = /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        /** @type {?} */
        var callbackTimeout = null;
        /** @type {?} */
        var timeout = 10000;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                if (!callback)
                    callback = p[i];
                else
                    callbackTimeout = p[i];
            else {
                if (callbackTimeout)
                    timeout = p[i];
                else
                    args.push(p[i]);
            }
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "query", "query": query, "args": args, kwargs: [], qts: 0 };
        this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
        console.log("sendQuery", callback, cmd);
        //this.websocket.send(JSON.stringify(cmd));
        this.websocket.send(this.exchange, { topic: "query:" + query, qts: 0, query_id: cmd.id.toString(), router_id: this.socketSession, response_address: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    KerviRMQSpine.prototype.triggerEvent = /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    function (eventName, id) {
        /** @type {?} */
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    return KerviRMQSpine;
}(KerviSpineBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DashboardLink = /** @class */ (function () {
    /*constructor(dashboardId:string, sectionId:string, sectionName:string){
        this.dashboardId = dashboardId;
        this.sectionId = sectionId;
        this.sectionName = sectionName;
    }*/
    function DashboardLink(component, message) {
        this.dashboardId = message.dashboardId;
        this.panelId = message.sectionId;
        this.panelName = message.sectionName;
        this.component = component;
        this.parameters = message.parameters;
    }
    return DashboardLink;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviValue = /** @class */ (function () {
    function KerviValue() {
        this.componentType = "KerviValue";
        this.typeName = null;
        this.dashboards = [];
        this.ui = {
            type: "",
            orientation: "",
            visible: true
        };
    }
    return KerviValue;
}());
/**
 * @abstract
 * @template valueType
 */
var  /**
 * @abstract
 * @template valueType
 */
KerviValueType = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviValueType, _super);
    function KerviValueType(message, kerviService) {
        var _this = _super.call(this) || this;
        _this.kerviService = null;
        _this.kerviService = kerviService;
        _this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](message.value);
        _this.name = message.name;
        _this.isInput = message.isInput;
        _this.ui = message.ui;
        _this.command = message.command;
        _this.id = message.id;
        _this.ui["type"] = message.componentType;
        _this.ui["orientation"] = message.orientation;
        _this.ui["visible"] = message.visible;
        for (var prop in message.ui) {
            if (_this.ui[prop] != undefined)
                _this.ui[prop] = message.ui[prop];
        }
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.dashboardLinks), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dashboardLink = _b.value;
                _this.dashboards.push(new DashboardLink(_this, dashboardLink));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
        var e_1, _c;
    }
    /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    KerviValueType.prototype.set = /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    function (v, notify) {
        if (notify === void 0) { notify = true; }
        this.value$.next(v);
        if (notify)
            this.kerviService.spine.sendCommand(this.command, v);
    };
    return KerviValueType;
}(KerviValue));
/** @enum {number} */
var ValueRangeType = {
    normal: 0, warning: 1, error: 2,
};
ValueRangeType[ValueRangeType.normal] = 'normal';
ValueRangeType[ValueRangeType.warning] = 'warning';
ValueRangeType[ValueRangeType.error] = 'error';
var ValueRange = /** @class */ (function () {
    function ValueRange(range) {
        this.start = null;
        this.end = null;
        this.type = null;
        this.start = range["start"];
        this.end = range["end"];
        if (range["type"] == "warning")
            this.type = ValueRangeType.warning;
        else if (range["type"] == "error")
            this.type = ValueRangeType.error;
        else
            this.type = ValueRangeType.normal;
    }
    return ValueRange;
}());
var KerviEnumOptionModel = /** @class */ (function () {
    function KerviEnumOptionModel(messageOption) {
        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
    }
    /**
     * @return {?}
     */
    KerviEnumOptionModel.prototype.updateReferences = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} component
     * @return {?}
     */
    KerviEnumOptionModel.prototype.reload = /**
     * @param {?} component
     * @return {?}
     */
    function (component) { };
    /**
     * @param {?} components
     * @return {?}
     */
    KerviEnumOptionModel.prototype.removeReferences = /**
     * @param {?} components
     * @return {?}
     */
    function (components) { };
    return KerviEnumOptionModel;
}());
var SelectValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectValue, _super);
    function SelectValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.options = [];
        _this.lastSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** @type {?} */
        var self = _this;
        _this.options = [];
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.options), _b = _a.next(); !_b.done; _b = _a.next()) {
                var option = _b.value;
                _this.options.push(new KerviEnumOptionModel(option));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        _this.selectOptions(_this.value$.value);
        _this.value$.subscribe(function (v) {
            self.selectOptions(v);
        });
        return _this;
        var e_2, _c;
    }
    /**
     * @return {?}
     */
    SelectValue.prototype.getDefaultValue = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @param {?} selectedOptions
     * @return {?}
     */
    SelectValue.prototype.selectOptions = /**
     * @param {?} selectedOptions
     * @return {?}
     */
    function (selectedOptions) {
        console.log("soc");
        if (!selectedOptions)
            return;
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.options), _b = _a.next(); !_b.done; _b = _a.next()) {
                var option = _b.value;
                option.selected$.next(false);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var selectedOptions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(selectedOptions), selectedOptions_1_1 = selectedOptions_1.next(); !selectedOptions_1_1.done; selectedOptions_1_1 = selectedOptions_1.next()) {
                var selectedOption = selectedOptions_1_1.value;
                console.log("so", selectedOption);
                try {
                    for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.options), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var option = _e.value;
                        console.log("sox", option);
                        if (option.value == selectedOption) {
                            option.selected$.next(true);
                            this.lastSelected$.next(option);
                            console.log("os", option.text, option.selected$.value);
                            break;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (selectedOptions_1_1 && !selectedOptions_1_1.done && (_g = selectedOptions_1.return)) _g.call(selectedOptions_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var e_3, _c, e_5, _g, e_4, _f;
    };
    return SelectValue;
}(KerviValueType));
var NumberValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumberValue, _super);
    function NumberValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.qtyUnitTo = null;
        _this.sparkline$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this.ranges = [];
        _this.unit = message.unit;
        _this.typeName = "Number";
        _this.qtyUnitFrom = message.unit;
        if (_this.unit == "c" && kerviService.application$.value["display"]["unit_system"]["temperature"] == "F") {
            _this.qtyUnitFrom = "tempC";
            _this.qtyUnitTo = "tempF";
            _this.unit = "F";
        }
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.ranges), _b = _a.next(); !_b.done; _b = _a.next()) {
                var range = _b.value;
                if (_this.qtyUnitTo) {
                    /** @type {?} */
                    var q = new Qty(range["start"], _this.qtyUnitFrom);
                    range["start"] = q.to(_this.qtyUnitTo).scalar;
                    /** @type {?} */
                    var q = new Qty(range["end"], _this.qtyUnitFrom);
                    range["end"] = q.to(_this.qtyUnitTo).scalar;
                    _this.ranges.push(new ValueRange(range));
                }
                else
                    _this.ranges.push(new ValueRange(range));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (_this.qtyUnitTo && message.maxValue) {
            /** @type {?} */
            var q = new Qty(message.maxValue, _this.qtyUnitFrom);
            _this.maxValue = q.to(_this.qtyUnitTo).scalar;
        }
        else
            _this.maxValue = message.maxValue;
        if (_this.qtyUnitTo && message.minValue) {
            /** @type {?} */
            var q = new Qty(message.minValue, _this.qtyUnitFrom);
            _this.minValue = q.to(_this.qtyUnitTo).scalar;
        }
        else
            _this.minValue = message.minValue;
        /** @type {?} */
        var spl = [];
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.sparkline), _e = _d.next(); !_e.done; _e = _d.next()) {
                var spv = _e.value;
                if (_this.qtyUnitTo) {
                    console.log("spv", spv);
                    /** @type {?} */
                    var q = new Qty(spv.value, _this.qtyUnitFrom);
                    //spv.value = q.to(this.qtyUnitTo).scalar;
                }
                spl.push(spv);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
            }
            finally { if (e_7) throw e_7.error; }
        }
        _this.sparkline$.next(spl);
        _this.set(message.value, false);
        return _this;
        var e_6, _c, e_7, _f;
    }
    /**
     * @return {?}
     */
    NumberValue.prototype.getDefaultValue = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    NumberValue.prototype.set = /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    function (v, notify) {
        if (notify === void 0) { notify = true; }
        /** @type {?} */
        var newValue = v;
        if (this.qtyUnitTo) {
            /** @type {?} */
            var q = new Qty(v, this.qtyUnitFrom);
            newValue = q.to(this.qtyUnitTo).scalar;
        }
        this.value$.next(newValue);
        if (notify)
            this.kerviService.spine.sendCommand(this.command, v);
        /** @type {?} */
        var spl = this.sparkline$.value;
        spl.push(newValue);
        if (spl.length > 10)
            spl.shift();
        this.sparkline$.next(spl);
    };
    return NumberValue;
}(KerviValueType));
var StringValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StringValue, _super);
    function StringValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.typeName = "String";
        return _this;
    }
    /**
     * @return {?}
     */
    StringValue.prototype.getDefaultValue = /**
     * @return {?}
     */
    function () {
        return "";
    };
    return StringValue;
}(KerviValueType));
var BooleanValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanValue, _super);
    function BooleanValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.typeName = "Boolean";
        return _this;
    }
    /**
     * @return {?}
     */
    BooleanValue.prototype.getDefaultValue = /**
     * @return {?}
     */
    function () {
        return false;
    };
    return BooleanValue;
}(KerviValueType));
var DateTimeValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DateTimeValue, _super);
    function DateTimeValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.subType = message.inputType;
        _this.typeName = "DateTime";
        return _this;
    }
    /**
     * @return {?}
     */
    DateTimeValue.prototype.getDefaultValue = /**
     * @return {?}
     */
    function () {
        return new Date();
    };
    return DateTimeValue;
}(KerviValueType));
var ColorValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ColorValue, _super);
    function ColorValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.typeName = "Color";
        return _this;
    }
    /**
     * @return {?}
     */
    ColorValue.prototype.getDefaultValue = /**
     * @return {?}
     */
    function () {
        return "#ffffff";
    };
    return ColorValue;
}(KerviValueType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ComponentRef = /** @class */ (function () {
    function ComponentRef(message) {
        this.id = message.id;
    }
    return ComponentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Controller = /** @class */ (function () {
    function Controller(message, kerviService) {
        this.componentType = "controller";
        this.ui = {};
        this.inputs = [];
        this.outputs = [];
        this.actions = [];
        this.inputReferences = [];
        this.outputReferences = [];
        this.actionsReferences = [];
        this.dashboards = [];
        this.kerviService = kerviService;
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.ui = message.ui;
        this.visible = message.visible;
        this.parameters = message.parameters;
        this.template = message.template;
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.inputs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var ref = _b.value;
                this.inputReferences.push(new ComponentRef(ref));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.outputs), _e = _d.next(); !_e.done; _e = _d.next()) {
                var ref = _e.value;
                this.outputReferences.push(new ComponentRef(ref));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.actions), _h = _g.next(); !_h.done; _h = _g.next()) {
                var ref = _h.value;
                this.actionsReferences.push(new ComponentRef(ref));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_j = _g.return)) _j.call(_g);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _k = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.dashboardLinks), _l = _k.next(); !_l.done; _l = _k.next()) {
                var dashboardLink = _l.value;
                this.dashboards.push(new DashboardLink(this, dashboardLink));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_m = _k.return)) _m.call(_k);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var e_1, _c, e_2, _f, e_3, _j, e_4, _m;
    }
    /**
     * @return {?}
     */
    Controller.prototype.updateReferences = /**
     * @return {?}
     */
    function () {
        if (this.inputs.length == 0) {
            try {
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.inputReferences), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var ref = _b.value;
                    /** @type {?} */
                    var component = this.kerviService.getComponent(ref.id);
                    if (component)
                        this.inputs.push(component);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        if (this.outputs.length == 0) {
            try {
                for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.outputReferences), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var ref = _e.value;
                    /** @type {?} */
                    var component = this.kerviService.getComponent(ref.id);
                    if (component)
                        this.outputs.push(component);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (this.actions.length == 0) {
            try {
                for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.actionsReferences), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var ref = _h.value;
                    /** @type {?} */
                    var component = this.kerviService.getComponent(ref.id);
                    if (component)
                        this.actions.push(component);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_j = _g.return)) _j.call(_g);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        var e_5, _c, e_6, _f, e_7, _j;
    };
    /**
     * @param {?} components
     * @return {?}
     */
    Controller.prototype.removeReferences = /**
     * @param {?} components
     * @return {?}
     */
    function (components) { };
    /**
     * @param {?} component
     * @return {?}
     */
    Controller.prototype.reload = /**
     * @param {?} component
     * @return {?}
     */
    function (component) { };
    return Controller;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DashboardSizes = /** @class */ (function () {
    function DashboardSizes() {
        this.valueWidth = "3rem";
        this.buttonWidth = "25px";
        this.buttonHeight = "";
        this.switchWidth = "25px";
        this.switchHeight = "25px";
        this.gaugeWidth = "100px";
        this.gaugeHeight = "200px";
    }
    return DashboardSizes;
}());
var DashboardMessageModel = /** @class */ (function () {
    function DashboardMessageModel(message) {
        this.timestamp = new Date(message.timestamp * 1000);
        this.topic = message.topic;
        this.body = message.body;
        this.type = message.type;
        this.sourceId = message.source_id;
        this.sourceName = message.source_name;
        this.area = message.area;
        this.level = message.level;
    }
    return DashboardMessageModel;
}());
var DashboardPanelComponent = /** @class */ (function () {
    function DashboardPanelComponent(message) {
        this.message = message;
        this.linkId = message.linkId;
        this.componentId = message.componentId;
        this.component = message.component;
        this.parameters = message.parameters;
    }
    return DashboardPanelComponent;
}());
var DashboardPanelParameters = /** @class */ (function () {
    function DashboardPanelParameters(messageParameters) {
        this.title = null;
        this.width = null;
        this.height = null;
        this.type = null;
        this.userLog = null;
        this.logLength = 5;
        this.title = messageParameters.label;
        this.height = messageParameters.height;
        this.width = messageParameters.width;
        this.userLog = messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        if (messageParameters.type)
            this.type = messageParameters.type;
    }
    return DashboardPanelParameters;
}());
var DashboardPanel = /** @class */ (function () {
    function DashboardPanel(dashboard, messagePanel) {
        this.components = [];
        this.subPanels = [];
        this.dashboard = dashboard;
        this.id = messagePanel.id;
        this.name = messagePanel.name;
        this.type = messagePanel.type;
        this.parameters = new DashboardPanelParameters(messagePanel.uiParameters);
        /*if (messagePanel.components)
                    for(var componentRef of messagePanel.components){
                        this.components.push(new DashboardPanelComponentModel(componentRef))
                    }*/
        if (messagePanel.panels) {
            try {
                //console.log("spa",messagePanel.panels);
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(messagePanel.panels), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var subMessagePanel = _b.value;
                    /** @type {?} */
                    var panel = new DashboardPanel(this, subMessagePanel);
                    this.subPanels.push(panel);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _c;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    DashboardPanel.prototype.reload = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        try {
            //console.log("rl", this);
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(source.subPanels), _b = _a.next(); !_b.done; _b = _a.next()) {
                var subPanel = _b.value;
                this.reload(subPanel);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(source.components), _e = _d.next(); !_e.done; _e = _d.next()) {
                var sourceComponent = _e.value;
                /** @type {?} */
                var found = false;
                try {
                    for (var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var component = _g.value;
                        if (component.componentId == sourceComponent.componentId) {
                            found = true;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_h = _f.return)) _h.call(_f);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (!found) {
                    this.components.push(sourceComponent);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_j = _d.return)) _j.call(_d);
            }
            finally { if (e_4) throw e_4.error; }
        }
        /** @type {?} */
        var deleteComponents = [];
        try {
            for (var _k = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _l = _k.next(); !_l.done; _l = _k.next()) {
                var component = _l.value;
                /** @type {?} */
                var found = false;
                try {
                    for (var _m = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(source.components), _o = _m.next(); !_o.done; _o = _m.next()) {
                        var sourceComponent = _o.value;
                        if (sourceComponent.componentId == component.componentId) {
                            found = true;
                            break;
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_o && !_o.done && (_p = _m.return)) _p.call(_m);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                if (!found)
                    deleteComponents.push(component);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_q = _k.return)) _q.call(_k);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            //console.log("dsc",deleteComponents);
            for (var deleteComponents_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(deleteComponents), deleteComponents_1_1 = deleteComponents_1.next(); !deleteComponents_1_1.done; deleteComponents_1_1 = deleteComponents_1.next()) {
                var component = deleteComponents_1_1.value;
                this.components.splice(this.components.indexOf(component), 1);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (deleteComponents_1_1 && !deleteComponents_1_1.done && (_r = deleteComponents_1.return)) _r.call(deleteComponents_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var e_2, _c, e_4, _j, e_3, _h, e_6, _q, e_5, _p, e_7, _r;
    };
    return DashboardPanel;
}());
var DashboardBackgroundModel = /** @class */ (function () {
    function DashboardBackgroundModel(message) {
        this.type = message.type;
        this.cameraId = message.cameraId;
    }
    return DashboardBackgroundModel;
}());
var Dashboard = /** @class */ (function () {
    function Dashboard(message) {
        this.headerPanel = null;
        this.footerCenterPanel = null;
        this.footerLeftPanel = null;
        this.footerRightPanel = null;
        this.sysPanel = null;
        this.backgroundPanel = null;
        this.controllerPanel = null;
        this.LeftPadXPanel = null;
        this.LeftPadYPanel = null;
        this.RightPadXPanel = null;
        this.RightPadYPanel = null;
        this.dashboards = [];
        this.id = message.id;
        this.name = message.name;
        this.componentType = "dashboard";
        this.type = message.type;
        this.isDefault = message.isDefault;
        this.template = message.template;
        this.unitSize = message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
        this.panels = [];
        this.sysPanels = [];
        if (!this.template) {
            /** @type {?} */
            var currentPanel = null;
            try {
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.sections), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var messagePanel = _b.value;
                    if (!messagePanel) {
                        console.log("dashboard with null panel", this.id);
                        continue;
                    }
                    /** @type {?} */
                    var panel = new DashboardPanel(this, messagePanel);
                    /** @type {?} */
                    var sysPanel = true;
                    if (panel.id == "header_center")
                        this.headerPanel = panel;
                    else if (panel.id == "footer_left")
                        this.footerLeftPanel = panel;
                    else if (panel.id == "footer_center")
                        this.footerCenterPanel = panel;
                    else if (panel.id == "footer_right")
                        this.footerRightPanel = panel;
                    else if (panel.id == "header_right")
                        this.sysPanel = panel;
                    else if (panel.id == "controllers")
                        this.controllerPanel = panel;
                    else if (panel.id == "background")
                        this.backgroundPanel = panel;
                    else if (panel.id == "left_pad_x")
                        this.LeftPadXPanel = panel;
                    else if (panel.id == "left_pad_y")
                        this.LeftPadYPanel = panel;
                    else if (panel.id == "right_pad_x")
                        this.RightPadXPanel = panel;
                    else if (panel.id == "right_pad_y")
                        this.RightPadYPanel = panel;
                    else {
                        sysPanel = false;
                        if (panel.type != "group") {
                            if (currentPanel == null) {
                                currentPanel = new DashboardPanel(this, {
                                    "id": null,
                                    "name": "",
                                    "type": "group",
                                    "components": [],
                                    "panels": [],
                                    "uiParameters": {
                                        "title": "",
                                        "width": 0,
                                        "height": 0,
                                        "userLog": false,
                                        "logLength": 0
                                    }
                                });
                                currentPanel.subPanels.push(panel);
                                this.panels.push(currentPanel);
                            }
                            else {
                                currentPanel.subPanels.push(panel);
                            }
                        }
                        else {
                            this.panels.push(panel);
                            currentPanel = null;
                        }
                    }
                    if (sysPanel)
                        this.sysPanels.push(panel);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        var e_8, _c;
    }
    /*removePanelRef(deleteComponents:IComponent[], panel:DashboardPanelModel, removeEmpty:boolean){
        var removeComponentPanels:DashboardPanelComponentModel[] = [];
        for(var panelComponent of panel.components){
            for(var deleteComponent of deleteComponents){
                if (deleteComponent.id == panelComponent.component.id){
                    console.log("dlc", panelComponent)
                    removeComponentPanels.push(panelComponent)
                    
                }
            }
        }
        for(var component of removeComponentPanels){
            panel.components.splice(panel.components.indexOf(component))
        }
        var removePanels:DashboardPanelModel[] = [];
        for(var subPanel of panel.subPanels){
            this.removePanelRef(deleteComponents, subPanel, removeEmpty)
            if (subPanel.components.length == 0){
                removePanels.push(subPanel)
            }
        }
        for(var subPanel of removePanels){
            panel.subPanels.splice(panel.subPanels.indexOf(subPanel))
        }
    }*/
    /**
     * @param {?} deleteComponents
     * @return {?}
     */
    Dashboard.prototype.removeReferences = /**
     * @param {?} deleteComponents
     * @return {?}
     */
    function (deleteComponents) {
        // console.log("remove ref", deleteComponents)
        // for(var panel of this.sysPanels){
        //     this.removePanelRef(deleteComponents, panel, false)
        // }
        // var removePanels:DashboardPanelModel[] = [];
        // for(var panel of this.panels){
        //     this.removePanelRef(deleteComponents, panel, true)
        //     if (panel.components.length == 0)
        //         removePanels.push(panel)
        // }
        // for(var panel of removePanels){
        //     this.panels.splice(this.panels.indexOf(panel))
        // }
    };
    /**
     * @return {?}
     */
    Dashboard.prototype.updateReferences = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} component
     * @return {?}
     */
    Dashboard.prototype.reload = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var source = /** @type {?} */ (component);
        if (!this.backgroundPanel && source.backgroundPanel)
            this.backgroundPanel = source.backgroundPanel;
        else if (this.backgroundPanel && !source.backgroundPanel)
            this.backgroundPanel = null;
        else if (this.backgroundPanel)
            this.backgroundPanel.reload(source.backgroundPanel);
        if (!this.footerLeftPanel && source.footerLeftPanel)
            this.footerLeftPanel = source.footerLeftPanel;
        else if (this.footerLeftPanel && !source.footerLeftPanel)
            this.footerLeftPanel = null;
        else if (this.footerLeftPanel)
            this.footerLeftPanel.reload(source.footerLeftPanel);
        if (!this.footerRightPanel && source.footerRightPanel)
            this.footerRightPanel = source.footerRightPanel;
        else if (this.footerRightPanel && !source.footerRightPanel)
            this.footerRightPanel = null;
        else if (this.footerRightPanel)
            this.footerRightPanel.reload(source.footerRightPanel);
        if (!this.footerCenterPanel && source.footerCenterPanel)
            this.footerCenterPanel = source.footerCenterPanel;
        else if (this.footerCenterPanel && !source.footerCenterPanel)
            this.footerCenterPanel = null;
        else if (this.footerCenterPanel)
            this.footerCenterPanel.reload(source.footerCenterPanel);
        /*if (!this.headerPanel && source.headerPanel)
                    this.headerPanel=source.headerPanel;
                else if (this.headerPanel && !source.headerPanel)
                    this.headerPanel = null
                else if (this.headerPanel)
                    this.headerPanel.reload(source.headerPanel)*/
        if (!this.sysPanel && source.sysPanel)
            this.sysPanel = source.sysPanel;
        else if (this.sysPanel && !source.sysPanel)
            this.sysPanel = null;
        else if (this.sysPanel)
            this.sysPanel.reload(source.sysPanel);
        if (!this.LeftPadXPanel && source.LeftPadXPanel)
            this.LeftPadXPanel = source.LeftPadXPanel;
        else if (this.LeftPadXPanel && !source.LeftPadXPanel)
            this.LeftPadXPanel = null;
        else if (this.LeftPadXPanel)
            this.LeftPadXPanel.reload(source.LeftPadXPanel);
        if (!this.LeftPadYPanel && source.LeftPadYPanel)
            this.LeftPadYPanel = source.LeftPadYPanel;
        else if (this.LeftPadYPanel && !source.LeftPadYPanel)
            this.LeftPadYPanel = null;
        else if (this.LeftPadYPanel)
            this.LeftPadYPanel.reload(source.LeftPadYPanel);
        if (!this.RightPadXPanel && source.RightPadXPanel)
            this.RightPadXPanel = source.RightPadXPanel;
        else if (this.RightPadXPanel && !source.RightPadXPanel)
            this.RightPadXPanel = null;
        else if (this.RightPadXPanel)
            this.RightPadXPanel.reload(source.RightPadXPanel);
        if (!this.RightPadYPanel && source.RightPadYPanel)
            this.RightPadYPanel = source.RightPadYPanel;
        else if (this.RightPadYPanel && !source.RightPadYPanel)
            this.RightPadYPanel = null;
        else if (this.RightPadYPanel)
            this.RightPadYPanel.reload(source.RightPadYPanel);
        if (!this.controllerPanel && source.controllerPanel)
            this.controllerPanel = source.controllerPanel;
        else if (this.controllerPanel && !source.controllerPanel)
            this.controllerPanel = null;
        else if (this.controllerPanel)
            this.controllerPanel.reload(source.controllerPanel);
    };
    /**
     * @param {?} id
     * @param {?} panels
     * @return {?}
     */
    Dashboard.prototype.getDashboardPanelById = /**
     * @param {?} id
     * @param {?} panels
     * @return {?}
     */
    function (id, panels) {
        try {
            for (var panels_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(panels), panels_1_1 = panels_1.next(); !panels_1_1.done; panels_1_1 = panels_1.next()) {
                var panel = panels_1_1.value;
                if (panel.id == id)
                    return panel;
                else {
                    /** @type {?} */
                    var res = this.getDashboardPanelById(id, panel.subPanels);
                    if (res)
                        return res;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (panels_1_1 && !panels_1_1.done && (_a = panels_1.return)) _a.call(panels_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return null;
        var e_9, _a;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    Dashboard.prototype.addDashboardLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        if (link.dashboardId == "*" || link.dashboardId == this.id || (link.dashboardId == "**default**" && this.isDefault)) {
            /** @type {?} */
            var panel = this.getDashboardPanelById(link.panelId, this.panels);
            if (!panel)
                panel = this.getDashboardPanelById(link.panelId, this.sysPanels);
            if (panel) {
                panel.components.push(new DashboardPanelComponent(link));
            }
            else {
                console.log("adh", link);
                /** @type {?} */
                var messagePanel = {
                    id: link.panelId,
                    name: link.panelName,
                    type: "panel",
                    uiParameters: {
                        "title": "",
                        "width": 0,
                        "height": 0,
                        "userLog": false,
                        "logLength": 0
                    }
                };
                /** @type {?} */
                var newPanel = new DashboardPanel(this, messagePanel);
                this.panels.push(newPanel);
                newPanel.components.push(new DashboardPanelComponent(link));
            }
        }
    };
    return Dashboard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Action = /** @class */ (function () {
    function Action(message, kerviService) {
        this.kerviService = null;
        this.id = null;
        this.name = null;
        this.componentType = "action";
        this.runCommand = "";
        this.interruptCommand = "";
        this.ui = {
            type: "",
            orientation: "",
            visible: true
        };
        this.dashboards = [];
        this.running$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.kerviService = kerviService;
        this.id = message.id;
        this.name = message.name;
        this.ui = message.ui;
        this.ui.visible = message.visible;
        this.ui.type = message.type;
        this.runCommand = message.runCommand;
        this.interruptCommand = message.interruptCommand;
        this.running$.next(message.running);
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.dashboardLinks), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dashboardLink = _b.value;
                this.dashboards.push(new DashboardLink(this, dashboardLink));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    }
    /**
     * @param {?} parameters
     * @return {?}
     */
    Action.prototype.run = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        //if (!this.running$.value){
        if (parameters && parameters.length > 0)
            (_a = this.kerviService.spine).sendCommand.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.runCommand], parameters));
        else
            this.kerviService.spine.sendCommand(this.runCommand);
        //}
        var _a;
    };
    /**
     * @param {?} parameters
     * @return {?}
     */
    Action.prototype.interrupt = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        if (parameters && parameters.length > 0)
            (_a = this.kerviService.spine).sendCommand.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.interruptCommand], parameters));
        else
            this.kerviService.spine.sendCommand(this.interruptCommand);
        var _a;
    };
    return Action;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ComponentFactory = /** @class */ (function () {
    function ComponentFactory() {
    }
    /**
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    ComponentFactory.createComponents = /**
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    function (message, kerviService) {
        /** @type {?} */
        var foundComponents = this.createComponentsRec(message, kerviService);
        this.linkToDashboards(foundComponents[0], foundComponents[1]);
        return foundComponents[0];
    };
    /**
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    ComponentFactory.createComponentsRec = /**
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    function (message, kerviService) {
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var dashboards = [];
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                subComponents = this.createComponentsRec(message[i], kerviService);
                result = result.concat(subComponents[0]);
                dashboards = dashboards.concat(subComponents[1]);
            }
        }
        else {
            /** @type {?} */
            var component = null;
            /** @type {?} */
            var subComponents = [];
            if (message.componentType == "KerviAction")
                component = new Action(message, kerviService);
            else if (message.componentType == "dashboard") {
                component = new Dashboard(message);
                dashboards.push(component);
            }
            else if (message.componentType == "controller")
                component = new Controller(message, kerviService);
            else if (message.componentType == "boolean-value")
                component = new BooleanValue(message, kerviService);
            else if (message.componentType == "number-value")
                component = new NumberValue(message, kerviService);
            else if (message.componentType == "string-value")
                component = new StringValue(message, kerviService);
            else if (message.componentType == "enum-value")
                component = new SelectValue(message, kerviService);
            else if (message.componentType == "datetime-value")
                component = new DateTimeValue(message, kerviService);
            else if (message.componentType == "color-value")
                component = new ColorValue(message, kerviService);
            if (component)
                result.push(component);
            if (subComponents) {
                try {
                    for (var subComponents_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(subComponents), subComponents_1_1 = subComponents_1.next(); !subComponents_1_1.done; subComponents_1_1 = subComponents_1.next()) {
                        var subComponent = subComponents_1_1.value;
                        result.push(subComponent);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (subComponents_1_1 && !subComponents_1_1.done && (_a = subComponents_1.return)) _a.call(subComponents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return [result, dashboards];
        var e_1, _a;
    };
    /**
     * @param {?} components
     * @return {?}
     */
    ComponentFactory.FixControllerReferences = /**
     * @param {?} components
     * @return {?}
     */
    function (components) {
        try {
            for (var components_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                var component = components_1_1.value;
                /** @type {?} */
                var controller = /** @type {?} */ (component);
                if (controller && controller.componentType == "controller")
                    controller.updateReferences();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _a;
    };
    /**
     * @param {?} components
     * @param {?} dashboards
     * @return {?}
     */
    ComponentFactory.linkToDashboards = /**
     * @param {?} components
     * @param {?} dashboards
     * @return {?}
     */
    function (components, dashboards) {
        console.log("ltd", components, dashboards);
        try {
            for (var components_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(components), components_2_1 = components_2.next(); !components_2_1.done; components_2_1 = components_2.next()) {
                var component = components_2_1.value;
                if (!(component instanceof Dashboard)) {
                    try {
                        for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(component.dashboards), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var link = _b.value;
                            try {
                                for (var dashboards_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(dashboards), dashboards_1_1 = dashboards_1.next(); !dashboards_1_1.done; dashboards_1_1 = dashboards_1.next()) {
                                    var dashboard = dashboards_1_1.value;
                                    dashboard.addDashboardLink(link);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (dashboards_1_1 && !dashboards_1_1.done && (_c = dashboards_1.return)) _c.call(dashboards_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (components_2_1 && !components_2_1.done && (_e = components_2.return)) _e.call(components_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var e_5, _e, e_4, _d, e_3, _c;
    };
    return ComponentFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var ConnectionState = {
    disconnected: 0, loading: 1, authenticate: 2, connected: 3,
};
ConnectionState[ConnectionState.disconnected] = 'disconnected';
ConnectionState[ConnectionState.loading] = 'loading';
ConnectionState[ConnectionState.authenticate] = 'authenticate';
ConnectionState[ConnectionState.connected] = 'connected';
var KerviBaseService = /** @class */ (function () {
    function KerviBaseService() {
        this.spine = null;
        this.appInfo = null;
        this.texts = null;
        this.components = [];
        this.components$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.connectionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ConnectionState.disconnected);
        this.doAuthenticate = false;
        this.componentsChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.logMessages = [];
        this.logMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.IPCReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.authenticationFailed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        console.log("kervi service constructor");
        /** @type {?} */
        var self = this;
        this.application$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** @type {?} */
        var s1 = this.IPCReady$.subscribe(function (connected) {
            if (connected) {
                console.log("kervi service ipc ready (connected)");
                self.spine.addEventHandler("valueChanged", "", function (id, value) {
                    try {
                        for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var component = _b.value;
                            if (component.id == value.id) {
                                /** @type {?} */
                                var dynamicValue = /** @type {?} */ (component);
                                dynamicValue.valueTS = new Date(this.timestamp + " utc");
                                dynamicValue.set(value.value, false);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    var e_1, _c;
                });
                self.spine.addEventHandler("actionStarted", "", function (id) {
                    console.log("as", id);
                    try {
                        for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var component = _b.value;
                            if (component.id == id) {
                                /** @type {?} */
                                var action = /** @type {?} */ (component);
                                action.running$.next(true);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    var e_2, _c;
                });
                self.spine.addEventHandler("actionDone", "", function (id) {
                    console.log("ad", id);
                    try {
                        for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var component = _b.value;
                            if (component.id == id) {
                                /** @type {?} */
                                var action = /** @type {?} */ (component);
                                action.running$.next(false);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    var e_3, _c;
                });
                self.spine.addEventHandler("userLogMessage", null, function (v) {
                    /** @type {?} */
                    var messages = self.logMessages$.value;
                    //console.log("lm", this);
                    messages.unshift(new DashboardMessageModel(this));
                    if (messages.length > 10)
                        messages.pop();
                    self.logMessages$.next(messages);
                });
            }
        });
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    KerviBaseService.prototype.text = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        //  console.log("t", key, this.texts);
        if (this.texts && key in this.texts) {
            return this.texts[key];
        }
        else
            return defaultValue;
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getLogMessages$ = /**
     * @return {?}
     */
    function () {
        return this.logMessages$.asObservable();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.isAppEmpty = /**
     * @return {?}
     */
    function () {
        return this.components.length == 0;
    };
    /**
     * @param {?} id
     * @param {?=} componentType
     * @return {?}
     */
    KerviBaseService.prototype.getComponent = /**
     * @param {?} id
     * @param {?=} componentType
     * @return {?}
     */
    function (id, componentType) {
        if (componentType === void 0) { componentType = null; }
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                var component = _b.value;
                if (component.id == id && (componentType == null || component.componentType == componentType))
                    return component;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return null;
        var e_4, _c;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    KerviBaseService.prototype.getComponentsByType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var result = [];
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                var component = _b.value;
                if (component.componentType == type)
                    result.push(component);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
        var e_5, _c;
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getDefaultDashboard = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dashboards = /** @type {?} */ (this.getComponentsByType("dashboard"));
        try {
            for (var dashboards_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(dashboards), dashboards_1_1 = dashboards_1.next(); !dashboards_1_1.done; dashboards_1_1 = dashboards_1.next()) {
                var dashboard = dashboards_1_1.value;
                if (dashboard.isDefault)
                    return dashboard;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (dashboards_1_1 && !dashboards_1_1.done && (_a = dashboards_1.return)) _a.call(dashboards_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return null;
        var e_6, _a;
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.connect = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var address = null;
        /** @type {?} */
        var protocol = "ws";
        try {
            if (kerviSocketAddress) {
                address = kerviSocketAddress;
            }
            if (socketProtocol) {
                protocol = socketProtocol;
            }
        }
        catch (e) {
            /** @type {?} */
            var httpProtocol = location.protocol;
            if (httpProtocol == "https")
                protocol = "wss";
            /** @type {?} */
            var httpHost = window.location.hostname;
            address = httpHost + ":9000";
        }
        console.log("ks", address);
        this.spine = new KerviWSSpine({
            address: address,
            protocol: protocol,
            onOpen: this.onOpen,
            onClose: this.onClose,
            onAuthenticate: this.onAuthenticate,
            onAuthenticateFailed: this.onAuthenticateFailed,
            onLogOff: this.onLogoff,
            onAuthenticateStart: this.onAuthenticateStart,
            targetScope: this
        });
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.connectMQ = /**
     * @return {?}
     */
    function () {
        //if (!sessionStorage.getItem("mqc"))
        //  sessionStorage.setItem("mqc", '{"key_id":"c5bd0824bda44ffeaba8010383f1af96","api_token":"4776ec9d4bdf4b3192ffa6a1f37d15aa145e2e665ae64e46afd766ee851ac046","api_channel":"20bddf88a4434e99ba0e014de2b875c7","app_id":"app_1"}');
        console.log("ks", sessionStorage.getItem("mqc"));
        if (sessionStorage.getItem("mqc")) {
            this.spine = new KerviRMQSpine({
                onOpen: this.onOpen,
                onClose: this.onClose,
                onAuthenticate: this.onAuthenticate,
                onAuthenticateFailed: this.onAuthenticateFailed,
                onLogOff: this.onLogoff,
                onAuthenticateStart: this.onAuthenticateStart,
                targetScope: this,
                apiToken: JSON.parse(sessionStorage.getItem("mqc"))
            });
        }
        else {
            console.log("qmc not found in storage");
        }
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.isAnonymous = /**
     * @return {?}
     */
    function () {
        return this.spine.options.userName == "anonymous";
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviBaseService.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        this.authenticationFailed$.next(false);
        this.spine.authenticate(userName, password);
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.logoff = /**
     * @return {?}
     */
    function () {
        this.spine.logoff();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onAuthenticateStart = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onAuthenticate = /**
     * @return {?}
     */
    function () {
        this.doAuthenticate = true;
        this.connectionState$.next(ConnectionState.authenticate);
        this.reset();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onAuthenticateFailed = /**
     * @return {?}
     */
    function () {
        this.authenticationFailed$.next(true);
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onLogoff = /**
     * @return {?}
     */
    function () {
        console.log("olxrc");
        this.doAuthenticate = true;
        if (this.spine.firstOnOpen)
            this.IPCReady$.next(true);
        this.reset();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.components = [];
        this.components$.next(this.components);
        this.connectionState$.next(ConnectionState.disconnected);
    };
    /**
     * @param {?} retryCount
     * @param {?} module_load
     * @return {?}
     */
    KerviBaseService.prototype.getComponentInfo = /**
     * @param {?} retryCount
     * @param {?} module_load
     * @return {?}
     */
    function (retryCount, module_load) {
        /** @type {?} */
        var self = this;
        this.spine.sendQuery("GetApplicationInfo", function (appInfo) {
            console.log("appinfo", appInfo);
            this.spine.sendQuery("getComponentInfo", function (message) {
                console.log("component info", message);
                self.application$.next(appInfo);
                self.texts = appInfo.display.texts;
                self.components = ComponentFactory.createComponents(message, self);
                ComponentFactory.FixControllerReferences(self.getComponentsByType("controller"));
                self.components$.next(self.components);
                self.connectionState$.next(ConnectionState.connected);
                if (module_load)
                    self.componentsChanged$.next(true);
                console.log("components", self.components);
            }, function () {
                console.log("get component info timeout");
                if (retryCount > 0)
                    self.getComponentInfo(retryCount - 1, module_load);
            });
        });
    };
    /**
     * @param {?} first
     * @return {?}
     */
    KerviBaseService.prototype.onOpen = /**
     * @param {?} first
     * @return {?}
     */
    function (first) {
        console.log("kervice service on open", this.spine.firstOnOpen, first, this);
        /** @type {?} */
        var self = this;
        this.connectionState$.next(ConnectionState.loading);
        this.doAuthenticate = this.spine.doAuthenticate;
        this.getComponentInfo(2, false);
        if (self.spine.firstOnOpen) {
            this.IPCReady$.next(true);
            this.spine.addEventHandler("moduleStarted", "", function () {
                console.log("module loaded", self.components);
                setTimeout(function () {
                    self.getComponentInfo(2, true);
                }, 2000);
            });
            this.spine.addEventHandler("moduleStopped", "", function () {
                console.log("module unloaded");
                setTimeout(function () {
                    console.log("module unloaded, refresh");
                    self.getComponentInfo(2, true);
                }, 5000);
            });
        }
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.reset();
        console.log("ks on close");
        this.IPCReady$.next(false);
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onHeartbeat = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.onConnect = /**
     * @return {?}
     */
    function () {
    };
    KerviBaseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    KerviBaseService.ctorParameters = function () { return []; };
    return KerviBaseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviJsComponent = /** @class */ (function () {
    function KerviJsComponent() {
    }
    /**
     * @return {?}
     */
    KerviJsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    KerviJsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'lib-kervi-js',
                    template: "\n    <p>\n      kervi-js works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    KerviJsComponent.ctorParameters = function () { return []; };
    return KerviJsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviJsModule = /** @class */ (function () {
    function KerviJsModule() {
    }
    KerviJsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [],
                    declarations: [KerviJsComponent],
                    exports: [KerviJsComponent]
                },] },
    ];
    return KerviJsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VydmktanMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS1zcGluZWJhc2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS13cy50cyIsIm5nOi8va2VydmktanMvbGliL3NwaW5lL2tlcnZpLXJtcS50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9JQ29tcG9uZW50Lm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0tlcnZpVmFsdWVzLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0NvbXBvbmVudFJlZi50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9jb250cm9sbGVyLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL2Rhc2hib2FyZC5tb2RlbC50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9hY3Rpb24ubW9kZWwudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9tb2RlbHMvZmFjdG9yeS50cyIsIm5nOi8va2VydmktanMvbGliL2tlcnZpLWpzLnNlcnZpY2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5leHBvcnQgY2xhc3MgIEtlcnZpU3BpbmVCYXNle1xyXG5cclxuXHRwdWJsaWMgaXNDb25uZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgZG9BdXRoZW50aWNhdGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRzZXNzaW9uSWQgPSBudWxsO1xyXG5cdHF1ZXJ5SGFuZGxlcnM9W107XHJcblx0Y29tbWFuZEhhbmRsZXJzPVtdO1xyXG5cdGV2ZW50SGFuZGxlcnM9W107XHJcblx0cnBjUXVldWU9e307XHJcblx0cmVhZHk9ZmFsc2U7XHJcblx0bWVzc2FnZUlkPTA7XHJcblx0c2Vuc29ycz17fTtcclxuXHRjb250cm9sbGVycz17fTtcclxuXHRzZW5zb3JUeXBlcz1bXTtcclxuXHRjb250cm9sbGVyVHlwZXM9W107XHJcblx0cG9pbnRPZkludGVyZXN0cz1bXTtcclxuXHRhcHBsaWNhdGlvbj1udWxsO1xyXG5cdGFsbG93QW5vbnltb3VzID0gdHJ1ZTtcclxuXHRmaXJzdE9uT3BlbiA9IHRydWU7XHJcblxyXG5cdHByb3RlY3RlZCB3ZWJzb2NrZXQgPSBudWxsO1xyXG5cdFxyXG5cdHB1YmxpYyBvcHRpb25zOiBhbnk9ICB7XHJcblx0XHRcdHVzZXJOYW1lOiBcImFub255bW91c1wiLFxyXG5cdFx0XHRwYXNzd29yZDogbnVsbCxcclxuXHRcdFx0YWRkcmVzczpudWxsLFxyXG5cdFx0XHRvbk9wZW46bnVsbCxcclxuXHRcdFx0b25DbG9zZTpudWxsLFxyXG5cdFx0XHRvbkF1dGhlbnRpY2F0ZTpudWxsLFxyXG5cdFx0XHRvbkF1dGhlbnRpY2F0ZUZhaWxlZDpudWxsLFxyXG5cdFx0XHRvbkF1dGhlbnRpY2F0ZVN0YXJ0Om51bGwsXHJcblx0XHRcdG9uTG9nT2ZmOiBudWxsLFxyXG5cdFx0XHRhdXRvQ29ubmVjdDp0cnVlLFxyXG5cdFx0XHR0YXJnZXRTY29wZTpudWxsLFxyXG5cdFx0XHRwcm90b2NvbDpcIndzXCIsXHJcblx0XHRcdGFwaVRva2VuOm51bGxcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIGNvbnN0cnVjdG9yT3B0aW9ucyl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGJhc2Ugc3BpbmUgaW5pdFwiLHRoaXMub3B0aW9ucyxjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gdGhpcy5leHRlbmQodGhpcy5vcHRpb25zLGNvbnN0cnVjdG9yT3B0aW9ucyk7XHJcblx0XHRjb25zb2xlLmxvZyhcImtib1wiLCB0aGlzLm9wdGlvbnMpO1xyXG5cdFx0dGhpcy5jb25uZWN0KCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRzZXRJbnRlcnZhbChcclxuXHRcdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgaGFuZ2luZ05vZGVzPVtdXHJcblx0XHRcdFx0Zm9yKGxldCBpZCBpbiBzZWxmLnJwY1F1ZXVlKXtcclxuXHRcdFx0XHRcdHZhciBxdWVyeSA9IHNlbGYucnBjUXVldWVbaWRdXHJcblx0XHRcdFx0XHRpZiAocXVlcnlbXCJjYWxsYmFja1RpbWVvdXRcIl0pe1xyXG5cdFx0XHRcdFx0XHRpZiAoRGF0ZS5ub3coKSAtIHF1ZXJ5W1widHNcIl0gPiBxdWVyeVtcInRpbWVvdXRcIl0pe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjYWxsYmFjayA9IHF1ZXJ5W1wiY2FsbGJhY2tUaW1lb3V0XCJdOyBcclxuXHRcdFx0XHRcdFx0XHRoYW5naW5nTm9kZXMucHVzaChpZCk7XHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvcih2YXIgaWQgb2YgaGFuZ2luZ05vZGVzKXtcclxuXHRcdFx0XHRcdGRlbGV0ZSBzZWxmLnJwY1F1ZXVlW2lkXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCwxKVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGV4dGVuZCguLi5wOmFueVtdKVxyXG5cdHtcclxuXHRcdGZvcih2YXIgaT0xOyBpPHAubGVuZ3RoOyBpKyspXHJcblx0XHRcdGZvcih2YXIga2V5IGluIHBbaV0pXHJcblx0XHRcdFx0aWYocFtpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG5cdFx0XHRcdFx0cFswXVtrZXldID0gcFtpXVtrZXldO1xyXG5cdFx0cmV0dXJuIHBbMF07XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYWRkUlBDQ2FsbGJhY2soaWQ6c3RyaW5nLCBjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KVxyXG5cdHtcclxuXHRcdGlmIChjYWxsYmFjaylcclxuXHRcdFx0dGhpcy5ycGNRdWV1ZVtpZF09e1xyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjpjYWxsYmFjayxcclxuXHRcdFx0XHRcImNhbGxiYWNrVGltZW91dFwiOmNhbGxiYWNrVGltZW91dCxcclxuXHRcdFx0XHRcInRpbWVvdXRcIjogdGltZW91dCxcclxuXHRcdFx0XHRcInRzXCI6RGF0ZS5ub3coKSxcclxuXHRcdFx0IH07XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaGFuZGxlUlBDUmVzcG9uc2UobWVzc2FnZSl7XHJcblx0XHRpZiAobWVzc2FnZS5pZCBpbiB0aGlzLnJwY1F1ZXVlKXtcclxuXHRcdFx0dmFyIGNhbGxiYWNrID0gdGhpcy5ycGNRdWV1ZVttZXNzYWdlLmlkXVtcImNhbGxiYWNrXCJdO1xyXG5cdFx0XHRpZiAoY2FsbGJhY2spe1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnJwY1F1ZXVlW21lc3NhZ2UuaWRdO1xyXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLG1lc3NhZ2UucmVzcG9uc2UsbWVzc2FnZS5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBoYW5kbGVFdmVudChtZXNzYWdlKXtcclxuXHRcdC8vY29uc29sZS5sb2coXCJldlwiLCBtZXNzYWdlKVxyXG5cdFx0dmFyIGV2ZW50TmFtZT1tZXNzYWdlLmV2ZW50O1xyXG5cdFx0dmFyIGlkPW1lc3NhZ2UuaWQ7XHJcblx0XHRcclxuXHRcdHZhciBldmVudFBhdGg9ZXZlbnROYW1lO1xyXG5cdFx0aWYgKGlkKXtcclxuXHRcdFx0ZXZlbnRQYXRoKz1cIi9cIitpZDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIHZhbHVlPW51bGw7XHJcblx0XHRpZihtZXNzYWdlLmFyZ3MgJiYgbWVzc2FnZS5hcmdzLmxlbmd0aCl7XHJcblx0XHRcdHZhbHVlPW1lc3NhZ2UuYXJnc1swXTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgbj0wOyhuPHRoaXMuZXZlbnRIYW5kbGVycy5sZW5ndGgpO24rKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIGg9dGhpcy5ldmVudEhhbmRsZXJzW25dO1xyXG5cdFx0XHRpZiAoaC5ldmVudE5hbWU9PWV2ZW50UGF0aClcclxuXHRcdFx0XHRoLmNhbGxiYWNrLmNhbGwodmFsdWUsaWQsdmFsdWUpO1xyXG5cdFx0XHRlbHNlIGlmIChoLmV2ZW50TmFtZT09ZXZlbnROYW1lKVxyXG5cdFx0XHRcdGguY2FsbGJhY2suY2FsbCh2YWx1ZSxpZCx2YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaGFuZGxlQ29tbWFuZChtZXNzYWdlKXtcclxuXHRcdGNvbnNvbGUubG9nKFwiY21kXCIsdGhpcyxtZXNzYWdlKTtcclxuXHRcdHZhciBjb21tYW5kPW1lc3NhZ2UuY29tbWFuZFxyXG5cdFx0XHJcblx0XHR2YXIgYXJncz1udWxsO1xyXG5cdFx0aWYobWVzc2FnZS5hcmdzICYmIG1lc3NhZ2UuYXJncy5sZW5ndGgpe1xyXG5cdFx0XHRhcmdzPW1lc3NhZ2UuYXJnc1swXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBuPTA7KG48dGhpcy5jb21tYW5kSGFuZGxlcnMubGVuZ3RoKTtuKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBjPXRoaXMuY29tbWFuZEhhbmRsZXJzW25dO1xyXG5cdFx0XHRpZiAoYy5jb21tYW5kPT1jb21tYW5kKVxyXG5cdFx0XHRcdGMuY2FsbGJhY2suY2FsbCh0aGlzLGFyZ3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNvbm5lY3QoKXtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uT3BlbihldnQpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJLZXJ2aSBvcGVuXCIsdGhpcyxldnQpO1xyXG5cdFx0XHJcblx0XHR2YXIgc2VsZj10aGlzXHJcblx0XHR0aGlzLmlzQ29ubmVjdGVkPXRydWU7XHJcblx0XHRcclxuXHRcdHRoaXMuZXZlbnRIYW5kbGVycyA9IFtdO1xyXG5cdFx0dGhpcy5jb21tYW5kSGFuZGxlcnMgPSBbXTtcclxuXHRcdHRoaXMucXVlcnlIYW5kbGVycyA9IFtdO1x0XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIHJlYWR5XCIpXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNsb3NlKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIG9uIGNsb3NlXCIsZXZ0KTtcclxuXHRcdHRoaXMuaXNDb25uZWN0ZWQ9ZmFsc2U7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLm9uQ2xvc2UpXHJcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR0aGlzLmZpcnN0T25PcGVuPXRydWU7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLmF1dG9Db25uZWN0KXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHNlbGYuY29ubmVjdCgpO1xyXG5cdFx0XHR9ICwxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhdXRoZW50aWNhdGUodXNlck5hbWUsIHBhc3N3b3JkKXtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHVibGljIGxvZ29mZigpe1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25NZXNzYWdlKGV2dCl7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkVycm9yKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIG9uIGVycm9yXCIsZXZ0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDb21tYW5kSGFuZGxlciAoY29tbWFuZDpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZFF1ZXJ5SGFuZGxlcihxdWVyeTpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcj1mdW5jdGlvbihldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHRcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZENvbW1hbmQoY29tbWFuZDpzdHJpbmcsLi4ucDphbnlbXSl7XHJcblx0XHRcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHRcclxuXHR9O1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcbmltcG9ydCB7S2VydmlTcGluZUJhc2V9IGZyb20gXCIuL2tlcnZpLXNwaW5lYmFzZVwiXHJcbmV4cG9ydCBjbGFzcyAgS2VydmlXU1NwaW5lIGV4dGVuZHMgS2VydmlTcGluZUJhc2V7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIGNvbnN0cnVjdG9yT3B0aW9ucyl7XHJcblx0XHRzdXBlcihjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJrZXJ2aSBzcGluZSBjb25zdHJ1Y3RvclwiKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjb25uZWN0KCl7XHJcblx0XHRpZiAodGhpcy5pc0Nvbm5lY3RlZCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiS2VydmkgaXMgY29ubmVjdGVkXCIpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHZhciBzZWxmPXRoaXM7XHJcblx0XHR0aGlzLndlYnNvY2tldD0gbmV3IFdlYlNvY2tldCh0aGlzLm9wdGlvbnMucHJvdG9jb2wgKyBcIjovL1wiICsgdGhpcy5vcHRpb25zLmFkZHJlc3MpO1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZXZ0KSB7IFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcImtlcnZpIHNwaW5lIG9uIG9wZW5cIik7XHJcblx0XHRcdHNlbGYub25PcGVuKGV2dCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR0aGlzLndlYnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oZXZ0KSB7IFxyXG5cdFx0XHRzZWxmLm9uQ2xvc2UoZXZ0KSBcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2dCkgeyBcclxuXHRcdFx0c2VsZi5vbk1lc3NhZ2UoZXZ0KSBcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHRoaXMud2Vic29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0c2VsZi5vbkVycm9yKGV2dCkgXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpe1xyXG5cdFx0dGhpcy5vcHRpb25zLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcblx0XHR0aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHRcdGlmICh0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVTdGFydClcclxuXHRcdFx0dGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlU3RhcnQuY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUpO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJhdXRoZW50aWNhdGVcIixcInVzZXJOYW1lXCI6dGhpcy5vcHRpb25zLnVzZXJOYW1lLCBcInBhc3N3b3JkXCI6IHRoaXMub3B0aW9ucy5wYXNzd29yZH07XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvZ29mZigpe1xyXG5cdFx0Ly90aGlzLm9wdGlvbnMudXNlck5hbWUgPSB0aGlzLmFsbG93QW5vbnltb3VzID8gXCJhbm9ueW1vdXNcIiA6IG51bGw7XHJcblx0XHQvL3RoaXMub3B0aW9ucy5wYXNzd29yZCA9IG51bGw7XHJcblxyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJsb2dvZmZcIiwgXCJzZXNzaW9uXCI6IHRoaXMuc2Vzc2lvbklkfTtcclxuXHRcdHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fVxyXG5cclxuXHRvbk1lc3NhZ2UoZXZ0KXtcclxuXHRcdC8vY29uc29sZS5sb2coXCJvbiBtXCIsZXZ0LmRhdGEpO1xyXG5cdFx0dmFyIG1lc3NhZ2U9SlNPTi5wYXJzZShldnQuZGF0YSk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImF1dGhlbnRpY2F0ZVwiKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhdXRoZW50aWNhdGVcIik7XHJcblx0XHRcdHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0cnVlO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lKVxyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKHRoaXMub3B0aW9ucy51c2VyTmFtZSwgdGhpcy5vcHRpb25zLnBhc3N3b3JkKVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImF1dGhlbnRpY2F0aW9uX2ZhaWxlZFwiKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhdXRoZW50aWNhdGlvbiBmYWlsZWRcIiwgdGhpcy5vcHRpb25zLnVzZXJOYW1lKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy51c2VyTmFtZSA9PSBcImFub255bW91c1wiKSB7XHJcblx0XHRcdFx0dGhpcy5hbGxvd0Fub255bW91cyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy51c2VyTmFtZSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLnBhc3N3b3JkID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLnNlc3Npb25JZCA9IG51bGw7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ4XCIsIHNlbGYub3B0aW9ucylcclxuXHRcdFx0XHRpZiAoc2VsZi5vcHRpb25zLm9uTG9nT2ZmKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwieDFcIilcclxuXHRcdFx0XHRcdHNlbGYub3B0aW9ucy5vbkxvZ09mZi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlRmFpbGVkLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cInNlc3Npb25fYXV0aGVudGljYXRlZFwiKXtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuICAgICAgICBcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyKjYwKjYwKjEwMDApKTtcclxuICAgICAgICBcdHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcblx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbWVzc2FnZS5zZXNzaW9uO1xyXG5cdFx0XHRkb2N1bWVudC5jb29raWUgPSBcImtlcnZpc2Vzc2lvblwiICsgXCI9XCIgKyBtZXNzYWdlLnNlc3Npb24gKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInRvXCIsIHNlbGYub3B0aW9ucyk7XHJcblx0XHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbk9wZW4pXHJcblx0XHRcdFx0XHRzZWxmLm9wdGlvbnMub25PcGVuLmNhbGwoc2VsZi5vcHRpb25zLnRhcmdldFNjb3BlLCBzZWxmLmZpcnN0T25PcGVuLGV2dCk7XHJcblx0XHRcdFx0XHRzZWxmLmZpcnN0T25PcGVuID0gZmFsc2U7XHJcblx0XHRcdH0sIDEwMFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZSA9PSBcInNlc3Npb25fbG9nb2ZmXCIpeyBcclxuXHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdFx0aWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9IFwiYW5vbnltb3VzXCIpe1xyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKFwiYW5vbnltb3VzXCIsIG51bGwpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHNlbGYuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJyZXNwb25zZVwiKVxyXG5cdFx0XHR0aGlzLmhhbmRsZVJQQ1Jlc3BvbnNlKG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJldmVudFwiKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUV2ZW50KG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJjb21tYW5kXCIpXHJcblx0XHRcdHRoaXMuaGFuZGxlQ29tbWFuZChtZXNzYWdlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coXCJLZXJ2aSBzcGluZSBtZXNzYWdlIHVua25vd25cIix0aGlzLnJwY1F1ZXVlLGV2dCk7XHJcblx0fVxyXG5cclxuXHRvbkVycm9yKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIG9uIGVycm9yXCIsZXZ0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDb21tYW5kSGFuZGxlciAoY29tbWFuZDpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0dGhpcy5jb21tYW5kSGFuZGxlcnMucHVzaCh7Y29tbWFuZDpjb21tYW5kLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJcIixcImNvbW1hbmRcIjpjb21tYW5kfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZFF1ZXJ5SGFuZGxlcihxdWVyeTpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0dGhpcy5xdWVyeUhhbmRsZXJzLnB1c2goe3F1ZXJ5OnF1ZXJ5LGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyUXVlcnlIYW5kbGVyXCIsXCJxdWVyeVwiOnF1ZXJ5fTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcj1mdW5jdGlvbihldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHRpZiAoaWQpXHJcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcImV2ZW50TmFtZVwiOmV2ZW50TmFtZStcIi9cIitpZCxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmV2ZW50SGFuZGxlcnMucHVzaCh7XCJldmVudE5hbWVcIjpldmVudE5hbWUsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicmVnaXN0ZXJFdmVudEhhbmRsZXJcIixcImV2ZW50XCI6ZXZlbnROYW1lLFwiZXZlbnRJZFwiOmlkfTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJhZGQgZXZlbnQgaGFuZGxlclwiLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZW5kQ29tbWFuZChjb21tYW5kOnN0cmluZywuLi5wOmFueVtdKXtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VjXCIsYXJndW1lbnRzKTtcclxuXHRcdHZhciBhcmdzPVtdO1xyXG5cdFx0XHJcblx0XHR2YXIgY2FsbGJhY2s9bnVsbDtcclxuXHJcblx0XHRmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcblx0XHRcdGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcblx0XHRcdFx0Y2FsbGJhY2s9cFtpXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFyZ3MucHVzaChwW2ldKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJjb21tYW5kXCIsXCJjb21tYW5kXCI6Y29tbWFuZCxcImFyZ3NcIjphcmdzfTtcclxuXHRcdGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG5cdFx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLCBjYWxsYmFjaywgbnVsbCwgMCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZENvbW1hbmRcIix0aGlzLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZW5kUXVlcnkocXVlcnksLi4ucDphbnlbXSl7XHJcblx0XHR2YXIgYXJncz1bXTtcclxuXHRcdHZhciBjYWxsYmFjaz1udWxsO1xyXG5cdFx0dmFyIGNhbGxiYWNrVGltZW91dCA9IG51bGxcclxuXHRcdHZhciB0aW1lb3V0ID0gMTAwMDBcclxuXHRcdGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0aWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrKSBcclxuXHRcdFx0XHRcdGNhbGxiYWNrPXBbaV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0Y2FsbGJhY2tUaW1lb3V0ID0gcFtpXTtcclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2tUaW1lb3V0KVxyXG5cdFx0XHRcdFx0dGltZW91dCA9IHBbaV1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRhcmdzLnB1c2gocFtpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCBcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicXVlcnlcIixcInF1ZXJ5XCI6cXVlcnksXCJhcmdzXCI6YXJnc307XHJcblx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBjYWxsYmFja1RpbWVvdXQsIHRpbWVvdXQpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZW5kUXVlcnlcIiwgY2FsbGJhY2ssY21kKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHR2YXIgZT17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJldmVudFwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJhcmdzXCI6YXJndW1lbnRzfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdH07XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuaW1wb3J0IHtLZXJ2aVNwaW5lQmFzZX0gZnJvbSBcIi4va2Vydmktc3BpbmViYXNlXCI7XHJcbmRlY2xhcmUgdmFyIFN0b21wOmFueTtcclxuZXhwb3J0IGNsYXNzICBLZXJ2aVJNUVNwaW5lIGV4dGVuZHMgS2VydmlTcGluZUJhc2Uge1xyXG5cdHByaXZhdGUgc29ja2V0U2Vzc2lvbjpudWxsO1xyXG5cdHByaXZhdGUgZXhjaGFuZ2UgPSBcIi9leGNoYW5nZS9cIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RydWN0b3JPcHRpb25zKXtcclxuXHRcdHN1cGVyKGNvbnN0cnVjdG9yT3B0aW9ucyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGlvIHNwaW5lIGluaXQgeVwiLCB0aGlzLm9wdGlvbnMsY29uc3RydWN0b3JPcHRpb25zKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbk1RRXJyb3IoZnJhbWUpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJNUSBlcnJvclwiLCBmcmFtZSk7XHJcblx0fVxyXG5cclxuXHRcclxuXHRwcm90ZWN0ZWQgY29ubmVjdCgpe1xyXG5cdFx0aWYgKHRoaXMuaXNDb25uZWN0ZWQpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGlzIGNvbm5lY3RlZFwiKTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR2YXIgc2VsZj10aGlzO1xyXG5cdFx0Ly92YXIgbXFVcmw9IHRoaXMub3B0aW9ucy5wcm90b2NvbCArIFwiOi8vXCIgKyB0aGlzLm9wdGlvbnMuYWRkcmVzc1xyXG5cdFx0dmFyIG1xVXJsPSBcIndzczovL21xLmtlcnZpLmlvOjE1NjczL3dzXCJcclxuXHRcdHRoaXMud2Vic29ja2V0ID0gU3RvbXAuY2xpZW50KG1xVXJsKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LmhlYXJ0YmVhdC5pbmNvbWluZyA9IDA7XHJcblx0XHRzZWxmLmV4Y2hhbmdlID0gXCIvZXhjaGFuZ2UvXCIgKyAgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZDtcclxuXHRcdGNvbnNvbGUubG9nKFwiZXhjaGFuZ2VcIiwgc2VsZi5leGNoYW5nZSlcclxuXHRcdHRoaXMud2Vic29ja2V0LmNvbm5lY3QoXHJcblx0XHRcdHNlbGYub3B0aW9ucy5hcGlUb2tlbi5hcGlfdG9rZW4sIFxyXG5cdFx0XHRcInVpXCIsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZnJhbWUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTVEgY29ubmVjdFwiLCBmcmFtZSwgc2VsZi53ZWJzb2NrZXQsIHRoaXMsIHNlbGYpO1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0U2Vzc2lvbiA9IGZyYW1lLmhlYWRlcnMuc2Vzc2lvbjtcclxuXHRcdFx0XHRzZWxmLmV4Y2hhbmdlID0gXCIvZXhjaGFuZ2UvXCIgKyAgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZDtcclxuXHRcdFx0XHRzZWxmLndlYnNvY2tldC5zdWJzY3JpYmUoc2VsZi5leGNoYW5nZSwgZnVuY3Rpb24obWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtcSBcIiwgbWVzc2FnZSk7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0pXHJcblx0XHRcdFx0XHRcdG1lc3NhZ2UuaGVhZGVyc1tcInRvcGljXCJdID0gbWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXGNcIixcImdcIiksXCI6XCIpO1xyXG5cdFx0XHRcdFx0aWYgKG1lc3NhZ2UuY29tbWFuZD09XCJDT05ORUNURURcIil7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0gPT0gXCJwaW5nXCIpXHJcblx0XHRcdFx0XHRcdHNlbGYub25QaW5nKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRzZWxmLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuXHRcdFx0XHR9LCB7IH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxmLm9uTVFFcnJvciwgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwaV9jaGFubmVsKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cdG9uUGluZyhtZXNzYWdlKXtcclxuXHRcdGNvbnNvbGUubG9nKFwib25waW5nXCIsIHRoaXMub3B0aW9ucy5hcHBJZCwgbWVzc2FnZSwgKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICghdGhpcy5pc0Nvbm5lY3RlZCAmJiBtZXNzYWdlLmhlYWRlcnNbXCJjb25uZWN0aW9uX2lkXCJdPT0gc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZCl7XHJcblx0XHRcdHRoaXMub25PcGVuKG1lc3NhZ2UpO1xyXG5cdFx0XHR0aGlzLndlYnNvY2tldC5zZW5kKHNlbGYuZXhjaGFuZ2UsIHsgdG9waWM6XCJzZXNzaW9uOm5ld1wiLCByb3V0ZXJfaWQ6bWVzc2FnZS5oZWFkZXJzW1wicm91dGVyX2lkXCJdLCBzZXNzaW9uX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sIFwie31cIilcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCl7XHJcblx0XHR0aGlzLm9wdGlvbnMudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuXHRcdHRoaXMub3B0aW9ucy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZVN0YXJ0KVxyXG5cdFx0XHR0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVTdGFydC5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcImF1dGhlbnRpY2F0ZVwiLFwidXNlck5hbWVcIjp0aGlzLm9wdGlvbnMudXNlck5hbWUsIFwicGFzc3dvcmRcIjogdGhpcy5vcHRpb25zLnBhc3N3b3JkfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fVxyXG5cclxuXHRsb2dvZmYoKXtcclxuXHRcdC8vdGhpcy5vcHRpb25zLnVzZXJOYW1lID0gdGhpcy5hbGxvd0Fub255bW91cyA/IFwiYW5vbnltb3VzXCIgOiBudWxsO1xyXG5cdFx0Ly90aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwibG9nb2ZmXCIsIFwic2Vzc2lvblwiOiB0aGlzLnNlc3Npb25JZH07XHJcblx0XHR0aGlzLnNlc3Npb25JZCA9IG51bGw7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH1cclxuXHJcblx0b25NZXNzYWdlKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uIG1cIixldnQpO1xyXG5cdFx0dmFyIG1lc3NhZ2U9SlNPTi5wYXJzZShldnQuYm9keSk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgdG9waWMgPSBldnQuaGVhZGVyc1tcInRvcGljXCJdO1xyXG5cclxuXHRcdGlmICh0b3BpYz09XCJhdXRoZW50aWNhdGVcIil7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRlXCIpO1xyXG5cdFx0XHR0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy51c2VyTmFtZSlcclxuXHRcdFx0XHR0aGlzLmF1dGhlbnRpY2F0ZSh0aGlzLm9wdGlvbnMudXNlck5hbWUsIHRoaXMub3B0aW9ucy5wYXNzd29yZClcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZS5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodG9waWM9PVwiYXV0aGVudGljYXRpb25fZmFpbGVkXCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiLCB0aGlzLm9wdGlvbnMudXNlck5hbWUpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lID09IFwiYW5vbnltb3VzXCIpIHtcclxuXHRcdFx0XHR0aGlzLmFsbG93QW5vbnltb3VzID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInhcIiwgc2VsZi5vcHRpb25zKVxyXG5cdFx0XHRcdGlmIChzZWxmLm9wdGlvbnMub25Mb2dPZmYpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ4MVwiKVxyXG5cdFx0XHRcdFx0c2VsZi5vcHRpb25zLm9uTG9nT2ZmLmNhbGwoc2VsZi5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVGYWlsZWQuY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRvcGljPT1cInNlc3Npb25fYXV0aGVudGljYXRlZFwiKXtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuICAgICAgICBcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyKjYwKjYwKjEwMDApKTtcclxuICAgICAgICBcdHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcblx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbWVzc2FnZS5zZXNzaW9uO1xyXG5cdFx0XHRkb2N1bWVudC5jb29raWUgPSBcImtlcnZpc2Vzc2lvblwiICsgXCI9XCIgKyBtZXNzYWdlLnNlc3Npb24gKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZiAoc2VsZi5vcHRpb25zLm9uT3BlbilcclxuXHRcdFx0XHRcdHNlbGYub3B0aW9ucy5vbk9wZW4uY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsIHNlbGYuZmlyc3RPbk9wZW4sZXZ0KTtcclxuXHRcdFx0XHRcdHNlbGYuZmlyc3RPbk9wZW4gPSBmYWxzZTtcclxuXHRcdFx0fSwgMTAwXHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIGlmICh0b3BpYyA9PSBcInNlc3Npb25fbG9nb2ZmXCIpeyBcclxuXHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdFx0aWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9IFwiYW5vbnltb3VzXCIpe1xyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKFwiYW5vbnltb3VzXCIsIG51bGwpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHNlbGYuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoZXZ0LmhlYWRlcnNbXCJ0eXBlXCJdPT1cInF1ZXJ5X3Jlc3BvbnNlXCIpe1xyXG5cdFx0XHR0aGlzLmhhbmRsZVJQQ1Jlc3BvbnNlKHtpZDpldnQuaGVhZGVyc1tcInF1ZXJ5X2lkXCJdLCByZXNwb25zZTptZXNzYWdlfSk7XHJcblx0XHR9ZWxzZSBpZiAoZXZ0LmhlYWRlcnNbXCJ0eXBlXCJdPT1cImV2ZW50XCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImVcIiwgZXZ0KTtcclxuXHRcdFx0dmFyIHRvcGljX3RhZz0gZXZ0LmhlYWRlcnNbXCJ0b3BpY1wiXS5zcGxpdChcIjpcIik7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmhhbmRsZUV2ZW50KHtldmVudDp0b3BpY190YWdbMV0sIGlkOnRvcGljX3RhZ1syXSwgYXJnczptZXNzYWdlLmFyZ3N9KTtcclxuXHRcdH1lbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImNvbW1hbmRcIilcclxuXHRcdFx0dGhpcy5oYW5kbGVDb21tYW5kKG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIG1lc3NhZ2UgdW5rbm93blwiLHRoaXMucnBjUXVldWUsZXZ0KTtcclxuXHR9XHJcblxyXG5cdG9uRXJyb3IoZXZ0KXtcclxuXHRcdGNvbnNvbGUubG9nKFwiS2Vydmkgb24gZXJyb3JcIixldnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZENvbW1hbmRIYW5kbGVyIChjb21tYW5kOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVycy5wdXNoKHtjb21tYW5kOmNvbW1hbmQsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicmVnaXN0ZXJDb21tYW5kSGFuZGxlclwiLFwiY29tbWFuZFwiOmNvbW1hbmR9O1xyXG5cdFx0Ly90aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChcclxuXHRcdFx0dGhpcy5leGNoYW5nZSxcclxuXHRcdFx0eyB0b3BpYzpcInJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcdFxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBhZGRRdWVyeUhhbmRsZXIocXVlcnk6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdHRoaXMucXVlcnlIYW5kbGVycy5wdXNoKHtxdWVyeTpxdWVyeSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlclF1ZXJ5SGFuZGxlclwiLFwicXVlcnlcIjpxdWVyeX07XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicmVnaXN0ZXJRdWVyeUhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyPWZ1bmN0aW9uKGV2ZW50TmFtZTpzdHJpbmcsaWQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdGlmIChpZClcclxuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXJzLnB1c2goe1wiZXZlbnROYW1lXCI6ZXZlbnROYW1lK1wiL1wiK2lkLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcImV2ZW50TmFtZVwiOmV2ZW50TmFtZSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlckV2ZW50SGFuZGxlclwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJldmVudElkXCI6aWR9O1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChcclxuXHRcdFx0dGhpcy5leGNoYW5nZSxcclxuXHRcdFx0eyB0b3BpYzpcInJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsIHJvdXRlcl9pZDp0aGlzLnNvY2tldFNlc3Npb259LFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjbWQpXHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHNlbmRDb21tYW5kKGNvbW1hbmQ6c3RyaW5nLC4uLnA6YW55W10pe1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZWNcIixhcmd1bWVudHMpO1xyXG5cdFx0dmFyIGFyZ3M9W107XHJcblx0XHRcclxuXHRcdHZhciBjYWxsYmFjaz1udWxsO1xyXG5cclxuXHRcdGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0aWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuXHRcdFx0XHRjYWxsYmFjaz1wW2ldO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0YXJncy5wdXNoKHBbaV0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKmlmIChwLmxlbmd0aD4xKXtcclxuXHRcdFx0dmFyIGFyZ09mZnNldD0xO1xyXG5cdFx0XHRpZiAoIGNhbGxiYWNrICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gKVxyXG5cdFx0XHRcdGFyZ09mZnNldCs9MTtcclxuXHRcdFx0Zm9yICh2YXIgaT1hcmdPZmZzZXQ7KGk8YXJndW1lbnRzLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0XHRhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fSovXHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwiYXJnc1wiOmFyZ3MsIGt3YXJnczp7fX07XHJcblx0XHRcclxuXHRcdGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG5cdFx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBudWxsLCAwKTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZENvbW1hbmRcIix0aGlzLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwiY29tbWFuZDpcIisgY29tbWFuZCwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG5cdFx0dmFyIGFyZ3M9W107XHJcblx0XHR2YXIgY2FsbGJhY2s9bnVsbDtcclxuXHRcdHZhciBjYWxsYmFja1RpbWVvdXQ9bnVsbDtcclxuXHRcdHZhciB0aW1lb3V0ID0gMTAwMDA7XHJcblx0XHRmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcblx0XHRcdGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcblx0XHRcdFx0aWYgKCFjYWxsYmFjaykgXHJcblx0XHRcdFx0XHRjYWxsYmFjaz1wW2ldO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGNhbGxiYWNrVGltZW91dCA9IHBbaV07XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrVGltZW91dClcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBwW2ldXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0YXJncy5wdXNoKHBbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQgXHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInF1ZXJ5XCIsXCJxdWVyeVwiOnF1ZXJ5LFwiYXJnc1wiOmFyZ3MsIGt3YXJnczpbXSwgcXRzOjB9O1xyXG5cdFx0dGhpcy5hZGRSUENDYWxsYmFjayhjbWQuaWQudG9TdHJpbmcoKSxjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZFF1ZXJ5XCIsIGNhbGxiYWNrLGNtZCk7XHJcblx0XHQvL3RoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicXVlcnk6XCIgKyBxdWVyeSwgcXRzOjAsIHF1ZXJ5X2lkOiBjbWQuaWQudG9TdHJpbmcoKSwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbiwgcmVzcG9uc2VfYWRkcmVzczp0aGlzLnNvY2tldFNlc3Npb259LFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjbWQpXHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHR2YXIgZT17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJldmVudFwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJhcmdzXCI6YXJndW1lbnRzfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdH07XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmt7XHJcbiAgICBkYXNoYm9hcmRJZDpzdHJpbmc7XHJcbiAgICBwYW5lbElkOnN0cmluZztcclxuICAgIHBhbmVsTmFtZTpzdHJpbmc7XHJcbiAgICBjb21wb25lbnQ6SUNvbXBvbmVudDtcclxuICAgIHBhcmFtZXRlcnM6YW55O1xyXG5cclxuICAgIC8qY29uc3RydWN0b3IoZGFzaGJvYXJkSWQ6c3RyaW5nLCBzZWN0aW9uSWQ6c3RyaW5nLCBzZWN0aW9uTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBkYXNoYm9hcmRJZDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25JZCA9IHNlY3Rpb25JZDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWU7XHJcbiAgICB9Ki9cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6SUNvbXBvbmVudCwgbWVzc2FnZTphbnkpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBtZXNzYWdlLmRhc2hib2FyZElkO1xyXG4gICAgICAgIHRoaXMucGFuZWxJZCA9IG1lc3NhZ2Uuc2VjdGlvbklkO1xyXG4gICAgICAgIHRoaXMucGFuZWxOYW1lID0gbWVzc2FnZS5zZWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBtZXNzYWdlLnBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xyXG4gICAgdWk6YW55O1xyXG4gICAgZGFzaGJvYXJkcyA6IERhc2hib2FyZExpbmtbXTtcclxuXHJcbiAgICAvL3VwZGF0ZVJlZmVyZW5jZXMoa2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpO1xyXG4gICAgLy9yZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpO1xyXG4gICAgLy9yZW1vdmVSZWZlcmVuY2VzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdKTtcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRMaW5rIH0gZnJvbSBcIi4vSUNvbXBvbmVudC5tb2RlbFwiXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuZGVjbGFyZSB2YXIgUXR5OmFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZSA9IFwiS2VydmlWYWx1ZVwiXHJcbiAgICBwdWJsaWMgdHlwZU5hbWU6c3RyaW5nID0gbnVsbDsgICAgXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRMaW5rW10gPSBbXTtcclxuICAgIHB1YmxpYyBpc0lucHV0OmJvb2xlYW47XHJcbiAgICBwdWJsaWMgY29tbWFuZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZhbHVlVFM6RGF0ZTtcclxuXHJcbiAgICBwdWJsaWMgdWkgPSB7XHJcbiAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICBvcmllbnRhdGlvbjogXCJcIixcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLZXJ2aVZhbHVlVHlwZTx2YWx1ZVR5cGU+IGV4dGVuZHMgS2VydmlWYWx1ZXtcclxuICAgIFxyXG4gICAgcHVibGljIHZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PHZhbHVlVHlwZT47XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6YW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IGtlcnZpU2VydmljZTtcclxuICAgICAgICB0aGlzLnZhbHVlJD0gbmV3IEJlaGF2aW9yU3ViamVjdDx2YWx1ZVR5cGU+KG1lc3NhZ2UudmFsdWUpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICB0aGlzLmlzSW5wdXQgPSBtZXNzYWdlLmlzSW5wdXQ7XHJcbiAgICAgICAgdGhpcy51aSA9IG1lc3NhZ2UudWk7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbWVzc2FnZS5jb21tYW5kO1xyXG4gICAgICAgIHRoaXMuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMudWlbXCJ0eXBlXCJdID0gbWVzc2FnZS5jb21wb25lbnRUeXBlO1xyXG4gICAgICAgIHRoaXMudWlbXCJvcmllbnRhdGlvblwiXSA9IG1lc3NhZ2Uub3JpZW50YXRpb247XHJcbiAgICAgICAgdGhpcy51aVtcInZpc2libGVcIl0gPSBtZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBtZXNzYWdlLnVpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpW3Byb3BdICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMudWlbcHJvcF0gPSBtZXNzYWdlLnVpW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZGFzaGJvYXJkTGluayBvZiBtZXNzYWdlLmRhc2hib2FyZExpbmtzKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRzLnB1c2goIG5ldyBEYXNoYm9hcmRMaW5rKHRoaXMsIGRhc2hib2FyZExpbmspKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldERlZmF1bHRWYWx1ZSgpOnZhbHVlVHlwZTtcclxuICAgIHB1YmxpYyBzZXQodjp2YWx1ZVR5cGUsIG5vdGlmeTpib29sZWFuPXRydWUpe1xyXG4gICAgICAgIHRoaXMudmFsdWUkLm5leHQodik7XHJcbiAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5jb21tYW5kLCB2KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFZhbHVlUmFuZ2VUeXBlIHtub3JtYWwsIHdhcm5pbmcsIGVycm9yfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdle1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhcnQ6bnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBlbmQ6bnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyB0eXBlOlZhbHVlUmFuZ2VUeXBlID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyYW5nZTphbnkpe1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSByYW5nZVtcInN0YXJ0XCJdO1xyXG4gICAgICAgIHRoaXMuZW5kID0gcmFuZ2VbXCJlbmRcIl1cclxuICAgICAgICBpZiAocmFuZ2VbXCJ0eXBlXCJdID09IFwid2FybmluZ1wiKVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBWYWx1ZVJhbmdlVHlwZS53YXJuaW5nO1xyXG4gICAgICAgIGVsc2UgaWYgKHJhbmdlW1widHlwZVwiXSA9PSBcImVycm9yXCIpXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFZhbHVlUmFuZ2VUeXBlLmVycm9yO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gVmFsdWVSYW5nZVR5cGUubm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUVudW1PcHRpb25Nb2RlbHtcclxuICAgIHB1YmxpYyB2YWx1ZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGV4dDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlT3B0aW9uOmFueSl7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG1lc3NhZ2VPcHRpb24udmFsdWU7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbWVzc2FnZU9wdGlvbi50ZXh0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQobWVzc2FnZU9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVSZWZlcmVuY2VzKCl7fTtcclxuICAgIHJlbG9hZChjb21wb25lbnQ6SUNvbXBvbmVudCl7fTtcclxuICAgIHJlbW92ZVJlZmVyZW5jZXMoY29tcG9uZW50czpJQ29tcG9uZW50W10pe307XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RWYWx1ZSBleHRlbmRzIEtlcnZpVmFsdWVUeXBlPHN0cmluZ1tdPntcclxuICAgIHB1YmxpYyBvcHRpb25zOktlcnZpRW51bU9wdGlvbk1vZGVsW10gPSBbXTtcclxuICAgIHB1YmxpYyBsYXN0U2VsZWN0ZWQkOkJlaGF2aW9yU3ViamVjdDxLZXJ2aUVudW1PcHRpb25Nb2RlbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEtlcnZpRW51bU9wdGlvbk1vZGVsPihudWxsKTsgXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yIChtZXNzYWdlOmFueSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2Upe1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIG1lc3NhZ2Uub3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKCBuZXcgS2VydmlFbnVtT3B0aW9uTW9kZWwob3B0aW9uKSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb25zKHRoaXMudmFsdWUkLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0T3B0aW9ucyh2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFZhbHVlKCk6c3RyaW5nW117XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHNlbGVjdE9wdGlvbnMoc2VsZWN0ZWRPcHRpb25zOmFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NcIik7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKXtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkJC5uZXh0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0ZWRPcHRpb24gb2Ygc2VsZWN0ZWRPcHRpb25zKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb1wiLCBzZWxlY3RlZE9wdGlvbilcclxuICAgICAgICAgICAgZm9yKGxldCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic294XCIsIG9wdGlvbiApXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09IHNlbGVjdGVkT3B0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWQkLm5leHQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9zXCIsIG9wdGlvbi50ZXh0LCBvcHRpb24uc2VsZWN0ZWQkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlclZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8bnVtYmVyPiB7XHJcbiAgICBwdWJsaWMgdW5pdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHF0eVVuaXRGcm9tOnN0cmluZztcclxuICAgIHB1YmxpYyBxdHlVbml0VG86c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBtYXhWYWx1ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG1pblZhbHVlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3BhcmtsaW5lJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyW10+KFtdKTtcclxuICAgIHB1YmxpYyByYW5nZXM6IFZhbHVlUmFuZ2VbXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy51bml0ID0gbWVzc2FnZS51bml0O1xyXG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIk51bWJlclwiO1xyXG4gICAgXHJcbiAgICAgICAgXHRcclxuICAgICAgICB0aGlzLnF0eVVuaXRGcm9tID0gbWVzc2FnZS51bml0O1xyXG4gICAgICAgIGlmICh0aGlzLnVuaXQgPT0gXCJjXCIgJiYga2VydmlTZXJ2aWNlLmFwcGxpY2F0aW9uJC52YWx1ZVtcImRpc3BsYXlcIl1bXCJ1bml0X3N5c3RlbVwiXVtcInRlbXBlcmF0dXJlXCJdPT1cIkZcIil7XHJcbiAgICAgICAgICAgIHRoaXMucXR5VW5pdEZyb20gPSBcInRlbXBDXCI7XHJcbiAgICAgICAgICAgIHRoaXMucXR5VW5pdFRvID0gXCJ0ZW1wRlwiO1xyXG4gICAgICAgICAgICB0aGlzLnVuaXQgPSBcIkZcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgcmFuZ2Ugb2YgbWVzc2FnZS5yYW5nZXMpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdHlVbml0VG8pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KHJhbmdlW1wic3RhcnRcIl0sIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VbXCJzdGFydFwiXSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhclxyXG4gICAgICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KHJhbmdlW1wiZW5kXCJdLCB0aGlzLnF0eVVuaXRGcm9tKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlW1wiZW5kXCJdID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlcy5wdXNoKG5ldyBWYWx1ZVJhbmdlKHJhbmdlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZXMucHVzaChuZXcgVmFsdWVSYW5nZShyYW5nZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5xdHlVbml0VG8gJiYgbWVzc2FnZS5tYXhWYWx1ZSl7XHJcbiAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eShtZXNzYWdlLm1heFZhbHVlLCB0aGlzLnF0eVVuaXRGcm9tKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhcjtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1lc3NhZ2UubWF4VmFsdWU7IFxyXG5cclxuICAgICAgICBpZiAodGhpcy5xdHlVbml0VG8gJiYgbWVzc2FnZS5taW5WYWx1ZSl7XHJcbiAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eShtZXNzYWdlLm1pblZhbHVlLCB0aGlzLnF0eVVuaXRGcm9tKTtcclxuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhcjtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZSA9IG1lc3NhZ2UubWluVmFsdWU7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzcGwgPSBbXVxyXG4gICAgICAgIGZvcih2YXIgc3B2IG9mIG1lc3NhZ2Uuc3BhcmtsaW5lKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXR5VW5pdFRvKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3B2XCIsIHNwdik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkoc3B2LnZhbHVlLCB0aGlzLnF0eVVuaXRGcm9tKTtcclxuICAgICAgICAgICAgICAgIC8vc3B2LnZhbHVlID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwbC5wdXNoKHNwdilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcGFya2xpbmUkLm5leHQoc3BsKTtcclxuICAgICAgICB0aGlzLnNldChtZXNzYWdlLnZhbHVlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHYsIG5vdGlmeT10cnVlKXtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2O1xyXG4gICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyl7XHJcbiAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eSh2LCB0aGlzLnF0eVVuaXRGcm9tKTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXI7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dChuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5jb21tYW5kLCB2KTtcclxuICAgICAgICB2YXIgc3BsPXRoaXMuc3BhcmtsaW5lJC52YWx1ZTtcclxuICAgICAgICBzcGwucHVzaChuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHNwbC5sZW5ndGg+MTApXHJcbiAgICAgICAgICAgICBzcGwuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnNwYXJrbGluZSQubmV4dChzcGwpOyAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdWYWx1ZSBleHRlbmRzIEtlcnZpVmFsdWVUeXBlPHN0cmluZz4ge1xyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFZhbHVlKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGFueSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpXHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiU3RyaW5nXCI7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5WYWx1ZSBleHRlbmRzIEtlcnZpVmFsdWVUeXBlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKVxyXG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIkJvb2xlYW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFZhbHVlKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8RGF0ZT4ge1xyXG4gICAgcHVibGljIHN1YlR5cGU6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpXHJcbiAgICAgICAgdGhpcy5zdWJUeXBlID0gbWVzc2FnZS5pbnB1dFR5cGU7XHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiRGF0ZVRpbWVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFZhbHVlKCk6RGF0ZXtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JWYWx1ZSBleHRlbmRzIEtlcnZpVmFsdWVUeXBlPHN0cmluZz4ge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSlcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJDb2xvclwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIFwiI2ZmZmZmZlwiO1xyXG4gICAgfSAgICBcclxufSIsImV4cG9ydCBjbGFzcyBDb21wb25lbnRSZWZ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLmlkPSBtZXNzYWdlLmlkO1xyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcbmltcG9ydCB7IElDb21wb25lbnQsIERhc2hib2FyZExpbmsgfSBmcm9tIFwiLi9JQ29tcG9uZW50Lm1vZGVsXCJcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIi4vQ29tcG9uZW50UmVmXCJcclxuaW1wb3J0IHsgS2VydmlCYXNlU2VydmljZSB9IGZyb20gJy4uL2tlcnZpLWpzLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGNvbXBvbmVudFR5cGU9XCJjb250cm9sbGVyXCJcclxuICAgIHB1YmxpYyB1aTphbnkgPSB7fVxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmFtZXRlcnM6IGFueTtcclxuICAgIHB1YmxpYyBpbnB1dHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gICAgcHVibGljIG91dHB1dHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gICAgcHVibGljIGFjdGlvbnM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gICAgcHVibGljIGlucHV0UmVmZXJlbmNlczogQ29tcG9uZW50UmVmW10gPSBbXTtcclxuICAgIHB1YmxpYyBvdXRwdXRSZWZlcmVuY2VzOiBDb21wb25lbnRSZWZbXSA9IFtdO1xyXG4gICAgcHVibGljIGFjdGlvbnNSZWZlcmVuY2VzOiBDb21wb25lbnRSZWZbXSA9IFtdO1xyXG4gICAgcHVibGljIGRhc2hib2FyZHM6IERhc2hib2FyZExpbmtbXT1bXTtcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlXHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0ga2VydmlTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgdGhpcy51aSA9IG1lc3NhZ2UudWk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gbWVzc2FnZS52aXNpYmxlO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG1lc3NhZ2UucGFyYW1ldGVycztcclxuICAgICAgICB0aGlzLnRlbXBsYXRlPW1lc3NhZ2UudGVtcGxhdGU7XHJcbiAgICAgICAgZm9yKHZhciByZWYgb2YgbWVzc2FnZS5pbnB1dHMpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0UmVmZXJlbmNlcy5wdXNoKCBuZXcgQ29tcG9uZW50UmVmKHJlZikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciByZWYgb2YgbWVzc2FnZS5vdXRwdXRzKXtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXRSZWZlcmVuY2VzLnB1c2goIG5ldyBDb21wb25lbnRSZWYocmVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIHJlZiBvZiBtZXNzYWdlLmFjdGlvbnMpe1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNSZWZlcmVuY2VzLnB1c2goIG5ldyBDb21wb25lbnRSZWYocmVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBkYXNoYm9hcmRMaW5rIG9mIG1lc3NhZ2UuZGFzaGJvYXJkTGlua3Mpe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hib2FyZHMucHVzaCggbmV3IERhc2hib2FyZExpbmsodGhpcywgZGFzaGJvYXJkTGluaykpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVmZXJlbmNlcygpe1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0cy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBmb3IodmFyIHJlZiBvZiB0aGlzLmlucHV0UmVmZXJlbmNlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHJlZi5pZClcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dHMucHVzaChjb21wb25lbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0cy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBmb3IodmFyIHJlZiBvZiB0aGlzLm91dHB1dFJlZmVyZW5jZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudChyZWYuaWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25zLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgcmVmIG9mIHRoaXMuYWN0aW9uc1JlZmVyZW5jZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudChyZWYuaWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZW1vdmVSZWZlcmVuY2VzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdKXt9O1xyXG4gICAgcmVsb2FkKGNvbXBvbmVudDpJQ29tcG9uZW50KXt9O1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRMaW5rIH0gZnJvbSAnLi9JQ29tcG9uZW50Lm1vZGVsJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTaXplc3tcclxuICAgIHB1YmxpYyB2YWx1ZVdpZHRoOnN0cmluZyA9XCIzcmVtXCI7XHJcbiAgICBwdWJsaWMgYnV0dG9uV2lkdGg6c3RyaW5nID0gXCIyNXB4XCI7XHJcbiAgICBwdWJsaWMgYnV0dG9uSGVpZ2h0OnN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgc3dpdGNoV2lkdGg6c3RyaW5nID0gXCIyNXB4XCI7XHJcbiAgICBwdWJsaWMgc3dpdGNoSGVpZ2h0OnN0cmluZyA9IFwiMjVweFwiO1xyXG4gICAgcHVibGljIGdhdWdlV2lkdGg6c3RyaW5nID0gXCIxMDBweFwiO1xyXG4gICAgcHVibGljIGdhdWdlSGVpZ2h0OnN0cmluZyA9IFwiMjAwcHhcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1lc3NhZ2VNb2RlbHtcclxuICAgIHB1YmxpYyBzb3VyY2VJZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgc291cmNlTmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXJlYTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGltZXN0YW1wOiBEYXRlO1xyXG4gICAgcHVibGljIHRvcGljOnN0cmluZztcclxuICAgIHB1YmxpYyBib2R5OnN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IG5ldyBEYXRlKG1lc3NhZ2UudGltZXN0YW1wKjEwMDApO1xyXG4gICAgICAgIHRoaXMudG9waWMgPSBtZXNzYWdlLnRvcGljO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IG1lc3NhZ2UuYm9keTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VJZCA9IG1lc3NhZ2Uuc291cmNlX2lkO1xyXG4gICAgICAgIHRoaXMuc291cmNlTmFtZSA9IG1lc3NhZ2Uuc291cmNlX25hbWU7XHJcbiAgICAgICAgdGhpcy5hcmVhID0gbWVzc2FnZS5hcmVhO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBtZXNzYWdlLmxldmVsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUGFuZWxDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50OklDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50SWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmtJZDphbnk7XHJcbiAgICBwdWJsaWMgcGFyYW1ldGVyczphbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlOiBhbnkpe1xyXG4gICAgICAgIHRoaXMubGlua0lkID0gbWVzc2FnZS5saW5rSWQ7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG1lc3NhZ2UuY29tcG9uZW50SWQ7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBtZXNzYWdlLmNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBtZXNzYWdlLnBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbFBhcmFtZXRlcnN7XHJcbiAgICBwdWJsaWMgdGl0bGU6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyB3aWR0aDpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGhlaWdodDpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyB1c2VyTG9nOiBib29sZWFuID0gbnVsbDtcclxuICAgIHB1YmxpYyBsb2dMZW5ndGg6bnVtYmVyID0gNTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZVBhcmFtZXRlcnMpe1xyXG4gICAgICAgIHRoaXMudGl0bGU9bWVzc2FnZVBhcmFtZXRlcnMubGFiZWw7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQ9bWVzc2FnZVBhcmFtZXRlcnMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGg9bWVzc2FnZVBhcmFtZXRlcnMud2lkdGg7XHJcbiAgICAgICAgdGhpcy51c2VyTG9nPW1lc3NhZ2VQYXJhbWV0ZXJzLnVzZXJMb2c7XHJcbiAgICAgICAgdGhpcy5sb2dMZW5ndGggPSBtZXNzYWdlUGFyYW1ldGVycy5sb2dMZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXJhbWV0ZXJzLnR5cGUpXHJcbiAgICAgICAgICAgIHRoaXMudHlwZT1tZXNzYWdlUGFyYW1ldGVycy50eXBlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUGFuZWwge1xyXG4gICAgcHVibGljIGlkOnN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOnN0cmluZztcclxuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiBEYXNoYm9hcmRQYW5lbFBhcmFtZXRlcnM7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50czogRGFzaGJvYXJkUGFuZWxDb21wb25lbnRbXT1bXTtcclxuICAgIHB1YmxpYyBkYXNoYm9hcmQ6IERhc2hib2FyZDtcclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuICAgIHB1YmxpYyBzdWJQYW5lbHM6IERhc2hib2FyZFBhbmVsW10gPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKGRhc2hib2FyZCwgbWVzc2FnZVBhbmVsKXtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZD1kYXNoYm9hcmQ7XHJcbiAgICAgICAgdGhpcy5pZD1tZXNzYWdlUGFuZWwuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lPW1lc3NhZ2VQYW5lbC5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZT1tZXNzYWdlUGFuZWwudHlwZTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnM9bmV3IERhc2hib2FyZFBhbmVsUGFyYW1ldGVycyhtZXNzYWdlUGFuZWwudWlQYXJhbWV0ZXJzKTtcclxuICAgICAgICAvKmlmIChtZXNzYWdlUGFuZWwuY29tcG9uZW50cylcclxuICAgICAgICAgICAgZm9yKHZhciBjb21wb25lbnRSZWYgb2YgbWVzc2FnZVBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2gobmV3IERhc2hib2FyZFBhbmVsQ29tcG9uZW50TW9kZWwoY29tcG9uZW50UmVmKSlcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYW5lbC5wYW5lbHMpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic3BhXCIsbWVzc2FnZVBhbmVsLnBhbmVscyk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgc3ViTWVzc2FnZVBhbmVsIG9mIG1lc3NhZ2VQYW5lbC5wYW5lbHMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhbmVsPW5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBzdWJNZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJQYW5lbHMucHVzaChwYW5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbG9hZChzb3VyY2U6RGFzaGJvYXJkUGFuZWwpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJybFwiLCB0aGlzKTtcclxuICAgICAgICBmb3IodmFyIHN1YlBhbmVsIG9mIHNvdXJjZS5zdWJQYW5lbHMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbG9hZChzdWJQYW5lbClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBzb3VyY2VDb21wb25lbnQgb2Ygc291cmNlLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICB2YXIgZm91bmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcih2YXIgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudElkID09IHNvdXJjZUNvbXBvbmVudC5jb21wb25lbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHNvdXJjZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlbGV0ZUNvbXBvbmVudHM6RGFzaGJvYXJkUGFuZWxDb21wb25lbnRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICB2YXIgZm91bmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcih2YXIgc291cmNlQ29tcG9uZW50IG9mIHNvdXJjZS5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VDb21wb25lbnQuY29tcG9uZW50SWQgPT0gY29tcG9uZW50LmNvbXBvbmVudElkKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgICAgICBkZWxldGVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRzY1wiLGRlbGV0ZUNvbXBvbmVudHMpO1xyXG4gICAgICAgIGZvcih2YXIgY29tcG9uZW50IG9mIGRlbGV0ZUNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKCB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpLCAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQmFja2dyb3VuZE1vZGVse1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIGNhbWVyYUlkOnN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy50eXBlPW1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLmNhbWVyYUlkPW1lc3NhZ2UuY2FtZXJhSWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIGNvbXBvbmVudFR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIGlzRGVmYXVsdDpCb29sZWFuO1xyXG4gICAgcHVibGljIHRlbXBsYXRlOnN0cmluZztcclxuICAgIHB1YmxpYyBwYW5lbHM6RGFzaGJvYXJkUGFuZWxbXTtcclxuICAgIHB1YmxpYyBzeXNQYW5lbHM6RGFzaGJvYXJkUGFuZWxbXTtcclxuICAgIHB1YmxpYyBoZWFkZXJQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBmb290ZXJDZW50ZXJQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBmb290ZXJMZWZ0UGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgZm9vdGVyUmlnaHRQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBzeXNQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kUGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgY29udHJvbGxlclBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIExlZnRQYWRYUGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgTGVmdFBhZFlQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBSaWdodFBhZFhQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBSaWdodFBhZFlQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIC8vcHVibGljIGJhY2tncm91bmQ6IERhc2hib2FyZEJhY2tncm91bmRNb2RlbD1udWxsO1xyXG4gICAgcHVibGljIHVuaXRTaXplOiBudW1iZXI7XHJcbiAgICBcclxuICAgIC8vbm90IHVzZWQgaW4gZGFzaGJvYXJkc1xyXG4gICAgcHVibGljIHZpc2libGU6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyB1aTphbnk7XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkczphbnlbXSA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy5pZD1tZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZT1tZXNzYWdlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRUeXBlPVwiZGFzaGJvYXJkXCI7XHJcbiAgICAgICAgdGhpcy50eXBlPW1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLmlzRGVmYXVsdD1tZXNzYWdlLmlzRGVmYXVsdDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlPW1lc3NhZ2UudGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy51bml0U2l6ZT1tZXNzYWdlLnVuaXRTaXplO1xyXG4gICAgICAgIC8vdGhpcy5iYWNrZ3JvdW5kPW5ldyBEYXNoYm9hcmRCYWNrZ3JvdW5kTW9kZWwobWVzc2FnZS5iYWNrZ3JvdW5kKTtcclxuICAgICAgICB0aGlzLnBhbmVscz1bXTtcclxuICAgICAgICB0aGlzLnN5c1BhbmVscz1bXTtcclxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUpe1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFBhbmVsOkRhc2hib2FyZFBhbmVsID0gbnVsbDtcclxuICAgICAgICAgICAgZm9yIChsZXQgbWVzc2FnZVBhbmVsIG9mIG1lc3NhZ2Uuc2VjdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlUGFuZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFzaGJvYXJkIHdpdGggbnVsbCBwYW5lbFwiLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBtZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN5c1BhbmVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbC5pZD09XCJoZWFkZXJfY2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImZvb3Rlcl9sZWZ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJMZWZ0UGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJmb290ZXJfY2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImZvb3Rlcl9yaWdodFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyUmlnaHRQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImhlYWRlcl9yaWdodFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJjb250cm9sbGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwiYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwibGVmdF9wYWRfeFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTGVmdFBhZFhQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImxlZnRfcGFkX3lcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxlZnRQYWRZUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJyaWdodF9wYWRfeFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRYUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJyaWdodF9wYWRfeVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRZUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c1BhbmVsPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYW5lbC50eXBlIT1cImdyb3VwXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50UGFuZWw9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsID0gbmV3IERhc2hib2FyZFBhbmVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6bnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjpcImdyb3VwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6W10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYW5lbHNcIjpbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpUGFyYW1ldGVyc1wiOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlckxvZ1wiOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvZ0xlbmd0aFwiOjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwuc3ViUGFuZWxzLnB1c2gocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMucHVzaChjdXJyZW50UGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsLnN1YlBhbmVscy5wdXNoKHBhbmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzLnB1c2gocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWw9bnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3lzUGFuZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXNQYW5lbHMucHVzaChwYW5lbCk7ICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypyZW1vdmVQYW5lbFJlZihkZWxldGVDb21wb25lbnRzOklDb21wb25lbnRbXSwgcGFuZWw6RGFzaGJvYXJkUGFuZWxNb2RlbCwgcmVtb3ZlRW1wdHk6Ym9vbGVhbil7XHJcbiAgICAgICAgdmFyIHJlbW92ZUNvbXBvbmVudFBhbmVsczpEYXNoYm9hcmRQYW5lbENvbXBvbmVudE1vZGVsW10gPSBbXTtcclxuICAgICAgICBmb3IodmFyIHBhbmVsQ29tcG9uZW50IG9mIHBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGRlbGV0ZUNvbXBvbmVudCBvZiBkZWxldGVDb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgIGlmIChkZWxldGVDb21wb25lbnQuaWQgPT0gcGFuZWxDb21wb25lbnQuY29tcG9uZW50LmlkKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRsY1wiLCBwYW5lbENvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDb21wb25lbnRQYW5lbHMucHVzaChwYW5lbENvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGNvbXBvbmVudCBvZiByZW1vdmVDb21wb25lbnRQYW5lbHMpe1xyXG4gICAgICAgICAgICBwYW5lbC5jb21wb25lbnRzLnNwbGljZShwYW5lbC5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbW92ZVBhbmVsczpEYXNoYm9hcmRQYW5lbE1vZGVsW10gPSBbXTtcclxuICAgICAgICBmb3IodmFyIHN1YlBhbmVsIG9mIHBhbmVsLnN1YlBhbmVscyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUGFuZWxSZWYoZGVsZXRlQ29tcG9uZW50cywgc3ViUGFuZWwsIHJlbW92ZUVtcHR5KVxyXG4gICAgICAgICAgICBpZiAoc3ViUGFuZWwuY29tcG9uZW50cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVQYW5lbHMucHVzaChzdWJQYW5lbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIHN1YlBhbmVsIG9mIHJlbW92ZVBhbmVscyl7XHJcbiAgICAgICAgICAgIHBhbmVsLnN1YlBhbmVscy5zcGxpY2UocGFuZWwuc3ViUGFuZWxzLmluZGV4T2Yoc3ViUGFuZWwpKVxyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG5cclxuICAgIHJlbW92ZVJlZmVyZW5jZXMoZGVsZXRlQ29tcG9uZW50czpJQ29tcG9uZW50W10pe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVtb3ZlIHJlZlwiLCBkZWxldGVDb21wb25lbnRzKVxyXG4gICAgICAgIC8vIGZvcih2YXIgcGFuZWwgb2YgdGhpcy5zeXNQYW5lbHMpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJlbW92ZVBhbmVsUmVmKGRlbGV0ZUNvbXBvbmVudHMsIHBhbmVsLCBmYWxzZSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdmFyIHJlbW92ZVBhbmVsczpEYXNoYm9hcmRQYW5lbE1vZGVsW10gPSBbXTtcclxuICAgICAgICAvLyBmb3IodmFyIHBhbmVsIG9mIHRoaXMucGFuZWxzKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZW1vdmVQYW5lbFJlZihkZWxldGVDb21wb25lbnRzLCBwYW5lbCwgdHJ1ZSlcclxuICAgICAgICAvLyAgICAgaWYgKHBhbmVsLmNvbXBvbmVudHMubGVuZ3RoID09IDApXHJcbiAgICAgICAgLy8gICAgICAgICByZW1vdmVQYW5lbHMucHVzaChwYW5lbClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZm9yKHZhciBwYW5lbCBvZiByZW1vdmVQYW5lbHMpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBhbmVscy5zcGxpY2UodGhpcy5wYW5lbHMuaW5kZXhPZihwYW5lbCkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfTtcclxuICAgIHVwZGF0ZVJlZmVyZW5jZXMoKXt9O1xyXG4gICAgcmVsb2FkKGNvbXBvbmVudDpJQ29tcG9uZW50KXtcclxuICAgICAgICB2YXIgc291cmNlID0gY29tcG9uZW50IGFzIERhc2hib2FyZDtcclxuICAgICAgICBpZiAoIXRoaXMuYmFja2dyb3VuZFBhbmVsICYmIHNvdXJjZS5iYWNrZ3JvdW5kUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFBhbmVsPXNvdXJjZS5iYWNrZ3JvdW5kUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kUGFuZWwgJiYgIXNvdXJjZS5iYWNrZ3JvdW5kUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRQYW5lbC5yZWxvYWQoc291cmNlLmJhY2tncm91bmRQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvb3RlckxlZnRQYW5lbCAmJiBzb3VyY2UuZm9vdGVyTGVmdFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckxlZnRQYW5lbD1zb3VyY2UuZm9vdGVyTGVmdFBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyTGVmdFBhbmVsICYmICFzb3VyY2UuZm9vdGVyTGVmdFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckxlZnRQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlckxlZnRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJMZWZ0UGFuZWwucmVsb2FkKHNvdXJjZS5mb290ZXJMZWZ0UGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb290ZXJSaWdodFBhbmVsICYmIHNvdXJjZS5mb290ZXJSaWdodFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWw9c291cmNlLmZvb3RlclJpZ2h0UGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJSaWdodFBhbmVsICYmICFzb3VyY2UuZm9vdGVyUmlnaHRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJSaWdodFBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyUmlnaHRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJSaWdodFBhbmVsLnJlbG9hZChzb3VyY2UuZm9vdGVyUmlnaHRQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvb3RlckNlbnRlclBhbmVsICYmIHNvdXJjZS5mb290ZXJDZW50ZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbD1zb3VyY2UuZm9vdGVyQ2VudGVyUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJDZW50ZXJQYW5lbCAmJiAhc291cmNlLmZvb3RlckNlbnRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckNlbnRlclBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyQ2VudGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyQ2VudGVyUGFuZWwucmVsb2FkKHNvdXJjZS5mb290ZXJDZW50ZXJQYW5lbClcclxuXHJcbiAgICAgICAgLyppZiAoIXRoaXMuaGVhZGVyUGFuZWwgJiYgc291cmNlLmhlYWRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclBhbmVsPXNvdXJjZS5oZWFkZXJQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmhlYWRlclBhbmVsICYmICFzb3VyY2UuaGVhZGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5oZWFkZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJQYW5lbC5yZWxvYWQoc291cmNlLmhlYWRlclBhbmVsKSovXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zeXNQYW5lbCAmJiBzb3VyY2Uuc3lzUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc3lzUGFuZWw9c291cmNlLnN5c1BhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3lzUGFuZWwgJiYgIXNvdXJjZS5zeXNQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5zeXNQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN5c1BhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLnN5c1BhbmVsLnJlbG9hZChzb3VyY2Uuc3lzUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5MZWZ0UGFkWFBhbmVsICYmIHNvdXJjZS5MZWZ0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRYUGFuZWw9c291cmNlLkxlZnRQYWRYUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5MZWZ0UGFkWFBhbmVsICYmICFzb3VyY2UuTGVmdFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWFBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuTGVmdFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWFBhbmVsLnJlbG9hZChzb3VyY2UuTGVmdFBhZFhQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLkxlZnRQYWRZUGFuZWwgJiYgc291cmNlLkxlZnRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFlQYW5lbD1zb3VyY2UuTGVmdFBhZFlQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLkxlZnRQYWRZUGFuZWwgJiYgIXNvdXJjZS5MZWZ0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRZUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5MZWZ0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRZUGFuZWwucmVsb2FkKHNvdXJjZS5MZWZ0UGFkWVBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuUmlnaHRQYWRYUGFuZWwgJiYgc291cmNlLlJpZ2h0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWFBhbmVsPXNvdXJjZS5SaWdodFBhZFhQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLlJpZ2h0UGFkWFBhbmVsICYmICFzb3VyY2UuUmlnaHRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRYUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5SaWdodFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFhQYW5lbC5yZWxvYWQoc291cmNlLlJpZ2h0UGFkWFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuUmlnaHRQYWRZUGFuZWwgJiYgc291cmNlLlJpZ2h0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWVBhbmVsPXNvdXJjZS5SaWdodFBhZFlQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLlJpZ2h0UGFkWVBhbmVsICYmICFzb3VyY2UuUmlnaHRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRZUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5SaWdodFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFlQYW5lbC5yZWxvYWQoc291cmNlLlJpZ2h0UGFkWVBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29udHJvbGxlclBhbmVsICYmIHNvdXJjZS5jb250cm9sbGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsPXNvdXJjZS5jb250cm9sbGVyUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250cm9sbGVyUGFuZWwgJiYgIXNvdXJjZS5jb250cm9sbGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udHJvbGxlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJQYW5lbC5yZWxvYWQoc291cmNlLmNvbnRyb2xsZXJQYW5lbClcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXNoYm9hcmRQYW5lbEJ5SWQoaWQ6c3RyaW5nLCBwYW5lbHM6RGFzaGJvYXJkUGFuZWxbXSl7XHJcbiAgICAgICAgZm9yKGxldCBwYW5lbCBvZiBwYW5lbHMpe1xyXG4gICAgICAgICAgICBpZiAocGFuZWwuaWQgPT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFuZWw7IFxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuZ2V0RGFzaGJvYXJkUGFuZWxCeUlkKGlkLCBwYW5lbC5zdWJQYW5lbHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkRGFzaGJvYXJkTGluayhsaW5rOkRhc2hib2FyZExpbmspe1xyXG4gICAgICAgIGlmIChsaW5rLmRhc2hib2FyZElkID09IFwiKlwiIHx8IGxpbmsuZGFzaGJvYXJkSWQgPT0gdGhpcy5pZCB8fCAobGluay5kYXNoYm9hcmRJZD09XCIqKmRlZmF1bHQqKlwiICYmIHRoaXMuaXNEZWZhdWx0KSl7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbEZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IHRoaXMuZ2V0RGFzaGJvYXJkUGFuZWxCeUlkKGxpbmsucGFuZWxJZCwgdGhpcy5wYW5lbHMpO1xyXG4gICAgICAgICAgICBpZiAoIXBhbmVsKVxyXG4gICAgICAgICAgICAgICAgcGFuZWwgPSB0aGlzLmdldERhc2hib2FyZFBhbmVsQnlJZChsaW5rLnBhbmVsSWQsIHRoaXMuc3lzUGFuZWxzKTtcclxuICAgICAgICAgICAgaWYgKHBhbmVsKXtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmNvbXBvbmVudHMucHVzaChuZXcgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQobGluaykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGhcIixsaW5rKTtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlUGFuZWwgPXtcclxuICAgICAgICAgICAgICAgICAgICBpZDpsaW5rLnBhbmVsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTpsaW5rLnBhbmVsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlwicGFuZWxcIixcclxuICAgICAgICAgICAgICAgICAgICB1aVBhcmFtZXRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyTG9nXCI6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9nTGVuZ3RoXCI6MFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdQYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBtZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMucHVzaChuZXdQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdQYW5lbC5jb21wb25lbnRzLnB1c2gobmV3IERhc2hib2FyZFBhbmVsQ29tcG9uZW50KGxpbmspKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElDb21wb25lbnQsIERhc2hib2FyZExpbmsgfSBmcm9tICcuL0lDb21wb25lbnQubW9kZWwnXHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9rZXJ2aS1qcy5zZXJ2aWNlJ1xyXG5leHBvcnQgY2xhc3MgQWN0aW9uIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBjb21wb25lbnRUeXBlID0gXCJhY3Rpb25cIjtcclxuICAgIHB1YmxpYyBydW5Db21tYW5kOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgaW50ZXJydXB0Q29tbWFuZDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHVpID0ge1xyXG4gICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgb3JpZW50YXRpb246IFwiXCIsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRhc2hib2FyZHM6IERhc2hib2FyZExpbmtbXSA9IFtdO1xyXG4gICAgcHVibGljIHJ1bm5pbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBrZXJ2aVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pZD1tZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZT1tZXNzYWdlLm5hbWU7XHJcbiAgICAgICAgdGhpcy51aT1tZXNzYWdlLnVpO1xyXG4gICAgICAgIHRoaXMudWkudmlzaWJsZT1tZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgdGhpcy51aS50eXBlPW1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLnJ1bkNvbW1hbmQgPSBtZXNzYWdlLnJ1bkNvbW1hbmQ7XHJcbiAgICAgICAgdGhpcy5pbnRlcnJ1cHRDb21tYW5kID0gbWVzc2FnZS5pbnRlcnJ1cHRDb21tYW5kO1xyXG4gICAgICAgIHRoaXMucnVubmluZyQubmV4dChtZXNzYWdlLnJ1bm5pbmcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkYXNoYm9hcmRMaW5rIG9mIG1lc3NhZ2UuZGFzaGJvYXJkTGlua3Mpe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hib2FyZHMucHVzaChuZXcgRGFzaGJvYXJkTGluayh0aGlzLCBkYXNoYm9hcmRMaW5rKSk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcnVuKHBhcmFtZXRlcnMpe1xyXG4gICAgICAgIC8vaWYgKCF0aGlzLnJ1bm5pbmckLnZhbHVlKXtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgJiYgcGFyYW1ldGVycy5sZW5ndGg+MClcclxuICAgICAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMucnVuQ29tbWFuZCwgLi4ucGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMucnVuQ29tbWFuZCk7XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycnVwdChwYXJhbWV0ZXJzKXtcclxuICAgICAgICBpZiAocGFyYW1ldGVycyAmJiBwYXJhbWV0ZXJzLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmludGVycnVwdENvbW1hbmQsIC4uLnBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5pbnRlcnJ1cHRDb21tYW5kKTtcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgICogYXMgS2VydmlWYWx1ZXMgZnJvbSAnLi9LZXJ2aVZhbHVlcy5tb2RlbCdcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlci5tb2RlbCdcclxuaW1wb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSAnLi9kYXNoYm9hcmQubW9kZWwnXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uLm1vZGVsJ1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9JQ29tcG9uZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgS2VydmlCYXNlU2VydmljZSB9IGZyb20gJy4uL2tlcnZpLWpzLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmFjdG9yeXtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNvbXBvbmVudHMobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgdmFyIGZvdW5kQ29tcG9uZW50cyA9dGhpcy5jcmVhdGVDb21wb25lbnRzUmVjKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5saW5rVG9EYXNoYm9hcmRzKGZvdW5kQ29tcG9uZW50c1swXSwgZm91bmRDb21wb25lbnRzWzFdKTtcclxuICAgICAgICByZXR1cm4gZm91bmRDb21wb25lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbXBvbmVudHNSZWMobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2Upe1xyXG4gICAgICAgIHZhciByZXN1bHQ9W107XHJcbiAgICAgICAgdmFyIGRhc2hib2FyZHM9W107XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IChpIDwgbWVzc2FnZS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN1YkNvbXBvbmVudHMgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudHNSZWMobWVzc2FnZVtpXSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdD1yZXN1bHQuY29uY2F0KHN1YkNvbXBvbmVudHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkcz1kYXNoYm9hcmRzLmNvbmNhdChzdWJDb21wb25lbnRzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjb21wb25lbnQ6YW55PW51bGw7XHJcbiAgICAgICAgICAgIHZhciBzdWJDb21wb25lbnRzOmFueVtdID0gW107XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGU9PVwiS2VydmlBY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBBY3Rpb24obWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlPT1cImRhc2hib2FyZFwiKXtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBEYXNoYm9hcmQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRzLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGU9PVwiY29udHJvbGxlclwiKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbnRyb2xsZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09IFwiYm9vbGVhbi12YWx1ZVwiKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLkJvb2xlYW5WYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT0gXCJudW1iZXItdmFsdWVcIilcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5OdW1iZXJWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT0gXCJzdHJpbmctdmFsdWVcIilcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5TdHJpbmdWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT0gXCJlbnVtLXZhbHVlXCIpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuU2VsZWN0VmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09IFwiZGF0ZXRpbWUtdmFsdWVcIilcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5EYXRlVGltZVZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PSBcImNvbG9yLXZhbHVlXCIpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuQ29sb3JWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHN1YkNvbXBvbmVudCBvZiBzdWJDb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzdWJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbcmVzdWx0LCBkYXNoYm9hcmRzXTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBGaXhDb250cm9sbGVyUmVmZXJlbmNlcyhjb21wb25lbnRzOklDb21wb25lbnRbXSl7XHJcbiAgICAgICAgZm9yKGxldCBjb21wb25lbnQgb2YgY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gY29tcG9uZW50IGFzIENvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyICYmIGNvbnRyb2xsZXIuY29tcG9uZW50VHlwZT09XCJjb250cm9sbGVyXCIpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZVJlZmVyZW5jZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlua1RvRGFzaGJvYXJkcyhjb21wb25lbnRzOklDb21wb25lbnRbXSwgZGFzaGJvYXJkczpEYXNoYm9hcmRbXSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsdGRcIiwgY29tcG9uZW50cywgZGFzaGJvYXJkcyk7XHJcbiAgICAgICAgZm9yKGxldCBjb21wb25lbnQgb2YgY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIGlmICghKGNvbXBvbmVudCBpbnN0YW5jZW9mIERhc2hib2FyZCkpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBsaW5rIG9mIGNvbXBvbmVudC5kYXNoYm9hcmRzKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGRhc2hib2FyZCBvZiBkYXNoYm9hcmRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLmFkZERhc2hib2FyZExpbmsobGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpU3BpbmVCYXNlIH0gZnJvbSBcIi4vc3BpbmUva2Vydmktc3BpbmViYXNlXCI7XHJcbmltcG9ydCB7IEtlcnZpV1NTcGluZSB9IGZyb20gXCIuL3NwaW5lL2tlcnZpLXdzXCI7XHJcbmltcG9ydCB7IEtlcnZpUk1RU3BpbmUgfSBmcm9tIFwiLi9zcGluZS9rZXJ2aS1ybXFcIjtcclxuaW1wb3J0IHsgIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbHMvSUNvbXBvbmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tICcuL21vZGVscy9mYWN0b3J5JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTWVzc2FnZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvZGFzaGJvYXJkLm1vZGVsJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSAnLi9tb2RlbHMvZGFzaGJvYXJkLm1vZGVsJ1xyXG5kZWNsYXJlIHZhciBrZXJ2aVNvY2tldEFkZHJlc3MgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHNvY2tldFByb3RvY29sIDogYW55O1xyXG5cclxuZXhwb3J0IGVudW0gQ29ubmVjdGlvblN0YXRlIHtkaXNjb25uZWN0ZWQsIGxvYWRpbmcsIGF1dGhlbnRpY2F0ZSwgY29ubmVjdGVkfTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtlcnZpQmFzZVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBzcGluZTogS2VydmlTcGluZUJhc2UgPSBudWxsO1xyXG4gIFxyXG4gIHByaXZhdGUgYXBwSW5mbz1udWxsO1xyXG4gIHByaXZhdGUgIHRleHRzOnt9ID0gbnVsbDtcclxuICBwcml2YXRlIGNvbXBvbmVudHMgOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIGNvbXBvbmVudHMkOiBCZWhhdmlvclN1YmplY3Q8SUNvbXBvbmVudFtdPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PElDb21wb25lbnRbXT4oW10pXHJcbiAgXHJcbiAgcHVibGljIGNvbm5lY3Rpb25TdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxDb25uZWN0aW9uU3RhdGU+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8Q29ubmVjdGlvblN0YXRlPihDb25uZWN0aW9uU3RhdGUuZGlzY29ubmVjdGVkKTtcclxuICBwdWJsaWMgIGFwcGxpY2F0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGFueT47XHJcbiAgcHVibGljIGRvQXV0aGVudGljYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNvbXBvbmVudHNDaGFuZ2VkJDogQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW4+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4oZmFsc2UpO1xyXG4gIHByaXZhdGUgbG9nTWVzc2FnZXM6RGFzaGJvYXJkTWVzc2FnZU1vZGVsW10gPSBbXTtcclxuICBwcml2YXRlIGxvZ01lc3NhZ2VzJDogQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPihbXSk7XHJcbiAgXHJcbiAgSVBDUmVhZHkkOiBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4gPSBuZXcgIEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPihmYWxzZSk7XHJcbiAgYXV0aGVudGljYXRpb25GYWlsZWQkOiBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4gPSBuZXcgIEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPihmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSBcclxuICB7IFxyXG4gICAgY29uc29sZS5sb2coXCJrZXJ2aSBzZXJ2aWNlIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgdmFyIHNlbGY9dGhpcztcclxuICAgIHRoaXMuYXBwbGljYXRpb24kPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgICB2YXIgczE9dGhpcy5JUENSZWFkeSQuc3Vic2NyaWJlKGZ1bmN0aW9uKGNvbm5lY3RlZCl7XHJcbiAgICAgICAgaWYgKGNvbm5lY3RlZCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImtlcnZpIHNlcnZpY2UgaXBjIHJlYWR5IChjb25uZWN0ZWQpXCIpXHJcbiAgICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcihcInZhbHVlQ2hhbmdlZFwiLFwiXCIsZnVuY3Rpb24oaWQsIHZhbHVlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHNlbGYuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pZD09dmFsdWUuaWQpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGR5bmFtaWNWYWx1ZSA9IGNvbXBvbmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWUudmFsdWVUUz1uZXcgRGF0ZSh0aGlzLnRpbWVzdGFtcCArIFwiIHV0Y1wiKTtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZS5zZXQodmFsdWUudmFsdWUsIGZhbHNlKTsgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VsZi5zcGluZS5hZGRFdmVudEhhbmRsZXIoXCJhY3Rpb25TdGFydGVkXCIsXCJcIixmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFzXCIsIGlkKTtcclxuICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBzZWxmLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmlkPT1pZCl7XHJcbiAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNvbXBvbmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLnJ1bm5pbmckLm5leHQodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcihcImFjdGlvbkRvbmVcIixcIlwiLGZ1bmN0aW9uKGlkKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRcIiwgaWQpO1xyXG4gICAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHNlbGYuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuaWQ9PWlkKXtcclxuICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gY29tcG9uZW50IGFzIGFueTtcclxuICAgICAgICAgICAgICBhY3Rpb24ucnVubmluZyQubmV4dChmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcihcInVzZXJMb2dNZXNzYWdlXCIsIG51bGwsIGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgdmFyIG1lc3NhZ2VzID0gc2VsZi5sb2dNZXNzYWdlcyQudmFsdWVcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJsbVwiLCB0aGlzKTtcclxuICAgICAgICAgIG1lc3NhZ2VzLnVuc2hpZnQobmV3IERhc2hib2FyZE1lc3NhZ2VNb2RlbCh0aGlzKSk7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZXMubGVuZ3RoPjEwKVxyXG4gICAgICAgICAgICAgIG1lc3NhZ2VzLnBvcCgpO1xyXG4gICAgICAgICAgc2VsZi5sb2dNZXNzYWdlcyQubmV4dChtZXNzYWdlcyk7ICAgXHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0ZXh0KGtleTpzdHJpbmcsIGRlZmF1bHRWYWx1ZTpzdHJpbmc9XCJcIik6c3RyaW5ne1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKFwidFwiLCBrZXksIHRoaXMudGV4dHMpO1xyXG4gICAgaWYgKHRoaXMudGV4dHMgJiYga2V5IGluIHRoaXMudGV4dHMpe1xyXG4gICAgICByZXR1cm4gdGhpcy50ZXh0c1trZXldO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICB9XHJcblxyXG5cclxuICAvLyBwdWJsaWMgZ2V0Q29tcG9uZW50cyQoKXtcclxuICAvLyAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIC8vIH1cclxuXHJcbiAgIHB1YmxpYyBnZXRMb2dNZXNzYWdlcyQoKTpPYnNlcnZhYmxlPERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPntcclxuICAgICByZXR1cm4gdGhpcy5sb2dNZXNzYWdlcyQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgIH1cclxuXHJcbiAgcHVibGljIGlzQXBwRW1wdHkoKXtcclxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMubGVuZ3RoID09IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcG9uZW50KGlkOnN0cmluZywgY29tcG9uZW50VHlwZTpzdHJpbmcgPSBudWxsKXtcclxuICAgIGZvciAodmFyIGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpe1xyXG4gICAgICBpZiAoY29tcG9uZW50LmlkID09IGlkICYmIChjb21wb25lbnRUeXBlPT1udWxsIHx8IGNvbXBvbmVudC5jb21wb25lbnRUeXBlID09IGNvbXBvbmVudFR5cGUpKVxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wb25lbnRzQnlUeXBlKHR5cGU6c3RyaW5nKXtcclxuICAgIHZhciByZXN1bHQgPSBbXVxyXG4gICAgZm9yICh2YXIgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cyl7XHJcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50VHlwZSA9PSB0eXBlKVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERlZmF1bHREYXNoYm9hcmQoKTpEYXNoYm9hcmR7XHJcbiAgICB2YXIgZGFzaGJvYXJkcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0J5VHlwZShcImRhc2hib2FyZFwiKSBhcyBEYXNoYm9hcmRbXSA7XHJcbiAgICBmb3IgKGxldCBkYXNoYm9hcmQgb2YgZGFzaGJvYXJkcykge1xyXG4gICAgICAgIGlmIChkYXNoYm9hcmQuaXNEZWZhdWx0KVxyXG4gICAgICAgICAgICByZXR1cm4gZGFzaGJvYXJkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuICBwdWJsaWMgY29ubmVjdCgpe1xyXG4gICAgdmFyIGFkZHJlc3MgPSBudWxsO1xyXG4gICAgdmFyIHByb3RvY29sID0gXCJ3c1wiXHJcbiAgICB0cnl7XHJcbiAgICAgIGlmIChrZXJ2aVNvY2tldEFkZHJlc3MpXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzID0ga2VydmlTb2NrZXRBZGRyZXNzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzb2NrZXRQcm90b2NvbClcclxuICAgICAge1xyXG4gICAgICAgIHByb3RvY29sID0gc29ja2V0UHJvdG9jb2w7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAvL2ZvciB0ZXN0aW5nIHdpdGggbmcgc2VydmVcclxuICAgICAgdmFyIGh0dHBQcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sO1xyXG4gICAgICBpZiAoaHR0cFByb3RvY29sID09IFwiaHR0cHNcIilcclxuICAgICAgICBwcm90b2NvbD1cIndzc1wiXHJcbiAgICAgIHZhciBodHRwSG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgICAgYWRkcmVzcyA9IGh0dHBIb3N0ICsgXCI6OTAwMFwiO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJrc1wiLCBhZGRyZXNzKTtcclxuICAgIFxyXG4gICAgdGhpcy5zcGluZSA9IG5ldyBLZXJ2aVdTU3BpbmUoe1xyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBwcm90b2NvbDogcHJvdG9jb2wsXHJcbiAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICAgIG9uQ2xvc2U6dGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbkF1dGhlbnRpY2F0ZTp0aGlzLm9uQXV0aGVudGljYXRlLFxyXG4gICAgICBvbkF1dGhlbnRpY2F0ZUZhaWxlZDp0aGlzLm9uQXV0aGVudGljYXRlRmFpbGVkLFxyXG4gICAgICBvbkxvZ09mZjogdGhpcy5vbkxvZ29mZixcclxuICAgICAgb25BdXRoZW50aWNhdGVTdGFydDogdGhpcy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LFxyXG4gICAgICB0YXJnZXRTY29wZTp0aGlzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0TVEoKXtcclxuICAgIFxyXG4gICAgLy9pZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJtcWNcIikpXHJcbiAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIm1xY1wiLCAne1wia2V5X2lkXCI6XCJjNWJkMDgyNGJkYTQ0ZmZlYWJhODAxMDM4M2YxYWY5NlwiLFwiYXBpX3Rva2VuXCI6XCI0Nzc2ZWM5ZDRiZGY0YjMxOTJmZmE2YTFmMzdkMTVhYTE0NWUyZTY2NWFlNjRlNDZhZmQ3NjZlZTg1MWFjMDQ2XCIsXCJhcGlfY2hhbm5lbFwiOlwiMjBiZGRmODhhNDQzNGU5OWJhMGUwMTRkZTJiODc1YzdcIixcImFwcF9pZFwiOlwiYXBwXzFcIn0nKTtcclxuICAgIGNvbnNvbGUubG9nKFwia3NcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIm1xY1wiKSk7XHJcbiAgICBcclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibXFjXCIpKXtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc3BpbmUgPSBuZXcgS2VydmlSTVFTcGluZSh7XHJcbiAgICAgICAgb25PcGVuOiB0aGlzLm9uT3BlbixcclxuICAgICAgICBvbkNsb3NlOnRoaXMub25DbG9zZSxcclxuICAgICAgICBvbkF1dGhlbnRpY2F0ZTp0aGlzLm9uQXV0aGVudGljYXRlLFxyXG4gICAgICAgIG9uQXV0aGVudGljYXRlRmFpbGVkOnRoaXMub25BdXRoZW50aWNhdGVGYWlsZWQsXHJcbiAgICAgICAgb25Mb2dPZmY6IHRoaXMub25Mb2dvZmYsXHJcbiAgICAgICAgb25BdXRoZW50aWNhdGVTdGFydDogdGhpcy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LFxyXG4gICAgICAgIHRhcmdldFNjb3BlOnRoaXMsXHJcbiAgICAgICAgYXBpVG9rZW46IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIm1xY1wiKSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInFtYyBub3QgZm91bmQgaW4gc3RvcmFnZVwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNBbm9ueW1vdXMoKXtcclxuICAgIHJldHVybiB0aGlzLnNwaW5lLm9wdGlvbnMudXNlck5hbWUgPT0gXCJhbm9ueW1vdXNcIiBcclxuICB9XHJcblxyXG4gIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpe1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbkZhaWxlZCQubmV4dChmYWxzZSk7XHJcbiAgICBcclxuICAgIHRoaXMuc3BpbmUuYXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCk7XHJcbiAgfVxyXG5cclxuICBsb2dvZmYoKXtcclxuICAgIHRoaXMuc3BpbmUubG9nb2ZmKClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25BdXRoZW50aWNhdGVTdGFydCgpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQXV0aGVudGljYXRlKCl7XHJcbiAgICB0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuICAgIHRoaXMuY29ubmVjdGlvblN0YXRlJC5uZXh0KENvbm5lY3Rpb25TdGF0ZS5hdXRoZW50aWNhdGUpO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkF1dGhlbnRpY2F0ZUZhaWxlZCgpe1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbkZhaWxlZCQubmV4dCh0cnVlKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxvZ29mZigpe1xyXG4gICAgY29uc29sZS5sb2coXCJvbHhyY1wiKTtcclxuICAgIHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuc3BpbmUuZmlyc3RPbk9wZW4pXHJcbiAgICAgIHRoaXMuSVBDUmVhZHkkLm5leHQodHJ1ZSk7XHJcbiAgICBcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKXtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgdGhpcy5jb21wb25lbnRzJC5uZXh0KHRoaXMuY29tcG9uZW50cyk7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUuZGlzY29ubmVjdGVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50SW5mbyhyZXRyeUNvdW50LCBtb2R1bGVfbG9hZCl7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnNwaW5lLnNlbmRRdWVyeShcIkdldEFwcGxpY2F0aW9uSW5mb1wiLGZ1bmN0aW9uKGFwcEluZm8pe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFwcGluZm9cIixhcHBJbmZvKTtcclxuICAgICAgdGhpcy5zcGluZS5zZW5kUXVlcnkoXCJnZXRDb21wb25lbnRJbmZvXCIsZnVuY3Rpb24obWVzc2FnZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgaW5mb1wiLG1lc3NhZ2UpO1xyXG4gICAgICAgIHNlbGYuYXBwbGljYXRpb24kLm5leHQoYXBwSW5mbyk7XHJcbiAgICAgICAgc2VsZi50ZXh0cyA9IGFwcEluZm8uZGlzcGxheS50ZXh0cztcclxuICAgICAgICBzZWxmLmNvbXBvbmVudHMgPSBDb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudHMobWVzc2FnZSwgc2VsZik7XHJcbiAgICAgICAgQ29tcG9uZW50RmFjdG9yeS5GaXhDb250cm9sbGVyUmVmZXJlbmNlcyhzZWxmLmdldENvbXBvbmVudHNCeVR5cGUoXCJjb250cm9sbGVyXCIpKTtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudHMkLm5leHQoc2VsZi5jb21wb25lbnRzKTtcclxuICAgICAgICBzZWxmLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUuY29ubmVjdGVkKTtcclxuICAgICAgICBpZiAobW9kdWxlX2xvYWQpXHJcbiAgICAgICAgICBzZWxmLmNvbXBvbmVudHNDaGFuZ2VkJC5uZXh0KHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnRzXCIsc2VsZi5jb21wb25lbnRzKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY29tcG9uZW50IGluZm8gdGltZW91dFwiKTtcclxuICAgICAgICBpZiAocmV0cnlDb3VudD4wKVxyXG4gICAgICAgICAgc2VsZi5nZXRDb21wb25lbnRJbmZvKHJldHJ5Q291bnQtMSwgbW9kdWxlX2xvYWQpXHJcbiAgICAgIH0pOyAgXHJcblx0ICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25PcGVuKGZpcnN0KXtcclxuICAgIGNvbnNvbGUubG9nKFwia2VydmljZSBzZXJ2aWNlIG9uIG9wZW5cIiwgdGhpcy5zcGluZS5maXJzdE9uT3BlbiwgZmlyc3QsdGhpcyk7XHJcbiAgICB2YXIgc2VsZj10aGlzO1xyXG4gICAgdGhpcy5jb25uZWN0aW9uU3RhdGUkLm5leHQoQ29ubmVjdGlvblN0YXRlLmxvYWRpbmcpO1xyXG4gICAgdGhpcy5kb0F1dGhlbnRpY2F0ZSA9IHRoaXMuc3BpbmUuZG9BdXRoZW50aWNhdGU7XHJcbiAgICB0aGlzLmdldENvbXBvbmVudEluZm8oMiwgZmFsc2UpXHJcbiAgICBpZiAoc2VsZi5zcGluZS5maXJzdE9uT3Blbil7XHJcbiAgICAgIHRoaXMuSVBDUmVhZHkkLm5leHQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKFwibW9kdWxlU3RhcnRlZFwiLFwiXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kdWxlIGxvYWRlZFwiLHNlbGYuY29tcG9uZW50cyk7IFxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudEluZm8oMiwgdHJ1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICwgMjAwMCk7IFxyXG4gICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgdGhpcy5zcGluZS5hZGRFdmVudEhhbmRsZXIoXCJtb2R1bGVTdG9wcGVkXCIsXCJcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJtb2R1bGUgdW5sb2FkZWRcIik7IFxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb2R1bGUgdW5sb2FkZWQsIHJlZnJlc2hcIik7XHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50SW5mbygyLCB0cnVlKTtcclxuICAgICAgICB9LCA1MDAwKTsgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsb3NlKCl7XHJcbiAgICB0aGlzLnJlc2V0KClcclxuICAgIGNvbnNvbGUubG9nKFwia3Mgb24gY2xvc2VcIik7XHJcbiAgICB0aGlzLklQQ1JlYWR5JC5uZXh0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25IZWFydGJlYXQoKXtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29ubmVjdCgpe1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1rZXJ2aS1qcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBrZXJ2aS1qcyB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpSnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpSnNDb21wb25lbnQgfSBmcm9tICcuL2tlcnZpLWpzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0tlcnZpSnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtLZXJ2aUpzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlKc01vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIktlcnZpVmFsdWVzLkJvb2xlYW5WYWx1ZSIsIktlcnZpVmFsdWVzLk51bWJlclZhbHVlIiwiS2VydmlWYWx1ZXMuU3RyaW5nVmFsdWUiLCJLZXJ2aVZhbHVlcy5TZWxlY3RWYWx1ZSIsIktlcnZpVmFs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

/***/ }),

/***/ "../../dist/ngx-kervi-components/fesm5/ngx-kervi-components.js":
/*!****************************************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/ngx-kervi-components/fesm5/ngx-kervi-components.js ***!
  \****************************************************************************************************************/
/*! exports provided: NgxKerviComponentsService, NgxKerviComponentsModule, ɵw, ɵu, ɵt, ɵv, ɵo, ɵm, ɵr, ɵq, ɵl, ɵk, ɵp, ɵj, ɵi, ɵn, ɵh, ɵc, ɵg, ɵf, ɵd, ɵb, ɵe, ɵa, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxKerviComponentsService", function() { return NgxKerviComponentsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxKerviComponentsModule", function() { return NgxKerviComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return CamViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return ControllerPadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return DashboardPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return ColorComponent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return DateTimeComponent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return GaugeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return IconsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return MPEGViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return SparklineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SwitchButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return UIComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ColorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DateTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return KerviValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return StringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ValuesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return WidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var kervi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kervi-js */ "../../dist/kervi-js/fesm5/kervi-js.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gauge */ "../../node_modules/ngx-gauge/fesm5/ngx-gauge.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxKerviComponentsService = /** @class */ (function () {
    function NgxKerviComponentsService() {
    }
    NgxKerviComponentsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxKerviComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxKerviComponentsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxKerviComponentsService_Factory() { return new NgxKerviComponentsService(); }, token: NgxKerviComponentsService, providedIn: "root" });
    return NgxKerviComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WidgetComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WidgetComponent, _super);
    function WidgetComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    WidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitWidget();
    };
    WidgetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-widget',
                    template: "<ng-container *ngIf=\"widgetType=='value'\">\n    <div *ngIf=\"!inline\" class=\"block-component\"> \n        <div class=\"label-section\">\n            <div style=\"display:inline-block;float:left;\">\n                <div class=\"value-label\">\n                    <span   *ngIf=\"linkParameters.labelIcon\" class=\"fa fa-{{linkParameters.labelIcon}}\"></span>\n                    <span   *ngIf=\"linkParameters.label\">{{linkParameters.label}}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"value-section\">\n            <kervi-value *ngIf=\"component.componentType=='KerviValue'\" [value]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-value>\n            <kervi-action  *ngIf=\"component.componentType=='action'\" [action]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-action>\n        </div>\n    </div>\n\n    <div *ngIf=\"inline\" class=\"inline-component\"> \n        <div style=\"display:inline-block\">\n            <span style=\"display:inline\"  *ngIf=\"linkParameters.labelIcon\" class=\"fa fa-{{linkParameters.labelIcon}}\"></span>\n            <span style=\"display:inline\"  *ngIf=\"linkParameters.label\"  >{{linkParameters.label}}</span>\n            <kervi-value *ngIf=\"component.componentType=='KerviValue'\" [value]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-value>\n            <kervi-action  *ngIf=\"component.componentType=='action'\" [action]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-action>\n        </div>\n    </div>\n</ng-container>    \n<ng-container *ngIf=\"widgetType=='camera'\" class=\"block-component\" >\n    <kervi-cam-viewer [isBackground]=\"false\" [camera]=\"component\" [linkParameters]=\"linkParameters\"></kervi-cam-viewer>\n</ng-container>\n    \n    \n<ng-container *ngIf=\"widgetType=='gauge'\" class=\"block-component\" >\n    <kervi-gauge [dashboardSizes]=\"dashboardSizes\" [value]=\"component\" [linkParameters]=\"linkParameters\"></kervi-gauge>\n</ng-container>\n\n<ng-container *ngIf=\"widgetType=='chart'\" class=\"\" >\n    <kervi-chart [dashboardSizes]=\"dashboardSizes\" [value]=\"component\" [linkParameters]=\"linkParameters\" ></kervi-chart>\n</ng-container>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    WidgetComponent.ctorParameters = function () { return []; };
    return WidgetComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviWidgetComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ControllerPadComponent = /** @class */ (function () {
    function ControllerPadComponent(elementRef) {
        this.elementRef = elementRef;
        this.padSize = 180;
        this.moveDelayTimer = null;
        this.inDrag = false;
    }
    /**
     * @return {?}
     */
    ControllerPadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (this.XValue) {
            jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(this.XValue.value$.value).change();
            this.XValue.value$.subscribe(function (v) {
                console.log("pad-x", self.YValue.name, v);
                jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(v).change();
            });
        }
        if (this.YValue) {
            jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(this.YValue.value$.value).change();
            this.YValue.value$.subscribe(function (v) {
                console.log("pad-y", self.YValue.name, v);
                jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(v).change();
            });
        }
        /** @type {?} */
        var color = "rgba(255,255,255,.5)";
        /** @type {?} */
        var p = jQuery('fieldset', self.elementRef.nativeElement).xy({
            displayPrevious: false,
            min: -100,
            max: 100,
            width: self.padSize,
            height: self.padSize,
            fgColor: color,
            bgColor: color,
            change: function (value) {
                if (self.moveDelayTimer) {
                    clearTimeout(self.moveDelayTimer);
                }
                self.moveDelayTimer = setTimeout(function () {
                    if (self.XValue)
                        self.XValue.set(value[0]);
                    if (self.YValue)
                        self.YValue.set(value[1]);
                }, 0);
            }
        })
            .css({ 'border': '2px solid ' + color });
    };
    /**
     * @return {?}
     */
    ControllerPadComponent.prototype.padPress = /**
     * @return {?}
     */
    function () {
        this.inDrag = true;
    };
    /**
     * @return {?}
     */
    ControllerPadComponent.prototype.padRelease = /**
     * @return {?}
     */
    function () {
        console.log("pr", this.inDrag, this.autoCenter);
        this.inDrag = false;
        if (this.autoCenter && this.XValue) {
            console.log("x-auto center");
            jQuery("input[name='pad-x']", this.elementRef.nativeElement).val(0).change();
            this.XValue.set(0);
        }
        if (this.autoCenter && this.YValue) {
            console.log("y-auto center");
            jQuery("input[name='pad-y']", this.elementRef.nativeElement).val(0).change();
            this.YValue.set(0);
        }
    };
    ControllerPadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-controller-pad',
                    template: "<div (mousedown)=\"padPress()\" (mouseup)=\"padRelease()\">\n  <fieldset id=\"leftPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\" >\n    <legend></legend>\n    <input type=\"hidden\" name=\"pad-x\" value=\"0\"><input type=\"hidden\"  name=\"pad-y\" value=\"0\">\n  </fieldset>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ControllerPadComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ControllerPadComponent.propDecorators = {
        XValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        YValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ControllerPadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CamViewerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CamViewerComponent, _super);
    function CamViewerComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.showCamPad = false;
        _this.padSize = 180;
        return _this;
    }
    /**
     * @return {?}
     */
    CamViewerComponent.prototype.imageLoaded = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var h = this.videoViewer.nativeElement.offsetHeight;
        /** @type {?} */
        var w = this.elementRef.nativeElement.offsetWidth;
        //this.camPadTop = h / 2 - this.padSize/2;
        //this.camPadLeft = w / 2 - this.padSize/2;
    };
    /**
     * @return {?}
     */
    CamViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var element = self.videoViewer.nativeElement;
        /** @type {?} */
        var viewPortHeight = window.innerHeight;
        /** @type {?} */
        var viewPortWidth = window.innerWidth;
        this.camHeight = viewPortHeight - 65;
        this.camWidth = viewPortWidth;
        console.log("avic", this.camHeight, this.camWidth);
        setTimeout(function () {
            /** @type {?} */
            var h = element.offsetHeight;
            /** @type {?} */
            var w = element.offsetWidth;
            if (w < self.padSize) {
                self.padSize = w - 10;
                //jQuery(".camPad", self.elementRef.nativeElement).css({ width: self.padSize, height:  self.padSize });
            }
            console.log("cami", h, w, self.padSize, element);
            self.camPadTop = h / 2 - (self.padSize / 2);
            self.camPadLeft = w / 2 - (self.padSize / 2);
            self.showCamPad = true;
        }, 0);
        // jQuery(window).bind('resize', function () {
        //     var h = element.offsetHeight;
        //     var w = element.offsetWidth;
        //     self.camPadTop = h / 2 - (self.padSize/2)
        //     self.camPadLeft =  w / 2 - (self.padSize / 2);
        // })
    };
    /**
     * @return {?}
     */
    CamViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitCamera();
    };
    CamViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-cam-viewer',
                    template: "<ng-container *ngIf=\"isBackground\">\n\t<div #videoViewer id=\"video-viewer\" class=\"video video-background\" style=\"text-align:center;position:fixed;top:60px;left:0px;height:100%;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\">\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;\">\n\t\t\t<kervi-mpeg-viewer (imageLoaded)=\"imageLoaded()\" [height]=100   [cameraSource]=\"cameraSource\" > </kervi-mpeg-viewer>\n\t\t</span>\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\"></canvas>\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<div class=\"cam-pad-area\" *ngIf=\"showCamPad\" [style.left.px]=\"camPadLeft\" [style.top.px]=\"camPadTop\" style=\"position:absolute;z-index: 2000\">\n      <kervi-controller-pad [XValue]=\"pan\" [YValue]=\"tilt\"> </kervi-controller-pad>\n\t\t</div>\n\t\t<div style=\"position:absolute;top:30px;left:0px;width:100%;height:50px\">\n\t\t\t<ng-container  *ngFor=\"let action of camera.actions\">\n\t\t\t\t<kervi-action title=\"{{( action.name | translate)}}\" *ngIf=\"action.visible\" [action]=\"action\" ></kervi-action>\n\t\t\t</ng-container>\n\t\t\t<!-- <button class=\"btn btn-primary \"   (mousedown)=\"imageViewer.show()\" title=\"{{( 'media_folder' | translate)}}\">\n\t\t\t\t<i  class='fa fa-folder'></i>\n\t\t\t</button> -->\n\t\t</div>\n\t</div>\n</ng-container>\n\n<ng-container *ngIf=\"!isBackground\">\n\t<div #videoViewer id=\"video-viewer\" class=\"video\" style=\"overflow:hidden;position:relative;width:100%\">\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;height:100%;width:100%\">\n\t\t\t<kervi-mpeg-viewer (imageLoaded)=\"imageLoaded()\" [width]=100  [cameraSource]=\"cameraSource\" > </kervi-mpeg-viewer>\n\t\t</span>\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<div class=\"cam-pad-area\" *ngIf=\"showCamPad\" [style.left.px]=\"camPadLeft\" [style.top.px]=\"camPadTop\" style=\"position:absolute\">\n      <kervi-controller-pad [XValue]=\"pan\" [YValue]=\"tilt\"> </kervi-controller-pad>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<ng-container  *ngFor=\"let action of camera.actions\">\n\t\t\t<kervi-action *ngIf=\"action.visible\" title=\"{{( action.name | translate)}}\" [action]=\"action\" ></kervi-action>\n\t\t</ng-container>\n\t\t<!-- <button class=\"btn btn-primary\" (mousedown)=\"imageViewer.show()\" title=\"{{( 'media_folder' | translate)}}\">\n\t\t\t<i  class='fa fa-folder'></i>\n\t\t</button> -->\n\t</div>\n</ng-container>\n<!-- <kervi-image-viewer #imageViewer [camComponent]=\"this\" [cameraSource]=\"cameraSource\"></kervi-image-viewer> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CamViewerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    CamViewerComponent.propDecorators = {
        videoViewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["videoViewer",] }]
    };
    return CamViewerComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviCameraComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DashboardPanelComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DashboardPanelComponent, _super);
    function DashboardPanelComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    DashboardPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitPanel();
    };
    DashboardPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-dashboard-panel',
                    template: "<!-- <p>{{panel.name}} - {{panel.type}} - {{bodyOnly}} - {{inline}} - {{panel.subPanels.length}} - {{panel.components.length}} - {{headerComponents.length}} - {{bodyComponents.length}}</p> -->\n<ng-container *ngIf=\"!bodyOnly && panel.type=='group'\">\n    <div class=\"card-deck\">\n        <ng-container *ngFor=\"let subPanel of panel.subPanels\">\n            <ng-container *ngIf=\"subPanel.type!='group'\">\n                <div class=\"card-panel\" [style.width]=\"calcWidth(subPanel, false)\">\n                    <div class=\"card\" [ngClass]=\"{'has-card-header': showPanelHeader(subPanel)}\">\n                        <kervi-dashboard-panel [bodyOnly]=\"true\" [inGroup]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"subPanel\"></kervi-dashboard-panel>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"subPanel.type=='group'\">\n                <div class=\"card-deck-panel\" [style.width]=\"calcWidth(subPanel, inGroup)\">\n                    <kervi-dashboard-panel  [inGroup]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"subPanel\"></kervi-dashboard-panel>\n                </div>\n            </ng-container>\n        </ng-container>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"!bodyOnly && !inline && panel.type!='group'\">\n    <div class=\"card-panel card-non-group\" [style.width]=\"calcWidth(panel, false)\">\n        <div class=\"card\" [ngClass]=\"{'has-card-header': showPanelHeader(panel)}\">\n            <kervi-dashboard-panel [bodyOnly]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"panel\"></kervi-dashboard-panel>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"bodyOnly\">\n    <div class=\"card-header\" *ngIf=\"showHeader\" >\n        <h4 class=\"text-left\">\n          {{title}}\n            <!-- <a data-toggle=\"collapse\" role=\"tab\" href=\"#panel-{{panel.id}}\" [attr.aria-expanded]=\"expanded\" aria-control=\"\" style=\"float:left\"> <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> </a> -->\n            <div class=\"card-body\" *ngIf=\"headerComponents.length>0\" style=\"padding:0\">\n                <ng-container *ngFor=\"let panelComponent of headerComponents\">\n                    <kervi-widget [component]=\"panelComponent.component\" [dashboardPanel]=\"panel\" [inline]=\"inline\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n                </ng-container>\n            </div>\n        </h4>\n    </div>\n    <div class=\"card-body\" *ngIf=\"bodyComponents.length>0\" >\n        <ng-container *ngFor=\"let panelComponent of bodyComponents\">\n            <kervi-widget [component]=\"panelComponent.component\" [dashboardPanel]=\"panel\"  [inline]=\"inline\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n        </ng-container>\n    </div>\n  \n    <div class=\"card-body\" *ngIf=\"panel.parameters.userLog\"  >\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>&nbsp;</th>\n                    <th>{{( 'time' | translate)}}</th>\n                    <th>{{( 'source' | translate)}}</th>\n                    <th style=\"width:100%\">{{( 'source' | translate)}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let message of messages$ | async\">\n                    <td>\n                        <span *ngIf=\"message.level<=3\" class=\"alert\" [ngClass]=\"{'text-danger': message.level==1, 'text-warning': message.level==2, 'text-normal': message.level==3}\" >&#11044;</span>\n                    </td>\n                    <td>{{message.timestamp | date: 'HH:mm:ss'}}</td>\n                    <td>{{message.sourceName}}</td>\n                    <td style=\"white-space:nowrap; overflow:hidden;text-overflow:ellipsis; max-width: 0;\" title=\"{{message.topic}}\">{{message.topic}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>    \n</ng-container>\n\n<ng-template [ngIf]=\"!bodyOnly && inline && panel.components.length>0\" style=\"display:inline-block\">\n    <ng-container *ngFor=\"let panelComponent of panel.components\" style=\"display:inline-block\">\n        <kervi-widget [component]=\"panelComponent.component\"  [inline]=\"inline\" [dashboardPanel]=\"panel\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n    </ng-container>\n</ng-template>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DashboardPanelComponent.ctorParameters = function () { return []; };
    return DashboardPanelComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDashboardPanelComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(NumberComponent, _super);
    function NumberComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    NumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitNumber();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NumberComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var v = jQuery("input", this.elementRef.nativeElement).val();
        console.log("evv", v, event);
        this.value.set(v);
    };
    NumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-number',
                    template: "<ng-container *ngIf=\"!inline\">\n    <div class=\"value-input\" *ngIf=\"linkParameters.isInput\">\n        <input *ngIf=\"linkParameters.isInput\" class=\"form-control text-right pull-right\" (keyup)=\"onChange($event)\" value=\"{{(value.value$ | async)}}\"/>\n        <!-- <ui-slider [value]=\"(value.value$ | async)\" (sliderChanged)=\"setKerviValue($event)\" [minValue]=\"value.minValue\" [maxValue]=\"value.maxValue\" [linkParameters]=\"linkParameters\"></ui-slider> -->\n    </div>\n    <div class=\"value-value\" *ngIf=\"!linkParameters.isInput\" [style.min-width.rem]=\"linkParameters.valueSize\">\n        <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\n\t\t<value-sparkline *ngIf=\"linkParameters.showSparkline && !linkParameters.isInput\" [value]=\"value\"></value-sparkline>\n        {{(value.value$ | async | number:numberFormat)}}\n        <span *ngIf=\"linkParameters.displayUnit\">{{value.unit}}</span>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"inline\"> \n    <ui-slider *ngIf=\"linkParameters.isInput\" (sliderChanged)=\"setKerviValue($event)\" [value]=\"(value.value$ | async)\" [minValue]=\"value.minValue\" [maxValue]=\"value.maxValue\" [linkParameters]=\"linkParameters\"></ui-slider>\n    <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\n    <span style=\"display:inline\"  [style.max-width.%]=\"linkParameters.valueSize\"    class=\"slider-value\">{{(value.value$ | async | number:numberFormat)}}</span>\n    <span *ngIf=\"linkParameters.displayUnit\">{{value.unit}}</span>\n</ng-container>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return NumberComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviNumberComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BooleanComponent, _super);
    function BooleanComponent() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BooleanComponent.prototype.changeState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.value.set(event);
    };
    /**
     * @return {?}
     */
    BooleanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitBoolean();
    };
    BooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-boolean',
                    template: "<kervi-switchbutton class=\"pull-right\" (buttonState)=\"changeState($event)\" [dashboardSizes]=\"dashboardSizes\" [inline]=\"inline\" [value]=\"(value.value$ | async)\" [linkParameters]=\"linkParameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\n<kervi-button (buttonState)=\"changeState($event)\" [dashboardSizes]=\"dashboardSizes\" [value]=\"(value.value$ | async)\" [inline]=\"inline\" [linkParameters]=\"linkParameters\" *ngIf=\"displayType=='button'\"></kervi-button>\n\n\n\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BooleanComponent.ctorParameters = function () { return []; };
    return BooleanComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviBooleanComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StringComponent, _super);
    function StringComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    StringComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.ngOnInitString();
        this.value.value$.subscribe(function (v) {
            jQuery("input", self.elementRef.nativeElement).val(v).change();
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StringComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var v = jQuery("input", this.elementRef.nativeElement).val();
        console.log("evv", v, event);
        this.value.set(v);
    };
    StringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-string',
                    template: "<input *ngIf=\"linkParameters.isInput\" class=\"form-control pull-right\" (keyup)=\"onChange($event)\" value=\"{{(value.value$ | async)}}\"/>\n<span *ngIf=\"!linkParameters.isInput\" class=\"form-control pull-right\"   >{{(value.value$ | async)}}</span>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    StringComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return StringComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviStringComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateTimeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DateTimeComponent, _super);
    function DateTimeComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitDateTime();
    };
    DateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-datetime',
                    template: "<kervi-datetime [type]=\"displayType\" [format]=\"dateTimeFormat\" (dateTimeChanged)=\"setKerviValue($event)\" [dateTime]=\"(value.value$ | async)\"></kervi-datetime>\n    ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DateTimeComponent.ctorParameters = function () { return []; };
    return DateTimeComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDateTimeComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ColorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ColorComponent, _super);
    function ColorComponent() {
        var _this = _super.call(this) || this;
        //console.log("cnio",this);
        return _this;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ColorComponent.prototype.setValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        console.log(v);
    };
    /**
     * @return {?}
     */
    ColorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitColor();
    };
    ColorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-color',
                    template: "<kervi-color [color]=\"(value.value$ | async)\" (colorChange)=\"setKerviValue($event)\" [linkParameters]=\"linkParameters\" ></kervi-color>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return []; };
    return ColorComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviColorComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SparklineComponent = /** @class */ (function () {
    function SparklineComponent(elementRef, templateService) {
        this.elementRef = elementRef;
        this.templateService = templateService;
    }
    /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    SparklineComponent.prototype.color = /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    SparklineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var lineColor = self.color("color", ".sparkline-template");
        /** @type {?} */
        var spotColor = self.color("color", ".sparkline-template .spot");
        /** @type {?} */
        var fillColor = self.color("background-color", ".sparkline-template");
        /** @type {?} */
        var height = self.color("height", ".sparkline-template");
        /** @type {?} */
        var width = self.color("width", ".sparkline-template");
        //console.log("sl", width, height);
        this.value.sparkline$.subscribe(function (v) {
            jQuery(self.elementRef.nativeElement).sparkline(v, {
                type: 'line',
                lineColor: lineColor,
                spotColor: spotColor,
                fillColor: fillColor,
                height: height,
                width: width
            });
        });
    };
    SparklineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'value-sparkline',
                    template: "",
                    styles: [""],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    SparklineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    SparklineComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return SparklineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SliderComponent = /** @class */ (function () {
    function SliderComponent(elementRef, templateService) {
        //console.log("cnio",this);
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.sliderValue = 0;
        this.isReady = false;
        this.ignoreChange = false;
        this.type = "horizontal_slider";
        this.defaultSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.sliderChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveDelayTimer = null;
        this.inSlide = false;
    }
    Object.defineProperty(SliderComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != this.sliderValue) {
                this.sliderValue = value;
                if (this.isReady) {
                    this.ignoreChange = true;
                    jQuery("input", this.elementRef.nativeElement).bootstrapSlider('setValue', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    SliderComponent.prototype.color = /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var color = this.color("color", ".number-gauge-template");
        setTimeout(function () {
            jQuery('input', self.elementRef.nativeElement).bootstrapSlider({
                tooltip: "hide",
                min: self.minValue,
                max: self.maxValue,
                step: self.tick,
                orientation: self.type == "horizontal_slider" ? "horizontal" : "vertical"
            });
            jQuery('.slider', self.elementRef.nativeElement).on("change", function (e, x) {
                console.log("slsv", e, x);
                if (e.value.newValue && !self.ignoreChange)
                    self.sliderChanged.emit(e.value.newValue);
                self.ignoreChange = false;
            });
            jQuery('.slider', self.elementRef.nativeElement).on("slideStart", function (e) {
                self.inSlide = true;
            });
            jQuery('.slider', self.elementRef.nativeElement).on("slideStop", function (e) {
                self.inSlide = false;
            });
            self.isReady = true;
        }, 0);
    };
    /**
     * @param {?} v
     * @return {?}
     */
    SliderComponent.prototype.step = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.sliderChanged.emit(this.sliderValue + v);
    };
    SliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ui-slider',
                    template: "<div style=\"background:rgba(0,0,0,.1); border-radius: 8px;padding-left:8px;padding-right:8px;display:flex\">\n    <input class=\"form-control\" />\n    <div style=\"display: inline-block;white-space: nowrap\">\n        <kervi-icon class=\"slider-button\" style=\"margin-left:14px;\" (mousedown)=\"step(-1)\" icon=\"caret-down\"></kervi-icon>\n        <kervi-icon class=\"slider-button\" style=\"\" (mousedown)=\"step(1)\" icon=\"caret-up\" style=\"margin-left:4px;\"></kervi-icon>\n    </div>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    SliderComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        defaultSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sliderChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GaugeComponent = /** @class */ (function () {
    function GaugeComponent(elementRef, templateService) {
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.type = "radial_gauge";
        this.unitSize = 110;
        this.numberFormat = "1.2-2";
        this.canvasId = "";
        this.dataHighlights = {};
        this.gauge = null;
        this.gaugeTypes = ['radial_gauge', 'vertical_linear_gauge', 'horizontal_linear_gauge', 'compass'];
    }
    /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    GaugeComponent.prototype.color = /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    GaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.numberFormat = this.linkParameters.minIntegerDigits + "." + this.linkParameters.minFractionDigits + "-" + this.linkParameters.maxFractionDigits;
        this.canvasId = this.templateService.makeId();
        /** @type {?} */
        var warningColor = this.color("color", ".sensor-template .sensor-warning");
        /** @type {?} */
        var fatalColor = this.color("color", ".sensor-template .sensor-fatal");
        /** @type {?} */
        var normalColor = this.color("color", ".sensor-template .sensor-major-ticks");
        /** @type {?} */
        var fromLimit = self.value.minValue;
        this.dataHighlights[self.value.minValue] = { color: normalColor };
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(self.value.ranges), _b = _a.next(); !_b.done; _b = _a.next()) {
                var range = _b.value;
                if (range.type == kervi_js__WEBPACK_IMPORTED_MODULE_3__["ValueRangeType"].error)
                    this.dataHighlights[range.start] = { color: fatalColor };
                else if (range.type == kervi_js__WEBPACK_IMPORTED_MODULE_3__["ValueRangeType"].warning)
                    this.dataHighlights[range.start] = { color: warningColor };
                else
                    this.dataHighlights[range.start] = { color: normalColor };
                this.dataHighlights[range.end] = { color: normalColor };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log("dr", self.value.ranges, this.dataHighlights);
        /** @type {?} */
        var nspan = (self.value.maxValue - self.value.minValue);
        /** @type {?} */
        var tickSpan = nspan / 10;
        /** @type {?} */
        var ticks = [];
        for (var n = self.value.minValue; (n <= self.value.maxValue); n += tickSpan)
            ticks.push(n);
        /** @type {?} */
        var settings = {
            renderTo: self.canvasId,
            value: self.value.value$.value,
            units: self.value.unit,
            title: self.linkParameters.label,
            minValue: self.value.minValue,
            maxValue: self.value.maxValue,
            highlights: this.dataHighlights,
            majorTicks: ticks,
            colorPlate: this.color("background-color", ".sensor-template"),
            borders: false,
            //colorBorderOuter:"",
            //colorBorderMiddle:"",
            //colorBorderInner:"",
            colorMajorTicks: this.color("color", ".sensor-template .sensor-major-ticks"),
            colorMinorTicks: this.color("color", ".sensor-template .sensor-minor-ticks"),
            colorTitle: this.color("color", ".sensor-template .sensor-title"),
            colorUnits: this.color("color", ".sensor-template .sensor-units"),
            colorNumbers: this.color("color", ".sensor-template .sensor-numbers"),
            colorNeedleStart: this.color("color", ".sensor-template .sensor-needle-start"),
            colorNeedleEnd: this.color("color", ".sensor-template .sensor-needle-end"),
            valueBox: false,
            animationRule: "bounce",
            animationDuration: "500",
            fontValue: "Led",
            animatedValue: "true"
        };
        var e_1, _c;
    };
    GaugeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-gauge',
                    template: "<ngx-gauge class=\"gauge-width\"\n    [value]=\"(value.value$ | async | number:numberFormat)\" \n    [min] = \"value.minValue\"\n    [max] = \"value.maxValue\"\n    [thresholds] = \"dataHighlights\"\n    [thick] = \"12\"\n    [cap] = \"'round'\"\n    [duration] = \"1\"\n    \n>\n<ngx-gauge-prepend>\n    <!-- custom prepend text or HTML goes here -->\n</ngx-gauge-prepend>\n<ngx-gauge-value>\n    {{value.value$ | async | number:numberFormat}}\n    <div class=\"gauge-unit\">{{value.unit}}</div>\n</ngx-gauge-value>\n<ngx-gauge-append>\n    \n</ngx-gauge-append>\n<ngx-gauge-label>\n    \n    <div>{{value.name}}</div>\n</ngx-gauge-label>\n</ngx-gauge>",
                    styles: [""],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    GaugeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    GaugeComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GaugeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChartComponent = /** @class */ (function () {
    function ChartComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.unitSize = 150;
        this.canvasId = "";
        this.chart = null;
        this.chartData = [];
        this.selectedPeriodText = "Hour";
        this.selectedPeriod = "hour";
        this.periodStart = null;
        this.periodEnd = null;
        this.updateChart = true;
    }
    /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    ChartComponent.prototype.color = /**
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.setSelectedPeriodText(self.linkParameters.chartInterval);
        this.canvasId = this.templateService.makeId();
        this.value.value$.subscribe(function (v) {
            if (self.chart) {
                try {
                    if (self.updateChart) {
                        /** @type {?} */
                        var ds = self.chart.data.datasets[0].data;
                        self.periodEnd = self.value.valueTS;
                        ds.push({ x: self.value.valueTS, y: v });
                        self.cleanData();
                        self.chart.render();
                        self.chart.update();
                    }
                }
                catch (ex) {
                    console.log("cdx", ex);
                }
            }
        });
        setTimeout(function () {
            console.log("cd", self.chartData);
            /** @type {?} */
            var ctx = jQuery("#" + self.canvasId);
            self.chart = new Chart(ctx, {
                type: 'line',
                responsive: true,
                maintainAspectRatio: false,
                data: {
                    datasets: [
                        {
                            data: self.chartData,
                            fill: self.linkParameters.chartFill,
                            //lineTension: 0.5,
                            //borderColor: self.color("border-color",".sensor-chart"),
                            pointBorderWidth: 1,
                            pointRadius: self.linkParameters.chartPoint,
                            //backgroundColor: "rgba(75,192,192,0.1)",
                            borderColor: "rgba(0,0,0,0.1)",
                            borderWidth: 3
                        },
                    ]
                },
                options: {
                    responsive: true,
                    //maintainAspectRatio: true,
                    pan: {
                        enabled: false,
                        mode: 'xy'
                    },
                    zoom: {
                        enabled: false,
                        mode: 'xy'
                    },
                    title: {
                        display: false,
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [{
                                gridLines: {},
                                type: "time",
                                unit: 'second',
                                unitStepSize: 120,
                                time: {
                                    displayFormats: {
                                        'millisecond': 'MMM DD',
                                        'second': 'HH:mm:ss',
                                        'minute': 'HH:mm:ss',
                                        'hour': 'HH:mm:ss',
                                        'day': 'MMM DD',
                                        'week': 'MMM DD',
                                        'month': 'MMM DD',
                                        'quarter': 'MMM DD',
                                        'year': 'MMM DD',
                                    }
                                },
                                ticks: {
                                    display: true,
                                    stepSize: 120,
                                },
                                display: self.linkParameters.chartGrid,
                                scaleLabel: {
                                    display: true,
                                }
                            }],
                        yAxes: [{
                                ticks: {},
                                gridLines: {
                                    //color:"rgba(255,255,255,0.5)",
                                    zeroLineColor: "rgba(255,255,255,0.5)"
                                },
                                display: self.linkParameters.chartGrid,
                                scaleLabel: {
                                    display: true,
                                }
                            }]
                    }
                }
            });
            setTimeout(function () {
                self.selectPeriod(self.linkParameters.chartInterval);
            }, 0);
        }, 0);
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.goLive = /**
     * @return {?}
     */
    function () {
        this.selectPeriod(this.selectedPeriod);
    };
    /**
     * @param {?} movement
     * @return {?}
     */
    ChartComponent.prototype.movePeriod = /**
     * @param {?} movement
     * @return {?}
     */
    function (movement) {
        this.updateChart = false;
        /** @type {?} */
        var periodStart = this.periodStart;
        /** @type {?} */
        var periodEnd = this.periodEnd;
        if (this.selectedPeriod == "5min") {
            periodEnd.setMinutes(periodEnd.getMinutes() + 5 * movement);
            periodStart.setMinutes(periodEnd.getMinutes() - 5);
        }
        if (this.selectedPeriod == "15min") {
            periodEnd.setMinutes(periodEnd.getMinutes() + 15 * movement);
            periodStart.setMinutes(periodEnd.getMinutes() - 15);
        }
        if (this.selectedPeriod == "30min") {
            periodEnd.setMinutes(periodEnd.getMinutes() + 30 * movement);
            periodStart.setMinutes(periodEnd.getMinutes() - 30);
        }
        if (this.selectedPeriod == "hour") {
            periodEnd.setHours(periodEnd.getHours() + movement);
            periodStart.setHours(periodEnd.getHours() - 1);
        }
        if (this.selectedPeriod == "day") {
            periodEnd.setHours(this.periodEnd.getDay() + 24 * movement);
            periodStart.setHours(this.periodEnd.getDay() - 24);
        }
        if (this.selectedPeriod == "week") {
            periodEnd.setHours(this.periodEnd.getDay() + 7 * 24 * movement);
            periodStart.setHours(this.periodEnd.getDay() + 14 * 24 * movement);
        }
        if (this.selectedPeriod == "month") ;
        if (this.selectedPeriod == "year") ;
        this.periodStart = periodStart;
        this.periodEnd = periodEnd;
        this.loadPeriod();
    };
    /**
     * @param {?} period
     * @return {?}
     */
    ChartComponent.prototype.selectPeriod = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        this.updateChart = true;
        this.selectedPeriod = period;
        /** @type {?} */
        var periodEnd = new Date();
        /** @type {?} */
        var periodStart = new Date();
        if (period == "5min") {
            periodStart.setMinutes(periodEnd.getMinutes() - 5);
        }
        if (period == "15min") {
            periodStart.setMinutes(periodEnd.getMinutes() - 15);
        }
        if (period == "30min") {
            periodStart.setMinutes(periodEnd.getMinutes() - 30);
        }
        if (period == "hour") {
            periodStart.setHours(periodEnd.getHours() - 1);
        }
        if (period == "day") {
            periodStart.setHours(periodEnd.getHours() - 24);
        }
        if (period == "week") {
            periodStart.setHours(periodEnd.getHours() - 7 * 24);
        }
        this.periodStart = periodStart;
        this.periodEnd = periodEnd;
        this.setSelectedPeriodText(period);
        //console.log("sp", this.periodStart, this.periodEnd);
        this.loadPeriod();
    };
    /**
     * @param {?} period
     * @return {?}
     */
    ChartComponent.prototype.setSelectedPeriodText = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        if (period == "5min") {
            this.selectedPeriodText = "5 min";
        }
        if (period == "15min") {
            this.selectedPeriodText = "15 min";
        }
        if (period == "30min") {
            this.selectedPeriodText = "30 min";
        }
        if (period == "hour") {
            this.selectedPeriodText = "Hour";
        }
        if (period == "day") {
            this.selectedPeriodText = "Day";
        }
        if (period == "week") {
            this.selectedPeriodText = "Week";
        }
        if (period == "month") {
            this.selectedPeriodText = "Month";
        }
        if (period == "year") {
            this.selectedPeriodText = "Year";
        }
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.getPeriodLimit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var periodStart = new Date();
        if (this.selectedPeriod == "5min") {
            periodStart.setMinutes(periodStart.getMinutes() - 5);
        }
        if (this.selectedPeriod == "15min") {
            periodStart.setMinutes(periodStart.getMinutes() - 15);
        }
        if (this.selectedPeriod == "30min") {
            periodStart.setMinutes(periodStart.getMinutes() - 30);
        }
        if (this.selectedPeriod == "hour") {
            periodStart.setHours(periodStart.getHours() - 1);
        }
        if (this.selectedPeriod == "day") {
            periodStart.setHours(periodStart.getHours() - 24);
        }
        if (this.selectedPeriod == "week") {
            periodStart.setHours(periodStart.getHours() - 7 * 24);
        }
        if (this.selectedPeriod == "month") {
            periodStart.setHours(periodStart.getHours() - 7 * 24 * 31);
        }
        if (this.selectedPeriod == "year") {
            periodStart.setHours(periodStart.getHours() - 7 * 24 * 365);
        }
        return periodStart;
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.loadPeriod = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        //console.log("lp", this.periodStart, this.periodEnd);
        this.kerviService.spine.sendQuery("getSensorData", this.value.id, this.periodStart.toISOString(), this.periodEnd.toISOString(), function (results) {
            console.log("gsd", results);
            /** @type {?} */
            var sensorData = results;
            self.chartData.length = 0;
            for (var i = 0; (i < sensorData.length); i++) {
                /** @type {?} */
                var dataItem = sensorData[i];
                self.chartData.push({ x: new Date(dataItem.ts + " utc"), y: dataItem.value });
            }
            self.chart.render();
            self.chart.update();
        });
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.cleanData = /**
     * @return {?}
     */
    function () {
        if (this.updateChart) {
            /** @type {?} */
            var doClean = true;
            /** @type {?} */
            var limitTS = this.getPeriodLimit();
            /** @type {?} */
            var ds = this.chart.data.datasets[0].data;
            while (ds.length > 0 && doClean) {
                if (ds[0].x < limitTS)
                    ds.shift();
                else
                    doClean = false;
            }
        }
    };
    ChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-chart',
                    template: "<div style=\"width:100%;height:100%\">\n    <div class=\"row\" *ngIf=\"linkParameters.chartButtons || linkParameters.label\">\n        <div class=\"col-sm-6\" *ngIf=\"linkParameters.label\">\n            {{linkParameters.label}}\n        </div>\n        <div class=\"col-sm-6 text-right\" *ngIf=\"linkParameters.chartButtons=='top'\">\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click) = \"movePeriod(-1)\"></i></button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click) = \"movePeriod(1)\"></i></button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" title=\"live\" (click) = \"goLive()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n                <div class=\"btn-group\" role=\"group\">\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        {{selectedPeriodText}}\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('5min')\" >5 min</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('15min')\" >15 min</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('30min')\" >30 min</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\" >Hour</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('day')\">Day</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('week')\">Week</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('month')\">Month</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\">Year</span>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"wrapper\" style=\"\">\n        <canvas id=\"{{canvasId}}\" class=\"sensor-canvas\"></canvas>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6 text-right\" *ngIf=\"linkParameters.chartButtons && linkParameters.chartButtons!='top'\">\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click) = \"movePeriod(-1)\"></i></button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click) = \"movePeriod(1)\"></i></button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" title=\"live\" (click) = \"goLive()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n                <div class=\"btn-group\" role=\"group\">\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        {{selectedPeriodText}}\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('5min')\" >5 min</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('15min')\" >15 min</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('30min')\" >30 min</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\" >Hour</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('day')\">Day</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('week')\">Week</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('month')\">Month</span>\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\">Year</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    ChartComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SwitchButtonComponent = /** @class */ (function () {
    function SwitchButtonComponent(elementRef) {
        this.elementRef = elementRef;
        this.isReady = false;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.buttonState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = false;
    }
    Object.defineProperty(SwitchButtonComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.state = value;
            if (this.isReady) {
                if (value)
                    jQuery('input', this.elementRef.nativeElement).bootstrapToggle('on');
                else
                    jQuery('input', this.elementRef.nativeElement).bootstrapToggle('off');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwitchButtonComponent.prototype.press = /**
     * @return {?}
     */
    function () {
        this.buttonState.emit(true);
        //this.kerviService.spine.sendCommand(this.value.command, true);
    };
    /**
     * @return {?}
     */
    SwitchButtonComponent.prototype.release = /**
     * @return {?}
     */
    function () {
        this.buttonState.emit(false);
        //this.parent.release()
        //this.kerviService.spine.sendCommand(this.value.command, false);
    };
    /**
     * @return {?}
     */
    SwitchButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (!this.linkParameters) {
            //  this.parameters = this.value.ui;
            if (!self.linkParameters.buttonWidth)
                this.width = this.dashboardSizes.switchWidth;
            else
                this.width = self.linkParameters.buttonWidth;
            if (!self.linkParameters.buttonHeight)
                this.height = this.dashboardSizes.switchHeight;
            else
                this.height = self.linkParameters.buttonHeight;
        }
        else {
            this.width = this.dashboardSizes.switchWidth;
            this.height = this.dashboardSizes.switchHeight;
        }
        /** @type {?} */
        var onText = this.linkParameters && this.linkParameters.onIcon ? "<i class='fa fa-" + this.linkParameters.onIcon + "'></i> " : "";
        /** @type {?} */
        var offText = this.linkParameters && this.linkParameters.offIcon ? "<i class='fa fa-" + this.linkParameters.offIcon + "'></i> " : "";
        onText += this.linkParameters && this.linkParameters.onText ? this.linkParameters.onText : "";
        offText += this.linkParameters && this.linkParameters.offText ? this.linkParameters.offText : "";
        setTimeout(function () {
            jQuery('input', self.elementRef.nativeElement).bootstrapToggle({
                'on': onText,
                'off': offText,
                'onstyle': "on",
                'offstyle': "off",
                "width": self.width,
                "height": self.height
            });
            if (self.state)
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on');
            else
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off');
            jQuery('input', self.elementRef.nativeElement).change(function () {
                /** @type {?} */
                var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
                if (state && !self.state)
                    self.buttonState.emit(true);
                else if (!state && self.state)
                    self.buttonState.emit(false);
            });
            self.isReady = true;
        }, 0);
    };
    SwitchButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-switchbutton',
                    template: "<div *ngIf=\"!inline\" class=\" \" >\n    <input type=\"checkbox\" checked=\"\">\n</div>    \n<div *ngIf=\"inline\" class=\"\" style=\"display:inline-flex\">\n    <input type=\"checkbox\" checked=\"\">\n</div>",
                    styles: [""],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    SwitchButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SwitchButtonComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SwitchButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.value = null;
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.buttonState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (self.linkParameters) {
            if (!self.linkParameters.buttonWidth)
                this.width = this.dashboardSizes.buttonWidth;
            else
                this.width = self.linkParameters.buttonWidth;
            if (!self.linkParameters.buttonHeight)
                this.height = this.dashboardSizes.buttonHeight;
            else
                this.height = self.linkParameters.buttonHeight;
        }
        else {
            this.width = this.dashboardSizes.buttonWidth;
            this.height = this.dashboardSizes.buttonHeight;
        }
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.press = /**
     * @return {?}
     */
    function () {
        this.buttonState.emit(true);
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.release = /**
     * @return {?}
     */
    function () {
        this.buttonState.emit(false);
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-button',
                    template: "<button *ngIf=\"!inline\" class=\"btn btn-primary pull-right\" title=\"{{(title | translate) }}\" [style.min.width]=\"width\" [style.height]=\"height\" [ngClass]=\"{'btn-primary-hover': value }\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"title\">\n    <i *ngIf=\"linkParameters.buttonIcon\" class='fa fa-{{linkParameters.buttonIcon}}'></i>\n    <ng-container *ngIf=\"linkParameters.buttonText\" >{{ linkParameters.buttonText}}</ng-container>\n</button>\n\n<button *ngIf=\"inline\" class=\"btn btn-primary\" title=\"{{title}}\" [ngClass]=\"{'btn-primary-hover':value}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"title\">\n    <i *ngIf=\"linkParameters.buttonIcon\" class='fa fa-{{ linkParameters.buttonIcon }}'></i>\n    <ng-container *ngIf=\"linkParameters.buttonText\" >{{ linkParameters.buttonText}}</ng-container>\n</button>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MPEGViewerComponent = /** @class */ (function () {
    function MPEGViewerComponent() {
        this.width = null;
        this.height = null;
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstLoad = true;
    }
    /**
     * @return {?}
     */
    MPEGViewerComponent.prototype.imageReady = /**
     * @return {?}
     */
    function () {
        if (this.firstLoad) {
            this.firstLoad = false;
            this.imageLoaded.emit(true);
        }
    };
    MPEGViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-mpeg-viewer',
                    template: "<img (load)=\"imageReady()\" class=\"camImage\" src=\"{{cameraSource}}\" [style.height.%]=\"height\" [style.width.%]=\"width\">\n",
                    styles: ["#video-viewer{margin-top:-20px}.cam-pad-area{z-index:1200;vertical-align:middle;width:200px;display:inline-block;position:absolute;left:389px;top:132px;color:#fff}"]
                },] },
    ];
    /** @nocollapse */
    MPEGViewerComponent.ctorParameters = function () { return []; };
    MPEGViewerComponent.propDecorators = {
        cameraSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MPEGViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateTimeComponent$1 = /** @class */ (function () {
    function DateTimeComponent(elementRef) {
        this.elementRef = elementRef;
        this.dateTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.id = null;
        this.datetimeValue = null;
        this.isReady = false;
    }
    Object.defineProperty(DateTimeComponent.prototype, "dateTime", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.datetimeValue = v;
            if (this.isReady)
                jQuery('.date', this.elementRef.nativeElement).data("datetimepicker").date(moment(v).toDate());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.guid = /**
     * @return {?}
     */
    function () {
        /**
         * @return {?}
         */
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.guid();
        /** @type {?} */
        var self = this;
        //if (self.value.value)
        //  self.datetimevalue = self.value.value.toLocaleString();
        setTimeout(function () {
            /** @type {?} */
            var mdate = moment(self.datetimeValue);
            /** @type {?} */
            var options = {
                date: mdate.toDate(),
                format: self.format,
                buttons: {
                    showToday: true,
                    showClear: true,
                    showClose: true
                }
            };
            jQuery('.date', self.elementRef.nativeElement).datetimepicker(options);
            jQuery('.date', self.elementRef.nativeElement).on("change.datetimepicker", function (e) {
                /** @type {?} */
                var dt = moment.utc(e.date).format();
                self.dateTimeChanged.emit(dt);
            });
            self.isReady = true;
        }, 0);
    };
    DateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-datetime',
                    template: "<div class=\"form-group\" >\n    <div class=\"input-group date\" id=\"datetimepicker_{{id}}\" data-target-input=\"nearest\">\n        <input type=\"text\" class=\"form-control datetimepicker-input\"  [attr.data-target]=\"'#datetimepicker_' + id\"/>\n        <div class=\"input-group-append\" [attr.data-target]=\"'#datetimepicker_' + id\" data-toggle=\"datetimepicker\">\n            <span *ngIf=\"type=='datetime' || type=='date'\" class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\n            <span *ngIf=\"type=='time'\" class=\"input-group-text\"><i class=\"fa fa-clock\"></i></span>\n        </div>\n    </div>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DateTimeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DateTimeComponent.propDecorators = {
        dateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateTimeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DateTimeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icon = null;
    }
    /**
     * @return {?}
     */
    IconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IconsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-icon',
                    template: "<i class=\"fa fa-{{icon}}\"></i>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IconsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ColorComponent$1 = /** @class */ (function () {
    function ColorComponent(elementRef) {
        this.elementRef = elementRef;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.picker = null;
    }
    Object.defineProperty(ColorComponent.prototype, "color", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            console.log("cc", v, this.picker);
            this.colorValue = v;
            if (v) {
                //    jQuery('.color', this.elementRef.nativeElement).css("background-color", v)
                //else
                jQuery('.color', this.elementRef.nativeElement).attr("style", "background-color:" + v);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (!self.linkParameters.buttonWidth)
            this.width = this.dashboardSizes.switchWidth;
        else
            this.width = self.linkParameters.buttonWidth;
        if (this.linkParameters.isInput) {
            setTimeout(function () {
                self.picker = jQuery('.color', self.elementRef.nativeElement).colorPicker({
                    //color: 'rgba(255,12,14,1)',
                    cssAddon: '.cp-color-picker {z-index:2000}',
                    buildCallback: function (b) {
                    },
                    positionCallback: function (p) {
                    },
                    renderCallback: function (v) {
                        /** @type {?} */
                        var value = v.text;
                        if (value.indexOf("rgb") == 0) {
                            /** @type {?} */
                            var rgb = v.text.split(',');
                            /** @type {?} */
                            var r = parseInt(rgb[0].substring(4));
                            /** @type {?} */
                            var g = parseInt(rgb[1]);
                            /** @type {?} */
                            var b = parseInt(rgb[2]);
                            value = "#" + r.toString(16) + g.toString(16) + b.toString(16);
                        }
                        console.log("cc", value);
                        self.colorChange.emit(value);
                    },
                    actionCallback: function (v, x) {
                        console.log("c", v, x);
                    }
                });
            }, 0);
        }
    };
    ColorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-color',
                    template: "<div style=\"max-width:90px\" class=\"input-group\">\n    <div  [attr.background.value]=\"colorValue\" class=\"form-control color\"></div>\n</div>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ColorComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        colorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ColorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UIComponentsModule = /** @class */ (function () {
    function UIComponentsModule() {
    }
    UIComponentsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        SparklineComponent,
                        SliderComponent,
                        IconsComponent,
                        GaugeComponent,
                        ChartComponent,
                        SwitchButtonComponent,
                        ButtonComponent,
                        MPEGViewerComponent,
                        DateTimeComponent$1,
                        ColorComponent$1
                    ],
                    exports: [
                        SparklineComponent,
                        SliderComponent,
                        IconsComponent,
                        MPEGViewerComponent,
                        GaugeComponent,
                        ChartComponent,
                        SwitchButtonComponent,
                        ButtonComponent,
                        DateTimeComponent$1,
                        ColorComponent$1
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["NgxGaugeModule"],
                    ],
                    providers: [],
                    bootstrap: []
                },] },
    ];
    /** @nocollapse */
    UIComponentsModule.ctorParameters = function () { return []; };
    return UIComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviValueComponent = /** @class */ (function () {
    function KerviValueComponent() {
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
    }
    KerviValueComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value',
                    template: "    <kervi-value-number *ngIf=\"value.typeName=='Number'\" [value]=\"value\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" ></kervi-value-number>\n    <kervi-value-boolean *ngIf=\"value.typeName=='Boolean'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-boolean>\n    <kervi-value-string *ngIf=\"value.typeName=='String'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-string>\n    <kervi-value-color *ngIf=\"value.typeName=='Color'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-color>\n    <kervi-value-datetime *ngIf=\"value.typeName=='DateTime'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-datetime>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    KerviValueComponent.ctorParameters = function () { return []; };
    KerviValueComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return KerviValueComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValuesModule = /** @class */ (function () {
    function ValuesModule() {
    }
    ValuesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NumberComponent,
                        BooleanComponent,
                        KerviValueComponent,
                        StringComponent,
                        DateTimeComponent,
                        ColorComponent
                    ],
                    exports: [
                        NumberComponent,
                        BooleanComponent,
                        KerviValueComponent,
                        StringComponent,
                        DateTimeComponent,
                        ColorComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        UIComponentsModule
                    ],
                    providers: [],
                    bootstrap: []
                },] },
    ];
    /** @nocollapse */
    ValuesModule.ctorParameters = function () { return []; };
    return ValuesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ActionComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ActionComponent, _super);
    function ActionComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    ActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitAction();
    };
    ActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-action',
                    template: "<kervi-switchbutton \n    [dashboardSizes]=\"dashboardSizes\" \n    [inline]=\"inline\" \n    [value]=\"(state | async)\" \n    [linkParameters]=\"linkParameters\"\n    (buttonState)=\"setActionState($event)\"\n    *ngIf=\"displayType!='button'\"\n></kervi-switchbutton>\n<kervi-button \n    [title]=\"action.name\" \n    [dashboardSizes]=\"dashboardSizes\" \n    [value]=\"(state | async)\" \n    [inline]=\"inline\" \n    [linkParameters]=\"linkParameters\"\n    (buttonState)=\"setActionState($event)\" \n    *ngIf=\"displayType=='button'\"\n></kervi-button>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ActionComponent.ctorParameters = function () { return []; };
    return ActionComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviActionComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxKerviComponentsModule = /** @class */ (function () {
    function NgxKerviComponentsModule() {
    }
    NgxKerviComponentsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NgxKerviModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                        ValuesModule,
                        UIComponentsModule
                    ],
                    declarations: [
                        WidgetComponent,
                        ControllerPadComponent,
                        CamViewerComponent,
                        DashboardPanelComponent,
                        ActionComponent
                    ],
                    exports: [
                        DashboardPanelComponent,
                        ControllerPadComponent,
                        CamViewerComponent
                    ]
                },] },
    ];
    return NgxKerviComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWtlcnZpLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi9uZ3gta2VydmktY29tcG9uZW50cy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi9jb250cm9sbGVyLXBhZC9jb250cm9sbGVyLXBhZC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi9jYW0tdmlld2VyL2NhbS12aWV3ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvZGFzaGJvYXJkLXBhbmVsL2Rhc2hib2FyZC1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi92YWx1ZXMvbnVtYmVyLXZhbHVlL251bWJlci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi92YWx1ZXMvYm9vbGVhbi12YWx1ZS9ib29sZWFuLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3ZhbHVlcy9zdHJpbmctdmFsdWUvc3RyaW5nLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3ZhbHVlcy9kYXRldGltZS12YWx1ZS9kYXRldGltZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi92YWx1ZXMvY29sb3ItdmFsdWUvY29sb3ItdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvdWktY29tcG9uZW50cy9zcGFya2xpbmUvc3BhcmtsaW5lLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3VpLWNvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi91aS1jb21wb25lbnRzL2dhdWdlL2dhdWdlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3VpLWNvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvdWktY29tcG9uZW50cy9zd2l0Y2gtYnV0dG9uL3N3aXRjaC1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvdWktY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3VpLWNvbXBvbmVudHMvbXBlZy12aWV3ZXIvbXBlZy12aWV3ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvdWktY29tcG9uZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi91aS1jb21wb25lbnRzL2ljb25zL2ljb25zLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3VpLWNvbXBvbmVudHMvY29sb3IvY29sb3IuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvdWktY29tcG9uZW50cy91aS1jb21wb25lbnRzLm1vZHVsZS50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL3ZhbHVlcy9rZXJ2aS12YWx1ZS9rZXJ2aS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS1jb21wb25lbnRzL2xpYi92YWx1ZXMvdmFsdWVzLm1vZHVsZS50cyIsIm5nOi8vbmd4LWtlcnZpLWNvbXBvbmVudHMvbGliL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmktY29tcG9uZW50cy9saWIvbmd4LWtlcnZpLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEtlcnZpQ29tcG9uZW50c1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS13aWRnZXQnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpZGdldFR5cGU9PSd2YWx1ZSdcIj5cclxuICAgIDxkaXYgKm5nSWY9XCIhaW5saW5lXCIgY2xhc3M9XCJibG9jay1jb21wb25lbnRcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0OmxlZnQ7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxJY29uXCIgY2xhc3M9XCJmYSBmYS17e2xpbmtQYXJhbWV0ZXJzLmxhYmVsSWNvbn19XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICAgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5sYWJlbFwiPnt7bGlua1BhcmFtZXRlcnMubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8a2VydmktdmFsdWUgKm5nSWY9XCJjb21wb25lbnQuY29tcG9uZW50VHlwZT09J0tlcnZpVmFsdWUnXCIgW3ZhbHVlXT1cImNvbXBvbmVudFwiIFtpbmxpbmVdPVwiZmFsc2VcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS12YWx1ZT5cclxuICAgICAgICAgICAgPGtlcnZpLWFjdGlvbiAgKm5nSWY9XCJjb21wb25lbnQuY29tcG9uZW50VHlwZT09J2FjdGlvbidcIiBbYWN0aW9uXT1cImNvbXBvbmVudFwiIFtpbmxpbmVdPVwiZmFsc2VcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS1hY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lXCIgY2xhc3M9XCJpbmxpbmUtY29tcG9uZW50XCI+IFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCIgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxJY29uXCIgY2xhc3M9XCJmYSBmYS17e2xpbmtQYXJhbWV0ZXJzLmxhYmVsSWNvbn19XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCIgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxcIiAgPnt7bGlua1BhcmFtZXRlcnMubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGtlcnZpLXZhbHVlICpuZ0lmPVwiY29tcG9uZW50LmNvbXBvbmVudFR5cGU9PSdLZXJ2aVZhbHVlJ1wiIFt2YWx1ZV09XCJjb21wb25lbnRcIiBbaW5saW5lXT1cImZhbHNlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktdmFsdWU+XHJcbiAgICAgICAgICAgIDxrZXJ2aS1hY3Rpb24gICpuZ0lmPVwiY29tcG9uZW50LmNvbXBvbmVudFR5cGU9PSdhY3Rpb24nXCIgW2FjdGlvbl09XCJjb21wb25lbnRcIiBbaW5saW5lXT1cImZhbHNlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktYWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPiAgICBcclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpZGdldFR5cGU9PSdjYW1lcmEnXCIgY2xhc3M9XCJibG9jay1jb21wb25lbnRcIiA+XHJcbiAgICA8a2VydmktY2FtLXZpZXdlciBbaXNCYWNrZ3JvdW5kXT1cImZhbHNlXCIgW2NhbWVyYV09XCJjb21wb25lbnRcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLWNhbS12aWV3ZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4gICAgXHJcbiAgICBcclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpZGdldFR5cGU9PSdnYXVnZSdcIiBjbGFzcz1cImJsb2NrLWNvbXBvbmVudFwiID5cclxuICAgIDxrZXJ2aS1nYXVnZSBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbdmFsdWVdPVwiY29tcG9uZW50XCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS1nYXVnZT5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0VHlwZT09J2NoYXJ0J1wiIGNsYXNzPVwiXCIgPlxyXG4gICAgPGtlcnZpLWNoYXJ0IFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFt2YWx1ZV09XCJjb21wb25lbnRcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiA+PC9rZXJ2aS1jaGFydD5cclxuPC9uZy1jb250YWluZXI+YCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uZ09uSW5pdFdpZGdldCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUgfSBmcm9tIFwia2VydmktanNcIlxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY29udHJvbGxlci1wYWQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAobW91c2Vkb3duKT1cInBhZFByZXNzKClcIiAobW91c2V1cCk9XCJwYWRSZWxlYXNlKClcIj5cclxuICA8ZmllbGRzZXQgaWQ9XCJsZWZ0UGFkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiIGNsYXNzPVwicGFkXCIgW2F0dHIuZGF0YS13aWR0aF09XCJwYWRTaXplXCIgW2F0dHIuZGF0YS1oZWlnaHRdPVwicGFkU2l6ZVwiID5cclxuICAgIDxsZWdlbmQ+PC9sZWdlbmQ+XHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwYWQteFwiIHZhbHVlPVwiMFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgIG5hbWU9XCJwYWQteVwiIHZhbHVlPVwiMFwiPlxyXG4gIDwvZmllbGRzZXQ+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyUGFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBYVmFsdWU6TnVtYmVyVmFsdWU7XHJcbiAgQElucHV0KCkgWVZhbHVlOk51bWJlclZhbHVlO1xyXG4gIEBJbnB1dCgpIGF1dG9DZW50ZXI6Ym9vbGVhbjtcclxuICBwYWRTaXplOm51bWJlcj0xODA7XHJcbiAgcHJpdmF0ZSBtb3ZlRGVsYXlUaW1lciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbkRyYWc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy5YVmFsdWUpe1xyXG4gICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteCddXCIsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwodGhpcy5YVmFsdWUudmFsdWUkLnZhbHVlKS5jaGFuZ2UoKTtcclxuICAgICAgdGhpcy5YVmFsdWUudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFkLXhcIiwgc2VsZi5ZVmFsdWUubmFtZSwgdik7XHJcbiAgICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXgnXVwiLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKHYpLmNoYW5nZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5ZVmFsdWUpe1xyXG4gICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteSddXCIsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwodGhpcy5ZVmFsdWUudmFsdWUkLnZhbHVlKS5jaGFuZ2UoKTsgICAgICAgIFxyXG4gICAgICB0aGlzLllWYWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWQteVwiLCBzZWxmLllWYWx1ZS5uYW1lLCB2KTtcclxuICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteSddXCIsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwodikuY2hhbmdlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwuNSlcIjtcclxuICAgIHZhciBwID0galF1ZXJ5KCdmaWVsZHNldCcsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS54eSh7XHJcbiAgICAgIGRpc3BsYXlQcmV2aW91czogZmFsc2VcclxuICAgICAgLCBtaW46IC0xMDBcclxuICAgICAgLCBtYXg6IDEwMFxyXG4gICAgICAsIHdpZHRoOiBzZWxmLnBhZFNpemVcclxuICAgICAgLCBoZWlnaHQ6IHNlbGYucGFkU2l6ZVxyXG4gICAgICAsIGZnQ29sb3I6IGNvbG9yXHJcbiAgICAgICwgYmdDb2xvcjogY29sb3JcclxuICAgICAgLCBjaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmIChzZWxmLm1vdmVEZWxheVRpbWVyKSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5tb3ZlRGVsYXlUaW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNlbGYubW92ZURlbGF5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChzZWxmLlhWYWx1ZSlcclxuICAgICAgICAgICAgc2VsZi5YVmFsdWUuc2V0KHZhbHVlWzBdKTtcclxuICAgICAgICAgIGlmIChzZWxmLllWYWx1ZSlcclxuICAgICAgICAgICAgc2VsZi5ZVmFsdWUuc2V0KHZhbHVlWzFdKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jc3MoeyAnYm9yZGVyJzogJzJweCBzb2xpZCAnICsgY29sb3IgfSk7ICBcclxuICB9XHJcblxyXG4gIHBhZFByZXNzKCl7XHJcbiAgICB0aGlzLmluRHJhZz10cnVlO1xyXG4gIH1cclxuXHJcbiAgcGFkUmVsZWFzZSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJwclwiLCB0aGlzLmluRHJhZywgdGhpcy5hdXRvQ2VudGVyKTsgICBcclxuICAgIHRoaXMuaW5EcmFnPWZhbHNlO1xyXG4gICAgICAgaWYgKHRoaXMuYXV0b0NlbnRlciAmJiB0aGlzLlhWYWx1ZSl7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwieC1hdXRvIGNlbnRlclwiKTtcclxuICAgICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXgnXVwiLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKDApLmNoYW5nZSgpO1xyXG4gICAgICAgICB0aGlzLlhWYWx1ZS5zZXQoMCk7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZiAodGhpcy5hdXRvQ2VudGVyICYmIHRoaXMuWVZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInktYXV0byBjZW50ZXJcIik7IFxyXG4gICAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC15J11cIiwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCgwKS5jaGFuZ2UoKTtcclxuICAgICAgICAgdGhpcy5ZVmFsdWUuc2V0KDApO1xyXG4gICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZixBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlDYW1lcmFDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzphbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNhbS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQmFja2dyb3VuZFwiPlxyXG5cdDxkaXYgI3ZpZGVvVmlld2VyIGlkPVwidmlkZW8tdmlld2VyXCIgY2xhc3M9XCJ2aWRlbyB2aWRlby1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpmaXhlZDt0b3A6NjBweDtsZWZ0OjBweDtoZWlnaHQ6MTAwJTtcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImNhbUhlaWdodFwiIFtzdHlsZS53aWR0aC5weF09XCJjYW1XaWR0aFwiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJjYW1JbWFnZVwiIHN0eWxlPVwidG9wOjBweDtsZWZ0OjBweDtcIj5cclxuXHRcdFx0PGtlcnZpLW1wZWctdmlld2VyIChpbWFnZUxvYWRlZCk9XCJpbWFnZUxvYWRlZCgpXCIgW2hlaWdodF09MTAwICAgW2NhbWVyYVNvdXJjZV09XCJjYW1lcmFTb3VyY2VcIiA+IDwva2VydmktbXBlZy12aWV3ZXI+XHJcblx0XHQ8L3NwYW4+XHJcblx0XHQ8Y2FudmFzIGlkPVwiY2FtQ2FudmFzXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O1wiIFtzdHlsZS5oZWlnaHQucHhdPVwiY2FtSGVpZ2h0XCIgW3N0eWxlLndpZHRoLnB4XT1cImNhbVdpZHRoXCI+PC9jYW52YXM+XHJcblx0XHQ8Y2FudmFzIGlkPVwicG9pQ2FudmFzXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcIj48L2NhbnZhcz5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYW0tcGFkLWFyZWFcIiAqbmdJZj1cInNob3dDYW1QYWRcIiBbc3R5bGUubGVmdC5weF09XCJjYW1QYWRMZWZ0XCIgW3N0eWxlLnRvcC5weF09XCJjYW1QYWRUb3BcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6IDIwMDBcIj5cclxuICAgICAgPGtlcnZpLWNvbnRyb2xsZXItcGFkIFtYVmFsdWVdPVwicGFuXCIgW1lWYWx1ZV09XCJ0aWx0XCI+IDwva2VydmktY29udHJvbGxlci1wYWQ+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDo1MHB4XCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgY2FtZXJhLmFjdGlvbnNcIj5cclxuXHRcdFx0XHQ8a2VydmktYWN0aW9uIHRpdGxlPVwie3soIGFjdGlvbi5uYW1lIHwgdHJhbnNsYXRlKX19XCIgKm5nSWY9XCJhY3Rpb24udmlzaWJsZVwiIFthY3Rpb25dPVwiYWN0aW9uXCIgPjwva2VydmktYWN0aW9uPlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IFwiICAgKG1vdXNlZG93bik9XCJpbWFnZVZpZXdlci5zaG93KClcIiB0aXRsZT1cInt7KCAnbWVkaWFfZm9sZGVyJyB8IHRyYW5zbGF0ZSl9fVwiPlxyXG5cdFx0XHRcdDxpICBjbGFzcz0nZmEgZmEtZm9sZGVyJz48L2k+XHJcblx0XHRcdDwvYnV0dG9uPiAtLT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNCYWNrZ3JvdW5kXCI+XHJcblx0PGRpdiAjdmlkZW9WaWV3ZXIgaWQ9XCJ2aWRlby12aWV3ZXJcIiBjbGFzcz1cInZpZGVvXCIgc3R5bGU9XCJvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJVwiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJjYW1JbWFnZVwiIHN0eWxlPVwidG9wOjBweDtsZWZ0OjBweDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlXCI+XHJcblx0XHRcdDxrZXJ2aS1tcGVnLXZpZXdlciAoaW1hZ2VMb2FkZWQpPVwiaW1hZ2VMb2FkZWQoKVwiIFt3aWR0aF09MTAwICBbY2FtZXJhU291cmNlXT1cImNhbWVyYVNvdXJjZVwiID4gPC9rZXJ2aS1tcGVnLXZpZXdlcj5cclxuXHRcdDwvc3Bhbj5cclxuXHRcdDxjYW52YXMgaWQ9XCJjYW1DYW52YXNcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowcHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJVwiPjwvY2FudmFzPlxyXG5cdFx0PGNhbnZhcyBpZD1cInBvaUNhbnZhc1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCI+PC9jYW52YXM+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2FtLXBhZC1hcmVhXCIgKm5nSWY9XCJzaG93Q2FtUGFkXCIgW3N0eWxlLmxlZnQucHhdPVwiY2FtUGFkTGVmdFwiIFtzdHlsZS50b3AucHhdPVwiY2FtUGFkVG9wXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiPlxyXG4gICAgICA8a2VydmktY29udHJvbGxlci1wYWQgW1hWYWx1ZV09XCJwYW5cIiBbWVZhbHVlXT1cInRpbHRcIj4gPC9rZXJ2aS1jb250cm9sbGVyLXBhZD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXY+XHJcblx0XHQ8bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGNhbWVyYS5hY3Rpb25zXCI+XHJcblx0XHRcdDxrZXJ2aS1hY3Rpb24gKm5nSWY9XCJhY3Rpb24udmlzaWJsZVwiIHRpdGxlPVwie3soIGFjdGlvbi5uYW1lIHwgdHJhbnNsYXRlKX19XCIgW2FjdGlvbl09XCJhY3Rpb25cIiA+PC9rZXJ2aS1hY3Rpb24+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwhLS0gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChtb3VzZWRvd24pPVwiaW1hZ2VWaWV3ZXIuc2hvdygpXCIgdGl0bGU9XCJ7eyggJ21lZGlhX2ZvbGRlcicgfCB0cmFuc2xhdGUpfX1cIj5cclxuXHRcdFx0PGkgIGNsYXNzPSdmYSBmYS1mb2xkZXInPjwvaT5cclxuXHRcdDwvYnV0dG9uPiAtLT5cclxuXHQ8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjwhLS0gPGtlcnZpLWltYWdlLXZpZXdlciAjaW1hZ2VWaWV3ZXIgW2NhbUNvbXBvbmVudF09XCJ0aGlzXCIgW2NhbWVyYVNvdXJjZV09XCJjYW1lcmFTb3VyY2VcIj48L2tlcnZpLWltYWdlLXZpZXdlcj4gLS0+YCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbVZpZXdlckNvbXBvbmVudCBleHRlbmRzIEtlcnZpQ2FtZXJhQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHVibGljIGNhbUhlaWdodDpudW1iZXI7XHJcbiAgcHVibGljIGNhbVdpZHRoOm51bWJlcjtcclxuICBwdWJsaWMgY2FtUGFkTGVmdDpudW1iZXI7XHJcbiAgcHVibGljIGNhbVBhZFRvcDpudW1iZXI7XHJcbiAgcHVibGljIHNob3dDYW1QYWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoXCJ2aWRlb1ZpZXdlclwiKSB2aWRlb1ZpZXdlcjpFbGVtZW50UmVmO1xyXG4gIHBhZFNpemU6bnVtYmVyPTE4MDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgXHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VMb2FkZWQoKXtcclxuICAgICAgdmFyIGggPSB0aGlzLnZpZGVvVmlld2VyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB2YXIgdyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgLy90aGlzLmNhbVBhZFRvcCA9IGggLyAyIC0gdGhpcy5wYWRTaXplLzI7XHJcbiAgICAgICAvL3RoaXMuY2FtUGFkTGVmdCA9IHcgLyAyIC0gdGhpcy5wYWRTaXplLzI7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKXtcclxuICAgIHZhciBzZWxmID0gdGhpczsgXHJcbiAgICB2YXIgZWxlbWVudCA9IHNlbGYudmlkZW9WaWV3ZXIubmF0aXZlRWxlbWVudDtcclxuICAgIHZhciB2aWV3UG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHZhciB2aWV3UG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgdGhpcy5jYW1IZWlnaHQgPSB2aWV3UG9ydEhlaWdodCAtIDY1O1xyXG4gICAgdGhpcy5jYW1XaWR0aCA9IHZpZXdQb3J0V2lkdGg7XHJcbiAgICBjb25zb2xlLmxvZyhcImF2aWNcIiwgdGhpcy5jYW1IZWlnaHQsdGhpcy5jYW1XaWR0aCk7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgdmFyIGggPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgdmFyIHcgPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICBpZiAodyA8IHNlbGYucGFkU2l6ZSl7XHJcbiAgICAgICAgc2VsZi5wYWRTaXplPXctMTA7XHJcbiAgICAgICAgICAvL2pRdWVyeShcIi5jYW1QYWRcIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmNzcyh7IHdpZHRoOiBzZWxmLnBhZFNpemUsIGhlaWdodDogIHNlbGYucGFkU2l6ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcImNhbWlcIiwgaCx3LCBzZWxmLnBhZFNpemUsIGVsZW1lbnQpO1xyXG4gICAgICBzZWxmLmNhbVBhZFRvcCA9IGggLyAyIC0gKHNlbGYucGFkU2l6ZS8yKVxyXG4gICAgICBzZWxmLmNhbVBhZExlZnQgPSAgdyAvIDIgLSAoc2VsZi5wYWRTaXplIC8gMik7XHJcbiAgICAgIHNlbGYuc2hvd0NhbVBhZCA9IHRydWU7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBqUXVlcnkod2luZG93KS5iaW5kKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgdmFyIGggPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgIC8vICAgICB2YXIgdyA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAvLyAgICAgc2VsZi5jYW1QYWRUb3AgPSBoIC8gMiAtIChzZWxmLnBhZFNpemUvMilcclxuICAgIC8vICAgICBzZWxmLmNhbVBhZExlZnQgPSAgdyAvIDIgLSAoc2VsZi5wYWRTaXplIC8gMik7XHJcbiAgICAvLyB9KVxyXG4gIH07XHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uZ09uSW5pdENhbWVyYSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZC1wYW5lbCcsXHJcbiAgdGVtcGxhdGU6IGA8IS0tIDxwPnt7cGFuZWwubmFtZX19IC0ge3twYW5lbC50eXBlfX0gLSB7e2JvZHlPbmx5fX0gLSB7e2lubGluZX19IC0ge3twYW5lbC5zdWJQYW5lbHMubGVuZ3RofX0gLSB7e3BhbmVsLmNvbXBvbmVudHMubGVuZ3RofX0gLSB7e2hlYWRlckNvbXBvbmVudHMubGVuZ3RofX0gLSB7e2JvZHlDb21wb25lbnRzLmxlbmd0aH19PC9wPiAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFib2R5T25seSAmJiBwYW5lbC50eXBlPT0nZ3JvdXAnXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZWNrXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViUGFuZWwgb2YgcGFuZWwuc3ViUGFuZWxzXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWJQYW5lbC50eXBlIT0nZ3JvdXAnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wYW5lbFwiIFtzdHlsZS53aWR0aF09XCJjYWxjV2lkdGgoc3ViUGFuZWwsIGZhbHNlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgW25nQ2xhc3NdPVwieydoYXMtY2FyZC1oZWFkZXInOiBzaG93UGFuZWxIZWFkZXIoc3ViUGFuZWwpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2VydmktZGFzaGJvYXJkLXBhbmVsIFtib2R5T25seV09XCJ0cnVlXCIgW2luR3JvdXBdPVwidHJ1ZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbcGFuZWxdPVwic3ViUGFuZWxcIj48L2tlcnZpLWRhc2hib2FyZC1wYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1YlBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRlY2stcGFuZWxcIiBbc3R5bGUud2lkdGhdPVwiY2FsY1dpZHRoKHN1YlBhbmVsLCBpbkdyb3VwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxrZXJ2aS1kYXNoYm9hcmQtcGFuZWwgIFtpbkdyb3VwXT1cInRydWVcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW3BhbmVsXT1cInN1YlBhbmVsXCI+PC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWJvZHlPbmx5ICYmICFpbmxpbmUgJiYgcGFuZWwudHlwZSE9J2dyb3VwJ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtcGFuZWwgY2FyZC1ub24tZ3JvdXBcIiBbc3R5bGUud2lkdGhdPVwiY2FsY1dpZHRoKHBhbmVsLCBmYWxzZSlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIFtuZ0NsYXNzXT1cInsnaGFzLWNhcmQtaGVhZGVyJzogc2hvd1BhbmVsSGVhZGVyKHBhbmVsKX1cIj5cclxuICAgICAgICAgICAgPGtlcnZpLWRhc2hib2FyZC1wYW5lbCBbYm9keU9ubHldPVwidHJ1ZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbcGFuZWxdPVwicGFuZWxcIj48L2tlcnZpLWRhc2hib2FyZC1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJib2R5T25seVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCIgKm5nSWY9XCJzaG93SGVhZGVyXCIgPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgICAgIDwhLS0gPGEgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3BhbmVsLXt7cGFuZWwuaWR9fVwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZXhwYW5kZWRcIiBhcmlhLWNvbnRyb2w9XCJcIiBzdHlsZT1cImZsb2F0OmxlZnRcIj4gPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8L2E+IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgKm5nSWY9XCJoZWFkZXJDb21wb25lbnRzLmxlbmd0aD4wXCIgc3R5bGU9XCJwYWRkaW5nOjBcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhbmVsQ29tcG9uZW50IG9mIGhlYWRlckNvbXBvbmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgW2lubGluZV09XCJpbmxpbmVcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2g0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgKm5nSWY9XCJib2R5Q29tcG9uZW50cy5sZW5ndGg+MFwiID5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBib2R5Q29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgIFtpbmxpbmVdPVwiaW5saW5lXCIgIFtsaW5rUGFyYW1ldGVyc109XCJwYW5lbENvbXBvbmVudC5wYXJhbWV0ZXJzXCI+PC9rZXJ2aS13aWRnZXQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiAqbmdJZj1cInBhbmVsLnBhcmFtZXRlcnMudXNlckxvZ1wiICA+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4mbmJzcDs8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD57eyggJ3RpbWUnIHwgdHJhbnNsYXRlKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3soICdzb3VyY2UnIHwgdHJhbnNsYXRlKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDoxMDAlXCI+e3soICdzb3VyY2UnIHwgdHJhbnNsYXRlKX19PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlcyQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtZXNzYWdlLmxldmVsPD0zXCIgY2xhc3M9XCJhbGVydFwiIFtuZ0NsYXNzXT1cInsndGV4dC1kYW5nZXInOiBtZXNzYWdlLmxldmVsPT0xLCAndGV4dC13YXJuaW5nJzogbWVzc2FnZS5sZXZlbD09MiwgJ3RleHQtbm9ybWFsJzogbWVzc2FnZS5sZXZlbD09M31cIiA+JiMxMTA0NDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3ttZXNzYWdlLnRpbWVzdGFtcCB8IGRhdGU6ICdISDptbTpzcyd9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7bWVzc2FnZS5zb3VyY2VOYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cIndoaXRlLXNwYWNlOm5vd3JhcDsgb3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IG1heC13aWR0aDogMDtcIiB0aXRsZT1cInt7bWVzc2FnZS50b3BpY319XCI+e3ttZXNzYWdlLnRvcGljfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+ICAgIFxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhYm9keU9ubHkgJiYgaW5saW5lICYmIHBhbmVsLmNvbXBvbmVudHMubGVuZ3RoPjBcIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBwYW5lbC5jb21wb25lbnRzXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgIDxrZXJ2aS13aWRnZXQgW2NvbXBvbmVudF09XCJwYW5lbENvbXBvbmVudC5jb21wb25lbnRcIiAgW2lubGluZV09XCJpbmxpbmVcIiBbZGFzaGJvYXJkUGFuZWxdPVwicGFuZWxcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudCBleHRlbmRzIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0UGFuZWwoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlOdW1iZXJDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTsgXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtbnVtYmVyJyxcclxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCIhaW5saW5lXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidmFsdWUtaW5wdXRcIiAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIj5cclxuICAgICAgICA8aW5wdXQgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5pc0lucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodCBwdWxsLXJpZ2h0XCIgKGtleXVwKT1cIm9uQ2hhbmdlKCRldmVudClcIiB2YWx1ZT1cInt7KHZhbHVlLnZhbHVlJCB8IGFzeW5jKX19XCIvPlxyXG4gICAgICAgIDwhLS0gPHVpLXNsaWRlciBbdmFsdWVdPVwiKHZhbHVlLnZhbHVlJCB8IGFzeW5jKVwiIChzbGlkZXJDaGFuZ2VkKT1cInNldEtlcnZpVmFsdWUoJGV2ZW50KVwiIFttaW5WYWx1ZV09XCJ2YWx1ZS5taW5WYWx1ZVwiIFttYXhWYWx1ZV09XCJ2YWx1ZS5tYXhWYWx1ZVwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwvdWktc2xpZGVyPiAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInZhbHVlLXZhbHVlXCIgKm5nSWY9XCIhbGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiIFtzdHlsZS5taW4td2lkdGgucmVtXT1cImxpbmtQYXJhbWV0ZXJzLnZhbHVlU2l6ZVwiPlxyXG4gICAgICAgIDxpICpuZ0lmPVwiY3VycmVudEljb25cIiBjbGFzcz1cImZhIGZhLXt7Y3VycmVudEljb259fVwiPjwvaT5cclxuXHRcdDx2YWx1ZS1zcGFya2xpbmUgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5zaG93U3BhcmtsaW5lICYmICFsaW5rUGFyYW1ldGVycy5pc0lucHV0XCIgW3ZhbHVlXT1cInZhbHVlXCI+PC92YWx1ZS1zcGFya2xpbmU+XHJcbiAgICAgICAge3sodmFsdWUudmFsdWUkIHwgYXN5bmMgfCBudW1iZXI6bnVtYmVyRm9ybWF0KX19XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5kaXNwbGF5VW5pdFwiPnt7dmFsdWUudW5pdH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiaW5saW5lXCI+IFxyXG4gICAgPHVpLXNsaWRlciAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIiAoc2xpZGVyQ2hhbmdlZCk9XCJzZXRLZXJ2aVZhbHVlKCRldmVudClcIiBbdmFsdWVdPVwiKHZhbHVlLnZhbHVlJCB8IGFzeW5jKVwiIFttaW5WYWx1ZV09XCJ2YWx1ZS5taW5WYWx1ZVwiIFttYXhWYWx1ZV09XCJ2YWx1ZS5tYXhWYWx1ZVwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwvdWktc2xpZGVyPlxyXG4gICAgPGkgKm5nSWY9XCJjdXJyZW50SWNvblwiIGNsYXNzPVwiZmEgZmEte3tjdXJyZW50SWNvbn19XCI+PC9pPlxyXG4gICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiICBbc3R5bGUubWF4LXdpZHRoLiVdPVwibGlua1BhcmFtZXRlcnMudmFsdWVTaXplXCIgICAgY2xhc3M9XCJzbGlkZXItdmFsdWVcIj57eyh2YWx1ZS52YWx1ZSQgfCBhc3luYyB8IG51bWJlcjpudW1iZXJGb3JtYXQpfX08L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmRpc3BsYXlVbml0XCI+e3t2YWx1ZS51bml0fX08L3NwYW4+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG5cdC8vZGlyZWN0aXZlczogWyBDb21tb25Nb2R1bGUgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aU51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXROdW1iZXIoKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlKGV2ZW50KXtcclxuXHRcdHZhciB2ID0galF1ZXJ5KFwiaW5wdXRcIiwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCgpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJldnZcIiwgdiwgZXZlbnQpO1xyXG5cdFx0dGhpcy52YWx1ZS5zZXQodik7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWJvb2xlYW4nLFxyXG5cdHRlbXBsYXRlOiBgPGtlcnZpLXN3aXRjaGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHRcIiAoYnV0dG9uU3RhdGUpPVwiY2hhbmdlU3RhdGUoJGV2ZW50KVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cIih2YWx1ZS52YWx1ZSQgfCBhc3luYylcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiAqbmdJZj1cImRpc3BsYXlUeXBlIT0nYnV0dG9uJ1wiPjwva2Vydmktc3dpdGNoYnV0dG9uPlxyXG48a2VydmktYnV0dG9uIChidXR0b25TdGF0ZSk9XCJjaGFuZ2VTdGF0ZSgkZXZlbnQpXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW3ZhbHVlXT1cIih2YWx1ZS52YWx1ZSQgfCBhc3luYylcIiBbaW5saW5lXT1cImlubGluZVwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiICpuZ0lmPVwiZGlzcGxheVR5cGU9PSdidXR0b24nXCI+PC9rZXJ2aS1idXR0b24+XHJcblxyXG5cclxuXHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcblx0Ly9kaXJlY3RpdmVzOiBbIENvbW1vbk1vZHVsZSAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VTdGF0ZShldmVudCl7XHJcblx0XHR0aGlzLnZhbHVlLnNldChldmVudCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXRCb29sZWFuKCk7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVN0cmluZ0NvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSdcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtc3RyaW5nJyxcclxuXHR0ZW1wbGF0ZTogYDxpbnB1dCAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwdWxsLXJpZ2h0XCIgKGtleXVwKT1cIm9uQ2hhbmdlKCRldmVudClcIiB2YWx1ZT1cInt7KHZhbHVlLnZhbHVlJCB8IGFzeW5jKX19XCIvPlxyXG48c3BhbiAqbmdJZj1cIiFsaW5rUGFyYW1ldGVycy5pc0lucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodFwiICAgPnt7KHZhbHVlLnZhbHVlJCB8IGFzeW5jKX19PC9zcGFuPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgS2VydmlTdHJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHQgfVxyXG5cclxuXHRuZ09uSW5pdCgpe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5uZ09uSW5pdFN0cmluZygpO1xyXG5cdFx0dGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG5cdFx0IFx0alF1ZXJ5KFwiaW5wdXRcIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh2KS5jaGFuZ2UoKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZShldmVudCl7XHJcblx0XHR2YXIgdiA9IGpRdWVyeShcImlucHV0XCIsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiZXZ2XCIsIHYsIGV2ZW50KTtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHYpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1kYXRldGltZScsXHJcblx0dGVtcGxhdGU6IGA8a2VydmktZGF0ZXRpbWUgW3R5cGVdPVwiZGlzcGxheVR5cGVcIiBbZm9ybWF0XT1cImRhdGVUaW1lRm9ybWF0XCIgKGRhdGVUaW1lQ2hhbmdlZCk9XCJzZXRLZXJ2aVZhbHVlKCRldmVudClcIiBbZGF0ZVRpbWVdPVwiKHZhbHVlLnZhbHVlJCB8IGFzeW5jKVwiPjwva2VydmktZGF0ZXRpbWU+XHJcbiAgICBgLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aURhdGVUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0RGF0ZVRpbWUoKTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlDb2xvckNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtY29sb3InLFxyXG5cdHRlbXBsYXRlOiBgPGtlcnZpLWNvbG9yIFtjb2xvcl09XCIodmFsdWUudmFsdWUkIHwgYXN5bmMpXCIgKGNvbG9yQ2hhbmdlKT1cInNldEtlcnZpVmFsdWUoJGV2ZW50KVwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiID48L2tlcnZpLWNvbG9yPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aUNvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNuaW9cIix0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHRzZXRWYWx1ZSh2KXtcclxuXHRcdGNvbnNvbGUubG9nKHYpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXRDb2xvcigpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZX0gZnJvbSAna2VydmktanMnXHJcbmltcG9ydCB7ICBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSdcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZhbHVlLXNwYXJrbGluZScsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW2BgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BhcmtsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6TnVtYmVyVmFsdWU7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYsIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOktlcnZpVGVtcGxhdGVTZXJ2aWNlKSB7IFxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3Ioc3R5bGUsc2VsZWN0b3Ipe1xyXG4gICAgXHRyZXR1cm4gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3R5bGUsc2VsZWN0b3IpO1xyXG4gIFx0fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmPXRoaXM7XHJcbiAgICBcclxuICAgIHZhciBsaW5lQ29sb3I9c2VsZi5jb2xvcihcImNvbG9yXCIsXCIuc3BhcmtsaW5lLXRlbXBsYXRlXCIpO1xyXG4gICAgdmFyIHNwb3RDb2xvcj1zZWxmLmNvbG9yKFwiY29sb3JcIixcIi5zcGFya2xpbmUtdGVtcGxhdGUgLnNwb3RcIik7XHJcbiAgICB2YXIgZmlsbENvbG9yPXNlbGYuY29sb3IoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCIuc3BhcmtsaW5lLXRlbXBsYXRlXCIpO1xyXG4gICAgdmFyIGhlaWdodD1zZWxmLmNvbG9yKFwiaGVpZ2h0XCIsXCIuc3BhcmtsaW5lLXRlbXBsYXRlXCIpO1xyXG4gICAgdmFyIHdpZHRoPXNlbGYuY29sb3IoXCJ3aWR0aFwiLFwiLnNwYXJrbGluZS10ZW1wbGF0ZVwiKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJzbFwiLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMudmFsdWUuc3BhcmtsaW5lJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcbiAgICAgIFxyXG4gICAgalF1ZXJ5KHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zcGFya2xpbmUodiwgeyBcclxuICAgICAgICB0eXBlOiAnbGluZScsIFxyXG4gICAgICAgIGxpbmVDb2xvcjpsaW5lQ29sb3IsXHJcbiAgICAgICAgc3BvdENvbG9yOnNwb3RDb2xvcixcclxuICAgICAgICBmaWxsQ29sb3I6ZmlsbENvbG9yLFxyXG4gICAgICAgIGhlaWdodDpoZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6d2lkdGggXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcywgTnVtYmVyVmFsdWUgfSBmcm9tICdrZXJ2aS1qcydcclxuaW1wb3J0IHsgS2VydmlUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICduZ3gta2VydmknXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICd1aS1zbGlkZXInLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLDAsMCwuMSk7IGJvcmRlci1yYWRpdXM6IDhweDtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O2Rpc3BsYXk6ZmxleFwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2hpdGUtc3BhY2U6IG5vd3JhcFwiPlxyXG4gICAgICAgIDxrZXJ2aS1pY29uIGNsYXNzPVwic2xpZGVyLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6MTRweDtcIiAobW91c2Vkb3duKT1cInN0ZXAoLTEpXCIgaWNvbj1cImNhcmV0LWRvd25cIj48L2tlcnZpLWljb24+XHJcbiAgICAgICAgPGtlcnZpLWljb24gY2xhc3M9XCJzbGlkZXItYnV0dG9uXCIgc3R5bGU9XCJcIiAobW91c2Vkb3duKT1cInN0ZXAoMSlcIiBpY29uPVwiY2FyZXQtdXBcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjRweDtcIj48L2tlcnZpLWljb24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHJpdmF0ZSBzbGlkZXJWYWx1ZTpudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgaXNSZWFkeSA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaWdub3JlQ2hhbmdlID0gZmFsc2U7XHJcblx0QElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpe1xyXG5cdFx0aWYgKHZhbHVlICE9IHRoaXMuc2xpZGVyVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnNsaWRlclZhbHVlID0gdmFsdWU7XHJcblx0XHRcdGlmICh0aGlzLmlzUmVhZHkpe1xyXG5cdFx0XHRcdHRoaXMuaWdub3JlQ2hhbmdlID0gdHJ1ZTtcclxuXHRcdFx0XHRqUXVlcnkoXCJpbnB1dFwiLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwU2xpZGVyKCdzZXRWYWx1ZScsdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0ICB9O1xyXG5cdEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9zbGlkZXJcIjtcclxuICAgIEBJbnB1dCgpIHRpY2s6bnVtYmVyO1xyXG5cdEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuXHRASW5wdXQoKSBkZWZhdWx0U2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuXHRASW5wdXQoKSBtYXhWYWx1ZTpudW1iZXI7XHJcblx0QElucHV0KCkgbWluVmFsdWU6bnVtYmVyO1xyXG5cdEBPdXRwdXQoKSBzbGlkZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdHByaXZhdGUgbW92ZURlbGF5VGltZXIgPSBudWxsO1xyXG5cdHByaXZhdGUgaW5TbGlkZTpib29sZWFuPWZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOktlcnZpVGVtcGxhdGVTZXJ2aWNlKSB7IFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNuaW9cIix0aGlzKTtcclxuXHR9XHJcblxyXG5cdCBwcml2YXRlIGNvbG9yKHN0eWxlLHNlbGVjdG9yKXtcclxuICAgIFx0cmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldENvbG9yKHN0eWxlLHNlbGVjdG9yKTtcclxuICBcdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0dmFyXHRjb2xvciA9IHRoaXMuY29sb3IoXCJjb2xvclwiLFwiLm51bWJlci1nYXVnZS10ZW1wbGF0ZVwiKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRqUXVlcnkoJ2lucHV0Jywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFNsaWRlcih7XHJcblx0XHRcdFx0dG9vbHRpcDogXCJoaWRlXCIsXHJcblx0XHRcdFx0bWluOnNlbGYubWluVmFsdWUsXHJcblx0XHRcdFx0bWF4OnNlbGYubWF4VmFsdWUsXHJcblx0XHRcdFx0c3RlcDpzZWxmLnRpY2ssXHJcblx0XHRcdFx0b3JpZW50YXRpb246IHNlbGYudHlwZSA9PSBcImhvcml6b250YWxfc2xpZGVyXCIgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIlxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGpRdWVyeSgnLnNsaWRlcicsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKGUseCl7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzbHN2XCIsIGUsIHgpO1xyXG5cdFx0XHRcdGlmIChlLnZhbHVlLm5ld1ZhbHVlICYmICFzZWxmLmlnbm9yZUNoYW5nZSlcclxuXHRcdFx0XHRcdHNlbGYuc2xpZGVyQ2hhbmdlZC5lbWl0KGUudmFsdWUubmV3VmFsdWUpO1xyXG5cdFx0XHRcdHNlbGYuaWdub3JlQ2hhbmdlID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0alF1ZXJ5KCcuc2xpZGVyJywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLm9uKFwic2xpZGVTdGFydFwiLGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHNlbGYuaW5TbGlkZT10cnVlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGpRdWVyeSgnLnNsaWRlcicsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5vbihcInNsaWRlU3RvcFwiLGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHNlbGYuaW5TbGlkZT1mYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNlbGYuaXNSZWFkeSA9IHRydWU7XHJcblx0XHRcdFxyXG5cdFx0fSwwKTtcclxuXHR9XHJcblxyXG5cdHN0ZXAodil7XHJcblx0XHR0aGlzLnNsaWRlckNoYW5nZWQuZW1pdCh0aGlzLnNsaWRlclZhbHVlICt2KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzLCBOdW1iZXJWYWx1ZSwgVmFsdWVSYW5nZSwgVmFsdWVSYW5nZVR5cGUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJztcclxuZGVjbGFyZSB2YXIgTGluZWFyR2F1Z2U6YW55O1xyXG5kZWNsYXJlIHZhciBSYWRpYWxHYXVnZTphbnk7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktZ2F1Z2UnLFxyXG4gIHRlbXBsYXRlOiBgPG5neC1nYXVnZSBjbGFzcz1cImdhdWdlLXdpZHRoXCJcclxuICAgIFt2YWx1ZV09XCIodmFsdWUudmFsdWUkIHwgYXN5bmMgfCBudW1iZXI6bnVtYmVyRm9ybWF0KVwiIFxyXG4gICAgW21pbl0gPSBcInZhbHVlLm1pblZhbHVlXCJcclxuICAgIFttYXhdID0gXCJ2YWx1ZS5tYXhWYWx1ZVwiXHJcbiAgICBbdGhyZXNob2xkc10gPSBcImRhdGFIaWdobGlnaHRzXCJcclxuICAgIFt0aGlja10gPSBcIjEyXCJcclxuICAgIFtjYXBdID0gXCIncm91bmQnXCJcclxuICAgIFtkdXJhdGlvbl0gPSBcIjFcIlxyXG4gICAgXHJcbj5cclxuPG5neC1nYXVnZS1wcmVwZW5kPlxyXG4gICAgPCEtLSBjdXN0b20gcHJlcGVuZCB0ZXh0IG9yIEhUTUwgZ29lcyBoZXJlIC0tPlxyXG48L25neC1nYXVnZS1wcmVwZW5kPlxyXG48bmd4LWdhdWdlLXZhbHVlPlxyXG4gICAge3t2YWx1ZS52YWx1ZSQgfCBhc3luYyB8IG51bWJlcjpudW1iZXJGb3JtYXR9fVxyXG4gICAgPGRpdiBjbGFzcz1cImdhdWdlLXVuaXRcIj57e3ZhbHVlLnVuaXR9fTwvZGl2PlxyXG48L25neC1nYXVnZS12YWx1ZT5cclxuPG5neC1nYXVnZS1hcHBlbmQ+XHJcbiAgICBcclxuPC9uZ3gtZ2F1Z2UtYXBwZW5kPlxyXG48bmd4LWdhdWdlLWxhYmVsPlxyXG4gICAgXHJcbiAgICA8ZGl2Pnt7dmFsdWUubmFtZX19PC9kaXY+XHJcbjwvbmd4LWdhdWdlLWxhYmVsPlxyXG48L25neC1nYXVnZT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwicmFkaWFsX2dhdWdlXCI7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6IERhc2hib2FyZFNpemVzO1xyXG4gIHByb3RlY3RlZCAgdW5pdFNpemU6bnVtYmVyID0gMTEwO1xyXG4gIHB1YmxpYyBudW1iZXJGb3JtYXQgPSBcIjEuMi0yXCI7XHJcbiAgY2FudmFzSWQ6c3RyaW5nPVwiXCI7XHJcbiAgZGF0YUhpZ2hsaWdodHM6YW55PXt9O1xyXG4gIHByaXZhdGUgZ2F1Z2U6YW55PW51bGw7XHJcbiAgcHJpdmF0ZSBnYXVnZVR5cGVzOnN0cmluZ1tdPVsncmFkaWFsX2dhdWdlJywndmVydGljYWxfbGluZWFyX2dhdWdlJywgJ2hvcml6b250YWxfbGluZWFyX2dhdWdlJywgJ2NvbXBhc3MnXVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmLCBwcml2YXRlIHRlbXBsYXRlU2VydmljZTpLZXJ2aVRlbXBsYXRlU2VydmljZSApIHsgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvcihzdHlsZSxzZWxlY3Rvcil7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3R5bGUsc2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzOyAgXHJcbiAgIFxyXG5cclxuICAgIHRoaXMubnVtYmVyRm9ybWF0ID0gdGhpcy5saW5rUGFyYW1ldGVycy5taW5JbnRlZ2VyRGlnaXRzICsgXCIuXCIgKyB0aGlzLmxpbmtQYXJhbWV0ZXJzLm1pbkZyYWN0aW9uRGlnaXRzICsgXCItXCIgKyB0aGlzLmxpbmtQYXJhbWV0ZXJzLm1heEZyYWN0aW9uRGlnaXRzXHJcblx0XHRcdFxyXG4gICAgdGhpcy5jYW52YXNJZD10aGlzLnRlbXBsYXRlU2VydmljZS5tYWtlSWQoKTtcclxuICAgIFxyXG4gICAgdmFyIHdhcm5pbmdDb2xvciA9IHRoaXMuY29sb3IoXCJjb2xvclwiLFwiLnNlbnNvci10ZW1wbGF0ZSAuc2Vuc29yLXdhcm5pbmdcIik7XHJcbiAgICB2YXIgZmF0YWxDb2xvciA9IHRoaXMuY29sb3IoXCJjb2xvclwiLFwiLnNlbnNvci10ZW1wbGF0ZSAuc2Vuc29yLWZhdGFsXCIpO1xyXG4gICAgdmFyIG5vcm1hbENvbG9yID0gdGhpcy5jb2xvcihcImNvbG9yXCIsXCIuc2Vuc29yLXRlbXBsYXRlIC5zZW5zb3ItbWFqb3ItdGlja3NcIik7XHJcbiAgICBcclxuICAgIHZhciBmcm9tTGltaXQ9c2VsZi52YWx1ZS5taW5WYWx1ZTtcclxuICAgIFxyXG4gICAgdGhpcy5kYXRhSGlnaGxpZ2h0c1tzZWxmLnZhbHVlLm1pblZhbHVlXT17Y29sb3I6bm9ybWFsQ29sb3J9XHJcbiAgICBmb3IodmFyIHJhbmdlIG9mIHNlbGYudmFsdWUucmFuZ2VzKXtcclxuICAgICAgaWYgKHJhbmdlLnR5cGUgPT0gVmFsdWVSYW5nZVR5cGUuZXJyb3IpXHJcbiAgICAgICAgdGhpcy5kYXRhSGlnaGxpZ2h0c1tyYW5nZS5zdGFydF09e2NvbG9yOiBmYXRhbENvbG9yfTtcclxuICAgICAgZWxzZSBpZiAocmFuZ2UudHlwZSA9PSBWYWx1ZVJhbmdlVHlwZS53YXJuaW5nKVxyXG4gICAgICAgIHRoaXMuZGF0YUhpZ2hsaWdodHNbcmFuZ2Uuc3RhcnRdPXtjb2xvcjp3YXJuaW5nQ29sb3J9O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5kYXRhSGlnaGxpZ2h0c1tyYW5nZS5zdGFydF09e2NvbG9yOm5vcm1hbENvbG9yfTtcclxuICAgICAgdGhpcy5kYXRhSGlnaGxpZ2h0c1tyYW5nZS5lbmRdPXtjb2xvcjpub3JtYWxDb2xvcn1cclxuICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJkclwiLCBzZWxmLnZhbHVlLnJhbmdlcywgdGhpcy5kYXRhSGlnaGxpZ2h0cyk7XHJcbiAgICAgIHZhciBuc3Bhbj0oc2VsZi52YWx1ZS5tYXhWYWx1ZS1zZWxmLnZhbHVlLm1pblZhbHVlKTtcclxuICAgICAgdmFyIHRpY2tTcGFuPW5zcGFuLzEwO1xyXG4gICAgICB2YXIgdGlja3M9W107XHJcbiAgICAgIGZvcih2YXIgbj1zZWxmLnZhbHVlLm1pblZhbHVlOyhuPD1zZWxmLnZhbHVlLm1heFZhbHVlKTtuKz10aWNrU3BhbilcclxuICAgICAgICB0aWNrcy5wdXNoKG4pO1xyXG5cclxuICAgICAgdmFyIHNldHRpbmdzPXtcclxuICAgICAgICAgIHJlbmRlclRvOiBzZWxmLmNhbnZhc0lkLFxyXG4gICAgICAgICAgdmFsdWU6c2VsZi52YWx1ZS52YWx1ZSQudmFsdWUsXHJcbiAgICAgICAgICB1bml0czogc2VsZi52YWx1ZS51bml0LFxyXG4gICAgICAgICAgdGl0bGU6IHNlbGYubGlua1BhcmFtZXRlcnMubGFiZWwsXHJcbiAgICAgICAgICBtaW5WYWx1ZTogc2VsZi52YWx1ZS5taW5WYWx1ZSxcclxuICAgICAgICAgIG1heFZhbHVlOiBzZWxmLnZhbHVlLm1heFZhbHVlLFxyXG4gICAgICAgICAgaGlnaGxpZ2h0czogdGhpcy5kYXRhSGlnaGxpZ2h0cyxcclxuICAgICAgICAgIG1ham9yVGlja3M6dGlja3MsXHJcbiAgICAgICAgICBjb2xvclBsYXRlOnRoaXMuY29sb3IoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCIuc2Vuc29yLXRlbXBsYXRlXCIpLFxyXG4gICAgICAgICAgYm9yZGVyczpmYWxzZSxcclxuICAgICAgICAgIC8vY29sb3JCb3JkZXJPdXRlcjpcIlwiLFxyXG4gICAgICAgICAgLy9jb2xvckJvcmRlck1pZGRsZTpcIlwiLFxyXG4gICAgICAgICAgLy9jb2xvckJvcmRlcklubmVyOlwiXCIsXHJcbiAgICAgICAgICBjb2xvck1ham9yVGlja3M6dGhpcy5jb2xvcihcImNvbG9yXCIsXCIuc2Vuc29yLXRlbXBsYXRlIC5zZW5zb3ItbWFqb3ItdGlja3NcIiksXHJcbiAgICAgICAgICBjb2xvck1pbm9yVGlja3M6dGhpcy5jb2xvcihcImNvbG9yXCIsXCIuc2Vuc29yLXRlbXBsYXRlIC5zZW5zb3ItbWlub3ItdGlja3NcIiksXHJcbiAgICAgICAgICBjb2xvclRpdGxlOnRoaXMuY29sb3IoXCJjb2xvclwiLFwiLnNlbnNvci10ZW1wbGF0ZSAuc2Vuc29yLXRpdGxlXCIpLFxyXG4gICAgICAgICAgY29sb3JVbml0czp0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5zZW5zb3ItdGVtcGxhdGUgLnNlbnNvci11bml0c1wiKSxcclxuICAgICAgICAgIGNvbG9yTnVtYmVyczp0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5zZW5zb3ItdGVtcGxhdGUgLnNlbnNvci1udW1iZXJzXCIpLFxyXG4gICAgICAgICAgY29sb3JOZWVkbGVTdGFydDp0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5zZW5zb3ItdGVtcGxhdGUgLnNlbnNvci1uZWVkbGUtc3RhcnRcIiksXHJcbiAgICAgICAgICBjb2xvck5lZWRsZUVuZDp0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5zZW5zb3ItdGVtcGxhdGUgLnNlbnNvci1uZWVkbGUtZW5kXCIpLFxyXG4gICAgICAgICAgdmFsdWVCb3g6ZmFsc2UsXHJcbiAgICAgICAgICBhbmltYXRpb25SdWxlOlwiYm91bmNlXCIsXHJcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjpcIjUwMFwiLFxyXG4gICAgICAgICAgZm9udFZhbHVlOlwiTGVkXCIsXHJcbiAgICAgICAgICBhbmltYXRlZFZhbHVlOlwidHJ1ZVwiXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSwgRGFzaGJvYXJkU2l6ZXMgICB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlLCBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIENoYXJ0OmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jaGFydCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6MTAwJVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuY2hhcnRCdXR0b25zIHx8IGxpbmtQYXJhbWV0ZXJzLmxhYmVsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5sYWJlbFwiPlxyXG4gICAgICAgICAgICB7e2xpbmtQYXJhbWV0ZXJzLmxhYmVsfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuY2hhcnRCdXR0b25zPT0ndG9wJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbVwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIChjbGljaykgPSBcIm1vdmVQZXJpb2QoLTEpXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKGNsaWNrKSA9IFwibW92ZVBlcmlvZCgxKVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIHRpdGxlPVwibGl2ZVwiIChjbGljaykgPSBcImdvTGl2ZSgpXCI+PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZFBlcmlvZFRleHR9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgKGNsaWNrKT1cInNlbGVjdFBlcmlvZCgnNW1pbicpXCIgPjUgbWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJzE1bWluJylcIiA+MTUgbWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJzMwbWluJylcIiA+MzAgbWluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJ2hvdXInKVwiID5Ib3VyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJ2RheScpXCI+RGF5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJ3dlZWsnKVwiPldlZWs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgKGNsaWNrKT1cInNlbGVjdFBlcmlvZCgnbW9udGgnKVwiPk1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJ2hvdXInKVwiPlllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgc3R5bGU9XCJcIj5cclxuICAgICAgICA8Y2FudmFzIGlkPVwie3tjYW52YXNJZH19XCIgY2xhc3M9XCJzZW5zb3ItY2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuY2hhcnRCdXR0b25zICYmIGxpbmtQYXJhbWV0ZXJzLmNoYXJ0QnV0dG9ucyE9J3RvcCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAoY2xpY2spID0gXCJtb3ZlUGVyaW9kKC0xKVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIChjbGljaykgPSBcIm1vdmVQZXJpb2QoMSlcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiB0aXRsZT1cImxpdmVcIiAoY2xpY2spID0gXCJnb0xpdmUoKVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWRQZXJpb2RUZXh0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJzVtaW4nKVwiID41IG1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwic2VsZWN0UGVyaW9kKCcxNW1pbicpXCIgPjE1IG1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwic2VsZWN0UGVyaW9kKCczMG1pbicpXCIgPjMwIG1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwic2VsZWN0UGVyaW9kKCdob3VyJylcIiA+SG91cjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwic2VsZWN0UGVyaW9kKCdkYXknKVwiPkRheTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwic2VsZWN0UGVyaW9kKCd3ZWVrJylcIj5XZWVrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiIChjbGljayk9XCJzZWxlY3RQZXJpb2QoJ21vbnRoJylcIj5Nb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwic2VsZWN0UGVyaW9kKCdob3VyJylcIj5ZZWFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOm51bWJlcjtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIHByaXZhdGUgIHVuaXRTaXplOm51bWJlciA9IDE1MDtcclxuICBjYW52YXNJZDpzdHJpbmc9XCJcIjtcclxuICBwcml2YXRlIGNoYXJ0OmFueT1udWxsO1xyXG4gIHByaXZhdGUgY2hhcnREYXRhID0gW107XHJcbiAgc2VsZWN0ZWRQZXJpb2RUZXh0OnN0cmluZyA9IFwiSG91clwiO1xyXG4gIHNlbGVjdGVkUGVyaW9kOnN0cmluZyA9IFwiaG91clwiO1xyXG4gIHBlcmlvZFN0YXJ0OiBEYXRlID0gbnVsbDtcclxuICBwZXJpb2RFbmQ6IERhdGUgPSBudWxsO1xyXG4gIHVwZGF0ZUNoYXJ0OmJvb2xlYW4gPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZSwgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6S2VydmlUZW1wbGF0ZVNlcnZpY2UgKSB7ICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3Ioc3R5bGUsc2VsZWN0b3Ipe1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldENvbG9yKHN0eWxlLHNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWRQZXJpb2RUZXh0KHNlbGYubGlua1BhcmFtZXRlcnMuY2hhcnRJbnRlcnZhbCk7XHJcbiAgICB0aGlzLmNhbnZhc0lkPXRoaXMudGVtcGxhdGVTZXJ2aWNlLm1ha2VJZCgpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgIGlmIChzZWxmLmNoYXJ0KXtcclxuICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgaWYgKHNlbGYudXBkYXRlQ2hhcnQpe1xyXG4gICAgICAgICAgICAgIHZhciBkcz1zZWxmLmNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YTtcclxuICAgICAgICAgICAgICBzZWxmLnBlcmlvZEVuZCA9IHNlbGYudmFsdWUudmFsdWVUUztcclxuICAgICAgICAgICAgICBkcy5wdXNoKHsgeDogc2VsZi52YWx1ZS52YWx1ZVRTLCB5OiB2IH0pXHJcbiAgICAgICAgICAgICAgc2VsZi5jbGVhbkRhdGEoKTtcclxuICAgICAgICAgICAgICBzZWxmLmNoYXJ0LnJlbmRlcigpOyAgXHJcbiAgICAgICAgICAgICAgc2VsZi5jaGFydC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfWNhdGNoKGV4KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjZHhcIixleCk7ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjZFwiLCBzZWxmLmNoYXJ0RGF0YSk7XHJcbiAgICAgICAgdmFyIGN0eCA9IGpRdWVyeShcIiNcIitzZWxmLmNhbnZhc0lkKTtcclxuICAgICAgICBzZWxmLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW8gOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzZWxmLmNoYXJ0RGF0YSxcclxuICAgICAgICAgICAgICAgIGZpbGw6IHNlbGYubGlua1BhcmFtZXRlcnMuY2hhcnRGaWxsLFxyXG4gICAgICAgICAgICAgICAgLy9saW5lVGVuc2lvbjogMC41LFxyXG4gICAgICAgICAgICAgICAgLy9ib3JkZXJDb2xvcjogc2VsZi5jb2xvcihcImJvcmRlci1jb2xvclwiLFwiLnNlbnNvci1jaGFydFwiKSxcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogc2VsZi5saW5rUGFyYW1ldGVycy5jaGFydFBvaW50LFxyXG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuMSlcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMC4xKVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6M1xyXG4gICAgICAgICAgICAvKmJvcmRlckNvbG9yOiBzZWxmLmNvbG9yKFwiYm9yZGVyLWNvbG9yXCIsXCIuc2Vuc29yLWNoYXJ0XCIpLFxyXG4gICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxyXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IHNlbGYuY29sb3IoXCJjb2xvclwiLFwiLnNlbnNvci1jaGFydFwiKSxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBzZWxmLmNvbG9yKFwiY29sb3JcIixcIi5zZW5zb3ItY2hhcnQgLnNwb3RcIiksXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogc2VsZi5jb2xvcihcImJvcmRlci1jb2xvclwiLFwiLnNlbnNvci1jaGFydCAuc3BvdFwiKSxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLCovXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy9tYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgICAgICBwYW46IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBtb2RlOiAneHknXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBtb2RlOiAneHknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsLy9zZWxmLnBhcmFtZXRlcnMubGFiZWwhPW51bGwsXHJcbiAgICAgICAgICAgICAgLy90ZXh0OiBzZWxmLnBhcmFtZXRlcnMubGFiZWxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxlbWVudHM6e1xyXG4gICAgICAgICAgICAgIHBvaW50OntcclxuICAgICAgICAgICAgICAgIHJhZGl1czowXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6e1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCIsXHJcbiAgICAgICAgICAgICAgICAgIC8vemVyb0xpbmVDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICB1bml0OidzZWNvbmQnLFxyXG4gICAgICAgICAgICAgICAgdW5pdFN0ZXBTaXplOjEyMCxcclxuICAgICAgICAgICAgICAgIHRpbWU6e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICdtaWxsaXNlY29uZCc6ICdNTU0gREQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWNvbmQnOiAnSEg6bW06c3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtaW51dGUnOiAnSEg6bW06c3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdob3VyJzogJ0hIOm1tOnNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGF5JzogJ01NTSBERCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dlZWsnOiAnTU1NIEREJyxcclxuICAgICAgICAgICAgICAgICAgICAnbW9udGgnOiAnTU1NIEREJyxcclxuICAgICAgICAgICAgICAgICAgICAncXVhcnRlcic6ICdNTU0gREQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd5ZWFyJzogJ01NTSBERCcsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aWNrczp7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDEyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzZWxmLmxpbmtQYXJhbWV0ZXJzLmNoYXJ0R3JpZCxcclxuICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgLy9sYWJlbFN0cmluZzogJ0RhdGUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZm9udENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYXg6IHNlbGYudmFsdWUubWF4VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9taW46IHNlbGYudmFsdWUubWluVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9mb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zdGVwU2l6ZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAvL2JlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6e1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYubGlua1BhcmFtZXRlcnMuY2hhcnRHcmlkLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAvL2xhYmVsU3RyaW5nOiAndmFsdWUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgc2VsZi5zZWxlY3RQZXJpb2Qoc2VsZi5saW5rUGFyYW1ldGVycy5jaGFydEludGVydmFsKTtcclxuICAgICAgICB9LDApXHJcblxyXG4gICAgICB9LCAwKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdvTGl2ZSgpe1xyXG4gICAgdGhpcy5zZWxlY3RQZXJpb2QodGhpcy5zZWxlY3RlZFBlcmlvZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVBlcmlvZChtb3ZlbWVudDpudW1iZXIpe1xyXG4gICAgdGhpcy51cGRhdGVDaGFydCA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBwZXJpb2RTdGFydCA9IHRoaXMucGVyaW9kU3RhcnQ7XHJcbiAgICB2YXIgcGVyaW9kRW5kID0gdGhpcy5wZXJpb2RFbmQ7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwiNW1pblwiKXtcclxuICAgICAgcGVyaW9kRW5kLnNldE1pbnV0ZXMocGVyaW9kRW5kLmdldE1pbnV0ZXMoKSArIDUgKiBtb3ZlbWVudClcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0TWludXRlcyhwZXJpb2RFbmQuZ2V0TWludXRlcygpIC0gNSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBlcmlvZD09XCIxNW1pblwiKXtcclxuICAgICAgcGVyaW9kRW5kLnNldE1pbnV0ZXMocGVyaW9kRW5kLmdldE1pbnV0ZXMoKSArIDE1ICogbW92ZW1lbnQpXHJcbiAgICAgIHBlcmlvZFN0YXJ0LnNldE1pbnV0ZXMocGVyaW9kRW5kLmdldE1pbnV0ZXMoKSAtIDE1ICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwiMzBtaW5cIil7XHJcbiAgICAgIHBlcmlvZEVuZC5zZXRNaW51dGVzKHBlcmlvZEVuZC5nZXRNaW51dGVzKCkgKyAzMCAqIG1vdmVtZW50KVxyXG4gICAgICBwZXJpb2RTdGFydC5zZXRNaW51dGVzKHBlcmlvZEVuZC5nZXRNaW51dGVzKCkgLSAzMCApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUGVyaW9kPT1cImhvdXJcIil7XHJcbiAgICAgIHBlcmlvZEVuZC5zZXRIb3VycyhwZXJpb2RFbmQuZ2V0SG91cnMoKSArIG1vdmVtZW50KVxyXG4gICAgICBwZXJpb2RTdGFydC5zZXRIb3VycyhwZXJpb2RFbmQuZ2V0SG91cnMoKSAtMSApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUGVyaW9kPT1cImRheVwiKXtcclxuICAgICAgcGVyaW9kRW5kLnNldEhvdXJzKHRoaXMucGVyaW9kRW5kLmdldERheSgpICsgMjQgKiBtb3ZlbWVudClcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnModGhpcy5wZXJpb2RFbmQuZ2V0RGF5KCkgLSAyNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwid2Vla1wiKXtcclxuICAgICAgcGVyaW9kRW5kLnNldEhvdXJzKHRoaXMucGVyaW9kRW5kLmdldERheSgpICsgNyAqIDI0ICogbW92ZW1lbnQpXHJcbiAgICAgIHBlcmlvZFN0YXJ0LnNldEhvdXJzKHRoaXMucGVyaW9kRW5kLmdldERheSgpICsgMTQgKiAgMjQgKiBtb3ZlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwibW9udGhcIil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUGVyaW9kPT1cInllYXJcIil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgdGhpcy5wZXJpb2RTdGFydCA9IHBlcmlvZFN0YXJ0O1xyXG4gICAgdGhpcy5wZXJpb2RFbmQgPSBwZXJpb2RFbmQ7XHJcbiAgICBcclxuICAgIHRoaXMubG9hZFBlcmlvZCgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgc2VsZWN0UGVyaW9kKHBlcmlvZCl7XHJcbiAgICB0aGlzLnVwZGF0ZUNoYXJ0PXRydWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkUGVyaW9kID0gcGVyaW9kO1xyXG4gICAgdmFyIHBlcmlvZEVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgcGVyaW9kU3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIGlmIChwZXJpb2Q9PVwiNW1pblwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0TWludXRlcyhwZXJpb2RFbmQuZ2V0TWludXRlcygpIC0gNSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICBpZiAocGVyaW9kPT1cIjE1bWluXCIpe1xyXG4gICAgICBwZXJpb2RTdGFydC5zZXRNaW51dGVzKHBlcmlvZEVuZC5nZXRNaW51dGVzKCkgLSAxNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCIzMG1pblwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0TWludXRlcyhwZXJpb2RFbmQuZ2V0TWludXRlcygpIC0gMzApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2Q9PVwiaG91clwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnMocGVyaW9kRW5kLmdldEhvdXJzKCkgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVyaW9kPT1cImRheVwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnMocGVyaW9kRW5kLmdldEhvdXJzKCkgLSAyNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCJ3ZWVrXCIpe1xyXG4gICAgICBwZXJpb2RTdGFydC5zZXRIb3VycyhwZXJpb2RFbmQuZ2V0SG91cnMoKSAtIDcgKiAyNCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCJtb250aFwiKXtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCJ5ZWFyXCIpe1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIHRoaXMucGVyaW9kU3RhcnQgPSBwZXJpb2RTdGFydDtcclxuICAgIHRoaXMucGVyaW9kRW5kID0gcGVyaW9kRW5kO1xyXG4gICAgdGhpcy5zZXRTZWxlY3RlZFBlcmlvZFRleHQocGVyaW9kKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJzcFwiLCB0aGlzLnBlcmlvZFN0YXJ0LCB0aGlzLnBlcmlvZEVuZCk7XHJcbiAgICB0aGlzLmxvYWRQZXJpb2QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZFBlcmlvZFRleHQocGVyaW9kKXtcclxuICAgIGlmIChwZXJpb2Q9PVwiNW1pblwiKXtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZFRleHQ9XCI1IG1pblwiO1xyXG4gICAgfSAgXHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCIxNW1pblwiKXtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZFRleHQ9XCIxNSBtaW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVyaW9kPT1cIjMwbWluXCIpe1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUGVyaW9kVGV4dD1cIjMwIG1pblwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2Q9PVwiaG91clwiKXtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZFRleHQ9XCJIb3VyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCJkYXlcIil7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQZXJpb2RUZXh0PVwiRGF5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZD09XCJ3ZWVrXCIpe1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUGVyaW9kVGV4dD1cIldlZWtcIlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2Q9PVwibW9udGhcIil7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQZXJpb2RUZXh0PVwiTW9udGhcIlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2Q9PVwieWVhclwiKXtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZFRleHQ9XCJZZWFyXCJcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBlcmlvZExpbWl0KCl7XHJcbiAgICB2YXIgcGVyaW9kU3RhcnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwiNW1pblwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0TWludXRlcyhwZXJpb2RTdGFydC5nZXRNaW51dGVzKCkgLSA1KTtcclxuICAgIH0gIFxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUGVyaW9kPT1cIjE1bWluXCIpe1xyXG4gICAgICBwZXJpb2RTdGFydC5zZXRNaW51dGVzKHBlcmlvZFN0YXJ0LmdldE1pbnV0ZXMoKSAtIDE1KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBlcmlvZD09XCIzMG1pblwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0TWludXRlcyhwZXJpb2RTdGFydC5nZXRNaW51dGVzKCkgLSAzMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwiaG91clwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnMocGVyaW9kU3RhcnQuZ2V0SG91cnMoKSAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkUGVyaW9kPT1cImRheVwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnMocGVyaW9kU3RhcnQuZ2V0SG91cnMoKSAtIDI0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBlcmlvZD09XCJ3ZWVrXCIpe1xyXG4gICAgICBwZXJpb2RTdGFydC5zZXRIb3VycyhwZXJpb2RTdGFydC5nZXRIb3VycygpIC0gNyAqIDI0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBlcmlvZD09XCJtb250aFwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnMocGVyaW9kU3RhcnQuZ2V0SG91cnMoKSAtIDcgKiAyNCozMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQZXJpb2Q9PVwieWVhclwiKXtcclxuICAgICAgcGVyaW9kU3RhcnQuc2V0SG91cnMocGVyaW9kU3RhcnQuZ2V0SG91cnMoKSAtIDcgKiAyNCozNjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcGVyaW9kU3RhcnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFBlcmlvZCgpe1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImxwXCIsIHRoaXMucGVyaW9kU3RhcnQsIHRoaXMucGVyaW9kRW5kKTtcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRRdWVyeShcImdldFNlbnNvckRhdGFcIiwgdGhpcy52YWx1ZS5pZCwgdGhpcy5wZXJpb2RTdGFydC50b0lTT1N0cmluZygpLCB0aGlzLnBlcmlvZEVuZC50b0lTT1N0cmluZygpLCBmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3NkXCIsIHJlc3VsdHMpO1xyXG4gICAgICAgIHZhciBzZW5zb3JEYXRhID0gcmVzdWx0cztcclxuICAgICAgICBzZWxmLmNoYXJ0RGF0YS5sZW5ndGggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyAoaSA8IHNlbnNvckRhdGEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YUl0ZW0gPSBzZW5zb3JEYXRhW2ldXHJcbiAgICAgICAgICBzZWxmLmNoYXJ0RGF0YS5wdXNoKHsgeDogbmV3IERhdGUoZGF0YUl0ZW0udHMgKyBcIiB1dGNcIiksIHk6IGRhdGFJdGVtLnZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmNoYXJ0LnJlbmRlcigpOyAgXHJcbiAgICAgICAgc2VsZi5jaGFydC51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkRhdGEoKXtcclxuICAgIGlmKHRoaXMudXBkYXRlQ2hhcnQpe1xyXG4gICAgICB2YXIgZG9DbGVhbiA9IHRydWU7XHJcbiAgICAgIHZhciBsaW1pdFRTID0gdGhpcy5nZXRQZXJpb2RMaW1pdCgpO1xyXG4gICAgICB2YXIgZHMgPSB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YVxyXG4gICAgICB3aGlsZSAoIGRzLmxlbmd0aD4wICYmIGRvQ2xlYW4pe1xyXG4gICAgICAgIGlmIChkc1swXS54IDwgbGltaXRUUylcclxuICAgICAgICAgIGRzLnNoaWZ0KCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgZG9DbGVhbiA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzIH0gZnJvbSAna2VydmktanMnXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1zd2l0Y2hidXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIiFpbmxpbmVcIiBjbGFzcz1cIiBcIiA+XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cIlwiPlxyXG48L2Rpdj4gICAgXHJcbjxkaXYgKm5nSWY9XCJpbmxpbmVcIiBjbGFzcz1cIlwiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtZmxleFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJcIj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpdGNoQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGlzUmVhZHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pe1xyXG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaXNSZWFkeSl7XHJcbiAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICBqUXVlcnkoJ2lucHV0Jyx0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdvbicpXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBqUXVlcnkoJ2lucHV0JywgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnb2ZmJylcclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQE91dHB1dCgpIGJ1dHRvblN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgc3RhdGU6Ym9vbGVhbiA9IGZhbHNlXHJcbiAgcHVibGljIHZhbHVlU3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgcHVibGljIHdpZHRoOnN0cmluZztcclxuICBwdWJsaWMgaGVpZ2h0OnN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBwdWJsaWMgcHJlc3MoKSB7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQodHJ1ZSk7XHJcbiAgICAgLy90aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLnZhbHVlLmNvbW1hbmQsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbGVhc2UoKSB7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQoZmFsc2UpO1xyXG4gICAgLy90aGlzLnBhcmVudC5yZWxlYXNlKCkgXHJcbiAgICAvL3RoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMudmFsdWUuY29tbWFuZCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzKXtcclxuICAgIC8vICB0aGlzLnBhcmFtZXRlcnMgPSB0aGlzLnZhbHVlLnVpO1xyXG5cclxuICAgIGlmICghc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aClcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoV2lkdGg7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMud2lkdGggPSBzZWxmLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbldpZHRoO1xyXG5cclxuICAgIGlmICghc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25IZWlnaHQpXHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hIZWlnaHQ7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25IZWlnaHQ7XHJcblxyXG4gIH0gZWxzZXtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLmRhc2hib2FyZFNpemVzLnN3aXRjaFdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhc2hib2FyZFNpemVzLnN3aXRjaEhlaWdodDtcclxuICB9XHJcblxyXG4gICAgdmFyIG9uVGV4dD0gdGhpcy5saW5rUGFyYW1ldGVycyAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLm9uSWNvbiA/IFwiPGkgY2xhc3M9J2ZhIGZhLVwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5vbkljb24gKyBcIic+PC9pPiBcIiA6IFwiXCI7IFxyXG4gICAgdmFyIG9mZlRleHQ9IHRoaXMubGlua1BhcmFtZXRlcnMgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5vZmZJY29uID8gXCI8aSBjbGFzcz0nZmEgZmEtXCIgKyB0aGlzLmxpbmtQYXJhbWV0ZXJzLm9mZkljb24gKyBcIic+PC9pPiBcIiA6IFwiXCI7IFxyXG4gICAgXHJcbiAgICBvblRleHQrPSB0aGlzLmxpbmtQYXJhbWV0ZXJzICYmIHRoaXMubGlua1BhcmFtZXRlcnMub25UZXh0ID8gdGhpcy5saW5rUGFyYW1ldGVycy5vblRleHQgOiBcIlwiOyBcclxuICAgIG9mZlRleHQrPSB0aGlzLmxpbmtQYXJhbWV0ZXJzICYmIHRoaXMubGlua1BhcmFtZXRlcnMub2ZmVGV4dCA/IHRoaXMubGlua1BhcmFtZXRlcnMub2ZmVGV4dCA6IFwiXCI7IFxyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGpRdWVyeSgnaW5wdXQnLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKHtcclxuICAgICAgICAgICdvbic6IG9uVGV4dCxcclxuICAgICAgICAgICdvZmYnOiBvZmZUZXh0LFxyXG4gICAgICAgICAgJ29uc3R5bGUnOiBcIm9uXCIsXHJcbiAgICAgICAgICAnb2Zmc3R5bGUnOiBcIm9mZlwiLFxyXG4gICAgICAgICAgXCJ3aWR0aFwiOnNlbGYud2lkdGgsXHJcbiAgICAgICAgICBcImhlaWdodFwiOnNlbGYuaGVpZ2h0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUpXHJcbiAgICAgICAgICBqUXVlcnkoJ2lucHV0Jywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnb24nKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGpRdWVyeSgnaW5wdXQnLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdvZmYnKVxyXG5cclxuICAgICAgICBqUXVlcnkoJ2lucHV0Jywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgc3RhdGUgPSBqUXVlcnkoJ2lucHV0Jywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnByb3AoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgIGlmIChzdGF0ZSAmJiAhc2VsZi5zdGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5idXR0b25TdGF0ZS5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgZWxzZSBpZiAoIXN0YXRlICYmIHNlbGYuc3RhdGUpXHJcbiAgICAgICAgICAgIHNlbGYuYnV0dG9uU3RhdGUuZW1pdChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICBcclxuICAgIH0sIDApO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiAqbmdJZj1cIiFpbmxpbmVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XCIgdGl0bGU9XCJ7eyh0aXRsZSB8IHRyYW5zbGF0ZSkgfX1cIiBbc3R5bGUubWluLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBbbmdDbGFzc109XCJ7J2J0bi1wcmltYXJ5LWhvdmVyJzogdmFsdWUgfVwiIChtb3VzZWRvd24pPVwicHJlc3MoKVwiIChtb3VzZXVwKT1cInJlbGVhc2UoKVwiIFthdHRyLnRpdGxlXT1cInRpdGxlXCI+XHJcbiAgICA8aSAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkljb25cIiBjbGFzcz0nZmEgZmEte3tsaW5rUGFyYW1ldGVycy5idXR0b25JY29ufX0nPjwvaT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5idXR0b25UZXh0XCIgPnt7IGxpbmtQYXJhbWV0ZXJzLmJ1dHRvblRleHR9fTwvbmctY29udGFpbmVyPlxyXG48L2J1dHRvbj5cclxuXHJcbjxidXR0b24gKm5nSWY9XCJpbmxpbmVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHRpdGxlPVwie3t0aXRsZX19XCIgW25nQ2xhc3NdPVwieydidG4tcHJpbWFyeS1ob3Zlcic6dmFsdWV9XCIgKG1vdXNlZG93bik9XCJwcmVzcygpXCIgKG1vdXNldXApPVwicmVsZWFzZSgpXCIgW2F0dHIudGl0bGVdPVwidGl0bGVcIj5cclxuICAgIDxpICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuYnV0dG9uSWNvblwiIGNsYXNzPSdmYSBmYS17eyBsaW5rUGFyYW1ldGVycy5idXR0b25JY29uIH19Jz48L2k+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuYnV0dG9uVGV4dFwiID57eyBsaW5rUGFyYW1ldGVycy5idXR0b25UZXh0fX08L25nLWNvbnRhaW5lcj5cclxuPC9idXR0b24+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IEJvb2xlYW4gPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQElucHV0KCkgdGl0bGU6c3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBidXR0b25TdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgd2lkdGg6c3RyaW5nO1xyXG4gIHB1YmxpYyBoZWlnaHQ6c3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyAgXHJcbiAgfVxyXG4gXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7IFxyXG4gICAgaWYgKHNlbGYubGlua1BhcmFtZXRlcnMpe1xyXG4gICAgICBcclxuICAgICAgaWYgKCFzZWxmLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbldpZHRoKVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhc2hib2FyZFNpemVzLmJ1dHRvbldpZHRoO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGg7XHJcblxyXG4gICAgICBpZiAoIXNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uSGVpZ2h0KVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5idXR0b25IZWlnaHQ7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uSGVpZ2h0O1xyXG5cclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuYnV0dG9uV2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5idXR0b25IZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlc3MoKSB7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVsZWFzZSgpIHtcclxuICAgIHRoaXMuYnV0dG9uU3RhdGUuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLW1wZWctdmlld2VyJyxcclxuICB0ZW1wbGF0ZTogYDxpbWcgKGxvYWQpPVwiaW1hZ2VSZWFkeSgpXCIgY2xhc3M9XCJjYW1JbWFnZVwiIHNyYz1cInt7Y2FtZXJhU291cmNlfX1cIiBbc3R5bGUuaGVpZ2h0LiVdPVwiaGVpZ2h0XCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIj5cclxuYCxcclxuICBzdHlsZXM6IFtgI3ZpZGVvLXZpZXdlcnttYXJnaW4tdG9wOi0yMHB4fS5jYW0tcGFkLWFyZWF7ei1pbmRleDoxMjAwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDoyMDBweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjM4OXB4O3RvcDoxMzJweDtjb2xvcjojZmZmfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNUEVHVmlld2VyQ29tcG9uZW50e1xyXG4gIEBJbnB1dCgpIGNhbWVyYVNvdXJjZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoOm51bWJlciA9IG51bGw7XHJcbiAgQElucHV0KCkgaGVpZ2h0Om51bWJlciA9IG51bGw7XHJcbiAgQE91dHB1dCgpIGltYWdlTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHByaXZhdGUgZmlyc3RMb2FkPXRydWU7XHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuXHJcbiAgaW1hZ2VSZWFkeSgpe1xyXG4gICAgaWYgKHRoaXMuZmlyc3RMb2FkKXtcclxuICAgICAgICB0aGlzLmZpcnN0TG9hZD1mYWxzZTtcclxuICAgICAgICB0aGlzLmltYWdlTG9hZGVkLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDtcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1kYXRldGltZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiID5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBkYXRlXCIgaWQ9XCJkYXRldGltZXBpY2tlcl97e2lkfX1cIiBkYXRhLXRhcmdldC1pbnB1dD1cIm5lYXJlc3RcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBkYXRldGltZXBpY2tlci1pbnB1dFwiICBbYXR0ci5kYXRhLXRhcmdldF09XCInI2RhdGV0aW1lcGlja2VyXycgKyBpZFwiLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgW2F0dHIuZGF0YS10YXJnZXRdPVwiJyNkYXRldGltZXBpY2tlcl8nICsgaWRcIiBkYXRhLXRvZ2dsZT1cImRhdGV0aW1lcGlja2VyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidHlwZT09J2RhdGV0aW1lJyB8fCB0eXBlPT0nZGF0ZSdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0eXBlPT0ndGltZSdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzcz1cImZhIGZhLWNsb2NrXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzZXQgZGF0ZVRpbWUodjpEYXRlKXtcclxuICAgIHRoaXMuZGF0ZXRpbWVWYWx1ZSA9IHY7XHJcbiAgICBpZiAodGhpcy5pc1JlYWR5KVxyXG4gICAgICBqUXVlcnkoJy5kYXRlJywgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmRhdGEoXCJkYXRldGltZXBpY2tlclwiKS5kYXRlKG1vbWVudCh2KS50b0RhdGUoKSk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHR5cGU6c3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBkYXRlVGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyXHJcbiAgaWQ6c3RyaW5nID0gbnVsbDtcclxuICBkYXRldGltZVZhbHVlOkRhdGUgPSBudWxsO1xyXG4gIHByaXZhdGUgaXNSZWFkeT1mYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyAgXHJcbiAgfVxyXG5cclxuICBndWlkKCkge1xyXG4gICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmlkID0gdGhpcy5ndWlkKCk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7IFxyXG4gICAgXHJcbiAgICAvL2lmIChzZWxmLnZhbHVlLnZhbHVlKVxyXG4gICAgLy8gIHNlbGYuZGF0ZXRpbWV2YWx1ZSA9IHNlbGYudmFsdWUudmFsdWUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgbWRhdGUgPSBtb21lbnQoc2VsZi5kYXRldGltZVZhbHVlKTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZGF0ZTptZGF0ZS50b0RhdGUoKSxcclxuICAgICAgICBmb3JtYXQ6c2VsZi5mb3JtYXQsXHJcbiAgICAgICAgYnV0dG9uczp7XHJcbiAgICAgICAgICBzaG93VG9kYXk6IHRydWUsXHJcbiAgICAgICAgICBzaG93Q2xlYXI6dHJ1ZSxcclxuICAgICAgICAgIHNob3dDbG9zZTp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBqUXVlcnkoJy5kYXRlJywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpO1xyXG4gICAgICBqUXVlcnkoJy5kYXRlJywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLm9uKFwiY2hhbmdlLmRhdGV0aW1lcGlja2VyXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciBkdCA9IG1vbWVudC51dGMoZS5kYXRlKS5mb3JtYXQoKVxyXG5cdFx0XHJcbiAgICAgICAgc2VsZi5kYXRlVGltZUNoYW5nZWQuZW1pdChkdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIHNlbGYuaXNSZWFkeSA9IHRydWU7XHJcbiAgICB9LDApO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgPGkgY2xhc3M9XCJmYSBmYS17e2ljb259fVwiPjwvaT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gbnVsbDtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyAgXHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJ1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIENvbG9yczogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNvbG9yJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6OTBweFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgIDxkaXYgIFthdHRyLmJhY2tncm91bmQudmFsdWVdPVwiY29sb3JWYWx1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNvbG9yXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBjb2xvclZhbHVlOnN0cmluZztcclxuICAgIEBJbnB1dCgpIHNldCBjb2xvcih2OnN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjY1wiLCB2LCB0aGlzLnBpY2tlcik7XHJcbiAgICAgICAgdGhpcy5jb2xvclZhbHVlID0gdjtcclxuICAgICAgICBpZiAodil7XHJcbiAgICAgICAgLy8gICAgalF1ZXJ5KCcuY29sb3InLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCB2KVxyXG4gICAgICAgIC8vZWxzZVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5jb2xvcicsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5hdHRyKFwic3R5bGVcIixcImJhY2tncm91bmQtY29sb3I6XCIgKyB2KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICB9O1xyXG4gIEBPdXRwdXQoKSBjb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgcHJpdmF0ZSB3aWR0aDpzdHJpbmc7XHJcbiAgcHJpdmF0ZSBoZWlnaHQ6c3RyaW5nO1xyXG4gIHByaXZhdGUgc3RhdGU6YW55O1xyXG4gIHByaXZhdGUgcmdiU3RyaW5nOnN0cmluZztcclxuICBwcml2YXRlIHBpY2tlcjphbnkgPSBudWxsO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcbiAgICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICghc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aClcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hXaWR0aDtcclxuICAgIGVsc2VcclxuICAgICAgICB0aGlzLndpZHRoID0gc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aDtcclxuXHJcbiAgICBcclxuICAgIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLmlzSW5wdXQpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnBpY2tlciA9IGpRdWVyeSgnLmNvbG9yJywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmNvbG9yUGlja2VyKHtcclxuICAgICAgICAgICAgICAgIC8vY29sb3I6ICdyZ2JhKDI1NSwxMiwxNCwxKScsXHJcbiAgICAgICAgICAgICAgICBjc3NBZGRvbjogJy5jcC1jb2xvci1waWNrZXIge3otaW5kZXg6MjAwMH0nLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRDYWxsYmFjazpmdW5jdGlvbihiKXtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhbGxiYWNrOmZ1bmN0aW9uKHApe1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckNhbGxiYWNrOiBmdW5jdGlvbih2KXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2LnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoXCJyZ2JcIik9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmdiID0gdi50ZXh0LnNwbGl0KCAnLCcgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByPXBhcnNlSW50KCByZ2JbMF0uc3Vic3RyaW5nKDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGc9cGFyc2VJbnQoIHJnYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiPXBhcnNlSW50KCByZ2JbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiI1wiICtyLnRvU3RyaW5nKDE2KStnLnRvU3RyaW5nKDE2KStiLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjY1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2xvckNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25DYWxsYmFjazogZnVuY3Rpb24odix4KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNcIiwgdiwgeClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTkdYS2VydmlQaXBlc01vZHVsZSAgfSBmcm9tICduZ3gta2VydmknXHJcbmltcG9ydCB7IFNwYXJrbGluZUNvbXBvbmVudCB9IGZyb20gJy4vc3BhcmtsaW5lL3NwYXJrbGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlL2dhdWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC9jaGFydC5jb21wb25lbnQnXHJcbi8vaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3dpdGNoQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IENhbVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1QRUdWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL21wZWctdmlld2VyL21wZWctdmlld2VyLmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgSW1hZ2VWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50JzsgXHJcbi8vaW1wb3J0IHsgQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbnMvaWNvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4R2F1Z2VNb2R1bGUgfSBmcm9tICduZ3gtZ2F1Z2UnO1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3IvY29sb3IuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTcGFya2xpbmVDb21wb25lbnQsXHJcbiAgICBTbGlkZXJDb21wb25lbnQsXHJcbiAgICBJY29uc0NvbXBvbmVudCxcclxuICAgIEdhdWdlQ29tcG9uZW50LFxyXG4gICAgQ2hhcnRDb21wb25lbnQsXHJcbiAgICBTd2l0Y2hCdXR0b25Db21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAvL0NhbVZpZXdlckNvbXBvbmVudCxcclxuICAgIE1QRUdWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAvL0ltYWdlVmlld2VyQ29tcG9uZW50LFxyXG4gICAgLy9BY3Rpb25Db21wb25lbnQsXHJcbiAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgICAgU3BhcmtsaW5lQ29tcG9uZW50LFxyXG4gICAgICBTbGlkZXJDb21wb25lbnQsXHJcbiAgICAgIEljb25zQ29tcG9uZW50LFxyXG4gICAgICBNUEVHVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICBHYXVnZUNvbXBvbmVudCxcclxuICAgICAgQ2hhcnRDb21wb25lbnQsXHJcbiAgICAgIFN3aXRjaEJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAvL0NhbVZpZXdlckNvbXBvbmVudCxcclxuICAgICAgLy9BY3Rpb25Db21wb25lbnQsXHJcbiAgICAgIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICBDb2xvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIE5HWEtlcnZpUGlwZXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOZ3hHYXVnZU1vZHVsZSxcclxuICAgIC8vS2VydmlQaXBlc01vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVSUNvbXBvbmVudHNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yICgpe31cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlWYWx1ZSwgRGFzaGJvYXJkUGFuZWwsIERhc2hib2FyZFNpemVzIH0gZnJvbSAna2VydmktanMnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlJyxcclxuXHR0ZW1wbGF0ZTogYCAgICA8a2VydmktdmFsdWUtbnVtYmVyICpuZ0lmPVwidmFsdWUudHlwZU5hbWU9PSdOdW1iZXInXCIgW3ZhbHVlXT1cInZhbHVlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgW2lubGluZV09XCJpbmxpbmVcIiA+PC9rZXJ2aS12YWx1ZS1udW1iZXI+XHJcbiAgICA8a2VydmktdmFsdWUtYm9vbGVhbiAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nQm9vbGVhbidcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBbaW5saW5lXT1cImlubGluZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwva2VydmktdmFsdWUtYm9vbGVhbj5cclxuICAgIDxrZXJ2aS12YWx1ZS1zdHJpbmcgKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J1N0cmluZydcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBbaW5saW5lXT1cImlubGluZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwva2VydmktdmFsdWUtc3RyaW5nPlxyXG4gICAgPGtlcnZpLXZhbHVlLWNvbG9yICpuZ0lmPVwidmFsdWUudHlwZU5hbWU9PSdDb2xvcidcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBbaW5saW5lXT1cImlubGluZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwva2VydmktdmFsdWUtY29sb3I+XHJcbiAgICA8a2VydmktdmFsdWUtZGF0ZXRpbWUgKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J0RhdGVUaW1lJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1kYXRldGltZT5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxuXHQvL2RpcmVjdGl2ZXM6IFsgQ29tbW9uTW9kdWxlICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlWYWx1ZUNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgdmFsdWU6IEtlcnZpVmFsdWU7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkUGFuZWw6IERhc2hib2FyZFBhbmVsO1xyXG5cdEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuXHRASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHR9XHJcblx0IFxyXG5cdFxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50fSBmcm9tICcuL251bWJlci12YWx1ZS9udW1iZXItdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVBpcGVzTW9kdWxlICB9IGZyb20gJ25neC1rZXJ2aSdcclxuXHJcbmltcG9ydCB7IEJvb2xlYW5Db21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi12YWx1ZS9ib29sZWFuLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgU3RyaW5nQ29tcG9uZW50fSBmcm9tICcuL3N0cmluZy12YWx1ZS9zdHJpbmctdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBEYXRlVGltZUNvbXBvbmVudH0gZnJvbSAnLi9kYXRldGltZS12YWx1ZS9kYXRldGltZS12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IENvbG9yQ29tcG9uZW50fSBmcm9tICcuL2NvbG9yLXZhbHVlL2NvbG9yLXZhbHVlLmNvbXBvbmVudCdcclxuLy8gaW1wb3J0IHsgRW51bUNvbXBvbmVudH0gZnJvbSAnLi9lbnVtLXZhbHVlL2VudW0tdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4uL3VpLWNvbXBvbmVudHMvdWktY29tcG9uZW50cy5tb2R1bGUnXHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL2tlcnZpLXZhbHVlL2tlcnZpLXZhbHVlLmNvbXBvbmVudCdcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE51bWJlckNvbXBvbmVudCxcclxuICAgIEJvb2xlYW5Db21wb25lbnQsXHJcbiAgICBLZXJ2aVZhbHVlQ29tcG9uZW50LFxyXG4gICAgU3RyaW5nQ29tcG9uZW50LFxyXG4gICAgLy9FbnVtQ29tcG9uZW50LFxyXG4gICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICBDb2xvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czpbXHJcbiAgICAgIE51bWJlckNvbXBvbmVudCxcclxuICAgICAgQm9vbGVhbkNvbXBvbmVudCxcclxuICAgICAgS2VydmlWYWx1ZUNvbXBvbmVudCxcclxuICAgICAgU3RyaW5nQ29tcG9uZW50LFxyXG4gICAgICAvL0VudW1Db21wb25lbnQsXHJcbiAgICAgIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICBDb2xvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTkdYS2VydmlQaXBlc01vZHVsZSxcclxuICAgIFVJQ29tcG9uZW50c01vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZXNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yICgpe31cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlBY3Rpb25Db21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG4vL2ltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1hY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgPGtlcnZpLXN3aXRjaGJ1dHRvbiBcclxuICAgIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFxyXG4gICAgW2lubGluZV09XCJpbmxpbmVcIiBcclxuICAgIFt2YWx1ZV09XCIoc3RhdGUgfCBhc3luYylcIiBcclxuICAgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiXHJcbiAgICAoYnV0dG9uU3RhdGUpPVwic2V0QWN0aW9uU3RhdGUoJGV2ZW50KVwiXHJcbiAgICAqbmdJZj1cImRpc3BsYXlUeXBlIT0nYnV0dG9uJ1wiXHJcbj48L2tlcnZpLXN3aXRjaGJ1dHRvbj5cclxuPGtlcnZpLWJ1dHRvbiBcclxuICAgIFt0aXRsZV09XCJhY3Rpb24ubmFtZVwiIFxyXG4gICAgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgXHJcbiAgICBbdmFsdWVdPVwiKHN0YXRlIHwgYXN5bmMpXCIgXHJcbiAgICBbaW5saW5lXT1cImlubGluZVwiIFxyXG4gICAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCJcclxuICAgIChidXR0b25TdGF0ZSk9XCJzZXRBY3Rpb25TdGF0ZSgkZXZlbnQpXCIgXHJcbiAgICAqbmdJZj1cImRpc3BsYXlUeXBlPT0nYnV0dG9uJ1wiXHJcbj48L2tlcnZpLWJ1dHRvbj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgS2VydmlBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMubmdPbkluaXRBY3Rpb24oKTsgXHJcbiAgfVxyXG5cclxuICBcclxuICBcclxufSIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4S2VydmlNb2R1bGUsIE5HWEtlcnZpUGlwZXNNb2R1bGUgIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldC93aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbGxlclBhZENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbGxlci1wYWQvY29udHJvbGxlci1wYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FtVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jYW0tdmlld2VyL2NhbS12aWV3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1wYW5lbC9kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgIFZhbHVlc01vZHVsZSB9IGZyb20gJy4vdmFsdWVzL3ZhbHVlcy5tb2R1bGUnXHJcbmltcG9ydCB7IEFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uL2FjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4vdWktY29tcG9uZW50cy91aS1jb21wb25lbnRzLm1vZHVsZSdcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4S2VydmlNb2R1bGUsXHJcbiAgICBOR1hLZXJ2aVBpcGVzTW9kdWxlLFxyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIFZhbHVlc01vZHVsZSxcclxuICAgIFVJQ29tcG9uZW50c01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBXaWRnZXRDb21wb25lbnQsXHJcbiAgICBDb250cm9sbGVyUGFkQ29tcG9uZW50LFxyXG4gICAgQ2FtVmlld2VyQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQsXHJcbiAgICBBY3Rpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIERhc2hib2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgQ29udHJvbGxlclBhZENvbXBvbmVudCxcclxuICAgIENhbVZpZXdlckNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEtlcnZpQ29tcG9uZW50c01vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkRhdGVUaW1lQ29tcG9uZW50IiwiQ29sb3JDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztvQ0FKRDs7Ozs7Ozs7SUM0Q3FDQSxtQ0FBb0I7SUFDdkQ7ZUFDRSxpQkFBTztLQUNQOzs7O0lBRUYsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsNDRFQW9DSTtvQkFDZCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OzswQkEzQ0Q7RUE0Q3FDLG9CQUFvQjs7Ozs7O0FDNUN6RDtJQXNCRSxnQ0FBb0IsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVzt1QkFKMUIsR0FBRzs4QkFDTyxJQUFJO3NCQUNKLEtBQUs7S0FFZ0I7Ozs7SUFFOUMseUNBQVE7OztJQUFSOztRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDZCxNQUFNLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFD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

/***/ }),

/***/ "../../dist/ngx-kervi/fesm5/ngx-kervi.js":
/*!******************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/ngx-kervi/fesm5/ngx-kervi.js ***!
  \******************************************************************************************/
/*! exports provided: ConnectionState, DashboardSizes, KerviTemplateService, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviWidgetComponent, KerviNumberComponent, KerviBooleanComponent, KerviActionComponent, KerviCameraComponent, KerviColorComponent, KerviDateTimeComponent, KerviStringComponent, AppInjector, NGXKerviService, NgxKerviComponent, NgxKerviModule, NGXKerviPipesModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviTemplateService", function() { return KerviTemplateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDashboardComponent", function() { return KerviDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDashboardPanelComponent", function() { return KerviDashboardPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviControllerPadComponent", function() { return KerviControllerPadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviWidgetComponent", function() { return KerviWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviNumberComponent", function() { return KerviNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviBooleanComponent", function() { return KerviBooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviActionComponent", function() { return KerviActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviCameraComponent", function() { return KerviCameraComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviColorComponent", function() { return KerviColorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDateTimeComponent", function() { return KerviDateTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviStringComponent", function() { return KerviStringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXKerviService", function() { return NGXKerviService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxKerviComponent", function() { return NgxKerviComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxKerviModule", function() { return NgxKerviModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXKerviPipesModule", function() { return NGXKerviPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return KerviValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kervi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kervi-js */ "../../dist/kervi-js/fesm5/kervi-js.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionState", function() { return kervi_js__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardSizes", function() { return kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]; });

/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NGXKerviService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NGXKerviService, _super);
    function NGXKerviService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NGXKerviService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NGXKerviService;
}(kervi_js__WEBPACK_IMPORTED_MODULE_2__["KerviBaseService"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviTemplateService = /** @class */ (function () {
    function KerviTemplateService() {
        this.remUnit = 20;
        console.log("kervi service constructor");
        //console.log("ctemplate");
        this.remUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    /**
     * @param {?} rem
     * @return {?}
     */
    KerviTemplateService.prototype.convertRemToPixels = /**
     * @param {?} rem
     * @return {?}
     */
    function (rem) {
        return rem * this.remUnit;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KerviTemplateService.prototype.getSizeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null)
            return "100%";
        else if (isNaN(value)) {
            return value;
        }
        else if (value > 0)
            return value + "%";
        else
            return "";
    };
    /**
     * @param {?} value
     * @param {?} containerSize
     * @return {?}
     */
    KerviTemplateService.prototype.getPixels = /**
     * @param {?} value
     * @param {?} containerSize
     * @return {?}
     */
    function (value, containerSize) {
        //console.log("gps", value, isNaN(value));
        if (isNaN(value)) {
            if (value.lastIndexOf("px") > -1) {
                /** @type {?} */
                var px = parseFloat(value);
                return px;
            }
            else if (value.lastIndexOf("rem") > -1) {
                /** @type {?} */
                var rem = parseFloat(value);
                /** @type {?} */
                var px = this.convertRemToPixels(rem);
                console.log("remx", rem, px);
                return px;
            }
            else if (value.lastIndexOf("%") > -1) {
                /** @type {?} */
                var percentage = parseFloat(value) / 100.0;
                return containerSize * percentage;
            }
        }
        else
            return value;
    };
    /**
     * @param {?} style
     * @param {?} selector
     * @param {?} sheet
     * @return {?}
     */
    KerviTemplateService.prototype.getStyleRuleValue = /**
     * @param {?} style
     * @param {?} selector
     * @param {?} sheet
     * @return {?}
     */
    function (style, selector, sheet) {
        /** @type {?} */
        var sheets = sheet != null ? [sheet] : document.styleSheets;
        for (var i = 0, l = sheets.length; i < l; i++) {
            /** @type {?} */
            var sheet = sheets[i];
            if (!sheet.cssRules) {
                continue;
            }
            for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                /** @type {?} */
                var rule = sheet.cssRules[j];
                if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                    return rule.style[style];
                }
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    KerviTemplateService.prototype.makeId = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = "";
        /** @type {?} */
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    /**
     * @param {?} colorName
     * @param {?} cssClass
     * @return {?}
     */
    KerviTemplateService.prototype.getColor = /**
     * @param {?} colorName
     * @param {?} cssClass
     * @return {?}
     */
    function (colorName, cssClass) {
        /** @type {?} */
        var styleValue = this.getStyleRuleValue(colorName, cssClass, null);
        //console.log("sv", cssClass,styleValue);
        return styleValue;
    };
    KerviTemplateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    KerviTemplateService.ctorParameters = function () { return []; };
    return KerviTemplateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var AppInjector;
/**
 * @param {?} injector
 * @return {?}
 */
function setAppInjector(injector) {
    if (AppInjector) {
        // Should not happen
        console.error('Programming error: AppInjector was already set');
    }
    else {
        AppInjector = injector;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviDashboardComponent = /** @class */ (function () {
    function KerviDashboardComponent() {
        this.dashboardId = null;
        this.dashboard = null;
        this.dashboards = null;
        this.dashboardSizes = null;
        this.isAppEmpty = true;
        this.showMenu = false;
        this.dashboardPanelsHidden = false;
        this.showPanelController = false;
        this.cameraId = null;
        this.cameraParameters = null;
        this.showLeftPad = false;
        this.leftPadXValue = null;
        this.leftPadYValue = null;
        this.autoCenterLeftPad = false;
        this.showRightPad = false;
        this.rightPadXValue = null;
        this.rightPadYValue = null;
        this.autoCenterRightPad = false;
        this.inFullScreen = false;
        this.kerviService = AppInjector.get(NGXKerviService);
        /** @type {?} */
        var self = this;
        this.kerviService.componentsChanged$.subscribe(function () {
            /** @type {?} */
            var dashboard = /** @type {?} */ (self.kerviService.getComponent(self.dashboardId, "dashboard"));
            if (dashboard)
                self.loadDashboard(self.dashboardId);
        });
    }
    /**
     * @param {?} dashboardId
     * @return {?}
     */
    KerviDashboardComponent.prototype.loadDashboard = /**
     * @param {?} dashboardId
     * @return {?}
     */
    function (dashboardId) {
        this.dashboardId = dashboardId;
        this.dashboard = /** @type {?} */ (this.kerviService.getComponent(dashboardId, "dashboard"));
        this.dashboards = this.kerviService.getComponentsByType("dashboard");
        this.isAppEmpty = this.kerviService.isAppEmpty();
        this.showMenu = (this.dashboards.length > 1 || this.kerviService.doAuthenticate);
        this.showPanelController = false;
        this.cameraId = null;
        this.cameraParameters = null;
        this.showLeftPad = false;
        this.showRightPad = false;
        this.dashboardPanelsHidden = false;
        if (this.dashboard.backgroundPanel) {
            if (this.dashboard.backgroundPanel.components.length > 0) {
                this.dashboardPanelsHidden = true;
                this.showPanelController = true;
                this.cameraId = this.dashboard.backgroundPanel.components[0].component.id;
                this.cameraParameters = this.dashboard.backgroundPanel.components[0].parameters;
                console.log("cam", this.cameraId, this.cameraParameters);
            }
        }
        if (this.dashboard.LeftPadXPanel && this.dashboard.LeftPadXPanel.components.length || this.dashboard.LeftPadYPanel && this.dashboard.LeftPadYPanel.components.length) {
            this.showLeftPad = true;
            if (this.dashboard.LeftPadXPanel.components.length) {
                this.leftPadXValue = /** @type {?} */ (this.dashboard.LeftPadXPanel.components[0].component);
                if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
                    this.autoCenterLeftPad = true;
            }
            if (this.dashboard.LeftPadYPanel.components.length) {
                this.leftPadYValue = /** @type {?} */ (this.dashboard.LeftPadYPanel.components[0].component);
                if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
                    this.autoCenterLeftPad = true;
            }
        }
        if (this.dashboard.RightPadXPanel && this.dashboard.RightPadXPanel.components.length || this.dashboard.RightPadYPanel && this.dashboard.RightPadYPanel.components.length) {
            this.showRightPad = true;
            if (this.dashboard.RightPadXPanel.components.length) {
                this.rightPadXValue = /** @type {?} */ (this.dashboard.RightPadXPanel.components[0].component);
                if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
                    this.autoCenterRightPad = true;
            }
            if (this.dashboard.RightPadYPanel.components.length) {
                this.rightPadYValue = /** @type {?} */ (this.dashboard.RightPadYPanel.components[0].component);
                if (this.dashboard.RightPadXPanel.components[0].parameters.padAutoCenter)
                    this.autoCenterRightPad = true;
            }
        }
        console.log("load db", dashboardId, this.dashboard, this);
    };
    /**
     * @return {?}
     */
    KerviDashboardComponent.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc;
        doc = document;
        if ((doc.fullScreenElement && doc.fullScreenElement !== null)) {
            this.inFullScreen = true;
            if (doc.documentElement.requestFullScreen) {
                doc.documentElement.requestFullScreen();
            }
            else if (doc.documentElement.mozRequestFullScreen) {
                doc.documentElement.mozRequestFullScreen();
            } // } else if (document.documentElement.webkitRequestFullScreen) {
            //   doc.documentElement.webkitRequestFullScreen();
            // }
        }
        else {
            this.inFullScreen = false;
            if (doc.cancelFullScreen) {
                doc.cancelFullScreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } // } else if (document.webkitCancelFullScreen) {
            //   doc.webkitCancelFullScreen();
            // }
        }
    };
    KerviDashboardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-dashboard',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDashboardComponent.ctorParameters = function () { return []; };
    return KerviDashboardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviDashboardPanelComponent = /** @class */ (function () {
    function KerviDashboardPanelComponent() {
        this.inline = false;
        this.inGroup = false;
        this.bodyOnly = false;
        this.width = "";
        this.showHeader = false;
        this.expanded = false;
        this.bodyComponents = [];
        this.headerComponents = [];
        this.footerComponents = [];
        //messages: DashboardMessageModel[] = [];
        this.messages$ = null;
        //panelComponents:IComponent[] = []
        this.templateService = null;
        this.kerviService = null;
        this.templateService = AppInjector.get(KerviTemplateService);
        this.kerviService = AppInjector.get(NGXKerviService);
        this.messages$ = this.kerviService.getLogMessages$();
    }
    /**
     * @param {?} panel
     * @param {?} inGroup
     * @return {?}
     */
    KerviDashboardPanelComponent.prototype.calcWidth = /**
     * @param {?} panel
     * @param {?} inGroup
     * @return {?}
     */
    function (panel, inGroup) {
        if (panel.type == "group") {
            if (panel.parameters.width == null || panel.parameters.width == "0")
                return "100%";
            else
                return this.templateService.getSizeValue(panel.parameters.width);
        }
        else
            return inGroup ? "" : this.templateService.getSizeValue(panel.parameters.width);
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    KerviDashboardPanelComponent.prototype.showPanelHeader = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        /** @type {?} */
        var hasHeaderComponents = false;
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.panel.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                var component = _b.value;
                if (component.parameters.linkToHeader)
                    hasHeaderComponents = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return (panel.parameters.title != null && panel.parameters.title.length > 0) || hasHeaderComponents;
        var e_1, _c;
    };
    /**
     * @return {?}
     */
    KerviDashboardPanelComponent.prototype.ngOnInitPanel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.title = this.panel.parameters.title;
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.panel.components), _b = _a.next(); !_b.done; _b = _a.next()) {
                var component = _b.value;
                if (component.parameters.linkToHeader)
                    this.headerComponents.push(component);
                else
                    this.bodyComponents.push(component);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.showHeader = (this.panel.parameters.title != null && this.panel.parameters.title.length > 0) || (this.headerComponents.length > 0);
        if (this.panel.parameters.userLog) {
            this.kerviService.spine.sendQuery("getLogItems", 0, this.panel.parameters.logLength, function (v) {
                //console.log('lm', v);
                //var messages = DashboardFactory.createLogMessages(v)
                //self.messages$.next(messages);
            });
            /*this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                            var messages = self.messages$.value
                            console.log("lm", this);
                            messages.unshift(new DashboardMessageModel(this));
                            if (messages.length>self.panel.parameters.logLength)
                                messages.pop();
                            self.messages$.next(messages);
                        });*/
        }
        this.width = this.inGroup ? "" : this.templateService.getSizeValue(self.panel.parameters.width);
        var e_2, _c;
    };
    KerviDashboardPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-dashboard-panel-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDashboardPanelComponent.ctorParameters = function () { return []; };
    KerviDashboardPanelComponent.propDecorators = {
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bodyOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviDashboardPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviControllerPadComponent = /** @class */ (function () {
    function KerviControllerPadComponent() {
    }
    /**
     * @return {?}
     */
    KerviControllerPadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    KerviControllerPadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-controller-pad-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviControllerPadComponent.ctorParameters = function () { return []; };
    KerviControllerPadComponent.propDecorators = {
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviControllerPadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviWidgetComponent = /** @class */ (function () {
    function KerviWidgetComponent() {
        this.component = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.widgetType = "value";
        //console.log("cnio",this);
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    Object.defineProperty(KerviWidgetComponent.prototype, "componentId", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.component = this.kerviService.getComponent(this.componentId);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    KerviWidgetComponent.prototype.ngOnInitWidget = /**
     * @return {?}
     */
    function () {
        if (!this.linkParameters)
            this.linkParameters = this.component.ui;
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        //console.log("widget", this.component, this.linkParameters);
        if (this.component.componentType == "controller") {
            /** @type {?} */
            var controller = /** @type {?} */ (this.component);
            console.log("widget ctrl", controller);
            if (controller.type == "camera")
                this.widgetType = "camera";
        }
        else if (this.linkParameters.type) {
            if (this.linkParameters.type.indexOf("gauge") > -1) {
                this.widgetType = "gauge";
            }
            else if (this.linkParameters.type == "chart") {
                this.widgetType = "chart";
            }
        }
    };
    KerviWidgetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-widget-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviWidgetComponent.ctorParameters = function () { return []; };
    KerviWidgetComponent.propDecorators = {
        componentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviWidgetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// unsupported: template constraints.
/**
 * @template T
 */
var KerviValueComponent = /** @class */ (function () {
    function KerviValueComponent() {
        this.value = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        //console.log("cnio",this);
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    Object.defineProperty(KerviValueComponent.prototype, "valueId", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.value = /** @type {?} */ (this.kerviService.getComponent(this.valueId));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    KerviValueComponent.prototype.ngOnInitValue = /**
     * @return {?}
     */
    function () {
        if (!this.linkParameters)
            this.linkParameters = this.value.ui;
    };
    KerviValueComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviValueComponent.ctorParameters = function () { return []; };
    KerviValueComponent.propDecorators = {
        valueId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviValueComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviNumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviNumberComponent, _super);
    function KerviNumberComponent() {
        var _this = _super.call(this) || this;
        _this.numberFormat = "1.2-2";
        _this.displayValue = 0;
        _this.displayUnit = "";
        _this.displayType = "";
        _this.currentIcon = null;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviNumberComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviNumberComponent.prototype.ngOnInitNumber = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        /** @type {?} */
        var self = this;
        this.numberFormat = this.linkParameters.minIntegerDigits + "." + this.linkParameters.minFractionDigits + "-" + this.linkParameters.maxFractionDigits;
        if (!this.linkParameters.valueIcon)
            this.currentIcon = null;
        else if (typeof (this.linkParameters.valueIcon) == "string")
            this.currentIcon = this.linkParameters.valueIcon;
        else {
            this.value.value$.subscribe(function (v) {
                try {
                    for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.linkParameters.valueIcon), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var iconSection = _b.value;
                        if (v >= iconSection.range[0] && v <= iconSection.range[1]) {
                            self.currentIcon = iconSection.icon;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var e_1, _c;
            });
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
        }
    };
    KerviNumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-number-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviNumberComponent.ctorParameters = function () { return []; };
    return KerviNumberComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviBooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviBooleanComponent, _super);
    function KerviBooleanComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "switch";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviBooleanComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviBooleanComponent.prototype.ngOnInitBoolean = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
        }
    };
    KerviBooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-boolean-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviBooleanComponent.ctorParameters = function () { return []; };
    return KerviBooleanComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviActionComponent = /** @class */ (function () {
    function KerviActionComponent() {
        this.action = null;
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.displayType = "switch";
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    /**
     * @return {?}
     */
    KerviActionComponent.prototype.ngOnInitAction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (!this.linkParameters)
            this.linkParameters = this.action.ui;
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        self.state.next(this.action.running$.value);
        this.action.running$.subscribe(function (v) {
            self.state.next(v);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KerviActionComponent.prototype.setActionState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value)
            this.action.run(this.linkParameters.actionParameters);
        else
            this.action.interrupt(this.linkParameters.interruptParameters);
    };
    KerviActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-action-base',
                    template: '',
                    styles: [],
                },] },
    ];
    /** @nocollapse */
    KerviActionComponent.ctorParameters = function () { return []; };
    KerviActionComponent.propDecorators = {
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviActionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviCameraComponent = /** @class */ (function () {
    function KerviCameraComponent() {
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.isBackground = false;
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    Object.defineProperty(KerviCameraComponent.prototype, "cameraId", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            console.log("setcamid", id);
            this.camera = /** @type {?} */ (this.kerviService.getComponent(id));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KerviCameraComponent.prototype, "camera", {
        get: /**
         * @return {?}
         */
        function () { return this.cam; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            console.log("setcam", v);
            this.cam = v;
            try {
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(v.outputs), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var i = _b.value;
                    if (i.id.endsWith(".pan"))
                        this.pan = /** @type {?} */ (i);
                    else if (i.id.endsWith(".tilt"))
                        this.tilt = /** @type {?} */ (i);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.cameraType = v.ui.type;
            if (this.cameraType == "frame") {
                if (v.ui.source)
                    this.cameraSource = v.ui.source.server + v.ui.source.path;
            }
            var e_1, _c;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} v
     * @return {?}
     */
    KerviCameraComponent.prototype.setPan = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.pan.set(v);
    };
    /**
     * @param {?} v
     * @return {?}
     */
    KerviCameraComponent.prototype.setTilt = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.tilt.set(v);
    };
    /**
     * @return {?}
     */
    KerviCameraComponent.prototype.ngOnInitCamera = /**
     * @return {?}
     */
    function () {
        console.log("ngi cam");
        if (!this.linkParameters)
            this.linkParameters = this.camera.ui;
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
    };
    KerviCameraComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-camera-base',
                    template: '',
                    styles: [],
                },] },
    ];
    /** @nocollapse */
    KerviCameraComponent.ctorParameters = function () { return []; };
    KerviCameraComponent.propDecorators = {
        cameraId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        camera: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviCameraComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviColorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviColorComponent, _super);
    function KerviColorComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "button";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviColorComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviColorComponent.prototype.ngOnInitColor = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
        }
    };
    KerviColorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-color-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviColorComponent.ctorParameters = function () { return []; };
    return KerviColorComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviDateTimeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviDateTimeComponent, _super);
    function KerviDateTimeComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "datetime";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviDateTimeComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviDateTimeComponent.prototype.ngOnInitDateTime = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        /** @type {?} */
        var self = this;
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        if (self.linkParameters.type == "time")
            this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.time;
        else if (self.linkParameters.type == "date")
            this.dateTimeFormat = self.kerviService.application$.value.display.unit_system.datetime.date;
        else
            this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.datetime;
    };
    KerviDateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-datetime-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDateTimeComponent.ctorParameters = function () { return []; };
    return KerviDateTimeComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KerviStringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviStringComponent, _super);
    function KerviStringComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviStringComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviStringComponent.prototype.ngOnInitString = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
    };
    KerviStringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-string-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviStringComponent.ctorParameters = function () { return []; };
    return KerviStringComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxKerviComponent = /** @class */ (function () {
    function NgxKerviComponent() {
    }
    /**
     * @return {?}
     */
    NgxKerviComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxKerviComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'lib-ngx-kervi',
                    template: "\n    <p>\n      ngx-kervi works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxKerviComponent.ctorParameters = function () { return []; };
    return NgxKerviComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxKerviModule = /** @class */ (function () {
    function NgxKerviModule(injector) {
        this.injector = injector;
        setAppInjector(injector);
    }
    NgxKerviModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [],
                    declarations: [
                        NgxKerviComponent,
                        KerviDashboardComponent,
                        KerviDashboardPanelComponent,
                        KerviControllerPadComponent,
                        KerviNumberComponent,
                        KerviStringComponent,
                        KerviBooleanComponent,
                        KerviColorComponent,
                        KerviDateTimeComponent,
                        KerviActionComponent,
                        KerviValueComponent,
                        KerviWidgetComponent,
                        KerviCameraComponent
                    ],
                    providers: [NGXKerviService, KerviTemplateService],
                    exports: [
                        NgxKerviComponent,
                        KerviDashboardComponent,
                        KerviDashboardPanelComponent,
                        KerviControllerPadComponent,
                        KerviNumberComponent,
                        KerviWidgetComponent,
                        KerviStringComponent,
                        KerviBooleanComponent,
                        KerviColorComponent,
                        KerviDateTimeComponent,
                        KerviActionComponent,
                        KerviCameraComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxKerviModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    return NgxKerviModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(kerviService) {
        this.kerviService = kerviService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        return this.kerviService.text(value, value);
    };
    TranslatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'translate'
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: NGXKerviService }
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NGXKerviPipesModule = /** @class */ (function () {
    function NGXKerviPipesModule() {
    }
    NGXKerviPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [],
                    exports: [
                        TranslatePipe
                    ],
                    providers: [],
                    declarations: [
                        TranslatePipe
                    ]
                },] },
    ];
    return NGXKerviPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWtlcnZpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS10ZW1wbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2FwcC1pbmplY3Rvci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1jb250cm9sbGVyLXBhZC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL3ZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvYWN0aW9ucy9rZXJ2aS1hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2NhbWVyYS9rZXJ2aS1jYW1lcmEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3ZhbHVlcy9rZXJ2aS1jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2Vydmktc3RyaW5nLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi9uZ3gta2VydmkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS5tb2R1bGUudHMiLCJuZzovL25neC1rZXJ2aS9saWIvcGlwZXMvdGV4dFBpcGUudHMiLCJuZzovL25neC1rZXJ2aS9saWIvcGlwZXMvcGlwZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlCYXNlU2VydmljZSB9IGZyb20gXCJrZXJ2aS1qc1wiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOR1hLZXJ2aVNlcnZpY2UgZXh0ZW5kcyBLZXJ2aUJhc2VTZXJ2aWNle1xyXG5cclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtlcnZpVGVtcGxhdGVTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlbVVuaXQ6bnVtYmVyPTIwO1xyXG4gICAgY29uc3RydWN0b3IoKSBcclxuICB7IFxyXG4gICAgY29uc29sZS5sb2coXCJrZXJ2aSBzZXJ2aWNlIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjdGVtcGxhdGVcIik7XHJcbiAgICAgICAgdGhpcy5yZW1Vbml0ID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb252ZXJ0UmVtVG9QaXhlbHMocmVtKSB7ICAgIFxyXG4gICAgICAgIHJldHVybiByZW0gKiB0aGlzLnJlbVVuaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemVWYWx1ZSh2YWx1ZSl7XHJcbiAgICAgICAgaWYgKHZhbHVlPT1udWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gXCIxMDAlXCJcclxuICAgICAgICBlbHNlIGlmIChpc05hTih2YWx1ZSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZT4wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAgZ2V0UGl4ZWxzKHZhbHVlLCBjb250YWluZXJTaXplKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ3BzXCIsIHZhbHVlLCBpc05hTih2YWx1ZSkpO1xyXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpe1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmxhc3RJbmRleE9mKFwicHhcIik+LTEpe1xyXG4gICAgICAgICAgICB2YXIgcHggPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHB4O1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sYXN0SW5kZXhPZihcInJlbVwiKT4tMSl7XHJcbiAgICAgICAgICAgIHZhciByZW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHB4ID0gdGhpcy5jb252ZXJ0UmVtVG9QaXhlbHMocmVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW14XCIscmVtLCBweCk7XHJcbiAgICAgICAgICAgIHJldHVybiBweDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGFzdEluZGV4T2YoXCIlXCIpPi0xKXtcclxuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KHZhbHVlKS8xMDAuMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclNpemUgKiBwZXJjZW50YWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3R5bGVSdWxlVmFsdWUoc3R5bGUsIHNlbGVjdG9yLCBzaGVldCkge1xyXG4gICAgICAgIHZhciBzaGVldHMgPSBzaGVldCE9bnVsbCA/IFtzaGVldF0gOiBkb2N1bWVudC5zdHlsZVNoZWV0cztcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNoZWV0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzaGVldCA9IHNoZWV0c1tpXTtcclxuICAgICAgICAgICAgaWYoICFzaGVldC5jc3NSdWxlcyApIHsgY29udGludWU7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7IGogPCBrOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBydWxlID0gc2hlZXQuY3NzUnVsZXNbal07XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQgJiYgcnVsZS5zZWxlY3RvclRleHQuc3BsaXQoJywnKS5pbmRleE9mKHNlbGVjdG9yKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5zdHlsZVtzdHlsZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VJZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBwb3NzaWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcclxuXHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgNTsgaSsrIClcclxuICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2xvcihjb2xvck5hbWU6c3RyaW5nLGNzc0NsYXNzOnN0cmluZyl7XHJcbiAgICAgICAgdmFyIHN0eWxlVmFsdWU9dGhpcy5nZXRTdHlsZVJ1bGVWYWx1ZShjb2xvck5hbWUsY3NzQ2xhc3MsbnVsbCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN2XCIsIGNzc0NsYXNzLHN0eWxlVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBzdHlsZVZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IGxldCBBcHBJbmplY3RvcjogSW5qZWN0b3I7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHBJbmplY3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGlmIChBcHBJbmplY3Rvcikge1xyXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUHJvZ3JhbW1pbmcgZXJyb3I6IEFwcEluamVjdG9yIHdhcyBhbHJlYWR5IHNldCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXBwSW5qZWN0b3IgPSBpbmplY3RvcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkLCBEYXNoYm9hcmRTaXplcywgTnVtYmVyVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1kYXNoYm9hcmQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gIHByaXZhdGUgZGFzaGJvYXJkSWQ6c3RyaW5nPW51bGw7XHJcbiAgcHJvdGVjdGVkIGRhc2hib2FyZDpEYXNoYm9hcmQgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmRzOkRhc2hib2FyZFtdID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBpc0FwcEVtcHR5OmJvb2xlYW4gPSB0cnVlO1xyXG4gIHByb3RlY3RlZCBzaG93TWVudTpib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGRhc2hib2FyZFBhbmVsc0hpZGRlbjpib29sZWFuPWZhbHNlO1xyXG4gIHByb3RlY3RlZCBzaG93UGFuZWxDb250cm9sbGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgY2FtZXJhSWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGNhbWVyYVBhcmFtZXRlcnM6YW55ID0gbnVsbDtcclxuICBcclxuICBwcm90ZWN0ZWQgc2hvd0xlZnRQYWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBsZWZ0UGFkWFZhbHVlOk51bWJlclZhbHVlID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgbGVmdFBhZFlWYWx1ZTpOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGF1dG9DZW50ZXJMZWZ0UGFkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBwcm90ZWN0ZWQgc2hvd1JpZ2h0UGFkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgcmlnaHRQYWRYVmFsdWU6TnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIHByb3RlY3RlZCByaWdodFBhZFlWYWx1ZTpOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGF1dG9DZW50ZXJSaWdodFBhZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaW5GdWxsU2NyZWVuOmJvb2xlYW4gPSBmYWxzZTsgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmtlcnZpU2VydmljZSA9IEFwcEluamVjdG9yLmdldChOR1hLZXJ2aVNlcnZpY2UpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5rZXJ2aVNlcnZpY2UuY29tcG9uZW50c0NoYW5nZWQkLnN1YnNjcmliZShmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgZGFzaGJvYXJkID0gc2VsZi5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHNlbGYuZGFzaGJvYXJkSWQsIFwiZGFzaGJvYXJkXCIpIGFzIERhc2hib2FyZFxyXG4gICAgICBpZiAoZGFzaGJvYXJkKVxyXG4gICAgICAgIHNlbGYubG9hZERhc2hib2FyZChzZWxmLmRhc2hib2FyZElkKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZERhc2hib2FyZChkYXNoYm9hcmRJZDpzdHJpbmcpe1xyXG4gICAgdGhpcy5kYXNoYm9hcmRJZCA9IGRhc2hib2FyZElkO1xyXG4gICAgdGhpcy5kYXNoYm9hcmQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQoZGFzaGJvYXJkSWQsIFwiZGFzaGJvYXJkXCIpIGFzIERhc2hib2FyZDtcclxuICAgIHRoaXMuZGFzaGJvYXJkcyA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudHNCeVR5cGUoXCJkYXNoYm9hcmRcIik7XHJcbiAgICB0aGlzLmlzQXBwRW1wdHkgPSB0aGlzLmtlcnZpU2VydmljZS5pc0FwcEVtcHR5KCk7XHJcbiAgICB0aGlzLnNob3dNZW51ID0gKHRoaXMuZGFzaGJvYXJkcy5sZW5ndGggPiAxIHx8IHRoaXMua2VydmlTZXJ2aWNlLmRvQXV0aGVudGljYXRlKTtcclxuICAgIHRoaXMuc2hvd1BhbmVsQ29udHJvbGxlcj1mYWxzZTtcclxuICAgIHRoaXMuY2FtZXJhSWQgPSBudWxsO1xyXG4gICAgdGhpcy5jYW1lcmFQYXJhbWV0ZXJzID0gbnVsbDtcclxuICAgIHRoaXMuc2hvd0xlZnRQYWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd1JpZ2h0UGFkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRhc2hib2FyZFBhbmVsc0hpZGRlbj1mYWxzZTtcclxuICAgIGlmICh0aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwpe1xyXG4gICAgICBpZiAodGhpcy5kYXNoYm9hcmQuYmFja2dyb3VuZFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoID4gMClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkUGFuZWxzSGlkZGVuPXRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93UGFuZWxDb250cm9sbGVyPXRydWU7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFJZD10aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwuY29tcG9uZW50c1swXS5jb21wb25lbnQuaWQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFQYXJhbWV0ZXJzPXRoaXMuZGFzaGJvYXJkLmJhY2tncm91bmRQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW1cIiwgdGhpcy5jYW1lcmFJZCwgdGhpcy5jYW1lcmFQYXJhbWV0ZXJzKTtcclxuICAgICAgfSBcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50cy5sZW5ndGggfHwgdGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbCAmJiB0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgdGhpcy5zaG93TGVmdFBhZCA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLmxlZnRQYWRYVmFsdWU9dGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLmNvbXBvbmVudCBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnMucGFkQXV0b0NlbnRlcilcclxuICAgICAgICAgIHRoaXMuYXV0b0NlbnRlckxlZnRQYWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLmxlZnRQYWRZVmFsdWU9dGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbC5jb21wb25lbnRzWzBdLmNvbXBvbmVudCBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnMucGFkQXV0b0NlbnRlcilcclxuICAgICAgICAgIHRoaXMuYXV0b0NlbnRlckxlZnRQYWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoIHx8IHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgdGhpcy5zaG93UmlnaHRQYWQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRYUGFuZWwuY29tcG9uZW50cy5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMucmlnaHRQYWRYVmFsdWU9dGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5jb21wb25lbnQgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICB0aGlzLmF1dG9DZW50ZXJSaWdodFBhZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLnJpZ2h0UGFkWVZhbHVlPXRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50IGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnMucGFkQXV0b0NlbnRlcilcclxuICAgICAgICAgIHRoaXMuYXV0b0NlbnRlclJpZ2h0UGFkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibG9hZCBkYlwiLCBkYXNoYm9hcmRJZCwgdGhpcy5kYXNoYm9hcmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRnVsbFNjcmVlbigpIHtcclxuICAgIHZhciBkb2M6YW55O1xyXG4gICAgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICBpZiAoKGRvYy5mdWxsU2NyZWVuRWxlbWVudCAmJiBkb2MuZnVsbFNjcmVlbkVsZW1lbnQgIT09IG51bGwpKSAgICAgXHJcbiAgICAgLyooIWRvYy5tb3pGdWxsU2NyZWVuICYmICFkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4pKSovIHtcclxuICAgICAgIHRoaXMuaW5GdWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgaWYgKGRvYy5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9IGVsc2UgaWYgKGRvYy5kb2N1bWVudEVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9Ly8gfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAvLyAgIGRvYy5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICAvLyB9ICBcclxuICAgIH0gZWxzZSB7ICBcclxuICAgICAgdGhpcy5pbkZ1bGxTY3JlZW49ZmFsc2U7XHJcbiAgICAgIGlmIChkb2MuY2FuY2VsRnVsbFNjcmVlbikgeyAgXHJcbiAgICAgICAgZG9jLmNhbmNlbEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9IGVsc2UgaWYgKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgICBkb2MubW96Q2FuY2VsRnVsbFNjcmVlbigpOyAgXHJcbiAgICAgIH0vLyB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAvLyAgIGRvYy53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgLy8gfSAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMsIERhc2hib2FyZFBhbmVsLCBEYXNoYm9hcmRNZXNzYWdlTW9kZWwgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2VydmlUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2VydmktdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZC1wYW5lbC1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOiBEYXNoYm9hcmRTaXplcztcclxuICBASW5wdXQoKSBwYW5lbDpEYXNoYm9hcmRQYW5lbDtcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluR3JvdXA6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJvZHlPbmx5OmJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBcclxuICBwdWJsaWMgd2lkdGg6c3RyaW5nID0gXCJcIjtcclxuICBwdWJsaWMgc2hvd0hlYWRlcjpib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGV4cGFuZGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdGl0bGU6c3RyaW5nO1xyXG4gIHB1YmxpYyBib2R5Q29tcG9uZW50czphbnlbXT1bXTtcclxuICBwdWJsaWMgaGVhZGVyQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICBwdWJsaWMgZm9vdGVyQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICAvL21lc3NhZ2VzOiBEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXSA9IFtdO1xyXG4gIG1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXT4gPSBudWxsO1xyXG4gIC8vcGFuZWxDb21wb25lbnRzOklDb21wb25lbnRbXSA9IFtdXHJcbiAgcHJvdGVjdGVkIHRlbXBsYXRlU2VydmljZTogS2VydmlUZW1wbGF0ZVNlcnZpY2UgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlID0gbnVsbDtcclxuICBjb25zdHJ1Y3RvciAoKXtcclxuICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KEtlcnZpVGVtcGxhdGVTZXJ2aWNlKTsgICAgXHJcbiAgICB0aGlzLmtlcnZpU2VydmljZSA9IEFwcEluamVjdG9yLmdldChOR1hLZXJ2aVNlcnZpY2UpOyAgXHJcbiAgICB0aGlzLm1lc3NhZ2VzJCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldExvZ01lc3NhZ2VzJCgpOyBcclxuICB9XHJcblxyXG4gICAgY2FsY1dpZHRoKHBhbmVsOkRhc2hib2FyZFBhbmVsLCBpbkdyb3VwKXtcclxuICAgICAgICBpZiAocGFuZWwudHlwZT09XCJncm91cFwiKXtcclxuICAgICAgICAgICAgaWYgKHBhbmVsLnBhcmFtZXRlcnMud2lkdGg9PW51bGwgfHwgcGFuZWwucGFyYW1ldGVycy53aWR0aD09XCIwXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxMDAlXCJcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZShwYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGluR3JvdXAgPyBcIlwiIDogdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0U2l6ZVZhbHVlKHBhbmVsLnBhcmFtZXRlcnMud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQYW5lbEhlYWRlcihwYW5lbDpEYXNoYm9hcmRQYW5lbCl7XHJcbiAgICAgICAgdmFyIGhhc0hlYWRlckNvbXBvbmVudHMgPSBmYWxzZVxyXG4gICAgICAgIGZvciggbGV0IGNvbXBvbmVudCBvZiB0aGlzLnBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBhcmFtZXRlcnMubGlua1RvSGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgaGFzSGVhZGVyQ29tcG9uZW50cyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChwYW5lbC5wYXJhbWV0ZXJzLnRpdGxlICE9IG51bGwgJiYgcGFuZWwucGFyYW1ldGVycy50aXRsZS5sZW5ndGg+MCkgfHwgaGFzSGVhZGVyQ29tcG9uZW50c1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0UGFuZWwoKSB7XHJcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLnRpdGxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciggbGV0IGNvbXBvbmVudCBvZiB0aGlzLnBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBhcmFtZXRlcnMubGlua1RvSGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHlDb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNob3dIZWFkZXIgPSAodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLnRpdGxlICE9IG51bGwgJiYgdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLnRpdGxlLmxlbmd0aD4wKSB8fCAodGhpcy5oZWFkZXJDb21wb25lbnRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWwucGFyYW1ldGVycy51c2VyTG9nKXtcclxuICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZFF1ZXJ5KFwiZ2V0TG9nSXRlbXNcIiwwLCB0aGlzLnBhbmVsLnBhcmFtZXRlcnMubG9nTGVuZ3RoLGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnbG0nLCB2KTtcclxuICAgICAgICAgICAgICAgIC8vdmFyIG1lc3NhZ2VzID0gRGFzaGJvYXJkRmFjdG9yeS5jcmVhdGVMb2dNZXNzYWdlcyh2KVxyXG4gICAgICAgICAgICAgICAgLy9zZWxmLm1lc3NhZ2VzJC5uZXh0KG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLyp0aGlzLmtlcnZpU2VydmljZS5zcGluZS5hZGRFdmVudEhhbmRsZXIoXCJ1c2VyTG9nTWVzc2FnZVwiLCBudWxsLCBmdW5jdGlvbih2KXtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHNlbGYubWVzc2FnZXMkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxtXCIsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMudW5zaGlmdChuZXcgRGFzaGJvYXJkTWVzc2FnZU1vZGVsKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGg+c2VsZi5wYW5lbC5wYXJhbWV0ZXJzLmxvZ0xlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubWVzc2FnZXMkLm5leHQobWVzc2FnZXMpOyAgIFxyXG4gICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmluR3JvdXAgPyBcIlwiIDogdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0U2l6ZVZhbHVlKHNlbGYucGFuZWwucGFyYW1ldGVycy53aWR0aCk7XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY29udHJvbGxlci1wYWQtYmFzZScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUNvbnRyb2xsZXJQYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOiBEYXNoYm9hcmRTaXplcztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRQYW5lbCwgRGFzaGJvYXJkU2l6ZXMsIENvbnRyb2xsZXIgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2Vydmktd2lkZ2V0LWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlXaWRnZXRDb21wb25lbnQgICB7XHJcblx0QElucHV0KCkgc2V0IGNvbXBvbmVudElkKHY6c3RyaW5nKXtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50SWQpO1xyXG5cdH1cclxuXHRASW5wdXQoKSBjb21wb25lbnQ6SUNvbXBvbmVudCA9IG51bGw7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkUGFuZWw6IERhc2hib2FyZFBhbmVsO1xyXG5cdEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuXHRASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gICAgQElucHV0KCkgaW5saW5lOmJvb2xlYW47XHJcblx0cHVibGljIHdpZGdldFR5cGU6c3RyaW5nPVwidmFsdWVcIjtcclxuXHRcclxuXHRcclxuXHRwcml2YXRlIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG5cdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiY25pb1wiLHRoaXMpO1xyXG5cdFx0dGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTsgIFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXRXaWRnZXQoKSB7XHJcblx0XHRcdFxyXG5cdFx0aWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzKVxyXG4gICAgICAgICAgICAgIHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLmNvbXBvbmVudC51aTtcclxuICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHQvL2NvbnNvbGUubG9nKFwid2lkZ2V0XCIsIHRoaXMuY29tcG9uZW50LCB0aGlzLmxpbmtQYXJhbWV0ZXJzKTtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudC5jb21wb25lbnRUeXBlID09IFwiY29udHJvbGxlclwiKXtcclxuXHRcdFx0dmFyIGNvbnRyb2xsZXIgPSB0aGlzLmNvbXBvbmVudCBhcyBDb250cm9sbGVyO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIndpZGdldCBjdHJsXCIsIGNvbnRyb2xsZXIpO1xyXG5cdFx0XHRpZiAoY29udHJvbGxlci50eXBlID09IFwiY2FtZXJhXCIpXHJcblx0XHRcdFx0dGhpcy53aWRnZXRUeXBlID0gXCJjYW1lcmFcIlxyXG5cdFx0XHRcdFxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlLmluZGV4T2YoXCJnYXVnZVwiKSA+IC0xICl7XHJcblx0XHRcdFx0dGhpcy53aWRnZXRUeXBlID0gXCJnYXVnZVwiO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGU9PVwiY2hhcnRcIil7XHJcblx0XHRcdFx0dGhpcy53aWRnZXRUeXBlPVwiY2hhcnRcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWUsIERhc2hib2FyZFBhbmVsLCBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpVmFsdWVDb21wb25lbnQ8VCBleHRlbmRzIEtlcnZpVmFsdWU+ICAge1xyXG5cdEBJbnB1dCgpIHNldCB2YWx1ZUlkKHY6c3RyaW5nKXtcclxuXHRcdHRoaXMudmFsdWUgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQodGhpcy52YWx1ZUlkKSBhcyBUO1xyXG5cdH1cclxuXHRASW5wdXQoKSB2YWx1ZTpUID0gbnVsbDtcclxuXHRcclxuXHQvL0BJbnB1dCgpIGRhc2hib2FyZFBhbmVsOiBEYXNoYm9hcmRQYW5lbDtcclxuXHRASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuXHRASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbjtcclxuXHRwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNuaW9cIix0aGlzKTtcclxuXHRcdHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7ICBcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0VmFsdWUoKSB7XHJcblx0XHRpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMpXHJcbiAgICAgIFx0XHR0aGlzLmxpbmtQYXJhbWV0ZXJzID0gdGhpcy52YWx1ZS51aTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtbnVtYmVyLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PE51bWJlclZhbHVlPiB7XHJcblx0cHVibGljIG51bWJlckZvcm1hdCA9IFwiMS4yLTJcIjtcclxuXHRwdWJsaWMgZGlzcGxheVZhbHVlOm51bWJlciA9IDA7XHJcblx0cHVibGljIGRpc3BsYXlVbml0OnN0cmluZyA9IFwiXCI7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cIlwiO1xyXG5cdHB1YmxpYyBjdXJyZW50SWNvbjpzdHJpbmc9bnVsbDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdE51bWJlcigpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHR0aGlzLm51bWJlckZvcm1hdCA9IHRoaXMubGlua1BhcmFtZXRlcnMubWluSW50ZWdlckRpZ2l0cyArIFwiLlwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5taW5GcmFjdGlvbkRpZ2l0cyArIFwiLVwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5tYXhGcmFjdGlvbkRpZ2l0c1xyXG5cdFx0aWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzLnZhbHVlSWNvbilcclxuXHRcdFx0dGhpcy5jdXJyZW50SWNvbiA9IG51bGw7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YodGhpcy5saW5rUGFyYW1ldGVycy52YWx1ZUljb24pID09IFwic3RyaW5nXCIgKVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5saW5rUGFyYW1ldGVycy52YWx1ZUljb247XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG5cdFx0XHRcdGZvcihsZXQgaWNvblNlY3Rpb24gb2Ygc2VsZi5saW5rUGFyYW1ldGVycy52YWx1ZUljb24pe1xyXG5cdFx0XHRcdFx0aWYgKHYgPj0gaWNvblNlY3Rpb24ucmFuZ2VbMF0gJiYgdiA8PSBpY29uU2VjdGlvbi5yYW5nZVsxXSl7XHJcblx0XHRcdFx0XHRcdHNlbGYuY3VycmVudEljb24gPSBpY29uU2VjdGlvbi5pY29uO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHRcdFxyXG5cclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9ZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm9vbGVhblZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWJvb2xlYW4tYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PEJvb2xlYW5WYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJzd2l0Y2hcIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdEJvb2xlYW4oKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0VmFsdWUoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZSl7XHJcblx0XHRcdHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktYWN0aW9uLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlBY3Rpb25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgYWN0aW9uOiBBY3Rpb24gPSBudWxsO1xyXG4gICAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIHB1YmxpYyBzdGF0ZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZTtcclxuICAgIFxyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJzd2l0Y2hcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXRBY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycylcclxuICAgICAgICAgICAgdGhpcy5saW5rUGFyYW1ldGVycyA9IHRoaXMuYWN0aW9uLnVpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHNlbGYuc3RhdGUubmV4dCh0aGlzLmFjdGlvbi5ydW5uaW5nJC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24ucnVubmluZyQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgICBzZWxmLnN0YXRlLm5leHQodik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWN0aW9uU3RhdGUodmFsdWUpe1xyXG4gICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24ucnVuKHRoaXMubGlua1BhcmFtZXRlcnMuYWN0aW9uUGFyYW1ldGVycyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5pbnRlcnJ1cHQodGhpcy5saW5rUGFyYW1ldGVycy5pbnRlcnJ1cHRQYXJhbWV0ZXJzKVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIE51bWJlclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNhbWVyYS1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpQ2FtZXJhQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY2FtOkNvbnRyb2xsZXI7XHJcbiAgICBASW5wdXQoKSBzZXQgY2FtZXJhSWQoaWQ6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRjYW1pZFwiLCBpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQoaWQpIGFzIENvbnRyb2xsZXI7ICAgIFxyXG4gICAgfTtcclxuICAgIEBJbnB1dCgpIHNldCBjYW1lcmEodjpDb250cm9sbGVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldGNhbVwiLCB2KTtcclxuICAgICAgICB0aGlzLmNhbSA9IHY7XHJcbiAgICAgICAgZm9yKHZhciBpIG9mIHYub3V0cHV0cyl7XHJcbiAgICAgICAgaWYgKGkuaWQuZW5kc1dpdGgoXCIucGFuXCIpKVxyXG4gICAgICAgICAgICB0aGlzLnBhbj1pIGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgIGVsc2UgaWYgKGkuaWQuZW5kc1dpdGgoXCIudGlsdFwiKSlcclxuICAgICAgICAgICAgdGhpcy50aWx0PWkgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhVHlwZSA9IHYudWkudHlwZTsgXHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhVHlwZSA9PSBcImZyYW1lXCIgKXtcclxuICAgICAgICAgICAgaWYgKHYudWkuc291cmNlKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2FtZXJhU291cmNlID0gdi51aS5zb3VyY2Uuc2VydmVyICsgdi51aS5zb3VyY2UucGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBjYW1lcmEoKXtyZXR1cm4gdGhpcy5jYW07fVxyXG4gICAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIEBJbnB1dCgpIGlzQmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gICAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2U7XHJcbiAgICBwdWJsaWMgcGFuOk51bWJlclZhbHVlO1xyXG4gICAgcHVibGljIHRpbHQ6TnVtYmVyVmFsdWU7XHJcbiAgICBwdWJsaWMgY2FtZXJhVHlwZTpzdHJpbmc7XHJcblx0cHVibGljIGNhbWVyYVNvdXJjZTpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGFuKHYpe1xyXG4gICAgICAgIHRoaXMucGFuLnNldCh2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGlsdCh2KXtcclxuICAgICAgICB0aGlzLnRpbHQuc2V0KHYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0Q2FtZXJhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdpIGNhbVwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzKVxyXG4gICAgICAgICAgICAgIHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLmNhbWVyYS51aTtcclxuICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcbiAgICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWNvbG9yLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlDb2xvckNvbXBvbmVudCBleHRlbmRzIEtlcnZpVmFsdWVDb21wb25lbnQ8Q29sb3JWYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJidXR0b25cIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdENvbG9yKCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdFZhbHVlKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUeXBlID0gdGhpcy5saW5rUGFyYW1ldGVycy50eXBlXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLnNpemUgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVUaW1lVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtZGF0ZXRpbWUtYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aURhdGVUaW1lQ29tcG9uZW50IGV4dGVuZHMgS2VydmlWYWx1ZUNvbXBvbmVudDxEYXRlVGltZVZhbHVlPiB7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cImRhdGV0aW1lXCI7XHJcblx0cHVibGljIGRhdGVUaW1lRm9ybWF0OnN0cmluZztcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdERhdGVUaW1lKCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdFZhbHVlKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUeXBlID0gdGhpcy5saW5rUGFyYW1ldGVycy50eXBlXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNlbGYubGlua1BhcmFtZXRlcnMudHlwZT09XCJ0aW1lXCIpXHJcbiAgICAgICAgXHR0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdGhpcy5rZXJ2aVNlcnZpY2UuYXBwbGljYXRpb24kLnZhbHVlLmRpc3BsYXkudW5pdF9zeXN0ZW0uZGF0ZXRpbWUudGltZTtcclxuICAgICAgXHRlbHNlIGlmIChzZWxmLmxpbmtQYXJhbWV0ZXJzLnR5cGU9PVwiZGF0ZVwiKVxyXG4gICAgICAgIFx0dGhpcy5kYXRlVGltZUZvcm1hdCA9IHNlbGYua2VydmlTZXJ2aWNlLmFwcGxpY2F0aW9uJC52YWx1ZS5kaXNwbGF5LnVuaXRfc3lzdGVtLmRhdGV0aW1lLmRhdGU7XHJcbiAgICAgIFx0ZWxzZVxyXG4gICAgICAgIFx0dGhpcy5kYXRlVGltZUZvcm1hdCA9IHRoaXMua2VydmlTZXJ2aWNlLmFwcGxpY2F0aW9uJC52YWx1ZS5kaXNwbGF5LnVuaXRfc3lzdGVtLmRhdGV0aW1lLmRhdGV0aW1lO1xyXG4gICAgICBcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RyaW5nVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtc3RyaW5nLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlTdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PFN0cmluZ1ZhbHVlPiB7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cIlwiO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdFN0cmluZygpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0dGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWtlcnZpJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIG5neC1rZXJ2aSB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEtlcnZpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4S2VydmlDb21wb25lbnQgfSBmcm9tICcuL25neC1rZXJ2aS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBzZXRBcHBJbmplY3RvciB9IGZyb20gXCIuL2FwcC1pbmplY3Rvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlDb250cm9sbGVyUGFkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQva2VydmktY29udHJvbGxlci1wYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gta2VydmktdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy92YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEtlcnZpTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2VydmktbnVtYmVyLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1zdHJpbmctdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1ib29sZWFuLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlDb2xvckNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWVzL2tlcnZpLWNvbG9yLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbnMva2VydmktYWN0aW9uLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlDYW1lcmFDb21wb25lbnQgfSBmcm9tICcuL2NhbWVyYS9rZXJ2aS1jYW1lcmEuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBLZXJ2aVdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQnXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hLZXJ2aUNvbXBvbmVudCxcclxuICAgIEtlcnZpRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXNoYm9hcmRQYW5lbENvbXBvbmVudCxcclxuICAgIEtlcnZpQ29udHJvbGxlclBhZENvbXBvbmVudCxcclxuICAgIEtlcnZpTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgS2VydmlTdHJpbmdDb21wb25lbnQsXHJcbiAgICBLZXJ2aUJvb2xlYW5Db21wb25lbnQsXHJcbiAgICBLZXJ2aUNvbG9yQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIEtlcnZpQWN0aW9uQ29tcG9uZW50LFxyXG4gICAgS2VydmlWYWx1ZUNvbXBvbmVudCxcclxuICAgIEtlcnZpV2lkZ2V0Q29tcG9uZW50LFxyXG4gICAgS2VydmlDYW1lcmFDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW05HWEtlcnZpU2VydmljZSwgS2VydmlUZW1wbGF0ZVNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5neEtlcnZpQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgS2VydmlDb250cm9sbGVyUGFkQ29tcG9uZW50LFxyXG4gICAgS2VydmlOdW1iZXJDb21wb25lbnQsXHJcbiAgICBLZXJ2aVdpZGdldENvbXBvbmVudCxcclxuICAgIEtlcnZpU3RyaW5nQ29tcG9uZW50LFxyXG4gICAgS2VydmlCb29sZWFuQ29tcG9uZW50LFxyXG4gICAgS2VydmlDb2xvckNvbXBvbmVudCxcclxuICAgIEtlcnZpRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICBLZXJ2aUFjdGlvbkNvbXBvbmVudCxcclxuICAgIEtlcnZpQ2FtZXJhQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4S2VydmlNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6SW5qZWN0b3Ipe1xyXG4gICAgc2V0QXBwSW5qZWN0b3IoaW5qZWN0b3IpO1xyXG4gIH1cclxuIH1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tIFwiLi4vbmd4LWtlcnZpLnNlcnZpY2VcIlxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RyYW5zbGF0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXJ2aVNlcnZpY2UudGV4dCh2YWx1ZSwgdmFsdWUpO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdGV4dFBpcGUnIFxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgVHJhbnNsYXRlUGlwZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbICBcclxuICAgICAgXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRyYW5zbGF0ZVBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOR1hLZXJ2aVBpcGVzTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlxQ0EsbUNBQWdCOzs7OztnQkFEcEQsVUFBVTs7MEJBSFg7RUFJcUMsZ0JBQWdCOzs7Ozs7QUNKckQ7SUFNSTt1QkFEdUIsRUFBRTtRQUd6QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7O1FBRXJDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNqRjs7Ozs7SUFFTSxpREFBa0I7Ozs7Y0FBQyxHQUFHO1FBQ3pCLE9B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

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(kerviService, router, route) {
        this.kerviService = kerviService;
        this.router = router;
        this.route = route;
        this.currentPage = null;
        var self = this;
        this.kerviService.connectionState$.subscribe(function (connectedState) {
            console.log("connected service state", connectedState, self);
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].disconnected) {
                self.router.navigate(['/connect']);
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].loading) {
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].authenticate) {
                self.router.navigate(['/authenticate']);
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].connected) {
                if (self.currentPage)
                    self.router.navigate([self.currentPage]);
                else {
                    var defaultDashboard = self.kerviService.getDefaultDashboard();
                    self.router.navigate(['/' + defaultDashboard.componentType + '/' + defaultDashboard.id]);
                }
            }
        });
        kerviService.connect();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var ngx_kervi_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-kervi-components */ "../../dist/ngx-kervi-components/fesm5/ngx-kervi-components.js");
//import { NGXKerviService} from 'projects/ngx-kervi/src/public_api';
//import { KerviBaseService } from 'projects/kervi-js/src/public_api';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { NGXKerviService, KerviTemplateService} from "ngx-kervi";





var ROUTES = [
    { path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__["ConnectComponent"] },
    { path: 'authenticate', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard/:name', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    {
        path: '',
        redirectTo: '/connect',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__["ConnectComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_kervi__WEBPACK_IMPORTED_MODULE_7__["NgxKerviModule"],
                ngx_kervi__WEBPACK_IMPORTED_MODULE_7__["NGXKerviPipesModule"],
                ngx_kervi_components__WEBPACK_IMPORTED_MODULE_8__["NgxKerviComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES)
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/connect/connect.component.css":
/*!***********************************************!*\
  !*** ./src/app/connect/connect.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectComponent = /** @class */ (function () {
    function ConnectComponent() {
    }
    ConnectComponent.prototype.ngOnInit = function () {
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.css */ "./src/app/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-panels-hidden{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar row navbar-toggleable-md navbar-fixed-top navbar-light bg-faded page-header\">\r\n\t<div class=\"row\" style=\"width:100%\">\r\n\t\t<div class=\"col-xs-4 col-sm-4\">\r\n\t\t\t<ul class=\"navbar-nav flex-nowrap flex-row\" >\r\n\t\t\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t\t\t<a *ngIf=\"showMenu\" class=\"dropdown btn nav-link\" title=\"{{( 'dashboards' | translate)}}\" style=\"padding-top:0;cursor: pointer\" data-toggle=\"dropdown\"><i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t\t<div  class=\"dropdown-menu  multi-leve ul.nav.navbar-nav.no-collapse\">\r\n\t\t\t\t\t\t<!--<span class=\"dropdown-divider\">&nbsp; Dashboards</span>-->\r\n\t\t\t\t\t\t<div class=\"dropdown-submenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"dashboards.length > 1\">\r\n\t\t\t\t\t\t\t<a  *ngFor=\"let dashboard of dashboards\" class=\"dropdown-item\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</a>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<div *ngIf=\"authenticated && dashboardCount > 1\" class=\"dropdown-divider\"></div>\r\n\t\t\t\t\t\t\t<a *ngIf=\"authenticated && anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" class=\"dropdown-item\" >{{('login' | translate)}}</a>\r\n\t\t\t\t\t\t\t<a *ngIf=\"authenticated && !anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" class=\"dropdown-item\" >{{('logout' | translate)}}</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"showPanelController\">\r\n\t\t\t\t\t<a  class=\"nav-link btn\" (click)=\"dashboardPanelsHidden = !dashboardPanelsHidden;\"><i class=\"fa fa-sliders-h fa-lg\" aria-hidden=\"true\" style=\"transform:rotate(90deg);\"></i>{{dashboardPanelsVisible}}</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"dashboard\" style=\"display:inline-block;white-space:nowrap\">&nbsp;&nbsp;&nbsp;{{dashboard.name}}</li>\r\n\t\t\t</ul>\r\n\t\t</div>\t\r\n\t\t<div *ngIf=\"dashboard && dashboard.sysPanel\" class=\"col-xs-8 col-sm-8 core-sensors text-xs-center text-sm-right\" style=\"display:inline-block\">\r\n\t\t\t\t&nbsp;<kervi-dashboard-panel [dashboardSizes]=\"dashboardSizes\" [inline]=\"true\" [panel]=\"dashboard.sysPanel\" ></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n\r\n\t\r\n\t<kervi-cam-viewer *ngIf=\"cameraId\" [isBackground]=\"true\" [cameraId]=\"cameraId\" [linkParameters]=\"cameraParameters\"></kervi-cam-viewer>\r\n\t<div #leftPad class=\"controller-pad\" *ngIf=\"showLeftPad\" [style.left.px]=\"leftPadLeft\" [style.top.px]=\"leftPadTop\" style=\"position:absolute;z-index: 1500\">\r\n    \t<kervi-controller-pad [autoCenter]=\"autoCenterLeftPad\" [XValue]=\"leftPadXValue\" [YValue]=\"leftPadYValue\"></kervi-controller-pad>\r\n\t</div>\r\n\t<div #rightPad class=\"controller-pad\" *ngIf=\"showRightPad\" [style.left.px]=\"rightPadLeft\" [style.top.px]=\"rightPadTop\" style=\"position:absolute;z-index: 1500\">\r\n    \t<kervi-controller-pad [autoCenter]=\"autoCenterRightPad\" [XValue]=\"rightPadXValue\" [YValue]=\"rightPadYValue\"></kervi-controller-pad>\r\n\t</div>\r\n\t<div class=\"container-fluid\" style=\"top:0;padding-top:10px;z-index:1999;position:absolute;padding-bottom:30px;\" >\r\n\t\t<ng-container *ngIf=\"isAppEmpty\">\r\n\t\t\t<div class=\"card-deck\">\r\n\t\t\t\t<div class=\"card-body\"   style=\"position:relative;margin-top:35px;\">\r\n\t\t\t\t\t<h1>{{( 'hello_world' | translate)}}</h1>\r\n\t\t\t\t\t<p>{{( 'empty_app' | translate)}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t\r\n\t\t<div  [ngClass]=\"{'dashboard-panels-hidden' : dashboardPanelsHidden }\" style=\"position:relative;margin-top:35px;\">\r\n\t\t\t<kervi-dashboard-panel  *ngFor=\"let panel of dashboard.panels\" [dashboardSizes]=\"defaultSizes\" [panel]=\"panel\" class=\"w-{{panel.width}}\"></kervi-dashboard-panel>\r\n\t\t</div>  \r\n\t</div>\r\n\r\n<footer class=\"footer\" *ngIf=\"dashboard\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-4 text-left\" style=\"text-align: left\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerLeftPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerLeftPanel\"></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-4 text-center\" style=\"text-align:center\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerCenterPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerCenterPanel\"></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-4 text-right\" style=\"text-align: right\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerRightPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerRightPanel\"></kervi-dashboard-panel>\r\n\t\t\t<i class=\"fa fa-expand\" title=\"{{( 'toggle_screen' | translate)}}\" (mousedown)=\"toggleFullScreen()\"></i>&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(router, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.padSize = 180;
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        //this.router.url;
        //console.log("r", this.activatedRoute.params.subscribe)
        this.activatedRoute.params.subscribe(function (params) {
            var dashboardId = params['name'];
            _this.loadDashboard(dashboardId);
            console.log("rid", dashboardId);
            setTimeout(function () {
                var h = window.innerHeight;
                var w = window.innerWidth;
                self.leftPadTop = h / 2 - self.padSize / 2;
                self.leftPadLeft = w / 4 - self.padSize / 2;
                self.rightPadTop = h / 2 - self.padSize / 2;
                self.rightPadLeft = w - w / 4 - self.padSize / 2;
            }, 0);
            //   this.dashboardsService.getDashboards$().subscribe(function(v){
            //     self.setupDashboard()
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("leftPad"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "leftPad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("rightPad"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "rightPad", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDashboardComponent"]));



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\tim privat\github\kervi\kervi-ui\kervi\ui\web\projects\webApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map