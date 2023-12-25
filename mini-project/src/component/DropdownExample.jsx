import React from "react";

import { useState, useEffect } from "react";
import Dropdown from "../component/dropdown";
import DropDown from "../component/DropDown2";
function DropdownExample() {
  const OrgList = [
    { ordId: "123456", orgName: "Mh-delhi4" },
    { ordId: "123457", orgName: "Mh-delhi3" },
    { ordId: "123458", orgName: "Mh-delhi2" },
    { ordId: "123459", orgName: "Mh-delhi1" },
  ];

  function handleChange(e) {
    console.log(e.target.value);
  }
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const userData = await res.json();
    setUsers(userData?.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      dropdown
      <select onChange={handleChange}>
        <option>Select ...</option>
        {/*
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            */}
        {OrgList.map((val) => {
          return <option value={val.ordId}>{val.orgName}</option>;
        })}
      </select>
      <br />
      <select onChange={handleChange}>
        <option>Select...</option>
        {users.map((user) => {
          return <option value={user.id}>{user.firstName}</option>;
        })}
      </select>
      {/*using component */}
      <p>this dropdown we creatd using component</p>
      <Dropdown options={users} handleChange={handleChange} />
      {/*using component */}
      <hr />
      <p>
        creating component with different type of data we need idKey and
        labelKey
      </p>
      <DropDown2
        options={users}
        handleChange={handleChange}
        idKey="id"
        labelKey="firstName"
      />
      <br />
      <br />
      <DropDown2
        options={OrgList}
        handleChange={handleChange}
        idKey="ordId"
        labelKey="orgName"
      />
    </>
  );
}

export default DropdownExample;
