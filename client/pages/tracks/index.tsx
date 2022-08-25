import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter()
  const tracks:ITrack[] = [
    { id: 1, name: "heathens", artist: '21 pilots', listens: 123, text: 'hello world rake it slow', audio: 'sdfsdfsdfadsfsd.mp3', picture: 'https://www.ostmusic.org/images/albums/suicide_squad.jpg', comments: []},
    { id: 2, name: "DALEKO", artist: 'MORGENSRal', listens: 42353123, text: 'VSE KTO DALEKO', audio: 'sD324DSDF.mp3', picture: 'https://images.genius.com/a67a9a6047f7209481e6fa43f3fa65aa.1000x1000x1.jpg', comments: []},
    { id: 3, name: "OST 4ISTII", artist: 'SKRYPTONITE', listens: 12323425, text: 'NO KROSSOVKI 4ISTII', audio: '98987234JHDKAFD.mp3', picture: 'https://www.soyuz.ru/public/uploads/files/2/7452476/20201210143429968a241114.jpg', comments: []}

  ]


  return (
    <MainLayout>
      <Grid container justifyContent={"center"} sx={{mt: 20}} >
        <Card sx={{width: 1300}}>
          <Box p={2}>
          <Grid container justifyContent={"space-between"}>
            <h1>Track list</h1>
            <Button onClick={() => router.push('track/create')}>Upload</Button>
          </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
</MainLayout>
  );
};

export default Index;