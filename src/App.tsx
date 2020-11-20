import { Button } from "antd";
import React from "react";
import AddPerson from "./AddPerson";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Button>Add</Button>
      <Sidebar>
        <AddPerson onFinish={(values: any) => console.log(values)} />
      </Sidebar>
    </>
  );
};

export default App;
