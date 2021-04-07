import React from "react";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";

//copy the query
const GET_MOVIES = gql`
    { 
        movies{
            id
            medium_cover_image
        }
    }
`;

export default () => {
    const{ loading, error,data } = useQuery(GET_MOVIES);  //use query - react hook
    // console.log(loading, error, data);
    if(loading){
        return "loading...";
    }
    if(data && data.movies){
        return data.movies.map(m => <h1>{m.id}</h1>);
    }
    if(error){
        console.log(error);
    }
    return <h1>Home</h1>;
};