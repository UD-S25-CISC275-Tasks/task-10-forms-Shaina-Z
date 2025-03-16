import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inMode, setMode] = useState<boolean>(false);
    const [studentName, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Switch
                    type="switch"
                    id="in_Edit_Mode"
                    label="Edit Mode?"
                    checked={inMode}
                    onChange={updateMode}
                />
            </div>
            <div>
                <Form.Check
                    hidden={!inMode}
                    type="checkbox"
                    id="is-student"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
                <Form.Group controlId="Name">
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control
                        hidden={!inMode}
                        type="string"
                        value={studentName}
                        onChange={updateName}
                    />
                </Form.Group>
            </div>
            {studentName} {isStudent ? "is a student" : "is not a student"}
        </div>
    );
}
