import template from '../view/app.html';


export default {
    bindings: {

    },
    template: template,
    controller: class AppComponent {

        constructor($http, albumService) {
            this.$http = $http;
            this.albumService = albumService;

        }

        $onChanges(changes) {
            console.log("changes....", changes);
        }

        $onInit() {
            self = this;
            this.searchValue = '';
        }

        onSearch() {
            this.albumService.searchAlbums(this.searchValue).then(function(data) {
                self.albums = data.albums.items;
            })
        }
    }
}