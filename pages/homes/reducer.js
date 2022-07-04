import produce from 'immer';
import * as constants from './constants';

const initialState = {

};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {

    }
});