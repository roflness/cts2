import { Badge } from "@fluentui/react-components";
import * as React from "react";

export default function ProjectBadge({ text1, text2, text3 }) {
    return (
        <div>
            <Badge appearance="filled" size="large" color="informative" style={{ marginRight: '8px' }}>
                {text1}
            </Badge>
            <Badge appearance="filled" size="large" color="informative" style={{ marginRight: '8px' }}>
                {text2}
            </Badge>
            <Badge appearance="filled" size="large" color="informative">
                {text3}
            </Badge>
        </div>
    );
}