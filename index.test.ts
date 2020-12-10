import server from './server';
import { Express } from 'express-serve-static-core';


jest.mock('./server');

const mockApp = {
    listen: jest.fn((port, callback) => {
        callback()
    })
};


describe('EntryPoint', () => {
    beforeAll(() => {
        const spy = jest.spyOn(server, 'create');
        spy.mockReturnValue(mockApp as unknown as Express);
    });
    it('should return  start the server with the given port', () => {
        const port = '9876';
        process.env.PORT = port
        require('.');
        expect(mockApp.listen).toHaveBeenCalledWith(port, expect.any(Function));
    });

});