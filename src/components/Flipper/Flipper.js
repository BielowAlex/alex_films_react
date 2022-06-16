import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slice";

const Flipper = () => {

    const {pageNum,totalPage} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const btns = {
        prev:()=>{
            dispatch(moviesActions.prevPage());
        },
        next:()=>{
            dispatch(moviesActions.nextPage());
        }
    }

    return (
        <div className="flipper">
            <svg onClick={btns.prev}  width="25.618px" height="25.618px" viewBox="-5 0 25.618 25.618"
                 xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_77" transform="translate(-8.191 -3.191)">
                    <g id="Group_35">
                        <rect id="Rectangle_38" width="18.141" height="3.947" rx="1.954"
                              transform="translate(8.191 16.019) rotate(-45)" fill="#ffff"/>
                    </g>
                    <g id="Group_36">
                        <rect id="Rectangle_39" width="3.947" height="18.141" rx="1.954"
                              transform="translate(8.191 15.981) rotate(-45)" fill="#ffff"/>
                    </g>
                </g>
            </svg>

            <span className="counts">
                {pageNum} ... {totalPage}
            </span>

            <svg onClick={btns.next}  width="25px" height="25px" viewBox="-5 0 25 25" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-gambling-website-lined-icnos-casinoshunter"
                       transform="translate(-1783.000000, -158.000000)" fill="#ffff" fillRule="nonzero">
                        <g id="1" transform="translate(1350.000000, 120.000000)">
                            <path
                                d="M436.453517,38.569249 L447.302459,48.9938158 L447.39261,49.0748802 C447.75534,49.423454 447.968159,49.8870461 448,50.4382227 L447.998135,50.6228229 C447.968159,51.1129539 447.75534,51.576546 447.333675,51.9774469 L447.339095,51.9689832 L436.453517,62.430751 C435.663694,63.1897497 434.399001,63.1897497 433.609178,62.430751 C432.796941,61.650213 432.796941,60.3675924 433.609432,59.5868106 L443.012324,50.5572471 L433.609178,41.4129456 C432.796941,40.6324076 432.796941,39.349787 433.609178,38.569249 C434.399001,37.8102503 435.663694,37.8102503 436.453517,38.569249 Z"
                                id="right"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export {Flipper};
