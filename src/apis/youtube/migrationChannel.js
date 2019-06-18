### 1

const getVideos = async channelId => {
  /* Get Json-Server Youtube Channel Data - Temporary Method */

  const response = await axios
    .create({ baseURL: "http://localhost:3000/channels" })
    .get(`/${channelId}`);

  /* Get Youtube Video Data - Origin Method 
  const response = await axios
    .create({
      baseURL: "https://www.googleapis.com/youtube/v3"
    })
    .get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        order: "date",
        key: "AIzaSyD0WRa-w79Wbv3BaMGlYDWyaXD0ufJpKAE",
        channelId: channelId
      }
    });
  */

  setVideos(response.data.data.items);

  /* Migration: Youtube Channel Data to My Json Server 
  axios
    .create({
      baseURL: "http://localhost:3000/channels"
    })
    .put(`/${channelId}`, { id: `${channelId}`, data: response.data });
  */
  //response.data.nextPageToken
};


### 2

/* Get Youtube Channels Data - Origin Method 
    const response = await axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3"
      })
      .get("/channels", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: "AIzaSyD0WRa-w79Wbv3BaMGlYDWyaXD0ufJpKAE",
          id: channelId
        }
      });
    */
/* Migration: Youtube Channel Data to My Json Server 
    setTimeout(() => {
      axios
        .create({
          baseURL: "http://localhost:3000/channels"
        })
        .patch(`/${channelId}`, {
          title: response.data.items[0].snippet.title
        });
    }, 1000);
    */
