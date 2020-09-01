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
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (React.createElement("div", { className: 'home-container' },
            React.createElement("div", { className: 'text-container' },
                React.createElement("h1", { className: 'title' }, "About text"),
                React.createElement("p", { className: 'title-text' }, "Brownie ice cream brownie cookie fruitcake gummies muffin tiramisu chupa chups. Chocolate cake cheesecake liquorice jelly-o topping cotton candy. Pudding chocolate cake chupa chups. Chocolate cheesecake candy canes marzipan. Cake macaroon gummi bears pie wafer jujubes halvah marzipan. Jujubes chocolate cake cake pastry fruitcake tart jelly. Cotton candy sugar plum jujubes pastry jujubes. Gummies danish sweet roll candy tiramisu. Wafer bear claw croissant sweet roll bonbon. Brownie carrot cake biscuit chocolate bonbon powder jelly. Topping sweet roll cotton candy lollipop croissant sweet roll. Sweet roll candy canes bonbon cake jelly beans gingerbread liquorice. Gummi bears topping ice cream cake. Icing fruitcake lollipop sweet."),
                React.createElement("div", { className: 'cta-container' },
                    React.createElement("h2", { className: 'cta' }, "Want to help with the project? Check the donate page or send me an e-mail:")),
                React.createElement("a", { className: "contact-button btn btn--large", href: "mailto:support@example.com", rel: "noopener noreferrer" }, "Contact"))));
    };
    return About;
}(React.PureComponent));
exports.default = About;
//# sourceMappingURL=about.js.map