import { tab } from "@testing-library/user-event/dist/tab";
import { string } from "yup";

export const vendorData = [
  {
    id: "1",
    name: "Oring",
    phone: "0922123456",
    address: "",
    taxIdNumber: "1",
  },
  {
    id: "2",
    name: "Jiuding",
    phone: "0922123666",
    address: "",
    taxIdNumber: "2",
  },
  {
    id: "3",
    name: "Daton",
    phone: "0922123777",
    address: "",
    taxIdNumber: "3",
  },
];

export const venderData = [
  {
    id: "1",
    name: "Oring",
    phone: "0922123456",
    address: "",
    taxIdNumber: "1",
  },
  {
    id: "2",
    name: "Jiuding",
    phone: "0922123666",
    address: "",
    taxIdNumber: "2",
  },
  {
    id: "3",
    name: "Daton",
    phone: "0922123777",
    address: "",
    taxIdNumber: "3",
  },
];

export const deviceData = [
  {
    deviceType: "Gateway",
    modal: "312L",
    communication: "NB-IoT",
    role: "Master",
  },
  {
    deviceType: "4g router",
    modal: "342L",
    communication: "RS485",
    role: "Master",
  },
  {
    deviceType: "Controller",
    modal: "313L",
    communication: "Lora",
    role: "Master",
  },
  {
    deviceType: "Gateway",
    modal: "344L",
    communication: "Lora",
    role: "Slaved",
  },
];

export const deviceTypeSelection = [
  {
    name: "GateWay",
    id: "1",
  },
  {
    name: "4g router",
    id: "2",
  },
  {
    name: "Controller",
    id: "3",
  },
  {
    name: "Meter",
    id: "4",
  },
];

export const communicationSelection = [
  {
    name: "NB-IoT",
    id: "1",
  },
  {
    name: "CC-IoT",
    id: "2",
  },
  {
    name: "GG-IoT",
    id: "3",
  },
];

export const roleSelection = [
  {
    name: "Master",
    id: "1",
  },
  {
    name: "Slaved",
    id: "2",
  },
];

export const tableData = [
  {
    id: "1",
    version: "v2.0.0",
    fileSize: "14 MB",
    qtyOfInventory: "3",
    ProjectTypeInUse: "Yes",
    uploadTime: "2022/05/26 15:36",
  },
  {
    id: "2",
    version: "v1.5.0",
    fileSize: "20 MB",
    qtyOfInventory: "13",
    ProjectTypeInUse: "Yes",
    uploadTime: "2022/05/26 15:36",
  },
  {
    id: "3",
    version: "v1.1.0",
    fileSize: "10 MB",
    qtyOfInventory: "20",
    ProjectTypeInUse: "Yes",
    uploadTime: "2022/05/26 15:36",
  },
];

export const tableColumn = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "version",
    accessor: "version",
  },
  {
    Header: "fileSize",
    accessor: "fileSize",
  },
  {
    Header: "qtyOfInventory",
    accessor: "qtyOfInventory",
  },
  {
    Header: "ProjectTypeInUse",
    accessor: "ProjectTypeInUse",
  },
  {
    Header: "uploadTime",
    accessor: "uploadTime",
  },
];
