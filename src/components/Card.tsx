
import React, { FC } from 'react';
import {Link} from "react-router-dom";

interface Props {
    product: {
        id: string,
        fields: {
            Name: string
            Price: number,
            Attachments: {
                url: string
            }[]
        }
    }
}
const Card:FC<Props> = (props) => {
    const { product } = props
    const { id, fields } = product
    console.log(fields)
    let imageURL = 'https://dummyimage.com/270x360/000/fff'

    if (fields.Attachments ){
        imageURL = fields.Attachments[0].url
    }
    return (
        <>
            <div className="col-lg-4 col-md-6" key={id}>
                <Link to={`/${id}`}>
                <div className="product__item">
                    <div
                        className="product__item__pic set-bg"
                        style={{backgroundImage:`url("${imageURL}")`}}
                    >
                        {/*<div className="label new">New</div>*/}
                        {/*<ul className="product__hover">*/}
                        {/*    <li>*/}
                        {/*        <a href="img/shop/shop-1.jpg" className="image-popup">*/}
                        {/*            <span className="arrow_expand" />*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <a href="#">*/}
                        {/*            <span className="icon_heart_alt" />*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <a href="#">*/}
                        {/*            <span className="icon_bag_alt" />*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">{fields.Name}</a>
                        </h6>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product__price">Rp {fields.Price}</div>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}

export default Card