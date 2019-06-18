import youtubeTest from "./youtube-test";

export default async channelId => {
  const response = await youtubeTest.get(`/channels/${channelId}`);
  return response;
};
