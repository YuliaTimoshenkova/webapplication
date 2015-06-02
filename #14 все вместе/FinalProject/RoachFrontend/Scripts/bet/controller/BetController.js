Ext.define('bet.controller.BetController', {
    extend: 'Ext.app.Controller',
    stores: [
        'Stats@bet.store'
    ],

    models: [
        'UserStat@bet.model'
    ],

    views: [
        'List@bet.view.stats'
    ],

    init: function () {
        console.log('init');
        this.control({
            'button#btnRefresh': {
                click: this.refreshStats
            }
        });
    },
    init: function () {
        console.log('init');
        this.control({
            'button#btnPrint': {
                click: this.Print,
            }
        });
    },

    refreshStats: function () {
        var me = this;
        me.getStore("Stats@bet.store").reload();
    },
    Print: function () {
        var myPanel = Ext.ComponentQuery.query('allstats');
        var item = myPanel[0].getSelection()[0];
        var userName = item.data.user;
        var userMoney = item.data.money;

        Ext.Ajax.request({
            url: '/Home/About',
            method: 'POST',
            params: {
                data: Ext.encode({
                    user: userName,
                    money: userMoney
                })
            },
            success: function (response) {

                window.open('/Home/About');
                // process server response here
            }
        });
    }

});