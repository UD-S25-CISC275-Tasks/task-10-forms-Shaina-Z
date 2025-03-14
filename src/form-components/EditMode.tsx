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
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Switch
                type="switch"
                id="in_Edit_Mode"
                label="Edit Mode?"
                checked={inMode}
                onChange={updateMode}
            />
            {studentName} is a student
        </div>
    );
}
