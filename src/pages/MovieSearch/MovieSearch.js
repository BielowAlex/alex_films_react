import React, {useEffect} from 'react';
import {MoviesList, NoResult} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slice";
import {Flipper} from "../../components/Flipper";

const MovieSearch = () => {
    const {searchResult,query,totalPage,pageNum} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    console.log(query);
    useEffect(()=>{
        dispatch(moviesActions.searchResult({query,pageNum}));
        console.log(searchResult);
    },[dispatch,query,pageNum])
    

    return (
        <div>
            {query===''||searchResult.length<1
                ?<NoResult/>
                :<MoviesList movies={searchResult} isLinks={true}/>}
            {totalPage>1
                ?<Flipper/>
                :null
            }
        </div>
    );
};

export {MovieSearch};
