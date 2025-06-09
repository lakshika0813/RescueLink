import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  StyleSheet,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';

const emergencyContacts = [
  { id: 1, name: 'National Emergency Number', number: '112' },
  { id: 2, name: 'Police', number: '100' },
  { id: 3, name: 'Ambulance', number: '102' },
  { id: 4, name: 'Fire', number: '101' },
  { id: 5, name: 'Disaster Management (NDMA)', number: '1078' },
  { id: 6, name: 'Disaster Management Services', number: '108' },
  { id: 7, name: 'Relief Commissioner for Natural Calamities', number: '1070' },
  { id: 8, name: 'LPG Leak Helpline', number: '1906' },
  { id: 9, name: 'Tourist Helpline', number: '1363' },
  { id: 10, name: 'Children in Difficult Situation', number: '1098' },
];

const CallScreen = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [customFamilyContacts, setCustomFamilyContacts] = useState([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');

  const handleContactPress = (contactId) => {
    setSelectedContact((prev) => (prev === contactId ? null : contactId));
  };

  const handleCallPress = (number) => {
    Alert.alert(
      `Call ${number}`,
      `Are you sure you want to call ${number}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: () => Linking.openURL(`tel:${number}`) },
      ],
      { cancelable: true }
    );
  };

  const handleAddContact = async () => {
    if (!newContactName || !newContactNumber) {
      Alert.alert('Please enter both name and number.');
      return;
    }

    try {
      const response = await fetch('http://192.168.29.56:5000/api/contacts/addContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newContactName,
          number: newContactNumber,
        }),
      });

      const result = await response.text();
      // Alert.alert(result);
      setNewContactName('');
      setNewContactNumber('');
      fetchCustomFamilyContacts();
    } catch (error) {
      console.error(error);
      Alert.alert('Error adding contact. Please try again.');
    }
  };

  const fetchCustomFamilyContacts = async () => {
    try {
      const response = await fetch('http://192.168.29.56:5000/api/contacts/customFamilyContacts');
      const data = await response.json();
      setCustomFamilyContacts(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error fetching contacts. Please try again.');
    }
  };

  useEffect(() => {
    fetchCustomFamilyContacts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <ImageBackground source={require('../assets/2.jpg')} style={styles.background}>
        <View style={styles.container}>

          {/* Family Contacts */}
          <View style={styles.section}>
            <Text style={styles.title}>Family Contacts</Text>
            {customFamilyContacts.map((contact, index) => {
              const key = contact.id ? `family-${contact.id}` : `family-index-${index}`;
              return (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.contactButton,
                    selectedContact === key && styles.selectedContact,
                  ]}
                  onPress={() => handleContactPress(key)}
                >
                  <Text style={styles.contactName}>{contact.name}</Text>
                  {selectedContact === key && (
                    <Text
                      style={styles.contactNumber}
                      onPress={() => handleCallPress(contact.number)}
                    >
                      {contact.number}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}

            <View style={styles.addContactContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={newContactName}
                onChangeText={setNewContactName}
              />
              <TextInput
                style={styles.input}
                placeholder="Number"
                keyboardType="number-pad"
                value={newContactNumber}
                onChangeText={setNewContactNumber}
              />
              <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
                <Text style={styles.addButtonText}>Add Contact</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Emergency Contacts */}
          <View style={styles.section}>
            <Text style={styles.title}>Emergency Contacts</Text>
            {emergencyContacts.map((contact) => {
              const key = `emergency-${contact.id}`;
              return (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.contactButton,
                    selectedContact === key && styles.selectedContact,
                  ]}
                  onPress={() => handleContactPress(key)}
                >
                  <Text style={styles.contactName}>{contact.name}</Text>
                  {selectedContact === key && (
                    <Text
                      style={styles.contactNumber}
                      onPress={() => handleCallPress(contact.number)}
                    >
                      {contact.number}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  section: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  contactButton: {
    backgroundColor: '#C0C0F2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
  },
  selectedContact: {
    backgroundColor: '#E6E6FA',
    opacity: 0.9,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    marginTop: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  addContactContainer: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#D9A1A0',
    opacity: 0.7,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CallScreen;
