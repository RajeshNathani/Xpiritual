import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
var track1 = {
    url: 'http://example.com/avaritia.mp3', // Load media from the network
    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'http://example.com/cover.png', // Load artwork from the network
    duration: 402 // Duration in seconds
};
    const setupPlayer = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_STOP,
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
            ],
        });
        await TrackPlayer.add({track1});
    }
    const togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack == null) {
            await TrackPlayer.play();
        } else {
            const state = await TrackPlayer.getState();
            if (state === TrackPlayer.STATE_PLAYING) {
                await TrackPlayer.pause();
            } else {
                await TrackPlayer.play();
            }
        }
    }
    const playbackState = usePlaybackState();

  return (
    <View>
      <Text>MusicPlayer</Text>
      <TouchableOpacity onPress = {() => togglePlayback()}>
            <Text>Play</Text>
        </TouchableOpacity>
    </View>
  )


export default MusicPlayer