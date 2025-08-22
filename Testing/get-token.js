const fetch = require('node-fetch');

async function getRefreshToken() {
    const clientID = 'db0cb9da44b447d9944b29a01288a981';
    const clientSecret = 'd61811de86694a23a4c84f19b15fa4cd';
    const code = 'AQDKkj84OlKNpqSrJOBqqCPJ3pQUFM2aCWhfonpRSEdTTH_D9RLGlvTTqbyLUhLKRX3fNFgQoEavT_3JzCLPFwUYJdg9_AifHK7y324dq4SMTCODle2oPojTPWutATNGELLWVH6HPyAh2Oqo9SvwoFfWOh7C-7UZSI3RCGkRBjm4fM9svjw7DpJg0uruVy5n5-qlGTPrjq2cPOaQLEob7VqEjnvkCC43HjztVSkPIsXzENQygLu-k3tL';

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'https://localhost:3000/callback'
            })
        });

        const data = await response.json();
        console.log('Your refresh token is:', data.refresh_token);
    } catch (error) {
        console.error('Error:', error);
    }
}

getRefreshToken();