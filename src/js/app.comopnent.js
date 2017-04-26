import template from '../view/app.html';

export default {
    template: template,
    controller: class AppComponent {

        constructor($http, albumService) {
            this.$http = $http;
            this.albumService = albumService;
        }

        $onInit() {
            self = this;
            this.searchValue = '';
            this.showModel = false;
        }

        setLocalData(albums) {
            if (self.albums && self.albums.length) {
                Array.prototype.push.apply(self.albums, albums.items);
            } else {
                self.albums = albums.items;
            }
            self.next = albums.next;
        }

        onSearch() {
            if (!this.searchValue) return;
            self.albums = [];
            self.next = null;
            this.albumService.searchAlbums(this.searchValue).then(self.setLocalData);
        }

        loadMore() {
            this.albumService.loadMore(this.next).then(self.setLocalData);
        }

        loadIconImages(albumType) {
            return albumType === 'album' ? require('../assets/images/album-icon@2x.png') : require('../assets/images/artist-icon@2x.png');
        }

        showDetail(album) {
            this.showModel = true;
            this.selectedItem = album;
        }

        getDetailPosterStyle() {
            return self.selectedItem ? {
                'background-image': 'url(' + self.selectedItem.images[0].url + ')'
            } : {};
        }

    }
}