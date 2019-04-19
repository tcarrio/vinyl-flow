import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  const INJECTED_TOKEN = 'OMG IM AUTHENTICATED'

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should return true when authenticated', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.token = INJECTED_TOKEN;
    expect(service.isAuthenticated()).toBeTruthy();
  })

  it('should return valid auth header', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.token = INJECTED_TOKEN;
    const expectedHeader = { 'Authorization': 'Bearer ' + INJECTED_TOKEN }
    const actualHeader = service.getAuthHeader();
    expect(actualHeader['Authorization']).toBe(expectedHeader['Authorization']);
  })
});
