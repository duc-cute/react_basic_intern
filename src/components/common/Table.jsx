/** @format */

import React, { memo } from "react";
const Table = ({ title, columns, data, groupButton }) => {
  return (
    <>
      <div className="relative overflow-x-auto  font-lato text-[#000000E0]">
        <div className="flex items-center justify-between rounded-t-md bg-white py-2 px-4 ">
          <h3 className="capitalize text-[18px] font-semibold ">{title}</h3>
          <div className="flex items-center gap-2 font-normal">
            {groupButton?.map((btn, ind) => (
              <div key={ind}>{btn.button}</div>
            ))}
          </div>
        </div>
        <div className="overflow-auto max-h-[420px]">
          <table className="w-full  text-left rtl:text-right">
            <thead className="text-[16px]  capitalize font-semibold bg-[#fafafa] py-2">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} scope="col" className="px-4 py-3 ">
                    <div className="flex items-center justify-center">
                      {column?.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, ind) => (
                <tr
                  key={ind}
                  className="bg-white text-[14px] border-b border-[1px] border-gray-100 border-solid font-medium  hover:bg-gray-50 "
                >
                  {columns.map((column, index) => (
                    <td
                      key={index}
                      className="px-4 py-4 align-middle text-center"
                    >
                      {column.render
                        ? column.render(item[column.key], ind, item)
                        : item[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default memo(Table);
