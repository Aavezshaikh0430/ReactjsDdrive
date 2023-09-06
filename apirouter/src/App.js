import {} from "@mui/icons-material";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  TextField,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [isloading, setLoading] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
    console.log(value);
  };

  const callNewsApi = async (search) => {
    setArticles([]);
    setLoading(!isloading);
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?q=${search}`,
        {
          headers: {
            "X-Api-key": "07069948dcc6476fab5be4f0db3619d5",
          },
        }
      );
      setArticles(response.data.articles);
      console.log(response.data);
    } catch (error) {
      console.log();
    }
    setLoading(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <Grid Container spacing={2}>
          <Grid item sm={12}>
            <h1>Breaking news</h1>
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              id="outline-basic"
              label="enter news"
              variant="outlined"
              onChange={(e) => handleSearch(e.target.value)}
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={() => callNewsApi(search)}
              style={{ marginTop: "20px" }}
            >
              SEARCH
            </Button>
          </Grid>
        </Grid>

        <Grid Container spacing = {4}>
          {isloading ? (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          ) : (
            articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.urlToImage || "/placeholder-imge.jpg"}
                    alt={article.title}
                  />
                  <CardContent>
                    <Typography>{article.title}</Typography>
                    <Typography>{article.discription}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
}

export default App;
