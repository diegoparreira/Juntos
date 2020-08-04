const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://juntos-api.herokuapp.com';

export default URL;
