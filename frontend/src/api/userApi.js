import apiAxios from "axiosConfig";
import {errorNotification} from "utils/toastify";
export const getAllUsersList = async () => {
            try {
                return  await apiAxios.get('/api/users/all')
            } catch (error) {
                console.log(error)
                errorNotification(error)
            }
};