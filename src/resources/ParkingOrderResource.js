import { hostname } from'../config/Config';
const resourceName = "/parkingorders";

export default {
    getByStatus: (status) => fetch(hostname + resourceName + "?status=" + status,
                            {
                                method: 'GET', 
                                mode: 'cors',
                                headers: new Headers({
                                    'Authorization': 'Bearer ' + localStorage.getItem('AUTH')
                                })
                            }),
    getById: (id) => fetch(hostname + resourceName + "/" + id, {method: 'GET', mode: 'cors'}),
    add: (order) => fetch(hostname + resourceName,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify(order)
                    }),
    grab: (order) => fetch(hostname + "/parkingclerks/" + localStorage.getItem('ID') + resourceName,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('AUTH')
                        }),
                        body: JSON.stringify({...order, status: 'In Progress'})
                    }),
    markCompleted: (order) => fetch(hostname + resourceName + "/" + order.id,
                    {
                        method: 'PUT',
                        mode: 'cors',
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('AUTH')
                        }),
                        body: JSON.stringify({...order, status: 'Completed'})
                    })
  
}
  