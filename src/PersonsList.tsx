import { Button } from "antd";
import React, { FunctionComponent } from "react";
import IPerson from "./types/person";
import Add from "@material-ui/icons/Add";

type Props = {
  persons: IPerson[];
  onAdd: () => void;
};
export const PersonsList: FunctionComponent<Props> = (props) => {
  let finalRender = null;
  if (!props.persons.length) {
    finalRender = (
      <div className="c-person-list--empty">
        <div className="u-padding--md">You haven't added any related persons</div>
        <Button
          type="primary"
          className="u-children--center"
          icon={
            <span className="c-add-icon">
              <Add />
            </span>
          }
          onClick={() => props.onAdd()}
        >
          <span className="u-padding--sm">Add person</span>
        </Button>
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
