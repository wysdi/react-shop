import React, {useState, useEffect, useRef, FC} from 'react';
import Card from '../components/Card'
import InfiniteScroll  from 'react-infinite-scroller'

const Shop: FC = () =>{

    const maxRecord = 6;
    const [products, setProducts ] = useState([])
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [offset, setOffset] = useState(null)

    const loadProducts = (page: number) => {
        setTimeout(() => {
            let url = `https://api.airtable.com/v0/appqqxet8KqleAIG6/Product?pageSize=${maxRecord}&sort[0][field]=sku`;
            if(page!=null && page > 1) {
                url =`https://api.airtable.com/v0/appqqxet8KqleAIG6/Product?pageSize=${maxRecord}&sort[0][field]=sku&offset=${offset}`;
            }
            console.log(url)
            fetch(url, {
                headers: {
                    Authorization: "Bearer keyroOSXiqMUUZw0u"
                }
            })
                .then((resp) => resp.json())
                .then(data => {
                    const newList = products.concat(data.records)
                    setProducts(newList)
                    setOffset(data.offset)
                    if(!data.offset) {
                        setHasMoreItems(false);
                    } else {
                        setHasMoreItems(true);
                    }
                }).catch(err => {
                // Error :(
            });

        }, 1500)

    }

    return (
        <>
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">

                                <InfiniteScroll
                                    threshold={0}
                                    pageStart={0}
                                    loadMore={loadProducts}
                                    hasMore={hasMoreItems}
                                    loader={<div className="text-center">loading data ...</div>}>
                                    <div className={'row'}>
                                    {products.map((product, i) =>
                                        (<Card product={product}/>)
                                    )}
                                    </div>
                                </InfiniteScroll>
                                {hasMoreItems ? "" : <div className="text-center">no data anymore ...</div> }
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
        </>

    );
}

export default Shop;