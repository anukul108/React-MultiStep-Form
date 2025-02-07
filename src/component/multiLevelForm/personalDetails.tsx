import {
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PrevAndNextButton } from "./prevAndNextButton";
import { useEffect } from "react";

interface FormValues {
  name: string;
  mobile: string;
  dob: string | null;
  email: string;
}

export const PersonalDetails = ({
  formDetails,
  activeStep,
  nextStep,
}: {
  formDetails: any,
  activeStep: number;
  nextStep?: (step: number) => void;
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      mobile: "",
      dob: null,
      email: "",
    },
  });

  //for single page
  useEffect(() => {
    if(formDetails.current['0']){
      const personalDetails = formDetails.current['0'];  
      setValue("name", personalDetails['name'])
      setValue("mobile", personalDetails['mobile'])
      setValue("dob", personalDetails['dob'])
      setValue("email", personalDetails['email'])
    }
  },[])


  const onSubmit = (data: FormValues) => {
    formDetails.current = {...formDetails.current, ['0']: data}
    nextStep?.(activeStep + 1)
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "20px auto" }}>
          <Typography variant="h6" sx={{ mb: "10px" }}>
            Personal Details
          </Typography>
          <FormControl>
            <TextField
              label="Name"
              fullWidth
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Mobile No."
              sx={{ mt: "10px", mb: "10px" }}
              fullWidth
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number",
                },
              })}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
            />

            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of Birth is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Date of Birth"
                  format="DD/MM/YYYY"
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) =>
                    field.onChange(date ? date.format("YYYY-MM-DD") : null)
                  }
                  slotProps={{
                    textField: {
                      error: !!errors.dob,
                      helperText: errors.dob?.message,
                      fullWidth: true,
                    },
                  }}
                />
              )}
            />

            <TextField
              label="Email"
              type="email"
              sx={{ mt: "10px" }}
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </FormControl>
          <PrevAndNextButton activeStep={activeStep} nextStep={nextStep} />
        </form>
      </LocalizationProvider>
    </>
  );
};
