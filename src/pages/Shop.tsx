import React, {useState, useEffect, useRef, FC} from 'react';
import Card from '../components/Card'

const Shop: FC = () =>{

    const maxRecord = 9;
    const [products, setProducts ] = useState([])

    useEffect(() => {
        fetch("https://api.airtable.com/v0/appqqxet8KqleAIG6/Product?maxRecords=9&sort%5B0%5D%5Bfield%5D=sku", {
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
                            <div className={'row'}>
                                {products.map(product =>
                                    (<Card product={product} />)
                                )}
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