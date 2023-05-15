import chai, { assert, expect } from "chai";
import JsonSchema from "chai-json-schema";
import herokuApi from '$root/page/heroku.api';
import * as shcema from '$root/json_schema/booking.id.schema';



chai.use(JsonSchema);

describe('As a User, I want to get booking id', () => {
    it('should sucesfully get booking id when insert a valid data', async () => {
        const response = await herokuApi.getBookingId();

        assert.equal(response.status, 200);
        assert.jsonSchema(response.data, shcema.BOOKINGID_SCHEMA);
    });

});