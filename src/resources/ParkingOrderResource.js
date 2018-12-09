const hostname = "http://localhost:8080/";

export default {
    getByStatus: (status) => fetch(hostname + "orders?status=" + status, {method: 'GET', mode: 'cors'}),
    grab: (order) => fetch("http://localhost:8080/orders/" + order.id,
                    {
                        method: 'PUT',
                        mode: 'cors',
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({...order, ownedByEmployeeId: 1, status: 'In Progress'})
                    })
  
  }
  