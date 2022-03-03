import { call, put } from "redux-saga/effects";
import { setItems } from "../../ducks/items";
import { requestGetItems } from "../requests/items";

export function* handleGetItems(action) {
  try {
    const response = yield call(requestGetItems);
    const { data } = response;
    yield put(setItems(data));
  } catch (e) {
    console.log(e);
  }
}
