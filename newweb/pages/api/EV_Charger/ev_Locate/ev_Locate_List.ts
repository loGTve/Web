import { AxiosResponse } from 'axios';
import { customAxios } from '../ev_Charge_Call';
import { LocateRequest } from './ev_Locate_Type';



export const doAxios = async <T>(path: string, params: LocateRequest) => {
    try {
      const { status, data }: AxiosResponse<T> = await customAxios.post(path, params);
      return status < 500 ? data : null
    } catch (err) {
      console.log(err)
    } 
  };