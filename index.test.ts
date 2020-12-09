import server from './server';
import { Express } from 'express-serve-static-core';


jest.mock('./server');

const mockApp = {
    listen: jest.fn((port, callback) => {
        callback()
    })
};


describe('EntryPoint', () => {
    let consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;
    beforeAll(() => {
        const spy = jest.spyOn(server, 'create');
        spy.mockReturnValue(mockApp as unknown as Express);
        consoleSpy = jest.spyOn(console, 'log');
    });
    it('should return  start the server with the given port', () => {
        require('.');
        expect(mockApp.listen).toHaveBeenCalledWith(8080, expect.any(Function));
    });

});