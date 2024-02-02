import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const PaypalButton = ({ invoice }) => {
  const [totalValue, setTotalValue] = useState("0.99");

  const handleChange = (e) => {
    setTotalValue(e.target.value);
  };

  return (
    <>
      <Form>
        <div className="mb-3">
          <Form.Check
            inline
            defaultChecked
            label="0.99$"
            value={"0.99"}
            name="group1"
            type={"radio"}
            id={`inline-${"radio"}-1`}
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="4.99$"
            value={"4.99"}
            name="group1"
            type={"radio"}
            id={`inline-${"radio"}-2`}
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="9.99$"
            value={"9.99"}
            name="group1"
            type={"radio"}
            id={`inline-${"radio"}-3`}
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="19.99$"
            value={"19.99"}
            name="group1"
            type={"radio"}
            id={`inline-${"radio"}-4`}
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="49.99$"
            value={"49.99"}
            name="group1"
            type={"radio"}
            id={`inline-${"radio"}-5`}
            onChange={(e) => handleChange(e)}
          />
          <Form.Check
            inline
            label="99.99$"
            value={"99.99"}
            name="group1"
            type={"radio"}
            id={`inline-${"radio"}-6`}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </Form>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: invoice,
                amount: {
                  value: totalValue,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          console.log(order);
        }}
      />
    </>
  );
};

export default PaypalButton;
