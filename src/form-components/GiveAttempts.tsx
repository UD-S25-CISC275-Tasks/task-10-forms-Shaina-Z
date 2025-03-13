import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    let numberAttempts = 0;
    return (
        <div>
            <Form.Group controlId="formNumberAttempts">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={numberAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        !parseInt(event.target.value) ? numberAttempts : (
                            (numberAttempts = parseInt(event.target.value))
                        )
                    }
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + numberAttempts);
                }}
            >
                Gain
            </Button>
            <h3>Number of Attempts: {attempts}</h3>
        </div>
    );
}
