var userService = function () {

    function getUser() {
        return this.user;
    }

    function setUser(user) {
        this.user = user;
    }

    return {
        getUser : getUser,
        setUser : setUser
    }
};

module.exports = userService;
