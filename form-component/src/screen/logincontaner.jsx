import { useState } from "react";
import LoginForm from "../component/userInputComponent";
import GenerateForm from "../component/GenerateForm";

const Login = () => {
  const initialUserInfo = { username: "", password: "" };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    contact: "",
    language: "",
    city: "",
    isUnderAge: false,
  });

  //   const passwordChange = (event) => {
  //     const updatedUserInfo = { ...userInfo };
  //     updatedUserInfo.password = event.target.value;
  //     setUserInfo(updatedUserInfo);
  //   };

  //   const userNameChange = (event) => {
  //     const updatedUserInfo = { ...userInfo };
  //     updatedUserInfo.username = event.target.value;
  //     setUserInfo(updatedUserInfo);
  //   };
  function clickHandler() {
    console.log(userInfo);
  }
  const onChange = (event) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo[event.target.name] = event.target.value;
    setUserInfo(updatedUserInfo);
  };

  //kminchelle
  //0lelplR
  const handleFormChange = (event, type) => {
    console.log("aaaaa", event.target.name, event.target.value);
    const updateFormData = { ...formData };
    if (type === "checkbox") {
      updateFormData[event.target.name] = event.target.checked;
    } else {
      updateFormData[event.target.name] = event.target.value;
    }

    setFormData(updateFormData);
  };

  const login = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
          // expiresInMins: 60, // optional
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };
  const actionHandler = () => {
    console.log(formData);
  };

  const inputForm = [
    {
      Fieldvariant: "Input",
      type: "text",
      placeholder: "Enter User Name",
      label: "User Name",
      name: "username",
    },
    {
      Fieldvariant: "Input",
      type: "password",
      label: "Password",
      placeholder: "Enter Password ",
      name: "password",
    },
    {
      Fieldvariant: "Input",
      type: "email",
      placeholder: "Enter Email Name",
      label: "Email",
      name: "email",
    },
    {
      Fieldvariant: "Input",
      type: "number",
      placeholder: "Enter Phone Number",
      label: "Contact",
      name: "contact",
    },
    {
      Fieldvariant: "Select",
      options: [
        { id: "hindi", label: "Hindi" },
        { id: "marathi", label: "Marathi" },
        { id: "bengali", label: "Bengali" },
        { id: "english", label: "English" },
      ],
      label: "Select Language",
      idKey: "id",
      labelKey: "label",
      name: "language",
    },
    {
      Fieldvariant: "Select",
      options: [
        { id: "Kanpur", name: "Kanpur" },
        { id: "Bangalore", name: "Bangalore" },
        { id: "Pune", name: "Pune" },
        { id: "Delhi", name: "Delhi" },
      ],
      label: "Select City",
      idKey: "id",
      labelKey: "name",
      name: "city",
    },
    {
      Fieldvariant: "Checkbox",
      type: "checkbox",
      placeHolder: "",
      buttonText: "",
      label: "Are You under age ?",
      value: true,
      checked: true,
      name: "isUnderAge",
    },
    {
      Fieldvariant: "Button",
      type: "password",
      placeHolder: "",
      buttonText: "Continue",
      label: "Email",
      name: "",
    },
  ];

  //console.log(userInfo, "userInfo");
  return (
    // <LoginForm
    //   onChange={onChange}
    //   password={userInfo.password}
    //   userName={userInfo.username}
    //   loginHandler={login}
    // />
    <GenerateForm
      actionHandler={actionHandler}
      formConfig={inputForm}
      handleFormChange={handleFormChange}
    />
  );
};

export default Login;
