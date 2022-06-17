const FinanceiroController = {
    index: (req, res, next) => {
        // res.render('novoFechamento', { title: 'IPCN || Financeiro' });
    },
    novoFechamento: (req, res, next) => {
        res.render('novoFechamento', { title: 'IPCN || Financeiro' });
    },
    read: (req, res, next) => {
        res.render('fechamentos', { title: 'IPCN || Fechamentos' });
    },
    
}

module.exports = FinanceiroController;