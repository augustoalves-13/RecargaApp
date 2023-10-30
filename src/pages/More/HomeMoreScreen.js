import { StyleSheet, View } from "react-native"
import StylesComponent from "../../styles/StylesComponent"
import MoreButton from "../../component/Buttons/MoreButton"
import Footer from "../../component/Footer/Footer"
import { Path, Svg } from "react-native-svg"

export default function HomeMoreScreen({ navigation }) {
    return (
        <View style={StylesComponent.containerHome}>
            <View style={[StylesComponent.boxContentHome, { paddingTop: 70 }]}>
                <View style={{ width: '100%', alignItems: "center" }}>
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <Path d="M17.1418 13.4605C18.3733 12.4916 19.2722 11.1629 19.7135 9.65926C20.1547 8.15565 20.1163 6.55189 19.6036 5.07112C19.0909 3.59035 18.1294 2.30619 16.8529 1.39731C15.5764 0.488418 14.0484 0 12.4814 0C10.9144 0 9.3863 0.488418 8.1098 1.39731C6.8333 2.30619 5.87182 3.59035 5.35914 5.07112C4.84645 6.55189 4.80806 8.15565 5.24928 9.65926C5.69051 11.1629 6.58943 12.4916 7.82097 13.4605C5.7107 14.306 3.86941 15.7082 2.49341 17.5178C1.1174 19.3274 0.258263 21.4765 0.00757703 23.736C-0.0105689 23.901 0.0039549 24.0679 0.0503188 24.2272C0.0966828 24.3866 0.173979 24.5352 0.277794 24.6647C0.487459 24.9262 0.792413 25.0937 1.12557 25.1303C1.45873 25.167 1.7928 25.0698 2.05429 24.8601C2.31578 24.6505 2.48327 24.3455 2.51992 24.0124C2.79576 21.5568 3.96664 19.2889 5.80886 17.642C7.65107 15.9952 10.0355 15.0848 12.5065 15.0848C14.9775 15.0848 17.3619 15.9952 19.2041 17.642C21.0463 19.2889 22.2172 21.5568 22.4931 24.0124C22.5272 24.321 22.6745 24.6061 22.9065 24.8126C23.1385 25.019 23.4387 25.1322 23.7492 25.1303H23.8874C24.2167 25.0925 24.5177 24.926 24.7247 24.6671C24.9318 24.4083 25.0282 24.0781 24.9928 23.7486C24.741 21.4827 23.8772 19.3281 22.4941 17.5157C21.1111 15.7033 19.2608 14.3015 17.1418 13.4605ZM12.4814 12.5686C11.4876 12.5686 10.5161 12.2739 9.6898 11.7218C8.86349 11.1697 8.21947 10.3849 7.83916 9.4668C7.45885 8.54866 7.35935 7.53836 7.55323 6.56367C7.74711 5.58898 8.22566 4.69366 8.92838 3.99095C9.63109 3.28823 10.5264 2.80968 11.5011 2.6158C12.4758 2.42192 13.4861 2.52142 14.4042 2.90173C15.3224 3.28204 16.1071 3.92606 16.6592 4.75237C17.2114 5.57868 17.5061 6.55015 17.5061 7.54394C17.5061 8.87657 16.9767 10.1546 16.0344 11.0969C15.092 12.0392 13.814 12.5686 12.4814 12.5686Z" fill="#606060" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate('PerfilScreen')}
                        title='Perfil'
                        width={2}
                    />
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21" fill="none">
                                <Path d="M30 1.875V20.625H1.875V16.875H0V0H26.25V1.875H30ZM22.5 1.875C22.5 2.13867 22.5488 2.38281 22.6465 2.60742C22.7441 2.83203 22.876 3.02734 23.042 3.19336C23.208 3.35938 23.4082 3.49609 23.6426 3.60352C23.877 3.71094 24.1211 3.75977 24.375 3.75V1.875H22.5ZM1.875 3.75C2.13867 3.75 2.38281 3.70117 2.60742 3.60352C2.83203 3.50586 3.02734 3.37402 3.19336 3.20801C3.35938 3.04199 3.49609 2.8418 3.60352 2.60742C3.71094 2.37305 3.75977 2.12891 3.75 1.875H1.875V3.75ZM1.875 11.25C2.39258 11.25 2.87598 11.3477 3.3252 11.543C3.77441 11.7383 4.1748 12.0068 4.52637 12.3486C4.87793 12.6904 5.14648 13.0859 5.33203 13.5352C5.51758 13.9844 5.61523 14.4727 5.625 15H20.625C20.625 14.4824 20.7227 13.999 20.918 13.5498C21.1133 13.1006 21.3818 12.7002 21.7236 12.3486C22.0654 11.9971 22.4609 11.7285 22.9102 11.543C23.3594 11.3574 23.8477 11.2598 24.375 11.25V5.625C23.8574 5.625 23.374 5.52734 22.9248 5.33203C22.4756 5.13672 22.0752 4.86816 21.7236 4.52637C21.3721 4.18457 21.1035 3.78906 20.918 3.33984C20.7324 2.89062 20.6348 2.40234 20.625 1.875H5.625C5.625 2.39258 5.52734 2.87598 5.33203 3.3252C5.13672 3.77441 4.86816 4.1748 4.52637 4.52637C4.18457 4.87793 3.78906 5.14648 3.33984 5.33203C2.89062 5.51758 2.40234 5.61523 1.875 5.625V11.25ZM24.375 13.125C24.1113 13.125 23.8672 13.1738 23.6426 13.2715C23.418 13.3691 23.2227 13.501 23.0566 13.667C22.8906 13.833 22.7539 14.0332 22.6465 14.2676C22.5391 14.502 22.4902 14.7461 22.5 15H24.375V13.125ZM1.875 15H3.75C3.75 14.7363 3.70117 14.4922 3.60352 14.2676C3.50586 14.043 3.37402 13.8477 3.20801 13.6816C3.04199 13.5156 2.8418 13.3789 2.60742 13.2715C2.37305 13.1641 2.12891 13.1152 1.875 13.125V15ZM28.125 3.75H26.25V16.875H3.75V18.75H28.125V3.75ZM6.5625 9.375C6.30859 9.375 6.08887 9.28223 5.90332 9.09668C5.71777 8.91113 5.625 8.69141 5.625 8.4375C5.625 8.18359 5.71777 7.96387 5.90332 7.77832C6.08887 7.59277 6.30859 7.5 6.5625 7.5C6.81641 7.5 7.03613 7.59277 7.22168 7.77832C7.40723 7.96387 7.5 8.18359 7.5 8.4375C7.5 8.69141 7.40723 8.91113 7.22168 9.09668C7.03613 9.28223 6.81641 9.375 6.5625 9.375ZM19.6875 9.375C19.4336 9.375 19.2139 9.28223 19.0283 9.09668C18.8428 8.91113 18.75 8.69141 18.75 8.4375C18.75 8.18359 18.8428 7.96387 19.0283 7.77832C19.2139 7.59277 19.4336 7.5 19.6875 7.5C19.9414 7.5 20.1611 7.59277 20.3467 7.77832C20.5322 7.96387 20.625 8.18359 20.625 8.4375C20.625 8.69141 20.5322 8.91113 20.3467 9.09668C20.1611 9.28223 19.9414 9.375 19.6875 9.375ZM13.125 13.125C12.6074 13.125 12.124 13.0273 11.6748 12.832C11.2256 12.6367 10.8252 12.3682 10.4736 12.0264C10.1221 11.6846 9.85352 11.2891 9.66797 10.8398C9.48242 10.3906 9.38477 9.90234 9.375 9.375V7.5C9.375 6.98242 9.47266 6.49902 9.66797 6.0498C9.86328 5.60059 10.1318 5.2002 10.4736 4.84863C10.8154 4.49707 11.2109 4.22852 11.6602 4.04297C12.1094 3.85742 12.5977 3.75977 13.125 3.75C13.6426 3.75 14.126 3.84766 14.5752 4.04297C15.0244 4.23828 15.4248 4.50684 15.7764 4.84863C16.1279 5.19043 16.3965 5.58594 16.582 6.03516C16.7676 6.48438 16.8652 6.97266 16.875 7.5V9.375C16.875 9.89258 16.7773 10.376 16.582 10.8252C16.3867 11.2744 16.1182 11.6748 15.7764 12.0264C15.4346 12.3779 15.0391 12.6465 14.5898 12.832C14.1406 13.0176 13.6523 13.1152 13.125 13.125ZM11.25 9.375C11.25 9.63867 11.2988 9.88281 11.3965 10.1074C11.4941 10.332 11.626 10.5273 11.792 10.6934C11.958 10.8594 12.1582 10.9961 12.3926 11.1035C12.627 11.2109 12.8711 11.2598 13.125 11.25C13.3887 11.25 13.6328 11.2012 13.8574 11.1035C14.082 11.0059 14.2773 10.874 14.4434 10.708C14.6094 10.542 14.7461 10.3418 14.8535 10.1074C14.9609 9.87305 15.0098 9.62891 15 9.375V7.5C15 7.23633 14.9512 6.99219 14.8535 6.76758C14.7559 6.54297 14.624 6.34766 14.458 6.18164C14.292 6.01562 14.0918 5.87891 13.8574 5.77148C13.623 5.66406 13.3789 5.61523 13.125 5.625C12.8613 5.625 12.6172 5.67383 12.3926 5.77148C12.168 5.86914 11.9727 6.00098 11.8066 6.16699C11.6406 6.33301 11.5039 6.5332 11.3965 6.76758C11.2891 7.00195 11.2402 7.24609 11.25 7.5V9.375Z" fill="#606060" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate('PaymentHomeScreen')}
                        title='Pagamentos'
                        width={2}
                    />
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                                <Path d="M10 24.375C11.375 24.375 12.5 23.25 12.5 21.875H7.5C7.5 23.25 8.625 24.375 10 24.375ZM17.5 16.875V10.625C17.5 6.7875 15.4625 3.575 11.875 2.725V1.875C11.875 0.8375 11.0375 0 10 0C8.9625 0 8.125 0.8375 8.125 1.875V2.725C4.55 3.575 2.5 6.775 2.5 10.625V16.875L0 19.375V20.625H20V19.375L17.5 16.875ZM15 18.125H5V10.625C5 7.525 6.8875 5 10 5C13.1125 5 15 7.525 15 10.625V18.125Z" fill="#606060" />
                            </Svg>
                        }
                        onPress={()=>navigation.navigate('NotificationScreen')}
                        title='Notificações'
                        width={2}
                    />
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <Path d="M16.7308 22.5C16.7308 22.8423 16.6293 23.1769 16.4391 23.4616C16.2489 23.7462 15.9786 23.968 15.6623 24.099C15.3461 24.23 14.9981 24.2643 14.6623 24.1975C14.3266 24.1307 14.0182 23.9659 13.7762 23.7238C13.5341 23.4818 13.3693 23.1734 13.3025 22.8377C13.2357 22.5019 13.27 22.1539 13.401 21.8377C13.532 21.5214 13.7538 21.2511 14.0384 21.0609C14.3231 20.8707 14.6577 20.7692 15 20.7692C15.459 20.7692 15.8993 20.9516 16.2238 21.2762C16.5484 21.6007 16.7308 22.041 16.7308 22.5ZM15 6.92308C11.8183 6.92308 9.23077 9.2524 9.23077 12.1154V12.6923C9.23077 12.9983 9.35234 13.2918 9.56873 13.5082C9.78512 13.7246 10.0786 13.8462 10.3846 13.8462C10.6906 13.8462 10.9841 13.7246 11.2005 13.5082C11.4169 13.2918 11.5385 12.9983 11.5385 12.6923V12.1154C11.5385 10.5288 13.0918 9.23077 15 9.23077C16.9082 9.23077 18.4615 10.5288 18.4615 12.1154C18.4615 13.7019 16.9082 15 15 15C14.694 15 14.4005 15.1216 14.1841 15.3379C13.9677 15.5543 13.8462 15.8478 13.8462 16.1538V17.3077C13.8462 17.6137 13.9677 17.9072 14.1841 18.1236C14.4005 18.34 14.694 18.4615 15 18.4615C15.306 18.4615 15.5995 18.34 15.8159 18.1236C16.0323 17.9072 16.1538 17.6137 16.1538 17.3077V17.2038C18.7846 16.7207 20.7692 14.6221 20.7692 12.1154C20.7692 9.2524 18.1817 6.92308 15 6.92308ZM30 15C30 17.9667 29.1203 20.8668 27.472 23.3335C25.8238 25.8003 23.4811 27.7229 20.7403 28.8582C17.9994 29.9935 14.9834 30.2906 12.0736 29.7118C9.16393 29.133 6.49119 27.7044 4.3934 25.6066C2.29562 23.5088 0.867006 20.8361 0.288227 17.9264C-0.290551 15.0166 0.00649927 12.0006 1.14181 9.25975C2.27713 6.51886 4.19971 4.17618 6.66645 2.52796C9.13319 0.879735 12.0333 0 15 0C18.977 0.00419974 22.7898 1.5859 25.602 4.39804C28.4141 7.21017 29.9958 11.023 30 15ZM27.6923 15C27.6923 12.4897 26.9479 10.0358 25.5533 7.94853C24.1586 5.86129 22.1764 4.23449 19.8571 3.27384C17.5379 2.31319 14.9859 2.06184 12.5239 2.55157C10.0618 3.04131 7.80024 4.25013 6.02519 6.02518C4.25014 7.80023 3.04131 10.0618 2.55158 12.5239C2.06184 14.9859 2.31319 17.5379 3.27384 19.8571C4.23449 22.1763 5.8613 24.1586 7.94854 25.5533C10.0358 26.9479 12.4897 27.6923 15 27.6923C18.365 27.6885 21.5912 26.35 23.9706 23.9706C26.35 21.5912 27.6885 18.365 27.6923 15Z" fill="#606060" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate('QuestionScreen')}
                        title='Duvidas Frequentes'
                        width={2}
                    />
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <Path d="M26.25 26.625C26.25 25.5 30 23.25 30 20.8125C30 18 27.375 15.75 24.1875 14.8125C25.5 13.3125 26.25 11.625 26.25 9.5625C26.25 4.3125 20.8125 0 13.875 0C7.3125 0 0 3.9375 0 9.5625C0 13.5 3 16.3125 4.3125 17.4375C4.125 19.6875 3.1875 20.625 3.1875 20.625L0.9375 22.5H3.75C6.75 22.5 9.1875 21.5625 10.6875 20.4375V20.8125C10.6875 24.5625 14.8125 27.5625 20.0625 27.5625H21.1875C21.9375 28.5 24.375 30.1875 27.5625 30.1875C27.75 30 26.25 29.25 26.25 26.625ZM13.875 1.875C19.6875 1.875 24.375 5.4375 24.375 9.5625C24.375 13.6875 19.5 17.25 13.5 17.25H11.4375L11.25 17.625C10.6875 18.375 8.4375 19.875 5.4375 20.4375C5.625 19.6875 5.625 18.5625 5.625 17.0625V16.5C3.75 15 1.6875 12.375 1.6875 9.75C1.6875 5.625 7.6875 1.875 13.875 1.875Z" fill="#606060" />
                            </Svg>
                        }
                        title='Atendimento Online'
                        width={2}
                    />
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <Path d="M22.5 2.5C23.163 2.5 23.7989 2.76339 24.2678 3.23223C24.7366 3.70107 25 4.33696 25 5V19.4825C24.9999 20.1455 24.7364 20.7813 24.2675 21.25L18.75 26.7675C18.2813 27.2364 17.6455 27.4999 16.9825 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5H22.5ZM22.5 5H7.5V25H15V19.375C15 18.8777 15.1975 18.4008 15.5492 18.0492C15.9008 17.6975 16.3777 17.5 16.875 17.5H22.5V5ZM21.9825 20H17.5V24.4825L21.9825 20ZM12.5 13.75C12.8315 13.75 13.1495 13.8817 13.3839 14.1161C13.6183 14.3505 13.75 14.6685 13.75 15C13.75 15.3315 13.6183 15.6495 13.3839 15.8839C13.1495 16.1183 12.8315 16.25 12.5 16.25H11.25C10.9185 16.25 10.6005 16.1183 10.3661 15.8839C10.1317 15.6495 10 15.3315 10 15C10 14.6685 10.1317 14.3505 10.3661 14.1161C10.6005 13.8817 10.9185 13.75 11.25 13.75H12.5ZM18.75 8.75C19.0815 8.75 19.3995 8.8817 19.6339 9.11612C19.8683 9.35054 20 9.66848 20 10C20 10.3315 19.8683 10.6495 19.6339 10.8839C19.3995 11.1183 19.0815 11.25 18.75 11.25H11.25C10.9185 11.25 10.6005 11.1183 10.3661 10.8839C10.1317 10.6495 10 10.3315 10 10C10 9.66848 10.1317 9.35054 10.3661 9.11612C10.6005 8.8817 10.9185 8.75 11.25 8.75H18.75Z" fill="#606060" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate('UseTermosScreen')}
                        title='Termos de uso'
                        width={2}
                    />
                    <MoreButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                                <Path d="M0 12.5C0 12.8315 0.131696 13.1495 0.366117 13.3839C0.600537 13.6183 0.918479 13.75 1.25 13.75H10.7375L7.8625 16.6125C7.74534 16.7287 7.65235 16.867 7.58889 17.0193C7.52542 17.1716 7.49275 17.335 7.49275 17.5C7.49275 17.665 7.52542 17.8284 7.58889 17.9807C7.65235 18.133 7.74534 18.2713 7.8625 18.3875C7.9787 18.5047 8.11695 18.5977 8.26928 18.6611C8.4216 18.7246 8.58498 18.7572 8.75 18.7572C8.91502 18.7572 9.0784 18.7246 9.23072 18.6611C9.38305 18.5977 9.5213 18.5047 9.6375 18.3875L14.6375 13.3875C14.7513 13.2686 14.8405 13.1284 14.9 12.975C15.025 12.6707 15.025 12.3293 14.9 12.025C14.8405 11.8716 14.7513 11.7314 14.6375 11.6125L9.6375 6.6125C9.52095 6.49595 9.38259 6.4035 9.23031 6.34043C9.07803 6.27735 8.91482 6.24489 8.75 6.24489C8.58518 6.24489 8.42197 6.27735 8.26969 6.34043C8.11741 6.4035 7.97905 6.49595 7.8625 6.6125C7.74595 6.72905 7.6535 6.86741 7.59043 7.01969C7.52735 7.17197 7.49489 7.33518 7.49489 7.5C7.49489 7.66482 7.52735 7.82803 7.59043 7.98031C7.6535 8.13259 7.74595 8.27095 7.8625 8.3875L10.7375 11.25H1.25C0.918479 11.25 0.600537 11.3817 0.366117 11.6161C0.131696 11.8505 0 12.1685 0 12.5ZM16.25 0H3.75C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75V7.5C0 7.83152 0.131696 8.14946 0.366117 8.38388C0.600537 8.6183 0.918479 8.75 1.25 8.75C1.58152 8.75 1.89946 8.6183 2.13388 8.38388C2.3683 8.14946 2.5 7.83152 2.5 7.5V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H16.25C16.5815 2.5 16.8995 2.6317 17.1339 2.86612C17.3683 3.10054 17.5 3.41848 17.5 3.75V21.25C17.5 21.5815 17.3683 21.8995 17.1339 22.1339C16.8995 22.3683 16.5815 22.5 16.25 22.5H3.75C3.41848 22.5 3.10054 22.3683 2.86612 22.1339C2.6317 21.8995 2.5 21.5815 2.5 21.25V17.5C2.5 17.1685 2.3683 16.8505 2.13388 16.6161C1.89946 16.3817 1.58152 16.25 1.25 16.25C0.918479 16.25 0.600537 16.3817 0.366117 16.6161C0.131696 16.8505 0 17.1685 0 17.5V21.25C0 22.2446 0.395088 23.1984 1.09835 23.9017C1.80161 24.6049 2.75544 25 3.75 25H16.25C17.2446 25 18.1984 24.6049 18.9017 23.9017C19.6049 23.1984 20 22.2446 20 21.25V3.75C20 2.75544 19.6049 1.80161 18.9017 1.09835C18.1984 0.395088 17.2446 0 16.25 0Z" fill="#606060" />
                            </Svg>
                        }
                        title='Desvinvular Conta'
                    />
                </View>
                <Footer />
            </View>
        </View>
    )
}
