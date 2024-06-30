// ExcelExporter.js
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExcelExporter = ({ data, fileName }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAs(new Blob([excelBuffer]), `${fileName}.xlsx`);
  };

  return (
    <button
      onClick={exportToExcel}
      className=" bg-gray-50 px-2 py-2 rounded-md drop-shadow-md text-l font-medium text-black fixed bottom-0 left-20"
    >
      Export to excel File
    </button>
  );
};

export default ExcelExporter;
