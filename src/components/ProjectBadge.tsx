import { Badge } from "@fluentui/react-components";
import React from "react";

export default function ProjectBadge({ text1, text2, text3 }) {
    return (
        <div>
            <Badge appearance="filled" color="subtle">
                {text1}
            </Badge>
            <Badge appearance="filled" color="subtle">
                {text2}
            </Badge>
            <Badge appearance="filled" color="subtle">
                {text3}
            </Badge>
        </div>
    );
}