import React, { FunctionComponent } from "react";
import AddTile from "./AddTile";
import Person from "./Person";
import IPerson from "./types/person";

type Props = {
  persons: IPerson[];
  onAdd: () => void;
};

export const PersonsList: FunctionComponent<Props> = (props) => {
  let finalRender = null;
  if (!props.persons.length) {
    finalRender = (
      <AddTile onAdd={props.onAdd} empty className="c-person-list__empty" />
    );
  } else {
    finalRender = (
      <div className="c-person-list__grid">
        {props.persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
        <AddTile
          onAdd={props.onAdd}
          empty={false}
          className="c-person c-person--add"
        />
      </div>
    );
  }
  return (
    <div className="c-person-list">
      <h1>Related persons</h1>
      {finalRender}
    </div>
  );
};

export default PersonsList;
