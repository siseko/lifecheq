import Add from "@material-ui/icons/Add";
import { Button } from "antd";
import React, { FunctionComponent } from "react";

const AddTile: FunctionComponent<{
  empty: boolean;
  onAdd: () => void;
  className: string;
}> = ({ empty, onAdd, className }) => (
  <div className={className}>
    {empty && (
      <div className="u-padding--md">You haven't added any related persons</div>
    )}
    <Button
      type="primary"
      className="u-children--center"
      icon={
        <span className="c-add-icon">
          <Add />
        </span>
      }
      onClick={() => onAdd()}
    >
      <span className="u-padding--sm">Add person</span>
    </Button>
  </div>
);

export default AddTile;
