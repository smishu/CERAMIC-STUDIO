
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const AddToCard = () => {

    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const init = 0;

    const [quantity, setQuantity] = useState(false)



    useEffect(() => {
        fetch(`http://localhost:5000/product?id=${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const updateQuan = (add, deleted) => {


        fetch(`http://localhost:5000/add-product/${productId}?add=${add}&deleted=${deleted}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {

                    return
                }
                setQuantity(!quantity)
            })


    }

    const addQuantity = (event) => {
        event.preventDefault();
        const addValue = event.target.quan.value
        if (addValue) {
            console.log(addValue)
            updateQuan(addValue, init)

        } else {

        }
        event.target.reset()
    }


    const deleteQuantity = () => {
        updateQuan(init, 1)

    }




    return (
        <div>
            <div>
                <form onSubmit={addQuantity} >
                    <input type="text" name='quan' />
                    <br />
                    <button className='btn btn-info mb-2' type="submit">Add Quantity</button>
                    <p className='btn btn-info' onClick={deleteQuantity} >Delivery</p>
                </form>
            </div>

            <div>
                <div className='d-flex pt-5'> <div><img src={product.img} alt="" /></div>
                    <div>
                        <h3>Price:{product.price}</h3>
                        <h3>Price:{product.quantity}</h3>
                        <p>{product.description}</p>

                    </div>
                </div>
                <div>
                    <button className='btn btn-info'>Products</button>

                </div>
            </div>


        </div>
    );
};

export default AddToCard;