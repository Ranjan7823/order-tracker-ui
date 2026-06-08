

const StatusFilter = ({ value, onchange}) =>{
    return (
        <select value={value}
        onChange={(e)=>onchange(e.target.value)} style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        minWidth: "180px",
        marginBottom: "15px",
        fontSize: "14px",
        cursor: "pointer"
    }}>
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>    
        </select>
    )
}
export default StatusFilter;