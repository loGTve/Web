import { useCallback } from 'react';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { doAxios } from './ev_Charge_Call';
import { accesstoken, ChargeRequest, ChargeResponse } from './ev_Charge';

const customAxios: AxiosInstance = axios.create({
    headers: {
      apikey: `${accesstoken}`
    }
  });

const loadData = useCallback(async () => {
    const path = "https://bigdata.kepco.co.kr/openapi/v1/EVcharge.do?metroCd=&cityCd=&apiKey=&returnType=json";
    const params: ChargeRequest = {
        metroCd: 11,
        cityCd: 26,
    }
    const data = await doAxios<ChargeResponse>(path, params)
  }, []
)

