// Viết theo function component
// function ProductList(props){
//     return(
//         <div>
//             <h1>Danh sách sản phẩm</h1>
//             <ul>
//                 {
//                     props.list.map((el)=>{
//                         return(
//                             <li>{el}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }
// export default ProductList;

// Viết theo class component
import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Danh sách sản phẩm</h1>
                <ul>
                    {
                        this.props.list.map((el) => {
                            return (
                                <li>{el}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;