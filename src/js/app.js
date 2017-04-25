import angular from 'angular';
import AppComponent from './app.comopnent';
import AlbumnService from './album.service';

import '../css/app.scss';


angular.module('ccmusic', [])
    .component('appComponent', AppComponent)
    .service('albumService', AlbumnService);

angular.element(document)
    .ready(() => {
        angular.bootstrap(document, ['ccmusic'], {

        });
    });