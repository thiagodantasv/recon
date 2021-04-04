import { RequisitionStatus } from './interfaces/httpstatus';

export default class Response<T>{
    public content:{
        data: T
    };
    public status: RequisitionStatus;

    constructor(status: RequisitionStatus,data?: T){
        this.status = status;
        this.content.data = data;
    }

    formatData(formatter: Function){
        return formatter;
    }
}