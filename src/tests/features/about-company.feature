Feature: About Company
     This feature file validates About Company functionality
     Scenario: About Company
     Given Web browser is at the Intradyn home page
     When User hovers over "Why Intradyn" link
     Then User sees "Company" link
     When User clicks on "Company" link
     Then User sees "About Company" text
     Given Browser is closed