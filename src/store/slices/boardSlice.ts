import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../types';

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boarderId: '1',
      boarderName: '첫번째 제목',
      lists: [
        {
          listsId: '1',
          listName: 'kimkim',
          task: [
            {
              taskId: '1',
              taskName: 'name 1',
              taskDescription: '설명',
              taskOwner: 'kim',
            },
            {
              taskId: '2',
              taskName: 'name 2',
              taskDescription: '설명',
              taskOwner: 'kim',
            },
            {
              taskId: '3',
              taskName: 'name 3',
              taskDescription: '설명',
              taskOwner: 'kim',
            },
          ],
        },
        {
          listsId: '2',
          listName: 'kimkim',
          task: [
            {
              taskId: '1',
              taskName: 'name 1',
              taskDescription: '설명',
              taskOwner: 'kim',
            },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});
export const boardReducer = boardSlice.reducer;
