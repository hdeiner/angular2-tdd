import { browser, element, by } from 'protractor';

describe('Given the members search feature', () => {

  let searchBox, searchButton, searchResult;

  beforeEach(() => {
    browser.get('');
    element(by.linkText('Members')).click();
    searchButton = element(by.buttonText('Search'));
    searchBox = element(by.css('form input'));
  });

  it('There should be search input area and search button', () => {
    expect(searchBox.isPresent()).toEqual(true);
    expect(searchButton.isPresent()).toEqual(true);
  });

  it('There should be 5 items to search from', () => {
    searchResult = element.all(by.css('#searchList tbody tr'));
    expect(searchResult.count()).toBe(5);
  });

  it('After searching for "Howard", there should be one item in search results', () => {
      console.log('about to send keys!!!');
      searchBox.sendKeys('Howard')
      console.log('sent keys!!!');
      searchButton.click()
      console.log('clicked!!!');
      searchResult = element.all(by.css('#searchList tbody tr'));
      expect(searchResult.count()).toBe(1);
    });
});
