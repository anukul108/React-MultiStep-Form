import { useForm, Controller } from "react-hook-form";
import { TextField,  Grid, MenuItem, Typography } from "@mui/material";
import { PrevAndNextButton } from "./prevAndNextButton";
import { useEffect } from "react";

const countries = [
  { name: "India", states: ["Maharashtra", "Karnataka", "Delhi"] },
  { name: "USA", states: ["California", "Texas", "Florida"] },
];

interface FormValues {
  country: string;
  state: string;
  location: string;
  pincode: string;
  houseNo: string;
}

const AddressForm = ({
  formDetails,
  activeStep,
  nextStep,
}: {
  formDetails: any;
  activeStep: number;
  nextStep?: (step: number) => void;
}) => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      country: "",
      state: "",
      location: "",
      pincode: "",
      houseNo: "",
    },
  });

   useEffect(() => {
      if(formDetails.current['1']){
        const addressDetails = formDetails.current['1'];  
        setValue("country", addressDetails['country'])
        setValue("state", addressDetails['state'])
        setValue("location", addressDetails['location'])
        setValue("pincode", addressDetails['pincode'])
        setValue("houseNo", addressDetails['houseNo'])
      }
    },[])

  const selectedCountry = watch("country");
  const states =
    countries.find((c) => c.name === selectedCountry)?.states || [];

  const onSubmit = (data: FormValues) => {
    formDetails.current = { ...formDetails.current, ["1"]: data };
    console.log(formDetails.current);
    nextStep?.(activeStep + 1)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: "auto" }}
    >
      <Typography variant="h5" mt={"10px"}>
        Address details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <TextField
                select
                label="Country"
                fullWidth
                {...field}
                error={!!errors.country}
                helperText={errors.country?.message}
              >
                <MenuItem value="">Select Country</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        {/* State Dropdown */}
        <Grid item xs={12}>
          <Controller
            name="state"
            control={control}
            rules={{ required: "State is required" }}
            render={({ field }) => (
              <TextField
                select
                label="State"
                fullWidth
                {...field}
                error={!!errors.state}
                helperText={errors.state?.message}
                disabled={!selectedCountry}
              >
                <MenuItem value="">Select State</MenuItem>
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        {/* Location Field */}
        <Grid item xs={12}>
          <TextField
            label="Location"
            fullWidth
            {...register("location", { required: "Location is required" })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />
        </Grid>

        {/* Pincode Field */}
        <Grid item xs={12}>
          <TextField
            label="Pincode"
            fullWidth
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Invalid Pincode (6 digits required)",
              },
            })}
            error={!!errors.pincode}
            helperText={errors.pincode?.message}
          />
        </Grid>

        {/* House No. Field */}
        <Grid item xs={12}>
          <TextField
            label="House No."
            fullWidth
            {...register("houseNo", { required: "House No. is required" })}
            error={!!errors.houseNo}
            helperText={errors.houseNo?.message}
          />
        </Grid>
      </Grid>
      <PrevAndNextButton activeStep={activeStep} nextStep={nextStep} />
    </form>
  );
};

export default AddressForm;
