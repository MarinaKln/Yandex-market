var headerMainMenu = [
        {
            name: "����",
            item: "location"
        }, {
            name: "���������",
            item: "compare"
        }, {
            name: "����������",
            item: "chosen"
        }, {
            name: "�������",
            item: "busket"
        }
    ],
    headerMenu = [
        {
            name: "�����������"
        },{
            name: "����������"
        },{
            name: "������� �������"
        },{
            name: "������� ������"
        },{
            name: "���������"
        },{
            name: "���, ����, ������"
        },{
            name: "������ � �����"
        },{
            name: "������� � ��������"
        },{
            name: "����"
        },{
            name: "���"
        }
    ];

var HeaderMainMenuItem = React.createClass({
    render: function() {
        return(
            <div className = "header-main_menu-item">
                <span className = {this.props.item}></span>
                <span>{this.props.name}</span>
            </div>
        )
    }
});

var HeaderMenuItem = React.createClass({
    render: function() {
        return(
            <div className = "header-menu_item">
                {this.props.name}
            </div>
        )
    }
});

var HeaderMain = React.createClass({
    showItem: function(item, index) {
        return (
            <HeaderMainMenuItem
                key = {index}
                name = {item.name}
                item = {item.item}
            />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className = "header-main">
                <div className = "logo"></div>
                <form>
                    <input type = "text" className = "search"></input>
                    <button className = "search-button">Find</button>
                </form>
                <div className = "header-main_menu">
                    {data.map(this.showItem)}
                </div>
                <button className = "login-button">log in</button>
            </div>
        )
    }
});

var HeaderMenu = React.createClass({
    showItem: function(item, index) {
        return (
            <HeaderMenuItem
                key = {index}
                name = {item.name}
            />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className = "header-menu">
                <div className = "header-menu_items">
                    {data.map(this.showItem)}
                </div>
           </div>
        )
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <div className = "header">
                <HeaderMain
                    data = {headerMainMenu} />
                <HeaderMenu
                    data = {headerMenu} />
            </div>
        )
    }
});

export default Header;