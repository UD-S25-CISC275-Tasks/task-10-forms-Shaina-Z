import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inMode, setMode] = useState<boolean>(false);
    const [studentName, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(false);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="in_Edit_Mode"
                label="Edit Mode?"
                checked={inMode}
                onChange={updateMode}
            />{" "}
            <Form.Check
                type="checkbox"
                id="is-a-Student"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
            />
        </div>
    );
}
