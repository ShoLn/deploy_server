// fake data
import {
  vendorData,
  deviceTypeSelection,
  communicationSelection,
  roleSelection,
} from "../../../../fakeData";

//mui
import {
  Divider,
  Paper,
  Typography,
  styled,
  Button,
  Box,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React from "react";

// formik
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FormikProps,
  FieldProps,
} from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";

//type
import { SubmitDeviceType } from "../type";

const StyledWrapper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "400px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  // 表格標題
  ".title": {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
  // 表單容器
  ".form-container": {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    // 各輸入框容器
    ".field": {
      marginTop: theme.spacing(3),
      // input 名稱
      ".label": {
        color: "black",
        fontWeight: "600",
        // 星號符號
        ".required": {
          color: "red",
        },
      },
      // input 本身
      ".input": {
        height: "40px",
      },
    },
    // cancel save button 容器
    ".button-group": {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      // 各 button
      ".bu": {
        marginLeft: theme.spacing(2),
        textTransform: "capitalize",
      },
    },
  },
}));

// 組件本身
function AddDevice({
  handleDevOpen,
  devData,
  setDevData,
  devMod,
  setDevMod,
}: {
  handleDevOpen: React.Dispatch<React.SetStateAction<boolean>>;
  devData: SubmitDeviceType[];
  setDevData: React.Dispatch<React.SetStateAction<SubmitDeviceType[]>>;
  devMod: string;
  setDevMod: React.Dispatch<React.SetStateAction<string>>;
}) {
  // 表單初始值
  let initialValues: SubmitDeviceType;
  if (devMod) {
    initialValues = devData.filter((data) => data.modal === devMod)[0];
  } else {
    initialValues = {
      deviceType: "GateWay",
      modal: "666L",
      communication: "NB-IoT",
      role: "Master",
    };
  }

  // 提交表單
  const onSubmit = (
    values: SubmitDeviceType
    // onSubmitProps: FormikHelpers<SubmitValue>
  ) => {
    console.log(values);
    // console.log(onSubmitProps);
    // onSubmitProps.resetForm(initialValues);
    if (devMod) {
      setDevData((prev) => {
        const edit = prev.map((data) => {
          if (data.modal !== devMod) {
            return data;
          } else {
            console.log(data);
            return values;
          }
        });
        return edit;
      });
    } else {
      setDevData((prev) => {
        prev.push(values);
        return prev;
      });
    }
    setDevMod("");
    handleDevOpen(false);
  };

  // yup schema 驗證
  const validationSchemaAdd = Yup.object({
    deviceType: Yup.string().required("Name is required !!"),
  });
  return (
    <StyledWrapper>
      <Typography variant="h6" className="title">
        Add Device
      </Typography>
      <Divider />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaAdd}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className="form-container">
              <Box className="field">
                <InputLabel htmlFor="deviceType" className="label" shrink>
                  {"Device type"}&nbsp;
                  <span className="required">*</span>
                </InputLabel>
                <Field
                  InputProps={{
                    className: "input",
                  }}
                  id={"deviceType"}
                  component={TextField}
                  size="small"
                  name="deviceType"
                  type="text"
                  fullWidth
                  select
                >
                  {deviceTypeSelection.map((data) => (
                    <MenuItem key={data.id} value={data.name}>
                      {data.name}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Box className="field">
                <InputLabel htmlFor="modal" className="label" shrink>
                  {"Modal"}&nbsp;
                  <span className="required">*</span>
                </InputLabel>
                <Field
                  InputProps={{
                    className: "input",
                  }}
                  id={"modal"}
                  component={TextField}
                  size="small"
                  name="modal"
                  type="text"
                  fullWidth
                />
              </Box>
              <Box className="field">
                <InputLabel htmlFor="communication" className="label" shrink>
                  {"Communication modal type"}
                </InputLabel>
                <Field
                  InputProps={{
                    className: "input",
                  }}
                  id={"communication"}
                  component={TextField}
                  size="small"
                  name="communication"
                  type="text"
                  fullWidth
                  select
                >
                  {communicationSelection.map((data) => (
                    <MenuItem key={data.id} value={data.name}>
                      {data.name}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Box className="field">
                <InputLabel htmlFor="role" className="label" shrink>
                  {"Role"}
                </InputLabel>
                <Field
                  InputProps={{
                    className: "input",
                  }}
                  id={"role"}
                  component={TextField}
                  size="small"
                  name="role"
                  type="text"
                  fullWidth
                  select
                >
                  {roleSelection.map((data) => (
                    <MenuItem key={data.id} value={data.name}>
                      {data.name}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              {/* 按鈕區 */}
              <Box className="button-group">
                <Button
                  className="bu cancel"
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    setDevMod("");
                    handleDevOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button className="bu save" type="submit" variant="contained">
                  Save
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </StyledWrapper>
  );
}

export default AddDevice;
