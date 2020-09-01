"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var login = /** @class */ (function (_super) {
    __extends(login, _super);
    function login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    login.prototype.render = function () {
        return (React.createElement("div", { className: 'home-container' },
            React.createElement("div", { className: 'text-container' },
                React.createElement("h1", { className: 'title' }, "Login"),
                React.createElement("p", { className: 'title-text' }, "Login here"),
                React.createElement("form", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "username" }, "Username"),
                        React.createElement("input", { id: "username", name: "username" })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "password" }, "Password"),
                        React.createElement("input", { id: "password", name: "password" }))))));
    };
    return login;
}(React.PureComponent));
exports.default = login;
//# sourceMappingURL=login.js.map