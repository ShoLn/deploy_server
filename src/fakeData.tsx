export const vendorData = [
  { name: "Oring", phone: "0922123456", address: "", taxIdNumber: "1" },
  { name: "Jiuding", phone: "0922123666", address: "", taxIdNumber: "2" },
  { name: "Daton", phone: "0922123777", address: "", taxIdNumber: "3" },
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
