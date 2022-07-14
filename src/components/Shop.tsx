import React, {useState, useEffect, useRef, FC} from 'react';


const Shop: FC = () =>{

    const [products, setProducts ] = useState([])

    useEffect(() => {
        fetch("https://api.airtable.com/v0/appqqxet8KqleAIG6/Product", {
            headers: {
                Authorization: "Bearer keyroOSXiqMUUZw0u"
            }
        })
            .then((resp) => resp.json())
            .then(data => {
                setProducts(data.records)
            }).catch(err => {
            // Error :(
        });
    },[])
    return (
        <>
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <a data-toggle="collapse" data-target="#collapseOne">
                                                    Women
                                                </a>
                                            </div>
                                            <div className="card">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">
                                                        Men
                                                    </a>

                                            </div>
                                            <div className="card">
                                                <a data-toggle="collapse" data-target="#collapseThree">
                                                    Kids
                                                </a>
                                            </div>
                                            <div className="card">
                                                    <a data-toggle="collapse" data-target="#collapseFour">
                                                        Accessories
                                                    </a>

                                            </div>
                                            <div className="card">
                                                    <a data-toggle="collapse" data-target="#collapseFive">
                                                        Cosmetic
                                                    </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar__color">
                                    <div className="section-title">
                                        <h4>Color</h4>
                                    </div>
                                    <div className="size__list color__list">
                                        <label htmlFor="black">
                                            Blacks
                                            <input type="checkbox" id="black" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="whites">
                                            Whites
                                            <input type="checkbox" id="whites" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="reds">
                                            Reds
                                            <input type="checkbox" id="reds" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greys">
                                            Greys
                                            <input type="checkbox" id="greys" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="blues">
                                            Blues
                                            <input type="checkbox" id="blues" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="beige">
                                            Beige Tones
                                            <input type="checkbox" id="beige" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greens">
                                            Greens
                                            <input type="checkbox" id="greens" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="yellows">
                                            Yellows
                                            <input type="checkbox" id="yellows" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{backgroundImage:`url("img/shop/shop-1.jpg")`}}
                                        >
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-1.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Furry hooded parka</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{backgroundImage:`url("img/shop/shop-2.jpg")`}}

                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-2.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Flowy striped skirt</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 49.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{backgroundImage:`url("img/shop/shop-3.jpg")`}}

                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-3.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Croc-effect bag</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{backgroundImage:`url("img/shop/shop-4.jpg")`}}
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-4.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Dark wash Xavi jeans</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{backgroundImage:`url("img/shop/shop-5.jpg")`}}
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-5.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Ankle-cuff sandals</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{backgroundImage:`url("img/shop/shop-6.jpg")`}}

                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-6.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Contrasting sunglasses</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
        </>

    );
}

export default Shop;