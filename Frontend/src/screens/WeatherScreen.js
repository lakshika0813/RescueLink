import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { getCurrentCoordinates } from '../utils/locationUtils'; // Path ko apne project ke hisab se update karo

const API_KEY = '895284fb2d2c50a520ea537456963d9c'; // yahan apni OpenWeatherMap ki valid API key daalo

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const { latitude, longitude } = await getCurrentCoordinates();

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
          setError(null);
        } else {
          setError(data.message || "Failed to fetch weather data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);


  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 16 }}>Error: {error}</Text>
      </View>
    );
  }

  // Safe access to weather data properties
  const temp = weatherData?.main?.temp;
  const feelsLike = weatherData?.main?.feels_like;
  const humidity = weatherData?.main?.humidity;
  const pressure = weatherData?.main?.pressure;
  const windSpeed = weatherData?.wind?.speed;
  const sunrise = weatherData?.sys?.sunrise;
  const sunset = weatherData?.sys?.sunset;
  const weatherDescription = weatherData?.weather?.[0]?.description || '';

  return (
    <ImageBackground source={require("../assets/4.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Today's Weather</Text>
        <Text style={styles.subtitle}>Current Temperature: {temp ? `${temp}°C` : 'N/A'}</Text>
        <Text style={styles.subtitle}>Condition: {weatherDescription}</Text>

        <View style={styles.weatherDetails}>
          <View style={styles.sunInfo}>
            <Image source={require('../assets/feelsLike.png')} style={styles.icon} />
            <Text style={styles.detailItem}>Feels Like: {feelsLike ? `${feelsLike}°C` : 'N/A'}</Text>
          </View>

          <View style={styles.sunInfo}>
            <Image source={require('../assets/humidity.png')} style={styles.icon} />
            <Text style={styles.detailItem}>Humidity: {humidity ? `${humidity}%` : 'N/A'}</Text>
          </View>

          <View style={styles.sunInfo}>
            <Image source={require('../assets/wind.png')} style={styles.icon} />
            <Text style={styles.detailItem}>Wind Speed: {windSpeed ? `${windSpeed} m/s` : 'N/A'}</Text>
          </View>

          <View style={styles.sunInfo}>
            <Image source={require('../assets/pressure.png')} style={styles.icon} />
            <Text style={styles.detailItem}>Pressure: {pressure ? `${pressure} hPa` : 'N/A'}</Text>
          </View>

          <View style={styles.sunInfo}>
            <Image source={require('../assets/sunrise.png')} style={styles.icon} />
            <Text style={styles.sunTime}>
              Sunrise: {sunrise ? new Date(sunrise * 1000).toLocaleTimeString() : 'N/A'}
            </Text>
          </View>

          <View style={styles.sunInfo}>
            <Image source={require('../assets/sunset.png')} style={styles.icon} />
            <Text style={styles.sunTime}>
              Sunset: {sunset ? new Date(sunset * 1000).toLocaleTimeString() : 'N/A'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 15,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  weatherDetails: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  sunInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  sunTime: {
    fontSize: 16,
  },
});

export default WeatherScreen;
