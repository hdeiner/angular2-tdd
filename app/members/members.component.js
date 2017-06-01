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
var router_1 = require("@angular/router");
var members_service_1 = require("../services/members.service");
var MembersComponent = (function () {
    function MembersComponent(membersService, router) {
        this.membersService = membersService;
        this.router = router;
        this.memberList = [];
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    MembersComponent.prototype.onSearch = function (searchResult) {
        this.memberList = searchResult;
    };
    MembersComponent.prototype.viewDetails = function (id) {
        this.router.navigate(['/person', id]);
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.membersService.getData()
            .then(function (data) {
            data.map(function (item) {
                _this.memberList.push(item);
            });
        });
        return this.memberList;
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    core_1.Component({
        selector: 'app-member',
        moduleId: module.id,
        templateUrl: 'members.component.html',
        styleUrls: ['members.component.css']
    }),
    __metadata("design:paramtypes", [members_service_1.MembersService, router_1.Router])
], MembersComponent);
exports.MembersComponent = MembersComponent;
//# sourceMappingURL=members.component.js.map