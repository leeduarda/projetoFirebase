import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet, TextInput, Modal, Linking, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import stylePrincipal from './stylePrincipal';



const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [showCamera, setShowCamera] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  const profileImages = [
    'https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?w=740&t=st=1702344090~exp=1702344690~hmac=4d024f7e30c001d4071d792bb07ccef754c479ed4be4028eabdb2270186bebf2',
    'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1702344169~exp=1702344769~hmac=2a2f45bcfda7abc4a3acb8d9034e9c573ad0b3e9a926a928768f045e4502c42e',
    'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1702344249~exp=1702344849~hmac=e5adb183a3c6544d9cf1da05afb3611a81f7daaaa10dc03a41a9dfda801012d8',

  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const changeProfileImage = () => {
    
    if (currentImageIndex < profileImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      
      setCurrentImageIndex(0);
    }
  };



  let camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleOpenCamera = () => {
    setShowCamera(true);
  };

  const handleGoBack = () => {
    setShowCamera(false);
  };

  const handleToggleCamera = () => {
    setShowCamera(!showCamera);
  };

  const takePicture = async () => {
    if (camera) {
      try {
        const { uri } = await camera.takePictureAsync();
        console.log('Foto tirada:', uri);

        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync('MyAppPhotos', asset, false);
        console.log('Foto salva no armazenamento local');
      } catch (error) {
        console.error('Erro ao tirar a foto:', error);
      }
    }
  };

  const sendSMS = () => {
    const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const openMaps = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=';
    Linking.openURL(url);
  };

  const handleLoginCadastro = () => {
    setLoginModalVisible(true);
  };

  const [loggedInEmail, setLoggedInEmail] = useState('');

  const handleLogin = () => {

    setLoggedInEmail(email);
    setLoggedIn(true);
    setLoginModalVisible(false);

  };

  const handleGoogleLogin = () => {
    setLoggedIn(true);
    setLoginModalVisible(false);
  };

  const handleProfile = () => {
    setProfileModalVisible(true);
  };

  return (

    <View style={stylePrincipal.container}>
      <View style={stylePrincipal.Cabecalho}>
        <Text style={stylePrincipal.CabText}>Bem Vindo!</Text>
      </View>
      {!showCamera && !loggedIn && (
        <>
          <TouchableOpacity style={stylePrincipal.lButton} onPresss={handleLoginCadastro}>
            <Button title="Acessar perfil" onPress={handleProfile} />
            <View style={stylePrincipal.space}></View>
            <Button  title="Envie uma mensagem" onPress={toggleModal} />
            <View style={stylePrincipal.space}></View>
            <Button  title="Localização" onPress={openMaps} />
          </TouchableOpacity>      
          
        </>
      )}

      {loggedIn && (
        <TouchableOpacity style={stylePrincipal.profileButton} onPress={handleProfile}>
          <Text style={stylePrincipal.profileButtonText}>Perfil</Text>
        </TouchableOpacity>
      )}

      {
        showCamera && (
          <Camera style={stylePrincipal.camera} type={type} ref={(ref) => (camera = ref)}>
            <View style={stylePrincipal.cameraButtonsContainer}>
              <TouchableOpacity style={stylePrincipal.cameraButton} onPress={toggleCameraType}>
                <Text style={stylePrincipal.cameraButtonText}>Trocar câmera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={stylePrincipal.cameraButton} onPress={takePicture}>
                <Text style={stylePrincipal.cameraButtonText}>Foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={stylePrincipal.cameraButton} onPress={handleGoBack}>
                <Text style={stylePrincipal.cameraButtonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )
      }

      {
        showCamera || (
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}>
            <View style={stylePrincipal.modalContainer}>
              <View style={stylePrincipal.modalContent}>
                <Text style={stylePrincipal.modalText}>Configurar SMS</Text>
                <TextInput
                  style={stylePrincipal.input}
                  placeholder="Número de Telefone"
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                />
                <Button title="Enviar SMS" onPress={sendSMS} />
                <View style={stylePrincipal.space}></View>
                <Button title="Fechar" onPress={toggleModal} />
              </View>
            </View>
          </Modal>
        )
      }


      <Modal
        animationType="fade"
        transparent={true}
        visible={profileModalVisible}
        onRequestClose={() => setProfileModalVisible(false)}>
        <View style={stylePrincipal.profileModalContainer}>
          <View style={stylePrincipal.profileModalContent}>
            <Text style={stylePrincipal.modalText}>Perfil</Text>
            <Image source={{ uri: profileImages[currentImageIndex] }} style={stylePrincipal.profileImage} />
            <Text style={stylePrincipal.profileText}>Letícia Eduarda dos Santos</Text>
            <Text style={stylePrincipal.profileText}>Elenir Queiroz Ferreira</Text>

            <Button title="Trocar Imagem de Perfil" onPress={changeProfileImage} />
            <View style={stylePrincipal.space}></View>
            <Button title="Fechar" onPress={() => setProfileModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View >
  );
};


export default App;

