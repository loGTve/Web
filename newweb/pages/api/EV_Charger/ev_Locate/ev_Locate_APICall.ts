import { useCallback } from 'react';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { doAxios } from './ev_Locate_List';
import { LocateRequest, LocateResponse } from './ev_Locate_Type';


//  Add params, get cityCd


const loadData = useCallback(async () => {
    const path = 
    "https://bigdata.kepco.co.kr/openapi/v1/commonCode.do?codeTy=metroCd&apiKey=xxx&returnType=json";
    const params: LocateRequest = {

    }
    const data = await doAxios<LocateRequest>(path, params)
  }, []
)
