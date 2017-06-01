"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Given that our application has a page title and navigation bar', function () {
    beforeEach(function () {
        protractor_1.browser.get('');
    });
    it('The title should be corect ', function () {
        expect(protractor_1.element(protractor_1.by.css('h1')).getText()).toEqual('Angular 2 Application Done With TDD');
    });
    it('There should be a navigation bar', function () {
        expect(protractor_1.element(protractor_1.by.css('app-navbar nav')).isPresent()).toEqual(true);
    });
    it('The first navigation button should say "Products"', function () {
        expect(protractor_1.element(protractor_1.by.css('app-navbar nav a:first-child')).getText()).toEqual('Products');
    });
    it('The second navigation button should say "Orders"', function () {
        expect(protractor_1.element(protractor_1.by.css('app-navbar nav a:nth-child(2)')).getText()).toEqual('Orders');
    });
    it('The third navigation button should say "Members"', function () {
        expect(protractor_1.element(protractor_1.by.css('app-navbar nav a:last-child')).getText()).toEqual('Members');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map