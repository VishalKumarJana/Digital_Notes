import axios from "axios";

export const fetchUserFromToken = async (token) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/secure-note/api/auth/getTokenDetails?token=${token}`,
        );
        console.log('Role entitlement created successfully:', response.data);

        return response.data;
    } catch (error) {
        console.error('Failed to create role entitlement:', error);
        throw error;
    }
}; 