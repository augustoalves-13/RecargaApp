import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdicionarBilheteScreen from './src/pages/CardCadastro/AdicionarBilheteScreen';
import NameCardScreen from './src/pages/CardCadastro/NameCardScreen';
import NumberCardScreen from './src/pages/CardCadastro/NumberCardScreen';
import HomeScreen from './src/pages/HomeScreen';
import HomeMoreScreen from './src/pages/More/HomeMoreScreen';
import RecargaCellphoneHome from './src/pages/CellphoneRecarga/RecargaCellphoneHome';
import AddNumberScreen from './src/pages/CellphoneRecarga/AddNumberScreen';
import RecargaScreen from './src/pages/CellphoneRecarga/RecargaScreen';
import HomeRecargaScreen from './src/pages/Recarregar/HomeRecargaScreen';
import ValorRecarga from './src/pages/Recarregar/ValorRecarga';
import PagamentoScreen from './src/pages/Recarregar/PagamentoScreen';
import PixScreen from './src/pages/Pagamentos/PixScreen';
import SaveCard from './src/pages/Pagamentos/SaveCard';
import PerfilScreen from './src/pages/More/Perfil';
import ChangePassScreen from './src/pages/More/ChangePass/ChangePassScreen';
import ConsultaNFC from './src/pages/ConsultaPages/ConsultaNFC';
import ResponseConsultaScreen from './src/pages/ConsultaPages/ResponseConsulta';
import Pedidos from './src/pages/Pedidos/PedidosScreen';
import UseTermosScreen from './src/pages/More/Termos/UseTermosScreen';
import QuestionScreen from './src/pages/More/Questions/QuestionScreen';
import HomePaymentScreen from './src/pages/More/PaymentConfig/HomePaymentConfig';
import ChooseCard from './src/pages/PayCardCadastro/ChooseCard';
import NameCardPayScreen from './src/pages/PayCardCadastro/NameCardCadastro';
import NumberCardPay from './src/pages/PayCardCadastro/NumberCardPayment';
import DateCard from './src/pages/PayCardCadastro/DateCard';
import EditPaymentCard from './src/pages/More/PaymentConfig/EditPayment';
import CvvCard from './src/pages/PayCardCadastro/CvvCard';
import CellphonePagamentoScreen from './src/pages/CellphoneRecarga/CellphonePayment';
import SuccessFullScreen from './src/pages/SuccessFull/SucessFullScreen';
import SuccessFullScreenCellphone from './src/pages/SuccessFull/SuccessFullScreenCellphone';
import SaveCardCellphone from './src/pages/Pagamentos/SaveCardCellphone';
import CellphoneNumber from './src/pages/CellphoneRecarga/Cadastro/CellphoneNumber';
import CellphoneName from './src/pages/CellphoneRecarga/Cadastro/CellphoneName';
import SMSCellphone from './src/pages/CellphoneRecarga/Cadastro/SMSCellphone';
import NotificationScreen from './src/pages/More/Notifcation/Notification';
import LoginScreen from './src/pages/LoginPage';
import CadastroUser from './src/CadastroUser/CadastroUser';
import CreatePassword from './src/CadastroUser/CreatePassword';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#252525' barStyle='light-content' />
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='AdicionarBilheteScreen' component={AdicionarBilheteScreen} options={{ headerShown: false }} />
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
        <Stack.Screen name='CadastroScreen' component={CadastroUser} options={{ headerShown: false }} />
        <Stack.Screen name='CreatePasswordScreen' component={CreatePassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
