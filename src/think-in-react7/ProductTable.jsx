// import React from 'react'
// import ProductCategoryRow from './ProductCategoryRow';
// import ProductRow from './ProductRow';

// function ProductTable(props) {
//     const rows=[];
//     let productCategory=[];

//     props.products.forEach((product) => {
//         if(product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1){
//             return;
//         }
//         if(props.inStockOnly && !product.stocked){
//             return;
//         }
//         if(productCategory.includes(product.category) === -1){
//             rows.push(<ProductCategoryRow product={product.category} key={product.category} />);
//         }
//         rows[{product.category}].push(<ProductRow product={product} key={product.name} />);
//         // productCategory = product.category;
//     })
//   return (
//     <>

//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {rows}
//                 {/* {console.log(rows[0].key, rows[1].key)} */}
//             </tbody>
//         </table>
//     </>
//   )
// }

// export default ProductTable

// import React from "react";
// import ProductCategoryRow from "./ProductCategoryRow";
// import ProductRow from "./ProductRow";

// function ProductTable(props) {
//   const categories = props.products.reduce((acc, product) => {
//     const categoryIndex = acc.findIndex(
//       (category) => category.name === product.category
//     );

//     if (categoryIndex === -1) {
//       acc.push({
//         name: product.category,
//         products: [product],
//       });
//     } else {
//       acc[categoryIndex].products.push(product);
//     }
//     console.log(acc);
//     return acc;
//   }, []);
//   console.log(categories);
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {categories.map((category) => (
//           <>
//             <ProductCategoryRow category={category.name} key={category.name} />
//             {category.products.map((product) => (
//               <ProductRow product={product} key={product.name} />
//             ))}
//           </>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default ProductTable;

import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
    const rows=[];
    let lastCategory=null;

    props.products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1){
            return;
        }
        if(props.inStockOnly && !product.stocked){
            return;
        }
        if(product.category !== lastCategory){
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    })
  return (
    <>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
                {/* {console.log(rows[0].key, rows[1].key)} */}
            </tbody>
        </table>
    </>
  )
}

export default ProductTable
