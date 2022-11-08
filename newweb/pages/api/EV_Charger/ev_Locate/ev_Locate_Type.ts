

export interface LocateRequest {
    codeTy: string;
    apiKey?: string;
}

export interface LocateResponse {
    data: [];
    uppoCd: string;
    uppoCdNm?: string;
    codeTy: string;
    code: string;
    codeNm: string;
}

