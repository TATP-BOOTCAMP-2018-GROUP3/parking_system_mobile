const hostname = "https://parking-system-backend.herokuapp.com";
const resourceName = "/returnorders";

export default {
    getByStatus: (status) => fetch(hostname + resourceName + "?status=" + status, {method: 'GET', mode: 'cors'}),
    add: (order) => fetch(hostname + resourceName,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify(order)
                    }),
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
  