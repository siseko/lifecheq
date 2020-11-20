import { Button } from "antd";
import React, { useState } from "react";
import AddPerson from "./AddPerson";
import Sidebar from "./Sidebar";

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setSideBarOpen(!sideBarOpen)}>Add</Button>
      <Sidebar isOpen={sideBarOpen} onClose={() => setSideBarOpen(false)}>
        <AddPerson
          onFinish={(values: any) => console.log(values)}
          onCancel={() => setSideBarOpen(false)}
        />
      </Sidebar>
    </>
  );
};

export default App;
