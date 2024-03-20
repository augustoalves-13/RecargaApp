import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseCardScreen from './src/screens/CardRegister/ChooseCardScreen';
import NameCardScreen from './src/screens/CardRegister/NameCardScreen';
import NumberCardScreen from './src/screens/CardRegister/NumberCardScreen';
import HomeScreen from './src/screens/HomeScreen';
import HomeMoreScreen from './src/screens/More/HomeMoreScreen';
import RecargaCellphoneHome from './src/screens/CellphoneRecarga/RecargaCellphoneHome';
import AddNumberScreen from './src/screens/CellphoneRecarga/AddNumberScreen';
import RecargaScreen from './src/screens/CellphoneRecarga/RecargaScreen';
import HomeRecargaScreen from './src/screens/Recarregar/HomeRecargaScreen';
import ValorRecarga from './src/screens/Recarregar/ValorRecarga';
import PagamentoScreen from './src/screens/Recarregar/PagamentoScreen';
import PixScreen from './src/screens/Pagamentos/PixScreen';
import SaveCard from './src/screens/Pagamentos/SaveCard';
import PerfilScreen from './src/screens/More/Perfil';
import ChangePassScreen from './src/screens/More/ChangePass/ChangePassScreen';
import ConsultaNFC from './src/screens/ConsultaPages/ConsultaNFC';
import ResponseConsultaScreen from './src/screens/ConsultaPages/ResponseConsulta';
import Pedidos from './src/screens/Pedidos/PedidosScreen';
import UseTermosScreen from './src/screens/More/Termos/UseTermosScreen';
import QuestionScreen from './src/screens/More/Questions/QuestionScreen';
import HomePaymentScreen from './src/screens/More/PaymentConfig/HomePaymentConfig';
import ChooseCard from './src/screens/PayCardCadastro/ChooseCard';
import NameCardPayScreen from './src/screens/PayCardCadastro/NameCardCadastro';
import NumberCardPay from './src/screens/PayCardCadastro/NumberCardPayment';
import DateCard from './src/screens/PayCardCadastro/DateCard';
import EditPaymentCard from './src/screens/More/PaymentConfig/EditPayment';
import CvvCard from './src/screens/PayCardCadastro/CvvCard';
import CellphonePagamentoScreen from './src/screens/CellphoneRecarga/CellphonePayment';
import SuccessFullScreen from './src/screens/SuccessFull/SucessFullScreen';
import SuccessFullScreenCellphone from './src/screens/SuccessFull/SuccessFullScreenCellphone';
import SaveCardCellphone from './src/screens/Pagamentos/SaveCardCellphone';
import CellphoneNumber from './src/screens/CellphoneRecarga/Cadastro/CellphoneNumber';
import CellphoneName from './src/screens/CellphoneRecarga/Cadastro/CellphoneName';
import SMSCellphone from './src/screens/CellphoneRecarga/Cadastro/SMSCellphone';
import NotificationScreen from './src/screens/More/Notifcation/Notification';
import LoginScreen from './src/screens/LoginPage';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#252525' barStyle='light-content' />
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ChooseCardScreen' component={ChooseCardScreen} options={{ headerShown: false }} />
        <Stack.Screen name='NameCardScreen' component={NameCardScreen} options={{ headerShown: false }} />
        <Stack.Screen name='NumberCardScreen' component={NumberCardScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ConsultaNfcScreen' component={ConsultaNFC} options={{ headerShown: false }} />
        <Stack.Screen name='ResponseConsultaNfcScreen' component={ResponseConsultaScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomeMoreScreen' component={HomeMoreScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RecargaCellphoneHome' component={RecargaCellphoneHome} options={{ headerShown: false }} />
        <Stack.Screen name='AddNumberScreen' component={AddNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RecargaScreen' component={RecargaScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomeRecargaScreen' component={HomeRecargaScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ValorRecargaScreen' component={ValorRecarga} options={{ headerShown: false }} />
        <Stack.Screen name='PagamentoScreen' component={PagamentoScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PixScreen' component={PixScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SaveCard' component={SaveCard} options={{ headerShown: false }} />
        <Stack.Screen name='PerfilScreen' component={PerfilScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ChangePassScreen' component={ChangePassScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PedidosScreen' component={Pedidos} options={{ headerShown: false }} />
        <Stack.Screen name='UseTermosScreen' component={UseTermosScreen} options={{ headerShown: false }} />
        <Stack.Screen name='QuestionScreen' component={QuestionScreen} options={{ headerShown: false }} />
        <Stack.Screen name='NotificationScreen' component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentHomeScreen' component={HomePaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ChooseCard' component={ChooseCard} options={{ headerShown: false }} />
        <Stack.Screen name='NameCardPayment' component={NameCardPayScreen} options={{ headerShown: false }} />
        <Stack.Screen name='NumberCardPayment' component={NumberCardPay} options={{ headerShown: false }} />
        <Stack.Screen name='DateCardScreen' component={DateCard} options={{ headerShown: false }} />
        <Stack.Screen name='EditCardPayment' component={EditPaymentCard} options={{ headerShown: false }} />
        <Stack.Screen name='CvvCard' component={CvvCard} options={{ headerShown: false }} />
        <Stack.Screen name='CellphonePagamentoScreen' component={CellphonePagamentoScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SaveCardCellphone' component={SaveCardCellphone} options={{ headerShown: false }} />
        <Stack.Screen name='SuccessFullScreen' component={SuccessFullScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SuccessFullScreenCellphone' component={SuccessFullScreenCellphone} options={{ headerShown: false }} />
        <Stack.Screen name='CellphoneNumberScreen' component={CellphoneNumber} options={{ headerShown: false }} />
        <Stack.Screen name='CellphoneNameScreen' component={CellphoneName} options={{ headerShown: false }} />
        <Stack.Screen name='SMSCellphoneScreen' component={SMSCellphone} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
