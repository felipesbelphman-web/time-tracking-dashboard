@'
# Time Tracking Dashboard

A responsive time tracking dashboard built with HTML, CSS, and JavaScript as a Frontend Mentor challenge. It displays six activities and lets users switch between daily, weekly, and monthly statistics.

## Features

- Responsive desktop and mobile layouts
- Daily, weekly, and monthly views
- Activity data loaded from `data.json`
- Current hours and previous-period comparisons
- Active state for the selected timeframe button
- Card and icon animations when changing timeframes

## How the JavaScript works

### 1. Load the activity data

`fetch("data.json")` reads the local JSON file. The response is converted to a JavaScript object with `response.json()`. Each activity contains its title and the hours for the three timeframes.

### 2. Match data to the cards

The `updateCards(selectedTimeframe)` function loops through the activities with `data.forEach()`. It finds each card using the activity title and the card's `data-activity` attribute:

```js
document.querySelector(`[data-activity="${activity.title}"]`);