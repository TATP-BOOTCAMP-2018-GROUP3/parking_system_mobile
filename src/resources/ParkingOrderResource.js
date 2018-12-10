const hostname = "https://parking-system-backend.herokuapp.com";
const resourceName = "/parkingorders";

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
    grab: (order) => fetch(hostname + resourceName + "/" + order.id,
                    {
                        method: 'PUT',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({...order, status: 'In Progress'})
                    }),
    markCompleted: (order) => fetch(hostname + resourceName + "/" + order.id,
                    {
                        method: 'PUT',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({...order, status: 'Completed'})
                    })
  
  }
  