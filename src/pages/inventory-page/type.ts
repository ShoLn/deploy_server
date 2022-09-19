export type VenReducerStateType = {
  data?: {
    id: string;
    name: string;
    phone: string;
    address: string;
    taxIdNumber: string;
  }[];
  addVenOpen: boolean;
  deleteVenOpen: boolean;
  editVenId: string;
  focusVenId: string;
};

export type VenderDataType = {
  id: string;
  name: string;
  phone: string;
  address: string;
  taxIdNumber: string;
};

export type VenReducerActionType = {
  type: string;
  payload?: string | VenderDataType;
};

export enum VenActionEnum {
  GETALLVEN = "GETALLVEN",
  HANDLEADDVENOPEN = "HANDLEADDVENOPEN",
  EDITVEN = "EDITVEN",
  FOCUSVEN = "FOCUSVEN",
}

export type VenFormikStateType = {
  name: string;
  phone: string;
  address: string;
  taxIdNumber: string;
};
