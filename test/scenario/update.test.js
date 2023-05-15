import chai, { assert, expect } from "chai";
import JsonSchema from "chai-json-schema";
import herokuApi from '$root/page/heroku.api';
import * as data from '$root/data/user.data';
//import * as schema from '$root/json_schema/update.schema';
import { getParams } from '$helper/lib-api';
import { UPDATE_SCHEMA2 } from "../json_schema/update.schema";




chai.use(JsonSchema);

describe.only('updatebooking', () => {
    it('should sucesfully update booking', async () => {
        let booking =  {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
        const response = await herokuApi.booking(data.update_BOOKING);
        assert.equal(response.status, 200);
        assert.jsonSchema(response.data, UPDATE_SCHEMA2.JsonSchema);
    
})})
