# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: A FacilityCustomAgentId generated reports
Acceptance Criteria:
Generate Reports include Facility Agent Custom Id

Ticket 1a: Add FacilityAgents Table
Acceptance Criteria:
Migration script written and peer reviewed
Implementation Details:
Add table `FacilityAgents` table with a `id` as primary key, `custom_id`, `facility_id` as relation key to for Facilities `id` primary key and `agent_id` as relation key to for Agents `id` primary key,
Time/Effort Estimates: 2 Hours

Ticket 1b: Return FacilityCustomAgentId from getShiftsByFacility
Acceptance Criteria:
PR submitted with changes and peer view completed
Tests required to validate no errors when returning both when FacilityCustomAgentId is null or not null
Implementation Details:
Update function `getShiftsByFacility` to return `FacilityCustomAgentId` in the metadata for each Agent from the `FacilityAgents` table from Ticket 1a.
Time/Effort Estimates: 2 Hours

Ticket 1c: Design Update PDF generated generateReport
Acceptance Criteria:
Design changes and copy approved by stakeholder.
Attach Example PDF or Design file location and Copy for labeling FacilityCustomAgentId.
Implementation Details:
Add FacilityCustomAgentId to design of pdf for `generateReport`.
Time/Effort Estimates: 1-3 Hours

Ticket 1d: Update PDF generated generateReport to included FacilityCustomAgentId
Acceptance Criteria:
PR submitted with changes and peer view completed
Tests required to validate no errors when returning both when FacilityCustomAgentId is null or not null
Implementation Details:
Update function `generateReport` by adding the `FacilityCustomAgentId` to the pdf from `getShiftsByFacility`.
Time/Effort Estimates: 6 Hours

Ticket 2: Facilities to save their own custom ids for each Agent they work with.
Acceptance Criteria:
User belonging to a Facility be able to view and edit agents custom id for their Facility.
Time/Effort Estimates: 25-35 Hours

Ticket 2a: Update Get Endpoint Returning Agents Dashboard to include FacilityCustomAgentId
Acceptance Criteria:
PR submitted with changes and peer view completed
Tests required to validate no errors when returning both when FacilityCustomAgentId is null or not null
Implementation Details:
Update `getShiftsByFacility` Endpoint to return `FacilityCustomAgentId` from `getShiftsByFacility` function
Time/Effort Estimates: 6-8 Hours

Ticket 2a: Update Put Endpoint Agents Dashboard to include FacilityCustomAgentId
Acceptance Criteria:
PR submitted with changes and peer view completed
Tests required to validate no errors when returning both when FacilityCustomAgentId is null or not null
Implementation Details:
Update `updateAgent` Endpoint to put `FacilityCustomAgentId` on `FacilityAgents` table column `custom_id`.
Time/Effort Estimates: 6-8 Hours

Ticket 2c: Design Agent Dashboard UI display `FacilityCustomAgentId` and Edit `FacilityCustomAgentId`
Acceptance Criteria:
Design changes and copy approved by stakeholder.
Attach Design file location and Copy for labeling FacilityCustomAgentId.
Implementation Details:
Add FacilityCustomAgentId to design of Agent Dashboard to allow Facility Users to view and edit and Agent CustomId
Time/Effort Estimates: 1-3 Hours

Ticket 2d: Add Form Field allowing Facilities to save their own custom ids for each Agent
Acceptance Criteria:
PR submitted with changes and peer view completed
E2E Tests required to validate no errors when rendering both when `FacilityCustomAgentId` is null or not null
E2E Tests required to validate no errors when updating `FacilityCustomAgentId`
Implementation Details:
Update form for displaying Agents include and input `FacilityCustomAgentId` from `getShiftsByFacility` Endpoint. When the save the changes to the Agent Custom Field it calls `updateAgent` Endpoint with `FacilityCustomAgentId` included in payload.
Time/Effort Estimates: 8-16 Hours
