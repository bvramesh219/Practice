# Backbase Front End Assignment: Make A Transaction
This assignment is developed by using below Technologies
  - Nrwl/nx
  - Angular
  - NGRX
  - Angular Material
  - Type Script
  - Scss


## Application Setup
1. Checkout application from the github url or download.
2. Go to the folder where `package.json` there.
3. run `npm install` command. Make sure you install node.js

## Runing Application
In order to run application run `npm start` command. After that just browser and open `http://localhost:4200/`

## Application Structure
Basically this application have one main application

**peach-tree-bank:** This is main application where all the components and services has been used.

The above application uses below libraries   
**material:** All material modules are imported here. By importing this module all material modules will available to application.   
**models** All reusable models/interfaces are available here.     
**money-transfer** This is the money-transfer module where all components related to money transfer feature are grouped and available here.     
**shared** This is shared library, where all reusable common components, services and utilities are available here.

The above structure is created with NRwl/ NX mono repo concept.
By using NGRX state all the data that is required for application is centrally stored in store and components access through subscribers.
Angular material components are used in this application
No Css framework has been used.
No unit test cases has been written except default test cases those come up with frame work while creating application, components, services and modules.

