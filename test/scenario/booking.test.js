import chai, { assert, expect } from "chai";
import JsonSchema from "chai-json-schema";
import herokuApi from '$root/page/heroku.api';
import * as data from '$root/data/user.data';
import * as shcema from '$root/json_schema/auth.schema';
import { CREATE_SCHEMA } from "../json_schema/booking.schema";



chai.use(JsonSchema);

describe('booking', () => {
    it('should sucesfully create booking', async () => {
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
        const response = await herokuApi.booking(data.CREATE);
        assert.equal(response.status, 200);
        assert.jsonSchema(response.data, CREATE_SCHEMA.JsonSchema);
        
    
})})
