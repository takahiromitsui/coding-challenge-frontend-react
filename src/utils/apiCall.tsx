import axios, { AxiosResponse } from 'axios';
import { google } from 'googleapis';

const spreadsheetId = '1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4';

// eslint-disable-next-line
export const tableFetch = async (spreadsheetId: string, sheetId: string) => {
  // eslint-disable-next-line
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${sheetId}`
  const res: AxiosResponse = await axios.get(url);
  return res.data;
};
// eslint-disable-next-line
export const testFetch = async() => {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credential.json',
    scopes: 'https:www.googleapis.com/auth/spreadsheets',
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });
  // GET Meta Data
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  return metaData;
};
