import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Card, CardContent, Paper, Typography } from '@material-ui/core';

function Products() {
  const [products, setProducts] = useState<any[]>([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/getProducts').then((response) => {
      setProducts(response.data.data.productsList);
    });  
  }, []);
  
  const productCard = (name: string, price: string, availability: number) => {
    return(
      <div style={{padding:5, width:"30%"}}>
        <Card>
          <CardContent>
            <Typography component='h5' align='center' gutterBottom={true}>
              {name}
            </Typography>
            <Typography component='h5' align='center' gutterBottom={true}>
              {price}
            </Typography>
            <Typography component='h5' align='center' gutterBottom={true}>
              {availability}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="App">
      <Paper elevation={3}>
        <header className="App-header">
          <Typography component='h1' variant='h3'>
            Products List
          </Typography>
        </header>
        <div style = {{display:'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly', width: "100%"}}>
          {
            products.map((product) => {
              let name = product.name ? product.name : "-";
              let price = product.price ? product.price : "-";
              let availability = product.availability ? product.availability : 0;
              return (
                productCard(name,price,availability)
              );
            })
          }
        </div>
      </Paper>
    </div>
  );
}

export default Products;
