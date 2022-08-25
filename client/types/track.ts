export interface IComment{
    id: string;
    username: string;
    text: string;
}




export interface ITrack{
  id: number;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}