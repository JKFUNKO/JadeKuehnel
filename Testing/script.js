async function getProfile(accessToken) {
    let accessToken = localStorage.getItem('BQDq9AN2Rrt6PExDYtamXFvSL7T2OPCnO75ZU_zVyBEVyo7l4-lu0KDRvklQVrpEpN-Dmdh_DdE-rD7D6gM-lF6-vlhLay7esBejQ5lTd0CSOGnovGE
');

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });

    const data = await response.json();
}
