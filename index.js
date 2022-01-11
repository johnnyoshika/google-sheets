const { google } = require('googleapis');
const dayjs = require('dayjs');

(async () => {
  // https://developers.google.com/sheets/api/guides/authorizing
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  const range = `Sheet1!A$1:B1`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  console.log('response', response.data.values);

  const writeResponse = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [[dayjs().format('YYYY-MM-DD HH:mm:ss'), 'Foo', 'Bar']],
    },
  });
})();
