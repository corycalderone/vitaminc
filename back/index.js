var express = require('express');
var app = express();
var config = require('./config.json')
var cors = require('cors');
app.use(express.static('public'));
app.use(cors());

var SpotifyWebApi = require('spotify-web-api-node');
let playlists = [];
let masterPlaylist;

var spotifyApi = new SpotifyWebApi({
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
});

spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    }, function(err) {
        console.log('Shit: ', err.message);
    });

app.get('/playlists', function(req, res) {
    addPlaylistsToList()
        .then(function(data) {
            res.json(data);
        }, function(err) {
            console.log(err);
        });
});

app.get('/playlist', function(req, res) {
    spotifyApi.getPlaylist(req.query.id)
        .then(function(data) {
            res.json(data);
        }, function(err) {
            console.log(err);
        });
});

app.get('/track', function(req, res) {
    // todo!
});

async function addPlaylistsToList(offset = 0) { //default parameter value to 0
    var limit = 50;
    var data = await spotifyApi.getUserPlaylists(config.USER, { limit: limit, offset: offset });
    playlists.push(data.body.items.filter((playlist) => playlist.name.includes('Vitamin C')));
    if (data.body.items.length == limit) {
        return await addPlaylistsToList(offset + limit);
    } else {
        let merged = [].concat.apply([], playlists);
        playlists = merged;
        return merged;
    }
}

async function buildDataModel() {
    spotifyApi.getPlaylist(config.MASTER)
        .then((data) => masterPlaylist = data);
}


var port = 5000;
app.listen(port);
console.log(`listening on ${port}`);