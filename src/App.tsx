import { useRef, useState } from "react";
import "./App.css";
import { Form } from "./component/multiLevelForm/form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersonalDetails } from "./component/multiLevelForm/personalDetails";
import { ReviewDetails } from "./component/multiLevelForm/reviewDetails";
import AddressForm from "./component/multiLevelForm/addressDetails";

function App() {
  const formDetails = useRef({});
  
    const handleSubmit = () => {
      alert('form Submitted')
      console.log('formDetails', formDetails)
    }

  return (
    <>
      {/* <Typography sx={{fontSize: '20px', fontWeight: 700, textAlign: 'center'}}>Form</Typography> */}
      <Form />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/personalDetail" element={<PersonalDetails formDetails={formDetails} activeStep={0} />} />
          <Route path="/addressDetail" element={<AddressForm formDetails={formDetails} activeStep={0} />} />
          <Route path="/review" element={<ReviewDetails formDetails={formDetails} activeStep={0} handleSubmit={handleSubmit} />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
