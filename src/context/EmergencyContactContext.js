import React, { createContext, useContext, useState } from "react";

const EmergencyContactContext = createContext();

export const EmergencyContactProvider = ({ children }) => {
  const [selectedTarget, setSelectedTarget] = useState("119");
  const [guardianPhone, setGuardianPhone] = useState("010-0000-0000");

  return (
    <EmergencyContactContext.Provider
      value={{
        selectedTarget,
        setSelectedTarget,
        guardianPhone,
        setGuardianPhone,
      }}
    >
      {children}
    </EmergencyContactContext.Provider>
  );
};

export const useEmergencyContact = () => useContext(EmergencyContactContext);
