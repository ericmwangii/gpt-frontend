import React, { FC } from "react";
// import { motion } from "framer-motion";

interface ADCOPY {
  key: string;
  adcopy: string;
}

const ResponseModal: FC<ADCOPY> = ({ adcopy }) => {
  return <div className="response-div">{adcopy}</div>;
};

export default ResponseModal;
