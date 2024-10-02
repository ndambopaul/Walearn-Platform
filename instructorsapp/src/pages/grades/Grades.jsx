import React, { useContext } from 'react';
import Wrapper from "../../components/Wrapper";
import { DataContext } from "../../context/DataContext";

import Cookies from "js-cookie";

const Grades = () => {
    const { grades } = useContext(DataContext);

    console.log(grades)

  return (
    <Wrapper></Wrapper>
  )
}

export default Grades