import {
    And, Then,
} from "cypress-cucumber-preprocessor/steps";
import GengxianPage from '../../../../pageobjects/gengxianPage';

const GENGXIANPAGE = new GengxianPage();

Then(/^I should see (.*?) table rows listed correctly$/, (total_rows) => {
    GENGXIANPAGE.isTotalTableRows(total_rows)
})

Then(/^I should see (.*?) images listed$/, (num_of_images) => {
    GENGXIANPAGE.isTotalImages(num_of_images)
})

And(/^I should see correct (.*?) displayed$/, (condition, dataTable) => {
    GENGXIANPAGE.isBookDetails(condition, dataTable)
})
