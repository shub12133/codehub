let url  = '';

if(process.env.NODE_ENV === 'development'){
    url = "http://localhost:3001/api/"
}else if(process.env.NODE_ENV === 'production'){
    url = "https://domain.com/api"
}

export const host = url
export const registerRoute = 'auth/register'
export const loginRoute = 'auth/login'
export const authDashboard = 'auth/dashboard'