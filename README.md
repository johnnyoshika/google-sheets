An example script to read and write from Google Sheets.

# Setup

- Enable `Google Sheets API` in Google Cloud
- Create a new `Service Account` but don't add any permissions (they're not necessary)
- Download key for the new `Service Account` and save it as `service-account.json` in root of this project
- Give `Editor` access to Google Sheet using the email address of the service account (e.g ` service-account-name@project-id.iam.gserviceaccount.com`). Share the Google Sheet so `Restricted: Only people added can open with link` can access the sheet with a link.
- Set env variables:
  - export GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
  - export SHEET_ID={SHEET_ID}

# Run

```
npm ci
node index.js
```
