import { Delete, ExpandMore } from "@material-ui/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePerson, setCurrentPerson } from "./store/person";
import IPerson from "./types/person";

const Person = ({
  person,
  deletePerson,
  setCurrentPerson,
}: {
  person: IPerson;
  deletePerson: (id: string) => void;
  setCurrentPerson: (id: string) => void;
}) => {
  const [showRemove, setShowRemove] = useState(false);
  const [remove, setRemove] = useState(false);
  return (
    <div className="c-person">
      <div className="c-person__name">
        {person.name} {person.surname}
      </div>
      <div className="c-person__rel">{person.relationship}</div>
      <Button className="u-children--center u-padding--none u-margin-t--md">
        <span
          className="u-border--right u-padding-h--md"
          onClick={() => setCurrentPerson(person.id)}
        >
          Edit
        </span>
        <span
          style={{ position: "relative" }}
          className="u-children--center"
          onMouseEnter={() => setShowRemove(true)}
          onClick={(e) => setShowRemove(!showRemove)}
        >
          {showRemove && (
            <span style={{ position: "absolute", bottom: "-36px" }}>
              <Button
                icon={<Delete />}
                onClick={() => setRemove(true)}
                className="u-children--center"
                style={{ color: "red" }}
              >
                Remove
              </Button>
            </span>
          )}
          <ExpandMore></ExpandMore>
        </span>
      </Button>
      <Modal
        title={`Remove ${person.name} ${person.surname}`}
        visible={remove}
        onCancel={() => setRemove(false)}
        footer={[
          <Button key="back" onClick={() => setRemove(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => deletePerson(person.id)}
            danger
          >
            Remove Beneficiary
          </Button>,
        ]}
      >
        <p>This Beneficiary will not receive any benefits</p>
      </Modal>
    </div>
  );
};

export default connect(null, { deletePerson, setCurrentPerson })(Person);
