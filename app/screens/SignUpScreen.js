import React, { useContext, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Snackbar, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Logo from "../components/Logo";
import styled from "styled-components";
import colors from "../config/colors";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import ErrorMessage from "../components/ErrorMessage";
import { AuthContext } from "../context/auth";
import { signInWithGoogleAsync } from "../utils/oauth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(3).label("First Name"),
  lastName: Yup.string().required().min(3).label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={{ width: "100%", height: "100%" }}>
      <ActivityIndicator visible={loading} />
      <Container>
        <ImageBackground
          source={require("../assets/splash-1.png")}
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        />
        <View
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.5,
          }}
        />
        <Modal style={styles.modal}>
          <Logo top={50} />
          <Header>Sign Up</Header>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            onSubmit={(user) => {
              setLoading(true);
              register(user)
                .then(() => {
                  setLoading(false);
                  navigation.navigate("Loading");
                })
                .catch((err) => {
                  setLoading(false);
                  Alert.alert(err.message);
                  navigation.replace("Welcome");
                });
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <CustomTextInput
                  type="outlined"
                  label="First Name"
                  placeholder="Enter First Name..."
                  onBlur={() => setFieldTouched("firstName")}
                  onChangeText={handleChange("firstName")}
                  left={
                    <TextInput.Icon
                      name={() => (
                        <MaterialCommunityIcons
                          name="email"
                          size={24}
                          color="black"
                        />
                      )}
                    />
                  }
                />
                <ErrorMessage
                  error={errors.firstName}
                  visible={touched.firstName}
                />
                <CustomTextInput
                  type="outlined"
                  label="Last Name"
                  placeholder="Enter Last Name..."
                  onBlur={() => setFieldTouched("lastName")}
                  onChangeText={handleChange("lastName")}
                  left={
                    <TextInput.Icon
                      name={() => (
                        <MaterialCommunityIcons
                          name="email"
                          size={24}
                          color="black"
                        />
                      )}
                    />
                  }
                />
                <ErrorMessage
                  error={errors.lastName}
                  visible={touched.lastName}
                />
                <CustomTextInput
                  type="outlined"
                  label="Email"
                  placeholder="Enter email..."
                  keyboardType="email-address"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  left={
                    <TextInput.Icon
                      name={() => (
                        <MaterialCommunityIcons
                          name="email"
                          size={24}
                          color="black"
                        />
                      )}
                    />
                  }
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <CustomTextInput
                  type="outlined"
                  label="Password"
                  placeholder="Enter Password..."
                  secureTextEntry={showPassword}
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  left={
                    <TextInput.Icon
                      name={() => (
                        <MaterialCommunityIcons
                          name="lock"
                          size={24}
                          color="black"
                        />
                      )}
                    />
                  }
                  right={
                    <TextInput.Icon
                      name={() =>
                        showPassword ? (
                          <MaterialCommunityIcons
                            name="eye-off"
                            size={24}
                            color="black"
                          />
                        ) : (
                          <MaterialCommunityIcons
                            name="eye"
                            size={24}
                            color="black"
                          />
                        )
                      }
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                {/* <RemContainer>
                  <Checkbox
                    status={rememberMe ? "checked" : "unchecked"}
                    onPress={() => setRememberMe(!rememberMe)}
                    color={colors.primary}
                  />
                  <RememberMe>Remember Me</RememberMe>
                </RemContainer> */}
                <CustomButton onPress={handleSubmit}>Submit</CustomButton>
                <CustomButton
                  onPress={() => {
                    signInWithGoogleAsync().then(() =>
                      navigation.navigate("Loading")
                    );
                  }}
                >
                  Sign Up With Google
                </CustomButton>
              </>
            )}
          </Formik>
        </Modal>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    margin: 10,
  },
  modal: {
    elevation: 50,
  },
});

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const Modal = styled.View`
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.8;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.Text`
  color: ${colors.primary};
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
  padding-top: 0;
`;

const Button = styled.View`
  width: 295px;
  height: 50px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

const RemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 50px;
`;

const RememberMe = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export default SignUpScreen;
