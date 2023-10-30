const artistDisplay = document.getElementById('artist-display');
const musicDisplay = document.getElementById('music-display');
const userDisplay = document.getElementById('user-display');
const albumDisplay = document.getElementById('album-display');
const artistIcon = document.getElementById('artist-icon');
const musicIcon = document.getElementById('music-icon');
const userIcon = document.getElementById('user-icon');
const songsDisplay = document.getElementById('songs-display');
const modal = document.getElementById('modal');
let users = [{idUsuario: 1, nombre: 'goku', imagen: '/assets/img/users/goku.jpg'}];
let artist = [
  {
    idArtista: 1,
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
  }
];

let playlist = [{
  idUsuario: 1,
  playlists: [
    {
      titulo: 'Canciones favoritas', 
      caratula: 'imagen.jpg',
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
}];

const displayPlaylist = () => {
  musicDisplay.innerHTML = '';
  playlist.forEach(list => {
    musicDisplay.innerHTML += `
    <div class="playlist-display music">
      <div class="playlist-cover"></div>
      <div class="playlist-name">
        <h2 class="playlist-title">${list.playlists[0].titulo}</h4>
        <h4 class="playlist-user">${list.playlists[0].canciones[0].artista}-${users[0].nombre}</h6>
      </div>
    </div>
    `
  })


  musicDisplay.classList.remove('off');
  musicIcon.classList.add('pressed');
  document.getElementById('playlist-container').classList.add('pressed');
  document.getElementById('artist-container').classList.remove('pressed');
  document.getElementById('user-container').classList.remove('pressed');
  artistDisplay.classList.add('off');
  artistIcon.classList.remove('pressed');
  userIcon.classList.remove('pressed');
  userDisplay.classList.add('off');
  albumDisplay.classList.add('off');
  songsDisplay.classList.add('off');
}

const displayArtist = () => {
  artistDisplay.innerHTML = '';
  artist.forEach(artists => {
    artistDisplay.innerHTML += `
    <div class="playlist-display artist off" onclick="displayAlbum()">
    <img class="playlist-cover" src="${artists.imagen}" alt="${artists.nombre}">
    <div class="playlist-name">
      <h2 class="playlist-title">${artists.nombre}</h4>
      <h4 class="playlist-user">artista</h6>
    </div>
  </div>
    `
  })

  musicDisplay.classList.add('off');
  musicIcon.classList.remove('pressed');
  document.getElementById('playlist-container').classList.remove('pressed');
  document.getElementById('user-container').classList.remove('pressed');
  artistDisplay.classList.remove('off');
  artistIcon.classList.add('pressed');
  document.getElementById('artist-container').classList.add('pressed');
  userIcon.classList.remove('pressed');
  userDisplay.classList.add('off');
  albumDisplay.classList.add('off');
  songsDisplay.classList.add('off');
}

const displayUser = () => {
  userDisplay.innerHTML = '';
  users.forEach(user => {
    userDisplay.innerHTML += `
    <div class="playlist-display user">
    <img class="playlist-cover-user" src="${user.imagen}" alt="${user.nombre}">
    <div class="playlist-name">
      <h2 class="playlist-title">${user.nombre}</h4>
      <hr class="line">
    </div>
  </div> 
    `
  })

    musicDisplay.classList.add('off');
    musicIcon.classList.remove('pressed');
    artistDisplay.classList.add('off');
    artistIcon.classList.remove('pressed');
    userIcon.classList.add('pressed');
    document.getElementById('user-container').classList.add('pressed');
    userDisplay.classList.remove('off');
    albumDisplay.classList.add('off');
    songsDisplay.classList.add('off');
    document.getElementById('playlist-container').classList.remove('pressed');
    document.getElementById('artist-container').classList.remove('pressed');
    document.getElementById('user-container').classList.add('pressed');
}

const displayAlbum = () => {
  albumDisplay.innerHTML = '';
  artist.forEach(album => {
    albumDisplay.innerHTML += `
    <div class="playlist-display artist off" onclick="displaySongs()">
    <img class="playlist-cover" src="${album.albumes[0].caratula}" alt="${album.albumes[0].nombreAlbum}">
    <div class="playlist-name">
      <h2 class="playlist-title">${album.albumes[0].nombreAlbum}</h4>
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



const displaySongs = () => {
  songsDisplay.innerHTML = '';
  artist.forEach(item => {
    songsDisplay.innerHTML += `
    <div class="playlist-display-song">
      <div class="playlist-name">
        <div class="content">
          <i class="fa-brands fa-itunes-note music-s"></i>
          <div>
            <h2 class="playlist-title s">${item.albumes[0].canciones[0].nombre}</h2>
            <h4 class="song-s">${item.nombre}</h4>
          </div>
        </div>
     </div>
    <div>
      <h4 class="timing">${item.albumes[0].canciones[0].duracion}</h4>
    </div>
  </div>
    `
  
  songsDisplay.innerHTML += `
  <div class="play-container">
  <div class="play-container-content">
    <img class="play-container-img" src="${item.albumes[0].caratula}" alt="${item.albumes[0].nombreAlbum}">
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
