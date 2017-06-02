import { fakeAsync, inject, TestBed } from '@angular/core/testing';

import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MembersServiceSpy } from './stub/members.service.stub.js';
import { MembersService } from '../../app/services/members.service';

const mockData = {
  'id': 2,
  'name': 'Howard Deiner',
  'phone': '(203) 243-1515',
  'address': {
    'street': '28 Lincoln Park Road',
    'city': 'Pequannock',
    'state': 'NJ',
    'zip': '07440'
  }
};

describe('Given service should be defined and response HTTP request', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MembersService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, defaultOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ],
    });
  });

  it('should initiate the member service', inject([MembersService], (membersService) => {
    expect(membersService).toBeDefined();
  }));


  it('should return response when send HTTP request', fakeAsync(
    inject([MockBackend, MembersService], (backend, membersService) => {
      backend.connections.subscribe(
        (c: MockConnection) => {
          c.mockRespond(
            new Response(
              new ResponseOptions({ body: mockData })
            ));
          });

        membersService.getAPIData().subscribe(res => {
          expect(res.json()).toEqual(mockData);
        });
  })));

});

describe('Given service will response for every method', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MembersService, useClass: MembersServiceSpy }]
    });
  });


  it('should return data', fakeAsync(inject(
    [MembersService], (service) => {
      service.getData();
      expect(service.members).toEqual(mockData);
    })));

    it('should return data', fakeAsync(inject(
      [MembersService], (service) => {
        service.searchQuery('Howard');
        expect(service.members.name).toBe('Howard Deiner');
    })));

    it('should return data', fakeAsync(inject(
      [MembersService], (service) => {
        service.getPerson(2);
        expect(service.members.id).toBe(2);
    })));

});
