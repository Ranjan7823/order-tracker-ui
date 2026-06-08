import apiInstance from "../api/api-Instance";

export const getCustomerList = async (status,
  page,
  pageSize) => {
  try {
    const response = await apiInstance.get("/GetAllCustomer", {
      params: {
        status,
        page,
        pageSize
      }
    });
    return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }

};

export const updateOrderStatus  = async (id, status) => {
    try {
        const response = await apiInstance.patch(`/${id}/status`,{ status });
        return response.data;
    } catch (error) {
        console.error("Error updating order status with ID ${id }:", error);
        throw error;
    }
};