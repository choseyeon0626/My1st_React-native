import { router, Stack, useLocalSearchParams } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { ScrollView, StyleSheet, View } from "react-native";

import Mybtn from "@/components/btn_md";
import ResultTextBody from "@/components/ResultTextBody";
import ResultTextBody2 from "@/components/ResultTextBody2";
import ResultTextTitle from "@/components/ResultTextTitle";

export default function ResultScreen() {
    let result;

    const { score } = useLocalSearchParams();

    const totalScore = Number(score);

    if (totalScore >= 42) {
        result = {
            name: "이안",
            title: "당신은 마법소녀 '이안'입니다.",
            description: "Watch me change the game! 거침없이 직진하는 당당한 주역",
            details: "망설임 없이 내 길을 개척하고, 어디서나 확신에 찬 에너지로 시선을 사로잡는 스타일이에요. 솔직하고 직구 같은 당돌함이 가장 큰 매력입니다.",
            details2: "원하는 목표가 생기면 망설이지 않고 행동으로 옮기는 직진파로, 당당함과 확실한 소신이 돋보입니다. 직구 같은 솔직함과 넘치는 자신감 덕분에 어떤 무리에서든 단숨에 주도권을 잡는 개척자 타입입니다.",
            Type: "잘맞는 타입 : 지우, 에이나 ",
            video: require("@/assets/videos/IAN.mp4"),
        };
    } else if (totalScore >= 36) {
        result = {
            name: "에이나",
            title: "당신은 마법소녀 '에이나'입니다.",
            description: "톡톡 튀는 감각! 어디서나 빛나는 트렌디 핫걸",
            details: "유쾌한 센스와 남다른 패션·무드 감각으로 주변을 신나게 만드는 에너지왕이에요. 새로운 도전과 기분 전환을 즐길 줄 아는 스타일입니다.",
            details2: "트렌디한 감각과 센스 있는 입담을 겸비하여 어디서나 분위기를 단숨에 끌어올리는 인싸형입니다. 지루한 일상을 싫어해서 새로운 핫플이나 도전거리를 찾아 끊임없이 기분 전환을 즐깁니다.",
            Type: "잘맞는 타입 : 유하, 스텔라 ",
            video: require("@/assets/videos/A_NA.mp4"),
        };
    } else if (totalScore >= 30) {
        result = {
            name: "유하",
            title: "당신은 마법소녀 '유하'입니다.",
            description: "주변까지 해피하게 만드는 인간 비타민!",
            details: "분위기를 부드럽게 풀고 신나는 리액션으로 모두를 웃게 만드는 매력 덩어리예요. 긍정적인 파동과 다정한 밝음을 동시에 지니고 있습니다.",
            details2: "풍부한 리액션과 늘 밝은 에너지로 주변 사람들의 기분까지 환하게 돌려놓는 해피 바이러스입니다. 다정한 친화력과 높은 공감 능력 덕분에 누구와도 금방 친해지며 그룹의 분위기 메이커 역할을 합니다.",
            Type: "잘맞는 타입 : 에이나, 주은",
            video: require("@/assets/videos/YUHA.mp4"),
        };
    } else if (totalScore >= 32) {
        result = {
            name: "스텔라",
            title: "당신은 마법소녀 '스텔라'입니다.",
            description: "알면 알수록 빠져드는 세련된 팔색조 매력",
            details: "감각적이면서도 센스 있게 판을 읽는 개성파예요. 나만의 리듬을 타며 매 순간 스타일리시한 포인트를 만들어낼 줄 압니다.",
            details2: "나만의 확고한 취향과 개성을 지니고 있어 상황에 따라 반전 매력을 다채롭게 보여줍니다. 억지로 자신을 드러내지 않아도 특유의 세련된 아우라와 당찬 매력 덕분에 은근한 존재감을 발휘합니다.",
            Type: "잘맞는 타입 : 카르멘, 에이나",
            video: require("@/assets/videos/STELLA.mp4"),
        };
    } else if (totalScore >= 26) {
        result = {
            name: "카르멘",
            title: "당신은 마법소녀 '카르멘'입니다.",
            description: "몽환적인 분위기 속에 차분한 중심을 지닌 올라운더",
            details: "상대방의 입장을 배려할 줄 아는 다정함과 차분한 지혜를 지녔어요. 튀지 않아도 자연스럽게 사람들을 끌어당기는 포근한 아우라가 있습니다",
            details2: "상대방의 입장을 먼저 배려하는 다정함과 어떤 상황에서도 흔들리지 않는 평정심을 가지고 있습니다. 몽환적이면서도 안정적인 분위기를 선사하여 주변 사람들에게 신뢰와 편안함을 동시에 주는 타입입니다.",
            Type: "잘맞는 타입 : 지우, 예온",
            video: require("@/assets/videos/CARMEN.mp4"),
        };
    } else if (totalScore >= 18) {
        result = {
            name: "지우",
            title: "당신은 마법소녀 '지우'입니다.",
            description: "깊은 속내와 단단한 중심을 지닌 든든한 리더",
            details: "어떤 상황에서도 차분하게 흐름을 정리하고 목표를 향해 한 걸음씩 완벽하게 나아가는 신뢰감 넘치는 스타일이에요.",
            details2: "즉흥적인 선택보다는 차분하게 계획을 세워 목표를 완벽하게 이뤄내는 신중함과 책임감이 깊습니다. 겉으로는 차분하지만 내면이 누구보다 단단하여 결정적인 순간에 강한 리더십을 발휘합니다.",
            Type: "잘맞는 타입 : 이안, 카르멘",
            video: require("@/assets/videos/JIWOO.mp4"),
        };
    } else if (totalScore >= 10) {
        result = {
            name: "예온",
            title: "당신은 마법소녀 '예온'입니다.",
            description: "잔잔함 속에 맑고 단단한 울림을 가진 감성파",
            details: "조용히 내적인 힘을 쌓고, 몽환적이고 서정적인 매력으로 깊은 여운을 남겨요. 곁에 있으면 마음이 편안해지는 보석 같은 타입입니다.",
            details2: "혼자만의 시간 속에서 생각을 깊게 가다듬으며, 맑고 서정적인 감성을 내면에 차곡차곡 쌓아둡니다. 말수가 적더라도 진솔한 언행과 깊이 있는 눈빛으로 사람들의 마음에 오래 남는 여운을 줍니다.",
            Type: "잘맞는 타입 : 카르멘, 주은",
            video: require("@/assets/videos/YEON.mp4"),
        };
    } else {
        result = {
            name: "주은",
            title: "당신은 마법소녀 '주은'입니다",
            description: "보기만 해도 마음이 녹아내리는 순수한 힐링 에너자이저",
            details: "말없이 이야기를 들어주고 세심하게 주변을 챙기는 따뜻한 마음씨의 소유자예요. 나만의 아늑한 공간과 다정한 진심을 가장 소중히 여깁니다.",
            details2: "타인의 말에 귀를 기울이고 작은 변화도 세심하게 챙겨주는 따뜻한 감성의 소유자입니다. 북적거리는 환경보다 아늑한 공간에서 좋아하는 것들을 나누며 소소한 행복을 충전하길 좋아합니다.",
            Type: "잘맞는 타입 : 유하, 예온",
            video: require("@/assets/videos/JUUN.mp4"),
        };
    }

    const Player = useVideoPlayer(result.video, (player) => {
        player.loop = true;
        player.muted = true;
        player.play();
    });

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <VideoView
                style={styles.video}
                player={Player}
                nativeControls={false}
            />
            <ResultTextTitle Body={result.title} />
            <ScrollView
                style={styles.scrollArea}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <View style={styles.warpbottom}>
                    <View style={styles.warptext}>
                        <ResultTextTitle Body={result.description} />
                        <ResultTextBody Body={result.details} />

                        <View style={styles.warpdetail2}>
                            <ResultTextBody2 Body={"'" + result.name + "'" + " 유형의 특징은?"} />
                            <ResultTextBody Body={result.details2} />
                        </View>

                        <ResultTextBody2 Body={result.Type} />
                    </View>
                    <Mybtn title="다시하기" onPress={() => router.push("/start_from")} />
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 80,
        gap: 280,
    },
    warpbottom: {
        alignItems: "center",
        gap: 32,
    },
    warptext: {
        alignItems: "center",
        gap: 12,
    },
    warpdetail2: {
        gap: 8,
    },
    scrollArea: {
        flex: 1, // 남은 화면 영역을 모두 차지하여 스크롤 가능하게 만듦
    },
    scrollContent: {
        paddingVertical: 80,
        paddingHorizontal: 20, // 스크롤 내부 여백 설정
        gap: 36,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});