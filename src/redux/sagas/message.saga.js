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
function* getOneMessage(action) {
    try {
        const response = yield axios.get(`/api/message/${action.payload}`) // 
        yield put({
            type: 'SET_ONE_MESSAGE',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ONE MSG error', error);
    }
}

function* postMessage(action) {
    console.log('Posting message from user');
    try {
        yield axios.post('/api/message', action.payload);
        console.log('This is the message sent to DB', action.payload);
        yield fetchMessage();
    } catch (error) {
        console.log('POST ROUTE error', error);
    }
}


function* deleteMessage(action) {
    console.log('DELETING message from user', action.payload); 
    try {
        yield axios.delete(`api/message/${action.payload}`);
        console.log('Message you are trying to delete', action.payload)
    } catch (error) {
        console.log('DELETE ROUTE error', error);
    }
}

function* updateMessage(action) {
    console.log('UPDATING message from user', action.payload);
    try {
        yield axios.put(`/api/message/${action.payload.id}`, action.payload);
        console.log('Details of message you are trying to update:', action.payload)
        console.log('This is the ID NEW message sent to DB', action.payload.id);
        yield put({
            type: 'FETCH_MESSAGE'
        });
    } catch (error) {
        console.log('PUT ROUTE error', error);
    }
}



function* messages() {
  yield takeLatest('FETCH_MESSAGE', fetchMessage);
  yield takeLatest('GET_ONE_MESSAGE', getOneMessage);
  yield takeLatest('POST_HAPPY', postMessage);
  yield takeLatest('DELETE_MESSAGE', deleteMessage);
  yield takeLatest('UPDATE_MESSAGE', updateMessage)
}

export default messages;
