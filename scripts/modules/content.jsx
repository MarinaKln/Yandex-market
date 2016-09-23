import React from 'react';
import products_reccomend from './../data/products_reccomend';
import articles from './../data/articles';
import product_popular from './../data/product_popular';
import product_interesting from './../data/product_interesting';
import product_chosen from './../data/product_chosen';
import showcase from './../data/showcase';

var ProductItem = React.createClass({
    render: function() {
        return (
            <div className = "product-item">
                <div className = "product-pic">
                    <a href = "#">
                        <img src = {this.props.pic} />
                    </a>
                </div>
                <div className = "product-name">
                    <a href = "#">{this.props.name}</a>
                </div>
                <div className = "product-category">
                    <a href = "#">{this.props.category}</a>
                </div>
                <div className = "product-price">от {this.props.price} грн</div>
            </div>
        )
    }
});

var ShowcasePic = React.createClass({
    render: function() {
        var index = this.props.index;
        return (
            <div className = {"showcase-pic".concat(index)}>
                <img src = {this.props.src}/>
            </div>
        )
    }
});

var Article = React.createClass({
    render: function() {
        return (
            <div className = {this.props.type}>
                <div className = "article-name">{this.props.name}</div>
                <div className = "article-image">
                    <img src = {this.props.pic} />
                </div>
            </div>
        )
    }

});

var ShowMoreBtn = React.createClass({
    render: function() {
        return (
            <div className = "show-more-btn">
                <button>Показать еще</button>
            </div>
        )
    }
});

var ProductRow = React.createClass({
    showProduct: function(product, index) {
        return (
            <ProductItem
                key = {index}
                name = {product.name}
                category = {product.category}
                price = {product.price}
                pic = {product.pic}
                />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className = "product-row">
                {data.map(this.showProduct)}
            </div>
        )
    }
});

var ShowcaseTop = React.createClass({
    render: function() {
        return (
           <div className = "showcase-top">
               <div className = "showcase-menu">
                   <div className = "showcase_item">
                       <div>Витрина</div>
                       <span>Новинки, скидки, рекомендации</span>
                   </div>
                   <div className = "catalogue_item">
                       <div>Каталог</div>
                       <span>Более 1500 категорий товаров</span>
                   </div>
               </div>
               <a className = "current-propose" href = "#"></a>
           </div>
        )
    }
});

var Showcase = React.createClass({
    showPicture: function(item, index) {
        return (
            <ShowcasePic
                src = {item.src}
                key = {index}
                index = {index}
                />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className = "showcase">
                <ShowcaseTop />
                <div className = "showcase-content">
                    {data.map(this.showPicture)}
                </div>
            </div>
        )
    }
});

var SingleProductRow = React.createClass({
    render: function () {
        return (
            <div>
                <div className="product-title">
                    <h1>{this.props.rowName}</h1>
                    <div className="product-navigation">
                        <div className="left-arrow"></div>
                        <div className="right-arrow"></div>
                    </div>
                </div>
                <ProductRow
                    data={this.props.data}
                    />
            </div>
        )
    }
});

var DoubleProductRow = React.createClass({
    render: function() {
        return (
            <div>
                <div className = "product-title">
                    <h1>{this.props.rowName}</h1>
                </div>
                <ProductRow
                    data = {this.props.data}
                    />
                <ShowMoreBtn />
            </div>

        )
    }
});

var Articles = React.createClass({
    showArticles: function(article, index) {
        return (
            <Article
                key = {index}
                name = {article.name}
                pic = {article.pic}
                type = {article.type}
                />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div>
                <div className="article-title">
                    <h1>Статьи и подборки</h1>
                </div>
                <div className = "articles-row">
                    {data.map(this.showArticles)}
                </div>
                <ShowMoreBtn />
            </div>
        )
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <div className = "content">
                <Showcase
                    data = {showcase}
                />
                <div className = "products-section">
                    <SingleProductRow
                        rowName = "Рекомендованные вам"
                        data = {products_reccomend}
                     />
                    <DoubleProductRow
                        rowName = "Популярные товары"
                        data = {product_popular}
                    />
                    <SingleProductRow
                        rowName = "Выбирают сегодня"
                        data = {product_chosen}
                     />
                    <SingleProductRow
                        rowName = "Вас также могут заинтересовать"
                        data = {product_interesting}
                     />
                    <Articles
                        data = {articles}
                    />
                </div>
            </div>
        )
    }
});

export default Content;
