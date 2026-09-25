# 🎬 MEDIA HUB

**A personal tracker for everything you watch: movies, series, anime, anime films and cartoons, in a single HTML file.**

MEDIA HUB is a fast, good-looking list app. Your collection lives in **your own Google Sheet**, TMDB fills in the details for you, and a built-in radar tells you when something you follow gets a new season. There's nothing to install and no account to create beyond your own Google Drive. Open the file and start tracking.

<img width="1882" height="868" alt="MEDIA HUB – table view on PC" src="https://github.com/user-attachments/assets/b7a81336-1d56-439c-a4cf-84fb0d1059b9" />
<img width="907" height="820" alt="Screenshot 2026-09-25 120758" src="https://github.com/user-attachments/assets/c2212a7e-da7c-4c86-a1f4-ea865b5acd7e" />

---

## ✨ Highlights

- **One file, zero setup:** plain HTML, CSS and JavaScript. It works from your desktop, a USB stick or any static host.
- **Your data, your sheet:** everything is stored in a Google Sheet you own, through a small Google Apps Script backend.
- **TMDB auto-fill:** posters, genres, IMDB links and season, episode or runtime details are filled in automatically.
- **Radar:** finds new seasons, new episodes and new films for the titles in your list.
- **Clean Report:** finds and repairs messy data such as duplicates, dead posters, inconsistent formats and missing links.
- **Built for PC and phone:** a spreadsheet-style table on desktop and poster cards on mobile, each with its own display settings.
- **Bilingual:** English and Romanian.

---

## 📚 Your collection

### Categories
Five ready-made tabs: **MOVIES, SERIES, ANIME, ANIME MOVIE, CARTOONS**. You can hide the ones you don't use; their data is kept.

### The table
| Column | What it holds |
|---|---|
| **#** | Position in the list, shown as a small badge on the poster |
| **Title** | The name, editable in place |
| **Score** | `1–10` (decimals allowed), or `NEXT`, `HOLD` or `DROP` |
| **Genres** | Shown as pills: two genres plus a `+N` chip, and the R+ / R- rating pills |
| **Length** | `4 Seasons \| 89 Episodes` or `148 min`, shown as a compact pill |
| **IMDB** | A yellow IMDB button, or *Add link* when it's missing |
| **Rewatches** | A counter with − / + buttons |
| **Notes** | A short preview with "…"; hover (PC) to read the whole note |
| **Image** | The poster, with a hover zoom on PC |

Genres, Length and IMDB are merged into one cell, and so are Rewatches and Notes, so each row stays compact and easy to read.

### Scores and sorting
Numeric scores always come first, then:
1. **NEXT**: still to watch (green)
2. **HOLD**: started, then paused (amber)
3. **DROP**: abandoned (red)

Click any column header to sort it ascending, descending or back to off. Sorting handles numbers and accented text correctly.

### Editing
- Click a cell to edit it. Arrow keys and Enter move between cells.
- Move rows up or down: hover the # badge on PC, or use the row menu on the phone.
- **Undo** (Ctrl/Cmd + Z) covers edits, deletions, moves, additions and whole Clean Report steps.
- A duplicate warning appears when you add a title that's already in the list.

---

## 🎞️ TMDB integration

