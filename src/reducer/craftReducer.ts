import { Action, TableState } from "../types";

export function CraftReducer<T>(
  state: TableState<T>,
  action: Action<T>
): TableState<T> {
  switch (action.type) {
    case "SELECT_ALL_ROWS": {
      const allSelected = !state.allSelected;
      return {
        ...state,
        allSelected: allSelected,
        selectedCount: allSelected ? action.rowCount : 0,
        selectedRow: action.row,
      };
    }

    case "SELECT_SINGLE_ROW": {
      const { keyField, row, isSelected, rowCount, sigleSelected } = action;
      if (sigleSelected) {
        if (isSelected) {
          return {
            ...state,
            selectedCount: 0,
            selectedRow: [],
            allSelected: false,
          };
        }

        return {
          ...state,
          selectedCount: 1,
          selectedRow: [row],
          allSelected: false,
        };
      }
    }

    case "SELECT_MULTIPLE_ROWS": {
      const { keyField, selectedRows, totalRows } = action;

      return {
        ...state,
        selectedCount: selectedRows.length,
        selectedRow: selectedRows,
        allSelected: selectedRows.length === totalRows,
      };
    }
  }
}
