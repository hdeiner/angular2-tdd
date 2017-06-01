"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Given the views that the navigation bar provides', function () {
    var view1, view2, view1Link, view2Link;
    beforeEach(function () {
        protractor_1.browser.get('products');
        view1 = protractor_1.element(protractor_1.by.id('products'));
        view2 = protractor_1.element(protractor_1.by.id('orders'));
        view1Link = protractor_1.element(protractor_1.by.linkText('Products'));
        view2Link = protractor_1.element(protractor_1.by.linkText('Orders'));
    });
    it('Products should load and be visible initially', function () {
        expect(view1.isPresent()).toBeTruthy();
        expect(view2.isPresent()).toBeFalsy();
    });
    it('Products should have body content of "All of our products"', function () {
        expect(view1.getText()).toEqual('All of our products');
    });
    it('When I click the Orders button, Orders should become visible', function () {
        view2Link.click();
        expect(view2.isPresent()).toBeTruthy();
        expect(view1.isPresent()).toBeFalsy();
    });
    it('When I click the Orders button, there should be body content of "All of our orders"', function () {
        view2Link.click();
        expect(view2.getText()).toEqual('All of our orders');
    });
    it('When I clock the Products button again, Products should become visible', function () {
        view1Link.click();
        expect(view1.isPresent()).toBeTruthy();
        expect(view2.isPresent()).toBeFalsy();
    });
});
//# sourceMappingURL=view.e2e-spec.js.map