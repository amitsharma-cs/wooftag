import AssignWoofTag from '../screens/assignWooftagScreen/AssignWoofTag';
import CreatePet from '../screens/createPet/CreatePet';
import EmailVerifyScreen from '../screens/emailVerification/EmailVerifyScreen';
import ForgotPassword from '../screens/forgotPassword/forgotPassword';
import HomeScreen from '../screens/home/Home';
import MapScreen from '../screens/locationMap/MapView';
import LoginScreen from '../screens/login/LoginScreen';
import NotificationScreen from '../screens/notification/Notification';
import Splash from '../screens/onboarding/splash/Splash';
import WelcomeScreen from '../screens/onboarding/welcome/Welcome';
import OtpVerificationScreen from '../screens/otp/OtpVerificationScreen';
import PetProfile from '../screens/petProfile/PetProfile';
import AddAddress from '../screens/petProfile/subScreens/AddAddress';
import AddPhoneNumber from '../screens/petProfile/subScreens/AddPhoneNumber';
import AddressScreen from '../screens/petProfile/subScreens/AddressScreen';
import HealthInfoScreen from '../screens/petProfile/subScreens/HealthInfoScreen';
import PetBehaviourScreen from '../screens/petProfile/subScreens/PetBehaviourScreen';
import PetDetails from '../screens/petProfile/subScreens/PetDetail';
import PhoneNumberScreen from '../screens/petProfile/subScreens/PhoneNumberScreen';
import VetRegisteration from '../screens/petProfile/subScreens/VetRegisteration';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import ActivateWooftagScreen from '../screens/scanner/ActivateWooftag';
import ScannerScreen from '../screens/scanner/Scanner';
import ScanNfcScreen from '../screens/scanner/ScanNfc';
import ScanWooftagScreen from '../screens/scanner/ScanWooftag';
import WoofTagNaming from '../screens/scanner/WoofTagNaming';
import DataSubjectRequest from '../screens/settings/DataSubjectRequest';
import SettingScreen from '../screens/settings/Settings';
import UserAccount from '../screens/settings/UserAccount';
import CreateAccount from '../screens/signUp/createAccount/CreateAccount';
import SocialLogins from '../screens/signUp/socialLogin/SocialLogins';
import WoofTag from '../screens/woofTag/WoofTag';
import AuthStackNavigator from './stack/AuthStackNavigator';
import UnAuthStackNavigator from './stack/UnAuthStackNavigator';
import HomeTabs from './tabs/HomeTabs';
import NotifyTabs from './tabs/NotifyTabs';
import ScannerTabs from './tabs/ScannerTabs';
import ProfileTabs from './tabs/SettingTabs';

export const unAuthStack = {
  name: 'unAuthStack' as never,
  component: UnAuthStackNavigator,
};

export const AuthStack = {
  name: 'AuthStack' as never,
  component: AuthStackNavigator,
};

export const tabRoutesName = {
  homeTab: {
    name: 'homeTab' as never,
    component: HomeTabs,
  },
  settingTab: {
    name: 'profileTab' as never,
    component: ProfileTabs,
  },
  notifyTab: {
    name: 'notifyTab' as never,
    component: NotifyTabs,
  },
  scanTab: {
    name: 'scanTab' as never,
    component: ScannerTabs,
  },
};

export default {
  splashPage: {
    name: 'Splash' as never,
    component: Splash,
  },
  welcomePage: {
    name: 'WelcomeScreen' as never,
    component: WelcomeScreen,
  },
  loginPage: {
    name: 'LoginScreen' as never,
    component: LoginScreen,
  },
  singUpPage: {
    name: 'singUpScreen' as never,
    component: SocialLogins,
  },
  createAccountPage: {
    name: 'createAccountScreen' as never,
    component: CreateAccount,
  },
  otpVerficationPage: {
    name: 'OtpVerificationScreen' as never,
    component: OtpVerificationScreen,
  },
  forgotPasswordPage: {
    name: 'ForgotPassword' as never,
    component: ForgotPassword,
  },
  emailVerifyPage: {
    name: 'EmailVerifyScreen' as never,
    component: EmailVerifyScreen,
  },
  resetPasswordPage: {
    name: 'ResetPassword' as never,
    component: ResetPassword,
  },
  homePage: {
    name: 'HomeScreen' as never,
    component: HomeScreen,
  },
  petProfilePage: {
    name: 'PetProfile' as never,
    component: PetProfile,
  },
  createPetPage: {
    name: 'CreatePet' as never,
    component: CreatePet,
  },
  settingPage: {
    name: 'SettingScreen' as never,
    component: SettingScreen,
  },
  notificationPage: {
    name: 'NotificationScreen' as never,
    component: NotificationScreen,
  },
  scannerPage: {
    name: 'ScannerScreen' as never,
    component: ScannerScreen,
  },
  locationMapPage: {
    name: 'MapScreen' as never,
    component: MapScreen,
  },
  userAccountPage: {
    name: 'UserAccount' as never,
    component: UserAccount,
  },
  dataSubjectRequestPage: {
    name: 'DataSubjectRequest' as never,
    component: DataSubjectRequest,
  },
  activateWooftagPage: {
    name: 'ActivateWooftagScreen' as never,
    component: ActivateWooftagScreen,
  },
  scanWooftagPage: {
    name: 'ScanWooftagScreen' as never,
    component: ScanWooftagScreen,
  },
  scanNfcPage: {
    name: 'ScanNfcScreen' as never,
    component: ScanNfcScreen,
  },
  petDetails: {
    name: 'petDetails' as never,
    component: PetDetails,
  },
  phoneNumberScreen: {
    name: 'phoneNumberScreen' as never,
    component: PhoneNumberScreen,
  },
  addressScreen: {
    name: 'addressScreen' as never,
    component: AddressScreen,
  },
  addAddress: {
    name: 'addAddress' as never,
    component: AddAddress,
  },
  healthInfoScreen: {
    name: 'healthInfoScreen' as never,
    component: HealthInfoScreen,
  },
  addPhoneNumber: {
    name: 'addPhoneNumber' as never,
    component: AddPhoneNumber,
  },
  vetRegisteration: {
    name: 'vetRegisteration' as never,
    component: VetRegisteration,
  },
  WoofTag: {
    name: 'WoofTag' as never,
    component: WoofTag,
  },
  petBehaviourScreens: {
    name: 'petBehaviourScreen' as never,
    component: PetBehaviourScreen,
  },
  assignWoofTagScreen: {
    name: 'assignWoofTagScreen' as never,
    component: AssignWoofTag,
  },
  wooftagNamingScreen: {
    name: 'wooftagNamingScreen' as never,
    component: WoofTagNaming,
  },
};
