# MediaHub
-MediaHub is an HTML-based application designed as a list format to track your movies, TV shows, and anime. Dependent on Google Drive, it uses a Google Sheets spreadsheet for storage and configuration, making it highly customizable.

MEDIA HUB — What it is:

-A single-file web app (HTML + Tailwind CSS + vanilla JS, no installation needed) for organizing and tracking your personal collection of movies, TV series, anime, and cartoons — with rating, statistics, cloud sync, and automatic detection of new content.

Core Features

📁 Collection Management

Built-in, customizable categories (tabs): MOVIES, SERIES, ANIME, ANIME MOVIE, CARTOONS
Spreadsheet-style editable table with columns: No., Name, Grade, Theme/Genre, Extra, IMDB, Rewatch counter, Note, Poster, Control
Visible columns, alignment, text wrap, and font size — configurable separately for PC and Mobile

➕ Adding & Auto-Fill

Quick add: title + grade
Auto-fill via the TMDB API: poster, genre, IMDB link, runtime/episode count — filled in automatically on save
Duplicate detection on add, with confirmation prompt

🛰️ Radar (New Releases)

Scans the entire collection (via TMDB) to find new seasons, new episodes, or new movies
Filters: minimum grade, minimum year, "currently airing" only, in-results search

🧹 Database Cleanup (Clean Report)

Detects duplicate titles
Finds entries missing an IMDB link
Checks for "dead" posters (expired image links)
Auto-fixes grade formatting (comma → dot)

🎨 Appearance Customization

Auto / Light / Dark theme + accent color
Automatic color formatting based on grade (configurable rules)
Separate display profiles for PC and Mobile

☁️ Saving & Sync

Local storage (browser) — works fully offline
Cloud sync via a Google Apps Script backend connected to Google Sheets (URL + password)
Import/Export in .JSON (entire database) and .CSV (per category) formats
Backups and action history with Undo

⚙️ Other Features

Bilingual: English / Romanian
Keyboard shortcuts (quick search with "/", add item with Shift+A, save with Ctrl+S, table navigation with arrow keys, etc.)
Vibration feedback and reduced-motion toggle (mobile)
Individual notes per title
Rewatch counter
