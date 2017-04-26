const SPOTIFY_URL = 'https://api.spotify.com/';

export default class AlbumnService {

    constructor($http) {
        this.$http = $http;
    }

    searchAlbums(searchString) {
        return this.$http.get(SPOTIFY_URL + 'v1/search?type=album,artist&q=' + searchString).then(function(response) {
            return response.data.albums;
        });
    }

    loadMore(url) {
        return this.$http.get(url).then(function(response) {
            return response.data.albums;
        });
    }
}