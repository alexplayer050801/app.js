const loadUsersButton = document.querySelector('#loadUsers');
const userListDiv = document.querySelector('#userList');

loadUsersButton.addEventListener('click', () => {
  fetch('https://alexplayer050801.github.io/test5-apiv2/api.js')
    .then(response => response.json())
    .then(users => {
      const userListHtml = `
        <ul>
          ${users.map(user => `<li>${user.username}</li>`).join('')}
        </ul>
      `;
      userListDiv.innerHTML = userListHtml;
    })
    .catch(error => {
      console.error('Error retrieving users:', error);
      userListDiv.innerHTML = 'Error retrieving users';
    });
});
