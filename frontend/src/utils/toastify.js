import {  toast } from 'react-toastify';

export const errorNotification = (error) => toast.error(error.message);
