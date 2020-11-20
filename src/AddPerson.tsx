import React, { FunctionComponent } from "react";
import { Form, Input, Button, DatePicker, Radio, Select } from "antd";
import Calendar from "@material-ui/icons/CalendarToday";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ArrowBack from "@material-ui/icons/ArrowBack";

type Props = {
  onFinish: (values: any) => void;
  onCancel: () => void;
  editMode?: boolean;
};

const AddPerson = (props: Props) => {
  const Label: FunctionComponent<{ label: string }> = ({ label }) => (
    <strong>{label}</strong>
  );

  return (
    <>
      <div className="c-form">
        <h1>{props.editMode ? "" : "Add a related person"}</h1>
        <Form
          name="related-persons"
          layout="vertical"
          requiredMark={false}
          initialValues={{
            sex: "Male",
            isSouthAfrican: 1,
          }}
          onFinish={props.onFinish}
        >
          <Form.Item
            label={<Label label="Relationship" />}
            name="relationship"
            rules={[
              {
                required: true,
                message: "Please input the relationship",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<Label label="First name" />}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<Label label="Last name" />}
            name="surname"
            rules={[
              {
                required: true,
                message: "Please input your last name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="sex"
            label={<Label label="Sex" />}
            rules={[
              {
                required: true,
                message: "Please select your sex",
              },
            ]}
          >
            <Select suffixIcon={<ExpandMore className="u-color--black" />}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={<Label label="Date of birth" />}
            name="dob"
            rules={[
              {
                required: true,
                message: "Please input your date of birth",
              },
            ]}
          >
            <DatePicker
              className="u-width--full"
              format="D MMMM YYYY"
              suffixIcon={<Calendar className="u-color--black" />}
            />
          </Form.Item>
          <Form.Item
            label={<Label label="Nationalities" />}
            name="nationalities"
            rules={[
              {
                required: true,
                message: "Please input nationalities",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<Label label="Permanent South African resident?" />}
            name="isSouthAfrican"
          >
            <Radio.Group onChange={() => null}>
              <Radio value={1} className="u-display--block">
                Yes
              </Radio>
              <Radio value={0} className="u-display--block">
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
      <div className="c-footer--sticky">
        <Button
          type="link"
          icon={<ArrowBack />}
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => props.onCancel()}
        >
          Cancel
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          form="related-persons"
          className="u-margin-h--sm"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default AddPerson;
