import React from 'react';
import axios from 'axios';
import qs from 'querystring';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import Footer from '../components/Footer';
import { getRefreshToken, getTopTracks } from '../services/spotify';

export default function Home({ songs }) {
  return (
    <>
      <Head title="Connor Stevens" />
      <div className="pt-20 pb-20 min-h-screen px-6 lg:px-32 bg-black text-white">
        <div className="space-y-3">
          <div className="text-gray-200 text-xl">Hey, I'm</div>
          <div className="font-bold text-6xl">Connor Stevens</div>
          <div>I'm a Software Engineer at <a className="text-blue-400 hover:underline" href="https://hyper.co">Hyper</a></div>
        </div>
        <div className="mt-20 opacity-80">I haven't thought of much to put on this site, so for now enjoy my top 12 songs.</div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {songs?.items ? songs.items.map((song) => {
            return (
              <div key={song.id} className="border-2 border-gray-400 rounded-md flex overflow-hidden p-4">
                <img className="max-h-20 mr-3" src={song.album.images[0].url} alt={song.title} />
                <div className="flex flex-col">
                  <div className="font-semibold">{song.name}</div>
                  <div className="font-regular opacity-80">{song.artists[0].name} — {song.album.name}</div>
                </div>
              </div>
            );
          }) : 'Something went terribly wrong.'}
        </div>
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {
  songs: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      album: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape({
          url: PropTypes.string,
        })),
        name: PropTypes.string,
      }),
      artists: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      })),
    })),
  }),
};

export async function getServerSideProps() {
  const accessToken = 'BQA7acrIeUtZo330PB_q_NuS-eG03NBOIN44wtNEEp1mc2nl40A5qeaXGBUoMmTNlM9q3thzp6V21jS8NBzqZNwbSnJBxBAMiP3beA6I6pL-1Mz8gT3b9EBhdg4E6oc2u24HRsh2GSuEGWuhas6QRjZYpPU';

  let songs;

  songs = await getTopTracks(accessToken).catch(() => null);

  if (!songs) {
    const token = await getRefreshToken('AQCaW-0jbUDbMP1TTtp5Fff6ViUR93KvQ3H0qtuq0XPfvlEsaHlWmX8f6S5QqCwKZjqxQ2YM-pvb_CPcqGbcYVrv5DKUa-IRMHuQsmwkwm-Bnjv0uS69TFPMhYRus_IZA5w');

    songs = await getTopTracks(token).catch(() => {});
  }

  return {
    props: {
      timestamp: Date.now(),
      songs: songs || [],
    },
  };
}
