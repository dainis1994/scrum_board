"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent() {
        var _this = this;
        this.sidenavClose = new core_1.EventEmitter();
        this.onSidenavClose = function () {
            _this.sidenavClose.emit();
        };
    }
    SidenavListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav-list',
            templateUrl: './sidenav-list.component.html',
            styleUrls: ['./sidenav-list.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SidenavListComponent);
    return SidenavListComponent;
}());
exports.SidenavListComponent = SidenavListComponent;
//# sourceMappingURL=sidenav-list.component.js.map