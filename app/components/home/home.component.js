
const alertStatus = $('#alertStatus');
const alarmButton = $('#activateAlarm');
const alarmAmbulance = $('#alarmAmbulance');
const alarmSoundPeru = $('#alarmSoundPeru');
const ambulanceSoundPeru = $('#ambulanceSoundPeru');
const locationOutput = $('#locationOutput');
const locationButton = $('#shareLocation');
const callButton = $('#callPolice');
const callSerenazgo = $('#callSerenazgo');
const callSamu = $('#callSamu');
const callCem = $('#callCem');

let isAlarmPlaying = false;
let locationConfig = "peru";
let policeNumber = '105';
let isAmbulanceAlarmPlaying = false;
let loggedUser = {};

function error() {
  alert("No se pudo obtener tu ubicación. Asegúrate de tener el GPS activado.");
}

function logout() {
  localStorage.clear();
  window.location.href = "../../../index.html";
}

function getLoggedUser() {
  loggedUser = JSON.parse(localStorage.getItem('usuarioActivo'));
  console.log(loggedUser)
}

function setNickname(nickname) {
  $("#nickname").innerText = nickname;
  console.log(nickname)
}

getLoggedUser();
setNickname(loggedUser.nickname);

on('#activateAlarm', 'click', () => {
  if (!isAlarmPlaying) {

    if (locationConfig === "peru") {
      alarmSoundPeru.volume = 1.0;
      alarmSoundPeru.play().catch(err => {
        alert("El navegador impidió reproducir el sonido automáticamente. Haz clic para permitirlo.");
        console.error(err);
      });
    }

    isAlarmPlaying = true;
    alarmButton.classList.add('active-button');
    alertStatus.classList.add('active');
  } else {

    if (locationConfig === "peru") {
      alarmSoundPeru.pause();
      alarmSoundPeru.currentTime = 0;
    }
    isAlarmPlaying = false;
    alarmButton.classList.remove('active-button');
    alertStatus.classList.remove('active');
  }
});

//sonido ambulancia +----+

on('#alarmAmbulance', 'click', function () {
  // Cambios visuales
  $('.text-help-support').classList.toggle('active');
  this.classList.toggle('active');

  // Lógica de sonido
  if (!isAmbulanceAlarmPlaying) {
    if (locationConfig === "peru") {
      ambulanceSoundPeru.volume = 1.0;
      ambulanceSoundPeru.play().catch(err => {
        alert("El navegador impidió reproducir el sonido automáticamente. Haz clic para permitirlo.");
        console.error(err);
      });
    }
    isAmbulanceAlarmPlaying = true;
  } else {
    if (locationConfig === "peru") {
      ambulanceSoundPeru.pause();
      ambulanceSoundPeru.currentTime = 0;
    }
    isAmbulanceAlarmPlaying = false;
  }
});

// Llamar al 105
on('#callPolice', 'click', () => {
  window.location.href = `tel:${policeNumber}`;
});

let watchId = null;
// Compartir ubicación en tiempo real
on('#shareLocation', 'click', () => {
  if (!navigator.geolocation) {
    alert("Tu navegador no soporta geolocalización.");
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
    let numero = "51929370034"; // Valor por defecto, por si algo falla

    if (usuarioActivo && usuarioActivo.celular) {
      numero = usuarioActivo.celular;
    }
    const mensaje = `🚨 ¡Emergencia! Necesito ayuda. Mi ubicación es: ${mapsLink}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
});

// Llamar al Serenazgo
on('#callSerenazgo', 'click', () => {
  window.location.href = `tel:921694173`;
});

// Llamar al SAMU
on('#callSamu', 'click', () => {
  window.location.href = `tel:903068245`;
});

// Llamar al CEM
on('#callCem', 'click', () => {
  window.location.href = `tel:989366194`;
});



/*
// UBICACION SERENAZGO
ubicasereno.addEventListener('click', () => {
  if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

      const numero = "51921694173"; // SERENAZGO
      const mensaje = `🚨 ¡Emergencia! Necesito ayuda. Mi ubicación es: ${mapsLink}`;

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    }

    function error() {
      alert("No se pudo obtener tu ubicación. Asegúrate de tener el GPS activado.");
    }
})
*/



function setPoliceNumber() {
  if (locationConfig === "peru") {
    policeNumber = '105';
  }
  $('#policeNumber').textContent = `Llamar a Policía`;
}

setPoliceNumber();

function stopAllSounds() {
  // Sirenas
  alarmSoundPeru.pause();
  alarmSoundPeru.currentTime = 0;

  // Ambulancias
  ambulanceSoundPeru.pause();
  ambulanceSoundPeru.currentTime = 0;

  // Estados
  isAlarmPlaying = false;
  isAmbulanceAlarmPlaying = false;
  // Quitar clases activas si es necesario
  alarmButton.classList.remove('active-button');
  alertStatus.classList.remove('active');
}

function toggleOverlay() {
  // $('.overlay-menu').classList.toggle('active-layout');
  $('.wrapper-menu').classList.toggle('active-menu');
  $('.content-menu').classList.toggle('active-content');
}

document.querySelectorAll('.button-menu').forEach(btn => {
  btn.addEventListener('click', toggleOverlay);
})

// document.querySelector('.overlay-menu').addEventListener('click', toggleOverlay);

document.querySelectorAll('.menu-option').forEach(option => {
  option.addEventListener('click', function () {
    const selectedLocation = this.getAttribute('data-location');
    stopAllSounds();
    if (selectedLocation) {
      locationConfig = selectedLocation;
      document.querySelectorAll('.menu-option').forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
    }
    setPoliceNumber();
  });
});

function toggleNotification() {
  $('.button-notification').classList.remove('active');
  $('.wrapper-notification').classList.toggle('active');
  $('.overlay-notification').classList.toggle('active');
  $('.badge-alert').classList.remove('active');
}

$('.button-notification').addEventListener('click', toggleNotification);
$('.overlay-notification').addEventListener('click', toggleNotification);

function executeAlarm() {
  if (!isAlarmPlaying) {
    if (locationConfig === "peru") {
      alarmSoundPeru.volume = 1.0;
      alarmSoundPeru.play().catch(err => {
        alert("El navegador impidió reproducir el sonido automáticamente. Haz clic para permitirlo.");
        console.error(err);
      });
    }


    isAlarmPlaying = true;
  } else {

    if (locationConfig === "peru") {
      alarmSoundPeru.pause();
      alarmSoundPeru.currentTime = 0;
    }

    isAlarmPlaying = false;
  }

}

function simulateAlert() {
  setTimeout(() => {
    $('.badge-alert').classList.add('active');
    $('.button-notification').classList.add('active');

    executeAlarm();
  }, 2000);
}

on('#simulateAlert', 'click', simulateAlert);
on('.dialog-action', 'click', () => {
  toggleNotification();
  executeAlarm();
});
on('#logoutBtn', 'click', logout);


function hiddenWelcome() {
  const time = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  setTimeout(() => {
    $('.welcome').classList.add('hidden');
  }, time)
}

hiddenWelcome();

$('.welcome').addEventListener('transitionend', function () {
  this.remove();
});
