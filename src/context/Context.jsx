import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Globalcontext = createContext();

export const GlobalState = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    age: "",
    gender: "",
    profile_picture: "",
    date_of_birth: "",
    emergency_contact: "",
    insurance_type: "",
    phone_number: "",
  });
  // Fetching data from the API
  const getData = async () => {
    try {
      let auth = btoa(
        `${import.meta.env.VITE_Username}:${import.meta.env.VITE_Password}`
      );
      const response = await axios.get(`${import.meta.env.VITE_API_URI}`, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });
      setUsers(response.data);
      setSelectedUser(response.data[3]);
    } catch (error) {
      throw new Error("Something went wrong!!!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Globalcontext.Provider
        value={{
          users,
          selectedUser,
          setSelectedUser,
        }}
      >
        {children}
      </Globalcontext.Provider>
    </>
  );
};
