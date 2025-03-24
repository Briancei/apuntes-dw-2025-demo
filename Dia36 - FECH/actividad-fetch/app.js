
  
   document.addEventListener("DOMContentLoaded", function() {
    const spinner = document.getElementById('spinner');
    const errorDiv = document.getElementById('error');
    const errorText = document.getElementById('errorText');
    const perfiles = document.getElementById('perfiles');
  
    let usersData = []; // Aquí se almacenarán los usuarios obtenidos
  
    // Función para crear una tarjeta de usuario usando clases de Tailwind
    function createUserCard(user) {
      const card = document.createElement('div');
      card.className = "bg-white p-6 rounded-lg shadow-md";
      card.innerHTML = `
        <h2 class="text-xl font-bold text-indigo-700 mb-2">${user.name}</h2>
        <p class="text-gray-700"><strong>Usuario:</strong> ${user.username}</p>
        <p class="text-gray-700"><strong>Email:</strong> ${user.email}</p>
        <p class="text-gray-700"><strong>Teléfono:</strong> ${user.phone}</p>
        <p class="text-gray-700"><strong>Empresa:</strong> ${user.company.name}</p>
        <p class="text-gray-700"><strong>Experiencia:</strong> ${user.experience} años</p>
      `;
      return card;
    }
  
    // Funciones para mostrar y ocultar el spinner y el mensaje de error
    function showSpinner() {
      spinner.classList.remove('hidden');
    }
  
    function hideSpinner() {
      spinner.classList.add('hidden');
    }
  
    function showError(message) {
      errorText.textContent = message;
      errorDiv.classList.remove('hidden');
    }
    
    function hideError() {
      errorDiv.classList.add('hidden');
    }
  
    function clearPerfiles() {
      perfiles.innerHTML = '';
    }
  
    // Función para cargar los usuarios desde la API
    function cargarUsuarios() { 
      hideError();
      clearPerfiles();
      showSpinner();
      fetch("./db/datos.json")
        .then(response => response.json())
        .then(users => {
          // Seleccionamos los primeros 10 usuarios y asignamos una experiencia aleatoria (1 a 10 años)
          usersData = users.slice(0, 10).map(user => {
            user.experience = Math.floor(Math.random() * 10) + 1;
            return user;
          });
          usersData.forEach(user => {
            const card = createUserCard(user);
            perfiles.appendChild(card);
          });
        })
        .catch(error => {
          showError('Ocurrió un error al cargar los datos.');
          console.error('Error al obtener los usuarios:', error);
        })
        .finally(() => {
          hideSpinner();
        });
    }
  
    // Función para filtrar perfiles con más de 3 años de experiencia
    function filtrarUsuarios() {
      if (usersData.length === 0) {
        showError('No hay datos para filtrar. Primero carga los datos.');
        return;
      }
      hideError();
      clearPerfiles();
      const filteredUsers = usersData.filter(user => user.experience > 3);
      if (filteredUsers.length === 0) {
        showError('No se encontraron perfiles con más de 3 años de experiencia.');
      } else {
        filteredUsers.forEach(user => {
          const card = createUserCard(user);
          perfiles.appendChild(card);
        });
      }
    }
  
    // Función para limpiar los perfiles mostrados
    function limpiarUsuarios() {
      clearPerfiles();
    }
  
    // Ejemplo de cómo podrías enlazar estas funciones a botones existentes en tu HTML:
    // Si tienes botones con los IDs "cargarBtn", "filtrarBtn" y "limpiarBtn"
    const cargarBtn = document.getElementById('cargarBtn');
    const filtrarBtn = document.getElementById('filtrarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
  
    if (cargarBtn) {
      cargarBtn.addEventListener('click', cargarUsuarios);
    }
    if (filtrarBtn) {
      filtrarBtn.addEventListener('click', filtrarUsuarios);
    }
    if (limpiarBtn) {
      limpiarBtn.addEventListener('click', limpiarUsuarios);
    }
  });
  