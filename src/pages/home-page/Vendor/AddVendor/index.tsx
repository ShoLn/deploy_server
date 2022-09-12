//mui
import { Divider, Paper, Typography, styled, Button } from "@mui/material";
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
import { SubmitValue } from "./type";

const StyledWrapper = styled(Paper)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  position: "absolute",
  width: "500px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  ".title": {
    marginLeft: theme.spacing(5),
  },
}));

// 表單初始值
const initialValues = {
  name: "",
  phone: "",
  address: "",
  taxIdNumber: "",
};

// 提交表單
const onSubmit = (values:any, onSubmitProps:any) => {
  console.log(values);
  console.log(onSubmitProps);
  onSubmitProps.resetForm(initialValues);
  onSubmitProps.setSubmitting(false);
};

// yup schema 驗證
const validationSchemaSignin = Yup.object({
  name: Yup.string().required("Name is required !!"),
  phone: Yup.string()
    .required("Phone is required !!")
    .matches(/^[0-9]{10}$/g, "Invalid format !!"),
});

function AddVendor() {
  return (
    <StyledWrapper>
      <Typography variant="h5" className="title">
        Add Vendor
      </Typography>
      <Divider />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaSignin}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <Field
                component={TextField}
                sx={{ mt: 3, mb: 3 }}
                fullWidth
                size="small"
                name="email"
                type="email"
                label="Email"
              />
              <Field
                size="small"
                component={TextField}
                sx={{ mt: 3, mb: 3 }}
                fullWidth
                name="password"
                type="password"
                label="Password"
              />
              <Field
                size="small"
                component={TextField}
                sx={{ mt: 3, mb: 3 }}
                fullWidth
                name="confirmPassword"
                type="password"
                label="Confirm Password"
              />
              <Field
                size="small"
                component={TextField}
                sx={{ mt: 3, mb: 3 }}
                fullWidth
                name="userInfo.name"
                type="text"
                label="Name"
              />
              <Field
                size="small"
                component={TextField}
                sx={{ mt: 3, mb: 3 }}
                fullWidth
                name="userInfo.phone"
                type="text"
                label="Phone"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={formik.isSubmitting}
              >
                Sign up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </StyledWrapper>
  );
}

export default AddVendor;
