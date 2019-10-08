import { Action } from '@ngrx/store';
import { ImageList } from '../models/giphy.model';

// GIPHY ACTIONS

export const UPDATE_SEARCH = '[Giphy] Update_Search';
export const UPDATE_SEARCH_RESULT = '[Giphy] Update_Result';
export const UPDATE_IMAGE = '[Giphy] Update_Image';
export const UPDATE_APP_STATE = '[Giphy] Update_State';
export const RESET_STATE = '[Giphy] Reset_All';

export class UpdateSearch implements Action {
  readonly type = UPDATE_SEARCH;
  constructor(public payload: string) { }
}

export class UpdateResult implements Action {
  readonly type = UPDATE_SEARCH_RESULT;
  constructor(public payload: any) { }
}

export class UpdateImage implements Action {
  readonly type = UPDATE_IMAGE;
  constructor(public payload: ImageList) { }
}

export class UpdateState implements Action {
  readonly type = UPDATE_APP_STATE;
  constructor(public payload: string) { }
}

export class ResetState implements Action {
  readonly type = RESET_STATE;
}

export type All
  = UpdateSearch
  | UpdateResult
  | UpdateImage
  | UpdateState
  | ResetState;
