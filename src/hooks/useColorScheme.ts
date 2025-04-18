// || window.matchMedia("(prefers-color-scheme: dark)").matches;

const useColorScheme = () => {
    const theme = localStorage.getItem("theme") === "dark";

    return {
        theme
    };
};

export default useColorScheme;
