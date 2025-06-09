import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView,ImageBackground} from 'react-native';
import Background from '../components/Background';
import { black, orange, yellowOrange } from '../components/Constants';

// Sample data for schemes (replace with actual data or fetch from API)
const schemesData = [
  {
    id: 1,
    name: 'National Disaster Response Fund (NDRF)',
    details: 'The National Disaster Response Fund (NDRF) is a government fund set up to provide immediate relief to states affected by natural disasters. It is used for meeting the expenses for emergency response, relief, and rehabilitation.',
    applicationProcedure: 'Application for NDRF is initiated by the respective state governments in case of a disaster declaration.',
  },
  {
    id: 2,
    name: 'State Disaster Response Fund (SDRF)',
    details: 'The State Disaster Response Fund (SDRF) is constituted by each state government to provide immediate relief to the affected people during disasters occurring within the state.',
    applicationProcedure: 'Application procedures for SDRF vary by state and are usually handled by the respective state disaster management authorities.',
  },
  // Add more schemes with details and application procedures as needed
  {
    id: 3,
    name: 'National Cyclone Risk Mitigation Project (NCRMP)',
    details: 'The National Cyclone Risk Mitigation Project (NCRMP) aims to reduce the vulnerability of coastal communities to cyclones and other natural disasters through various measures such as early warning systems, infrastructure development, and community preparedness.',
    applicationProcedure: 'Application procedures for NCRMP projects are usually initiated by relevant government departments or agencies overseeing disaster management and infrastructure development.',
  },
  {
    id: 4,
    name: 'National Disaster Management Authority (NDMA)',
    details: 'The National Disaster Management Authority (NDMA) is responsible for laying down policies, plans, and guidelines for disaster management to ensure timely and effective response to disasters.',
    applicationProcedure: 'Application procedures for NDMA initiatives may vary depending on the specific program or project. It often involves collaboration with relevant government departments or agencies.',
  },
  {
    id: 5,
    name: 'Disaster Management Act, 2005',
    details: 'The Disaster Management Act, 2005, provides a legal framework for disaster management in India. It outlines the roles and responsibilities of various stakeholders, including the government, non-governmental organizations, and individuals, in managing disasters.',
    applicationProcedure: 'The Disaster Management Act, 2005, lays down procedures and protocols for disaster management. Compliance with the provisions of the act is mandatory for all relevant stakeholders.',
  },
  {
    id: 6,
    name: 'Pradhan Mantri Garib Kalyan Yojana (PMGKY)',
    details: 'The Pradhan Mantri Garib Kalyan Yojana (PMGKY) is a government scheme aimed at providing relief to vulnerable sections of society, including farmers, low-income households, and workers in the informal sector, during times of disasters.',
    applicationProcedure: 'Application procedures for PMGKY schemes may vary depending on the specific program or relief package announced by the government. Eligible beneficiaries are usually required to apply through designated channels or offices.',
  },
  {
    id: 7,
    name: 'National Flood Control Programme (NFCP)',
    details: 'The National Flood Control Programme (NFCP) is aimed at mitigating the impact of floods in vulnerable regions through various measures such as river embankments, flood forecasting, and disaster preparedness activities.',
    applicationProcedure: 'Application procedures for NFCP projects are usually initiated by relevant government departments or agencies overseeing water resources and disaster management.',
  },
  {
    id: 8,
    name: 'National Programme for Chemical Disaster Management (NPCDM)',
    details: 'The National Programme for Chemical Disaster Management (NPCDM) focuses on preparedness, prevention, and mitigation of chemical disasters through risk assessment, capacity building, and emergency response planning.',
    applicationProcedure: 'Application procedures for NPCDM projects are typically managed by the Ministry of Environment, Forest and Climate Change (MoEFCC) or relevant government agencies responsible for chemical safety and disaster management.',
  },
  {
    id: 9,
    name: 'National Programme for Earthquake Management (NPEM)',
    details: 'The National Programme for Earthquake Management (NPEM) aims to strengthen earthquake resilience through various measures such as seismic hazard mapping, building codes enforcement, and public awareness campaigns.',
    applicationProcedure: 'Application procedures for NPEM projects may involve collaboration with relevant government departments, urban planning authorities, and disaster management agencies.',
  },
  {
    id: 10,
    name: 'National Programme for Preparedness of Urban Flooding (NPPUF)',
    details: 'The National Programme for Preparedness of Urban Flooding (NPPUF) focuses on enhancing preparedness and response capabilities for urban flooding events through drainage infrastructure improvements, flood risk mapping, and community-based disaster management initiatives.',
    applicationProcedure: 'Application procedures for NPPUF projects may vary depending on the specific program or initiative. Local governments and urban planning authorities usually coordinate the application process in collaboration with relevant stakeholders.',
  },
  {
    id: 11,
    name: 'National Disaster Management Plan (NDMP)',
    details: 'The National Disaster Management Plan (NDMP) provides a comprehensive framework for disaster management in India, outlining strategies, protocols, and institutional mechanisms for disaster preparedness, response, and recovery.',
    applicationProcedure: 'The NDMP is implemented by various government agencies, departments, and ministries at national, state, and local levels. Application procedures may vary depending on the specific initiatives or projects under the NDMP.',
  },
  {
    id: 12,
    name: 'National School Safety Programme (NSSP)',
    details: 'The National School Safety Programme (NSSP) aims to enhance the safety and resilience of schools against various hazards, including natural disasters, through capacity building, infrastructure improvements, and risk assessment.',
    applicationProcedure: 'Application procedures for NSSP initiatives may involve coordination between the Ministry of Education, school authorities, and relevant disaster management agencies. Schools interested in participating in NSSP projects should contact the appropriate authorities for guidance.',
  },
  {
    id: 13,
    name: 'National Fire Service College (NFSC)',
    details: 'The National Fire Service College (NFSC) provides training and capacity building programs for fire and emergency response personnel to enhance their skills and preparedness in dealing with fire incidents and other emergencies.',
    applicationProcedure: 'Application procedures for NFSC training programs vary depending on the specific courses or workshops offered. Interested participants can visit the NFSC website or contact the college administration for information on admission procedures and eligibility criteria.',
  },
  {
    id: 14,
    name: 'National Institute of Disaster Management (NIDM)',
    details: 'The National Institute of Disaster Management (NIDM) is a premier institute for training, research, and capacity building in disaster management. It offers various courses, workshops, and research programs to enhance the skills and knowledge of disaster management professionals and stakeholders.',
    applicationProcedure: 'Application procedures for NIDM courses and programs vary depending on the specific training or research initiative. Interested individuals or organizations can visit the NIDM website or contact the institute for information on admission procedures and eligibility criteria.',
  },
];

const Schemes = ({ navigation }) => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    // Fetch schemes data (you can replace this with your data fetching logic)
    setSchemes(schemesData);
  }, []);

  // Function to navigate to scheme details screen
  const handleSchemePress = (scheme) => {
    // Navigate to scheme details screen and pass scheme data as route parameter
    navigation.navigate('SchemeDetailsScreen', { scheme });
  };

  // Render scheme item
  const renderSchemeItem = ({ item }) => (
    <TouchableOpacity style={styles.schemeItem} onPress={() => handleSchemePress(item)}>
      <Text style={styles.schemeItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    
      <ImageBackground source={require("../assets/1.jpg")} style={{ height: '100%',width:'100%' }}>
      <View style={styles.container}>
      <Text style={styles.title}>Government Schemes for Disaster Recovery</Text>
      <FlatList
        data={schemes}
        renderItem={renderSchemeItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.schemeList}
      />
    </View>
        </ImageBackground>
      
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  },
  schemeList: {
    width: '100%',
  },
  schemeItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  schemeItemText: {
    fontSize: 18,
    color:'white'
  },
});

export default Schemes;
