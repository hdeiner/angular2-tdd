"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Given the members search feature', function () {
    var searchBox, searchButton, searchResult;
    beforeEach(function () {
        protractor_1.browser.get('');
        protractor_1.element(protractor_1.by.linkText('Members')).click();
        searchButton = protractor_1.element(protractor_1.by.buttonText('Search'));
        searchBox = protractor_1.element(protractor_1.by.css('form input'));
    });
    it('There should be search input area and search button', function () {
        expect(searchBox.isPresent()).toEqual(true);
        expect(searchButton.isPresent()).toEqual(true);
    });
    it('There should be 5 items to search from', function () {
        searchResult = protractor_1.element.all(protractor_1.by.css('#searchList tbody tr'));
        expect(searchResult.count()).toBe(5);
    });
    it('After searching for "Howard", there should be one item in search results', function () {
        console.log('about to send keys!!!');
        searchBox.sendKeys('Howard');
        console.log('sent keys!!!');
        searchButton.click();
        console.log('clicked!!!');
        searchResult = protractor_1.element.all(protractor_1.by.css('#searchList tbody tr'));
        expect(searchResult.count()).toBe(1);
    });
});
//# sourceMappingURL=members.component.e2e-spec.js.map