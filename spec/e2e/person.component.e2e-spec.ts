import {browser, element, by, ExpectedConditions} from 'protractor';

describe('Given the members detail view that comes when you search for "Howard" and click on the link', () => {

  beforeEach(() => {
    browser.get('members');
    let searchButton = element(by.css('form button'));
    let searchBox = element(by.css('form input'));
    searchBox.sendKeys('Howard');
    searchButton.click();
    let resultItem = element(by.linkText('Howard Deiner'));
    resultItem.click();
  });

  it('The Member Details view should load', () => {
    const resultDetail = element(by.css('#personDetails'))
    expect(resultDetail.isDisplayed()).toBeTruthy();
  });

  it('The name should display as "Howard Deiner"', () => {
    const name = element(by.xpath('//*[@id="personDetails"]/tbody/tr[1]/td[2]'))
    expect<any>(name.getText()).toEqual('Howard Deiner');
  });
  it('The phone should display as "(203) 243-1515"', () => {
    const name = element(by.xpath('//*[@id="personDetails"]/tbody/tr[2]/td[2]'))
    expect<any>(name.getText()).toEqual('(203) 243-1515');
  });
  it('The street should display as "28 Lincoln Park Road"', () => {
    const name = element(by.xpath('//*[@id="personDetails"]/tbody/tr[3]/td[2]'))
    expect<any>(name.getText()).toEqual('28 Lincoln Park Road');
  });
  it('The city should display as "Pequannock"', () => {
    const name = element(by.xpath('//*[@id="personDetails"]/tbody/tr[4]/td[2]'))
    expect<any>(name.getText()).toEqual('Pequannock');
  });
  it('The state should display as "NJ"', () => {
    const name = element(by.xpath('//*[@id="personDetails"]/tbody/tr[5]/td[2]'))
    expect<any>(name.getText()).toEqual('NJ');
  });
  it('The zip should display as "07440"', () => {
    const name = element(by.xpath('//*[@id="personDetails"]/tbody/tr[6]/td[2]'))
    expect<any>(name.getText()).toEqual('07440');
  });
});
