import { Box, Typography } from "@mui/material";

export const Details = ({activeStep, data }: {activeStep: number, data: any }) => {
  return (
    <>
      <Box sx={{ border: "1px solid", borderRadius: "10px", mt: "20px", padding:'10px' }}>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          {/* {activeStep === 0 ? 'Personal Details' : 'Address Details'} */}
        </Typography>

        {Object.keys(data).map((key) => {
          return (
            <Box key={key} display={'flex'}>
              <Typography sx={{fontSize:'16px', fontWeight:700}}>{key.toUpperCase()}</Typography> &nbsp; : &nbsp; {data[key]}
            </Box>
          );
        })}
      </Box>
    </>
  );
};
