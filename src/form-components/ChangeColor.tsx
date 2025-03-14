import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check-red"
                label="Red"
                value="red"
                checked={chosenColor === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-white"
                label="White"
                value="white"
                checked={chosenColor === "white"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-teal"
                label="Teal"
                value="teal"
                checked={chosenColor === "teal"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label="Yellow"
                value="yellow"
                checked={chosenColor === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-black"
                label="Black"
                value="black"
                checked={chosenColor === "black"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label="Green"
                value="green"
                checked={chosenColor === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label="Blue"
                value="blue"
                checked={chosenColor === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label="Orange"
                value="orange"
                checked={chosenColor === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-pink"
                label="Pink"
                value="pink"
                checked={chosenColor === "pink"}
            />
            <span data-testid="colored-box">You have chosen {chosenColor}</span>
        </div>
    );
}
