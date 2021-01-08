// this would be available in future updates

import React, { useState, useRef } from "react";
import { Input, Form, Button } from "antd";

const layout = {
  labelCol: { span: 100 },
  wrapperCol: { span: 100 },
};

//available in future updates

/*const tailLayout = {
   wrapperCol:  {offset: 1, span: 100 }
};*/

const FormItem = Form.Item;

//export this in the future

function Messageinput() {
  return (
    <Form
      style={{ position: "sticky", bottom: "0" }}
      {...layout}
      layout="inline"
      onFinish={console.log("done")}
    >
      <FormItem
        name="title"
        style={{ width: "80%", marginBottom: 0, marginRight: 0 }}
      >
        <Input
          placeholder="hello"
          //value={!formValue}
        />
      </FormItem>
      <FormItem
        /*{...tailLayout}*/ style={{
          marginBottom: 0,
          marginRight: 0,
          width: "20%",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          //disabled={!formValue}
        >
          Send
        </Button>
      </FormItem>
    </Form>
  );
}
