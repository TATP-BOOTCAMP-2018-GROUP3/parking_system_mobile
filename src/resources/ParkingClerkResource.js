import { hostname } from'../config/Config';
const resourceName = "/parkingclerks";

export default {
    getOwnedParkingOrders: () => fetch(hostname + resourceName + "/" + localStorage.getItem("ID") + "/parkingorders",
                            {
                                method: 'GET', 
                                mode: 'cors',
                                headers: new Headers({
                                    'Authorization': 'Bearer ' + localStorage.getItem('AUTH')
                                })
                            }),
    getOwnedReturnOrders: () => fetch(hostname + resourceName + "/" + localStorage.getItem("ID") + "/returnorders",
                            {
                                method: 'GET', 
                                mode: 'cors',
                                headers: new Headers({
                                    'Authorization': 'Bearer ' + localStorage.getItem('AUTH')
                                })
                            })
  
}
  