

//전기차 충전기 위치 값 보내기.
export interface ChargeRequest {
    //시도(서울시)
    metroCd: string;
    //시군구(중랑구)
    cityCd?: string;
    apiKey: string;
}

// 값 응답 받기
export interface ChargeResponse {
    data: any;
    metro: string;      //도시
    city: string;       //시군구
    stnPlace: string;   //건물명
    stnAddr: string;    //주소
    rapidCnt: number;   //급속충전기 수
    slowCnt: number;    //완속충전기 수
    carType: string;    //지원차종
}

export interface ev_Charger extends ChargeResponse {
    list: ChargeResponse[]
}
