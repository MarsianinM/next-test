export interface IAddress {
/*
country: { type: String, default: null},
      city: { type: String, default: null},
      lineAddress: { type: String, default: null},
 */
    readonly country: string;
    readonly city: string;
    readonly lineAddress: string;
}