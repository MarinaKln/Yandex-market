var forShops = [{
        name: "����������� � �������"
    },{
        name: "��������� '����� �� �������'"
    },{
        name: "������ ��� ���������"
    },{
        name: "���� � ������ �������"
    },{
        name: "������.��������"
    },{
        name: "������.�����"
    },{
        name: "������.���������"
    }], forUsers1 = [
    {
        name: "��� ������� ����� �� �������"
    },{
        name: "������� � �����"
    }], forUsers2 = [
    {
        name: "������ �� �������"
    },{
        name: "���������������� ����������"
    },{
        name: "�������� �����"
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
                    <div>��������� � �������� ������������ � ��������� ������ ������������</div>
                    <form>
                        <input type = "text" placeholder = "����������� �����"></input>
                        <button>�����������</button>
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
                        <span>�������������</span>
                        <div className = "for-user_list">
                            {forUsers1.map(this.showItem)}
                        </div>
                        <div className = "for-user_list">
                            {forUsers2.map(this.showItem)}
                        </div>

                    </div>
                    <div className = "footer-main_for-shops">
                        <span>���������</span>
                        {forShops.map(this.showItem)}
                    </div>
                    <div className = "footer-main_right">
                        <div className = "footer-main_top">
                            <div className = "">116 693 677 ����������� �� 19 926 ���������.</div>
                            <div className = "">��������� 26.09.2016 13:10.</div>
                        </div>
                        <div className = "footer-main_bottom">
                            <div className = "">�������� ���������� ������.������</div>
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
                        <a>��������� ������</a>
                    </div>
                    <div className = "footer-bottom_middle">
                        <a>����������</a>
                        <a>�������</a>
                    </div>
                    <div className = "footer-bottom_right">
                        <span>� 2016  ��� �<a href = "#">������.������</a>�</span>
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
