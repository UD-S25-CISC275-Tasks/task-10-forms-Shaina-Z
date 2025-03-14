import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="favoriteAnswers">
                <Form.Label>Select An Answer</Form.Label>
                <Form.Select value={givenAnswer} onChange={updateAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {givenAnswer === expectedAnswer && <div>✔️</div>}
            {givenAnswer !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
