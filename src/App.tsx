import React, { useState } from "react";
import { connect } from "react-redux";
import AddPerson from "./AddPerson";
import { PersonsList } from "./PersonsList";
import Sidebar from "./Sidebar";
import { addPerson, PersonReducerState } from "./store/person";

const App = (props: any) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <PersonsList
        persons={props.persons}
        onAdd={() => setSideBarOpen(!sideBarOpen)}
      />
      <Sidebar isOpen={sideBarOpen} onClose={() => setSideBarOpen(false)}>
        <AddPerson
          onFinish={(values: any) => {
            props.addPerson(values);
            setSideBarOpen(false);
          }}
          onCancel={() => setSideBarOpen(false)}
        />
      </Sidebar>
    </>
  );
};

const mapStateToProps = ({ person }: { person: PersonReducerState }) => ({
  persons: Object.values(person.persons),
});

const mapDispatchToProps = { addPerson };

export default connect(mapStateToProps, mapDispatchToProps)(App);
