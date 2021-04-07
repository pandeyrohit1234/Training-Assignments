import {IProd} from "../product/iProd";
export interface IPurchaseitem {
    PurchaseID : number,
    Name : string,
    Date :string;
    VenderName : string;
    Item :IProd[];
}