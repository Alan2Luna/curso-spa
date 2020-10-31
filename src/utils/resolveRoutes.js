const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let valiedRoute = route === '/' ? route : '/:id';
        return valiedRoute;
    }
    return `${route}`;
}

export default resolveRoutes;