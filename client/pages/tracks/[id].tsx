import React from "react";
import { ITrack } from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import { Button, Grid, TextField } from "@mui/material";

const TrackPage = () => {

  const track : ITrack = { id: 1, name: "heathens", artist: '21 pilots', listens: 123, text: 'hello world rake it slow', audio: 'sdfsdfsdfadsfsd.mp3', picture: 'https://www.ostmusic.org/images/albums/suicide_squad.jpg', comments: []}
  const router = useRouter()

    return (
      <MainLayout>
        <Button onClick={() => router.push('/tracks')} style={{fontSize: 34}}>
            Back to the list
        </Button>
        <Grid container style={{margin: '20px 0 ', color: 'white'}}>
          <img src={track.picture} width={200} height={200} alt={"Track picture"}/>
          <div style={{ marginLeft: 30  }}>
            <h1> Название - {track.name}</h1>
            <h1>Исполнитель - {track.artist}</h1>
            <h2>Прослушиваний - {track.listens}</h2>
          </div>
        </Grid>
        <h1 style={{color: 'white'}}>text</h1>
        <p style={{color: 'white'}}>{track.text}</p>
        <Grid container style={{color: 'white'}}>
          <TextField label={'your name'} fullWidth color="secondary" variant={'filled'} style={{color: 'white'}}/>
          <TextField label={'Comment'} fullWidth multiline rows={5} color="secondary" variant={'filled'} style={{bgColor: 'white'}}/>
        </Grid>
        <Button>Send</Button>
      </MainLayout>
  );
};

  export default TrackPage;