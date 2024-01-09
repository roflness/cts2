import * as React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
} from "@fluentui/react-components";
import {
    // CalendarMonthFilled,
    // CalendarMonthRegular,
    VehicleBusFilled,
    VehicleBusRegular,
    bundleIcon,
} from "@fluentui/react-icons";

// const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const FleetsIcon = bundleIcon(VehicleBusFilled, VehicleBusRegular);
const path = "https://www.bing.com/";

export const Default = () => {
    return (
        <Breadcrumb aria-label="Breadcrumb">
            <BreadcrumbItem>
                <BreadcrumbButton href={path}>Project</BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem>
                <BreadcrumbButton href={path} icon={<FleetsIcon />}>
                    MD230808
                </BreadcrumbButton>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};