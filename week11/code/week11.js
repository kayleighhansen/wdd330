import makeRequest from './client/authHelpters.js';

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});