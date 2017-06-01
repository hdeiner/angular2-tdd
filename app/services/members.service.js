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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MembersService = (function () {
    function MembersService(http) {
        this.http = http;
    }
    MembersService.prototype.getAPIData = function () {
        return this.http.get('app/data/people.json');
    };
    MembersService.prototype.getData = function () {
        return this.getAPIData()
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MembersService.prototype.searchQuery = function (q) {
        if (!q || q === '*') {
            q = '';
        }
        else {
            q = q.toLowerCase();
        }
        return this.getData()
            .then(function (data) {
            var results = [];
            data.map(function (item) {
                if (JSON.stringify(item).toLowerCase().includes(q)) {
                    results.push(item);
                }
            });
            return results;
        });
    };
    MembersService.prototype.getPerson = function (id) {
        return this.getData()
            .then(function (data) { return data.find(function (member) { return member.id === id; }); });
    };
    return MembersService;
}());
MembersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MembersService);
exports.MembersService = MembersService;
var Person = (function () {
    function Person(obj) {
        this.id = obj && Number(obj.id) || null;
        this.name = obj && obj.name || null;
        this.phone = obj && obj.phone || null;
        this.address = obj && obj.address || null;
    }
    return Person;
}());
exports.Person = Person;
var Address = (function () {
    function Address(obj) {
        this.street = obj && obj.street || null;
        this.city = obj && obj.city || null;
        this.state = obj && obj.state || null;
        this.zip = obj && obj.zip || null;
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=members.service.js.map