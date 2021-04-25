import React from "react";
import Header from "../../../components/Header";
import HeaderUserHomeProperties from "../../../components/Header/User/Home";
import Modules from "../../../components/modules";
import { homeModules } from "../../../components/modules/home";

const UserHome = (props: { history: History }) => {
  return (
    <div
    >
      <Header
        Component={HeaderUserHomeProperties}
        componentProps={{ history: props.history }}
      />

      <Modules modules={homeModules} history={props.history}></Modules>

    </div>
  );
};

export default UserHome;
