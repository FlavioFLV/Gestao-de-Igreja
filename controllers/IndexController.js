const IndexController = {
    index: (req, res, next) => {
        res.render('index', { title: 'IPCN || Home' });
    }
}

module.exports = IndexController;