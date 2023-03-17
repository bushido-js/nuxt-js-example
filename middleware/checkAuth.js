export default function ({ store, redirect }) {
    // const auth = store.state.auth.isAuthenticated
    const auth = store.getters['auth/isAuthenticated']
    if (!auth) {
        redirect('/')
    }
}