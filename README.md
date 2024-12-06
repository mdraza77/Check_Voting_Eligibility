# Project Documentation

## Overview
This project is a simple web-based application that determines the voting category of a user based on their age. It provides feedback to the user about their eligibility to vote and categorizes them as a young voter, eligible voter, senior citizen voter, or informs them if they are too young to vote.

## Key Functions

### 1. Validate_Age()
- **Purpose**: Validates the user's age input and determines the appropriate voting category.
- **Process**:
  - Retrieves the age input from the HTML element with the ID `age`.
  - Validates the input to ensure it is not empty and is a whole number.
  - Converts the input to an integer.
  - Checks if the age is within a realistic range (0 to 110).
  - Calls `determineAdultCategory()` if the age is 18 or older.
  - Calls `determineYouthCategory()` if the age is below 18.

### 2. updateResult(message, type)
- **Purpose**: Updates the result display with a message and color based on the type of message.
- **Parameters**:
  - `message`: The message to display to the user.
  - `type`: The type of message, which can be "error" or "success".
- **Behavior**:
  - Changes the text content of the HTML element with the ID `result`.
  - Sets the text color to red for errors and green for success messages.

### 3. determineAdultCategory(age)
- **Purpose**: Determines the voting category for adults based on age.
- **Behavior**:
  - Categorizes users as young voters (18-25), eligible voters (26-60), or senior citizen voters (above 60).
  - Calls `updateResult()` with a success message for each category.

### 4. determineYouthCategory(age)
- **Purpose**: Provides feedback for users who are too young to vote.
- **Behavior**:
  - Provides specific messages for toddlers (below 5), kids (5-12), and teenagers (13-17).
  - Calls `updateResult()` with an error message indicating how many years are left until they can vote.

## Usage
- Ensure the HTML page includes elements with IDs `age` and `result`.
- Call `Validate_Age()` when the user submits their age to determine their voting category.

## Dependencies
- The project uses standard JavaScript functions and DOM manipulation methods.
- Ensure the HTML page includes the necessary script tags to load the JavaScript file containing these functions.

## Notes
- The project assumes the age input is provided as a string and performs necessary conversions.
- The age validation ensures that only realistic ages are processed, providing user-friendly feedback for invalid inputs.
