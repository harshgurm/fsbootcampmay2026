import { useState, useEffect } from 'react';

function Customers() {

    const [count, setCount] = useState(9);
    const [customer, setCustomer] = useState({ id: 0, name: '', email: '', phone: '', website: '' });

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                if (count < 1 || count > 10) {
                    setCount(1);
                    return;
                }
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
                const customer = await response.json();
                setCustomer(customer);
                console.log('Fetched customer:', customer);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };
        fetchCustomers();
    }, [count]);

    return (
        <div>
            <h1>Customers</h1>
            <div className="card" >
                <div className="card-body">
                    <h4 className="card-title">{customer.name}</h4>
                    <p className="card-text">{customer.email}</p>
                    <p className="card-text">{customer.phone}</p>
                    <p className="card-text">{customer.website}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary w-25" onClick={() => setCount(count + 1)}>Next Customer</button>
                <button className="btn btn-secondary w-25 ms-2" onClick={() => setCount(count - 1)}>Previous Customer</button>
            </div>
        </div>
    )
}

export default Customers;