import { assert } from 'chai';
import herokuApi from '$root/page/heroku.api'; 

describe('Ping - Check Health', () => {
    it('Verify Simple Health Check Endpoint is up and running', async() => {
        const response = await herokuApi.ping();

        assert.equal(response.status, 201);
        assert.equal(response.statusText, "Created");
    }).timeout(15000); 
});