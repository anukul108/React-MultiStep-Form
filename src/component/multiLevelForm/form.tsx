import { PersonalDetails } from "./personalDetails";
import { useRef, useState } from "react";
import AddressForm from "./addressDetails";
import { ReviewDetails } from "./reviewDetails";

export const Form = () => {
  const formDetails = useRef({});
  const [activeStep, setActiveStep] = useState(0);

  const handleSubmit = () => {
    alert('form Submitted')
    console.log('formDetails', formDetails)
  }


  return (
    <>
      <div>
        {activeStep === 0 && (
          <PersonalDetails
            formDetails = {formDetails}
            activeStep={activeStep}
            nextStep={(step: number) => setActiveStep(step)}
          />
        )}
        {activeStep === 1 && (
          <AddressForm
            formDetails = {formDetails}
            activeStep={activeStep}
            nextStep={(step: number) => setActiveStep(step)}
          />
        )}
        {activeStep === 2 && (
          <ReviewDetails
            handleSubmit = {handleSubmit}
            formDetails = {formDetails.current}
            activeStep={activeStep}
            nextStep={(step: number) => setActiveStep(step)}
          />
        )}
        
      </div>
    </>
  );
};
