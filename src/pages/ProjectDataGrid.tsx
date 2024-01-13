import * as React from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridRow,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";

type ProjectCell = {
  projectNumber: string;
  projectName: string;
};

type OrganizationCell = {
  organizationName: string;
};

type ActivityCell = {
  activityName: string;
};

type Item = {
  type: "project" | "organization" | "activity";
  data: ProjectCell | OrganizationCell | ActivityCell;
};

type DataGridProps = {
  items?: Item[]; // Make items optional
};

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "entity",
    compare: (a, b) => a.type.localeCompare(b.type),
    renderHeaderCell: () => "Entity",
    renderCell: (item) => (
      <TableCellLayout>
        {item.type === "project" && (
          <Link to={`/projects/${(item.data as ProjectCell).projectNumber}`}>
            {(item.data as ProjectCell).projectName}
          </Link>
        )}
        {item.type === "organization" && (
          <span>{(item.data as OrganizationCell).organizationName}</span>
        )}
        {item.type === "activity" && (
          <span>{(item.data as ActivityCell).activityName}</span>
        )}
      </TableCellLayout>
    ),
  }),
  // Add more columns as needed
];

const DataGridComponent: React.FC<DataGridProps> = ({ items }) => {
  // Check if items is defined before accessing its length
  if (!items) {
    console.error("Items array is undefined");
    return null;
  }

  return (
    <DataGrid
      items={items}
      columns={columns}
      sortable
      selectionMode="multiselect"
      getRowId={(item) => item.type} // Use type as the row ID for simplicity
      onSelectionChange={(e, data) => console.log(data)}
      focusMode="composite"
    >
      <h2>Projects</h2>
      <DataGridHeader>
        <DataGridRow
          selectionCell={{
            checkboxIndicator: { "aria-label": "Select all rows" },
          }}
        >
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item>
            key={rowId}
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select row" },
            }}
          >
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};

export default DataGridComponent;
