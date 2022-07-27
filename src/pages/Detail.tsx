import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Gallery from "../components/Gallery";

const Detail = () => {
    let params = useParams();

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            let url = `https://api.airtable.com/v0/appqqxet8KqleAIG6/Product/${params.id}`;
            fetch(url, {
                headers: {
                    Authorization: "Bearer keyroOSXiqMUUZw0u"
                }
            })
                .then((resp) => resp.json())
                .then(data => {
                    setProduct(data)
                    setLoading(false)
                }).catch(err => {
                // Error :(
            });

        }, 1500)

    },[])

    const currencyFormat = (num:any) => {
        return 'Rp'+ num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    let content = null;

    if (loading) {
        return (
            <div id="preloder">
                <div className="loader" ></div>
            </div>
        )
    }

    if (product){
        const { fields } = product
        const {Name, Price, sku, Notes, NormalPrice, Attachments } = fields
        content = (
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Gallery items={Attachments}/>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{Name} <span>{Notes}</span></h3>

                                <div className="product__details__price">{currencyFormat(Price)} <span>{currencyFormat(NormalPrice)}</span></div>
                                <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia
                                    consequuntur
                                    magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                                <div className="product__details__button">
                                    {/*<div className="quantity">*/}
                                    {/*    <span>Quantity:</span>*/}
                                    {/*    <div className="pro-qty"><span className="dec qtybtn">-</span>*/}
                                    {/*        <input type="text" value="1" />*/}
                                    {/*        <span className="inc qtybtn">+</span></div>*/}
                                    {/*</div>*/}
                                    <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Chat Us</a>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-12">*/}
                        {/*    <div className="product__details__tab">*/}
                        {/*        <ul className="nav nav-tabs" role="tablist">*/}
                        {/*            <li className="nav-item">*/}
                        {/*                <a className="nav-link active" data-toggle="tab" href="#tabs-1"*/}
                        {/*                   role="tab">Description</a>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item">*/}
                        {/*                <a className="nav-link" data-toggle="tab" href="#tabs-2"*/}
                        {/*                   role="tab">Specification</a>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item">*/}
                        {/*                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2*/}
                        {/*                    )</a>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*        <div className="tab-content">*/}
                        {/*            <div className="tab-pane active" id="tabs-1" role="tabpanel">*/}
                        {/*                <h6>Description</h6>*/}
                        {/*                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit,*/}
                        {/*                    sed*/}
                        {/*                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.*/}
                        {/*                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam*/}
                        {/*                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu*/}
                        {/*                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla*/}
                        {/*                    consequat massa quis enim.</p>*/}
                        {/*                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula*/}
                        {/*                    eget*/}
                        {/*                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient*/}
                        {/*                    montes,*/}
                        {/*                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,*/}
                        {/*                    pretium*/}
                        {/*                    quis, sem.</p>*/}
                        {/*            </div>*/}
                        {/*            <div className="tab-pane" id="tabs-2" role="tabpanel">*/}
                        {/*                <h6>Specification</h6>*/}
                        {/*                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit,*/}
                        {/*                    sed*/}
                        {/*                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.*/}
                        {/*                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam*/}
                        {/*                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu*/}
                        {/*                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla*/}
                        {/*                    consequat massa quis enim.</p>*/}
                        {/*                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula*/}
                        {/*                    eget*/}
                        {/*                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient*/}
                        {/*                    montes,*/}
                        {/*                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,*/}
                        {/*                    pretium*/}
                        {/*                    quis, sem.</p>*/}
                        {/*            </div>*/}
                        {/*            <div className="tab-pane" id="tabs-3" role="tabpanel">*/}
                        {/*                <h6>Reviews ( 2 )</h6>*/}
                        {/*                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit,*/}
                        {/*                    sed*/}
                        {/*                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.*/}
                        {/*                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam*/}
                        {/*                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu*/}
                        {/*                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla*/}
                        {/*                    consequat massa quis enim.</p>*/}
                        {/*                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula*/}
                        {/*                    eget*/}
                        {/*                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient*/}
                        {/*                    montes,*/}
                        {/*                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,*/}
                        {/*                    pretium*/}
                        {/*                    quis, sem.</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div style={{marginBottom: 30}}></div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-1.jpg"
                                     style={{backgroundImage: `url("https://technext.github.io/ashion/img/product/related/rp-1.jpg")`}}>
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-1.jpg" className="image-popup"><span
                                            className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Buttons tweed blazer</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-2.jpg"
                                     style={{backgroundImage: `url("https://technext.github.io/ashion/img/product/related/rp-2.jpg")`}}>
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-2.jpg" className="image-popup"><span
                                            className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-3.jpg"
                                     style={{backgroundImage: `url("https://technext.github.io/ashion/img/product/related/rp-3.jpg")`}}>
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-3.jpg" className="image-popup"><span
                                            className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg"
                                     style={{backgroundImage: `url("https://technext.github.io/ashion/img/product/related/rp-4.jpg")`}}>
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-4.jpg" className="image-popup"><span
                                            className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Slim striped pocket shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


    return (
        <>
            {content}
        </>
    );
};

export default Detail;