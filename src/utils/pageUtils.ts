export const setCurrentPage = (page: string) => {
    window.history.pushState({}, '', `#${page}`);
};

export const getCurrentPage = (): string => {
    const hash = window.location.hash;
    return hash ? hash.substring(1) : 'home';
}
