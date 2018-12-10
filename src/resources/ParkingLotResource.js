const hostname = "http://localhost:8080";
const resourceName = "/parkinglots";

export default {
    getAll: () => fetch(hostname + resourceName , {method: 'GET', mode: 'cors'})
}
  