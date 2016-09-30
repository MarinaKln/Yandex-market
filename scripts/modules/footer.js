var forShops = [{
        name: "Подключение к Маркету"
    },{
        name: "Программа 'Заказ на Маркете'"
    },{
        name: "Помощь для магазинов"
    },{
        name: "Вход в личный кабинет"
    },{
        name: "Яндекс.Доставка"
    },{
        name: "Яндекс.Касса"
    },{
        name: "Яндекс.Телефония"
    }], forUsers1 = [
    {
        name: "Как сделать заказ на Маркете"
    },{
        name: "Возврат и обмен"
    }], forUsers2 = [
    {
        name: "Помощь по сервису"
    },{
        name: "Пользовательское соглашение"
    },{
        name: "Обратная связь"
    }
];

var FooterMenuItem = React.createClass({
    render: function() {
        return (
            <a className = "footer-menu_item" href = "#">{this.props.name}</a>
        )
    }
});

var FooterTop = React.createClass({
    render: function() {
        return (
            <div className = "footer-top">
                <div className = "footer-top-content">
                    <div>Узнавайте о выгодных предложениях и получайте личные рекомендации</div>
                    <form>
                        <input type = "text" placeholder = "Электронная почта"></input>
                        <button>Подписаться</button>
                    </form>
                </div>
            </div>
        )
    }
});

var FooterMain = React.createClass({
    showItem: function(item, index) {
        return (
           <FooterMenuItem
               key = {index}
               name = {item.name}
           />
        )
    },
    render: function() {
        return (
            <div className = "footer-main">
                <div className = "footer-main-content">
                    <div className = "footer-main_for-users">
                        <span>Пользователям</span>
                        <div className = "for-user_list">
                            {forUsers1.map(this.showItem)}
                        </div>
                        <div className = "for-user_list">
                            {forUsers2.map(this.showItem)}
                        </div>

                    </div>
                    <div className = "footer-main_for-shops">
                        <span>Магазинам</span>
                        {forShops.map(this.showItem)}
                    </div>
                    <div className = "footer-main_right">
                        <div className = "footer-main_top">
                            <div className = "">116 693 677 предложений от 19 926 магазинов.</div>
                            <div className = "">Обновлено 26.09.2016 13:10.</div>
                        </div>
                        <div className = "footer-main_bottom">
                            <div className = "">Скачайте приложение Яндекс.Маркет</div>
                            <a className = "google-play_link" href = "#"></a>
                            <a className = "app-store_link" href = "#"></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var FooterBottom = React.createClass({
    render: function() {
        return (
            <div className = "footer-bottom">
                <div className = "footer-bottom-content">
                    <div className = "footer-bottom_left">
                        <a>Мобильная версия</a>
                    </div>
                    <div className = "footer-bottom_middle">
                        <a>Статистика</a>
                        <a>Реклама</a>
                    </div>
                    <div className = "footer-bottom_right">
                        <span>© 2016  ООО «<a href = "#">Яндекс.Маркет</a>»</span>
                    </div>
                </div>
            </div>
        )
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <div className = "footer">
                <FooterTop />
                <FooterMain />
                <FooterBottom />
            </div>
        )
    }
});

export default Footer;
