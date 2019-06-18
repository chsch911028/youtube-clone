import youtubeTest from "./youtube-test";

export default async () => {
  const response = await youtubeTest.get(`/subscriptions`);
  return response;
};
