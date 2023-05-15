import BaseAPI from '$root/page/base.api';
import AuthAPI from '$root/page/auth.api';


const herokuApi = {
    auth: (data)=> BaseAPI.post('/auth',data),
    create: (data)=> BaseAPI.post('booking',data),
    delete: (data)=>AuthAPI.delete('/booking/'+ bookingId,data),
    booking: (data)=> BaseAPI.post('/booking',data),
    update: (data)=> BaseAPI.update('/booking/'+ booking, data),
    getBookingId: (data)=> BaseAPI.get('/booking',data),
    getBooking: (data)=> BaseAPI.get('/booking/'+ bookingID,data),
    ping: (data)=> BaseAPI.get('/ping', data),
    partial_update: (data)=> AuthAPI.patch('/booking/'+ bookingID, data),
    get_booking_id: (data)=> AuthAPI.get('/booking', data)
}

export default herokuApi;