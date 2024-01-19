import React, { useState } from "react";
import { Dropdown, IDropdownOption, mergeStyleSets } from "@fluentui/react";

const reports = {
    report1: '<iframe title="Report 1" class="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=a8e06366-abe7-44e6-a635-c47ef302fdab&autoAuth=true&ctid=a2e7980c-11ea-4838-8f1a-2f497d8c4072" frameborder="1" allowFullScreen="true"></iframe>',
    report2: '<iframe title="Report 2" class="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=eeff2065-a60c-41f1-9507-78334fb01f05&autoAuth=true&ctid=a2e7980c-11ea-4838-8f1a-2f497d8c4072" frameborder="1" allowFullScreen="true"></iframe>',
    report3: '<iframe title="Report 3" class="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=1fbd2d69-38a1-40c3-a254-4b322c51f38d&autoAuth=true&ctid=a2e7980c-11ea-4838-8f1a-2f497d8c4072" frameborder="1" allowFullScreen="true"></iframe>',
    report4: '<iframe title="Report 4" class="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=223e999a-4730-4173-ba5b-5fbe94e71e7e&autoAuth=true&ctid=a2e7980c-11ea-4838-8f1a-2f497d8c4072" frameborder="1" allowFullScreen="true"></iframe>',
    report5: '<iframe title="Report 5" class="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=c2ee15dd-8211-4999-acc8-8d08518f1f16&autoAuth=true&ctid=a2e7980c-11ea-4838-8f1a-2f497d8c4072" frameborder="1" allowFullScreen="true"></iframe>',
    report6: '<iframe title="Report 6" class="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=e1b09aa9-94d9-4bfd-8065-a2d4edda674c&autoAuth=true&ctid=a2e7980c-11ea-4838-8f1a-2f497d8c4072" frameborder="1" allowFullScreen="true"></iframe>',

    
};

const classNames = mergeStyleSets({
    dropdown: { width: 300 },
});

function Iframe({ iframe }) {
    return <div dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }} />;
}

export default function Report() {
    const [selectedReport, setSelectedReport] = useState("report1");

    const handleReportChange = (_, option?: IDropdownOption) => {
        if (option) {
            setSelectedReport(option.key as string);
        }
    };

    const dropdownOptions: IDropdownOption[] = [
        { key: "report1", text: "CT BiWeekly Report" },
        { key: "report2", text: "CTS Attributes" },
        { key: "report3", text: "CT Program Data Counts Dashboard" },
        { key: "report4", text: "CT CRM Final" },
        { key: "report5", text: "CT Program Activation Check for P6" },
        { key: "report6", text: "CTS Cold Accounts" },
    ];

    return (
        <>
            <h2>PowerBI Reports</h2>
            <Dropdown
                placeholder="Select a Report"
                options={dropdownOptions}
                selectedKey={selectedReport}
                onChange={handleReportChange}
                className={classNames.dropdown}
            />

            <br />
            <div className="content3">
                <Iframe iframe={reports[selectedReport]} />
            </div>
        </>


    );
}

