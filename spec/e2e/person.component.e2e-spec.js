"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Given the members detail view that comes when you search for "Howard" and click on the link', function () {
    beforeEach(function () {
        protractor_1.browser.get('members');
        var searchButton = protractor_1.element(protractor_1.by.css('form button'));
        var searchBox = protractor_1.element(protractor_1.by.css('form input'));
        searchBox.sendKeys('Howard');
        searchButton.click();
        var resultItem = protractor_1.element(protractor_1.by.linkText('Howard Deiner'));
        resultItem.click();
    });
    it('The Member Details view should load', function () {
        var resultDetail = protractor_1.element(protractor_1.by.css('#personDetails'));
        expect(resultDetail.isDisplayed()).toBeTruthy();
    });
    it('The name should display as "Howard Deiner"', function () {
        var name = protractor_1.element(protractor_1.by.xpath('//*[@id="personDetails"]/tbody/tr[1]/td[2]'));
        expect(name.getText()).toEqual('Howard Deiner');
    });
    it('The phone should display as "(203) 243-1515"', function () {
        var name = protractor_1.element(protractor_1.by.xpath('//*[@id="personDetails"]/tbody/tr[2]/td[2]'));
        expect(name.getText()).toEqual('(203) 243-1515');
    });
    it('The street should display as "28 Lincoln Park Road"', function () {
        var name = protractor_1.element(protractor_1.by.xpath('//*[@id="personDetails"]/tbody/tr[3]/td[2]'));
        expect(name.getText()).toEqual('28 Lincoln Park Road');
    });
    it('The city should display as "Pequannock"', function () {
        var name = protractor_1.element(protractor_1.by.xpath('//*[@id="personDetails"]/tbody/tr[4]/td[2]'));
        expect(name.getText()).toEqual('Pequannock');
    });
    it('The state should display as "NJ"', function () {
        var name = protractor_1.element(protractor_1.by.xpath('//*[@id="personDetails"]/tbody/tr[5]/td[2]'));
        expect(name.getText()).toEqual('NJ');
    });
    it('The zip should display as "07440"', function () {
        var name = protractor_1.element(protractor_1.by.xpath('//*[@id="personDetails"]/tbody/tr[6]/td[2]'));
        expect(name.getText()).toEqual('07440');
    });
});
//# sourceMappingURL=person.component.e2e-spec.js.map