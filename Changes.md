# Changes

## Original Behavior
- The app included a sidebar widget called "Motivation Mode".
- It fetched a random motivational quote from the backend every 5 seconds.
- The widget displayed the quote but had no direct connection to the user's actual task progress.

## Why It Was Ineffective
- Frequent quote refreshes were noisy and wasted resources without improving task focus.
- The feature provided inspiration but did not help users prioritize or complete tasks.
- The widget was disconnected from the main productivity workflow of adding and completing tasks.

## What Changed
- Replaced the quote-driven widget with a task-aware "Productivity Insights" panel.
- Removed the continuous backend quote polling and the `getMotivation` API dependency for this widget.
- Passed the current task list from `Dashboard` to the widget so it can reflect real progress.
- Added meaningful productivity information:
  - total tasks
  - completed tasks
  - pending task count
  - next pending task as a clear next action
  - a practical focus tip

## How the Change Improves the App
- The sidebar now supports the app's core goal: helping users manage and complete tasks.
- Users get actionable feedback rather than generic motivation.
- The updated widget is less distracting and better integrated with task state.
- The app no longer performs unnecessary periodic API calls for a feature that should be task-driven.
