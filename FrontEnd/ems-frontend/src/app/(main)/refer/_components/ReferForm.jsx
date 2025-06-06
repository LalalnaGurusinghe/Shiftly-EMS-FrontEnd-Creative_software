"use client";

import { useRef, useState } from "react";

import { Formik, Form } from "formik";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import InputItem from "../../../_components/inputs/InputItem";
import TextInput from "../../../_components/inputs/TextInput";
import SelectInput from "../../../_components/inputs/SelectInput";
import FileUpload from "../../../_components/inputs/FileUpload";

const vacancyOptions = [
  { id: 1, name: "Software Engineer" },
  { id: 2, name: "HR" },
];

export default function ReferForm(props) {
  const { setOpenSubmit } = props;

  const resumeRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          vacancy: null,
          applicantName: "",
          applicantEmail: "",
          message: "",
          resume: null,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.vacancy) {
            errors.vacancy = "Vacancy is required";
          }
          if (!values.applicantName) {
            errors.applicantName = "Applicant name is required";
          }
          if (!values.applicantEmail) {
            errors.applicantEmail = "Applicant email is required";
          }
          if (!values.message) {
            errors.message = "Message is required";
          }
          if (!values.resume) {
            errors.resume = "resume is required";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted:", values);
          setOpenSubmit(true);
          resetForm();
          setFileName("");
          setPreview(null);
          if (resumeRef.current) {
            resumeRef.current.value = "";
          }
        }}
      >
        {({ errors, validateForm, resetForm }) => (
          <Form>
            <Stack>

              <InputItem> 
                <SelectInput
                  name="vacancy"
                  options={vacancyOptions}
                  getOptionLabel={(option) => option.name || ""}
                  label="Vacancy"
                />
              </InputItem>

              <InputItem>
                <TextInput name="applicantName" label="Enter applicant name" />
              </InputItem>

              <InputItem>
                <TextInput
                  name="applicantEmail"
                  label="Enter applicant email"
                />
              </InputItem>

              <InputItem>
                <TextInput
                  name="message"
                  label="Write a message"
                  multiline
                  rows={4}
                />
              </InputItem>

              <InputItem>
                <FileUpload
                  name="resume"
                  label="Upload Resume"
                  fileName={fileName}
                  setFileName={setFileName}
                  preview={preview}
                  setPreview={setPreview}
                />
              </InputItem>

              <InputItem>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                >
                  <Button
                    color="textblack"
                    type="reset"
                    onClick={() => {
                      resetForm();
                      setFileName("");
                      setPreview(null);
                      if (resumeRef.current) {
                        resumeRef.current.value = "";
                      }
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={Object.keys(errors).length > 0}
                    onClick={() => {
                      validateForm();
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </InputItem>
              
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
}
