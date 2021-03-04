import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMessage() {
    console.log('Fetching message from DB working OK');
    try{
        const response = yield axios.get('/api/message')
        yield put({type: 'SET_MESSAGE', payload: response.data})
    } catch(error){
        console.log('error with fetching all messages', error);
    }        
}

function* postMessage() {
    console.log('Posting message to DB working OK');
    try {
        const response = yield axios.post('/api/message')
        yield put({
            type: 'SET_MESSAGE',
            payload: response.data
        })
    } catch (error) {
        console.log('error with fetching all messages', error);
    }
}

function* messages() {
  yield takeLatest('FETCH_MESSAGE', fetchMessage);
  yield takeLatest('POST_HAPPY', postMessage)
}

export default messages;
