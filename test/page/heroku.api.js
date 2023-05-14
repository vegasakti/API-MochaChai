import BaseAPI from '$root/page/base.api';
import AuthAPI from '$root/page/auth.api';

const herokuApi = {
    auth: (data)=> BaseAPI.post('/auth',data),
    delete: (data)=>AuthAPI.delete('/booking/1',data),
    getBookingId: (data)=> BaseAPI.get('/booking',data),
    getBooking: (data)=> BaseAPI.get('/booking/2',data),
    ping: (data)=> BaseAPI.get('/ping', data),
    partial_update: (data)=> AuthAPI.patch('/booking/'+ bookingID, data),
    get_booking_id: (data)=> AuthAPI.get('/booking', data)
}

export default herokuApi;