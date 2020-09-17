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
var Image_Gallery_1 = require("../components/Image-Gallery/Image-Gallery");
var Gallery = /** @class */ (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gallery.prototype.render = function () {
        return (React.createElement("div", { className: 'home-container' },
            React.createElement("div", { className: 'text-container' },
                React.createElement("h1", { className: 'title' }, "Gallery"),
                React.createElement(Image_Gallery_1.default, null))));
    };
    return Gallery;
}(React.PureComponent));
exports.default = Gallery;
//# sourceMappingURL=gallery.js.map