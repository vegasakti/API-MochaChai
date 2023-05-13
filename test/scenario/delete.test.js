import { assert } from "chai";
import herokuApi from '$root/page/heroku.api';

describe('Delete', () => {
    it('it should sucessfull delete booking ID', async () => {
        const response = await herokuApi.delete();

        assert.equal(response.status, 201);
    });
});