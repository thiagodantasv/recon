import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Paper, Breadcrumbs } from '@material-ui/core';

function CreateProduct() {
    return(
        <div style = {{ display:'flex', justifyContent: 'center' }}>
            <div>
                
            </div>
            <header style = {{ width:'100%'  }}>
                <div className = 'breadcrumb'>
                    <Breadcrumbs>
                        <a href="/"><span>Home</span></a>
                        <span>Create a Product</span>
                    </Breadcrumbs>
                </div>
            </header>
            <Paper
                elevation = {10}
                style = {{ height:'100%' ,width: '85%', margin:10 }}
            >
                dark necessities
            </Paper>
        </div>
        
        
    )
}

export default CreateProduct;