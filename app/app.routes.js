"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_component_1 = require("./view/products.component");
var orders_component_1 = require("./view/orders.component");
var members_component_1 = require("./members/members.component");
var person_component_1 = require("./members/person/person.component");
exports.rootRouterConfig = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'orders', component: orders_component_1.OrdersComponent },
    { path: 'members', component: members_component_1.MembersComponent },
    { path: 'person/:id', component: person_component_1.PersonComponent }
];
//# sourceMappingURL=app.routes.js.map