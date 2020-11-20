import React, { useState } from "react";
import { connect } from "react-redux";
import AddPerson from "./AddPerson";
import { PersonsList } from "./PersonsList";
import Sidebar from "./Sidebar";
import {
  addPerson,
  PersonReducerState,
  setCurrentPerson,
} from "./store/person";

const App = (props: any) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <PersonsList
        persons={props.persons}
        onAdd={() => setSideBarOpen(!sideBarOpen)}
      />
      <Sidebar
        isOpen={sideBarOpen || props.currentPerson}
        onClose={() => {
          setSideBarOpen(false);
          props.setCurrentPerson("");
        }}
      >
        <AddPerson
          onFinish={(values: any) => {
            props.addPerson({ ...values, id: props.currentPerson?.id });
            setSideBarOpen(false);
          }}
          onCancel={() => setSideBarOpen(false)}
          person={props.currentPerson}
        />
      </Sidebar>
    </>
  );
};

const mapStateToProps = ({ person }: { person: PersonReducerState }) => ({
  persons: Object.values(person.persons),
  currentPerson: person.currentPerson,
});

const mapDispatchToProps = { addPerson, setCurrentPerson };

export default connect(mapStateToProps, mapDispatchToProps)(App);
