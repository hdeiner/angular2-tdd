"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../../app/app.component");
var navbar_component_1 = require("../../app/nav/navbar.component");
var router_stubs_js_1 = require("./stub/router-stubs.js");
describe('AppComponent test suite', function () {
    var comp;
    var fixture;
    var de;
    var navDestination;
    var navLinks;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent,
                router_stubs_js_1.RouterLinkStubDirective,
                router_stubs_js_1.RouterOutletStubComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        // trigger initial data binding
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        navDestination = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(router_stubs_js_1.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        navLinks = navDestination
            .map(function (de) { return de.injector.get(router_stubs_js_1.RouterLinkStubDirective); });
    });
    it('should create and initiate the App component', function () {
        expect(comp).toBeDefined();
    });
    it('should have expected test in <h1> element', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Angular 2 Application Done With TDD/i, '<h1> should say something about "Angular 2 Application Done With TDD"');
    });
    it('can get RouterLinks from template', function () {
        expect(navLinks.length).toBe(3, 'should have 3 links');
        expect(navLinks[0].linkParams).toBe('/products', '1st link should go to products');
        expect(navLinks[1].linkParams).toBe('/orders', '1st link should go to orders');
        expect(navLinks[2].linkParams).toBe('/members', '1st link should go to members search page');
    });
    it('can click nav items link in template and navigate accordingly', function () {
        navDestination[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(navLinks[0].navigatedTo).toBe('/products');
        navDestination[1].triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(navLinks[1].navigatedTo).toBe('/orders');
        navDestination[2].triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(navLinks[2].navigatedTo).toBe('/members');
    });
});
//# sourceMappingURL=app.component.spec.js.map