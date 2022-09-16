export type VenReducerStateType = {
  data: {
    id: string;
    name: string;
    phone: string;
    address: string;
    taxIdNumber: string;
  }[];
  addVenOpen: boolean;
  deleteVenOpen: boolean;
  editVenId: string;
};

export type VenReducerActionType = {
  type: string;
  payload?: string;
};

export enum VenActionEnum {
  GETALLVEN = "GETALLVEN",
  HANDLEADDVENOPEN = "HANDLEADDVENOPEN",
  EDITVEN = "EDITVEN"
}

export type VenFormikStateType = {
  name: string;
  phone: string;
  address: string;
  taxIdNumber: string;
};
