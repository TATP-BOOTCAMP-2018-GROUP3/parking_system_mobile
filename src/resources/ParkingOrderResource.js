const hostname = "https://parking-system-backend.herokuapp.com/";

export default {
    getByStatus: (status) => fetch(hostname + "/orders?status=" + status, {method: 'GET', mode: 'cors'}),
    add: (order) => fetch(hostname + "/orders",
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify(order)
                    }),
    grab: (order) => fetch(hostname + "/orders/" + order.id,
                    {
                        method: 'PUT',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({...order, ownedByEmployeeId: 1, status: 'In Progress'})
                    }),
    markCompleted: (order) => fetch(hostname + "/orders/" + order.id,
                    {
                        method: 'PUT',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({...order, status: 'Completed'})
                    })
  
  }
  