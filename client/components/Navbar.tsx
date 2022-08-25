import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { LibraryMusic, Home, Search, PlaylistAdd, Favorite } from '@mui/icons-material';
import logo from '../tools/images/dolbit.png'
import Image from "next/image";
import { useRouter } from "next/router";

const data = [
  { icon: <Home />, label: 'Главная', href: '/' },
  { icon: <Search />, label: 'Поиск', margin: '.6em 0', href: '/search' },
  { icon: <LibraryMusic />, label: 'Моя медиатека' , margin: '0 0 3em', href: '/tracks' },
  { icon: <PlaylistAdd />, label: 'Создать плейлист', margin: '0 0 .6em', href: '/albums' },
  { icon: <Favorite />, label: 'Любимые треки', href: '/favorites' },
];


const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    '&:selected, &$selected:hover, &$selected:focus': {
      backgroundColor: 'none',
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 30,
  },
});

export default function Navbar() {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', height: '100%',  bgcolor: 'black', pl: '.4em', width: '100%'}}>
          <FireNav component="nav">
              <ListItem sx={{ margin: '0 0 1.5em', cursor: 'pointer' }} onClick={() => router.push('/')}>
                <Image src={logo} alt="logo" height={'80px'} width={'80px'}/>
              </ListItem>
              {data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, width: '390px', color: '#b3b3b3', margin: `${item.margin}`, '&:hover': {color: 'white', bgColor: 'inherit'} }}
                    onClick={() => router.push(item.href)}
                    disableTouchRipple={true}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'bold' }}
                    />
                  </ListItemButton>
                ))}
          </FireNav>
    </Box>
  );
}
