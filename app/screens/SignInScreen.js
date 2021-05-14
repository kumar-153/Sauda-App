import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Logo from "../components/Logo";
import styled from "styled-components";
import colors from "../config/colors";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import ErrorMessage from "../components/ErrorMessage";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { signInWithGoogleAsync } from "../utils/oauth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function SignInScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { login } = useContext(AuthContext);
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Container>
        <Modal style={styles.modal}>
          <Logo />
          <Header>Sign In</Header>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(user) => {
              setLoading(true);
              login(user).then(() => {
                setLoading(false);
                navigation.navigate("Loading");
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
                  onBlur={() => setFieldTouched("password")}
                  secureTextEntry={showPassword}
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
                <CustomButton
                  onPress={() => {
                    setLoading(true);
                    signInWithGoogleAsync().then(() => {
                      setLoading(false);
                      navigation.navigate("Loading");
                    });
                  }}
                >
                  Sign In With Google
                </CustomButton>
                <CustomButton onPress={handleSubmit}>Submit</CustomButton>
              </>
            )}
          </Formik>
        </Modal>
      </Container>
    </>
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
  width: 355px;
  height: 600px;
  background: white;
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
  margin-bottom: 60px;
`;

const GoogleContainer = styled.View`
  width: 295px;
  height: 50px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const GoogleSignIn = styled.Text`
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

export default SignInScreen;
