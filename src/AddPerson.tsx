import React, { FunctionComponent } from "react";
import { Form, Input, Button, DatePicker, Radio, Select } from "antd";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import ExpandIcon from "@material-ui/icons/ExpandMore";

type Props = {
  onFinish: (values: any) => void;
  editMode?: boolean;
};

const AddPerson = (props: Props) => {
  const Label: FunctionComponent<{ label: string }> = ({ label }) => (
    <strong>{label}</strong>
  );

  return (
    <>
      <h1>{props.editMode ? "" : "Add a related person"}</h1>
      <Form
        name="related-persons"
        className="c-form"
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
          <Select suffixIcon={<ExpandIcon className="u-color--black" />}>
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
            suffixIcon={<CalendarIcon className="u-color--black" />}
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
      <div className="c-footer--sticky">
        <Button type="link">
          Link Button
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
