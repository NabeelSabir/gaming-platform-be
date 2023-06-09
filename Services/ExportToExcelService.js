const xlsx = require("xlsx")
const path = require("path");
const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new()
    const workSheetData = [workSheetColumnNames, ...data]
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData)
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName)
    xlsx.writeXLSX(workBook, path.resolve(filePath))
}
const exportExcelWithData = (userArr, workSheetColumnNames, workSheetName, filePath) => {
    const data = userArr.map(user => {
        return [user.sr_no, user.userName, user.email]
    })
    exportExcel(data, workSheetColumnNames, workSheetName, filePath)
}
//
module.exports = exportExcelWithData