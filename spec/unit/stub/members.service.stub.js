"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MembersServiceSpy = (function () {
    function MembersServiceSpy() {
        var _this = this;
        this.members = {
            "id": 2,
            "name": "Howard Deiner",
            "phone": "(203) 243-1515",
            "address": {
                "street": "28 Lincoln Park Road",
                "city": "Pequannock",
                "state": "NJ",
                "zip": "07440"
            }
        };
        this.getData = jasmine.createSpy('getData').and.callFake(function () { return Promise
            .resolve(true)
            .then(function () { return Object.assign({}, _this.members); }); });
        this.getPerson = jasmine.createSpy('getPerson').and.callFake(function () { return Promise
            .resolve(true)
            .then(function () { return Object.assign({}, _this.members); }); });
        this.searchQuery = jasmine.createSpy('searchQuery').and.callFake(function () { return Promise
            .resolve(true)
            .then(function () { return Object.assign({}, _this.members); }); });
    }
    return MembersServiceSpy;
}());
exports.MembersServiceSpy = MembersServiceSpy;
//# sourceMappingURL=members.service.stub.js.map