Add your free [TMDB](https://www.themoviedb.org/settings/api) API key in **Settings**. From then on:

- **Adding a title** automatically fetches its poster, genres, IMDB link and length.
- **Sync this row / Sync whole table** refreshes the details, and asks you to choose when a title has several matches.
- Requests are rate-limit aware: they retry on "too many requests", time out instead of hanging, and cache results for 30 minutes.

## 🛰️ Radar
<img width="1148" height="837" alt="MEDIA HUB – customization" src="https://github.com/user-attachments/assets/458604c0-c981-4151-a1f7-95e9ab6c4c79" />
<img width="1170" height="803" alt="MEDIA HUB – radar" src="https://github.com/user-attachments/assets/54b0386a-e89f-4242-b62c-4b9ec05457fc" />

**Updates** scans the current category and reports:
- new seasons, episodes currently airing, completed seasons, new films and announced releases;
- the release date and how many days are left.

You can filter by score range (e.g. `8-10` or `7+`), hide anything older than a chosen year, and choose whether NEXT titles are included. HOLD titles are always scanned. Results are grouped into *All / Seasons / Airing / Films / Soon*.

**Search** lets you discover new titles on TMDB by type (movies, series, anime, anime films), rating range, year and genres, and add them to your list with one click.

## 🧹 Clean Report

The Clean Report shows the total number of problems at the top, plus a **Fix all** button. Each check sits in its own collapsible section, with an **Auto** button and an *old → new* preview:

| Check | What it does |
|---|---|
| Possible duplicates | Matches titles regardless of accents or punctuation. *Show* jumps to the row; *Delete* removes one copy. |
| Missing IMDB link | Finds the link on TMDB by title, or lets you paste one yourself. |
| Dead or empty posters | Replaces them with the TMDB poster. There is also an option to move *every* poster to TMDB. |
| Grades normalised | Turns any mark between digits into a dot (`9,10` → `9.10`) and capitalises `next` / `hold` / `drop`. |
| Invalid grades | Fixes clear cases (`10/10`, `9.5.`, `8+`) and lists the rest for you to edit. |
| Length formats | Rewrites every length in one format, e.g. `R- 4 Seasons \| 89 Episodes` or `148 min`. |
| Genres | Uses one spelling per genre (`sci-fi` → `Sci-Fi`) and removes repeats. |
| Text cleanup | Removes stray spaces, turns Rewatches into a number, deletes empty rows and flags rows without a title. |

**Fix all** runs the local fixes first, then the TMDB repairs, with progress shown and a **STOP** button. A whole run can be undone in one step.

---

## 🎨 Make it yours

- **Themes:** Auto (follows your system), Light or Dark, plus any accent colour.
- **Colour rules:** colour scores or text by value, for example `SCORE 9-10 green` or `GENRES Action red`.
- **Depth Customization**, with a search box to find any option quickly:
  - **Text:** size, weight, capitals, header size, wrapping, alignment, words per line, note preview length;
  - **Rows:** density, row lines, sticky header, table width (full, limited or a custom pixel width);
  - **Poster:** fill or fit, width and height (optionally locked to 2:3), corner style, # badge position, hover zoom;
  - **Pills:** number of genre pills, pill style, length format, IMDB button style, R+ / R- pills;
  - **Score:** pill, coloured text or plain, and display format (`9.5`, `9.50`, `★★★★½` or `95`).
- **Separate PC and MOBILE profiles:** visible columns, sizes, look, and even whether the MEDIA HUB header is shown, are all remembered per device type.
- **Behaviour:** scroll to changed rows, animations, vibration (phone), lazy loading, and hiding the header.

---

## ☁️ Saving, sync and safety

- **Local first:** your library is kept in the browser, so the app works offline, and edits are saved locally as you type.
- **Cloud save** (Ctrl/Cmd + S) writes the current category to your Google Sheet. Every save is protected:
  - **Conflict check:** if the sheet was changed somewhere else since you loaded it, you're asked before anything is overwritten.
  - **Verified saves:** the app reads the sheet back and only reports success when the data really arrived.
  - **Automatic backups in the sheet:** before every write that changes data, the backend keeps the 10 most recent copies of each category, plus the last copy of each of the previous 7 days. You can list and restore them from the **MEDIA HUB** menu in the spreadsheet.
  - **No accidental wipes:** the backend refuses a save that would empty a category that has data, and handles only one save at a time, so saving from your phone and your PC together can't mix the two.
- **Settings sync:** themes, colour rules and both display profiles travel with your sheet.
- **Import / Export:** the whole library as `.json`, or one category as `.csv` (opens in Excel or Google Sheets).
- **Privacy:** the TMDB key is never written to the sheet. The App Script URL, cloud password and TMDB key are hidden behind a show/hide eye in Settings.

---

## 🚀 Getting started

1. **Download** the latest `MEDIAHUB_DD_MM_YYYY Vx.y.html` from this repository and open it in any modern browser. You can use it locally right away.
2. **Connect Google Sheets** (optional, needed for the cloud):
   1. Create a Google Sheet, then open **Extensions → Apps Script**.
   2. Paste the contents of `script.google.com code for mediahub.txt` into `Code.gs`.
   3. Set your password on the `ACCESS_KEY` line, or add an `ACCESS_KEY` entry under *Project Settings → Script Properties*.
   4. **Deploy → New deployment → Web app**: *Execute as: Me*, *Who has access: Anyone*. Copy the web-app URL.
   5. In MEDIA HUB, open **Settings**, paste the URL and your password, then tap the 🔌 button to test the connection.
3. **Add a TMDB key** in Settings to enable auto-fill, sync, Radar and the TMDB repairs in the Clean Report.

> **Updating the backend:** after changing the script, use **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. The URL stays the same.

---

## ⌨️ Keyboard shortcuts

| Keys | Action |
|---|---|
| `/` | Focus the search bar |
| `Shift + A` | Add a new title |
| `Ctrl/Cmd + S` | Save to the cloud |
| `Ctrl/Cmd + Z` | Undo |
| `Esc` | Close a window or clear the search |
| `↑` `↓` `Enter` | Move to the previous or next row while editing |
| `←` `→` | Move to the previous or next cell |
| `Shift + ↑/↓` | Move the current row up or down |

---

## 🧩 Under the hood

- A single HTML file with vanilla JavaScript: no framework and no build step.
- Precompiled Tailwind utilities plus custom CSS, [Font Awesome](https://fontawesome.com/) icons and the [Inter](https://rsms.me/inter/) font, all loaded without blocking the page.
- Modern browser features: native `<dialog>` windows, `Intl.Collator` sorting, `AbortSignal` timeouts, and lazy rendering of large lists.
- Backend: Google Apps Script on your own Google account. Data: your Google Sheet. Metadata: TMDB.

## 🏷️ Versions

Each release is a single file named `MEDIAHUB_DD_MM_YYYY Vx.y.html`, with the release date and a version number that goes up by 0.1 with every update. The newest file in the repository is always the current version.

---

*MEDIA HUB is a personal project and isn't affiliated with TMDB or IMDb. Movie and TV metadata and images are provided by [TMDB](https://www.themoviedb.org/).*
