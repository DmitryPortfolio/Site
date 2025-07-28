
document.addEventListener('DOMContentLoaded', function() {
  
  function getUserInitials() {
  
    const userNickname = localStorage.getItem('loggedInUser');

    if (userNickname) {
      return userNickname.charAt(0).toUpperCase(); 
    } else {
      return '?'; 
    }
  }


  function updateProfileInitials() {
    const initials = getUserInitials(); 
    const profileInitialsElement = document.querySelector('.profile-initials');
    if (profileInitialsElement) {
      profileInitialsElement.textContent = initials; 
    }
  }


  updateProfileInitials();
});
