import chai, { assert, expect } from "chai";
import JsonSchema from "chai-json-schema";
import herokuApi from '$root/page/heroku.api';
import * as data from '$root/data/user.data';
import * as shcema from '$root/json_schema/auth.schema';



chai.use(JsonSchema);

describe('As a User, I want to create auth token', () => {
    it('should sucesfully create auth token', async () => {
        const response = await herokuApi.auth(data.VALID_AUTH);

        assert.equal(response.status, 200);
        assert.isString(response.data.token);
       // expect(response.data).to.be.jsonSchema(shcema.AUTH_SCHEMA);
        assert.jsonSchema(response.data, shcema.AUTH_SCHEMA);

    });

    it('should failed create auth token', async () => {
        const response = await herokuApi.auth(data.INVALID_AUTH);

        assert.equal(response.status, 400);
        assert.jsonSchema(response.data, shcema.INVALID_AUTH_SCHEMA);

    });
});