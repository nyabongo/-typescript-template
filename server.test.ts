import { request } from 'http';
import server from './server';
import testRequest from 'supertest';
import { Express } from 'express-serve-static-core';

describe('server.create', () => {
    it('should be a function', () => {
        expect(server.create).toBeInstanceOf(Function);
    });
    describe('App', () => {
        let app: Express;
        beforeEach(() => {
            app = server.create()
        });
        it('should  return a status of 200', async() => {
            await testRequest(app)
                .get('/')
                .expect(200,'Express + Typescript server');
        });
    });
});