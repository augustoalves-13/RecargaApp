import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import MoreViews from "../../../component/Buttons/MoreViews";
import { AntDesign } from '@expo/vector-icons';
import { Path, Svg } from "react-native-svg";
import BackButton from "../../../component/Buttons/BackButton";

export default function NotificationScreen() {

    function Arrow() {
        return (
            <AntDesign name="arrowright" size={24} color="black" />
        )
    }



    let arr = [
        {
            id: 1, SvgImg: (
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" >
                    <Path fillRule="evenodd" clipRule="evenodd" d="M15 27.9545C22.1546 27.9545 27.9545 22.1546 27.9545 15C27.9545 7.8454 22.1546 2.04545 15 2.04545C7.8454 2.04545 2.04545 7.8454 2.04545 15C2.04545 22.1546 7.8454 27.9545 15 27.9545ZM15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="black" fillOpacity="0.4" />
                    <Path d="M16.7713 15.2233C18.0616 16.005 19 17.0099 19 18.4839V19.1315C18.9765 20.8734 17.9208 22.2357 15.8094 22.5037V23.4194C15.8094 23.799 15.5982 24 15.1994 24H14.9413C14.5425 24 14.3314 23.799 14.3314 23.4194V22.5261C12.0557 22.3027 11 20.8958 11 19.0645V18.7072C11 18.3499 11.2111 18.1489 11.5865 18.1489H12.0088C12.3842 18.1489 12.5953 18.3275 12.5953 18.7072V19.0645C12.5953 20.3375 13.2991 21.1861 14.9883 21.1861C16.6774 21.1861 17.4282 20.3375 17.4282 19.0422V18.8412C17.4047 17.5682 16.8886 17.0323 15.8094 16.3623L13.393 14.9107C12.1261 14.1514 11.1173 13.0124 11.1173 11.4491V10.9355C11.1173 9.12655 12.0792 7.74194 14.261 7.49628V6.55831C14.261 6.20099 14.4487 6 14.8475 6H15.1056C15.5044 6 15.7155 6.20099 15.7155 6.55831V7.49628C17.9208 7.7196 18.9062 9.10422 18.9062 10.9355V11.1365C18.9062 11.4938 18.695 11.6948 18.3196 11.6948H17.8974C17.522 11.6948 17.3109 11.4938 17.3109 11.1365V10.9578C17.3109 9.66253 16.7009 8.8139 15.0117 8.8139C13.2991 8.8139 12.6891 9.66253 12.6891 10.9578V11.2258C12.6891 12.5211 13.3226 13.1464 14.3548 13.7717L16.7713 15.2233Z" fill="black" fillOpacity="0.4" />
                </Svg>
            )
        },
        {
            id: 1, SvgImg: (
                <Svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                    <Path d="M10.9375 25C12.6621 25 14.0611 23.6011 14.0611 21.875H7.814C7.814 23.6011 9.21292 25 10.9375 25ZM21.4546 17.6899C20.5113 16.6763 18.7461 15.1514 18.7461 10.1562C18.7461 6.3623 16.086 3.3252 12.4991 2.58008V1.5625C12.4991 0.699707 11.7998 0 10.9375 0C10.0752 0 9.37601 0.699707 9.37601 1.5625V2.58008C5.7891 3.3252 3.12894 6.3623 3.12894 10.1562C3.12894 15.1514 1.3638 16.6763 0.420444 17.6899C0.127475 18.0049 -0.00240765 18.3813 3.37592e-05 18.75C0.00540485 19.5508 0.633823 20.3125 1.56742 20.3125H20.3077C21.2412 20.3125 21.8702 19.5508 21.875 18.75C21.8775 18.3813 21.7476 18.0044 21.4546 17.6899Z" fill="rgba(0,0,0,0.4)"  />
                </Svg>
            )
        },
    ]

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Dúvidas frequentes'
                    />
                    <View style={{ width: '80%', alignItems: "center", height: '70%', borderTopColor: '#606060', borderTopWidth: 2 }}>
                        {arr.map((item) => (
                            <MoreViews
                                txt='Sua recarga de R100,00, no cartão 1234 foi realizada com sucesso'
                                img={item.SvgImg}
                            />
                        ))}
                    </View>
                </View>
                <BackButton />
            </View>
        </View>
    )
}