import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const kittens = [
  {
    id: 1,
    name: 'Михаэла',
    dob: '16 июля 2025',
    description: 'Маленькой напоминала мишку, поэтому начали звать Мишкой, но оказалось, что это девочка :) Пушистая милаха, всегда готова поесть',
    photos: ['/images/Misha1.jpg', '/images/Misha2.jpg', '/images/Misha3.jpg', '/images/Misha4.jpg'],
  },
  {
    id: 2,
    name: 'Тишка',
    dob: '16 июля 2025',
    description: 'Вначале был самым тихим, но в месячном возрасте открыл в себе любовь к исследованиям.',
    photos: ['/images/Cisha1.jpg', '/images/Cisha2.jpg', '/images/Cisha3.jpg'],
  },
  {
    id: 3,
    name: 'Зося',
    dob: '16 июля 2025',
    description: 'Полосатый ангелочек с белыми митенками на лапках и неутолимыи стремлением к исследованию окружающего мира',
    photos: ['/images/zofja1.jpg', '/images/zofja2.jpg', '/images/zofja3.jpg', '/images/zofja4.jpg', '/images/zofja5.jpg'],
  },
  {
    id: 4,
    name: 'Лея',
    dob: '16 июля 2025',
    description: 'Еще один полосатый ангелочек. Всегда готова попробовать на вкус брата и сестер :)',
    photos: ['/images/Leia1.jpg', '/images/Leia2.jpg', '/images/Leia3.jpg', '/images/Leia4.jpg'],
  },
  {
    id: 5,
    name: 'Люсинда',
    dob: '16 июля 2025',
    description: 'Сначала была чёрненькой, но со временем обрела полосочки. Всегда готова к любому кипишу :)',
    photos: ['/images/Lucy1.jpg', '/images/Lucy2.jpg', '/images/Lucy3.jpg'],
  },
];

const motherCat = {
  name: 'Нюкта',
  dob: 'неизвестно',
  description: 'Некрупная умная и ласковая кошка.',
  photo: '/images/luna.jpg',
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const App = () => {
  return (
    <Container style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h3" align="center" gutterBottom style={{ color: '#6c63ff' }}>
        Kittens for Adoption
      </Typography>
      <Typography variant="h6" align="center" gutterBottom style={{ color: '#292571ff' }}>
        В начале июля в деревне к нашему дому прибрела очень худая беременная чёрная кошечка. Видимо, кто-то привёз и выкинул. Мы приютили ее в сарае (потому что наша родная кошка была совсем не в восторге от перспективы делить дом), и вскоре чёрная кошечка родила пятерых котят.
        Мы очень надеемся, что каждый котёнок найдём себе новый дом и любящих хозяев. (И что тогда у нас получится подружить нашу кошку с новой.) Все котята самостоятельно едят, ходят в туалет в специально отведенное место (лоток с песком), любят играть друг с другом, бегать и исследовать окружающий мир.
      </Typography>
      <Grid container spacing={4}>
        {kittens.map((kitten) => (
          <Grid item key={kitten.id} xs={12} sm={6} md={4}>
            <Card style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Carousel responsive={responsive}>
                {kitten.photos.map((photo, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    image={photo}
                    alt={kitten.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                ))}
              </Carousel>
              <CardContent>
                <Typography variant="h5" style={{ color: '#6c63ff' }}>
                  {kitten.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Дата рождения:</strong> {kitten.dob}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {kitten.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Card style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardMedia
              component="img"
              image={motherCat.photo}
              alt={motherCat.name}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" style={{ color: '#6c63ff' }}>
                Мама котят: {motherCat.name}
              </Typography>
              <Typography variant="body1">
                <strong>Дата рождения:</strong> {motherCat.dob}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {motherCat.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Card style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#6c63ff' }}>
                Контакты
              </Typography>
              <Typography variant="body1">
                Если вы заинтересованы в каком-то из котят, звоните или пишите:
              </Typography>
              <Typography variant="body1">
                <strong>Телефон (+вайбер):</strong> +375 33 367-38-83, Евгения
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="tel:+375333673883"
                style={{ marginTop: '10px', backgroundColor: '#6c63ff' }}
              >
                Позвонить
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
