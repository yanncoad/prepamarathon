# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marathon training and weight tracking web application for preparation from July 22nd to October 26th, 2025. The application is a French single-page webapp that helps track daily training sessions and body weight progress.

## Commands

### Running the Application

```bash
# No build process required - open directly in browser
open index.html
```

### Development

- No package manager, build tools, or server required
- Direct file editing and browser refresh for development
- Uses browser localStorage for data persistence

## Architecture

This is a client-side only web application with no build system or backend dependencies:

- **index.html** : Main HTML file containing complete UI and application logic (note: was previously `road_to_rennes.html`)
- **sessions-data.js** : Training session data structure with detailed workout plans
- **manifest.json** : PWA manifest for mobile app-like experience
- **sw.js** : Service Worker for offline functionality
- **timeline-render.js** : JavaScript module for timeline rendering (currently unused in main HTML)

### Data Architecture

- **Session Data Structure**: Each session in `sessions-data.js` contains:
  - `date`: ISO date string (YYYY-MM-DD)
  - `title`: Session name/description
  - `semi`/`mar`: Boolean indicators for race types
  - `done`: Completion status
  - `sections`: Array of detailed information (objective, summary, details, tips, justification)

- **LocalStorage**: User data (completion status, weight) is persisted in browser localStorage with keys like `day-YYYY-MM-DD`

- **Data Flow**: `sessions-data.js` contains training plans → converted to `dayPlans` object in main HTML → merged with localStorage data for UI rendering

### Key Implementation Details

- **Inline JavaScript**: All application logic is contained within the main HTML file using inline `<script>` tags
- **Data Conversion**: The `convertSessionsToDayPlans()` function transforms the `sessions` array from `sessions-data.js` into the internal `dayPlans` object format
- **State Management**: User interactions auto-save to localStorage via `saveData(dateStr, data)` function
- **Card-based UI**: Each training day is rendered as an expandable card showing workout details
- **Type System**: Sessions are categorized by type (rest, recovery, vma, tempo, festival, etc.) affecting UI styling and completion logic

### PWA Features

- **Service Worker**: `sw.js` provides offline functionality and caches resources
- **Web App Manifest**: `manifest.json` enables installation as a mobile app
- **Responsive Design**: Mobile-first design using Tailwind CSS via CDN

### Styling and UI

- **CSS Variables**: Custom design system using CSS custom properties in `:root`
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN
- **Interactive Elements**: Custom checkbox styling, modals, progress bars
- **Themes**: Different session types have color-coded card borders and icons

### Core Functions to Understand

- `createCard(date)`: Main function that renders each training day card
- `isCompleteDay(data, plan)`: Determines if a day's activities are fully completed based on session type
- `updateStats()`: Updates progress statistics in header
- `toggleDetails()`: Handles expanding/collapsing session details
- `getHiitConfigForDate()`: Parses HIIT workout details from session data for timer functionality

### Extending the Application

- **Adding Sessions**: Extend the `sessions` array in `sessions-data.js` with new session objects
- **Modifying UI**: Update the `createCard()` function in the main HTML file
- **Adding Features**: The timer modal and nutrition guide demonstrate how to add new functionality