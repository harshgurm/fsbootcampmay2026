import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

function CustomerDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ id: 0, name: '', email: '', phone: '', website: '' });

    useEffect(() => {
        const fetchCustomers = async () => {
            console.log('useEffect fetching customer with id:', id);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const customer = await response.json();
                setCustomer(customer);
                console.log('Fetched customer:', customer);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };
        fetchCustomers();
    }, [id]);

    return (

        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{customer.name}</h4>
                <p className="card-text">{customer.email}</p>
                <p className="card-text">{customer.phone}</p>
                <p className="card-text">{customer.website}</p>
                <button className="btn btn-primary" onClick={() => navigate('/customers')}>Clear</button>
            </div>
        </div>

    )
}

export default CustomerDetails;