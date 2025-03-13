import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    return (
        <div>
            <Form.Group controlId="formNumberAttempts">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={attempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttempts(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button onClick={() => {}}>Use</Button>
            <Button onClick={() => {}}>Gain</Button>
            <h3>Number of Attempts: {attempts}</h3>
        </div>
    );
}
