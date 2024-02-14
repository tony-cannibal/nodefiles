// Requiring the module
const reader = require('xlsx')


function readexcel(dir) {
    // Reading our test file
    const file = reader.readFile(dir)
    let excelSheets = {}
    const sheets = file.SheetNames

    for (let i = 0; i < sheets.length; i++) {
        let data = []

        const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach((res) => {
            data.push(res)
        })
        // excelSheets.push(data)
        excelSheets[file.SheetNames[i]] = data
    }
    return excelSheets
}

let file = './test.xlsx'

let test = readexcel(file)

for (i in test["Sheet1"]) {
    console.log(Object.values(test["Sheet1"][i]))
}
// Printing data
// console.log(test)

// let length = Object.keys(excelSheets["Sheet1"]).length
//
// for (let i = 0; i < length; i++) {
//     console.log(Object.values(excelSheets["Sheet1"][i]))
// }



