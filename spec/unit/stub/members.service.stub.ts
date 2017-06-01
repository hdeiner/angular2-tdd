
import { Component, Directive, Injectable, Input } from '@angular/core';

export class MembersServiceSpy {
  members = {
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

  getData = jasmine.createSpy('getData').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.members))
  );

  getPerson = jasmine.createSpy('getPerson').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.members))
  );

  searchQuery = jasmine.createSpy('searchQuery').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.members))
  );

}
