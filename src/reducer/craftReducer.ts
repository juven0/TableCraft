import { Action, TableState } from "../types";

export function CraftReducer<T>(
  state: TableState<T>,
  action: Action<T>
): TableState<T> {}
