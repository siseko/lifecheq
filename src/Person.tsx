import React from "react";
import IPerson from "./types/person";

const Person = ({ person }: { person: IPerson }) => {
  return (
    <div className="c-person">
      <div className="c-person__name">
        {person.name} {person.surname}
      </div>
      <div className="c-person__rel">{person.relationship}</div>
    </div>
  );
};

export default Person;
