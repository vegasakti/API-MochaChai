import BaseAPI from '$root/page/base.api';

const herokuApi = {
    auth: (data)=> BaseAPI.post('/auth',data),
    delete: (data)=>BaseAPI.delete('/booking/1',data)
}

export default herokuApi;