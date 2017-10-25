import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail, Panel, Navbar, Jumbotron, ButtonToolbar, Button } from 'react-bootstrap';
import { CardStack, Card } from 'react-cardstack';

export default class MyData extends React.Component {

    isLoading = true;
    mdata = {};

    render() {
        if(!this.state || !this.state.mdata)
        {
            return this.renderLoadingView();
        }
        return ( 
           <Panel>
            <Grid>
            <Row>
            {this.renderData(this.state.mdata)} 
            </Row></Grid>
            </Panel>
            );
    }

    renderLoadingView() {
        return (
          <div>
            <span>
            <Button onClick={this.GetData(this)}>Load</Button>
            </span>
          </div>

        <CardStack
        height={500}
        width={400}
        background='#f8f8f8'
        hoverOffset={25}>

        <Card background='#2980B9'>
            <h1>Number 1</h1>
        </Card>

        <Card background='#27AE60'>
            <h1>Number 2</h1>
        </Card>

        </CardStack>
        );
      }

    renderData(datalist)
    {
        console.log(datalist);
        if(!datalist)
            return;

        var retval = datalist.map((country, index) =>
        {
            return(
                <Col xs={6} md={4}>
                    <Thumbnail className="box"> 
                        <h3 className="country-name">
                            {country.name} 
                        </h3>

                        <h4>
                            {country.capital}
                        </h4>

                        <h5>
                            {country.subregion}
                        </h5>

                        <Button>...</Button>
                    </Thumbnail>
                </Col>
            );
        }, this);
        return  retval;
    }

    async GetData(curComp)
    {
        // var url = 'https://restcountries.eu/rest/v2/all';
        let response = await fetch('https://restcountries.eu/rest/v2/all');
        let responseJson = await response.json();
        console.log(responseJson);

        curComp.setState({
            isLoading: false,
            mdata: responseJson
        });

        // console.log(responseJson);

        // return fetch()
        // .then((response) => {
        //     var mlist;
        //     Promise.resolve(response.json())
        //     .then(function(value){
        //         console.log(value);
        //         mlist = value;
        //     });
        //     console.log(mlist);
        //     this.setState({
        //         isLoading: false,
        //         mdata: mlist
        //     });
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    }
}
