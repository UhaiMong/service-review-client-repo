export const jwtAuthHandle = (user) => {
    const recentUser = {
        email: user.email
    }
    console.log(recentUser);

    // jwt token
    fetch('https://service-review-server-psi.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('review-token', data.token);
        })
}