export const environment = {
  production: true
};

export let APIURL = '';
​
switch (window.location.hostname) {
    case 'https://travall-client.herokuapp.com/':
        APIURL = 'https://travall-server.herokuapp.com'
        break;
    default:
        APIURL = 'http://localhost:4200';
}
