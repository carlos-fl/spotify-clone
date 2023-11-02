const artistDisplay = document.getElementById('artist-display');
const musicDisplay = document.getElementById('music-display');
const userDisplay = document.getElementById('user-display');
const albumDisplay = document.getElementById('album-display');
const artistIcon = document.getElementById('artist-icon');
const musicIcon = document.getElementById('music-icon');
const userIcon = document.getElementById('user-icon');
const songsDisplay = document.getElementById('songs-display');
const modal = document.getElementById('modal');


let userName = 'goku';
let selected;
let userId = 1;
let users = [{
    idUsuario: 1, 
    nombre: 'goku', 
    imagen: '/assets/img/users/goku.jpg'
  }, 
  {
    idUsuario: 2,
    nombre: 'picoro',
    imagen: '/assets/img/users/picoro.jpg'
  }
];
let artist = [
  {
    idUsuario: 1,
    nombre: 'Coldplay',
    imagen: '/assets/img/covers/artist.jpg',
    albumes: [
      {
        nombreAlbum: 'Music of the spheres',
        caratula: '/assets/img/covers/cover1.jpg',
        canciones: [
          {
            nombre: 'Coloratura',
            duracion: '10:00',
          }
        ]
      }
    ]
  },
  {
    idUsuario: 2,
    nombre: 'SIA',
    imagen: '/assets/img/covers/cover8.jpg',
    albumes: [
      {
        nombreAlbum: 'Music of the spheres',
        caratula: '/assets/img/covers/cover5.jpg',
        canciones: [
          {
            nombre: 'Coloratura',
            duracion: '10:00',
          }
        ]
      },
      {
        nombreAlbum: 'Free',
        caratula: '/assets/img/covers/cover8.jpg',
        canciones: [
          {
            nombre: 'Free like a bird',
            duracion: '03:50',
          }
        ]
      }
    ]
  } 
];

let playlist = [
  {
    idUsuario: 1,
    playlists: [
      {
        titulo: 'Canciones favoritas', 
        caratula: 'assets/img/covers/cover10.jpg',
        canciones: [
          {
            nombre: 'Coloratura',
            artista: 'Coldplay',
            album: 'Music of the spheres',
            duracion: '10:00',
          }
        ]
      },
    ] 
  },
  {
    idUsuario: 2,
    playlists: [
      {
        titulo: 'Canciones para estudiar', 
        caratula: 'assets/img/covers/cover4.jpg',
        canciones: [
          {
            nombre: 'Raining',
            artista: 'Lofi',
            album: 'chill bits',
            duracion: '4:00',
          }
        ]
      },
    ] 
  }
];

let userLocalStorage = window.localStorage;
let artistLocalStorage = window.localStorage;
let playlistLocalStorage = window.localStorage;

if(userLocalStorage.getItem('u') == null) {
  userLocalStorage.setItem('u', JSON.stringify(users));
} else {
  users = JSON.parse(userLocalStorage.getItem('u'));
}

if(artistLocalStorage.getItem('art') == null) {
  artistLocalStorage.setItem('art', JSON.stringify(artist));
} else {
  artist = JSON.parse(artistLocalStorage.getItem('art'));
}

if(playlistLocalStorage.getItem('pl') == null) {
  playlistLocalStorage.setItem('pl', JSON.stringify(playlist));
} else {
  playlist = JSON.parse(playlistLocalStorage.getItem('pl'));
}

const displayAlbum = () => {
  const album = artist.find(user => user.idUsuario == userId);
  let albumes = album.albumes;
  albumDisplay.innerHTML = '';
  albumes.forEach((albumUser, index) => {
    albumDisplay.innerHTML += `
    <div class="playlist-display artist off" onclick="displaySongs(${index})">
    <img class="playlist-cover" src="${albumUser.caratula}" alt="${albumUser.nombreAlbum}">
    <div class="playlist-name">
      <h2 class="playlist-title">${albumUser.nombreAlbum}</h4>
      <h4 class="playlist-user">${album.nombre}</h6>
    </div>
    </div>
    `
  })

  musicDisplay.classList.add('off');
  artistDisplay.classList.add('off');
  userDisplay.classList.add('off');
  albumDisplay.classList.remove('off');
  songsDisplay.classList.add('off');
}



