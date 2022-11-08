
//EV_Charger Locate, Result Send.
export interface ChargeRequest {
    //City(Seoul)
    metroCd: number;
    //State(Jungnang-gu)
    cityCd?: number;
    apiKey?: string;
}

// Response Result.
export interface ChargeResponse {
    data: [];
    metro: string;      //City
    city: string;       //State
    stnPlace: string;   //Building Name
    stnAddr: string;    //Address
    rapidCnt: number;   //Num of Rapid
    slowCnt: number;    //Num of Slow
    carType: string;    //Support Car
}

export interface ev_Charger extends ChargeResponse {
    list: ChargeResponse[]
}


// API_Key (Remove Before Upload Github)
export const accesstoken = "H4zffZ9972AmC45lgyBrc6ea02YtfrDjve666H1l";
