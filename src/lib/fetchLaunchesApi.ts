const apiEntry = 'https://launchlibrary.net/1.4/launch';
const numberOfLuanches = '120';

export default class FetchLaunchesApi {
  static apiEntry = apiEntry;
  static numberOfLuanches = numberOfLuanches;

  static async fetchLaunches(): Promise<Record<string, unknown>> {
    const url = `${apiEntry}/${numberOfLuanches}`;
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return json.launches;
      });
  }
}