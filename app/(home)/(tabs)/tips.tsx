import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from "@/components/ui/accordion";
import TabHeader from "@/components/tabHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { Tips as batteryTips } from "@/lib/constants";
import { ScrollView, Text, View } from "react-native";

const Tips = () => {
  return (
    <SafeAreaView>
      <TabHeader title={"Tips"} />
      <ScrollView alwaysBounceVertical={true} scrollToOverflowEnabled>
        <Text className="text-2xl text-center mt-6 font-bold">
          Tips to Improve Battey Life
        </Text>
        <View className="pb-20">
          <Accordion
            variant="filled"
            size="md"
            className="w-[90%] m-5 border border-outline-300"
            type="single"
          >
            {batteryTips.map((item) => (
              <AccordionItem
                value={item.tip}
                key={item.id}
                className="border-b border-outline-300"
              >
                <AccordionHeader className="bg-background-0">
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            {item.id}. {item.tip}
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon
                              as={Entypo}
                              name="chevron-up"
                              size={"xl"}
                              color="black"
                            />
                          ) : (
                            <AccordionIcon
                              as={Entypo}
                              name="chevron-down"
                              size={"xl"}
                              color="black"
                            />
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent className="mt-0 pt-2 bg-background-50">
                  <AccordionContentText>{item.content}</AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tips;
