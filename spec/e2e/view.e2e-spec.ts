import { browser, element, by } from 'protractor';

describe('Given the views that the navigation bar provides', () => {

  let view1, view2, view1Link, view2Link;

  beforeEach( () => {
    browser.get('products');

    view1 = element(by.id('products'));
    view2 = element(by.id('orders'));

    view1Link = element(by.linkText('Products'));
    view2Link = element(by.linkText('Orders'));
  });

  it('Products should load and be visible initially', () => {
    expect(view1.isPresent()).toBeTruthy();
    expect(view2.isPresent()).toBeFalsy();
  });

  it('Products should have body content of "All of our products"', () => {
    expect(view1.getText()).toEqual('All of our products');
  });

  it('When I click the Orders button, Orders should become visible', () => {
    view2Link.click();
    expect(view2.isPresent()).toBeTruthy();
    expect(view1.isPresent()).toBeFalsy();
  });

  it('When I click the Orders button, there should be body content of "All of our orders"', () => {
    view2Link.click();
    expect(view2.getText()).toEqual('All of our orders');
  });

  it('When I clock the Products button again, Products should become visible', () => {
    view1Link.click();
    expect(view1.isPresent()).toBeTruthy();
    expect(view2.isPresent()).toBeFalsy();
  });

});
