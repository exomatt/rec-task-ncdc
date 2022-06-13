import {Card, Grid} from "@mui/material";
import {StyledH3} from "../../components/text/StyledH";
import React from "react";

const NotFound = ()=>{
    return(
        <Card style={{margin: '10px'}}>
            <Grid container spacing={2} alignContent={"center"} direction={"column"} style={{margin: '10px'}}>
                <Grid item xs={12}>
                    <StyledH3>Not Found!!!</StyledH3>
                </Grid>
            </Grid>
        </Card>
    )
}

export default NotFound