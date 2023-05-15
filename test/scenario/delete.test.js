import { assert } from "chai";
import herokuApi from '$root/page/heroku.api';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

before(async() => {
        const resDelBookingID = await herokuApi.get_booking_id();
        //console.log(resGetBookingID);
        
        global.bookingId = resDelBookingID.data[getRandomInt(100)].bookingid;
        // console.log(bookingId);
        // console.log(getRandomInt(13));
});

describe('As a User, I want to delete an id', () => {
    it('should sucessfull delete booking ID', async () => {
        
        const response = await herokuApi.delete();

        assert.equal(response.status, 201);
        assert.strictEqual(typeof response.data, 'string');
    });

    it('should not sucessfull delete invalid booking ID', async () => {
        
        const response = await herokuApi.delete();

        assert.equal(response.status, 405);
        assert.strictEqual(typeof response.data, 'string');
    });

});