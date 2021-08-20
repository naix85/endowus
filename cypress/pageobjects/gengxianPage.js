const TABLE_ROW = "div[role=rowgroup]";
const BOOK_IMAGE = 'img[src*="bookimage"]';
const TITLE = 'span > a';
const AUTHOR = 'div[class="rt-table"] > div[class="rt-tbody"] > div > div > div:nth-child(3)';
const PUBLISHER = 'div[class="rt-table"] > div[class="rt-tbody"] > div > div > div:nth-child(4)';
const HEADERS = 'div[role="columnheader"]'

// import { expect } from "chai";
import UtilsPage from "./utilsPage";

class GengxianPage extends UtilsPage {
    isTotalTableRows(total_rows) {
        cy.get(TABLE_ROW).should('have.length', total_rows)
    }

    isTotalImages(num_of_books) {
        cy.get(BOOK_IMAGE).should('have.length', num_of_books)
    }

    isBookDetails(condition, dataTable) {
        var dataTable = this.processDataTable(dataTable)
        switch (condition) {
            case 'headers':
                this.isArrayEqualToDataTable(HEADERS, dataTable)
                break;
            case 'title':
                this.isArrayEqualToDataTable(TITLE, dataTable)
                break;
            case 'author':
                this.isArrayEqualToDataTable(AUTHOR, dataTable)
                break;
            case 'publisher':
                this.isArrayEqualToDataTable(PUBLISHER, dataTable)
                break;
        }

    }
}

export default GengxianPage