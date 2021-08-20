class UtilsPage {

    processDataTable(dataTable) {
        var propValue;
        var arr_tmp = [];
        dataTable.raw().forEach(elem => {
            for (var propName in elem) {
                arr_tmp.push(elem[propName])
                // cy.log(propValue);
            }
        })
        // cy.log(arr_tmp);
        return arr_tmp;
    }

    isArrayEqualToDataTable(locator, dataTable) {
        cy.get(locator).each((elem, index) => {
            expect(elem.text().trim()).to.be.equal(dataTable[index])
        })
    }

}

export default UtilsPage