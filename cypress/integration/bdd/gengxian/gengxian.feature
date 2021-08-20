Feature: Gengxian Scenarios

    Background: Launching website
        Given I launch the website

    Scenario: Verify table headers displayed correctly
        Then I should see correct headers displayed
            | Image     |
            | Title     |
            | Author    |
            | Publisher |

    Scenario: Verify table list a total of 10 rows
        Then I should see 10 table rows listed correctly

    Scenario: Verify book image, title, author, publisher displayed
        Then I should see 8 images listed
        And I should see correct title displayed
            | Git Pocket Guide                          |
            | Learning JavaScript Design Patterns       |
            | Designing Evolvable Web APIs with ASP.NET |
            | Speaking JavaScript                       |
            | You Don't Know JS                         |
            | Programming JavaScript Applications       |
            | Eloquent JavaScript, Second Edition       |
            | Understanding ECMAScript 6                |
        And I should see correct author displayed
            | Richard E. Silverman |
            | Addy Osmani          |
            | Glenn Block et al.   |
            | Axel Rauschmayer     |
            | Kyle Simpson         |
            | Eric Elliott         |
            | Marijn Haverbeke     |
            | Nicholas C. Zakas    |
            |                      |
            |                      |
        And I should see correct publisher displayed
            | O'Reilly Media  |
            | O'Reilly Media  |
            | O'Reilly Media  |
            | O'Reilly Media  |
            | O'Reilly Media  |
            | O'Reilly Media  |
            | No Starch Press |
            | No Starch Press |
            |                 |
            |                 |




