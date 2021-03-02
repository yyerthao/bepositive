import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGenres() {
    console.log('Fetching message from DB working OK');
    try{
        const response = yield axios.get('/api/genre')
        yield put({type: 'SET_GENRES', payload: response.data})
    } catch(error){
        console.log('error with fetching genres', error);
    }        
}
function* genres() {
  yield takeLatest('FETCH_GENRES', fetchGenres);
}

export default genres;
