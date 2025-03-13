import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");
    const [iscorrect, setCorrect] = useState<string>("❌");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        if (givenAnswer === expectedAnswer) {
            setCorrect("✔️");
        }
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer} />
                {iscorrect}
            </Form.Group>
        </div>
    );
}