const displaySongs = (index) => {
  const userSongs = artist.find(us => us.idUsuario == userId);
  const albums = userSongs.albumes;
  const selectedAlbum = albums[index];
  const songs = selectedAlbum.canciones;
  songsDisplay.innerHTML = '';
  songs.forEach((item) => {
    songsDisplay.innerHTML += `
    <div class="playlist-display-song">
      <div class="playlist-name">
        <div class="content">
          <i class="fa-brands fa-itunes-note music-s"></i>
          <div>
            <h2 class="playlist-title s">${item.nombre}</h2>
            <h4 class="song-s">${userSongs.nombre}</h4>
          </div>
        </div>
     </div>
    <div>
      <h4 class="timing">${item.duracion}</h4>
    </div>
  </div>
    `
  songsDisplay.innerHTML += `
  <div class="play-container">
  <div class="play-container-content">
    <img class="play-container-img" src="${selectedAlbum.caratula}" alt="${selectedAlbum.nombreAlbum }">
    <div class="play-container-info">
      <div class="play-container-names">
        <h6>Canción</h6>
        <h6 style="font-size: 14px;">artista</h6>
      </div>
      <div class="icons-modal">
        <i class="fa-solid fa-square-plus" onclick="addToPlaylist()"></i>
        <i class="fa-solid fa-play"></i>
      </div>
    </div>
  </div>
</div>
  `
  })

  musicDisplay.classList.add('off');
  artistDisplay.classList.add('off');
  userDisplay.classList.add('off');
  albumDisplay.classList.add('off');
  songsDisplay.classList.remove('off');
}

const addToPlaylist = () => {
  modal.classList.remove('off');
}

const saveToPlaylist = () => {
  modal.classList.add('off');
}


const display = (tag) => {
  const artistCont = document.getElementById('artist-container')
  const playlistCont = document.getElementById('playlist-container')
  const userCont = document.getElementById('user-container')

  if(tag == artistIcon) {
    artistDisplay.innerHTML = '';
    artist.forEach(artists => {
      if(artists.idUsuario == userId) {
        artistDisplay.innerHTML += `
        <div class="playlist-display artist off" onclick="displayAlbum()">
        <img class="playlist-cover" src="${artists.imagen}" alt="${artists.nombre}">
        <div class="playlist-name">
          <h2 class="playlist-title">${artists.nombre}</h4>
          <h4 class="playlist-user">artista</h6>
        </div>
      </div>
        `
      }
    })
    // display
    artistDisplay.classList.remove('off');
    artistIcon.classList.add('pressed');
    artistCont.classList.add('pressed');
    // hide playlist
    musicDisplay.classList.add('off');
    musicIcon.classList.remove('pressed');
    playlistCont.classList.remove('pressed');
    // hide user
    userDisplay.classList.add('off');
    userIcon.classList.remove('pressed');
    userCont.classList.remove('pressed');
  } else if(tag == musicIcon) {

    const userPlaylist = playlist.find(user => user.idUsuario == userId);
    const playlists = userPlaylist.playlists; 
    musicDisplay.innerHTML = '';
    playlists.forEach((list) => {
      musicDisplay.innerHTML += `
      <div class="playlist-display music">
        <img class="playlist-cover" src="${list.caratula}">
        <div class="playlist-name">
          <h2 class="playlist-title">${list.titulo}</h4>
          <h4 class="playlist-user">${list.canciones[0].artista}-${userName}</h6>
        </div>
      </div>
      `
    })
    // display
    musicDisplay.classList.remove('off');
    musicIcon.classList.add('pressed');
    playlistCont.classList.add('pressed');
    // hide user
    userDisplay.classList.add('off');
    userIcon.classList.remove('pressed');
    userCont.classList.remove('pressed');
    // hide artists
    artistDisplay.classList.add('off');
    artistIcon.classList.remove('pressed');
    artistCont.classList.remove('pressed');
  } else {
    userDisplay.innerHTML = '';
    users.forEach((user, index) => {
      userDisplay.innerHTML += `
      <div class="playlist-display user" onclick="selectUser(${index})">
      <img class="playlist-cover-user" src="${user.imagen}" alt="${user.nombre}">
      <div class="playlist-name">
        <h2 class="playlist-title">${user.nombre}</h4>
        <hr class="line">
      </div>
    </div> 
      `
    })
    // display
    userDisplay.classList.remove('off');
    userIcon.classList.add('pressed');
    userCont.classList.add('pressed');
    // hide artists
    artistDisplay.classList.add('off');
    artistIcon.classList.remove('pressed');
    artistCont.classList.remove('pressed'); 
    // hide playlist
    musicDisplay.classList.add('off');
    musicIcon.classList.remove('pressed');
    playlistCont.classList.remove('pressed');
  }

}

const selectUser = (id) => {
  userName = users[id].nombre;
  userId = users[id].idUsuario;
  console.log(users[id].nombre);
}