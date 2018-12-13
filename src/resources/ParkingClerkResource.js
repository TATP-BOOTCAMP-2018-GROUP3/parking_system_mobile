const hostname = "https://parking-system-backend-prod.herokuapp.com";
const resourceName = "/parkingclerks";

export default {
    getOwnedParkingOrders: () => fetch(hostname + resourceName + "/" + localStorage.getItem("ID") + "/parkingorders",
                            {
                                method: 'GET', 
                                mode: 'cors',
                                headers: new Headers({
                                    'Authorization': 'Bearer ' + localStorage.getItem('AUTH')
                                })
                            })
  
}
  