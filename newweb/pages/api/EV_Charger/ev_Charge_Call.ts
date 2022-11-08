import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ChargeRequest } from '../EV_Charger/ev_Charge';
import { accesstoken } from './ev_Charge'


export const customAxios: AxiosInstance = axios.create({
  headers: {
    apikey: `${accesstoken}`
  }
});

// API_Call
export const doAxios = async <T>(path: string, params: ChargeRequest) => {
  try {
    const { status, data }: AxiosResponse<T> = await customAxios.post(path, params);
    return status < 500 ? data : null
  } catch (err) {
    console.log(err)
  } 
};