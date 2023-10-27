# Expenses Node.js Program

This repository contains a Node.js program for analyzing data from a file and calculating totals by categories and names.

## GitHub Repository Setup and Running `expenses.js` with Node.js

These instructions will guide you through the process of copying a GitHub repository to your local PC and running the `expenses.js` program using Node.js.

### Prerequisites

- Node.js installed on your local PC. You can download it from [the official Node.js website](https://nodejs.org/).

### Step 1: Clone the GitHub Repository

1. Open your command line interface (CLI) on your local PC.

2. Choose a directory where you want to copy the GitHub repository and navigate to it using the `cd` command. For example:
   ```bash
   cd /path/to/desired/directory
   ```
3. Clone the GitHub repository using the git clone command
   ```bash
   git clone https://github.com/stepanovcodes/expenses.git
   ```

### Step 2: Run expenses.js with Node.js

1. After cloning, navigate to the repository directory using the cd command:
   ```bash
   cd expenses
   ```
2. Make sure you have the 'data.dat' file in the same directory as 'expenses.js'.
3. Open your CLI and run the 'expenses.js' program using Node.js:
   ```bash
   node expenses.js
   ```
4. The program should execute, and any output or results will be displayed in your command line:
   ```bash
   Totals by categories (sorted):
   {
   b: 8057.09,
   a: 8120.66,
   e: 8404.27,
   d: 8420.27,
   f: 8574.57,
   c: 9595.53
   }
   Totals by names (sorted):
   {
   J: 7565.64,
   I: 7616.19,
   N: 8445.12,
   M: 8720.64,
   L: 9187.69,
   K: 9637.11
   }
   Totals: 51172.39
   ```
Congratulations! You have successfully copied the GitHub repository to your local PC and run the expenses.js program with Node.js.