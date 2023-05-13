import BaseAPI from '$root/page/base.api';
import AuthAPI from '$root/page/auth.api';


const herokuApi = {
    auth: (data)=> BaseAPI.post('/auth',data),
    delete: (data)=>AuthAPI.delete('/booking/1',data)
}

export default herokuApi;