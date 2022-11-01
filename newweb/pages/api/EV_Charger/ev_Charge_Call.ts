import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ChargeRequest } from '../EV_Charger/ev_Charge';


const customAxios: AxiosInstance = axios.create({
  headers: {
    access_token: `${}`
  }
});

// 실제 API 통신
export const doAxios = async <T>(path: string, params: ChargeRequest): Promise<T | null> => {
  try {
    const { status, data }: AxiosResponse<T> = await customAxios.post(path, params);
    return status < 500 ? data : null
  } catch (err) {
    console.log(err)
  }
};