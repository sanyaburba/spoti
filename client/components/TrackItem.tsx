import React from "react";
import { ITrack } from "../types/track";
import styles from '../styles/TrackItem.module.scss'
import { Card, Grid, IconButton } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}


const TrackItem: React.FC<TrackItemProps> = ({track, active=true}) => {

  const router = useRouter();

  return (
    <Card className={styles.track}>
      <IconButton className={styles.musicButton}>
        {active? <Pause/> : <PlayArrow/>}

      </IconButton>
      <img width={70} height={70} src={track.picture} alt={'label'}/>
      <Grid container direction={"column"} style={{width:'200px', margin: '0 20px'}}>
        <div className={styles.trackName} onClick={() => router.push('/tracks/' + track.id)}>{track.name}</div>
        <div style={{fontSize: 12, color: '#807e7d'}}>{track.artist}</div>
      </Grid>
      {active && <div>02:28 / 03:22</div>}
      <IconButton style={{marginLeft: 'auto'}}>
        <Delete/>
      </IconButton>
    </Card>
  );
};

export default TrackItem;