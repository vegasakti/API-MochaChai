import { assert } from 'chai';
import JsonSchema from "chai-json-schema";
import herokuApi from '$root/page/heroku.api';
import * as data from '$root/data/user.data';
import * as schema from '$root/json_schema/update.schema';
import { getParams } from '$helper/lib-api';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

before(async() => {
        const resGetBookingID = await herokuApi.get_booking_id();
        //console.log(resGetBookingID);
        
        global.bookingID = resGetBookingID.data[getRandomInt(13)].bookingid;
        //console.log(bookingID);
        //console.log(getRandomInt(13));
});

describe('Partial Update Booking', () => {
    it('Successfully update additional needs in current booking', async() => {
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_1);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.additionalneeds, data.PARTIAL_UPDATE_CASE_1.additionalneeds);
    }).timeout(15000);

    it('Successfully update firstname in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_2);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_2);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.firstname, data.PARTIAL_UPDATE_CASE_2.firstname);
    }).timeout(15000);

    it('Successfully update lastname of in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_3);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_3);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.lastname, data.PARTIAL_UPDATE_CASE_3.lastname);
    }).timeout(15000);

    it('Successfully update total price in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_4);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_4);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.totalprice, data.PARTIAL_UPDATE_CASE_4.totalprice);
    }).timeout(15000);

    it('Successfully update status deposit paid in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_5);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_5);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.depositpaid, data.PARTIAL_UPDATE_CASE_5.depositpaid);
    }).timeout(15000);

    it('Successfully update dates in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_6);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_6);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.bookingdates[0], data.PARTIAL_UPDATE_CASE_6.bookingdates[0]);
        assert.equal(resPartialUpdate.data.bookingdates[1], data.PARTIAL_UPDATE_CASE_6.bookingdates[1]);
    }).timeout(15000);
    
    // Update firstname and lastname
    it('Successfully update two data in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_7.lastname);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_7);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.firstname, data.PARTIAL_UPDATE_CASE_7.firstname);
        assert.equal(resPartialUpdate.data.lastname, data.PARTIAL_UPDATE_CASE_7.lastname);
    }).timeout(15000);

    // Update : total price, depositpaid, booking dates, and additional needs
    it('Successfully update some data in current booking', async() => {
        //console.log(data.PARTIAL_UPDATE_CASE_8);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_CASE_8);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
        assert.equal(resPartialUpdate.data.totalprice, data.PARTIAL_UPDATE_CASE_8.totalprice);
        assert.equal(resPartialUpdate.data.depositpaid, data.PARTIAL_UPDATE_CASE_8.depositpaid);
        assert.equal(resPartialUpdate.data.bookingdates[0], data.PARTIAL_UPDATE_CASE_8.bookingdates[0]);
        assert.equal(resPartialUpdate.data.bookingdates[1], data.PARTIAL_UPDATE_CASE_8.bookingdates[1]);
        assert.equal(resPartialUpdate.data.additionalneeds, data.PARTIAL_UPDATE_CASE_8.additionalneeds);
    }).timeout(15000);

    //Update dengan mengosongkan beberapa data
    it('Successfully partial update with emptying some data', async() => {
        //console.log(data.PARTIAL_UPDATE_EMPTY);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_EMPTY);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.isNull(resPartialUpdate.data.firstname, data.PARTIAL_UPDATE_EMPTY.firstname);
        assert.isNull(resPartialUpdate.data.totalprice, data.PARTIAL_UPDATE_EMPTY.totalprice);
        assert.isNull(resPartialUpdate.data.additionalneeds, data.PARTIAL_UPDATE_EMPTY.additionalneeds);
    }).timeout(15000);

    //Update dengan mengosongkan beberapa data
    it('Successfully partial update with emptying some data', async() => {
        //console.log(data.PARTIAL_UPDATE_EMPTY);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_EMPTY);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 200);
        assert.isNull(resPartialUpdate.data.firstname, data.PARTIAL_UPDATE_EMPTY.firstname);
        assert.isNull(resPartialUpdate.data.totalprice, data.PARTIAL_UPDATE_EMPTY.totalprice);
        assert.isNull(resPartialUpdate.data.additionalneeds, data.PARTIAL_UPDATE_EMPTY.additionalneeds);
    }).timeout(15000);

    //Update dengan invalid data
    it('Failed partial update with invalid data', async() => {
        //console.log(data.PARTIAL_UPDATE_EMPTY);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_INVALID_DATA);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 422);
        assert.equal(resPartialUpdate.statusText, "Unprocessed Entity");
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
    }).timeout(15000);

    //Update dengan checkout date kurang dari checkin date
    it('Failed partial update with invalid data', async() => {
        //console.log(data.PARTIAL_UPDATE_EMPTY);
        const resPartialUpdate = await herokuApi.partial_update(data.PARTIAL_UPDATE_INVALID_CHECKOUT);

        //console.log(resPartialUpdate);
        assert.equal(resPartialUpdate.status, 422);
        assert.equal(resPartialUpdate.statusText, "Unprocessed Entity");
        assert.jsonSchema(resPartialUpdate.data, schema.UPDATE_SCHEMA);
    }).timeout(15000);

})