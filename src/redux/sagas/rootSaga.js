import { takeLatest, takeEvery } from "redux-saga/effects";
import { handleGetItems } from "./handlers/items";
import { GET_ITEMS } from "../ducks/items";

export function* watcherSaga() {
  yield takeEvery(GET_ITEMS, handleGetItems);
}
