import { useEffect,useState } from "react";

import { getCustomerList, updateOrderStatus} from '../services/order-service';
import StatusFilter from '../components/statusfilter';
const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const [status, setSatus] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    
   
 useEffect(() => {
        loadOrders();
    }, [status, page, pageSize]);

    const loadOrders = async () => {
        setLoading(true);
        setError(null); 
        try {
            const data = await getCustomerList(status, page, pageSize);
            setOrders(data);
        } catch (err) {
            setError("Failed to load orders. Please try again later.");
        }   finally {   
            setLoading(false);
        }
    }

    const updateStatus = async (id, newStatus) => {
        try{
            setError(null)
            await updateOrderStatus(id, newStatus);
            loadOrders();
        } catch (err){
            setError(
                        err.response?.data?.message ||
                        "Failed to update order"
                    );
        } finally {

        }
    }
    const headerStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
};
const buttonStyle={
        backgroundColor: "#1976d2",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "5px"
    };
    if(loading) {
        return <div>Loading...</div>
    }
    return (
       <div style={{padding:20}}>
        <h2>Orders Traking system</h2>
        {error && <div style={{color:"red"}}>{error}</div>}
        <StatusFilter value={status} onchange={setSatus}/>
        <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "15px",
        backgroundColor: "#fff"
    }}>        
            <thead>
                <tr>

                    <th style={headerStyle}>ID</th>
                    <th style={headerStyle}>Customer</th>
                    <th style={headerStyle}>Status</th> 
                    <th style ={headerStyle}>Actions</th>    

                </tr>   

            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td style={headerStyle}>{order.id}</td>
                        <td style={headerStyle}>{order.customerName}</td>
                        <td style={headerStyle}>{order.status}</td>
                        <td style={headerStyle}>
                            {order.status ==="Pending" && (<><button onClick={()=>updateStatus(order.id, "Shipped")}style={buttonStyle}>Ship</button>
                            <button onClick={()=>updateStatus(order.id,"Cancelled")} style={buttonStyle} >Cancel</button>
                            </>)}
                            {order.status ===
                                "Shipped" && (

                                    <>
                                        <button
                                            onClick={() =>
                                                updateStatus(
                                                    order.id,
                                                    "Delivered")} style={buttonStyle}>
                                            Deliver
                                        </button>

                                        <button
                                            onClick={() =>
                                                updateStatus(
                                                    order.id,
                                                    "Cancelled")} style={buttonStyle}>
                                            Cancel
                                        </button>
                                    </>
                                )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
       </div>
    )
}
export default OrderPage;