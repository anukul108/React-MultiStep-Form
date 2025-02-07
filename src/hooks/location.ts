import { useEffect, useState } from "react";
import { formSteps } from "../utils/data";

export const useGetUrlName = (pathname: string ) => {
  const [formStep, setFormStep] = useState('');
  useEffect(() => {
    if (pathname) {
      const urlName = pathname.split("/");
      const url = urlName[urlName.length - 1];
      setFormStep(formSteps[url])
    }
  }, [pathname]);

  return formStep;
};
