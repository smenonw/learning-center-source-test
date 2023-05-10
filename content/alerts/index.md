---
date: 2017-06-13T16:08:29.000+00:00
title: Alerts
weight: "21"

---
## Overview

An alert is an inconsistency regarding the user. Each alert has a priority (indicated by its color):

* _Red_ alerts have an high priority and must be solved as soon as possible;
* _Yellow_ alerts have a low priority and can be seen more as advices;
* _Blue_ alerts are reminders of minor fixes.

Positioning the cursor over an alert will display a description of the problem.

Some alerts depends on parameters that you can customize using the [Alerts Engine](/settings/index#alerts-engine).

### Unsent Order

This alert is shown to the project manager who has created the order which need to be sent.

*How to solve it?* Just send all the waiting orders.

### Unsent Invoice

This alert is shown to the project manager who has created the invoice which need to be sent.

*How to solve it?* Just send all the waiting invoices.

### Expiring Opportunity

This alert is shown to the project manager who have created an opportunity that's expiring in 3 days.

*How to solve it?* Transform the opportunity into a project by clicking on the "+ PROJECT"  button placed near the opportunity itself. Otherwise, if the opportunity isn't ready to became a project, just change the date in the opportunity's "Next Step" field.

### Expired Opportunity

This alert is shown to the project manager who created an opportunity that's already expired.

*How to solve it?* Transform the opportunity into a project by clicking on the "+ PROJECT"  button placed near the opportunity itself. Otherwise, if the opportunity isn't ready to became a project, just change the date in the opportunity's "Next Step" field.

### Intercompany invitation not sent

This alert is shown to the project manager who created an intercompany task and did not send an invitation to a supplier that will be responsible for the task.

*How to solve it?* Send an invitation to a supplier in your group that will be in charge of the task.

### Intercompany invitation pending

This alert appears on your desk if you have not yet accepted an invitation to collaborate in an intercompany project.

*How to solve it?* Link an existing project in your company with the intercompany task you were invited to take responsibility for.

### Project Probability / Invoice Plan

This alert is shown to the project manager of a project which has:

* An [invoice plan](/pipeline/index#invoice-plan) manually set;
* A probability lower than 90

A project is considered active when its probability reaches 90%, only when this happens makes sense to think about creating a invoice plan.

*How to solve it?* Leave the invoice plan set to "Auto" until your project hits the 90% of probability.

### Budget Submitted

This alert is shown if you have the permission to approve budgets and there's a budget waiting for approval.

*How to solve it?* Approve the waiting budget.

### Budget Consumption Too Fast

This alert is shown if you’re the manager of a project where the [budget consumption](/glossary/index#budget-consumption) is more than 15% greater than the project's [progress](glossary/index#absolute-project-progress).

{{< img-center src="/uploads/2017/08/28/budget_cons_too_fast.png" >}}

This means you're consuming too many days and, if you don't fix this situation, you will be soon run out of budget days.
This can have two main causes:

* Somebody has done something wrong with the timesheet;
* The project manager has done an incorrect project status.

*How to solve it?* Talk to your teammates in order to find why timesheets and project status differ so much. Once you've find the problem, edit the timesheet or the project status which is causing it.

### Budget Consumption Too Slow

This alert is shown if you're manager of a project where the [budget consumption](/reports/index#budget-consumption) is more than 15% lower than the project's [progress](/glossary/index#absolute-project-progress).

{{< img-center src="/uploads/2017/08/28/budget_cons_too_slow.png" >}}

This means you've planned too many days and, if you don't fix this situation, you will reach the end of the project with a lot of budget days left.
This can have two main causes:

* Somebody has done some wrong timesheet;
* The project manager has done an incorrect project status.

*How to solve it?* Talk to your teammates in order to find why timesheets and project status differ so much. Once you've find the problem, edit the timesheet or the project status which is causing it.

### Project Status / Archived

This alert is shown if you're manager of a finished project which isn't already been archived.

*How to solve it?* Archive your projects when their project status reach 0.

### Project Probability / Missing Budget

This alert is shown if you're manager of a project with probability greater than 50% and with budget missing.

*How to solve it?* Lower the probability, provide a budget or ask your supervisor to approve the budget.

### Project Probability / Budget Status

This alert is shown if you're manager of a project with probability greater than 50% and with a budget still in draft.

*How to solve it?* Lower the probability or ask your supervisor to approve the budget.

### Planning Or Timesheet But Probability Is Too Low

This alert is shown if you're manager of a project with probability lower than 90% but which already has planning and/or timesheets assigned.

Remember that a project is considered active only if it has a probability greater or equal to 90%.
For a project that is not active yet, there's no need to plan resources or to register a timesheet.

*How to solve it?* Increase project's probability or delete plannend hours and timesheets for the project itself.

### Planning > Project Status

This alert is shown if you're manager of a project for which are planned (in the future) more days than the last project status days. What's the meaning of requiring more resources than what you really need?

*How to solve it?* Make project's planning and last project status to be consistent each other.

### Client PO

This alert is shown to the project manager if one of the following situations happens:

* Project has probability of 100% and there isn't a Purchase Order set for the project
* Project has some invoices but there isn't a Purchase Order set for the project
* A Purchase Order is set for the project despite its probability is lower than 100%

*How to solve it?* Add a PO once a project reach 100% of probability, add invoices only to projects that already have a PO.

### Project Start

This alert is shown to the project manager if one of the following situations happens:

* A project is started but its probability is lower than 90%
* A project is going to start during the current month but its probability is lower than 75%

Remember: a project is considered started if it has a start date in the past or if someone has submitted timesheets for it.

*How to solve it?* If a project is going to start during the current month, increase its probability to 90%. Change the start date otherwise.

### Project Status

This alert is shown if you're manager and you've forgot to update a project's status in the last two weeks.
A project status is required for a given week only if at least a timesheet has been submitted for that week.

*How to solve it?* Provide the missing project statuses.

### Timesheet

This alert is shown to employees who, during the last weeks, submitted timesheet amount lower 
than the target amount selected from the [Alerts Engine](/settings/index#alerts-engine) section.

*How to solve it?* Provide the missing timesheets.

### Project Duration / Timesheet

This alert is shown to the manager of a project which has some timesheets done before the start date or after the end date.

*How to solve it?* Delete the timesheets done before the start date or after the end date. Otherwise extend the project duration *so it will include* all the project status done.

### Invoice Plan / Budget Final Net Price

This alert is shown to the manager of a project if the following situations happen:

* The invoice plan is set as manual
* Invoice plan's total amount and final net price  mismatch

This can happen when you edit a budget after setting invoice plan as manual.

*How to solve it?* Make invoice plan and final net price match.

### Job Order / Project Probability

This alert is shown to the manager of a project if one of the following situations happens:

* The probability is greater than 90% but the project hasn't a job order
* The probability si lower than 90% and the project has a job order

Remind: only active projects (which means projects with a probability greater or equal to 90%) 
must have a [job order](/glossary/index#job-order)

*How to solve it?* Assign job order only to active projects.

### Planning / Project End

This alert is shown to the manager of a project which has planned even more people to the project, even after the end date.

In other words: the project is over, you have no reason to plan people on it.

*How to solve it?* Remove planned people assigned to ended projects.

### Planning / Budget Status

This alert is shown to the manager of a project which has planned future resources but hasn't an 
approved [budget](/budget/index#budget)

The planned resources say that the project is active but the budget is not approved, so the alert will remind you to approve it as soon as possible.You cannot plan resources if you haven’t got a budget  which gives you the right to do it.

*How to solve it?* Ask your supervisor to approve the budget.

### Non Chargeable / Budget Final Net Price

This alert is shown to the manager of a non chargeable project which has a final net price greater than zero. This is a paradox because non chargeable project can't have revenues by definition.

*How to solve it?* If the project is really non chargeable, set its final net price to zero. Otherwise change the project's type to a chargeable one.

### Empty Planning

This alert is shown to you if you're not planned for tomorrow (Saturday and Sunday excluded).

*How to solve it?* Ask the project managers in your team to fill your planning.

### Orders / External Cost

This alert is shown to the manager of a project where the sum of orders, travels and expenses go 
over the [budget external cost](/budget/index#budget-external-cost).

You don't want to spend money you don't have, do you? You do not have to go over the budget!

*How to solve it?* Review your expenses or increase the external cost for your project.

### Production Plan / Project Duration

This alert is shown when there is a mismatch between the Production Plan data and the Project duration, you could be in one of the following situations:

* You've set to 0 the planned production for the first or the last month of a particular project, this means the project could start one month later or end one month earlier respectively
* There is some planned production before the project's start or after the project's end

This alert doesn't appear if the project is archived with probability 0 or its Job Order Category has the "Time Based Progress" flag.

*How to solve it?* Adjust the project plan in order to be aligned with the project's duration.

### Production Plan Correction

At the end of the month, the month's actual production (based on Project Status) is compared to the month's planned production. If these values differ, a correction will be suggested in the planned production of the future months.
This alert warns you if these values differ by 10% or more.

*How to solve it?* Just find the project in the Production Plan and accept or edit the suggested correction.

### Job Order Used Multiple Times

This alert is shown if you're sharing the same job order for different projects.

*How to solve it?* Assign different job orders to different projects.

### Project Probability / Program

Parameters: <span style="color:#FF9800">probability</span>

This alert is shown if you're manager of a project with a probability equal or greater than 
<span style="color:#FF9800">probability</span> but it hasn't been added to a [program](/pipeline/index#programs) yet.

*How to solve it?* Add project to a program or reduce its probability.

### Intercompany Invitation Not Sent

This alert means that you have created an intercompany task but have not sent the invitation to other companies in your group. All intercompany tasks must be linked to correctly calculate the total revenues of the company.

*How to solve it?* Go to your budget and send the intercompany invitation for all intercompany tasks to solve this alert.

### Intercompany Invitation Pending

This alert means that you have a pending intercompany request. All intercompany tasks must be accepted to correctly calculate the total revenues of the company.

*How to solve it?* Accept the intercompany request by linking it to the correct project. You have received the invitation via email, or you can directly click the alert.

### Missing project's brief

This alert means that your project lacks of a brief. What are the client needs? What problem(s) should the team resolve? 

*How to solve it?* Head to the project's canvas and drop just a few lines about the customer needs in the widget "Brief". Everyone in your team will be on the same page.

### Missing project's concept

This alert means that your project has already an approved budget but lacks of a concept. What's the project's proposal? Any ideas?

*How to solve it?* Head to the project's canvas and drop just a few lines about the project's proposal in the widget "Concept". Share with your team these great ideas!

### Missing project's type

This alert means that your project lacks a Project Type. A Project Type is required for all projects or only for chargeable ones according to your alert settings.
Visit the [Alerts Engine](/settings/index#alerts-engine) section to change the projects 
that require a Project Type.

*How to solve it?* Head to the projects list and assign a Project Type.

### Won Project But Missing Files
This alert means that your project is won (probability 90% or more) and has a "chargeable" Job Order Category but has no files attached.

*How to solve it?* Upload at least one document, what about starting with the proposal or the contract?