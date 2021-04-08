import React from "react";
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_MOVIES = gql`
    # apollo를 위한 쿼리 : 이름이 있어야 함
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIES, {
        variables: {id}
    });
    if (loading){
        return "loading"
    }
    if(data && data.movie){
        return data.movie.title;
    }
    console.log(loading, data);
    return "Detail";
};
