import qs from 'querystring';
import axios from 'axios';

export const getRefreshToken = async function getRefreshToken(refreshToken) {
  const authorization = Buffer.from('4b9f05ecf5c34031854b9d4890f9d789:1675556aa725432c985854804cba96bc').toString('base64');

  return axios.post('https://accounts.spotify.com/api/token', qs.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  }), {
    headers: {
      Authorization: `Basic ${authorization}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((response) => response.data.access_token);
};

export const getTopTracks = async function getTopTracks(accessToken) {
  const query = qs.stringify({
    time_range: 'short_term',
    limit: 12,
  });

  return axios.get(`https://api.spotify.com/v1/me/top/tracks?${query}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => response.data)
    .catch(() => null);
};
