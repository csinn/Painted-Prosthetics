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
require("./Footer.css");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("div", { className: "footer-container" },
            React.createElement("a", { href: "https://github.com/csinn", target: "_blank", rel: "noopener noreferrer" },
                React.createElement("p", { className: 'created-by' },
                    "Created By: ",
                    React.createElement("img", { className: 'CSINN', src: '/47311935.png', alt: '' })))));
    };
    return Footer;
}(React.Component));
exports.default = Footer;
//# sourceMappingURL=Footer.js.map