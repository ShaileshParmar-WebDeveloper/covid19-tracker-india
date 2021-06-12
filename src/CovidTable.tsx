import React from "react";
import { StateData } from "./App";

function CovidTable({ data = [] }: { data: StateData[] }) {
  const totalCase = data[0];
  const heading = {
    state: "State",
    confirmed: "Confirmed",
    active: "Active",
    recovered: "Recovered",
    deaths: "Deaths",
    lastupdatedtime: "Last updated on",
  };
  return (
    <div>
      <table className="tw-min-w-full tw-table-auto">
        <thead className="">
          <TableData {...heading} />
        </thead>
        <tbody className="tw-bg-gray-200">
          {data.map(
            ({
              state,
              confirmed,
              active,
              recovered,
              deaths,
              lastupdatedtime,
            }) =>
              state === "State Unassigned" || state === "Total" ? null : (
                <tr
                  key={state}
                  className="tw-bg-white tw-border-4 tw-border-gray-200 tw-text-center"
                >
                  <td className="tw-px-16 tw-py-2">
                    <span className="tw-text-gray-800">{state}</span>
                  </td>
                  <td className="tw-px-16 tw-py-2 other-case">
                    <span className="tw-text-gray-800">{confirmed}</span>
                  </td>
                  <td className="tw-px-16 tw-py-2 other-case">
                    <span className="tw-text-gray-800">{active}</span>
                  </td>
                  <td className="tw-px-16 tw-py-2 other-case">
                    <span className="tw-text-gray-800">{recovered}</span>
                  </td>
                  <td className="tw-px-16 tw-py-2 death">
                    <span className="tw-text-gray-800">{deaths}</span>
                  </td>
                  <td className="tw-px-16 tw-py-2">
                    <span className="tw-text-gray-800">{lastupdatedtime}</span>
                  </td>
                </tr>
              )
          )}
        </tbody>
        <tfoot>
          <TableData {...totalCase} />
        </tfoot>
      </table>
    </div>
  );
}

export default CovidTable;

type TableProp = {
  state: string;
  confirmed: number | string;
  active: number | string;
  recovered: number | string;
  deaths: number | string;
  lastupdatedtime: string;
};

function TableData({
  state,
  confirmed,
  active,
  recovered,
  deaths,
  lastupdatedtime,
}: TableProp) {
  return (
    <tr className="tw-bg-gray-800">
      <th className="tw-px-16 tw-py-2">
        <span className="tw-text-gray-300">{state}</span>
      </th>
      <th className="tw-px-16 tw-py-2">
        <span className="tw-text-gray-300">{confirmed}</span>
      </th>
      <th className="tw-px-16 tw-py-2">
        <span className="tw-text-gray-300">{active}</span>
      </th>
      <th className="tw-px-16 tw-py-2">
        <span className="tw-text-gray-300">{recovered}</span>
      </th>
      <th className="tw-px-16 tw-py-2">
        <span className="tw-text-gray-300">{deaths}</span>
      </th>
      <th className="tw-px-16 tw-py-2">
        <span className="tw-text-gray-300">{lastupdatedtime}</span>
      </th>
    </tr>
  );
}
