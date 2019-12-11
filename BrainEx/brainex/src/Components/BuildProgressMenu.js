import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from "../brain.png";


const buildProgressMenu = () => (
        <Container className="container" style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>

            <div style={{backgroundColor: '#3C99DC', width: '100%', height: '17%', position: 'absolute', left:'0.01%', top:'0%'}}>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">BrainEx</h1>
                <h3 className="App-Version">Version 1.0.0</h3>
                <h4 className="options" style={{position:'absolute', top:'39%', left:'41%'}}>Finished Preprocessing!</h4>
            </div>

            <h5 align="left" style={{position:'absolute', top:'25%', left:'20%'}}>Preprocessing stage is complete!</h5>
            <h5 align="left" style={{position:'absolute', top:'33%', left:'20%'}}>Sequences Processed: N/A </h5>

            <div className="btnContainer btn-group" role="group" style={{position:'absolute', top:'50%', left:'20%'}}>
                <Link to="/">
                    <Button type="button" className="btn btn-secondary" style={{borderColor: 'black', backgroundColor:'#0F5298'}}>Restart with another Dataset</Button>
                </Link>

                <Link to="/Components/ExplorerPages">
                    <Button type="button" className="btn btn-secondary" style={{borderColor: 'black', backgroundColor:'#0F5298'}}>Explore Loaded Data</Button>
                </Link>

                <Link to="/Components/QueryFinder">
                    <Button type="button" className="btn btn-secondary" style={{borderColor: 'black', backgroundColor:'#0F5298'}}>Find Similar Sequences</Button>
                </Link>
            </div>

            <Container className="Box" style={{backgroundColor:'#FFFFFF', width:'18rem', height:'12rem', position:'absolute', left:'1%', top:'65%'}}> </Container>


        </Container>
    );


export default buildProgressMenu;