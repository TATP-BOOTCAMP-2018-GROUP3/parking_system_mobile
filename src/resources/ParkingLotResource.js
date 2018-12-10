const hostname = "https://parking-system-backend.herokuapp.com";
const resourceName = "/parkinglots";

export default {
    getAll: () => fetch(hostname + resourceName , {method: 'GET', mode: 'cors'})
}
  