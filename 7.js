const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers() {
  userContainer.innerHTML = '<p>Loading...</p>';

  // Check if offline
  if (!navigator.onLine) {
    userContainer.innerHTML = `<p style="color:red;">You are offline. Please check your internet connection.</p>`;
    return;
  }

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      setTimeout(() => {
        userContainer.innerHTML = '';
        users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.className = 'user-card';
          userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          `;
          userContainer.appendChild(userCard);
        });
      }, 500); // delay in milliseconds
    })
    .catch(error => {
      console.error('Fetch error:', error); // Debug in DevTools Console
      userContainer.innerHTML = `<p style="color:red;">Failed to load users: ${error.message}</p>`;
    });
}

// Initial fetch
fetchUsers();

// Reload on button click
reloadBtn.addEventListener('click', fetchUsers);