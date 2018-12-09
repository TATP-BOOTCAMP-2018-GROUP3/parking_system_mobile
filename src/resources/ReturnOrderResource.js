const hostname = "http://localhost:8080/";
const resourceName = "/returnorders";

export default {
    getByStatus: (status) => fetch(hostname + resourceName + "?status=" + status, {method: 'GET', mode: 'cors'}),
    markCompleted: (order) => fetch(hostname + resourceName + "/" + order.id,
                    {
                        method: 'PATCH',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({...order, status: 'Completed'})
                    })
  
  }
  