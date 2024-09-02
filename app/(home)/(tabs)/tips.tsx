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

const Tips = () => {
  return (
    <SafeAreaView>
      <TabHeader title={"Tips"} />
      <Accordion
        variant="filled"
        size="md"
        className="w-[90%] m-5 border border-outline-300"
        type="single"
      >
        <AccordionItem value="a" className="border-b border-outline-300">
          <AccordionHeader className="bg-background-0">
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      Reduce Screen Brightness
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
            <AccordionContentText>
              The type prop determines whether one or multiple items can be
              opened at the same time. The default value is "single" which means
              only one item can be opened at a time.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b" className="border-b border-outline-300">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      Can I disable the whole accordion?
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
            <AccordionContentText>
              Yes, you can disable the whole accordion by setting the isDisabled
              prop to true on the Accordion component.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="c">
          <AccordionHeader className="bg-background-0">
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What is a controlled accordion? How can I make it
                      controlled?
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
            <AccordionContentText>
              Controlled components refer to the components where the state and
              behaviors are controlled by the Parent component. You can make the
              accordion a controlled component by passing the value prop to the
              Accordion component and setting the onValueChange prop to update
              the value prop. Refer to the controlled accordion example in the
              docs.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SafeAreaView>
  );
};

export default Tips;
