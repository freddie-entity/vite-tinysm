export interface Room {
  cover: string;
  name: string;
  at: string;
  id: string;
  last_active: string;
}

export interface UserRoomState {
  userRooms: Room[];
  loading: boolean;
  error: string;
}

export interface GeneralRoomState {
  userRoom: UserRoomState;
}
