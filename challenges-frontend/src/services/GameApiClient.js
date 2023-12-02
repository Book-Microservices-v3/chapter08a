class GameApiClient {
    static SERVER_URL = 'https://cautious-system-p7j5qp97vcrg6v-8000.app.github.dev';
    static GET_LEADERBOARD = '/leaders';

    static leaderBoard(): Promise<Response> {
        return fetch(GameApiClient.SERVER_URL +
            GameApiClient.GET_LEADERBOARD);
    }

}

export default GameApiClient;