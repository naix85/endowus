import {
    Given
} from "cypress-cucumber-preprocessor/steps";

Given(/^I launch the website$/, function () {
    cy.visit("/books/");
});