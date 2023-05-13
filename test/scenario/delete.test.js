import { assert } from "chai";
import herokuApi from '$root/page/heroku.api';
import * as data from '$root/data/user.data';

describe('As a User, I want to delete ID', () => {
    it('should sucesfully delete ID', async () => {
        const response = await herokuApi.auth(data.VALID_AUTH);

        assert.equal(response.status, 200);
        assert.isString(response.data.token);
       // expect(response.data).to.be.jsonSchema(shcema.AUTH_SCHEMA);
        assert.jsonSchema(response.data, shcema.AUTH_SCHEMA);

    });
});