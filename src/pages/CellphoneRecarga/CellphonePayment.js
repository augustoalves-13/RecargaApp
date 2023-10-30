import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import CardAdd from "../../component/Card/CardAdd";
import PayButton from "../../component/Buttons/PayButton";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import HomeButton from "../../component/Buttons/HomeButton";
import BackButton from "../../component/Buttons/BackButton";
import CellphoneCard from "../../component/Card/CellphoneCard";
import { Path, Svg } from "react-native-svg";

export default function CellphonePagamentoScreen({ route, navigation }) {

    const { selectedItem, value } = route.params

    return (
        <View style={StylesComponent.container}>
            <View style={[StylesComponent.boxContent, { height: "95%" }]}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Recarga'
                        subTxt='Como prefere pagar'
                    />
                    <CellphoneCard
                        number={selectedItem.numero}
                        title={selectedItem.nome}
                        imageSource={selectedItem.img}
                    />
                </View>
                <View style={{ width: '100%', height: '40%',alignItems: "center", justifyContent:"center" , gap: 10 }}>
                    <PayButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="10%" height="60%" viewBox="0 0 40 40" fill="none">
                                <Path d="M7.68935e-06 15.5556V2.22223C7.68935e-06 1.5926 0.213341 1.06445 0.640008 0.637785C1.06667 0.211119 1.59408 -0.00147379 2.22223 7.68935e-06H15.5556C16.1852 7.68935e-06 16.7133 0.213341 17.14 0.640008C17.5667 1.06667 17.7793 1.59408 17.7778 2.22223V15.5556C17.7778 16.1852 17.5644 16.7133 17.1378 17.14C16.7111 17.5667 16.1837 17.7793 15.5556 17.7778H2.22223C1.5926 17.7778 1.06445 17.5644 0.637785 17.1378C0.211119 16.7111 -0.00147379 16.1837 7.68935e-06 15.5556ZM4.44445 13.3333H13.3333V4.44445H4.44445V13.3333ZM7.68935e-06 37.7778V24.4444C7.68935e-06 23.8148 0.213341 23.2867 0.640008 22.86C1.06667 22.4333 1.59408 22.2207 2.22223 22.2222H15.5556C16.1852 22.2222 16.7133 22.4356 17.14 22.8622C17.5667 23.2889 17.7793 23.8163 17.7778 24.4444V37.7778C17.7778 38.4074 17.5644 38.9355 17.1378 39.3622C16.7111 39.7889 16.1837 40.0015 15.5556 40H2.22223C1.5926 40 1.06445 39.7867 0.637785 39.36C0.211119 38.9333 -0.00147379 38.4059 7.68935e-06 37.7778ZM4.44445 35.5556H13.3333V26.6667H4.44445V35.5556ZM22.2222 15.5556V2.22223C22.2222 1.5926 22.4356 1.06445 22.8622 0.637785C23.2889 0.211119 23.8163 -0.00147379 24.4444 7.68935e-06H37.7778C38.4074 7.68935e-06 38.9355 0.213341 39.3622 0.640008C39.7889 1.06667 40.0015 1.59408 40 2.22223V15.5556C40 16.1852 39.7867 16.7133 39.36 17.14C38.9333 17.5667 38.4059 17.7793 37.7778 17.7778H24.4444C23.8148 17.7778 23.2867 17.5644 22.86 17.1378C22.4333 16.7111 22.2207 16.1837 22.2222 15.5556ZM26.6667 13.3333H35.5556V4.44445H26.6667V13.3333ZM35.5556 40V35.5556H40V40H35.5556ZM22.2222 26.6667V22.2222H26.6667V26.6667H22.2222ZM26.6667 31.1111V26.6667H31.1111V31.1111H26.6667ZM22.2222 35.5556V31.1111H26.6667V35.5556H22.2222ZM26.6667 40V35.5556H31.1111V40H26.6667ZM31.1111 35.5556V31.1111H35.5556V35.5556H31.1111ZM31.1111 26.6667V22.2222H35.5556V26.6667H31.1111ZM35.5556 31.1111V26.6667H40V31.1111H35.5556Z" fill="#252525" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate("PixScreen", { value })}
                        title='Pix'
                    />
                    <PayButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="10%" height="60%" viewBox="0 0 50 40" fill="none">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.03571 3.57143C5.57016 3.57143 3.57143 5.57016 3.57143 8.03571V31.25C3.57143 33.7156 5.57016 35.7143 8.03571 35.7143H41.9643C44.4298 35.7143 46.4286 33.7156 46.4286 31.25V8.03571C46.4286 5.57016 44.4298 3.57143 41.9643 3.57143H8.03571ZM0 8.03571C0 3.59771 3.59771 0 8.03571 0H41.9643C46.4023 0 50 3.59771 50 8.03571V31.25C50 35.688 46.4023 39.2857 41.9643 39.2857H8.03571C3.59771 39.2857 0 35.688 0 31.25V8.03571Z" fill="#252525" />
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M48.2143 15.8482H1.78571V9.15179H48.2143V15.8482ZM7.36607 24.5536C7.36607 22.7044 8.86512 21.2054 10.7143 21.2054H16.0714C17.9206 21.2054 19.4196 22.7044 19.4196 24.5536V26.7857C19.4196 28.6349 17.9206 30.1339 16.0714 30.1339H10.7143C8.86512 30.1339 7.36607 28.6349 7.36607 26.7857V24.5536Z" fill="#252525" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate("SaveCardCellphone", { value, selectedItem })}
                        title='Débito'
                    />
                    <PayButton
                        SvgImg={
                            <Svg xmlns="http://www.w3.org/2000/svg" width="10%" height="60%" viewBox="0 0 50 40" fill="none">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.03571 3.57143C5.57016 3.57143 3.57143 5.57016 3.57143 8.03571V31.25C3.57143 33.7156 5.57016 35.7143 8.03571 35.7143H41.9643C44.4298 35.7143 46.4286 33.7156 46.4286 31.25V8.03571C46.4286 5.57016 44.4298 3.57143 41.9643 3.57143H8.03571ZM0 8.03571C0 3.59771 3.59771 0 8.03571 0H41.9643C46.4023 0 50 3.59771 50 8.03571V31.25C50 35.688 46.4023 39.2857 41.9643 39.2857H8.03571C3.59771 39.2857 0 35.688 0 31.25V8.03571Z" fill="#252525" />
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M48.2143 15.8482H1.78571V9.15179H48.2143V15.8482ZM7.36607 24.5536C7.36607 22.7044 8.86512 21.2054 10.7143 21.2054H16.0714C17.9206 21.2054 19.4196 22.7044 19.4196 24.5536V26.7857C19.4196 28.6349 17.9206 30.1339 16.0714 30.1339H10.7143C8.86512 30.1339 7.36607 28.6349 7.36607 26.7857V24.5536Z" fill="#252525" />
                            </Svg>
                        }
                        onPress={() => navigation.navigate("SaveCardCellphone", { value, selectedItem })}
                        title='Crédito'
                    />
                </View>
                <BackButton />
            </View>
        </View>
    )
}