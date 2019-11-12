export const userMutations = {   
    changeUser: (context, user) => {
        context.user = user
    },
    changeUserLoading: (context, loading) => {
        context.userLoading = loading
    } 
}