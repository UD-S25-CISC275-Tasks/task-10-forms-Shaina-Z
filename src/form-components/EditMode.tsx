import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inMode, setMode] = useState<boolean>(false);
    return (
        <div>
            <Form.Check
                type="switch"
                id="in_Edit_Mode"
                label="Edit Mode?"
                checked={inMode}
                onChange={updateMode}
            />
        </div>
    );
}
