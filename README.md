An example script to read and write from Google Sheets.

# Setup

- Enable `Google Sheets API` in Google Cloud
- Go to `Credentials` in the left menu of `Google Sheets API`
- Download key for `App Engine Default Service Account` and save it as `service-account.json` in root of this project
- Give `Editor` access to service account user, `examind-sandbox@appspot.gserviceaccount.com`. Share a link so `Restricted: Only people added can open with link` can access the sheet with a link.
- Set env variables:
  - export GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
  - export SHEET_ID={SHEET_ID}

# Run

```
npm ci
node index.js
```
