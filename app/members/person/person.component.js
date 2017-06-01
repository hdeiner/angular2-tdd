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
var members_service_1 = require("../../services/members.service");
var PersonComponent = (function () {
    function PersonComponent(membersService, route, router) {
        this.membersService = membersService;
        this.route = route;
        this.router = router;
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.membersService.getPerson(id).then(function (person) {
                _this.person = person;
            });
        });
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    core_1.Component({
        selector: 'app-person',
        moduleId: module.id,
        templateUrl: 'person.component.html',
        styleUrls: ['../members.component.css']
    }),
    __metadata("design:paramtypes", [members_service_1.MembersService, router_1.ActivatedRoute, router_1.Router])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map