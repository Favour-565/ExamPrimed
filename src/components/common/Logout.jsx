const handleLogout = () => {
    // Perform logout logic here, e.g., clear user data
    localStorage.removeItem('user'); // Example: clear user from local storage
  
    // Redirect to home page
    navigate('/');
  };