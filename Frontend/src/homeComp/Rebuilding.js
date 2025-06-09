import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { white } from '../components/Constants';

// Sample data for rebuilding facility providing companies (replace with actual data)
const companiesData = [
  {
    id: 1,
    name: 'National Disaster Response Force (NDRF)',
    contactNumber: 'Not Available',
    details: 'The National Disaster Response Force (NDRF) is a specialized force under the Ministry of Home Affairs, Government of India, responsible for disaster response, rescue, and relief operations across the country. They deploy teams equipped with specialized equipment and trained personnel to assist in rebuilding efforts after disasters.',
  },
  {
    id: 2,
    name: 'State Disaster Response Force (SDRF)',
    contactNumber: 'Not Available',
    details: 'State Disaster Response Force (SDRF) is constituted in various states of India to assist in disaster response and relief efforts within the respective states. They work in coordination with the NDRF and other local authorities to provide support in rebuilding infrastructure and providing relief to affected communities.',
  },
  {
    id: 3,
    name: 'National Reconstruction Authority (NRA)',
    contactNumber: 'Not Available',
    details: 'The National Reconstruction Authority (NRA) is established by the government to oversee and coordinate reconstruction efforts after major disasters. It works closely with government agencies, NGOs, and other stakeholders to plan and implement rebuilding projects, including infrastructure, housing, and community facilities.',
  },
  {
    id: 4,
    name: 'Non-Governmental Organizations (NGOs)',
    contactNumber: 'Contact respective NGOs for details',
    details: 'Various non-governmental organizations (NGOs) play a crucial role in post-disaster rebuilding efforts in India. They provide a range of services, including shelter construction, infrastructure rehabilitation, livelihood support, and psychosocial counseling, to help affected communities recover and rebuild their lives.',
  },
  {
    id: 5,
    name: 'Corporate Social Responsibility (CSR) Initiatives',
    contactNumber: 'Contact respective companies for details',
    details: 'Many private companies in India have corporate social responsibility (CSR) initiatives focused on disaster relief and rebuilding efforts. These initiatives may include financial support, volunteer programs, and partnerships with NGOs to address the needs of disaster-affected communities.',
  },
  
];

const Rebuilding = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Function to handle selection of a company
  const handleCompanyPress = (company) => {
    if (selectedCompany === company.id) {
      setSelectedCompany(null); // Collapse dropdown if already selected
    } else {
      setSelectedCompany(company.id); // Expand dropdown for selected company
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require("../assets/2.jpg")} style={{ height: '100%',width:'100%' }}>
      <Text style={styles.title}>Rebuilding Facility Providing Organizations</Text>
      {companiesData.map((company) => (
        <View key={company.id} style={styles.companyContainer}>
          <TouchableOpacity onPress={() => handleCompanyPress(company)} style={styles.companyButton}>
            <Text style={styles.companyName}>{company.name}</Text>
          </TouchableOpacity>
          {selectedCompany === company.id && (
            <View style={styles.companyDetails}>
              <Text style={styles.detailsText}>Contact Number: {company.contactNumber}</Text>
              <Text style={styles.detailsText}>{company.details}</Text>
            </View>
          )}
        </View>
      ))}

        </ImageBackground>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:20,
    marginBottom: 30,
  },
  companyContainer: {
    marginBottom: 20,
  },
  companyButton: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:.7
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyDetails: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  detailsText: {
    fontSize: 16,
  },
});

export default Rebuilding;
