import { Grid, Input } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavScrollExample from './Navbar';
// import { Button } from 'bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mov = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/app/')
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
    <>
    <NavScrollExample/><br /><br />
    
   
    <Form className="d-flex" >
  <Form.Control style={{ border: '1px solid #6F4FF2' }}
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <Button variant="outline-success" style={{ marginLeft: '8px' }}>Search</Button>
</Form>


  
 





        <Grid container spacing={3} sx={{ padding: 1 }}>
            {product.map((row) => (
                <Grid item xs={12} sm={6} md={4} key={row.pdtName}>
                    <div className="NftCard" style={{ width: 282, height: 433, position: 'relative' }}>
                        <div style={{ 
                            width: 282, height: 433, position: 'absolute', background: 'white', borderRadius: 18 
                        }} />
                        <div style={{ 
                            width: 242, height: 40, position: 'absolute', left: 20, top: 372, background: '#6F4FF2', borderRadius: 9 
                        }}>
                            <div style={{ 
                                textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', paddingTop: 10 
                            }}>
                                BUY
                            </div>
                        </div>
                        <div style={{ 
                            width: 242, height: 19, position: 'absolute', left: 20, top: 323, display: 'flex', justifyContent: 'space-between', color: '#6C7AA0' 
                        }}>
                            <div style={{ fontSize: 16, fontFamily: 'Poppins', fontWeight: '400' }}>FEATURES:</div>
                            <div style={{ fontSize: 16, fontFamily: 'Poppins', fontWeight: '400' }}>{row.pdtFeature}</div>
                        </div>
                        <div style={{ 
                            width: 242, position: 'absolute', left: 20, top: 277 
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400' }}>
                                <div style={{ color: 'black' }}>PRICE:</div>
                                <div style={{ color: '#6F4FF2' }}>{row.pdtPrice}</div>
                            </div>
                            <div  style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400' }}>
                            <div style={{ color: 'black' }}>LOCATION:</div>
                            <div style={{ color: '#6F4FF2' }}>{row.pdtLocation}</div>
                            </div>
                        </div>
                        <div style={{ 
                            width: 115, height: 20, position: 'absolute', left: 22, top: 237, color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600' 
                        }}>
                             {row.pdtName}
                        </div>
                        <img 
                            src={row.pdtImage} 
                            alt={row.pdtName} 
                            style={{ width: 243, height: 187, position: 'absolute', left: 19, top: 20, borderRadius: 19 }} 
                        />
                    </div>
                </Grid>
            ))}
        </Grid></>
    );
};

export default Mov;
