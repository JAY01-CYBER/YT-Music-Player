import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native';

const YTMusicApp = () => {
  const [searchText, setSearchText] = useState('');

  const popularSongs = [
    { name: "Kesariya - Brahmastra", id: "b9aEptSf1EA" },
    { name: "Apna Bana Le", id: "JptqK5qRWc4" },
    { name: "Tere Vaaste", id: "V8NsLKTGp64" },
    { name: "Heeriye", id: "R2c3S8xIm80" },
    { name: "Chaleya", id: "b9aEptSf1EA" },
    { name: "Satranga", id: "b9aEptSf1EA" },
  ];

  const searchOnYouTube = (query) => {
    if (query.trim()) {
      const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' song')}`;
      Linking.openURL(searchUrl);
    }
  };

  const playSong = (videoId) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🎵 YT Music Player</Text>
        <Text style={styles.subtitle}>Search & Play Any Song</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search any song..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={() => searchOnYouTube(searchText)}
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={() => searchOnYouTube(searchText)}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Songs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Hindi Songs</Text>
        <ScrollView style={styles.songsList}>
          {popularSongs.map((song, index) => (
            <TouchableOpacity
              key={index}
              style={styles.songCard}
              onPress={() => playSong(song.id)}
            >
              <Text style={styles.songNumber}>{index + 1}</Text>
              <View style={styles.songInfo}>
                <Text style={styles.songName}>{song.name}</Text>
                <Text style={styles.playText}>Tap to Play →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Quick Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Categories</Text>
        <View style={styles.categories}>
          {['Bollywood', 'Punjabi', 'English', 'Romantic', 'Party', 'Trending'].map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.category}
              onPress={() => searchOnYouTube(category + ' songs 2024')}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    backgroundColor: '#ff0000',
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.9,
  },
  searchSection: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    color: 'white',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  songsList: {
    marginBottom: 10,
  },
  songCard: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  songNumber: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 16,
    width: 24,
  },
  songInfo: {
    flex: 1,
  },
  songName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  playText: {
    color: '#ff0000',
    marginTop: 4,
    fontSize: 14,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  category: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
});

export default YTMusicApp;
